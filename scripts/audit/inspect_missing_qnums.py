import json

with open(r'incoming\stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

# Page 5 is pages[0]
print("=== Page 5 lines around Q1 ===")
for l in pages[0]["lines"][:15]:
    print(f"[{l['x']:.0f}, {l['y']:.0f}] {l['text']}")

# Page 6 is pages[1]
print("\n=== Page 6 lines ===")
for l in pages[1]["lines"][:15]:
    print(f"[{l['x']:.0f}, {l['y']:.0f}] {l['text']}")
