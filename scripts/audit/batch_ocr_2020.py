import os, json, time
import pymupdf
from rapidocr_onnxruntime import RapidOCR

pdf_path = r'incoming/source_pdfs/Bihar-STET-Computer-Science-Re-Exam-Official-Paper-Held-In_-2020_compressed.pdf'
out_path = r'incoming/stet_2020_ocr_pages.json'

print("Opening PDF:", pdf_path)
doc = pymupdf.open(pdf_path)
total_pages = len(doc)
print(f"Total pages: {total_pages}")

ocr = RapidOCR()
results = []
t0 = time.time()

for page_idx in range(total_pages):
    pno = page_idx + 1
    # Skip cover (page 1) and coaching ads if any
    page = doc[page_idx]
    pix = page.get_pixmap(dpi=150)
    img_bytes = pix.tobytes("png")
    
    ocr_result, _ = ocr(img_bytes)
    lines = []
    if ocr_result:
        for item in ocr_result:
            box, text, score = item
            # box is 4 points: [[x0,y0], [x1,y0], [x1,y1], [x0,y1]]
            x0 = min(pt[0] for pt in box)
            y0 = min(pt[1] for pt in box)
            x1 = max(pt[0] for pt in box)
            y1 = max(pt[1] for pt in box)
            lines.append({
                "text": text.strip(),
                "score": float(score) if isinstance(score, (int, float)) else 0.95,
                "x": float(x0),
                "y": float(y0),
                "w": float(x1 - x0),
                "h": float(y1 - y0)
            })
            
    print(f"Page {pno:2d}/{total_pages}: {len(lines)} lines detected ({time.time()-t0:.1f}s)")
    results.append({
        "pdfPage": pno,
        "width": float(pix.width),
        "height": float(pix.height),
        "lines": lines
    })

with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(f"\n[DONE] Saved OCR for all {total_pages} pages to {out_path} in {time.time()-t0:.1f}s")
