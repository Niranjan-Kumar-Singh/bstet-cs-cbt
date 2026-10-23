// Generated Bilingual Question Paper Data
window.predicted_set12 = {
  "id": "predicted_set12",
  "title": "2026 Predicted Full Mock 12",
  "subtitle": "Final All-India Grand Mock: Strict Unit 1 to Unit 15 Distribution & Authentic TCS iON Exam Standard",
  "category": "Predicted Mock",
  "totalQuestions": 150,
  "totalMarks": 150,
  "durationMinutes": 150,
  "sections": [
    {
      "id": "cs",
      "name": "Computer Science",
      "startQ": 1,
      "endQ": 100,
      "total": 100
    },
    {
      "id": "teaching",
      "name": "Art of Teaching",
      "startQ": 101,
      "endQ": 130,
      "total": 30
    },
    {
      "id": "skills",
      "name": "Other Skills",
      "startQ": 131,
      "endQ": 150,
      "total": 20
    }
  ],
  "questions": [
    {
      "id": 1,
      "questionNumber": 1,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the 2's complement representation of decimal -13 in an 8-bit binary system?",
      "question_hi": "8-बिट बाइनरी प्रणाली में दशमलव -13 का 2's पूरक (2's complement) क्या होगा?",
      "options": {
        "A": "11110011",
        "B": "11110010",
        "C": "11110100",
        "D": "11111101"
      },
      "options_hi": {
        "A": "11110011",
        "B": "11110010",
        "C": "11110100",
        "D": "11111101"
      },
      "correctAnswer": "A",
      "explanation": "Binary of +13 = 00001101. 1's complement = 11110010. Adding 1 = 11110011.",
      "explanation_hi": "+13 का 8-बिट बाइनरी = 00001101. 1's कॉम्प्लीमेंट = 11110010. 1 जोड़ने पर = 11110011."
    },
    {
      "id": 2,
      "questionNumber": 2,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "How many 2-to-1 Multiplexers are needed to construct an 8-to-1 Multiplexer?",
      "question_hi": "एक 8-to-1 मल्टीप्लेक्सर (MUX) बनाने के लिए कितने 2-to-1 MUX की आवश्यकता होगी?",
      "options": {
        "A": "4",
        "B": "6",
        "C": "7",
        "D": "8"
      },
      "options_hi": {
        "A": "4",
        "B": "6",
        "C": "7",
        "D": "8"
      },
      "correctAnswer": "C",
      "explanation": "To build an 8:1 MUX: 4 in first stage, 2 in second, 1 in final stage = 4 + 2 + 1 = 7.",
      "explanation_hi": "8:1 MUX बनाने हेतु: प्रथम चरण में 4, द्वितीय में 2, तृतीय में 1 = कुल 7 MUX की आवश्यकता होगी।"
    },
    {
      "id": 3,
      "questionNumber": 3,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a JK flip-flop, the Race-Around condition occurs when:",
      "question_hi": "JK फ्लिप-फ्लॉप में 'रेस-अराउंड' (Race-Around) स्थिति कब उत्पन्न होती है?",
      "options": {
        "A": "J = 0, K = 0 and clock is high",
        "B": "J = 1, K = 1 and clock pulse width is greater than propagation delay",
        "C": "J = 1, K = 0 and clock is low",
        "D": "J = 0, K = 1 and propagation delay is zero"
      },
      "options_hi": {
        "A": "जे = 0, के = 0 और घड़ी उच्च है",
        "B": "J = 1, K = 1 और क्लॉक पल्स चौड़ाई प्रोपेगेशन डिले से अधिक हो",
        "C": "जे = 1, के = 0 और घड़ी कम है",
        "D": "जे = 0, के = 1 और प्रसार विलंब शून्य है"
      },
      "correctAnswer": "B",
      "explanation": "Race-around condition occurs when J=1, K=1 and clock pulse width exceeds flip-flop propagation delay.",
      "explanation_hi": "रेस-अराउंड स्थिति तब उत्पन्न होती है जब J=1, K=1 हो तथा क्लॉक पल्स की अवधि प्रोपेगेशन डिले से अधिक हो।"
    },
    {
      "id": 4,
      "questionNumber": 4,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which addressing mode specifies the operand directly within the instruction itself?",
      "question_hi": "कौन सा एड्रेसिंग मोड ऑपरेंड (मान) को सीधे निर्देश के अंदर ही निर्दिष्ट करता है?",
      "options": {
        "A": "Direct Addressing",
        "B": "Immediate Addressing",
        "C": "Register Indirect",
        "D": "Indexed Addressing"
      },
      "options_hi": {
        "A": "डायरेक्ट एड्रेसिंग",
        "B": "इमीडिएट एड्रेसिंग",
        "C": "रजिस्टर इनडायरेक्ट",
        "D": "इंडेक्स्ड एड्रेसिंग"
      },
      "correctAnswer": "B",
      "explanation": "In Immediate Addressing, the operand field contains the actual data value (e.g., MOV R1, #50).",
      "explanation_hi": "इमीडिएट एड्रेसिंग मोड में ऑपरेंड का वास्तविक मान सीधे निर्देश में ही लिखा होता है।"
    },
    {
      "id": 5,
      "questionNumber": 5,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "marks": 1,
      "negativeMarks": 0,
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
      "id": 6,
      "questionNumber": 6,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the minimum number of queues required to implement a Stack data structure?",
      "question_hi": "एक स्टैक (Stack) डेटा संरचना को लागू करने के लिए कम से कम कितने क्यू (Queue) चाहिए?",
      "options": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4"
      },
      "options_hi": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4"
      },
      "correctAnswer": "B",
      "explanation": "A minimum of 2 queues are required to simulate the LIFO behavior of a Stack.",
      "explanation_hi": "क्यू (FIFO) की मदद से स्टैक (LIFO) का अनुकरण करने हेतु न्यूनतम 2 क्यू आवश्यक हैं।"
    },
    {
      "id": 7,
      "questionNumber": 7,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which traversal of a Binary Search Tree (BST) produces keys in strictly ascending sorted order?",
      "question_hi": "बाइनरी सर्च ट्री (BST) का कौन सा ट्रैवर्सल मानों को हमेशा आरोही (सॉर्टेड) क्रम में देता है?",
      "options": {
        "A": "Preorder",
        "B": "Inorder",
        "C": "Postorder",
        "D": "Level-order"
      },
      "options_hi": {
        "A": "प्री-ऑर्डर",
        "B": "इन-ऑर्डर (Inorder)",
        "C": "पोस्ट-ऑर्डर",
        "D": "लेवल-ऑर्डर"
      },
      "correctAnswer": "B",
      "explanation": "Inorder traversal (Left, Root, Right) of a BST outputs elements in monotonically increasing sorted order.",
      "explanation_hi": "BST का इन-ऑर्डर ट्रैवर्सल (Left, Root, Right) हमेशा तत्वों को आरोही क्रम में छांटता है।"
    },
    {
      "id": 8,
      "questionNumber": 8,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम एवं विश्लेषण",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the worst-case time complexity of QuickSort?",
      "question_hi": "क्विकसॉर्ट (QuickSort) की सबसे खराब स्थिति (Worst-case) में समय जटिलता क्या होती है?",
      "options": {
        "A": "O(n log n)",
        "B": "O(n)",
        "C": "O(n²)",
        "D": "O(n³)"
      },
      "options_hi": {
        "A": "ओ(एन लॉग एन)",
        "B": "पर)",
        "C": "ओ(एन²)",
        "D": "ओ(एन³)"
      },
      "correctAnswer": "C",
      "explanation": "When the pivot chosen is consistently the smallest or largest element, QuickSort degrades to O(n²).",
      "explanation_hi": "जब पाइवोट सदैव सबसे छोटा या सबसे बड़ा तत्व चुना जाता है, तब क्विकसॉर्ट की जटिलता O(n²) हो जाती है।"
    },
    {
      "id": 9,
      "questionNumber": 9,
      "section": "Computer Science",
      "topic": "Operating System",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is NOT one of Coffman's four conditions for Deadlock?",
      "question_hi": "निम्नलिखित में से कौन सी डेडलॉक (Deadlock) की कॉफ़मैन की 4 अनिवार्य शर्तों में से नहीं है?",
      "options": {
        "A": "Mutual Exclusion",
        "B": "Hold and Wait",
        "C": "Preemption Allowed",
        "D": "Circular Wait"
      },
      "options_hi": {
        "A": "पारस्परिक बहिष्कार",
        "B": "होल्ड एंड वेट",
        "C": "प्रीएम्पशन की अनुमति",
        "D": "सर्कुलर वेट"
      },
      "correctAnswer": "C",
      "explanation": "The 4 conditions are Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait. Preemption Allowed prevents deadlock.",
      "explanation_hi": "डेडलॉक की चार शर्तें हैं: म्यूचुअल एक्सक्लूजन, होल्ड एंड वेट, नो प्रीएम्पशन, और सर्कुलर वेट। 'Preemption Allowed' से डेडलॉक टल जाता है।"
    },
    {
      "id": 10,
      "questionNumber": 10,
      "section": "Computer Science",
      "topic": "Database Management System",
      "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which SQL clause is used to filter groups created by the 'GROUP BY' clause?",
      "question_hi": "SQL में 'GROUP BY' क्लॉज द्वारा बनाए गए समूहों पर शर्त लगाने हेतु किसका उपयोग होता है?",
      "options": {
        "A": "WHERE",
        "B": "HAVING",
        "C": "ORDER BY",
        "D": "FILTER"
      },
      "options_hi": {
        "A": "कहाँ",
        "B": "होना",
        "C": "द्वारा आदेश",
        "D": "फ़िल्टर"
      },
      "correctAnswer": "B",
      "explanation": "HAVING filters aggregated groups formed by GROUP BY, while WHERE filters individual rows prior to grouping.",
      "explanation_hi": "WHERE व्यक्तिगत पंक्तियों को फ़िल्टर करता है जबकि HAVING क्लॉज GROUP BY के बाद समूहों को फ़िल्टर करता है।"
    },
    {
      "id": 11,
      "questionNumber": 11,
      "section": "Computer Science",
      "topic": "Computer Network",
      "topic_hi": "कंप्यूटर नेटवर्क",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which protocol resolves a known IP address to a physical hardware MAC address?",
      "question_hi": "ज्ञात IP पते को भौतिक हार्डवेयर MAC पते में बदलने के लिए किस प्रोटोकॉल का उपयोग होता है?",
      "options": {
        "A": "RARP",
        "B": "ARP (Address Resolution Protocol)",
        "C": "DHCP",
        "D": "ICMP"
      },
      "options_hi": {
        "A": "आरएआरपी",
        "B": "ARP (एड्रेस रेजोल्यूशन प्रोटोकॉल)",
        "C": "डीएचसीपी",
        "D": "आईसीएमपी"
      },
      "correctAnswer": "B",
      "explanation": "ARP maps an IPv4 address to a physical MAC address on a local Ethernet broadcast network.",
      "explanation_hi": "ARP प्रोटोकॉल स्थानीय नेटवर्क पर तार्किक IP पते को हार्डवेयर MAC पते में बदलता है।"
    },
    {
      "id": 12,
      "questionNumber": 12,
      "section": "Computer Science",
      "topic": "Software Engineering",
      "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which software testing technique examines internal logic, statements, and loop structures?",
      "question_hi": "कौन सी सॉफ्टवेयर टेस्टिंग तकनीक स्रोत कोड की आंतरिक लॉजिक, स्टेटमेंट और लूप की जांच करती है?",
      "options": {
        "A": "Black-Box Testing",
        "B": "White-Box Testing",
        "C": "Acceptance Testing",
        "D": "Beta Testing"
      },
      "options_hi": {
        "A": "ब्लैक-बॉक्स टेस्टिंग",
        "B": "व्हाइट-बॉक्स टेस्टिंग (White-Box)",
        "C": "स्वीकृति परीक्षण",
        "D": "बीटा टेस्टिंग"
      },
      "correctAnswer": "B",
      "explanation": "White-Box testing tests internal logic paths with complete knowledge of the internal source code.",
      "explanation_hi": "व्हाइट-बॉक्स टेस्टिंग में स्रोत कोड की आंतरिक कार्यप्रणाली और लॉजिक शाखाओं की जांच की जाती है।"
    },
    {
      "id": 13,
      "questionNumber": 13,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Python, which special method is invoked automatically when a new object instance is created?",
      "question_hi": "पायथन (Python) में नया ऑब्जेक्ट बनने पर स्वतः कौन सा मेथड निष्पादित होता है?",
      "options": {
        "A": "__new__()",
        "B": "__init__()",
        "C": "__create__()",
        "D": "__main__()"
      },
      "options_hi": {
        "A": "__नया__()",
        "B": "__इस में__()",
        "C": "__बनाएं__()",
        "D": "__main__()"
      },
      "correctAnswer": "B",
      "explanation": "The __init__() method is Python's constructor that initializes new instance attributes.",
      "explanation_hi": "पायथन में `__init__()` कंस्ट्रक्टर मेथड है जो नए ऑब्जेक्ट के गुणों को इनिशियलाइज़ करता है।"
    },
    {
      "id": 14,
      "questionNumber": 14,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब आधारित अनुप्रयोग विकास",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In JavaScript, which operator checks for BOTH value and data type equality without coercion?",
      "question_hi": "जावास्क्रिप्ट में कौन सा ऑपरेटर बिना टाइप कन्वर्ज़न के मान और डेटा प्रकार दोनों की समानता जांचता है?",
      "options": {
        "A": "==",
        "B": "===",
        "C": "!=",
        "D": "="
      },
      "options_hi": {
        "A": "==",
        "B": "===",
        "C": "!=",
        "D": "="
      },
      "correctAnswer": "B",
      "explanation": "The strict equality operator (===) checks both value and type without performing implicit type coercion.",
      "explanation_hi": "कड़ा समानता ऑपरेटर (===) बिना प्रकार बदले मान और डेटा टाइप दोनों की जांच करता है।"
    },
    {
      "id": 15,
      "questionNumber": 15,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "गणना का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which automaton recognizes Context-Free Languages (CFL)?",
      "question_hi": "कॉन्टेक्स्ट-फ्री भाषाओं (CFL) को पहचानने के लिए किस ऑटोमेटा का उपयोग होता है?",
      "options": {
        "A": "Deterministic Finite Automata",
        "B": "Pushdown Automata (PDA)",
        "C": "Linear Bounded Automata",
        "D": "Turing Machine only"
      },
      "options_hi": {
        "A": "नियतात्मक परिमित ऑटोमेटा",
        "B": "पुशडाउन ऑटोमेटा (PDA)",
        "C": "लीनियर बाउंडेड ऑटोमेटा",
        "D": "केवल ट्यूरिंग मशीन"
      },
      "correctAnswer": "B",
      "explanation": "Pushdown Automata (PDA), which have a single auxiliary stack memory, recognize Context-Free Languages.",
      "explanation_hi": "पुशडाउन ऑटोमेटा (PDA) अपनी स्टैक मेमोरी की सहायता से कॉन्टेक्स्ट-फ्री भाषाओं को पहचानता है।"
    },
    {
      "id": 16,
      "questionNumber": 16,
      "section": "Computer Science",
      "topic": "Internet of Things",
      "topic_hi": "इंटरनेट ऑफ थिंग्स (IoT)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which communication protocol is designed specifically for constrained IoT devices operating over UDP?",
      "question_hi": "UDP पर चलने वाले सीमित क्षमता वाले IoT उपकरणों हेतु कौन सा प्रोटोकॉल विकसित किया गया है?",
      "options": {
        "A": "HTTP",
        "B": "CoAP",
        "C": "SMTP",
        "D": "SSH"
      },
      "options_hi": {
        "A": "HTTP",
        "B": "CoAP (कंस्ट्रेंड एप्लीकेशन प्रोटोकॉल)",
        "C": "एसएमटीपी",
        "D": "SSH"
      },
      "correctAnswer": "B",
      "explanation": "CoAP (Constrained Application Protocol) provides a lightweight RESTful web transfer protocol over UDP for constrained IoT nodes.",
      "explanation_hi": "CoAP एक हल्का RESTful प्रोटोकॉल है जिसे IoT सेंसर्स के लिए UDP पर डिज़ाइन किया गया है।"
    },
    {
      "id": 17,
      "questionNumber": 17,
      "section": "Computer Science",
      "topic": "Artificial Intelligence",
      "topic_hi": "आर्टिफिशियल इंटेलिजेंस (AI)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which type of search algorithm always expands the lowest cost node where evaluation function f(n) = g(n) + h(n)?",
      "question_hi": "कौन सा सर्च एल्गोरिदम f(n) = g(n) + h(n) का उपयोग करके सबसे कम लागत वाले नोड का विस्तार करता है?",
      "options": {
        "A": "Greedy Best-First Search",
        "B": "A* Search",
        "C": "Depth First Search",
        "D": "Breadth First Search"
      },
      "options_hi": {
        "A": "लालची सर्वोत्तम-प्रथम खोज",
        "B": "ए* खोजें",
        "C": "गहराई-प्रथम खोज (DFS)",
        "D": "चौड़ाई-प्रथम खोज (BFS)"
      },
      "correctAnswer": "B",
      "explanation": "A* search combines g(n) (path cost from start) and h(n) (estimated heuristic cost to goal) for optimal search.",
      "explanation_hi": "A* सर्च वास्तविक लागत g(n) और अनुमानित लागत h(n) दोनों को जोड़कर सबसे अनुकूल रास्ता खोजता है।"
    },
    {
      "id": 18,
      "questionNumber": 18,
      "section": "Computer Science",
      "topic": "Fundamental of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which security protocol provides transport-layer encryption for secure online financial transactions?",
      "question_hi": "सुरक्षित ऑनलाइन वित्तीय लेनदेन के लिए ट्रांसपोर्ट-लेयर पर कौन सा एन्क्रिप्शन प्रोटोकॉल सुरक्षा देता है?",
      "options": {
        "A": "SSL / TLS",
        "B": "FTP",
        "C": "TELNET",
        "D": "TFTP"
      },
      "options_hi": {
        "A": "एसएसएल/टीएलएस",
        "B": "FTP",
        "C": "टेलनेट",
        "D": "टीएफटीपी"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS encrypts communication between the client web browser and server, establishing secure HTTPS sessions.",
      "explanation_hi": "SSL/TLS प्रोटोकॉल ब्राउज़र और सर्वर के बीच संचार को एन्क्रिप्ट करके सुरक्षित HTTPS सत्र प्रदान करता है।"
    },
    {
      "id": 19,
      "questionNumber": 19,
      "section": "Computer Science",
      "topic": "Multimedia",
      "topic_hi": "मल्टीमीडिया तकनीक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which vector graphic format is an open XML-based W3C standard that scales without quality loss?",
      "question_hi": "कौन सा वेक्टर ग्राफ़िक प्रारूप XML पर आधारित है और बिना गुणवत्ता खोए किसी भी आकार में ज़ूम हो सकता है?",
      "options": {
        "A": "BMP",
        "B": "SVG",
        "C": "GIF",
        "D": "TIFF"
      },
      "options_hi": {
        "A": "BMP",
        "B": "SVG (स्केलेबल वेक्टर ग्राफिक्स)",
        "C": "GIF",
        "D": "मनमुटाव"
      },
      "correctAnswer": "B",
      "explanation": "Scalable Vector Graphics (SVG) represents shapes and lines mathematically, allowing infinite resolution-independent scaling.",
      "explanation_hi": "SVG गणितीय रेखाओं और आकृतियों पर आधारित वेक्टर प्रारूप है जो ज़ूम करने पर भी अपनी स्पष्टता नहीं खोता।"
    },
    {
      "id": 20,
      "questionNumber": 20,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "Digital Logic",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the simplified expression for the Boolean function F(A, B, C) = Σm(1, 3, 5, 7) using Boolean algebra or K-Map?",
      "question_hi": "बूलियन बीजगणित या K-मैप का उपयोग करके बूलियन फ़ंक्शन F(A, B, C) = Σm(1, 3, 5, 7) के लिए सरलीकृत अभिव्यक्ति क्या है?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "C",
        "D": "A'B'"
      },
      "options_hi": {
        "A": "A",
        "B": "B",
        "C": "C",
        "D": "ए'बी'"
      },
      "correctAnswer": "C",
      "explanation": "Minterms 1 (001), 3 (011), 5 (101), 7 (111) group into a 4-cell quad in a 3-variable K-Map. In these terms, A and B both vary (0 and 1), while C is constant at 1. Hence, the minimized SOP term is C.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 21,
      "questionNumber": 21,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "Digital Logic",
      "marks": 1,
      "negativeMarks": 0,
      "question": "How many select lines are required for a 64-to-1 Multiplexer (MUX)?",
      "question_hi": "64-टू-1 मल्टीप्लेक्सर (एमयूएक्स) के लिए कितनी चुनिंदा लाइनें आवश्यक हैं?",
      "options": {
        "A": "4",
        "B": "5",
        "C": "6",
        "D": "8"
      },
      "options_hi": {
        "A": "4",
        "B": "5",
        "C": "6",
        "D": "8"
      },
      "correctAnswer": "C",
      "explanation": "For a 2ⁿ-to-1 multiplexer, exactly n select lines are required. Since 64 = 2⁶, n = 6 select lines are needed to address all 64 input lines.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 22,
      "questionNumber": 22,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "Digital Logic",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a J-K flip flop, what condition produces the 'Toggle' output mode?",
      "question_hi": "जे-के फ्लिप फ्लॉप में, कौन सी स्थिति 'टॉगल' आउटपुट मोड उत्पन्न करती है?",
      "options": {
        "A": "J = 0, K = 0",
        "B": "J = 0, K = 1",
        "C": "J = 1, K = 0",
        "D": "J = 1, K = 1"
      },
      "options_hi": {
        "A": "जे = 0, के = 0",
        "B": "जे = 0, के = 1",
        "C": "जे = 1, के = 0",
        "D": "जे = 1, के = 1"
      },
      "correctAnswer": "D",
      "explanation": "In a JK flip-flop: When J=0, K=0 -> No change (Memory); J=0, K=1 -> Reset (Q=0); J=1, K=0 -> Set (Q=1); J=1, K=1 -> Toggle (Q(t+1) = Q'(t)).",
      "explanation_hi": "सही विकल्प (D) है।"
    },
    {
      "id": 23,
      "questionNumber": 23,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "Digital Logic",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following logic families exhibits the highest switching speed and lowest propagation delay?",
      "question_hi": "निम्नलिखित में से कौन सा तर्क परिवार उच्चतम स्विचिंग गति और सबसे कम प्रसार विलंब प्रदर्शित करता है?",
      "options": {
        "A": "TTL (Transistor-Transistor Logic)",
        "B": "ECL (Emitter-Coupled Logic)",
        "C": "CMOS",
        "D": "NMOS"
      },
      "options_hi": {
        "A": "टीटीएल (ट्रांजिस्टर-ट्रांजिस्टर लॉजिक)",
        "B": "ईसीएल (एमिटर-युग्मित तर्क)",
        "C": "सीएमओएस",
        "D": "एनएमओएस"
      },
      "correctAnswer": "B",
      "explanation": "ECL (Emitter-Coupled Logic) operates its transistors in the non-saturated active region rather than saturation, eliminating storage time delay and achieving propagation delays below 1 nanosecond (fastest among conventional families).",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 24,
      "questionNumber": 24,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "Digital Logic",
      "marks": 1,
      "negativeMarks": 0,
      "question": "An 8-bit digital-to-analog converter (DAC) has a reference voltage of 5V. What is the approximate resolution (step size)?",
      "question_hi": "8-बिट डिजिटल-टू-एनालॉग कनवर्टर (डीएसी) का संदर्भ वोल्टेज 5V है। अनुमानित रिज़ॉल्यूशन (चरण आकार) क्या है?",
      "options": {
        "A": "19.5 mV",
        "B": "39.1 mV",
        "C": "9.8 mV",
        "D": "62.5 mV"
      },
      "options_hi": {
        "A": "19.5 एमवी",
        "B": "39.1 एमवी",
        "C": "9.8 एमवी",
        "D": "62.5 एमवी"
      },
      "correctAnswer": "A",
      "explanation": "Resolution = V_ref / (2ⁿ - 1) = 5V / (2⁸ - 1) = 5V / 255 ≈ 19.6 mV (or 5V / 256 ≈ 19.53 mV).",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 25,
      "questionNumber": 25,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "Digital Logic",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the canonical representation form that expresses a Boolean function as a product of sum terms called?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: What is the canonical representation form that expresses a Boolean function as a product of sum terms called के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "Minterm form",
        "B": "Maxterm / POS form",
        "C": "Dual form",
        "D": "Disjunctive Normal Form"
      },
      "options_hi": {
        "A": "मिन्टर्म फॉर्म",
        "B": "Maxterm / POS form",
        "C": "दोहरा रूप",
        "D": "विच्छेदनात्मक सामान्य रूप"
      },
      "correctAnswer": "B",
      "explanation": "Product of Sums (POS) expresses a logic function as the AND combination (product) of OR terms (sums/maxterms), denoted by ΠM.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 26,
      "questionNumber": 26,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "Digital Logic",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a programmable logic array (PLA), which gate arrays are programmable?",
      "question_hi": "प्रोग्रामयोग्य लॉजिक ऐरे (PLA) में, कौन से गेट ऐरे प्रोग्रामयोग्य हैं?",
      "options": {
        "A": "AND array is fixed, OR array is programmable",
        "B": "Both AND array and OR array are programmable",
        "C": "AND array is programmable, OR array is fixed",
        "D": "Neither array is programmable"
      },
      "options_hi": {
        "A": "और ऐरे निश्चित है, या ऐरे प्रोग्रामयोग्य है",
        "B": "AND ऐरे और OR ऐरे दोनों प्रोग्रामयोग्य हैं",
        "C": "और ऐरे प्रोग्रामयोग्य है, या ऐरे निश्चित है",
        "D": "कोई भी ऐरे प्रोग्राम करने योग्य नहीं है"
      },
      "correctAnswer": "B",
      "explanation": "In a PLA, BOTH the AND array and the OR array are programmable. (In a PAL, the AND array is programmable while the OR array is fixed; in a PROM, the AND array is fixed while the OR array is programmable).",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 27,
      "questionNumber": 27,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "Computer Organization & Architecture",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the maximum addressable memory capacity of a CPU with a 32-bit address bus and byte-addressable architecture?",
      "question_hi": "32-बिट एड्रेस बस और बाइट-एड्रेसेबल आर्किटेक्चर वाले सीपीयू की अधिकतम एड्रेसेबल मेमोरी क्षमता क्या है?",
      "options": {
        "A": "1 GB",
        "B": "2 GB",
        "C": "4 GB",
        "D": "8 GB"
      },
      "options_hi": {
        "A": "1 जीबी",
        "B": "2 जीबी",
        "C": "4 जीबी",
        "D": "8 जीबी"
      },
      "correctAnswer": "C",
      "explanation": "A 32-bit address bus can generate 2³² unique addresses. With byte addressability (1 byte per address), total addressable space = 2³² bytes = 4,294,967,296 bytes = 4 GB.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 28,
      "questionNumber": 28,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "Computer Organization & Architecture",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In 8086 microprocessor architecture, which register holds the offset address of the instruction to be fetched from the code segment?",
      "question_hi": "8086 माइक्रोप्रोसेसर आर्किटेक्चर में, कौन सा रजिस्टर कोड सेगमेंट से प्राप्त किए जाने वाले निर्देश का ऑफसेट पता रखता है?",
      "options": {
        "A": "Stack Pointer (SP)",
        "B": "Instruction Pointer (IP)",
        "C": "Base Pointer (BP)",
        "D": "Source Index (SI)"
      },
      "options_hi": {
        "A": "स्टैक पॉइंटर (एसपी)",
        "B": "निर्देश सूचक (आईपी)",
        "C": "बेस पॉइंटर (बीपी)",
        "D": "स्रोत सूचकांक (एसआई)"
      },
      "correctAnswer": "B",
      "explanation": "The Instruction Pointer (IP) holds the 16-bit offset of the next instruction within the Code Segment (CS). Physical address = (CS × 16) + IP.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 29,
      "questionNumber": 29,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "Computer Organization & Architecture",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which cache mapping technique allows a main memory block to be loaded into any available cache block line?",
      "question_hi": "कौन सी कैश मैपिंग तकनीक मुख्य मेमोरी ब्लॉक को किसी भी उपलब्ध कैश ब्लॉक लाइन में लोड करने की अनुमति देती है?",
      "options": {
        "A": "Direct Mapping",
        "B": "Fully Associative Mapping",
        "C": "Set-Associative Mapping",
        "D": "Sector Mapping"
      },
      "options_hi": {
        "A": "प्रत्यक्ष मानचित्रण",
        "B": "पूरी तरह से सहयोगी मानचित्रण",
        "C": "सेट-एसोसिएटिव मैपिंग",
        "D": "सेक्टर मैपिंग"
      },
      "correctAnswer": "B",
      "explanation": "In Fully Associative Mapping, a memory block can be placed in any cache line. It offers the lowest conflict miss rate but requires an associative (content-addressable) comparison across all cache tags.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 30,
      "questionNumber": 30,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "Computer Organization & Architecture",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Booth's multiplication algorithm, what action is performed when the two least significant multiplier bits (Q0, Q-1) are '10'?",
      "question_hi": "Booth's multiplication algorithm में, action is performed when the two least significant multiplier bits (Q0, Q-1) are '10' क्या है?",
      "options": {
        "A": "Add multiplicand to accumulator and shift",
        "B": "Subtract multiplicand from accumulator and arithmetic shift right",
        "C": "Arithmetic shift right only",
        "D": "Rotate accumulator left"
      },
      "options_hi": {
        "A": "संचायक में गुणक जोड़ें और शिफ्ट करें",
        "B": "संचायक से गुणक घटाएं और अंकगणित को दाईं ओर शिफ्ट करें",
        "C": "केवल अंकगणित सही बदलाव",
        "D": "संचायक को बाएँ घुमाएँ"
      },
      "correctAnswer": "B",
      "explanation": "In Booth's algorithm: '00' or '11' -> Shift right only; '01' -> Add multiplicand and shift right; '10' -> Subtract multiplicand (add 2's complement) and shift right.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 31,
      "questionNumber": 31,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "Computer Organization & Architecture",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is a non-volatile optical or semiconductor memory that can be erased electrically in flash blocks?",
      "question_hi": "निम्नलिखित में से कौन सी एक गैर-वाष्पशील ऑप्टिकल या अर्धचालक मेमोरी है जिसे फ्लैश ब्लॉक में विद्युत रूप से मिटाया जा सकता है?",
      "options": {
        "A": "SRAM",
        "B": "DRAM",
        "C": "EEPROM / Flash Memory",
        "D": "Mask ROM"
      },
      "options_hi": {
        "A": "एसआरएएम",
        "B": "घूंट",
        "C": "EEPROM / Flash Memory",
        "D": "मास्क रॉम"
      },
      "correctAnswer": "C",
      "explanation": "EEPROM (Electrically Erasable Programmable ROM) and Flash memory can be erased and reprogrammed electrically at the block or byte level without UV exposure.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 32,
      "questionNumber": 32,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "Computer Organization & Architecture",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Excess-3 code representation of the decimal digit 7?",
      "question_hi": "दशमलव अंक 7 का अतिरिक्त-3 कोड प्रतिनिधित्व क्या है?",
      "options": {
        "A": "0111",
        "B": "1010",
        "C": "1001",
        "D": "0100"
      },
      "options_hi": {
        "A": "0111",
        "B": "1010",
        "C": "1001",
        "D": "0100"
      },
      "correctAnswer": "B",
      "explanation": "Excess-3 code is obtained by adding 3 (0011) to the decimal value: 7 + 3 = 10, which in 4-bit binary is 1010.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 33,
      "questionNumber": 33,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "topic_hi": "Programming & Data Structures",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a row-major 2D array A[1..M, 1..N] stored starting at base address B with element size S, what is the address formula for element A[i, j]?",
      "question_hi": "पंक्ति-प्रमुख 2D सरणी A[1..M, 1..N] में तत्व आकार S के साथ आधार पता B से शुरू करके संग्रहीत किया जाता है, तत्व A[i, j] के लिए पता सूत्र क्या है?",
      "options": {
        "A": "B + [(i - 1) * N + (j - 1)] * S",
        "B": "B + [(j - 1) * M + (i - 1)] * S",
        "C": "B + [i * N + j] * S",
        "D": "B + [(i - 1) + (j - 1) * N] * S"
      },
      "options_hi": {
        "A": "बी + [(आई - 1) * एन + (जे - 1)] * एस",
        "B": "बी + [(जे - 1) * एम + (आई - 1)] * एस",
        "C": "बी + [आई * एन + जे] * एस",
        "D": "बी + [(आई - 1) + (जे - 1) * एन] * एस"
      },
      "correctAnswer": "A",
      "explanation": "In row-major order, rows are placed contiguously in memory. To reach row i, you skip (i - 1) complete rows of N elements each, and then move (j - 1) elements into row i. Hence: Address = Base + [((i - 1) * N) + (j - 1)] * S.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 34,
      "questionNumber": 34,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "topic_hi": "Programming & Data Structures",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the equivalent postfix expression for the infix expression: A + B * C - D / E?",
      "question_hi": "इनफ़िक्स अभिव्यक्ति के लिए समकक्ष पोस्टफ़िक्स अभिव्यक्ति क्या है: ए + बी * सी - डी / ई?",
      "options": {
        "A": "A B C * + D E / -",
        "B": "A B + C * D - E /",
        "C": "A B C * D E / - +",
        "D": "+ A * B C - / D E"
      },
      "options_hi": {
        "A": "ए बी सी * + डी ई / -",
        "B": "ए बी + सी * डी - ई /",
        "C": "ए बी सी * डी ई / - +",
        "D": "+ ए * बी सी - / डी ई"
      },
      "correctAnswer": "A",
      "explanation": "Operator precedence: * and / have higher precedence than + and -. 1. (B * C) -> B C *; 2. A + (B C *) -> A B C * +; 3. (D / E) -> D E /; 4. (A B C * +) - (D E /) -> A B C * + D E / -.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 35,
      "questionNumber": 35,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "topic_hi": "Programming & Data Structures",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the time complexity to search for a key in a balanced AVL tree with n nodes?",
      "question_hi": "n नोड्स वाले संतुलित AVL ट्री में कुंजी खोजने में समय की जटिलता क्या है?",
      "options": {
        "A": "O(1)",
        "B": "O(log n)",
        "C": "O(n)",
        "D": "O(n log n)"
      },
      "options_hi": {
        "A": "हे(1)",
        "B": "ओ(लॉग एन)",
        "C": "पर)",
        "D": "ओ(एन लॉग एन)"
      },
      "correctAnswer": "B",
      "explanation": "An AVL tree is strictly balanced with maximum height bounded by 1.44 log₂(n). Therefore, search, insertion, and deletion operations all take guaranteed O(log n) time.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 36,
      "questionNumber": 36,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "topic_hi": "Programming & Data Structures",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which data structure is fundamentally used for the Breadth-First Search (BFS) graph traversal algorithm?",
      "question_hi": "ब्रेडथ-फर्स्ट सर्च (बीएफएस) ग्राफ ट्रैवर्सल एल्गोरिदम के लिए मूल रूप से कौन सी डेटा संरचना का उपयोग किया जाता है?",
      "options": {
        "A": "Stack",
        "B": "Queue",
        "C": "Priority Queue",
        "D": "Binary Tree"
      },
      "options_hi": {
        "A": "स्टैक (Stack)",
        "B": "कतार (Queue)",
        "C": "प्राथमिकता कतार",
        "D": "बाइनरी ट्री"
      },
      "correctAnswer": "B",
      "explanation": "BFS visits vertices in order of their distance from the source level-by-level (FIFO), which is implemented using a Queue. (DFS uses a Stack).",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 37,
      "questionNumber": 37,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "topic_hi": "Programming & Data Structures",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the number of edges in a tree with n vertices?",
      "question_hi": "n शीर्षों वाले पेड़ में किनारों की संख्या कितनी होती है?",
      "options": {
        "A": "n",
        "B": "n - 1",
        "C": "n + 1",
        "D": "2n - 1"
      },
      "options_hi": {
        "A": "n",
        "B": "एन - 1",
        "C": "एन + 1",
        "D": "2एन - 1"
      },
      "correctAnswer": "B",
      "explanation": "By mathematical definition, any connected acyclic graph (tree) with n vertices contains exactly (n - 1) edges.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 38,
      "questionNumber": 38,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "topic_hi": "Programming & Data Structures",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a hash table of size 10 using open addressing with linear probing and hash function h(k) = k mod 10, where will key 42 be placed if keys 12, 22, and 32 are already inserted?",
      "question_hi": "लीनियर प्रोबिंग और हैश फ़ंक्शन h(k) = k mod 10 के साथ ओपन एड्रेसिंग का उपयोग करते हुए आकार 10 की हैश तालिका में, यदि कुंजी 12, 22 और 32 पहले से ही डाली गई हैं तो कुंजी 42 कहाँ रखी जाएगी?",
      "options": {
        "A": "Index 2",
        "B": "Index 3",
        "C": "Index 4",
        "D": "Index 5"
      },
      "options_hi": {
        "A": "सूचकांक 2",
        "B": "Index 3",
        "C": "सूचकांक 4",
        "D": "सूचकांक 5"
      },
      "correctAnswer": "D",
      "explanation": "h(12)=2 (stored at 2); h(22)=2 -> collision -> stored at 3; h(32)=2 -> collisions at 2, 3 -> stored at 4; h(42)=2 -> collisions at 2, 3, 4 -> stored at index 5.",
      "explanation_hi": "सही विकल्प (D) है।"
    },
    {
      "id": 39,
      "questionNumber": 39,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "Algorithms",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the solution of the recurrence relation T(n) = 2T(n/2) + n by Master Theorem?",
      "question_hi": "मास्टर प्रमेय द्वारा पुनरावृत्ति संबंध T(n) = 2T(n/2) + n का समाधान क्या है?",
      "options": {
        "A": "Θ(n)",
        "B": "Θ(n log n)",
        "C": "Θ(n²)",
        "D": "Θ(log n)"
      },
      "options_hi": {
        "A": "Θ(एन)",
        "B": "Θ(एन लॉग एन)",
        "C": "Θ(n²)",
        "D": "Θ(लॉग एन)"
      },
      "correctAnswer": "B",
      "explanation": "For T(n) = aT(n/b) + f(n): a = 2, b = 2, f(n) = n. Here n^(log_b(a)) = n^(log₂2) = n¹. Since f(n) = Θ(n^(log_b(a))), Case 2 of Master Theorem applies: T(n) = Θ(n log n) (Merge Sort recurrence).",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 40,
      "questionNumber": 40,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "Algorithms",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which algorithm finds the shortest path between all pairs of vertices in a weighted graph in O(V³) time?",
      "question_hi": "कौन सा एल्गोरिदम O(V³) समय में भारित ग्राफ़ में शीर्षों के सभी जोड़े के बीच सबसे छोटा रास्ता ढूंढता है?",
      "options": {
        "A": "Dijkstra's Algorithm",
        "B": "Bellman-Ford Algorithm",
        "C": "Floyd-Warshall Algorithm",
        "D": "Kruskal's Algorithm"
      },
      "options_hi": {
        "A": "डिज्क्स्ट्रा का एल्गोरिदम",
        "B": "Bellman-Ford Algorithm",
        "C": "Floyd-Warshall Algorithm",
        "D": "क्रुस्कल का एल्गोरिदम"
      },
      "correctAnswer": "C",
      "explanation": "The Floyd-Warshall algorithm uses dynamic programming to compute the all-pairs shortest paths in a directed weighted graph with time complexity Θ(V³).",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 41,
      "questionNumber": 41,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "Algorithms",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What algorithmic paradigm is employed in solving the 8-Queens problem?",
      "question_hi": "8-क्वींस समस्या को हल करने में कौन सा एल्गोरिथम प्रतिमान कार्यरत है?",
      "options": {
        "A": "Greedy Method",
        "B": "Backtracking",
        "C": "Dynamic Programming",
        "D": "Divide and Conquer"
      },
      "options_hi": {
        "A": "लालची तरीका",
        "B": "बैक ट्रैकिंग",
        "C": "डायनामिक प्रोग्रामिंग",
        "D": "फूट डालो और राज करो"
      },
      "correctAnswer": "B",
      "explanation": "The 8-Queens problem is solved using Backtracking: placing queens row by row and abandoning (backtracking from) non-viable partial solutions whenever a conflict arises.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 42,
      "questionNumber": 42,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "Algorithms",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following problems is known to be NP-Complete?",
      "question_hi": "निम्नलिखित में से कौन सी समस्या एनपी-कम्प्लीट के रूप में जानी जाती है?",
      "options": {
        "A": "Shortest Path in Directed Acyclic Graph",
        "B": "Minimum Spanning Tree",
        "C": "Traveling Salesperson Decision Problem",
        "D": "Breadth First Search"
      },
      "options_hi": {
        "A": "निर्देशित चक्रीय ग्राफ़ में सबसे छोटा पथ",
        "B": "न्यूनतम स्पैनिंग ट्री (MST)",
        "C": "यात्रा विक्रेता निर्णय समस्या",
        "D": "चौड़ाई-प्रथम खोज (BFS)"
      },
      "correctAnswer": "C",
      "explanation": "The Traveling Salesperson decision problem (TSP), Boolean Satisfiability (SAT), and Vertex Cover are classic NP-Complete problems.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 43,
      "questionNumber": 43,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "Operating Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the state transition that occurs when a running process requires an I/O operation?",
      "question_hi": "वह स्थिति परिवर्तन क्या है जो तब होता है जब किसी चालू प्रक्रिया के लिए I/O ऑपरेशन की आवश्यकता होती है?",
      "options": {
        "A": "Running to Ready",
        "B": "Running to Waiting (Blocked)",
        "C": "Waiting to Ready",
        "D": "Ready to Running"
      },
      "options_hi": {
        "A": "तैयार होने के लिए दौड़ना",
        "B": "प्रतीक्षा करने के लिए दौड़ना (अवरुद्ध)",
        "C": "तैयार होने की प्रतीक्षा में",
        "D": "दौड़ने के लिए तैयार"
      },
      "correctAnswer": "B",
      "explanation": "When a process requests an I/O operation or an event, the CPU cannot continue executing it until the I/O completes. The OS transitions the process from Running to Waiting (Blocked) state.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 44,
      "questionNumber": 44,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "Operating Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Banker's Algorithm is used in operating systems for:",
      "question_hi": "बैंकर का एल्गोरिदम (Banker's Algorithm) is used in ऑपरेटिंग सिस्टम (OS)s for:",
      "options": {
        "A": "Deadlock Prevention",
        "B": "Deadlock Avoidance",
        "C": "Deadlock Recovery",
        "D": "Mutual Exclusion"
      },
      "options_hi": {
        "A": "डेडलॉक रोकथाम",
        "B": "गतिरोध से बचाव",
        "C": "गतिरोध पुनर्प्राप्ति",
        "D": "पारस्परिक बहिष्कार"
      },
      "correctAnswer": "B",
      "explanation": "Dijkstra's Banker's Algorithm dynamically tests resource allocation requests to ensure the system will always remain in a 'Safe State', avoiding deadlocks.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 45,
      "questionNumber": 45,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "Operating Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In paging memory management, where is the Translation Lookaside Buffer (TLB) located?",
      "question_hi": "पेजिंग मेमोरी प्रबंधन में, ट्रांसलेशन लुकसाइड बफ़र (टीएलबी) कहाँ स्थित है?",
      "options": {
        "A": "On the hard disk",
        "B": "In main memory RAM",
        "C": "Inside the CPU Memory Management Unit (MMU) hardware cache",
        "D": "In secondary optical storage"
      },
      "options_hi": {
        "A": "हार्ड डिस्क पर",
        "B": "मुख्य मेमोरी में RAM",
        "C": "सीपीयू मेमोरी मैनेजमेंट यूनिट (एमएमयू) हार्डवेयर कैश के अंदर",
        "D": "सेकेंडरी ऑप्टिकल स्टोरेज में"
      },
      "correctAnswer": "C",
      "explanation": "The TLB is a high-speed associative hardware cache located directly within or adjacent to the CPU's MMU to store recent virtual-to-physical page table translations.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 46,
      "questionNumber": 46,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "Operating Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the phenomenon where adding more page frames to a process increases the number of page faults called?",
      "question_hi": "What is the phenomenon where adding more page frames to a process बढ़ता है (Increases) the number of पेज फॉल्ट (Page Fault)s called?",
      "options": {
        "A": "Thrashing",
        "B": "Belady's Anomaly",
        "C": "Fragmentation",
        "D": "Starvation"
      },
      "options_hi": {
        "A": "थ्रैशिंग (Thrashing)",
        "B": "बेलाडी की विसंगति",
        "C": "विखंडन",
        "D": "भुखमरी"
      },
      "correctAnswer": "B",
      "explanation": "Belady's Anomaly occurs primarily in FIFO page replacement, where increasing the number of allocated physical frames leads to an increased number of page faults for certain reference strings.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 47,
      "questionNumber": 47,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "Operating Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which Unix command is used to change the access permissions of a file?",
      "question_hi": "किसी फ़ाइल की एक्सेस अनुमतियों को बदलने के लिए किस यूनिक्स कमांड का उपयोग किया जाता है?",
      "options": {
        "A": "chown",
        "B": "chmod",
        "C": "chgrp",
        "D": "grep"
      },
      "options_hi": {
        "A": "चाउन",
        "B": "चामोद",
        "C": "सीएचजीआरपी",
        "D": "ग्रेप"
      },
      "correctAnswer": "B",
      "explanation": "'chmod' (change mode) modifies the read, write, and execute permissions of files/directories in Unix/Linux. ('chown' changes file owner).",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 48,
      "questionNumber": 48,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "Database Management Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In relational database design, Boy-Codd Normal Form (BCNF) requires that for every non-trivial functional dependency X -> Y:",
      "question_hi": "रिलेशनल डेटाबेस डिज़ाइन में, बॉय-कॉड नॉर्मल फॉर्म (बीसीएनएफ) के लिए आवश्यक है कि प्रत्येक गैर-तुच्छ कार्यात्मक निर्भरता X -> Y के लिए:",
      "options": {
        "A": "Y must be a prime attribute",
        "B": "X must be a Super Key",
        "C": "X and Y must be atomic",
        "D": "Y must not depend on X"
      },
      "options_hi": {
        "A": "Y एक प्रमुख गुण होना चाहिए",
        "B": "X एक सुपर कुंजी होनी चाहिए",
        "C": "X और Y परमाणु होने चाहिए",
        "D": "Y को X पर निर्भर नहीं रहना चाहिए"
      },
      "correctAnswer": "B",
      "explanation": "BCNF is a stricter version of 3NF. It requires that for every non-trivial functional dependency X -> Y, the determinant X must be a Super Key of the relation.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 49,
      "questionNumber": 49,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "Database Management Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which SQL command belongs to the Data Control Language (DCL) category?",
      "question_hi": "Which SQL command belongs to the डेटा नियंत्रण भाषा (DCL) (DCL) category?",
      "options": {
        "A": "SELECT",
        "B": "GRANT",
        "C": "ALTER",
        "D": "UPDATE"
      },
      "options_hi": {
        "A": "चुनना",
        "B": "अनुदान",
        "C": "ALTER",
        "D": "UPDATE"
      },
      "correctAnswer": "B",
      "explanation": "DCL commands control privileges and access in the database. GRANT (gives user access) and REVOKE (withdraws access) are the primary DCL commands.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 50,
      "questionNumber": 50,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "Database Management Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In the Two-Phase Locking (2PL) protocol, what happens during the 'Growing Phase'?",
      "question_hi": "दो-चरण लॉकिंग (2PL) प्रोटोकॉल में, 'बढ़ते चरण' के दौरान क्या होता है?",
      "options": {
        "A": "Locks are acquired and no locks can be released",
        "B": "Locks are released and no locks can be acquired",
        "C": "Transactions are committed",
        "D": "Data items are deleted"
      },
      "options_hi": {
        "A": "ताले अधिगृहीत हैं और कोई भी ताला जारी नहीं किया जा सकता",
        "B": "ताले जारी कर दिए जाते हैं और कोई ताले हासिल नहीं किए जा सकते",
        "C": "लेनदेन प्रतिबद्ध हैं",
        "D": "डेटा आइटम हटा दिए गए हैं"
      },
      "correctAnswer": "A",
      "explanation": "Under 2PL: Phase 1 (Growing Phase): A transaction may acquire locks, but cannot release any lock. Phase 2 (Shrinking Phase): A transaction may release locks, but cannot acquire any new locks.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 51,
      "questionNumber": 51,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "Database Management Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary purpose of the Foreign Key in a relational table?",
      "question_hi": "संबंधपरक तालिका में विदेशी कुंजी का प्राथमिक उद्देश्य क्या है?",
      "options": {
        "A": "To ensure unique values in the current table",
        "B": "To establish referential integrity between two related tables",
        "C": "To prevent NULL values in a column",
        "D": "To speed up query sort orders"
      },
      "options_hi": {
        "A": "वर्तमान तालिका में अद्वितीय मान सुनिश्चित करने के लिए",
        "B": "दो संबंधित तालिकाओं के बीच संदर्भात्मक अखंडता स्थापित करना",
        "C": "किसी कॉलम में NULL मानों को रोकने के लिए",
        "D": "क्वेरी सॉर्ट ऑर्डर को तेज़ करने के लिए"
      },
      "correctAnswer": "B",
      "explanation": "A Foreign Key points to the Primary Key of another table, ensuring Referential Integrity by restricting insertions or deletions that would create orphan records.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 52,
      "questionNumber": 52,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "Computer Networks",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the maximum theoretical throughput efficiency of Pure ALOHA?",
      "question_hi": "शुद्ध ALOHA की अधिकतम सैद्धांतिक थ्रूपुट दक्षता क्या है?",
      "options": {
        "A": "18.4%",
        "B": "36.8%",
        "C": "50%",
        "D": "100%"
      },
      "options_hi": {
        "A": "18.4%",
        "B": "36.8%",
        "C": "50%",
        "D": "100%"
      },
      "correctAnswer": "A",
      "explanation": "Pure ALOHA maximum efficiency = 1 / (2e) ≈ 18.4% (at G = 0.5). Slotted ALOHA doubles this efficiency to 1 / e ≈ 36.8% (at G = 1.0).",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 53,
      "questionNumber": 53,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "Computer Networks",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the CIDR prefix for a subnet with a subnet mask of 255.255.255.192?",
      "question_hi": "255.255.255.192 के सबनेट मास्क वाले सबनेट के लिए सीआईडीआर उपसर्ग क्या है?",
      "options": {
        "A": "/24",
        "B": "/25",
        "C": "/26",
        "D": "/27"
      },
      "options_hi": {
        "A": "/24",
        "B": "/25",
        "C": "/26",
        "D": "/27"
      },
      "correctAnswer": "C",
      "explanation": "255.255.255.192 in binary: 8 + 8 + 8 + 2 (11000000) = 26 contiguous network bits. Hence the CIDR prefix notation is /26.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 54,
      "questionNumber": 54,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "Computer Networks",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which layer of the OSI reference model performs data encryption, decryption, compression, and character encoding conversions?",
      "question_hi": "OSI संदर्भ मॉडल की कौन सी परत डेटा एन्क्रिप्शन, डिक्रिप्शन, संपीड़न और कैरेक्टर एन्कोडिंग रूपांतरण करती है?",
      "options": {
        "A": "Application Layer",
        "B": "Presentation Layer",
        "C": "Session Layer",
        "D": "Data Link Layer"
      },
      "options_hi": {
        "A": "अनुप्रयोग परत (Application Layer)",
        "B": "प्रस्तुति परत (Presentation Layer)",
        "C": "सत्र परत (Session Layer)",
        "D": "डेटा लिंक परत"
      },
      "correctAnswer": "B",
      "explanation": "The Presentation Layer (Layer 6) formats and translates data syntax and semantics, handling encryption/decryption (SSL/TLS) and compression.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 55,
      "questionNumber": 55,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "Computer Networks",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is a Distance Vector routing protocol that uses hop count as its sole metric with a maximum limit of 15 hops?",
      "question_hi": "निम्नलिखित में से कौन सा एक डिस्टेंस वेक्टर रूटिंग प्रोटोकॉल है जो 15 हॉप्स की अधिकतम सीमा के साथ हॉप काउंट को अपने एकमात्र मीट्रिक के रूप में उपयोग करता है?",
      "options": {
        "A": "OSPF",
        "B": "RIP (Routing Information Protocol)",
        "C": "BGP",
        "D": "IS-IS"
      },
      "options_hi": {
        "A": "ओएसपीएफ",
        "B": "आरआईपी (रूटिंग सूचना प्रोटोकॉल)",
        "C": "BGP",
        "D": "आईएस-आईएस"
      },
      "correctAnswer": "B",
      "explanation": "RIP is an interior gateway distance-vector protocol using hop count (1 to 15 hops; 16 signifies unreachable infinity) to prevent routing loops.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 56,
      "questionNumber": 56,
      "section": "Computer Science",
      "topic": "Software Engineering",
      "topic_hi": "Software Engineering",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In software metrics, what does 'Function Point' (FP) primarily measure?",
      "question_hi": "सॉफ़्टवेयर मेट्रिक्स में, 'फ़ंक्शन पॉइंट' (एफपी) मुख्य रूप से क्या मापता है?",
      "options": {
        "A": "The physical lines of code compiled",
        "B": "The functional size and complexity of software from the user's perspective",
        "C": "The execution speed of the program in nanoseconds",
        "D": "The salary costs of programmers"
      },
      "options_hi": {
        "A": "कोड की भौतिक पंक्तियाँ संकलित",
        "B": "उपयोगकर्ता के दृष्टिकोण से सॉफ़्टवेयर का कार्यात्मक आकार और जटिलता",
        "C": "प्रोग्राम की निष्पादन गति नैनोसेकंड में",
        "D": "प्रोग्रामर की वेतन लागत"
      },
      "correctAnswer": "B",
      "explanation": "Albrecht's Function Point (FP) metric quantifies software functionality based on 5 components: External Inputs, External Outputs, External Inquiries, Internal Logical Files, and External Interface Files.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 57,
      "questionNumber": 57,
      "section": "Computer Science",
      "topic": "Software Engineering",
      "topic_hi": "Software Engineering",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which level of coupling is considered the MOST desirable (weakest/cleanest) in structured software design?",
      "question_hi": "संरचित सॉफ़्टवेयर डिज़ाइन में युग्मन के किस स्तर को सर्वाधिक वांछनीय (सबसे कमज़ोर/सबसे साफ़) माना जाता है?",
      "options": {
        "A": "Content Coupling",
        "B": "Common Coupling",
        "C": "Control Coupling",
        "D": "Data Coupling"
      },
      "options_hi": {
        "A": "सामग्री युग्मन",
        "B": "सामान्य युग्मन",
        "C": "युग्मन को नियंत्रित करें",
        "D": "डेटा युग्मन"
      },
      "correctAnswer": "D",
      "explanation": "Good software engineering strives for Low Coupling and High Cohesion. Data Coupling (modules share only simple data parameters) is the cleanest, least dependent coupling.",
      "explanation_hi": "सही विकल्प (D) है।"
    },
    {
      "id": 58,
      "questionNumber": 58,
      "section": "Computer Science",
      "topic": "Software Engineering",
      "topic_hi": "Software Engineering",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What type of testing tests whether recent code changes have caused unintended side effects in existing functionality?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: What type of testing tests whether recent code changes have caused unintended side effects in existing functionality के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "Unit Testing",
        "B": "Regression Testing",
        "C": "Alpha Testing",
        "D": "Stress Testing"
      },
      "options_hi": {
        "A": "इकाई परीक्षण",
        "B": "Regression Testing",
        "C": "अल्फ़ा परीक्षण",
        "D": "तनाव परीक्षण"
      },
      "correctAnswer": "B",
      "explanation": "Regression testing reruns existing test suites after bug fixes or modifications to confirm that unchanged features continue to function properly.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 59,
      "questionNumber": 59,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "Object Oriented Programming",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In C++, which keyword is used to resolve the 'Diamond Problem' of duplicate base class instances in multiple inheritance?",
      "question_hi": "C++ में, मल्टीपल इनहेरिटेंस में डुप्लिकेट बेस क्लास इंस्टेंसेस की 'डायमंड प्रॉब्लम' को हल करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
      "options": {
        "A": "abstract",
        "B": "friend",
        "C": "virtual",
        "D": "static"
      },
      "options_hi": {
        "A": "अमूर्त",
        "B": "दोस्त",
        "C": "आभासी",
        "D": "स्थिर"
      },
      "correctAnswer": "C",
      "explanation": "Declaring the intermediate base classes with 'virtual' inheritance (e.g., class B : virtual public A) ensures only one shared instance of class A is included in derived class D.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 60,
      "questionNumber": 60,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "Object Oriented Programming",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the output of the Python expression: [x**2 for x in range(5) if x % 2 == 0]?",
      "question_hi": "पायथन एक्सप्रेशन का आउटपुट क्या है: [x**2 for x in रेंज(5) if x % 2 == 0]?",
      "options": {
        "A": "[0, 1, 4, 9, 16]",
        "B": "[0, 4, 16]",
        "C": "[1, 9]",
        "D": "[4, 16]"
      },
      "options_hi": {
        "A": "[0, 1, 4, 9, 16]",
        "B": "[0, 4, 16]",
        "C": "[1, 9]",
        "D": "[4, 16]"
      },
      "correctAnswer": "B",
      "explanation": "range(5) produces 0, 1, 2, 3, 4. The filter 'x % 2 == 0' selects 0, 2, 4. The squares are 0²=0, 2²=4, 4²=16. The result is [0, 4, 16].",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 61,
      "questionNumber": 61,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "Object Oriented Programming",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following members cannot be inherited by a derived class in C++?",
      "question_hi": "निम्नलिखित में से कौन सा सदस्य C++ में व्युत्पन्न वर्ग द्वारा विरासत में नहीं लिया जा सकता है?",
      "options": {
        "A": "Protected variables",
        "B": "Public methods",
        "C": "Constructors and Destructors",
        "D": "Virtual functions"
      },
      "options_hi": {
        "A": "संरक्षित चर",
        "B": "सार्वजनिक तरीके",
        "C": "निर्माता और विध्वंसक",
        "D": "आभासी कार्य"
      },
      "correctAnswer": "C",
      "explanation": "Constructors and Destructors are specific to the class they create and destroy; they are not inherited by derived classes, though base constructors are called during derived object initialization.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 62,
      "questionNumber": 62,
      "section": "Computer Science",
      "topic": "Web Development",
      "topic_hi": "Web Development",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In CSS, what is the default value of the 'position' property of HTML elements?",
      "question_hi": "CSS में, is the default value of the 'position' property of HTML elements क्या है?",
      "options": {
        "A": "relative",
        "B": "absolute",
        "C": "static",
        "D": "fixed"
      },
      "options_hi": {
        "A": "रिश्तेदार",
        "B": "निरपेक्ष",
        "C": "स्थिर",
        "D": "तय"
      },
      "correctAnswer": "C",
      "explanation": "The default value of 'position' is 'static'. Static elements flow naturally in the normal document flow and ignore top, right, bottom, and left properties.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 63,
      "questionNumber": 63,
      "section": "Computer Science",
      "topic": "Web Development",
      "topic_hi": "Web Development",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which PHP function is used to establish a connection to a MySQL database?",
      "question_hi": "MySQL डेटाबेस से कनेक्शन स्थापित करने के लिए किस PHP फ़ंक्शन का उपयोग किया जाता है?",
      "options": {
        "A": "mysql_open()",
        "B": "mysqli_connect()",
        "C": "db_connect()",
        "D": "sql_link()"
      },
      "options_hi": {
        "A": "mysql_open()",
        "B": "mysqli_connect()",
        "C": "db_कनेक्ट()",
        "D": "sql_link()"
      },
      "correctAnswer": "B",
      "explanation": "mysqli_connect(host, user, password, dbname) is standard PHP function used to open a connection to a MySQL database server.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 64,
      "questionNumber": 64,
      "section": "Computer Science",
      "topic": "Web Development",
      "topic_hi": "Web Development",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In XML, an XML document that conforms strictly to its associated DTD or XML Schema is said to be:",
      "question_hi": "XML में, एक XML दस्तावेज़ जो अपने संबंधित DTD या XML स्कीमा के अनुरूप होता है, उसे कहा जाता है:",
      "options": {
        "A": "Well-Formed",
        "B": "Valid",
        "C": "Normalized",
        "D": "Parsed"
      },
      "options_hi": {
        "A": "सुडौल",
        "B": "वैध",
        "C": "सामान्यीकृत",
        "D": "Parsed"
      },
      "correctAnswer": "B",
      "explanation": "An XML document with correct syntax is 'Well-Formed'. If it additionally conforms to the rules, elements, and attributes specified in its DTD or Schema, it is 'Valid'.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 65,
      "questionNumber": 65,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "Theory of Computation",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the language recognized by a Deterministic Finite Automaton (DFA) that accepts strings over {0, 1} ending with '00'?",
      "question_hi": "नियतात्मक परिमित ऑटोमेटन (डीएफए) द्वारा मान्यता प्राप्त भाषा क्या है जो '00' के साथ समाप्त होने वाले {0, 1} से अधिक स्ट्रिंग को स्वीकार करती है?",
      "options": {
        "A": "Context Free Language",
        "B": "Regular Language",
        "C": "Recursively Enumerable only",
        "D": "Non-computable Language"
      },
      "options_hi": {
        "A": "प्रसंग मुक्त भाषा",
        "B": "नियमित भाषा",
        "C": "केवल पुनरावर्ती रूप से गणना योग्य",
        "D": "गैर संगणनीय भाषा"
      },
      "correctAnswer": "B",
      "explanation": "Any language that can be recognized by a Finite Automaton (DFA or NFA) is by definition a Regular Language, represented by regular expression (0 + 1)*00.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 66,
      "questionNumber": 66,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "Theory of Computation",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Arden's Theorem states that if P and Q are regular expressions over Σ and P does not contain ε, then the equation R = Q + RP has a unique solution given by:",
      "question_hi": "आर्डेन के प्रमेय में कहा गया है कि यदि P और Q Σ पर नियमित अभिव्यक्ति हैं और P में ε नहीं है, तो समीकरण R = Q + RP का एक अद्वितीय समाधान है:",
      "options": {
        "A": "R = Q*P",
        "B": "R = QP*",
        "C": "R = P*Q*",
        "D": "R = Q+P*"
      },
      "options_hi": {
        "A": "आर = क्यू*पी",
        "B": "आर = क्यूपी*",
        "C": "आर = पी*क्यू*",
        "D": "आर = क्यू+पी*"
      },
      "correctAnswer": "B",
      "explanation": "Arden's Theorem specifies: R = Q + RP has the unique solution R = QP*.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 67,
      "questionNumber": 67,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "Theory of Computation",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following grammars is in Chomsky Normal Form (CNF)?",
      "question_hi": "निम्नलिखित में से कौन सा व्याकरण चॉम्स्की नॉर्मल फॉर्म (CNF) में है?",
      "options": {
        "A": "S -> aB | b",
        "B": "S -> AB | a",
        "C": "S -> ABC | a",
        "D": "S -> a | ε"
      },
      "options_hi": {
        "A": "एस -> एबी | बी",
        "B": "एस -> एबी | ए",
        "C": "एस -> एबीसी | ए",
        "D": "एस -> ए | ε"
      },
      "correctAnswer": "B",
      "explanation": "In Chomsky Normal Form (CNF), all production rules must be of the form A -> BC (two non-terminals) or A -> a (single terminal). Hence, S -> AB | a is in CNF.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 68,
      "questionNumber": 68,
      "section": "Computer Science",
      "topic": "Internet of Things",
      "topic_hi": "Internet of Things",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which lightweight application-layer publish/subscribe messaging protocol is widely used in IoT over TCP?",
      "question_hi": "कौन सा हल्का एप्लिकेशन-लेयर पब्लिश/सब्सक्राइब मैसेजिंग प्रोटोकॉल टीसीपी पर आईओटी में व्यापक रूप से उपयोग किया जाता है?",
      "options": {
        "A": "HTTP",
        "B": "MQTT",
        "C": "FTP",
        "D": "SNMP"
      },
      "options_hi": {
        "A": "HTTP",
        "B": "एमक्यूटीटी",
        "C": "FTP",
        "D": "एसएनएमपी"
      },
      "correctAnswer": "B",
      "explanation": "MQTT (Message Queuing Telemetry Transport) is an extremely lightweight publish/subscribe network protocol designed for constrained IoT devices and low-bandwidth networks.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 69,
      "questionNumber": 69,
      "section": "Computer Science",
      "topic": "Internet of Things",
      "topic_hi": "Internet of Things",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In the Web of Things (WoT), smart physical devices are exposed and controlled using standard web technologies primarily via:",
      "question_hi": "वेब ऑफ थिंग्स (डब्ल्यूओटी) में, स्मार्ट भौतिक उपकरणों को मुख्य रूप से मानक वेब प्रौद्योगिकियों का उपयोग करके प्रदर्शित और नियंत्रित किया जाता है:",
      "options": {
        "A": "RESTful Web APIs and JSON",
        "B": "Raw binary serial ports",
        "C": "Assembly instructions",
        "D": "Modem dial-ups"
      },
      "options_hi": {
        "A": "रेस्टफुल वेब एपीआई और JSON",
        "B": "कच्चे बाइनरी सीरियल पोर्ट",
        "C": "एकत्र करने के लिए निर्देश",
        "D": "मॉडेम डायल-अप"
      },
      "correctAnswer": "A",
      "explanation": "The Web of Things (WoT) integrates smart devices directly into the World Wide Web by using REST APIs, HTTP, WebSockets, and structured JSON data.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 70,
      "questionNumber": 70,
      "section": "Computer Science",
      "topic": "Artificial Intelligence",
      "topic_hi": "Artificial Intelligence",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In First-Order Predicate Logic, which inference rule derives C from premises (A ∨ B) and (¬A ∨ C)?",
      "question_hi": "प्रथम-क्रम विधेय तर्क में, कौन सा अनुमान नियम C को परिसर (A ∨ B) और (¬A ∨ C) से प्राप्त करता है?",
      "options": {
        "A": "Modus Ponens",
        "B": "Resolution",
        "C": "Universal Instantiation",
        "D": "Unification"
      },
      "options_hi": {
        "A": "मोडस पोनेन्स",
        "B": "संकल्प",
        "C": "सार्वभौमिक तात्कालिकता",
        "D": "एकीकरण"
      },
      "correctAnswer": "B",
      "explanation": "Resolution refutation states: (A ∨ B) and (¬A ∨ C) yields the resolvent (B ∨ C). If B is false, it yields C.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 71,
      "questionNumber": 71,
      "section": "Computer Science",
      "topic": "Artificial Intelligence",
      "topic_hi": "Artificial Intelligence",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which type of search algorithm always expands the lowest cost leaf node first where cost is f(n) = g(n) + h(n)?",
      "question_hi": "किस प्रकार का खोज एल्गोरिदम हमेशा सबसे कम लागत वाले लीफ नोड को पहले विस्तारित करता है जहां लागत f(n) = g(n) + h(n) है?",
      "options": {
        "A": "Greedy Best-First Search",
        "B": "A* Search",
        "C": "Depth First Search",
        "D": "Breadth First Search"
      },
      "options_hi": {
        "A": "लालची सर्वोत्तम-प्रथम खोज",
        "B": "ए* खोजें",
        "C": "गहराई-प्रथम खोज (DFS)",
        "D": "चौड़ाई-प्रथम खोज (BFS)"
      },
      "correctAnswer": "B",
      "explanation": "A* search evaluates nodes by combining g(n) (cost from start to current node) and h(n) (estimated heuristic cost from current node to goal).",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 72,
      "questionNumber": 72,
      "section": "Computer Science",
      "topic": "E-Commerce",
      "topic_hi": "E-Commerce",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following encryption protocols provides transport-layer security for credit card transactions over the web?",
      "question_hi": "निम्नलिखित में से कौन सा एन्क्रिप्शन प्रोटोकॉल वेब पर क्रेडिट कार्ड लेनदेन के लिए ट्रांसपोर्ट-लेयर सुरक्षा प्रदान करता है?",
      "options": {
        "A": "SSL / TLS",
        "B": "FTP",
        "C": "TELNET",
        "D": "TFTP"
      },
      "options_hi": {
        "A": "एसएसएल/टीएलएस",
        "B": "FTP",
        "C": "टेलनेट",
        "D": "टीएफटीपी"
      },
      "correctAnswer": "A",
      "explanation": "SSL (Secure Sockets Layer) and its modern successor TLS (Transport Layer Security) encrypt browser-server communications (HTTPS) to safeguard financial and personal data.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 73,
      "questionNumber": 73,
      "section": "Computer Science",
      "topic": "E-Commerce",
      "topic_hi": "E-Commerce",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The electronic document interchange standard developed by ANSI for business transactions is called:",
      "question_hi": "व्यावसायिक लेनदेन के लिए ANSI द्वारा विकसित इलेक्ट्रॉनिक दस्तावेज़ इंटरचेंज मानक को कहा जाता है:",
      "options": {
        "A": "ANSI X12",
        "B": "ISO 9001",
        "C": "IEEE 802.3",
        "D": "RFC 2822"
      },
      "options_hi": {
        "A": "एएनएसआई एक्स12",
        "B": "ISO 9001",
        "C": "आईईईई 802.3",
        "D": "आरएफसी 2822"
      },
      "correctAnswer": "A",
      "explanation": "ANSI ASC X12 is the official American National Standards Institute standard for Electronic Data Interchange (EDI) used across retail, finance, and transport.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 74,
      "questionNumber": 74,
      "section": "Computer Science",
      "topic": "Multimedia",
      "topic_hi": "Multimedia",
      "marks": 1,
      "negativeMarks": 0,
      "question": "According to the Nyquist-Shannon sampling theorem, to accurately reconstruct an audio signal with frequencies up to 20 kHz, what is the minimum required sampling rate?",
      "question_hi": "नाइक्विस्ट-शैनन सैंपलिंग प्रमेय के अनुसार, 20 किलोहर्ट्ज़ तक की आवृत्तियों के साथ एक ऑडियो सिग्नल को सटीक रूप से पुनर्निर्माण करने के लिए, न्यूनतम आवश्यक सैंपलिंग दर क्या है?",
      "options": {
        "A": "10 kHz",
        "B": "20 kHz",
        "C": "40 kHz",
        "D": "80 kHz"
      },
      "options_hi": {
        "A": "10 किलोहर्ट्ज़",
        "B": "20 किलोहर्ट्ज़",
        "C": "40 किलोहर्ट्ज़",
        "D": "80 किलोहर्ट्ज़"
      },
      "correctAnswer": "C",
      "explanation": "Nyquist rate = 2 × f_max. To capture frequencies up to 20,000 Hz, the sampling frequency must be at least 2 × 20 kHz = 40 kHz (Compact Discs use 44.1 kHz).",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 75,
      "questionNumber": 75,
      "section": "Computer Science",
      "topic": "Multimedia",
      "topic_hi": "Multimedia",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which image compression standard utilizes Discrete Cosine Transform (DCT) and is lossy for digital photography?",
      "question_hi": "कौन सा छवि संपीड़न मानक डिस्क्रीट कोसाइन ट्रांसफॉर्म (डीसीटी) का उपयोग करता है और डिजिटल फोटोग्राफी के लिए हानिकारक है?",
      "options": {
        "A": "PNG",
        "B": "JPEG",
        "C": "BMP",
        "D": "SVG"
      },
      "options_hi": {
        "A": "PNG",
        "B": "जेपीईजी",
        "C": "BMP",
        "D": "SVG"
      },
      "correctAnswer": "B",
      "explanation": "JPEG (Joint Photographic Experts Group) uses Discrete Cosine Transform (DCT) lossy compression to discard high-frequency color variations less noticeable to the human eye.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 76,
      "questionNumber": 76,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the 2's complement representation of decimal -13 in an 8-bit binary system?",
      "question_hi": "8-बिट बाइनरी प्रणाली में दशमलव -13 का 2's पूरक (2's complement) क्या होगा?",
      "options": {
        "A": "11110011",
        "B": "11110010",
        "C": "11110100",
        "D": "11111101"
      },
      "options_hi": {
        "A": "11110011",
        "B": "11110010",
        "C": "11110100",
        "D": "11111101"
      },
      "correctAnswer": "A",
      "explanation": "Binary of +13 = 00001101. 1's complement = 11110010. Adding 1 = 11110011.",
      "explanation_hi": "+13 का 8-बिट बाइनरी = 00001101. 1's कॉम्प्लीमेंट = 11110010. 1 जोड़ने पर = 11110011."
    },
    {
      "id": 77,
      "questionNumber": 77,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "How many 2-to-1 Multiplexers are needed to construct an 8-to-1 Multiplexer?",
      "question_hi": "एक 8-to-1 मल्टीप्लेक्सर (MUX) बनाने के लिए कितने 2-to-1 MUX की आवश्यकता होगी?",
      "options": {
        "A": "4",
        "B": "6",
        "C": "7",
        "D": "8"
      },
      "options_hi": {
        "A": "4",
        "B": "6",
        "C": "7",
        "D": "8"
      },
      "correctAnswer": "C",
      "explanation": "To build an 8:1 MUX: 4 in first stage, 2 in second, 1 in final stage = 4 + 2 + 1 = 7.",
      "explanation_hi": "8:1 MUX बनाने हेतु: प्रथम चरण में 4, द्वितीय में 2, तृतीय में 1 = कुल 7 MUX की आवश्यकता होगी।"
    },
    {
      "id": 78,
      "questionNumber": 78,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a JK flip-flop, the Race-Around condition occurs when:",
      "question_hi": "JK फ्लिप-फ्लॉप में 'रेस-अराउंड' (Race-Around) स्थिति कब उत्पन्न होती है?",
      "options": {
        "A": "J = 0, K = 0 and clock is high",
        "B": "J = 1, K = 1 and clock pulse width is greater than propagation delay",
        "C": "J = 1, K = 0 and clock is low",
        "D": "J = 0, K = 1 and propagation delay is zero"
      },
      "options_hi": {
        "A": "जे = 0, के = 0 और घड़ी उच्च है",
        "B": "J = 1, K = 1 और क्लॉक पल्स चौड़ाई प्रोपेगेशन डिले से अधिक हो",
        "C": "जे = 1, के = 0 और घड़ी कम है",
        "D": "जे = 0, के = 1 और प्रसार विलंब शून्य है"
      },
      "correctAnswer": "B",
      "explanation": "Race-around condition occurs when J=1, K=1 and clock pulse width exceeds flip-flop propagation delay.",
      "explanation_hi": "रेस-अराउंड स्थिति तब उत्पन्न होती है जब J=1, K=1 हो तथा क्लॉक पल्स की अवधि प्रोपेगेशन डिले से अधिक हो।"
    },
    {
      "id": 79,
      "questionNumber": 79,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which addressing mode specifies the operand directly within the instruction itself?",
      "question_hi": "कौन सा एड्रेसिंग मोड ऑपरेंड (मान) को सीधे निर्देश के अंदर ही निर्दिष्ट करता है?",
      "options": {
        "A": "Direct Addressing",
        "B": "Immediate Addressing",
        "C": "Register Indirect",
        "D": "Indexed Addressing"
      },
      "options_hi": {
        "A": "डायरेक्ट एड्रेसिंग",
        "B": "इमीडिएट एड्रेसिंग",
        "C": "रजिस्टर इनडायरेक्ट",
        "D": "इंडेक्स्ड एड्रेसिंग"
      },
      "correctAnswer": "B",
      "explanation": "In Immediate Addressing, the operand field contains the actual data value (e.g., MOV R1, #50).",
      "explanation_hi": "इमीडिएट एड्रेसिंग मोड में ऑपरेंड का वास्तविक मान सीधे निर्देश में ही लिखा होता है।"
    },
    {
      "id": 80,
      "questionNumber": 80,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "marks": 1,
      "negativeMarks": 0,
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
      "id": 81,
      "questionNumber": 81,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the minimum number of queues required to implement a Stack data structure?",
      "question_hi": "एक स्टैक (Stack) डेटा संरचना को लागू करने के लिए कम से कम कितने क्यू (Queue) चाहिए?",
      "options": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4"
      },
      "options_hi": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4"
      },
      "correctAnswer": "B",
      "explanation": "A minimum of 2 queues are required to simulate the LIFO behavior of a Stack.",
      "explanation_hi": "क्यू (FIFO) की मदद से स्टैक (LIFO) का अनुकरण करने हेतु न्यूनतम 2 क्यू आवश्यक हैं।"
    },
    {
      "id": 82,
      "questionNumber": 82,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which traversal of a Binary Search Tree (BST) produces keys in strictly ascending sorted order?",
      "question_hi": "बाइनरी सर्च ट्री (BST) का कौन सा ट्रैवर्सल मानों को हमेशा आरोही (सॉर्टेड) क्रम में देता है?",
      "options": {
        "A": "Preorder",
        "B": "Inorder",
        "C": "Postorder",
        "D": "Level-order"
      },
      "options_hi": {
        "A": "प्री-ऑर्डर",
        "B": "इन-ऑर्डर (Inorder)",
        "C": "पोस्ट-ऑर्डर",
        "D": "लेवल-ऑर्डर"
      },
      "correctAnswer": "B",
      "explanation": "Inorder traversal (Left, Root, Right) of a BST outputs elements in monotonically increasing sorted order.",
      "explanation_hi": "BST का इन-ऑर्डर ट्रैवर्सल (Left, Root, Right) हमेशा तत्वों को आरोही क्रम में छांटता है।"
    },
    {
      "id": 83,
      "questionNumber": 83,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम एवं विश्लेषण",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the worst-case time complexity of QuickSort?",
      "question_hi": "क्विकसॉर्ट (QuickSort) की सबसे खराब स्थिति (Worst-case) में समय जटिलता क्या होती है?",
      "options": {
        "A": "O(n log n)",
        "B": "O(n)",
        "C": "O(n²)",
        "D": "O(n³)"
      },
      "options_hi": {
        "A": "ओ(एन लॉग एन)",
        "B": "पर)",
        "C": "ओ(एन²)",
        "D": "ओ(एन³)"
      },
      "correctAnswer": "C",
      "explanation": "When the pivot chosen is consistently the smallest or largest element, QuickSort degrades to O(n²).",
      "explanation_hi": "जब पाइवोट सदैव सबसे छोटा या सबसे बड़ा तत्व चुना जाता है, तब क्विकसॉर्ट की जटिलता O(n²) हो जाती है।"
    },
    {
      "id": 84,
      "questionNumber": 84,
      "section": "Computer Science",
      "topic": "Operating System",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is NOT one of Coffman's four conditions for Deadlock?",
      "question_hi": "निम्नलिखित में से कौन सी डेडलॉक (Deadlock) की कॉफ़मैन की 4 अनिवार्य शर्तों में से नहीं है?",
      "options": {
        "A": "Mutual Exclusion",
        "B": "Hold and Wait",
        "C": "Preemption Allowed",
        "D": "Circular Wait"
      },
      "options_hi": {
        "A": "पारस्परिक बहिष्कार",
        "B": "होल्ड एंड वेट",
        "C": "प्रीएम्पशन की अनुमति",
        "D": "सर्कुलर वेट"
      },
      "correctAnswer": "C",
      "explanation": "The 4 conditions are Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait. Preemption Allowed prevents deadlock.",
      "explanation_hi": "डेडलॉक की चार शर्तें हैं: म्यूचुअल एक्सक्लूजन, होल्ड एंड वेट, नो प्रीएम्पशन, और सर्कुलर वेट। 'Preemption Allowed' से डेडलॉक टल जाता है।"
    },
    {
      "id": 85,
      "questionNumber": 85,
      "section": "Computer Science",
      "topic": "Database Management System",
      "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which SQL clause is used to filter groups created by the 'GROUP BY' clause?",
      "question_hi": "SQL में 'GROUP BY' क्लॉज द्वारा बनाए गए समूहों पर शर्त लगाने हेतु किसका उपयोग होता है?",
      "options": {
        "A": "WHERE",
        "B": "HAVING",
        "C": "ORDER BY",
        "D": "FILTER"
      },
      "options_hi": {
        "A": "कहाँ",
        "B": "होना",
        "C": "द्वारा आदेश",
        "D": "फ़िल्टर"
      },
      "correctAnswer": "B",
      "explanation": "HAVING filters aggregated groups formed by GROUP BY, while WHERE filters individual rows prior to grouping.",
      "explanation_hi": "WHERE व्यक्तिगत पंक्तियों को फ़िल्टर करता है जबकि HAVING क्लॉज GROUP BY के बाद समूहों को फ़िल्टर करता है।"
    },
    {
      "id": 86,
      "questionNumber": 86,
      "section": "Computer Science",
      "topic": "Computer Network",
      "topic_hi": "कंप्यूटर नेटवर्क",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which protocol resolves a known IP address to a physical hardware MAC address?",
      "question_hi": "ज्ञात IP पते को भौतिक हार्डवेयर MAC पते में बदलने के लिए किस प्रोटोकॉल का उपयोग होता है?",
      "options": {
        "A": "RARP",
        "B": "ARP (Address Resolution Protocol)",
        "C": "DHCP",
        "D": "ICMP"
      },
      "options_hi": {
        "A": "आरएआरपी",
        "B": "ARP (एड्रेस रेजोल्यूशन प्रोटोकॉल)",
        "C": "डीएचसीपी",
        "D": "आईसीएमपी"
      },
      "correctAnswer": "B",
      "explanation": "ARP maps an IPv4 address to a physical MAC address on a local Ethernet broadcast network.",
      "explanation_hi": "ARP प्रोटोकॉल स्थानीय नेटवर्क पर तार्किक IP पते को हार्डवेयर MAC पते में बदलता है।"
    },
    {
      "id": 87,
      "questionNumber": 87,
      "section": "Computer Science",
      "topic": "Software Engineering",
      "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which software testing technique examines internal logic, statements, and loop structures?",
      "question_hi": "कौन सी सॉफ्टवेयर टेस्टिंग तकनीक स्रोत कोड की आंतरिक लॉजिक, स्टेटमेंट और लूप की जांच करती है?",
      "options": {
        "A": "Black-Box Testing",
        "B": "White-Box Testing",
        "C": "Acceptance Testing",
        "D": "Beta Testing"
      },
      "options_hi": {
        "A": "ब्लैक-बॉक्स टेस्टिंग",
        "B": "व्हाइट-बॉक्स टेस्टिंग (White-Box)",
        "C": "स्वीकृति परीक्षण",
        "D": "बीटा टेस्टिंग"
      },
      "correctAnswer": "B",
      "explanation": "White-Box testing tests internal logic paths with complete knowledge of the internal source code.",
      "explanation_hi": "व्हाइट-बॉक्स टेस्टिंग में स्रोत कोड की आंतरिक कार्यप्रणाली और लॉजिक शाखाओं की जांच की जाती है।"
    },
    {
      "id": 88,
      "questionNumber": 88,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Python, which special method is invoked automatically when a new object instance is created?",
      "question_hi": "पायथन (Python) में नया ऑब्जेक्ट बनने पर स्वतः कौन सा मेथड निष्पादित होता है?",
      "options": {
        "A": "__new__()",
        "B": "__init__()",
        "C": "__create__()",
        "D": "__main__()"
      },
      "options_hi": {
        "A": "__नया__()",
        "B": "__इस में__()",
        "C": "__बनाएं__()",
        "D": "__main__()"
      },
      "correctAnswer": "B",
      "explanation": "The __init__() method is Python's constructor that initializes new instance attributes.",
      "explanation_hi": "पायथन में `__init__()` कंस्ट्रक्टर मेथड है जो नए ऑब्जेक्ट के गुणों को इनिशियलाइज़ करता है।"
    },
    {
      "id": 89,
      "questionNumber": 89,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब आधारित अनुप्रयोग विकास",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In JavaScript, which operator checks for BOTH value and data type equality without coercion?",
      "question_hi": "जावास्क्रिप्ट में कौन सा ऑपरेटर बिना टाइप कन्वर्ज़न के मान और डेटा प्रकार दोनों की समानता जांचता है?",
      "options": {
        "A": "==",
        "B": "===",
        "C": "!=",
        "D": "="
      },
      "options_hi": {
        "A": "==",
        "B": "===",
        "C": "!=",
        "D": "="
      },
      "correctAnswer": "B",
      "explanation": "The strict equality operator (===) checks both value and type without performing implicit type coercion.",
      "explanation_hi": "कड़ा समानता ऑपरेटर (===) बिना प्रकार बदले मान और डेटा टाइप दोनों की जांच करता है।"
    },
    {
      "id": 90,
      "questionNumber": 90,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "गणना का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which automaton recognizes Context-Free Languages (CFL)?",
      "question_hi": "कॉन्टेक्स्ट-फ्री भाषाओं (CFL) को पहचानने के लिए किस ऑटोमेटा का उपयोग होता है?",
      "options": {
        "A": "Deterministic Finite Automata",
        "B": "Pushdown Automata (PDA)",
        "C": "Linear Bounded Automata",
        "D": "Turing Machine only"
      },
      "options_hi": {
        "A": "नियतात्मक परिमित ऑटोमेटा",
        "B": "पुशडाउन ऑटोमेटा (PDA)",
        "C": "लीनियर बाउंडेड ऑटोमेटा",
        "D": "केवल ट्यूरिंग मशीन"
      },
      "correctAnswer": "B",
      "explanation": "Pushdown Automata (PDA), which have a single auxiliary stack memory, recognize Context-Free Languages.",
      "explanation_hi": "पुशडाउन ऑटोमेटा (PDA) अपनी स्टैक मेमोरी की सहायता से कॉन्टेक्स्ट-फ्री भाषाओं को पहचानता है।"
    },
    {
      "id": 91,
      "questionNumber": 91,
      "section": "Computer Science",
      "topic": "Internet of Things",
      "topic_hi": "इंटरनेट ऑफ थिंग्स (IoT)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which communication protocol is designed specifically for constrained IoT devices operating over UDP?",
      "question_hi": "UDP पर चलने वाले सीमित क्षमता वाले IoT उपकरणों हेतु कौन सा प्रोटोकॉल विकसित किया गया है?",
      "options": {
        "A": "HTTP",
        "B": "CoAP",
        "C": "SMTP",
        "D": "SSH"
      },
      "options_hi": {
        "A": "HTTP",
        "B": "CoAP (कंस्ट्रेंड एप्लीकेशन प्रोटोकॉल)",
        "C": "एसएमटीपी",
        "D": "SSH"
      },
      "correctAnswer": "B",
      "explanation": "CoAP (Constrained Application Protocol) provides a lightweight RESTful web transfer protocol over UDP for constrained IoT nodes.",
      "explanation_hi": "CoAP एक हल्का RESTful प्रोटोकॉल है जिसे IoT सेंसर्स के लिए UDP पर डिज़ाइन किया गया है।"
    },
    {
      "id": 92,
      "questionNumber": 92,
      "section": "Computer Science",
      "topic": "Artificial Intelligence",
      "topic_hi": "आर्टिफिशियल इंटेलिजेंस (AI)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which type of search algorithm always expands the lowest cost node where evaluation function f(n) = g(n) + h(n)?",
      "question_hi": "कौन सा सर्च एल्गोरिदम f(n) = g(n) + h(n) का उपयोग करके सबसे कम लागत वाले नोड का विस्तार करता है?",
      "options": {
        "A": "Greedy Best-First Search",
        "B": "A* Search",
        "C": "Depth First Search",
        "D": "Breadth First Search"
      },
      "options_hi": {
        "A": "लालची सर्वोत्तम-प्रथम खोज",
        "B": "ए* खोजें",
        "C": "गहराई-प्रथम खोज (DFS)",
        "D": "चौड़ाई-प्रथम खोज (BFS)"
      },
      "correctAnswer": "B",
      "explanation": "A* search combines g(n) (path cost from start) and h(n) (estimated heuristic cost to goal) for optimal search.",
      "explanation_hi": "A* सर्च वास्तविक लागत g(n) और अनुमानित लागत h(n) दोनों को जोड़कर सबसे अनुकूल रास्ता खोजता है।"
    },
    {
      "id": 93,
      "questionNumber": 93,
      "section": "Computer Science",
      "topic": "Fundamental of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which security protocol provides transport-layer encryption for secure online financial transactions?",
      "question_hi": "सुरक्षित ऑनलाइन वित्तीय लेनदेन के लिए ट्रांसपोर्ट-लेयर पर कौन सा एन्क्रिप्शन प्रोटोकॉल सुरक्षा देता है?",
      "options": {
        "A": "SSL / TLS",
        "B": "FTP",
        "C": "TELNET",
        "D": "TFTP"
      },
      "options_hi": {
        "A": "एसएसएल/टीएलएस",
        "B": "FTP",
        "C": "टेलनेट",
        "D": "टीएफटीपी"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS encrypts communication between the client web browser and server, establishing secure HTTPS sessions.",
      "explanation_hi": "SSL/TLS प्रोटोकॉल ब्राउज़र और सर्वर के बीच संचार को एन्क्रिप्ट करके सुरक्षित HTTPS सत्र प्रदान करता है।"
    },
    {
      "id": 94,
      "questionNumber": 94,
      "section": "Computer Science",
      "topic": "Multimedia",
      "topic_hi": "मल्टीमीडिया तकनीक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which vector graphic format is an open XML-based W3C standard that scales without quality loss?",
      "question_hi": "कौन सा वेक्टर ग्राफ़िक प्रारूप XML पर आधारित है और बिना गुणवत्ता खोए किसी भी आकार में ज़ूम हो सकता है?",
      "options": {
        "A": "BMP",
        "B": "SVG",
        "C": "GIF",
        "D": "TIFF"
      },
      "options_hi": {
        "A": "BMP",
        "B": "SVG (स्केलेबल वेक्टर ग्राफिक्स)",
        "C": "GIF",
        "D": "मनमुटाव"
      },
      "correctAnswer": "B",
      "explanation": "Scalable Vector Graphics (SVG) represents shapes and lines mathematically, allowing infinite resolution-independent scaling.",
      "explanation_hi": "SVG गणितीय रेखाओं और आकृतियों पर आधारित वेक्टर प्रारूप है जो ज़ूम करने पर भी अपनी स्पष्टता नहीं खोता।"
    },
    {
      "id": 95,
      "questionNumber": 95,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "Digital Logic",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the simplified expression for the Boolean function F(A, B, C) = Σm(1, 3, 5, 7) using Boolean algebra or K-Map?",
      "question_hi": "बूलियन बीजगणित या K-मैप का उपयोग करके बूलियन फ़ंक्शन F(A, B, C) = Σm(1, 3, 5, 7) के लिए सरलीकृत अभिव्यक्ति क्या है?",
      "options": {
        "A": "A",
        "B": "B",
        "C": "C",
        "D": "A'B'"
      },
      "options_hi": {
        "A": "A",
        "B": "B",
        "C": "C",
        "D": "ए'बी'"
      },
      "correctAnswer": "C",
      "explanation": "Minterms 1 (001), 3 (011), 5 (101), 7 (111) group into a 4-cell quad in a 3-variable K-Map. In these terms, A and B both vary (0 and 1), while C is constant at 1. Hence, the minimized SOP term is C.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 96,
      "questionNumber": 96,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "Digital Logic",
      "marks": 1,
      "negativeMarks": 0,
      "question": "How many select lines are required for a 64-to-1 Multiplexer (MUX)?",
      "question_hi": "64-टू-1 मल्टीप्लेक्सर (एमयूएक्स) के लिए कितनी चुनिंदा लाइनें आवश्यक हैं?",
      "options": {
        "A": "4",
        "B": "5",
        "C": "6",
        "D": "8"
      },
      "options_hi": {
        "A": "4",
        "B": "5",
        "C": "6",
        "D": "8"
      },
      "correctAnswer": "C",
      "explanation": "For a 2ⁿ-to-1 multiplexer, exactly n select lines are required. Since 64 = 2⁶, n = 6 select lines are needed to address all 64 input lines.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 97,
      "questionNumber": 97,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "Digital Logic",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a J-K flip flop, what condition produces the 'Toggle' output mode?",
      "question_hi": "जे-के फ्लिप फ्लॉप में, कौन सी स्थिति 'टॉगल' आउटपुट मोड उत्पन्न करती है?",
      "options": {
        "A": "J = 0, K = 0",
        "B": "J = 0, K = 1",
        "C": "J = 1, K = 0",
        "D": "J = 1, K = 1"
      },
      "options_hi": {
        "A": "जे = 0, के = 0",
        "B": "जे = 0, के = 1",
        "C": "जे = 1, के = 0",
        "D": "जे = 1, के = 1"
      },
      "correctAnswer": "D",
      "explanation": "In a JK flip-flop: When J=0, K=0 -> No change (Memory); J=0, K=1 -> Reset (Q=0); J=1, K=0 -> Set (Q=1); J=1, K=1 -> Toggle (Q(t+1) = Q'(t)).",
      "explanation_hi": "सही विकल्प (D) है।"
    },
    {
      "id": 98,
      "questionNumber": 98,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "Digital Logic",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following logic families exhibits the highest switching speed and lowest propagation delay?",
      "question_hi": "निम्नलिखित में से कौन सा तर्क परिवार उच्चतम स्विचिंग गति और सबसे कम प्रसार विलंब प्रदर्शित करता है?",
      "options": {
        "A": "TTL (Transistor-Transistor Logic)",
        "B": "ECL (Emitter-Coupled Logic)",
        "C": "CMOS",
        "D": "NMOS"
      },
      "options_hi": {
        "A": "टीटीएल (ट्रांजिस्टर-ट्रांजिस्टर लॉजिक)",
        "B": "ईसीएल (एमिटर-युग्मित तर्क)",
        "C": "सीएमओएस",
        "D": "एनएमओएस"
      },
      "correctAnswer": "B",
      "explanation": "ECL (Emitter-Coupled Logic) operates its transistors in the non-saturated active region rather than saturation, eliminating storage time delay and achieving propagation delays below 1 nanosecond (fastest among conventional families).",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 99,
      "questionNumber": 99,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "Digital Logic",
      "marks": 1,
      "negativeMarks": 0,
      "question": "An 8-bit digital-to-analog converter (DAC) has a reference voltage of 5V. What is the approximate resolution (step size)?",
      "question_hi": "8-बिट डिजिटल-टू-एनालॉग कनवर्टर (डीएसी) का संदर्भ वोल्टेज 5V है। अनुमानित रिज़ॉल्यूशन (चरण आकार) क्या है?",
      "options": {
        "A": "19.5 mV",
        "B": "39.1 mV",
        "C": "9.8 mV",
        "D": "62.5 mV"
      },
      "options_hi": {
        "A": "19.5 एमवी",
        "B": "39.1 एमवी",
        "C": "9.8 एमवी",
        "D": "62.5 एमवी"
      },
      "correctAnswer": "A",
      "explanation": "Resolution = V_ref / (2ⁿ - 1) = 5V / (2⁸ - 1) = 5V / 255 ≈ 19.6 mV (or 5V / 256 ≈ 19.53 mV).",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 100,
      "questionNumber": 100,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "Digital Logic",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the canonical representation form that expresses a Boolean function as a product of sum terms called?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: What is the canonical representation form that expresses a Boolean function as a product of sum terms called के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "Minterm form",
        "B": "Maxterm / POS form",
        "C": "Dual form",
        "D": "Disjunctive Normal Form"
      },
      "options_hi": {
        "A": "मिन्टर्म फॉर्म",
        "B": "Maxterm / POS form",
        "C": "दोहरा रूप",
        "D": "विच्छेदनात्मक सामान्य रूप"
      },
      "correctAnswer": "B",
      "explanation": "Product of Sums (POS) expresses a logic function as the AND combination (product) of OR terms (sums/maxterms), denoted by ΠM.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 101,
      "questionNumber": 101,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Bloom's revised taxonomy (2001), which objective level is demonstrated when a student creates a novel computer algorithm or software design?",
      "question_hi": "ब्लूम की संशोधित वर्गीकरण (2001) में, जब कोई छात्र एक नया कंप्यूटर एल्गोरिदम या सॉफ़्टवेयर डिज़ाइन बनाता है तो कौन सा उद्देश्य स्तर प्रदर्शित होता है?",
      "options": {
        "A": "Remembering",
        "B": "Applying",
        "C": "Analyzing",
        "D": "Creating"
      },
      "options_hi": {
        "A": "याद आती",
        "B": "को लागू करने",
        "C": "का विश्लेषण",
        "D": "बनाना"
      },
      "correctAnswer": "D",
      "explanation": "'Creating' is the highest level of cognitive learning in Bloom's revised taxonomy, involving putting elements together to form a coherent whole or reorganizing into a new pattern.",
      "explanation_hi": "सही विकल्प (D) है।"
    },
    {
      "id": 102,
      "questionNumber": 102,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which method of teaching was originated by H.E. Armstrong, encouraging students to act as independent discoverers of truth?",
      "question_hi": "शिक्षण की किस पद्धति की शुरुआत एच.ई. ने की थी? आर्मस्ट्रांग, छात्रों को सत्य के स्वतंत्र खोजकर्ता के रूप में कार्य करने के लिए प्रोत्साहित कर रहे हैं?",
      "options": {
        "A": "Lecture Method",
        "B": "Heuristic Method",
        "C": "Demonstration Method",
        "D": "Textbook Method"
      },
      "options_hi": {
        "A": "व्याख्यान विधि",
        "B": "अनुमानी विधि",
        "C": "प्रदर्शन विधि",
        "D": "पाठ्यपुस्तक विधि"
      },
      "correctAnswer": "B",
      "explanation": "The Heuristic Method (from Greek 'heuriskein' meaning 'to find or discover') was propounded by Professor H.E. Armstrong, placing the learner in the position of an original discoverer.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 103,
      "questionNumber": 103,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the recommended duration of the 'Teach' phase in a standard Indian microteaching cycle?",
      "question_hi": "एक मानक भारतीय सूक्ष्मशिक्षण चक्र में 'शिक्षण' चरण की अनुशंसित अवधि क्या है?",
      "options": {
        "A": "6 minutes",
        "B": "12 minutes",
        "C": "15 minutes",
        "D": "20 minutes"
      },
      "options_hi": {
        "A": "6 मिनट",
        "B": "12 मिनट",
        "C": "15 minutes",
        "D": "20 मिनट"
      },
      "correctAnswer": "A",
      "explanation": "In the NCERT microteaching model: Teach = 6 min, Feedback = 6 min, Re-plan = 12 min, Re-teach = 6 min, Re-feedback = 6 min. Total = 36 minutes.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 104,
      "questionNumber": 104,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Formative evaluation is primarily conducted to:",
      "question_hi": "रचनात्मक मूल्यांकन मुख्य रूप से निम्न के लिए आयोजित किया जाता है:",
      "options": {
        "A": "Award annual report card certificates",
        "B": "Rank students across the state",
        "C": "Provide continuous feedback to monitor learning progress during instruction",
        "D": "Select students for high school scholarships"
      },
      "options_hi": {
        "A": "पुरस्कार वार्षिक रिपोर्ट कार्ड प्रमाण पत्र",
        "B": "राज्य भर में छात्रों की रैंकिंग करें",
        "C": "निर्देश के दौरान सीखने की प्रगति की निगरानी के लिए निरंतर प्रतिक्रिया प्रदान करें",
        "D": "हाई स्कूल छात्रवृत्ति के लिए छात्रों का चयन करें"
      },
      "correctAnswer": "C",
      "explanation": "Formative assessment ('assessment for learning') occurs ongoingly during the learning process to diagnose difficulties, provide timely feedback, and adapt instructional pace.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 105,
      "questionNumber": 105,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "According to the Herbartian model of lesson planning, what is the first formal step?",
      "question_hi": "पाठ योजना के हरबर्टियन मॉडल के अनुसार, पहला औपचारिक कदम क्या है?",
      "options": {
        "A": "Presentation",
        "B": "Preparation (Introduction)",
        "C": "Generalization",
        "D": "Application"
      },
      "options_hi": {
        "A": "प्रस्तुति",
        "B": "तैयारी (परिचय)",
        "C": "सामान्यकरण",
        "D": "आवेदन"
      },
      "correctAnswer": "B",
      "explanation": "Herbart's 5 steps are: 1. Preparation (arousing interest and testing previous knowledge), 2. Presentation, 3. Association/Comparison, 4. Generalization, 5. Application.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 106,
      "questionNumber": 106,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which teaching aid is placed at the very base of Edgar Dale's 'Cone of Experience', providing the highest degree of direct learning?",
      "question_hi": "कौन सी शिक्षण सहायता एडगर डेल के 'कोन ऑफ एक्सपीरियंस' के बिल्कुल आधार पर रखी गई है, जो प्रत्यक्ष शिक्षण की उच्चतम डिग्री प्रदान करती है?",
      "options": {
        "A": "Verbal Symbols",
        "B": "Direct Purposeful Experiences (Hands-on)",
        "C": "Motion Pictures",
        "D": "Visual Symbols"
      },
      "options_hi": {
        "A": "मौखिक प्रतीक",
        "B": "प्रत्यक्ष उद्देश्यपूर्ण अनुभव (हाथ से)",
        "C": "गतिशील तस्वीरें",
        "D": "दृश्य प्रतीक"
      },
      "correctAnswer": "B",
      "explanation": "In Dale's Cone of Experience, 'Direct Purposeful Experiences' (real-life, direct hands-on sensory learning) lies at the foundation, giving the highest learning retention.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 107,
      "questionNumber": 107,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Continuous and Comprehensive Evaluation (CCE) aims to assess:",
      "question_hi": "सतत एवं व्यापक मूल्यांकन (सीसीई) का लक्ष्य निम्नलिखित का आकलन करना है:",
      "options": {
        "A": "Scholastic (academic) aspects only",
        "B": "Both Scholastic and Co-scholastic (holistic personal) aspects of student growth",
        "C": "Physical sports fitness only",
        "D": "Memorization of textbook terms"
      },
      "options_hi": {
        "A": "केवल शैक्षिक (शैक्षणिक) पहलू",
        "B": "छात्र विकास के शैक्षिक और सह-शैक्षिक (समग्र व्यक्तिगत) दोनों पहलू",
        "C": "केवल शारीरिक खेल फिटनेस",
        "D": "Memorization of textbook terms"
      },
      "correctAnswer": "B",
      "explanation": "CCE covers both scholastic (cognitive/academic subjects) and co-scholastic domains (attitudes, values, creative arts, physical health, and social skills).",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 108,
      "questionNumber": 108,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A teacher notices that a student is struggling with binary conversion due to weak fundamental division skills. The assessment used to locate this specific deficit is:",
      "question_hi": "एक शिक्षक ने देखा कि एक छात्र कमजोर मौलिक विभाजन कौशल के कारण द्विआधारी रूपांतरण से जूझ रहा है। इस विशिष्ट घाटे का पता लगाने के लिए उपयोग किया जाने वाला मूल्यांकन है:",
      "options": {
        "A": "Placement Assessment",
        "B": "Diagnostic Assessment",
        "C": "Summative Assessment",
        "D": "Norm-Referenced Assessment"
      },
      "options_hi": {
        "A": "प्लेसमेंट मूल्यांकन",
        "B": "नैदानिक ​​मूल्यांकन",
        "C": "योगात्मक मूल्यांकन",
        "D": "मानक-संदर्भित मूल्यांकन"
      },
      "correctAnswer": "B",
      "explanation": "Diagnostic assessment pinpoints the specific root causes of persistent learning difficulties so teachers can administer appropriate remedial teaching.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 109,
      "questionNumber": 109,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In teacher behavior, 'Positive Reinforcement' includes which of the following actions?",
      "question_hi": "शिक्षक व्यवहार में, 'सकारात्मक सुदृढीकरण' में निम्नलिखित में से कौन सी क्रिया शामिल है?",
      "options": {
        "A": "Praising a correct answer with 'Good' or an appreciative nod",
        "B": "Ridiculing student attempts",
        "C": "Ignoring students who ask questions",
        "D": "Assigning punitive homework"
      },
      "options_hi": {
        "A": "सही उत्तर की 'अच्छा' या प्रशंसात्मक सिर हिलाकर प्रशंसा करना",
        "B": "छात्रों के प्रयासों का उपहास उड़ाया जा रहा है",
        "C": "प्रश्न पूछने वाले विद्यार्थियों की उपेक्षा करना",
        "D": "दंडात्मक होमवर्क सौंपना"
      },
      "correctAnswer": "A",
      "explanation": "Positive reinforcement rewards desired behaviors (verbal praise, warm smile, encouraging gestures), strengthening student motivation and active classroom participation.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 110,
      "questionNumber": 110,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which model of curriculum construction focuses on the child's psychological needs, interests, abilities, and active learning rather than rigid rote content?",
      "question_hi": "पाठ्यक्रम निर्माण का कौन सा मॉडल कठोर रटंत सामग्री के बजाय बच्चे की मनोवैज्ञानिक आवश्यकताओं, रुचियों, क्षमताओं और सक्रिय सीखने पर केंद्रित है?",
      "options": {
        "A": "Subject-Centered Curriculum",
        "B": "Learner-Centered (Child-Centered) Curriculum",
        "C": "Teacher-Centered Curriculum",
        "D": "Exam-Oriented Curriculum"
      },
      "options_hi": {
        "A": "विषय-केन्द्रित पाठ्यचर्या",
        "B": "शिक्षार्थी-केंद्रित (बाल-केंद्रित) पाठ्यक्रम",
        "C": "शिक्षक-केन्द्रित पाठ्यचर्या",
        "D": "परीक्षा-उन्मुख पाठ्यक्रम"
      },
      "correctAnswer": "B",
      "explanation": "Learner-Centered curriculum design aligns learning activities with the child's developmental stages, curiosities, and personal growth, as endorsed by NEP 2020.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 111,
      "questionNumber": 111,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Bloom's revised taxonomy (2001), which objective level is demonstrated when a student creates a novel computer algorithm or software design?",
      "question_hi": "ब्लूम की संशोधित वर्गीकरण (2001) में, जब कोई छात्र एक नया कंप्यूटर एल्गोरिदम या सॉफ़्टवेयर डिज़ाइन बनाता है तो कौन सा उद्देश्य स्तर प्रदर्शित होता है?",
      "options": {
        "A": "Remembering",
        "B": "Applying",
        "C": "Analyzing",
        "D": "Creating"
      },
      "options_hi": {
        "A": "याद आती",
        "B": "को लागू करने",
        "C": "का विश्लेषण",
        "D": "बनाना"
      },
      "correctAnswer": "D",
      "explanation": "'Creating' is the highest level of cognitive learning in Bloom's revised taxonomy, involving putting elements together to form a coherent whole or reorganizing into a new pattern.",
      "explanation_hi": "सही विकल्प (D) है।"
    },
    {
      "id": 112,
      "questionNumber": 112,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which method of teaching was originated by H.E. Armstrong, encouraging students to act as independent discoverers of truth?",
      "question_hi": "शिक्षण की किस पद्धति की शुरुआत एच.ई. ने की थी? आर्मस्ट्रांग, छात्रों को सत्य के स्वतंत्र खोजकर्ता के रूप में कार्य करने के लिए प्रोत्साहित कर रहे हैं?",
      "options": {
        "A": "Lecture Method",
        "B": "Heuristic Method",
        "C": "Demonstration Method",
        "D": "Textbook Method"
      },
      "options_hi": {
        "A": "व्याख्यान विधि",
        "B": "अनुमानी विधि",
        "C": "प्रदर्शन विधि",
        "D": "पाठ्यपुस्तक विधि"
      },
      "correctAnswer": "B",
      "explanation": "The Heuristic Method (from Greek 'heuriskein' meaning 'to find or discover') was propounded by Professor H.E. Armstrong, placing the learner in the position of an original discoverer.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 113,
      "questionNumber": 113,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the recommended duration of the 'Teach' phase in a standard Indian microteaching cycle?",
      "question_hi": "एक मानक भारतीय सूक्ष्मशिक्षण चक्र में 'शिक्षण' चरण की अनुशंसित अवधि क्या है?",
      "options": {
        "A": "6 minutes",
        "B": "12 minutes",
        "C": "15 minutes",
        "D": "20 minutes"
      },
      "options_hi": {
        "A": "6 मिनट",
        "B": "12 मिनट",
        "C": "15 minutes",
        "D": "20 मिनट"
      },
      "correctAnswer": "A",
      "explanation": "In the NCERT microteaching model: Teach = 6 min, Feedback = 6 min, Re-plan = 12 min, Re-teach = 6 min, Re-feedback = 6 min. Total = 36 minutes.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 114,
      "questionNumber": 114,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Formative evaluation is primarily conducted to:",
      "question_hi": "रचनात्मक मूल्यांकन मुख्य रूप से निम्न के लिए आयोजित किया जाता है:",
      "options": {
        "A": "Award annual report card certificates",
        "B": "Rank students across the state",
        "C": "Provide continuous feedback to monitor learning progress during instruction",
        "D": "Select students for high school scholarships"
      },
      "options_hi": {
        "A": "पुरस्कार वार्षिक रिपोर्ट कार्ड प्रमाण पत्र",
        "B": "राज्य भर में छात्रों की रैंकिंग करें",
        "C": "निर्देश के दौरान सीखने की प्रगति की निगरानी के लिए निरंतर प्रतिक्रिया प्रदान करें",
        "D": "हाई स्कूल छात्रवृत्ति के लिए छात्रों का चयन करें"
      },
      "correctAnswer": "C",
      "explanation": "Formative assessment ('assessment for learning') occurs ongoingly during the learning process to diagnose difficulties, provide timely feedback, and adapt instructional pace.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 115,
      "questionNumber": 115,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "According to the Herbartian model of lesson planning, what is the first formal step?",
      "question_hi": "पाठ योजना के हरबर्टियन मॉडल के अनुसार, पहला औपचारिक कदम क्या है?",
      "options": {
        "A": "Presentation",
        "B": "Preparation (Introduction)",
        "C": "Generalization",
        "D": "Application"
      },
      "options_hi": {
        "A": "प्रस्तुति",
        "B": "तैयारी (परिचय)",
        "C": "सामान्यकरण",
        "D": "आवेदन"
      },
      "correctAnswer": "B",
      "explanation": "Herbart's 5 steps are: 1. Preparation (arousing interest and testing previous knowledge), 2. Presentation, 3. Association/Comparison, 4. Generalization, 5. Application.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 116,
      "questionNumber": 116,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which teaching aid is placed at the very base of Edgar Dale's 'Cone of Experience', providing the highest degree of direct learning?",
      "question_hi": "कौन सी शिक्षण सहायता एडगर डेल के 'कोन ऑफ एक्सपीरियंस' के बिल्कुल आधार पर रखी गई है, जो प्रत्यक्ष शिक्षण की उच्चतम डिग्री प्रदान करती है?",
      "options": {
        "A": "Verbal Symbols",
        "B": "Direct Purposeful Experiences (Hands-on)",
        "C": "Motion Pictures",
        "D": "Visual Symbols"
      },
      "options_hi": {
        "A": "मौखिक प्रतीक",
        "B": "प्रत्यक्ष उद्देश्यपूर्ण अनुभव (हाथ से)",
        "C": "गतिशील तस्वीरें",
        "D": "दृश्य प्रतीक"
      },
      "correctAnswer": "B",
      "explanation": "In Dale's Cone of Experience, 'Direct Purposeful Experiences' (real-life, direct hands-on sensory learning) lies at the foundation, giving the highest learning retention.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 117,
      "questionNumber": 117,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Continuous and Comprehensive Evaluation (CCE) aims to assess:",
      "question_hi": "सतत एवं व्यापक मूल्यांकन (सीसीई) का लक्ष्य निम्नलिखित का आकलन करना है:",
      "options": {
        "A": "Scholastic (academic) aspects only",
        "B": "Both Scholastic and Co-scholastic (holistic personal) aspects of student growth",
        "C": "Physical sports fitness only",
        "D": "Memorization of textbook terms"
      },
      "options_hi": {
        "A": "केवल शैक्षिक (शैक्षणिक) पहलू",
        "B": "छात्र विकास के शैक्षिक और सह-शैक्षिक (समग्र व्यक्तिगत) दोनों पहलू",
        "C": "केवल शारीरिक खेल फिटनेस",
        "D": "Memorization of textbook terms"
      },
      "correctAnswer": "B",
      "explanation": "CCE covers both scholastic (cognitive/academic subjects) and co-scholastic domains (attitudes, values, creative arts, physical health, and social skills).",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 118,
      "questionNumber": 118,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A teacher notices that a student is struggling with binary conversion due to weak fundamental division skills. The assessment used to locate this specific deficit is:",
      "question_hi": "एक शिक्षक ने देखा कि एक छात्र कमजोर मौलिक विभाजन कौशल के कारण द्विआधारी रूपांतरण से जूझ रहा है। इस विशिष्ट घाटे का पता लगाने के लिए उपयोग किया जाने वाला मूल्यांकन है:",
      "options": {
        "A": "Placement Assessment",
        "B": "Diagnostic Assessment",
        "C": "Summative Assessment",
        "D": "Norm-Referenced Assessment"
      },
      "options_hi": {
        "A": "प्लेसमेंट मूल्यांकन",
        "B": "नैदानिक ​​मूल्यांकन",
        "C": "योगात्मक मूल्यांकन",
        "D": "मानक-संदर्भित मूल्यांकन"
      },
      "correctAnswer": "B",
      "explanation": "Diagnostic assessment pinpoints the specific root causes of persistent learning difficulties so teachers can administer appropriate remedial teaching.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 119,
      "questionNumber": 119,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In teacher behavior, 'Positive Reinforcement' includes which of the following actions?",
      "question_hi": "शिक्षक व्यवहार में, 'सकारात्मक सुदृढीकरण' में निम्नलिखित में से कौन सी क्रिया शामिल है?",
      "options": {
        "A": "Praising a correct answer with 'Good' or an appreciative nod",
        "B": "Ridiculing student attempts",
        "C": "Ignoring students who ask questions",
        "D": "Assigning punitive homework"
      },
      "options_hi": {
        "A": "सही उत्तर की 'अच्छा' या प्रशंसात्मक सिर हिलाकर प्रशंसा करना",
        "B": "छात्रों के प्रयासों का उपहास उड़ाया जा रहा है",
        "C": "प्रश्न पूछने वाले विद्यार्थियों की उपेक्षा करना",
        "D": "दंडात्मक होमवर्क सौंपना"
      },
      "correctAnswer": "A",
      "explanation": "Positive reinforcement rewards desired behaviors (verbal praise, warm smile, encouraging gestures), strengthening student motivation and active classroom participation.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 120,
      "questionNumber": 120,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which model of curriculum construction focuses on the child's psychological needs, interests, abilities, and active learning rather than rigid rote content?",
      "question_hi": "पाठ्यक्रम निर्माण का कौन सा मॉडल कठोर रटंत सामग्री के बजाय बच्चे की मनोवैज्ञानिक आवश्यकताओं, रुचियों, क्षमताओं और सक्रिय सीखने पर केंद्रित है?",
      "options": {
        "A": "Subject-Centered Curriculum",
        "B": "Learner-Centered (Child-Centered) Curriculum",
        "C": "Teacher-Centered Curriculum",
        "D": "Exam-Oriented Curriculum"
      },
      "options_hi": {
        "A": "विषय-केन्द्रित पाठ्यचर्या",
        "B": "शिक्षार्थी-केंद्रित (बाल-केंद्रित) पाठ्यक्रम",
        "C": "शिक्षक-केन्द्रित पाठ्यचर्या",
        "D": "परीक्षा-उन्मुख पाठ्यक्रम"
      },
      "correctAnswer": "B",
      "explanation": "Learner-Centered curriculum design aligns learning activities with the child's developmental stages, curiosities, and personal growth, as endorsed by NEP 2020.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 121,
      "questionNumber": 121,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Bloom's revised taxonomy (2001), which objective level is demonstrated when a student creates a novel computer algorithm or software design?",
      "question_hi": "ब्लूम की संशोधित वर्गीकरण (2001) में, जब कोई छात्र एक नया कंप्यूटर एल्गोरिदम या सॉफ़्टवेयर डिज़ाइन बनाता है तो कौन सा उद्देश्य स्तर प्रदर्शित होता है?",
      "options": {
        "A": "Remembering",
        "B": "Applying",
        "C": "Analyzing",
        "D": "Creating"
      },
      "options_hi": {
        "A": "याद आती",
        "B": "को लागू करने",
        "C": "का विश्लेषण",
        "D": "बनाना"
      },
      "correctAnswer": "D",
      "explanation": "'Creating' is the highest level of cognitive learning in Bloom's revised taxonomy, involving putting elements together to form a coherent whole or reorganizing into a new pattern.",
      "explanation_hi": "सही विकल्प (D) है।"
    },
    {
      "id": 122,
      "questionNumber": 122,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which method of teaching was originated by H.E. Armstrong, encouraging students to act as independent discoverers of truth?",
      "question_hi": "शिक्षण की किस पद्धति की शुरुआत एच.ई. ने की थी? आर्मस्ट्रांग, छात्रों को सत्य के स्वतंत्र खोजकर्ता के रूप में कार्य करने के लिए प्रोत्साहित कर रहे हैं?",
      "options": {
        "A": "Lecture Method",
        "B": "Heuristic Method",
        "C": "Demonstration Method",
        "D": "Textbook Method"
      },
      "options_hi": {
        "A": "व्याख्यान विधि",
        "B": "अनुमानी विधि",
        "C": "प्रदर्शन विधि",
        "D": "पाठ्यपुस्तक विधि"
      },
      "correctAnswer": "B",
      "explanation": "The Heuristic Method (from Greek 'heuriskein' meaning 'to find or discover') was propounded by Professor H.E. Armstrong, placing the learner in the position of an original discoverer.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 123,
      "questionNumber": 123,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the recommended duration of the 'Teach' phase in a standard Indian microteaching cycle?",
      "question_hi": "एक मानक भारतीय सूक्ष्मशिक्षण चक्र में 'शिक्षण' चरण की अनुशंसित अवधि क्या है?",
      "options": {
        "A": "6 minutes",
        "B": "12 minutes",
        "C": "15 minutes",
        "D": "20 minutes"
      },
      "options_hi": {
        "A": "6 मिनट",
        "B": "12 मिनट",
        "C": "15 minutes",
        "D": "20 मिनट"
      },
      "correctAnswer": "A",
      "explanation": "In the NCERT microteaching model: Teach = 6 min, Feedback = 6 min, Re-plan = 12 min, Re-teach = 6 min, Re-feedback = 6 min. Total = 36 minutes.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 124,
      "questionNumber": 124,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Formative evaluation is primarily conducted to:",
      "question_hi": "रचनात्मक मूल्यांकन मुख्य रूप से निम्न के लिए आयोजित किया जाता है:",
      "options": {
        "A": "Award annual report card certificates",
        "B": "Rank students across the state",
        "C": "Provide continuous feedback to monitor learning progress during instruction",
        "D": "Select students for high school scholarships"
      },
      "options_hi": {
        "A": "पुरस्कार वार्षिक रिपोर्ट कार्ड प्रमाण पत्र",
        "B": "राज्य भर में छात्रों की रैंकिंग करें",
        "C": "निर्देश के दौरान सीखने की प्रगति की निगरानी के लिए निरंतर प्रतिक्रिया प्रदान करें",
        "D": "हाई स्कूल छात्रवृत्ति के लिए छात्रों का चयन करें"
      },
      "correctAnswer": "C",
      "explanation": "Formative assessment ('assessment for learning') occurs ongoingly during the learning process to diagnose difficulties, provide timely feedback, and adapt instructional pace.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 125,
      "questionNumber": 125,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "According to the Herbartian model of lesson planning, what is the first formal step?",
      "question_hi": "पाठ योजना के हरबर्टियन मॉडल के अनुसार, पहला औपचारिक कदम क्या है?",
      "options": {
        "A": "Presentation",
        "B": "Preparation (Introduction)",
        "C": "Generalization",
        "D": "Application"
      },
      "options_hi": {
        "A": "प्रस्तुति",
        "B": "तैयारी (परिचय)",
        "C": "सामान्यकरण",
        "D": "आवेदन"
      },
      "correctAnswer": "B",
      "explanation": "Herbart's 5 steps are: 1. Preparation (arousing interest and testing previous knowledge), 2. Presentation, 3. Association/Comparison, 4. Generalization, 5. Application.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 126,
      "questionNumber": 126,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which teaching aid is placed at the very base of Edgar Dale's 'Cone of Experience', providing the highest degree of direct learning?",
      "question_hi": "कौन सी शिक्षण सहायता एडगर डेल के 'कोन ऑफ एक्सपीरियंस' के बिल्कुल आधार पर रखी गई है, जो प्रत्यक्ष शिक्षण की उच्चतम डिग्री प्रदान करती है?",
      "options": {
        "A": "Verbal Symbols",
        "B": "Direct Purposeful Experiences (Hands-on)",
        "C": "Motion Pictures",
        "D": "Visual Symbols"
      },
      "options_hi": {
        "A": "मौखिक प्रतीक",
        "B": "प्रत्यक्ष उद्देश्यपूर्ण अनुभव (हाथ से)",
        "C": "गतिशील तस्वीरें",
        "D": "दृश्य प्रतीक"
      },
      "correctAnswer": "B",
      "explanation": "In Dale's Cone of Experience, 'Direct Purposeful Experiences' (real-life, direct hands-on sensory learning) lies at the foundation, giving the highest learning retention.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 127,
      "questionNumber": 127,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Continuous and Comprehensive Evaluation (CCE) aims to assess:",
      "question_hi": "सतत एवं व्यापक मूल्यांकन (सीसीई) का लक्ष्य निम्नलिखित का आकलन करना है:",
      "options": {
        "A": "Scholastic (academic) aspects only",
        "B": "Both Scholastic and Co-scholastic (holistic personal) aspects of student growth",
        "C": "Physical sports fitness only",
        "D": "Memorization of textbook terms"
      },
      "options_hi": {
        "A": "केवल शैक्षिक (शैक्षणिक) पहलू",
        "B": "छात्र विकास के शैक्षिक और सह-शैक्षिक (समग्र व्यक्तिगत) दोनों पहलू",
        "C": "केवल शारीरिक खेल फिटनेस",
        "D": "Memorization of textbook terms"
      },
      "correctAnswer": "B",
      "explanation": "CCE covers both scholastic (cognitive/academic subjects) and co-scholastic domains (attitudes, values, creative arts, physical health, and social skills).",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 128,
      "questionNumber": 128,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A teacher notices that a student is struggling with binary conversion due to weak fundamental division skills. The assessment used to locate this specific deficit is:",
      "question_hi": "एक शिक्षक ने देखा कि एक छात्र कमजोर मौलिक विभाजन कौशल के कारण द्विआधारी रूपांतरण से जूझ रहा है। इस विशिष्ट घाटे का पता लगाने के लिए उपयोग किया जाने वाला मूल्यांकन है:",
      "options": {
        "A": "Placement Assessment",
        "B": "Diagnostic Assessment",
        "C": "Summative Assessment",
        "D": "Norm-Referenced Assessment"
      },
      "options_hi": {
        "A": "प्लेसमेंट मूल्यांकन",
        "B": "नैदानिक ​​मूल्यांकन",
        "C": "योगात्मक मूल्यांकन",
        "D": "मानक-संदर्भित मूल्यांकन"
      },
      "correctAnswer": "B",
      "explanation": "Diagnostic assessment pinpoints the specific root causes of persistent learning difficulties so teachers can administer appropriate remedial teaching.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 129,
      "questionNumber": 129,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In teacher behavior, 'Positive Reinforcement' includes which of the following actions?",
      "question_hi": "शिक्षक व्यवहार में, 'सकारात्मक सुदृढीकरण' में निम्नलिखित में से कौन सी क्रिया शामिल है?",
      "options": {
        "A": "Praising a correct answer with 'Good' or an appreciative nod",
        "B": "Ridiculing student attempts",
        "C": "Ignoring students who ask questions",
        "D": "Assigning punitive homework"
      },
      "options_hi": {
        "A": "सही उत्तर की 'अच्छा' या प्रशंसात्मक सिर हिलाकर प्रशंसा करना",
        "B": "छात्रों के प्रयासों का उपहास उड़ाया जा रहा है",
        "C": "प्रश्न पूछने वाले विद्यार्थियों की उपेक्षा करना",
        "D": "दंडात्मक होमवर्क सौंपना"
      },
      "correctAnswer": "A",
      "explanation": "Positive reinforcement rewards desired behaviors (verbal praise, warm smile, encouraging gestures), strengthening student motivation and active classroom participation.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 130,
      "questionNumber": 130,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which model of curriculum construction focuses on the child's psychological needs, interests, abilities, and active learning rather than rigid rote content?",
      "question_hi": "पाठ्यक्रम निर्माण का कौन सा मॉडल कठोर रटंत सामग्री के बजाय बच्चे की मनोवैज्ञानिक आवश्यकताओं, रुचियों, क्षमताओं और सक्रिय सीखने पर केंद्रित है?",
      "options": {
        "A": "Subject-Centered Curriculum",
        "B": "Learner-Centered (Child-Centered) Curriculum",
        "C": "Teacher-Centered Curriculum",
        "D": "Exam-Oriented Curriculum"
      },
      "options_hi": {
        "A": "विषय-केन्द्रित पाठ्यचर्या",
        "B": "शिक्षार्थी-केंद्रित (बाल-केंद्रित) पाठ्यक्रम",
        "C": "शिक्षक-केन्द्रित पाठ्यचर्या",
        "D": "परीक्षा-उन्मुख पाठ्यक्रम"
      },
      "correctAnswer": "B",
      "explanation": "Learner-Centered curriculum design aligns learning activities with the child's developmental stages, curiosities, and personal growth, as endorsed by NEP 2020.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 131,
      "questionNumber": 131,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "topic_hi": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "Nalanda University",
        "B": "Vikramashila University",
        "C": "Odantapuri University",
        "D": "Taxila University"
      },
      "options_hi": {
        "A": "नालन्दा विश्वविद्यालय",
        "B": "विक्रमशिला विश्वविद्यालय",
        "C": "Odantapuri University",
        "D": "तक्षशिला विश्वविद्यालय"
      },
      "correctAnswer": "B",
      "explanation": "Vikramashila University was established by Pala Emperor Dharmapala at Antichak (Bhagalpur district, Bihar) as a premier Buddhist educational institution.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 132,
      "questionNumber": 132,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "topic_hi": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Mahatma Gandhi's first civil disobedience movement in India, launched in 1917 to support indigo farmers, occurred in:",
      "question_hi": "भारत में नील किसानों के समर्थन के लिए 1917 में शुरू किया गया महात्मा गांधी का पहला सविनय अवज्ञा आंदोलन कब हुआ:",
      "options": {
        "A": "Kheda",
        "B": "Champaran, Bihar",
        "C": "Dandi",
        "D": "Bardoli"
      },
      "options_hi": {
        "A": "खेड़ा",
        "B": "चंपारण, बिहार",
        "C": "दांडी",
        "D": "बारडोली"
      },
      "correctAnswer": "B",
      "explanation": "Champaran Satyagraha (1917) in Bihar was Gandhiji's first major satyagraha in India against the exploitative Tinkathia indigo cultivation system.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 133,
      "questionNumber": 133,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "topic_hi": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which Article of the Indian Constitution guarantees the 'Right to Equality before the Law'?",
      "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद 'कानून के समक्ष समानता का अधिकार' की गारंटी देता है?",
      "options": {
        "A": "Article 14",
        "B": "Article 19",
        "C": "Article 21",
        "D": "Article 32"
      },
      "options_hi": {
        "A": "अनुच्छेद 14",
        "B": "अनुच्छेद 19",
        "C": "अनुच्छेद 21",
        "D": "अनुच्छेद 32"
      },
      "correctAnswer": "A",
      "explanation": "Article 14 states that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 134,
      "questionNumber": 134,
      "section": "Other Skills",
      "topic": "Environmental Science",
      "topic_hi": "Environmental Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary cause of 'Eutrophication' in freshwater lakes and rivers?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: What is the primary cause of 'Eutrophication' in freshwater lakes and rivers के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "Heavy oil spills from cargo ships",
        "B": "Excess runoff of agricultural fertilizers (nitrates and phosphates)",
        "C": "Ozone layer depletion",
        "D": "Acidic rain containing sulfuric acid"
      },
      "options_hi": {
        "A": "मालवाहक जहाजों से भारी मात्रा में तेल का रिसाव",
        "B": "कृषि उर्वरकों का अत्यधिक अपवाह (नाइट्रेट और फॉस्फेट)",
        "C": "ओजोन परत का क्षरण",
        "D": "सल्फ्यूरिक एसिड युक्त अम्लीय वर्षा"
      },
      "correctAnswer": "B",
      "explanation": "Eutrophication occurs when excess plant nutrients (nitrates and phosphates from fertilizers and sewage) stimulate massive algal blooms that deplete dissolved oxygen.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 135,
      "questionNumber": 135,
      "section": "Other Skills",
      "topic": "Environmental Science",
      "topic_hi": "Environmental Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "According to Lindeman's Ten Percent Law in ecological energetics, how much energy is transferred from one trophic level to the next?",
      "question_hi": "पारिस्थितिक ऊर्जा विज्ञान में लिंडमैन के दस प्रतिशत नियम के अनुसार, कितनी ऊर्जा एक पोषी स्तर से दूसरे पोषी स्तर तक स्थानांतरित होती है?",
      "options": {
        "A": "1%",
        "B": "10%",
        "C": "50%",
        "D": "90%"
      },
      "options_hi": {
        "A": "1%",
        "B": "10%",
        "C": "50%",
        "D": "90%"
      },
      "correctAnswer": "B",
      "explanation": "Lindeman's Efficiency Law states that only about 10% of the energy stored as organic matter at one trophic level is transferred to the next trophic level; the remaining 90% is lost as metabolic heat.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 136,
      "questionNumber": 136,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "Mathematical Aptitude",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A shopkeeper buys an article for ₹500 and sells it for ₹650. What is his profit percentage?",
      "question_hi": "एक दुकानदार एक वस्तु ₹500 में खरीदता है और उसे ₹650 में बेचता है। उसका लाभ प्रतिशत क्या है?",
      "options": {
        "A": "20%",
        "B": "25%",
        "C": "30%",
        "D": "35%"
      },
      "options_hi": {
        "A": "20%",
        "B": "25%",
        "C": "30%",
        "D": "35%"
      },
      "correctAnswer": "C",
      "explanation": "Profit = Selling Price - Cost Price = 650 - 500 = ₹150. Profit Percentage = (Profit / CP) × 100 = (150 / 500) × 100 = 30%.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 137,
      "questionNumber": 137,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "Mathematical Aptitude",
      "marks": 1,
      "negativeMarks": 0,
      "question": "If the ratio of two numbers is 3 : 5 and their sum is 120, what is the larger number?",
      "question_hi": "यदि दो संख्याओं का अनुपात 3:5 है और उनका योग 120 है, तो बड़ी संख्या क्या है?",
      "options": {
        "A": "45",
        "B": "65",
        "C": "75",
        "D": "80%"
      },
      "options_hi": {
        "A": "45",
        "B": "65",
        "C": "75",
        "D": "80%"
      },
      "correctAnswer": "C",
      "explanation": "Total ratio units = 3 + 5 = 8 units. 1 unit = 120 / 8 = 15. The larger number = 5 × 15 = 75. (Smaller number is 3 × 15 = 45).",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 138,
      "questionNumber": 138,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "Logical Reasoning",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Complete the alphabetical series: B, D, G, K, P, ____?",
      "question_hi": "वर्णमाला क्रम को पूरा करें: B, D, G, K, P, ____?",
      "options": {
        "A": "T",
        "B": "U",
        "C": "V",
        "D": "W"
      },
      "options_hi": {
        "A": "T",
        "B": "U",
        "C": "V",
        "D": "W"
      },
      "correctAnswer": "C",
      "explanation": "Letter positions in alphabet: B(2) +2 -> D(4); D(4) +3 -> G(7); G(7) +4 -> K(11); K(11) +5 -> P(16); P(16) +6 -> V(22). The next letter is V.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 139,
      "questionNumber": 139,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "Logical Reasoning",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Statements: 1. Some pens are books. 2. All books are pencils. Conclusion: Some pens are pencils.",
      "question_hi": "कथन: 1. कुछ कलम किताबें हैं। 2. सभी किताबें पेंसिल हैं। निष्कर्ष: कुछ पेन पेंसिल हैं।",
      "options": {
        "A": "Definitely True",
        "B": "Definitely False",
        "C": "Probably True",
        "D": "Cannot be determined"
      },
      "options_hi": {
        "A": "निश्चित रूप से सच",
        "B": "निश्चित रूप से झूठ",
        "C": "Probably True",
        "D": "तय नहीं किया जा सकता"
      },
      "correctAnswer": "A",
      "explanation": "The intersection of 'pens' and 'books' falls entirely within the set of 'pencils'. Thus, some pens must be pencils. The conclusion is Definitely True.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 140,
      "questionNumber": 140,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "topic_hi": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "Nalanda University",
        "B": "Vikramashila University",
        "C": "Odantapuri University",
        "D": "Taxila University"
      },
      "options_hi": {
        "A": "नालन्दा विश्वविद्यालय",
        "B": "विक्रमशिला विश्वविद्यालय",
        "C": "Odantapuri University",
        "D": "तक्षशिला विश्वविद्यालय"
      },
      "correctAnswer": "B",
      "explanation": "Vikramashila University was established by Pala Emperor Dharmapala at Antichak (Bhagalpur district, Bihar) as a premier Buddhist educational institution.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 141,
      "questionNumber": 141,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "topic_hi": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Mahatma Gandhi's first civil disobedience movement in India, launched in 1917 to support indigo farmers, occurred in:",
      "question_hi": "भारत में नील किसानों के समर्थन के लिए 1917 में शुरू किया गया महात्मा गांधी का पहला सविनय अवज्ञा आंदोलन कब हुआ:",
      "options": {
        "A": "Kheda",
        "B": "Champaran, Bihar",
        "C": "Dandi",
        "D": "Bardoli"
      },
      "options_hi": {
        "A": "खेड़ा",
        "B": "चंपारण, बिहार",
        "C": "दांडी",
        "D": "बारडोली"
      },
      "correctAnswer": "B",
      "explanation": "Champaran Satyagraha (1917) in Bihar was Gandhiji's first major satyagraha in India against the exploitative Tinkathia indigo cultivation system.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 142,
      "questionNumber": 142,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "topic_hi": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which Article of the Indian Constitution guarantees the 'Right to Equality before the Law'?",
      "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद 'कानून के समक्ष समानता का अधिकार' की गारंटी देता है?",
      "options": {
        "A": "Article 14",
        "B": "Article 19",
        "C": "Article 21",
        "D": "Article 32"
      },
      "options_hi": {
        "A": "अनुच्छेद 14",
        "B": "अनुच्छेद 19",
        "C": "अनुच्छेद 21",
        "D": "अनुच्छेद 32"
      },
      "correctAnswer": "A",
      "explanation": "Article 14 states that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 143,
      "questionNumber": 143,
      "section": "Other Skills",
      "topic": "Environmental Science",
      "topic_hi": "Environmental Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary cause of 'Eutrophication' in freshwater lakes and rivers?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: What is the primary cause of 'Eutrophication' in freshwater lakes and rivers के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "Heavy oil spills from cargo ships",
        "B": "Excess runoff of agricultural fertilizers (nitrates and phosphates)",
        "C": "Ozone layer depletion",
        "D": "Acidic rain containing sulfuric acid"
      },
      "options_hi": {
        "A": "मालवाहक जहाजों से भारी मात्रा में तेल का रिसाव",
        "B": "कृषि उर्वरकों का अत्यधिक अपवाह (नाइट्रेट और फॉस्फेट)",
        "C": "ओजोन परत का क्षरण",
        "D": "सल्फ्यूरिक एसिड युक्त अम्लीय वर्षा"
      },
      "correctAnswer": "B",
      "explanation": "Eutrophication occurs when excess plant nutrients (nitrates and phosphates from fertilizers and sewage) stimulate massive algal blooms that deplete dissolved oxygen.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 144,
      "questionNumber": 144,
      "section": "Other Skills",
      "topic": "Environmental Science",
      "topic_hi": "Environmental Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "According to Lindeman's Ten Percent Law in ecological energetics, how much energy is transferred from one trophic level to the next?",
      "question_hi": "पारिस्थितिक ऊर्जा विज्ञान में लिंडमैन के दस प्रतिशत नियम के अनुसार, कितनी ऊर्जा एक पोषी स्तर से दूसरे पोषी स्तर तक स्थानांतरित होती है?",
      "options": {
        "A": "1%",
        "B": "10%",
        "C": "50%",
        "D": "90%"
      },
      "options_hi": {
        "A": "1%",
        "B": "10%",
        "C": "50%",
        "D": "90%"
      },
      "correctAnswer": "B",
      "explanation": "Lindeman's Efficiency Law states that only about 10% of the energy stored as organic matter at one trophic level is transferred to the next trophic level; the remaining 90% is lost as metabolic heat.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 145,
      "questionNumber": 145,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "Mathematical Aptitude",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A shopkeeper buys an article for ₹500 and sells it for ₹650. What is his profit percentage?",
      "question_hi": "एक दुकानदार एक वस्तु ₹500 में खरीदता है और उसे ₹650 में बेचता है। उसका लाभ प्रतिशत क्या है?",
      "options": {
        "A": "20%",
        "B": "25%",
        "C": "30%",
        "D": "35%"
      },
      "options_hi": {
        "A": "20%",
        "B": "25%",
        "C": "30%",
        "D": "35%"
      },
      "correctAnswer": "C",
      "explanation": "Profit = Selling Price - Cost Price = 650 - 500 = ₹150. Profit Percentage = (Profit / CP) × 100 = (150 / 500) × 100 = 30%.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 146,
      "questionNumber": 146,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "Mathematical Aptitude",
      "marks": 1,
      "negativeMarks": 0,
      "question": "If the ratio of two numbers is 3 : 5 and their sum is 120, what is the larger number?",
      "question_hi": "यदि दो संख्याओं का अनुपात 3:5 है और उनका योग 120 है, तो बड़ी संख्या क्या है?",
      "options": {
        "A": "45",
        "B": "65",
        "C": "75",
        "D": "80%"
      },
      "options_hi": {
        "A": "45",
        "B": "65",
        "C": "75",
        "D": "80%"
      },
      "correctAnswer": "C",
      "explanation": "Total ratio units = 3 + 5 = 8 units. 1 unit = 120 / 8 = 15. The larger number = 5 × 15 = 75. (Smaller number is 3 × 15 = 45).",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 147,
      "questionNumber": 147,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "Logical Reasoning",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Complete the alphabetical series: B, D, G, K, P, ____?",
      "question_hi": "वर्णमाला क्रम को पूरा करें: B, D, G, K, P, ____?",
      "options": {
        "A": "T",
        "B": "U",
        "C": "V",
        "D": "W"
      },
      "options_hi": {
        "A": "T",
        "B": "U",
        "C": "V",
        "D": "W"
      },
      "correctAnswer": "C",
      "explanation": "Letter positions in alphabet: B(2) +2 -> D(4); D(4) +3 -> G(7); G(7) +4 -> K(11); K(11) +5 -> P(16); P(16) +6 -> V(22). The next letter is V.",
      "explanation_hi": "सही विकल्प (C) है।"
    },
    {
      "id": 148,
      "questionNumber": 148,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "Logical Reasoning",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Statements: 1. Some pens are books. 2. All books are pencils. Conclusion: Some pens are pencils.",
      "question_hi": "कथन: 1. कुछ कलम किताबें हैं। 2. सभी किताबें पेंसिल हैं। निष्कर्ष: कुछ पेन पेंसिल हैं।",
      "options": {
        "A": "Definitely True",
        "B": "Definitely False",
        "C": "Probably True",
        "D": "Cannot be determined"
      },
      "options_hi": {
        "A": "निश्चित रूप से सच",
        "B": "निश्चित रूप से झूठ",
        "C": "Probably True",
        "D": "तय नहीं किया जा सकता"
      },
      "correctAnswer": "A",
      "explanation": "The intersection of 'pens' and 'books' falls entirely within the set of 'pencils'. Thus, some pens must be pencils. The conclusion is Definitely True.",
      "explanation_hi": "सही विकल्प (A) है।"
    },
    {
      "id": 149,
      "questionNumber": 149,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "topic_hi": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "Nalanda University",
        "B": "Vikramashila University",
        "C": "Odantapuri University",
        "D": "Taxila University"
      },
      "options_hi": {
        "A": "नालन्दा विश्वविद्यालय",
        "B": "विक्रमशिला विश्वविद्यालय",
        "C": "Odantapuri University",
        "D": "तक्षशिला विश्वविद्यालय"
      },
      "correctAnswer": "B",
      "explanation": "Vikramashila University was established by Pala Emperor Dharmapala at Antichak (Bhagalpur district, Bihar) as a premier Buddhist educational institution.",
      "explanation_hi": "सही विकल्प (B) है।"
    },
    {
      "id": 150,
      "questionNumber": 150,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "topic_hi": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Mahatma Gandhi's first civil disobedience movement in India, launched in 1917 to support indigo farmers, occurred in:",
      "question_hi": "भारत में नील किसानों के समर्थन के लिए 1917 में शुरू किया गया महात्मा गांधी का पहला सविनय अवज्ञा आंदोलन कब हुआ:",
      "options": {
        "A": "Kheda",
        "B": "Champaran, Bihar",
        "C": "Dandi",
        "D": "Bardoli"
      },
      "options_hi": {
        "A": "खेड़ा",
        "B": "चंपारण, बिहार",
        "C": "दांडी",
        "D": "बारडोली"
      },
      "correctAnswer": "B",
      "explanation": "Champaran Satyagraha (1917) in Bihar was Gandhiji's first major satyagraha in India against the exploitative Tinkathia indigo cultivation system.",
      "explanation_hi": "सही विकल्प (B) है।"
    }
  ]
};
