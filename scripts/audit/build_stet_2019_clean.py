import json, re, os, sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

print("Starting clean build of STET 2019 Paper II...")

# Load translation cache
cache_path = r"scripts/translation_cache.json"
cache = json.load(open(cache_path, "r", encoding="utf-8")) if os.path.exists(cache_path) else {}

def t_hi(en):
    if not en: return ""
    en_s = str(en).strip()
    return cache.get(en_s, en_s)

# Load OCR
with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

# Helper function to generate clean standard question object
def make_q(qid, section, topic, topic_hi, q_en, q_hi, opts_en, opts_hi, ans, exp_en, exp_hi):
    return {
        "id": qid,
        "questionNumber": qid,
        "section": section,
        "topic": topic,
        "topic_hi": topic_hi,
        "marks": 1,
        "negativeMarks": 0,
        "question": q_en,
        "question_hi": q_hi or t_hi(q_en),
        "options": opts_en,
        "options_hi": {k: (opts_hi.get(k) if opts_hi and opts_hi.get(k) else t_hi(opts_en[k])) for k in "ABCD"},
        "correctAnswer": ans,
        "explanation": exp_en,
        "explanation_hi": exp_hi
    }
