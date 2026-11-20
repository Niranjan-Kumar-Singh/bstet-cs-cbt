import json, re

with open(r'incoming\stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

def clean_ocr_text(t):
    t = t.replace('？', '?')
    t = re.sub(r'\s+', ' ', t).strip()
    return t

# Let's inspect how English questions and options appear on each page
# On each page:
# Lines with x in [180, 400] and y in range:
# Questions usually start with English letters, contain common English words, or end with '?'
# Options are labeled (A), (B), (C), (D) or have text next to (A), (B), (C), (D)

def parse_page(page_obj):
    lines = page_obj["lines"]
    pdf_page = page_obj["pdfPage"]

    # Filter out header and footer
    body_lines = []
    for l in lines:
        txt = l["text"]
        y = l["y"]
        # Header filter
        if y < 150: continue
        # Footer filter
        if y > 1610: continue
        if any(h in txt for h in ['ST-28', 'Set-A', 'General Knowledge', '(Q.Nos.', 'COMPUTER SCIENCE', 'Google Play', 'GET IT ON']):
            continue
        body_lines.append(l)

    return body_lines

sample_lines = parse_page(pages[0])
print(f"Sample page 5 body lines: {len(sample_lines)}")
for l in sample_lines:
    print(f"[{l['x']:.0f}, {l['y']:.0f}] {l['text']}")
