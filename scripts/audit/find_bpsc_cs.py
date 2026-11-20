import pymupdf

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')
for i, page in enumerate(doc):
    text = page.get_text()
    if 'Part–III' in text or 'Part-III' in text or 'Computer Science' in text:
        print(f'Page {i+1}: {text[:150]}...')
