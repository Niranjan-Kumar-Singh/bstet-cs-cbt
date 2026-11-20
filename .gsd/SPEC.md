# SPECIFICATION: Bihar STET Paper II (CS) CBT Portal — Cleanup, Modernization & Reorganization

- **Status:** FINALIZED (Approved by user to proceed to Phase 1)
- **Repository:** `D:\Isha\Question Paper`
- **Live Deployment:** https://bstet-cs-cbt.vercel.app
- **Target Audience:** Aspirants of Bihar STET Paper II (Class 11-12, Computer Science Subject Code 226) and BPSC TRE PGT Computer Science.
- **Architect & Lead Developer:** Niranjan Kumar Singh

---

## 1. Primary Objectives
1. **Content Quality & Uniqueness:**
   - Eliminate all synthetic, templated questions (e.g. `Scenario 25`, `Case 62`, boilerplate distractor formulas).
   - Eliminate all "Predicted Mock" papers (Predicted Sets 1–14).
   - Reconcile `official_2023.js` against the source PDF (`Bihar-STET-Previous-Year-Question-Paper-2-Computer-Science.pdf`).
   - Audit and clean remaining topical drills; prune drills with insufficient genuine content.
   - Deterministically balance answer keys (`A`, `B`, `C`, `D` target 22%–28% per letter) for non-official drills without modifying official papers.
   - Implement digit-masked normalized signature deduplication (within and across papers) guaranteeing zero exact and near-duplicates.
   - Tag every question with its official 15 Computer Science units, 12 Art of Teaching topics, or 4 General Skills areas.
2. **Architecture & Zero-Dependency Modernization:**
   - Maintain 100% zero-dependency runtime: vanilla semantic HTML5, modern modular CSS3, and ES2020+ native JavaScript modules.
   - Split monolithic `js/app.js` (101 KB) into clean, single-responsibility ES modules (`js/core/*`, `js/views/*`, `js/components/*`, `js/data/*`).
   - Introduce client-side hash routing (`#/`, `#/dashboard`, `#/test/<paperId>`, `#/result/<attemptId>`, `#/about`) with graceful backward compatibility for query params (`?paper=`).
   - Implement resilient autosave (`BSTET_ACTIVE_ATTEMPT`) deriving remaining time from absolute timestamps so page refreshes or device sleep do not lose test state.
   - Introduce offline-ready PWA support with `manifest.webmanifest` and a versioned cache-first Service Worker (`sw.js`).
3. **UI/UX & Accessibility (WCAG 2.2 AA):**
   - Modern, calm, high-contrast "exam-grade" design system (`css/tokens.css`, `css/base.css`, `css/components.css`, `css/lobby.css`, `css/exam.css`, `css/result.css`, `css/print.css`).
   - Self-hosted subsetted `woff2` fonts (Inter, Outfit, Noto Sans Devanagari) removing external Google Font dependencies.
   - Strict adherence to TCS iON CBT exam screen parity (5 palette states, sticky header, keyboard shortcuts 1-4/A-D/N/P/M/C/L/H).
   - Dynamic font scaling controls (`A-`, `A`, `A+`) preserving user accessibility across both light and dark themes.
4. **Security, Performance & Truth in Claims:**
   - Enforce robust CSP, HSTS, COOP, and modern HTTP security headers in `vercel.json`; remove obsolete `X-XSS-Protection`.
   - Prevent stale caching by implementing build-stamped versioning (`?v=<buildHash>`) on shipped assets, with `no-cache` on `index.html` and `sw.js`.
   - Full truth in advertising: honestly disclose Google AdSense in legal modal and README while confirming that the application itself performs zero telemetry and stores all test attempts purely client-side in `localStorage`.
   - Relocate raw source PDFs (~43 MB) and generator scripts to `sources/` and add to `.vercelignore` to minimize production bundle footprint.

---

## 2. Non-Negotiable Constraints
- **Zero Git Commits:** No commits or staging of any kind until explicit user instruction "commit now".
- **Backup Verification:** Complete mirror backup maintained outside repository (`D:\Isha\Question Paper_BACKUP_20261115-1935`).
- **Phase-by-Phase Checkpoints:** Hard stop at each checkpoint with proof and wait for explicit "proceed".
- **Zero Framework Bloat:** No React, Vue, Tailwind, or runtime npm dependencies.
- **Bilingual Symmetry:** 100% of user-facing UI, questions, options, and explanations must exist in English and natural Hindi.
- **Preserved LocalStorage Contracts:** Keys `BSTET_EXAM_HISTORY`, `BSTET_LANG`, `BSTET_THEME`, and `BSTET_FONT_SIZE` remain backwards-compatible.
- **TCS iON Color & Layout Fidelity:** 5 palette colors (`--cbt-answered`, `--cbt-not-answered`, `--cbt-not-visited`, `--cbt-marked`, `--cbt-ans-marked`) strictly preserved.

---

## 3. Acceptance Criteria
1. `audit_duplicates.js`: 0 exact and 0 near-duplicates across entire catalog with non-zero exit code on failure.
2. `audit_quality.js`: 0 templated questions, 0 missing schema fields (`section`, `topic`, `unit`), answer letter distribution 22%–28% for drills.
3. `pro_test_suite.py` + Playwright/Node E2E smoke tests: 100% pass rate.
4. Lighthouse Scores (Mobile, Throttled 4G): Performance ≥ 95, Accessibility = 100, Best Practices = 100, SEO = 100.
5. Zero console errors, zero broken asset URLs, zero CSP violations on clean load.
