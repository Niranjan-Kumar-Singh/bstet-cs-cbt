import pymupdf, re, json

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')

p4_text = doc[3].get_text()

lines = [l.strip() for l in p4_text.split('\n')]
clean = []
for l in lines:
    if not l: continue
    if re.match(r'^\d+$', l) and len(l) <= 3: continue
    if '13/HV/M-2024' in l: continue
    if '[P.T.O.' in l: continue
    if 'PART -' in l: continue
    if '(English Language)' in l: continue
    clean.append(l)

clean_p4 = "\n" + "\n".join(clean) + "\n"

# Notice E-1 to E-8 has passage: "Directions (Q. Nos. E-1 to E-5) Read the passage..."
# Let's split on E-\d+\.
splits = re.split(r'\n(?=E-\d+\.\s*)', clean_p4)
print(f"English Language splits: {len(splits)}")

parsed_en = []
for block in splits[1:]:
    m = re.match(r'^\n?E-(\d+)\.\s*([\s\S]*?)\n\(A\)\s*([\s\S]*?)\n\(B\)\s*([\s\S]*?)\n\(C\)\s*([\s\S]*?)\n\(D\)\s*([\s\S]*?)\n\(E\)\s*([\s\S]*?)$', block)
    if m:
        qnum = int(m.group(1))
        stmt = re.sub(r'\s+', ' ', m.group(2)).strip()
        # Clean directions if present
        stmt = re.sub(r'Directions\s*\(Q\.\s*Nos\.\s*E-\d+\s*to\s*E-\d+\)\s*:?\s*', '', stmt).strip()
        opt_a = re.sub(r'\s+', ' ', m.group(3)).strip()
        opt_b = re.sub(r'\s+', ' ', m.group(4)).strip()
        opt_c = re.sub(r'\s+', ' ', m.group(5)).strip()
        opt_d = re.sub(r'\s+', ' ', m.group(6)).strip()
        opt_e = re.sub(r'\s+', ' ', m.group(7)).strip()
        parsed_en.append({
            "qnum": qnum,
            "question": stmt,
            "options": {
                "A": opt_a, "B": opt_b, "C": opt_c, "D": opt_d, "E": opt_e
            }
        })
    else:
        print("Failed to parse block:")
        print(block[:150])

print(f"Successfully parsed English Language questions: {len(parsed_en)} / 8")
