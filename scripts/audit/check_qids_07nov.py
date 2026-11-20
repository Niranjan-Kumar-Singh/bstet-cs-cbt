import pymupdf, re

# Extract Hindi questions from 07-Nov PDF
doc_hi = pymupdf.open(r'incoming\source_pdfs\Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-07-Nov-2025-Shift-1-Hindi.pdf')
full_text = ''
for p in doc_hi:
    full_text += p.get_text() + '\n'

q_blocks = re.findall(r'Question ID\s*:\s*(\d+)', full_text)
print('Total Question IDs in Hindi 07-Nov PDF:', len(q_blocks))
print('Unique Question IDs:', len(set(q_blocks)))
print('Sample Q IDs:', q_blocks[:10])
