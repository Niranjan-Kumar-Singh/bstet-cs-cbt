import pymupdf, re

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')

even_text = ""
for p in range(len(doc)):
    if p % 2 == 1: # even page number (0-indexed odd index: 1, 3, 5...)
        even_text += doc[p].get_text() + "\n"

# In BPSC, even pages are English! Let's check page indices:
# Page 4 is index 3. Page 6 is index 5. Page 24 is index 23.
# So index 3, 5, 7, ... are English!
qnums = re.findall(r'(?:^|\n)(\d+)\.\s+', even_text)
# filter to numbers 1 to 150
valid_qnums = []
for q in qnums:
    num = int(q)
    if 1 <= num <= 150 and num not in valid_qnums:
        valid_qnums.append(num)

print(f'Total unique questions found in English pages: {len(valid_qnums)}')
print(f'Min: {min(valid_qnums)}, Max: {max(valid_qnums)}')
missing = [i for i in range(1, 151) if i not in valid_qnums]
print(f'Missing numbers: {missing}')
