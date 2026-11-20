# ROADMAP: Bihar STET Paper II (CS) CBT Portal — Cleanup, Modernization & Reorganization

## Phase 0: Spec and Safety (Completed)
- [x] Verify mirror backup outside repo (`D:\Isha\Question Paper_BACKUP_20261115-1935` - SHA-256 matched bit-for-bit)
- [x] Create `.gsd/SPEC.md` (FINALIZED), `.gsd/ROADMAP.md`, `.gsd/PENDING_CHANGES.md`
- [x] Output installed tool & extension inventory
- [x] Run read-only baseline tests and record metrics to `reports/baseline/`
- [x] CHECKPOINT 0: User authorized "proceed"

## Phase 1: Quality Audit (Completed & Corrected)
- [x] Create `scripts/audit/audit_quality.js` (zero-dependency Node)
- [x] Generate `reports/quality_report.json` and `reports/quality_report.md`
- [x] Widen templated markers detection (+126 reconciled, total 744 in legacy sets)
- [x] Implement within-paper near-duplicate detection (`drill_cs_100`: 53, `drill_dsa_sql_50`: 24)
- [x] Topic-first official CS blueprint classification achieving 98.80% coverage (494/500 Qs)
- [x] Official 2023 answer key audit: 7 disagreements and 48 substituted questions documented
- [x] Save pre-Phase 3 candidate removal list (`reports/removal_list.json` & `.md`) and manual review list (`reports/manual_review.json` & `.md`)
- [x] CHECKPOINT 1: Delivered and verified

## Phase 2: Remove All Predicted Papers (Completed)
- [x] Search and record all references (`reports/predicted_references.txt`)
- [x] Delete `predicted-set1.js` through `predicted-set14.js` (2,100 questions removed)
- [x] Delete obsolete generation scripts (`assemble_set13.py`, `assemble_set14.py`, `generate_predicted_papers.py`, etc.)
- [x] Remove 14 catalog entries from `papers-index.js` (Catalog reduced to clean 21 papers / 1,550 Qs)
- [x] Remove UI filter tab, 12 static paper cards, badges, and sitemap entries
- [x] Dynamically compute catalog statistics (10 Official PYQ + 11 Drills = 21 Total)
- [x] Implement graceful `#retired-modal` notice for removed paper IDs with zero console errors
- [x] Verify global grep for `predicted_set` returns 0 hits in `js/` and `index.html`
- [x] Capture verification screenshots (`reports/lobby_phase2.png`, `reports/retired_modal_phase2.png`)
- [x] CHECKPOINT 2: Stop and wait for user "proceed"

## Phase 3: Content Integrity (Official Papers & Remaining Drills)
- [x] 3A: Reconcile `official_2023.js` against PDF with user approval (100% PDF fidelity, 0 substituted questions, 0 disagreements)
- [x] 3B: Audit drills (pruned templated/near-duplicate questions, dropped `drill_modern_tech_50`)
- [x] 3C: Implemented deterministic option balancing (~25% each across A, B, C, D) across all drills
- [x] 3D: Schema completion (`section`, `topic`, `topic_hi`, bilingual options, explanations)
- [x] 3E: Upgraded `audit_duplicates.js` with digit-masked signature verification (0 internal duplicates across 23 papers)
- [x] CHECKPOINT 3: Delivered and verified; wait for user "proceed"

## Phase 4: New Project Structure & Modularization
- [x] Moved raw source PDFs and `syllabus_extracted.txt` to `sources/` and added `sources/`, `incoming/`, `reports/`, `docs/` to `.vercelignore`
- [x] Cleaned obsolete `__pycache__` and `.pyc` files; compiled catalog of ~40 obsolete generator/parsing scripts for deletion approval
- [x] Modularized architecture into ES modules (`js/main.js`, `js/core/`, `js/views/`, `js/components/`, `js/data/`) with zero external runtime dependencies
- [x] Added clean `package.json` with npm scripts only (`serve`, `audit`, `test`, `format:check` - zero runtime deps)
- [x] Wrote fresh and accurate `README.md`, `docs/DATA_SCHEMA.md`, `docs/CONTENT_GUIDE.md`, `docs/ARCHITECTURE.md`, `docs/TESTING.md`, and `docs/DEPLOYMENT.md`
- [x] CHECKPOINT 4: Delivered and verified; wait for user "proceed"

## Phase 5: Modern UI/UX Design & Engineering (Completed)
- [x] 5.1 Design system & CSS tokens (`css/tokens.css`, modular CSS: `base.css`, `components.css`, `lobby.css`, `exam.css`, `result.css`, `dashboard.css`, `print.css`)
- [x] 5.2 Global shell with landmark structure, skip-link, and client hash router
- [x] 5.3 Lobby redesign with computed hero stats, search box, filter chips, active attempt banner, and dynamic syllabus map
- [x] 5.4 Exam screen TCS iON parity, timestamp-derived autosave (`BSTET_ACTIVE_ATTEMPT`), mobile palette drawer, and keyboard shortcuts
- [x] 5.5 Comprehensive diagnostic result screen with circular SVG gauges, category cutoff selector, diagnostic matrix, and retry wrong questions generator
- [x] 5.6 Dashboard view (`#/dashboard`) with local analytics, study streak, SVG trend line chart, and JSON import/export
- [x] 5.7 Practice by topic view (`#/topic-practice`) (dynamically assembled from official questions)
- [x] 5.8 Offline PWA support (`manifest.webmanifest`, versioned `sw.js`)
- [x] 5.9 WCAG 2.2 AA accessibility audit (contrast, focus-visible, landmarks, touch targets)
- [x] 5.10 Performance budget verification (zero external runtime dependencies, 4.8MB production payload)
- [x] CHECKPOINT 5: Verified responsive screenshot matrix captured; ready for user review

## Phase 6: Delivery, Security, SEO & Honesty of Claims (Completed)
- [x] 6.1 Cache busting build stamp script (`scripts/tools/stamp_build.js`)
- [x] 6.2 Modern security headers & strict CSP in `vercel.json` (removed deprecated `X-XSS-Protection`, added HSTS preload)
- [x] 6.3 Honest AdSense & local data privacy disclosures in legal modal & README (100% client-side localStorage, zero telemetry)
- [x] 6.4 Comprehensive SEO metadata, PNG OG preview (`og-preview.png`), dynamic sitemap (51 URLs), and JSON-LD schema
- [x] 6.5 Codebase and asset dead-code removal (purged one-off transition scripts, verified zero third-party coaching references)
- [x] CHECKPOINT 6: All security, SEO, and delivery assets verified; wait for user "proceed"

## Phase 7: Verification & Acceptance (Completed)
- [x] Run full test battery (audit duplicates, quality audit, pro test suite, headless Chrome acceptance tests)
- [x] Generate comprehensive final reports in `reports/final/` (`TEST_RESULTS.md`, `CATALOG_SUMMARY.md`, `SECURITY_AUDIT.md`, `HANDOVER.md`)
- [x] FINAL CHECKPOINT: Present final handover report; wait for user "commit now"
