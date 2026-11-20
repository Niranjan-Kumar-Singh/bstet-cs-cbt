import json, re

with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

page_ranges = {
    5: (1, 3), 6: (4, 6), 7: (7, 9), 8: (10, 12), 9: (13, 15), 10: (16, 18),
    11: (19, 20), 12: (21, 23), 13: (24, 25), 14: (26, 28), 15: (29, 32),
    16: (33, 35), 17: (36, 39), 18: (40, 41), 19: (42, 44), 20: (45, 47),
    21: (48, 50), 22: (51, 54), 23: (55, 59), 24: (60, 63), 25: (64, 67),
    26: (68, 72), 27: (73, 76), 28: (77, 80), 29: (81, 83), 30: (84, 85),
    31: (86, 89), 32: (90, 92), 33: (93, 95), 34: (96, 98), 35: (99, 101),
    36: (102, 105), 37: (106, 110), 38: (111, 113), 39: (114, 117), 40: (118, 121),
    41: (122, 127), 42: (128, 129), 43: (130, 133), 44: (134, 138), 45: (139, 141),
    46: (142, 145), 47: (146, 148), 50: (149, 150)
}

def clean_ocr(t):
    if not t: return ""
    t = re.sub(r'[\x00-\x1f\x7f-\x9f]', '', t)
    t = t.replace('？', '?').replace('言', '').replace('市', '').replace('X', '').replace('fa', '')
    t = t.replace('’', "'").replace('‘', "'").replace('“', '"').replace('”', '"')
    return re.sub(r'\s+', ' ', t).strip()

def is_latin_text(t):
    latin = len(re.findall(r'[a-zA-Z]', t))
    return latin >= 3 and (latin / max(1, len(t))) > 0.35

# Let's inspect the lines for each incomplete question
# For instance, let's look at Q6, Q7, Q15, Q20, Q32, Q35, Q39, Q51, Q55, Q59, Q65, Q66, Q69, Q72
target_qs = [6, 7, 15, 20, 32, 35, 39, 51, 55, 59, 65, 66, 69, 72]

for pno, (q_start, q_end) in sorted(page_ranges.items()):
    in_page_targets = [q for q in target_qs if q_start <= q <= q_end]
    if not in_page_targets: continue
    
    page = next(p for p in pages if p["pdfPage"] == pno)
    lines = [
        l for l in page["lines"] 
        if 150 <= l["y"] <= 1620 and 
        not any(w in l["text"] for w in ['ST-28', 'Set-A', 'General Knowledge', '(Q.Nos.', 'COMPUTER SCIENCE', 'Google Play', 'GET IT ON', 'TestPrime'])
    ]
    lines.sort(key=lambda l: (l["y"], l["x"]))
    
    print(f"\n================ Page {pno} (Targets: {in_page_targets}) ================")
    for l in lines:
        txt = clean_ocr(l["text"])
        if is_latin_text(txt) or any(c in txt for c in "1234567890ABCDabcd"):
            print(f"  y={int(l['y']):4d}, x={int(l['x']):4d}: {txt}")
