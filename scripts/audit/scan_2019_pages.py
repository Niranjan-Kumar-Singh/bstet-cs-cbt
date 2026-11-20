import pymupdf, numpy as np, re
from rapidocr_onnxruntime import RapidOCR

ocr = RapidOCR()
doc = pymupdf.open(r'incoming\source_pdfs\Bihar-STET-Computer-Science-2019-Official-Paper-2-English_compressed.pdf')

print(f"Total pages: {len(doc)}")

page_info = []

for i in range(len(doc)):
    page = doc[i]
    pix = page.get_pixmap(dpi=150) # 150 dpi is fast and accurate enough for structure check
    img = np.frombuffer(pix.samples, dtype=np.uint8).reshape((pix.height, pix.width, pix.n))
    res, _ = ocr(img)
    if not res:
        print(f"Page {i+1}: No text")
        continue

    text_lines = [r[1] for r in res]
    joined = " ".join(text_lines)
    
    # Check if page is an ad
    is_ad = any(k in joined.lower() for k in ['testprime', 'success gallery', 'meet the achievers', 'they did it'])
    
    # Find question numbers: digits followed by dot or space at start of line
    qnums = []
    for line in text_lines:
        m = re.findall(r'(?:^|\s)(\d{1,3})\s*(?:\.|\))\s+', line)
        for num in m:
            n = int(num)
            if 1 <= n <= 150:
                qnums.append(n)
                
    qnums = sorted(list(set(qnums)))
    print(f"Page {i+1}: is_ad={is_ad}, lines={len(text_lines)}, Qs={qnums[:8]}")
    page_info.append({
        "page": i + 1,
        "is_ad": is_ad,
        "lines": len(text_lines),
        "qnums": qnums
    })

print("Scan complete.")
