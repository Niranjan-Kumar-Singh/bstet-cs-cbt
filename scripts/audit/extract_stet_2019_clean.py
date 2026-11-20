import json, re, os, sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

with open('incoming/stet_2019_ocr_pages.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

print(f"Loaded {len(pages)} pages.")

# Let's inspect all lines across all pages
# Each page in booklet:
# Page 5: Q1-3, Page 6: Q4-6, Page 7: Q7-9, Page 8: Q10-12, Page 9: Q13-15, Page 10: Q16-18
# Page 11: Q19-20, Page 12: Q21-23, Page 13: Q24-25, Page 14: Q26-28, Page 15: Q29-32
# Page 16: Q33-35, Page 17: Q36-39, Page 18: Q40-41, Page 19: Q42-44, Page 20: Q45-47
# Page 21: Q48-50, Page 22: Q51-54, Page 23: Q55-59, Page 24: Q60-63, Page 25: Q64-67
# Page 26: Q68-72, Page 27: Q73-76, Page 28: Q77-80, Page 29: Q81-83, Page 30: Q84-85
# Page 31: Q86-89, Page 32: Q90-92, Page 33: Q93-95, Page 34: Q96-98, Page 35: Q99-101
# Page 36: Q102-105, Page 37: Q106-110, Page 38: Q111-113, Page 39: Q114-117, Page 40: Q118-121
# Page 41: Q122-127, Page 42: Q128-129, Page 43: Q130-133, Page 44: Q134-138, Page 45: Q139-141
# Page 46: Q142-145, Page 47: Q146-148, Page 50: Q149-150

# Let's write out the clean 150 questions list for STET 2019
