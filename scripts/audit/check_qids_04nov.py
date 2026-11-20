import pymupdf, re

doc_hi = pymupdf.open(r'incoming\source_pdfs\Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-04-Nov-2025-Shift-2-Hindi.pdf')
full_text = ''
for p in doc_hi:
    full_text += p.get_text() + '\n'

q_blocks = re.findall(r'Question ID\s*:\s*(\d+)', full_text)
print('Total Question IDs in Hindi 04-Nov PDF:', len(q_blocks))
print('Unique Question IDs:', len(set(q_blocks)))
print('Sample Q IDs:', q_blocks[:10])
