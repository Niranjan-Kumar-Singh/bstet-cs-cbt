import pymupdf, re, json

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')

def extract_en_questions(start_page, end_page):
    full_text = ""
    for p in range(start_page-1, end_page, 2):
        lines = doc[p].get_text().split('\n')
        clean_lines = []
        for l in lines:
            s = l.strip()
            if not s: continue
            if re.match(r'^\d+$', s) and len(s) <= 3: continue
            if '13/HV/M-2024' in s: continue
            if '[P.T.O.' in s: continue
            clean_lines.append(s)
        full_text += "\n" + "\n".join(clean_lines) + "\n"
    return full_text

gs_text = extract_en_questions(16, 22)
print("GS text length:", len(gs_text))

splits = re.split(r'\n(?=\d+\.\s+)', gs_text)
print("GS Splits count:", len(splits))

for s in splits[1:4]:
    print("--------------------------------------------------")
    print(s[:250])
