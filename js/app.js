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
    this._paperLoadPromises = {};

    this.initElements();
    this.bindEvents();
    this.initTheme();
    this.initLanguage();
    this.renderLobby();
    this.handleUrlParams();
    this.setupJustInTimePrefetch();
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

    // Legal & Privacy Policy Modal (Google AdSense Compliance)
    this.legalModal = document.getElementById('legal-modal');
    this.legalModalBody = document.getElementById('legal-modal-body');
    this.closeLegalModalBtn = document.getElementById('close-legal-modal-btn');
    this.legalModalOkBtn = document.getElementById('legal-modal-ok-btn');
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
        this.toggleQuestionLanguage();
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
    if (this.legalModalOkBtn) {
      this.legalModalOkBtn.addEventListener('click', () => this.legalModal.classList.remove('active'));
    }

    if (this.legalTabs) {
      this.legalTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          this.legalTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          this.renderLegalTabContent(tab.dataset.tab);
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
      else if (e.key === 'l' || e.key === 'L' || e.key === 'h' || e.key === 'H') this.toggleQuestionLanguage();
    });
  }

  /* ================= IN-EXAM QUESTION LANGUAGE SWITCHER (PER-QUESTION ONLY) ================= */
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

    this.engine.setBaseLanguage(lang, true);
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

    // Update card action buttons
    const cbtLabel = i18n.t('start_cbt') || '⚡ Start CBT Mock';
    const practiceLabel = i18n.t('practice_mode') || '📖 Practice Mode';
    document.querySelectorAll('.paper-card button[data-action="cbt"]').forEach(b => b.innerText = cbtLabel);
    document.querySelectorAll('.paper-card button[data-action="practice"]').forEach(b => b.innerText = practiceLabel);

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
    const cards = this.papersGrid ? this.papersGrid.querySelectorAll('.paper-card') : [];
    const catalog = window.PAPERS_CATALOG || [];
    const i18n = window.BSTET_I18N;

    // Fast path: if static cards already exist in DOM, toggle visibility without triggering layout shift
    if (cards.length > 0) {
      cards.forEach(card => {
        const cat = card.dataset.category;
        let show = false;
        if (this.currentFilter === 'all') show = true;
        else if (this.currentFilter === 'official') show = (cat === 'Official PYQ');
        else if (this.currentFilter === 'predicted') show = (cat === 'Predicted Mock');
        else if (this.currentFilter === 'drill') show = (cat === 'Sectional Drill');
        card.style.display = show ? 'flex' : 'none';
      });
      this.renderHistory();
      return;
    }

    if (!this.papersGrid) return;
    this.papersGrid.innerHTML = '';

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
      card.dataset.id = paper.id;
      card.dataset.category = paper.category;
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
  loadPaperData(meta) {
    if (!meta) return Promise.resolve(null);
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
    if (existing) return Promise.resolve(existing);

    if (!this._paperLoadPromises) this._paperLoadPromises = {};
    if (this._paperLoadPromises[meta.jsFile]) {
      return this._paperLoadPromises[meta.jsFile];
    }

    this._paperLoadPromises[meta.jsFile] = new Promise((resolve, reject) => {
      const existingScript = document.querySelector(`script[data-paper-file="${meta.jsFile}"]`);
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve(resolveData()));
        existingScript.addEventListener('error', (e) => reject(e));
        return;
      }

      const script = document.createElement('script');
      script.src = `js/data/${meta.jsFile}?v=20261025_02`;
      script.async = true;
      script.dataset.paperFile = meta.jsFile;
      script.onload = () => resolve(resolveData());
      script.onerror = (err) => {
        delete this._paperLoadPromises[meta.jsFile];
        reject(new Error(`Failed to load paper file: ${meta.jsFile}`));
      };
      document.head.appendChild(script);
    });

    return this._paperLoadPromises[meta.jsFile];
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

    try {
      const paperData = await this.loadPaperData(this.selectedPaperMeta);
      if (!paperData) {
        alert('Error loading question paper data.');
        return;
      }
      this.launchPaper(paperData, mode);
    } catch (err) {
      console.error(err);
      alert('Failed to load examination paper. Please check your internet connection.');
    } finally {
      if (this.startExamBtn) {
        this.startExamBtn.disabled = false;
        this.startExamBtn.innerText = originalText;
      }
    }
  }

  /* ================= EXAM LAUNCH & SCREEN ================= */
  async launchPaperById(paperId, mode = 'cbt') {
    if (!window.PAPERS_CATALOG) return false;
    const norm = (s) => (s || '').toLowerCase().replace(/[-_\s]/g, '');
    const meta = window.PAPERS_CATALOG.find(p => norm(p.id) === norm(paperId));
    if (!meta) return false;

    this.selectedPaperMeta = meta;
    try {
      const paperData = await this.loadPaperData(meta);
      if (!paperData) {
        console.warn('Could not locate paper dataset for', paperId, meta);
        return false;
      }
      this.launchPaper(paperData, mode);
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

      // 2. Filter deep-linking: ?filter=official, ?filter=predicted, ?filter=drill, ?filter=all
      const filterParam = params.get('filter');
      if (filterParam && ['all', 'official', 'predicted', 'drill'].includes(filterParam)) {
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
        this.launchPaperById(paperParam, modeParam);
      }
    } catch (e) {
      console.warn('Could not process URL query parameters', e);
    }
  }

  launchPaper(paperData, mode = 'cbt') {
    this.currentPaper = paperData;
    this.engine.init(paperData, mode, true);
    // Respect saved exam language if available, else match candidate preference
    const saved = this.engine.loadSession(paperData.id);
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
    this.qNumberText.innerText = `${qPrefix} ${q.questionNumber} ${ofLabel} ${this.currentPaper.questions.length}`;
    
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

  /* ================= LEGAL & ADSENSE COMPLIANCE MODAL ================= */
  openLegalModal(tabName = 'privacy') {
    if (!this.legalModal) return;
    if (this.legalTabs) {
      this.legalTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
    }
    this.renderLegalTabContent(tabName);
    this.legalModal.classList.add('active');
  }

  renderLegalTabContent(tabName) {
    if (!this.legalModalBody) return;
    if (tabName === 'privacy') {
      this.legalModalBody.innerHTML = `
        <h4 style="color:var(--text-primary); margin-bottom: 8px;">Privacy Policy</h4>
        <p style="color:var(--text-muted); font-size: 12px; margin-bottom: 14px;">Last Updated: October 2026</p>
        <p>Your privacy is of utmost importance to us at <strong>Bihar STET Paper II Computer Science CBT Portal</strong>, developed by <strong>Niranjan Kumar Singh</strong>. This Privacy Policy documents the types of information collected and how we use it.</p>
        
        <h5 style="margin-top: 14px; color:var(--text-primary);">1. Client-Side Data & Zero Private Data Collection</h5>
        <p>This portal runs entirely client-side. Your test attempts, answers, and scorecards are stored locally in your browser using <code>localStorage</code>. We do not store or sell your test responses to any third parties.</p>

        <h5 style="margin-top: 14px; color:var(--text-primary);">2. Log Files</h5>
        <p>Like standard web servers, our hosting provider (Vercel) logs visitors when they visit websites. These logs include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and number of clicks. These are not linked to any personally identifiable information.</p>

        <h5 style="margin-top: 14px; color:var(--text-primary);">3. Google DoubleClick DART Cookies & Google AdSense</h5>
        <p>Google is a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener" style="color:var(--primary);">https://policies.google.com/technologies/ads</a>.</p>

        <h5 style="margin-top: 14px; color:var(--text-primary);">4. Contacting Developer</h5>
        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact <strong>Niranjan Kumar Singh</strong> at <a href="mailto:niranjansingh1419@gmail.com" style="color:var(--primary); font-weight:700;">niranjansingh1419@gmail.com</a>.</p>
      `;
    } else if (tabName === 'terms') {
      this.legalModalBody.innerHTML = `
        <h4 style="color:var(--text-primary); margin-bottom: 8px;">Terms of Service</h4>
        <p style="color:var(--text-muted); font-size: 12px; margin-bottom: 14px;">Effective Date: October 2026</p>
        <p>Welcome to <strong>Bihar STET Paper II (Computer Science) CBT Mock Portal</strong>. By accessing this web application, you agree to comply with and be bound by the following terms.</p>
        
        <h5 style="margin-top: 14px; color:var(--text-primary);">1. Educational Purpose</h5>
        <p>This platform is provided solely for educational preparation, self-assessment, and academic mock examination purposes. The simulated test papers, timers, and scoring models are designed to help candidates prepare for the Bihar STET examination under authentic CBT conditions.</p>

        <h5 style="margin-top: 14px; color:var(--text-primary);">2. Intellectual Property & Fair Use</h5>
        <p>All software architectures, code engines, and simulated mock test frameworks are created and maintained by <strong>Niranjan Kumar Singh</strong>. Examination syllabus and official questions are referenced under fair educational use for candidate readiness.</p>

        <h5 style="margin-top: 14px; color:var(--text-primary);">3. Free Access</h5>
        <p>This test portal is provided 100% free of charge to all teaching aspirants.</p>
      `;
    } else if (tabName === 'disclaimer') {
      this.legalModalBody.innerHTML = `
        <h4 style="color:var(--text-primary); margin-bottom: 8px;">Disclaimer & Fair Use Notice</h4>
        <p><strong>Independent Educational Initiative:</strong> This website is an independent educational portal designed and developed by <strong>Niranjan Kumar Singh</strong> to assist candidates preparing for the Bihar Secondary Teachers Eligibility Test (STET) Paper II in Computer Science (Subject Code: 226).</p>
        <p style="margin-top: 10px;"><strong>No Government Affiliation:</strong> This platform is NOT affiliated with, sponsored by, or endorsed by the Bihar School Examination Board (BSEB), the Education Department of Bihar, or any government authority. Official examination notifications, forms, and results are published exclusively on the official BSEB website.</p>
        <p style="margin-top: 10px;">While every effort is made to maintain high accuracy of official answer keys and syllabus coverage, users are encouraged to verify critical notices with official BSEB gazettes.</p>
      `;
    } else if (tabName === 'adsense') {
      this.legalModalBody.innerHTML = `
        <h4 style="color:var(--text-primary); margin-bottom: 8px;">Advertising & Cookie Transparency</h4>
        <p style="color:var(--text-muted); font-size: 12px; margin-bottom: 14px;">Compliance with Google Publisher Policies & Privacy Regulations</p>

        <p>This educational website participates in the <strong>Google AdSense</strong> advertising program to cover server hosting, infrastructure costs, and continuous maintenance of all 23 full-length mock examinations for teaching aspirants.</p>

        <h5 style="margin-top: 14px; color:var(--text-primary);">1. How Google Serves Advertisements</h5>
        <p>Third-party vendors, including Google, use cookies to serve ads based on a candidate's prior visits to this website or other websites across the Internet. Google's use of advertising cookies enables it and its partners to serve relevant advertisements to users.</p>

        <h5 style="margin-top: 14px; color:var(--text-primary);">2. Exam Focus & Non-Intrusive Experience</h5>
        <p>Ads served on this platform are strictly monitored to ensure they remain educational, clean, and non-distracting. During active examination sessions, advertisements are suppressed to preserve the candidate's focus and authentic test simulation.</p>

        <h5 style="margin-top: 14px; color:var(--text-primary);">3. How You Can Opt Out of Personalized Ads</h5>
        <p>You may opt out of personalized advertising at any time by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener" style="color:var(--primary); font-weight:700;">Google Ads Settings</a>. You may also opt out of third-party vendor advertising cookies by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener" style="color:var(--primary); font-weight:700;">AboutAds.info</a>.</p>

        <h5 style="margin-top: 14px; color:var(--text-primary);">4. Authorized Digital Sellers (ads.txt)</h5>
        <p>In full compliance with Interactive Advertising Bureau (IAB) standards, this website maintains an official authorized digital sellers file accessible at <a href="/ads.txt" target="_blank" style="color:var(--primary); font-weight:700;">/ads.txt</a>.</p>
      `;
    } else if (tabName === 'author') {
      this.legalModalBody.innerHTML = `
        <h4 style="color:var(--text-primary); margin-bottom: 8px;">About the Developer</h4>
        <div style="display:flex; gap:16px; align-items:center; margin-bottom:14px;">
          <div style="width:60px; height:60px; border-radius:50%; background:linear-gradient(135deg,#2563eb,#8b5cf6); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:22px;">NK</div>
          <div>
            <h5 style="font-size:18px; margin:0 0 2px 0; color:var(--text-primary);">Niranjan Kumar Singh</h5>
            <span style="font-size:13px; color:var(--primary); font-weight:700;">Full-Stack Engineer & EdTech System Architect</span>
          </div>
        </div>
        <p>Niranjan Kumar Singh is a passionate software engineer specializing in high-performance web applications, interactive examination state machines, and educational tools.</p>
        <p style="margin-top: 10px;">This Bihar STET Computer Science CBT Mock Exam Portal was conceived and coded to provide candidates with a zero-friction, authentic TCS iON test environment that works flawlessly on any mobile phone, tablet, or laptop.</p>
        <div style="margin-top:16px; display:flex; gap:12px; flex-wrap:wrap;">
          <a href="mailto:niranjansingh1419@gmail.com" style="display:inline-flex; align-items:center; gap:6px; padding:8px 14px; background:var(--primary); color:#fff; text-decoration:none; border-radius:6px; font-weight:700; font-size:13px;">✉ Contact via Email</a>
          <a href="https://www.instagram.com/niranjan.ks.in" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:6px; padding:8px 14px; background:#e1306c; color:#fff; text-decoration:none; border-radius:6px; font-weight:700; font-size:13px;">📷 Instagram @niranjan.ks.in</a>
        </div>
      `;
    }
  }
}

// Initialize application on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
