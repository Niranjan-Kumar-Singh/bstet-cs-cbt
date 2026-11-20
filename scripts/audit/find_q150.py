import pymupdf

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')

for p in range(len(doc)-1, -1, -1):
    txt = doc[p].get_text()
    if '150.' in txt:
        print(f'Found 150. on page {p+1}:')
        print(txt[txt.find('150.'):txt.find('150.')+400])
        break
