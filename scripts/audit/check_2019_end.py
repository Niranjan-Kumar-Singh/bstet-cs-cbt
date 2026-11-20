import fitz # PyMuPDF
import sys

doc = fitz.open('incoming/source_pdfs/Bihar-STET-Computer-Science-2019-Official-Paper-2-English_compressed.pdf')
print("Total pages in 2019 PDF:", len(doc))
for i in range(len(doc)-5, len(doc)):
    print(f"\n--- Page {i+1} ---")
    print(doc[i].get_text()[:400])
