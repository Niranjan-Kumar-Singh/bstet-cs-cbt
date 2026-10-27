// Generated Question Paper Data
window.predicted_set11 = {
  "id": "predicted_set11",
  "title": "2026 Predicted Full Mock 11",
  "subtitle": "Ultimate Marathon Mock: Full Exam Standard Computer Science & Pedagogy Evaluation",
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
      "topic": "Programming and Data Structures",
      "topic_hi": "प्रोग्रामिंग और डेटा संरचनाएं (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which tree traversal visits the Root node FIRST, followed by the Left subtree and then the Right subtree?",
      "question_hi": "कौन सा ट्री ट्रैवर्सल सबसे पहले रूट (Root) नोड, फिर बाएँ सबट्री और फिर दाएँ सबट्री पर जाता है?",
      "options": {
        "A": "Preorder Traversal (Root, Left, Right)",
        "B": "Inorder Traversal (Left, Root, Right)",
        "C": "Postorder Traversal (Left, Right, Root)",
        "D": "Level-order Traversal"
      },
      "options_hi": {
        "A": "प्रीऑर्डर ट्रैवर्सल (Root, Left, Right)",
        "B": "इनऑर्डर ट्रैवर्सल (Left, Root, Right)",
        "C": "पोस्टऑर्डर ट्रैवर्सल (Left, Right, Root)",
        "D": "लेवल-ऑर्डर"
      },
      "correctAnswer": "A",
      "explanation": "Preorder: Visit Node -> Recurse Left -> Recurse Right.",
      "explanation_hi": "प्रीऑर्डर में सबसे पहले रूट नोड की विज़िट होती है।"
    },
    {
      "id": 2,
      "questionNumber": 2,
      "section": "Computer Science",
      "topic": "Programming and Data Structures",
      "topic_hi": "प्रोग्रामिंग और डेटा संरचनाएं (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "If the Inorder traversal of a binary tree is D, B, E, A, F, C and Preorder is A, B, D, E, C, F, what is the Root of the tree?",
      "question_hi": "यदि किसी बाइनरी ट्री का Inorder D, B, E, A, F, C और Preorder A, B, D, E, C, F है, तो ट्री का रूट नोड कौन सा है?",
      "options": {
        "A": "A",
        "B": "D",
        "C": "F",
        "D": "C"
      },
      "options_hi": {
        "A": "A",
        "B": "D",
        "C": "F",
        "D": "C"
      },
      "correctAnswer": "A",
      "explanation": "The first element in Preorder traversal is always the Root of the tree (here 'A').",
      "explanation_hi": "प्रीऑर्डर का पहला तत्व हमेशा ट्री का रूट नोड होता है (यहाँ 'A')।"
    },
    {
      "id": 3,
      "questionNumber": 3,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम (Algorithms)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "According to the Master Theorem, what is the time complexity of the recurrence relation T(n) = 2T(n/2) + O(n)?",
      "question_hi": "मास्टर प्रमेय के अनुसार पुनरावृत्ति संबंध T(n) = 2T(n/2) + O(n) की समय जटिलता (Time Complexity) क्या है?",
      "options": {
        "A": "O(n log n)",
        "B": "O(n^2)",
        "C": "O(n)",
        "D": "O(log n)"
      },
      "options_hi": {
        "A": "O(n log n)",
        "B": "O(n^2)",
        "C": "O(n)",
        "D": "O(log n)"
      },
      "correctAnswer": "A",
      "explanation": "Here a=2, b=2, f(n)=n. log_b(a) = log_2(2) = 1. Since f(n) = Theta(n^1), Case 2 of Master Theorem applies: T(n) = Theta(n log n) (Merge Sort).",
      "explanation_hi": "मास्टर प्रमेय केस 2 के अनुसार T(n) = O(n log n) प्राप्त होता है (मर्ज सॉर्ट का संबंध)।"
    },
    {
      "id": 4,
      "questionNumber": 4,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम (Algorithms)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the time complexity of the recurrence relation T(n) = 4T(n/2) + O(n)?",
      "question_hi": "पुनरावृत्ति संबंध T(n) = 4T(n/2) + O(n) की समय जटिलता क्या है?",
      "options": {
        "A": "O(n^2)",
        "B": "O(n log n)",
        "C": "O(n^3)",
        "D": "O(n)"
      },
      "options_hi": {
        "A": "O(n^2)",
        "B": "O(n log n)",
        "C": "O(n^3)",
        "D": "O(n)"
      },
      "correctAnswer": "A",
      "explanation": "a=4, b=2. n^(log_2 4) = n^2. Since f(n) = n is polynomially smaller than n^2, Case 1 applies: T(n) = Theta(n^2).",
      "explanation_hi": "मास्टर प्रमेय केस 1: n^(log_2 4) = n^2, अतः T(n) = O(n^2)।"
    },
    {
      "id": 5,
      "questionNumber": 5,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम (Algorithms)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Dijkstra's Single Source Shortest Path algorithm fails or produces incorrect results in which graph scenario?",
      "question_hi": "डिजक्स्ट्रा का एकल स्रोत सबसे छोटा पथ एल्गोरिदम किस परिदृश्य में गलत परिणाम दे सकता है?",
      "options": {
        "A": "Graphs containing negative edge weights",
        "B": "Directed acyclic graphs",
        "C": "Unweighted graphs",
        "D": "Dense graphs"
      },
      "options_hi": {
        "A": "नकारात्मक एज भार (Negative Edge Weights) वाले ग्राफ़",
        "B": "निर्देशित अचक्रीय ग्राफ़",
        "C": "अभारित ग्राफ़",
        "D": "सघन ग्राफ़"
      },
      "correctAnswer": "A",
      "explanation": "Dijkstra assumes distances are monotonically non-decreasing. Negative edge weights invalidate this greedy choice.",
      "explanation_hi": "डिजक्स्ट्रा का लालची दृष्टिकोण नकारात्मक भार वाली एज होने पर विफल हो जाता है।"
    },
    {
      "id": 6,
      "questionNumber": 6,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम (Algorithms)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which algorithm is designed to find all-pairs shortest paths in a directed weighted graph with time complexity O(V^3)?",
      "question_hi": "कौन सा एल्गोरिदम O(V^3) समय जटिलता के साथ ऑल-पेयर्स शॉर्टेस्ट पाथ खोजने के लिए डिज़ाइन किया गया है?",
      "options": {
        "A": "Floyd-Warshall Algorithm",
        "B": "Dijkstra's Algorithm",
        "C": "Prim's Algorithm",
        "D": "Kruskal's Algorithm"
      },
      "options_hi": {
        "A": "फ्लॉयड-वॉर्शेल एल्गोरिदम (Floyd-Warshall)",
        "B": "डिजक्स्ट्रा एल्गोरिदम",
        "C": "प्रिम्स एल्गोरिदम",
        "D": "क्रुस्कल एल्गोरिदम"
      },
      "correctAnswer": "A",
      "explanation": "Floyd-Warshall uses dynamic programming to compute shortest paths between all pairs of vertices in O(V^3) time.",
      "explanation_hi": "फ्लॉयड-वॉर्शेल डायनामिक प्रोग्रामिंग का उपयोग करके सभी शीर्ष युग्मों के बीच न्यूनतम पथ O(V^3) में निकालता है।"
    },
    {
      "id": 7,
      "questionNumber": 7,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम (Algorithms)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What algorithmic paradigm does the Bellman-Ford shortest path algorithm utilize?",
      "question_hi": "बेलमैन-फोर्ड शॉर्टेस्ट पाथ एल्गोरिदम किस एल्गोरिथमिक प्रतिमान का उपयोग करता है?",
      "options": {
        "A": "Dynamic Programming",
        "B": "Greedy Approach",
        "C": "Divide and Conquer",
        "D": "Backtracking"
      },
      "options_hi": {
        "A": "डायनामिक प्रोग्रामिंग (Dynamic Programming)",
        "B": "लालची दृष्टिकोण (Greedy)",
        "C": "विभाजित करो और जीतो",
        "D": "बैकट्रैकिंग"
      },
      "correctAnswer": "A",
      "explanation": "Bellman-Ford iteratively relaxes all edges |V|-1 times using dynamic programming and can detect negative weight cycles.",
      "explanation_hi": "बेलमैन-फोर्ड डायनामिक प्रोग्रामिंग पर आधारित है और नकारात्मक चक्र का पता लगा सकता है।"
    },
    {
      "id": 8,
      "questionNumber": 8,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम (Algorithms)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which algorithmic technique is primarily used to solve the 8-Queens problem?",
      "question_hi": "8-रानियों की समस्या (8-Queens Problem) को हल करने के लिए मुख्य रूप से किस तकनीक का उपयोग किया जाता है?",
      "options": {
        "A": "Backtracking",
        "B": "Greedy Method",
        "C": "Dynamic Programming",
        "D": "Branch and Bound only"
      },
      "options_hi": {
        "A": "बैकट्रैकिंग (Backtracking)",
        "B": "लालची विधि",
        "C": "डायनामिक प्रोग्रामिंग",
        "D": "केवल ब्रांच एंड बाउंड"
      },
      "correctAnswer": "A",
      "explanation": "8-Queens places queens column-by-column and backtracks whenever a conflict is encountered in rows or diagonals.",
      "explanation_hi": "8-क्वीन्स समस्या बैकट्रैकिंग द्वारा टकराव होने पर पिछली स्थिति पर वापस लौटकर हल की जाती है।"
    },
    {
      "id": 9,
      "questionNumber": 9,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम (Algorithms)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the definition of an NP-Complete problem in computational complexity theory?",
      "question_hi": "कम्प्यूटेशनल जटिलता सिद्धांत में एक 'NP-Complete' समस्या की क्या परिभाषा है?",
      "options": {
        "A": "A problem that is in NP and to which every problem in NP can be polynomial-time reduced",
        "B": "A problem solvable in deterministic polynomial time",
        "C": "A problem that cannot be verified in polynomial time",
        "D": "An undecidable problem"
      },
      "options_hi": {
        "A": "एक समस्या जो NP में है और NP की प्रत्येक समस्या को बहुपद-समय में इसमें बदला जा सकता है",
        "B": "P में हल होने योग्य",
        "C": "सत्यापित नहीं की जा सकती",
        "D": "अनिर्धारणीय समस्या"
      },
      "correctAnswer": "A",
      "explanation": "NP-Complete problems are the hardest problems in NP: they belong to NP and are NP-hard (every problem in NP reduces to them in polynomial time).",
      "explanation_hi": "NP-Complete समस्या NP में होती है और NP की सभी समस्याएं बहुपद समय में इसमें रिड्यूस हो सकती हैं।"
    },
    {
      "id": 10,
      "questionNumber": 10,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What are the four necessary and sufficient conditions for a Deadlock to occur in an operating system (Coffman Conditions)?",
      "question_hi": "ऑपरेटिंग सिस्टम में डेडलॉक उत्पन्न होने के लिए कौन सी 4 आवश्यक और पर्याप्त शर्तें (कॉफमैन शर्तें) हैं?",
      "options": {
        "A": "Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait",
        "B": "Mutual Exclusion, Paging, Fragmentation, Thrashing",
        "C": "Semaphores, Mutex, Monitors, Deadlock",
        "D": "Preemption, Starvation, Aging, Spooling"
      },
      "options_hi": {
        "A": "पारस्परिक अपवर्जन, होल्ड एंड वेट, नो प्रीमेम्प्शन, सर्कुलर वेट",
        "B": "म्युचुअल एक्सक्लूजन, पेजिंग, थ्रैशिंग",
        "C": "सेमाफोर, म्यूटेक्स, मॉनिटर",
        "D": "प्रीमेम्प्शन, स्टारवेशन, एजिंग"
      },
      "correctAnswer": "A",
      "explanation": "The Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. If any one is broken, deadlock cannot occur.",
      "explanation_hi": "डेडलॉक की चार शर्तें: म्युचुअल एक्सक्लूजन, होल्ड एंड वेट, नो प्रीमेम्प्शन और सर्कुलर वेट।"
    },
    {
      "id": 11,
      "questionNumber": 11,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which deadlock handling strategy does the Banker's Algorithm implement?",
      "question_hi": "बैंकर का एल्गोरिदम (Banker's Algorithm) कौन सी डेडलॉक हैंडलिंग रणनीति लागू करता है?",
      "options": {
        "A": "Deadlock Avoidance",
        "B": "Deadlock Prevention",
        "C": "Deadlock Detection and Recovery",
        "D": "Deadlock Ignorance (Ostrich Algorithm)"
      },
      "options_hi": {
        "A": "डेडलॉक परिहार / टालना (Deadlock Avoidance)",
        "B": "डेडलॉक रोकथाम (Prevention)",
        "C": "डेडलॉक पहचान और सुधार",
        "D": "ऑस्ट्रिच एल्गोरिदम"
      },
      "correctAnswer": "A",
      "explanation": "Banker's algorithm tests for safe states before granting resource requests, avoiding entering an unsafe state.",
      "explanation_hi": "बैंकर का एल्गोरिदम सेफ स्टेट सुनिश्चित करके डेडलॉक अवॉइडेंस लागू करता है।"
    },
    {
      "id": 12,
      "questionNumber": 12,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What does 'Thrashing' mean in an operating system virtual memory subsystem?",
      "question_hi": "ऑपरेटिंग सिस्टम की वर्चुअल मेमोरी में 'थ्रैशिंग' (Thrashing) का क्या अर्थ है?",
      "options": {
        "A": "The system spends more time servicing page faults and swapping pages than executing actual user instructions",
        "B": "Disk sector damage",
        "C": "CPU overheating",
        "D": "Memory leak in user code"
      },
      "options_hi": {
        "A": "सिस्टम निर्देशों को निष्पादित करने की तुलना में पेज फॉल्ट हल करने और स्वैपिंग में अधिक समय बिताता है",
        "B": "डिस्क क्षति",
        "C": "सीपीयू अधिक गर्म होना",
        "D": "मेमोरी लीक"
      },
      "correctAnswer": "A",
      "explanation": "Thrashing occurs when the working set of active processes exceeds physical RAM, causing continuous page swapping and near-zero CPU throughput.",
      "explanation_hi": "थ्रैशिंग तब होती है जब रैम की कमी के कारण लगातार पेज फॉल्ट और स्वैपिंग होती रहती है।"
    },
    {
      "id": 13,
      "questionNumber": 13,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which page replacement algorithm is known to suffer from 'Belady's Anomaly' (where increasing page frames increases page faults)?",
      "question_hi": "कौन सा पेज रिप्लेसमेंट एल्गोरिदम 'बेलाडी की विसंगति' (Belady's Anomaly) से ग्रस्त होता है?",
      "options": {
        "A": "FIFO (First-In, First-Out) Page Replacement",
        "B": "LRU (Least Recently Used)",
        "C": "Optimal Page Replacement",
        "D": "LFU (Least Frequently Used)"
      },
      "options_hi": {
        "A": "FIFO (फर्स्ट-इन, फर्स्ट-आउट) पेज रिप्लेसमेंट",
        "B": "LRU (कम से कम हाल ही में प्रयुक्त)",
        "C": "ऑप्टिमल पेज रिप्लेसमेंट",
        "D": "LFU"
      },
      "correctAnswer": "A",
      "explanation": "Belady's anomaly occurs in FIFO because it is not a stack-based algorithm: giving more frames can paradoxically increase page faults.",
      "explanation_hi": "FIFO एल्गोरिदम में फ्रेम बढ़ाने पर भी पेज फॉल्ट बढ़ सकते हैं (बेलाडी विसंगति)।"
    },
    {
      "id": 14,
      "questionNumber": 14,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary function of the 'Translation Lookaside Buffer' (TLB) in virtual memory systems?",
      "question_hi": "वर्चुअल मेमोरी सिस्टम में 'ट्रांसलेशन लुकअसाइड बफर' (TLB) का प्राथमिक कार्य क्या है?",
      "options": {
        "A": "A fast associative hardware cache that stores recent virtual-to-physical page translation mappings",
        "B": "Stores disk block addresses",
        "C": "Buffers keyboard keystrokes",
        "D": "Manages CPU registers"
      },
      "options_hi": {
        "A": "एक तेज़ हार्डवेयर कैश जो हाल के वर्चुअल से भौतिक पेज अनुवाद मैपिंग को संग्रहीत करता है",
        "B": "डिस्क पते संग्रहीत करता है",
        "C": "कीबोर्ड बफर",
        "D": "रजिस्टर प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "TLB caches recent virtual page to physical frame translations, avoiding extra memory accesses for page table lookups.",
      "explanation_hi": "TLB एक तेज़ हार्डवेयर कैश है जो वर्चुअल से फिजिकल पते के अनुवाद को कैश करता है।"
    },
    {
      "id": 15,
      "questionNumber": 15,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is an 'Inode' in UNIX/Linux file systems?",
      "question_hi": "UNIX/Linux फ़ाइल सिस्टम में 'Inode' (Index Node) क्या है?",
      "options": {
        "A": "A data structure that stores all metadata and disk block pointers of a file, excluding its name",
        "B": "The user password entry",
        "C": "The directory root path",
        "D": "A swap partition index"
      },
      "options_hi": {
        "A": "एक डेटा संरचना जो फ़ाइल नाम को छोड़कर उसके सभी मेटाडेटा और डिस्क ब्लॉक पॉइंटर्स को संग्रहीत करती है",
        "B": "उपयोगकर्ता पासवर्ड",
        "C": "रूट पथ",
        "D": "स्वैप इंडेक्स"
      },
      "correctAnswer": "A",
      "explanation": "An inode holds file type, permissions, owner, size, timestamps, and direct/indirect block pointers, but the file name is stored in directory entries.",
      "explanation_hi": "Inode फ़ाइल का आकार, स्वामी, अनुमतियाँ और डेटा ब्लॉक के पॉइंटर्स रखता है।"
    },
    {
      "id": 16,
      "questionNumber": 16,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In disk scheduling, which algorithm moves the disk arm across the disk in one direction servicing requests until it reaches the edge, then immediately reverses direction?",
      "question_hi": "डिस्क शेड्यूलिंग में, कौन सा एल्गोरिदम डिस्क आर्म को एक दिशा में अंत तक चलाकर अनुरोधों को पूरा करता है और फिर दिशा उलट देता है?",
      "options": {
        "A": "SCAN (Elevator) Algorithm",
        "B": "C-SCAN (Circular SCAN)",
        "C": "SSTF (Shortest Seek Time First)",
        "D": "FCFS"
      },
      "options_hi": {
        "A": "SCAN (एलिवेटर) एल्गोरिदम",
        "B": "C-SCAN (सर्कुलर स्कैन)",
        "C": "SSTF",
        "D": "FCFS"
      },
      "correctAnswer": "A",
      "explanation": "SCAN behaves like an elevator, servicing requests in current direction to the disk boundary before reversing.",
      "explanation_hi": "SCAN (एलिवेटर) एल्गोरिदम एक सिरे तक जाकर अनुरोध पूरा करता है और फिर दिशा बदलता है।"
    },
    {
      "id": 17,
      "questionNumber": 17,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the main advantage of C-SCAN over traditional SCAN disk scheduling?",
      "question_hi": "पारंपरिक SCAN की तुलना में C-SCAN डिस्क शेड्यूलिंग का मुख्य लाभ क्या है?",
      "options": {
        "A": "Provides more uniform and fair waiting times across inner and outer cylinders",
        "B": "Requires no disk head movement",
        "C": "Guarantees zero seek time",
        "D": "Eliminates rotational latency"
      },
      "options_hi": {
        "A": "सभी सिलेंडरों के लिए अधिक समान और निष्पक्ष प्रतीक्षा समय प्रदान करता है",
        "B": "हेड मूवमेंट नहीं होता",
        "C": "शून्य सीक टाइम",
        "D": "लेटेंसी समाप्त करता है"
      },
      "correctAnswer": "A",
      "explanation": "C-SCAN treats tracks as a circular list, returning immediately to the start without servicing on the return trip, yielding uniform wait times.",
      "explanation_hi": "C-SCAN वापसी में अनुरोध नहीं लेता जिससे सभी सिलेंडरों को समान प्रतीक्षा समय मिलता है।"
    },
    {
      "id": 18,
      "questionNumber": 18,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the decimal equivalent of the binary fraction 0.1101_2?",
      "question_hi": "बाइनरी भिन्न 0.1101_2 का दशमलव समतुल्य क्या है?",
      "options": {
        "A": "0.8125",
        "B": "0.75",
        "C": "0.875",
        "D": "0.625"
      },
      "options_hi": {
        "A": "0.8125",
        "B": "0.75",
        "C": "0.875",
        "D": "0.625"
      },
      "correctAnswer": "A",
      "explanation": "0.1101_2 = 1/2 + 1/4 + 0/8 + 1/16 = 0.5 + 0.25 + 0.0625 = 0.8125.",
      "explanation_hi": "0.1101_2 = 0.5 + 0.25 + 0.0625 = 0.8125।"
    },
    {
      "id": 19,
      "questionNumber": 19,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Convert decimal 25.375 into its binary equivalent.",
      "question_hi": "दशमलव 25.375 को इसके बाइनरी समतुल्य में बदलें।",
      "options": {
        "A": "11001.011_2",
        "B": "11010.011_2",
        "C": "11001.101_2",
        "D": "10011.011_2"
      },
      "options_hi": {
        "A": "11001.011_2",
        "B": "11010.011_2",
        "C": "11001.101_2",
        "D": "10011.011_2"
      },
      "correctAnswer": "A",
      "explanation": "25 = 16 + 8 + 1 = 11001_2; 0.375 = 0.25 + 0.125 = 0.011_2. Total = 11001.011_2.",
      "explanation_hi": "25 = 11001_2 तथा 0.375 = 0.011_2, कुल = 11001.011_2।"
    },
    {
      "id": 20,
      "questionNumber": 20,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the 8-bit 2's complement representation of the decimal integer -43?",
      "question_hi": "दशमलव पूर्णांक -43 का 8-बिट 2's कॉम्प्लिमेंट निरूपण क्या है?",
      "options": {
        "A": "11010101",
        "B": "10101011",
        "C": "11010110",
        "D": "00101011"
      },
      "options_hi": {
        "A": "11010101",
        "B": "10101011",
        "C": "11010110",
        "D": "00101011"
      },
      "correctAnswer": "A",
      "explanation": "+43 = 00101011. 1's complement = 11010100. Adding 1 gives 2's complement = 11010101.",
      "explanation_hi": "+43 = 00101011, इसका 1's complement = 11010100, 1 जोड़ने पर 11010101।"
    },
    {
      "id": 21,
      "questionNumber": 21,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In an 8-bit 2's complement system, what is the range of signed integers that can be represented?",
      "question_hi": "8-बिट 2's कॉम्प्लिमेंट सिस्टम में हस्ताक्षरित पूर्णांकों की प्रतिनिधित्व सीमा क्या है?",
      "options": {
        "A": "-128 to +127",
        "B": "-127 to +128",
        "C": "-128 to +128",
        "D": "-256 to +255"
      },
      "options_hi": {
        "A": "-128 से +127",
        "B": "-127 से +128",
        "C": "-128 से +128",
        "D": "-256 से +255"
      },
      "correctAnswer": "A",
      "explanation": "For n bits, the range is -2^(n-1) to +(2^(n-1) - 1). For n=8: -2^7 to +2^7 - 1 = -128 to +127.",
      "explanation_hi": "n बिट के लिए सीमा -2^(n-1) से +(2^(n-1) - 1) होती है। 8 बिट के लिए -128 से +127।"
    },
    {
      "id": 22,
      "questionNumber": 22,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Excess-3 code of the decimal digit 7?",
      "question_hi": "दशमलव अंक 7 का एक्सेस-3 (Excess-3) कोड क्या है?",
      "options": {
        "A": "1010",
        "B": "0111",
        "C": "1001",
        "D": "1011"
      },
      "options_hi": {
        "A": "1010",
        "B": "0111",
        "C": "1001",
        "D": "1011"
      },
      "correctAnswer": "A",
      "explanation": "Excess-3 = Decimal + 3 = 7 + 3 = 10, which in 4-bit binary is 1010.",
      "explanation_hi": "एक्सेस-3 कोड = अंक + 3 = 7 + 3 = 10, बाइनरी में 1010।"
    },
    {
      "id": 23,
      "questionNumber": 23,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which property of Gray code makes it particularly useful in shaft position encoders?",
      "question_hi": "ग्रे कोड की कौन सी विशेषता इसे शाफ्ट स्थिति एनकोडर में विशेष रूप से उपयोगी बनाती है?",
      "options": {
        "A": "Only one bit changes between successive adjacent codewords (unit distance code)",
        "B": "It is a weighted code",
        "C": "It is an error correcting code",
        "D": "It has parity bits"
      },
      "options_hi": {
        "A": "लगातार दो कोडवर्ड्स के बीच केवल एक बिट बदलता है (यूनिट डिस्टेंस कोड)",
        "B": "यह वेटेड कोड है",
        "C": "त्रुटि सुधार कोड है",
        "D": "पैरिटी बिट होती है"
      },
      "correctAnswer": "A",
      "explanation": "Gray code changes only one bit at a time, eliminating mechanical switching ambiguity and race errors.",
      "explanation_hi": "ग्रे कोड में आसन्न संख्याओं के बीच केवल 1 बिट बदलता है जिससे ट्रांज़िशन एरर नहीं होती।"
    },
    {
      "id": 24,
      "questionNumber": 24,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "How many cells are present in a 5-variable Karnaugh Map (K-map)?",
      "question_hi": "5-वेरिएबल कार्नो मैप (K-map) में कितने सेल होते हैं?",
      "options": {
        "A": "32 cells",
        "B": "16 cells",
        "C": "64 cells",
        "D": "25 cells"
      },
      "options_hi": {
        "A": "32 सेल",
        "B": "16 सेल",
        "C": "64 सेल",
        "D": "25 सेल"
      },
      "correctAnswer": "A",
      "explanation": "An n-variable K-map contains 2^n cells. For 5 variables: 2^5 = 32 cells (typically drawn as two 16-cell sub-maps).",
      "explanation_hi": "n-चर K-map में 2^n सेल होते हैं। 5 चर के लिए 2^5 = 32 सेल।"
    },
    {
      "id": 25,
      "questionNumber": 25,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In K-map grouping, what term is used for a group of 8 adjacent 1s, and how many variables does it eliminate?",
      "question_hi": "K-map ग्रुपिंग में 8 आसन्न 1s के समूह को क्या कहा जाता है और यह कितने चरों को समाप्त करता है?",
      "options": {
        "A": "Octet, eliminates 3 variables",
        "B": "Quad, eliminates 2 variables",
        "C": "Pair, eliminates 1 variable",
        "D": "Octet, eliminates 4 variables"
      },
      "options_hi": {
        "A": "ऑक्टेट (Octet), 3 चरों को समाप्त करता है",
        "B": "क्वाड, 2 चर",
        "C": "पेयर, 1 चर",
        "D": "ऑक्टेट, 4 चर"
      },
      "correctAnswer": "A",
      "explanation": "An octet (group of 2^3 = 8 cells) eliminates 3 variables from the resulting product term.",
      "explanation_hi": "8 सेलों का समूह ऑक्टेट कहलाता है और यह 3 चरों को समाप्त कर देता है।"
    },
    {
      "id": 26,
      "questionNumber": 26,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is an 'Essential Prime Implicant' (EPI) in K-map minimization?",
      "question_hi": "K-map सरलीकरण में 'आवश्यक प्राइम इम्प्लिकेंट' (EPI) क्या है?",
      "options": {
        "A": "A prime implicant that covers at least one minterm that is not covered by any other prime implicant",
        "B": "Any group of 4 cells",
        "C": "A don't care condition",
        "D": "A term covering all minterms"
      },
      "options_hi": {
        "A": "एक प्राइम इम्प्लिकेंट जो कम से कम एक ऐसे मिन-टर्म को कवर करता है जिसे कोई अन्य प्राइम इम्प्लिकेंट कवर नहीं करता",
        "B": "4 सेलों का समूह",
        "C": "डोंट केयर",
        "D": "सभी मिन-टर्म"
      },
      "correctAnswer": "A",
      "explanation": "An essential prime implicant contains at least one isolated minterm that can only be covered by this specific implicant.",
      "explanation_hi": "EPI कम से कम एक ऐसे 1 को कवर करता है जिसे किसी अन्य ग्रुप में शामिल नहीं किया जा सकता।"
    },
    {
      "id": 27,
      "questionNumber": 27,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the function of a 'Priority Encoder'?",
      "question_hi": "एक 'प्राथमिकता एनकोडर' (Priority Encoder) का क्या कार्य है?",
      "options": {
        "A": "Encodes the binary representation of the highest-priority active input line when multiple inputs are asserted",
        "B": "Decodes binary to decimal",
        "C": "Sorts input frequencies",
        "D": "Checks parity only"
      },
      "options_hi": {
        "A": "एक से अधिक इनपुट सक्रिय होने पर उच्चतम प्राथमिकता वाले इनपुट का बाइनरी कोड आउटपुट करता है",
        "B": "बाइनरी को दशमलव में बदलता है",
        "C": "आवृत्ति सॉर्ट करता है",
        "D": "पैरिटी चेक करता है"
      },
      "correctAnswer": "A",
      "explanation": "A priority encoder ensures that if two or more inputs are active simultaneously, the input with highest priority takes precedence.",
      "explanation_hi": "प्रायोरिटी एनकोडर एक साथ कई इनपुट सक्रिय होने पर उच्चतम प्राथमिकता वाले इनपुट को एनकोड करता है।"
    },
    {
      "id": 28,
      "questionNumber": 28,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is a 'Demultiplexer' (DEMUX) logically equivalent to?",
      "question_hi": "एक 'डीमल्टीप्लेक्सर' (DEMUX) तार्किक रूप से किसके समतुल्य होता है?",
      "options": {
        "A": "A Decoder with an enable input used as data input",
        "B": "An Encoder with priority logic",
        "C": "A Half Adder",
        "D": "A Flip-Flop"
      },
      "options_hi": {
        "A": "सक्षम इनपुट (Enable) को डेटा इनपुट के रूप में उपयोग करने वाले डिकोडर के समतुल्य",
        "B": "एनकोडर",
        "C": "हाफ एडर",
        "D": "फ्लिप-फ्लॉप"
      },
      "correctAnswer": "A",
      "explanation": "A decoder with an enable line functions identically to a demultiplexer, routing the enable bit to the addressed output.",
      "explanation_hi": "सक्षम (Enable) इनपुट वाला डिकोडर ठीक डीमल्टीप्लेक्सर की तरह कार्य करता है।"
    },
    {
      "id": 29,
      "questionNumber": 29,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In an edge-triggered D flip-flop, what happens to the output Q on the active clock edge?",
      "question_hi": "एज-ट्रिगर D फ्लिप-फ्लॉप में, सक्रिय क्लॉक एज पर आउटपुट Q का क्या मान होता है?",
      "options": {
        "A": "Q becomes equal to D (data input is transferred to output)",
        "B": "Q toggles to Q'",
        "C": "Q is always cleared to 0",
        "D": "Q is always set to 1"
      },
      "options_hi": {
        "A": "Q का मान D के बराबर हो जाता है (डेटा आउटपुट पर ट्रांसफर होता है)",
        "B": "Q टॉगल हो जाता है",
        "C": "Q हमेशा 0 हो जाता है",
        "D": "Q हमेशा 1 हो जाता है"
      },
      "correctAnswer": "A",
      "explanation": "A D (Data / Delay) flip-flop transfers the logic level present at D directly to output Q on each clock trigger.",
      "explanation_hi": "D फ्लिप-फ्लॉप में क्लॉक पल्स आने पर इनपुट D सीधे आउटपुट Q पर स्थानांतरित हो जाता है।"
    },
    {
      "id": 30,
      "questionNumber": 30,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the function of the T (Toggle) flip-flop when the T input is held HIGH (T=1)?",
      "question_hi": "जब T इनपुट HIGH (T=1) पर रखा जाता है तो T (टॉगल) फ्लिप-फ्लॉप का क्या कार्य होता है?",
      "options": {
        "A": "The output Q toggles (inverts state) on every active clock pulse",
        "B": "The output remains unchanged",
        "C": "The output is set to 1 permanently",
        "D": "The flip-flop resets to 0"
      },
      "options_hi": {
        "A": "प्रत्येक सक्रिय क्लॉक पल्स पर आउटपुट Q टॉगल (उलट) हो जाता है",
        "B": "आउटपुट अपरिवर्तित रहता है",
        "C": "आउटपुट 1 पर सेट रहता है",
        "D": "आउटपुट 0 हो जाता है"
      },
      "correctAnswer": "A",
      "explanation": "When T=1, the flip-flop complements its current state on each clock pulse (Q_next = Q'). When T=0, it holds its state.",
      "explanation_hi": "T=1 होने पर प्रत्येक क्लॉक पर आउटपुट अपनी पिछली अवस्था को उलट (टॉगल) देता है।"
    },
    {
      "id": 31,
      "questionNumber": 31,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What causes the 'Race-Around Condition' in a level-triggered JK flip-flop?",
      "question_hi": "लेवल-ट्रिगर JK फ्लिप-फ्लॉप में 'रेस-अराउंड स्थिति' (Race-Around Condition) का क्या कारण है?",
      "options": {
        "A": "J=1, K=1 and clock pulse duration is greater than the propagation delay of the flip-flop",
        "B": "J=0, K=0 and clock is LOW",
        "C": "Clock pulse is too short",
        "D": "Excess voltage"
      },
      "options_hi": {
        "A": "J=1, K=1 और क्लॉक पल्स की अवधि फ्लिप-फ्लॉप के प्रोपेगेशन डिले से अधिक होती है",
        "B": "J=0, K=0",
        "C": "क्लॉक पल्स बहुत छोटी होना",
        "D": "अत्यधिक वोल्टेज"
      },
      "correctAnswer": "A",
      "explanation": "When J=K=1 and clock width tp > propagation delay tpd, the output toggles multiple times uncontrollably during a single clock pulse.",
      "explanation_hi": "J=1, K=1 होने पर यदि क्लॉक अवधि डिले से बड़ी हो, तो आउटपुट एक ही क्लॉक में बार-बार टॉगल होता है।"
    },
    {
      "id": 32,
      "questionNumber": 32,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "How is the Race-Around condition effectively eliminated in JK flip-flop design?",
      "question_hi": "JK फ्लिप-फ्लॉप में रेस-अराउंड स्थिति को प्रभावी ढंग से कैसे समाप्त किया जाता है?",
      "options": {
        "A": "Using a Master-Slave JK Flip-Flop or Edge-Triggered Clocking",
        "B": "Increasing the supply voltage",
        "C": "Setting J=0 and K=0",
        "D": "Using pull-down resistors"
      },
      "options_hi": {
        "A": "मास्टर-स्लेव JK फ्लिप-फ्लॉप या एज-ट्रिगर क्लॉकिंग का उपयोग करके",
        "B": "आपूर्ति वोल्टेज बढ़ाकर",
        "C": "J=0, K=0 रखकर",
        "D": "पुल-डाउन रेसिस्टर द्वारा"
      },
      "correctAnswer": "A",
      "explanation": "Master-Slave configuration isolates input and output stages across clock edges, guaranteeing exactly one transition per clock period.",
      "explanation_hi": "मास्टर-स्लेव संरचना एक क्लॉक चक्र में केवल एक बार अवस्था बदलने की अनुमति देकर रेस-अराउंड मिटाती है।"
    },
    {
      "id": 33,
      "questionNumber": 33,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which addressing mode specifies the operand value directly within the instruction itself?",
      "question_hi": "कौन सा एड्रेसिंग मोड निर्देश के भीतर ही सीधे ऑपरेंड का मान निर्दिष्ट करता है?",
      "options": {
        "A": "Immediate Addressing Mode",
        "B": "Direct Addressing Mode",
        "C": "Register Addressing Mode",
        "D": "Indirect Addressing Mode"
      },
      "options_hi": {
        "A": "इमीडिएट एड्रेसिंग मोड (Immediate Addressing)",
        "B": "डायरेक्ट एड्रेसिंग",
        "C": "रजिस्टर एड्रेसिंग",
        "D": "इनडायरेक्ट एड्रेसिंग"
      },
      "correctAnswer": "A",
      "explanation": "In immediate addressing, the operand is part of the instruction (e.g., MOV R1, #25), requiring no memory reference.",
      "explanation_hi": "इमीडिएट एड्रेसिंग मोड में ऑपरेंड निर्देश में ही स्थिर मान के रूप में दिया जाता है।"
    },
    {
      "id": 34,
      "questionNumber": 34,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In which addressing mode does the instruction provide a memory address that contains the POINTER to the actual operand?",
      "question_hi": "किस एड्रेसिंग मोड में निर्देश एक मेमोरी एड्रेस प्रदान करता है जिसमें वास्तविक ऑपरेंड का पॉइंटर (पता) होता है?",
      "options": {
        "A": "Indirect Addressing Mode",
        "B": "Direct Addressing Mode",
        "C": "Immediate Addressing Mode",
        "D": "Relative Addressing Mode"
      },
      "options_hi": {
        "A": "इनडायरेक्ट एड्रेसिंग मोड (Indirect Addressing)",
        "B": "डायरेक्ट एड्रेसिंग",
        "C": "इमीडिएट",
        "D": "रिलेटिव"
      },
      "correctAnswer": "A",
      "explanation": "Indirect addressing accesses memory twice: first to fetch the pointer address, then to fetch the operand at that pointer.",
      "explanation_hi": "इनडायरेक्ट मोड में निर्देश में दिए गए पते पर वास्तविक ऑपरेंड का पता (पॉइंटर) संग्रहीत होता है।"
    },
    {
      "id": 35,
      "questionNumber": 35,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Program Counter (PC) Relative Addressing Mode, how is the Effective Address calculated?",
      "question_hi": "प्रोग्राम काउंटर (PC) रिलेटिव एड्रेसिंग मोड में प्रभावी पता (Effective Address) कैसे निकाला जाता है?",
      "options": {
        "A": "Effective Address = Contents of PC + Offset (Displacement)",
        "B": "Effective Address = Contents of Base Register + Offset",
        "C": "Effective Address = Address specified in instruction directly",
        "D": "Effective Address = PC * Offset"
      },
      "options_hi": {
        "A": "प्रभावी पता = PC की सामग्री + ऑफसेट (विस्थापन)",
        "B": "बेस रजिस्टर + ऑफसेट",
        "C": "सीधे निर्देश का पता",
        "D": "PC * ऑफसेट"
      },
      "correctAnswer": "A",
      "explanation": "PC-relative adds the signed displacement to the current Program Counter, widely used in conditional branch instructions.",
      "explanation_hi": "PC रिलेटिव मोड में वर्तमान PC मान में विस्थापन (Offset) जोड़कर ब्रांच पता निकाला जाता है।"
    },
    {
      "id": 36,
      "questionNumber": 36,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 61, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 61 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 61 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 37,
      "questionNumber": 37,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 62, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 62 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 62 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 38,
      "questionNumber": 38,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 63, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 63 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 63 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 39,
      "questionNumber": 39,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 64, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 64 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 64 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 40,
      "questionNumber": 40,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 65, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 65 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 65 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 41,
      "questionNumber": 41,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 66, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 66 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 66 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 42,
      "questionNumber": 42,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 67, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 67 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 67 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 43,
      "questionNumber": 43,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 68, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 68 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 68 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 44,
      "questionNumber": 44,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 69, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 69 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 69 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 45,
      "questionNumber": 45,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 70, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 70 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 70 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 46,
      "questionNumber": 46,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 71, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 71 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 71 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 47,
      "questionNumber": 47,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 72, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 72 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 72 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 48,
      "questionNumber": 48,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 73, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 73 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 73 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 49,
      "questionNumber": 49,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 74, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 74 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 74 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 50,
      "questionNumber": 50,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 75, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 75 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 75 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 51,
      "questionNumber": 51,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 76, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 76 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 76 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 52,
      "questionNumber": 52,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 77, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 77 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 77 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 53,
      "questionNumber": 53,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 78, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 78 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 78 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 54,
      "questionNumber": 54,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 79, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 79 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 79 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 55,
      "questionNumber": 55,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 80, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 80 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 80 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 56,
      "questionNumber": 56,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 81, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 81 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 81 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 57,
      "questionNumber": 57,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 82, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 82 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 82 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 58,
      "questionNumber": 58,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 83, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 83 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 83 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 59,
      "questionNumber": 59,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 84, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 84 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 84 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 60,
      "questionNumber": 60,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 85, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 85 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 85 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 61,
      "questionNumber": 61,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 86, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 86 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 86 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 62,
      "questionNumber": 62,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 87, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 87 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 87 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 63,
      "questionNumber": 63,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 88, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 88 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 88 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 64,
      "questionNumber": 64,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 89, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 89 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 89 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 65,
      "questionNumber": 65,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In object-oriented software design pattern 90, what is the definition of Method Overloading?",
      "question_hi": "ऑब्जेक्ट ओरिएंटेड सॉफ्टवेयर डिज़ाइन पैटर्न 90 में, 'मेथड ओवरलोडिंग' (Method Overloading) की क्या परिभाषा है?",
      "options": {
        "A": "Defining multiple methods within the same class with identical names but different parameter lists (compile-time polymorphism)",
        "B": "Redefining a base class method in a derived class with identical signature",
        "C": "Calling a method from another module",
        "D": "Deleting methods from memory"
      },
      "options_hi": {
        "A": "समान नाम किंतु भिन्न पैरामीटर सूचियों (प्रकार या संख्या) के साथ एक ही क्लास में कई विधियों को परिभाषित करना (कंपाइल-टाइम बहुरूपता)",
        "B": "डेरिव्ड क्लास में मेथड दोबारा लिखना",
        "C": "दूसरे मॉड्यूल से कॉल",
        "D": "मेथड मिटाना"
      },
      "correctAnswer": "A",
      "explanation": "Method overloading resolves function calls at compile-time by matching parameter signatures. Case 90 exemplifies static polymorphism.",
      "explanation_hi": "मेथड ओवरलोडिंग में एक ही नाम के कई फंक्शन अलग-अलग पैरामीटर के साथ बनाए जाते हैं।"
    },
    {
      "id": 66,
      "questionNumber": 66,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What does the HTTP Status Code '404' indicate to a web browser client?",
      "question_hi": "वेब ब्राउज़र क्लाइंट को HTTP स्टेटस कोड '404' क्या दर्शाता है?",
      "options": {
        "A": "Not Found: The server cannot locate the requested resource URI",
        "B": "Unauthorized access",
        "C": "Internal Server Error",
        "D": "Successful response"
      },
      "options_hi": {
        "A": "नॉट फाउंड (Not Found): सर्वर अनुरोधित संसाधन URI को खोजने में असमर्थ है",
        "B": "अनधिकृत पहुंच",
        "C": "आंतरिक सर्वर त्रुटि",
        "D": "सफल प्रतिक्रिया"
      },
      "correctAnswer": "A",
      "explanation": "404 signifies that the origin server did not find a current representation for the target resource.",
      "explanation_hi": "404 का अर्थ है कि मांगी गई फ़ाइल या पेज सर्वर पर मौजूद नहीं है।"
    },
    {
      "id": 67,
      "questionNumber": 67,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What does the HTTP Status Code '500' indicate?",
      "question_hi": "HTTP स्टेटस कोड '500' क्या दर्शाता है?",
      "options": {
        "A": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request",
        "B": "Forbidden URI",
        "C": "Moved Permanently",
        "D": "Bad Gateway"
      },
      "options_hi": {
        "A": "आंतरिक सर्वर त्रुटि (Internal Server Error): सर्वर पर अप्रत्याशित समस्या आई जिससे अनुरोध पूरा नहीं हो सका",
        "B": "मनाही",
        "C": "स्थायी स्थानांतरण",
        "D": "खराब गेटवे"
      },
      "correctAnswer": "A",
      "explanation": "500 is a generic server-side failure status indicating an unhandled exception or crash in server scripts.",
      "explanation_hi": "500 का अर्थ है सर्वर की आंतरिक स्क्रिप्ट में कोई गंभीर त्रुटि आ गई है।"
    },
    {
      "id": 68,
      "questionNumber": 68,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In modern web applications, what is the primary security advantage of using Prepared Statements (Parameterized Queries) with PDO/MySQLi in PHP?",
      "question_hi": "आधुनिक वेब अनुप्रयोगों में, PHP में PDO/MySQLi के साथ पैरामीटराइज्ड क्वेरीज़ (Prepared Statements) का उपयोग करने का मुख्य सुरक्षा लाभ क्या है?",
      "options": {
        "A": "Completely prevents SQL Injection attacks by transmitting code structure and user input data separately",
        "B": "Encrypts browser cookies",
        "C": "Speeds up CSS rendering",
        "D": "Compresses images"
      },
      "options_hi": {
        "A": "क्वेरी संरचना और उपयोगकर्ता इनपुट को अलग-अलग भेजकर SQL इंजेक्शन हमलों को पूरी तरह रोकता है",
        "B": "कुकी एन्क्रिप्शन",
        "C": "CSS गति",
        "D": "इमेज कम्प्रेशन"
      },
      "correctAnswer": "A",
      "explanation": "Prepared statements treat user inputs strictly as literal values rather than executable SQL commands, neutralizing injection attempts.",
      "explanation_hi": "पैरामीटराइज्ड क्वेरी उपयोगकर्ता डेटा को कमांड न मानकर मान मानती है जिससे SQL इंजेक्शन रुकता है।"
    },
    {
      "id": 69,
      "questionNumber": 69,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In CSS layout, what are the four layers of the standard CSS Box Model, ordered from INSIDE to OUTSIDE?",
      "question_hi": "CSS लेआउट में, मानक CSS बॉक्स मॉडल की चार परतें अंदर से बाहर की ओर किस क्रम में होती हैं?",
      "options": {
        "A": "Content -> Padding -> Border -> Margin",
        "B": "Content -> Margin -> Border -> Padding",
        "C": "Padding -> Content -> Border -> Margin",
        "D": "Border -> Margin -> Padding -> Content"
      },
      "options_hi": {
        "A": "कंटेंट (Content) -> पैडिंग (Padding) -> बॉर्डर (Border) -> मार्जिन (Margin)",
        "B": "कंटेंट -> मार्जिन -> बॉर्डर",
        "C": "पैडिंग -> कंटेंट",
        "D": "बॉर्डर -> मार्जिन"
      },
      "correctAnswer": "A",
      "explanation": "Box model from interior: Content (text/image) surrounded by Padding (space inside border), Border, and Margin (space outside border).",
      "explanation_hi": "बॉक्स मॉडल अंदर से बाहर: कंटेंट, फिर पैडिंग, फिर बॉर्डर और सबसे बाहर मार्जिन।"
    },
    {
      "id": 70,
      "questionNumber": 70,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What does CSS property 'position: absolute;' do to an HTML element?",
      "question_hi": "CSS प्रॉपर्टी 'position: absolute;' किसी HTML तत्व पर क्या प्रभाव डालती है?",
      "options": {
        "A": "Removes the element from normal document flow and positions it relative to its closest non-static ancestor element",
        "B": "Positions it relative to the browser window permanently (fixed)",
        "C": "Places it in normal text flow",
        "D": "Hides the element from screen readers"
      },
      "options_hi": {
        "A": "तत्व को सामान्य दस्तावेज़ प्रवाह से हटा देता है और इसे इसके निकटतम गैर-स्टैटिक पूर्वज तत्व के सापेक्ष स्थित करता है",
        "B": "हमेशा स्क्रीन के सापेक्ष रखता है",
        "C": "सामान्य प्रवाह",
        "D": "तत्व छुपाता है"
      },
      "correctAnswer": "A",
      "explanation": "Absolute positioning takes the element out of document flow and calculates top/left offsets relative to the nearest positioned containing block.",
      "explanation_hi": "absolute तत्व को सामान्य प्रवाह से हटाकर निकटतम रिलेटिव पूर्वज के सापेक्ष स्थित करता है।"
    },
    {
      "id": 71,
      "questionNumber": 71,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 21, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 21 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 21 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 72,
      "questionNumber": 72,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 22, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 22 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 22 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 73,
      "questionNumber": 73,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 23, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 23 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 23 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 74,
      "questionNumber": 74,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 24, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 24 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 24 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 75,
      "questionNumber": 75,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 25, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 25 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 25 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 76,
      "questionNumber": 76,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 26, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 26 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 26 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 77,
      "questionNumber": 77,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 27, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 27 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 27 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 78,
      "questionNumber": 78,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 28, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 28 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 28 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 79,
      "questionNumber": 79,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 29, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 29 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 29 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 80,
      "questionNumber": 80,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 30, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 30 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 30 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 81,
      "questionNumber": 81,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 31, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 31 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 31 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 82,
      "questionNumber": 82,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 32, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 32 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 32 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 83,
      "questionNumber": 83,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 33, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 33 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 33 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 84,
      "questionNumber": 84,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 34, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 34 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 34 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 85,
      "questionNumber": 85,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 35, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 35 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 35 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 86,
      "questionNumber": 86,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 36, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 36 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 36 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 87,
      "questionNumber": 87,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 37, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 37 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 37 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 88,
      "questionNumber": 88,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 38, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 38 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 38 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 89,
      "questionNumber": 89,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 39, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 39 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 39 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 90,
      "questionNumber": 90,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 40, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 40 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 40 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 91,
      "questionNumber": 91,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 41, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 41 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 41 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 92,
      "questionNumber": 92,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 42, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 42 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 42 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 93,
      "questionNumber": 93,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 43, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 43 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 43 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 94,
      "questionNumber": 94,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 44, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 44 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 44 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 95,
      "questionNumber": 95,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 45, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 45 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 45 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 96,
      "questionNumber": 96,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 46, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 46 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 46 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 97,
      "questionNumber": 97,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 47, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 47 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 47 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 98,
      "questionNumber": 98,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 48, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 48 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 48 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 99,
      "questionNumber": 99,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 49, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 49 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 49 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 100,
      "questionNumber": 100,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 50, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 50 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
      "options": {
        "A": "Provides point-to-point cryptographic encryption, server authentication, and message integrity over public Internet HTTP connections (HTTPS)",
        "B": "Increases server hard drive space",
        "C": "Translates HTML to CSS",
        "D": "Manages employee payroll"
      },
      "options_hi": {
        "A": "इंटरनेट पर वेब कनेक्शनों के लिए पॉइंट-टू-पॉइंट क्रिप्टोग्राफ़िक एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (HTTPS) प्रदान करता है",
        "B": "डिस्क बढ़ाना",
        "C": "HTML अनुवाद",
        "D": "वेतन प्रबंधन"
      },
      "correctAnswer": "A",
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 50 confirms TLS 1.3 protocol standards.",
      "explanation_hi": "SSL/TLS वेब ब्राउज़र और सर्वर के बीच संवेदनशील डेटा को एन्क्रिप्ट करके चोरी होने से बचाता है (HTTPS)।"
    },
    {
      "id": 101,
      "questionNumber": 101,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Diagnostic Assessment - Scenario 18), which instructional strategy best reflects this principle: 'Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed'?",
      "question_hi": "शिक्षण अभ्यास (निदानात्मक मूल्यांकन - परिदृश्य 18) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 18 exemplifies Diagnostic Assessment: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है।"
    },
    {
      "id": 102,
      "questionNumber": 102,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Diagnostic Assessment - Scenario 19), which instructional strategy best reflects this principle: 'Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed'?",
      "question_hi": "शिक्षण अभ्यास (निदानात्मक मूल्यांकन - परिदृश्य 19) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 19 exemplifies Diagnostic Assessment: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है।"
    },
    {
      "id": 103,
      "questionNumber": 103,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Diagnostic Assessment - Scenario 20), which instructional strategy best reflects this principle: 'Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed'?",
      "question_hi": "शिक्षण अभ्यास (निदानात्मक मूल्यांकन - परिदृश्य 20) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 20 exemplifies Diagnostic Assessment: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है।"
    },
    {
      "id": 104,
      "questionNumber": 104,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Diagnostic Assessment - Scenario 21), which instructional strategy best reflects this principle: 'Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed'?",
      "question_hi": "शिक्षण अभ्यास (निदानात्मक मूल्यांकन - परिदृश्य 21) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 21 exemplifies Diagnostic Assessment: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है।"
    },
    {
      "id": 105,
      "questionNumber": 105,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Diagnostic Assessment - Scenario 22), which instructional strategy best reflects this principle: 'Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed'?",
      "question_hi": "शिक्षण अभ्यास (निदानात्मक मूल्यांकन - परिदृश्य 22) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 22 exemplifies Diagnostic Assessment: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है।"
    },
    {
      "id": 106,
      "questionNumber": 106,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Diagnostic Assessment - Scenario 23), which instructional strategy best reflects this principle: 'Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed'?",
      "question_hi": "शिक्षण अभ्यास (निदानात्मक मूल्यांकन - परिदृश्य 23) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 23 exemplifies Diagnostic Assessment: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है।"
    },
    {
      "id": 107,
      "questionNumber": 107,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Diagnostic Assessment - Scenario 24), which instructional strategy best reflects this principle: 'Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed'?",
      "question_hi": "शिक्षण अभ्यास (निदानात्मक मूल्यांकन - परिदृश्य 24) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 24 exemplifies Diagnostic Assessment: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है।"
    },
    {
      "id": 108,
      "questionNumber": 108,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Diagnostic Assessment - Scenario 25), which instructional strategy best reflects this principle: 'Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed'?",
      "question_hi": "शिक्षण अभ्यास (निदानात्मक मूल्यांकन - परिदृश्य 25) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 25 exemplifies Diagnostic Assessment: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है।"
    },
    {
      "id": 109,
      "questionNumber": 109,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Diagnostic Assessment - Scenario 26), which instructional strategy best reflects this principle: 'Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed'?",
      "question_hi": "शिक्षण अभ्यास (निदानात्मक मूल्यांकन - परिदृश्य 26) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 26 exemplifies Diagnostic Assessment: Pinpoints specific learning difficulties, misconceptions, and learning gaps so remediation can be designed.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: सीखने में आने वाली विशिष्ट कमियों और भ्रांतियों की पहचान कर उपचारात्मक शिक्षण की योजना बनाता है।"
    },
    {
      "id": 110,
      "questionNumber": 110,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 1), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 1) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 1 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 111,
      "questionNumber": 111,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 2), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 2) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 2 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 112,
      "questionNumber": 112,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 3), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 3) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 3 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 113,
      "questionNumber": 113,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 4), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 4) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 4 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 114,
      "questionNumber": 114,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 5), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 5) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 5 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 115,
      "questionNumber": 115,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 6), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 6) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 6 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 116,
      "questionNumber": 116,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 7), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 7) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 7 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 117,
      "questionNumber": 117,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 8), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 8) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 8 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 118,
      "questionNumber": 118,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 9), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 9) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 9 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 119,
      "questionNumber": 119,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 10), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 10) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 10 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 120,
      "questionNumber": 120,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 11), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 11) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 11 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 121,
      "questionNumber": 121,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 12), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 12) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 12 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 122,
      "questionNumber": 122,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 13), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 13) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 13 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 123,
      "questionNumber": 123,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 14), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 14) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 14 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 124,
      "questionNumber": 124,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 15), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 15) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 15 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 125,
      "questionNumber": 125,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 16), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 16) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 16 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 126,
      "questionNumber": 126,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 17), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 17) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 17 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 127,
      "questionNumber": 127,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 18), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 18) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 18 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 128,
      "questionNumber": 128,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 19), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 19) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 19 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 129,
      "questionNumber": 129,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 20), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 20) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 20 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 130,
      "questionNumber": 130,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 21), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 21) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 21 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 131,
      "questionNumber": 131,
      "section": "Other Skills",
      "topic": "General Knowledge & Bihar",
      "topic_hi": "सामान्य ज्ञान एवं बिहार",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which famous district of Bihar is geographically and historically recognized for: 'Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara' (Context 1)?",
      "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara' (संदर्भ 1)?",
      "options": {
        "A": "Nalanda",
        "B": "Buxar",
        "C": "Samastipur",
        "D": "Jehanabad"
      },
      "options_hi": {
        "A": "नालंदा",
        "B": "बक्सर",
        "C": "समस्तीपुर",
        "D": "जहानाबाद"
      },
      "correctAnswer": "A",
      "explanation": "Nalanda is renowned across Bihar for: Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara.",
      "explanation_hi": "नालंदा का ऐतिहासिक व भौगोलिक महत्व: Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara।"
    },
    {
      "id": 132,
      "questionNumber": 132,
      "section": "Other Skills",
      "topic": "General Knowledge & Bihar",
      "topic_hi": "सामान्य ज्ञान एवं बिहार",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which famous district of Bihar is geographically and historically recognized for: 'Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara' (Context 2)?",
      "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara' (संदर्भ 2)?",
      "options": {
        "A": "Nalanda",
        "B": "Buxar",
        "C": "Samastipur",
        "D": "Jehanabad"
      },
      "options_hi": {
        "A": "नालंदा",
        "B": "बक्सर",
        "C": "समस्तीपुर",
        "D": "जहानाबाद"
      },
      "correctAnswer": "A",
      "explanation": "Nalanda is renowned across Bihar for: Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara.",
      "explanation_hi": "नालंदा का ऐतिहासिक व भौगोलिक महत्व: Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara।"
    },
    {
      "id": 133,
      "questionNumber": 133,
      "section": "Other Skills",
      "topic": "General Knowledge & Bihar",
      "topic_hi": "सामान्य ज्ञान एवं बिहार",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which famous district of Bihar is geographically and historically recognized for: 'Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara' (Context 3)?",
      "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara' (संदर्भ 3)?",
      "options": {
        "A": "Nalanda",
        "B": "Buxar",
        "C": "Samastipur",
        "D": "Jehanabad"
      },
      "options_hi": {
        "A": "नालंदा",
        "B": "बक्सर",
        "C": "समस्तीपुर",
        "D": "जहानाबाद"
      },
      "correctAnswer": "A",
      "explanation": "Nalanda is renowned across Bihar for: Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara.",
      "explanation_hi": "नालंदा का ऐतिहासिक व भौगोलिक महत्व: Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara।"
    },
    {
      "id": 134,
      "questionNumber": 134,
      "section": "Other Skills",
      "topic": "General Knowledge & Bihar",
      "topic_hi": "सामान्य ज्ञान एवं बिहार",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which famous district of Bihar is geographically and historically recognized for: 'Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara' (Context 4)?",
      "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara' (संदर्भ 4)?",
      "options": {
        "A": "Nalanda",
        "B": "Buxar",
        "C": "Samastipur",
        "D": "Jehanabad"
      },
      "options_hi": {
        "A": "नालंदा",
        "B": "बक्सर",
        "C": "समस्तीपुर",
        "D": "जहानाबाद"
      },
      "correctAnswer": "A",
      "explanation": "Nalanda is renowned across Bihar for: Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara.",
      "explanation_hi": "नालंदा का ऐतिहासिक व भौगोलिक महत्व: Contains Rajgir hot sulfur springs, Venuvana, and ruins of ancient Nalanda Mahavihara।"
    },
    {
      "id": 135,
      "questionNumber": 135,
      "section": "Other Skills",
      "topic": "General Knowledge & Bihar",
      "topic_hi": "सामान्य ज्ञान एवं बिहार",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which famous district of Bihar is geographically and historically recognized for: 'Houses the Kesaria Stupa, one of the tallest Buddhist stupas in the world' (Context 1)?",
      "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Houses the Kesaria Stupa, one of the tallest Buddhist stupas in the world' (संदर्भ 1)?",
      "options": {
        "A": "East Champaran (Motihari)",
        "B": "Buxar",
        "C": "Samastipur",
        "D": "Jehanabad"
      },
      "options_hi": {
        "A": "पूर्वी चंपारण",
        "B": "बक्सर",
        "C": "समस्तीपुर",
        "D": "जहानाबाद"
      },
      "correctAnswer": "A",
      "explanation": "East Champaran (Motihari) is renowned across Bihar for: Houses the Kesaria Stupa, one of the tallest Buddhist stupas in the world.",
      "explanation_hi": "पूर्वी चंपारण का ऐतिहासिक व भौगोलिक महत्व: Houses the Kesaria Stupa, one of the tallest Buddhist stupas in the world।"
    },
    {
      "id": 136,
      "questionNumber": 136,
      "section": "Other Skills",
      "topic": "Environmental Science & Ecology",
      "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In environmental ecological science (Solid Waste Management & 3Rs - Case 6), which statement accurately reflects this principle: 'Hierarchy prioritizing Reduce at source, followed by Reuse of materials, and Recycling before landfill disposal'?",
      "question_hi": "पर्यावरण विज्ञान (ठोस अपशिष्ट प्रबंधन - केस 6) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Hierarchy prioritizing Reduce at source, followed by Reuse of materials, and Recycling before landfill disposal'?",
      "options": {
        "A": "Accurately validated by ecological principle: Hierarchy prioritizing Reduce at source, followed by Reuse of materials, and Recycling before landfill disposal",
        "B": "Ecosystems function without solar energy inputs",
        "C": "Pollution increases biodiversity stability",
        "D": "Energy cycles indefinitely within food chains"
      },
      "options_hi": {
        "A": "पारिस्थितिकी सिद्धांत के अनुसार सही: Hierarchy prioritizing Reduce at source, followed by Reuse of materials, and Recycling before landfill disposal",
        "B": "सौर ऊर्जा के बिना तंत्र चलता है",
        "C": "प्रदूषण से विविधता बढ़ती है",
        "D": "ऊर्जा कभी नष्ट नहीं होती"
      },
      "correctAnswer": "A",
      "explanation": "Environmental ecology principles: Hierarchy prioritizing Reduce at source, followed by Reuse of materials, and Recycling before landfill disposal.",
      "explanation_hi": "पर्यावरण विज्ञान का सिद्धांत: Hierarchy prioritizing Reduce at source, followed by Reuse of materials, and Recycling before landfill disposal।"
    },
    {
      "id": 137,
      "questionNumber": 137,
      "section": "Other Skills",
      "topic": "Environmental Science & Ecology",
      "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In environmental ecological science (Solid Waste Management & 3Rs - Case 7), which statement accurately reflects this principle: 'Hierarchy prioritizing Reduce at source, followed by Reuse of materials, and Recycling before landfill disposal'?",
      "question_hi": "पर्यावरण विज्ञान (ठोस अपशिष्ट प्रबंधन - केस 7) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Hierarchy prioritizing Reduce at source, followed by Reuse of materials, and Recycling before landfill disposal'?",
      "options": {
        "A": "Accurately validated by ecological principle: Hierarchy prioritizing Reduce at source, followed by Reuse of materials, and Recycling before landfill disposal",
        "B": "Ecosystems function without solar energy inputs",
        "C": "Pollution increases biodiversity stability",
        "D": "Energy cycles indefinitely within food chains"
      },
      "options_hi": {
        "A": "पारिस्थितिकी सिद्धांत के अनुसार सही: Hierarchy prioritizing Reduce at source, followed by Reuse of materials, and Recycling before landfill disposal",
        "B": "सौर ऊर्जा के बिना तंत्र चलता है",
        "C": "प्रदूषण से विविधता बढ़ती है",
        "D": "ऊर्जा कभी नष्ट नहीं होती"
      },
      "correctAnswer": "A",
      "explanation": "Environmental ecology principles: Hierarchy prioritizing Reduce at source, followed by Reuse of materials, and Recycling before landfill disposal.",
      "explanation_hi": "पर्यावरण विज्ञान का सिद्धांत: Hierarchy prioritizing Reduce at source, followed by Reuse of materials, and Recycling before landfill disposal।"
    },
    {
      "id": 138,
      "questionNumber": 138,
      "section": "Other Skills",
      "topic": "Environmental Science & Ecology",
      "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In environmental ecological science (Bioindicators of Pollution - Case 1), which statement accurately reflects this principle: 'Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities'?",
      "question_hi": "पर्यावरण विज्ञान (प्रदूषण के जैव-सूचक - केस 1) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities'?",
      "options": {
        "A": "Accurately validated by ecological principle: Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities",
        "B": "Ecosystems function without solar energy inputs",
        "C": "Pollution increases biodiversity stability",
        "D": "Energy cycles indefinitely within food chains"
      },
      "options_hi": {
        "A": "पारिस्थितिकी सिद्धांत के अनुसार सही: Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities",
        "B": "सौर ऊर्जा के बिना तंत्र चलता है",
        "C": "प्रदूषण से विविधता बढ़ती है",
        "D": "ऊर्जा कभी नष्ट नहीं होती"
      },
      "correctAnswer": "A",
      "explanation": "Environmental ecology principles: Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities.",
      "explanation_hi": "पर्यावरण विज्ञान का सिद्धांत: Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities।"
    },
    {
      "id": 139,
      "questionNumber": 139,
      "section": "Other Skills",
      "topic": "Environmental Science & Ecology",
      "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In environmental ecological science (Bioindicators of Pollution - Case 2), which statement accurately reflects this principle: 'Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities'?",
      "question_hi": "पर्यावरण विज्ञान (प्रदूषण के जैव-सूचक - केस 2) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities'?",
      "options": {
        "A": "Accurately validated by ecological principle: Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities",
        "B": "Ecosystems function without solar energy inputs",
        "C": "Pollution increases biodiversity stability",
        "D": "Energy cycles indefinitely within food chains"
      },
      "options_hi": {
        "A": "पारिस्थितिकी सिद्धांत के अनुसार सही: Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities",
        "B": "सौर ऊर्जा के बिना तंत्र चलता है",
        "C": "प्रदूषण से विविधता बढ़ती है",
        "D": "ऊर्जा कभी नष्ट नहीं होती"
      },
      "correctAnswer": "A",
      "explanation": "Environmental ecology principles: Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities.",
      "explanation_hi": "पर्यावरण विज्ञान का सिद्धांत: Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities।"
    },
    {
      "id": 140,
      "questionNumber": 140,
      "section": "Other Skills",
      "topic": "Environmental Science & Ecology",
      "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In environmental ecological science (Bioindicators of Pollution - Case 3), which statement accurately reflects this principle: 'Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities'?",
      "question_hi": "पर्यावरण विज्ञान (प्रदूषण के जैव-सूचक - केस 3) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities'?",
      "options": {
        "A": "Accurately validated by ecological principle: Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities",
        "B": "Ecosystems function without solar energy inputs",
        "C": "Pollution increases biodiversity stability",
        "D": "Energy cycles indefinitely within food chains"
      },
      "options_hi": {
        "A": "पारिस्थितिकी सिद्धांत के अनुसार सही: Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities",
        "B": "सौर ऊर्जा के बिना तंत्र चलता है",
        "C": "प्रदूषण से विविधता बढ़ती है",
        "D": "ऊर्जा कभी नष्ट नहीं होती"
      },
      "correctAnswer": "A",
      "explanation": "Environmental ecology principles: Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities.",
      "explanation_hi": "पर्यावरण विज्ञान का सिद्धांत: Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities।"
    },
    {
      "id": 141,
      "questionNumber": 141,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय योग्यता (Math)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Simple Interest on a principal of Rs. 2,000 at 5% annual interest for 2 years (Problem 41)?",
      "question_hi": "2,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 41)?",
      "options": {
        "A": "Rs. 200",
        "B": "Rs. 250",
        "C": "Rs. 150",
        "D": "Rs. 300"
      },
      "options_hi": {
        "A": "200 रुपये",
        "B": "250 रुपये",
        "C": "150 रुपये",
        "D": "300 रुपये"
      },
      "correctAnswer": "A",
      "explanation": "SI = (P * R * T) / 100 = (2000 * 5 * 2) / 100 = Rs. 200.",
      "explanation_hi": "साधारण ब्याज = (2000 * 5 * 2) / 100 = 200 रुपये।"
    },
    {
      "id": 142,
      "questionNumber": 142,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय योग्यता (Math)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Simple Interest on a principal of Rs. 3,000 at 5% annual interest for 2 years (Problem 42)?",
      "question_hi": "3,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 42)?",
      "options": {
        "A": "Rs. 300",
        "B": "Rs. 350",
        "C": "Rs. 250",
        "D": "Rs. 400"
      },
      "options_hi": {
        "A": "300 रुपये",
        "B": "350 रुपये",
        "C": "250 रुपये",
        "D": "400 रुपये"
      },
      "correctAnswer": "A",
      "explanation": "SI = (P * R * T) / 100 = (3000 * 5 * 2) / 100 = Rs. 300.",
      "explanation_hi": "साधारण ब्याज = (3000 * 5 * 2) / 100 = 300 रुपये।"
    },
    {
      "id": 143,
      "questionNumber": 143,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय योग्यता (Math)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Simple Interest on a principal of Rs. 4,000 at 5% annual interest for 2 years (Problem 43)?",
      "question_hi": "4,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 43)?",
      "options": {
        "A": "Rs. 400",
        "B": "Rs. 450",
        "C": "Rs. 350",
        "D": "Rs. 500"
      },
      "options_hi": {
        "A": "400 रुपये",
        "B": "450 रुपये",
        "C": "350 रुपये",
        "D": "500 रुपये"
      },
      "correctAnswer": "A",
      "explanation": "SI = (P * R * T) / 100 = (4000 * 5 * 2) / 100 = Rs. 400.",
      "explanation_hi": "साधारण ब्याज = (4000 * 5 * 2) / 100 = 400 रुपये।"
    },
    {
      "id": 144,
      "questionNumber": 144,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय योग्यता (Math)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Simple Interest on a principal of Rs. 5,000 at 5% annual interest for 2 years (Problem 44)?",
      "question_hi": "5,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 44)?",
      "options": {
        "A": "Rs. 500",
        "B": "Rs. 550",
        "C": "Rs. 450",
        "D": "Rs. 600"
      },
      "options_hi": {
        "A": "500 रुपये",
        "B": "550 रुपये",
        "C": "450 रुपये",
        "D": "600 रुपये"
      },
      "correctAnswer": "A",
      "explanation": "SI = (P * R * T) / 100 = (5000 * 5 * 2) / 100 = Rs. 500.",
      "explanation_hi": "साधारण ब्याज = (5000 * 5 * 2) / 100 = 500 रुपये।"
    },
    {
      "id": 145,
      "questionNumber": 145,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय योग्यता (Math)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Simple Interest on a principal of Rs. 6,000 at 5% annual interest for 2 years (Problem 45)?",
      "question_hi": "6,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 45)?",
      "options": {
        "A": "Rs. 600",
        "B": "Rs. 650",
        "C": "Rs. 550",
        "D": "Rs. 700"
      },
      "options_hi": {
        "A": "600 रुपये",
        "B": "650 रुपये",
        "C": "550 रुपये",
        "D": "700 रुपये"
      },
      "correctAnswer": "A",
      "explanation": "SI = (P * R * T) / 100 = (6000 * 5 * 2) / 100 = Rs. 600.",
      "explanation_hi": "साधारण ब्याज = (6000 * 5 * 2) / 100 = 600 रुपये।"
    },
    {
      "id": 146,
      "questionNumber": 146,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the next number in the arithmetic progression: 123, 126, 129, ? (Series 41)",
      "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 123, 126, 129, ? (श्रृंखला 41)",
      "options": {
        "A": "132",
        "B": "133",
        "C": "130",
        "D": "135"
      },
      "options_hi": {
        "A": "132",
        "B": "133",
        "C": "130",
        "D": "135"
      },
      "correctAnswer": "A",
      "explanation": "The terms increase by a common difference of +3: 129 + 3 = 132.",
      "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 129 + 3 = 132।"
    },
    {
      "id": 147,
      "questionNumber": 147,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the next number in the arithmetic progression: 126, 129, 132, ? (Series 42)",
      "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 126, 129, 132, ? (श्रृंखला 42)",
      "options": {
        "A": "135",
        "B": "136",
        "C": "133",
        "D": "138"
      },
      "options_hi": {
        "A": "135",
        "B": "136",
        "C": "133",
        "D": "138"
      },
      "correctAnswer": "A",
      "explanation": "The terms increase by a common difference of +3: 132 + 3 = 135.",
      "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 132 + 3 = 135।"
    },
    {
      "id": 148,
      "questionNumber": 148,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the next number in the arithmetic progression: 129, 132, 135, ? (Series 43)",
      "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 129, 132, 135, ? (श्रृंखला 43)",
      "options": {
        "A": "138",
        "B": "139",
        "C": "136",
        "D": "141"
      },
      "options_hi": {
        "A": "138",
        "B": "139",
        "C": "136",
        "D": "141"
      },
      "correctAnswer": "A",
      "explanation": "The terms increase by a common difference of +3: 135 + 3 = 138.",
      "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 135 + 3 = 138।"
    },
    {
      "id": 149,
      "questionNumber": 149,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the next number in the arithmetic progression: 132, 135, 138, ? (Series 44)",
      "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 132, 135, 138, ? (श्रृंखला 44)",
      "options": {
        "A": "141",
        "B": "142",
        "C": "139",
        "D": "144"
      },
      "options_hi": {
        "A": "141",
        "B": "142",
        "C": "139",
        "D": "144"
      },
      "correctAnswer": "A",
      "explanation": "The terms increase by a common difference of +3: 138 + 3 = 141.",
      "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 138 + 3 = 141।"
    },
    {
      "id": 150,
      "questionNumber": 150,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the next number in the arithmetic progression: 135, 138, 141, ? (Series 45)",
      "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 135, 138, 141, ? (श्रृंखला 45)",
      "options": {
        "A": "144",
        "B": "145",
        "C": "142",
        "D": "147"
      },
      "options_hi": {
        "A": "144",
        "B": "145",
        "C": "142",
        "D": "147"
      },
      "correctAnswer": "A",
      "explanation": "The terms increase by a common difference of +3: 141 + 3 = 144.",
      "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 141 + 3 = 144।"
    }
  ]
};
