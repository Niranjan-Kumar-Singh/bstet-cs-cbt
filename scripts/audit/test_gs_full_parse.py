import pymupdf, re, json

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')

gs_text = ""
for idx in [15, 17, 19, 21]:
    gs_text += "\n" + doc[idx].get_text() + "\n"

lines = [l.strip() for l in gs_text.split('\n')]
clean = []
for l in lines:
    if not l: continue
    if re.match(r'^\d+$', l) and len(l) <= 3: continue
    if '13/HV/M-2024' in l: continue
    if '[P.T.O.' in l: continue
    if 'PART -' in l: continue
    if '(GENERAL STUDIES)' in l: continue
    clean.append(l)

clean_gs = "\n" + "\n".join(clean) + "\n"
gs_splits = re.split(r'\n(?=\d+\.\s+)', clean_gs)
print(f"GS raw splits: {len(gs_splits)}")

parsed_gs = []
for block in gs_splits:
    m = re.match(r'^\n?(\d+)\.\s*([\s\S]*?)\n\(A\)\s*([\s\S]*?)\n\(B\)\s*([\s\S]*?)\n\(C\)\s*([\s\S]*?)\n\(D\)\s*([\s\S]*?)\n\(E\)\s*([\s\S]*?)$', block)
    if m:
        qnum = int(m.group(1))
        stmt = re.sub(r'\s+', ' ', m.group(2)).strip()
        opt_a = re.sub(r'\s+', ' ', m.group(3)).strip()
        opt_b = re.sub(r'\s+', ' ', m.group(4)).strip()
        opt_c = re.sub(r'\s+', ' ', m.group(5)).strip()
        opt_d = re.sub(r'\s+', ' ', m.group(6)).strip()
        opt_e = re.sub(r'\s+', ' ', m.group(7)).strip()
        parsed_gs.append({
            "qnum": qnum,
            "question": stmt,
            "options": {
                "A": opt_a, "B": opt_b, "C": opt_c, "D": opt_d, "E": opt_e
            }
        })

print(f"Successfully regex-parsed GS questions: {len(parsed_gs)} / 40")
if len(parsed_gs) < 40:
    parsed_nums = {q['qnum'] for q in parsed_gs}
    missing = [i for i in range(31, 71) if i not in parsed_nums]
    print(f"Missing GS qnums: {missing}")
