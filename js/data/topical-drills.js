// Generated Question Paper Data
window.topical_drills = {
  "drill_cs_100": {
    "id": "drill_cs_100",
    "title": "Computer Science 100Q Subject Mastery Drill",
    "subtitle": "Focused 100-Question Test on all 15 Units of Computer Science",
    "category": "Sectional Drill",
    "isOfficial": false,
    "totalQuestions": 100,
    "totalMarks": 100,
    "durationMinutes": 100,
    "sections": [
      {
        "id": "cs",
        "name": "Computer Science",
        "startQ": 1,
        "endQ": 100,
        "total": 100
      }
    ],
    "questions": [
      {
        "id": 1,
        "questionNumber": 1,
        "section": "Computer Science",
        "topic": "Algorithms",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the solution of the recurrence relation T(n) = 2T(n/2) + n by Master Theorem?",
        "options": {
          "A": "Θ(n)",
          "B": "Θ(n log n)",
          "C": "Θ(n²)",
          "D": "Θ(log n)"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Θ(n log n)**\n\n**Theoretical Analysis & Rule**:\nFor T(n) = aT(n/b) + f(n): a = 2, b = 2, f(n) = n. Here n^(log_b(a)) = n^(log₂2) = n¹. Since f(n) = Θ(n^(log_b(a))), Case 2 of Master Theorem applies: T(n) = Θ(n log n) (Merge Sort recurrence).",
        "topic_hi": "एल्गोरिदम एवं विश्लेषण",
        "question_hi": "मास्टर प्रमेय द्वारा पुनरावृत्ति संबंध T(n) = 2T(n/2) + n का समाधान क्या है?",
        "options_hi": {
          "A": "Θ(एन)",
          "B": "Θ(एन लॉग एन)",
          "C": "Θ(n²)",
          "D": "Θ(लॉग एन)"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Θ(n log n)?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 2,
        "questionNumber": 2,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which SQL command belongs to the Data Control Language (DCL) category?",
        "options": {
          "A": "SELECT",
          "B": "GRANT",
          "C": "ALTER",
          "D": "UPDATE"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) GRANT**\n\n**Theoretical Analysis & Rule**:\nDCL commands control privileges and access in the database. GRANT (gives user access) and REVOKE (withdraws access) are the primary DCL commands.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "Which SQL command belongs to the डेटा नियंत्रण भाषा (DCL) (DCL) category?",
        "options_hi": {
          "A": "चुनना",
          "B": "अनुदान",
          "C": "ALTER",
          "D": "UPDATE"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) GRANT?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 3,
        "questionNumber": 3,
        "section": "Computer Science",
        "topic": "Object Oriented Programming",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In C++, which keyword is used to resolve the 'Diamond Problem' of duplicate base class instances in multiple inheritance?",
        "options": {
          "A": "abstract",
          "B": "friend",
          "C": "virtual",
          "D": "static"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) virtual**\n\n**Theoretical Analysis & Rule**:\nDeclaring the intermediate base classes with 'virtual' inheritance (e.g., class B : virtual public A) ensures only one shared instance of class A is included in derived class D.",
        "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
        "question_hi": "C++ में, मल्टीपल इनहेरिटेंस में डुप्लिकेट बेस क्लास इंस्टेंसेस की 'डायमंड प्रॉब्लम' को हल करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_hi": {
          "A": "अमूर्त",
          "B": "दोस्त",
          "C": "आभासी",
          "D": "स्थिर"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) virtual?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 4,
        "questionNumber": 4,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In the Web of Things (WoT), smart physical devices are exposed and controlled using standard web technologies primarily via:",
        "options": {
          "A": "RESTful Web APIs and JSON",
          "B": "Raw binary serial ports",
          "C": "Assembly instructions",
          "D": "Modem dial-ups"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) RESTful Web APIs and JSON**\n\n**Theoretical Analysis & Rule**:\nThe Web of Things (WoT) integrates smart devices directly into the World Wide Web by using REST APIs, HTTP, WebSockets, and structured JSON data.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "वेब ऑफ थिंग्स (डब्ल्यूओटी) में, स्मार्ट भौतिक उपकरणों को मुख्य रूप से मानक वेब प्रौद्योगिकियों का उपयोग करके प्रदर्शित और नियंत्रित किया जाता है:",
        "options_hi": {
          "A": "रेस्टफुल वेब एपीआई और JSON",
          "B": "कच्चे बाइनरी सीरियल पोर्ट",
          "C": "एकत्र करने के लिए निर्देश",
          "D": "मॉडेम डायल-अप"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) RESTful Web APIs and JSON?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 5,
        "questionNumber": 5,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following logic families exhibits the highest switching speed and lowest propagation delay?",
        "options": {
          "A": "TTL (Transistor-Transistor Logic)",
          "B": "ECL (Emitter-Coupled Logic)",
          "C": "CMOS",
          "D": "NMOS"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) ECL (Emitter-Coupled Logic)**\n\n**Theoretical Analysis & Rule**:\nECL (Emitter-Coupled Logic) operates its transistors in the non-saturated active region rather than saturation, eliminating storage time delay and achieving propagation delays below 1 nanosecond (fastest among conventional families).",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "निम्नलिखित में से कौन सा तर्क परिवार उच्चतम स्विचिंग गति और सबसे कम प्रसार विलंब प्रदर्शित करता है?",
        "options_hi": {
          "A": "टीटीएल (ट्रांजिस्टर-ट्रांजिस्टर लॉजिक)",
          "B": "ईसीएल (एमिटर-युग्मित तर्क)",
          "C": "सीएमओएस",
          "D": "एनएमओएस"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) ECL (Emitter-Coupled Logic)?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 6,
        "questionNumber": 6,
        "section": "Computer Science",
        "topic": "Programming & Data Structures",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In a row-major 2D array A[1..M, 1..N] stored starting at base address B with element size S, what is the address formula for element A[i, j]?",
        "options": {
          "A": "B + [(i - 1) * N + (j - 1)] * S",
          "B": "B + [(j - 1) * M + (i - 1)] * S",
          "C": "B + [i * N + j] * S",
          "D": "B + [(i - 1) + (j - 1) * N] * S"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) B + [(i - 1) * N + (j - 1)] * S**\n\n**Theoretical Analysis & Rule**:\nIn row-major order, rows are placed contiguously in memory. To reach row i, you skip (i - 1) complete rows of N elements each, and then move (j - 1) elements into row i. Hence: Address = Base + [((i - 1) * N) + (j - 1)] * S.",
        "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
        "question_hi": "पंक्ति-प्रमुख 2D सरणी A[1..M, 1..N] में तत्व आकार S के साथ आधार पता B से शुरू करके संग्रहीत किया जाता है, तत्व A[i, j] के लिए पता सूत्र क्या है?",
        "options_hi": {
          "A": "बी + [(आई - 1) * एन + (जे - 1)] * एस",
          "B": "बी + [(जे - 1) * एम + (आई - 1)] * एस",
          "C": "बी + [आई * एन + जे] * एस",
          "D": "बी + [(आई - 1) + (जे - 1) * एन] * एस"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) B + [(i - 1) * N + (j - 1)] * S?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 7,
        "questionNumber": 7,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the state transition that occurs when a running process requires an I/O operation?",
        "options": {
          "A": "Running to Ready",
          "B": "Running to Waiting (Blocked)",
          "C": "Waiting to Ready",
          "D": "Ready to Running"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Running to Waiting (Blocked)**\n\n**Theoretical Analysis & Rule**:\nWhen a process requests an I/O operation or an event, the CPU cannot continue executing it until the I/O completes. The OS transitions the process from Running to Waiting (Blocked) state.",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "question_hi": "वह स्थिति परिवर्तन क्या है जो तब होता है जब किसी चालू प्रक्रिया के लिए I/O ऑपरेशन की आवश्यकता होती है?",
        "options_hi": {
          "A": "तैयार होने के लिए दौड़ना",
          "B": "प्रतीक्षा करने के लिए दौड़ना (अवरुद्ध)",
          "C": "तैयार होने की प्रतीक्षा में",
          "D": "दौड़ने के लिए तैयार"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Running to Waiting (Blocked)?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 8,
        "questionNumber": 8,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the CIDR prefix for a subnet with a subnet mask of 255.255.255.192?",
        "options": {
          "A": "/24",
          "B": "/25",
          "C": "/26",
          "D": "/27"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) /26**\n\n**Theoretical Analysis & Rule**:\n255.255.255.192 in binary: 8 + 8 + 8 + 2 (11000000) = 26 contiguous network bits. Hence the CIDR prefix notation is /26.",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "255.255.255.192 के सबनेट मास्क वाले सबनेट के लिए सीआईडीआर उपसर्ग क्या है?",
        "options_hi": {
          "A": "/24",
          "B": "/25",
          "C": "/26",
          "D": "/27"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) /26?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 9,
        "questionNumber": 9,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which PHP function is used to establish a connection to a MySQL database?",
        "options": {
          "A": "mysql_open()",
          "B": "mysqli_connect()",
          "C": "db_connect()",
          "D": "sql_link()"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) mysqli_connect()**\n\n**Theoretical Analysis & Rule**:\nmysqli_connect(host, user, password, dbname) is standard PHP function used to open a connection to a MySQL database server.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "MySQL डेटाबेस से कनेक्शन स्थापित करने के लिए किस PHP फ़ंक्शन का उपयोग किया जाता है?",
        "options_hi": {
          "A": "mysql_open()",
          "B": "mysqli_connect()",
          "C": "db_कनेक्ट()",
          "D": "sql_link()"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) mysqli_connect()?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 10,
        "questionNumber": 10,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "The electronic document interchange standard developed by ANSI for business transactions is called:",
        "options": {
          "A": "ANSI X12",
          "B": "ISO 9001",
          "C": "IEEE 802.3",
          "D": "RFC 2822"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) ANSI X12**\n\n**Theoretical Analysis & Rule**:\nANSI ASC X12 is the official American National Standards Institute standard for Electronic Data Interchange (EDI) used across retail, finance, and transport.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "व्यावसायिक लेनदेन के लिए ANSI द्वारा विकसित इलेक्ट्रॉनिक दस्तावेज़ इंटरचेंज मानक को कहा जाता है:",
        "options_hi": {
          "A": "एएनएसआई एक्स12",
          "B": "ISO 9001",
          "C": "आईईईई 802.3",
          "D": "आरएफसी 2822"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) ANSI X12?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 11,
        "questionNumber": 11,
        "section": "Computer Science",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the maximum addressable memory capacity of a CPU with a 32-bit address bus and byte-addressable architecture?",
        "options": {
          "A": "1 GB",
          "B": "2 GB",
          "C": "4 GB",
          "D": "8 GB"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 4 GB**\n\n**Theoretical Analysis & Rule**:\nA 32-bit address bus can generate 2³² unique addresses. With byte addressability (1 byte per address), total addressable space = 2³² bytes = 4,294,967,296 bytes = 4 GB.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "32-बिट एड्रेस बस और बाइट-एड्रेसेबल आर्किटेक्चर वाले सीपीयू की अधिकतम एड्रेसेबल मेमोरी क्षमता क्या है?",
        "options_hi": {
          "A": "1 जीबी",
          "B": "2 जीबी",
          "C": "4 जीबी",
          "D": "8 जीबी"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 4 GB?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 12,
        "questionNumber": 12,
        "section": "Computer Science",
        "topic": "Programming & Data Structures",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the number of edges in a tree with n vertices?",
        "options": {
          "A": "n",
          "B": "n - 1",
          "C": "n + 1",
          "D": "2n - 1"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) n - 1**\n\n**Theoretical Analysis & Rule**:\nBy mathematical definition, any connected acyclic graph (tree) with n vertices contains exactly (n - 1) edges.",
        "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
        "question_hi": "n शीर्षों वाले पेड़ में किनारों की संख्या कितनी होती है?",
        "options_hi": {
          "A": "n",
          "B": "एन - 1",
          "C": "एन + 1",
          "D": "2एन - 1"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) n - 1?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 13,
        "questionNumber": 13,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which Unix command is used to change the access permissions of a file?",
        "options": {
          "A": "chown",
          "B": "chmod",
          "C": "chgrp",
          "D": "grep"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) chmod**\n\n**Theoretical Analysis & Rule**:\n'chmod' (change mode) modifies the read, write, and execute permissions of files/directories in Unix/Linux. ('chown' changes file owner).",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "question_hi": "किसी फ़ाइल की एक्सेस अनुमतियों को बदलने के लिए किस यूनिक्स कमांड का उपयोग किया जाता है?",
        "options_hi": {
          "A": "चाउन",
          "B": "चामोद",
          "C": "सीएचजीआरपी",
          "D": "ग्रेप"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) chmod?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 14,
        "questionNumber": 14,
        "section": "Computer Science",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which level of coupling is considered the MOST desirable (weakest/cleanest) in structured software design?",
        "options": {
          "A": "Content Coupling",
          "B": "Common Coupling",
          "C": "Control Coupling",
          "D": "Data Coupling"
        },
        "correctAnswer": "D",
        "explanation": "**Correct Answer: (D) Data Coupling**\n\n**Theoretical Analysis & Rule**:\nGood software engineering strives for Low Coupling and High Cohesion. Data Coupling (modules share only simple data parameters) is the cleanest, least dependent coupling.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "संरचित सॉफ़्टवेयर डिज़ाइन में युग्मन के किस स्तर को सर्वाधिक वांछनीय (सबसे कमज़ोर/सबसे साफ़) माना जाता है?",
        "options_hi": {
          "A": "सामग्री युग्मन",
          "B": "सामान्य युग्मन",
          "C": "युग्मन को नियंत्रित करें",
          "D": "डेटा युग्मन"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (D) Data Coupling?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
      },
      {
        "id": 15,
        "questionNumber": 15,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following grammars is in Chomsky Normal Form (CNF)?",
        "options": {
          "A": "S -> aB | b",
          "B": "S -> AB | a",
          "C": "S -> ABC | a",
          "D": "S -> a | ε"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) S -> AB | a**\n\n**Theoretical Analysis & Rule**:\nIn Chomsky Normal Form (CNF), all production rules must be of the form A -> BC (two non-terminals) or A -> a (single terminal). Hence, S -> AB | a is in CNF.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "निम्नलिखित में से कौन सा व्याकरण चॉम्स्की नॉर्मल फॉर्म (CNF) में है?",
        "options_hi": {
          "A": "एस -> एबी | बी",
          "B": "एस -> एबी | ए",
          "C": "एस -> एबीसी | ए",
          "D": "एस -> ए | ε"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) S -> AB | a?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 16,
        "questionNumber": 16,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "How many select lines are required for a 64-to-1 Multiplexer (MUX)?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "8"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 6**\n\n**Theoretical Analysis & Rule**:\nFor a 2ⁿ-to-1 multiplexer, exactly n select lines are required. Since 64 = 2⁶, n = 6 select lines are needed to address all 64 input lines.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "64-टू-1 मल्टीप्लेक्सर (एमयूएक्स) के लिए कितनी चुनिंदा लाइनें आवश्यक हैं?",
        "options_hi": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "8"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 6?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 17,
        "questionNumber": 17,
        "section": "Computer Science",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following is a non-volatile optical or semiconductor memory that can be erased electrically in flash blocks?",
        "options": {
          "A": "SRAM",
          "B": "DRAM",
          "C": "EEPROM / Flash Memory",
          "D": "Mask ROM"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) EEPROM / Flash Memory**\n\n**Theoretical Analysis & Rule**:\nEEPROM (Electrically Erasable Programmable ROM) and Flash memory can be erased and reprogrammed electrically at the block or byte level without UV exposure.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "निम्नलिखित में से कौन सी एक गैर-वाष्पशील ऑप्टिकल या अर्धचालक मेमोरी है जिसे फ्लैश ब्लॉक में विद्युत रूप से मिटाया जा सकता है?",
        "options_hi": {
          "A": "एसआरएएम",
          "B": "घूंट",
          "C": "EEPROM / Flash Memory",
          "D": "मास्क रॉम"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) EEPROM / Flash Memory?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 18,
        "questionNumber": 18,
        "section": "Computer Science",
        "topic": "Algorithms",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What algorithmic paradigm is employed in solving the 8-Queens problem?",
        "options": {
          "A": "Greedy Method",
          "B": "Backtracking",
          "C": "Dynamic Programming",
          "D": "Divide and Conquer"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Backtracking**\n\n**Theoretical Analysis & Rule**:\nThe 8-Queens problem is solved using Backtracking: placing queens row by row and abandoning (backtracking from) non-viable partial solutions whenever a conflict arises.",
        "topic_hi": "एल्गोरिदम एवं विश्लेषण",
        "question_hi": "8-क्वींस समस्या को हल करने में कौन सा एल्गोरिथम प्रतिमान कार्यरत है?",
        "options_hi": {
          "A": "लालची तरीका",
          "B": "बैक ट्रैकिंग",
          "C": "डायनामिक प्रोग्रामिंग",
          "D": "फूट डालो और राज करो"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Backtracking?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 19,
        "questionNumber": 19,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary purpose of the Foreign Key in a relational table?",
        "options": {
          "A": "To ensure unique values in the current table",
          "B": "To establish referential integrity between two related tables",
          "C": "To prevent NULL values in a column",
          "D": "To speed up query sort orders"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) To establish referential integrity between two related tables**\n\n**Theoretical Analysis & Rule**:\nA Foreign Key points to the Primary Key of another table, ensuring Referential Integrity by restricting insertions or deletions that would create orphan records.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "संबंधपरक तालिका में विदेशी कुंजी का प्राथमिक उद्देश्य क्या है?",
        "options_hi": {
          "A": "वर्तमान तालिका में अद्वितीय मान सुनिश्चित करने के लिए",
          "B": "दो संबंधित तालिकाओं के बीच संदर्भात्मक अखंडता स्थापित करना",
          "C": "किसी कॉलम में NULL मानों को रोकने के लिए",
          "D": "क्वेरी सॉर्ट ऑर्डर को तेज़ करने के लिए"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) To establish referential integrity between two related tables?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 20,
        "questionNumber": 20,
        "section": "Computer Science",
        "topic": "Object Oriented Programming",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following members cannot be inherited by a derived class in C++?",
        "options": {
          "A": "Protected variables",
          "B": "Public methods",
          "C": "Constructors and Destructors",
          "D": "Virtual functions"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Constructors and Destructors**\n\n**Theoretical Analysis & Rule**:\nConstructors and Destructors are specific to the class they create and destroy; they are not inherited by derived classes, though base constructors are called during derived object initialization.",
        "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
        "question_hi": "निम्नलिखित में से कौन सा सदस्य C++ में व्युत्पन्न वर्ग द्वारा विरासत में नहीं लिया जा सकता है?",
        "options_hi": {
          "A": "संरक्षित चर",
          "B": "सार्वजनिक तरीके",
          "C": "निर्माता और विध्वंसक",
          "D": "आभासी कार्य"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Constructors and Destructors?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 21,
        "questionNumber": 21,
        "section": "Computer Science",
        "topic": "Algorithms",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which type of search algorithm always expands the lowest cost leaf node first where cost is f(n) = g(n) + h(n)?",
        "options": {
          "A": "Greedy Best-First Search",
          "B": "A* Search",
          "C": "Depth First Search",
          "D": "Breadth First Search"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) A* Search**\n\n**Theoretical Analysis & Rule**:\nA* search evaluates nodes by combining g(n) (cost from start to current node) and h(n) (estimated heuristic cost from current node to goal).",
        "topic_hi": "एल्गोरिदम एवं विश्लेषण",
        "question_hi": "किस प्रकार का खोज एल्गोरिदम हमेशा सबसे कम लागत वाले लीफ नोड को पहले विस्तारित करता है जहां लागत f(n) = g(n) + h(n) है?",
        "options_hi": {
          "A": "लालची सर्वोत्तम-प्रथम खोज",
          "B": "ए* खोजें",
          "C": "गहराई-प्रथम खोज (DFS)",
          "D": "चौड़ाई-प्रथम खोज (BFS)"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) A* Search?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 22,
        "questionNumber": 22,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the canonical representation form that expresses a Boolean function as a product of sum terms called?",
        "options": {
          "A": "Minterm form",
          "B": "Maxterm / POS form",
          "C": "Dual form",
          "D": "Disjunctive Normal Form"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Maxterm / POS form**\n\n**Theoretical Analysis & Rule**:\nProduct of Sums (POS) expresses a logic function as the AND combination (product) of OR terms (sums/maxterms), denoted by ΠM.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "कंप्यूटर साइंस अवधारणा: What is the canonical representation form that expresses a Boolean function as a product of sum terms called के संबंध में सही कथन या मान क्या है?",
        "options_hi": {
          "A": "मिन्टर्म फॉर्म",
          "B": "Maxterm / POS form",
          "C": "दोहरा रूप",
          "D": "विच्छेदनात्मक सामान्य रूप"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Maxterm / POS form?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 23,
        "questionNumber": 23,
        "section": "Computer Science",
        "topic": "Programming & Data Structures",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the time complexity to search for a key in a balanced AVL tree with n nodes?",
        "options": {
          "A": "O(1)",
          "B": "O(log n)",
          "C": "O(n)",
          "D": "O(n log n)"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) O(log n)**\n\n**Theoretical Analysis & Rule**:\nAn AVL tree is strictly balanced with maximum height bounded by 1.44 log₂(n). Therefore, search, insertion, and deletion operations all take guaranteed O(log n) time.",
        "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
        "question_hi": "n नोड्स वाले संतुलित AVL ट्री में कुंजी खोजने में समय की जटिलता क्या है?",
        "options_hi": {
          "A": "हे(1)",
          "B": "ओ(लॉग एन)",
          "C": "पर)",
          "D": "ओ(एन लॉग एन)"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) O(log n)?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 24,
        "questionNumber": 24,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In paging memory management, where is the Translation Lookaside Buffer (TLB) located?",
        "options": {
          "A": "On the hard disk",
          "B": "In main memory RAM",
          "C": "Inside the CPU Memory Management Unit (MMU) hardware cache",
          "D": "In secondary optical storage"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Inside the CPU Memory Management Unit (MMU) hardware cache**\n\n**Theoretical Analysis & Rule**:\nThe TLB is a high-speed associative hardware cache located directly within or adjacent to the CPU's MMU to store recent virtual-to-physical page table translations.",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "question_hi": "पेजिंग मेमोरी प्रबंधन में, ट्रांसलेशन लुकसाइड बफ़र (टीएलबी) कहाँ स्थित है?",
        "options_hi": {
          "A": "हार्ड डिस्क पर",
          "B": "मुख्य मेमोरी में RAM",
          "C": "सीपीयू मेमोरी मैनेजमेंट यूनिट (एमएमयू) हार्डवेयर कैश के अंदर",
          "D": "सेकेंडरी ऑप्टिकल स्टोरेज में"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Inside the CPU Memory Management Unit (MMU) hardware cache?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 25,
        "questionNumber": 25,
        "section": "Computer Science",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following is a Distance Vector routing protocol that uses hop count as its sole metric with a maximum limit of 15 hops?",
        "options": {
          "A": "OSPF",
          "B": "RIP (Routing Information Protocol)",
          "C": "BGP",
          "D": "IS-IS"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) RIP (Routing Information Protocol)**\n\n**Theoretical Analysis & Rule**:\nRIP is an interior gateway distance-vector protocol using hop count (1 to 15 hops; 16 signifies unreachable infinity) to prevent routing loops.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "निम्नलिखित में से कौन सा एक डिस्टेंस वेक्टर रूटिंग प्रोटोकॉल है जो 15 हॉप्स की अधिकतम सीमा के साथ हॉप काउंट को अपने एकमात्र मीट्रिक के रूप में उपयोग करता है?",
        "options_hi": {
          "A": "ओएसपीएफ",
          "B": "आरआईपी (रूटिंग सूचना प्रोटोकॉल)",
          "C": "BGP",
          "D": "आईएस-आईएस"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) RIP (Routing Information Protocol)?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 26,
        "questionNumber": 26,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the language recognized by a Deterministic Finite Automaton (DFA) that accepts strings over {0, 1} ending with '00'?",
        "options": {
          "A": "Context Free Language",
          "B": "Regular Language",
          "C": "Recursively Enumerable only",
          "D": "Non-computable Language"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Regular Language**\n\n**Theoretical Analysis & Rule**:\nAny language that can be recognized by a Finite Automaton (DFA or NFA) is by definition a Regular Language, represented by regular expression (0 + 1)*00.",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "नियतात्मक परिमित ऑटोमेटन (डीएफए) द्वारा मान्यता प्राप्त भाषा क्या है जो '00' के साथ समाप्त होने वाले {0, 1} से अधिक स्ट्रिंग को स्वीकार करती है?",
        "options_hi": {
          "A": "प्रसंग मुक्त भाषा",
          "B": "नियमित भाषा",
          "C": "केवल पुनरावर्ती रूप से गणना योग्य",
          "D": "गैर संगणनीय भाषा"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Regular Language?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 27,
        "questionNumber": 27,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which image compression standard utilizes Discrete Cosine Transform (DCT) and is lossy for digital photography?",
        "options": {
          "A": "PNG",
          "B": "JPEG",
          "C": "BMP",
          "D": "SVG"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) JPEG**\n\n**Theoretical Analysis & Rule**:\nJPEG (Joint Photographic Experts Group) uses Discrete Cosine Transform (DCT) lossy compression to discard high-frequency color variations less noticeable to the human eye.",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "कौन सा छवि संपीड़न मानक डिस्क्रीट कोसाइन ट्रांसफॉर्म (डीसीटी) का उपयोग करता है और डिजिटल फोटोग्राफी के लिए हानिकारक है?",
        "options_hi": {
          "A": "PNG",
          "B": "जेपीईजी",
          "C": "BMP",
          "D": "SVG"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) JPEG?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 28,
        "questionNumber": 28,
        "section": "Computer Science",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which cache mapping technique allows a main memory block to be loaded into any available cache block line?",
        "options": {
          "A": "Direct Mapping",
          "B": "Fully Associative Mapping",
          "C": "Set-Associative Mapping",
          "D": "Sector Mapping"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Fully Associative Mapping**\n\n**Theoretical Analysis & Rule**:\nIn Fully Associative Mapping, a memory block can be placed in any cache line. It offers the lowest conflict miss rate but requires an associative (content-addressable) comparison across all cache tags.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "कौन सी कैश मैपिंग तकनीक मुख्य मेमोरी ब्लॉक को किसी भी उपलब्ध कैश ब्लॉक लाइन में लोड करने की अनुमति देती है?",
        "options_hi": {
          "A": "प्रत्यक्ष मानचित्रण",
          "B": "पूरी तरह से सहयोगी मानचित्रण",
          "C": "सेट-एसोसिएटिव मैपिंग",
          "D": "सेक्टर मैपिंग"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Fully Associative Mapping?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 29,
        "questionNumber": 29,
        "section": "Computer Science",
        "topic": "Algorithms",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the solution of the recurrence relation T(n) = 2T(n/2) + n by Master Theorem?",
        "options": {
          "A": "Θ(n)",
          "B": "Θ(n log n)",
          "C": "Θ(n²)",
          "D": "Θ(log n)"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Θ(n log n)**\n\n**Theoretical Analysis & Rule**:\nFor T(n) = aT(n/b) + f(n): a = 2, b = 2, f(n) = n. Here n^(log_b(a)) = n^(log₂2) = n¹. Since f(n) = Θ(n^(log_b(a))), Case 2 of Master Theorem applies: T(n) = Θ(n log n) (Merge Sort recurrence).",
        "topic_hi": "एल्गोरिदम एवं विश्लेषण",
        "question_hi": "मास्टर प्रमेय द्वारा पुनरावृत्ति संबंध T(n) = 2T(n/2) + n का समाधान क्या है?",
        "options_hi": {
          "A": "Θ(एन)",
          "B": "Θ(एन लॉग एन)",
          "C": "Θ(n²)",
          "D": "Θ(लॉग एन)"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Θ(n log n)?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 30,
        "questionNumber": 30,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which SQL command belongs to the Data Control Language (DCL) category?",
        "options": {
          "A": "SELECT",
          "B": "GRANT",
          "C": "ALTER",
          "D": "UPDATE"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) GRANT**\n\n**Theoretical Analysis & Rule**:\nDCL commands control privileges and access in the database. GRANT (gives user access) and REVOKE (withdraws access) are the primary DCL commands.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "Which SQL command belongs to the डेटा नियंत्रण भाषा (DCL) (DCL) category?",
        "options_hi": {
          "A": "चुनना",
          "B": "अनुदान",
          "C": "ALTER",
          "D": "UPDATE"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) GRANT?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 31,
        "questionNumber": 31,
        "section": "Computer Science",
        "topic": "Object Oriented Programming",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In C++, which keyword is used to resolve the 'Diamond Problem' of duplicate base class instances in multiple inheritance?",
        "options": {
          "A": "abstract",
          "B": "friend",
          "C": "virtual",
          "D": "static"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) virtual**\n\n**Theoretical Analysis & Rule**:\nDeclaring the intermediate base classes with 'virtual' inheritance (e.g., class B : virtual public A) ensures only one shared instance of class A is included in derived class D.",
        "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
        "question_hi": "C++ में, मल्टीपल इनहेरिटेंस में डुप्लिकेट बेस क्लास इंस्टेंसेस की 'डायमंड प्रॉब्लम' को हल करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_hi": {
          "A": "अमूर्त",
          "B": "दोस्त",
          "C": "आभासी",
          "D": "स्थिर"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) virtual?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 32,
        "questionNumber": 32,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In the Web of Things (WoT), smart physical devices are exposed and controlled using standard web technologies primarily via:",
        "options": {
          "A": "RESTful Web APIs and JSON",
          "B": "Raw binary serial ports",
          "C": "Assembly instructions",
          "D": "Modem dial-ups"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) RESTful Web APIs and JSON**\n\n**Theoretical Analysis & Rule**:\nThe Web of Things (WoT) integrates smart devices directly into the World Wide Web by using REST APIs, HTTP, WebSockets, and structured JSON data.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "वेब ऑफ थिंग्स (डब्ल्यूओटी) में, स्मार्ट भौतिक उपकरणों को मुख्य रूप से मानक वेब प्रौद्योगिकियों का उपयोग करके प्रदर्शित और नियंत्रित किया जाता है:",
        "options_hi": {
          "A": "रेस्टफुल वेब एपीआई और JSON",
          "B": "कच्चे बाइनरी सीरियल पोर्ट",
          "C": "एकत्र करने के लिए निर्देश",
          "D": "मॉडेम डायल-अप"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) RESTful Web APIs and JSON?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 33,
        "questionNumber": 33,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following logic families exhibits the highest switching speed and lowest propagation delay?",
        "options": {
          "A": "TTL (Transistor-Transistor Logic)",
          "B": "ECL (Emitter-Coupled Logic)",
          "C": "CMOS",
          "D": "NMOS"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) ECL (Emitter-Coupled Logic)**\n\n**Theoretical Analysis & Rule**:\nECL (Emitter-Coupled Logic) operates its transistors in the non-saturated active region rather than saturation, eliminating storage time delay and achieving propagation delays below 1 nanosecond (fastest among conventional families).",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "निम्नलिखित में से कौन सा तर्क परिवार उच्चतम स्विचिंग गति और सबसे कम प्रसार विलंब प्रदर्शित करता है?",
        "options_hi": {
          "A": "टीटीएल (ट्रांजिस्टर-ट्रांजिस्टर लॉजिक)",
          "B": "ईसीएल (एमिटर-युग्मित तर्क)",
          "C": "सीएमओएस",
          "D": "एनएमओएस"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) ECL (Emitter-Coupled Logic)?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 34,
        "questionNumber": 34,
        "section": "Computer Science",
        "topic": "Programming & Data Structures",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In a row-major 2D array A[1..M, 1..N] stored starting at base address B with element size S, what is the address formula for element A[i, j]?",
        "options": {
          "A": "B + [(i - 1) * N + (j - 1)] * S",
          "B": "B + [(j - 1) * M + (i - 1)] * S",
          "C": "B + [i * N + j] * S",
          "D": "B + [(i - 1) + (j - 1) * N] * S"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) B + [(i - 1) * N + (j - 1)] * S**\n\n**Theoretical Analysis & Rule**:\nIn row-major order, rows are placed contiguously in memory. To reach row i, you skip (i - 1) complete rows of N elements each, and then move (j - 1) elements into row i. Hence: Address = Base + [((i - 1) * N) + (j - 1)] * S.",
        "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
        "question_hi": "पंक्ति-प्रमुख 2D सरणी A[1..M, 1..N] में तत्व आकार S के साथ आधार पता B से शुरू करके संग्रहीत किया जाता है, तत्व A[i, j] के लिए पता सूत्र क्या है?",
        "options_hi": {
          "A": "बी + [(आई - 1) * एन + (जे - 1)] * एस",
          "B": "बी + [(जे - 1) * एम + (आई - 1)] * एस",
          "C": "बी + [आई * एन + जे] * एस",
          "D": "बी + [(आई - 1) + (जे - 1) * एन] * एस"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) B + [(i - 1) * N + (j - 1)] * S?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 35,
        "questionNumber": 35,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the state transition that occurs when a running process requires an I/O operation?",
        "options": {
          "A": "Running to Ready",
          "B": "Running to Waiting (Blocked)",
          "C": "Waiting to Ready",
          "D": "Ready to Running"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Running to Waiting (Blocked)**\n\n**Theoretical Analysis & Rule**:\nWhen a process requests an I/O operation or an event, the CPU cannot continue executing it until the I/O completes. The OS transitions the process from Running to Waiting (Blocked) state.",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "question_hi": "वह स्थिति परिवर्तन क्या है जो तब होता है जब किसी चालू प्रक्रिया के लिए I/O ऑपरेशन की आवश्यकता होती है?",
        "options_hi": {
          "A": "तैयार होने के लिए दौड़ना",
          "B": "प्रतीक्षा करने के लिए दौड़ना (अवरुद्ध)",
          "C": "तैयार होने की प्रतीक्षा में",
          "D": "दौड़ने के लिए तैयार"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Running to Waiting (Blocked)?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 36,
        "questionNumber": 36,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the CIDR prefix for a subnet with a subnet mask of 255.255.255.192?",
        "options": {
          "A": "/24",
          "B": "/25",
          "C": "/26",
          "D": "/27"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) /26**\n\n**Theoretical Analysis & Rule**:\n255.255.255.192 in binary: 8 + 8 + 8 + 2 (11000000) = 26 contiguous network bits. Hence the CIDR prefix notation is /26.",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "255.255.255.192 के सबनेट मास्क वाले सबनेट के लिए सीआईडीआर उपसर्ग क्या है?",
        "options_hi": {
          "A": "/24",
          "B": "/25",
          "C": "/26",
          "D": "/27"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) /26?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 37,
        "questionNumber": 37,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which PHP function is used to establish a connection to a MySQL database?",
        "options": {
          "A": "mysql_open()",
          "B": "mysqli_connect()",
          "C": "db_connect()",
          "D": "sql_link()"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) mysqli_connect()**\n\n**Theoretical Analysis & Rule**:\nmysqli_connect(host, user, password, dbname) is standard PHP function used to open a connection to a MySQL database server.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "MySQL डेटाबेस से कनेक्शन स्थापित करने के लिए किस PHP फ़ंक्शन का उपयोग किया जाता है?",
        "options_hi": {
          "A": "mysql_open()",
          "B": "mysqli_connect()",
          "C": "db_कनेक्ट()",
          "D": "sql_link()"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) mysqli_connect()?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 38,
        "questionNumber": 38,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "The electronic document interchange standard developed by ANSI for business transactions is called:",
        "options": {
          "A": "ANSI X12",
          "B": "ISO 9001",
          "C": "IEEE 802.3",
          "D": "RFC 2822"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) ANSI X12**\n\n**Theoretical Analysis & Rule**:\nANSI ASC X12 is the official American National Standards Institute standard for Electronic Data Interchange (EDI) used across retail, finance, and transport.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "व्यावसायिक लेनदेन के लिए ANSI द्वारा विकसित इलेक्ट्रॉनिक दस्तावेज़ इंटरचेंज मानक को कहा जाता है:",
        "options_hi": {
          "A": "एएनएसआई एक्स12",
          "B": "ISO 9001",
          "C": "आईईईई 802.3",
          "D": "आरएफसी 2822"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) ANSI X12?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 39,
        "questionNumber": 39,
        "section": "Computer Science",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the maximum addressable memory capacity of a CPU with a 32-bit address bus and byte-addressable architecture?",
        "options": {
          "A": "1 GB",
          "B": "2 GB",
          "C": "4 GB",
          "D": "8 GB"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 4 GB**\n\n**Theoretical Analysis & Rule**:\nA 32-bit address bus can generate 2³² unique addresses. With byte addressability (1 byte per address), total addressable space = 2³² bytes = 4,294,967,296 bytes = 4 GB.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "32-बिट एड्रेस बस और बाइट-एड्रेसेबल आर्किटेक्चर वाले सीपीयू की अधिकतम एड्रेसेबल मेमोरी क्षमता क्या है?",
        "options_hi": {
          "A": "1 जीबी",
          "B": "2 जीबी",
          "C": "4 जीबी",
          "D": "8 जीबी"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 4 GB?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 40,
        "questionNumber": 40,
        "section": "Computer Science",
        "topic": "Programming & Data Structures",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the number of edges in a tree with n vertices?",
        "options": {
          "A": "n",
          "B": "n - 1",
          "C": "n + 1",
          "D": "2n - 1"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) n - 1**\n\n**Theoretical Analysis & Rule**:\nBy mathematical definition, any connected acyclic graph (tree) with n vertices contains exactly (n - 1) edges.",
        "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
        "question_hi": "n शीर्षों वाले पेड़ में किनारों की संख्या कितनी होती है?",
        "options_hi": {
          "A": "n",
          "B": "एन - 1",
          "C": "एन + 1",
          "D": "2एन - 1"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) n - 1?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 41,
        "questionNumber": 41,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which Unix command is used to change the access permissions of a file?",
        "options": {
          "A": "chown",
          "B": "chmod",
          "C": "chgrp",
          "D": "grep"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) chmod**\n\n**Theoretical Analysis & Rule**:\n'chmod' (change mode) modifies the read, write, and execute permissions of files/directories in Unix/Linux. ('chown' changes file owner).",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "question_hi": "किसी फ़ाइल की एक्सेस अनुमतियों को बदलने के लिए किस यूनिक्स कमांड का उपयोग किया जाता है?",
        "options_hi": {
          "A": "चाउन",
          "B": "चामोद",
          "C": "सीएचजीआरपी",
          "D": "ग्रेप"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) chmod?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 42,
        "questionNumber": 42,
        "section": "Computer Science",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which level of coupling is considered the MOST desirable (weakest/cleanest) in structured software design?",
        "options": {
          "A": "Content Coupling",
          "B": "Common Coupling",
          "C": "Control Coupling",
          "D": "Data Coupling"
        },
        "correctAnswer": "D",
        "explanation": "**Correct Answer: (D) Data Coupling**\n\n**Theoretical Analysis & Rule**:\nGood software engineering strives for Low Coupling and High Cohesion. Data Coupling (modules share only simple data parameters) is the cleanest, least dependent coupling.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "संरचित सॉफ़्टवेयर डिज़ाइन में युग्मन के किस स्तर को सर्वाधिक वांछनीय (सबसे कमज़ोर/सबसे साफ़) माना जाता है?",
        "options_hi": {
          "A": "सामग्री युग्मन",
          "B": "सामान्य युग्मन",
          "C": "युग्मन को नियंत्रित करें",
          "D": "डेटा युग्मन"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (D) Data Coupling?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
      },
      {
        "id": 43,
        "questionNumber": 43,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following grammars is in Chomsky Normal Form (CNF)?",
        "options": {
          "A": "S -> aB | b",
          "B": "S -> AB | a",
          "C": "S -> ABC | a",
          "D": "S -> a | ε"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) S -> AB | a**\n\n**Theoretical Analysis & Rule**:\nIn Chomsky Normal Form (CNF), all production rules must be of the form A -> BC (two non-terminals) or A -> a (single terminal). Hence, S -> AB | a is in CNF.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "निम्नलिखित में से कौन सा व्याकरण चॉम्स्की नॉर्मल फॉर्म (CNF) में है?",
        "options_hi": {
          "A": "एस -> एबी | बी",
          "B": "एस -> एबी | ए",
          "C": "एस -> एबीसी | ए",
          "D": "एस -> ए | ε"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) S -> AB | a?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 44,
        "questionNumber": 44,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "How many select lines are required for a 64-to-1 Multiplexer (MUX)?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "8"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 6**\n\n**Theoretical Analysis & Rule**:\nFor a 2ⁿ-to-1 multiplexer, exactly n select lines are required. Since 64 = 2⁶, n = 6 select lines are needed to address all 64 input lines.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "64-टू-1 मल्टीप्लेक्सर (एमयूएक्स) के लिए कितनी चुनिंदा लाइनें आवश्यक हैं?",
        "options_hi": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "8"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 6?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 45,
        "questionNumber": 45,
        "section": "Computer Science",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following is a non-volatile optical or semiconductor memory that can be erased electrically in flash blocks?",
        "options": {
          "A": "SRAM",
          "B": "DRAM",
          "C": "EEPROM / Flash Memory",
          "D": "Mask ROM"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) EEPROM / Flash Memory**\n\n**Theoretical Analysis & Rule**:\nEEPROM (Electrically Erasable Programmable ROM) and Flash memory can be erased and reprogrammed electrically at the block or byte level without UV exposure.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "निम्नलिखित में से कौन सी एक गैर-वाष्पशील ऑप्टिकल या अर्धचालक मेमोरी है जिसे फ्लैश ब्लॉक में विद्युत रूप से मिटाया जा सकता है?",
        "options_hi": {
          "A": "एसआरएएम",
          "B": "घूंट",
          "C": "EEPROM / Flash Memory",
          "D": "मास्क रॉम"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) EEPROM / Flash Memory?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 46,
        "questionNumber": 46,
        "section": "Computer Science",
        "topic": "Algorithms",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What algorithmic paradigm is employed in solving the 8-Queens problem?",
        "options": {
          "A": "Greedy Method",
          "B": "Backtracking",
          "C": "Dynamic Programming",
          "D": "Divide and Conquer"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Backtracking**\n\n**Theoretical Analysis & Rule**:\nThe 8-Queens problem is solved using Backtracking: placing queens row by row and abandoning (backtracking from) non-viable partial solutions whenever a conflict arises.",
        "topic_hi": "एल्गोरिदम एवं विश्लेषण",
        "question_hi": "8-क्वींस समस्या को हल करने में कौन सा एल्गोरिथम प्रतिमान कार्यरत है?",
        "options_hi": {
          "A": "लालची तरीका",
          "B": "बैक ट्रैकिंग",
          "C": "डायनामिक प्रोग्रामिंग",
          "D": "फूट डालो और राज करो"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Backtracking?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 47,
        "questionNumber": 47,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary purpose of the Foreign Key in a relational table?",
        "options": {
          "A": "To ensure unique values in the current table",
          "B": "To establish referential integrity between two related tables",
          "C": "To prevent NULL values in a column",
          "D": "To speed up query sort orders"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) To establish referential integrity between two related tables**\n\n**Theoretical Analysis & Rule**:\nA Foreign Key points to the Primary Key of another table, ensuring Referential Integrity by restricting insertions or deletions that would create orphan records.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "संबंधपरक तालिका में विदेशी कुंजी का प्राथमिक उद्देश्य क्या है?",
        "options_hi": {
          "A": "वर्तमान तालिका में अद्वितीय मान सुनिश्चित करने के लिए",
          "B": "दो संबंधित तालिकाओं के बीच संदर्भात्मक अखंडता स्थापित करना",
          "C": "किसी कॉलम में NULL मानों को रोकने के लिए",
          "D": "क्वेरी सॉर्ट ऑर्डर को तेज़ करने के लिए"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) To establish referential integrity between two related tables?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 48,
        "questionNumber": 48,
        "section": "Computer Science",
        "topic": "Object Oriented Programming",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following members cannot be inherited by a derived class in C++?",
        "options": {
          "A": "Protected variables",
          "B": "Public methods",
          "C": "Constructors and Destructors",
          "D": "Virtual functions"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Constructors and Destructors**\n\n**Theoretical Analysis & Rule**:\nConstructors and Destructors are specific to the class they create and destroy; they are not inherited by derived classes, though base constructors are called during derived object initialization.",
        "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
        "question_hi": "निम्नलिखित में से कौन सा सदस्य C++ में व्युत्पन्न वर्ग द्वारा विरासत में नहीं लिया जा सकता है?",
        "options_hi": {
          "A": "संरक्षित चर",
          "B": "सार्वजनिक तरीके",
          "C": "निर्माता और विध्वंसक",
          "D": "आभासी कार्य"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Constructors and Destructors?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 49,
        "questionNumber": 49,
        "section": "Computer Science",
        "topic": "Algorithms",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which type of search algorithm always expands the lowest cost leaf node first where cost is f(n) = g(n) + h(n)?",
        "options": {
          "A": "Greedy Best-First Search",
          "B": "A* Search",
          "C": "Depth First Search",
          "D": "Breadth First Search"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) A* Search**\n\n**Theoretical Analysis & Rule**:\nA* search evaluates nodes by combining g(n) (cost from start to current node) and h(n) (estimated heuristic cost from current node to goal).",
        "topic_hi": "एल्गोरिदम एवं विश्लेषण",
        "question_hi": "किस प्रकार का खोज एल्गोरिदम हमेशा सबसे कम लागत वाले लीफ नोड को पहले विस्तारित करता है जहां लागत f(n) = g(n) + h(n) है?",
        "options_hi": {
          "A": "लालची सर्वोत्तम-प्रथम खोज",
          "B": "ए* खोजें",
          "C": "गहराई-प्रथम खोज (DFS)",
          "D": "चौड़ाई-प्रथम खोज (BFS)"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) A* Search?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 50,
        "questionNumber": 50,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the canonical representation form that expresses a Boolean function as a product of sum terms called?",
        "options": {
          "A": "Minterm form",
          "B": "Maxterm / POS form",
          "C": "Dual form",
          "D": "Disjunctive Normal Form"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Maxterm / POS form**\n\n**Theoretical Analysis & Rule**:\nProduct of Sums (POS) expresses a logic function as the AND combination (product) of OR terms (sums/maxterms), denoted by ΠM.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "कंप्यूटर साइंस अवधारणा: What is the canonical representation form that expresses a Boolean function as a product of sum terms called के संबंध में सही कथन या मान क्या है?",
        "options_hi": {
          "A": "मिन्टर्म फॉर्म",
          "B": "Maxterm / POS form",
          "C": "दोहरा रूप",
          "D": "विच्छेदनात्मक सामान्य रूप"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Maxterm / POS form?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 51,
        "questionNumber": 51,
        "section": "Computer Science",
        "topic": "Programming & Data Structures",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the time complexity to search for a key in a balanced AVL tree with n nodes?",
        "options": {
          "A": "O(1)",
          "B": "O(log n)",
          "C": "O(n)",
          "D": "O(n log n)"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) O(log n)**\n\n**Theoretical Analysis & Rule**:\nAn AVL tree is strictly balanced with maximum height bounded by 1.44 log₂(n). Therefore, search, insertion, and deletion operations all take guaranteed O(log n) time.",
        "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
        "question_hi": "n नोड्स वाले संतुलित AVL ट्री में कुंजी खोजने में समय की जटिलता क्या है?",
        "options_hi": {
          "A": "हे(1)",
          "B": "ओ(लॉग एन)",
          "C": "पर)",
          "D": "ओ(एन लॉग एन)"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) O(log n)?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 52,
        "questionNumber": 52,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In paging memory management, where is the Translation Lookaside Buffer (TLB) located?",
        "options": {
          "A": "On the hard disk",
          "B": "In main memory RAM",
          "C": "Inside the CPU Memory Management Unit (MMU) hardware cache",
          "D": "In secondary optical storage"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Inside the CPU Memory Management Unit (MMU) hardware cache**\n\n**Theoretical Analysis & Rule**:\nThe TLB is a high-speed associative hardware cache located directly within or adjacent to the CPU's MMU to store recent virtual-to-physical page table translations.",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "question_hi": "पेजिंग मेमोरी प्रबंधन में, ट्रांसलेशन लुकसाइड बफ़र (टीएलबी) कहाँ स्थित है?",
        "options_hi": {
          "A": "हार्ड डिस्क पर",
          "B": "मुख्य मेमोरी में RAM",
          "C": "सीपीयू मेमोरी मैनेजमेंट यूनिट (एमएमयू) हार्डवेयर कैश के अंदर",
          "D": "सेकेंडरी ऑप्टिकल स्टोरेज में"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Inside the CPU Memory Management Unit (MMU) hardware cache?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 53,
        "questionNumber": 53,
        "section": "Computer Science",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following is a Distance Vector routing protocol that uses hop count as its sole metric with a maximum limit of 15 hops?",
        "options": {
          "A": "OSPF",
          "B": "RIP (Routing Information Protocol)",
          "C": "BGP",
          "D": "IS-IS"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) RIP (Routing Information Protocol)**\n\n**Theoretical Analysis & Rule**:\nRIP is an interior gateway distance-vector protocol using hop count (1 to 15 hops; 16 signifies unreachable infinity) to prevent routing loops.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "निम्नलिखित में से कौन सा एक डिस्टेंस वेक्टर रूटिंग प्रोटोकॉल है जो 15 हॉप्स की अधिकतम सीमा के साथ हॉप काउंट को अपने एकमात्र मीट्रिक के रूप में उपयोग करता है?",
        "options_hi": {
          "A": "ओएसपीएफ",
          "B": "आरआईपी (रूटिंग सूचना प्रोटोकॉल)",
          "C": "BGP",
          "D": "आईएस-आईएस"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) RIP (Routing Information Protocol)?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 54,
        "questionNumber": 54,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the language recognized by a Deterministic Finite Automaton (DFA) that accepts strings over {0, 1} ending with '00'?",
        "options": {
          "A": "Context Free Language",
          "B": "Regular Language",
          "C": "Recursively Enumerable only",
          "D": "Non-computable Language"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Regular Language**\n\n**Theoretical Analysis & Rule**:\nAny language that can be recognized by a Finite Automaton (DFA or NFA) is by definition a Regular Language, represented by regular expression (0 + 1)*00.",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "नियतात्मक परिमित ऑटोमेटन (डीएफए) द्वारा मान्यता प्राप्त भाषा क्या है जो '00' के साथ समाप्त होने वाले {0, 1} से अधिक स्ट्रिंग को स्वीकार करती है?",
        "options_hi": {
          "A": "प्रसंग मुक्त भाषा",
          "B": "नियमित भाषा",
          "C": "केवल पुनरावर्ती रूप से गणना योग्य",
          "D": "गैर संगणनीय भाषा"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Regular Language?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 55,
        "questionNumber": 55,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which image compression standard utilizes Discrete Cosine Transform (DCT) and is lossy for digital photography?",
        "options": {
          "A": "PNG",
          "B": "JPEG",
          "C": "BMP",
          "D": "SVG"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) JPEG**\n\n**Theoretical Analysis & Rule**:\nJPEG (Joint Photographic Experts Group) uses Discrete Cosine Transform (DCT) lossy compression to discard high-frequency color variations less noticeable to the human eye.",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "कौन सा छवि संपीड़न मानक डिस्क्रीट कोसाइन ट्रांसफॉर्म (डीसीटी) का उपयोग करता है और डिजिटल फोटोग्राफी के लिए हानिकारक है?",
        "options_hi": {
          "A": "PNG",
          "B": "जेपीईजी",
          "C": "BMP",
          "D": "SVG"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) JPEG?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 56,
        "questionNumber": 56,
        "section": "Computer Science",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which cache mapping technique allows a main memory block to be loaded into any available cache block line?",
        "options": {
          "A": "Direct Mapping",
          "B": "Fully Associative Mapping",
          "C": "Set-Associative Mapping",
          "D": "Sector Mapping"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Fully Associative Mapping**\n\n**Theoretical Analysis & Rule**:\nIn Fully Associative Mapping, a memory block can be placed in any cache line. It offers the lowest conflict miss rate but requires an associative (content-addressable) comparison across all cache tags.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "कौन सी कैश मैपिंग तकनीक मुख्य मेमोरी ब्लॉक को किसी भी उपलब्ध कैश ब्लॉक लाइन में लोड करने की अनुमति देती है?",
        "options_hi": {
          "A": "प्रत्यक्ष मानचित्रण",
          "B": "पूरी तरह से सहयोगी मानचित्रण",
          "C": "सेट-एसोसिएटिव मैपिंग",
          "D": "सेक्टर मैपिंग"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Fully Associative Mapping?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 57,
        "questionNumber": 57,
        "section": "Computer Science",
        "topic": "Algorithms",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the solution of the recurrence relation T(n) = 2T(n/2) + n by Master Theorem?",
        "options": {
          "A": "Θ(n)",
          "B": "Θ(n log n)",
          "C": "Θ(n²)",
          "D": "Θ(log n)"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Θ(n log n)**\n\n**Theoretical Analysis & Rule**:\nFor T(n) = aT(n/b) + f(n): a = 2, b = 2, f(n) = n. Here n^(log_b(a)) = n^(log₂2) = n¹. Since f(n) = Θ(n^(log_b(a))), Case 2 of Master Theorem applies: T(n) = Θ(n log n) (Merge Sort recurrence).",
        "topic_hi": "एल्गोरिदम एवं विश्लेषण",
        "question_hi": "मास्टर प्रमेय द्वारा पुनरावृत्ति संबंध T(n) = 2T(n/2) + n का समाधान क्या है?",
        "options_hi": {
          "A": "Θ(एन)",
          "B": "Θ(एन लॉग एन)",
          "C": "Θ(n²)",
          "D": "Θ(लॉग एन)"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Θ(n log n)?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 58,
        "questionNumber": 58,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which SQL command belongs to the Data Control Language (DCL) category?",
        "options": {
          "A": "SELECT",
          "B": "GRANT",
          "C": "ALTER",
          "D": "UPDATE"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) GRANT**\n\n**Theoretical Analysis & Rule**:\nDCL commands control privileges and access in the database. GRANT (gives user access) and REVOKE (withdraws access) are the primary DCL commands.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "Which SQL command belongs to the डेटा नियंत्रण भाषा (DCL) (DCL) category?",
        "options_hi": {
          "A": "चुनना",
          "B": "अनुदान",
          "C": "ALTER",
          "D": "UPDATE"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) GRANT?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 59,
        "questionNumber": 59,
        "section": "Computer Science",
        "topic": "Object Oriented Programming",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In C++, which keyword is used to resolve the 'Diamond Problem' of duplicate base class instances in multiple inheritance?",
        "options": {
          "A": "abstract",
          "B": "friend",
          "C": "virtual",
          "D": "static"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) virtual**\n\n**Theoretical Analysis & Rule**:\nDeclaring the intermediate base classes with 'virtual' inheritance (e.g., class B : virtual public A) ensures only one shared instance of class A is included in derived class D.",
        "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
        "question_hi": "C++ में, मल्टीपल इनहेरिटेंस में डुप्लिकेट बेस क्लास इंस्टेंसेस की 'डायमंड प्रॉब्लम' को हल करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_hi": {
          "A": "अमूर्त",
          "B": "दोस्त",
          "C": "आभासी",
          "D": "स्थिर"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) virtual?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 60,
        "questionNumber": 60,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In the Web of Things (WoT), smart physical devices are exposed and controlled using standard web technologies primarily via:",
        "options": {
          "A": "RESTful Web APIs and JSON",
          "B": "Raw binary serial ports",
          "C": "Assembly instructions",
          "D": "Modem dial-ups"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) RESTful Web APIs and JSON**\n\n**Theoretical Analysis & Rule**:\nThe Web of Things (WoT) integrates smart devices directly into the World Wide Web by using REST APIs, HTTP, WebSockets, and structured JSON data.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "वेब ऑफ थिंग्स (डब्ल्यूओटी) में, स्मार्ट भौतिक उपकरणों को मुख्य रूप से मानक वेब प्रौद्योगिकियों का उपयोग करके प्रदर्शित और नियंत्रित किया जाता है:",
        "options_hi": {
          "A": "रेस्टफुल वेब एपीआई और JSON",
          "B": "कच्चे बाइनरी सीरियल पोर्ट",
          "C": "एकत्र करने के लिए निर्देश",
          "D": "मॉडेम डायल-अप"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) RESTful Web APIs and JSON?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 61,
        "questionNumber": 61,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following logic families exhibits the highest switching speed and lowest propagation delay?",
        "options": {
          "A": "TTL (Transistor-Transistor Logic)",
          "B": "ECL (Emitter-Coupled Logic)",
          "C": "CMOS",
          "D": "NMOS"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) ECL (Emitter-Coupled Logic)**\n\n**Theoretical Analysis & Rule**:\nECL (Emitter-Coupled Logic) operates its transistors in the non-saturated active region rather than saturation, eliminating storage time delay and achieving propagation delays below 1 nanosecond (fastest among conventional families).",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "निम्नलिखित में से कौन सा तर्क परिवार उच्चतम स्विचिंग गति और सबसे कम प्रसार विलंब प्रदर्शित करता है?",
        "options_hi": {
          "A": "टीटीएल (ट्रांजिस्टर-ट्रांजिस्टर लॉजिक)",
          "B": "ईसीएल (एमिटर-युग्मित तर्क)",
          "C": "सीएमओएस",
          "D": "एनएमओएस"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) ECL (Emitter-Coupled Logic)?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 62,
        "questionNumber": 62,
        "section": "Computer Science",
        "topic": "Programming & Data Structures",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In a row-major 2D array A[1..M, 1..N] stored starting at base address B with element size S, what is the address formula for element A[i, j]?",
        "options": {
          "A": "B + [(i - 1) * N + (j - 1)] * S",
          "B": "B + [(j - 1) * M + (i - 1)] * S",
          "C": "B + [i * N + j] * S",
          "D": "B + [(i - 1) + (j - 1) * N] * S"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) B + [(i - 1) * N + (j - 1)] * S**\n\n**Theoretical Analysis & Rule**:\nIn row-major order, rows are placed contiguously in memory. To reach row i, you skip (i - 1) complete rows of N elements each, and then move (j - 1) elements into row i. Hence: Address = Base + [((i - 1) * N) + (j - 1)] * S.",
        "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
        "question_hi": "पंक्ति-प्रमुख 2D सरणी A[1..M, 1..N] में तत्व आकार S के साथ आधार पता B से शुरू करके संग्रहीत किया जाता है, तत्व A[i, j] के लिए पता सूत्र क्या है?",
        "options_hi": {
          "A": "बी + [(आई - 1) * एन + (जे - 1)] * एस",
          "B": "बी + [(जे - 1) * एम + (आई - 1)] * एस",
          "C": "बी + [आई * एन + जे] * एस",
          "D": "बी + [(आई - 1) + (जे - 1) * एन] * एस"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) B + [(i - 1) * N + (j - 1)] * S?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 63,
        "questionNumber": 63,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the state transition that occurs when a running process requires an I/O operation?",
        "options": {
          "A": "Running to Ready",
          "B": "Running to Waiting (Blocked)",
          "C": "Waiting to Ready",
          "D": "Ready to Running"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Running to Waiting (Blocked)**\n\n**Theoretical Analysis & Rule**:\nWhen a process requests an I/O operation or an event, the CPU cannot continue executing it until the I/O completes. The OS transitions the process from Running to Waiting (Blocked) state.",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "question_hi": "वह स्थिति परिवर्तन क्या है जो तब होता है जब किसी चालू प्रक्रिया के लिए I/O ऑपरेशन की आवश्यकता होती है?",
        "options_hi": {
          "A": "तैयार होने के लिए दौड़ना",
          "B": "प्रतीक्षा करने के लिए दौड़ना (अवरुद्ध)",
          "C": "तैयार होने की प्रतीक्षा में",
          "D": "दौड़ने के लिए तैयार"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Running to Waiting (Blocked)?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 64,
        "questionNumber": 64,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the CIDR prefix for a subnet with a subnet mask of 255.255.255.192?",
        "options": {
          "A": "/24",
          "B": "/25",
          "C": "/26",
          "D": "/27"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) /26**\n\n**Theoretical Analysis & Rule**:\n255.255.255.192 in binary: 8 + 8 + 8 + 2 (11000000) = 26 contiguous network bits. Hence the CIDR prefix notation is /26.",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "255.255.255.192 के सबनेट मास्क वाले सबनेट के लिए सीआईडीआर उपसर्ग क्या है?",
        "options_hi": {
          "A": "/24",
          "B": "/25",
          "C": "/26",
          "D": "/27"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) /26?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 65,
        "questionNumber": 65,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which PHP function is used to establish a connection to a MySQL database?",
        "options": {
          "A": "mysql_open()",
          "B": "mysqli_connect()",
          "C": "db_connect()",
          "D": "sql_link()"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) mysqli_connect()**\n\n**Theoretical Analysis & Rule**:\nmysqli_connect(host, user, password, dbname) is standard PHP function used to open a connection to a MySQL database server.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "MySQL डेटाबेस से कनेक्शन स्थापित करने के लिए किस PHP फ़ंक्शन का उपयोग किया जाता है?",
        "options_hi": {
          "A": "mysql_open()",
          "B": "mysqli_connect()",
          "C": "db_कनेक्ट()",
          "D": "sql_link()"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) mysqli_connect()?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 66,
        "questionNumber": 66,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "The electronic document interchange standard developed by ANSI for business transactions is called:",
        "options": {
          "A": "ANSI X12",
          "B": "ISO 9001",
          "C": "IEEE 802.3",
          "D": "RFC 2822"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) ANSI X12**\n\n**Theoretical Analysis & Rule**:\nANSI ASC X12 is the official American National Standards Institute standard for Electronic Data Interchange (EDI) used across retail, finance, and transport.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "व्यावसायिक लेनदेन के लिए ANSI द्वारा विकसित इलेक्ट्रॉनिक दस्तावेज़ इंटरचेंज मानक को कहा जाता है:",
        "options_hi": {
          "A": "एएनएसआई एक्स12",
          "B": "ISO 9001",
          "C": "आईईईई 802.3",
          "D": "आरएफसी 2822"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) ANSI X12?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 67,
        "questionNumber": 67,
        "section": "Computer Science",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the maximum addressable memory capacity of a CPU with a 32-bit address bus and byte-addressable architecture?",
        "options": {
          "A": "1 GB",
          "B": "2 GB",
          "C": "4 GB",
          "D": "8 GB"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 4 GB**\n\n**Theoretical Analysis & Rule**:\nA 32-bit address bus can generate 2³² unique addresses. With byte addressability (1 byte per address), total addressable space = 2³² bytes = 4,294,967,296 bytes = 4 GB.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "32-बिट एड्रेस बस और बाइट-एड्रेसेबल आर्किटेक्चर वाले सीपीयू की अधिकतम एड्रेसेबल मेमोरी क्षमता क्या है?",
        "options_hi": {
          "A": "1 जीबी",
          "B": "2 जीबी",
          "C": "4 जीबी",
          "D": "8 जीबी"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 4 GB?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 68,
        "questionNumber": 68,
        "section": "Computer Science",
        "topic": "Programming & Data Structures",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the number of edges in a tree with n vertices?",
        "options": {
          "A": "n",
          "B": "n - 1",
          "C": "n + 1",
          "D": "2n - 1"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) n - 1**\n\n**Theoretical Analysis & Rule**:\nBy mathematical definition, any connected acyclic graph (tree) with n vertices contains exactly (n - 1) edges.",
        "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
        "question_hi": "n शीर्षों वाले पेड़ में किनारों की संख्या कितनी होती है?",
        "options_hi": {
          "A": "n",
          "B": "एन - 1",
          "C": "एन + 1",
          "D": "2एन - 1"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) n - 1?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 69,
        "questionNumber": 69,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which Unix command is used to change the access permissions of a file?",
        "options": {
          "A": "chown",
          "B": "chmod",
          "C": "chgrp",
          "D": "grep"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) chmod**\n\n**Theoretical Analysis & Rule**:\n'chmod' (change mode) modifies the read, write, and execute permissions of files/directories in Unix/Linux. ('chown' changes file owner).",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "question_hi": "किसी फ़ाइल की एक्सेस अनुमतियों को बदलने के लिए किस यूनिक्स कमांड का उपयोग किया जाता है?",
        "options_hi": {
          "A": "चाउन",
          "B": "चामोद",
          "C": "सीएचजीआरपी",
          "D": "ग्रेप"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) chmod?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 70,
        "questionNumber": 70,
        "section": "Computer Science",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which level of coupling is considered the MOST desirable (weakest/cleanest) in structured software design?",
        "options": {
          "A": "Content Coupling",
          "B": "Common Coupling",
          "C": "Control Coupling",
          "D": "Data Coupling"
        },
        "correctAnswer": "D",
        "explanation": "**Correct Answer: (D) Data Coupling**\n\n**Theoretical Analysis & Rule**:\nGood software engineering strives for Low Coupling and High Cohesion. Data Coupling (modules share only simple data parameters) is the cleanest, least dependent coupling.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "संरचित सॉफ़्टवेयर डिज़ाइन में युग्मन के किस स्तर को सर्वाधिक वांछनीय (सबसे कमज़ोर/सबसे साफ़) माना जाता है?",
        "options_hi": {
          "A": "सामग्री युग्मन",
          "B": "सामान्य युग्मन",
          "C": "युग्मन को नियंत्रित करें",
          "D": "डेटा युग्मन"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (D) Data Coupling?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
      },
      {
        "id": 71,
        "questionNumber": 71,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following grammars is in Chomsky Normal Form (CNF)?",
        "options": {
          "A": "S -> aB | b",
          "B": "S -> AB | a",
          "C": "S -> ABC | a",
          "D": "S -> a | ε"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) S -> AB | a**\n\n**Theoretical Analysis & Rule**:\nIn Chomsky Normal Form (CNF), all production rules must be of the form A -> BC (two non-terminals) or A -> a (single terminal). Hence, S -> AB | a is in CNF.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "निम्नलिखित में से कौन सा व्याकरण चॉम्स्की नॉर्मल फॉर्म (CNF) में है?",
        "options_hi": {
          "A": "एस -> एबी | बी",
          "B": "एस -> एबी | ए",
          "C": "एस -> एबीसी | ए",
          "D": "एस -> ए | ε"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) S -> AB | a?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 72,
        "questionNumber": 72,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "How many select lines are required for a 64-to-1 Multiplexer (MUX)?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "8"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 6**\n\n**Theoretical Analysis & Rule**:\nFor a 2ⁿ-to-1 multiplexer, exactly n select lines are required. Since 64 = 2⁶, n = 6 select lines are needed to address all 64 input lines.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "64-टू-1 मल्टीप्लेक्सर (एमयूएक्स) के लिए कितनी चुनिंदा लाइनें आवश्यक हैं?",
        "options_hi": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "8"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 6?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 73,
        "questionNumber": 73,
        "section": "Computer Science",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following is a non-volatile optical or semiconductor memory that can be erased electrically in flash blocks?",
        "options": {
          "A": "SRAM",
          "B": "DRAM",
          "C": "EEPROM / Flash Memory",
          "D": "Mask ROM"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) EEPROM / Flash Memory**\n\n**Theoretical Analysis & Rule**:\nEEPROM (Electrically Erasable Programmable ROM) and Flash memory can be erased and reprogrammed electrically at the block or byte level without UV exposure.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "निम्नलिखित में से कौन सी एक गैर-वाष्पशील ऑप्टिकल या अर्धचालक मेमोरी है जिसे फ्लैश ब्लॉक में विद्युत रूप से मिटाया जा सकता है?",
        "options_hi": {
          "A": "एसआरएएम",
          "B": "घूंट",
          "C": "EEPROM / Flash Memory",
          "D": "मास्क रॉम"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) EEPROM / Flash Memory?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 74,
        "questionNumber": 74,
        "section": "Computer Science",
        "topic": "Algorithms",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What algorithmic paradigm is employed in solving the 8-Queens problem?",
        "options": {
          "A": "Greedy Method",
          "B": "Backtracking",
          "C": "Dynamic Programming",
          "D": "Divide and Conquer"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Backtracking**\n\n**Theoretical Analysis & Rule**:\nThe 8-Queens problem is solved using Backtracking: placing queens row by row and abandoning (backtracking from) non-viable partial solutions whenever a conflict arises.",
        "topic_hi": "एल्गोरिदम एवं विश्लेषण",
        "question_hi": "8-क्वींस समस्या को हल करने में कौन सा एल्गोरिथम प्रतिमान कार्यरत है?",
        "options_hi": {
          "A": "लालची तरीका",
          "B": "बैक ट्रैकिंग",
          "C": "डायनामिक प्रोग्रामिंग",
          "D": "फूट डालो और राज करो"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Backtracking?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 75,
        "questionNumber": 75,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary purpose of the Foreign Key in a relational table?",
        "options": {
          "A": "To ensure unique values in the current table",
          "B": "To establish referential integrity between two related tables",
          "C": "To prevent NULL values in a column",
          "D": "To speed up query sort orders"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) To establish referential integrity between two related tables**\n\n**Theoretical Analysis & Rule**:\nA Foreign Key points to the Primary Key of another table, ensuring Referential Integrity by restricting insertions or deletions that would create orphan records.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "संबंधपरक तालिका में विदेशी कुंजी का प्राथमिक उद्देश्य क्या है?",
        "options_hi": {
          "A": "वर्तमान तालिका में अद्वितीय मान सुनिश्चित करने के लिए",
          "B": "दो संबंधित तालिकाओं के बीच संदर्भात्मक अखंडता स्थापित करना",
          "C": "किसी कॉलम में NULL मानों को रोकने के लिए",
          "D": "क्वेरी सॉर्ट ऑर्डर को तेज़ करने के लिए"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) To establish referential integrity between two related tables?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 76,
        "questionNumber": 76,
        "section": "Computer Science",
        "topic": "Object Oriented Programming",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following members cannot be inherited by a derived class in C++?",
        "options": {
          "A": "Protected variables",
          "B": "Public methods",
          "C": "Constructors and Destructors",
          "D": "Virtual functions"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Constructors and Destructors**\n\n**Theoretical Analysis & Rule**:\nConstructors and Destructors are specific to the class they create and destroy; they are not inherited by derived classes, though base constructors are called during derived object initialization.",
        "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
        "question_hi": "निम्नलिखित में से कौन सा सदस्य C++ में व्युत्पन्न वर्ग द्वारा विरासत में नहीं लिया जा सकता है?",
        "options_hi": {
          "A": "संरक्षित चर",
          "B": "सार्वजनिक तरीके",
          "C": "निर्माता और विध्वंसक",
          "D": "आभासी कार्य"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Constructors and Destructors?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 77,
        "questionNumber": 77,
        "section": "Computer Science",
        "topic": "Algorithms",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which type of search algorithm always expands the lowest cost leaf node first where cost is f(n) = g(n) + h(n)?",
        "options": {
          "A": "Greedy Best-First Search",
          "B": "A* Search",
          "C": "Depth First Search",
          "D": "Breadth First Search"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) A* Search**\n\n**Theoretical Analysis & Rule**:\nA* search evaluates nodes by combining g(n) (cost from start to current node) and h(n) (estimated heuristic cost from current node to goal).",
        "topic_hi": "एल्गोरिदम एवं विश्लेषण",
        "question_hi": "किस प्रकार का खोज एल्गोरिदम हमेशा सबसे कम लागत वाले लीफ नोड को पहले विस्तारित करता है जहां लागत f(n) = g(n) + h(n) है?",
        "options_hi": {
          "A": "लालची सर्वोत्तम-प्रथम खोज",
          "B": "ए* खोजें",
          "C": "गहराई-प्रथम खोज (DFS)",
          "D": "चौड़ाई-प्रथम खोज (BFS)"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) A* Search?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 78,
        "questionNumber": 78,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the canonical representation form that expresses a Boolean function as a product of sum terms called?",
        "options": {
          "A": "Minterm form",
          "B": "Maxterm / POS form",
          "C": "Dual form",
          "D": "Disjunctive Normal Form"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Maxterm / POS form**\n\n**Theoretical Analysis & Rule**:\nProduct of Sums (POS) expresses a logic function as the AND combination (product) of OR terms (sums/maxterms), denoted by ΠM.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "कंप्यूटर साइंस अवधारणा: What is the canonical representation form that expresses a Boolean function as a product of sum terms called के संबंध में सही कथन या मान क्या है?",
        "options_hi": {
          "A": "मिन्टर्म फॉर्म",
          "B": "Maxterm / POS form",
          "C": "दोहरा रूप",
          "D": "विच्छेदनात्मक सामान्य रूप"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Maxterm / POS form?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 79,
        "questionNumber": 79,
        "section": "Computer Science",
        "topic": "Programming & Data Structures",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the time complexity to search for a key in a balanced AVL tree with n nodes?",
        "options": {
          "A": "O(1)",
          "B": "O(log n)",
          "C": "O(n)",
          "D": "O(n log n)"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) O(log n)**\n\n**Theoretical Analysis & Rule**:\nAn AVL tree is strictly balanced with maximum height bounded by 1.44 log₂(n). Therefore, search, insertion, and deletion operations all take guaranteed O(log n) time.",
        "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
        "question_hi": "n नोड्स वाले संतुलित AVL ट्री में कुंजी खोजने में समय की जटिलता क्या है?",
        "options_hi": {
          "A": "हे(1)",
          "B": "ओ(लॉग एन)",
          "C": "पर)",
          "D": "ओ(एन लॉग एन)"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) O(log n)?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 80,
        "questionNumber": 80,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In paging memory management, where is the Translation Lookaside Buffer (TLB) located?",
        "options": {
          "A": "On the hard disk",
          "B": "In main memory RAM",
          "C": "Inside the CPU Memory Management Unit (MMU) hardware cache",
          "D": "In secondary optical storage"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Inside the CPU Memory Management Unit (MMU) hardware cache**\n\n**Theoretical Analysis & Rule**:\nThe TLB is a high-speed associative hardware cache located directly within or adjacent to the CPU's MMU to store recent virtual-to-physical page table translations.",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "question_hi": "पेजिंग मेमोरी प्रबंधन में, ट्रांसलेशन लुकसाइड बफ़र (टीएलबी) कहाँ स्थित है?",
        "options_hi": {
          "A": "हार्ड डिस्क पर",
          "B": "मुख्य मेमोरी में RAM",
          "C": "सीपीयू मेमोरी मैनेजमेंट यूनिट (एमएमयू) हार्डवेयर कैश के अंदर",
          "D": "सेकेंडरी ऑप्टिकल स्टोरेज में"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Inside the CPU Memory Management Unit (MMU) hardware cache?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 81,
        "questionNumber": 81,
        "section": "Computer Science",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following is a Distance Vector routing protocol that uses hop count as its sole metric with a maximum limit of 15 hops?",
        "options": {
          "A": "OSPF",
          "B": "RIP (Routing Information Protocol)",
          "C": "BGP",
          "D": "IS-IS"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) RIP (Routing Information Protocol)**\n\n**Theoretical Analysis & Rule**:\nRIP is an interior gateway distance-vector protocol using hop count (1 to 15 hops; 16 signifies unreachable infinity) to prevent routing loops.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "निम्नलिखित में से कौन सा एक डिस्टेंस वेक्टर रूटिंग प्रोटोकॉल है जो 15 हॉप्स की अधिकतम सीमा के साथ हॉप काउंट को अपने एकमात्र मीट्रिक के रूप में उपयोग करता है?",
        "options_hi": {
          "A": "ओएसपीएफ",
          "B": "आरआईपी (रूटिंग सूचना प्रोटोकॉल)",
          "C": "BGP",
          "D": "आईएस-आईएस"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) RIP (Routing Information Protocol)?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 82,
        "questionNumber": 82,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the language recognized by a Deterministic Finite Automaton (DFA) that accepts strings over {0, 1} ending with '00'?",
        "options": {
          "A": "Context Free Language",
          "B": "Regular Language",
          "C": "Recursively Enumerable only",
          "D": "Non-computable Language"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Regular Language**\n\n**Theoretical Analysis & Rule**:\nAny language that can be recognized by a Finite Automaton (DFA or NFA) is by definition a Regular Language, represented by regular expression (0 + 1)*00.",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "नियतात्मक परिमित ऑटोमेटन (डीएफए) द्वारा मान्यता प्राप्त भाषा क्या है जो '00' के साथ समाप्त होने वाले {0, 1} से अधिक स्ट्रिंग को स्वीकार करती है?",
        "options_hi": {
          "A": "प्रसंग मुक्त भाषा",
          "B": "नियमित भाषा",
          "C": "केवल पुनरावर्ती रूप से गणना योग्य",
          "D": "गैर संगणनीय भाषा"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Regular Language?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 83,
        "questionNumber": 83,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which image compression standard utilizes Discrete Cosine Transform (DCT) and is lossy for digital photography?",
        "options": {
          "A": "PNG",
          "B": "JPEG",
          "C": "BMP",
          "D": "SVG"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) JPEG**\n\n**Theoretical Analysis & Rule**:\nJPEG (Joint Photographic Experts Group) uses Discrete Cosine Transform (DCT) lossy compression to discard high-frequency color variations less noticeable to the human eye.",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "कौन सा छवि संपीड़न मानक डिस्क्रीट कोसाइन ट्रांसफॉर्म (डीसीटी) का उपयोग करता है और डिजिटल फोटोग्राफी के लिए हानिकारक है?",
        "options_hi": {
          "A": "PNG",
          "B": "जेपीईजी",
          "C": "BMP",
          "D": "SVG"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) JPEG?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 84,
        "questionNumber": 84,
        "section": "Computer Science",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which cache mapping technique allows a main memory block to be loaded into any available cache block line?",
        "options": {
          "A": "Direct Mapping",
          "B": "Fully Associative Mapping",
          "C": "Set-Associative Mapping",
          "D": "Sector Mapping"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Fully Associative Mapping**\n\n**Theoretical Analysis & Rule**:\nIn Fully Associative Mapping, a memory block can be placed in any cache line. It offers the lowest conflict miss rate but requires an associative (content-addressable) comparison across all cache tags.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "कौन सी कैश मैपिंग तकनीक मुख्य मेमोरी ब्लॉक को किसी भी उपलब्ध कैश ब्लॉक लाइन में लोड करने की अनुमति देती है?",
        "options_hi": {
          "A": "प्रत्यक्ष मानचित्रण",
          "B": "पूरी तरह से सहयोगी मानचित्रण",
          "C": "सेट-एसोसिएटिव मैपिंग",
          "D": "सेक्टर मैपिंग"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Fully Associative Mapping?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 85,
        "questionNumber": 85,
        "section": "Computer Science",
        "topic": "Algorithms",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the solution of the recurrence relation T(n) = 2T(n/2) + n by Master Theorem?",
        "options": {
          "A": "Θ(n)",
          "B": "Θ(n log n)",
          "C": "Θ(n²)",
          "D": "Θ(log n)"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Θ(n log n)**\n\n**Theoretical Analysis & Rule**:\nFor T(n) = aT(n/b) + f(n): a = 2, b = 2, f(n) = n. Here n^(log_b(a)) = n^(log₂2) = n¹. Since f(n) = Θ(n^(log_b(a))), Case 2 of Master Theorem applies: T(n) = Θ(n log n) (Merge Sort recurrence).",
        "topic_hi": "एल्गोरिदम एवं विश्लेषण",
        "question_hi": "मास्टर प्रमेय द्वारा पुनरावृत्ति संबंध T(n) = 2T(n/2) + n का समाधान क्या है?",
        "options_hi": {
          "A": "Θ(एन)",
          "B": "Θ(एन लॉग एन)",
          "C": "Θ(n²)",
          "D": "Θ(लॉग एन)"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Θ(n log n)?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 86,
        "questionNumber": 86,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which SQL command belongs to the Data Control Language (DCL) category?",
        "options": {
          "A": "SELECT",
          "B": "GRANT",
          "C": "ALTER",
          "D": "UPDATE"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) GRANT**\n\n**Theoretical Analysis & Rule**:\nDCL commands control privileges and access in the database. GRANT (gives user access) and REVOKE (withdraws access) are the primary DCL commands.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "Which SQL command belongs to the डेटा नियंत्रण भाषा (DCL) (DCL) category?",
        "options_hi": {
          "A": "चुनना",
          "B": "अनुदान",
          "C": "ALTER",
          "D": "UPDATE"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) GRANT?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 87,
        "questionNumber": 87,
        "section": "Computer Science",
        "topic": "Object Oriented Programming",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In C++, which keyword is used to resolve the 'Diamond Problem' of duplicate base class instances in multiple inheritance?",
        "options": {
          "A": "abstract",
          "B": "friend",
          "C": "virtual",
          "D": "static"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) virtual**\n\n**Theoretical Analysis & Rule**:\nDeclaring the intermediate base classes with 'virtual' inheritance (e.g., class B : virtual public A) ensures only one shared instance of class A is included in derived class D.",
        "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
        "question_hi": "C++ में, मल्टीपल इनहेरिटेंस में डुप्लिकेट बेस क्लास इंस्टेंसेस की 'डायमंड प्रॉब्लम' को हल करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_hi": {
          "A": "अमूर्त",
          "B": "दोस्त",
          "C": "आभासी",
          "D": "स्थिर"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) virtual?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 88,
        "questionNumber": 88,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In the Web of Things (WoT), smart physical devices are exposed and controlled using standard web technologies primarily via:",
        "options": {
          "A": "RESTful Web APIs and JSON",
          "B": "Raw binary serial ports",
          "C": "Assembly instructions",
          "D": "Modem dial-ups"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) RESTful Web APIs and JSON**\n\n**Theoretical Analysis & Rule**:\nThe Web of Things (WoT) integrates smart devices directly into the World Wide Web by using REST APIs, HTTP, WebSockets, and structured JSON data.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "वेब ऑफ थिंग्स (डब्ल्यूओटी) में, स्मार्ट भौतिक उपकरणों को मुख्य रूप से मानक वेब प्रौद्योगिकियों का उपयोग करके प्रदर्शित और नियंत्रित किया जाता है:",
        "options_hi": {
          "A": "रेस्टफुल वेब एपीआई और JSON",
          "B": "कच्चे बाइनरी सीरियल पोर्ट",
          "C": "एकत्र करने के लिए निर्देश",
          "D": "मॉडेम डायल-अप"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) RESTful Web APIs and JSON?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 89,
        "questionNumber": 89,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following logic families exhibits the highest switching speed and lowest propagation delay?",
        "options": {
          "A": "TTL (Transistor-Transistor Logic)",
          "B": "ECL (Emitter-Coupled Logic)",
          "C": "CMOS",
          "D": "NMOS"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) ECL (Emitter-Coupled Logic)**\n\n**Theoretical Analysis & Rule**:\nECL (Emitter-Coupled Logic) operates its transistors in the non-saturated active region rather than saturation, eliminating storage time delay and achieving propagation delays below 1 nanosecond (fastest among conventional families).",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "निम्नलिखित में से कौन सा तर्क परिवार उच्चतम स्विचिंग गति और सबसे कम प्रसार विलंब प्रदर्शित करता है?",
        "options_hi": {
          "A": "टीटीएल (ट्रांजिस्टर-ट्रांजिस्टर लॉजिक)",
          "B": "ईसीएल (एमिटर-युग्मित तर्क)",
          "C": "सीएमओएस",
          "D": "एनएमओएस"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) ECL (Emitter-Coupled Logic)?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 90,
        "questionNumber": 90,
        "section": "Computer Science",
        "topic": "Programming & Data Structures",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In a row-major 2D array A[1..M, 1..N] stored starting at base address B with element size S, what is the address formula for element A[i, j]?",
        "options": {
          "A": "B + [(i - 1) * N + (j - 1)] * S",
          "B": "B + [(j - 1) * M + (i - 1)] * S",
          "C": "B + [i * N + j] * S",
          "D": "B + [(i - 1) + (j - 1) * N] * S"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) B + [(i - 1) * N + (j - 1)] * S**\n\n**Theoretical Analysis & Rule**:\nIn row-major order, rows are placed contiguously in memory. To reach row i, you skip (i - 1) complete rows of N elements each, and then move (j - 1) elements into row i. Hence: Address = Base + [((i - 1) * N) + (j - 1)] * S.",
        "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
        "question_hi": "पंक्ति-प्रमुख 2D सरणी A[1..M, 1..N] में तत्व आकार S के साथ आधार पता B से शुरू करके संग्रहीत किया जाता है, तत्व A[i, j] के लिए पता सूत्र क्या है?",
        "options_hi": {
          "A": "बी + [(आई - 1) * एन + (जे - 1)] * एस",
          "B": "बी + [(जे - 1) * एम + (आई - 1)] * एस",
          "C": "बी + [आई * एन + जे] * एस",
          "D": "बी + [(आई - 1) + (जे - 1) * एन] * एस"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) B + [(i - 1) * N + (j - 1)] * S?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 91,
        "questionNumber": 91,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the state transition that occurs when a running process requires an I/O operation?",
        "options": {
          "A": "Running to Ready",
          "B": "Running to Waiting (Blocked)",
          "C": "Waiting to Ready",
          "D": "Ready to Running"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Running to Waiting (Blocked)**\n\n**Theoretical Analysis & Rule**:\nWhen a process requests an I/O operation or an event, the CPU cannot continue executing it until the I/O completes. The OS transitions the process from Running to Waiting (Blocked) state.",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "question_hi": "वह स्थिति परिवर्तन क्या है जो तब होता है जब किसी चालू प्रक्रिया के लिए I/O ऑपरेशन की आवश्यकता होती है?",
        "options_hi": {
          "A": "तैयार होने के लिए दौड़ना",
          "B": "प्रतीक्षा करने के लिए दौड़ना (अवरुद्ध)",
          "C": "तैयार होने की प्रतीक्षा में",
          "D": "दौड़ने के लिए तैयार"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Running to Waiting (Blocked)?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 92,
        "questionNumber": 92,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the CIDR prefix for a subnet with a subnet mask of 255.255.255.192?",
        "options": {
          "A": "/24",
          "B": "/25",
          "C": "/26",
          "D": "/27"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) /26**\n\n**Theoretical Analysis & Rule**:\n255.255.255.192 in binary: 8 + 8 + 8 + 2 (11000000) = 26 contiguous network bits. Hence the CIDR prefix notation is /26.",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "255.255.255.192 के सबनेट मास्क वाले सबनेट के लिए सीआईडीआर उपसर्ग क्या है?",
        "options_hi": {
          "A": "/24",
          "B": "/25",
          "C": "/26",
          "D": "/27"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) /26?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 93,
        "questionNumber": 93,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which PHP function is used to establish a connection to a MySQL database?",
        "options": {
          "A": "mysql_open()",
          "B": "mysqli_connect()",
          "C": "db_connect()",
          "D": "sql_link()"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) mysqli_connect()**\n\n**Theoretical Analysis & Rule**:\nmysqli_connect(host, user, password, dbname) is standard PHP function used to open a connection to a MySQL database server.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "MySQL डेटाबेस से कनेक्शन स्थापित करने के लिए किस PHP फ़ंक्शन का उपयोग किया जाता है?",
        "options_hi": {
          "A": "mysql_open()",
          "B": "mysqli_connect()",
          "C": "db_कनेक्ट()",
          "D": "sql_link()"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) mysqli_connect()?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 94,
        "questionNumber": 94,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "The electronic document interchange standard developed by ANSI for business transactions is called:",
        "options": {
          "A": "ANSI X12",
          "B": "ISO 9001",
          "C": "IEEE 802.3",
          "D": "RFC 2822"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) ANSI X12**\n\n**Theoretical Analysis & Rule**:\nANSI ASC X12 is the official American National Standards Institute standard for Electronic Data Interchange (EDI) used across retail, finance, and transport.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "व्यावसायिक लेनदेन के लिए ANSI द्वारा विकसित इलेक्ट्रॉनिक दस्तावेज़ इंटरचेंज मानक को कहा जाता है:",
        "options_hi": {
          "A": "एएनएसआई एक्स12",
          "B": "ISO 9001",
          "C": "आईईईई 802.3",
          "D": "आरएफसी 2822"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) ANSI X12?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 95,
        "questionNumber": 95,
        "section": "Computer Science",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the maximum addressable memory capacity of a CPU with a 32-bit address bus and byte-addressable architecture?",
        "options": {
          "A": "1 GB",
          "B": "2 GB",
          "C": "4 GB",
          "D": "8 GB"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 4 GB**\n\n**Theoretical Analysis & Rule**:\nA 32-bit address bus can generate 2³² unique addresses. With byte addressability (1 byte per address), total addressable space = 2³² bytes = 4,294,967,296 bytes = 4 GB.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "32-बिट एड्रेस बस और बाइट-एड्रेसेबल आर्किटेक्चर वाले सीपीयू की अधिकतम एड्रेसेबल मेमोरी क्षमता क्या है?",
        "options_hi": {
          "A": "1 जीबी",
          "B": "2 जीबी",
          "C": "4 जीबी",
          "D": "8 जीबी"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 4 GB?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 96,
        "questionNumber": 96,
        "section": "Computer Science",
        "topic": "Programming & Data Structures",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the number of edges in a tree with n vertices?",
        "options": {
          "A": "n",
          "B": "n - 1",
          "C": "n + 1",
          "D": "2n - 1"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) n - 1**\n\n**Theoretical Analysis & Rule**:\nBy mathematical definition, any connected acyclic graph (tree) with n vertices contains exactly (n - 1) edges.",
        "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
        "question_hi": "n शीर्षों वाले पेड़ में किनारों की संख्या कितनी होती है?",
        "options_hi": {
          "A": "n",
          "B": "एन - 1",
          "C": "एन + 1",
          "D": "2एन - 1"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) n - 1?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 97,
        "questionNumber": 97,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which Unix command is used to change the access permissions of a file?",
        "options": {
          "A": "chown",
          "B": "chmod",
          "C": "chgrp",
          "D": "grep"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) chmod**\n\n**Theoretical Analysis & Rule**:\n'chmod' (change mode) modifies the read, write, and execute permissions of files/directories in Unix/Linux. ('chown' changes file owner).",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "question_hi": "किसी फ़ाइल की एक्सेस अनुमतियों को बदलने के लिए किस यूनिक्स कमांड का उपयोग किया जाता है?",
        "options_hi": {
          "A": "चाउन",
          "B": "चामोद",
          "C": "सीएचजीआरपी",
          "D": "ग्रेप"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) chmod?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 98,
        "questionNumber": 98,
        "section": "Computer Science",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which level of coupling is considered the MOST desirable (weakest/cleanest) in structured software design?",
        "options": {
          "A": "Content Coupling",
          "B": "Common Coupling",
          "C": "Control Coupling",
          "D": "Data Coupling"
        },
        "correctAnswer": "D",
        "explanation": "**Correct Answer: (D) Data Coupling**\n\n**Theoretical Analysis & Rule**:\nGood software engineering strives for Low Coupling and High Cohesion. Data Coupling (modules share only simple data parameters) is the cleanest, least dependent coupling.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "संरचित सॉफ़्टवेयर डिज़ाइन में युग्मन के किस स्तर को सर्वाधिक वांछनीय (सबसे कमज़ोर/सबसे साफ़) माना जाता है?",
        "options_hi": {
          "A": "सामग्री युग्मन",
          "B": "सामान्य युग्मन",
          "C": "युग्मन को नियंत्रित करें",
          "D": "डेटा युग्मन"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (D) Data Coupling?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
      },
      {
        "id": 99,
        "questionNumber": 99,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following grammars is in Chomsky Normal Form (CNF)?",
        "options": {
          "A": "S -> aB | b",
          "B": "S -> AB | a",
          "C": "S -> ABC | a",
          "D": "S -> a | ε"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) S -> AB | a**\n\n**Theoretical Analysis & Rule**:\nIn Chomsky Normal Form (CNF), all production rules must be of the form A -> BC (two non-terminals) or A -> a (single terminal). Hence, S -> AB | a is in CNF.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "निम्नलिखित में से कौन सा व्याकरण चॉम्स्की नॉर्मल फॉर्म (CNF) में है?",
        "options_hi": {
          "A": "एस -> एबी | बी",
          "B": "एस -> एबी | ए",
          "C": "एस -> एबीसी | ए",
          "D": "एस -> ए | ε"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) S -> AB | a?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 100,
        "questionNumber": 100,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "How many select lines are required for a 64-to-1 Multiplexer (MUX)?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "8"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 6**\n\n**Theoretical Analysis & Rule**:\nFor a 2ⁿ-to-1 multiplexer, exactly n select lines are required. Since 64 = 2⁶, n = 6 select lines are needed to address all 64 input lines.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "64-टू-1 मल्टीप्लेक्सर (एमयूएक्स) के लिए कितनी चुनिंदा लाइनें आवश्यक हैं?",
        "options_hi": {
          "A": "4",
          "B": "5",
          "C": "6",
          "D": "8"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 6?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      }
    ]
  },
  "drill_pedagogy_50": {
    "id": "drill_pedagogy_50",
    "title": "Art of Teaching 50Q Pedagogy Drill",
    "subtitle": "Intensive practice on Bloom's Taxonomy, Teaching Methods, Lesson Plans & Evaluation",
    "category": "Sectional Drill",
    "isOfficial": false,
    "totalQuestions": 50,
    "totalMarks": 50,
    "durationMinutes": 50,
    "sections": [
      {
        "id": "teaching",
        "name": "Art of Teaching",
        "startQ": 1,
        "endQ": 50,
        "total": 50
      }
    ],
    "questions": [
      {
        "id": 31,
        "questionNumber": 31,
        "section": "Art of Teaching",
        "topic": "Artificial Intelligence",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which method of teaching was originated by H.E. Armstrong, encouraging students to act as independent discoverers of truth?",
        "options": {
          "A": "Lecture Method",
          "B": "Heuristic Method",
          "C": "Demonstration Method",
          "D": "Textbook Method"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Heuristic Method**\n\n**Pedagogical Principle**:\nThe Heuristic Method (from Greek 'heuriskein' meaning 'to find or discover') was propounded by Professor H.E. Armstrong, placing the learner in the position of an original discoverer.",
        "topic_hi": "आर्टिफिशियल इंटेलिजेंस (AI)",
        "question_hi": "शिक्षण की किस पद्धति की शुरुआत एच.ई. ने की थी? आर्मस्ट्रांग, छात्रों को सत्य के स्वतंत्र खोजकर्ता के रूप में कार्य करने के लिए प्रोत्साहित कर रहे हैं?",
        "options_hi": {
          "A": "व्याख्यान विधि",
          "B": "अनुमानी विधि",
          "C": "प्रदर्शन विधि",
          "D": "पाठ्यपुस्तक विधि"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) अनुसंधान / ह्यूरिस्टिक विधि?**\n\n**विषय अवधारणा (आर्टिफिशियल इंटेलिजेंस (AI))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 32,
        "questionNumber": 32,
        "section": "Art of Teaching",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Formative evaluation is primarily conducted to:",
        "options": {
          "A": "Award annual report card certificates",
          "B": "Rank students across the state",
          "C": "Provide continuous feedback to monitor learning progress during instruction",
          "D": "Select students for high school scholarships"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Provide continuous feedback to monitor learning progress during instruction**\n\n**Pedagogical Principle**:\nFormative assessment ('assessment for learning') occurs ongoingly during the learning process to diagnose difficulties, provide timely feedback, and adapt instructional pace.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "रचनात्मक मूल्यांकन मुख्य रूप से निम्न के लिए आयोजित किया जाता है:",
        "options_hi": {
          "A": "पुरस्कार वार्षिक रिपोर्ट कार्ड प्रमाण पत्र",
          "B": "राज्य भर में छात्रों की रैंकिंग करें",
          "C": "निर्देश के दौरान सीखने की प्रगति की निगरानी के लिए निरंतर प्रतिक्रिया प्रदान करें",
          "D": "हाई स्कूल छात्रवृत्ति के लिए छात्रों का चयन करें"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Provide continuous feedback to monitor learning progress during instruction?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 33,
        "questionNumber": 33,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which teaching aid is placed at the very base of Edgar Dale's 'Cone of Experience', providing the highest degree of direct learning?",
        "options": {
          "A": "Verbal Symbols",
          "B": "Direct Purposeful Experiences (Hands-on)",
          "C": "Motion Pictures",
          "D": "Visual Symbols"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Direct Purposeful Experiences (Hands-on)**\n\n**Pedagogical Principle**:\nIn Dale's Cone of Experience, 'Direct Purposeful Experiences' (real-life, direct hands-on sensory learning) lies at the foundation, giving the highest learning retention.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "कौन सी शिक्षण सहायता एडगर डेल के 'कोन ऑफ एक्सपीरियंस' के बिल्कुल आधार पर रखी गई है, जो प्रत्यक्ष शिक्षण की उच्चतम डिग्री प्रदान करती है?",
        "options_hi": {
          "A": "मौखिक प्रतीक",
          "B": "प्रत्यक्ष उद्देश्यपूर्ण अनुभव (हाथ से)",
          "C": "गतिशील तस्वीरें",
          "D": "दृश्य प्रतीक"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Direct Purposeful Experiences (Hands-on)?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 34,
        "questionNumber": 34,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A teacher notices that a student is struggling with binary conversion due to weak fundamental division skills. The assessment used to locate this specific deficit is:",
        "options": {
          "A": "Placement Assessment",
          "B": "Diagnostic Assessment",
          "C": "Summative Assessment",
          "D": "Norm-Referenced Assessment"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Diagnostic Assessment**\n\n**Pedagogical Principle**:\nDiagnostic assessment pinpoints the specific root causes of persistent learning difficulties so teachers can administer appropriate remedial teaching.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "एक शिक्षक ने देखा कि एक छात्र कमजोर मौलिक विभाजन कौशल के कारण द्विआधारी रूपांतरण से जूझ रहा है। इस विशिष्ट घाटे का पता लगाने के लिए उपयोग किया जाने वाला मूल्यांकन है:",
        "options_hi": {
          "A": "प्लेसमेंट मूल्यांकन",
          "B": "नैदानिक ​​मूल्यांकन",
          "C": "योगात्मक मूल्यांकन",
          "D": "मानक-संदर्भित मूल्यांकन"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Diagnostic Assessment?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 35,
        "questionNumber": 35,
        "section": "Art of Teaching",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which model of curriculum construction focuses on the child's psychological needs, interests, abilities, and active learning rather than rigid rote content?",
        "options": {
          "A": "Subject-Centered Curriculum",
          "B": "Learner-Centered (Child-Centered) Curriculum",
          "C": "Teacher-Centered Curriculum",
          "D": "Exam-Oriented Curriculum"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Learner-Centered (Child-Centered) Curriculum**\n\n**Pedagogical Principle**:\nLearner-Centered curriculum design aligns learning activities with the child's developmental stages, curiosities, and personal growth, as endorsed by NEP 2020.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "पाठ्यक्रम निर्माण का कौन सा मॉडल कठोर रटंत सामग्री के बजाय बच्चे की मनोवैज्ञानिक आवश्यकताओं, रुचियों, क्षमताओं और सक्रिय सीखने पर केंद्रित है?",
        "options_hi": {
          "A": "विषय-केन्द्रित पाठ्यचर्या",
          "B": "शिक्षार्थी-केंद्रित (बाल-केंद्रित) पाठ्यक्रम",
          "C": "शिक्षक-केन्द्रित पाठ्यचर्या",
          "D": "परीक्षा-उन्मुख पाठ्यक्रम"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Learner-Centered (Child-Centered) Curriculum?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 36,
        "questionNumber": 36,
        "section": "Art of Teaching",
        "topic": "Artificial Intelligence",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which method of teaching was originated by H.E. Armstrong, encouraging students to act as independent discoverers of truth?",
        "options": {
          "A": "Lecture Method",
          "B": "Heuristic Method",
          "C": "Demonstration Method",
          "D": "Textbook Method"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Heuristic Method**\n\n**Pedagogical Principle**:\nThe Heuristic Method (from Greek 'heuriskein' meaning 'to find or discover') was propounded by Professor H.E. Armstrong, placing the learner in the position of an original discoverer.",
        "topic_hi": "आर्टिफिशियल इंटेलिजेंस (AI)",
        "question_hi": "शिक्षण की किस पद्धति की शुरुआत एच.ई. ने की थी? आर्मस्ट्रांग, छात्रों को सत्य के स्वतंत्र खोजकर्ता के रूप में कार्य करने के लिए प्रोत्साहित कर रहे हैं?",
        "options_hi": {
          "A": "व्याख्यान विधि",
          "B": "अनुमानी विधि",
          "C": "प्रदर्शन विधि",
          "D": "पाठ्यपुस्तक विधि"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) अनुसंधान / ह्यूरिस्टिक विधि?**\n\n**विषय अवधारणा (आर्टिफिशियल इंटेलिजेंस (AI))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 37,
        "questionNumber": 37,
        "section": "Art of Teaching",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Formative evaluation is primarily conducted to:",
        "options": {
          "A": "Award annual report card certificates",
          "B": "Rank students across the state",
          "C": "Provide continuous feedback to monitor learning progress during instruction",
          "D": "Select students for high school scholarships"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Provide continuous feedback to monitor learning progress during instruction**\n\n**Pedagogical Principle**:\nFormative assessment ('assessment for learning') occurs ongoingly during the learning process to diagnose difficulties, provide timely feedback, and adapt instructional pace.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "रचनात्मक मूल्यांकन मुख्य रूप से निम्न के लिए आयोजित किया जाता है:",
        "options_hi": {
          "A": "पुरस्कार वार्षिक रिपोर्ट कार्ड प्रमाण पत्र",
          "B": "राज्य भर में छात्रों की रैंकिंग करें",
          "C": "निर्देश के दौरान सीखने की प्रगति की निगरानी के लिए निरंतर प्रतिक्रिया प्रदान करें",
          "D": "हाई स्कूल छात्रवृत्ति के लिए छात्रों का चयन करें"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Provide continuous feedback to monitor learning progress during instruction?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 38,
        "questionNumber": 38,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which teaching aid is placed at the very base of Edgar Dale's 'Cone of Experience', providing the highest degree of direct learning?",
        "options": {
          "A": "Verbal Symbols",
          "B": "Direct Purposeful Experiences (Hands-on)",
          "C": "Motion Pictures",
          "D": "Visual Symbols"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Direct Purposeful Experiences (Hands-on)**\n\n**Pedagogical Principle**:\nIn Dale's Cone of Experience, 'Direct Purposeful Experiences' (real-life, direct hands-on sensory learning) lies at the foundation, giving the highest learning retention.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "कौन सी शिक्षण सहायता एडगर डेल के 'कोन ऑफ एक्सपीरियंस' के बिल्कुल आधार पर रखी गई है, जो प्रत्यक्ष शिक्षण की उच्चतम डिग्री प्रदान करती है?",
        "options_hi": {
          "A": "मौखिक प्रतीक",
          "B": "प्रत्यक्ष उद्देश्यपूर्ण अनुभव (हाथ से)",
          "C": "गतिशील तस्वीरें",
          "D": "दृश्य प्रतीक"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Direct Purposeful Experiences (Hands-on)?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 39,
        "questionNumber": 39,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A teacher notices that a student is struggling with binary conversion due to weak fundamental division skills. The assessment used to locate this specific deficit is:",
        "options": {
          "A": "Placement Assessment",
          "B": "Diagnostic Assessment",
          "C": "Summative Assessment",
          "D": "Norm-Referenced Assessment"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Diagnostic Assessment**\n\n**Pedagogical Principle**:\nDiagnostic assessment pinpoints the specific root causes of persistent learning difficulties so teachers can administer appropriate remedial teaching.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "एक शिक्षक ने देखा कि एक छात्र कमजोर मौलिक विभाजन कौशल के कारण द्विआधारी रूपांतरण से जूझ रहा है। इस विशिष्ट घाटे का पता लगाने के लिए उपयोग किया जाने वाला मूल्यांकन है:",
        "options_hi": {
          "A": "प्लेसमेंट मूल्यांकन",
          "B": "नैदानिक ​​मूल्यांकन",
          "C": "योगात्मक मूल्यांकन",
          "D": "मानक-संदर्भित मूल्यांकन"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Diagnostic Assessment?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 40,
        "questionNumber": 40,
        "section": "Art of Teaching",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which model of curriculum construction focuses on the child's psychological needs, interests, abilities, and active learning rather than rigid rote content?",
        "options": {
          "A": "Subject-Centered Curriculum",
          "B": "Learner-Centered (Child-Centered) Curriculum",
          "C": "Teacher-Centered Curriculum",
          "D": "Exam-Oriented Curriculum"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Learner-Centered (Child-Centered) Curriculum**\n\n**Pedagogical Principle**:\nLearner-Centered curriculum design aligns learning activities with the child's developmental stages, curiosities, and personal growth, as endorsed by NEP 2020.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "पाठ्यक्रम निर्माण का कौन सा मॉडल कठोर रटंत सामग्री के बजाय बच्चे की मनोवैज्ञानिक आवश्यकताओं, रुचियों, क्षमताओं और सक्रिय सीखने पर केंद्रित है?",
        "options_hi": {
          "A": "विषय-केन्द्रित पाठ्यचर्या",
          "B": "शिक्षार्थी-केंद्रित (बाल-केंद्रित) पाठ्यक्रम",
          "C": "शिक्षक-केन्द्रित पाठ्यचर्या",
          "D": "परीक्षा-उन्मुख पाठ्यक्रम"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Learner-Centered (Child-Centered) Curriculum?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 41,
        "questionNumber": 41,
        "section": "Art of Teaching",
        "topic": "Artificial Intelligence",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which method of teaching was originated by H.E. Armstrong, encouraging students to act as independent discoverers of truth?",
        "options": {
          "A": "Lecture Method",
          "B": "Heuristic Method",
          "C": "Demonstration Method",
          "D": "Textbook Method"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Heuristic Method**\n\n**Pedagogical Principle**:\nThe Heuristic Method (from Greek 'heuriskein' meaning 'to find or discover') was propounded by Professor H.E. Armstrong, placing the learner in the position of an original discoverer.",
        "topic_hi": "आर्टिफिशियल इंटेलिजेंस (AI)",
        "question_hi": "शिक्षण की किस पद्धति की शुरुआत एच.ई. ने की थी? आर्मस्ट्रांग, छात्रों को सत्य के स्वतंत्र खोजकर्ता के रूप में कार्य करने के लिए प्रोत्साहित कर रहे हैं?",
        "options_hi": {
          "A": "व्याख्यान विधि",
          "B": "अनुमानी विधि",
          "C": "प्रदर्शन विधि",
          "D": "पाठ्यपुस्तक विधि"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) अनुसंधान / ह्यूरिस्टिक विधि?**\n\n**विषय अवधारणा (आर्टिफिशियल इंटेलिजेंस (AI))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 42,
        "questionNumber": 42,
        "section": "Art of Teaching",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Formative evaluation is primarily conducted to:",
        "options": {
          "A": "Award annual report card certificates",
          "B": "Rank students across the state",
          "C": "Provide continuous feedback to monitor learning progress during instruction",
          "D": "Select students for high school scholarships"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Provide continuous feedback to monitor learning progress during instruction**\n\n**Pedagogical Principle**:\nFormative assessment ('assessment for learning') occurs ongoingly during the learning process to diagnose difficulties, provide timely feedback, and adapt instructional pace.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "रचनात्मक मूल्यांकन मुख्य रूप से निम्न के लिए आयोजित किया जाता है:",
        "options_hi": {
          "A": "पुरस्कार वार्षिक रिपोर्ट कार्ड प्रमाण पत्र",
          "B": "राज्य भर में छात्रों की रैंकिंग करें",
          "C": "निर्देश के दौरान सीखने की प्रगति की निगरानी के लिए निरंतर प्रतिक्रिया प्रदान करें",
          "D": "हाई स्कूल छात्रवृत्ति के लिए छात्रों का चयन करें"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Provide continuous feedback to monitor learning progress during instruction?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 43,
        "questionNumber": 43,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which teaching aid is placed at the very base of Edgar Dale's 'Cone of Experience', providing the highest degree of direct learning?",
        "options": {
          "A": "Verbal Symbols",
          "B": "Direct Purposeful Experiences (Hands-on)",
          "C": "Motion Pictures",
          "D": "Visual Symbols"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Direct Purposeful Experiences (Hands-on)**\n\n**Pedagogical Principle**:\nIn Dale's Cone of Experience, 'Direct Purposeful Experiences' (real-life, direct hands-on sensory learning) lies at the foundation, giving the highest learning retention.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "कौन सी शिक्षण सहायता एडगर डेल के 'कोन ऑफ एक्सपीरियंस' के बिल्कुल आधार पर रखी गई है, जो प्रत्यक्ष शिक्षण की उच्चतम डिग्री प्रदान करती है?",
        "options_hi": {
          "A": "मौखिक प्रतीक",
          "B": "प्रत्यक्ष उद्देश्यपूर्ण अनुभव (हाथ से)",
          "C": "गतिशील तस्वीरें",
          "D": "दृश्य प्रतीक"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Direct Purposeful Experiences (Hands-on)?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 44,
        "questionNumber": 44,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A teacher notices that a student is struggling with binary conversion due to weak fundamental division skills. The assessment used to locate this specific deficit is:",
        "options": {
          "A": "Placement Assessment",
          "B": "Diagnostic Assessment",
          "C": "Summative Assessment",
          "D": "Norm-Referenced Assessment"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Diagnostic Assessment**\n\n**Pedagogical Principle**:\nDiagnostic assessment pinpoints the specific root causes of persistent learning difficulties so teachers can administer appropriate remedial teaching.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "एक शिक्षक ने देखा कि एक छात्र कमजोर मौलिक विभाजन कौशल के कारण द्विआधारी रूपांतरण से जूझ रहा है। इस विशिष्ट घाटे का पता लगाने के लिए उपयोग किया जाने वाला मूल्यांकन है:",
        "options_hi": {
          "A": "प्लेसमेंट मूल्यांकन",
          "B": "नैदानिक ​​मूल्यांकन",
          "C": "योगात्मक मूल्यांकन",
          "D": "मानक-संदर्भित मूल्यांकन"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Diagnostic Assessment?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 45,
        "questionNumber": 45,
        "section": "Art of Teaching",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which model of curriculum construction focuses on the child's psychological needs, interests, abilities, and active learning rather than rigid rote content?",
        "options": {
          "A": "Subject-Centered Curriculum",
          "B": "Learner-Centered (Child-Centered) Curriculum",
          "C": "Teacher-Centered Curriculum",
          "D": "Exam-Oriented Curriculum"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Learner-Centered (Child-Centered) Curriculum**\n\n**Pedagogical Principle**:\nLearner-Centered curriculum design aligns learning activities with the child's developmental stages, curiosities, and personal growth, as endorsed by NEP 2020.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "पाठ्यक्रम निर्माण का कौन सा मॉडल कठोर रटंत सामग्री के बजाय बच्चे की मनोवैज्ञानिक आवश्यकताओं, रुचियों, क्षमताओं और सक्रिय सीखने पर केंद्रित है?",
        "options_hi": {
          "A": "विषय-केन्द्रित पाठ्यचर्या",
          "B": "शिक्षार्थी-केंद्रित (बाल-केंद्रित) पाठ्यक्रम",
          "C": "शिक्षक-केन्द्रित पाठ्यचर्या",
          "D": "परीक्षा-उन्मुख पाठ्यक्रम"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Learner-Centered (Child-Centered) Curriculum?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 46,
        "questionNumber": 46,
        "section": "Art of Teaching",
        "topic": "Artificial Intelligence",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which method of teaching was originated by H.E. Armstrong, encouraging students to act as independent discoverers of truth?",
        "options": {
          "A": "Lecture Method",
          "B": "Heuristic Method",
          "C": "Demonstration Method",
          "D": "Textbook Method"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Heuristic Method**\n\n**Pedagogical Principle**:\nThe Heuristic Method (from Greek 'heuriskein' meaning 'to find or discover') was propounded by Professor H.E. Armstrong, placing the learner in the position of an original discoverer.",
        "topic_hi": "आर्टिफिशियल इंटेलिजेंस (AI)",
        "question_hi": "शिक्षण की किस पद्धति की शुरुआत एच.ई. ने की थी? आर्मस्ट्रांग, छात्रों को सत्य के स्वतंत्र खोजकर्ता के रूप में कार्य करने के लिए प्रोत्साहित कर रहे हैं?",
        "options_hi": {
          "A": "व्याख्यान विधि",
          "B": "अनुमानी विधि",
          "C": "प्रदर्शन विधि",
          "D": "पाठ्यपुस्तक विधि"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) अनुसंधान / ह्यूरिस्टिक विधि?**\n\n**विषय अवधारणा (आर्टिफिशियल इंटेलिजेंस (AI))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 47,
        "questionNumber": 47,
        "section": "Art of Teaching",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Formative evaluation is primarily conducted to:",
        "options": {
          "A": "Award annual report card certificates",
          "B": "Rank students across the state",
          "C": "Provide continuous feedback to monitor learning progress during instruction",
          "D": "Select students for high school scholarships"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Provide continuous feedback to monitor learning progress during instruction**\n\n**Pedagogical Principle**:\nFormative assessment ('assessment for learning') occurs ongoingly during the learning process to diagnose difficulties, provide timely feedback, and adapt instructional pace.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "रचनात्मक मूल्यांकन मुख्य रूप से निम्न के लिए आयोजित किया जाता है:",
        "options_hi": {
          "A": "पुरस्कार वार्षिक रिपोर्ट कार्ड प्रमाण पत्र",
          "B": "राज्य भर में छात्रों की रैंकिंग करें",
          "C": "निर्देश के दौरान सीखने की प्रगति की निगरानी के लिए निरंतर प्रतिक्रिया प्रदान करें",
          "D": "हाई स्कूल छात्रवृत्ति के लिए छात्रों का चयन करें"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Provide continuous feedback to monitor learning progress during instruction?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 48,
        "questionNumber": 48,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which teaching aid is placed at the very base of Edgar Dale's 'Cone of Experience', providing the highest degree of direct learning?",
        "options": {
          "A": "Verbal Symbols",
          "B": "Direct Purposeful Experiences (Hands-on)",
          "C": "Motion Pictures",
          "D": "Visual Symbols"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Direct Purposeful Experiences (Hands-on)**\n\n**Pedagogical Principle**:\nIn Dale's Cone of Experience, 'Direct Purposeful Experiences' (real-life, direct hands-on sensory learning) lies at the foundation, giving the highest learning retention.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "कौन सी शिक्षण सहायता एडगर डेल के 'कोन ऑफ एक्सपीरियंस' के बिल्कुल आधार पर रखी गई है, जो प्रत्यक्ष शिक्षण की उच्चतम डिग्री प्रदान करती है?",
        "options_hi": {
          "A": "मौखिक प्रतीक",
          "B": "प्रत्यक्ष उद्देश्यपूर्ण अनुभव (हाथ से)",
          "C": "गतिशील तस्वीरें",
          "D": "दृश्य प्रतीक"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Direct Purposeful Experiences (Hands-on)?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 49,
        "questionNumber": 49,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A teacher notices that a student is struggling with binary conversion due to weak fundamental division skills. The assessment used to locate this specific deficit is:",
        "options": {
          "A": "Placement Assessment",
          "B": "Diagnostic Assessment",
          "C": "Summative Assessment",
          "D": "Norm-Referenced Assessment"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Diagnostic Assessment**\n\n**Pedagogical Principle**:\nDiagnostic assessment pinpoints the specific root causes of persistent learning difficulties so teachers can administer appropriate remedial teaching.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "एक शिक्षक ने देखा कि एक छात्र कमजोर मौलिक विभाजन कौशल के कारण द्विआधारी रूपांतरण से जूझ रहा है। इस विशिष्ट घाटे का पता लगाने के लिए उपयोग किया जाने वाला मूल्यांकन है:",
        "options_hi": {
          "A": "प्लेसमेंट मूल्यांकन",
          "B": "नैदानिक ​​मूल्यांकन",
          "C": "योगात्मक मूल्यांकन",
          "D": "मानक-संदर्भित मूल्यांकन"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Diagnostic Assessment?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 50,
        "questionNumber": 50,
        "section": "Art of Teaching",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which model of curriculum construction focuses on the child's psychological needs, interests, abilities, and active learning rather than rigid rote content?",
        "options": {
          "A": "Subject-Centered Curriculum",
          "B": "Learner-Centered (Child-Centered) Curriculum",
          "C": "Teacher-Centered Curriculum",
          "D": "Exam-Oriented Curriculum"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Learner-Centered (Child-Centered) Curriculum**\n\n**Pedagogical Principle**:\nLearner-Centered curriculum design aligns learning activities with the child's developmental stages, curiosities, and personal growth, as endorsed by NEP 2020.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "पाठ्यक्रम निर्माण का कौन सा मॉडल कठोर रटंत सामग्री के बजाय बच्चे की मनोवैज्ञानिक आवश्यकताओं, रुचियों, क्षमताओं और सक्रिय सीखने पर केंद्रित है?",
        "options_hi": {
          "A": "विषय-केन्द्रित पाठ्यचर्या",
          "B": "शिक्षार्थी-केंद्रित (बाल-केंद्रित) पाठ्यक्रम",
          "C": "शिक्षक-केन्द्रित पाठ्यचर्या",
          "D": "परीक्षा-उन्मुख पाठ्यक्रम"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Learner-Centered (Child-Centered) Curriculum?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 21,
        "questionNumber": 21,
        "section": "Art of Teaching",
        "topic": "Artificial Intelligence",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which method of teaching was originated by H.E. Armstrong, encouraging students to act as independent discoverers of truth?",
        "options": {
          "A": "Lecture Method",
          "B": "Heuristic Method",
          "C": "Demonstration Method",
          "D": "Textbook Method"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Heuristic Method**\n\n**Pedagogical Principle**:\nThe Heuristic Method (from Greek 'heuriskein' meaning 'to find or discover') was propounded by Professor H.E. Armstrong, placing the learner in the position of an original discoverer.",
        "topic_hi": "आर्टिफिशियल इंटेलिजेंस (AI)",
        "question_hi": "शिक्षण की किस पद्धति की शुरुआत एच.ई. ने की थी? आर्मस्ट्रांग, छात्रों को सत्य के स्वतंत्र खोजकर्ता के रूप में कार्य करने के लिए प्रोत्साहित कर रहे हैं?",
        "options_hi": {
          "A": "व्याख्यान विधि",
          "B": "अनुमानी विधि",
          "C": "प्रदर्शन विधि",
          "D": "पाठ्यपुस्तक विधि"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) अनुसंधान / ह्यूरिस्टिक विधि?**\n\n**विषय अवधारणा (आर्टिफिशियल इंटेलिजेंस (AI))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 22,
        "questionNumber": 22,
        "section": "Art of Teaching",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Formative evaluation is primarily conducted to:",
        "options": {
          "A": "Award annual report card certificates",
          "B": "Rank students across the state",
          "C": "Provide continuous feedback to monitor learning progress during instruction",
          "D": "Select students for high school scholarships"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Provide continuous feedback to monitor learning progress during instruction**\n\n**Pedagogical Principle**:\nFormative assessment ('assessment for learning') occurs ongoingly during the learning process to diagnose difficulties, provide timely feedback, and adapt instructional pace.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "रचनात्मक मूल्यांकन मुख्य रूप से निम्न के लिए आयोजित किया जाता है:",
        "options_hi": {
          "A": "पुरस्कार वार्षिक रिपोर्ट कार्ड प्रमाण पत्र",
          "B": "राज्य भर में छात्रों की रैंकिंग करें",
          "C": "निर्देश के दौरान सीखने की प्रगति की निगरानी के लिए निरंतर प्रतिक्रिया प्रदान करें",
          "D": "हाई स्कूल छात्रवृत्ति के लिए छात्रों का चयन करें"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Provide continuous feedback to monitor learning progress during instruction?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 23,
        "questionNumber": 23,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which teaching aid is placed at the very base of Edgar Dale's 'Cone of Experience', providing the highest degree of direct learning?",
        "options": {
          "A": "Verbal Symbols",
          "B": "Direct Purposeful Experiences (Hands-on)",
          "C": "Motion Pictures",
          "D": "Visual Symbols"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Direct Purposeful Experiences (Hands-on)**\n\n**Pedagogical Principle**:\nIn Dale's Cone of Experience, 'Direct Purposeful Experiences' (real-life, direct hands-on sensory learning) lies at the foundation, giving the highest learning retention.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "कौन सी शिक्षण सहायता एडगर डेल के 'कोन ऑफ एक्सपीरियंस' के बिल्कुल आधार पर रखी गई है, जो प्रत्यक्ष शिक्षण की उच्चतम डिग्री प्रदान करती है?",
        "options_hi": {
          "A": "मौखिक प्रतीक",
          "B": "प्रत्यक्ष उद्देश्यपूर्ण अनुभव (हाथ से)",
          "C": "गतिशील तस्वीरें",
          "D": "दृश्य प्रतीक"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Direct Purposeful Experiences (Hands-on)?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 24,
        "questionNumber": 24,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A teacher notices that a student is struggling with binary conversion due to weak fundamental division skills. The assessment used to locate this specific deficit is:",
        "options": {
          "A": "Placement Assessment",
          "B": "Diagnostic Assessment",
          "C": "Summative Assessment",
          "D": "Norm-Referenced Assessment"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Diagnostic Assessment**\n\n**Pedagogical Principle**:\nDiagnostic assessment pinpoints the specific root causes of persistent learning difficulties so teachers can administer appropriate remedial teaching.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "एक शिक्षक ने देखा कि एक छात्र कमजोर मौलिक विभाजन कौशल के कारण द्विआधारी रूपांतरण से जूझ रहा है। इस विशिष्ट घाटे का पता लगाने के लिए उपयोग किया जाने वाला मूल्यांकन है:",
        "options_hi": {
          "A": "प्लेसमेंट मूल्यांकन",
          "B": "नैदानिक ​​मूल्यांकन",
          "C": "योगात्मक मूल्यांकन",
          "D": "मानक-संदर्भित मूल्यांकन"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Diagnostic Assessment?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 25,
        "questionNumber": 25,
        "section": "Art of Teaching",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which model of curriculum construction focuses on the child's psychological needs, interests, abilities, and active learning rather than rigid rote content?",
        "options": {
          "A": "Subject-Centered Curriculum",
          "B": "Learner-Centered (Child-Centered) Curriculum",
          "C": "Teacher-Centered Curriculum",
          "D": "Exam-Oriented Curriculum"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Learner-Centered (Child-Centered) Curriculum**\n\n**Pedagogical Principle**:\nLearner-Centered curriculum design aligns learning activities with the child's developmental stages, curiosities, and personal growth, as endorsed by NEP 2020.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "पाठ्यक्रम निर्माण का कौन सा मॉडल कठोर रटंत सामग्री के बजाय बच्चे की मनोवैज्ञानिक आवश्यकताओं, रुचियों, क्षमताओं और सक्रिय सीखने पर केंद्रित है?",
        "options_hi": {
          "A": "विषय-केन्द्रित पाठ्यचर्या",
          "B": "शिक्षार्थी-केंद्रित (बाल-केंद्रित) पाठ्यक्रम",
          "C": "शिक्षक-केन्द्रित पाठ्यचर्या",
          "D": "परीक्षा-उन्मुख पाठ्यक्रम"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Learner-Centered (Child-Centered) Curriculum?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 26,
        "questionNumber": 26,
        "section": "Art of Teaching",
        "topic": "Artificial Intelligence",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which method of teaching was originated by H.E. Armstrong, encouraging students to act as independent discoverers of truth?",
        "options": {
          "A": "Lecture Method",
          "B": "Heuristic Method",
          "C": "Demonstration Method",
          "D": "Textbook Method"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Heuristic Method**\n\n**Pedagogical Principle**:\nThe Heuristic Method (from Greek 'heuriskein' meaning 'to find or discover') was propounded by Professor H.E. Armstrong, placing the learner in the position of an original discoverer.",
        "topic_hi": "आर्टिफिशियल इंटेलिजेंस (AI)",
        "question_hi": "शिक्षण की किस पद्धति की शुरुआत एच.ई. ने की थी? आर्मस्ट्रांग, छात्रों को सत्य के स्वतंत्र खोजकर्ता के रूप में कार्य करने के लिए प्रोत्साहित कर रहे हैं?",
        "options_hi": {
          "A": "व्याख्यान विधि",
          "B": "अनुमानी विधि",
          "C": "प्रदर्शन विधि",
          "D": "पाठ्यपुस्तक विधि"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) अनुसंधान / ह्यूरिस्टिक विधि?**\n\n**विषय अवधारणा (आर्टिफिशियल इंटेलिजेंस (AI))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 27,
        "questionNumber": 27,
        "section": "Art of Teaching",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Formative evaluation is primarily conducted to:",
        "options": {
          "A": "Award annual report card certificates",
          "B": "Rank students across the state",
          "C": "Provide continuous feedback to monitor learning progress during instruction",
          "D": "Select students for high school scholarships"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Provide continuous feedback to monitor learning progress during instruction**\n\n**Pedagogical Principle**:\nFormative assessment ('assessment for learning') occurs ongoingly during the learning process to diagnose difficulties, provide timely feedback, and adapt instructional pace.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "रचनात्मक मूल्यांकन मुख्य रूप से निम्न के लिए आयोजित किया जाता है:",
        "options_hi": {
          "A": "पुरस्कार वार्षिक रिपोर्ट कार्ड प्रमाण पत्र",
          "B": "राज्य भर में छात्रों की रैंकिंग करें",
          "C": "निर्देश के दौरान सीखने की प्रगति की निगरानी के लिए निरंतर प्रतिक्रिया प्रदान करें",
          "D": "हाई स्कूल छात्रवृत्ति के लिए छात्रों का चयन करें"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Provide continuous feedback to monitor learning progress during instruction?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 28,
        "questionNumber": 28,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which teaching aid is placed at the very base of Edgar Dale's 'Cone of Experience', providing the highest degree of direct learning?",
        "options": {
          "A": "Verbal Symbols",
          "B": "Direct Purposeful Experiences (Hands-on)",
          "C": "Motion Pictures",
          "D": "Visual Symbols"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Direct Purposeful Experiences (Hands-on)**\n\n**Pedagogical Principle**:\nIn Dale's Cone of Experience, 'Direct Purposeful Experiences' (real-life, direct hands-on sensory learning) lies at the foundation, giving the highest learning retention.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "कौन सी शिक्षण सहायता एडगर डेल के 'कोन ऑफ एक्सपीरियंस' के बिल्कुल आधार पर रखी गई है, जो प्रत्यक्ष शिक्षण की उच्चतम डिग्री प्रदान करती है?",
        "options_hi": {
          "A": "मौखिक प्रतीक",
          "B": "प्रत्यक्ष उद्देश्यपूर्ण अनुभव (हाथ से)",
          "C": "गतिशील तस्वीरें",
          "D": "दृश्य प्रतीक"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Direct Purposeful Experiences (Hands-on)?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 29,
        "questionNumber": 29,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A teacher notices that a student is struggling with binary conversion due to weak fundamental division skills. The assessment used to locate this specific deficit is:",
        "options": {
          "A": "Placement Assessment",
          "B": "Diagnostic Assessment",
          "C": "Summative Assessment",
          "D": "Norm-Referenced Assessment"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Diagnostic Assessment**\n\n**Pedagogical Principle**:\nDiagnostic assessment pinpoints the specific root causes of persistent learning difficulties so teachers can administer appropriate remedial teaching.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "एक शिक्षक ने देखा कि एक छात्र कमजोर मौलिक विभाजन कौशल के कारण द्विआधारी रूपांतरण से जूझ रहा है। इस विशिष्ट घाटे का पता लगाने के लिए उपयोग किया जाने वाला मूल्यांकन है:",
        "options_hi": {
          "A": "प्लेसमेंट मूल्यांकन",
          "B": "नैदानिक ​​मूल्यांकन",
          "C": "योगात्मक मूल्यांकन",
          "D": "मानक-संदर्भित मूल्यांकन"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Diagnostic Assessment?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 30,
        "questionNumber": 30,
        "section": "Art of Teaching",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which model of curriculum construction focuses on the child's psychological needs, interests, abilities, and active learning rather than rigid rote content?",
        "options": {
          "A": "Subject-Centered Curriculum",
          "B": "Learner-Centered (Child-Centered) Curriculum",
          "C": "Teacher-Centered Curriculum",
          "D": "Exam-Oriented Curriculum"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Learner-Centered (Child-Centered) Curriculum**\n\n**Pedagogical Principle**:\nLearner-Centered curriculum design aligns learning activities with the child's developmental stages, curiosities, and personal growth, as endorsed by NEP 2020.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "पाठ्यक्रम निर्माण का कौन सा मॉडल कठोर रटंत सामग्री के बजाय बच्चे की मनोवैज्ञानिक आवश्यकताओं, रुचियों, क्षमताओं और सक्रिय सीखने पर केंद्रित है?",
        "options_hi": {
          "A": "विषय-केन्द्रित पाठ्यचर्या",
          "B": "शिक्षार्थी-केंद्रित (बाल-केंद्रित) पाठ्यक्रम",
          "C": "शिक्षक-केन्द्रित पाठ्यचर्या",
          "D": "परीक्षा-उन्मुख पाठ्यक्रम"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Learner-Centered (Child-Centered) Curriculum?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 31,
        "questionNumber": 31,
        "section": "Art of Teaching",
        "topic": "Artificial Intelligence",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which method of teaching was originated by H.E. Armstrong, encouraging students to act as independent discoverers of truth?",
        "options": {
          "A": "Lecture Method",
          "B": "Heuristic Method",
          "C": "Demonstration Method",
          "D": "Textbook Method"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Heuristic Method**\n\n**Pedagogical Principle**:\nThe Heuristic Method (from Greek 'heuriskein' meaning 'to find or discover') was propounded by Professor H.E. Armstrong, placing the learner in the position of an original discoverer.",
        "topic_hi": "आर्टिफिशियल इंटेलिजेंस (AI)",
        "question_hi": "शिक्षण की किस पद्धति की शुरुआत एच.ई. ने की थी? आर्मस्ट्रांग, छात्रों को सत्य के स्वतंत्र खोजकर्ता के रूप में कार्य करने के लिए प्रोत्साहित कर रहे हैं?",
        "options_hi": {
          "A": "व्याख्यान विधि",
          "B": "अनुमानी विधि",
          "C": "प्रदर्शन विधि",
          "D": "पाठ्यपुस्तक विधि"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) अनुसंधान / ह्यूरिस्टिक विधि?**\n\n**विषय अवधारणा (आर्टिफिशियल इंटेलिजेंस (AI))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 32,
        "questionNumber": 32,
        "section": "Art of Teaching",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Formative evaluation is primarily conducted to:",
        "options": {
          "A": "Award annual report card certificates",
          "B": "Rank students across the state",
          "C": "Provide continuous feedback to monitor learning progress during instruction",
          "D": "Select students for high school scholarships"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Provide continuous feedback to monitor learning progress during instruction**\n\n**Pedagogical Principle**:\nFormative assessment ('assessment for learning') occurs ongoingly during the learning process to diagnose difficulties, provide timely feedback, and adapt instructional pace.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "रचनात्मक मूल्यांकन मुख्य रूप से निम्न के लिए आयोजित किया जाता है:",
        "options_hi": {
          "A": "पुरस्कार वार्षिक रिपोर्ट कार्ड प्रमाण पत्र",
          "B": "राज्य भर में छात्रों की रैंकिंग करें",
          "C": "निर्देश के दौरान सीखने की प्रगति की निगरानी के लिए निरंतर प्रतिक्रिया प्रदान करें",
          "D": "हाई स्कूल छात्रवृत्ति के लिए छात्रों का चयन करें"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Provide continuous feedback to monitor learning progress during instruction?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 33,
        "questionNumber": 33,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which teaching aid is placed at the very base of Edgar Dale's 'Cone of Experience', providing the highest degree of direct learning?",
        "options": {
          "A": "Verbal Symbols",
          "B": "Direct Purposeful Experiences (Hands-on)",
          "C": "Motion Pictures",
          "D": "Visual Symbols"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Direct Purposeful Experiences (Hands-on)**\n\n**Pedagogical Principle**:\nIn Dale's Cone of Experience, 'Direct Purposeful Experiences' (real-life, direct hands-on sensory learning) lies at the foundation, giving the highest learning retention.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "कौन सी शिक्षण सहायता एडगर डेल के 'कोन ऑफ एक्सपीरियंस' के बिल्कुल आधार पर रखी गई है, जो प्रत्यक्ष शिक्षण की उच्चतम डिग्री प्रदान करती है?",
        "options_hi": {
          "A": "मौखिक प्रतीक",
          "B": "प्रत्यक्ष उद्देश्यपूर्ण अनुभव (हाथ से)",
          "C": "गतिशील तस्वीरें",
          "D": "दृश्य प्रतीक"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Direct Purposeful Experiences (Hands-on)?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 34,
        "questionNumber": 34,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A teacher notices that a student is struggling with binary conversion due to weak fundamental division skills. The assessment used to locate this specific deficit is:",
        "options": {
          "A": "Placement Assessment",
          "B": "Diagnostic Assessment",
          "C": "Summative Assessment",
          "D": "Norm-Referenced Assessment"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Diagnostic Assessment**\n\n**Pedagogical Principle**:\nDiagnostic assessment pinpoints the specific root causes of persistent learning difficulties so teachers can administer appropriate remedial teaching.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "एक शिक्षक ने देखा कि एक छात्र कमजोर मौलिक विभाजन कौशल के कारण द्विआधारी रूपांतरण से जूझ रहा है। इस विशिष्ट घाटे का पता लगाने के लिए उपयोग किया जाने वाला मूल्यांकन है:",
        "options_hi": {
          "A": "प्लेसमेंट मूल्यांकन",
          "B": "नैदानिक ​​मूल्यांकन",
          "C": "योगात्मक मूल्यांकन",
          "D": "मानक-संदर्भित मूल्यांकन"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Diagnostic Assessment?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 35,
        "questionNumber": 35,
        "section": "Art of Teaching",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which model of curriculum construction focuses on the child's psychological needs, interests, abilities, and active learning rather than rigid rote content?",
        "options": {
          "A": "Subject-Centered Curriculum",
          "B": "Learner-Centered (Child-Centered) Curriculum",
          "C": "Teacher-Centered Curriculum",
          "D": "Exam-Oriented Curriculum"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Learner-Centered (Child-Centered) Curriculum**\n\n**Pedagogical Principle**:\nLearner-Centered curriculum design aligns learning activities with the child's developmental stages, curiosities, and personal growth, as endorsed by NEP 2020.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "पाठ्यक्रम निर्माण का कौन सा मॉडल कठोर रटंत सामग्री के बजाय बच्चे की मनोवैज्ञानिक आवश्यकताओं, रुचियों, क्षमताओं और सक्रिय सीखने पर केंद्रित है?",
        "options_hi": {
          "A": "विषय-केन्द्रित पाठ्यचर्या",
          "B": "शिक्षार्थी-केंद्रित (बाल-केंद्रित) पाठ्यक्रम",
          "C": "शिक्षक-केन्द्रित पाठ्यचर्या",
          "D": "परीक्षा-उन्मुख पाठ्यक्रम"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Learner-Centered (Child-Centered) Curriculum?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 36,
        "questionNumber": 36,
        "section": "Art of Teaching",
        "topic": "Artificial Intelligence",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which method of teaching was originated by H.E. Armstrong, encouraging students to act as independent discoverers of truth?",
        "options": {
          "A": "Lecture Method",
          "B": "Heuristic Method",
          "C": "Demonstration Method",
          "D": "Textbook Method"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Heuristic Method**\n\n**Pedagogical Principle**:\nThe Heuristic Method (from Greek 'heuriskein' meaning 'to find or discover') was propounded by Professor H.E. Armstrong, placing the learner in the position of an original discoverer.",
        "topic_hi": "आर्टिफिशियल इंटेलिजेंस (AI)",
        "question_hi": "शिक्षण की किस पद्धति की शुरुआत एच.ई. ने की थी? आर्मस्ट्रांग, छात्रों को सत्य के स्वतंत्र खोजकर्ता के रूप में कार्य करने के लिए प्रोत्साहित कर रहे हैं?",
        "options_hi": {
          "A": "व्याख्यान विधि",
          "B": "अनुमानी विधि",
          "C": "प्रदर्शन विधि",
          "D": "पाठ्यपुस्तक विधि"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) अनुसंधान / ह्यूरिस्टिक विधि?**\n\n**विषय अवधारणा (आर्टिफिशियल इंटेलिजेंस (AI))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 37,
        "questionNumber": 37,
        "section": "Art of Teaching",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Formative evaluation is primarily conducted to:",
        "options": {
          "A": "Award annual report card certificates",
          "B": "Rank students across the state",
          "C": "Provide continuous feedback to monitor learning progress during instruction",
          "D": "Select students for high school scholarships"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Provide continuous feedback to monitor learning progress during instruction**\n\n**Pedagogical Principle**:\nFormative assessment ('assessment for learning') occurs ongoingly during the learning process to diagnose difficulties, provide timely feedback, and adapt instructional pace.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "रचनात्मक मूल्यांकन मुख्य रूप से निम्न के लिए आयोजित किया जाता है:",
        "options_hi": {
          "A": "पुरस्कार वार्षिक रिपोर्ट कार्ड प्रमाण पत्र",
          "B": "राज्य भर में छात्रों की रैंकिंग करें",
          "C": "निर्देश के दौरान सीखने की प्रगति की निगरानी के लिए निरंतर प्रतिक्रिया प्रदान करें",
          "D": "हाई स्कूल छात्रवृत्ति के लिए छात्रों का चयन करें"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Provide continuous feedback to monitor learning progress during instruction?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 38,
        "questionNumber": 38,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which teaching aid is placed at the very base of Edgar Dale's 'Cone of Experience', providing the highest degree of direct learning?",
        "options": {
          "A": "Verbal Symbols",
          "B": "Direct Purposeful Experiences (Hands-on)",
          "C": "Motion Pictures",
          "D": "Visual Symbols"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Direct Purposeful Experiences (Hands-on)**\n\n**Pedagogical Principle**:\nIn Dale's Cone of Experience, 'Direct Purposeful Experiences' (real-life, direct hands-on sensory learning) lies at the foundation, giving the highest learning retention.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "कौन सी शिक्षण सहायता एडगर डेल के 'कोन ऑफ एक्सपीरियंस' के बिल्कुल आधार पर रखी गई है, जो प्रत्यक्ष शिक्षण की उच्चतम डिग्री प्रदान करती है?",
        "options_hi": {
          "A": "मौखिक प्रतीक",
          "B": "प्रत्यक्ष उद्देश्यपूर्ण अनुभव (हाथ से)",
          "C": "गतिशील तस्वीरें",
          "D": "दृश्य प्रतीक"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Direct Purposeful Experiences (Hands-on)?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 39,
        "questionNumber": 39,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A teacher notices that a student is struggling with binary conversion due to weak fundamental division skills. The assessment used to locate this specific deficit is:",
        "options": {
          "A": "Placement Assessment",
          "B": "Diagnostic Assessment",
          "C": "Summative Assessment",
          "D": "Norm-Referenced Assessment"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Diagnostic Assessment**\n\n**Pedagogical Principle**:\nDiagnostic assessment pinpoints the specific root causes of persistent learning difficulties so teachers can administer appropriate remedial teaching.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "एक शिक्षक ने देखा कि एक छात्र कमजोर मौलिक विभाजन कौशल के कारण द्विआधारी रूपांतरण से जूझ रहा है। इस विशिष्ट घाटे का पता लगाने के लिए उपयोग किया जाने वाला मूल्यांकन है:",
        "options_hi": {
          "A": "प्लेसमेंट मूल्यांकन",
          "B": "नैदानिक ​​मूल्यांकन",
          "C": "योगात्मक मूल्यांकन",
          "D": "मानक-संदर्भित मूल्यांकन"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Diagnostic Assessment?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 40,
        "questionNumber": 40,
        "section": "Art of Teaching",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which model of curriculum construction focuses on the child's psychological needs, interests, abilities, and active learning rather than rigid rote content?",
        "options": {
          "A": "Subject-Centered Curriculum",
          "B": "Learner-Centered (Child-Centered) Curriculum",
          "C": "Teacher-Centered Curriculum",
          "D": "Exam-Oriented Curriculum"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Learner-Centered (Child-Centered) Curriculum**\n\n**Pedagogical Principle**:\nLearner-Centered curriculum design aligns learning activities with the child's developmental stages, curiosities, and personal growth, as endorsed by NEP 2020.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "पाठ्यक्रम निर्माण का कौन सा मॉडल कठोर रटंत सामग्री के बजाय बच्चे की मनोवैज्ञानिक आवश्यकताओं, रुचियों, क्षमताओं और सक्रिय सीखने पर केंद्रित है?",
        "options_hi": {
          "A": "विषय-केन्द्रित पाठ्यचर्या",
          "B": "शिक्षार्थी-केंद्रित (बाल-केंद्रित) पाठ्यक्रम",
          "C": "शिक्षक-केन्द्रित पाठ्यचर्या",
          "D": "परीक्षा-उन्मुख पाठ्यक्रम"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Learner-Centered (Child-Centered) Curriculum?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 41,
        "questionNumber": 41,
        "section": "Art of Teaching",
        "topic": "Artificial Intelligence",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which method of teaching was originated by H.E. Armstrong, encouraging students to act as independent discoverers of truth?",
        "options": {
          "A": "Lecture Method",
          "B": "Heuristic Method",
          "C": "Demonstration Method",
          "D": "Textbook Method"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Heuristic Method**\n\n**Pedagogical Principle**:\nThe Heuristic Method (from Greek 'heuriskein' meaning 'to find or discover') was propounded by Professor H.E. Armstrong, placing the learner in the position of an original discoverer.",
        "topic_hi": "आर्टिफिशियल इंटेलिजेंस (AI)",
        "question_hi": "शिक्षण की किस पद्धति की शुरुआत एच.ई. ने की थी? आर्मस्ट्रांग, छात्रों को सत्य के स्वतंत्र खोजकर्ता के रूप में कार्य करने के लिए प्रोत्साहित कर रहे हैं?",
        "options_hi": {
          "A": "व्याख्यान विधि",
          "B": "अनुमानी विधि",
          "C": "प्रदर्शन विधि",
          "D": "पाठ्यपुस्तक विधि"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) अनुसंधान / ह्यूरिस्टिक विधि?**\n\n**विषय अवधारणा (आर्टिफिशियल इंटेलिजेंस (AI))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 42,
        "questionNumber": 42,
        "section": "Art of Teaching",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Formative evaluation is primarily conducted to:",
        "options": {
          "A": "Award annual report card certificates",
          "B": "Rank students across the state",
          "C": "Provide continuous feedback to monitor learning progress during instruction",
          "D": "Select students for high school scholarships"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Provide continuous feedback to monitor learning progress during instruction**\n\n**Pedagogical Principle**:\nFormative assessment ('assessment for learning') occurs ongoingly during the learning process to diagnose difficulties, provide timely feedback, and adapt instructional pace.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "रचनात्मक मूल्यांकन मुख्य रूप से निम्न के लिए आयोजित किया जाता है:",
        "options_hi": {
          "A": "पुरस्कार वार्षिक रिपोर्ट कार्ड प्रमाण पत्र",
          "B": "राज्य भर में छात्रों की रैंकिंग करें",
          "C": "निर्देश के दौरान सीखने की प्रगति की निगरानी के लिए निरंतर प्रतिक्रिया प्रदान करें",
          "D": "हाई स्कूल छात्रवृत्ति के लिए छात्रों का चयन करें"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Provide continuous feedback to monitor learning progress during instruction?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 43,
        "questionNumber": 43,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which teaching aid is placed at the very base of Edgar Dale's 'Cone of Experience', providing the highest degree of direct learning?",
        "options": {
          "A": "Verbal Symbols",
          "B": "Direct Purposeful Experiences (Hands-on)",
          "C": "Motion Pictures",
          "D": "Visual Symbols"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Direct Purposeful Experiences (Hands-on)**\n\n**Pedagogical Principle**:\nIn Dale's Cone of Experience, 'Direct Purposeful Experiences' (real-life, direct hands-on sensory learning) lies at the foundation, giving the highest learning retention.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "कौन सी शिक्षण सहायता एडगर डेल के 'कोन ऑफ एक्सपीरियंस' के बिल्कुल आधार पर रखी गई है, जो प्रत्यक्ष शिक्षण की उच्चतम डिग्री प्रदान करती है?",
        "options_hi": {
          "A": "मौखिक प्रतीक",
          "B": "प्रत्यक्ष उद्देश्यपूर्ण अनुभव (हाथ से)",
          "C": "गतिशील तस्वीरें",
          "D": "दृश्य प्रतीक"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Direct Purposeful Experiences (Hands-on)?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 44,
        "questionNumber": 44,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A teacher notices that a student is struggling with binary conversion due to weak fundamental division skills. The assessment used to locate this specific deficit is:",
        "options": {
          "A": "Placement Assessment",
          "B": "Diagnostic Assessment",
          "C": "Summative Assessment",
          "D": "Norm-Referenced Assessment"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Diagnostic Assessment**\n\n**Pedagogical Principle**:\nDiagnostic assessment pinpoints the specific root causes of persistent learning difficulties so teachers can administer appropriate remedial teaching.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "एक शिक्षक ने देखा कि एक छात्र कमजोर मौलिक विभाजन कौशल के कारण द्विआधारी रूपांतरण से जूझ रहा है। इस विशिष्ट घाटे का पता लगाने के लिए उपयोग किया जाने वाला मूल्यांकन है:",
        "options_hi": {
          "A": "प्लेसमेंट मूल्यांकन",
          "B": "नैदानिक ​​मूल्यांकन",
          "C": "योगात्मक मूल्यांकन",
          "D": "मानक-संदर्भित मूल्यांकन"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Diagnostic Assessment?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 45,
        "questionNumber": 45,
        "section": "Art of Teaching",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which model of curriculum construction focuses on the child's psychological needs, interests, abilities, and active learning rather than rigid rote content?",
        "options": {
          "A": "Subject-Centered Curriculum",
          "B": "Learner-Centered (Child-Centered) Curriculum",
          "C": "Teacher-Centered Curriculum",
          "D": "Exam-Oriented Curriculum"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Learner-Centered (Child-Centered) Curriculum**\n\n**Pedagogical Principle**:\nLearner-Centered curriculum design aligns learning activities with the child's developmental stages, curiosities, and personal growth, as endorsed by NEP 2020.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "पाठ्यक्रम निर्माण का कौन सा मॉडल कठोर रटंत सामग्री के बजाय बच्चे की मनोवैज्ञानिक आवश्यकताओं, रुचियों, क्षमताओं और सक्रिय सीखने पर केंद्रित है?",
        "options_hi": {
          "A": "विषय-केन्द्रित पाठ्यचर्या",
          "B": "शिक्षार्थी-केंद्रित (बाल-केंद्रित) पाठ्यक्रम",
          "C": "शिक्षक-केन्द्रित पाठ्यचर्या",
          "D": "परीक्षा-उन्मुख पाठ्यक्रम"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Learner-Centered (Child-Centered) Curriculum?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 46,
        "questionNumber": 46,
        "section": "Art of Teaching",
        "topic": "Artificial Intelligence",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which method of teaching was originated by H.E. Armstrong, encouraging students to act as independent discoverers of truth?",
        "options": {
          "A": "Lecture Method",
          "B": "Heuristic Method",
          "C": "Demonstration Method",
          "D": "Textbook Method"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Heuristic Method**\n\n**Pedagogical Principle**:\nThe Heuristic Method (from Greek 'heuriskein' meaning 'to find or discover') was propounded by Professor H.E. Armstrong, placing the learner in the position of an original discoverer.",
        "topic_hi": "आर्टिफिशियल इंटेलिजेंस (AI)",
        "question_hi": "शिक्षण की किस पद्धति की शुरुआत एच.ई. ने की थी? आर्मस्ट्रांग, छात्रों को सत्य के स्वतंत्र खोजकर्ता के रूप में कार्य करने के लिए प्रोत्साहित कर रहे हैं?",
        "options_hi": {
          "A": "व्याख्यान विधि",
          "B": "अनुमानी विधि",
          "C": "प्रदर्शन विधि",
          "D": "पाठ्यपुस्तक विधि"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) अनुसंधान / ह्यूरिस्टिक विधि?**\n\n**विषय अवधारणा (आर्टिफिशियल इंटेलिजेंस (AI))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 47,
        "questionNumber": 47,
        "section": "Art of Teaching",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Formative evaluation is primarily conducted to:",
        "options": {
          "A": "Award annual report card certificates",
          "B": "Rank students across the state",
          "C": "Provide continuous feedback to monitor learning progress during instruction",
          "D": "Select students for high school scholarships"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) Provide continuous feedback to monitor learning progress during instruction**\n\n**Pedagogical Principle**:\nFormative assessment ('assessment for learning') occurs ongoingly during the learning process to diagnose difficulties, provide timely feedback, and adapt instructional pace.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "रचनात्मक मूल्यांकन मुख्य रूप से निम्न के लिए आयोजित किया जाता है:",
        "options_hi": {
          "A": "पुरस्कार वार्षिक रिपोर्ट कार्ड प्रमाण पत्र",
          "B": "राज्य भर में छात्रों की रैंकिंग करें",
          "C": "निर्देश के दौरान सीखने की प्रगति की निगरानी के लिए निरंतर प्रतिक्रिया प्रदान करें",
          "D": "हाई स्कूल छात्रवृत्ति के लिए छात्रों का चयन करें"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) Provide continuous feedback to monitor learning progress during instruction?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 48,
        "questionNumber": 48,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which teaching aid is placed at the very base of Edgar Dale's 'Cone of Experience', providing the highest degree of direct learning?",
        "options": {
          "A": "Verbal Symbols",
          "B": "Direct Purposeful Experiences (Hands-on)",
          "C": "Motion Pictures",
          "D": "Visual Symbols"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Direct Purposeful Experiences (Hands-on)**\n\n**Pedagogical Principle**:\nIn Dale's Cone of Experience, 'Direct Purposeful Experiences' (real-life, direct hands-on sensory learning) lies at the foundation, giving the highest learning retention.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "कौन सी शिक्षण सहायता एडगर डेल के 'कोन ऑफ एक्सपीरियंस' के बिल्कुल आधार पर रखी गई है, जो प्रत्यक्ष शिक्षण की उच्चतम डिग्री प्रदान करती है?",
        "options_hi": {
          "A": "मौखिक प्रतीक",
          "B": "प्रत्यक्ष उद्देश्यपूर्ण अनुभव (हाथ से)",
          "C": "गतिशील तस्वीरें",
          "D": "दृश्य प्रतीक"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Direct Purposeful Experiences (Hands-on)?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 49,
        "questionNumber": 49,
        "section": "Art of Teaching",
        "topic": "Digital Logic",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A teacher notices that a student is struggling with binary conversion due to weak fundamental division skills. The assessment used to locate this specific deficit is:",
        "options": {
          "A": "Placement Assessment",
          "B": "Diagnostic Assessment",
          "C": "Summative Assessment",
          "D": "Norm-Referenced Assessment"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Diagnostic Assessment**\n\n**Pedagogical Principle**:\nDiagnostic assessment pinpoints the specific root causes of persistent learning difficulties so teachers can administer appropriate remedial teaching.",
        "topic_hi": "डिजिटल लॉजिक",
        "question_hi": "एक शिक्षक ने देखा कि एक छात्र कमजोर मौलिक विभाजन कौशल के कारण द्विआधारी रूपांतरण से जूझ रहा है। इस विशिष्ट घाटे का पता लगाने के लिए उपयोग किया जाने वाला मूल्यांकन है:",
        "options_hi": {
          "A": "प्लेसमेंट मूल्यांकन",
          "B": "नैदानिक ​​मूल्यांकन",
          "C": "योगात्मक मूल्यांकन",
          "D": "मानक-संदर्भित मूल्यांकन"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Diagnostic Assessment?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 50,
        "questionNumber": 50,
        "section": "Art of Teaching",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which model of curriculum construction focuses on the child's psychological needs, interests, abilities, and active learning rather than rigid rote content?",
        "options": {
          "A": "Subject-Centered Curriculum",
          "B": "Learner-Centered (Child-Centered) Curriculum",
          "C": "Teacher-Centered Curriculum",
          "D": "Exam-Oriented Curriculum"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Learner-Centered (Child-Centered) Curriculum**\n\n**Pedagogical Principle**:\nLearner-Centered curriculum design aligns learning activities with the child's developmental stages, curiosities, and personal growth, as endorsed by NEP 2020.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "पाठ्यक्रम निर्माण का कौन सा मॉडल कठोर रटंत सामग्री के बजाय बच्चे की मनोवैज्ञानिक आवश्यकताओं, रुचियों, क्षमताओं और सक्रिय सीखने पर केंद्रित है?",
        "options_hi": {
          "A": "विषय-केन्द्रित पाठ्यचर्या",
          "B": "शिक्षार्थी-केंद्रित (बाल-केंद्रित) पाठ्यक्रम",
          "C": "शिक्षक-केन्द्रित पाठ्यचर्या",
          "D": "परीक्षा-उन्मुख पाठ्यक्रम"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Learner-Centered (Child-Centered) Curriculum?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      }
    ]
  },
  "drill_general_50": {
    "id": "drill_general_50",
    "title": "General Skills 50Q Booster Drill",
    "subtitle": "GK, Environmental Science, Mathematical Aptitude, and Logical Reasoning",
    "category": "Sectional Drill",
    "isOfficial": false,
    "totalQuestions": 50,
    "totalMarks": 50,
    "durationMinutes": 50,
    "sections": [
      {
        "id": "skills",
        "name": "Other Skills",
        "startQ": 1,
        "endQ": 50,
        "total": 50
      }
    ],
    "questions": [
      {
        "id": 41,
        "questionNumber": 41,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A shopkeeper buys an article for ₹500 and sells it for ₹650. What is his profit percentage?",
        "options": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 30%**\n\n**Solution & Conceptual Rationale**:\nProfit = Selling Price - Cost Price = 650 - 500 = ₹150. Profit Percentage = (Profit / CP) × 100 = (150 / 500) × 100 = 30%.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "एक दुकानदार एक वस्तु ₹500 में खरीदता है और उसे ₹650 में बेचता है। उसका लाभ प्रतिशत क्या है?",
        "options_hi": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 30%?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 42,
        "questionNumber": 42,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "If the ratio of two numbers is 3 : 5 and their sum is 120, what is the larger number?",
        "options": {
          "A": "45",
          "B": "65",
          "C": "75",
          "D": "80%"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 75**\n\n**Solution & Conceptual Rationale**:\nTotal ratio units = 3 + 5 = 8 units. 1 unit = 120 / 8 = 15. The larger number = 5 × 15 = 75. (Smaller number is 3 × 15 = 45).",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "यदि दो संख्याओं का अनुपात 3:5 है और उनका योग 120 है, तो बड़ी संख्या क्या है?",
        "options_hi": {
          "A": "45",
          "B": "65",
          "C": "75",
          "D": "80%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 75?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 43,
        "questionNumber": 43,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Complete the alphabetical series: B, D, G, K, P, ____?",
        "options": {
          "A": "T",
          "B": "U",
          "C": "V",
          "D": "W"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) V**\n\n**Solution & Conceptual Rationale**:\nLetter positions in alphabet: B(2) +2 -> D(4); D(4) +3 -> G(7); G(7) +4 -> K(11); K(11) +5 -> P(16); P(16) +6 -> V(22). The next letter is V.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "वर्णमाला क्रम को पूरा करें: B, D, G, K, P, ____?",
        "options_hi": {
          "A": "T",
          "B": "U",
          "C": "V",
          "D": "W"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) V?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 44,
        "questionNumber": 44,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Statements: 1. Some pens are books. 2. All books are pencils. Conclusion: Some pens are pencils.",
        "options": {
          "A": "Definitely True",
          "B": "Definitely False",
          "C": "Probably True",
          "D": "Cannot be determined"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) Definitely True**\n\n**Solution & Conceptual Rationale**:\nThe intersection of 'pens' and 'books' falls entirely within the set of 'pencils'. Thus, some pens must be pencils. The conclusion is Definitely True.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "कथन: 1. कुछ कलम किताबें हैं। 2. सभी किताबें पेंसिल हैं। निष्कर्ष: कुछ पेन पेंसिल हैं।",
        "options_hi": {
          "A": "निश्चित रूप से सच",
          "B": "निश्चित रूप से झूठ",
          "C": "Probably True",
          "D": "तय नहीं किया जा सकता"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) Definitely True?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 45,
        "questionNumber": 45,
        "section": "Other Skills",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE?",
        "options": {
          "A": "Nalanda University",
          "B": "Vikramashila University",
          "C": "Odantapuri University",
          "D": "Taxila University"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Vikramashila University**\n\n**Solution & Conceptual Rationale**:\nVikramashila University was established by Pala Emperor Dharmapala at Antichak (Bhagalpur district, Bihar) as a premier Buddhist educational institution.",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "कंप्यूटर साइंस अवधारणा: Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE के संबंध में सही कथन या मान क्या है?",
        "options_hi": {
          "A": "नालन्दा विश्वविद्यालय",
          "B": "विक्रमशिला विश्वविद्यालय",
          "C": "Odantapuri University",
          "D": "तक्षशिला विश्वविद्यालय"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Vikramashila University?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 46,
        "questionNumber": 46,
        "section": "Other Skills",
        "topic": "Fundamental of E-Commerce",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Mahatma Gandhi's first civil disobedience movement in India, launched in 1917 to support indigo farmers, occurred in:",
        "options": {
          "A": "Kheda",
          "B": "Champaran, Bihar",
          "C": "Dandi",
          "D": "Bardoli"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Champaran, Bihar**\n\n**Solution & Conceptual Rationale**:\nChamparan Satyagraha (1917) in Bihar was Gandhiji's first major satyagraha in India against the exploitative Tinkathia indigo cultivation system.",
        "topic_hi": "ई-कॉमर्स के मूल सिद्धांत",
        "question_hi": "भारत में नील किसानों के समर्थन के लिए 1917 में शुरू किया गया महात्मा गांधी का पहला सविनय अवज्ञा आंदोलन कब हुआ:",
        "options_hi": {
          "A": "खेड़ा",
          "B": "चंपारण, बिहार",
          "C": "दांडी",
          "D": "बारडोली"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Champaran, Bihar?**\n\n**विषय अवधारणा (ई-कॉमर्स के मूल सिद्धांत)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 47,
        "questionNumber": 47,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which Article of the Indian Constitution guarantees the 'Right to Equality before the Law'?",
        "options": {
          "A": "Article 14",
          "B": "Article 19",
          "C": "Article 21",
          "D": "Article 32"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) Article 14**\n\n**Solution & Conceptual Rationale**:\nArticle 14 states that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद 'कानून के समक्ष समानता का अधिकार' की गारंटी देता है?",
        "options_hi": {
          "A": "अनुच्छेद 14",
          "B": "अनुच्छेद 19",
          "C": "अनुच्छेद 21",
          "D": "अनुच्छेद 32"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) Article 14?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 48,
        "questionNumber": 48,
        "section": "Other Skills",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary cause of 'Eutrophication' in freshwater lakes and rivers?",
        "options": {
          "A": "Heavy oil spills from cargo ships",
          "B": "Excess runoff of agricultural fertilizers (nitrates and phosphates)",
          "C": "Ozone layer depletion",
          "D": "Acidic rain containing sulfuric acid"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Excess runoff of agricultural fertilizers (nitrates and phosphates)**\n\n**Solution & Conceptual Rationale**:\nEutrophication occurs when excess plant nutrients (nitrates and phosphates from fertilizers and sewage) stimulate massive algal blooms that deplete dissolved oxygen.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "कंप्यूटर साइंस अवधारणा: What is the primary cause of 'Eutrophication' in freshwater lakes and rivers के संबंध में सही कथन या मान क्या है?",
        "options_hi": {
          "A": "मालवाहक जहाजों से भारी मात्रा में तेल का रिसाव",
          "B": "कृषि उर्वरकों का अत्यधिक अपवाह (नाइट्रेट और फॉस्फेट)",
          "C": "ओजोन परत का क्षरण",
          "D": "सल्फ्यूरिक एसिड युक्त अम्लीय वर्षा"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Excess runoff of agricultural fertilizers (nitrates and phosphates)?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 49,
        "questionNumber": 49,
        "section": "Other Skills",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "According to Lindeman's Ten Percent Law in ecological energetics, how much energy is transferred from one trophic level to the next?",
        "options": {
          "A": "1%",
          "B": "10%",
          "C": "50%",
          "D": "90%"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) 10%**\n\n**Solution & Conceptual Rationale**:\nLindeman's Efficiency Law states that only about 10% of the energy stored as organic matter at one trophic level is transferred to the next trophic level; the remaining 90% is lost as metabolic heat.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "पारिस्थितिक ऊर्जा विज्ञान में लिंडमैन के दस प्रतिशत नियम के अनुसार, कितनी ऊर्जा एक पोषी स्तर से दूसरे पोषी स्तर तक स्थानांतरित होती है?",
        "options_hi": {
          "A": "1%",
          "B": "10%",
          "C": "50%",
          "D": "90%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) 10%?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 50,
        "questionNumber": 50,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A shopkeeper buys an article for ₹500 and sells it for ₹650. What is his profit percentage?",
        "options": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 30%**\n\n**Solution & Conceptual Rationale**:\nProfit = Selling Price - Cost Price = 650 - 500 = ₹150. Profit Percentage = (Profit / CP) × 100 = (150 / 500) × 100 = 30%.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "एक दुकानदार एक वस्तु ₹500 में खरीदता है और उसे ₹650 में बेचता है। उसका लाभ प्रतिशत क्या है?",
        "options_hi": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 30%?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 31,
        "questionNumber": 31,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "If the ratio of two numbers is 3 : 5 and their sum is 120, what is the larger number?",
        "options": {
          "A": "45",
          "B": "65",
          "C": "75",
          "D": "80%"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 75**\n\n**Solution & Conceptual Rationale**:\nTotal ratio units = 3 + 5 = 8 units. 1 unit = 120 / 8 = 15. The larger number = 5 × 15 = 75. (Smaller number is 3 × 15 = 45).",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "यदि दो संख्याओं का अनुपात 3:5 है और उनका योग 120 है, तो बड़ी संख्या क्या है?",
        "options_hi": {
          "A": "45",
          "B": "65",
          "C": "75",
          "D": "80%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 75?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 32,
        "questionNumber": 32,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Complete the alphabetical series: B, D, G, K, P, ____?",
        "options": {
          "A": "T",
          "B": "U",
          "C": "V",
          "D": "W"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) V**\n\n**Solution & Conceptual Rationale**:\nLetter positions in alphabet: B(2) +2 -> D(4); D(4) +3 -> G(7); G(7) +4 -> K(11); K(11) +5 -> P(16); P(16) +6 -> V(22). The next letter is V.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "वर्णमाला क्रम को पूरा करें: B, D, G, K, P, ____?",
        "options_hi": {
          "A": "T",
          "B": "U",
          "C": "V",
          "D": "W"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) V?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 33,
        "questionNumber": 33,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Statements: 1. Some pens are books. 2. All books are pencils. Conclusion: Some pens are pencils.",
        "options": {
          "A": "Definitely True",
          "B": "Definitely False",
          "C": "Probably True",
          "D": "Cannot be determined"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) Definitely True**\n\n**Solution & Conceptual Rationale**:\nThe intersection of 'pens' and 'books' falls entirely within the set of 'pencils'. Thus, some pens must be pencils. The conclusion is Definitely True.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "कथन: 1. कुछ कलम किताबें हैं। 2. सभी किताबें पेंसिल हैं। निष्कर्ष: कुछ पेन पेंसिल हैं।",
        "options_hi": {
          "A": "निश्चित रूप से सच",
          "B": "निश्चित रूप से झूठ",
          "C": "Probably True",
          "D": "तय नहीं किया जा सकता"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) Definitely True?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 34,
        "questionNumber": 34,
        "section": "Other Skills",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE?",
        "options": {
          "A": "Nalanda University",
          "B": "Vikramashila University",
          "C": "Odantapuri University",
          "D": "Taxila University"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Vikramashila University**\n\n**Solution & Conceptual Rationale**:\nVikramashila University was established by Pala Emperor Dharmapala at Antichak (Bhagalpur district, Bihar) as a premier Buddhist educational institution.",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "कंप्यूटर साइंस अवधारणा: Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE के संबंध में सही कथन या मान क्या है?",
        "options_hi": {
          "A": "नालन्दा विश्वविद्यालय",
          "B": "विक्रमशिला विश्वविद्यालय",
          "C": "Odantapuri University",
          "D": "तक्षशिला विश्वविद्यालय"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Vikramashila University?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 35,
        "questionNumber": 35,
        "section": "Other Skills",
        "topic": "Fundamental of E-Commerce",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Mahatma Gandhi's first civil disobedience movement in India, launched in 1917 to support indigo farmers, occurred in:",
        "options": {
          "A": "Kheda",
          "B": "Champaran, Bihar",
          "C": "Dandi",
          "D": "Bardoli"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Champaran, Bihar**\n\n**Solution & Conceptual Rationale**:\nChamparan Satyagraha (1917) in Bihar was Gandhiji's first major satyagraha in India against the exploitative Tinkathia indigo cultivation system.",
        "topic_hi": "ई-कॉमर्स के मूल सिद्धांत",
        "question_hi": "भारत में नील किसानों के समर्थन के लिए 1917 में शुरू किया गया महात्मा गांधी का पहला सविनय अवज्ञा आंदोलन कब हुआ:",
        "options_hi": {
          "A": "खेड़ा",
          "B": "चंपारण, बिहार",
          "C": "दांडी",
          "D": "बारडोली"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Champaran, Bihar?**\n\n**विषय अवधारणा (ई-कॉमर्स के मूल सिद्धांत)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 36,
        "questionNumber": 36,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which Article of the Indian Constitution guarantees the 'Right to Equality before the Law'?",
        "options": {
          "A": "Article 14",
          "B": "Article 19",
          "C": "Article 21",
          "D": "Article 32"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) Article 14**\n\n**Solution & Conceptual Rationale**:\nArticle 14 states that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद 'कानून के समक्ष समानता का अधिकार' की गारंटी देता है?",
        "options_hi": {
          "A": "अनुच्छेद 14",
          "B": "अनुच्छेद 19",
          "C": "अनुच्छेद 21",
          "D": "अनुच्छेद 32"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) Article 14?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 37,
        "questionNumber": 37,
        "section": "Other Skills",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary cause of 'Eutrophication' in freshwater lakes and rivers?",
        "options": {
          "A": "Heavy oil spills from cargo ships",
          "B": "Excess runoff of agricultural fertilizers (nitrates and phosphates)",
          "C": "Ozone layer depletion",
          "D": "Acidic rain containing sulfuric acid"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Excess runoff of agricultural fertilizers (nitrates and phosphates)**\n\n**Solution & Conceptual Rationale**:\nEutrophication occurs when excess plant nutrients (nitrates and phosphates from fertilizers and sewage) stimulate massive algal blooms that deplete dissolved oxygen.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "कंप्यूटर साइंस अवधारणा: What is the primary cause of 'Eutrophication' in freshwater lakes and rivers के संबंध में सही कथन या मान क्या है?",
        "options_hi": {
          "A": "मालवाहक जहाजों से भारी मात्रा में तेल का रिसाव",
          "B": "कृषि उर्वरकों का अत्यधिक अपवाह (नाइट्रेट और फॉस्फेट)",
          "C": "ओजोन परत का क्षरण",
          "D": "सल्फ्यूरिक एसिड युक्त अम्लीय वर्षा"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Excess runoff of agricultural fertilizers (nitrates and phosphates)?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 38,
        "questionNumber": 38,
        "section": "Other Skills",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "According to Lindeman's Ten Percent Law in ecological energetics, how much energy is transferred from one trophic level to the next?",
        "options": {
          "A": "1%",
          "B": "10%",
          "C": "50%",
          "D": "90%"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) 10%**\n\n**Solution & Conceptual Rationale**:\nLindeman's Efficiency Law states that only about 10% of the energy stored as organic matter at one trophic level is transferred to the next trophic level; the remaining 90% is lost as metabolic heat.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "पारिस्थितिक ऊर्जा विज्ञान में लिंडमैन के दस प्रतिशत नियम के अनुसार, कितनी ऊर्जा एक पोषी स्तर से दूसरे पोषी स्तर तक स्थानांतरित होती है?",
        "options_hi": {
          "A": "1%",
          "B": "10%",
          "C": "50%",
          "D": "90%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) 10%?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 39,
        "questionNumber": 39,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A shopkeeper buys an article for ₹500 and sells it for ₹650. What is his profit percentage?",
        "options": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 30%**\n\n**Solution & Conceptual Rationale**:\nProfit = Selling Price - Cost Price = 650 - 500 = ₹150. Profit Percentage = (Profit / CP) × 100 = (150 / 500) × 100 = 30%.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "एक दुकानदार एक वस्तु ₹500 में खरीदता है और उसे ₹650 में बेचता है। उसका लाभ प्रतिशत क्या है?",
        "options_hi": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 30%?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 40,
        "questionNumber": 40,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "If the ratio of two numbers is 3 : 5 and their sum is 120, what is the larger number?",
        "options": {
          "A": "45",
          "B": "65",
          "C": "75",
          "D": "80%"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 75**\n\n**Solution & Conceptual Rationale**:\nTotal ratio units = 3 + 5 = 8 units. 1 unit = 120 / 8 = 15. The larger number = 5 × 15 = 75. (Smaller number is 3 × 15 = 45).",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "यदि दो संख्याओं का अनुपात 3:5 है और उनका योग 120 है, तो बड़ी संख्या क्या है?",
        "options_hi": {
          "A": "45",
          "B": "65",
          "C": "75",
          "D": "80%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 75?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 41,
        "questionNumber": 41,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A shopkeeper buys an article for ₹500 and sells it for ₹650. What is his profit percentage?",
        "options": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 30%**\n\n**Solution & Conceptual Rationale**:\nProfit = Selling Price - Cost Price = 650 - 500 = ₹150. Profit Percentage = (Profit / CP) × 100 = (150 / 500) × 100 = 30%.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "एक दुकानदार एक वस्तु ₹500 में खरीदता है और उसे ₹650 में बेचता है। उसका लाभ प्रतिशत क्या है?",
        "options_hi": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 30%?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 42,
        "questionNumber": 42,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "If the ratio of two numbers is 3 : 5 and their sum is 120, what is the larger number?",
        "options": {
          "A": "45",
          "B": "65",
          "C": "75",
          "D": "80%"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 75**\n\n**Solution & Conceptual Rationale**:\nTotal ratio units = 3 + 5 = 8 units. 1 unit = 120 / 8 = 15. The larger number = 5 × 15 = 75. (Smaller number is 3 × 15 = 45).",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "यदि दो संख्याओं का अनुपात 3:5 है और उनका योग 120 है, तो बड़ी संख्या क्या है?",
        "options_hi": {
          "A": "45",
          "B": "65",
          "C": "75",
          "D": "80%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 75?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 43,
        "questionNumber": 43,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Complete the alphabetical series: B, D, G, K, P, ____?",
        "options": {
          "A": "T",
          "B": "U",
          "C": "V",
          "D": "W"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) V**\n\n**Solution & Conceptual Rationale**:\nLetter positions in alphabet: B(2) +2 -> D(4); D(4) +3 -> G(7); G(7) +4 -> K(11); K(11) +5 -> P(16); P(16) +6 -> V(22). The next letter is V.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "वर्णमाला क्रम को पूरा करें: B, D, G, K, P, ____?",
        "options_hi": {
          "A": "T",
          "B": "U",
          "C": "V",
          "D": "W"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) V?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 44,
        "questionNumber": 44,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Statements: 1. Some pens are books. 2. All books are pencils. Conclusion: Some pens are pencils.",
        "options": {
          "A": "Definitely True",
          "B": "Definitely False",
          "C": "Probably True",
          "D": "Cannot be determined"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) Definitely True**\n\n**Solution & Conceptual Rationale**:\nThe intersection of 'pens' and 'books' falls entirely within the set of 'pencils'. Thus, some pens must be pencils. The conclusion is Definitely True.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "कथन: 1. कुछ कलम किताबें हैं। 2. सभी किताबें पेंसिल हैं। निष्कर्ष: कुछ पेन पेंसिल हैं।",
        "options_hi": {
          "A": "निश्चित रूप से सच",
          "B": "निश्चित रूप से झूठ",
          "C": "Probably True",
          "D": "तय नहीं किया जा सकता"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) Definitely True?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 45,
        "questionNumber": 45,
        "section": "Other Skills",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE?",
        "options": {
          "A": "Nalanda University",
          "B": "Vikramashila University",
          "C": "Odantapuri University",
          "D": "Taxila University"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Vikramashila University**\n\n**Solution & Conceptual Rationale**:\nVikramashila University was established by Pala Emperor Dharmapala at Antichak (Bhagalpur district, Bihar) as a premier Buddhist educational institution.",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "कंप्यूटर साइंस अवधारणा: Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE के संबंध में सही कथन या मान क्या है?",
        "options_hi": {
          "A": "नालन्दा विश्वविद्यालय",
          "B": "विक्रमशिला विश्वविद्यालय",
          "C": "Odantapuri University",
          "D": "तक्षशिला विश्वविद्यालय"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Vikramashila University?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 46,
        "questionNumber": 46,
        "section": "Other Skills",
        "topic": "Fundamental of E-Commerce",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Mahatma Gandhi's first civil disobedience movement in India, launched in 1917 to support indigo farmers, occurred in:",
        "options": {
          "A": "Kheda",
          "B": "Champaran, Bihar",
          "C": "Dandi",
          "D": "Bardoli"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Champaran, Bihar**\n\n**Solution & Conceptual Rationale**:\nChamparan Satyagraha (1917) in Bihar was Gandhiji's first major satyagraha in India against the exploitative Tinkathia indigo cultivation system.",
        "topic_hi": "ई-कॉमर्स के मूल सिद्धांत",
        "question_hi": "भारत में नील किसानों के समर्थन के लिए 1917 में शुरू किया गया महात्मा गांधी का पहला सविनय अवज्ञा आंदोलन कब हुआ:",
        "options_hi": {
          "A": "खेड़ा",
          "B": "चंपारण, बिहार",
          "C": "दांडी",
          "D": "बारडोली"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Champaran, Bihar?**\n\n**विषय अवधारणा (ई-कॉमर्स के मूल सिद्धांत)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 47,
        "questionNumber": 47,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which Article of the Indian Constitution guarantees the 'Right to Equality before the Law'?",
        "options": {
          "A": "Article 14",
          "B": "Article 19",
          "C": "Article 21",
          "D": "Article 32"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) Article 14**\n\n**Solution & Conceptual Rationale**:\nArticle 14 states that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद 'कानून के समक्ष समानता का अधिकार' की गारंटी देता है?",
        "options_hi": {
          "A": "अनुच्छेद 14",
          "B": "अनुच्छेद 19",
          "C": "अनुच्छेद 21",
          "D": "अनुच्छेद 32"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) Article 14?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 48,
        "questionNumber": 48,
        "section": "Other Skills",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary cause of 'Eutrophication' in freshwater lakes and rivers?",
        "options": {
          "A": "Heavy oil spills from cargo ships",
          "B": "Excess runoff of agricultural fertilizers (nitrates and phosphates)",
          "C": "Ozone layer depletion",
          "D": "Acidic rain containing sulfuric acid"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Excess runoff of agricultural fertilizers (nitrates and phosphates)**\n\n**Solution & Conceptual Rationale**:\nEutrophication occurs when excess plant nutrients (nitrates and phosphates from fertilizers and sewage) stimulate massive algal blooms that deplete dissolved oxygen.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "कंप्यूटर साइंस अवधारणा: What is the primary cause of 'Eutrophication' in freshwater lakes and rivers के संबंध में सही कथन या मान क्या है?",
        "options_hi": {
          "A": "मालवाहक जहाजों से भारी मात्रा में तेल का रिसाव",
          "B": "कृषि उर्वरकों का अत्यधिक अपवाह (नाइट्रेट और फॉस्फेट)",
          "C": "ओजोन परत का क्षरण",
          "D": "सल्फ्यूरिक एसिड युक्त अम्लीय वर्षा"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Excess runoff of agricultural fertilizers (nitrates and phosphates)?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 49,
        "questionNumber": 49,
        "section": "Other Skills",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "According to Lindeman's Ten Percent Law in ecological energetics, how much energy is transferred from one trophic level to the next?",
        "options": {
          "A": "1%",
          "B": "10%",
          "C": "50%",
          "D": "90%"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) 10%**\n\n**Solution & Conceptual Rationale**:\nLindeman's Efficiency Law states that only about 10% of the energy stored as organic matter at one trophic level is transferred to the next trophic level; the remaining 90% is lost as metabolic heat.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "पारिस्थितिक ऊर्जा विज्ञान में लिंडमैन के दस प्रतिशत नियम के अनुसार, कितनी ऊर्जा एक पोषी स्तर से दूसरे पोषी स्तर तक स्थानांतरित होती है?",
        "options_hi": {
          "A": "1%",
          "B": "10%",
          "C": "50%",
          "D": "90%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) 10%?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 50,
        "questionNumber": 50,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A shopkeeper buys an article for ₹500 and sells it for ₹650. What is his profit percentage?",
        "options": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 30%**\n\n**Solution & Conceptual Rationale**:\nProfit = Selling Price - Cost Price = 650 - 500 = ₹150. Profit Percentage = (Profit / CP) × 100 = (150 / 500) × 100 = 30%.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "एक दुकानदार एक वस्तु ₹500 में खरीदता है और उसे ₹650 में बेचता है। उसका लाभ प्रतिशत क्या है?",
        "options_hi": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 30%?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 31,
        "questionNumber": 31,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "If the ratio of two numbers is 3 : 5 and their sum is 120, what is the larger number?",
        "options": {
          "A": "45",
          "B": "65",
          "C": "75",
          "D": "80%"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 75**\n\n**Solution & Conceptual Rationale**:\nTotal ratio units = 3 + 5 = 8 units. 1 unit = 120 / 8 = 15. The larger number = 5 × 15 = 75. (Smaller number is 3 × 15 = 45).",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "यदि दो संख्याओं का अनुपात 3:5 है और उनका योग 120 है, तो बड़ी संख्या क्या है?",
        "options_hi": {
          "A": "45",
          "B": "65",
          "C": "75",
          "D": "80%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 75?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 32,
        "questionNumber": 32,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Complete the alphabetical series: B, D, G, K, P, ____?",
        "options": {
          "A": "T",
          "B": "U",
          "C": "V",
          "D": "W"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) V**\n\n**Solution & Conceptual Rationale**:\nLetter positions in alphabet: B(2) +2 -> D(4); D(4) +3 -> G(7); G(7) +4 -> K(11); K(11) +5 -> P(16); P(16) +6 -> V(22). The next letter is V.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "वर्णमाला क्रम को पूरा करें: B, D, G, K, P, ____?",
        "options_hi": {
          "A": "T",
          "B": "U",
          "C": "V",
          "D": "W"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) V?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 33,
        "questionNumber": 33,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Statements: 1. Some pens are books. 2. All books are pencils. Conclusion: Some pens are pencils.",
        "options": {
          "A": "Definitely True",
          "B": "Definitely False",
          "C": "Probably True",
          "D": "Cannot be determined"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) Definitely True**\n\n**Solution & Conceptual Rationale**:\nThe intersection of 'pens' and 'books' falls entirely within the set of 'pencils'. Thus, some pens must be pencils. The conclusion is Definitely True.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "कथन: 1. कुछ कलम किताबें हैं। 2. सभी किताबें पेंसिल हैं। निष्कर्ष: कुछ पेन पेंसिल हैं।",
        "options_hi": {
          "A": "निश्चित रूप से सच",
          "B": "निश्चित रूप से झूठ",
          "C": "Probably True",
          "D": "तय नहीं किया जा सकता"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) Definitely True?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 34,
        "questionNumber": 34,
        "section": "Other Skills",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE?",
        "options": {
          "A": "Nalanda University",
          "B": "Vikramashila University",
          "C": "Odantapuri University",
          "D": "Taxila University"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Vikramashila University**\n\n**Solution & Conceptual Rationale**:\nVikramashila University was established by Pala Emperor Dharmapala at Antichak (Bhagalpur district, Bihar) as a premier Buddhist educational institution.",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "कंप्यूटर साइंस अवधारणा: Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE के संबंध में सही कथन या मान क्या है?",
        "options_hi": {
          "A": "नालन्दा विश्वविद्यालय",
          "B": "विक्रमशिला विश्वविद्यालय",
          "C": "Odantapuri University",
          "D": "तक्षशिला विश्वविद्यालय"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Vikramashila University?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 35,
        "questionNumber": 35,
        "section": "Other Skills",
        "topic": "Fundamental of E-Commerce",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Mahatma Gandhi's first civil disobedience movement in India, launched in 1917 to support indigo farmers, occurred in:",
        "options": {
          "A": "Kheda",
          "B": "Champaran, Bihar",
          "C": "Dandi",
          "D": "Bardoli"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Champaran, Bihar**\n\n**Solution & Conceptual Rationale**:\nChamparan Satyagraha (1917) in Bihar was Gandhiji's first major satyagraha in India against the exploitative Tinkathia indigo cultivation system.",
        "topic_hi": "ई-कॉमर्स के मूल सिद्धांत",
        "question_hi": "भारत में नील किसानों के समर्थन के लिए 1917 में शुरू किया गया महात्मा गांधी का पहला सविनय अवज्ञा आंदोलन कब हुआ:",
        "options_hi": {
          "A": "खेड़ा",
          "B": "चंपारण, बिहार",
          "C": "दांडी",
          "D": "बारडोली"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Champaran, Bihar?**\n\n**विषय अवधारणा (ई-कॉमर्स के मूल सिद्धांत)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 36,
        "questionNumber": 36,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which Article of the Indian Constitution guarantees the 'Right to Equality before the Law'?",
        "options": {
          "A": "Article 14",
          "B": "Article 19",
          "C": "Article 21",
          "D": "Article 32"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) Article 14**\n\n**Solution & Conceptual Rationale**:\nArticle 14 states that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद 'कानून के समक्ष समानता का अधिकार' की गारंटी देता है?",
        "options_hi": {
          "A": "अनुच्छेद 14",
          "B": "अनुच्छेद 19",
          "C": "अनुच्छेद 21",
          "D": "अनुच्छेद 32"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) Article 14?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 37,
        "questionNumber": 37,
        "section": "Other Skills",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary cause of 'Eutrophication' in freshwater lakes and rivers?",
        "options": {
          "A": "Heavy oil spills from cargo ships",
          "B": "Excess runoff of agricultural fertilizers (nitrates and phosphates)",
          "C": "Ozone layer depletion",
          "D": "Acidic rain containing sulfuric acid"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Excess runoff of agricultural fertilizers (nitrates and phosphates)**\n\n**Solution & Conceptual Rationale**:\nEutrophication occurs when excess plant nutrients (nitrates and phosphates from fertilizers and sewage) stimulate massive algal blooms that deplete dissolved oxygen.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "कंप्यूटर साइंस अवधारणा: What is the primary cause of 'Eutrophication' in freshwater lakes and rivers के संबंध में सही कथन या मान क्या है?",
        "options_hi": {
          "A": "मालवाहक जहाजों से भारी मात्रा में तेल का रिसाव",
          "B": "कृषि उर्वरकों का अत्यधिक अपवाह (नाइट्रेट और फॉस्फेट)",
          "C": "ओजोन परत का क्षरण",
          "D": "सल्फ्यूरिक एसिड युक्त अम्लीय वर्षा"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Excess runoff of agricultural fertilizers (nitrates and phosphates)?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 38,
        "questionNumber": 38,
        "section": "Other Skills",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "According to Lindeman's Ten Percent Law in ecological energetics, how much energy is transferred from one trophic level to the next?",
        "options": {
          "A": "1%",
          "B": "10%",
          "C": "50%",
          "D": "90%"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) 10%**\n\n**Solution & Conceptual Rationale**:\nLindeman's Efficiency Law states that only about 10% of the energy stored as organic matter at one trophic level is transferred to the next trophic level; the remaining 90% is lost as metabolic heat.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "पारिस्थितिक ऊर्जा विज्ञान में लिंडमैन के दस प्रतिशत नियम के अनुसार, कितनी ऊर्जा एक पोषी स्तर से दूसरे पोषी स्तर तक स्थानांतरित होती है?",
        "options_hi": {
          "A": "1%",
          "B": "10%",
          "C": "50%",
          "D": "90%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) 10%?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 39,
        "questionNumber": 39,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A shopkeeper buys an article for ₹500 and sells it for ₹650. What is his profit percentage?",
        "options": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 30%**\n\n**Solution & Conceptual Rationale**:\nProfit = Selling Price - Cost Price = 650 - 500 = ₹150. Profit Percentage = (Profit / CP) × 100 = (150 / 500) × 100 = 30%.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "एक दुकानदार एक वस्तु ₹500 में खरीदता है और उसे ₹650 में बेचता है। उसका लाभ प्रतिशत क्या है?",
        "options_hi": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 30%?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 40,
        "questionNumber": 40,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "If the ratio of two numbers is 3 : 5 and their sum is 120, what is the larger number?",
        "options": {
          "A": "45",
          "B": "65",
          "C": "75",
          "D": "80%"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 75**\n\n**Solution & Conceptual Rationale**:\nTotal ratio units = 3 + 5 = 8 units. 1 unit = 120 / 8 = 15. The larger number = 5 × 15 = 75. (Smaller number is 3 × 15 = 45).",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "यदि दो संख्याओं का अनुपात 3:5 है और उनका योग 120 है, तो बड़ी संख्या क्या है?",
        "options_hi": {
          "A": "45",
          "B": "65",
          "C": "75",
          "D": "80%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 75?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 41,
        "questionNumber": 41,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A shopkeeper buys an article for ₹500 and sells it for ₹650. What is his profit percentage?",
        "options": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 30%**\n\n**Solution & Conceptual Rationale**:\nProfit = Selling Price - Cost Price = 650 - 500 = ₹150. Profit Percentage = (Profit / CP) × 100 = (150 / 500) × 100 = 30%.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "एक दुकानदार एक वस्तु ₹500 में खरीदता है और उसे ₹650 में बेचता है। उसका लाभ प्रतिशत क्या है?",
        "options_hi": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 30%?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 42,
        "questionNumber": 42,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "If the ratio of two numbers is 3 : 5 and their sum is 120, what is the larger number?",
        "options": {
          "A": "45",
          "B": "65",
          "C": "75",
          "D": "80%"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 75**\n\n**Solution & Conceptual Rationale**:\nTotal ratio units = 3 + 5 = 8 units. 1 unit = 120 / 8 = 15. The larger number = 5 × 15 = 75. (Smaller number is 3 × 15 = 45).",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "यदि दो संख्याओं का अनुपात 3:5 है और उनका योग 120 है, तो बड़ी संख्या क्या है?",
        "options_hi": {
          "A": "45",
          "B": "65",
          "C": "75",
          "D": "80%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 75?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 43,
        "questionNumber": 43,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Complete the alphabetical series: B, D, G, K, P, ____?",
        "options": {
          "A": "T",
          "B": "U",
          "C": "V",
          "D": "W"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) V**\n\n**Solution & Conceptual Rationale**:\nLetter positions in alphabet: B(2) +2 -> D(4); D(4) +3 -> G(7); G(7) +4 -> K(11); K(11) +5 -> P(16); P(16) +6 -> V(22). The next letter is V.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "वर्णमाला क्रम को पूरा करें: B, D, G, K, P, ____?",
        "options_hi": {
          "A": "T",
          "B": "U",
          "C": "V",
          "D": "W"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) V?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      },
      {
        "id": 44,
        "questionNumber": 44,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Statements: 1. Some pens are books. 2. All books are pencils. Conclusion: Some pens are pencils.",
        "options": {
          "A": "Definitely True",
          "B": "Definitely False",
          "C": "Probably True",
          "D": "Cannot be determined"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) Definitely True**\n\n**Solution & Conceptual Rationale**:\nThe intersection of 'pens' and 'books' falls entirely within the set of 'pencils'. Thus, some pens must be pencils. The conclusion is Definitely True.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "कथन: 1. कुछ कलम किताबें हैं। 2. सभी किताबें पेंसिल हैं। निष्कर्ष: कुछ पेन पेंसिल हैं।",
        "options_hi": {
          "A": "निश्चित रूप से सच",
          "B": "निश्चित रूप से झूठ",
          "C": "Probably True",
          "D": "तय नहीं किया जा सकता"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) Definitely True?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 45,
        "questionNumber": 45,
        "section": "Other Skills",
        "topic": "Computer Networks",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE?",
        "options": {
          "A": "Nalanda University",
          "B": "Vikramashila University",
          "C": "Odantapuri University",
          "D": "Taxila University"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Vikramashila University**\n\n**Solution & Conceptual Rationale**:\nVikramashila University was established by Pala Emperor Dharmapala at Antichak (Bhagalpur district, Bihar) as a premier Buddhist educational institution.",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "question_hi": "कंप्यूटर साइंस अवधारणा: Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE के संबंध में सही कथन या मान क्या है?",
        "options_hi": {
          "A": "नालन्दा विश्वविद्यालय",
          "B": "विक्रमशिला विश्वविद्यालय",
          "C": "Odantapuri University",
          "D": "तक्षशिला विश्वविद्यालय"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Vikramashila University?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 46,
        "questionNumber": 46,
        "section": "Other Skills",
        "topic": "Fundamental of E-Commerce",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Mahatma Gandhi's first civil disobedience movement in India, launched in 1917 to support indigo farmers, occurred in:",
        "options": {
          "A": "Kheda",
          "B": "Champaran, Bihar",
          "C": "Dandi",
          "D": "Bardoli"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Champaran, Bihar**\n\n**Solution & Conceptual Rationale**:\nChamparan Satyagraha (1917) in Bihar was Gandhiji's first major satyagraha in India against the exploitative Tinkathia indigo cultivation system.",
        "topic_hi": "ई-कॉमर्स के मूल सिद्धांत",
        "question_hi": "भारत में नील किसानों के समर्थन के लिए 1917 में शुरू किया गया महात्मा गांधी का पहला सविनय अवज्ञा आंदोलन कब हुआ:",
        "options_hi": {
          "A": "खेड़ा",
          "B": "चंपारण, बिहार",
          "C": "दांडी",
          "D": "बारडोली"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Champaran, Bihar?**\n\n**विषय अवधारणा (ई-कॉमर्स के मूल सिद्धांत)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 47,
        "questionNumber": 47,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which Article of the Indian Constitution guarantees the 'Right to Equality before the Law'?",
        "options": {
          "A": "Article 14",
          "B": "Article 19",
          "C": "Article 21",
          "D": "Article 32"
        },
        "correctAnswer": "A",
        "explanation": "**Correct Answer: (A) Article 14**\n\n**Solution & Conceptual Rationale**:\nArticle 14 states that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद 'कानून के समक्ष समानता का अधिकार' की गारंटी देता है?",
        "options_hi": {
          "A": "अनुच्छेद 14",
          "B": "अनुच्छेद 19",
          "C": "अनुच्छेद 21",
          "D": "अनुच्छेद 32"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (A) Article 14?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
      },
      {
        "id": 48,
        "questionNumber": 48,
        "section": "Other Skills",
        "topic": "Database Management Systems",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary cause of 'Eutrophication' in freshwater lakes and rivers?",
        "options": {
          "A": "Heavy oil spills from cargo ships",
          "B": "Excess runoff of agricultural fertilizers (nitrates and phosphates)",
          "C": "Ozone layer depletion",
          "D": "Acidic rain containing sulfuric acid"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) Excess runoff of agricultural fertilizers (nitrates and phosphates)**\n\n**Solution & Conceptual Rationale**:\nEutrophication occurs when excess plant nutrients (nitrates and phosphates from fertilizers and sewage) stimulate massive algal blooms that deplete dissolved oxygen.",
        "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
        "question_hi": "कंप्यूटर साइंस अवधारणा: What is the primary cause of 'Eutrophication' in freshwater lakes and rivers के संबंध में सही कथन या मान क्या है?",
        "options_hi": {
          "A": "मालवाहक जहाजों से भारी मात्रा में तेल का रिसाव",
          "B": "कृषि उर्वरकों का अत्यधिक अपवाह (नाइट्रेट और फॉस्फेट)",
          "C": "ओजोन परत का क्षरण",
          "D": "सल्फ्यूरिक एसिड युक्त अम्लीय वर्षा"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) Excess runoff of agricultural fertilizers (nitrates and phosphates)?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 49,
        "questionNumber": 49,
        "section": "Other Skills",
        "topic": "Computer Organization & Architecture",
        "marks": 1,
        "negativeMarks": 0,
        "question": "According to Lindeman's Ten Percent Law in ecological energetics, how much energy is transferred from one trophic level to the next?",
        "options": {
          "A": "1%",
          "B": "10%",
          "C": "50%",
          "D": "90%"
        },
        "correctAnswer": "B",
        "explanation": "**Correct Answer: (B) 10%**\n\n**Solution & Conceptual Rationale**:\nLindeman's Efficiency Law states that only about 10% of the energy stored as organic matter at one trophic level is transferred to the next trophic level; the remaining 90% is lost as metabolic heat.",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "question_hi": "पारिस्थितिक ऊर्जा विज्ञान में लिंडमैन के दस प्रतिशत नियम के अनुसार, कितनी ऊर्जा एक पोषी स्तर से दूसरे पोषी स्तर तक स्थानांतरित होती है?",
        "options_hi": {
          "A": "1%",
          "B": "10%",
          "C": "50%",
          "D": "90%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (B) 10%?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
      },
      {
        "id": 50,
        "questionNumber": 50,
        "section": "Other Skills",
        "topic": "Computer Science",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A shopkeeper buys an article for ₹500 and sells it for ₹650. What is his profit percentage?",
        "options": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "correctAnswer": "C",
        "explanation": "**Correct Answer: (C) 30%**\n\n**Solution & Conceptual Rationale**:\nProfit = Selling Price - Cost Price = 650 - 500 = ₹150. Profit Percentage = (Profit / CP) × 100 = (150 / 500) × 100 = 30%.",
        "topic_hi": "कंप्यूटर साइंस",
        "question_hi": "एक दुकानदार एक वस्तु ₹500 में खरीदता है और उसे ₹650 में बेचता है। उसका लाभ प्रतिशत क्या है?",
        "options_hi": {
          "A": "20%",
          "B": "25%",
          "C": "30%",
          "D": "35%"
        },
        "explanation_hi": "**आधिकारिक सही उत्तर: (C) 30%?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
      }
    ]
  }
};
