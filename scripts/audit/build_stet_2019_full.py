import json, re, os, sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

print("Starting generation of STET 2019 (150 Questions)...")

# Load translation cache
cache_path = r"scripts/translation_cache.json"
cache = json.load(open(cache_path, "r", encoding="utf-8")) if os.path.exists(cache_path) else {}

def t_hi(en):
    if not en: return ""
    en_s = str(en).strip()
    return cache.get(en_s, en_s)

# Load OCR pages
with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

# Helper to build a question
def build_q(qid, sec, top, top_hi, q_en, q_hi, opts_en, ans, exp_en, exp_hi, opts_hi=None):
    if opts_hi is None:
        opts_hi = {k: t_hi(opts_en[k]) for k in "ABCD"}
    return {
        "id": qid,
        "questionNumber": qid,
        "section": sec,
        "topic": top,
        "topic_hi": top_hi,
        "marks": 1,
        "negativeMarks": 0,
        "question": q_en,
        "question_hi": q_hi or t_hi(q_en),
        "options": opts_en,
        "options_hi": opts_hi,
        "correctAnswer": ans,
        "explanation": exp_en,
        "explanation_hi": exp_hi
    }

print("Template builder initialized.")
