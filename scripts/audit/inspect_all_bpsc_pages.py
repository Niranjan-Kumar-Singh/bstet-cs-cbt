import pymupdf, re

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')

for p in range(len(doc)):
    text = doc[p].get_text()
    q_nums = re.findall(r'(?:^|\n)(\d+)\.\s*\n', text)
    # Check if page has English question markers like (A), (B), (C)
    has_abc = bool(re.search(r'\(A\)', text))
    first_line = text.strip().split('\n')[0] if text.strip() else ""
    second_line = text.strip().split('\n')[1] if len(text.strip().split('\n')) > 1 else ""
    print(f'Page {p+1}: Qs: {q_nums} | Header: {first_line} / {second_line}')
