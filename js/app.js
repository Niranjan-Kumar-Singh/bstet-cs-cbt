/**
 * Bihar STET CBT Portal - Main Application Controller
 */

class App {
  constructor() {
    this.engine = new ExamEngine();
    this.currentPaper = null;
    this.currentFilter = 'all';
    this.fontSizeLevel = 1; // 0: small, 1: normal, 2: large
    this.lastAnalyticsReport = null;
    this.solFilter = 'all';

    this.initElements();
    this.bindEvents();
    this.initTheme();
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
    this.resAccuracy = document.getElementById('res-accuracy');
    this.resAttempted = document.getElementById('res-attempted');
    this.resPercentage = document.getElementById('res-percentage');
    this.resSectionsBreakdown = document.getElementById('res-sections-breakdown');
    this.resTopicBreakdown = document.getElementById('res-topic-breakdown');
    this.solutionsList = document.getElementById('solutions-list');
    this.solFilterBtns = document.querySelectorAll('.sol-filter-btn');
    this.retakeExamBtn = document.getElementById('retake-exam-btn');
    this.backToLobbyBtn = document.getElementById('back-to-lobby-btn');
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

    // Fullscreen (Navbar + Exam Header)
    if (this.fullscreenBtn) {
      this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    }
    if (this.examFullscreenBtn) {
      this.examFullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    }

    // Pause / Resume Handling with Modal
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

    // Mode Modal Selection
    this.modeOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        this.modeOptions.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        const radio = opt.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });

    this.startExamBtn.addEventListener('click', () => this.onStartExamConfirmed());
    this.cancelModeBtn.addEventListener('click', () => this.modeModal.classList.remove('active'));

    // Exam Navigation Buttons
    this.prevBtn.addEventListener('click', () => this.engine.prevQuestion());
    this.nextBtn.addEventListener('click', () => this.engine.nextQuestion());
    this.clearBtn.addEventListener('click', () => {
      this.engine.clearResponse();
      this.renderQuestionView();
      this.renderPalette();
    });
    this.markReviewBtn.addEventListener('click', () => {
      this.engine.markForReview();
      this.renderQuestionView();
      this.renderPalette();
    });
    this.saveNextBtn.addEventListener('click', () => {
      this.engine.saveAndNext();
      this.renderQuestionView();
      this.renderPalette();
    });
    // Submit Exam Button
    if (this.submitExamBtn) {
      this.submitExamBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.openSubmitModal();
      });
    }

    // Submit Modal Confirm & Cancel Actions
    if (this.cancelSubmitBtn) {
      this.cancelSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.submitModal) this.submitModal.classList.remove('active');
      });
    }
    if (this.confirmSubmitBtn) {
      this.confirmSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.submitModal) this.submitModal.classList.remove('active');
        this.finishAndEvaluateExam();
      });
    }
    if (this.submitModal) {
      this.submitModal.addEventListener('click', (e) => {
        if (e.target === this.submitModal) {
          this.submitModal.classList.remove('active');
        }
      });
    }

    // Mobile Palette Drawer Toggle
    if (this.mobilePaletteToggle) {
      this.mobilePaletteToggle.addEventListener('click', () => {
        this.palettePane.classList.toggle('open');
        this.paletteBackdrop.classList.toggle('active');
      });
    }
    const mobileClosePalette = document.getElementById('mobile-close-palette-btn');
    if (mobileClosePalette) {
      mobileClosePalette.addEventListener('click', () => {
        this.palettePane.classList.remove('open');
        if (this.paletteBackdrop) this.paletteBackdrop.classList.remove('active');
      });
    }
    if (this.paletteBackdrop) {
      this.paletteBackdrop.addEventListener('click', () => {
        this.palettePane.classList.remove('open');
        this.paletteBackdrop.classList.remove('active');
      });
    }

    // Clear History Button
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    if (clearHistoryBtn) {
      clearHistoryBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear your test attempt history?')) {
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
          this.practiceContent.innerHTML = q.explanation.replace(/\n/g, '<br>');
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

    // Engine Callbacks
    this.engine.onTick = (secs) => this.updateTimerDisplay(secs);
    this.engine.onQuestionChange = (q, idx) => {
      this.renderQuestionView();
      this.renderPalette();
    };
    this.engine.onAutoSubmit = () => {
      alert('Time is up! Your exam is being submitted automatically.');
      this.finishAndEvaluateExam();
    };

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (!this.examView.classList.contains('active')) return;
      if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;

      if (['1', 'a', 'A'].includes(e.key)) this.handleOptionKey('A');
      else if (['2', 'b', 'B'].includes(e.key)) this.handleOptionKey('B');
      else if (['3', 'c', 'C'].includes(e.key)) this.handleOptionKey('C');
      else if (['4', 'd', 'D'].includes(e.key)) this.handleOptionKey('D');
      else if (e.key === 'n' || e.key === 'N') this.engine.saveAndNext();
      else if (e.key === 'p' || e.key === 'P') this.engine.prevQuestion();
      else if (e.key === 'm' || e.key === 'M') this.engine.markForReview();
    });
  }

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
    if (this.themeToggleBtn) {
      this.themeToggleBtn.innerHTML = text;
    }
    if (this.examThemeToggleBtn) {
      this.examThemeToggleBtn.innerHTML = icon;
    }
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
    const icon = isPaused ? '▶' : '⏸';
    const label = isPaused ? 'Resume' : 'Pause';
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
              <span class="label">Questions</span>
              <span class="val">${paper.totalQuestions} Qs</span>
            </div>
            <div class="stat-item">
              <span class="label">Total Marks</span>
              <span class="val">${paper.totalMarks} Marks</span>
            </div>
            <div class="stat-item">
              <span class="label">Duration</span>
              <span class="val">${paper.durationMinutes} Mins</span>
            </div>
          </div>
        </div>
        <div class="paper-card-actions">
          <button class="btn btn-primary" data-action="cbt" data-id="${paper.id}">
            ⚡ Start CBT Mock
          </button>
          <button class="btn btn-outline" data-action="practice" data-id="${paper.id}">
            📖 Practice Mode
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
    const history = ExamAnalytics.getHistory();
    if (!this.historyTableBody) return;

    if (history.length === 0) {
      this.historyTableBody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">
            No mock test attempts recorded yet. Choose a paper above and take your first CBT mock test!
          </td>
        </tr>
      `;
      return;
    }

    this.historyTableBody.innerHTML = history.map(item => {
      const dateStr = new Date(item.timestamp).toLocaleDateString() + ' ' + new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const verdict = item.isQualified 
        ? `<span style="color: #16a34a; font-weight: 700;">QUALIFIED</span>`
        : `<span style="color: #dc2626; font-weight: 700;">NOT QUALIFIED</span>`;

      return `
        <tr>
          <td style="font-weight: 600;">${item.paperTitle}</td>
          <td>${dateStr}</td>
          <td><strong>${item.score}</strong> / ${item.maxMarks} (${item.percentage}%)</td>
          <td>${item.accuracy}%</td>
          <td>${verdict}</td>
          <td>
            <button class="btn btn-outline" data-review-attempt="${item.id}" style="padding: 4px 10px; font-size: 12px; white-space: nowrap;">
              📖 Review Solutions
            </button>
          </td>
        </tr>
      `;
    }).join('');

    // Bind review buttons
    this.historyTableBody.querySelectorAll('[data-review-attempt]').forEach(btn => {
      btn.addEventListener('click', () => {
        const attemptId = btn.dataset.reviewAttempt;
        const attempt = ExamAnalytics.getAttempt(attemptId);
        if (attempt) {
          this.lastAnalyticsReport = attempt;
          this.showResultView(attempt);
        } else {
          alert('Full detailed attempt report not found for this attempt.');
        }
      });
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

    // Lock screen to full viewport CBT mode & reset scroll
    document.body.classList.add('in-exam-mode');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    this.lobbyView.classList.remove('active');
    this.resultView.classList.remove('active');
    this.examView.classList.add('active');

    this.examTitle.innerText = paperData.title;

    // Reset pause state if needed
    if (this.pauseModal) this.pauseModal.classList.remove('active');
    if (this.pauseBtn) {
      this.pauseBtn.innerHTML = `<span class="btn-icon">⏸</span> <span class="btn-text">Pause</span>`;
    }

    // Show/hide timer based on mode
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

    this.currentPaper.sections.forEach(sec => {
      const tab = document.createElement('button');
      tab.className = `section-tab-btn ${currentSec && currentSec.id === sec.id ? 'active' : ''}`;
      tab.innerHTML = `
        <span>${sec.name}</span>
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

    this.qNumberText.innerText = `Question ${q.questionNumber} of ${this.currentPaper.questions.length}`;
    this.qTopicTag.innerText = q.topic || "Computer Science";
    
    // Question text
    this.qStatement.innerHTML = q.question.replace(/\n/g, '<br>');

    // Options
    this.optionsContainer.innerHTML = '';
    const currentResp = this.engine.responses[q.id];

    ['A', 'B', 'C', 'D'].forEach(letter => {
      const optText = q.options[letter];
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
    document.querySelectorAll('.section-tab-btn').forEach(btn => {
      if (btn.innerText.includes(currSec.name)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

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
        // On mobile, close palette drawer after click
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
    this.qpModalBody.innerHTML = this.currentPaper.questions.map(q => `
      <div style="padding: 16px 0; border-bottom: 1px solid var(--border-subtle);">
        <p style="font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
          Q.${q.questionNumber} ${q.question}
        </p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px; color: var(--text-secondary);">
          <div>(A) ${q.options.A}</div>
          <div>(B) ${q.options.B}</div>
          <div>(C) ${q.options.C}</div>
          <div>(D) ${q.options.D}</div>
        </div>
      </div>
    `).join('');
    this.qpModal.classList.add('active');
  }

  /* ================= SCORECARD & ANALYTICS VIEW ================= */
  showResultView(report) {
    document.body.classList.remove('in-exam-mode');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (this.pauseModal) this.pauseModal.classList.remove('active');

    this.examView.classList.remove('active');
    this.lobbyView.classList.remove('active');
    this.resultView.classList.add('active');

    this.resPaperTitle.innerText = report.paperTitle;
    this.resScore.innerText = report.totalScore;
    this.resMaxScore.innerText = `/ ${report.maxMarks}`;

    if (report.isQualified) {
      this.resVerdictBadge.className = 'verdict-badge qualified';
      this.resVerdictBadge.innerHTML = `🎉 QUALIFIED (Score: ${report.totalScore} / 75 Gen Cutoff)`;
    } else {
      this.resVerdictBadge.className = 'verdict-badge not-qualified';
      this.resVerdictBadge.innerHTML = `⚠️ NOT QUALIFIED (Score: ${report.totalScore} / 75 Gen Cutoff Needed)`;
    }

    this.resAccuracy.innerText = `${report.accuracy}%`;
    this.resAttempted.innerText = `${report.attemptedCount} / ${report.totalQuestions}`;
    this.resPercentage.innerText = `${report.percentage}%`;

    // Render Section Breakdown Cards
    this.resSectionsBreakdown.innerHTML = Object.values(report.sectionStats).map(sec => {
      const pct = sec.total > 0 ? ((sec.score / sec.total) * 100).toFixed(0) : 0;
      return `
        <div class="breakdown-card">
          <h4>${sec.name}</h4>
          <div style="display: flex; justify-content: space-between; font-size: 14px;">
            <span style="font-weight: 700; color: var(--primary);">${sec.score} / ${sec.total} Marks</span>
            <span style="color: var(--text-muted);">${pct}%</span>
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

    // Render Topic Breakdown
    const sortedTopics = Object.entries(report.topicStats).sort((a, b) => b[1].total - a[1].total);
    this.resTopicBreakdown.innerHTML = sortedTopics.map(([topicName, stat]) => {
      const accuracyPct = stat.total > 0 ? ((stat.correct / stat.total) * 100).toFixed(0) : 0;
      return `
        <div style="margin-bottom: 12px;">
          <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600;">
            <span>${topicName} (${stat.correct}/${stat.total})</span>
            <span style="color: ${accuracyPct >= 60 ? '#16a34a' : '#dc2626'};">${accuracyPct}%</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${accuracyPct}%; background-color: ${accuracyPct >= 60 ? '#16a34a' : '#ef4444'};"></div>
          </div>
        </div>
      `;
    }).join('');

    this.renderSolutions();
  }

  renderSolutions() {
    if (!this.lastAnalyticsReport) return;
    const reviews = this.lastAnalyticsReport.questionReviews;

    const filtered = reviews.filter(q => {
      if (this.solFilter === 'all') return true;
      if (this.solFilter === 'incorrect') return !q.isCorrect && q.isAttempted;
      if (this.solFilter === 'unattempted') return !q.isAttempted;
      if (this.solFilter === 'correct') return q.isCorrect;
      return true;
    });

    if (filtered.length === 0) {
      this.solutionsList.innerHTML = `<p style="color: var(--text-muted); padding: 20px; text-align: center;">No questions match the '${this.solFilter}' filter.</p>`;
      return;
    }

    this.solutionsList.innerHTML = filtered.map(q => {
      const statusClass = q.isCorrect ? 'correct' : (q.isAttempted ? 'incorrect' : 'unattempted');
      const statusText = q.isCorrect 
        ? '<span style="color: #16a34a; font-weight: 700;">✔ Correct</span>' 
        : (q.isAttempted ? '<span style="color: #dc2626; font-weight: 700;">✘ Incorrect</span>' : '<span style="color: #64748b; font-weight: 700;">○ Unattempted</span>');

      const optionsHtml = ['A', 'B', 'C', 'D'].map(letter => {
        const text = q.options[letter];
        if (!text) return '';
        const isOfficialCorrect = q.correctAnswer === letter;
        const isUserChoice = q.userResponse === letter;

        let optClass = 'sol-option';
        let badge = '';

        if (isOfficialCorrect) {
          optClass += ' is-correct';
          badge = '<span style="font-weight: 700; margin-left: auto;">[Correct Answer]</span>';
        } else if (isUserChoice && !isOfficialCorrect) {
          optClass += ' user-wrong';
          badge = '<span style="font-weight: 700; margin-left: auto;">[Your Choice - Wrong]</span>';
        }

        return `
          <div class="${optClass}">
            <span style="font-weight: 700; width: 20px;">${letter}.</span>
            <span>${text}</span>
            ${badge}
          </div>
        `;
      }).join('');

      return `
        <div class="solution-card ${statusClass}">
          <div class="sol-header">
            <div class="sol-tag-row">
              <strong style="font-size: 15px;">Q.${q.questionNumber}</strong>
              <span class="topic-tag">${q.topic}</span>
              <span style="font-size: 12px; color: var(--text-muted);">[${q.section}]</span>
            </div>
            <div>${statusText}</div>
          </div>
          <p style="font-size: 16px; font-weight: 500; color: var(--text-primary); margin-bottom: 12px;">
            ${q.question}
          </p>
          <div class="sol-options-grid">
            ${optionsHtml}
          </div>
          <div class="explanation-box">
            <div style="font-weight: 700; margin-bottom: 6px; color: var(--primary);">📖 Conceptual Explanation & Theory:</div>
            <div>${q.explanation.replace(/\n/g, '<br>')}</div>
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

// Initialize on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
