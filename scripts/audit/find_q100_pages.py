import pymupdf, re

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')

for q in [98, 99, 100, 101, 102, 103, 104]:
    found = []
    for p in range(len(doc)):
        txt = doc[p].get_text()
        if re.search(rf'(?:^|\n){q}\.\s+', txt):
            found.append(p+1)
    print(f'Q{q}: found on pages {found}')
