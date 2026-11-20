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
    this.fontSizeLevel = 'normal';
    this.lastAnalyticsReport = null;
    this.solFilter = 'all';
    this.solTopicFilter = 'all';
    this.solLang = (window.BSTET_I18N && window.BSTET_I18N.currentLang) || 'en';
    this._paperLoadPromises = {};

    this.initElements();
    this.bindEvents();
    this.initTheme();
    this.initLanguage();
    this.initFontSize();
    this.renderLobby();
    this.handleUrlParams();
    this.setupJustInTimePrefetch();
  }

  initElements() {
    // Views
    this.lobbyView = document.getElementById('lobby-view');
    this.examView = document.getElementById('exam-view');
    this.resultView = document.getElementById('result-view');
    this.dashboardView = document.getElementById('dashboard-view');
    this.topicPracticeView = document.getElementById('topic-practice-view');

    // Lobby Elements
    this.papersGrid = document.getElementById('papers-grid');
    this.filterTabs = document.querySelectorAll('.filter-tab');
    this.historyTableBody = document.getElementById('history-table-body');
    this.activeAttemptContainer = document.getElementById('active-attempt-container');
    this.searchPapersInput = document.getElementById('search-papers-input');
    this.syllabusToggle = document.getElementById('syllabus-accordion-toggle');
    this.syllabusBody = document.getElementById('syllabus-accordion-body');

    // Shortcuts & Controls
    this.shortcutsModal = document.getElementById('shortcuts-modal');
    this.shortcutsHelpBtn = document.getElementById('shortcuts-help-btn');
    this.closeShortcutsModalBtn = document.getElementById('close-shortcuts-modal-btn');
    this.shortcutsModalOkBtn = document.getElementById('shortcuts-modal-ok-btn');
    this.bookmarkQBtn = document.getElementById('bookmark-q-btn');
    this.retryWrongBtn = document.getElementById('retry-wrong-btn');
    this.cutoffCategorySelect = document.getElementById('cutoff-category-select');
    this.categoryQualStatus = document.getElementById('category-qualification-status');

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
    this.fontResetBtn = document.getElementById('font-reset-btn');
    this.fontLargerBtn = document.getElementById('font-larger-btn');
    this.pauseBtn = document.getElementById('pause-btn');

    // Exam In-Header Quick Utilities
    this.examThemeToggleBtn = document.getElementById('exam-theme-toggle-btn');
    this.examFullscreenBtn = document.getElementById('exam-fullscreen-btn');
    this.examFontSmallerBtn = document.getElementById('exam-font-smaller-btn');
    this.examFontResetBtn = document.getElementById('exam-font-reset-btn');
    this.examFontLargerBtn = document.getElementById('exam-font-larger-btn');

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

    // Legal & Privacy Policy Modal (Google AdSense Compliance)
    this.legalModal = document.getElementById('legal-modal');
    this.legalModalBody = document.getElementById('legal-modal-body');
    this.closeLegalModalBtn = document.getElementById('close-legal-modal-btn');
    this.legalModalOkBtn = document.getElementById('legal-modal-ok-btn');
    
    // Retired Paper Notice Modal
    this.retiredModal = document.getElementById('retired-modal');
    this.retiredModalTitle = document.getElementById('retired-modal-title');
    this.retiredModalMsg = document.getElementById('retired-modal-msg');
    this.retiredModalBtn = document.getElementById('retired-modal-btn');
    this.legalTabs = document.querySelectorAll('.legal-tab-btn');
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

    // Real-Time Search in Lobby
    if (this.searchPapersInput) {
      this.searchPapersInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderLobby();
      });
    }

    // Dynamic Syllabus Map Accordion Toggle
    if (this.syllabusToggle && this.syllabusBody) {
      this.syllabusToggle.addEventListener('click', () => {
        const isExpanded = this.syllabusBody.classList.toggle('active');
        this.syllabusToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        const icon = document.getElementById('syllabus-toggle-icon');
        if (icon) icon.textContent = isExpanded ? '▲' : '▼';
      });
    }

    // Shortcuts Modal Bindings
    if (this.shortcutsHelpBtn && this.shortcutsModal) {
      this.shortcutsHelpBtn.addEventListener('click', () => {
        this.shortcutsModal.classList.add('active');
      });
    }
    if (this.closeShortcutsModalBtn && this.shortcutsModal) {
      this.closeShortcutsModalBtn.addEventListener('click', () => {
        this.shortcutsModal.classList.remove('active');
      });
    }
    if (this.shortcutsModalOkBtn && this.shortcutsModal) {
      this.shortcutsModalOkBtn.addEventListener('click', () => {
        this.shortcutsModal.classList.remove('active');
      });
    }

    // Question Bookmark Toggle
    if (this.bookmarkQBtn) {
      this.bookmarkQBtn.addEventListener('click', () => {
        const currQ = this.engine.getCurrentQuestion();
        if (currQ) {
          const isNowBookmarked = this.engine.toggleBookmark(currQ.id);
          this.updateBookmarkButton(isNowBookmarked);
        }
      });
    }

    // Result Screen Cutoff Selector
    if (this.cutoffCategorySelect) {
      this.cutoffCategorySelect.addEventListener('change', () => {
        this.updateCategoryCutoffStatus();
      });
    }

    // Result Screen Retry Wrong Questions
    if (this.retryWrongBtn) {
      this.retryWrongBtn.addEventListener('click', () => {
        this.retryWrongQuestions();
      });
    }

    // Dashboard Actions
    const dashClearBtn = document.getElementById('dash-clear-history-btn');
    if (dashClearBtn) {
      dashClearBtn.addEventListener('click', () => {
        const msg = (window.BSTET_I18N && window.BSTET_I18N.currentLang === 'hi')
          ? 'क्या आप पूरा परीक्षा इतिहास साफ़ करना चाहते हैं?'
          : 'Are you sure you want to clear your test attempt history?';
        if (confirm(msg)) {
          ExamAnalytics.clearHistory();
          this.renderDashboard();
        }
      });
    }
    const exportBtn = document.getElementById('export-history-json-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => this.exportHistoryJson());
    }
    const importBtn = document.getElementById('import-history-json-btn');
    const importInput = document.getElementById('import-history-file-input');
    if (importBtn && importInput) {
      importBtn.addEventListener('click', () => importInput.click());
      importInput.addEventListener('change', (e) => this.importHistoryJson(e));
    }

    // Topic Practice Configurator Actions
    const selectAllUnitsBtn = document.getElementById('select-all-units-btn');
    const clearAllUnitsBtn = document.getElementById('clear-all-units-btn');
    if (selectAllUnitsBtn) {
      selectAllUnitsBtn.addEventListener('click', () => {
        document.querySelectorAll('#topic-units-grid input[type="checkbox"]').forEach(cb => cb.checked = true);
      });
    }
    if (clearAllUnitsBtn) {
      clearAllUnitsBtn.addEventListener('click', () => {
        document.querySelectorAll('#topic-units-grid input[type="checkbox"]').forEach(cb => cb.checked = false);
      });
    }
    const startCustomTopicBtn = document.getElementById('start-custom-topic-practice-btn');
    if (startCustomTopicBtn) {
      startCustomTopicBtn.addEventListener('click', () => this.startCustomTopicPractice());
    }

    this.bindKeyboardShortcuts();

    // Event delegation on Papers Grid (supports pre-rendered static cards with zero CLS)
    if (this.papersGrid) {
      this.papersGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-action]');
        if (!btn) return;
        const action = btn.dataset.action;
        const paperId = btn.dataset.id;
        const paper = (window.PAPERS_CATALOG || []).find(p => p.id === paperId);
        if (paper) {
          this.openModeModal(paper, action === 'practice' ? 'practice' : 'cbt');
        }
      });
    }

    // Language Toggles
    if (this.langToggleBtn) {
      this.langToggleBtn.addEventListener('click', () => this.toggleAppLanguage());
    }
    if (this.examLangToggleBtn) {
      this.examLangToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleExamLanguage();
      });
    }
    const qLangSeg = document.getElementById('q-lang-segmented');
    if (qLangSeg) {
      qLangSeg.addEventListener('click', (e) => {
        const btn = e.target.closest('.q-lang-btn');
        if (btn && btn.dataset.lang) {
          e.preventDefault();
          this.setQuestionLanguage(btn.dataset.lang);
        }
      });
    }
    if (this.btnLangEn) {
      this.btnLangEn.addEventListener('click', (e) => {
        e.preventDefault();
        this.setQuestionLanguage('en');
      });
    }
    if (this.btnLangHi) {
      this.btnLangHi.addEventListener('click', (e) => {
        e.preventDefault();
        this.setQuestionLanguage('hi');
      });
    }
    if (this.btnLangBoth) {
      this.btnLangBoth.addEventListener('click', (e) => {
        e.preventDefault();
        this.setQuestionLanguage('both');
      });
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

    // Font Sizing (Accessible Scaling for Lobby & In-Exam)
    if (this.fontSmallerBtn) {
      this.fontSmallerBtn.addEventListener('click', () => this.changeFontSize(-1));
    }
    if (this.fontResetBtn) {
      this.fontResetBtn.addEventListener('click', () => this.resetFontSize());
    }
    if (this.fontLargerBtn) {
      this.fontLargerBtn.addEventListener('click', () => this.changeFontSize(1));
    }
    if (this.examFontSmallerBtn) {
      this.examFontSmallerBtn.addEventListener('click', () => this.changeFontSize(-1));
    }
    if (this.examFontResetBtn) {
      this.examFontResetBtn.addEventListener('click', () => this.resetFontSize());
    }
    if (this.examFontLargerBtn) {
      this.examFontLargerBtn.addEventListener('click', () => this.changeFontSize(1));
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

    // Legal & Privacy Policy Modal Bindings (Google AdSense)
    const openLegalBtn = document.getElementById('open-legal-contact-btn');
    const linkPrivacy = document.getElementById('link-privacy-policy');
    const linkTerms = document.getElementById('link-terms');
    const linkDisclaimer = document.getElementById('link-disclaimer');

    if (openLegalBtn) openLegalBtn.addEventListener('click', () => this.openLegalModal('author'));
    if (linkPrivacy) linkPrivacy.addEventListener('click', (e) => { e.preventDefault(); this.openLegalModal('privacy'); });
    if (linkTerms) linkTerms.addEventListener('click', (e) => { e.preventDefault(); this.openLegalModal('terms'); });
    if (linkDisclaimer) linkDisclaimer.addEventListener('click', (e) => { e.preventDefault(); this.openLegalModal('disclaimer'); });

    if (this.closeLegalModalBtn) {
      this.closeLegalModalBtn.addEventListener('click', () => this.legalModal.classList.remove('active'));
    }
    if (this.retiredModalBtn) {
      this.retiredModalBtn.addEventListener('click', () => {
        if (this.retiredModal) this.retiredModal.classList.remove('active');
        if (window.history && window.history.replaceState) {
          const cleanUrl = window.location.pathname + (window.BSTET_I18N && window.BSTET_I18N.currentLang === 'hi' ? '?lang=hi' : '');
          window.history.replaceState({}, '', cleanUrl);
        }
        if (this.lobbyView) this.lobbyView.classList.add('active');
        if (this.examView) this.examView.classList.remove('active');
        if (this.resultView) this.resultView.classList.remove('active');
        document.body.classList.remove('in-exam-mode');
        window.scrollTo({ top: 0, behavior: 'instant' });
      });
    }
    if (this.legalModalOkBtn) {
      this.legalModalOkBtn.addEventListener('click', () => this.legalModal.classList.remove('active'));
    }

    if (this.legalTabs) {
      this.legalTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          this.legalTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          this.renderLegalTabContent(tab.dataset.tab);
          if (this.legalModalBody) this.legalModalBody.scrollTop = 0;
        });
      });
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
          this.engine.clearSession();
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
      else if (e.key === 'l' || e.key === 'L' || e.key === 'h' || e.key === 'H') this.toggleExamLanguage();
    });
  }

  /* ================= IN-EXAM LANGUAGE SWITCHER ================= */
  toggleExamLanguage() {
    const currentBase = this.engine.baseLang || (window.BSTET_I18N && window.BSTET_I18N.currentLang) || 'en';
    const nextLang = currentBase === 'en' ? 'hi' : 'en';
    this.setAppLanguage(nextLang);

    const toastMsg = nextLang === 'hi'
      ? `परीक्षा का माध्यम <strong>हिन्दी (Hindi)</strong> में बदला गया (सभी प्रश्नों के लिए)`
      : `Exam medium switched to <strong>English</strong> (for all questions)`;
    this.showLanguageToast(toastMsg);
  }

  setQuestionLanguage(lang) {
    const q = this.engine.getCurrentQuestion();
    if (!q) return;

    this.engine.setQuestionLanguage(q.id, lang);
    this.updateExamLanguageControls(q);
    this.renderQuestionView();

    const qNum = this.engine.currentIndex + 1;
    const toastMsg = lang === 'hi' 
      ? `प्रश्न ${qNum}: भाषा <strong>हिन्दी (Hindi)</strong> में बदली गई (केवल इस प्रश्न के लिए)`
      : (lang === 'both' 
          ? `प्रश्न ${qNum}: <strong>द्विभाषी (Dual Mode)</strong> सक्रिय (केवल इस प्रश्न के लिए)` 
          : `Question ${qNum}: Language switched to <strong>English</strong> (for this question only)`);
    this.showLanguageToast(toastMsg);
  }

  toggleQuestionLanguage() {
    const q = this.engine.getCurrentQuestion();
    if (!q) return;

    const newLang = this.engine.toggleCurrentQuestionLanguage(q.id);
    this.updateExamLanguageControls(q);
    this.renderQuestionView();

    const qNum = this.engine.currentIndex + 1;
    const toastMsg = newLang === 'hi'
      ? `प्रश्न ${qNum}: भाषा <strong>हिन्दी (Hindi)</strong> में बदली गई (केवल इस प्रश्न के लिए)`
      : `Question ${qNum}: Language switched to <strong>English</strong> (for this question only)`;
    this.showLanguageToast(toastMsg);
  }

  showLanguageToast(msg) {
    let toast = document.getElementById('lang-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'lang-toast';
      toast.className = 'lang-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = msg;
    toast.classList.add('show');
    clearTimeout(this._langToastTimer);
    this._langToastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  }

  updateExamLanguageControls(q) {
    const targetQ = q || this.engine.getCurrentQuestion();
    const current = this.engine.getQuestionActiveLang(targetQ);

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

    document.documentElement.setAttribute('lang', lang);
    this.engine.setBaseLanguage(lang, true);
    this.updateExamLanguageControls();

    // Update Language Toggle Button text
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

    // Exam Controls & Header
    const badgeCbtLive = document.getElementById('badge-cbt-live');
    if (badgeCbtLive) badgeCbtLive.innerText = i18n.t('cbt_live');

    if (this.currentPaper && this.examTitle) {
      this.examTitle.innerText = i18n.translatePaperTitle(this.currentPaper.title, this.currentPaper.id);
    }
    if (this.timerBox) {
      this.timerBox.title = i18n.t('timer_title') || (lang === 'hi' ? 'शेष परीक्षा समय' : 'Remaining Exam Time');
    }
    const pauseBtnText = document.getElementById('pause-btn-text');
    if (pauseBtnText) {
      pauseBtnText.innerText = (this.engine && this.engine.isPaused) ? (lang === 'hi' ? 'जारी रखें' : 'Resume') : i18n.t('pause');
    }
    const qpBtnText = document.getElementById('qp-btn-text');
    if (qpBtnText) qpBtnText.innerText = i18n.t('paper_btn');

    if (this.revealExplanationBtn) this.revealExplanationBtn.innerText = i18n.t('concept_btn');

    // Question Pane Details
    const qLangLbl = document.querySelector('.q-lang-label');
    if (qLangLbl) qLangLbl.innerText = i18n.t('view_question_lbl');

    const practiceBoxTitle = document.getElementById('practice-box-title');
    if (practiceBoxTitle) practiceBoxTitle.innerText = i18n.t('immediate_exp_title');

    // Candidate Info & Palette Heading
    const candidateName = document.getElementById('candidate-name-text');
    const candidateSubject = document.getElementById('candidate-subject-text');
    if (candidateName) candidateName.innerText = (lang === 'hi') ? 'परीक्षार्थी: अभ्यर्थी (कक्षा 11-12)' : 'Candidate: Aspirant (Class 11-12)';
    if (candidateSubject) candidateSubject.innerText = (lang === 'hi') ? 'विषय: कंप्यूटर साइंस (226)' : 'Subject: Computer Science (226)';

    const paletteHeading = document.getElementById('palette-heading-text');
    if (paletteHeading) paletteHeading.innerText = i18n.t('palette_heading');

    const mobileClosePalette = document.getElementById('mobile-close-palette-btn');
    if (mobileClosePalette) mobileClosePalette.innerText = i18n.t('close_btn');

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

    // Exam Bottom Action Buttons
    if (this.prevBtn) this.prevBtn.innerText = i18n.t('btn_prev');
    if (this.nextBtn) this.nextBtn.innerText = i18n.t('btn_next');
    if (this.clearBtn) this.clearBtn.innerText = i18n.t('btn_clear');
    if (this.markReviewBtn) this.markReviewBtn.innerText = i18n.t('btn_mark_review');
    if (this.saveNextBtn) this.saveNextBtn.innerText = i18n.t('btn_save_next');
    if (this.submitExamBtn) this.submitExamBtn.innerText = i18n.t('btn_submit');

    // Mode Selection Modal
    const mCbtTitle = document.getElementById('m-cbt-title');
    const mCbtDesc = document.getElementById('m-cbt-desc');
    const mPracTitle = document.getElementById('m-prac-title');
    const mPracDesc = document.getElementById('m-prac-desc');
    const cancelModeBtn = document.getElementById('cancel-mode-btn');
    const startExamBtn = document.getElementById('start-exam-btn');
    if (mCbtTitle) mCbtTitle.innerText = i18n.t('mode_cbt_title');
    if (mCbtDesc) mCbtDesc.innerText = i18n.t('mode_cbt_desc');
    if (mPracTitle) mPracTitle.innerText = i18n.t('mode_practice_title');
    if (mPracDesc) mPracDesc.innerText = i18n.t('mode_practice_desc');
    if (cancelModeBtn) cancelModeBtn.innerText = i18n.t('mode_cancel');
    if (startExamBtn) startExamBtn.innerText = i18n.t('mode_proceed');

    // Submit Modal
    const subModalTitle = document.getElementById('sub-modal-title');
    const subModalDesc = document.getElementById('sub-modal-desc');
    const subLblTotal = document.getElementById('sub-lbl-total');
    const subLblAns = document.getElementById('sub-lbl-ans');
    const subLblUnans = document.getElementById('sub-lbl-unans');
    const subLblMarked = document.getElementById('sub-lbl-marked');
    const subModalPrompt = document.getElementById('sub-modal-prompt');
    const cancelSubmitBtn = document.getElementById('cancel-submit-btn');
    const confirmSubmitBtn = document.getElementById('confirm-submit-btn');
    if (subModalTitle) subModalTitle.innerText = i18n.t('sub_modal_title');
    if (subModalDesc) subModalDesc.innerText = (lang === 'hi') ? 'कृपया अंतिम सबमिशन से पहले अपने प्रयासों का सारांश देखें। एक बार जमा करने के बाद, आप उत्तर नहीं बदल सकते।' : 'Please review your attempt summary below before final submission. Once submitted, you cannot change your answers.';
    if (subLblTotal) subLblTotal.innerText = (lang === 'hi') ? 'कुल प्रश्न' : 'Total Questions';
    if (subLblAns) subLblAns.innerText = i18n.t('sub_modal_answered');
    if (subLblUnans) subLblUnans.innerText = i18n.t('sub_modal_unanswered');
    if (subLblMarked) subLblMarked.innerText = i18n.t('sub_modal_marked');
    if (subModalPrompt) subModalPrompt.innerText = i18n.t('sub_modal_prompt');
    if (cancelSubmitBtn) cancelSubmitBtn.innerText = i18n.t('sub_modal_cancel');
    if (confirmSubmitBtn) confirmSubmitBtn.innerText = i18n.t('sub_modal_confirm');

    // Pause Modal
    const pauseTitle = document.getElementById('pause-modal-title');
    const pauseDesc = document.getElementById('pause-modal-desc');
    const resumeBtn = document.getElementById('resume-exam-modal-btn');
    if (pauseTitle) pauseTitle.innerText = i18n.t('pause_modal_title');
    if (pauseDesc) pauseDesc.innerText = i18n.t('pause_modal_desc');
    if (resumeBtn) resumeBtn.innerText = i18n.t('pause_modal_resume');

    // Question Paper Modal
    const closeQpModalBtn = document.getElementById('close-qp-modal-btn');
    if (closeQpModalBtn) closeQpModalBtn.innerText = i18n.t('close_btn');

    // Developer Showcase & SEO footer
    const devRoleLbl = document.getElementById('dev-role-label');
    const devSpecBdg = document.getElementById('dev-spec-badge');
    const devRoleTitle = document.getElementById('dev-role-title');
    const devStatement = document.getElementById('dev-statement');
    const seoTitle = document.getElementById('seo-card-title');
    const seoDesc = document.getElementById('seo-card-desc');
    if (devRoleLbl) devRoleLbl.innerText = i18n.t('dev_role_label');
    if (devSpecBdg) devSpecBdg.innerText = i18n.t('dev_spec_badge');
    if (devRoleTitle) devRoleTitle.innerText = i18n.t('dev_role_title');
    if (devStatement) devStatement.innerText = i18n.t('dev_statement');
    if (seoTitle) seoTitle.innerText = i18n.t('seo_dir_title');
    if (seoDesc) seoDesc.innerText = i18n.t('seo_dir_desc');

    // Always re-render lobby cards with localized titles & stats
    this.renderLobby();
    this.renderHistory();

    // Re-render in-exam components if active
    if (this.examView.classList.contains('active')) {
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
    const text = isDark ? 'Light' : 'Dark';
    const icon = isDark ? '☀' : '☾';
    if (this.themeToggleBtn) this.themeToggleBtn.innerHTML = text;
    if (this.examThemeToggleBtn) this.examThemeToggleBtn.innerHTML = icon;
  }

  /* ================= ACCESSIBLE FONT RESIZING ================= */
  initFontSize() {
    const saved = localStorage.getItem('BSTET_FONT_SIZE') || 'normal';
    this.applyFontSize(saved, false);
  }

  applyFontSize(level, showToast = false) {
    const validLevels = ['small', 'normal', 'large', 'xlarge'];
    if (!validLevels.includes(level)) level = 'normal';
    this.fontSizeLevel = level;
    document.documentElement.setAttribute('data-font-size', level);
    localStorage.setItem('BSTET_FONT_SIZE', level);

    const scaleMap = { small: 0.90, normal: 1.00, large: 1.12, xlarge: 1.25 };
    const scale = scaleMap[level] || 1;
    document.documentElement.style.setProperty('--font-scale', scale);

    if (this.lobbyView) {
      this.lobbyView.style.zoom = scale;
    }
    if (this.resultView) {
      this.resultView.style.zoom = scale;
    }

    // Update active visual state on font zoom buttons
    const navButtons = [this.fontSmallerBtn, this.fontResetBtn, this.fontLargerBtn];
    const examButtons = [this.examFontSmallerBtn, this.examFontResetBtn, this.examFontLargerBtn];
    [...navButtons, ...examButtons].forEach(b => {
      if (b) b.classList.remove('active');
    });

    if (level === 'small') {
      if (this.fontSmallerBtn) this.fontSmallerBtn.classList.add('active');
      if (this.examFontSmallerBtn) this.examFontSmallerBtn.classList.add('active');
    } else if (level === 'normal') {
      if (this.fontResetBtn) this.fontResetBtn.classList.add('active');
      if (this.examFontResetBtn) this.examFontResetBtn.classList.add('active');
    } else if (level === 'large' || level === 'xlarge') {
      if (this.fontLargerBtn) this.fontLargerBtn.classList.add('active');
      if (this.examFontLargerBtn) this.examFontLargerBtn.classList.add('active');
    }

    if (showToast) {
      const isHi = window.BSTET_I18N && window.BSTET_I18N.currentLang === 'hi';
      const labels = {
        small: isHi ? 'छोटा फ़ॉन्ट (90%)' : 'Text Size: Small (90%)',
        normal: isHi ? 'सामान्य फ़ॉन्ट (100%)' : 'Text Size: Normal (100%)',
        large: isHi ? 'बड़ा फ़ॉन्ट (112%)' : 'Text Size: Large (112%)',
        xlarge: isHi ? 'अति-विशाल फ़ॉन्ट (125%)' : 'Text Size: Extra Large (125%)'
      };
      this.showLanguageToast(labels[level] || `Text Size: ${level}`);
    }
  }

  changeFontSize(delta) {
    const levels = ['small', 'normal', 'large', 'xlarge'];
    let idx = levels.indexOf(this.fontSizeLevel);
    if (idx === -1) idx = 1;
    const newIdx = Math.max(0, Math.min(levels.length - 1, idx + delta));
    this.applyFontSize(levels[newIdx], true);
  }

  resetFontSize() {
    this.applyFontSize('normal', true);
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
    const catalog = window.PAPERS_CATALOG || [];
    const i18n = window.BSTET_I18N;
    const isHi = i18n && i18n.currentLang === 'hi';

    // Dynamically update filter tab badge counts
    const allCount = catalog.length;
    const officialCount = catalog.filter(p => p.category === 'Official PYQ').length;
    const drillCount = catalog.filter(p => p.category !== 'Official PYQ').length;

    const tabAll = document.getElementById('tab-filter-all');
    const tabOfficial = document.getElementById('tab-filter-official');
    const tabDrill = document.getElementById('tab-filter-drill');

    if (tabAll) tabAll.innerText = isHi ? `सभी मॉक टेस्ट (${allCount})` : `All Mock Tests (${allCount})`;
    if (tabOfficial) tabOfficial.innerText = isHi ? `आधिकारिक PYQ प्रश्न पत्र (${officialCount})` : `Official PYQ Papers (${officialCount})`;
    if (tabDrill) tabDrill.innerText = isHi ? `सेक्शनल एवं टॉपिक अभ्यास (${drillCount})` : `Sectional & Topic Drills (${drillCount})`;

    // Check and render active ongoing attempt banner
    this.renderActiveAttemptBanner();

    // Render Dynamic Syllabus Map
    this.renderSyllabusMap();

    if (!this.papersGrid) return;

    this.papersGrid.innerHTML = '';
    catalog.forEach(paper => {
      const card = document.createElement('div');
      card.className = 'paper-card';
      card.dataset.id = paper.id;
      card.dataset.category = paper.category;

      const title = i18n ? i18n.translatePaperTitle(paper.title, paper.id) : paper.title;
      const subtitle = i18n ? i18n.translatePaperSubtitle(paper.subtitle, paper.id) : paper.subtitle;
      const badge = i18n ? i18n.translateBadge(paper.badge) : paper.badge;
      const difficulty = i18n ? i18n.translateDifficulty(paper.difficulty) : paper.difficulty;

      const cbtLabel = i18n ? i18n.t('start_cbt') : '⚡ Start CBT Mock';
      const practiceLabel = i18n ? i18n.t('practice_mode') : '📖 Practice Mode';
      const qLabel = i18n ? i18n.t('questions_label') : 'Questions';
      const mLabel = i18n ? i18n.t('marks_label') : 'Total Marks';
      const dLabel = i18n ? i18n.t('duration_label') : 'Duration';
      const minsWord = i18n ? i18n.t('mins') : 'Mins';

      card.innerHTML = `
        <div>
          <div class="paper-header">
            <span class="badge ${paper.badgeClass}">${badge}</span>
            <span style="font-size: 12px; font-weight: 600; color: var(--text-muted);">${difficulty}</span>
          </div>
          <h3 class="paper-title">${title}</h3>
          <p class="paper-subtitle">${subtitle}</p>
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
      this.papersGrid.appendChild(card);
    });

    // Toggle card visibility based on active filter AND search query
    const activeCards = this.papersGrid.querySelectorAll('.paper-card');
    const query = (this.searchQuery || '').trim().toLowerCase();

    activeCards.forEach(card => {
      const cat = card.dataset.category;
      let categoryMatch = false;
      if (this.currentFilter === 'all') categoryMatch = true;
      else if (this.currentFilter === 'official') categoryMatch = (cat === 'Official PYQ');
      else if (this.currentFilter === 'drill') categoryMatch = (cat !== 'Official PYQ');

      let searchMatch = true;
      if (query) {
        const text = card.textContent.toLowerCase();
        searchMatch = text.includes(query);
      }

      card.style.display = (categoryMatch && searchMatch) ? 'flex' : 'none';
    });
  }

  /* ================= HISTORY RENDERING ================= */
  renderHistory() {
    if (!this.historyTableBody) return;
    const history = (window.ExamAnalytics && ExamAnalytics.getHistory) ? ExamAnalytics.getHistory() : [];
    const i18n = window.BSTET_I18N;
    const isHi = i18n && i18n.currentLang === 'hi';

    if (!history || history.length === 0) {
      this.historyTableBody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">
            ${isHi ? 'कोई परीक्षा प्रयास दर्ज नहीं है। अपना विश्लेषण देखने के लिए ऊपर से एक मॉक टेस्ट शुरू करें!' : 'No test attempts recorded yet. Launch a mock test above to see your analytics!'}
          </td>
        </tr>
      `;
      return;
    }

    this.historyTableBody.innerHTML = '';
    history.forEach((item, idx) => {
      const tr = document.createElement('tr');
      const paperTitle = i18n ? i18n.translatePaperTitle(item.paperTitle, item.paperId) : item.paperTitle;
      const reviewLabel = isHi ? 'समाधान देखें' : 'Review Solutions';
      const qualifiedLabel = isHi ? 'उत्तीर्ण' : 'Qualified';
      const notQualifiedLabel = isHi ? 'अनुत्तीर्ण' : 'Not Qualified';
      const statusBadge = item.isQualified 
        ? `<span class="badge" style="background:#dcfce7; color:#15803d;">${qualifiedLabel}</span>`
        : `<span class="badge" style="background:#fee2e2; color:#991b1b;">${notQualifiedLabel}</span>`;

      tr.innerHTML = `
        <td><strong>${paperTitle}</strong></td>
        <td>${item.dateFormatted || item.date || ''}</td>
        <td><strong>${item.score}/${item.totalMarks}</strong> (${item.pct}%)</td>
        <td>${item.accuracy}%</td>
        <td>${statusBadge}</td>
        <td>
          <button class="btn btn-outline btn-sm review-history-btn" data-index="${idx}" style="font-size:12px; padding:4px 8px;">
            ${reviewLabel}
          </button>
        </td>
      `;
      this.historyTableBody.appendChild(tr);
    });

    // Wire review clicks
    this.historyTableBody.querySelectorAll('.review-history-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        if (history[idx]) {
          this.showResultView(history[idx]);
        }
      });
    });
  }

  /* ================= MODE SELECTION MODAL ================= */
  openModeModal(paperMeta, preferredMode = 'cbt') {
    this.selectedPaperMeta = paperMeta;
    this.modalPaperTitle.innerText = paperMeta.title;
    this.modalPaperDesc.innerText = paperMeta.subtitle;

    // Immediately trigger background fetch of this specific paper while user views mode options
    this.loadPaperData(paperMeta);

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

  /* ================= PAPER DATA LOADER & JUST-IN-TIME PRELOADER ================= */
  async loadPaperData(meta) {
    if (!meta) return null;
    const varName = meta.varName;
    const resolveData = () => {
      if (!varName) return null;
      if (varName.includes('.')) {
        const parts = varName.split('.');
        return window[parts[0]] && window[parts[0]][parts[1]];
      }
      return window[varName];
    };

    const existing = resolveData();
    if (existing) return existing;

    if (!this._paperLoadPromises) this._paperLoadPromises = {};
    if (this._paperLoadPromises[meta.jsFile]) {
      try {
        await this._paperLoadPromises[meta.jsFile];
        const res = resolveData();
        if (res) return res;
      } catch (e) {
        delete this._paperLoadPromises[meta.jsFile];
      }
    }

    this._paperLoadPromises[meta.jsFile] = new Promise((resolve, reject) => {
      const checkAndResolve = () => {
        const d = resolveData();
        if (d) {
          resolve(d);
          return true;
        }
        return false;
      };

      if (checkAndResolve()) return;

      const cacheBust = window.BSTET_VERSION || '20261121_v1';
      const originPath = window.location.pathname.endsWith('/') 
        ? window.location.pathname 
        : window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1) || '/';
      const scriptUrl = `${window.location.origin}${originPath}js/data/${meta.jsFile}?v=${cacheBust}`;

      // Clean up any stale or errored script tags for this file
      const staleScript = document.querySelector(`script[data-paper-file="${meta.jsFile}"]`);
      if (staleScript && staleScript.dataset.loaded !== 'true') {
        staleScript.remove();
      }

      const script = document.createElement('script');
      script.async = true;
      script.dataset.paperFile = meta.jsFile;
      script.src = scriptUrl;

      const cleanupAndReject = (errMsg) => {
        delete this._paperLoadPromises[meta.jsFile];
        reject(new Error(errMsg));
      };

      script.onload = () => {
        script.dataset.loaded = 'true';
        setTimeout(() => {
          if (!checkAndResolve()) {
            const d = resolveData();
            if (d) resolve(d);
            else cleanupAndReject(`Paper data ${varName} was not found after loading ${meta.jsFile}`);
          }
        }, 10);
      };

      script.onerror = () => {
        console.warn(`[PaperLoader] Script tag failed for ${meta.jsFile}. Attempting fallback fetch...`);
        fetch(scriptUrl)
          .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.text();
          })
          .then(sourceCode => {
            const runner = new Function(sourceCode);
            runner();
            if (!checkAndResolve()) {
              const d = resolveData();
              if (d) resolve(d);
              else cleanupAndReject(`Dataset ${varName} missing after fallback evaluation`);
            }
          })
          .catch(fetchErr => {
            cleanupAndReject(`Failed to load paper file ${meta.jsFile}: ${fetchErr.message}`);
          });
      };

      document.head.appendChild(script);

      // Polling fallback in case script executed before listeners attached
      let pollCount = 0;
      const pollTimer = setInterval(() => {
        if (checkAndResolve()) {
          clearInterval(pollTimer);
          script.dataset.loaded = 'true';
        } else if (++pollCount > 60) {
          clearInterval(pollTimer);
          if (!checkAndResolve()) {
            script.onerror();
          }
        }
      }, 50);
    });

    return this._paperLoadPromises[meta.jsFile].then(() => resolveData());
  }

  setupJustInTimePrefetch() {
    if (!this.papersGrid) return;
    const onHoverOrTouch = (e) => {
      const card = e.target.closest('.paper-card');
      if (!card) return;
      const paperId = card.dataset.id;
      const paper = (window.PAPERS_CATALOG || []).find(p => p.id === paperId);
      if (paper) {
        this.loadPaperData(paper);
      }
    };
    this.papersGrid.addEventListener('mouseover', onHoverOrTouch, { passive: true });
    this.papersGrid.addEventListener('touchstart', onHoverOrTouch, { passive: true });

    // Background idle preload ONLY triggers after candidate begins interacting with the page
    const startIdleAfterInteraction = () => {
      ['scroll', 'keydown', 'click'].forEach(evt => window.removeEventListener(evt, startIdleAfterInteraction));
      setTimeout(() => {
        if (!window.PAPERS_CATALOG) return;
        const uniqueFiles = [...new Set(window.PAPERS_CATALOG.map(p => p.jsFile))];
        let idx = 0;
        const loadNext = () => {
          if (idx >= uniqueFiles.length) return;
          const file = uniqueFiles[idx++];
          const meta = window.PAPERS_CATALOG.find(p => p.jsFile === file);
          if (meta) {
            this.loadPaperData(meta)
              .then(() => setTimeout(loadNext, 1500))
              .catch(() => setTimeout(loadNext, 1500));
          } else {
            loadNext();
          }
        };
        loadNext();
      }, 6000);
    };
    ['scroll', 'keydown', 'click'].forEach(evt => window.addEventListener(evt, startIdleAfterInteraction, { once: true, passive: true }));
  }

  async onStartExamConfirmed() {
    const selectedOpt = document.querySelector('.mode-option.selected');
    const mode = selectedOpt ? selectedOpt.dataset.mode : 'cbt';
    this.modeModal.classList.remove('active');

    const originalText = this.startExamBtn ? this.startExamBtn.innerText : 'Start Exam Now';
    if (this.startExamBtn) {
      this.startExamBtn.disabled = true;
      this.startExamBtn.innerText = 'Loading Paper...';
    }

    let paperData = null;
    try {
      paperData = await this.loadPaperData(this.selectedPaperMeta);
    } catch (err) {
      console.error('Network/Script load error:', err);
      alert('Failed to load examination paper. Please check your internet connection.');
      if (this.startExamBtn) {
        this.startExamBtn.disabled = false;
        this.startExamBtn.innerText = originalText;
      }
      return;
    }

    if (!paperData) {
      alert('Error loading question paper data.');
      if (this.startExamBtn) {
        this.startExamBtn.disabled = false;
        this.startExamBtn.innerText = originalText;
      }
      return;
    }

    try {
      // Clear obsolete attempt state for this paper to guarantee a clean launch
      if (this.selectedPaperMeta && this.selectedPaperMeta.id) {
        this.engine.clearSession(this.selectedPaperMeta.id);
      }
      this.launchPaper(paperData, mode, false);
    } catch (err) {
      console.error('Launch paper error:', err);
      alert('Error initializing examination session: ' + (err.message || 'Unknown error'));
    } finally {
      if (this.startExamBtn) {
        this.startExamBtn.disabled = false;
        this.startExamBtn.innerText = originalText;
      }
    }
  }

  /* ================= EXAM LAUNCH & SCREEN ================= */
  async launchPaperById(paperId, mode = 'cbt', resume = false) {
    if (!window.PAPERS_CATALOG) return false;
    const aliasMap = {
      'sachin_shift_set1': 'pedagogy_shift_set1',
      'sachin_shift_set2': 'pedagogy_shift_set2',
      'sachin_shift_set3': 'pedagogy_shift_set3',
      'sachin_shift_set4': 'pedagogy_shift_set4',
      'sachin_shift_set5': 'pedagogy_shift_set5',
      'sachin_pedagogy_master': 'pedagogy_master_100',
      'sachin_curated_recent_50': 'pedagogy_recent_50'
    };
    const resolvedId = aliasMap[paperId] || paperId;
    const norm = (s) => (s || '').toLowerCase().replace(/[-_\s]/g, '');
    const meta = window.PAPERS_CATALOG.find(p => norm(p.id) === norm(resolvedId));
    if (!meta) {
      if (this.retiredModal) {
        this.retiredModal.classList.add('active');
      }
      return false;
    }

    this.selectedPaperMeta = meta;
    try {
      const paperData = await this.loadPaperData(meta);
      if (!paperData) {
        console.warn('Could not locate paper dataset for', paperId, meta);
        return false;
      }
      this.launchPaper(paperData, mode, resume);
      return true;
    } catch (e) {
      console.error('Error launching paper by ID:', e);
      return false;
    }
  }

  handleUrlParams() {
    try {
      const params = new URLSearchParams(window.location.search);

      // 1. Language deep-linking: ?lang=hi or ?lang=en
      const langParam = params.get('lang');
      if (langParam && (langParam === 'hi' || langParam === 'en')) {
        if (window.BSTET_I18N && window.BSTET_I18N.currentLang !== langParam) {
          this.setAppLanguage(langParam);
        }
      }

      // 2. Filter deep-linking: ?filter=official, ?filter=drill, ?filter=all
      const filterParam = params.get('filter');
      if (filterParam && ['all', 'official', 'drill'].includes(filterParam)) {
        this.currentFilter = filterParam;
        if (this.filterTabs) {
          this.filterTabs.forEach(t => {
            if (t.dataset.filter === filterParam) t.classList.add('active');
            else t.classList.remove('active');
          });
        }
        this.renderLobby();
      }

      // 3. Paper deep-linking: ?paper=official-shift2&mode=cbt
      const paperParam = params.get('paper') || params.get('paperId') || params.get('test');
      if (paperParam) {
        const modeParam = (params.get('mode') === 'practice' || params.get('mode') === 'study') ? 'practice' : 'cbt';
        this.launchPaperById(paperParam, modeParam, false);
      }
    } catch (e) {
      console.warn('Could not process URL query parameters', e);
    }
  }

  launchPaper(paperData, mode = 'cbt', resume = false) {
    this.currentPaper = paperData;
    this.engine.init(paperData, mode, resume);
    // Respect saved exam language if available, else match candidate preference
    const saved = resume ? this.engine.loadSession(paperData.id) : null;
    const activeLang = (saved && (saved.baseLang || saved.lang)) || ((window.BSTET_I18N && window.BSTET_I18N.currentLang === 'hi') ? 'hi' : 'en');
    this.engine.setBaseLanguage(activeLang, !saved);
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
    const isHindi = this.engine.lang === 'hi' || this.engine.lang === 'both' || (i18n && i18n.currentLang === 'hi');

    this.currentPaper.sections.forEach(sec => {
      const tab = document.createElement('button');
      tab.className = `section-tab-btn ${currentSec && currentSec.id === sec.id ? 'active' : ''}`;
      const secDisplayName = isHindi ? (i18n ? i18n.sectionMap[sec.name] || sec.name : sec.name) : sec.name;

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
    const activeLang = this.engine.getQuestionActiveLang(q);
    const isHindi = activeLang === 'hi';
    const isBoth = activeLang === 'both';

    const qPrefix = (isHindi || isBoth) ? 'प्रश्न' : 'Question';
    const ofLabel = (isHindi || isBoth) ? '/' : 'of';
    const qNum = this.engine.currentIndex + 1;
    this.qNumberText.innerText = `${qPrefix} ${qNum} ${ofLabel} ${this.currentPaper.questions.length}`;
    
    // Topic translation
    this.qTopicTag.innerText = this.engine.getQuestionTopic(q);
    
    // Question text (Bilingual supported)
    const statement = this.engine.getQuestionStatement(q);
    if (activeLang === 'both') {
      this.qStatement.innerHTML = statement;
    } else {
      this.qStatement.innerHTML = statement.replace(/\n/g, '<br>');
    }

    // Sync language control buttons for this specific question
    this.updateExamLanguageControls(q);

    // Options (Bilingual & Practice Mode Reactive Feedback)
    this.optionsContainer.innerHTML = '';
    const currentResp = this.engine.responses[q.id];
    const isPractice = this.engine.mode === 'practice';

    const optLetters = (q.options && q.options.E !== undefined) ? ['A', 'B', 'C', 'D', 'E'] : ['A', 'B', 'C', 'D'];
    optLetters.forEach(letter => {
      let optText = '';
      if (typeof this.engine.getOptionText === 'function') {
        optText = this.engine.getOptionText(q, letter);
      } else if (typeof this.engine.getQuestionOption === 'function') {
        optText = this.engine.getQuestionOption(q, letter);
      } else if (q.options && q.options[letter]) {
        optText = q.options[letter];
      }
      if (!optText) return;

      const card = document.createElement('div');
      let statusClasses = [];
      if (currentResp === letter) {
        statusClasses.push('selected');
      }

      // Interactive immediate feedback in Practice Mode:
      if (isPractice && currentResp) {
        if (q.correctAnswer === 'Deleted' || q.isDeleted) {
          statusClasses.push('practice-correct');
        } else if (letter === q.correctAnswer) {
          statusClasses.push('practice-correct');
        } else if (currentResp === letter && letter !== q.correctAnswer) {
          statusClasses.push('practice-incorrect');
        }
      }

      card.className = `option-card ${statusClasses.join(' ')}`.trim();
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

    // Practice explanation box update
    if (isPractice && currentResp) {
      const expl = this.engine.getQuestionExplanation(q);
      if (expl && this.practiceContent && this.practiceBox) {
        this.practiceContent.innerHTML = expl.replace(/\n/g, '<br>');
        this.practiceBox.classList.add('active');
      } else if (this.practiceBox) {
        this.practiceBox.classList.remove('active');
      }
    } else if (this.practiceBox) {
      this.practiceBox.classList.remove('active');
    }

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
      const qNum = idx + 1;

      btn.className = `palette-btn status-${status} ${isCurrent ? 'current' : ''}`;
      btn.innerText = qNum;
      btn.title = `Q${qNum}: ${status.replace('-', ' ')}`;

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
    this.qpModalBody.innerHTML = this.currentPaper.questions.map((q, idx) => {
      const statement = this.engine.getQuestionStatement(q);
      const optLetters = (q.options && q.options.E !== undefined) ? ['A', 'B', 'C', 'D', 'E'] : ['A', 'B', 'C', 'D'];
      const optsHtml = optLetters.map(l => {
        let t = '';
        if (typeof this.engine.getOptionText === 'function') {
          t = this.engine.getOptionText(q, l);
        } else if (typeof this.engine.getQuestionOption === 'function') {
          t = this.engine.getQuestionOption(q, l);
        } else if (q.options && q.options[l]) {
          t = q.options[l];
        }
        return t ? `<div>(${l}) ${t}</div>` : '';
      }).join('');

      return `
        <div style="padding: 16px 0; border-bottom: 1px solid var(--border-subtle);">
          <p style="font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
            Q.${idx + 1} ${statement}
          </p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px; color: var(--text-secondary);">
            ${optsHtml}
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

    const genCutoffMarks = (report.cutoffs && report.cutoffs.General && report.cutoffs.General.minMarks) || Math.round(report.maxMarks * 0.5);
    // Verdict Badge
    if (report.isQualified) {
      this.resVerdictBadge.className = 'verdict-badge qualified';
      this.resVerdictBadge.innerHTML = isHindi
        ? `उत्तीर्ण (QUALIFIED) • स्कोर: ${report.totalScore} (सामान्य कट-ऑफ ${genCutoffMarks} अंक)`
        : `QUALIFIED • Score: ${report.totalScore} (Gen Cutoff ${genCutoffMarks} Marks)`;
    } else {
      this.resVerdictBadge.className = 'verdict-badge not-qualified';
      this.resVerdictBadge.innerHTML = isHindi
        ? `अनुत्तीर्ण (NOT QUALIFIED) • स्कोर: ${report.totalScore} (सामान्य कट-ऑफ ${genCutoffMarks} अंक आवश्यक)`
        : `NOT QUALIFIED • Score: ${report.totalScore} (${genCutoffMarks} Marks Needed for Gen Cutoff)`;
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
      this.resPaceIcon.innerText = report.paceCategory === 'Rapid' ? '⚡' : '⏱';
    }
    this.resPercentile.innerText = `${report.estPercentile}th`;

    // Render Official Cutoff Qualification Matrix Table
    if (this.cutoffTableBody && report.cutoffs) {
      this.cutoffTableBody.innerHTML = Object.entries(report.cutoffs).map(([key, cat]) => {
        const catName = isHindi ? cat.category_hi : cat.category;
        const statusBadge = cat.qualified
          ? `<span class="status-badge-qual">${isHindi ? 'उत्तीर्ण (Qualified)' : 'Qualified'}</span>`
          : `<span class="status-badge-miss">${isHindi ? 'कम रह गए (Missed)' : 'Missed'}</span>`;
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
      const isDel = q.isDeleted || q.correctAnswer === 'Deleted';
      const statusClass = isDel ? 'correct' : (q.isCorrect ? 'correct' : (q.isAttempted ? 'incorrect' : 'unattempted'));
      const statusText = isDel
        ? '<span style="color: #2563eb; font-weight: 700;">★ Full Credit (Question Cancelled by Commission)</span>'
        : (q.isCorrect 
            ? '<span style="color: #16a34a; font-weight: 700;">✔ Correct</span>' 
            : (q.isAttempted ? '<span style="color: #dc2626; font-weight: 700;">✘ Incorrect</span>' : '<span style="color: #64748b; font-weight: 700;">○ Unattempted</span>'));

      const questionStatement = isHindi && q.question_hi ? q.question_hi : q.question;
      const topicName = (isHindi && (q.topic_hi || (i18n && i18n.translateTopic(q.topic)))) || q.topic;
      const explanation = isHindi && q.explanation_hi ? q.explanation_hi : q.explanation;

      const optLetters = (q.options && q.options.E !== undefined) ? ['A', 'B', 'C', 'D', 'E'] : ['A', 'B', 'C', 'D'];
      const optionsHtml = optLetters.map(letter => {
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

  /* ================= LEGAL & ADSENSE COMPLIANCE MODAL ================= */
  openLegalModal(tabName = 'privacy') {
    if (!this.legalModal) return;
    if (this.legalTabs) {
      this.legalTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
    }
    this.renderLegalTabContent(tabName);
    if (this.legalModalBody) this.legalModalBody.scrollTop = 0;
    this.legalModal.classList.add('active');
  }

  renderLegalTabContent(tabName) {
    if (!this.legalModalBody) return;
    if (tabName === 'privacy') {
      this.legalModalBody.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 14px; flex-wrap:wrap; gap:8px;">
          <h4 style="color:var(--text-primary); margin:0; font-size:18px; font-weight:800;">🔒 Candidate Privacy Policy</h4>
          <span style="font-size:11.5px; font-weight:700; background:rgba(37,99,235,0.1); color:var(--primary); padding:3px 10px; border-radius:999px;">Zero Private Data Harvested</span>
        </div>
        <p style="color:var(--text-secondary); line-height:1.6; margin-bottom:16px;">
          Your privacy is protected by design. This portal runs <strong>100% client-side</strong>: your scores, test selections, answer responses, and performance stats reside exclusively in your device's local storage and are never uploaded, sold, or shared.
        </p>
        
        <div class="legal-section-card">
          <strong style="color:var(--text-primary); font-size:13.5px; display:block; margin-bottom:4px;">1. Client-Side Local Storage (Zero Tracking)</strong>
          <p style="font-size:12.5px; color:var(--text-secondary); margin:0; line-height:1.55;">
            All exam attempt history, bookmarks, and scorecard metrics use standard browser <code>localStorage</code>. No registration or login credentials are required to use this portal.
          </p>
        </div>

        <div class="legal-section-card">
          <strong style="color:var(--text-primary); font-size:13.5px; display:block; margin-bottom:4px;">2. Server Infrastructure & Edge Logs</strong>
          <p style="font-size:12.5px; color:var(--text-secondary); margin:0; line-height:1.55;">
            Hosting is powered by Vercel's global edge network. Standard non-identifiable web request logs (such as IP address, user-agent, and access timestamps) are collected automatically by edge servers solely for network caching, DDOS mitigation, and CDN uptime monitoring.
          </p>
        </div>

        <div class="legal-section-card">
          <strong style="color:var(--text-primary); font-size:13.5px; display:block; margin-bottom:4px;">3. Cookies & Google AdSense</strong>
          <p style="font-size:12.5px; color:var(--text-secondary); margin:0; line-height:1.55;">
            Google uses DART cookies to serve non-intrusive advertisements that fund server bandwidth. Users may manage or opt out of personalized cookies at any time via <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener" style="color:var(--primary); font-weight:700;">Google Ad Policies</a>.
          </p>
        </div>

        <div style="margin-top:14px; font-size:12.5px; color:var(--text-muted);">
          Questions or privacy audits? Email lead architect <strong>Niranjan Kumar Singh</strong> directly at <a href="mailto:niranjansingh1419@gmail.com" style="color:var(--primary); font-weight:700;">niranjansingh1419@gmail.com</a>.
        </div>
      `;
    } else if (tabName === 'terms') {
      this.legalModalBody.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 14px; flex-wrap:wrap; gap:8px;">
          <h4 style="color:var(--text-primary); margin:0; font-size:18px; font-weight:800;">📜 Terms of Service</h4>
          <span style="font-size:11.5px; font-weight:700; background:#dcfce7; color:#15803d; padding:3px 10px; border-radius:999px;">100% Free Public Resource</span>
        </div>
        <p style="color:var(--text-secondary); line-height:1.6; margin-bottom:16px;">
          By accessing the <strong>Bihar STET Paper II (Computer Science) CBT Mock Portal</strong>, you agree to these fair-use terms. This platform was created independently by <strong>Niranjan Kumar Singh</strong> to help teachers prepare for competitive examinations.
        </p>
        
        <div class="legal-section-card">
          <strong style="color:var(--text-primary); font-size:13.5px; display:block; margin-bottom:4px;">1. Pure Educational Objective</strong>
          <p style="font-size:12.5px; color:var(--text-secondary); margin:0; line-height:1.55;">
            This web application is strictly for self-assessment and academic simulation. Question datasets, pedagogical breakdowns, and timers are structured to mirror authentic examination environments under fair-use educational principles.
          </p>
        </div>

        <div class="legal-section-card">
          <strong style="color:var(--text-primary); font-size:13.5px; display:block; margin-bottom:4px;">2. Free Unrestricted Access</strong>
          <p style="font-size:12.5px; color:var(--text-secondary); margin:0; line-height:1.55;">
            All 23 verified mock papers and 1,950+ questions are provided without any paywalls, premium tiers, or registration barriers. Commercial redistribution or selling access to this portal is strictly prohibited.
          </p>
        </div>

        <div class="legal-section-card">
          <strong style="color:var(--text-primary); font-size:13.5px; display:block; margin-bottom:4px;">3. Intellectual Property</strong>
          <p style="font-size:12.5px; color:var(--text-secondary); margin:0; line-height:1.55;">
            The CBT test engine, palette state algorithms, responsive UI, and custom analytics code are authored by <strong>Niranjan Kumar Singh</strong>. Official examination marks and syllabus topics are property of their respective governing boards.
          </p>
        </div>
      `;
    } else if (tabName === 'disclaimer') {
      this.legalModalBody.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 14px; flex-wrap:wrap; gap:8px;">
          <h4 style="color:var(--text-primary); margin:0; font-size:18px; font-weight:800;">⚖️ Disclaimer &amp; Fair Use Notice</h4>
          <span style="font-size:11.5px; font-weight:700; background:#fef3c7; color:#b45309; padding:3px 10px; border-radius:999px;">Independent Educational Portal</span>
        </div>
        
        <div class="legal-section-card" style="border-left: 4px solid #f59e0b;">
          <strong style="color:var(--text-primary); font-size:13.5px; display:block; margin-bottom:4px;">🏛 No Government Affiliation</strong>
          <p style="font-size:12.5px; color:var(--text-secondary); margin:0; line-height:1.55;">
            This website is an independent initiative designed and maintained by <strong>Niranjan Kumar Singh</strong>. It is <strong>NOT</strong> affiliated with, endorsed by, or operated by the <strong>Bihar School Examination Board (BSEB)</strong>, the <strong>Bihar Public Service Commission (BPSC)</strong>, or the Department of Education, Bihar.
          </p>
        </div>

        <div class="legal-section-card">
          <strong style="color:var(--text-primary); font-size:13.5px; display:block; margin-bottom:4px;">🎯 Accuracy &amp; Official Gazettes</strong>
          <p style="font-size:12.5px; color:var(--text-secondary); margin:0; line-height:1.55;">
            While every effort has been taken to ensure 100% accuracy of answer keys and syllabus coverage, candidates must refer to official BSEB gazettes and notifications for official cutoff circulars, answer objection forms, and result disclosures.
          </p>
        </div>
      `;
    } else if (tabName === 'adsense') {
      this.legalModalBody.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 14px; flex-wrap:wrap; gap:8px;">
          <h4 style="color:var(--text-primary); margin:0; font-size:18px; font-weight:800;">🍪 Advertising &amp; Infrastructure Transparency</h4>
          <span style="font-size:11.5px; font-weight:700; background:rgba(37,99,235,0.1); color:var(--primary); padding:3px 10px; border-radius:999px;">Google AdSense Certified</span>
        </div>
        
        <p style="color:var(--text-secondary); line-height:1.6; margin-bottom:16px;">
          This portal participates in the Google AdSense program solely to offset hosting, CDN bandwidth, and database caching costs so that all mock exams remain 100% free for students and teachers across Bihar.
        </p>

        <div class="legal-section-card">
          <strong style="color:var(--text-primary); font-size:13.5px; display:block; margin-bottom:4px;">1. Ad Suppression During Active Exams</strong>
          <p style="font-size:12.5px; color:var(--text-secondary); margin:0; line-height:1.55;">
            We strictly enforce a <strong>zero-distraction policy</strong>: while you are inside an active CBT test session, all advertisements are completely suppressed to guarantee exam focus and zero cognitive interruption.
          </p>
        </div>

        <div class="legal-section-card">
          <strong style="color:var(--text-primary); font-size:13.5px; display:block; margin-bottom:4px;">2. Authorized Digital Sellers (ads.txt)</strong>
          <p style="font-size:12.5px; color:var(--text-secondary); margin:0; line-height:1.55;">
            In full compliance with Interactive Advertising Bureau (IAB) standards, our official ads file is publicly verifiable at <a href="/ads.txt" target="_blank" style="color:var(--primary); font-weight:700;">/ads.txt</a>.
          </p>
        </div>

        <div class="legal-section-card">
          <strong style="color:var(--text-primary); font-size:13.5px; display:block; margin-bottom:4px;">3. Cookie Opt-Out Controls</strong>
          <p style="font-size:12.5px; color:var(--text-secondary); margin:0; line-height:1.55;">
            Candidates may opt out of personalized interest-based advertising anytime via <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener" style="color:var(--primary); font-weight:700;">Google Ads Settings</a> or <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener" style="color:var(--primary); font-weight:700;">AboutAds.info</a>.
          </p>
        </div>
      `;
    } else if (tabName === 'author') {
      this.legalModalBody.innerHTML = `
        <div class="author-hero-card">
          <div style="display:flex; gap:22px; align-items:center; flex-wrap:wrap;">
            <div style="position:relative;">
              <picture>
                <source srcset="images/developer-profile.webp" type="image/webp">
                <img src="images/developer-profile.png" alt="Niranjan Kumar Singh - Systems Architect" width="100" height="100" class="dev-avatar-glow">
              </picture>
              <span style="position:absolute; bottom:-6px; right:-6px; background:#10b981; color:#fff; font-size:10px; font-weight:800; padding:3px 8px; border-radius:999px; box-shadow:0 2px 6px rgba(0,0,0,0.3); display:inline-flex; align-items:center; gap:4px; border:2px solid var(--bg-surface);">
                ✓ Verified
              </span>
            </div>
            <div style="flex:1; min-width:260px;">
              <div style="display:flex; align-items:center; gap:10px; margin-bottom:6px; flex-wrap:wrap;">
                <h4 style="font-size:24px; font-weight:800; margin:0; color:var(--text-primary); letter-spacing:-0.3px;">Niranjan Kumar Singh</h4>
                <span style="display:inline-flex; align-items:center; gap:6px; font-size:11.5px; font-weight:700; background:rgba(34, 197, 94, 0.12); color:#15803d; border:1px solid rgba(34, 197, 94, 0.3); padding:3px 10px; border-radius:999px;">
                  <span class="pulse-dot"></span> Active Architect
                </span>
              </div>
              <p style="font-size:14px; color:var(--primary); font-weight:700; margin:0 0 6px 0; display:flex; align-items:center; gap:6px;">
                <span>💻 Lead Software Engineer &amp; CBT Systems Architect</span>
              </p>
              <p style="font-size:12.5px; color:var(--text-muted); margin:0; line-height:1.5;">
                📍 Patna, Bihar, India • Dedicated to Free, High-Caliber Teaching Exam Preparation
              </p>
            </div>
          </div>
        </div>

        <div style="margin-bottom:20px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
            <span style="font-size:18px;">🎯</span>
            <h5 style="font-size:16px; font-weight:800; color:var(--text-primary); margin:0;">The Developer's Story &amp; Vision</h5>
          </div>
          <div class="quote-box">
            "Growing up in Bihar, I have seen first-hand how hardworking our teachers and students are. Yet, when preparing for competitive exams like <strong>Bihar STET Paper II</strong> and <strong>BPSC TRE</strong>, candidates are forced to pay hefty subscriptions for substandard test series with incorrect answer keys and lagging servers. I engineered this portal completely from scratch with a single promise: <strong>100% free forever, authentic TCS iON CBT parity, zero tracking, and zero latency</strong>. Every teacher in Bihar deserves access to the finest preparation tools without barriers."
          </div>
        </div>

        <div style="margin-bottom:22px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
            <span style="font-size:18px;">⚡</span>
            <h5 style="font-size:16px; font-weight:800; color:var(--text-primary); margin:0;">Engineering Highlights &amp; System Capabilities</h5>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(230px, 1fr)); gap:12px;">
            <div class="dev-stat-card">
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                <span style="font-size:16px;">⏱</span>
                <strong style="color:var(--text-primary); font-size:13.5px;">TCS iON CBT Parity</strong>
              </div>
              <span style="font-size:12px; color:var(--text-secondary); line-height:1.55; display:block;">
                Pixel-perfect replica of the official exam screen: question palette state machine, strict countdown timer, keyboard shortcuts (1-4, N, P, M, L), and section switching.
              </span>
            </div>
            <div class="dev-stat-card">
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                <span style="font-size:16px;">🌐</span>
                <strong style="color:var(--text-primary); font-size:13.5px;">Neural Bilingual Engine</strong>
              </div>
              <span style="font-size:12px; color:var(--text-secondary); line-height:1.55; display:block;">
                Instant zero-lag toggle between English, Hindi, and Dual mode with 100% conceptual explanations in both languages across all 1,950+ verified questions.
              </span>
            </div>
            <div class="dev-stat-card">
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                <span style="font-size:16px;">🔒</span>
                <strong style="color:var(--text-primary); font-size:13.5px;">Privacy First • Zero Telemetry</strong>
              </div>
              <span style="font-size:12px; color:var(--text-secondary); line-height:1.55; display:block;">
                No login forms, no personal data harvesting, and no backend response tracking. Your scores and attempts reside 100% privately on your local browser.
              </span>
            </div>
            <div class="dev-stat-card">
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                <span style="font-size:16px;">📚</span>
                <strong style="color:var(--text-primary); font-size:13.5px;">Exhaustive Syllabus Coverage</strong>
              </div>
              <span style="font-size:12px; color:var(--text-secondary); line-height:1.55; display:block;">
                23 Verified Mock Papers & Drills (1,950+ questions) covering Computer Science (100Q), Art of Teaching Pedagogy (30Q), and General Skills (20Q).
              </span>
            </div>
          </div>
        </div>

        <div style="margin-bottom:22px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
            <span style="font-size:18px;">🛠</span>
            <h5 style="font-size:15px; font-weight:700; color:var(--text-primary); margin:0;">Built With Modern Web Standards (Zero Bloat)</h5>
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            <span style="font-size:12px; font-weight:600; background:var(--bg-subtle); color:var(--text-secondary); border:1px solid var(--border-subtle); padding:4px 10px; border-radius:6px;">Pure Vanilla JavaScript (ES2022)</span>
            <span style="font-size:12px; font-weight:600; background:var(--bg-subtle); color:var(--text-secondary); border:1px solid var(--border-subtle); padding:4px 10px; border-radius:6px;">CSS3 Variables &amp; Responsive Grid</span>
            <span style="font-size:12px; font-weight:600; background:var(--bg-subtle); color:var(--text-secondary); border:1px solid var(--border-subtle); padding:4px 10px; border-radius:6px;">LocalStorage Persistence Engine</span>
            <span style="font-size:12px; font-weight:600; background:var(--bg-subtle); color:var(--text-secondary); border:1px solid var(--border-subtle); padding:4px 10px; border-radius:6px;">WCAG 2.1 Accessible Font Scaling</span>
            <span style="font-size:12px; font-weight:600; background:var(--bg-subtle); color:var(--text-secondary); border:1px solid var(--border-subtle); padding:4px 10px; border-radius:6px;">0 External NPM Dependencies</span>
            <span style="font-size:12px; font-weight:600; background:var(--bg-subtle); color:var(--text-secondary); border:1px solid var(--border-subtle); padding:4px 10px; border-radius:6px;">Edge CDN Deployed</span>
          </div>
        </div>

        <div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
            <span style="font-size:18px;">📫</span>
            <h5 style="font-size:15px; font-weight:700; color:var(--text-primary); margin:0;">Direct Contact &amp; Candidate Support</h5>
          </div>
          <p style="margin:0 0 12px 0; color:var(--text-secondary); font-size:13px; line-height:1.5;">
            Have feedback on a question, found an error in an answer key, or have suggestions for new mock tests? Reach out to me directly:
          </p>
          <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
            <a href="mailto:niranjansingh1419@gmail.com" class="btn btn-primary" style="padding:9px 18px; font-size:13px; text-decoration:none; display:inline-flex; align-items:center; gap:8px; border-radius:8px;">
              <span>✉</span> niranjansingh1419@gmail.com
            </a>
            <a href="https://www.instagram.com/niranjan.ks.in" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding:9px 18px; font-size:13px; text-decoration:none; display:inline-flex; align-items:center; gap:8px; border-radius:8px; background:linear-gradient(135deg, rgba(225,48,108,0.12), rgba(131,58,180,0.12)); border-color:rgba(225,48,108,0.3); color:var(--text-primary);">
              <span>📷</span> Instagram: @niranjan.ks.in
            </a>
          </div>
        </div>
      `;
    }
  }

  /* ================= PHASE 5 ENHANCEMENTS & MULTI-VIEW ENGINE ================= */
  showView(viewName) {
    const views = {
      lobby: this.lobbyView,
      exam: this.examView,
      result: this.resultView,
      dashboard: this.dashboardView,
      'topic-practice': this.topicPracticeView
    };

    Object.entries(views).forEach(([name, el]) => {
      if (el) {
        if (name === viewName) {
          el.classList.add('active');
          el.removeAttribute('hidden');
        } else {
          el.classList.remove('active');
          el.setAttribute('hidden', '');
        }
      }
    });

    const navbar = document.getElementById('global-navbar');
    if (navbar) {
      navbar.style.display = (viewName === 'exam') ? 'none' : 'flex';
    }

    if (viewName === 'exam') {
      document.body.classList.add('in-exam-mode');
    } else {
      document.body.classList.remove('in-exam-mode');
    }

    const navMap = {
      lobby: 'nav-link-lobby',
      dashboard: 'nav-link-dashboard',
      'topic-practice': 'nav-link-topic-practice'
    };
    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.remove('active');
      l.removeAttribute('aria-current');
    });
    if (navMap[viewName]) {
      const activeLink = document.getElementById(navMap[viewName]);
      if (activeLink) {
        activeLink.classList.add('active');
        activeLink.setAttribute('aria-current', 'page');
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  selectPaper(paperId) {
    const catalog = window.PAPERS_CATALOG || [];
    const paper = catalog.find(p => p.id === paperId);
    if (paper) {
      this.openModeModal(paper, 'cbt');
    } else {
      this.showRetiredPaperNotice(paperId);
    }
  }

  showRetiredPaperNotice(paperId) {
    if (this.retiredModal) {
      this.retiredModal.classList.add('active');
    } else {
      alert(`The requested paper (${paperId}) is no longer in the active catalog.`);
      window.location.hash = '#/lobby';
    }
  }

  renderActiveAttemptBanner() {
    const container = document.getElementById('active-attempt-container');
    if (!container) return;

    const activeRaw = localStorage.getItem('BSTET_ACTIVE_ATTEMPT');
    if (!activeRaw) {
      container.innerHTML = '';
      return;
    }

    try {
      const attempt = JSON.parse(activeRaw);
      if (!attempt || !attempt.paperId) {
        container.innerHTML = '';
        return;
      }

      const now = Date.now();
      let remainingText = '';
      if (attempt.mode === 'cbt' && attempt.endTime) {
        const remSec = Math.max(0, Math.floor((attempt.endTime - now) / 1000));
        if (remSec <= 0) {
          localStorage.removeItem('BSTET_ACTIVE_ATTEMPT');
          container.innerHTML = '';
          return;
        }
        const mins = Math.floor(remSec / 60);
        const secs = remSec % 60;
        remainingText = `${mins}m ${secs}s remaining`;
      } else {
        remainingText = 'Untimed Practice Mode';
      }

      const isHi = window.BSTET_I18N && window.BSTET_I18N.currentLang === 'hi';
      const currentQ = (attempt.currentIndex || 0) + 1;

      container.innerHTML = `
        <div class="active-attempt-banner">
          <div class="attempt-banner-info">
            <h4>${isHi ? 'चालू परीक्षा जारी रखें (Active Exam in Progress)' : 'Active Exam in Progress'}</h4>
            <p>
              <strong>${attempt.paperTitle || attempt.paperId}</strong> • 
              ${isHi ? `वर्तमान प्रश्न: ${currentQ}` : `Current Question: ${currentQ}`} • 
              <span style="color: var(--primary); font-weight: 700;">${remainingText}</span>
            </p>
          </div>
          <div class="attempt-banner-actions">
            <button class="btn btn-primary btn-sm" id="resume-active-attempt-btn">
              ${isHi ? 'परीक्षा जारी रखें' : 'Resume Exam'}
            </button>
            <button class="btn btn-secondary btn-sm" id="discard-active-attempt-btn">
              ${isHi ? 'रद्द करें' : 'Discard'}
            </button>
          </div>
        </div>
      `;

      document.getElementById('resume-active-attempt-btn')?.addEventListener('click', () => {
        this.launchPaperById(attempt.paperId, attempt.mode || 'cbt', true);
      });

      document.getElementById('discard-active-attempt-btn')?.addEventListener('click', () => {
        const confirmMsg = isHi
          ? 'क्या आप इस चालू परीक्षा को रद्द करना चाहते हैं?'
          : 'Discard this in-progress test attempt?';
        if (confirm(confirmMsg)) {
          localStorage.removeItem('BSTET_ACTIVE_ATTEMPT');
          localStorage.removeItem(`BSTET_EXAM_SESSION_${attempt.paperId}`);
          container.innerHTML = '';
        }
      });
    } catch (e) {
      container.innerHTML = '';
    }
  }

  renderSyllabusMap() {
    const grid = document.getElementById('syllabus-grid');
    if (!grid || grid.children.length > 0) return; // already rendered

    const units = [
      { id: "unit1", name: "Unit 1: Digital Logic & Number Systems", name_hi: "यूनिट 1: डिजिटल लॉजिक और नंबर सिस्टम", desc: "Boolean algebra, logic gates, K-maps, flip-flops, multiplexers, counters", count: "10-12 Qs" },
      { id: "unit2", name: "Unit 2: Computer Organization & Architecture", name_hi: "यूनिट 2: कंप्यूटर संगठन और वास्तुकला", desc: "CPU architecture, memory hierarchy, cache, pipelining, instruction cycles", count: "10-12 Qs" },
      { id: "unit3", name: "Unit 3: Programming in C & C++", name_hi: "यूनिट 3: सी एवं सी++ प्रोग्रामिंग", desc: "Control structures, pointers, functions, arrays, OOP, classes, inheritance", count: "12-14 Qs" },
      { id: "unit4", name: "Unit 4: Data Structures", name_hi: "यूनिट 4: डेटा संरचनाएं", desc: "Arrays, stacks, queues, linked lists, trees, BST, heaps, graphs", count: "12-15 Qs" },
      { id: "unit5", name: "Unit 5: Algorithms & Complexity", name_hi: "यूनिट 5: एल्गोरिदम और जटिलता", desc: "Asymptotic notation, sorting, searching, greedy, dynamic programming", count: "8-10 Qs" },
      { id: "unit6", name: "Unit 6: Operating Systems", name_hi: "यूनिट 6: ऑपरेटिंग सिस्टम", desc: "Processes, threads, CPU scheduling, semaphores, deadlocks, paging", count: "10-12 Qs" },
      { id: "unit7", name: "Unit 7: Database Management Systems", name_hi: "यूनिट 7: डेटाबेस प्रबंधन प्रणाली (DBMS)", desc: "ER modeling, relational model, SQL queries, normalization (1NF-BCNF), ACID", count: "12-14 Qs" },
      { id: "unit8", name: "Unit 8: Computer Networks", name_hi: "यूनिट 8: कंप्यूटर नेटवर्क", desc: "OSI & TCP/IP layers, IPv4/IPv6, routing protocols, TCP/UDP, DNS, HTTP", count: "10-12 Qs" },
      { id: "unit9", name: "Unit 9: Software Engineering", name_hi: "यूनिट 9: सॉफ्टवेयर इंजीनियरिंग", desc: "SDLC models, Agile/Scrum, requirement engineering, testing, UML", count: "6-8 Qs" },
      { id: "unit10", name: "Unit 10: Web Technologies", name_hi: "यूनिट 10: वेब टेक्नोलॉजीज", desc: "HTML5 semantic markup, CSS3 styling, JavaScript fundamentals, DOM", count: "6-8 Qs" },
      { id: "unit11", name: "Unit 11: Python Programming", name_hi: "यूनिट 11: पायथन प्रोग्रामिंग", desc: "Syntax, lists, tuples, dicts, functions, OOP in Python, exception handling", count: "6-8 Qs" },
      { id: "unit12", name: "Unit 12: Artificial Intelligence & ML Basics", name_hi: "यूनिट 12: आर्टिफिशियल इंटेलिजेंस एवं एमएल", desc: "Search algorithms, knowledge representation, expert systems, ML basics", count: "4-6 Qs" },
      { id: "unit13", name: "Unit 13: Cyber Security & Cryptography", name_hi: "यूनिट 13: साइबर सुरक्षा एवं क्रिप्टोग्राफी", desc: "Symmetric/asymmetric ciphers, RSA, hash functions, firewalls, attacks", count: "4-6 Qs" },
      { id: "unit14", name: "Unit 14: Theory of Computation & Automata", name_hi: "यूनिट 14: ऑटोमेटा सिद्धांत", desc: "DFA, NFA, regular languages, context-free grammar, Turing machines", count: "4-6 Qs" },
      { id: "unit15", name: "Unit 15: Emerging Technologies & Cloud", name_hi: "यूनिट 15: उभरती प्रौद्योगिकियां एवं क्लाउड", desc: "Cloud computing (IaaS/PaaS/SaaS), virtualization, IoT fundamentals", count: "4-6 Qs" },
      { id: "pedagogy", name: "Art of Teaching (Pedagogy)", name_hi: "शिक्षण कला (Pedagogy)", desc: "Teaching maxims, lesson planning, micro-teaching, Bloom's taxonomy, evaluation", count: "30 Marks" },
      { id: "general", name: "General Skills (GK, Math, Reasoning)", name_hi: "सामान्य दक्षता (GK, गणित, रीजनिंग)", desc: "Bihar GK, environmental science, numerical ability, logical deduction", count: "20 Marks" }
    ];

    const isHi = window.BSTET_I18N && window.BSTET_I18N.currentLang === 'hi';

    grid.innerHTML = units.map(u => `
      <div class="unit-card">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span class="badge badge-official" style="font-size: 11px;">${u.count}</span>
          </div>
          <h4 class="unit-card-title">${isHi ? u.name_hi : u.name}</h4>
          <p class="unit-card-desc">${u.desc}</p>
        </div>
        <button class="btn btn-sm btn-outline practice-unit-btn" data-unit="${u.id}" style="width: 100%; margin-top: 8px;">
          ${isHi ? 'अभ्यास शुरू करें &rarr;' : 'Practice Unit &rarr;'}
        </button>
      </div>
    `).join('');

    grid.querySelectorAll('.practice-unit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const unitId = btn.dataset.unit;
        window.location.hash = `#/topic-practice?unit=${encodeURIComponent(unitId)}`;
      });
    });
  }

  bindKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT')) {
        return;
      }

      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
        return;
      }

      if (e.key === '?' || (e.shiftKey && e.key === '?') || (e.key === 'h' && !e.ctrlKey && !e.metaKey)) {
        e.preventDefault();
        if (this.shortcutsModal) {
          this.shortcutsModal.classList.toggle('active');
        }
        return;
      }

      if (this.examView && this.examView.classList.contains('active')) {
        const key = e.key.toUpperCase();
        if (['1', '2', '3', '4'].includes(e.key)) {
          const map = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
          this.engine.selectOption(map[e.key]);
          this.renderQuestionView();
          this.renderPalette();
        } else if (['A', 'B', 'C', 'D'].includes(key) && !e.ctrlKey && !e.metaKey) {
          this.engine.selectOption(key);
          this.renderQuestionView();
          this.renderPalette();
        } else if (key === 'N') {
          e.preventDefault();
          this.engine.saveAndNext();
        } else if (key === 'P') {
          e.preventDefault();
          this.engine.prevQuestion();
        } else if (key === 'M') {
          e.preventDefault();
          this.engine.markForReview();
        } else if (key === 'C') {
          e.preventDefault();
          this.engine.clearResponse();
          this.renderQuestionView();
          this.renderPalette();
        } else if (key === 'L') {
          e.preventDefault();
          this.toggleExamLanguage();
        }
      }
    });
  }

  updateBookmarkButton(isBookmarked) {
    if (!this.bookmarkQBtn) return;
    const txt = document.getElementById('bookmark-btn-text');
    if (isBookmarked) {
      this.bookmarkQBtn.style.color = 'var(--primary)';
      this.bookmarkQBtn.style.borderColor = 'var(--primary)';
      if (txt) txt.textContent = 'Bookmarked';
    } else {
      this.bookmarkQBtn.style.color = '';
      this.bookmarkQBtn.style.borderColor = '';
      if (txt) txt.textContent = 'Bookmark';
    }
  }

  updateCategoryCutoffStatus(report) {
    const reportData = report || this.lastAnalyticsReport;
    if (!reportData || !this.categoryQualStatus) return;

    const select = document.getElementById('cutoff-category-select');
    const categoryKey = select ? select.value : 'UR';

    const cutoffs = {
      UR: { name: "General (UR)", pct: 50, marks: (reportData.maxMarks * 0.50) },
      BC: { name: "Backward Class (BC)", pct: 45.5, marks: (reportData.maxMarks * 0.455) },
      EBC: { name: "Extremely Backward Class (EBC)", pct: 42.5, marks: (reportData.maxMarks * 0.425) },
      SC_ST_FEMALE: { name: "SC / ST / Divyang / Female", pct: 40, marks: (reportData.maxMarks * 0.40) }
    };

    const target = cutoffs[categoryKey] || cutoffs.UR;
    const margin = (reportData.totalScore - target.marks).toFixed(2);
    const isQual = reportData.totalScore >= target.marks;
    const isHi = window.BSTET_I18N && window.BSTET_I18N.currentLang === 'hi';

    if (isQual) {
      this.categoryQualStatus.className = 'qualification-badge qualified';
      this.categoryQualStatus.innerHTML = isHi
        ? `🎉 उत्तीर्ण (QUALIFIED) • कट-ऑफ से +${margin} अंक अधिक`
        : `🎉 QUALIFIED • +${margin} Marks above ${target.name} Cutoff (${target.marks})`;
    } else {
      this.categoryQualStatus.className = 'qualification-badge not-qualified';
      this.categoryQualStatus.innerHTML = isHi
        ? `⚠️ अनुत्तीर्ण (NOT QUALIFIED) • कट-ऑफ से ${margin} अंक कम`
        : `⚠️ NOT QUALIFIED • ${margin} Marks below ${target.name} Cutoff (${target.marks})`;
    }
  }

  retryWrongQuestions() {
    if (!this.lastAnalyticsReport || !this.lastAnalyticsReport.questionReviews) {
      alert('No evaluation report found to retry wrong questions.');
      return;
    }

    const wrongQs = this.lastAnalyticsReport.questionReviews.filter(q => !q.isCorrect);
    if (wrongQs.length === 0) {
      alert('🎉 Outstanding! You scored 100% on this test — zero incorrect questions to retry!');
      return;
    }

    const retryPaper = {
      id: `${this.currentPaper ? this.currentPaper.id : 'test'}_wrong_retry`,
      title: `Retry Incorrect Questions: ${this.currentPaper ? this.currentPaper.title : 'Review Set'}`,
      subtitle: `Targeted conceptual mastery drill of ${wrongQs.length} questions missed in your last attempt`,
      category: 'Sectional Drill',
      badge: 'Targeted Review',
      badgeClass: 'badge-drill',
      difficulty: 'Targeted',
      totalQuestions: wrongQs.length,
      totalMarks: wrongQs.length,
      durationMinutes: Math.max(10, Math.ceil(wrongQs.length * 1.5)),
      questions: wrongQs.map((q, idx) => ({ ...q, questionNumber: idx + 1 })),
      sections: [{
        id: 'wrong_review',
        name: 'Incorrect Questions Review',
        startQ: 1,
        endQ: wrongQs.length,
        total: wrongQs.length
      }]
    };

    this.launchPaper(retryPaper, 'practice');
  }

  renderDashboard() {
    const history = (window.ExamAnalytics && ExamAnalytics.getHistory) ? ExamAnalytics.getHistory() : [];
    const totalTests = history.length;
    const avgScore = totalTests > 0 ? (history.reduce((a, b) => a + (parseFloat(b.percentage) || 0), 0) / totalTests).toFixed(1) : 0;
    const bestScore = totalTests > 0 ? Math.max(...history.map(b => parseFloat(b.percentage) || 0)).toFixed(1) : 0;

    // Compute study streak
    let streak = 0;
    if (totalTests > 0) {
      const dates = history.map(h => new Date(h.timestamp).toDateString());
      const uniqueDays = [...new Set(dates)];
      streak = uniqueDays.length;
    }

    const elTotal = document.getElementById('dash-total-tests');
    const elAvg = document.getElementById('dash-avg-score');
    const elBest = document.getElementById('dash-best-score');
    const elStreak = document.getElementById('dash-study-streak');

    if (elTotal) elTotal.textContent = String(totalTests);
    if (elAvg) elAvg.textContent = `${avgScore}%`;
    if (elBest) elBest.textContent = `${bestScore}%`;
    if (elStreak) elStreak.textContent = `${streak} ${streak === 1 ? 'Day' : 'Days'}`;

    // Render SVG Trend Chart
    const trendContainer = document.getElementById('trend-svg-container');
    if (trendContainer) {
      if (totalTests === 0) {
        trendContainer.innerHTML = `<p style="text-align: center; color: var(--text-tertiary); padding-top: 80px;">No test attempts recorded yet. Complete a mock test to see your accuracy trend!</p>`;
      } else {
        const recent = history.slice(0, 10).reverse();
        const pts = recent.map((h, i) => {
          const x = 40 + i * (520 / Math.max(1, recent.length - 1));
          const y = 180 - (parseFloat(h.percentage || 0) / 100) * 150;
          return { x, y, pct: h.percentage, title: h.paperTitle || `Test ${i+1}` };
        });

        const pointsStr = pts.map(p => `${p.x},${p.y}`).join(' ');
        const firstX = pts[0].x;
        const lastX = pts[pts.length - 1].x;
        const areaPointsStr = `${firstX},180 ${pointsStr} ${lastX},180`;

        trendContainer.innerHTML = `
          <svg viewBox="0 0 600 220" class="trend-svg" style="overflow: visible;">
            <defs>
              <linearGradient id="trendAreaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.32"/>
                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.01"/>
              </linearGradient>
              <filter id="pointShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.25"/>
              </filter>
            </defs>
            <line x1="40" y1="30" x2="560" y2="30" stroke="var(--border-subtle)" stroke-dasharray="4" />
            <text x="15" y="34" fill="var(--text-tertiary)" font-size="11" font-weight="600">100%</text>
            <line x1="40" y1="105" x2="560" y2="105" stroke="var(--border-subtle)" stroke-dasharray="4" />
            <text x="20" y="109" fill="var(--text-tertiary)" font-size="11" font-weight="600">50%</text>
            <line x1="40" y1="180" x2="560" y2="180" stroke="var(--border-strong)" />
            <text x="25" y="184" fill="var(--text-tertiary)" font-size="11" font-weight="600">0%</text>

            <polygon fill="url(#trendAreaGrad)" points="${areaPointsStr}" />
            <polyline fill="none" stroke="var(--primary)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" points="${pointsStr}" />
            ${pts.map(p => `
              <circle cx="${p.x}" cy="${p.y}" r="6" fill="var(--bg-surface)" stroke="var(--primary)" stroke-width="2.5" filter="url(#pointShadow)" />
              <rect x="${p.x - 18}" y="${p.y - 28}" width="36" height="18" rx="4" fill="var(--bg-surface)" stroke="var(--border-subtle)" stroke-width="1" />
              <text x="${p.x}" y="${p.y - 15}" fill="var(--text-primary)" font-size="11" font-weight="700" text-anchor="middle">${p.pct}%</text>
            `).join('')}
          </svg>
        `;
      }
    }

    // Render Table
    const tbody = document.getElementById('dash-history-table-body');
    if (tbody) {
      if (totalTests === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 24px; color: var(--text-tertiary);">No historical tests found. Start your first CBT mock test from the home screen!</td></tr>`;
      } else {
        tbody.innerHTML = history.map(h => {
          const dateStr = new Date(h.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
          const statusBadge = h.isQualified
            ? `<span class="status-badge-qual" style="display:inline-flex; align-items:center; gap:4px; padding:3px 10px; border-radius:12px; font-size:11px; font-weight:700; background:rgba(22,163,74,0.12); color:#16a34a; border:1px solid rgba(22,163,74,0.3);"><span style="width:6px; height:6px; border-radius:50%; background:#16a34a;"></span> Qualified</span>`
            : `<span class="status-badge-miss" style="display:inline-flex; align-items:center; gap:4px; padding:3px 10px; border-radius:12px; font-size:11px; font-weight:700; background:rgba(239,68,68,0.12); color:#ef4444; border:1px solid rgba(239,68,68,0.3);"><span style="width:6px; height:6px; border-radius:50%; background:#ef4444;"></span> Missed</span>`;

          return `
            <tr>
              <td>${dateStr}</td>
              <td><strong>${h.paperTitle || h.paperId}</strong></td>
              <td><span style="font-weight: 700; color: var(--primary);">${h.score}</span> / ${h.maxMarks}</td>
              <td>${h.accuracy}%</td>
              <td>${statusBadge}</td>
              <td>
                <button class="btn btn-sm btn-outline view-hist-btn" data-id="${h.id}">Review</button>
                <button class="btn btn-sm btn-secondary del-hist-btn" data-id="${h.id}" style="color: var(--danger); margin-left: 4px;">✕</button>
              </td>
            </tr>
          `;
        }).join('');

        tbody.querySelectorAll('.view-hist-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const item = history.find(h => String(h.id) === String(id));
            if (item) this.displayHistoricalResult(item);
          });
        });

        tbody.querySelectorAll('.del-hist-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            if (confirm('Delete this test attempt from history?')) {
              localStorage.removeItem(`BSTET_REPORT_${id}`);
              const updated = history.filter(h => String(h.id) !== String(id));
              localStorage.setItem('BSTET_EXAM_HISTORY', JSON.stringify(updated));
              this.renderDashboard();
            }
          });
        });
      }
    }
  }

  exportHistoryJson() {
    try {
      const historyRaw = localStorage.getItem('BSTET_EXAM_HISTORY') || '[]';
      const history = JSON.parse(historyRaw);
      const reports = {};
      history.forEach(h => {
        const rep = localStorage.getItem(`BSTET_REPORT_${h.id}`);
        if (rep) reports[h.id] = JSON.parse(rep);
      });

      const exportPayload = {
        app: "Bihar STET Paper II CS CBT Portal",
        version: "2.5.0",
        exportedAt: new Date().toISOString(),
        history,
        reports
      };

      const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `bstet_cbt_history_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      alert('Could not export test history: ' + e.message);
    }
  }

  importHistoryJson(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (!data || !Array.isArray(data.history)) {
          throw new Error('Invalid backup file schema. Expected a valid history array.');
        }

        const currentHistoryRaw = localStorage.getItem('BSTET_EXAM_HISTORY');
        const currentHistory = currentHistoryRaw ? JSON.parse(currentHistoryRaw) : [];
        const existingIds = new Set(currentHistory.map(h => String(h.id)));

        let mergedCount = 0;
        data.history.forEach(h => {
          if (!existingIds.has(String(h.id))) {
            currentHistory.push(h);
            existingIds.add(String(h.id));
            mergedCount++;
          }
        });

        // Import reports if present
        if (data.reports) {
          Object.entries(data.reports).forEach(([id, rep]) => {
            localStorage.setItem(`BSTET_REPORT_${id}`, JSON.stringify(rep));
          });
        }

        currentHistory.sort((a, b) => b.timestamp - a.timestamp);
        localStorage.setItem('BSTET_EXAM_HISTORY', JSON.stringify(currentHistory));

        alert(`Successfully imported ${mergedCount} historical test attempts!`);
        this.renderDashboard();
      } catch (err) {
        alert('Failed to import backup: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  displayHistoricalResult(attempt) {
    const report = ExamAnalytics.getAttempt(attempt.id);
    if (report) {
      this.lastAnalyticsReport = report;
      this.showResultView(report);
      window.location.hash = '#/result';
    } else {
      alert('Detailed scorecard record not found for this attempt.');
    }
  }

  renderTopicPractice(unitParam) {
    const grid = document.getElementById('topic-units-grid');
    if (!grid) return;

    const units = [
      { id: "unit1", name: "Unit 1: Digital Logic & Number Systems", name_hi: "डिजिटल लॉजिक और नंबर सिस्टम" },
      { id: "unit2", name: "Unit 2: Computer Organization & Architecture", name_hi: "कंप्यूटर संगठन और वास्तुकला" },
      { id: "unit3", name: "Unit 3: Programming in C & C++", name_hi: "सी एवं सी++ प्रोग्रामिंग" },
      { id: "unit4", name: "Unit 4: Data Structures", name_hi: "डेटा संरचनाएं" },
      { id: "unit5", name: "Unit 5: Algorithms & Complexity", name_hi: "एल्गोरिदम और जटिलता" },
      { id: "unit6", name: "Unit 6: Operating Systems", name_hi: "ऑपरेटिंग सिस्टम" },
      { id: "unit7", name: "Unit 7: Database Management Systems", name_hi: "डेटाबेस प्रबंधन प्रणाली" },
      { id: "unit8", name: "Unit 8: Computer Networks", name_hi: "कंप्यूटर नेटवर्क" },
      { id: "unit9", name: "Unit 9: Software Engineering", name_hi: "सॉफ्टवेयर इंजीनियरिंग" },
      { id: "unit10", name: "Unit 10: Web Technologies", name_hi: "वेब टेक्नोलॉजीज" },
      { id: "unit11", name: "Unit 11: Python Programming", name_hi: "पायथन प्रोग्रामिंग" },
      { id: "unit12", name: "Unit 12: Artificial Intelligence & ML Basics", name_hi: "आर्टिफिशियल इंटेलिजेंस एवं एमएल" },
      { id: "unit13", name: "Unit 13: Cyber Security & Cryptography", name_hi: "साइबर सुरक्षा एवं क्रिप्टोग्राफी" },
      { id: "unit14", name: "Unit 14: Theory of Computation & Automata", name_hi: "ऑटोमेटा सिद्धांत" },
      { id: "unit15", name: "Unit 15: Emerging Technologies & Cloud", name_hi: "क्लाउड एवं उभरती प्रौद्योगिकियां" },
      { id: "pedagogy", name: "Art of Teaching (Pedagogy)", name_hi: "शिक्षण कला (Pedagogy)" },
      { id: "general", name: "General Skills (GK, Math, Reasoning)", name_hi: "सामान्य दक्षता (GK, गणित, रीजनिंग)" }
    ];

    const isHi = window.BSTET_I18N && window.BSTET_I18N.currentLang === 'hi';

    grid.innerHTML = units.map(u => {
      const isChecked = unitParam ? (u.id === unitParam) : true;
      return `
        <label class="unit-checkbox-label">
          <input type="checkbox" value="${u.id}" ${isChecked ? 'checked' : ''}>
          <span>${isHi ? u.name_hi : u.name}</span>
        </label>
      `;
    }).join('');
  }

  async startCustomTopicPractice() {
    const checkedBoxes = Array.from(document.querySelectorAll('#topic-units-grid input[type="checkbox"]:checked'));
    if (checkedBoxes.length === 0) {
      alert('Please select at least one syllabus unit to practice.');
      return;
    }

    const selectedUnits = checkedBoxes.map(cb => cb.value);
    const countSelect = document.getElementById('topic-q-count');
    const targetCount = countSelect ? parseInt(countSelect.value, 10) : 25;
    const modeSelect = document.getElementById('topic-mode-select');
    const mode = modeSelect ? modeSelect.value : 'practice';

    // Collect questions from available loaded papers or drills
    const catalog = window.PAPERS_CATALOG || [];
    let pool = [];

    for (const p of catalog) {
      const data = await this.loadPaperData(p);
      if (data && Array.isArray(data.questions)) {
        data.questions.forEach(q => {
          const qTopic = (q.topic || '').toLowerCase();
          const match = selectedUnits.some(u => {
            if (u === 'pedagogy') return qTopic.includes('teaching') || qTopic.includes('pedagogy') || qTopic.includes('art of teaching');
            if (u === 'general') return qTopic.includes('math') || qTopic.includes('reasoning') || qTopic.includes('gk') || qTopic.includes('general');
            if (u === 'unit1') return qTopic.includes('logic') || qTopic.includes('boolean') || qTopic.includes('circuit');
            if (u === 'unit2') return qTopic.includes('organization') || qTopic.includes('architecture') || qTopic.includes('cpu');
            if (u === 'unit3') return qTopic.includes('c++') || qTopic.includes('programming in c');
            if (u === 'unit4') return qTopic.includes('data structure') || qTopic.includes('tree') || qTopic.includes('stack') || qTopic.includes('queue');
            if (u === 'unit5') return qTopic.includes('algorithm') || qTopic.includes('sorting') || qTopic.includes('complexity');
            if (u === 'unit6') return qTopic.includes('operating') || qTopic.includes('process') || qTopic.includes('deadlock');
            if (u === 'unit7') return qTopic.includes('database') || qTopic.includes('sql') || qTopic.includes('dbms');
            if (u === 'unit8') return qTopic.includes('network') || qTopic.includes('tcp') || qTopic.includes('osi');
            if (u === 'unit9') return qTopic.includes('software') || qTopic.includes('sdlc') || qTopic.includes('testing');
            if (u === 'unit10') return qTopic.includes('web') || qTopic.includes('html') || qTopic.includes('css');
            if (u === 'unit11') return qTopic.includes('python');
            if (u === 'unit12') return qTopic.includes('intelligence') || qTopic.includes('machine learning') || qTopic.includes('ai');
            if (u === 'unit13') return qTopic.includes('security') || qTopic.includes('cryptography');
            if (u === 'unit14') return qTopic.includes('theory') || qTopic.includes('automata') || qTopic.includes('compiler');
            if (u === 'unit15') return qTopic.includes('cloud') || qTopic.includes('emerging');
            return true;
          });
          if (match) pool.push(q);
        });
      }
      if (pool.length >= targetCount * 3) break;
    }

    if (pool.length === 0 && catalog[0]) {
      const fallbackData = await this.loadPaperData(catalog[0]);
      if (fallbackData) pool = fallbackData.questions;
    }

    const sampled = pool.sort(() => 0.5 - Math.random()).slice(0, targetCount);

    const customPaper = {
      id: `custom_topic_${Date.now()}`,
      title: `Topic Practice (${selectedUnits.length} Units)`,
      subtitle: `Focused practice drill of ${sampled.length} authentic questions`,
      category: 'Sectional Drill',
      badge: 'Custom Practice',
      badgeClass: 'badge-drill',
      difficulty: 'Targeted',
      totalQuestions: sampled.length,
      totalMarks: sampled.length,
      durationMinutes: Math.max(10, Math.ceil(sampled.length * 1.5)),
      questions: sampled.map((q, idx) => ({ ...q, questionNumber: idx + 1 })),
      sections: [{
        id: 'topic_practice',
        name: 'Selected Topic Questions',
        startQ: 1,
        endQ: sampled.length,
        total: sampled.length
      }]
    };

    this.launchPaper(customPaper, mode);
  }
}

// Initialize application on DOM load (safe for deferred scripts)
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
  });
} else {
  window.app = new App();
}
