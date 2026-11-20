import json, re, os, sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# Load translation cache
cache_path = r"scripts/translation_cache.json"
with open(cache_path, "r", encoding="utf-8") as f:
    cache = json.load(f)

# Load OCR pages
with open(r'incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

print(f"Loaded {len(pages)} OCR pages and {len(cache)} translations.")
