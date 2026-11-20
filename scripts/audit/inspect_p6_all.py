import json

with open(r'incoming\stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

print("=== All Page 6 lines ===")
for l in pages[1]["lines"]:
    print(f"[{l['x']:.0f}, {l['y']:.0f}] {l['text']}")
