import re, json

with open('reports/pdf_text/official_shift4.txt', 'r', encoding='utf-8') as f:
    en_txt = f.read()

# Parse Q1 from English txt
m_en = re.search(r'Q\.1\s+([\s\S]*?)Question Type[\s\S]*?Option 1 ID\s*:\s*(\d+)[\s\S]*?Option 2 ID\s*:\s*(\d+)[\s\S]*?Option 3 ID\s*:\s*(\d+)[\s\S]*?Option 4 ID\s*:\s*(\d+)', en_txt)
print('English Q1 Option IDs:')
print('  1:', m_en.group(2))
print('  2:', m_en.group(3))
print('  3:', m_en.group(4))
print('  4:', m_en.group(5))

with open('incoming/stet_2025_07nov_s1_hindi.json', 'r', encoding='utf-8') as f:
    hi_dict = json.load(f)

# QID for Q1 is 4335766356
hi_q1 = hi_dict['4335766356']
print('Hindi Q1 Option IDs:')
print(hi_q1['option_ids'])
print('Hindi Q1 Options:')
print(hi_q1['options_hi'])
