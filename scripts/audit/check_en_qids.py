import re

# Check shift 4
with open('reports/pdf_text/official_shift4.txt', 'r', encoding='utf-8') as f:
    en_txt = f.read()

en_qids = re.findall(r'Question ID\s*:\s*(\d+)', en_txt)
print('English shift4 Question IDs:', len(en_qids), 'unique:', len(set(en_qids)))

with open('incoming/source_pdfs/Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-07-Nov-2025-Shift-1-Hindi.pdf', 'rb') as f:
    pass # we already know it has 150

# Check shift 3
with open('reports/pdf_text/official_shift3.txt', 'r', encoding='utf-8') as f:
    en_txt3 = f.read()

en_qids3 = re.findall(r'Question ID\s*:\s*(\d+)', en_txt3)
print('English shift3 Question IDs:', len(en_qids3), 'unique:', len(set(en_qids3)))
