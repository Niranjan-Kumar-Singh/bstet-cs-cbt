import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

print("=" * 60)
print("🚀 RUNNING PRO TESTER & SENIOR DEVELOPER VERIFICATION SUITE")
print("=" * 60)

passed = 0
failed = 0

def test(name, condition, details=""):
    global passed, failed
    if condition:
        print(f"  ✅ PASS: {name}")
        passed += 1
    else:
        print(f"  ❌ FAIL: {name} - {details}")
        failed += 1

# TEST 1: Check Images
print("\n[Suite 1: Image & Asset Integrity]")
test("developer-avatar.png exists", os.path.exists("images/developer-avatar.png"))
test("developer-avatar.webp exists", os.path.exists("images/developer-avatar.webp"))
test("developer-profile.png exists", os.path.exists("images/developer-profile.png"))
test("developer-profile.webp exists", os.path.exists("images/developer-profile.webp"))
test("favicon.svg exists", os.path.exists("favicon.svg") and os.path.getsize("favicon.svg") > 500)

# TEST 2: Check index.html DOM Elements
print("\n[Suite 2: index.html DOM Architecture]")
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

required_ids = [
    "global-navbar", "nav-brand-title", "nav-brand-subtitle", "lang-toggle-btn", "lang-toggle-text",
    "font-smaller-btn", "font-reset-btn", "font-larger-btn", "fullscreen-btn", "theme-toggle-btn",
    "hero-mission-pill", "hero-quote", "hero-heading", "hero-desc",
    "meta-subj-title", "meta-subj-val", "meta-pedagogy-title", "meta-pedagogy-val",
    "meta-skills-title", "meta-skills-val", "meta-dur-title", "meta-dur-val",
    "meta-cut-title", "meta-cut-val",
    "tab-filter-all", "tab-filter-official", "tab-filter-predicted", "tab-filter-drill",
    "papers-grid",
    "history-heading", "history-subtext", "th-paper", "th-date", "th-score", "th-accuracy", "th-status", "th-action",
    "exam-header", "badge-cbt-live", "exam-title-text", "timer-box", "timer-display", "exam-lang-toggle-btn",
    "pause-btn", "pause-btn-text", "view-qp-btn", "qp-btn-text",
    "exam-font-smaller-btn", "exam-font-reset-btn", "exam-font-larger-btn",
    "exam-theme-toggle-btn", "exam-fullscreen-btn",
    "sections-tabs-container", "q-number-text", "q-topic-tag", "q-statement", "options-container",
    "practice-explanation-box", "practice-box-title", "practice-explanation-content",
    "palette-pane", "palette-heading-text", "mobile-palette-header", "mobile-close-palette-btn",
    "candidate-name-text", "candidate-subject-text",
    "legend-answered", "legend-not-answered", "legend-not-visited", "legend-marked", "legend-ans-marked",
    "leg-text-answered", "leg-text-not-answered", "leg-text-not-visited", "leg-text-marked", "leg-text-ans-marked",
    "palette-grid",
    "prev-btn", "mark-review-btn", "clear-btn", "next-btn", "save-next-btn", "submit-exam-btn", "mobile-palette-toggle",
    "mode-modal", "modal-paper-title", "m-cbt-title", "m-cbt-desc", "m-prac-title", "m-prac-desc",
    "cancel-mode-btn", "start-exam-btn",
    "submit-modal", "sub-modal-title", "sub-modal-desc", "sub-lbl-total", "sub-lbl-ans", "sub-lbl-unans", "sub-lbl-marked",
    "sub-modal-prompt", "cancel-submit-btn", "confirm-submit-btn",
    "pause-modal", "pause-modal-title", "pause-modal-desc", "resume-exam-modal-btn",
    "legal-modal", "legal-modal-title", "legal-modal-body", "legal-modal-ok-btn",
    "dev-role-label", "dev-spec-badge", "dev-role-title", "dev-statement", "open-legal-contact-btn",
    "seo-card-title", "seo-card-desc"
]

for dom_id in required_ids:
    pattern = f'id="{dom_id}"'
    test(f"index.html has id='{dom_id}'", pattern in html, f"Missing id='{dom_id}'")

test("index.html embeds developer avatar picture", "developer-avatar.webp" in html and "developer-avatar-img" in html)
test("index.html embeds brand-logo-emblem SVG", "brand-logo-emblem" in html and "favicon.svg" in html)

# TEST 3: Papers Catalog Integrity
print("\n[Suite 3: Master Papers Catalog (papers-index.js)]")
with open("js/data/papers-index.js", "r", encoding="utf-8") as f:
    cat_code = f.read()

paper_matches = re.findall(r'"?id"?\s*:\s*["\']([^"\']+)["\']', cat_code)
total_qs_matches = [int(q) for q in re.findall(r'"?totalQuestions"?\s*:\s*(\d+)', cat_code)]
sum_qs = sum(total_qs_matches)

test("Catalog has 35 papers", len(paper_matches) == 35, f"Found {len(paper_matches)} papers")
test("Catalog has exactly 3,650 questions", sum_qs == 3650, f"Found {sum_qs} questions")

# TEST 4: Bilingual Engine Integrity
print("\n[Suite 4: Internationalization (i18n.js)]")
with open("js/i18n.js", "r", encoding="utf-8") as f:
    i18n_code = f.read()

en_match = re.search(r'en:\s*\{(.*?)\n\s*\},', i18n_code, re.DOTALL)
hi_match = re.search(r'hi:\s*\{(.*?)\n\s*\},', i18n_code, re.DOTALL)

test("i18n has en dictionary", en_match is not None)
test("i18n has hi dictionary", hi_match is not None)

if en_match and hi_match:
    en_keys = set(re.findall(r'^\s*([a-zA-Z0-9_]+)\s*:', en_match.group(1), re.MULTILINE))
    hi_keys = set(re.findall(r'^\s*([a-zA-Z0-9_]+)\s*:', hi_match.group(1), re.MULTILINE))
    diff = en_keys - hi_keys
    test(f"Zero missing keys in Hindi dictionary (Total: {len(en_keys)})", len(diff) == 0, f"Missing: {diff}")
    test("translatePaperTitle function exists", "translatePaperTitle" in i18n_code)
    test("translatePaperSubtitle function exists", "translatePaperSubtitle" in i18n_code)
    test("translateBadge function exists", "translateBadge" in i18n_code)
    test("translateDifficulty function exists", "translateDifficulty" in i18n_code)

# TEST 5: CSS Font Scaling and Layout
print("\n[Suite 5: CSS Stylesheets & Accessibility]")
with open("css/styles.css", "r", encoding="utf-8") as f:
    styles_css = f.read()
with open("css/cbt-theme.css", "r", encoding="utf-8") as f:
    cbt_css = f.read()

test("styles.css defines --font-scale variable", "--font-scale" in styles_css)
test("styles.css defines data-font-size selectors", 'html[data-font-size="small"]' in styles_css and 'html[data-font-size="xlarge"]' in styles_css)
test("cbt-theme.css defines .font-zoom-controls", ".font-zoom-controls" in cbt_css)
test("cbt-theme.css defines .font-zoom-btn", ".font-zoom-btn" in cbt_css)
test("cbt-theme.css defines .developer-avatar-img", ".developer-avatar-img" in cbt_css)
test("cbt-theme.css defines .brand-logo-emblem", ".brand-logo-emblem" in cbt_css)

# TEST 6: App Controller Logic
print("\n[Suite 6: Application Controller (app.js)]")
with open("js/app.js", "r", encoding="utf-8") as f:
    app_code = f.read()

test("app.js has initFontSize", "initFontSize()" in app_code)
test("app.js has applyFontSize", "applyFontSize(" in app_code)
test("app.js has changeFontSize", "changeFontSize(" in app_code)
test("app.js has resetFontSize", "resetFontSize()" in app_code)
test("app.js wires all font zoom buttons", "this.examFontSmallerBtn" in app_code and "this.fontResetBtn" in app_code)
test("app.js toggleExamLanguage syncs via setAppLanguage", "this.setAppLanguage(nextLang)" in app_code)
test("app.js renderLobby translates paper cards", "i18n.translatePaperTitle" in app_code and "i18n.translateBadge" in app_code)
test("app.js author tab showcases developer Niranjan Kumar Singh with profile image", "developer-profile.webp" in app_code and "Active Architect" in app_code)

# TEST 7: Security & Deployment
print("\n[Suite 7: Security Headers & Configuration]")
with open("vercel.json", "r", encoding="utf-8") as f:
    vercel = f.read()

test("vercel.json has X-Content-Type-Options: nosniff", "nosniff" in vercel)
test("vercel.json has X-Frame-Options: SAMEORIGIN", "SAMEORIGIN" in vercel)
test("vercel.json has Referrer-Policy", "Referrer-Policy" in vercel)
test("vercel.json has Permissions-Policy", "Permissions-Policy" in vercel)
test("vercel.json has static asset caching (max-age=31536000)", "max-age=31536000" in vercel)

print("\n" + "=" * 60)
print(f"📊 SUMMARY: {passed} PASSED, {failed} FAILED")
print("=" * 60)

if failed > 0:
    sys.exit(1)
else:
    print("🎉 ALL TESTS PASSED WITH 100% SUCCESS!")
