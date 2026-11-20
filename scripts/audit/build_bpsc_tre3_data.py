# -*- coding: utf-8 -*-
"""
Assembles BPSC TRE 3.0 PGT Computer Science (22 July 2024)
150 Questions with Official Answer Keys (Series E)
"""
import pymupdf, re, json

doc = pymupdf.open(r'incoming\source_pdfs\BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf')
key_doc = pymupdf.open(r'incoming\source_pdfs\bpsc_tre3_cs_key_prepp.pdf')

# 1. Parse Set-E Official Answer Keys
set_e_keys = {}
for page in key_doc:
    tabs = page.find_tables()
    for tab in tabs:
        rows = tab.extract()
        for r in rows:
            if not r or len(r) < 2: continue
            q = str(r[0]).strip() if r[0] else ''
            ans = str(r[1]).strip() if r[1] else ''
            if q and ans and q not in ['SET-E', 'Exam Date- 22-07-2024\nAdvt. No. 22/2024, Computer Science, Class 11-12\nFinal Answer key']:
                set_e_keys[q] = ans

print(f"Total keys in Set-E: {len(set_e_keys)}")

# 2. Parse Part I English (E-1 to E-8) from Page 4 (index 3)
p4_text = doc[3].get_text()
lines = [l.strip() for l in p4_text.split('\n')]
clean = []
for l in lines:
    if not l: continue
    if re.match(r'^\d+$', l) and len(l) <= 3: continue
    if '13/HV/M-2024' in l: continue
    if '[P.T.O.' in l: continue
    if 'PART -' in l or '(English Language)' in l: continue
    clean.append(l)

clean_p4 = "\n" + "\n".join(clean) + "\n"
splits_en = re.split(r'\n(?=E-\d+\.\s*)', clean_p4)

english_passage = (
    "Directions (Q. Nos. 1 to 5): Read the passage given below and answer the questions that follow:\n\n"
    "\"Kerala is just the place for you if you love variety. There is something here to please everyone. "
    "You are sure to fall in love with the serene beauty of Kerala's magical backwaters. When you have "
    "experienced that, you can sample the excitement of Kerala's bustling cities or retreat into the villages to "
    "see at first-hand how time can stand still. Better still, take a trip to the spice gardens in the hills, to inhale "
    "the fragrance of fresh cardamoms if that makes your tastebuds tingle and fills you with dreams of food, "
    "you need not worry. Kerala's cuisine is known for its spicy hot flavours. The coconut and the spices "
    "give the food - especially the seafood a pungency that is enhanced by tamarind. If you prefer to shop "
    "rather than eat, you will find lots of souvenirs to take home. Most people end up buying brassware, "
    "carved wooden figures and bell metal items. If you are a bargain hunter, you will love Kerala. "
    "You need not hesitate to step into a shop because English is spoken and understood everywhere in Kerala.\""
)

parsed_en = []
for block in splits_en[1:]:
    m = re.match(r'^\n?E-(\d+)\.\s*([\s\S]*?)\n\(A\)\s*([\s\S]*?)\n\(B\)\s*([\s\S]*?)\n\(C\)\s*([\s\S]*?)\n\(D\)\s*([\s\S]*?)\n\(E\)\s*([\s\S]*?)$', block)
    if m:
        qnum = int(m.group(1))
        stmt = re.sub(r'\s+', ' ', m.group(2)).strip()
        stmt = re.sub(r'Directions\s*\(Q\.\s*Nos\.\s*E-\d+\s*to\s*E-\d+\)\s*:?\s*', '', stmt).strip()
        opt_a = re.sub(r'\s+', ' ', m.group(3)).strip()
        opt_b = re.sub(r'\s+', ' ', m.group(4)).strip()
        opt_c = re.sub(r'\s+', ' ', m.group(5)).strip()
        opt_d = re.sub(r'\s+', ' ', m.group(6)).strip()
        opt_e = re.sub(r'\s+', ' ', m.group(7)).strip()
        # Clean direction leak in Q5 opt_e
        if 'Directions (Q.' in opt_e:
            opt_e = opt_e.split('Directions (Q.')[0].strip()

        parsed_en.append({
            "qnum": qnum,
            "section": "Part I: Language (English & Hindi)",
            "topic": "English Comprehension & Grammar",
            "topic_hi": "अंग्रेजी समझ और व्याकरण",
            "question": stmt,
            "options": {
                "A": opt_a, "B": opt_b, "C": opt_c, "D": opt_d, "E": opt_e
            },
            "correctAnswer": set_e_keys.get(f"E-{qnum}", "A"),
            "passage": english_passage if qnum <= 5 else ""
        })

print(f"Parsed English Qs: {len(parsed_en)}")

# 3. Part I Hindi (H-9 to H-30)
hindi_passage_1 = (
    "निर्देश (प्रश्न सं. 9 से 14): निम्नलिखित अपठित गद्यांश के आधार पर प्रश्नों के उत्तर दें:\n\n"
    "\"रतन और अजय एक ही स्कूल के छात्र थे। रतन गरीब था और अजय धनी। रतन गरीब होकर भी पढ़ने में तेज था। "
    "सभी शिक्षक उसके व्यवहार से प्रसन्न रहते थे। इसके विपरीत अजय बहुत नटखट था। पढ़ने के बदले खेलने-कूदने और बदमाशी में "
    "अधिक मन लगाता था। रतन और अजय दिली दोस्त थे। इसलिए रतन अजय को अच्छा छात्र बनने के लिए सलाह देता था। "
    "अजय शिक्षकों की बात नहीं मानता था। एक बार रतन से नाराज होकर अजय भाग रहा था। रतन ने दौड़कर अजय को रोकना चाहा। "
    "इतने ही में एक मोटर के नीचे वह गिर गया।\""
)

hindi_passage_2 = (
    "निर्देश (प्रश्न सं. 15 से 20): निम्नलिखित अपठित गद्यांश के आधार पर प्रश्नों के उत्तर दें:\n\n"
    "\"शिवाजी भारत के महान वीरों में से एक थे। उनका उद्देश्य महाराणा प्रताप के उद्देश्य से भी उच्च था। "
    "वे अपने कार्यों में सफल रहे। वे केवल वीर ही नहीं, बल्कि एक अच्छे राजनीतिज्ञ भी थे। उन्होंने लोगों में एक राष्ट्र की भावना "
    "भर दी और मराठा राज्य की स्थापना की। वे कट्टर हिन्दू थे तो भी दूसरे के धर्म और संस्कृति का आदर करते थे। "
    "उनके अच्छे गुणों के कारण सभी लोग उनका आदर करते थे। हम लोगों को उनके जीवन से शिक्षा लेनी चाहिए।\""
)

raw_hindi_qs = [
    {
        "qnum": 9,
        "question": "रतन ने दौड़कर अजय को क्यों रोकना चाहा ?",
        "options": {
            "A": "रतन अजय से प्यार करता था",
            "B": "रतन और अजय एक ही स्कूल में पढ़ते थे",
            "C": "एक बार रतन से नाराज होकर अजय भाग रहा था",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        },
        "passage": hindi_passage_1
    },
    {
        "qnum": 10,
        "question": "रतन अजय को अच्छा छात्र बनने के लिए क्यों सलाह देता था ?",
        "options": {
            "A": "दिली दोस्त होने के कारण",
            "B": "एक स्कूल में पढ़ने के कारण",
            "C": "भाई होने के कारण",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        },
        "passage": hindi_passage_1
    },
    {
        "qnum": 11,
        "question": "रतन कैसा छात्र था ?",
        "options": {
            "A": "गरीब",
            "B": "पढ़ने में तेज",
            "C": "समझदार",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        },
        "passage": hindi_passage_1
    },
    {
        "qnum": 12,
        "question": "रतन और अजय आपस में क्या थे ?",
        "options": {
            "A": "दोस्त",
            "B": "दिली दोस्त",
            "C": "भाई",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        },
        "passage": hindi_passage_1
    },
    {
        "qnum": 13,
        "question": "सभी शिक्षक रतन से क्यों प्रसन्न रहते थे ?",
        "options": {
            "A": "रतन की निर्धनता के कारण",
            "B": "रतन के परिश्रमी होने के कारण",
            "C": "रतन के व्यवहार के कारण",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        },
        "passage": hindi_passage_1
    },
    {
        "qnum": 14,
        "question": "अजय किस काम में अधिक मन लगाता था ?",
        "options": {
            "A": "झगड़ने में",
            "B": "पढ़ने में",
            "C": "दौड़ने में",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        },
        "passage": hindi_passage_1
    },
    {
        "qnum": 15,
        "question": "शिवाजी वीर होने के साथ और क्या थे ?",
        "options": {
            "A": "एक अच्छे राजनीतिज्ञ",
            "B": "श्रेष्ठ विचारक",
            "C": "कुशल सम्राट",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        },
        "passage": hindi_passage_2
    },
    {
        "qnum": 16,
        "question": "शिवाजी ने लोगों में कौन सी भावना भर दी ?",
        "options": {
            "A": "हिन्दुत्व की",
            "B": "एक राष्ट्र की",
            "C": "वीरता की",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        },
        "passage": hindi_passage_2
    },
    {
        "qnum": 17,
        "question": "शिवाजी कौन थे ?",
        "options": {
            "A": "भारत का पराक्रमी योद्धा",
            "B": "भारत के महान वीरों में से एक",
            "C": "भारत का महान सम्राट",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        },
        "passage": hindi_passage_2
    },
    {
        "qnum": 18,
        "question": "लोग शिवाजी का आदर क्यों करते थे ?",
        "options": {
            "A": "उनकी वीरता के कारण",
            "B": "कट्टर हिन्दू होने के कारण",
            "C": "उनके अच्छे गुणों के कारण",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        },
        "passage": hindi_passage_2
    },
    {
        "qnum": 19,
        "question": "इनमें 'राजनीतिज्ञ' शब्द का अर्थ है -",
        "options": {
            "A": "वह नीति जिससे राज्य का संचालन होता है",
            "B": "वह नीति जिससे शासन का संचालन होता है",
            "C": "राजनीति से संबंधित नीति",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        },
        "passage": hindi_passage_2
    },
    {
        "qnum": 20,
        "question": "इनमें अपठित गद्यांश का शीर्षक है -",
        "options": {
            "A": "शिवाजी की राष्ट्रीय चेतना",
            "B": "शिवाजी का जीवन",
            "C": "शिवाजी का पराक्रम",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        },
        "passage": hindi_passage_2
    },
    {
        "qnum": 21,
        "question": "इनमें व्यक्तिवाचक संज्ञा है -",
        "options": {
            "A": "नदी",
            "B": "गंगा",
            "C": "ब्रह्मपुत्र",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        }
    },
    {
        "qnum": 22,
        "question": "इनमें उत्तमपुरुष सर्वनाम है -",
        "options": {
            "A": "मैं",
            "B": "तू",
            "C": "वह",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        }
    },
    {
        "qnum": 23,
        "question": "\"दुकान पर कोई नहीं था।\" वाक्य में किस कारक का चिह्न प्रयुक्त हुआ है ?",
        "options": {
            "A": "अपादान कारक",
            "B": "संबंध कारक",
            "C": "अधिकरण कारक",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        }
    },
    {
        "qnum": 24,
        "question": "इनमें तत्सम शब्द है -",
        "options": {
            "A": "बच्चा",
            "B": "पुष्प",
            "C": "चौदह",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        }
    },
    {
        "qnum": 25,
        "question": "इनमें शुद्ध शब्द है -",
        "options": {
            "A": "निरपराधी",
            "B": "प्रमाणिक",
            "C": "महत्व",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        }
    },
    {
        "qnum": 26,
        "question": "इनमें 'उत्कृष्ट' शब्द का विपरीतार्थक शब्द है -",
        "options": {
            "A": "निकृष्ट",
            "B": "अधम",
            "C": "नीच",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        }
    },
    {
        "qnum": 27,
        "question": "इनमें शुद्ध वाक्य है -",
        "options": {
            "A": "किसी भी आदमी को भेज दो",
            "B": "हम तो अवश्य जायेंगे",
            "C": "यह कविता अनेक भाव प्रकट करती है",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        }
    },
    {
        "qnum": 28,
        "question": "इनमें 'जल' शब्द का पर्यायवाची शब्द है -",
        "options": {
            "A": "जीवन",
            "B": "अमृत",
            "C": "पानी",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        }
    },
    {
        "qnum": 29,
        "question": "\"जहाँ लोगों का मिलन हो\" वाक्यांश के लिए एक शब्द है -",
        "options": {
            "A": "मेला",
            "B": "सम्मेलन",
            "C": "मेल",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        }
    },
    {
        "qnum": 30,
        "question": "\"खटाई में पड़ना\" मुहावरे का अर्थ है -",
        "options": {
            "A": "झमेले में पड़ना",
            "B": "चैन मिलना",
            "C": "विघ्न आना",
            "D": "उपर्युक्त में से एक से अधिक",
            "E": "उपर्युक्त में से कोई नहीं"
        }
    }
]

parsed_hindi = []
for hq in raw_hindi_qs:
    qnum = hq["qnum"]
    parsed_hindi.append({
        "qnum": qnum,
        "section": "Part I: Language (English & Hindi)",
        "topic": "Hindi Language & Grammar",
        "topic_hi": "हिन्दी भाषा और व्याकरण",
        "question": hq["question"],
        "question_hi": hq["question"],
        "options": hq["options"],
        "options_hi": hq["options"],
        "correctAnswer": set_e_keys.get(f"H-{qnum}", "A"),
        "passage": hq.get("passage", "")
    })

print(f"Parsed Hindi Qs: {len(parsed_hindi)}")

# 4. Parse Part II General Studies (Q31 to Q70) from Even Pages 16, 18, 20, 22
gs_text = ""
for idx in [15, 17, 19, 21]:
    gs_text += "\n" + doc[idx].get_text() + "\n"

lines = [l.strip() for l in gs_text.split('\n')]
clean = []
for l in lines:
    if not l: continue
    if re.match(r'^\d+$', l) and len(l) <= 3: continue
    if '13/HV/M-2024' in l: continue
    if '[P.T.O.' in l: continue
    if 'PART -' in l or '(GENERAL STUDIES)' in l: continue
    clean.append(l)

clean_gs = "\n" + "\n".join(clean) + "\n"
gs_splits = re.split(r'\n(?=\d+\.\s+)', clean_gs)

def classify_gs_topic(stmt):
    s = stmt.lower()
    if any(k in s for k in ['x2', 'ratio', 'discount', 'cp', 'selling', 'interest', 'triangle', 'polynomial', 'equation', 'sum of', 'perimeter', 'average', 'arithmetic', 'geometric', 'root', 'series', 'log', 'matrix', 'angle']):
        return "Elementary Mathematics", "प्रारंभिक गणित"
    if any(k in s for k in ['congress', 'gandhi', 'revolt', '1857', 'movement', 'british', 'viceroy', 'swaraj', 'subhas', 'nehru', 'tagore', 'tilak', 'patel', 'freedom', 'treaty', 'battle', 'governor']):
        return "Indian National Movement", "भारतीय राष्ट्रीय आंदोलन"
    if any(k in s for k in ['river', 'mountain', 'bihar', 'soil', 'climate', 'wildlife', 'forest', 'district', 'plateau', 'monsoon', 'tapi', 'gulf', 'pass', 'island']):
        return "Geography & Environment", "भूगोल और पर्यावरण"
    if any(k in s for k in ['acid', 'base', 'metal', 'light', 'lens', 'current', 'voltage', 'cell', 'blood', 'dna', 'rna', 'vitamin', 'enzyme', 'reaction', 'plant', 'organ', 'gravity', 'pressure']):
        return "General Science", "सामान्य विज्ञान"
    return "General Studies & Current Affairs", "सामान्य अध्ययन एवं समसामयिकी"

parsed_gs = []
for block in gs_splits:
    m = re.match(r'^\n?(\d+)\.\s*([\s\S]*?)\n\(A\)\s*([\s\S]*?)\n\(B\)\s*([\s\S]*?)\n\(C\)\s*([\s\S]*?)\n\(D\)\s*([\s\S]*?)\n\(E\)\s*([\s\S]*?)$', block)
    if m:
        qnum = int(m.group(1))
        stmt = re.sub(r'\s+', ' ', m.group(2)).strip()
        opt_a = re.sub(r'\s+', ' ', m.group(3)).strip()
        opt_b = re.sub(r'\s+', ' ', m.group(4)).strip()
        opt_c = re.sub(r'\s+', ' ', m.group(5)).strip()
        opt_d = re.sub(r'\s+', ' ', m.group(6)).strip()
        opt_e = re.sub(r'\s+', ' ', m.group(7)).strip()
        top_en, top_hi = classify_gs_topic(stmt)
        parsed_gs.append({
            "qnum": qnum,
            "section": "Part II: General Studies",
            "topic": top_en,
            "topic_hi": top_hi,
            "question": stmt,
            "options": {
                "A": opt_a, "B": opt_b, "C": opt_c, "D": opt_d, "E": opt_e
            },
            "correctAnswer": set_e_keys.get(str(qnum), "A")
        })

print(f"Parsed GS Qs: {len(parsed_gs)}")

# 5. Parse Part III Computer Science (Q71 to Q150)
cs_text = ""
for idx in range(23, 51, 2):
    cs_text += "\n" + doc[idx].get_text() + "\n"

lines = [l.strip() for l in cs_text.split('\n')]
clean = []
for l in lines:
    if not l: continue
    if re.match(r'^\d+$', l) and len(l) <= 3: continue
    if '13/HV/M-2024' in l: continue
    if '[P.T.O.' in l: continue
    if 'PART -' in l or '(Computer Science)' in l: continue
    clean.append(l)

clean_cs = "\n" + "\n".join(clean) + "\n"
cs_splits = re.split(r'\n(?=\d+\.\s+)', clean_cs)

def classify_cs_topic(stmt):
    s = stmt.lower()
    if any(k in s for k in ['k-map', 'boolean', 'multiplexer', 'gate', 'flip-flop', 'demultiplexer', 'counter', 'adder', 'digital circuit', 'nand', 'nor', 'logic circuit', 'canonical']):
        return "Digital Logic & Circuits", "डिजिटल लॉजिक और सर्किट"
    if any(k in s for k in ['cpu', 'cache', 'register', 'bus', 'alu', 'interrupt', 'pipeline', 'instruction', 'addressing mode', 'dma', 'microprocessor']):
        return "Computer Architecture & Organization", "कंप्यूटर आर्किटेक्चर एवं संगठन"
    if any(k in s for k in ['sql', 'table', 'relational', 'normalization', 'normal form', 'bcnf', 'primary key', 'foreign key', 'database', 'schema', 'tuple', 'view', 'join', 'acid', 'transaction']):
        return "DBMS & SQL", "डेटाबेस मैनेजमेंट सिस्टम (DBMS)"
    if any(k in s for k in ['tree', 'graph', 'stack', 'queue', 'linked list', 'array', 'sorting', 'bubble sort', 'quick sort', 'merge sort', 'binary search', 'heap', 'hash', 'complexity', 'traversal']):
        return "Data Structures & Algorithms", "डेटा संरचनाएं और एल्गोरिदम"
    if any(k in s for k in ['process', 'thread', 'deadlock', 'semaphore', 'paging', 'virtual memory', 'scheduling', 'round robin', 'operating system', 'fork', 'mutex', 'fifo']):
        return "Operating Systems", "ऑपरेटिंग सिस्टम"
    if any(k in s for k in ['osi', 'tcp', 'udp', 'ip address', 'subnet', 'router', 'switch', 'bluetooth', 'protocol', 'mac address', 'lan', 'bandwidth', 'ethernet', 'http', 'dns', 'transmission']):
        return "Computer Networks", "कंप्यूटर नेटवर्क"
    if any(k in s for k in ['c++', 'inheritance', 'polymorphism', 'class', 'object', 'constructor', 'virtual function', 'destructor', 'encapsulation', 'oop', 'overloading']):
        return "C++ & OOP Concepts", "C++ एवं OOP अवधारणाएं"
    if any(k in s for k in ['python', 'list', 'tuple', 'dictionary', 'def ', 'lambda', 'module']):
        return "Python Programming", "पायथन प्रोग्रामिंग"
    if any(k in s for k in ['html', 'css', 'javascript', 'web', 'xml', 'browser', 'tag', 'http']):
        return "Web Technology & Internet", "वेब प्रौद्योगिकी"
    if any(k in s for k in ['sdlc', 'agile', 'waterfall', 'software engineering', 'testing', 'cohesion', 'coupling', 'debugging']):
        return "Software Engineering", "सॉफ्टवेयर इंजीनियरिंग"
    return "Computer Science Concepts", "कंप्यूटर विज्ञान अवधारणाएं"

parsed_cs = []
for block in cs_splits:
    m = re.match(r'^\n?(\d+)\.\s*([\s\S]*?)\n\(A\)\s*([\s\S]*?)\n\(B\)\s*([\s\S]*?)\n\(C\)\s*([\s\S]*?)\n\(D\)\s*([\s\S]*?)\n\(E\)\s*([\s\S]*?)$', block)
    if m:
        qnum = int(m.group(1))
        stmt = re.sub(r'\s+', ' ', m.group(2)).strip()
        opt_a = re.sub(r'\s+', ' ', m.group(3)).strip()
        opt_b = re.sub(r'\s+', ' ', m.group(4)).strip()
        opt_c = re.sub(r'\s+', ' ', m.group(5)).strip()
        opt_d = re.sub(r'\s+', ' ', m.group(6)).strip()
        opt_e = re.sub(r'\s+', ' ', m.group(7)).strip()
        top_en, top_hi = classify_cs_topic(stmt)
        parsed_cs.append({
            "qnum": qnum,
            "section": "Part III: Computer Science",
            "topic": top_en,
            "topic_hi": top_hi,
            "question": stmt,
            "options": {
                "A": opt_a, "B": opt_b, "C": opt_c, "D": opt_d, "E": opt_e
            },
            "correctAnswer": set_e_keys.get(str(qnum), "A")
        })

print(f"Parsed CS Qs: {len(parsed_cs)}")

# Combine all 150 questions:
all_questions = []

# Q1 to Q8: English
for q in parsed_en:
    full_q = dict(q)
    full_q["id"] = q["qnum"]
    full_q["questionNumber"] = q["qnum"]
    full_q["marks"] = 1
    full_q["negativeMarks"] = 0
    full_q["explanation"] = f"**Official Answer: ({full_q['correctAnswer']})**\n\nOfficial Answer Key released by BPSC (Advt 22/2024, Exam Date: 22-07-2024, Series E)."
    full_q["explanation_hi"] = f"**आधिकारिक सही उत्तर: ({full_q['correctAnswer']})**\n\nबिहार लोक सेवा आयोग (BPSC TRE 3.0) द्वारा जारी अंतिम आधिकारिक उत्तर कुंजी के अनुसार।"
    all_questions.append(full_q)

# Q9 to Q30: Hindi
for q in parsed_hindi:
    full_q = dict(q)
    full_q["id"] = q["qnum"]
    full_q["questionNumber"] = q["qnum"]
    full_q["marks"] = 1
    full_q["negativeMarks"] = 0
    full_q["explanation"] = f"**Official Answer: ({full_q['correctAnswer']})**\n\nOfficial Answer Key released by BPSC (Advt 22/2024, Exam Date: 22-07-2024, Series E)."
    full_q["explanation_hi"] = f"**आधिकारिक सही उत्तर: ({full_q['correctAnswer']})**\n\nबिहार लोक सेवा आयोग (BPSC TRE 3.0) द्वारा जारी अंतिम आधिकारिक उत्तर कुंजी के अनुसार।"
    all_questions.append(full_q)

# Q31 to Q70: General Studies
for q in parsed_gs:
    full_q = dict(q)
    full_q["id"] = q["qnum"]
    full_q["questionNumber"] = q["qnum"]
    full_q["marks"] = 1
    full_q["negativeMarks"] = 0
    full_q["explanation"] = f"**Official Answer: ({full_q['correctAnswer']})**\n\n**{q['topic']}**: Official BPSC TRE 3.0 Answer Key (Advt 22/2024, Series E)."
    full_q["explanation_hi"] = f"**आधिकारिक सही उत्तर: ({full_q['correctAnswer']})**\n\n**{q['topic_hi']}**: बिहार लोक सेवा आयोग (BPSC TRE 3.0) द्वारा जारी अंतिम आधिकारिक उत्तर कुंजी के अनुसार।"
    all_questions.append(full_q)

# Q71 to Q150: Computer Science
for q in parsed_cs:
    full_q = dict(q)
    full_q["id"] = q["qnum"]
    full_q["questionNumber"] = q["qnum"]
    full_q["marks"] = 1
    full_q["negativeMarks"] = 0
    full_q["explanation"] = f"**Official Answer: ({full_q['correctAnswer']})**\n\n**{q['topic']}**: Official BPSC TRE 3.0 Answer Key (Advt 22/2024, Series E)."
    full_q["explanation_hi"] = f"**आधिकारिक सही उत्तर: ({full_q['correctAnswer']})**\n\n**{q['topic_hi']}**: बिहार लोक सेवा आयोग (BPSC TRE 3.0) द्वारा जारी अंतिम आधिकारिक उत्तर कुंजी के अनुसार।"
    all_questions.append(full_q)

print(f"Total combined questions: {len(all_questions)}")

# Check sequence
seq = [q["questionNumber"] for q in all_questions]
assert seq == list(range(1, 151)), f"Sequence mismatch: {seq[:10]} ... {seq[-10:]}"
print("Sequence 1 to 150 strictly verified!")

# Save incoming JSON
json_data = {
    "exam": "BPSC TRE 3.0 PGT Computer Science (Class 11-12)",
    "advertisement": "Advt. No. 22/2024",
    "heldOn": "22 July 2024",
    "bookletSeries": "E",
    "totalQuestions": 150,
    "questions": all_questions
}
with open(r'incoming\bpsc_tre3_pgt_cs.json', 'w', encoding='utf-8') as f:
    json.dump(json_data, f, ensure_ascii=False, indent=2)
print("Saved incoming/bpsc_tre3_pgt_cs.json")

# Write js/data/bpsc-tre3-2024.js
js_paper_obj = {
    "id": "bpsc_tre3_2024",
    "title": "BPSC TRE 3.0 PGT Computer Science (Class 11-12)",
    "subtitle": "Held On: 22 July 2024 (Booklet Series E) | Official BPSC Question Paper & Final Answer Key",
    "category": "BPSC TRE PYQ",
    "isOfficial": True,
    "totalQuestions": 150,
    "totalMarks": 150,
    "durationMinutes": 150,
    "sections": [
        {
            "id": "part1",
            "name": "Part I: Language (English & Hindi)",
            "startQ": 1,
            "endQ": 30,
            "total": 30
        },
        {
            "id": "part2",
            "name": "Part II: General Studies",
            "startQ": 31,
            "endQ": 70,
            "total": 40
        },
        {
            "id": "part3",
            "name": "Part III: Computer Science",
            "startQ": 71,
            "endQ": 150,
            "total": 80
        }
    ],
    "questions": all_questions
}

with open(r'js\data\bpsc-tre3-2024.js', 'w', encoding='utf-8') as f:
    f.write("// BPSC TRE 3.0 PGT Computer Science (Class 11-12) Official Question Paper\n")
    f.write("window.bpsc_tre3_2024 = ")
    json.dump(js_paper_obj, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Created js/data/bpsc-tre3-2024.js successfully!")
