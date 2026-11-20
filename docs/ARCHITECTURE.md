# System Architecture & Technical Design

This document details the architecture and technical design of the Bihar STET Paper II CBT Portal.

---

## 1. Runtime Philosophy

The portal runs on a **pure zero-dependency native stack**:
- **Markup**: Semantic HTML5 with WCAG 2.2 AA accessibility landmarks (`main`, `nav`, `header`, `footer`, `dialog`).
- **Styling**: Modern CSS3 using custom properties (CSS variables), CSS Grid, Flexbox, and fluid typography.
- **Scripting**: Modern ES2022+ native JavaScript modules (`type="module"`), requiring no build step, compiler, or bundler for deployment.

---

## 2. Directory Layout & Module Structure

```
/
├─ index.html                     // Main application entry & DOM shell
├─ manifest.webmanifest           // Progressive Web App manifest
├─ sw.js                          // Offline cache Service Worker
├─ favicon.svg                    // Vector emblem icon
├─ robots.txt, sitemap.xml        // Search indexing metadata
├─ vercel.json, .vercelignore     // Cloud deployment configuration
├─ package.json                   // Developer scripts (zero runtime deps)
├─ css/
│  ├─ tokens.css                  // Design tokens: palette, spacing, elevations
│  ├─ base.css                    // CSS reset, typography, responsive utilities
│  ├─ components.css              // Buttons, modals, tabs, form controls
│  ├─ cbt-theme.css               // TCS iON exam engine layout & palette
│  ├─ styles.css                  // Portal layout & lobby styles
├─ js/
│  ├─ main.js                     // Main ES module entry point
│  ├─ app.js                      // Application controller & backward-compat facade
│  ├─ exam-engine.js              // TCS iON state machine & question palette logic
│  ├─ analytics.js                // Scorecard & topic diagnostic calculations
│  ├─ i18n.js                     // Bilingual dictionary & string translation engine
│  ├─ core/                       // Core single-responsibility utilities
│  │  ├─ store.js                 // LocalStorage persistence & attempt history
│  │  ├─ router.js                // Hash router (#/lobby, #/exam, #/result)
│  │  ├─ theme.js                 // Dark/light mode theme manager
│  │  ├─ a11y.js                  // Font scaling & keyboard accessibility
│  │  ├─ utils.js                 // DOM helpers, formatting, sanitization
│  │  └─ errors.js                // Error handling & retired modal fallback
│  ├─ views/                      // View controllers
│  │  ├─ lobby.js                 // Lobby card grid & filter manager
│  │  ├─ exam.js                  // CBT exam runner & interaction controller
│  │  ├─ result.js                // Performance scorecard & solution viewer
│  │  └─ legal.js                 // About developer & transparency modals
│  ├─ components/                 // Modular UI widgets
│  │  ├─ paper-card.js            // Lobby paper cards generator
│  │  ├─ palette.js               // Question palette grid & status badges
│  │  ├─ timer.js                 // Countdown timer & pause alerts
│  │  ├─ modal.js                 // Modal manager (mode, submit, legal, retired)
│  │  └─ charts.js                // SVG donut gauge rendering
│  └─ data/                       // Master catalog & on-demand paper files
│     ├─ papers-index.js          // PAPERS_CATALOG manifest
│     └─ *.js                     // Individual paper datasets
├─ docs/                          // Technical & content specifications
├─ sources/                       // Source PDFs (not deployed, in .vercelignore)
├─ reports/                       // Audit reports & verification logs
└─ scripts/                       // Verification, audit, and tooling scripts
```

---

## 3. CBT Exam State Machine

The examination engine replicates the official TCS iON CBT interface:

```
[Not Visited] ──(View Question)──> [Not Answered]
      │                                   │
      │                               (Select Option & Save)
      │                                   │
      │                                   ▼
      └─────────(Mark Review)───────> [Answered]
                                          │
                                 (Mark for Review)
                                          │
                                          ▼
                                 [Answered & Marked for Review]
```

---

## 4. Autosave & Fault Tolerance

The test state is continually synced to `BSTET_ACTIVE_ATTEMPT`:
- **Absolute Timestamping**: Remaining time is computed from `startTime + duration - Date.now()`, ensuring browser reloads or device sleep preserve the exact remaining time.
- **Instant Recovery**: If a user accidentally closes their tab or browser, reopening the URL prompts to resume the session seamlessly without loss of responses.
