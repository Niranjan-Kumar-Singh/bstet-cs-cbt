import pymupdf

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')

for page_idx in range(23, 28): # Pages 24 to 28
    print(f'=== PAGE {page_idx+1} ===')
    txt = doc[page_idx].get_text()
    print(txt[:600])
