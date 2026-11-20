import pymupdf, numpy as np, json, time
from rapidocr_onnxruntime import RapidOCR

ocr = RapidOCR()
doc = pymupdf.open(r'incoming\source_pdfs\Bihar-STET-Computer-Science-2019-Official-Paper-2-English_compressed.pdf')

exam_pages = list(range(4, 47)) + [49] # 0-indexed: 4..46 is pp 5..47, 49 is p 50
print(f"Total exam pages to OCR: {len(exam_pages)}")

all_ocr_data = []

t0 = time.time()
for idx, page_num in enumerate(exam_pages):
    p_t0 = time.time()
    page = doc[page_num]
    pix = page.get_pixmap(dpi=150)
    img = np.frombuffer(pix.samples, dtype=np.uint8).reshape((pix.height, pix.width, pix.n))
    res, _ = ocr(img)
    lines = []
    if res:
        for box, txt, score in res:
            lines.append({
                "text": txt.strip(),
                "x": float(box[0][0]),
                "y": float(box[0][1]),
                "w": float(box[1][0] - box[0][0]),
                "h": float(box[2][1] - box[1][1]),
                "score": float(score)
            })
    lines.sort(key=lambda item: (item["y"], item["x"]))
    all_ocr_data.append({
        "pdfPage": page_num + 1,
        "lineCount": len(lines),
        "lines": lines
    })
    elapsed = time.time() - p_t0
    print(f"[{idx+1}/{len(exam_pages)}] Page {page_num + 1}: {len(lines)} lines ({elapsed:.2f}s)")

with open(r'incoming\stet_2019_ocr_pages.json', 'w', encoding='utf-8') as f:
    json.dump(all_ocr_data, f, ensure_ascii=False, indent=2)

total_time = time.time() - t0
print(f"Successfully finished OCR of all {len(exam_pages)} pages in {total_time:.2f}s! Saved incoming/stet_2019_ocr_pages.json")
