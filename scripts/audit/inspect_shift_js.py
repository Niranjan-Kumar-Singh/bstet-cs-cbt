import re

with open('js/data/official-shift4.js', 'r', encoding='utf-8') as f:
    txt4 = f.read(2500)
print('official-shift4.js snippet:')
print(txt4[:600])

with open('js/data/official-shift3.js', 'r', encoding='utf-8') as f:
    txt3 = f.read(2500)
print('\nofficial-shift3.js snippet:')
print(txt3[:600])
