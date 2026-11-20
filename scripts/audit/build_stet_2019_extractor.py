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

def clean_txt(t):
    t = re.sub(r'[\x00-\x1f\x7f-\x9f]', '', t)
    t = t.replace('？', '?').replace('言', '').replace('市', '').replace('X', '').replace('fa', '')
    return re.sub(r'\s+', ' ', t).strip()

def is_en(t):
    latin = len(re.findall(r'[a-zA-Z]', t))
    return latin >= 3 and latin / max(1, len(t)) > 0.35

# Let's inspect each page slice
results = []
for pno, (q_start, q_end) in sorted(page_ranges.items()):
    page = next(p for p in pages if p["pdfPage"] == pno)
    lines = [
        l for l in page["lines"] 
        if 150 <= l["y"] <= 1620 and 
        not any(w in l["text"] for w in ['ST-28', 'Set-A', 'General Knowledge', '(Q.Nos.', 'COMPUTER SCIENCE', 'Google Play', 'GET IT ON', 'TestPrime'])
    ]
    lines.sort(key=lambda l: (l["y"], l["x"]))
    
    # Total questions on this page
    k = q_end - q_start + 1
    
    # If k == 1, all lines belong to this question
    # If k > 1, let's find the y split points
    # Split points can be found from explicit question markers or spacing
    # Let's see: where are the question numbers?
    markers = []
    for l in lines:
        m = re.match(r'^([1-9][0-9]?|1[0-4][0-9]|150)\s*[\.\:\s]', l["text"].strip())
        if m:
            markers.append((int(m.group(1)), l["y"]))
        elif re.match(r'^([1-9][0-9]?|1[0-4][0-9]|150)$', l["text"].strip()) and l["x"] < 250:
            markers.append((int(l["text"].strip()), l["y"]))
            
    # Filter markers to those in [q_start, q_end]
    valid_markers = {}
    for num, y in markers:
        if q_start <= num <= q_end and num not in valid_markers:
            valid_markers[num] = y
            
    results.append({
        "page": pno,
        "range": (q_start, q_end),
        "found_markers": sorted(valid_markers.keys()),
        "lines_count": len(lines)
    })

print(f"Total pages checked: {len(results)}")
for r in results:
    expected = list(range(r["range"][0], r["range"][1] + 1))
    missing = [q for q in expected if q not in r["found_markers"]]
    if missing:
        print(f"Page {r['page']:2d} ({r['range'][0]}-{r['range'][1]}): missing markers for {missing}")
