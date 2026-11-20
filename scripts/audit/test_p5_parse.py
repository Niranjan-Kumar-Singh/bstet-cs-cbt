import pymupdf, numpy as np, re, json
from rapidocr_onnxruntime import RapidOCR

ocr = RapidOCR()
doc = pymupdf.open(r'incoming\source_pdfs\Bihar-STET-Computer-Science-2019-Official-Paper-2-English_compressed.pdf')

def parse_page_questions(page_idx):
    page = doc[page_idx]
    pix = page.get_pixmap(dpi=150)
    img = np.frombuffer(pix.samples, dtype=np.uint8).reshape((pix.height, pix.width, pix.n))
    res, _ = ocr(img)
    if not res: return []

    # Sort lines by y-coordinate then x-coordinate
    lines = []
    for box, txt, score in res:
        x0 = box[0][0]
        y0 = box[0][1]
        lines.append({
            "text": txt.strip(),
            "x": x0,
            "y": y0,
            "box": box
        })

    lines.sort(key=lambda item: (item["y"], item["x"]))
    return lines

lines_p5 = parse_page_questions(4)
print(f"Page 5 lines: {len(lines_p5)}")
for l in lines_p5[:25]:
    print(f"[{l['x']:.0f}, {l['y']:.0f}] {l['text']}")
