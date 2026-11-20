import pymupdf, re

doc = pymupdf.open(r'incoming\source_pdfs\Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-07-Nov-2025-Shift-1-Hindi.pdf')
full_text = ''
for p in doc:
    full_text += p.get_text() + '\n'

pos = full_text.find('4335766356')
if pos != -1:
    snippet = full_text[max(0, pos-400):min(len(full_text), pos+300)]
    print('Hindi snippet for Question ID 4335766356:')
    print(snippet)
else:
    print('Not found')
