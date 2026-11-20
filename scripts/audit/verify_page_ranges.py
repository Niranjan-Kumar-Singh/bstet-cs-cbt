import json, re

with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

# Build a mapping of question bounds for every page
# Each page in the PDF corresponds to booklet pages:
# PDF Page 5: Q1 - Q3
# PDF Page 6: Q4 - Q6
# PDF Page 7: Q7 - Q9
# PDF Page 8: Q10 - Q12
# PDF Page 9: Q13 - Q15
# PDF Page 10: Q16 - Q18
# PDF Page 11: Q19 - Q20
# PDF Page 12: Q21 - Q23
# PDF Page 13: Q24 - Q25
# PDF Page 14: Q26 - Q28
# PDF Page 15: Q29 - Q32
# PDF Page 16: Q33 - Q35
# PDF Page 17: Q36 - Q39
# PDF Page 18: Q40 - Q41
# PDF Page 19: Q42 - Q44
# PDF Page 20: Q45 - Q47
# PDF Page 21: Q48 - Q50
# PDF Page 22: Q51 - Q54
# PDF Page 23: Q55 - Q59
# PDF Page 24: Q60 - Q63
# PDF Page 25: Q64 - Q67
# PDF Page 26: Q68 - Q72
# PDF Page 27: Q73 - Q76
# PDF Page 28: Q77 - Q80
# PDF Page 29: Q81 - Q83
# PDF Page 30: Q84 - Q85
# PDF Page 31: Q86 - Q89
# PDF Page 32: Q90 - Q92
# PDF Page 33: Q93 - Q95
# PDF Page 34: Q96 - Q98
# PDF Page 35: Q99 - Q101
# PDF Page 36: Q102 - Q105
# PDF Page 37: Q106 - Q110
# PDF Page 38: Q111 - Q113
# PDF Page 39: Q114 - Q117
# PDF Page 40: Q118 - Q121
# PDF Page 41: Q122 - Q127
# PDF Page 42: Q128 - Q129
# PDF Page 43: Q130 - Q133
# PDF Page 44: Q134 - Q138
# PDF Page 45: Q139 - Q141
# PDF Page 46: Q142 - Q145
# PDF Page 47: Q146 - Q148
# PDF Page 50: Q149 - Q150

page_ranges = {
    5: (1, 3), 6: (4, 6), 7: (7, 9), 8: (10, 12), 9: (13, 15), 10: (16, 18),
    11: (19, 20), 12: (21, 23), 13: (24, 25), 14: (26, 28), 15: (29, 32),
    16: (33, 35), 17: (36, 39), 18: (40, 41), 19: (42, 44), 20: (45, 47),
    21: (48, 50), 22: (51, 54), 23: (55, 59), 24: (60, 63), 25: (64, 67),
    26: (68, 72), 27: (73, 76), 28: (77, 80), 29: (81, 83), 30: (84, 85),
    31: (86, 89), 32: (90, 92), 33: (93, 95), 34: (96, 98), 35: (99, 101),
    36: (102, 105), 37: (106, 110), 38: (111, 113), 39: (114, 117), 40: (118, 121),
    41: (122, 127), 42: (128, 129), 43: (130, 133), 44: (134, 138), 45: (139, 141),
    46: (142, 145), 47: (146, 148), 50: (149, 150)
}

print("Total expected questions across pages:", sum(end - start + 1 for start, end in page_ranges.values()))
