import json, re, os, sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# Load OCR
with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

# Load translation cache
cache_path = r"scripts/translation_cache.json"
if os.path.exists(cache_path):
    with open(cache_path, "r", encoding="utf-8") as f:
        cache = json.load(f)
else:
    cache = {}

def translate_hi(en_text):
    if not en_text or not en_text.strip():
        return ""
    en_clean = en_text.strip()
    if en_clean in cache:
        return cache[en_clean]
    return en_clean

print("Translation cache ready with", len(cache), "entries.")
