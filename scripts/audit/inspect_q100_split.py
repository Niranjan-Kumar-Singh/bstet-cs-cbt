import re

with open('reports/pdf_text/official_shift4.txt', 'r', encoding='utf-8') as f:
    en_txt = f.read()

for q in [99, 100, 101, 102]:
    m = re.search(rf'Q\.?\s*{q}\b', en_txt)
    if m:
        pos = m.start()
        print(f'Found Q.{q}:')
        print(en_txt[pos:pos+100])
    else:
        # Check if newline inside number like Q.10\n1
        m2 = re.search(rf'Q\.?\s*10\s*\n\s*{q%100}\b', en_txt)
        if m2:
            print(f'Found Q.{q} split with newline: {m2.group(0)}')
        else:
            print(f'Q.{q} NOT found with simple regex')
