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

extracted_qs = []

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
    
    boundaries = [150.0]
    for idx in range(1, len(q_nums)):
        qn = q_nums[idx]
        if qn in markers:
            boundaries.append(markers[qn] - 25.0)
        else:
            prev_b = boundaries[-1]
            rem_qs = len(q_nums) - idx
            boundaries.append(prev_b + (1620.0 - prev_b) / (rem_qs + 1))
    boundaries.append(1650.0)
    
    for idx, qn in enumerate(q_nums):
        s_y = boundaries[idx]
        e_y = boundaries[idx + 1]
        q_lines = [l for l in lines if s_y <= l["y"] < e_y]
        
        # In this slice:
        # Cluster lines into horizontal rows (within 18px)
        rows = []
        for l in q_lines:
            matched = False
            for r in rows:
                if abs(r[0]["y"] - l["y"]) <= 18:
                    r.append(l)
                    matched = True
                    break
            if not matched:
                rows.append([l])
        for r in rows:
            r.sort(key=lambda x: x["x"])
        rows.sort(key=lambda r: r[0]["y"])
        
        opt_a, opt_b, opt_c, opt_d = "", "", "", ""
        stmt_rows = []
        
        opt_start_row_idx = None
        for r_idx, r in enumerate(rows):
            r_txt = " ".join(item["text"] for item in r)
            if re.search(r'\([A-D]\)|\(v\)|\(P\)', r_txt):
                if opt_start_row_idx is None:
                    opt_start_row_idx = r_idx
                    
        if opt_start_row_idx is not None:
            cand_stmt = []
            for r in rows[:opt_start_row_idx]:
                r_txt = clean_ocr(" ".join(item["text"] for item in r))
                if is_latin_text(r_txt):
                    cand_stmt.append(r_txt)
            stmt = " ".join(cand_stmt)
            
            for r in rows[opt_start_row_idx:]:
                r_txt = clean_ocr(" ".join(item["text"] for item in r))
                m_a = re.search(r'(?:\(A\)|\(v\))\s*([^(\n\r]+)', r_txt)
                m_b = re.search(r'(?:\(B\)|\(BL\))\s*([^(\n\r]+)', r_txt)
                m_c = re.search(r'(?:\(C\))\s*([^(\n\r]+)', r_txt)
                m_d = re.search(r'(?:\(D\)|\(P\))\s*([^(\n\r]+)', r_txt)
                
                if m_a and not opt_a: opt_a = clean_ocr(m_a.group(1))
                if m_b and not opt_b: opt_b = clean_ocr(m_b.group(1))
                if m_c and not opt_c: opt_c = clean_ocr(m_c.group(1))
                if m_d and not opt_d: opt_d = clean_ocr(m_d.group(1))
                
                if len(r) >= 2 and (not opt_a or not opt_b or not opt_c or not opt_d):
                    left_items = [item for item in r if item["x"] < 550 and not re.match(r'^\([A-D]\)$', item["text"])]
                    right_items = [item for item in r if item["x"] >= 550 and not re.match(r'^\([A-D]\)$', item["text"])]
                    
                    left_txt = clean_ocr(" ".join(item["text"] for item in left_items))
                    right_txt = clean_ocr(" ".join(item["text"] for item in right_items))
                    
                    if left_txt and not opt_a:
                        opt_a = left_txt
                    elif left_txt and not opt_c:
                        opt_c = left_txt
                        
                    if right_txt and not opt_b:
                        opt_b = right_txt
                    elif right_txt and not opt_d:
                        opt_d = right_txt
        else:
            cand_stmt = []
            for r in rows:
                r_txt = clean_ocr(" ".join(item["text"] for item in r))
                if is_latin_text(r_txt):
                    cand_stmt.append(r_txt)
            stmt = " ".join(cand_stmt[:2])
            
        stmt = re.sub(r'^[0-9]{1,3}\s*[\.\:\s]\s*', '', stmt)
        
        extracted_qs.append({
            "num": qn,
            "page": pno,
            "statement": stmt,
            "options": {
                "A": opt_a, "B": opt_b, "C": opt_c, "D": opt_d
            }
        })

print(f"Total extracted: {len(extracted_qs)}")
valid_opts = sum(1 for q in extracted_qs if all(q["options"][k] for k in "ABCD"))
print(f"Questions with all 4 options extracted: {valid_opts}/150")
