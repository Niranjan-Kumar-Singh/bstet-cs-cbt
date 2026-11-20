import json, re, os, sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# Helper to load translation cache
cache_path = r"scripts/translation_cache.json"
cache = json.load(open(cache_path, "r", encoding="utf-8")) if os.path.exists(cache_path) else {}

def t_hi(en):
    if not en: return ""
    en_s = str(en).strip()
    return cache.get(en_s, en_s)

def q_obj(qid, sec, top, top_hi, q, q_hi, a, b, c, d, ans, exp_en, exp_hi, a_hi=None, b_hi=None, c_hi=None, d_hi=None):
    return {
        "id": qid,
        "questionNumber": qid,
        "section": sec,
        "topic": top,
        "topic_hi": top_hi,
        "marks": 1,
        "negativeMarks": 0,
        "question": q,
        "question_hi": q_hi or t_hi(q),
        "options": {
            "A": a, "B": b, "C": c, "D": d
        },
        "options_hi": {
            "A": a_hi or t_hi(a),
            "B": b_hi or t_hi(b),
            "C": c_hi or t_hi(c),
            "D": d_hi or t_hi(d)
        },
        "correctAnswer": ans,
        "explanation": exp_en,
        "explanation_hi": exp_hi
    }

print("Loaded template helper.")
