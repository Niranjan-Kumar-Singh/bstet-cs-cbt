/**
 * Bihar STET CBT Exam Engine
 * High-performance, robust state machine managing timer, question palette, responses, persistence,
 * and bilingual language switching with timestamp-derived autosave.
 */

class ExamEngine {
  constructor() {
    this.paper = null;
    this.mode = 'cbt'; // 'cbt' or 'practice'
    this.currentIndex = 0;
    this.responses = {}; // qId -> 'A' | 'B' | 'C' | 'D'
    this.statuses = {};  // qId -> 'not-visited' | 'not-answered' | 'answered' | 'marked' | 'ans-marked'
    this.timeRemaining = 150 * 60; // 150 mins in seconds
    this.totalDuration = 150 * 60;
    this.timerInterval = null;
    this.isPaused = false;
    this.startTime = null;
    this.endTime = null;
    this.timeSpentPerQ = {}; // qId -> seconds
    this.lastTickTime = null;
    this.baseLang = (window.BSTET_I18N && window.BSTET_I18N.currentLang) || localStorage.getItem('BSTET_LANG') || 'en';
    this.lang = this.baseLang; // backward compatibility
    this.questionLangOverrides = {}; // qId -> 'en' | 'hi' | 'both'
    this.onTick = null;
    this.onQuestionChange = null;
    this.onAutoSubmit = null;
  }

  init(paperData, mode = 'cbt', resume = false) {
    this.paper = paperData;
    this.mode = mode;
    this.totalDuration = (this.paper.durationMinutes || 150) * 60;
    this.baseLang = (window.BSTET_I18N && window.BSTET_I18N.currentLang) || localStorage.getItem('BSTET_LANG') || 'en';
    this.lang = this.baseLang;
    this.questionLangOverrides = {};
    
    // Strict normalization: every question must have sequential 1-based questionNumber and unique id
    if (this.paper && Array.isArray(this.paper.questions)) {
      this.paper.questions.forEach((q, idx) => {
        q.questionNumber = idx + 1;
        if (!q.id || String(q.id).trim() === '' || typeof q.id !== 'string') {
          q.id = `${this.paper.id || 'paper'}_q${idx + 1}`;
        }
      });
    }

    // Auto-normalize paper sections startQ and endQ to guarantee consistency
    this.normalizeSections();

    const saved = resume ? this.loadSession(this.paper.id) : null;
    
    if (saved) {
      const savedIdx = saved.currentIndex || 0;
      this.currentIndex = (savedIdx >= 0 && savedIdx < (this.paper.questions ? this.paper.questions.length : 1)) ? savedIdx : 0;
      this.responses = saved.responses || {};
      this.statuses = saved.statuses || {};
      this.timeSpentPerQ = saved.timeSpentPerQ || {};
      this.startTime = saved.startTime || Date.now();
      this.endTime = saved.endTime || (this.startTime + this.totalDuration * 1000);

      // Resilient timestamp-derived remaining time (prevents clock drifting or sleep cheats)
      if (this.mode === 'cbt' && this.endTime) {
        this.timeRemaining = Math.max(0, Math.floor((this.endTime - Date.now()) / 1000));
      } else {
        this.timeRemaining = saved.timeRemaining !== undefined ? saved.timeRemaining : this.totalDuration;
      }

      if (saved.baseLang) this.baseLang = saved.baseLang;
      else if (saved.lang) this.baseLang = saved.lang;
      this.lang = this.baseLang;
      if (saved.questionLangOverrides) this.questionLangOverrides = saved.questionLangOverrides;
    } else {
      this.currentIndex = 0;
      this.responses = {};
      this.statuses = {};
      this.timeSpentPerQ = {};
      this.timeRemaining = this.totalDuration;
      this.startTime = Date.now();
      this.endTime = this.startTime + (this.totalDuration * 1000);
      
      // Initialize all questions as not-visited
      if (this.paper && this.paper.questions) {
        this.paper.questions.forEach((q, idx) => {
          this.statuses[q.id] = idx === 0 ? 'not-answered' : 'not-visited';
          this.timeSpentPerQ[q.id] = 0;
        });
      }
    }

    this.startTimer();
    this.saveSession();
  }

  normalizeSections() {
    if (!this.paper) return;
    const totalQ = (this.paper.questions && this.paper.questions.length) || 0;
    if (!this.paper.sections || this.paper.sections.length === 0) {
      this.paper.sections = [{
        id: "all",
        name: "Computer Science & General",
        startQ: 1,
        endQ: totalQ,
        total: totalQ
      }];
      return;
    }

    let runningStart = 1;
    this.paper.sections.forEach(sec => {
      const count = sec.total || (sec.endQ && sec.startQ ? (sec.endQ - sec.startQ + 1) : 0) || 0;
      sec.startQ = runningStart;
      sec.endQ = runningStart + count - 1;
      sec.total = count;
      runningStart = sec.endQ + 1;
    });

    const lastSec = this.paper.sections[this.paper.sections.length - 1];
    if (lastSec && totalQ > 0) {
      lastSec.endQ = totalQ;
      lastSec.total = (lastSec.endQ - lastSec.startQ) + 1;
    }
  }

  setBaseLanguage(newLang, clearOverrides = true) {
    if (newLang !== 'en' && newLang !== 'hi' && newLang !== 'both') newLang = 'en';
    this.baseLang = newLang;
    this.lang = newLang;
    if (clearOverrides) {
      this.questionLangOverrides = {};
    }
    this.saveSession();
    return this.baseLang;
  }

  setLanguage(newLang) {
    return this.setBaseLanguage(newLang, true);
  }

  setQuestionLanguage(qId, newLang) {
    if (newLang !== 'en' && newLang !== 'hi' && newLang !== 'both') newLang = this.baseLang || 'en';
    if (!this.questionLangOverrides) this.questionLangOverrides = {};
    this.questionLangOverrides[qId] = newLang;
    this.saveSession();
    return newLang;
  }

  getQuestionActiveLang(q) {
    if (!q) return this.baseLang || 'en';
    if (this.questionLangOverrides && this.questionLangOverrides[q.id]) {
      return this.questionLangOverrides[q.id];
    }
    return this.baseLang || 'en';
  }

  getQuestionStatement(q) {
    if (!q) return "";
    const enText = q.question || "";
    const hiText = q.question_hi || "";
    const activeLang = this.getQuestionActiveLang(q);

    if (activeLang === 'hi') {
      return hiText || enText;
    }
    if (activeLang === 'both' && hiText && hiText !== enText) {
      return `<div class="dual-q-container"><div class="dual-en">${enText}</div><div class="dual-hi" style="margin-top:10px;"><span class="dual-tag">हिन्दी:</span> ${hiText}</div></div>`;
    }
    return enText;
  }

  getQuestionOption(q, optKey) {
    if (!q || !q.options) return "";
    const enOpt = q.options[optKey] || "";
    const hiOpt = (q.options_hi && q.options_hi[optKey]) || "";
    const activeLang = this.getQuestionActiveLang(q);

    if (activeLang === 'hi') {
      return hiOpt || enOpt;
    }
    if (activeLang === 'both' && hiOpt && hiOpt !== enOpt) {
      return `<div class="dual-opt-container"><div class="dual-en">${enOpt}</div><div class="dual-hi" style="font-size:0.95em; margin-top:3px;"><span class="dual-tag">हिन्दी:</span> ${hiOpt}</div></div>`;
    }
    return enOpt;
  }

  getQuestionTopic(q) {
    if (!q) return "Computer Science";
    const activeLang = this.getQuestionActiveLang(q);
    if (activeLang === 'hi') {
      if (q.topic_hi) return q.topic_hi;
      if (window.BSTET_I18N) return window.BSTET_I18N.translateTopic(q.topic);
    }
    return q.topic || "Computer Science";
  }

  getQuestionExplanation(q) {
    if (!q) return "";
    const enExp = q.explanation || "";
    const hiExp = q.explanation_hi || "";
    const activeLang = this.getQuestionActiveLang(q);

    if (activeLang === 'hi') {
      return hiExp || enExp;
    }
    if (activeLang === 'both' && hiExp && hiExp !== enExp) {
      return `<div class="dual-explanation-en">${enExp}</div><div class="dual-question-hi" style="margin-top:8px;"><span class="dual-tag">हिन्दी व्याख्या:</span> ${hiExp}</div>`;
    }
    return enExp;
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.mode === 'practice') return; // Untimed practice mode

    this.lastTickTime = Date.now();
    this.timerInterval = setInterval(() => {
      if (this.isPaused) return;

      const now = Date.now();
      const deltaSeconds = Math.round((now - this.lastTickTime) / 1000);
      if (deltaSeconds >= 1) {
        this.lastTickTime = now;
        
        // Use timestamp-derived remaining time if available
        if (this.endTime) {
          this.timeRemaining = Math.max(0, Math.floor((this.endTime - now) / 1000));
        } else {
          this.timeRemaining = Math.max(0, this.timeRemaining - deltaSeconds);
        }
        
        // Track time spent on current question
        const currQ = this.getCurrentQuestion();
        if (currQ) {
          this.timeSpentPerQ[currQ.id] = (this.timeSpentPerQ[currQ.id] || 0) + deltaSeconds;
        }

        if (this.onTick) this.onTick(this.timeRemaining);

        if (this.timeRemaining <= 0) {
          this.stopTimer();
          if (this.onAutoSubmit) this.onAutoSubmit();
        }
        
        // Periodic autosave every 5 seconds
        if (this.timeRemaining % 5 === 0) {
          this.saveSession();
        }
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    if (!this.isPaused) {
      this.lastTickTime = Date.now();
      // Recalculate endTime on unpause
      this.endTime = Date.now() + (this.timeRemaining * 1000);
    }
    return this.isPaused;
  }

  getCurrentQuestion() {
    if (!this.paper || !this.paper.questions) return null;
    return this.paper.questions[this.currentIndex];
  }

  getCurrentSection() {
    if (!this.paper || !this.paper.sections || this.paper.sections.length === 0) return null;
    const qNum = this.currentIndex + 1;
    return this.paper.sections.find(s => qNum >= s.startQ && qNum <= s.endQ) || this.paper.sections[0];
  }

  selectOption(optKey) {
    const q = this.getCurrentQuestion();
    if (!q) return;

    this.responses[q.id] = optKey;
    if (this.statuses[q.id] === 'marked' || this.statuses[q.id] === 'ans-marked') {
      this.statuses[q.id] = 'ans-marked';
    } else {
      this.statuses[q.id] = 'answered';
    }
    this.saveSession();
  }

  clearResponse() {
    const q = this.getCurrentQuestion();
    if (!q) return;

    delete this.responses[q.id];
    this.statuses[q.id] = 'not-answered';
    this.saveSession();
  }

  markForReview() {
    const q = this.getCurrentQuestion();
    if (!q) return;

    if (this.responses[q.id]) {
      this.statuses[q.id] = 'ans-marked';
    } else {
      this.statuses[q.id] = 'marked';
    }
    this.saveSession();
    this.nextQuestion();
  }

  saveAndNext() {
    const q = this.getCurrentQuestion();
    if (!q) return;

    if (this.responses[q.id]) {
      if (this.statuses[q.id] !== 'ans-marked') {
        this.statuses[q.id] = 'answered';
      }
    } else {
      if (this.statuses[q.id] !== 'marked') {
        this.statuses[q.id] = 'not-answered';
      }
    }
    this.saveSession();
    this.nextQuestion();
  }

  nextQuestion() {
    if (this.currentIndex < this.paper.questions.length - 1) {
      this.jumpToQuestion(this.currentIndex + 1);
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.jumpToQuestion(this.currentIndex - 1);
    }
  }

  jumpToQuestion(targetIndex) {
    if (targetIndex < 0 || targetIndex >= this.paper.questions.length) return;

    this.currentIndex = targetIndex;
    const q = this.getCurrentQuestion();
    
    // If target question was not-visited, mark as not-answered
    if (this.statuses[q.id] === 'not-visited') {
      this.statuses[q.id] = 'not-answered';
    }

    this.saveSession();
    if (this.onQuestionChange) this.onQuestionChange(q, this.currentIndex);
  }

  jumpToSection(sectionId) {
    if (!this.paper || !this.paper.sections || !this.paper.questions) return;
    const sec = this.paper.sections.find(s => s.id === sectionId);
    if (!sec) return;
    const targetIdx = Math.max(0, (sec.startQ || 1) - 1);
    if (targetIdx < this.paper.questions.length) {
      this.jumpToQuestion(targetIdx);
    }
  }

  getSummaryCounts() {
    let answered = 0;
    let notAnswered = 0;
    let notVisited = 0;
    let marked = 0;
    let ansMarked = 0;

    this.paper.questions.forEach(q => {
      const status = this.statuses[q.id] || 'not-visited';
      if (status === 'answered') answered++;
      else if (status === 'not-answered') notAnswered++;
      else if (status === 'not-visited') notVisited++;
      else if (status === 'marked') marked++;
      else if (status === 'ans-marked') ansMarked++;
    });

    return {
      total: this.paper.questions.length,
      answered,
      notAnswered,
      notVisited,
      marked,
      ansMarked,
      totalAnswered: answered + ansMarked
    };
  }

  saveSession() {
    if (!this.paper) return;
    const now = Date.now();
    const endTime = this.endTime || (this.startTime + this.totalDuration * 1000);
    const sessionData = {
      paperId: this.paper.id,
      paperTitle: this.paper.title,
      mode: this.mode,
      currentIndex: this.currentIndex,
      responses: this.responses,
      statuses: this.statuses,
      timeRemaining: this.timeRemaining,
      timeSpentPerQ: this.timeSpentPerQ,
      startTime: this.startTime,
      endTime: endTime,
      totalDuration: this.totalDuration,
      baseLang: this.baseLang,
      lang: this.baseLang,
      questionLangOverrides: this.questionLangOverrides,
      lastUpdated: now
    };
    try {
      localStorage.setItem(`BSTET_EXAM_SESSION_${this.paper.id}`, JSON.stringify(sessionData));
      localStorage.setItem('BSTET_ACTIVE_ATTEMPT', JSON.stringify(sessionData));
    } catch (e) {
      console.warn("Could not save exam session to localStorage", e);
    }
  }

  loadSession(paperId) {
    try {
      const raw = localStorage.getItem(`BSTET_EXAM_SESSION_${paperId}`);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  clearSession() {
    if (!this.paper) return;
    this.stopTimer();
    try {
      localStorage.removeItem(`BSTET_EXAM_SESSION_${this.paper.id}`);
      localStorage.removeItem('BSTET_ACTIVE_ATTEMPT');
    } catch (e) {}
  }

  toggleBookmark(qId) {
    try {
      const raw = localStorage.getItem('BSTET_BOOKMARKS');
      let bookmarks = raw ? JSON.parse(raw) : [];
      const idx = bookmarks.indexOf(qId);
      if (idx > -1) {
        bookmarks.splice(idx, 1);
      } else {
        bookmarks.push(qId);
      }
      localStorage.setItem('BSTET_BOOKMARKS', JSON.stringify(bookmarks));
      return bookmarks.includes(qId);
    } catch (e) {
      return false;
    }
  }

  isBookmarked(qId) {
    try {
      const raw = localStorage.getItem('BSTET_BOOKMARKS');
      const bookmarks = raw ? JSON.parse(raw) : [];
      return bookmarks.includes(qId);
    } catch (e) {
      return false;
    }
  }
}

window.ExamEngine = ExamEngine;
