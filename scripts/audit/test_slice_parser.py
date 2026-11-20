import json, re

with open(r'incoming\stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

def clean_ocr(text):
    text = text.replace('？', '?').replace('言', '').replace('市', '').replace('X', '')
    return re.sub(r'\s+', ' ', text).strip()

def parse_page_by_slices(page_obj):
    lines = page_obj["lines"]
    clean_lines = [
        l for l in lines 
        if 150 <= l["y"] <= 1610 and 
        not any(w in l["text"] for w in ['ST-28', 'Set-A', 'General Knowledge', '(Q.Nos.', 'COMPUTER SCIENCE', 'Google Play', 'GET IT ON', 'TestPrime'])
    ]

    # Find all question starts
    q_bounds = []
    for idx, l in enumerate(clean_lines):
        m = re.match(r'^(\d{1,3})\s*\.\s*(.*)$', l["text"])
        if m and int(m.group(1)) <= 150:
            q_bounds.append((int(m.group(1)), l["y"], idx, m.group(2)))

    # Slice lines for each question
    questions = []
    for i in range(len(q_bounds)):
        qnum, y_start, idx_start, first_txt = q_bounds[i]
        y_end = q_bounds[i+1][1] if i + 1 < len(q_bounds) else 1650
        
        q_lines = [l for l in clean_lines if y_start <= l["y"] < y_end]
        
        # In q_lines:
        # Separate question statement from options
        # First find where options start
        first_opt_y = 99999
        for l in q_lines:
            if re.search(r'\([A-D]\)', l["text"]):
                first_opt_y = min(first_opt_y, l["y"])

        stmt_lines = [l for l in q_lines if l["y"] < first_opt_y]
        opt_lines = [l for l in q_lines if l["y"] >= first_opt_y]

        # Extract English statement lines (lines with Latin chars)
        en_stmt = []
        for l in stmt_lines:
            txt = l["text"]
            # Ignore pure Devanagari or number-only lines
            latin_count = len(re.findall(r'[a-zA-Z]', txt))
            if latin_count >= 3:
                en_stmt.append(txt)

        statement = clean_ocr(" ".join(en_stmt))
        
        # Parse options (A), (B), (C), (D) from opt_lines
        # Split by columns:
        # Left column: x < 550 (usually A and C)
        # Right column: x >= 550 (usually B and D)
        opts = {"A": "", "B": "", "C": "", "D": ""}
        
        # Sort opt_lines by y
        opt_lines.sort(key=lambda l: l["y"])
        
        # Simple extraction:
        cur_opt = None
        for l in opt_lines:
            txt = l["text"]
            m_lbl = re.match(r'^\s*\(([A-D])\)\s*(.*)$', txt)
            if m_lbl:
                cur_opt = m_lbl.group(1)
                opts[cur_opt] = clean_ocr(m_lbl.group(2))
            elif cur_opt and len(re.findall(r'[a-zA-Z0-9]', txt)) > 0:
                opts[cur_opt] = clean_ocr(opts[cur_opt] + " " + txt)

        questions.append({
            "num": qnum,
            "statement": statement,
            "options": opts,
            "raw_line_count": len(q_lines)
        })

    return questions

qs_p22 = parse_page_by_slices(pages[17])
for q in qs_p22:
    print(f"\nQ.{q['num']}: {q['statement']}")
    for k, v in q['options'].items():
        print(f"  ({k}) {v}")
