import pymupdf

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')
print('=== PAGE 34 text ===')
print(doc[33].get_text()[:600])
