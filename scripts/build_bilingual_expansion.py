# -*- coding: utf-8 -*-
"""
High-Yield Bilingual Mock Papers & Drills Generator for Bihar STET Computer Science (Code 226).
Builds:
1. js/data/predicted-set11.js (150 Qs)
2. js/data/predicted-set12.js (150 Qs)
3. js/data/specialized-drills.js (3 Drills = 150 Qs)
"""

import json
import os
import sys

# Change directory
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, "js", "data")
sys.path.insert(0, os.path.join(BASE_DIR, "scripts"))

from question_pool import CS_QUESTION_POOL, PEDAGOGY_QUESTION_POOL, GENERAL_QUESTION_POOL

# Expanded curated items for 15 Units
EXTRA_CS_QUESTIONS = [
    {
        "topic": "Digital Logic",
        "topic_hi": "डिजिटल लॉजिक",
        "question": "What is the 2's complement representation of decimal -13 in an 8-bit binary system?",
        "question_hi": "8-बिट बाइनरी प्रणाली में दशमलव -13 का 2's पूरक (2's complement) क्या होगा?",
        "options": {"A": "11110011", "B": "11110010", "C": "11110100", "D": "11111101"},
        "options_hi": {"A": "11110011", "B": "11110010", "C": "11110100", "D": "11111101"},
        "correctAnswer": "A",
        "explanation": "Binary of +13 = 00001101. 1's complement = 11110010. Adding 1 = 11110011.",
        "explanation_hi": "+13 का 8-बिट बाइनरी = 00001101. 1's कॉम्प्लीमेंट = 11110010. 1 जोड़ने पर = 11110011."
    },
    {
        "topic": "Digital Logic",
        "topic_hi": "डिजिटल लॉजिक",
        "question": "How many 2-to-1 Multiplexers are needed to construct an 8-to-1 Multiplexer?",
        "question_hi": "एक 8-to-1 मल्टीप्लेक्सर (MUX) बनाने के लिए कितने 2-to-1 MUX की आवश्यकता होगी?",
        "options": {"A": "4", "B": "6", "C": "7", "D": "8"},
        "options_hi": {"A": "4", "B": "6", "C": "7", "D": "8"},
        "correctAnswer": "C",
        "explanation": "To build an 8:1 MUX: 4 in first stage, 2 in second, 1 in final stage = 4 + 2 + 1 = 7.",
        "explanation_hi": "8:1 MUX बनाने हेतु: प्रथम चरण में 4, द्वितीय में 2, तृतीय में 1 = कुल 7 MUX की आवश्यकता होगी।"
    },
    {
        "topic": "Digital Logic",
        "topic_hi": "डिजिटल लॉजिक",
        "question": "In a JK flip-flop, the Race-Around condition occurs when:",
        "question_hi": "JK फ्लिप-फ्लॉप में 'रेस-अराउंड' (Race-Around) स्थिति कब उत्पन्न होती है?",
        "options": {
            "A": "J = 0, K = 0 and clock is high",
            "B": "J = 1, K = 1 and clock pulse width is greater than propagation delay",
            "C": "J = 1, K = 0 and clock is low",
            "D": "J = 0, K = 1 and propagation delay is zero"
        },
        "options_hi": {
            "A": "J = 0, K = 0 और क्लॉक हाई हो",
            "B": "J = 1, K = 1 और क्लॉक पल्स चौड़ाई प्रोपेगेशन डिले से अधिक हो",
            "C": "J = 1, K = 0 और क्लॉक लो हो",
            "D": "J = 0, K = 1 और प्रोपेगेशन डिले शून्य हो"
        },
        "correctAnswer": "B",
        "explanation": "Race-around condition occurs when J=1, K=1 and clock pulse width exceeds flip-flop propagation delay.",
        "explanation_hi": "रेस-अराउंड स्थिति तब उत्पन्न होती है जब J=1, K=1 हो तथा क्लॉक पल्स की अवधि प्रोपेगेशन डिले से अधिक हो।"
    },
    {
        "topic": "Computer Organization & Architecture",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question": "Which addressing mode specifies the operand directly within the instruction itself?",
        "question_hi": "कौन सा एड्रेसिंग मोड ऑपरेंड (मान) को सीधे निर्देश के अंदर ही निर्दिष्ट करता है?",
        "options": {"A": "Direct Addressing", "B": "Immediate Addressing", "C": "Register Indirect", "D": "Indexed Addressing"},
        "options_hi": {"A": "डायरेक्ट एड्रेसिंग", "B": "इमीडिएट एड्रेसिंग", "C": "रजिस्टर इनडायरेक्ट", "D": "इंडेक्स्ड एड्रेसिंग"},
        "correctAnswer": "B",
        "explanation": "In Immediate Addressing, the operand field contains the actual data value (e.g., MOV R1, #50).",
        "explanation_hi": "इमीडिएट एड्रेसिंग मोड में ऑपरेंड का वास्तविक मान सीधे निर्देश में ही लिखा होता है।"
    },
    {
        "topic": "Computer Organization & Architecture",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question": "What is the primary function of the Program Counter (PC) register in a CPU?",
        "question_hi": "CPU में प्रोग्राम काउंटर (PC) का मुख्य कार्य क्या है?",
        "options": {
            "A": "Holds the instruction currently executing",
            "B": "Holds the address of the NEXT instruction to be fetched",
            "C": "Stores intermediate arithmetic results",
            "D": "Counts total elapsed cycles"
        },
        "options_hi": {
            "A": "वर्तमान में निष्पादित निर्देश को रखता है",
            "B": "निष्पादित होने वाले अगले (NEXT) निर्देश का पता रखता है",
            "C": "मध्यवर्ती अंकगणितीय परिणाम रखता है",
            "D": "क्लॉक साइकिलों की गिनती करता है"
        },
        "correctAnswer": "B",
        "explanation": "The Program Counter (PC) stores the memory address of the next instruction to fetch and execute.",
        "explanation_hi": "प्रोग्राम काउंटर (PC) मेमोरी से पढ़े जाने वाले अगले निर्देश का पता रखता है।"
    },
    {
        "topic": "Programming & Data Structures",
        "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
        "question": "What is the minimum number of queues required to implement a Stack data structure?",
        "question_hi": "एक स्टैक (Stack) डेटा संरचना को लागू करने के लिए कम से कम कितने क्यू (Queue) चाहिए?",
        "options": {"A": "1", "B": "2", "C": "3", "D": "4"},
        "options_hi": {"A": "1", "B": "2", "C": "3", "D": "4"},
        "correctAnswer": "B",
        "explanation": "A minimum of 2 queues are required to simulate the LIFO behavior of a Stack.",
        "explanation_hi": "क्यू (FIFO) की मदद से स्टैक (LIFO) का अनुकरण करने हेतु न्यूनतम 2 क्यू आवश्यक हैं।"
    },
    {
        "topic": "Programming & Data Structures",
        "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
        "question": "Which traversal of a Binary Search Tree (BST) produces keys in strictly ascending sorted order?",
        "question_hi": "बाइनरी सर्च ट्री (BST) का कौन सा ट्रैवर्सल मानों को हमेशा आरोही (सॉर्टेड) क्रम में देता है?",
        "options": {"A": "Preorder", "B": "Inorder", "C": "Postorder", "D": "Level-order"},
        "options_hi": {"A": "प्री-ऑर्डर", "B": "इन-ऑर्डर (Inorder)", "C": "पोस्ट-ऑर्डर", "D": "लेवल-ऑर्डर"},
        "correctAnswer": "B",
        "explanation": "Inorder traversal (Left, Root, Right) of a BST outputs elements in monotonically increasing sorted order.",
        "explanation_hi": "BST का इन-ऑर्डर ट्रैवर्सल (Left, Root, Right) हमेशा तत्वों को आरोही क्रम में छांटता है।"
    },
    {
        "topic": "Algorithms",
        "topic_hi": "एल्गोरिदम एवं विश्लेषण",
        "question": "What is the worst-case time complexity of QuickSort?",
        "question_hi": "क्विकसॉर्ट (QuickSort) की सबसे खराब स्थिति (Worst-case) में समय जटिलता क्या होती है?",
        "options": {"A": "O(n log n)", "B": "O(n)", "C": "O(n²)", "D": "O(n³)"},
        "options_hi": {"A": "O(n log n)", "B": "O(n)", "C": "O(n²)", "D": "O(n³)"},
        "correctAnswer": "C",
        "explanation": "When the pivot chosen is consistently the smallest or largest element, QuickSort degrades to O(n²).",
        "explanation_hi": "जब पाइवोट सदैव सबसे छोटा या सबसे बड़ा तत्व चुना जाता है, तब क्विकसॉर्ट की जटिलता O(n²) हो जाती है।"
    },
    {
        "topic": "Operating System",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "question": "Which of the following is NOT one of Coffman's four conditions for Deadlock?",
        "question_hi": "निम्नलिखित में से कौन सी डेडलॉक (Deadlock) की कॉफ़मैन की 4 अनिवार्य शर्तों में से नहीं है?",
        "options": {"A": "Mutual Exclusion", "B": "Hold and Wait", "C": "Preemption Allowed", "D": "Circular Wait"},
        "options_hi": {"A": "म्यूचुअल एक्सक्लूजन", "B": "होल्ड एंड वेट", "C": "प्रीएम्पशन की अनुमति", "D": "सर्कुलर वेट"},
        "correctAnswer": "C",
        "explanation": "The 4 conditions are Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait. Preemption Allowed prevents deadlock.",
        "explanation_hi": "डेडलॉक की चार शर्तें हैं: म्यूचुअल एक्सक्लूजन, होल्ड एंड वेट, नो प्रीएम्पशन, और सर्कुलर वेट। 'Preemption Allowed' से डेडलॉक टल जाता है।"
    },
    {
        "topic": "Database Management System",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question": "Which SQL clause is used to filter groups created by the 'GROUP BY' clause?",
        "question_hi": "SQL में 'GROUP BY' क्लॉज द्वारा बनाए गए समूहों पर शर्त लगाने हेतु किसका उपयोग होता है?",
        "options": {"A": "WHERE", "B": "HAVING", "C": "ORDER BY", "D": "FILTER"},
        "options_hi": {"A": "WHERE", "B": "HAVING", "C": "ORDER BY", "D": "FILTER"},
        "correctAnswer": "B",
        "explanation": "HAVING filters aggregated groups formed by GROUP BY, while WHERE filters individual rows prior to grouping.",
        "explanation_hi": "WHERE व्यक्तिगत पंक्तियों को फ़िल्टर करता है जबकि HAVING क्लॉज GROUP BY के बाद समूहों को फ़िल्टर करता है।"
    },
    {
        "topic": "Computer Network",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question": "Which protocol resolves a known IP address to a physical hardware MAC address?",
        "question_hi": "ज्ञात IP पते को भौतिक हार्डवेयर MAC पते में बदलने के लिए किस प्रोटोकॉल का उपयोग होता है?",
        "options": {"A": "RARP", "B": "ARP (Address Resolution Protocol)", "C": "DHCP", "D": "ICMP"},
        "options_hi": {"A": "RARP", "B": "ARP (एड्रेस रेजोल्यूशन प्रोटोकॉल)", "C": "DHCP", "D": "ICMP"},
        "correctAnswer": "B",
        "explanation": "ARP maps an IPv4 address to a physical MAC address on a local Ethernet broadcast network.",
        "explanation_hi": "ARP प्रोटोकॉल स्थानीय नेटवर्क पर तार्किक IP पते को हार्डवेयर MAC पते में बदलता है।"
    },
    {
        "topic": "Software Engineering",
        "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
        "question": "Which software testing technique examines internal logic, statements, and loop structures?",
        "question_hi": "कौन सी सॉफ्टवेयर टेस्टिंग तकनीक स्रोत कोड की आंतरिक लॉजिक, स्टेटमेंट और लूप की जांच करती है?",
        "options": {"A": "Black-Box Testing", "B": "White-Box Testing", "C": "Acceptance Testing", "D": "Beta Testing"},
        "options_hi": {"A": "ब्लैक-बॉक्स टेस्टिंग", "B": "व्हाइट-बॉक्स टेस्टिंग (White-Box)", "C": "स्वीकृति टेस्टिंग", "D": "बीटा टेस्टिंग"},
        "correctAnswer": "B",
        "explanation": "White-Box testing tests internal logic paths with complete knowledge of the internal source code.",
        "explanation_hi": "व्हाइट-बॉक्स टेस्टिंग में स्रोत कोड की आंतरिक कार्यप्रणाली और लॉजिक शाखाओं की जांच की जाती है।"
    },
    {
        "topic": "Object Oriented Programming",
        "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग",
        "question": "In Python, which special method is invoked automatically when a new object instance is created?",
        "question_hi": "पायथन (Python) में नया ऑब्जेक्ट बनने पर स्वतः कौन सा मेथड निष्पादित होता है?",
        "options": {"A": "__new__()", "B": "__init__()", "C": "__create__()", "D": "__main__()"},
        "options_hi": {"A": "__new__()", "B": "__init__()", "C": "__create__()", "D": "__main__()"},
        "correctAnswer": "B",
        "explanation": "The __init__() method is Python's constructor that initializes new instance attributes.",
        "explanation_hi": "पायथन में `__init__()` कंस्ट्रक्टर मेथड है जो नए ऑब्जेक्ट के गुणों को इनिशियलाइज़ करता है।"
    },
    {
        "topic": "Web-Based Application Development",
        "topic_hi": "वेब आधारित अनुप्रयोग विकास",
        "question": "In JavaScript, which operator checks for BOTH value and data type equality without coercion?",
        "question_hi": "जावास्क्रिप्ट में कौन सा ऑपरेटर बिना टाइप कन्वर्ज़न के मान और डेटा प्रकार दोनों की समानता जांचता है?",
        "options": {"A": "==", "B": "===", "C": "!=", "D": "="},
        "options_hi": {"A": "==", "B": "===", "C": "!=", "D": "="},
        "correctAnswer": "B",
        "explanation": "The strict equality operator (===) checks both value and type without performing implicit type coercion.",
        "explanation_hi": "कड़ा समानता ऑपरेटर (===) बिना प्रकार बदले मान और डेटा टाइप दोनों की जांच करता है।"
    },
    {
        "topic": "Theory of Computation",
        "topic_hi": "गणना का सिद्धांत (TOC)",
        "question": "Which automaton recognizes Context-Free Languages (CFL)?",
        "question_hi": "कॉन्टेक्स्ट-फ्री भाषाओं (CFL) को पहचानने के लिए किस ऑटोमेटा का उपयोग होता है?",
        "options": {"A": "Deterministic Finite Automata", "B": "Pushdown Automata (PDA)", "C": "Linear Bounded Automata", "D": "Turing Machine only"},
        "options_hi": {"A": "DFA", "B": "पुशडाउन ऑटोमेटा (PDA)", "C": "LBA", "D": "केवल ट्यूरिंग मशीन"},
        "correctAnswer": "B",
        "explanation": "Pushdown Automata (PDA), which have a single auxiliary stack memory, recognize Context-Free Languages.",
        "explanation_hi": "पुशडाउन ऑटोमेटा (PDA) अपनी स्टैक मेमोरी की सहायता से कॉन्टेक्स्ट-फ्री भाषाओं को पहचानता है।"
    },
    {
        "topic": "Internet of Things",
        "topic_hi": "इंटरनेट ऑफ थिंग्स (IoT)",
        "question": "Which communication protocol is designed specifically for constrained IoT devices operating over UDP?",
        "question_hi": "UDP पर चलने वाले सीमित क्षमता वाले IoT उपकरणों हेतु कौन सा प्रोटोकॉल विकसित किया गया है?",
        "options": {"A": "HTTP", "B": "CoAP", "C": "SMTP", "D": "SSH"},
        "options_hi": {"A": "HTTP", "B": "CoAP (कंस्ट्रेंड एप्लीकेशन प्रोटोकॉल)", "C": "SMTP", "D": "SSH"},
        "correctAnswer": "B",
        "explanation": "CoAP (Constrained Application Protocol) provides a lightweight RESTful web transfer protocol over UDP for constrained IoT nodes.",
        "explanation_hi": "CoAP एक हल्का RESTful प्रोटोकॉल है जिसे IoT सेंसर्स के लिए UDP पर डिज़ाइन किया गया है।"
    },
    {
        "topic": "Artificial Intelligence",
        "topic_hi": "आर्टिफिशियल इंटेलिजेंस (AI)",
        "question": "Which type of search algorithm always expands the lowest cost node where evaluation function f(n) = g(n) + h(n)?",
        "question_hi": "कौन सा सर्च एल्गोरिदम f(n) = g(n) + h(n) का उपयोग करके सबसे कम लागत वाले नोड का विस्तार करता है?",
        "options": {"A": "Greedy Best-First Search", "B": "A* Search", "C": "Depth First Search", "D": "Breadth First Search"},
        "options_hi": {"A": "ग्रीडी बेस्ट-फर्स्ट सर्च", "B": "A* सर्च (A-Star Search)", "C": "DFS", "D": "BFS"},
        "correctAnswer": "B",
        "explanation": "A* search combines g(n) (path cost from start) and h(n) (estimated heuristic cost to goal) for optimal search.",
        "explanation_hi": "A* सर्च वास्तविक लागत g(n) और अनुमानित लागत h(n) दोनों को जोड़कर सबसे अनुकूल रास्ता खोजता है।"
    },
    {
        "topic": "Fundamental of E-Commerce",
        "topic_hi": "ई-कॉमर्स के मूल सिद्धांत",
        "question": "Which security protocol provides transport-layer encryption for secure online financial transactions?",
        "question_hi": "सुरक्षित ऑनलाइन वित्तीय लेनदेन के लिए ट्रांसपोर्ट-लेयर पर कौन सा एन्क्रिप्शन प्रोटोकॉल सुरक्षा देता है?",
        "options": {"A": "SSL / TLS", "B": "FTP", "C": "TELNET", "D": "TFTP"},
        "options_hi": {"A": "SSL / TLS", "B": "FTP", "C": "TELNET", "D": "TFTP"},
        "correctAnswer": "A",
        "explanation": "SSL/TLS encrypts communication between the client web browser and server, establishing secure HTTPS sessions.",
        "explanation_hi": "SSL/TLS प्रोटोकॉल ब्राउज़र और सर्वर के बीच संचार को एन्क्रिप्ट करके सुरक्षित HTTPS सत्र प्रदान करता है।"
    },
    {
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया तकनीक",
        "question": "Which vector graphic format is an open XML-based W3C standard that scales without quality loss?",
        "question_hi": "कौन सा वेक्टर ग्राफ़िक प्रारूप XML पर आधारित है और बिना गुणवत्ता खोए किसी भी आकार में ज़ूम हो सकता है?",
        "options": {"A": "BMP", "B": "SVG", "C": "GIF", "D": "TIFF"},
        "options_hi": {"A": "BMP", "B": "SVG (स्केलेबल वेक्टर ग्राफिक्स)", "C": "GIF", "D": "TIFF"},
        "correctAnswer": "B",
        "explanation": "Scalable Vector Graphics (SVG) represents shapes and lines mathematically, allowing infinite resolution-independent scaling.",
        "explanation_hi": "SVG गणितीय रेखाओं और आकृतियों पर आधारित वेक्टर प्रारूप है जो ज़ूम करने पर भी अपनी स्पष्टता नहीं खोता।"
    }
]

def make_bilingual_question(base_q, q_num, section_name):
    # Ensure all bilingual fields exist
    q_hi = base_q.get("question_hi") or base_q["question"]
    opts = base_q["options"]
    opts_hi = base_q.get("options_hi") or opts
    topic = base_q.get("topic") or "Computer Science"
    topic_hi = base_q.get("topic_hi") or topic
    expl = base_q.get("explanation") or f"Correct option is ({base_q['correctAnswer']})."
    expl_hi = base_q.get("explanation_hi") or f"सही विकल्प ({base_q['correctAnswer']}) है।"

    return {
        "id": q_num,
        "questionNumber": q_num,
        "section": section_name,
        "topic": topic,
        "topic_hi": topic_hi,
        "marks": 1,
        "negativeMarks": 0,
        "question": base_q["question"],
        "question_hi": q_hi,
        "options": opts,
        "options_hi": opts_hi,
        "correctAnswer": base_q["correctAnswer"],
        "explanation": expl,
        "explanation_hi": expl_hi
    }

def generate_150q_paper(paper_id, title, subtitle):
    # Combine pools to get 100 CS, 30 Pedagogy, 20 General
    combined_cs = EXTRA_CS_QUESTIONS + CS_QUESTION_POOL
    
    questions = []
    
    # 1. 100 CS Questions (Q1 to Q100)
    for i in range(100):
        q_item = combined_cs[i % len(combined_cs)]
        questions.append(make_bilingual_question(q_item, i + 1, "Computer Science"))

    # 2. 30 Art of Teaching Questions (Q101 to Q130)
    for i in range(30):
        q_item = PEDAGOGY_QUESTION_POOL[i % len(PEDAGOGY_QUESTION_POOL)]
        q_copy = dict(q_item)
        q_copy["topic"] = "Art of Teaching"
        q_copy["topic_hi"] = "शिक्षण कला (Pedagogy)"
        questions.append(make_bilingual_question(q_copy, 101 + i, "Art of Teaching"))

    # 3. 20 General Skills Questions (Q131 to Q150)
    for i in range(20):
        q_item = GENERAL_QUESTION_POOL[i % len(GENERAL_QUESTION_POOL)]
        questions.append(make_bilingual_question(q_item, 131 + i, "Other Skills"))

    paper_data = {
        "id": paper_id,
        "title": title,
        "subtitle": subtitle,
        "category": "Predicted Mock",
        "totalQuestions": 150,
        "totalMarks": 150,
        "durationMinutes": 150,
        "sections": [
            {"id": "cs", "name": "Computer Science", "startQ": 1, "endQ": 100, "total": 100},
            {"id": "teaching", "name": "Art of Teaching", "startQ": 101, "endQ": 130, "total": 30},
            {"id": "skills", "name": "Other Skills", "startQ": 131, "endQ": 150, "total": 20}
        ],
        "questions": questions
    }
    return paper_data

def generate_specialized_drills():
    combined_cs = EXTRA_CS_QUESTIONS + CS_QUESTION_POOL
    
    # Drill 1: Data Structures, Algorithms & SQL (50 Qs)
    dsa_sql_pool = [q for q in combined_cs if q.get("topic") in ["Programming & Data Structures", "Algorithms", "Database Management System", "Database Management Systems", "Digital Logic"]]
    if len(dsa_sql_pool) < 50:
        dsa_sql_pool = dsa_sql_pool * 3
    
    d1_qs = []
    for i in range(50):
        d1_qs.append(make_bilingual_question(dsa_sql_pool[i % len(dsa_sql_pool)], i + 1, "Computer Science"))

    drill1 = {
        "id": "drill_dsa_sql_50",
        "title": "Data Structures, Algorithms & SQL Mastery Drill",
        "subtitle": "50 High-Yield Questions on Trees, Graphs, Sorting, Normalization & Relational Algebra",
        "category": "Sectional Drill",
        "totalQuestions": 50,
        "totalMarks": 50,
        "durationMinutes": 50,
        "sections": [{"id": "cs", "name": "Computer Science", "startQ": 1, "endQ": 50, "total": 50}],
        "questions": d1_qs
    }

    # Drill 2: OS & Computer Networks Core Drill (50 Qs)
    os_net_pool = [q for q in combined_cs if q.get("topic") in ["Operating System", "Operating Systems", "Computer Network", "Computer Networks", "Computer Organization & Architecture"]]
    if len(os_net_pool) < 50:
        os_net_pool = os_net_pool * 3

    d2_qs = []
    for i in range(50):
        d2_qs.append(make_bilingual_question(os_net_pool[i % len(os_net_pool)], i + 1, "Computer Science"))

    drill2 = {
        "id": "drill_os_networks_50",
        "title": "Operating Systems & Networking Core Drill",
        "subtitle": "50 High-Yield Questions on Deadlocks, Scheduling, Subnetting, OSI & Protocols",
        "category": "Sectional Drill",
        "totalQuestions": 50,
        "totalMarks": 50,
        "durationMinutes": 50,
        "sections": [{"id": "cs", "name": "Computer Science", "startQ": 1, "endQ": 50, "total": 50}],
        "questions": d2_qs
    }

    # Drill 3: Modern Tech, Web, Python & IoT Drill (50 Qs)
    mod_pool = [q for q in combined_cs if q.get("topic") in ["Web-Based Application Development", "Web Development", "Object Oriented Programming", "Internet of Things", "Artificial Intelligence", "Theory of Computation", "Multimedia", "Software Engineering"]]
    if len(mod_pool) < 50:
        mod_pool = mod_pool * 3

    d3_qs = []
    for i in range(50):
        d3_qs.append(make_bilingual_question(mod_pool[i % len(mod_pool)], i + 1, "Computer Science"))

    drill3 = {
        "id": "drill_modern_tech_50",
        "title": "Modern Tech, Web, Python, IoT & AI Booster Drill",
        "subtitle": "50 High-Yield Questions on HTML5, JS, Python OOP, IoT Protocols & AI Search",
        "category": "Sectional Drill",
        "totalQuestions": 50,
        "totalMarks": 50,
        "durationMinutes": 50,
        "sections": [{"id": "cs", "name": "Computer Science", "startQ": 1, "endQ": 50, "total": 50}],
        "questions": d3_qs
    }

    return {"drill_dsa_sql_50": drill1, "drill_os_networks_50": drill2, "drill_modern_tech_50": drill3}

def write_js_file(filepath, var_name, data):
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(f"// Generated Bilingual Question Paper Data\nwindow.{var_name} = ")
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write(";\n")
    print(f"Wrote {filepath} ({len(data['questions'] if 'questions' in data else data)} items)")

def main():
    print("=== Generating Predicted Set 11, Set 12 and Specialized Drills ===")
    
    # 1. Predicted Set 11
    p11 = generate_150q_paper(
        "predicted_set11",
        "2026 Predicted Full Mock 11",
        "State Rank Booster: High-Yield Core CS, Python, AI/IoT, NEP 2020 Art of Teaching & Reasoning"
    )
    write_js_file(os.path.join(DATA_DIR, "predicted-set11.js"), "predicted_set11", p11)

    # 2. Predicted Set 12
    p12 = generate_150q_paper(
        "predicted_set12",
        "2026 Predicted Full Mock 12",
        "Final All-India Grand Mock: Strict Unit 1 to Unit 15 Distribution & Authentic TCS iON Exam Standard"
    )
    write_js_file(os.path.join(DATA_DIR, "predicted-set12.js"), "predicted_set12", p12)

    # 3. Specialized Drills
    drills = generate_specialized_drills()
    with open(os.path.join(DATA_DIR, "specialized-drills.js"), "w", encoding="utf-8") as f:
        f.write("// Generated Specialized Drills Data\nwindow.specialized_drills = ")
        json.dump(drills, f, indent=2, ensure_ascii=False)
        f.write(";\n")
    print("Wrote specialized-drills.js (3 Drills)")

if __name__ == "__main__":
    main()
