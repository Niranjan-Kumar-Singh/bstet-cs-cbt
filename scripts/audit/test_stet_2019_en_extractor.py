import json, re

with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

def clean(t):
    t = re.sub(r'[\x00-\x1f\x7f-\x9f]', '', t)
    t = t.replace('？', '?').replace('言', '').replace('市', '').replace('X', '').replace('fa', '')
    return re.sub(r'\s+', ' ', t).strip()

def is_latin_text(t):
    latin = len(re.findall(r'[a-zA-Z]', t))
    return latin >= 3 and latin / max(1, len(t)) > 0.35

all_extracted = []

for p in pages:
    pnum = p["pdfPage"]
    lines = [
        l for l in p["lines"] 
        if 150 <= l["y"] <= 1620 and 
        not any(w in l["text"] for w in ['ST-28', 'Set-A', 'General Knowledge', '(Q.Nos.', 'COMPUTER SCIENCE', 'Google Play', 'GET IT ON', 'TestPrime'])
    ]
    
    # Sort lines by y, then x
    lines.sort(key=lambda l: (l["y"], l["x"]))
    
    # Look for questions on this page
    # An English question begins with an English sentence that ends in '?' or statement words,
    # or starts with a question word or capital letter.
    # Notice: English questions have options (A), (B), (C), (D) in English following them.
