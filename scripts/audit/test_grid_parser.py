import json, re

with open(r'incoming\stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

def clean_txt(t):
    t = t.replace('？', '?').replace('言', '').replace('市', '').replace('X', '')
    return re.sub(r'\s+', ' ', t).strip()

def parse_page_grid(page_obj):
    lines = page_obj["lines"]
    clean_lines = [
        l for l in lines 
        if 150 <= l["y"] <= 1610 and 
        not any(w in l["text"] for w in ['ST-28', 'Set-A', 'General Knowledge', '(Q.Nos.', 'COMPUTER SCIENCE', 'Google Play', 'GET IT ON', 'TestPrime'])
    ]

    # Find question numbers or major question boundaries
    # A boundary is a line starting with digit followed by dot: e.g. "51.", "52.", "53."
    # Or English question statement
    print(f"\n--- Page {page_obj['pdfPage']} ---")
    
    # Let's inspect all lines with coordinates
    for l in clean_lines:
        txt = l['text']
        m = re.match(r'^(\d{1,3})\s*\.\s*(.*)$', txt)
        if m:
            print(f"  [Q {m.group(1)}] y={l['y']:.0f}: {m.group(2)}")
        elif re.search(r'\([A-D]\)', txt):
            col = "COL1 (A/C)" if l['x'] < 600 else "COL2 (B/D)"
            print(f"    {col} [x={l['x']:.0f}, y={l['y']:.0f}] {txt}")

parse_page_grid(pages[17]) # Page 22
parse_page_grid(pages[18]) # Page 23
