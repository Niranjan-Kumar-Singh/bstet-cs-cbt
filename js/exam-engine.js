/**
 * Bihar STET CBT Exam Engine
 * High-performance, robust state machine managing timer, question palette, responses, and persistence.
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
    this.timeSpentPerQ = {}; // qId -> seconds
    this.lastTickTime = null;
    this.onTick = null;
    this.onQuestionChange = null;
    this.onAutoSubmit = null;
  }

  init(paperData, mode = 'cbt', resume = false) {
    this.paper = paperData;
    this.mode = mode;
    this.totalDuration = (this.paper.durationMinutes || 150) * 60;
    
    const saved = resume ? this.loadSession(this.paper.id) : null;
    
    if (saved) {
      this.currentIndex = saved.currentIndex || 0;
      this.responses = saved.responses || {};
      this.statuses = saved.statuses || {};
      this.timeRemaining = saved.timeRemaining !== undefined ? saved.timeRemaining : this.totalDuration;
      this.timeSpentPerQ = saved.timeSpentPerQ || {};
      this.startTime = saved.startTime || Date.now();
    } else {
      this.currentIndex = 0;
      this.responses = {};
      this.statuses = {};
      this.timeSpentPerQ = {};
      this.timeRemaining = this.totalDuration;
      this.startTime = Date.now();
      
      // Initialize all questions as not-visited
      this.paper.questions.forEach((q, idx) => {
        this.statuses[q.id] = idx === 0 ? 'not-answered' : 'not-visited';
        this.timeSpentPerQ[q.id] = 0;
      });
    }

    this.startTimer();
    this.saveSession();
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
        this.timeRemaining = Math.max(0, this.timeRemaining - deltaSeconds);
        
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
    }
    return this.isPaused;
  }

  getCurrentQuestion() {
    if (!this.paper || !this.paper.questions) return null;
    return this.paper.questions[this.currentIndex];
  }

  getCurrentSection() {
    const q = this.getCurrentQuestion();
    if (!q) return null;
    return this.paper.sections.find(s => q.questionNumber >= s.startQ && q.questionNumber <= s.endQ);
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
    const sec = this.paper.sections.find(s => s.id === sectionId);
    if (!sec) return;
    const targetIdx = this.paper.questions.findIndex(q => q.questionNumber === sec.startQ);
    if (targetIdx !== -1) {
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
    const sessionData = {
      paperId: this.paper.id,
      mode: this.mode,
      currentIndex: this.currentIndex,
      responses: this.responses,
      statuses: this.statuses,
      timeRemaining: this.timeRemaining,
      timeSpentPerQ: this.timeSpentPerQ,
      startTime: this.startTime,
      lastUpdated: Date.now()
    };
    try {
      localStorage.setItem(`BSTET_EXAM_SESSION_${this.paper.id}`, JSON.stringify(sessionData));
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
    } catch (e) {}
  }
}

window.ExamEngine = ExamEngine;
