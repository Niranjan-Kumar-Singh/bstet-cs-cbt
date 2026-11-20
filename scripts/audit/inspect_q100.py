import re

with open('reports/pdf_text/official_shift4.txt', 'r', encoding='utf-8') as f:
    en_txt = f.read()

pos = en_txt.find('Q.10')
if pos != -1:
    print('Found Q.10:')
    print(en_txt[pos-20:pos+150])
else:
    print('Not found')
