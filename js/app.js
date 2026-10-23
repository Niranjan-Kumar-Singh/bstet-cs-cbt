/**
 * Bihar STET CBT Portal - Main Application Controller
 * High-performance, production-grade exam controller with full bilingual support,
 * authentic CBT simulation, circular gauge performance scorecards, and topic diagnostic matrices.
 */

class App {
  constructor() {
    this.engine = new ExamEngine();
    this.currentPaper = null;
    this.currentFilter = 'all';
    this.fontSizeLevel = 1; // 0: small, 1: normal, 2: large
    this.lastAnalyticsReport = null;
    this.solFilter = 'all';
    this.solTopicFilter = 'all';
    this.solLang = (window.BSTET_I18N && window.BSTET_I18N.currentLang) || 'en';

    this.initElements();
    this.bindEvents();
    this.initTheme();
    this.initLanguage();
    this.renderLobby();
  }

  initElements() {
    // Views
    this.lobbyView = document.getElementById('lobby-view');
    this.examView = document.getElementById('exam-view');
    this.resultView = document.getElementById('result-view');

    // Lobby Elements
    this.papersGrid = document.getElementById('papers-grid');
    this.filterTabs = document.querySelectorAll('.filter-tab');
    this.historyTableBody = document.getElementById('history-table-body');

    // Language Toggles
    this.langToggleBtn = document.getElementById('lang-toggle-btn');
    this.langToggleText = document.getElementById('lang-toggle-text');
    this.examLangToggleBtn = document.getElementById('exam-lang-toggle-btn');
    this.examLangText = document.getElementById('exam-lang-text');
    this.btnLangEn = document.getElementById('btn-lang-en');
    this.btnLangHi = document.getElementById('btn-lang-hi');
    this.btnLangBoth = document.getElementById('btn-lang-both');
    this.solLangToggleBtn = document.getElementById('sol-lang-toggle-btn');
    this.solLangText = document.getElementById('sol-lang-text');

    // Mode Selection Modal
    this.modeModal = document.getElementById('mode-modal');
    this.modalPaperTitle = document.getElementById('modal-paper-title');
    this.modalPaperDesc = document.getElementById('modal-paper-desc');
    this.startExamBtn = document.getElementById('start-exam-btn');
    this.cancelModeBtn = document.getElementById('cancel-mode-btn');
    this.modeOptions = document.querySelectorAll('.mode-option');

    // Exam View Elements
    this.examTitle = document.getElementById('exam-title-text');
    this.timerDisplay = document.getElementById('timer-display');
    this.timerBox = document.getElementById('timer-box');
    this.sectionsTabsContainer = document.getElementById('sections-tabs-container');
    this.qNumberText = document.getElementById('q-number-text');
    this.qTopicTag = document.getElementById('q-topic-tag');
    this.qStatement = document.getElementById('q-statement');
    this.optionsContainer = document.getElementById('options-container');
    this.paletteGrid = document.getElementById('palette-grid');
    this.palettePane = document.getElementById('palette-pane');
    this.paletteBackdrop = document.getElementById('palette-backdrop');
    
    // Practice Mode Box
    this.practiceBox = document.getElementById('practice-explanation-box');
    this.practiceContent = document.getElementById('practice-explanation-content');
    this.revealExplanationBtn = document.getElementById('reveal-explanation-btn');

    // Legend Counts
    this.legendAnswered = document.getElementById('legend-answered');
    this.legendNotAnswered = document.getElementById('legend-not-answered');
    this.legendNotVisited = document.getElementById('legend-not-visited');
    this.legendMarked = document.getElementById('legend-marked');
    this.legendAnsMarked = document.getElementById('legend-ans-marked');

    // Controls
    this.prevBtn = document.getElementById('prev-btn');
    this.nextBtn = document.getElementById('next-btn');
    this.clearBtn = document.getElementById('clear-btn');
    this.markReviewBtn = document.getElementById('mark-review-btn');
    this.saveNextBtn = document.getElementById('save-next-btn');
    this.submitExamBtn = document.getElementById('submit-exam-btn');
    this.mobilePaletteToggle = document.getElementById('mobile-palette-toggle');

    // Submit Confirmation Modal
    this.submitModal = document.getElementById('submit-modal');
    this.confirmSubmitBtn = document.getElementById('confirm-submit-btn');
    this.cancelSubmitBtn = document.getElementById('cancel-submit-btn');
    this.submitSummaryTotal = document.getElementById('submit-sum-total');
    this.submitSummaryAnswered = document.getElementById('submit-sum-answered');
    this.submitSummaryUnanswered = document.getElementById('submit-sum-unanswered');
    this.submitSummaryMarked = document.getElementById('submit-sum-marked');

    // Question Paper Preview Modal
    this.qpModal = document.getElementById('qp-modal');
    this.qpModalBody = document.getElementById('qp-modal-body');
    this.closeQpModalBtn = document.getElementById('close-qp-modal-btn');
    this.viewQpBtn = document.getElementById('view-qp-btn');

    // Top Controls
    this.themeToggleBtn = document.getElementById('theme-toggle-btn');
    this.fullscreenBtn = document.getElementById('fullscreen-btn');
    this.fontSmallerBtn = document.getElementById('font-smaller-btn');
    this.fontLargerBtn = document.getElementById('font-larger-btn');
    this.pauseBtn = document.getElementById('pause-btn');

    // Exam In-Header Quick Utilities
    this.examThemeToggleBtn = document.getElementById('exam-theme-toggle-btn');
    this.examFullscreenBtn = document.getElementById('exam-fullscreen-btn');

    // Pause Modal
    this.pauseModal = document.getElementById('pause-modal');
    this.resumeExamModalBtn = document.getElementById('resume-exam-modal-btn');

    // Result View Elements
    this.resPaperTitle = document.getElementById('res-paper-title');
    this.resScore = document.getElementById('res-score');
    this.resMaxScore = document.getElementById('res-max-score');
    this.resVerdictBadge = document.getElementById('res-verdict-badge');
    this.gaugeScoreFill = document.getElementById('gauge-score-fill');
    this.gaugeAccuracyFill = document.getElementById('gauge-accuracy-fill');
    this.resPercentage = document.getElementById('res-percentage');
    this.resAccuracy = document.getElementById('res-accuracy');
    this.resPaceValue = document.getElementById('res-pace-value');
    this.resPaceIcon = document.getElementById('res-pace-icon');
    this.resPercentile = document.getElementById('res-percentile');

    this.cutoffTableBody = document.getElementById('cutoff-table-body');
    this.resSectionsBreakdown = document.getElementById('res-sections-breakdown');
    this.diagStrongItems = document.getElementById('diag-strong-items');
    this.diagModItems = document.getElementById('diag-mod-items');
    this.diagWeakItems = document.getElementById('diag-weak-items');

    this.solutionsList = document.getElementById('solutions-list');
    this.solFilterBtns = document.querySelectorAll('.sol-filter-btn');
    this.solTopicSelect = document.getElementById('sol-topic-select');
    this.retakeExamBtn = document.getElementById('retake-exam-btn');
    this.backToLobbyBtn = document.getElementById('back-to-lobby-btn');
    this.printScorecardBtn = document.getElementById('print-scorecard-btn');
    this.shareScorecardBtn = document.getElementById('share-scorecard-btn');
  }

  bindEvents() {
    // Filter Tabs in Lobby
    this.filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.currentFilter = tab.dataset.filter;
        this.renderLobby();
      });
    });

    // Language Toggles
    if (this.langToggleBtn) {
      this.langToggleBtn.addEventListener('click', () => this.toggleAppLanguage());
    }
    if (this.examLangToggleBtn) {
      this.examLangToggleBtn.addEventListener('click', () => this.toggleQuestionLanguage());
    }
    if (this.btnLangEn) {
      this.btnLangEn.addEventListener('click', () => this.setQuestionLanguage('en'));
    }
    if (this.btnLangHi) {
      this.btnLangHi.addEventListener('click', () => this.setQuestionLanguage('hi'));
    }
    if (this.btnLangBoth) {
      this.btnLangBoth.addEventListener('click', () => this.setQuestionLanguage('both'));
    }
    if (this.solLangToggleBtn) {
      this.solLangToggleBtn.addEventListener('click', () => {
        this.solLang = this.solLang === 'en' ? 'hi' : 'en';
        if (this.solLangText) {
          this.solLangText.innerText = this.solLang === 'en' ? 'हिन्दी में व्याख्या' : 'View in English';
        }
        this.renderSolutions();
      });
    }

    // Theme Toggle (Navbar + Exam Header)
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    }
    if (this.examThemeToggleBtn) {
      this.examThemeToggleBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Font Sizing
    if (this.fontSmallerBtn) {
      this.fontSmallerBtn.addEventListener('click', () => this.changeFontSize(-1));
    }
    if (this.fontLargerBtn) {
      this.fontLargerBtn.addEventListener('click', () => this.changeFontSize(1));
    }

    // Fullscreen
    if (this.fullscreenBtn) {
      this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    }
    if (this.examFullscreenBtn) {
      this.examFullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    }

    // Exam Pause / Resume
    if (this.pauseBtn) {
      this.pauseBtn.addEventListener('click', () => {
        const isPaused = this.engine.togglePause();
        this.updatePauseState(isPaused);
      });
    }
    if (this.resumeExamModalBtn) {
      this.resumeExamModalBtn.addEventListener('click', () => {
        const isPaused = this.engine.togglePause();
        this.updatePauseState(isPaused);
      });
    }

    // Mobile Palette Drawer
    if (this.mobilePaletteToggle) {
      this.mobilePaletteToggle.addEventListener('click', () => {
        this.palettePane.classList.add('open');
        this.paletteBackdrop.classList.add('active');
      });
    }

    const mobileClosePaletteBtn = document.getElementById('mobile-close-palette-btn');
    if (mobileClosePaletteBtn) {
      mobileClosePaletteBtn.addEventListener('click', () => {
        this.palettePane.classList.remove('open');
        this.paletteBackdrop.classList.remove('active');
      });
    }

    if (this.paletteBackdrop) {
      this.paletteBackdrop.addEventListener('click', () => {
        this.palettePane.classList.remove('open');
        this.paletteBackdrop.classList.remove('active');
      });
    }

    // Exam Nav Controls
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.engine.prevQuestion());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.engine.nextQuestion());
    }
    if (this.clearBtn) {
      this.clearBtn.addEventListener('click', () => {
        this.engine.clearResponse();
        this.renderQuestionView();
        this.renderPalette();
      });
    }
    if (this.markReviewBtn) {
      this.markReviewBtn.addEventListener('click', () => this.engine.markForReview());
    }
    if (this.saveNextBtn) {
      this.saveNextBtn.addEventListener('click', () => this.engine.saveAndNext());
    }
    if (this.submitExamBtn) {
      this.submitExamBtn.addEventListener('click', () => this.openSubmitModal());
    }

    // Mode Modal Actions
    if (this.cancelModeBtn) {
      this.cancelModeBtn.addEventListener('click', () => {
        this.modeModal.classList.remove('active');
      });
    }
    if (this.startExamBtn) {
      this.startExamBtn.addEventListener('click', () => this.onStartExamConfirmed());
    }

    this.modeOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        this.modeOptions.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        const radio = opt.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });

    // Submit Modal Actions
    if (this.cancelSubmitBtn) {
      this.cancelSubmitBtn.addEventListener('click', () => {
        this.submitModal.classList.remove('active');
      });
    }
    if (this.confirmSubmitBtn) {
      this.confirmSubmitBtn.addEventListener('click', () => {
        this.submitModal.classList.remove('active');
        this.finishAndEvaluateExam();
      });
    }

    // Clear History Button
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    if (clearHistoryBtn) {
      clearHistoryBtn.addEventListener('click', () => {
        const confirmMsg = (window.BSTET_I18N && window.BSTET_I18N.currentLang === 'hi')
          ? 'क्या आप वाकई अपना टेस्ट इतिहास साफ़ करना चाहते हैं?'
          : 'Are you sure you want to clear your test attempt history?';
        if (confirm(confirmMsg)) {
          ExamAnalytics.clearHistory();
          this.renderHistory();
        }
      });
    }

    // Question Paper Preview Modal
    if (this.viewQpBtn) {
      this.viewQpBtn.addEventListener('click', () => this.openQuestionPaperModal());
    }
    if (this.closeQpModalBtn) {
      this.closeQpModalBtn.addEventListener('click', () => this.qpModal.classList.remove('active'));
    }

    // Practice Mode Reveal Explanation
    if (this.revealExplanationBtn) {
      this.revealExplanationBtn.addEventListener('click', () => {
        const q = this.engine.getCurrentQuestion();
        if (q) {
          const expl = this.engine.getQuestionExplanation(q);
          this.practiceContent.innerHTML = expl.replace(/\n/g, '<br>');
          this.practiceBox.classList.toggle('active');
        }
      });
    }

    // Solutions Filter Buttons
    this.solFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.solFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.solFilter = btn.dataset.solFilter;
        this.renderSolutions();
      });
    });

    // Solutions Topic Select Filter
    if (this.solTopicSelect) {
      this.solTopicSelect.addEventListener('change', () => {
        this.solTopicFilter = this.solTopicSelect.value;
        this.renderSolutions();
      });
    }

    // Scorecard Action Buttons
    if (this.retakeExamBtn) {
      this.retakeExamBtn.addEventListener('click', () => {
        if (this.currentPaper) {
          this.launchPaper(this.currentPaper, this.engine.mode || 'cbt');
        }
      });
    }
    if (this.backToLobbyBtn) {
      this.backToLobbyBtn.addEventListener('click', () => this.showLobbyView());
    }

    // Print Scorecard
    if (this.printScorecardBtn) {
      this.printScorecardBtn.addEventListener('click', () => window.print());
    }

    // Share Scorecard Summary
    if (this.shareScorecardBtn) {
      this.shareScorecardBtn.addEventListener('click', () => this.shareScorecard());
    }

    // Engine Callbacks
    this.engine.onTick = (secs) => this.updateTimerDisplay(secs);
    this.engine.onQuestionChange = (q, idx) => {
      this.renderQuestionView();
      this.renderPalette();
    };
    this.engine.onAutoSubmit = () => {
      const timeUpMsg = (window.BSTET_I18N && window.BSTET_I18N.currentLang === 'hi')
        ? 'समय समाप्त! आपकी परीक्षा स्वतः जमा की जा रही है।'
        : 'Time is up! Your exam is being submitted automatically.';
      alert(timeUpMsg);
      this.finishAndEvaluateExam();
    };

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (!this.examView.classList.contains('active')) return;
      if (['input', 'textarea', 'select'].includes(document.activeElement.tagName.toLowerCase())) return;

      if (['1', 'a', 'A'].includes(e.key)) this.handleOptionKey('A');
      else if (['2', 'b', 'B'].includes(e.key)) this.handleOptionKey('B');
      else if (['3', 'c', 'C'].includes(e.key)) this.handleOptionKey('C');
      else if (['4', 'd', 'D'].includes(e.key)) this.handleOptionKey('D');
      else if (e.key === 'n' || e.key === 'N') this.engine.saveAndNext();
      else if (e.key === 'p' || e.key === 'P') this.engine.prevQuestion();
      else if (e.key === 'm' || e.key === 'M') this.engine.markForReview();
      else if (e.key === 'l' || e.key === 'L' || e.key === 'h' || e.key === 'H') this.toggleQuestionLanguage();
    });
  }

  /* ================= IN-EXAM QUESTION LANGUAGE SWITCHER ================= */
  setQuestionLanguage(lang) {
    this.engine.setLanguage(lang);
    this.updateExamLanguageControls();
    this.renderQuestionView();
  }

  toggleQuestionLanguage() {
    this.engine.toggleLanguage();
    this.updateExamLanguageControls();
    this.renderQuestionView();
  }

  updateExamLanguageControls() {
    const current = this.engine.lang || 'en';
    if (this.btnLangEn) this.btnLangEn.classList.toggle('active', current === 'en');
    if (this.btnLangHi) this.btnLangHi.classList.toggle('active', current === 'hi');
    if (this.btnLangBoth) this.btnLangBoth.classList.toggle('active', current === 'both');

    if (this.examLangText) {
      if (current === 'hi' || current === 'both') {
        this.examLangText.innerText = 'Switch to English';
      } else {
        this.examLangText.innerText = 'Switch to हिन्दी';
      }
    }
  }

  /* ================= LANGUAGE (i18n) ENGINE ================= */
  initLanguage() {
    const saved = localStorage.getItem('BSTET_LANG') || 'en';
    if (window.BSTET_I18N) window.BSTET_I18N.setLang(saved);
    this.applyLanguage(saved);
  }

  toggleAppLanguage() {
    const nextLang = window.BSTET_I18N ? window.BSTET_I18N.toggleLang() : 'en';
    this.applyLanguage(nextLang);
  }

  setAppLanguage(lang) {
    if (window.BSTET_I18N) window.BSTET_I18N.setLang(lang);
    this.applyLanguage(lang);
  }

  applyLanguage(lang) {
    const i18n = window.BSTET_I18N;
    if (!i18n) return;

    this.engine.setLanguage(lang);
    this.updateExamLanguageControls();

    // Update Language Toggle Buttons text
    const otherLangName = lang === 'en' ? 'हिन्दी' : 'English';
    if (this.langToggleText) this.langToggleText.innerText = otherLangName;

    // Navbar Brand
    const navTitle = document.getElementById('nav-brand-title');
    const navSub = document.getElementById('nav-brand-subtitle');
    if (navTitle) navTitle.innerText = i18n.t('portal_title');
    if (navSub) navSub.innerText = i18n.t('portal_tagline');

    // Hero Section
    const heroMission = document.getElementById('hero-mission-pill');
    const heroQuote = document.getElementById('hero-quote');
    const heroHeading = document.getElementById('hero-heading');
    const heroDesc = document.getElementById('hero-desc');
    if (heroMission) heroMission.innerText = i18n.t('mission_pill');
    if (heroQuote) heroQuote.innerText = i18n.t('motivational_quote');
    if (heroHeading) heroHeading.innerText = i18n.t('hero_title');
    if (heroDesc) heroDesc.innerText = i18n.t('hero_subtitle');

    // Meta Grid
    const metaSubj = document.getElementById('meta-subj-title');
    const metaSubjVal = document.getElementById('meta-subj-val');
    const metaPed = document.getElementById('meta-pedagogy-title');
    const metaPedVal = document.getElementById('meta-pedagogy-val');
    const metaSkills = document.getElementById('meta-skills-title');
    const metaSkillsVal = document.getElementById('meta-skills-val');
    const metaDur = document.getElementById('meta-dur-title');
    const metaDurVal = document.getElementById('meta-dur-val');
    const metaCut = document.getElementById('meta-cut-title');
    const metaCutVal = document.getElementById('meta-cut-val');

    if (metaSubj) metaSubj.innerText = i18n.t('meta_subject');
    if (metaSubjVal) metaSubjVal.innerText = i18n.t('meta_subject_val');
    if (metaPed) metaPed.innerText = i18n.t('meta_pedagogy');
    if (metaPedVal) metaPedVal.innerText = i18n.t('meta_pedagogy_val');
    if (metaSkills) metaSkills.innerText = i18n.t('meta_skills');
    if (metaSkillsVal) metaSkillsVal.innerText = i18n.t('meta_skills_val');
    if (metaDur) metaDur.innerText = i18n.t('meta_duration');
    if (metaDurVal) metaDurVal.innerText = i18n.t('meta_duration_val');
    if (metaCut) metaCut.innerText = i18n.t('meta_cutoff');
    if (metaCutVal) metaCutVal.innerText = i18n.t('meta_cutoff_val');

    // Filter Tabs
    const tabAll = document.getElementById('tab-filter-all');
    const tabOff = document.getElementById('tab-filter-official');
    const tabPred = document.getElementById('tab-filter-predicted');
    const tabDrill = document.getElementById('tab-filter-drill');
    if (tabAll) tabAll.innerText = i18n.t('filter_all');
    if (tabOff) tabOff.innerText = i18n.t('filter_official');
    if (tabPred) tabPred.innerText = i18n.t('filter_predicted');
    if (tabDrill) tabDrill.innerText = i18n.t('filter_drill');

    // History Table Headers
    const histHead = document.getElementById('history-heading');
    const histSub = document.getElementById('history-subtext');
    if (histHead) histHead.innerText = i18n.t('my_history');
    if (histSub) histSub.innerHTML = i18n.t('history_desc');
    const thPaper = document.getElementById('th-paper');
    const thDate = document.getElementById('th-date');
    const thScore = document.getElementById('th-score');
    const thAcc = document.getElementById('th-accuracy');
    const thStat = document.getElementById('th-status');
    const thAct = document.getElementById('th-action');
    if (thPaper) thPaper.innerText = i18n.t('table_paper');
    if (thDate) thDate.innerText = i18n.t('table_date');
    if (thScore) thScore.innerText = i18n.t('table_score');
    if (thAcc) thAcc.innerText = i18n.t('table_accuracy');
    if (thStat) thStat.innerText = i18n.t('table_status');
    if (thAct) thAct.innerText = i18n.t('table_action');

    // Exam Controls
    if (this.prevBtn) this.prevBtn.innerText = i18n.t('btn_prev');
    if (this.nextBtn) this.nextBtn.innerText = i18n.t('btn_next');
    if (this.clearBtn) this.clearBtn.innerText = i18n.t('btn_clear');
    if (this.markReviewBtn) this.markReviewBtn.innerText = i18n.t('btn_mark_review');
    if (this.saveNextBtn) this.saveNextBtn.innerText = i18n.t('btn_save_next');
    if (this.submitExamBtn) this.submitExamBtn.innerText = i18n.t('btn_submit');

    // Legends
    const legAns = document.getElementById('leg-text-answered');
    const legNotAns = document.getElementById('leg-text-not-answered');
    const legNotVis = document.getElementById('leg-text-not-visited');
    const legMarked = document.getElementById('leg-text-marked');
    const legAnsMarked = document.getElementById('leg-text-ans-marked');
    if (legAns) legAns.innerText = i18n.t('legend_answered');
    if (legNotAns) legNotAns.innerText = i18n.t('legend_not_answered');
    if (legNotVis) legNotVis.innerText = i18n.t('legend_not_visited');
    if (legMarked) legMarked.innerText = i18n.t('legend_marked');
    if (legAnsMarked) legAnsMarked.innerText = i18n.t('legend_ans_marked');

    // Re-render current active view components
    if (this.lobbyView.classList.contains('active')) {
      this.renderLobby();
      this.renderHistory();
    } else if (this.examView.classList.contains('active')) {
      this.renderSectionTabs();
      this.renderQuestionView();
      this.renderPalette();
    } else if (this.resultView.classList.contains('active') && this.lastAnalyticsReport) {
      this.showResultView(this.lastAnalyticsReport);
    }
  }

  /* ================= THEME & DISPLAY ================= */
  initTheme() {
    const saved = localStorage.getItem('BSTET_THEME') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    this.updateThemeButton(saved);
  }

  toggleTheme() {
    const curr = document.documentElement.getAttribute('data-theme') || 'light';
    const next = curr === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('BSTET_THEME', next);
    this.updateThemeButton(next);
  }

  updateThemeButton(theme) {
    const isDark = theme === 'dark';
    const text = isDark ? '☀️ Light' : '🌙 Dark';
    const icon = isDark ? '☀️' : '🌙';
    if (this.themeToggleBtn) this.themeToggleBtn.innerHTML = text;
    if (this.examThemeToggleBtn) this.examThemeToggleBtn.innerHTML = icon;
  }

  changeFontSize(delta) {
    this.fontSizeLevel = Math.max(0, Math.min(2, this.fontSizeLevel + delta));
    const sizes = ['15px', '17px', '20px'];
    if (this.qStatement) {
      this.qStatement.style.fontSize = sizes[this.fontSizeLevel];
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      if (this.fullscreenBtn) this.fullscreenBtn.innerText = '⤓ Exit Fullscreen';
      if (this.examFullscreenBtn) this.examFullscreenBtn.innerText = '⤓';
    } else {
      document.exitFullscreen().catch(() => {});
      if (this.fullscreenBtn) this.fullscreenBtn.innerText = '⛶ Fullscreen';
      if (this.examFullscreenBtn) this.examFullscreenBtn.innerText = '⛶';
    }
  }

  updatePauseState(isPaused) {
    const i18n = window.BSTET_I18N;
    const icon = isPaused ? '▶' : '⏸';
    const label = isPaused ? (i18n ? i18n.t('resume') : 'Resume') : (i18n ? i18n.t('pause') : 'Pause');
    if (this.pauseBtn) {
      this.pauseBtn.innerHTML = `<span class="btn-icon">${icon}</span> <span class="btn-text">${label}</span>`;
    }
    if (this.pauseModal) {
      if (isPaused) {
        this.pauseModal.classList.add('active');
      } else {
        this.pauseModal.classList.remove('active');
      }
    }
  }

  /* ================= LOBBY RENDERING ================= */
  renderLobby() {
    this.papersGrid.innerHTML = '';
    const catalog = window.PAPERS_CATALOG || [];
    const i18n = window.BSTET_I18N;

    const filtered = catalog.filter(p => {
      if (this.currentFilter === 'all') return true;
      if (this.currentFilter === 'official') return p.category === 'Official PYQ';
      if (this.currentFilter === 'predicted') return p.category === 'Predicted Mock';
      if (this.currentFilter === 'drill') return p.category === 'Sectional Drill';
      return true;
    });

    filtered.forEach(paper => {
      const card = document.createElement('div');
      card.className = 'paper-card';
      const cbtLabel = i18n ? i18n.t('start_cbt') : '⚡ Start CBT Mock';
      const practiceLabel = i18n ? i18n.t('practice_mode') : '📖 Practice Mode';
      const qLabel = i18n ? i18n.t('questions_label') : 'Questions';
      const mLabel = i18n ? i18n.t('marks_label') : 'Total Marks';
      const dLabel = i18n ? i18n.t('duration_label') : 'Duration';
      const minsWord = i18n ? i18n.t('mins') : 'Mins';

      card.innerHTML = `
        <div>
          <div class="paper-header">
            <span class="badge ${paper.badgeClass}">${paper.badge}</span>
            <span style="font-size: 12px; font-weight: 600; color: var(--text-muted);">${paper.difficulty}</span>
          </div>
          <h3 class="paper-title">${paper.title}</h3>
          <p class="paper-subtitle">${paper.subtitle}</p>
          <div class="paper-stats-list">
            <div class="stat-item">
              <span class="label">${qLabel}</span>
              <span class="val">${paper.totalQuestions} Qs</span>
            </div>
            <div class="stat-item">
              <span class="label">${mLabel}</span>
              <span class="val">${paper.totalMarks}</span>
            </div>
            <div class="stat-item">
              <span class="label">${dLabel}</span>
              <span class="val">${paper.durationMinutes} ${minsWord}</span>
            </div>
          </div>
        </div>
        <div class="paper-card-actions">
          <button class="btn btn-primary" data-action="cbt" data-id="${paper.id}">
            ${cbtLabel}
          </button>
          <button class="btn btn-outline" data-action="practice" data-id="${paper.id}">
            ${practiceLabel}
          </button>
        </div>
      `;

      card.querySelector('[data-action="cbt"]').addEventListener('click', () => {
        this.openModeModal(paper, 'cbt');
      });
      card.querySelector('[data-action="practice"]').addEventListener('click', () => {
        this.openModeModal(paper, 'practice');
      });

      this.papersGrid.appendChild(card);
    });

    this.renderHistory();
  }

  renderHistory() {
    this.historyTableBody.innerHTML = '';
    const history = ExamAnalytics.getHistory();
    const i18n = window.BSTET_I18N;

    if (history.length === 0) {
      const emptyMsg = i18n ? i18n.t('no_history') : 'No test attempts recorded yet. Launch a mock test above to see your analytics!';
      this.historyTableBody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">
            ${emptyMsg}
          </td>
        </tr>
      `;
      return;
    }

    history.forEach(item => {
      const row = document.createElement('tr');
      const dateStr = new Date(item.timestamp).toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short'
      });
      const isQualified = item.isQualified;
      const statusHtml = isQualified 
        ? '<span class="status-badge-qual">🎉 Qualified</span>' 
        : '<span class="status-badge-miss">⚠️ Needs Prep</span>';

      row.innerHTML = `
        <td><strong>${item.paperTitle}</strong></td>
        <td style="color: var(--text-secondary); font-size: 13px;">${dateStr}</td>
        <td><strong style="color: var(--primary);">${item.score} / ${item.maxMarks}</strong> (${item.percentage}%)</td>
        <td><strong>${item.accuracy}%</strong></td>
        <td>${statusHtml}</td>
        <td>
          <button class="btn btn-secondary" style="font-size: 12px; padding: 5px 10px;" data-review-id="${item.id}">
            📖 ${i18n ? i18n.t('review_solutions') : 'Review Solutions'}
          </button>
        </td>
      `;

      row.querySelector('[data-review-id]').addEventListener('click', () => {
        const fullReport = ExamAnalytics.getAttempt(item.id);
        if (fullReport) {
          this.lastAnalyticsReport = fullReport;
          this.showResultView(fullReport);
        } else {
          alert('Full detailed attempt report not found for this attempt.');
        }
      });

      this.historyTableBody.appendChild(row);
    });
  }

  /* ================= MODE SELECTION MODAL ================= */
  openModeModal(paperMeta, preferredMode = 'cbt') {
    this.selectedPaperMeta = paperMeta;
    this.modalPaperTitle.innerText = paperMeta.title;
    this.modalPaperDesc.innerText = paperMeta.subtitle;

    this.modeOptions.forEach(opt => {
      const radio = opt.querySelector('input[type="radio"]');
      if (opt.dataset.mode === preferredMode) {
        opt.classList.add('selected');
        if (radio) radio.checked = true;
      } else {
        opt.classList.remove('selected');
        if (radio) radio.checked = false;
      }
    });

    this.modeModal.classList.add('active');
  }

  onStartExamConfirmed() {
    const selectedOpt = document.querySelector('.mode-option.selected');
    const mode = selectedOpt ? selectedOpt.dataset.mode : 'cbt';
    this.modeModal.classList.remove('active');

    // Load full paper data from global window variable
    let paperData = null;
    const varName = this.selectedPaperMeta.varName;
    if (varName.includes('.')) {
      const parts = varName.split('.');
      paperData = window[parts[0]][parts[1]];
    } else {
      paperData = window[varName];
    }

    if (!paperData) {
      alert('Error loading question paper data.');
      return;
    }

    this.launchPaper(paperData, mode);
  }

  /* ================= EXAM LAUNCH & SCREEN ================= */
  launchPaper(paperData, mode = 'cbt') {
    this.currentPaper = paperData;
    this.engine.init(paperData, mode, true);
    // Start questions matching candidate preference (or default English)
    const initialLang = (window.BSTET_I18N && window.BSTET_I18N.currentLang === 'hi') ? 'hi' : 'en';
    this.engine.setLanguage(initialLang);
    this.updateExamLanguageControls();

    document.body.classList.add('in-exam-mode');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    this.lobbyView.classList.remove('active');
    this.resultView.classList.remove('active');
    this.examView.classList.add('active');

    this.examTitle.innerText = paperData.title;

    if (this.pauseModal) this.pauseModal.classList.remove('active');
    if (this.pauseBtn) {
      this.pauseBtn.innerHTML = `<span class="btn-icon">⏸</span> <span class="btn-text">Pause</span>`;
    }

    if (mode === 'practice') {
      this.timerBox.style.display = 'none';
      if (this.revealExplanationBtn) this.revealExplanationBtn.style.display = 'inline-flex';
    } else {
      this.timerBox.style.display = 'inline-flex';
      if (this.revealExplanationBtn) this.revealExplanationBtn.style.display = 'none';
    }

    this.renderSectionTabs();
    this.renderQuestionView();
    this.renderPalette();
  }

  renderSectionTabs() {
    this.sectionsTabsContainer.innerHTML = '';
    const currentSec = this.engine.getCurrentSection();
    const i18n = window.BSTET_I18N;

    this.currentPaper.sections.forEach(sec => {
      const tab = document.createElement('button');
      tab.className = `section-tab-btn ${currentSec && currentSec.id === sec.id ? 'active' : ''}`;
      const secDisplayName = i18n ? i18n.translateSection(sec.name) : sec.name;

      tab.innerHTML = `
        <span>${secDisplayName}</span>
        <span class="badge-count">${sec.total} Qs</span>
      `;
      tab.addEventListener('click', () => {
        this.engine.jumpToSection(sec.id);
      });
      this.sectionsTabsContainer.appendChild(tab);
    });
  }

  renderQuestionView() {
    const q = this.engine.getCurrentQuestion();
    if (!q) return;
    const i18n = window.BSTET_I18N;

    const qPrefix = 'Question';
    const ofLabel = 'of';
    this.qNumberText.innerText = `${qPrefix} ${q.questionNumber} ${ofLabel} ${this.currentPaper.questions.length}`;
    
    // Topic translation
    this.qTopicTag.innerText = this.engine.getQuestionTopic(q);
    
    // Question text (Bilingual supported)
    const statement = this.engine.getQuestionStatement(q);
    if (this.engine.lang === 'both') {
      this.qStatement.innerHTML = statement;
    } else {
      this.qStatement.innerHTML = statement.replace(/\n/g, '<br>');
    }

    // Sync language control buttons
    this.updateExamLanguageControls();

    // Options (Bilingual)
    this.optionsContainer.innerHTML = '';
    const currentResp = this.engine.responses[q.id];

    ['A', 'B', 'C', 'D'].forEach(letter => {
      const optText = this.engine.getOptionText(q, letter);
      if (!optText) return;

      const card = document.createElement('div');
      card.className = `option-card ${currentResp === letter ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="option-indicator">${letter}</div>
        <div class="option-text">${optText}</div>
      `;

      card.addEventListener('click', () => {
        this.engine.selectOption(letter);
        this.renderQuestionView();
        this.renderPalette();
      });

      this.optionsContainer.appendChild(card);
    });

    // Update section tabs active state
    const currSec = this.engine.getCurrentSection();
    if (currSec) {
      document.querySelectorAll('.section-tab-btn').forEach(btn => {
        const secDisplayName = i18n ? i18n.translateSection(currSec.name) : currSec.name;
        if (btn.innerText.includes(secDisplayName) || btn.innerText.includes(currSec.name)) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }

    // Practice explanation box reset
    this.practiceBox.classList.remove('active');

    // Update mobile palette button text
    if (this.mobilePaletteToggle) {
      const counts = this.engine.getSummaryCounts();
      this.mobilePaletteToggle.innerHTML = `📋 Palette (${counts.totalAnswered}/${counts.total})`;
    }
  }

  handleOptionKey(letter) {
    this.engine.selectOption(letter);
    this.renderQuestionView();
    this.renderPalette();
  }

  renderPalette() {
    this.paletteGrid.innerHTML = '';
    const counts = this.engine.getSummaryCounts();

    this.legendAnswered.innerText = counts.answered;
    this.legendNotAnswered.innerText = counts.notAnswered;
    this.legendNotVisited.innerText = counts.notVisited;
    this.legendMarked.innerText = counts.marked;
    this.legendAnsMarked.innerText = counts.ansMarked;

    this.currentPaper.questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      const status = this.engine.statuses[q.id] || 'not-visited';
      const isCurrent = idx === this.engine.currentIndex;

      btn.className = `palette-btn status-${status} ${isCurrent ? 'current' : ''}`;
      btn.innerText = q.questionNumber;
      btn.title = `Q${q.questionNumber}: ${status.replace('-', ' ')}`;

      btn.addEventListener('click', () => {
        this.engine.jumpToQuestion(idx);
        if (window.innerWidth <= 900) {
          this.palettePane.classList.remove('open');
          this.paletteBackdrop.classList.remove('active');
        }
      });

      this.paletteGrid.appendChild(btn);
    });
  }

  updateTimerDisplay(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n) => String(n).padStart(2, '0');
    this.timerDisplay.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    // Warning when under 10 minutes
    if (totalSeconds <= 600) {
      this.timerBox.classList.add('warning');
    } else {
      this.timerBox.classList.remove('warning');
    }
  }

  /* ================= SUBMIT FLOW ================= */
  openSubmitModal() {
    try {
      if (this.engine && this.engine.paper) {
        const counts = this.engine.getSummaryCounts();
        if (this.submitSummaryTotal) this.submitSummaryTotal.innerText = counts.total;
        if (this.submitSummaryAnswered) this.submitSummaryAnswered.innerText = counts.totalAnswered;
        if (this.submitSummaryUnanswered) this.submitSummaryUnanswered.innerText = counts.notAnswered + counts.notVisited;
        if (this.submitSummaryMarked) this.submitSummaryMarked.innerText = counts.marked + counts.ansMarked;
      }

      if (this.submitModal) {
        this.submitModal.classList.add('active');
      } else {
        if (confirm('Are you sure you want to end and submit your exam session?')) {
          this.finishAndEvaluateExam();
        }
      }
    } catch (err) {
      console.error('Error opening submit modal:', err);
      if (confirm('Are you sure you want to end and submit your exam session?')) {
        this.finishAndEvaluateExam();
      }
    }
  }

  finishAndEvaluateExam() {
    try {
      document.body.classList.remove('in-exam-mode');
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if (this.pauseModal) this.pauseModal.classList.remove('active');
      if (this.submitModal) this.submitModal.classList.remove('active');

      this.engine.clearSession();
      const report = ExamAnalytics.evaluate(this.currentPaper, this.engine.responses, this.engine.timeSpentPerQ);
      this.lastAnalyticsReport = report;

      this.showResultView(report);
    } catch (err) {
      console.error('Error in finishAndEvaluateExam:', err);
      alert('Exam submitted successfully! Loading result scorecard...');
      if (this.currentPaper) {
        const fallbackReport = ExamAnalytics.evaluate(this.currentPaper, this.engine.responses || {}, {});
        this.showResultView(fallbackReport);
      } else {
        this.showLobbyView();
      }
    }
  }

  /* ================= QUESTION PAPER PREVIEW MODAL ================= */
  openQuestionPaperModal() {
    if (!this.currentPaper) return;
    this.qpModalBody.innerHTML = this.currentPaper.questions.map(q => {
      const statement = this.engine.getQuestionStatement(q);
      const optA = this.engine.getOptionText(q, 'A');
      const optB = this.engine.getOptionText(q, 'B');
      const optC = this.engine.getOptionText(q, 'C');
      const optD = this.engine.getOptionText(q, 'D');

      return `
        <div style="padding: 16px 0; border-bottom: 1px solid var(--border-subtle);">
          <p style="font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
            Q.${q.questionNumber} ${statement}
          </p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px; color: var(--text-secondary);">
            <div>(A) ${optA}</div>
            <div>(B) ${optB}</div>
            <div>(C) ${optC}</div>
            <div>(D) ${optD}</div>
          </div>
        </div>
      `;
    }).join('');
    this.qpModal.classList.add('active');
  }

  /* ================= SCORECARD & PRODUCTION-GRADE ANALYTICS VIEW ================= */
  showResultView(report) {
    document.body.classList.remove('in-exam-mode');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (this.pauseModal) this.pauseModal.classList.remove('active');

    this.examView.classList.remove('active');
    this.lobbyView.classList.remove('active');
    this.resultView.classList.add('active');

    const i18n = window.BSTET_I18N;
    const isHindi = i18n && i18n.currentLang === 'hi';

    this.resPaperTitle.innerText = report.paperTitle;
    this.resScore.innerText = report.totalScore;
    this.resMaxScore.innerText = `/ ${report.maxMarks}`;

    // Verdict Badge
    if (report.isQualified) {
      this.resVerdictBadge.className = 'verdict-badge qualified';
      this.resVerdictBadge.innerHTML = isHindi
        ? `🎉 उत्तीर्ण (QUALIFIED) • स्कोर: ${report.totalScore} (सामान्य कट-ऑफ 75 अंक)`
        : `🎉 QUALIFIED • Score: ${report.totalScore} (Gen Cutoff 75 Marks)`;
    } else {
      this.resVerdictBadge.className = 'verdict-badge not-qualified';
      this.resVerdictBadge.innerHTML = isHindi
        ? `⚠️ अनुत्तीर्ण (NOT QUALIFIED) • स्कोर: ${report.totalScore} (सामान्य कट-ऑफ 75 अंक आवश्यक)`
        : `⚠️ NOT QUALIFIED • Score: ${report.totalScore} (75 Marks Needed for Gen Cutoff)`;
    }

    // Animate Circular Gauges
    const circumference = 2 * Math.PI * 40; // ~251.2
    if (this.gaugeScoreFill) {
      const pctOffset = circumference - (report.percentage / 100) * circumference;
      this.gaugeScoreFill.style.strokeDasharray = `${circumference}`;
      this.gaugeScoreFill.style.strokeDashoffset = `${Math.max(0, pctOffset)}`;
    }
    if (this.gaugeAccuracyFill) {
      const accOffset = circumference - (report.accuracy / 100) * circumference;
      this.gaugeAccuracyFill.style.strokeDasharray = `${circumference}`;
      this.gaugeAccuracyFill.style.strokeDashoffset = `${Math.max(0, accOffset)}`;
    }

    this.resPercentage.innerText = `${report.percentage}%`;
    this.resAccuracy.innerText = `${report.accuracy}%`;
    this.resPaceValue.innerText = `${report.avgTimePerAttempt}s / Q`;
    if (this.resPaceIcon) {
      this.resPaceIcon.innerText = report.paceCategory === 'Rapid' ? '🚀' : (report.paceCategory === 'Slow' ? '⏳' : '⚡');
    }
    this.resPercentile.innerText = `${report.estPercentile}th`;

    // Render Official Cutoff Qualification Matrix Table
    if (this.cutoffTableBody && report.cutoffs) {
      this.cutoffTableBody.innerHTML = Object.entries(report.cutoffs).map(([key, cat]) => {
        const catName = isHindi ? cat.category_hi : cat.category;
        const statusBadge = cat.qualified
          ? `<span class="status-badge-qual">🎉 ${isHindi ? 'उत्तीर्ण (Qualified)' : 'Qualified'}</span>`
          : `<span class="status-badge-miss">⚠️ ${isHindi ? 'कम रह गए (Missed)' : 'Missed'}</span>`;
        const marginColor = parseFloat(cat.margin) >= 0 ? '#16a34a' : '#dc2626';
        const sign = parseFloat(cat.margin) >= 0 ? '+' : '';

        return `
          <tr>
            <td><strong>${catName}</strong></td>
            <td>${cat.minPct}%</td>
            <td><strong>${cat.minMarks}</strong></td>
            <td><strong style="color: var(--primary);">${report.totalScore}</strong></td>
            <td>${statusBadge}</td>
            <td style="color: ${marginColor}; font-weight: 700;">${sign}${cat.margin}</td>
          </tr>
        `;
      }).join('');
    }

    // Render Section Breakdown Cards
    this.resSectionsBreakdown.innerHTML = Object.values(report.sectionStats).map(sec => {
      const pct = sec.total > 0 ? ((sec.score / sec.total) * 100).toFixed(0) : 0;
      const secName = isHindi ? sec.name_hi : sec.name;
      const secMins = Math.round(sec.timeSpent / 60);

      return `
        <div class="breakdown-card">
          <h4>${secName}</h4>
          <div style="display: flex; justify-content: space-between; font-size: 14px;">
            <span style="font-weight: 700; color: var(--primary);">${sec.score} / ${sec.total} Marks</span>
            <span style="color: var(--text-muted);">${pct}% • ⏱ ${secMins}m</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${pct}%;"></div>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--text-muted); margin-top: 8px;">
            <span>🟢 ${sec.correct} Correct</span>
            <span>🔴 ${sec.incorrect} Incorrect</span>
            <span>⚪ ${sec.unattempted} Skipped</span>
          </div>
        </div>
      `;
    }).join('');

    // Render Three-Tier Diagnostic Matrix
    if (this.diagStrongItems) {
      if (report.strongTopics && report.strongTopics.length > 0) {
        this.diagStrongItems.innerHTML = report.strongTopics.map(t => `
          <div class="diag-item">
            <div class="diag-item-row">
              <span>${isHindi ? t.name_hi : t.name}</span>
              <span style="color: #16a34a;">${t.accuracy}% (${t.correct}/${t.total})</span>
            </div>
            <div class="diag-item-tip">Excellent conceptual mastery. Practice speed drills to sustain consistency.</div>
          </div>
        `).join('');
      } else {
        this.diagStrongItems.innerHTML = `<p style="font-size: 13px; color: var(--text-muted); padding: 8px;">Focus on core units to elevate topics to this tier.</p>`;
      }
    }

    if (this.diagModItems) {
      if (report.moderateTopics && report.moderateTopics.length > 0) {
        this.diagModItems.innerHTML = report.moderateTopics.map(t => `
          <div class="diag-item">
            <div class="diag-item-row">
              <span>${isHindi ? t.name_hi : t.name}</span>
              <span style="color: #f59e0b;">${t.accuracy}% (${t.correct}/${t.total})</span>
            </div>
            <div class="diag-item-tip">Good foundation; revise formulas and edge-case exceptions to cross 75%.</div>
          </div>
        `).join('');
      } else {
        this.diagModItems.innerHTML = `<p style="font-size: 13px; color: var(--text-muted); padding: 8px;">No topics currently in moderate range.</p>`;
      }
    }

    if (this.diagWeakItems) {
      if (report.weakTopics && report.weakTopics.length > 0) {
        this.diagWeakItems.innerHTML = report.weakTopics.map(t => `
          <div class="diag-item">
            <div class="diag-item-row">
              <span>${isHindi ? t.name_hi : t.name}</span>
              <span style="color: #dc2626;">${t.accuracy}% (${t.correct}/${t.total})</span>
            </div>
            <div class="diag-item-tip">⚠️ <strong>Action Plan:</strong> Read conceptual solutions below, review syllabus notes, and re-attempt sectional drills.</div>
          </div>
        `).join('');
      } else {
        this.diagWeakItems.innerHTML = `<p style="font-size: 13px; color: #16a34a; font-weight: 600; padding: 8px;">Outstanding! No weak topics detected below 50% threshold.</p>`;
      }
    }

    // Populate Solutions Topic Filter Dropdown
    if (this.solTopicSelect) {
      const uniqueTopics = [...new Set(report.questionReviews.map(q => q.topic))].filter(Boolean);
      this.solTopicSelect.innerHTML = `<option value="all">All Topics (15 Units + Pedagogy)</option>` + uniqueTopics.map(topic => {
        const topicName = (isHindi && i18n) ? i18n.translateTopic(topic) : topic;
        return `<option value="${topic}">${topicName}</option>`;
      }).join('');
      this.solTopicFilter = 'all';
    }

    this.renderSolutions();
  }

  shareScorecard() {
    if (!this.lastAnalyticsReport) return;
    const r = this.lastAnalyticsReport;
    const summary = `🎯 Bihar STET Paper II (Computer Science) CBT Mock Scorecard\n` +
      `📝 Paper: ${r.paperTitle}\n` +
      `📊 Score: ${r.totalScore} / ${r.maxMarks} (${r.percentage}%)\n` +
      `🎯 Accuracy: ${r.accuracy}%\n` +
      `🏆 Projected Percentile: ${r.estPercentile}th\n` +
      `✅ Result: ${r.isQualified ? 'QUALIFIED for STET 2026! 🎉' : 'Needs Practice (75 Marks Cutoff)'}\n` +
      `⏱ Exam Simulator: https://bstet-cs-cbt.vercel.app`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(summary).then(() => {
        alert('Scorecard summary copied to clipboard! You can share it on WhatsApp or Telegram.');
      }).catch(() => {
        prompt('Copy your scorecard summary below:', summary);
      });
    } else {
      prompt('Copy your scorecard summary below:', summary);
    }
  }

  renderSolutions() {
    if (!this.lastAnalyticsReport) return;
    const reviews = this.lastAnalyticsReport.questionReviews;
    const isHindi = this.solLang === 'hi';
    const i18n = window.BSTET_I18N;

    const filtered = reviews.filter(q => {
      // Status filter
      if (this.solFilter === 'incorrect' && (q.isCorrect || !q.isAttempted)) return false;
      if (this.solFilter === 'unattempted' && q.isAttempted) return false;
      if (this.solFilter === 'correct' && !q.isCorrect) return false;
      // Topic filter
      if (this.solTopicFilter !== 'all' && q.topic !== this.solTopicFilter) return false;
      return true;
    });

    if (filtered.length === 0) {
      this.solutionsList.innerHTML = `<p style="color: var(--text-muted); padding: 30px; text-align: center;">No questions match the current status & topic filter criteria.</p>`;
      return;
    }

    this.solutionsList.innerHTML = filtered.map(q => {
      const statusClass = q.isCorrect ? 'correct' : (q.isAttempted ? 'incorrect' : 'unattempted');
      const statusText = q.isCorrect 
        ? '<span style="color: #16a34a; font-weight: 700;">✔ Correct</span>' 
        : (q.isAttempted ? '<span style="color: #dc2626; font-weight: 700;">✘ Incorrect</span>' : '<span style="color: #64748b; font-weight: 700;">○ Unattempted</span>');

      const questionStatement = isHindi && q.question_hi ? q.question_hi : q.question;
      const topicName = (isHindi && (q.topic_hi || (i18n && i18n.translateTopic(q.topic)))) || q.topic;
      const explanation = isHindi && q.explanation_hi ? q.explanation_hi : q.explanation;

      const optionsHtml = ['A', 'B', 'C', 'D'].map(letter => {
        const text = (isHindi && q.options_hi && q.options_hi[letter]) ? q.options_hi[letter] : (q.options ? q.options[letter] : '');
        if (!text) return '';
        const isOfficialCorrect = q.correctAnswer === letter;
        const isUserChoice = q.userResponse === letter;

        let optClass = 'sol-option';
        let badge = '';

        if (isOfficialCorrect) {
          optClass += ' is-correct';
          badge = `<span style="font-weight: 700; margin-left: auto;">[${isHindi ? 'आधिकारिक सही उत्तर' : 'Official Correct Answer'}]</span>`;
        } else if (isUserChoice && !isOfficialCorrect) {
          optClass += ' user-wrong';
          badge = `<span style="font-weight: 700; margin-left: auto;">[${isHindi ? 'आपका उत्तर - गलत' : 'Your Choice - Incorrect'}]</span>`;
        }

        return `
          <div class="${optClass}">
            <span style="font-weight: 700; width: 20px;">${letter}.</span>
            <span>${text}</span>
            ${badge}
          </div>
        `;
      }).join('');

      const timeSpentSecs = q.timeSpent || 0;

      return `
        <div class="solution-card ${statusClass}">
          <div class="sol-header">
            <div class="sol-tag-row">
              <strong style="font-size: 15px;">Q.${q.questionNumber}</strong>
              <span class="topic-tag">${topicName}</span>
              <span style="font-size: 12px; color: var(--text-muted);">[${q.section}]</span>
              <span style="font-size: 11px; background: var(--bg-subtle); padding: 2px 6px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); color: var(--text-secondary);">
                ⏱ ${timeSpentSecs}s spent
              </span>
            </div>
            <div>${statusText}</div>
          </div>
          <p style="font-size: 16px; font-weight: 500; color: var(--text-primary); margin-bottom: 12px;">
            ${questionStatement}
          </p>
          <div class="sol-options-grid">
            ${optionsHtml}
          </div>
          <div class="explanation-box">
            <div style="font-weight: 700; margin-bottom: 6px; color: var(--primary);">
              ${isHindi ? '📖 अवधारणात्मक सिद्धांत एवं विस्तृत समाधान:' : '📖 Conceptual Theory & Detailed Explanation:'}
            </div>
            <div>${explanation ? explanation.replace(/\n/g, '<br>') : 'Official answer confirmed.'}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  showLobbyView() {
    document.body.classList.remove('in-exam-mode');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (this.pauseModal) this.pauseModal.classList.remove('active');

    this.examView.classList.remove('active');
    this.resultView.classList.remove('active');
    this.lobbyView.classList.add('active');
    this.renderLobby();
  }
}

// Initialize application on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
