import pymupdf

doc = pymupdf.open('incoming/source_pdfs/Bihar-STET-Computer-Science-2019-Official-Paper-2-English_compressed.pdf')
print("Page count:", len(doc))
# Inspect drawing commands or annotations
for pno in [4, 5, 6, 21, 22]:
    page = doc[pno]
    annots = list(page.annots())
    drawings = page.get_drawings()
    print(f"Page {pno+1}: annots={len(annots)}, drawings={len(drawings)}")
