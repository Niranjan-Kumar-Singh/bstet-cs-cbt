from rapidocr_onnxruntime import RapidOCR
import pymupdf

engine = RapidOCR()
doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')
page = doc[24] # Page 25 (index 24)
pix = page.get_pixmap(dpi=200)
result, elapse = engine(pix.tobytes('png'))

print("RapidOCR Hindi output on Page 25:")
for item in result[:18]:
    print(item[1])
