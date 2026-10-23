# -*- coding: utf-8 -*-
"""
High-Speed Bilingual Translation Engine for Bihar STET Question Papers
Fetches authentic Devanagari Hindi translations for all questions, options, and topics.
"""

import os
import re
import json
import urllib.request
import urllib.parse
import time
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

CACHE_FILE = r"d:\Isha\Question Paper\scripts\translation_cache.json"
DATA_DIR = r"d:\Isha\Question Paper\js\data"

if os.path.exists(CACHE_FILE):
    try:
        with open(CACHE_FILE, "r", encoding="utf-8") as f:
            cache = json.load(f)
    except Exception:
        cache = {}
else:
    cache = {}

print(f"Loaded {len(cache)} existing cached translations.")

def save_cache():
    try:
        with open(CACHE_FILE, "w", encoding="utf-8") as f:
            json.dump(cache, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"Error saving cache: {e}")

def needs_translation(hi, en):
    if not en or not str(en).strip():
        return False
    en_str = str(en).strip()
    if not hi or not str(hi).strip():
        return True
    hi_str = str(hi).strip()

    # If english is purely math / code / numbers / simple identifiers
    if len(en_str) <= 3 and (en_str.isalnum() or en_str in "+-*/=!<>"):
        return False
    if re.match(r"^[\s\d\+\-\*\/\^\(\)\.\,\;\:\<\>\=\[\]\{\}]+$", en_str):
        return False

    # Check for presence of Devanagari characters
    has_dev = any('\u0900' <= c <= '\u097F' for c in hi_str)
    if not has_dev:
        return True

    words = hi_str.split()
    dev_words = sum(1 for w in words if any('\u0900' <= c <= '\u097F' for c in w))
    # If the sentence is long and less than 60% of words are Devanagari, it is poor Hinglish
    if len(words) >= 4 and (dev_words / len(words)) < 0.60:
        return True

    return False

def fetch_single(text):
    text_clean = text.strip()
    if text_clean in cache:
        return text_clean, cache[text_clean]

    # Don't translate pure math
    if re.match(r"^[\s\d\+\-\*\/\^\(\)\.\,\;\:\<\>\=\[\]\{\}]+$", text_clean):
        return text_clean, text_clean

    url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=" + urllib.parse.quote(text_clean)
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}

    for attempt in range(4):
        try:
            req = urllib.request.Request(url, headers=headers)
            res = urllib.request.urlopen(req, timeout=6)
            data = json.loads(res.read().decode("utf-8"))
            translated = "".join(part[0] for part in data[0] if part and part[0])
            return text_clean, translated
        except Exception:
            time.sleep(0.4 * (attempt + 1))

    return text_clean, text_clean

def collect_strings_to_translate():
    files = [f for f in sorted(os.listdir(DATA_DIR)) if f.endswith('.js') and f != 'papers-index.js']
    needed = set()

    for fname in files:
        fpath = os.path.join(DATA_DIR, fname)
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        m = re.search(r"=\s*(\{[\s\S]*\});?\s*$", content)
        if not m:
            continue
        try:
            data = json.loads(m.group(1))
        except Exception:
            continue

        q_list = data.get("questions", [])
        if not q_list:
            for v in data.values():
                if isinstance(v, dict) and "questions" in v:
                    q_list.extend(v["questions"])

        for q in q_list:
            eng_q = q.get("question", "")
            hi_q = q.get("question_hi", "")
            if needs_translation(hi_q, eng_q):
                needed.add(eng_q.strip())

            opts = q.get("options", {})
            opts_hi = q.get("options_hi", {})
            for k, opt_v in opts.items():
                if not opt_v: continue
                cur_hi = opts_hi.get(k, "") if isinstance(opts_hi, dict) else ""
                if needs_translation(cur_hi, opt_v):
                    needed.add(opt_v.strip())

    return needed

def main():
    needed = collect_strings_to_translate()
    to_fetch = [s for s in needed if s not in cache]
    print(f"Total needed: {len(needed)}, Already cached: {len(needed) - len(to_fetch)}, To fetch: {len(to_fetch)}")

    if to_fetch:
        print(f"Starting concurrent fetching with 12 workers...")
        count = 0
        start_time = time.time()
        with ThreadPoolExecutor(max_workers=12) as executor:
            future_to_text = {executor.submit(fetch_single, txt): txt for txt in to_fetch}
            for future in as_completed(future_to_text):
                orig, trans = future.result()
                if trans and trans != orig:
                    cache[orig] = trans
                count += 1
                if count % 100 == 0 or count == len(to_fetch):
                    elapsed = time.time() - start_time
                    rate = count / (elapsed + 0.001)
                    print(f"Progress: {count}/{len(to_fetch)} ({count*100//len(to_fetch)}%) at {rate:.1f} items/sec")
                    save_cache()

        save_cache()
        print(f"Fetch completed in {time.time() - start_time:.2f}s. Total cache size: {len(cache)}")

    # Now apply translations to all data files
    print("\nApplying authentic translations to all JS data files...")
    files = [f for f in sorted(os.listdir(DATA_DIR)) if f.endswith('.js') and f != 'papers-index.js']
    
    for fname in files:
        fpath = os.path.join(DATA_DIR, fname)
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        m = re.match(r"^(//[^\n]*\n)?window\.([\w\.]+)\s*=\s*(\{[\s\S]*\});?\s*$", content.strip())
        if not m:
            print(f"Skipping {fname}: regex mismatch")
            continue

        prefix = m.group(1) or "// Generated Question Paper Data\n"
        var_name = m.group(2)
        raw_json = m.group(3)

        try:
            data = json.loads(raw_json)
        except Exception as e:
            print(f"JSON error in {fname}: {e}")
            continue

        def update_questions(q_list):
            updated_count = 0
            for q in q_list:
                eng_q = q.get("question", "").strip()
                if eng_q in cache:
                    q["question_hi"] = cache[eng_q]
                    updated_count += 1
                elif needs_translation(q.get("question_hi"), eng_q):
                    q["question_hi"] = eng_q # fallback

                if "options" in q:
                    if "options_hi" not in q or not isinstance(q["options_hi"], dict):
                        q["options_hi"] = {}
                    for letter, opt_v in q["options"].items():
                        opt_str = opt_v.strip()
                        if opt_str in cache:
                            q["options_hi"][letter] = cache[opt_str]
                        elif needs_translation(q["options_hi"].get(letter), opt_str):
                            q["options_hi"][letter] = opt_str
            return updated_count

        if "questions" in data:
            u = update_questions(data["questions"])
            print(f"  ✓ {fname}: Updated {u} questions")
        else:
            tot = 0
            for sub_k, sub_p in data.items():
                if isinstance(sub_p, dict) and "questions" in sub_p:
                    tot += update_questions(sub_p["questions"])
            print(f"  ✓ {fname} (multi): Updated {tot} questions")

        new_content = f"{prefix}window.{var_name} = {json.dumps(data, indent=2, ensure_ascii=False)};\n"
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new_content)

    print("\nAll paper files successfully updated with authentic Devanagari Hindi!")

if __name__ == "__main__":
    main()
