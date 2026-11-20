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

extracted = {}

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
        
        # Cluster into rows
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
        
        # Find English question rows
        # A question statement usually comes before the last 2-4 rows of options
        # Let's inspect the rows in reverse from bottom of slice
        # The bottom 2 rows usually form the 2x2 options grid (or bottom 4 rows for 1x4 stack)
        # Let's test bottom-up option detection:
        
        # Option labels detection:
        opts = {"A": "", "B": "", "C": "", "D": ""}
        stmt_rows = []
        opt_row_indices = set()
        
        # Pass 1: explicit label search
        for r_idx, r in enumerate(rows):
            r_txt = clean_ocr(" ".join(item["text"] for item in r))
            has_label = False
            for lbl in ["A", "B", "C", "D"]:
                m = re.search(r'\(' + lbl + r'\)\s*([^(\n\r]+)', r_txt)
                if m:
                    opts[lbl] = clean_ocr(m.group(1))
                    has_label = True
            if has_label:
                opt_row_indices.add(r_idx)
                
        # If not all 4 found, use the bottom rows (up to 2 rows if 2 columns, or 4 rows if 1 column)
        if not all(opts[k] for k in "ABCD"):
            # Check bottom rows that have English/alphanumeric items
            candidate_opt_rows = [r_idx for r_idx, r in enumerate(rows) if r_idx not in opt_row_indices and any(is_latin_text(clean_ocr(it["text"])) or clean_ocr(it["text"]).isdigit() for it in r)]
            # Take last 2 candidate rows
            for r_idx in candidate_opt_rows[-2:]:
                r = rows[r_idx]
                left = clean_ocr(" ".join(it["text"] for it in r if it["x"] < 550 and not re.match(r'^\([A-D]\)$', it["text"])))
                right = clean_ocr(" ".join(it["text"] for it in r if it["x"] >= 550 and not re.match(r'^\([A-D]\)$', it["text"])))
                
                if left and not opts["A"]: opts["A"] = left
                elif left and not opts["C"]: opts["C"] = left
                
                if right and not opts["B"]: opts["B"] = right
                elif right and not opts["D"]: opts["D"] = right
                
                opt_row_indices.add(r_idx)

        # All rows not in opt_row_indices that have Latin text form the English statement
        for r_idx, r in enumerate(rows):
            if r_idx not in opt_row_indices:
                r_txt = clean_ocr(" ".join(it["text"] for it in r))
                if is_latin_text(r_txt):
                    stmt_rows.append(r_txt)
                    
        stmt = clean_ocr(" ".join(stmt_rows))
        stmt = re.sub(r'^[0-9]{1,3}\s*[\.\:\s]\s*', '', stmt)
        
        extracted[qn] = {
            "num": qn,
            "page": pno,
            "statement": stmt,
            "options": opts
        }

print(f"Total extracted: {len(extracted)}")
complete_count = sum(1 for q in extracted.values() if len(q["statement"]) >= 5 and all(q["options"][k] for k in "ABCD"))
print(f"Completely parsed (statement >= 5 chars AND all 4 options): {complete_count}/150")
