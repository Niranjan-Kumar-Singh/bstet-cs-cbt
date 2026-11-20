import os

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('35 full papers (3,650+ questions including Sachin Academy Art of Teaching PYQs)',
                    '21 verified papers (1,550+ questions including Sachin Academy Art of Teaching PYQs)')
html = html.replace('35 full papers, 3,650+ questions including Sachin Academy Pedagogy PYQs',
                    '21 verified papers, 1,550+ questions including Sachin Academy Pedagogy PYQs')
html = html.replace('Portal | 30 Full Papers', 'Portal | 21 Verified Papers')
html = html.replace('featuring 30 full papers (3,200+ questions including Sachin Academy Art of Teaching PYQ Collection)',
                    'featuring 21 verified papers (1,550+ questions including Sachin Academy Art of Teaching PYQ Collection)')

# Cache buster for stylesheet
html = html.replace('css/cbt-theme.css?v=20261025_01', 'css/cbt-theme.css?v=20261119_ui_v3')

# Clean modal card and body inline styles
old_card_tag = '<div class="modal-card legal-modal-card" style="max-width: 890px; width: min(890px, 94vw); max-height: 86vh; display: flex; flex-direction: column;">'
new_card_tag = '<div class="modal-card legal-modal-card">'
html = html.replace(old_card_tag, new_card_tag)

old_body_tag = '<div class="modal-body legal-modal-body" id="legal-modal-body" style="overflow-y: auto; flex: 1; padding: 22px; line-height: 1.65; font-size: 14px;">'
new_body_tag = '<div class="modal-body legal-modal-body" id="legal-modal-body">'
html = html.replace(old_body_tag, new_body_tag)

old_tab_author = '<button class="legal-tab-btn" data-tab="author">👨‍💻 About Niranjan Kumar Singh</button>'
new_tab_author = '<button class="legal-tab-btn" data-tab="author">👨‍💻 About Developer</button>'
html = html.replace(old_tab_author, new_tab_author)

# Update script cache busters
html = html.replace('?v=20261028_sachin_v2', '?v=20261119_ui_v3')

with open('index.html', 'w', encoding='utf-8', newline='\r\n') as f:
    f.write(html)
print('index.html updated successfully')

# 2. Update js/i18n.js
with open('js/i18n.js', 'r', encoding='utf-8') as f:
    i18n = f.read()

i18n = i18n.replace(
    'Practice with 35 comprehensive mock papers (3,650+ questions including Sachin Academy PYQ Collection)',
    'Practice with 21 authentic mock papers (1,550+ verified questions including Sachin Academy PYQ Collection)'
)
i18n = i18n.replace(
    '35 संपूर्ण मॉक पेपर्स (3,650+ प्रश्न जिसमें सचिन एकेडमी शिक्षण कला संग्रह शामिल है)',
    '21 प्रामाणिक मॉक पेपर्स (1,550+ सत्यापित प्रश्न जिसमें सचिन एकेडमी शिक्षण कला संग्रह शामिल है)'
)

with open('js/i18n.js', 'w', encoding='utf-8', newline='\r\n') as f:
    f.write(i18n)
print('js/i18n.js updated successfully')

# 3. Update js/app.js
with open('js/app.js', 'r', encoding='utf-8') as f:
    app = f.read()

# Reset scrollTop on tab change and open
app = app.replace(
    "this.renderLegalTabContent(tab.dataset.tab);\n        });",
    "this.renderLegalTabContent(tab.dataset.tab);\n          if (this.legalModalBody) this.legalModalBody.scrollTop = 0;\n        });"
)
app = app.replace(
    "this.renderLegalTabContent(tab.dataset.tab);\r\n        });",
    "this.renderLegalTabContent(tab.dataset.tab);\r\n          if (this.legalModalBody) this.legalModalBody.scrollTop = 0;\r\n        });"
)
app = app.replace(
    "this.renderLegalTabContent(tabName);\n    this.legalModal.classList.add('active');",
    "this.renderLegalTabContent(tabName);\n    if (this.legalModalBody) this.legalModalBody.scrollTop = 0;\n    this.legalModal.classList.add('active');"
)
app = app.replace(
    "this.renderLegalTabContent(tabName);\r\n    this.legalModal.classList.add('active');",
    "this.renderLegalTabContent(tabName);\r\n    if (this.legalModalBody) this.legalModalBody.scrollTop = 0;\r\n    this.legalModal.classList.add('active');"
)

# Update hardcoded numbers in legal modal
app = app.replace(
    "All 35 full-length test papers and 3,650 questions are provided without any paywalls, premium tiers, or registration barriers.",
    "All 21 verified mock papers and 1,550+ questions are provided without any paywalls, premium tiers, or registration barriers."
)
app = app.replace(
    "across all 3,650 questions.",
    "across all 1,550+ verified questions."
)
app = app.replace(
    "35 Full-Length Mock Papers (3,650 questions) covering Computer Science (100Q), Sachin Academy Art of Teaching (30Q), and General Skills (20Q).",
    "21 Verified Mock Papers & Drills (1,550+ questions) covering Computer Science (100Q), Sachin Academy Art of Teaching (30Q), and General Skills (20Q)."
)

with open('js/app.js', 'w', encoding='utf-8', newline='') as f:
    f.write(app)
print('js/app.js updated successfully')
