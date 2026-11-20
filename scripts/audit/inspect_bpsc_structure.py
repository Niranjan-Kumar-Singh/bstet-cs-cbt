import pymupdf, re

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')

def parse_english_page(text):
    # Match patterns like:
    # 71.
    # Digital circuit can be made by the repeated
    # use of the _________.
    # (A)
    # NAND gate
    # (B)
    # NOR gate
    # (C)
    # AND gate
    # (D)
    # More than one of the above
    # (E)
    # None of the above
    
    # Split text into lines
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    return lines

print("Inspecting Page 4 (English Language Q1-5):")
print(doc[3].get_text()[:600])

print("\nInspecting Page 12 (English GS Q31-35):")
print(doc[11].get_text()[:600])
