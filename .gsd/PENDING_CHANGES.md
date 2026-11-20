# PENDING CHANGES LOG

All modifications across all phases are tracked here instead of making git commits.
No commits will be made until explicit user authorization ("commit now").

| Timestamp | Phase | File Path | Action | Description & Rationale |
|---|---|---|---|---|
| 2026-11-15 19:35 | Phase 0 | `.gsd/SPEC.md` | Created | Planning specification based on master prompt |
| 2026-11-15 19:36 | Phase 0 | `.gsd/ROADMAP.md` | Created | Phase-wise execution roadmap |
| 2026-11-15 19:36 | Phase 0 | `.gsd/PENDING_CHANGES.md` | Created | Change tracking ledger replacing intermediate commits |
| 2026-11-15 19:40 | Phase 0 | `scripts/duplicate_audit_report.json` | Removed | Cleaned up temporary JSON audit report generated during baseline audit to prevent repo bloat |
| 2026-11-15 19:52 | Phase 0 | `D:\Isha\Question Paper_BACKUP_20261115-1935` | Verified | Full mirror backup verified with 100% bit-for-bit SHA256 match across all 1,042 files (including `.git`) |
| 2026-11-15 19:54 | Phase 0 | `.gsd/SPEC.md` | Modified | Updated specification status from DRAFT to FINALIZED upon user instruction |
| 2026-11-15 19:56 | Phase 1 | `scripts/audit/unit_rules.json` | Created | Keyword rules mapping questions to official 15 CS units, 12 Art of Teaching topics, and 4 General Skills areas |
| 2026-11-15 19:56 | Phase 1 | `scripts/audit/extract_official_pdfs.py` | Created | Text extraction tool for 5 official PDFs into `reports/pdf_text/` for faithfulness validation |
| 2026-11-15 19:58 | Phase 1 | `scripts/audit/audit_quality.js` | Created | Zero-dependency Node audit script analyzing all papers for quality, templates, duplicates, schema gaps & skews |
| 2026-11-15 19:59 | Phase 1 | `reports/blueprint.json` | Created | Unit-wise weight blueprint computed across the 5 official full papers |
| 2026-11-15 19:59 | Phase 1 | `reports/quality_report.json` | Created | Machine-readable comprehensive quality audit output |
| 2026-11-15 19:59 | Phase 1 | `reports/quality_report.md` | Created | Comprehensive readable markdown quality report with per-paper metrics and recommendations |
| 2026-11-15 20:10 | Phase 1 Corrected | `scripts/audit/audit_quality.js` | Modified | Added widened templated detection (+126 items reconciled), within-paper duplicate detection (`drill_cs_100`: 53, `drill_dsa_sql_50`: 24), topic-first blueprint classification (98.80% coverage), and official 2023 answer key audit |
| 2026-11-15 20:10 | Phase 1 Corrected | `reports/removal_list.json` & `.md` | Created | Pre-Phase 3 candidate list detailing 744 templated/duplicate questions in non-official sets |
| 2026-11-15 20:10 | Phase 1 Corrected | `reports/manual_review.json` & `.md` | Created | Documented 6 unclassified official questions, 7 official 2023 answer key disagreements, and 48 substituted questions |
| 2026-11-15 20:14 | Phase 2 | `reports/predicted_references.txt` | Created | Full repository scan of all references to predicted papers before deletion |
| 2026-11-15 20:14 | Phase 2 | `js/data/predicted-set1.js` through `predicted-set14.js` | Deleted | Completely removed all 14 low-quality predicted mock datasets (2,100 questions) |
| 2026-11-15 20:14 | Phase 2 | `scripts/assemble_set13.py` | Deleted | Removed obsolete generator script for predicted set 13 |
| 2026-11-15 20:14 | Phase 2 | `scripts/assemble_set14.py` | Deleted | Removed obsolete generator script for predicted set 14 |
| 2026-11-15 20:14 | Phase 2 | `scripts/data_cs_100_set13.py` | Deleted | Removed obsolete component data script for predicted set 13 |
| 2026-11-15 20:14 | Phase 2 | `scripts/data_cs_100_set14.py` | Deleted | Removed obsolete component data script for predicted set 14 |
| 2026-11-15 20:14 | Phase 2 | `scripts/data_general_20_set13.py` | Deleted | Removed obsolete component data script for predicted set 13 |
| 2026-11-15 20:14 | Phase 2 | `scripts/data_general_20_set14.py` | Deleted | Removed obsolete component data script for predicted set 14 |
| 2026-11-15 20:14 | Phase 2 | `scripts/data_pedagogy_30_set13.py` | Deleted | Removed obsolete component data script for predicted set 13 |
| 2026-11-15 20:14 | Phase 2 | `scripts/data_pedagogy_30_set14.py` | Deleted | Removed obsolete component data script for predicted set 14 |
| 2026-11-15 20:14 | Phase 2 | `scripts/generate_predicted_papers.py` | Deleted | Removed obsolete template-based generator script for predicted sets |
| 2026-11-15 20:14 | Phase 2 | `scripts/generate_bilingual_mocks.py` | Deleted | Removed obsolete mock generator script |
| 2026-11-15 20:14 | Phase 2 | `scripts/test_all_28_sets.py` | Deleted | Removed obsolete test script tied to 28 legacy sets |
| 2026-11-15 20:16 | Phase 2 | `js/data/papers-index.js` | Modified | Pruned 14 predicted mock entries from `PAPERS_CATALOG`; verified count reduced from 35 to 21 (1,550 Qs) |
| 2026-11-15 20:20 | Phase 2 | `index.html` | Modified | Removed predicted filter tab, removed 12 static paper cards, updated hero/meta counts to 21 papers / 1,550 Qs, and added `#retired-modal` dialog |
| 2026-11-15 20:20 | Phase 2 | `js/app.js` | Modified | Updated lobby filter counts to dynamic 21 papers, removed predicted filter branch, added `showRetiredPaperNotice(paperId)` graceful handler with zero console errors |
| 2026-11-15 20:20 | Phase 2 | `js/i18n.js` | Modified | Removed obsolete predicted translation strings; added bilingual support for retired modal notice |
| 2026-11-15 20:21 | Phase 2 | `scripts/build_sitemap.js` & `sitemap.xml` | Modified | Re-generated sitemap with clean 47 URLs covering all 21 remaining papers (zero references to predicted) |
| 2026-11-15 20:22 | Phase 2 | `scripts/audit_duplicates.js` | Modified | Removed deleted predicted file paths from audit script |
| 2026-11-15 20:22 | Phase 2 | `scripts/pro_test_suite.py` | Modified | Updated test assertions for 21 papers / 1,550 Qs and `#retired-modal`; verified 154/154 checks PASS |
| 2026-11-15 20:28 | Phase 2 | `reports/lobby_phase2.png` | Created | Verification screenshot of live lobby view rendering exactly 21 papers |
| 2026-11-15 20:28 | Phase 2 | `reports/retired_modal_phase2.png` | Created | Verification screenshot of graceful 404 retired notice modal when accessing `?paper=predicted_set1` |
| 2026-11-19 23:00 | UI Polish | `css/cbt-theme.css` | Modified | Removed stale duplicate `.legal-tabs-bar` block; added `max-width: 880px`, `height: min(88vh, 720px)`, `flex-shrink: 0` on header/footer, refined tab button sizing (`padding: 7px 12px`, `font-size: 12.5px`), and eliminated horizontal scrollbars across all screen widths |
| 2026-11-19 23:00 | UI Polish | `index.html` | Modified | Cleaned inline styles on `legal-modal-card` and `legal-modal-body`; updated 5th tab to concise `About Developer`; synchronized meta/OG/Twitter/schema tags to 21 verified papers (1,550+ Qs); updated cache busters to `v=20261119_ui_v3` |
| 2026-11-19 23:00 | UI Polish | `js/app.js` | Modified | Added `scrollTop = 0` on tab switch and modal opening so content never opens cut off; updated catalog references from 35/3,650 to 21 papers / 1,550+ verified questions |
| 2026-11-19 23:00 | UI Polish | `js/i18n.js` | Modified | Synchronized English and Hindi `hero_subtitle` dictionary strings to 21 authentic mock papers / 1,550+ verified questions |
| 2026-11-19 23:04 | UI Polish | `reports/modal_*` | Created | Automated headless Chrome verification screenshots for all 5 modal tabs across 1200x800 and 1024x640 viewports |
| 2026-11-19 23:20 | Digitize A3 | `incoming/stet_2025_07nov_s1_hindi.json` & `stet_2025_04nov_s2_hindi.json` | Created | Extracted 150/150 Hindi questions with official Question IDs and Option IDs from BSEB response sheets |
| 2026-11-19 23:21 | Digitize A3 | `js/data/official-shift3.js` & `official-shift4.js` | Modified | Updated 150 questions per paper with verbatim official BSEB Hindi questions, options, and officialQuestionId |
| 2026-11-20 00:00 | Digitize B3 | `incoming/source_pdfs/bpsc_tre3_cs_key_prepp.pdf` | Downloaded | Official final answer key document for BPSC TRE 3.0 Computer Science (Exam Date: 22-07-2024, Advt 22/2024, Series E, F, G, H) |
| 2026-11-20 00:01 | Digitize B3 | `incoming/bpsc_tre3_pgt_cs.json` | Created | Assembled 150 official questions for BPSC TRE 3.0 (E-1..8 English, H-9..30 Hindi, Q31..70 GS, Q71..150 CS) with Series E answer keys |
| 2026-11-20 00:01 | Digitize B3 | `js/data/bpsc-tre3-2024.js` | Created | Created CBT dataset for BPSC TRE 3.0 PGT Computer Science (150 Qs, 5 options A-E, official explanations) |
| 2026-11-20 00:02 | Engine Upgrade | `js/app.js` | Modified | Upgraded CBT option renderer, modal question paper preview, and test results solution view to support 5 options (A, B, C, D, E) |
| 2026-11-20 00:02 | Catalog Sync | `js/data/papers-index.js` | Modified | Registered `bpsc_tre3_2024` in `window.PAPERS_CATALOG` (Total: 22 papers, 1,700 questions) |
| 2026-11-20 00:02 | Catalog Sync | `index.html` | Modified | Added static paper card for `bpsc_tre3_2024`, updated filter counts to 22 All / 11 Official, updated meta/OG/Twitter/schema to 22 papers (1,700+ Qs) |
| 2026-11-20 00:02 | Catalog Sync | `js/i18n.js` & `js/app.js` | Modified | Updated hero subtitles and legal/author metrics to 22 authentic papers (1,700+ verified questions) |
| 2026-11-20 00:03 | Verification | `scripts/build_sitemap.js` & `sitemap.xml` | Modified | Generated sitemap with 49 URLs covering all 22 papers |
| 2026-11-20 00:03 | Verification | `scripts/pro_test_suite.py` | Modified | Updated test assertions to 22 papers / 1,700 Qs; verified 154/154 checks PASS (100%) |
| 2026-11-20 00:30 | Digitize A1 | `incoming/source_pdfs/Bihar-STET-Computer-Science-2019-Official-Paper-2-English_compressed.pdf` | Extracted | RapidOCR parsed 50 pages into 150 official bilingual questions (Q1-50 GK/Skills, Q51-150 CS) |
| 2026-11-20 00:35 | Digitize A1 | `incoming/stet_2019_cs.json` & `js/data/official-2019.js` | Created | Complete CBT dataset for Bihar STET 2019 Paper II CS (150 Qs, Set A, verified keys & explanations) |
| 2026-11-20 00:45 | Digitize A2 | `incoming/source_pdfs/Bihar-STET-Computer-Science-Re-Exam-Official-Paper-Held-In_-2020_compressed.pdf` | Extracted | RapidOCR parsed 49 pages into 150 official bilingual questions (Q1-50 Skills, Q51-150 CS) |
| 2026-11-20 00:55 | Digitize A2 | `incoming/stet_2020_reexam_cs.json` & `js/data/official-2020.js` | Created | Complete CBT dataset for Bihar STET 2020 Re-Exam Paper II CS (150 Qs, Set B, verified keys & explanations) |
| 2026-11-20 01:01 | Catalog Sync | `js/data/papers-index.js` | Modified | Registered `official_2019` and `official_2020` in `PAPERS_CATALOG` (Total: 24 papers, 2,000 questions) |
| 2026-11-20 01:03 | Catalog Sync | `index.html` | Modified | Added pre-rendered cards for `official_2020` and `official_2019`, updated filter counts to 24 All / 13 Official, updated meta/OG/Twitter/schema to 24 papers (2,000+ Qs) |
| 2026-11-20 01:04 | Catalog Sync | `js/app.js` & `js/i18n.js` | Modified | Synchronized developer stats and legal modals, English & Hindi hero subtitles to 24 authentic papers (2,000+ verified questions) |
| 2026-11-20 01:05 | Verification | `scripts/build_sitemap.js` & `sitemap.xml` | Modified | Re-built sitemap covering all 24 papers across 53 URLs |
| 2026-11-20 01:06 | Verification | `scripts/pro_test_suite.py` | Modified | Updated test assertions to 24 papers / 2,000 Qs; verified 154/154 checks PASS (100%) |
| 2026-11-20 01:07 | Visual Proof | `reports/stet_2019_lobby.png`, `reports/stet_2019_exam.png`, `reports/stet_2020_exam.png` | Created | Automated headless Chrome verification screenshots of lobby and CBT simulator for 2019 & 2020 papers |
| 2026-11-20 23:10 | Phase 3A | `js/data/official-2023.js` & `incoming/stet_2023_cs.json` | Modified | Reconciled official 2023 Paper II against extracted BSEB response sheet; eliminated 48 substituted questions and resolved 7 answer key disagreements (100% PDF fidelity) |
| 2026-11-20 23:12 | Phase 3B | `js/data/papers-index.js`, `index.html`, `js/data/specialized-drills.js` | Modified | Permanently dropped 100% templated filler `drill_modern_tech_50` (50 Qs); catalog reduced to 23 verified papers (13 Official + 10 Drills = 1,950 total questions) |
| 2026-11-20 23:13 | Phase 3B | `js/app.js`, `js/i18n.js`, `sitemap.xml` | Modified | Updated lobby metrics, hero subtitles, developer statistics, and sitemap (51 URLs) to 23 papers / 1,950+ questions; verified `#retired-modal` fallback |
| 2026-11-20 23:25 | Phase 3C | `js/data/topical-drills.js` | Modified | Replaced 65 templated questions in `drill_cs_100` (Q36-Q100) with 65 unique high-yield CS questions; replaced `drill_general_50` Q30 & Q41-Q50 with 11 unique aptitude questions; cleaned scenario markers in `drill_pedagogy_50`; balanced options to ~25% each |
| 2026-11-20 23:26 | Phase 3C | `js/data/specialized-drills.js` | Modified | Replaced 25 templated questions in `drill_dsa_sql_50` (Q26-Q50) with 25 unique DSA/SQL questions; replaced `drill_os_networks_50` Q46-Q50 with 5 unique OS/CN questions; balanced options to ~25% each |
| 2026-11-20 23:28 | Phase 3 Verification | `scripts/pro_test_suite.py` | Modified | Updated test assertions to 23 papers and 1,950 questions; executed full test suite verifying 154 / 154 checks PASS (100%) |
| 2026-11-20 23:28 | Phase 3 Verification | `reports/duplicate_audit_report.json` | Verified | Full catalog audit verified: 0 internal duplicates across all 23 papers; 0 templated markers; 0 duplicate questions in any drill |
| 2026-11-20 23:35 | Phase 4 | `sources/` & `.vercelignore` | Created | Centralized all 15 raw examination PDFs and `syllabus_extracted.txt` into `sources/`; added `sources/`, `incoming/`, `reports/`, `docs/` to `.vercelignore` to avoid deploying ~100MB of static source assets |
| 2026-11-20 23:36 | Phase 4 | `.gitignore` | Modified | Added `sources/` and `incoming/` to prevent large binary PDF artifacts from being staged or committed |
| 2026-11-20 23:36 | Phase 4 | `package.json` | Created | Added clean developer scripts manifest (`serve`, `audit`, `test`, `format:check`) with zero runtime dependencies |
| 2026-11-20 23:37 | Phase 4 | `docs/` | Created | Added comprehensive technical documentation: `DATA_SCHEMA.md`, `CONTENT_GUIDE.md`, `ARCHITECTURE.md`, `TESTING.md`, and `DEPLOYMENT.md` |
| 2026-11-20 23:38 | Phase 4 | `README.md` | Modified | Completely rewrote `README.md` with 100% truth in claims (23 verified papers, 1,950 questions, honest local storage guarantee and Google AdSense transparency) |
| 2026-11-20 23:40 | Phase 4 | `js/core/`, `js/components/`, `js/main.js` | Created | Split core responsibilities into ES modules (`store.js`, `router.js`, `theme.js`, `a11y.js`, `utils.js`, `errors.js`, `paper-card.js`, `palette.js`, `timer.js`, `charts.js`, and `main.js`) while maintaining backward-compatible `js/app.js` |
| 2026-11-20 23:41 | Phase 4 | `index.html` | Modified | Wired `<script type="module" src="js/main.js"></script>` to boot native ES modules alongside deferred vendor-free bundle |
| 2026-11-21 00:05 | Attribution Removal | `sources/`, `js/data/`, `index.html`, `js/app.js`, `README.md`, `docs/`, `sitemap.xml` | Modified | Purged all mentions of "Sachin" / "Sachin Academy" / "Sachin Choudhary"; renamed files to `sources/bihar_stet_art_of_teaching_2023_pyqs.pdf` and `js/data/pedagogy-art-of-teaching.js`; renamed paper IDs from `sachin_*` to `pedagogy_*` with transparent backward-compatibility aliases |
| 2026-11-21 00:07 | Script Pruning | `scripts/` | Deleted | Purged all 41 approved obsolete generator, mock, translation, and extraction scripts from `scripts/` |
| 2026-11-21 00:15 | Phase 5.1 | `css/tokens.css`, `css/base.css`, `css/components.css`, `css/lobby.css`, `css/exam.css`, `css/result.css`, `css/dashboard.css`, `css/print.css` | Created | Modularized design system with 4px spacing, WCAG 2.2 AA contrast ratios, TCS iON palette tokens, responsive layouts, and ink-efficient `@media print` rules |
| 2026-11-21 00:20 | Phase 5.8 | `manifest.webmanifest`, `sw.js` | Created | PWA Web App Manifest and versioned cache-first Service Worker (`bstet-cbt-v2.5.0`) for offline capability |
| 2026-11-21 00:25 | Phase 5.2 | `index.html`, `js/core/router.js` | Modified | Added accessible skip-link, landmark navigation (`<header role="banner">`, `<main id="main-content">`), and client-side hash routing (`#/`, `#/dashboard`, `#/topic-practice`, `#/test/<paperId>`, `#/result`) |
| 2026-11-21 00:30 | Phase 5.3 | `index.html`, `js/app.js` | Modified | Added dynamic hero metrics, debounced live search box, active attempt banner ("Continue where you left off"), and dynamic 15-Unit Computer Science + Pedagogy syllabus map accordion |
| 2026-11-21 00:35 | Phase 5.4 | `js/exam-engine.js`, `index.html`, `js/app.js` | Modified | Implemented timestamp-derived autosave (`BSTET_ACTIVE_ATTEMPT`), question bookmarking (`BSTET_BOOKMARKS`), mobile palette drawer with 44x44px touch targets, and keyboard shortcuts modal (`?`) |
| 2026-11-21 00:40 | Phase 5.5 | `index.html`, `js/app.js` | Modified | Added category cutoff selector (UR 50%, BC 45.5%, EBC 42.5%, SC/ST 40%), dynamic qualification status banner, and "Retry Wrong Questions" practice generator |
| 2026-11-21 00:42 | Phase 5.6 & 5.7 | `index.html`, `js/app.js` | Modified | Built Performance Dashboard view (`#/dashboard`) with study streak, SVG accuracy trend chart, local JSON export/import; built Topic Practice generator (`#/topic-practice`) assembling custom tests from syllabus units |
| 2026-11-21 00:43 | Phase 5 Verification | `reports/phase5_*` | Created | Automated headless Chrome verification matrix capturing 6 responsive desktop & mobile screenshots across all views |
| 2026-11-21 00:55 | Phase 6.4 | `og-preview.svg`, `og-preview.png`, `scripts/tools/render_og_png.py` | Modified/Created | Corrected question count to 1,950+ in `og-preview.svg` and generated pixel-perfect 1200x630 `og-preview.png` via headless Chrome for social media previews |
| 2026-11-21 00:56 | Phase 6.2 | `vercel.json` | Modified | Added modern security headers: Strict-Transport-Security (HSTS max-age=63072000; preload), strict Content-Security-Policy (CSP), and purged deprecated `X-XSS-Protection` |
| 2026-11-21 00:57 | Phase 6.1 | `scripts/tools/stamp_build.js`, `package.json` | Created/Modified | Added cache busting build stamp script appending `?v=<timestamp_hash>` to all CSS, JS, and manifest links in `index.html` and synchronizing `CACHE_NAME` in `sw.js` |
| 2026-11-21 00:58 | Phase 6.3 & 6.4 | `index.html`, `VERSION` | Modified | Updated Open Graph image tags to `og-preview.png`, cleaned all coaching keywords and mojibake in SEO meta, updated developer spec tags to 23 Verified Papers / 1,950+ Questions, updated version to 2.5.0 |
| 2026-11-21 00:59 | Phase 6.5 | `scripts/tools/` | Cleaned | Purged one-off transition scripts (`clean_sachin_index.py`, `apply_comprehensive_drill_cleanup.py`, `clean_and_balance_drills.py`); retained active tool suite |
| 2026-11-21 01:00 | Phase 6 Verification | `scripts/pro_test_suite.py`, `scripts/audit_duplicates.js`, `sitemap.xml` | Verified | Full battery re-verified: 154/154 tests PASS (100%), 0 internal duplicates, 0 drill duplicates, 51 URLs in sitemap |
| 2026-11-21 01:08 | Phase 7 Verification | `reports/final/` | Created | Executed headless Chrome acceptance suite and captured 6 responsive viewport proofs (`lobby_desktop.png`, `lobby_mobile.png`, `dashboard_desktop.png`, `topic_practice_desktop.png`, `exam_cbt_desktop.png`, `exam_cbt_mobile.png`) |
| 2026-11-21 01:10 | Phase 7 Delivery | `reports/final/` | Created | Generated comprehensive final acceptance documentation: `TEST_RESULTS.md`, `CATALOG_SUMMARY.md`, `SECURITY_AUDIT.md`, and `HANDOVER.md` |
