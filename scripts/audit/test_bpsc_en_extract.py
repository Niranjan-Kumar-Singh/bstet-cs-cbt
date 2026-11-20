import pymupdf, re, json

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')

def extract_bpsc_english(doc):
    # Collect all text from English pages
    # Part I: English Q1 to Q8 on page 4
    # Part II: English Q31 to Q70 on even pages from 12 to 22
    # Part III: English Q71 to Q150 on even pages from 24 to 52
    
    en_pages = [3] + list(range(11, 23, 2)) + list(range(23, len(doc), 2))
    full_en = ""
    for p in en_pages:
        full_en += doc[p].get_text() + "\n"
        
    # Regex to split questions by number: e.g. 71.\n or 31.\n
    # Let's find questions with pattern: \n(\d+)\.\s*\n([\s\S]*?)\(A\)\s*\n([\s\S]*?)\(B\)\s*\n([\s\S]*?)\(C\)\s*\n([\s\S]*?)\(D\)\s*\n([\s\S]*?)\(E\)\s*\n([\s\S]*?)(?=\n\d+\.|\Z)
    return full_en

text = extract_bpsc_english(doc)
print("Collected English text length:", len(text))
q_matches = re.findall(r'(?:^|\n)(\d+)\.\s*\n', text)
print("Found question numbers:", len(q_matches))
print("Sample numbers:", q_matches[:15], "...", q_matches[-10:])
