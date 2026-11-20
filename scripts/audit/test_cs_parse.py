import pymupdf, re, json

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')

def extract_en_questions(start_page, end_page, expected_range):
    # even pages in booklet: index start_page-1 to end_page-1 with step 2
    full_text = ""
    for p in range(start_page-1, end_page, 2):
        lines = doc[p].get_text().split('\n')
        # Filter out header lines like "13/HV/M-2024-26/HS-526-E", page numbers, "[P.T.O."
        clean_lines = []
        for l in lines:
            s = l.strip()
            if not s: continue
            if re.match(r'^\d+$', s) and len(s) <= 3: continue # page number
            if '13/HV/M-2024' in s: continue
            if '[P.T.O.' in s: continue
            clean_lines.append(s)
        full_text += "\n" + "\n".join(clean_lines) + "\n"
        
    return full_text

# Test on CS section: Page 24 to Page 50
cs_text = extract_en_questions(24, 50, (71, 150))
print("CS text length:", len(cs_text))

# Let's find question splits
# Questions start with: \n(\d+)\.\s*(.*)
splits = re.split(r'\n(?=\d+\.\s+)', cs_text)
print("Splits count:", len(splits))

# Test parsing first 3 splits
for s in splits[1:4]:
    print("--------------------------------------------------")
    print(s[:300])
