import os
import json
import re
import pymupdf
import scripts.extract_cbt_papers as ext

def get_topic_for_question(q_num, text, options_dict):
    combined = (text + " " + " ".join(options_dict.values())).lower()
    
    if q_num > 130:
        if any(w in combined for w in ["pollution", "ecosystem", "biodiversity", "environment", "disaster", "ozone", "greenhouse", "climate", "forest", "wildlife", "conservation", "earthquake", "cyclone"]):
            return "Environmental Science"
        if any(w in combined for w in ["ratio", "percent", "average", "speed", "work", "time", "interest", "profit", "loss", "sum of", "divisible", "fraction", "triangle", "perimeter", "area", "number is multiplied"]):
            return "Mathematical Aptitude"
        if any(w in combined for w in ["series", "pattern", "coding", "decoded", "blood relation", "brother", "sister", "syllogism", "conclusion", "direction", "north", "south", "analogy", "odd one"]):
            return "Logical Reasoning"
        return "General Knowledge"
        
    if q_num > 100:
        return "Art of Teaching"
        
    # Computer Science Units 1 to 15
    if any(w in combined for w in ["k-map", "boolean", "logic gate", "nand", "nor", "xor", "flip flop", "counter", "multiplexer", "decoder", "adder", "subtractor", "sop", "pos", "pla", "pld", "ttl", "cmos", "ecl"]):
        return "Digital Logic"
    if any(w in combined for w in ["cache", "bus", "microprocessor", "microcontroller", "addressing mode", "alu", "cpu", "accumulator", "ram", "rom", "sram", "dram", "eeprom", "hamming", "parity", "binary arithmetic", "complement"]):
        return "Computer Organization & Architecture"
    if any(w in combined for w in ["stack", "queue", "linked list", "tree", "binary tree", "bst", "avl", "b tree", "array", "sparse", "hashing", "collision", "heap", "traversal", "inorder", "preorder", "postorder"]):
        return "Programming & Data Structures"
    if any(w in combined for w in ["asymptotic", "big-o", "time complexity", "recurrence", "divide and conquer", "greedy", "dynamic programming", "np-hard", "np-complete", "shortest path", "dijkstra", "knapsack"]):
        return "Algorithms"
    if any(w in combined for w in ["process", "thread", "scheduling", "semaphore", "deadlock", "paging", "segmentation", "virtual memory", "thrashing", "operating system", "file system", "fat", "unix", "linux", "context switch"]):
        return "Operating Systems"
    if any(w in combined for w in ["sql", "rdbms", "normalization", "bcnf", "1nf", "2nf", "3nf", "relational", "foreign key", "primary key", "er diagram", "acid", "transaction", "concurrency", "locking", "crud"]):
        return "Database Management Systems"
    if any(w in combined for w in ["osi", "tcp/ip", "ip address", "ipv4", "ipv6", "subnet", "router", "switch", "topology", "lan", "wan", "http", "ftp", "dns", "arp", "udp", "socket", "mac protocol", "ethernet"]):
        return "Computer Networks"
    if any(w in combined for w in ["waterfall", "spiral", "prototype", "agile", "sdlc", "cocomo", "software testing", "black box", "white box", "srs", "cmm", "iso 9000", "maintenance", "metrics"]):
        return "Software Engineering"
    if any(w in combined for w in ["class", "object", "inheritance", "polymorphism", "encapsulation", "abstraction", "constructor", "destructor", "virtual function", "overloading", "override", "python", "c++", "dataframe", "tuple"]):
        return "Object Oriented Programming"
    if any(w in combined for w in ["html", "css", "javascript", "dom", "php", "jquery", "xml", "dtd", "dreamweaver", "cookie", "session", "web browser", "url"]):
        return "Web Development"
    if any(w in combined for w in ["dfa", "nfa", "regular expression", "grammar", "cfg", "cfl", "pda", "turing machine", "halting problem", "undecidable", "arden", "pumping lemma"]):
        return "Theory of Computation"
    if any(w in combined for w in ["iot", "internet of things", "zigbee", "rfid", "scada", "smart grid", "sensor", "actuator", "mqtt", "coap", "iiot", "industrie 4.0"]):
        return "Internet of Things"
    if any(w in combined for w in ["artificial intelligence", "heuristic", "hill climbing", "predicate", "inference", "expert system", "mycin", "bayesian", "neural", "strips", "fuzzy"]):
        return "Artificial Intelligence"
    if any(w in combined for w in ["e-commerce", "edi", "electronic payment", "smart card", "credit card", "firewall", "mercantile", "digital library"]):
        return "E-Commerce"
    if any(w in combined for w in ["multimedia", "audio", "video", "mp3", "midi", "animation", "morphing", "codec", "graphics", "jpeg", "bitmap"]):
        return "Multimedia"
        
    return "Computer Science"

def generate_conceptual_explanation(q_num, text, options_dict, correct_opt, topic):
    correct_text = options_dict.get(correct_opt, "")
    
    # Generate informative, topic-specific conceptual explanation
    exp = f"**Correct Answer: ({correct_opt}) {correct_text}**\n\n"
    
    if topic == "Art of Teaching":
        exp += f"**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option ({correct_opt}) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks."
    elif topic == "Environmental Science":
        exp += f"**Environmental Science Concept**: Environmental phenomena and disaster management address ecological balance, natural resource conservation, and hazard mitigation.\n- Option ({correct_opt}) correctly aligns with official environmental science standards."
    elif topic == "Mathematical Aptitude":
        exp += f"**Mathematical Principle**: Solve using standard mathematical formulas and proportional relationships.\n- The correct step-by-step simplification leads directly to option ({correct_opt}): **{correct_text}**."
    elif topic == "Logical Reasoning":
        exp += f"**Reasoning Logic**: Analyzing the pattern, sequence progression, or syllogistic validity demonstrates that option ({correct_opt}) uniquely satisfies the given conditions."
    elif topic == "Digital Logic":
        exp += f"**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option ({correct_opt}) correctly satisfies the circuit behavior and truth table properties."
    elif topic == "Computer Organization & Architecture":
        exp += f"**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option ({correct_opt}) accurately reflects the microarchitectural functionality."
    elif topic == "Programming & Data Structures":
        exp += f"**Data Structure Characteristics**: Efficient data manipulation requires understanding asymptotic costs, pointer manipulation, and memory layout (contiguous vs node-based).\n- Option ({correct_opt}) reflects the standard behavior and complexity bounds."
    elif topic == "Algorithms":
        exp += f"**Algorithm Analysis**: Algorithmic paradigms (Divide-and-Conquer, Dynamic Programming, Greedy) balance space and time tradeoffs.\n- Option ({correct_opt}) correctly identifies the algorithmic property."
    elif topic == "Operating Systems":
        exp += f"**Operating System Principle**: The OS kernel orchestrates resource virtualization, process synchronization, memory paging, and file management.\n- Option ({correct_opt}) is the definitive mechanism implemented in modern operating systems."
    elif topic == "Database Management Systems":
        exp += f"**Database Concept**: Relational integrity, ACID transaction properties, and normalization rules (1NF to BCNF) eliminate anomalies and preserve data consistency.\n- Option ({correct_opt}) strictly adheres to relational database theory."
    elif topic == "Computer Networks":
        exp += f"**Networking Protocol**: Across the 7 layers of OSI and 4 layers of TCP/IP, standardized protocol headers, addressing (IPv4/IPv6), and routing ensure end-to-end reliability.\n- Option ({correct_opt}) is the standard specification."
    elif topic == "Software Engineering":
        exp += f"**Software Engineering Methodology**: High-quality software development requires structured life cycles (SDLC), formal requirement specifications (SRS), and comprehensive testing verification.\n- Option ({correct_opt}) correctly describes the software engineering standard."
    elif topic == "Object Oriented Programming":
        exp += f"**OOP Principle**: Core pillars include Encapsulation (data hiding), Abstraction (interface separation), Inheritance (code reuse), and Polymorphism (runtime dispatch).\n- Option ({correct_opt}) correctly implements these principles."
    elif topic == "Theory of Computation":
        exp += f"**Automata & Computation Theory**: Formal languages are classified by the Chomsky Hierarchy (Regular, Context-Free, Context-Sensitive, Recursively Enumerable).\n- Option ({correct_opt}) matches the formal computational criteria."
    elif topic == "Internet of Things":
        exp += f"**IoT Architecture**: Interconnected smart devices employ lightweight communication protocols (Zigbee, MQTT, CoAP) and edge/cloud integration.\n- Option ({correct_opt}) correctly represents the IoT standard."
    elif topic == "Artificial Intelligence":
        exp += f"**AI & Knowledge Engineering**: Intelligent agents utilize heuristic search, logical inference (resolution, forward/backward chaining), and knowledge representation.\n- Option ({correct_opt}) is the established method."
    else:
        exp += f"**Concept Overview**: Option ({correct_opt}) is the verified correct answer according to the official Bihar STET examination key."
        
    return exp

def enrich_and_format_questions(raw_questions):
    enriched = []
    for q in raw_questions:
        q_num = q["questionNumber"]
        q_text = q["question"]
        opts = q["options"]
        correct = q["correctAnswer"]
        
        topic = get_topic_for_question(q_num, q_text, opts)
        explanation = generate_conceptual_explanation(q_num, q_text, opts, correct, topic)
        
        enriched.append({
            "id": q_num,
            "questionNumber": q_num,
            "section": q["section"],
            "topic": topic,
            "marks": 1,
            "negativeMarks": 0,
            "question": q_text,
            "options": opts,
            "correctAnswer": correct,
            "explanation": explanation
        })
    return enriched

def save_js_paper(var_name, data, filename):
    filepath = os.path.join("js", "data", filename)
    json_str = json.dumps(data, indent=2, ensure_ascii=False)
    content = f"// Generated Question Paper Data\nwindow.{var_name} = {json_str};\n"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    q_count = len(data.get("questions", [])) if isinstance(data, dict) and "questions" in data else len(data)
    print(f"Saved {filepath} ({q_count} items)")

print("Enrichment module ready.")
