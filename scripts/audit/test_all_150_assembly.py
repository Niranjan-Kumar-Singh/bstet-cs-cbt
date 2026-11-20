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

def is_latin_text(t):
    latin = len(re.findall(r'[a-zA-Z]', t))
    return latin >= 3 and latin / max(1, len(t)) > 0.35

assembled = {}

for pno, (q_start, q_end) in sorted(page_ranges.items()):
    page = next(p for p in pages if p["pdfPage"] == pno)
    lines = [
        l for l in page["lines"] 
        if 150 <= l["y"] <= 1620 and 
        not any(w in l["text"] for w in ['ST-28', 'Set-A', 'General Knowledge', '(Q.Nos.', 'COMPUTER SCIENCE', 'Google Play', 'GET IT ON', 'TestPrime'])
    ]
    lines.sort(key=lambda l: (l["y"], l["x"]))
    
    # Identify known marker y-positions
    markers = {}
    for l in lines:
        txt = l["text"].strip()
        m = re.match(r'^([1-9][0-9]?|1[0-4][0-9]|150)\s*[\.\:\s]', txt)
        if m:
            num = int(m.group(1))
            if q_start <= num <= q_end and num not in markers:
                markers[num] = l["y"]
        elif re.match(r'^([1-9][0-9]?|1[0-4][0-9]|150)$', txt) and l["x"] < 250:
            num = int(txt)
            if q_start <= num <= q_end and num not in markers:
                markers[num] = l["y"]

    q_nums = list(range(q_start, q_end + 1))
    
    # Calculate boundaries
    boundaries = [150.0]
    for idx in range(1, len(q_nums)):
        qn = q_nums[idx]
        if qn in markers:
            boundaries.append(markers[qn] - 25.0)
        else:
            # interpolate
            prev_b = boundaries[-1]
            rem_qs = len(q_nums) - idx
            boundaries.append(prev_b + (1620.0 - prev_b) / (rem_qs + 1))
    boundaries.append(1650.0)
    
    for idx, qn in enumerate(q_nums):
        s_y = boundaries[idx]
        e_y = boundaries[idx + 1]
        q_lines = [l for l in lines if s_y <= l["y"] < e_y]
        
        # In this slice:
        # Find statement and options
        # Options have (A), (B), (C), (D) or x-coordinate columns
        en_lines = [l for l in q_lines if is_latin_text(clean_txt(l["text"]))]
        
        # Check if there is an explicit option (A) in en_lines
        opt_start_y = None
        for l in en_lines:
            if re.search(r'\([A-D]\)', l["text"]):
                if opt_start_y is None or l["y"] < opt_start_y:
                    opt_start_y = l["y"]
                    
        if opt_start_y is not None:
            stmt_lines = [l for l in en_lines if l["y"] < opt_start_y - 10]
            opt_lines = [l for l in en_lines if l["y"] >= opt_start_y - 10]
        else:
            # Take first 1 or 2 lines as statement, rest as options if count >= 3
            if len(en_lines) > 2:
                stmt_lines = en_lines[:len(en_lines)-4] if len(en_lines) >= 5 else en_lines[:1]
                opt_lines = en_lines[len(stmt_lines):]
            else:
                stmt_lines = en_lines
                opt_lines = []
                
        stmt = clean_txt(" ".join(l["text"] for l in stmt_lines))
        # Remove leading "12. " if present
        stmt = re.sub(r'^[0-9]{1,3}\s*[\.\:\s]\s*', '', stmt)
        
        assembled[qn] = {
            "page": pno,
            "statement": stmt,
            "opt_lines_count": len(opt_lines),
            "opt_texts": [clean_txt(l["text"]) for l in opt_lines]
        }

print(f"Total assembled: {len(assembled)}")
empty_stmts = [qn for qn, d in assembled.items() if len(d["statement"]) < 5]
print(f"Questions with short statements (<5 chars): {len(empty_stmts)} -> {empty_stmts}")
