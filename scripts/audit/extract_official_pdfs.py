# -*- coding: utf-8 -*-
"""
Extract text from official examination PDFs for faithfulness audit.
"""
import os
import pymupdf

pdf_mappings = {
    "official_shift1": "Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-03-Nov-2025-Shift-1-Eng.pdf",
    "official_shift2": "Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-03-Nov-2025-Shift-2-Eng.pdf",
    "official_shift3": "Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-04-Nov-2025-Shift-2-Eng.pdf",
    "official_shift4": "Bihar-STET-Class-11-12-Computer-Science-Official-Paper-II-Held-On_-07-Nov-2025-Shift-1-Eng.pdf",
    "official_2023": "Bihar-STET-Previous-Year-Question-Paper-2-Computer-Science.pdf"
}

out_dir = os.path.join("reports", "pdf_text")
os.makedirs(out_dir, exist_ok=True)

for paper_id, pdf_name in pdf_mappings.items():
    pdf_path = pdf_name
    if not os.path.exists(pdf_path):
        print(f"Warning: {pdf_name} not found!")
        continue
    
    print(f"Extracting {pdf_name} ({paper_id})...")
    doc = pymupdf.open(pdf_path)
    full_text = []
    for page_idx, page in enumerate(doc):
        text = page.get_text()
        full_text.append(f"\n--- PAGE {page_idx + 1} ---\n" + text)
    
    txt_out = os.path.join(out_dir, f"{paper_id}.txt")
    with open(txt_out, "w", encoding="utf-8") as f:
        f.write("".join(full_text))
    print(f"Saved {txt_out} ({len(doc)} pages)")

print("All official PDFs extracted successfully.")
