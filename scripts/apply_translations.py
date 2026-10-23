# -*- coding: utf-8 -*-
"""
Apply authentic Devanagari Hindi translations to all 19 Bihar STET question paper files.
"""

import os
import re
import json
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

CACHE_FILE = r"d:\Isha\Question Paper\scripts\translation_cache.json"
DATA_DIR = r"d:\Isha\Question Paper\js\data"

with open(CACHE_FILE, "r", encoding="utf-8") as f:
    cache = json.load(f)

print(f"Loaded {len(cache)} cached translations.")

def needs_translation(hi, en):
    if not en or not str(en).strip():
        return False
    en_str = str(en).strip()
    if not hi or not str(hi).strip():
        return True
    hi_str = str(hi).strip()

    # Skip pure code / math / single numbers
    if len(en_str) <= 3 and (en_str.isalnum() or en_str in "+-*/=!<>"):
        return False
    if re.match(r"^[\s\d\+\-\*\/\^\(\)\.\,\;\:\<\>\=\[\]\{\}]+$", en_str):
        return False

    has_dev = any('\u0900' <= c <= '\u097F' for c in hi_str)
    if not has_dev:
        return True

    words = hi_str.split()
    dev_words = sum(1 for w in words if any('\u0900' <= c <= '\u097F' for c in w))
    if len(words) >= 4 and (dev_words / len(words)) < 0.60:
        return True

    return False

files = [f for f in sorted(os.listdir(DATA_DIR)) if f.endswith('.js') and f != 'papers-index.js']
total_updated_qs = 0
total_updated_opts = 0

for fname in files:
    fpath = os.path.join(DATA_DIR, fname)
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    m = re.match(r"^(//[^\n]*\n)?window\.([\w\.]+)\s*=\s*(\{[\s\S]*\});?\s*$", content.strip())
    if not m:
        print(f"[SKIP] {fname}: regex mismatch")
        continue

    prefix = m.group(1) or "// Generated Question Paper Data\n"
    var_name = m.group(2)
    raw_json = m.group(3)

    try:
        data = json.loads(raw_json)
    except Exception as e:
        print(f"[ERROR] JSON error in {fname}: {e}")
        continue

    def update_questions(q_list):
        global total_updated_qs, total_updated_opts
        up_q = 0
        up_opt = 0
        for q in q_list:
            eng_q = q.get("question", "").strip()
            if eng_q in cache:
                q["question_hi"] = cache[eng_q]
                up_q += 1
            elif needs_translation(q.get("question_hi"), eng_q):
                # Fallback check for case differences or slight whitespace
                match = None
                for k, v in cache.items():
                    if k.strip().lower() == eng_q.lower():
                        match = v
                        break
                if match:
                    q["question_hi"] = match
                    up_q += 1

            if "options" in q:
                if "options_hi" not in q or not isinstance(q["options_hi"], dict):
                    q["options_hi"] = {}
                for letter, opt_v in q["options"].items():
                    opt_str = opt_v.strip()
                    if opt_str in cache:
                        q["options_hi"][letter] = cache[opt_str]
                        up_opt += 1
                    elif needs_translation(q["options_hi"].get(letter), opt_str):
                        match = None
                        for k, v in cache.items():
                            if k.strip().lower() == opt_str.lower():
                                match = v
                                break
                        if match:
                            q["options_hi"][letter] = match
                            up_opt += 1

        total_updated_qs += up_q
        total_updated_opts += up_opt
        return up_q, up_opt

    if "questions" in data:
        uq, uo = update_questions(data["questions"])
        print(f"[OK] {fname}: Updated {uq} questions, {uo} options")
    else:
        tot_q, tot_o = 0, 0
        for sub_k, sub_p in data.items():
            if isinstance(sub_p, dict) and "questions" in sub_p:
                sq, so = update_questions(sub_p["questions"])
                tot_q += sq
                tot_o += so
        print(f"[OK] {fname} (multi): Updated {tot_q} questions, {tot_o} options")

    new_content = f"{prefix}window.{var_name} = {json.dumps(data, indent=2, ensure_ascii=False)};\n"
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(new_content)

print(f"\nFinished! Total updated questions: {total_updated_qs}, Total updated options: {total_updated_opts}")
