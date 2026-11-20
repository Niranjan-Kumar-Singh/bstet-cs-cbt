import json, re, os, sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

print("Loading OCR and translation cache for STET 2019...")
with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

cache_path = r"scripts/translation_cache.json"
cache = json.load(open(cache_path, "r", encoding="utf-8")) if os.path.exists(cache_path) else {}

def t_hi(en):
    if not en: return ""
    en_s = str(en).strip()
    return cache.get(en_s, en_s)

# We will generate all 150 questions with 100% clean verified questions
