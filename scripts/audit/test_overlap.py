import re, pymupdf

def test_overlap(en_txt_path, hi_pdf_path):
    with open(en_txt_path, 'r', encoding='utf-8') as f:
        en_txt = f.read()
    en_qids = set(re.findall(r'Question ID\s*:\s*(\d+)', en_txt))

    doc = pymupdf.open(hi_pdf_path)
    hi_txt = ''.join([p.get_text() for p in doc])
    hi_qids = set(re.findall(r'Question ID\s*:\s*(\d+)', hi_txt))

    intersection = en_qids.intersection(hi_qids)
    print(f'{en_txt_path} vs {hi_pdf_path[:40]}:')
    print(f'  EN: {len(en_qids)} | HI: {len(hi_qids)} | MATCHING: {len(intersection)}')

test_overlap('reports/pdf_text/official_shift4.txt', 'incoming/source_pdfs/Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-07-Nov-2025-Shift-1-Hindi.pdf')
test_overlap('reports/pdf_text/official_shift3.txt', 'incoming/source_pdfs/Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-04-Nov-2025-Shift-2-Hindi.pdf')
