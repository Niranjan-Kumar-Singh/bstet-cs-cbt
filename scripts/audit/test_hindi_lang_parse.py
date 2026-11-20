import pymupdf, re

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')

hindi_lang_text = ""
for idx in [4, 5, 6, 10]:
    hindi_lang_text += "\n" + doc[idx].get_text() + "\n"

# Split on H-\d+\.
splits = re.split(r'\n(?=H-\d+\.\s*)', hindi_lang_text)
print(f"Hindi Language splits: {len(splits)}")

parsed_h = []
for block in splits[1:]:
    m = re.match(r'^\n?H-(\d+)\.\s*([\s\S]*?)\n\(A\)\s*([\s\S]*?)\n\(B\)\s*([\s\S]*?)\n\(C\)\s*([\s\S]*?)\n\(D\)\s*([\s\S]*?)\n\(E\)\s*([\s\S]*?)$', block)
    if m:
        qnum = int(m.group(1))
        parsed_h.append(qnum)

print(f"Parsed Hindi Language questions: {len(parsed_h)} / 22")
print("Qnums:", parsed_h)
