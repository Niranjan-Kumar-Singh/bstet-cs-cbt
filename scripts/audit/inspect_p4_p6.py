import pymupdf

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')
# Page 4 is index 3, Page 6 is index 5
print("=== PAGE 4 ===")
print(doc[3].get_text())
print("=== PAGE 6 ===")
print(doc[5].get_text())
