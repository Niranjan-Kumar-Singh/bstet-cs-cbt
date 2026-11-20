import pymupdf, re, json

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')

def extract_bpsc_questions():
    # 1. Part I English (Q1 to Q8): Page 4 (index 3)
    p4_text = doc[3].get_text()
    
    # 2. Part II GS (Q31 to Q70): Even pages 16, 18, 20, 22 (indices 15, 17, 19, 21)
    gs_text = ""
    for idx in [15, 17, 19, 21]:
        gs_text += "\n" + doc[idx].get_text() + "\n"
        
    # 3. Part III CS (Q71 to Q150): Even pages 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50
    # (indices 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49)
    cs_text = ""
    for idx in range(23, 51, 2):
        cs_text += "\n" + doc[idx].get_text() + "\n"
        
    return p4_text, gs_text, cs_text

p4, gs, cs = extract_bpsc_questions()
print(f"P4 len: {len(p4)}, GS len: {len(gs)}, CS len: {len(cs)}")

def parse_section(text, prefix=""):
    # Clean header and footer garbage
    lines = [l.strip() for l in text.split('\n')]
    clean = []
    for l in lines:
        if not l: continue
        if re.match(r'^\d+$', l) and len(l) <= 3: continue
        if '13/HV/M-2024' in l: continue
        if '[P.T.O.' in l: continue
        if 'PART -' in l: continue
        if '(English Language)' in l or '(GENERAL STUDIES)' in l or '(Computer Science)' in l: continue
        clean.append(l)
    joined = "\n" + "\n".join(clean) + "\n"
    return joined

clean_cs = parse_section(cs)
cs_splits = re.split(r'\n(?=\d+\.\s+)', clean_cs)
print(f"CS raw splits: {len(cs_splits)}")

parsed_cs = []
for block in cs_splits:
    m = re.match(r'^\n?(\d+)\.\s*([\s\S]*?)\n\(A\)\s*([\s\S]*?)\n\(B\)\s*([\s\S]*?)\n\(C\)\s*([\s\S]*?)\n\(D\)\s*([\s\S]*?)\n\(E\)\s*([\s\S]*?)$', block)
    if m:
        qnum = int(m.group(1))
        stmt = re.sub(r'\s+', ' ', m.group(2)).strip()
        opt_a = re.sub(r'\s+', ' ', m.group(3)).strip()
        opt_b = re.sub(r'\s+', ' ', m.group(4)).strip()
        opt_c = re.sub(r'\s+', ' ', m.group(5)).strip()
        opt_d = re.sub(r'\s+', ' ', m.group(6)).strip()
        opt_e = re.sub(r'\s+', ' ', m.group(7)).strip()
        parsed_cs.append({
            "qnum": qnum,
            "question": stmt,
            "options": {
                "A": opt_a, "B": opt_b, "C": opt_c, "D": opt_d, "E": opt_e
            }
        })

print(f"Successfully regex-parsed CS questions: {len(parsed_cs)} / 80")
if len(parsed_cs) < 80:
    parsed_nums = {q['qnum'] for q in parsed_cs}
    missing = [i for i in range(71, 151) if i not in parsed_nums]
    print(f"Missing CS qnums: {missing}")
