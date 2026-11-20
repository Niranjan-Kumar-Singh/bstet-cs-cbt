import json, os, sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

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

print("Building 150 questions for Bihar STET 2019...")
