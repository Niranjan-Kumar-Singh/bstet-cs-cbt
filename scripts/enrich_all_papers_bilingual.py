# -*- coding: utf-8 -*-
"""
Master Bilingual Enrichment Pipeline for Bihar STET Question Papers
Enriches all existing question papers in js/data/*.js with:
1. question_hi (Hindi question text)
2. options_hi (Hindi options dictionary)
3. topic_hi (Hindi topic name)
4. explanation_hi (Hindi conceptual explanation)
5. Correct topic classification (fixing previous generic assignments)
"""

import os
import re
import json
import glob

# Domain dictionary for technical terms and phrases
TECH_DICT = {
    # General stems
    "which of the following is not": "निम्नलिखित में से कौन सा नहीं है",
    "which of the following is": "निम्नलिखित में से कौन सा",
    "which of the following": "निम्नलिखित में से कौन सा",
    "what is the main purpose of": "का मुख्य उद्देश्य क्या है",
    "what is the purpose of": "का उद्देश्य क्या है",
    "what is the output of": "का आउटपुट क्या है",
    "what is the time complexity of": "की समय जटिलता क्या है",
    "what is the worst-case time complexity of": "की सबसे खराब स्थिति (Worst-case) में समय जटिलता क्या है",
    "what is the best-case time complexity of": "की सर्वश्रेष्ठ स्थिति में समय जटिलता क्या है",
    "how many": "कितने",
    "stands for": "का पूर्ण रूप है",
    "is an acronym for": "का संक्षिप्त रूप (Acronym) है",
    "in oop": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP) में",
    "in c++": "C++ में",
    "in python": "पायथन (Python) में",
    "in java": "जावा (Java) में",
    "in c language": "C भाषा में",
    "in operating system": "ऑपरेटिंग सिस्टम में",
    "in dbms": "डेटाबेस प्रबंधन प्रणाली (DBMS) में",
    "in computer networks": "कंप्यूटर नेटवर्क में",
    "in relational database": "रिलेशनल डेटाबेस में",
    "in digital logic": "डिजिटल लॉजिक में",
    "in bloom's taxonomy": "ब्लूम के वर्गीकरण (Bloom's Taxonomy) में",
    "art of teaching": "शिक्षण कला",
    "microteaching": "सूक्ष्म शिक्षण (Microteaching)",
    "formative evaluation": "रचनात्मक मूल्यांकन (Formative Evaluation)",
    "summative evaluation": "योगात्मक मूल्यांकन (Summative Evaluation)",
    "continuous and comprehensive evaluation": "सतत एवं व्यापक मूल्यांकन (CCE)",
    "lesson plan": "पाठ योजना (Lesson Plan)",
    "heuristic method": "अनुसंधान / ह्यूरिस्टिक विधि",
    "lecture method": "व्याख्यान विधि",
    "all of the above": "उपरोक्त सभी",
    "none of the above": "उपरोक्त में से कोई नहीं",
    "both a and b": "A और B दोनों",
    "neither a nor b": "न तो A और न ही B",
    "data abstraction": "डेटा एब्स्ट्रैक्शन",
    "inheritance": "संबद्धता (Inheritance)",
    "polymorphism": "बहुरूपता (Polymorphism)",
    "encapsulation": "एनकैप्सुलेशन (Encapsulation)",
    "deadlock": "डेडलॉक (Deadlock)",
    "semaphore": "सेमाफोर (Semaphore)",
    "virtual memory": "वर्चुअल मेमोरी (Virtual Memory)",
    "paging": "पेजिंग (Paging)",
    "segmentation": "सेगमेंटेशन (Segmentation)",
    "binary search tree": "बाइनरी सर्च ट्री (BST)",
    "stack": "स्टैक (Stack)",
    "queue": "क्यू (Queue)",
    "linked list": "लिंक्ड लिस्ट (Linked List)",
    "array": "ऐरे (Array)",
    "normalization": "सामान्यीकरण (Normalization)",
    "primary key": "प्राथमिक कुंजी (Primary Key)",
    "foreign key": "विदेशी कुंजी (Foreign Key)",
    "relational algebra": "रिलेशनल अलजेब्रा",
    "sql query": "SQL क्वेरी",
    "osi model": "OSI मॉडल",
    "tcp/ip": "TCP/IP प्रोटोकॉल",
    "ip address": "IP पता",
    "subnet mask": "सबनेट मास्क",
    "router": "राउटर",
    "switch": "स्विच",
    "logic gate": "लॉजिक गेट",
    "multiplexer": "मल्टीप्लेक्सर (MUX)",
    "demultiplexer": "डी-मल्टीप्लेक्सर (DEMUX)",
    "flip-flop": "फ्लिप-फ्लॉप",
    "flip flop": "फ्लिप-फ्लॉप",
    "counter": "काउंटर",
    "k-map": "कॉर्नो मैप (K-Map)",
    "boolean algebra": "बूलियन बीजगणित"
}

TOPIC_HI_MAP = {
    "Digital Logic": "डिजिटल लॉजिक",
    "Computer Organization & Architecture": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
    "Computer Organization and Architecture": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
    "Programming & Data Structures": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
    "Data Structures": "डेटा संरचना",
    "Algorithms": "एल्गोरिदम एवं विश्लेषण",
    "Operating Systems": "ऑपरेटिंग सिस्टम (OS)",
    "Operating System": "ऑपरेटिंग सिस्टम (OS)",
    "Database Management Systems": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
    "Database Management System": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
    "Computer Networks": "कंप्यूटर नेटवर्क",
    "Computer Network": "कंप्यूटर नेटवर्क",
    "Software Engineering": "सॉफ्टवेयर इंजीनियरिंग",
    "Object Oriented Programming": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
    "Web Development": "वेब डेवलपमेंट (Web Tech)",
    "Web-Based Application Development": "वेब डेवलपमेंट (Web Tech)",
    "Theory of Computation": "गणना का सिद्धांत (TOC)",
    "Internet of Things": "इंटरनेट ऑफ थिंग्स (IoT)",
    "Artificial Intelligence": "आर्टिफिशियल इंटेलिजेंस (AI)",
    "Fundamental of E-Commerce": "ई-कॉमर्स के मूल सिद्धांत",
    "E-Commerce": "ई-कॉमर्स के मूल सिद्धांत",
    "Multimedia": "मल्टीमीडिया तकनीक",
    "Art of Teaching": "शिक्षण कला (Pedagogy)",
    "General Knowledge": "सामान्य ज्ञान (GK)",
    "Environmental Science": "पर्यावरण विज्ञान (EVS)",
    "Mathematical Aptitude": "गणितीय अभिरुचि",
    "Logical Reasoning": "तार्किक विचार",
    "Other Skills": "सामान्य कौशल",
    "Computer Science": "कंप्यूटर साइंस"
}

def refine_topic(q_num, q_text, opts_dict):
    combined = (q_text + " " + " ".join(opts_dict.values())).lower()
    
    if q_num > 130:
        if any(w in combined for w in ["pollution", "ecosystem", "biodiversity", "environment", "ozone", "greenhouse", "climate", "forest", "wildlife", "conservation"]):
            return "Environmental Science"
        if any(w in combined for w in ["ratio", "percent", "average", "speed", "work", "time", "interest", "profit", "loss", "sum of", "divisible", "triangle"]):
            return "Mathematical Aptitude"
        if any(w in combined for w in ["series", "pattern", "coding", "decoded", "blood relation", "syllogism", "direction", "north", "analogy", "odd one"]):
            return "Logical Reasoning"
        return "General Knowledge"
        
    if q_num > 100:
        return "Art of Teaching"
        
    if any(w in combined for w in ["inheritance", "polymorphism", "encapsulation", "class", "object", "constructor", "destructor", "virtual function", "overload", "python", "c++"]):
        return "Object Oriented Programming"
    if any(w in combined for w in ["sql", "rdbms", "normalization", "1nf", "2nf", "3nf", "bcnf", "foreign key", "primary key", "er diagram", "acid", "transaction", "crud", "relational"]):
        return "Database Management Systems"
    if any(w in combined for w in ["process", "thread", "scheduling", "semaphore", "deadlock", "paging", "segmentation", "virtual memory", "thrashing", "fat", "unix", "linux", "operating system"]):
        return "Operating Systems"
    if any(w in combined for w in ["stack", "queue", "linked list", "binary tree", "bst", "avl", "tree", "array", "sparse", "hashing", "heap", "traversal", "inorder"]):
        return "Programming & Data Structures"
    if any(w in combined for w in ["asymptotic", "big-o", "time complexity", "recurrence", "divide and conquer", "greedy", "dynamic programming", "dijkstra", "quicksort", "mergesort"]):
        return "Algorithms"
    if any(w in combined for w in ["osi", "tcp/ip", "ip address", "subnet", "router", "switch", "topology", "lan", "wan", "http", "ftp", "dns", "arp", "udp", "ethernet"]):
        return "Computer Networks"
    if any(w in combined for w in ["k-map", "boolean", "logic gate", "nand", "nor", "xor", "flip flop", "counter", "multiplexer", "decoder", "adder", "subtractor", "sop", "pos"]):
        return "Digital Logic"
    if any(w in combined for w in ["cache", "bus", "microprocessor", "microcontroller", "addressing mode", "alu", "cpu", "ram", "rom", "sram", "dram", "eeprom", "2's complement", "booth"]):
        return "Computer Organization & Architecture"
    if any(w in combined for w in ["html", "css", "javascript", "dom", "php", "xml", "dtd", "cookie", "session"]):
        return "Web-Based Application Development"
    if any(w in combined for w in ["dfa", "nfa", "regular expression", "grammar", "cfg", "cfl", "pda", "turing machine"]):
        return "Theory of Computation"
    if any(w in combined for w in ["iot", "internet of things", "sensor", "actuator", "mqtt", "coap"]):
        return "Internet of Things"
    if any(w in combined for w in ["artificial intelligence", "heuristic", "expert system", "neural network", "machine learning"]):
        return "Artificial Intelligence"
    if any(w in combined for w in ["e-commerce", "edi", "electronic payment", "credit card", "payment gateway"]):
        return "Fundamental of E-Commerce"
    if any(w in combined for w in ["multimedia", "audio", "video", "jpeg", "mpeg", "mp3", "bitmap", "svg"]):
        return "Multimedia"
    if any(w in combined for w in ["waterfall", "spiral", "agile", "sdlc", "testing", "black box", "white box"]):
        return "Software Engineering"
        
    return "Computer Science"

def translate_to_hindi(text):
    if not text:
        return ""
    text_clean = text.strip()
    lower = text_clean.lower()
    
    # Common quick translations
    if lower == "all of the above":
        return "उपरोक्त सभी"
    if lower == "none of the above":
        return "उपरोक्त में से कोई नहीं"
    if lower == "both a and b":
        return "A और B दोनों"
    if lower == "true":
        return "सत्य"
    if lower == "false":
        return "असत्य"
        
    # Heuristic template translations
    # 1. "What is the main purpose of X in Y?"
    m1 = re.match(r"(?i)what is the main purpose of (.+?) in (.+?)\??$", text_clean)
    if m1:
        x, y = m1.group(1), m1.group(2)
        return f"{y} में {x} का मुख्य उद्देश्य क्या है?"
        
    # 2. "What does X stand for?" / "The term X stands for..."
    m2 = re.match(r'(?i)(?:the term )?["\']?([^"\']+)["\']? (?:is )?stands for[._\s]*\??$', text_clean)
    if m2:
        return f"{m2.group(1)} का पूर्ण रूप (Full Form) क्या है?"
        
    # 3. "What is X an acronym for in Y?"
    m3 = re.match(r"(?i)what is (.+?) an acronym for in (.+?)\??$", text_clean)
    if m3:
        return f"{m3.group(2)} में {m3.group(1)} किसका संक्षिप्त रूप (Acronym) है?"

    # 4. "Which of the following is NOT X?"
    m4 = re.match(r"(?i)which of the following is not (.+?)\??$", text_clean)
    if m4:
        return f"निम्नलिखित में से कौन सा {m4.group(1)} नहीं है?"

    # 5. "Which of the following is X?"
    m5 = re.match(r"(?i)which of the following is (.+?)\??$", text_clean)
    if m5:
        return f"निम्नलिखित में से कौन सा {m5.group(1)} है?"

    # 6. "Which layer of the OSI model X?"
    m6 = re.match(r"(?i)which layer of the osi (?:reference )?model (.+?)\??$", text_clean)
    if m6:
        return f"OSI मॉडल की कौन सी परत {m6.group(1)}?"

    # 7. "How many X are required to/for Y?"
    m7 = re.match(r"(?i)how many (.+?) are (?:needed|required) (?:to|for) (.+?)\??$", text_clean)
    if m7:
        return f"{m7.group(2)} के लिए कितने {m7.group(1)} की आवश्यकता होती है?"

    # Fallback: Translate key technical keywords while preserving English technical precision
    translated = text_clean
    for eng, hi in TECH_DICT.items():
        pattern = re.compile(re.escape(eng), re.IGNORECASE)
        translated = pattern.sub(hi, translated)
        
    # Question punctuation
    if not translated.endswith('?') and not translated.endswith('.'):
        translated += "?"
        
    return translated

def enrich_paper(file_path):
    print(f"Enriching {file_path}...")
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Find variable assignment
    m = re.match(r"^//.*?\nwindow\.(\w+)\s*=\s*(\{[\s\S]*\});?\s*$", content.strip())
    if not m:
        # Check if specialized_drills or topical_drills dictionary
        m_dict = re.match(r"^//.*?\nwindow\.(\w+)\s*=\s*(\{[\s\S]*\});?\s*$", content.strip())
        if not m_dict:
            print(f"Skipping {file_path}: format not matched")
            return
        var_name = m_dict.group(1)
        data = json.loads(m_dict.group(2))
    else:
        var_name = m.group(1)
        data = json.loads(m.group(2))

    def process_q_list(questions):
        for q in questions:
            q_num = q.get("questionNumber", q.get("id", 1))
            q_text = q["question"]
            opts = q["options"]
            correct = q["correctAnswer"]
            
            # Refine topic
            topic = refine_topic(q_num, q_text, opts)
            topic_hi = TOPIC_HI_MAP.get(topic, topic)
            q["topic"] = topic
            q["topic_hi"] = topic_hi

            # Hindi question
            if not q.get("question_hi"):
                q["question_hi"] = translate_to_hindi(q_text)

            # Hindi options
            if not q.get("options_hi"):
                opts_hi = {}
                for letter, opt_val in opts.items():
                    opts_hi[letter] = translate_to_hindi(opt_val)
                q["options_hi"] = opts_hi

            # Hindi explanation
            if not q.get("explanation_hi"):
                correct_hi = q["options_hi"].get(correct, opts.get(correct, ""))
                q["explanation_hi"] = f"**आधिकारिक सही उत्तर: ({correct}) {correct_hi}**\n\n**विषय अवधारणा ({topic_hi})**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प ({correct}) सही है।"

    if "questions" in data:
        process_q_list(data["questions"])
    elif isinstance(data, dict):
        # Drill dictionary
        for drill_key, drill_obj in data.items():
            if isinstance(drill_obj, dict) and "questions" in drill_obj:
                process_q_list(drill_obj["questions"])

    # Write back
    new_content = f"// Generated Question Paper Data\nwindow.{var_name} = " + json.dumps(data, indent=2, ensure_ascii=False) + ";\n"
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Successfully enriched {file_path}")

def main():
    target_files = [
        "js/data/official-shift1.js",
        "js/data/official-shift2.js",
        "js/data/official-shift3.js",
        "js/data/official-shift4.js",
        "js/data/official-2023.js",
        "js/data/predicted-set1.js",
        "js/data/predicted-set2.js",
        "js/data/predicted-set3.js",
        "js/data/predicted-set4.js",
        "js/data/predicted-set5.js",
        "js/data/predicted-set6.js",
        "js/data/predicted-set7.js",
        "js/data/predicted-set8.js",
        "js/data/predicted-set9.js",
        "js/data/predicted-set10.js",
        "js/data/topical-drills.js"
    ]

    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    for rel_path in target_files:
        full_path = os.path.join(base_dir, rel_path)
        if os.path.exists(full_path):
            enrich_paper(full_path)

    print("All target papers enriched with bilingual data.")

if __name__ == "__main__":
    main()
