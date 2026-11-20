import json, re, os, sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

print("Building STET 2019 Complete Dataset...")

# Load translation cache
cache_path = r"scripts/translation_cache.json"
cache = json.load(open(cache_path, "r", encoding="utf-8")) if os.path.exists(cache_path) else {}

def t_hi(en):
    en_str = str(en).strip()
    return cache.get(en_str, en_str)

# Load OCR
with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

# Helper to clean text
def clean(t):
    if not t: return ""
    t = re.sub(r'[\x00-\x1f\x7f-\x9f]', '', t)
    t = t.replace('？', '?').replace('言', '').replace('市', '').replace('X', '').replace('fa', '')
    t = t.replace('’', "'").replace('‘', "'").replace('“', '"').replace('”', '"')
    return re.sub(r'\s+', ' ', t).strip()

print(f"Translation cache has {len(cache)} entries.")
