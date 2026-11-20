import pymupdf

doc = pymupdf.open('incoming/source_pdfs/Bihar-STET-Computer-Science-Re-Exam-Official-Paper-Held-In_-2020_compressed.pdf')
print("Total pages in 2020 Re-Exam PDF:", len(doc))
for i in [0, 1, 2, 3, 4, 10, 20, 30, len(doc)-1]:
    txt = doc[i].get_text().strip()
    print(f"Page {i+1}: length={len(txt)}, sample={txt[:100]!r}")
