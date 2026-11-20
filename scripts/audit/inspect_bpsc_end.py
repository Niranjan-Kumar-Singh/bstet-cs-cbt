import pymupdf

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')
print('=== Page 50 ===')
print(doc[49].get_text()[:400])
print('=== Page 51 ===')
print(doc[50].get_text()[:400])
print('=== Page 52 ===')
print(doc[51].get_text()[:400])
