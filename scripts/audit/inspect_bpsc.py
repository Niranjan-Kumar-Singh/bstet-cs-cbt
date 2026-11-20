import pymupdf

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')
print('Total pages:', len(doc))
for i in range(min(5, len(doc))):
    print(f'=== PAGE {i+1} ===')
    print(doc[i].get_text()[:400])
