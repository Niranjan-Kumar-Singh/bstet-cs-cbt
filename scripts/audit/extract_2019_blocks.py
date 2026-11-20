import json, re

with open(r'incoming\stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

def clean_ocr(text):
    text = text.replace('？', '?').replace('言', '').replace('市', '').replace('X', '')
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def is_english(text):
    latin = len(re.findall(r'[a-zA-Z]', text))
    return latin >= 3 and (latin / max(1, len(text))) > 0.45

extracted_questions = []

for page_idx, p in enumerate(pages):
    pnum = p["pdfPage"]
    lines = p["lines"]
    
    # Filter header/footer
    clean_lines = [
        l for l in lines 
        if 150 <= l["y"] <= 1610 and 
        not any(w in l["text"] for w in ['ST-28', 'Set-A', 'General Knowledge', '(Q.Nos.', 'COMPUTER SCIENCE', 'Google Play', 'GET IT ON', 'TestPrime'])
    ]

    # Cluster horizontally aligned items (within 20px)
    rows = []
    for l in clean_lines:
        matched = False
        for r in rows:
            if abs(r[0]["y"] - l["y"]) <= 20:
                r.append(l)
                matched = True
                break
        if not matched:
            rows.append([l])

    for r in rows:
        r.sort(key=lambda x: x["x"])
    rows.sort(key=lambda r: r[0]["y"])

    row_texts = [clean_ocr(" ".join([item["text"] for item in r])) for r in rows]

    # Scan rows to find question statements and options
    # An English question statement has high English ratio and does not start with (A), (B), (C), (D)
    # An options row has (A), (B), (C), or (D)
    
    # Collect blocks
    i = 0
    while i < len(row_texts):
        r = row_texts[i]
        
        # Check if row has an English question statement
        # Notice: question numbers like "51. UNIVAC" or statement like "Among the following..."
        m_q = re.match(r'^(?:(\d{1,3})\s*\.\s*)?([A-Z][a-zA-Z0-9\s,\'\"\(\)\-\.\/]{10,}.*)$', r)
        if m_q and not re.match(r'^\([A-D]\)', r):
            q_num = m_q.group(1)
            stmt = m_q.group(2)
            
            # Check if next rows continue the statement before options (A)
            i += 1
            while i < len(row_texts) and not re.search(r'\([A-D]\)', row_texts[i]) and is_english(row_texts[i]):
                stmt += " " + row_texts[i]
                i += 1
                
            # Now we look for options (A), (B), (C), (D)
            opt_a, opt_b, opt_c, opt_d = "", "", "", ""
            
            # Consume option rows
            while i < len(row_texts):
                opt_row = row_texts[i]
                if re.search(r'\([A-D]\)', opt_row) or any(k in opt_row for k in ['First Generation', 'Second Generation', 'Third Generation', 'Fourth Generation', 'None of these', 'All of these', 'Rs.']):
                    # Parse options from opt_row
                    # Possible patterns:
                    # "(A) optA (B) optB"
                    # "(A) optA"
                    # "(C) optC (D) optD"
                    m_ab = re.search(r'\(A\)\s*(.*?)(?:\(B\)\s*(.*))?$', opt_row)
                    if m_ab:
                        opt_a = clean_ocr(m_ab.group(1) or "")
                        if m_ab.group(2):
                            opt_b = clean_ocr(m_ab.group(2))
                    m_cd = re.search(r'\(C\)\s*(.*?)(?:\(D\)\s*(.*))?$', opt_row)
                    if m_cd:
                        opt_c = clean_ocr(m_cd.group(1) or "")
                        if m_cd.group(2):
                            opt_d = clean_ocr(m_cd.group(2))
                            
                    m_b = re.search(r'\(B\)\s*(.*)$', opt_row)
                    if m_b and not opt_b:
                        opt_b = clean_ocr(m_b.group(1))
                    m_d = re.search(r'\(D\)\s*(.*)$', opt_row)
                    if m_d and not opt_d:
                        opt_d = clean_ocr(m_d.group(1))
                    i += 1
                else:
                    break
                    
            if len(stmt) > 8:
                extracted_questions.append({
                    "page": pnum,
                    "num": q_num,
                    "statement": clean_ocr(stmt),
                    "options": {
                        "A": opt_a, "B": opt_b, "C": opt_c, "D": opt_d
                    }
                })
        else:
            i += 1

print(f"Extracted questions found: {len(extracted_questions)}")
with open(r'incoming\stet_2019_extracted_draft.json', 'w', encoding='utf-8') as f:
    json.dump(extracted_questions, f, ensure_ascii=False, indent=2)
