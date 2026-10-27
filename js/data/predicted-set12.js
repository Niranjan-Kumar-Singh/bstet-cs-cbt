// Generated Question Paper Data
window.predicted_set12 = {
  "id": "predicted_set12",
  "title": "2026 Predicted Full Mock 12",
  "subtitle": "Final All-India Grand Mock: Strict Unit 1 to Unit 15 Distribution & Authentic TCS iON Exam Standard",
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
      "topic": "Computer Organization & Architecture",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Auto-increment Addressing Mode, when is the register pointer incremented?",
      "question_hi": "ऑटो-इंक्रीमेंट एड्रेसिंग मोड में, रजिस्टर पॉइंटर को कब बढ़ाया (इंक्रीमेंट) जाता है?",
      "options": {
        "A": "After the operand in memory is accessed using the register value",
        "B": "Before accessing memory",
        "C": "Only when an interrupt occurs",
        "D": "During instruction fetch"
      },
      "options_hi": {
        "A": "रजिस्टर मान का उपयोग करके मेमोरी ऑपरेंड तक पहुँचने के बाद (Post-increment)",
        "B": "मेमोरी एक्सेस से पहले",
        "C": "केवल इंटरप्ट पर",
        "D": "फेच के दौरान"
      },
      "correctAnswer": "A",
      "explanation": "Auto-increment accesses memory at Address = (R), then post-increments R by the data operand size (R = R + size).",
      "explanation_hi": "ऑटो-इंक्रीमेंट में रजिस्टर के पते से डेटा पढ़ने के बाद रजिस्टर का मान बढ़ा दिया जाता है।"
    },
    {
      "id": 2,
      "questionNumber": 2,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary characteristic of a Hardwired Control Unit compared to a Microprogrammed Control Unit?",
      "question_hi": "माइक्रोप्रोग्राम्ड की तुलना में हार्डवायर्ड कंट्रोल यूनिट (Hardwired Control Unit) की प्राथमिक विशेषता क्या है?",
      "options": {
        "A": "Faster operation speed because control signals are generated directly by combinational logic gates",
        "B": "Easier to modify and reconfigure",
        "C": "Requires large control memory (ROM)",
        "D": "Slower clock frequency"
      },
      "options_hi": {
        "A": "तेज़ संचालन गति क्योंकि नियंत्रण संकेत सीधे कॉम्बिनेशनल लॉजिक गेट्स द्वारा उत्पन्न होते हैं",
        "B": "संशोधित करना आसान",
        "C": "बड़ी रोम मेमोरी चाहिए",
        "D": "धीमी क्लॉक"
      },
      "correctAnswer": "A",
      "explanation": "Hardwired control uses fixed combinational gates and state flip-flops, achieving maximum speed but offering poor upgrade flexibility.",
      "explanation_hi": "हार्डवायर्ड कंट्रोल यूनिट लॉजिक गेट्स से बनी होती है जिससे यह अत्यंत तेज़ होती है किंतु इसमें बदलाव कठिन होता है।"
    },
    {
      "id": 3,
      "questionNumber": 3,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the function of the Memory Buffer Register (MBR) / Memory Data Register (MDR)?",
      "question_hi": "मेमोरी बफर रजिस्टर (MBR / MDR) का क्या कार्य है?",
      "options": {
        "A": "Holds the data item being transferred to or from the memory unit",
        "B": "Holds the address of the next instruction to fetch",
        "C": "Decodes the operation code",
        "D": "Holds arithmetic status flags"
      },
      "options_hi": {
        "A": "मेमोरी यूनिट से या मेमोरी यूनिट में स्थानांतरित किए जा रहे डेटा को संग्रहीत करता है",
        "B": "अगले निर्देश का पता रखता है",
        "C": "ऑपकोड डिकोड करता है",
        "D": "फ्लैग रखता है"
      },
      "correctAnswer": "A",
      "explanation": "The MBR/MDR acts as the bidirectional data interface holding words read from or written to main memory.",
      "explanation_hi": "MBR/MDR मेमोरी में लिखे जाने वाले या मेमोरी से पढ़े गए डेटा को अस्थाई रूप से रखता है।"
    },
    {
      "id": 4,
      "questionNumber": 4,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the function of the Memory Address Register (MAR)?",
      "question_hi": "मेमोरी एड्रेस रजिस्टर (MAR) का क्या कार्य है?",
      "options": {
        "A": "Holds the address of the memory location currently being accessed for read or write",
        "B": "Stores instruction opcodes",
        "C": "Stores ALU results",
        "D": "Counts execution clock cycles"
      },
      "options_hi": {
        "A": "पढ़े या लिखे जाने वाले मेमोरी स्थान का पता (Address) रखता है",
        "B": "ऑपकोड रखता है",
        "C": "परिणाम रखता है",
        "D": "क्लॉक साइकिल गिनता है"
      },
      "correctAnswer": "A",
      "explanation": "MAR holds the memory address placed onto the address bus during memory read or write operations.",
      "explanation_hi": "MAR उस मेमोरी लोकेशन का पता रखता है जिसे सीपीयू द्वारा एक्सेस किया जाना है।"
    },
    {
      "id": 5,
      "questionNumber": 5,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In computer memory hierarchy, which memory level provides the LOWEST access time (highest speed)?",
      "question_hi": "कंप्यूटर मेमोरी पदानुक्रम में कौन सा मेमोरी स्तर सबसे कम एक्सेस समय (उच्चतम गति) प्रदान करता है?",
      "options": {
        "A": "CPU Internal Registers",
        "B": "L1 Cache Memory",
        "C": "Main Memory (DRAM)",
        "D": "Solid State Drive (SSD)"
      },
      "options_hi": {
        "A": "CPU आंतरिक रजिस्टर (Registers)",
        "B": "L1 कैश",
        "C": "मुख्य मेमोरी (DRAM)",
        "D": "सॉलिड स्टेट ड्राइव"
      },
      "correctAnswer": "A",
      "explanation": "CPU registers operate at the core clock speed (fractions of a nanosecond), making them the fastest storage in the hierarchy.",
      "explanation_hi": "सीपीयू के आंतरिक रजिस्टरों की गति सबसे तेज़ और एक्सेस समय सबसे कम होता है।"
    },
    {
      "id": 6,
      "questionNumber": 6,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is Dynamic RAM (DRAM) constructed of, and why does it require periodic refreshing?",
      "question_hi": "डायनामिक रैम (DRAM) किससे निर्मित होती है, और इसे आवधिक रिफ्रेशिंग की आवश्यकता क्यों होती है?",
      "options": {
        "A": "One transistor and one capacitor; capacitor charge leaks away over time",
        "B": "Four cross-coupled flip-flop transistors",
        "C": "Magnetic cores",
        "D": "Fusible links"
      },
      "options_hi": {
        "A": "एक ट्रांजिस्टर और एक कैपेसिटर; कैपेसिटर का चार्ज धीरे-धीरे डिस्चार्ज हो जाता है",
        "B": "फ्लिप-फ्लॉप ट्रांजिस्टर",
        "C": "चुंबकीय कोर",
        "D": "फ्यूजिबल लिंक"
      },
      "correctAnswer": "A",
      "explanation": "DRAM stores bits as electrostatic charge on tiny capacitors which leak charge, necessitating periodic refresh cycles every few milliseconds.",
      "explanation_hi": "DRAM में 1 ट्रांजिस्टर और 1 कैपेसिटर होता है। चार्ज लीक होने के कारण इसे बार-बार रिफ्रेश करना पड़ता है।"
    },
    {
      "id": 7,
      "questionNumber": 7,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Why is Static RAM (SRAM) preferred over DRAM for CPU cache memory?",
      "question_hi": "CPU कैश मेमोरी के लिए DRAM के बजाय स्टैटिक रैम (SRAM) को प्राथमिकता क्यों दी जाती है?",
      "options": {
        "A": "SRAM is much faster and does not require periodic refresh cycles",
        "B": "SRAM is cheaper and denser than DRAM",
        "C": "SRAM consumes zero power",
        "D": "SRAM is non-volatile"
      },
      "options_hi": {
        "A": "SRAM बहुत तेज़ होती है और इसे आवधिक रिफ्रेशिंग की आवश्यकता नहीं होती",
        "B": "SRAM सस्ती होती है",
        "C": "शून्य बिजली खपत",
        "D": "गैर-वाष्पशील है"
      },
      "correctAnswer": "A",
      "explanation": "SRAM uses flip-flop latches (6 transistors per cell) that hold data continuously without refresh, providing fast nanosecond access times.",
      "explanation_hi": "SRAM फ्लिप-फ्लॉप पर आधारित होती है, अत्यंत तेज़ होती है और इसे रिफ्रेश की आवश्यकता नहीं होती।"
    },
    {
      "id": 8,
      "questionNumber": 8,
      "section": "Computer Science",
      "topic": "Programming and Data Structures",
      "topic_hi": "प्रोग्रामिंग और डेटा संरचनाएं (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What data structure is used by compilers to check for balanced parentheses and brackets in source code?",
      "question_hi": "सोर्स कोड में संतुलित कोष्ठक (Balanced Parentheses) की जांच के लिए कंपाइलर द्वारा किस डेटा संरचना का उपयोग किया जाता है?",
      "options": {
        "A": "Stack",
        "B": "Queue",
        "C": "Binary Search Tree",
        "D": "Hash Table"
      },
      "options_hi": {
        "A": "स्टैक (Stack)",
        "B": "कतार (Queue)",
        "C": "बाइनरी सर्च ट्री",
        "D": "हैश टेबल"
      },
      "correctAnswer": "A",
      "explanation": "A Stack pushes opening brackets and pops to verify matching closing brackets, following LIFO order.",
      "explanation_hi": "स्टैक LIFO सिद्धांत पर काम करता है जिससे कोष्ठक के जोड़े आसानी से परखे जा सकते हैं।"
    },
    {
      "id": 9,
      "questionNumber": 9,
      "section": "Computer Science",
      "topic": "Programming and Data Structures",
      "topic_hi": "प्रोग्रामिंग और डेटा संरचनाएं (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the postfix evaluation of the arithmetic expression: '6 3 + 2 * 4 -'?",
      "question_hi": "अंकगणितीय पोस्टफिक्स व्यंजक '6 3 + 2 * 4 -' का मूल्यांकन मान क्या होगा?",
      "options": {
        "A": "14",
        "B": "18",
        "C": "10",
        "D": "20"
      },
      "options_hi": {
        "A": "14",
        "B": "18",
        "C": "10",
        "D": "20"
      },
      "correctAnswer": "A",
      "explanation": "6 + 3 = 9; 9 * 2 = 18; 18 - 4 = 14.",
      "explanation_hi": "पोस्टफिक्स मूल्यांकन: 6+3=9, 9*2=18, 18-4=14।"
    },
    {
      "id": 10,
      "questionNumber": 10,
      "section": "Computer Science",
      "topic": "Programming and Data Structures",
      "topic_hi": "प्रोग्रामिंग और डेटा संरचनाएं (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the worst-case time complexity of searching for an element in a Singly Linked List of n nodes?",
      "question_hi": "n नोड्स वाले सिंगली लिंक्ड लिस्ट में किसी तत्व को खोजने की सबसे खराब स्थिति (Worst-case) में समय जटिलता क्या है?",
      "options": {
        "A": "O(n)",
        "B": "O(1)",
        "C": "O(log n)",
        "D": "O(n log n)"
      },
      "options_hi": {
        "A": "O(n)",
        "B": "O(1)",
        "C": "O(log n)",
        "D": "O(n log n)"
      },
      "correctAnswer": "A",
      "explanation": "Searching requires traversing node-by-node from the head pointer, taking O(n) in the worst case.",
      "explanation_hi": "लिंक्ड लिस्ट में रैंडम एक्सेस नहीं होता, अतः खोजने के लिए O(n) समय लगता है।"
    },
    {
      "id": 11,
      "questionNumber": 11,
      "section": "Computer Science",
      "topic": "Programming and Data Structures",
      "topic_hi": "प्रोग्रामिंग और डेटा संरचनाएं (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a Circular Singly Linked List with a pointer pointing to the LAST node (tail), what is the time complexity to insert a new node at the FRONT (head)?",
      "question_hi": "अंतिम नोड (टेल) को इंगित करने वाले सर्कुलर सिंगली लिंक्ड लिस्ट में शुरुआत (हेड) पर नोड जोड़ने की समय जटिलता क्या है?",
      "options": {
        "A": "O(1)",
        "B": "O(n)",
        "C": "O(log n)",
        "D": "O(n^2)"
      },
      "options_hi": {
        "A": "O(1)",
        "B": "O(n)",
        "C": "O(log n)",
        "D": "O(n^2)"
      },
      "correctAnswer": "A",
      "explanation": "With a tail pointer, tail->next is the head. Inserting at head takes O(1) by updating tail->next and new_node->next.",
      "explanation_hi": "टेल पॉइंटर होने पर हेड (tail->next) पर इंसर्शन केवल O(1) में हो जाता है।"
    },
    {
      "id": 12,
      "questionNumber": 12,
      "section": "Computer Science",
      "topic": "Programming and Data Structures",
      "topic_hi": "प्रोग्रामिंग और डेटा संरचनाएं (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the time complexity to find the predecessor or successor of a given node in a Doubly Linked List when a pointer to that node is already given?",
      "question_hi": "डबली लिंक्ड लिस्ट में किसी नोड का पॉइंटर पहले से उपलब्ध होने पर उसके पूर्ववर्ती (Predecessor) को खोजने का समय क्या है?",
      "options": {
        "A": "O(1)",
        "B": "O(n)",
        "C": "O(log n)",
        "D": "O(n/2)"
      },
      "options_hi": {
        "A": "O(1)",
        "B": "O(n)",
        "C": "O(log n)",
        "D": "O(n/2)"
      },
      "correctAnswer": "A",
      "explanation": "Doubly linked lists have explicit 'prev' pointers, allowing instantaneous O(1) navigation to the previous node.",
      "explanation_hi": "डबली लिंक्ड लिस्ट में सीधा 'prev' पॉइंटर होता है जिससे पूर्ववर्ती O(1) में मिल जाता है।"
    },
    {
      "id": 13,
      "questionNumber": 13,
      "section": "Computer Science",
      "topic": "Programming and Data Structures",
      "topic_hi": "प्रोग्रामिंग और डेटा संरचनाएं (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In collision resolution using 'Separate Chaining' in a Hash Table of size m with n keys, what is the Load Factor (alpha)?",
      "question_hi": "m आकार की हैश टेबल में n कुंजियों के साथ 'सेपरेट चेनिंग' में लोड फैक्टर (alpha) क्या होता है?",
      "options": {
        "A": "alpha = n / m",
        "B": "alpha = m / n",
        "C": "alpha = n * m",
        "D": "alpha = n - m"
      },
      "options_hi": {
        "A": "alpha = n / m",
        "B": "alpha = m / n",
        "C": "alpha = n * m",
        "D": "alpha = n - m"
      },
      "correctAnswer": "A",
      "explanation": "Load factor alpha = (number of stored keys n) / (number of slots m), representing the average chain length.",
      "explanation_hi": "लोड फैक्टर alpha = कुंजियों की संख्या (n) / स्लॉट की संख्या (m) होता है।"
    },
    {
      "id": 14,
      "questionNumber": 14,
      "section": "Computer Science",
      "topic": "Programming and Data Structures",
      "topic_hi": "प्रोग्रामिंग और डेटा संरचनाएं (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary drawback of 'Linear Probing' in open-addressed Hash Tables?",
      "question_hi": "ओपन-एड्रेस हैश टेबल में 'लीनियर प्रोबिंग' (Linear Probing) की मुख्य खामी क्या है?",
      "options": {
        "A": "Primary Clustering (long contiguous blocks of occupied cells form, degrading lookup performance)",
        "B": "Secondary clustering only",
        "C": "Requires extra pointer memory",
        "D": "Cannot store integers"
      },
      "options_hi": {
        "A": "प्राइमरी क्लस्टरिंग (भरे हुए स्लॉट के लंबे गुच्छे बन जाते हैं जिससे खोज धीमी हो जाती है)",
        "B": "केवल सेकेंडरी क्लस्टरिंग",
        "C": "अतिरिक्त पॉइंटर मेमोरी",
        "D": "संख्या नहीं रख सकता"
      },
      "correctAnswer": "A",
      "explanation": "Linear probing causes contiguous filled slots to merge into long runs (primary clustering), increasing average probe counts.",
      "explanation_hi": "लीनियर प्रोबिंग में भरे हुए स्लॉट्स पास-पास जुड़कर क्लस्टर बना लेते हैं (Primary Clustering)।"
    },
    {
      "id": 15,
      "questionNumber": 15,
      "section": "Computer Science",
      "topic": "Programming and Data Structures",
      "topic_hi": "प्रोग्रामिंग और डेटा संरचनाएं (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a Binary Search Tree (BST), what traversal yields elements in strictly ASCENDING sorted order?",
      "question_hi": "बाइनरी सर्च ट्री (BST) में कौन सा ट्रैवर्सल तत्वों को कड़े आरोही (सॉर्टेड) क्रम में देता है?",
      "options": {
        "A": "Inorder Traversal (Left, Root, Right)",
        "B": "Preorder Traversal",
        "C": "Postorder Traversal",
        "D": "Level-order Traversal"
      },
      "options_hi": {
        "A": "इनऑर्डर ट्रैवर्सल (Left, Root, Right)",
        "B": "प्रीऑर्डर ट्रैवर्सल",
        "C": "पोस्टऑर्डर ट्रैवर्सल",
        "D": "लेवल-ऑर्डर"
      },
      "correctAnswer": "A",
      "explanation": "By BST invariant (Left < Root < Right), in-order traversal visits elements in monotonically non-decreasing order.",
      "explanation_hi": "BST का इनऑर्डर ट्रैवर्सल हमेशा तत्वों को आरोही (Ascending) क्रम में देता है।"
    },
    {
      "id": 16,
      "questionNumber": 16,
      "section": "Computer Science",
      "topic": "Programming and Data Structures",
      "topic_hi": "प्रोग्रामिंग और डेटा संरचनाएं (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the worst-case time complexity of searching in a standard Binary Search Tree?",
      "question_hi": "एक मानक बाइनरी सर्च ट्री में खोजने की सबसे खराब स्थिति (Worst-case) में समय जटिलता क्या है?",
      "options": {
        "A": "O(n) (when the tree degenerates into a skewed linked list)",
        "B": "O(log n)",
        "C": "O(1)",
        "D": "O(n log n)"
      },
      "options_hi": {
        "A": "O(n) (जब ट्री एक तरफ झुकी हुई स्क्यूड लिस्ट बन जाती है)",
        "B": "O(log n)",
        "C": "O(1)",
        "D": "O(n log n)"
      },
      "correctAnswer": "A",
      "explanation": "If elements are inserted in already sorted order, the BST becomes a skewed line of height n, degrading search to O(n).",
      "explanation_hi": "यदि तत्व पहले से सॉर्टेड हों तो BST तिरछी रेखा (Skewed) बन जाता है और समय O(n) हो जाता है।"
    },
    {
      "id": 17,
      "questionNumber": 17,
      "section": "Computer Science",
      "topic": "Programming and Data Structures",
      "topic_hi": "प्रोग्रामिंग और डेटा संरचनाएं (DSA)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a Huffman tree constructed for data compression, where are all character symbols located?",
      "question_hi": "डेटा संपीड़न के लिए निर्मित हफमैन ट्री (Huffman Tree) में सभी वर्ण प्रतीक कहाँ स्थित होते हैं?",
      "options": {
        "A": "Exclusively at the leaf nodes",
        "B": "Exclusively at the root node",
        "C": "At internal nodes with single children",
        "D": "Evenly distributed at all levels"
      },
      "options_hi": {
        "A": "विशेष रूप से लीफ नोड्स (Leaf Nodes) पर",
        "B": "केवल रूट नोड पर",
        "C": "आंतरिक नोड्स पर",
        "D": "सभी स्तरों पर"
      },
      "correctAnswer": "A",
      "explanation": "Huffman codes are prefix-free because all alphabet symbols reside strictly at external leaf nodes.",
      "explanation_hi": "हफमैन कोड प्रीफिक्स-फ्री होते हैं क्योंकि सभी वर्ण केवल लीफ (पत्ती) नोड्स पर होते हैं।"
    },
    {
      "id": 18,
      "questionNumber": 18,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम (Algorithms)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which sorting algorithm has a worst-case time complexity of O(n log n) and sorts IN-PLACE without requiring auxiliary O(n) memory?",
      "question_hi": "किस सॉर्टिंग एल्गोरिदम की सबसे खराब स्थिति में O(n log n) समय जटिलता होती है और यह बिना अतिरिक्त O(n) मेमोरी के इन-प्लेस सॉर्ट करता है?",
      "options": {
        "A": "Heap Sort",
        "B": "Merge Sort",
        "C": "Quick Sort",
        "D": "Bubble Sort"
      },
      "options_hi": {
        "A": "हीप सॉर्ट (Heap Sort)",
        "B": "मर्ज सॉर्ट",
        "C": "क्विक सॉर्ट",
        "D": "बबल सॉर्ट"
      },
      "correctAnswer": "A",
      "explanation": "Heap sort achieves guaranteed O(n log n) in all cases while using O(1) auxiliary space, unlike Merge Sort which requires O(n) buffer.",
      "explanation_hi": "हीप सॉर्ट O(n log n) में इन-प्लेस (O(1) मेमोरी) में सॉर्टिंग करता है।"
    },
    {
      "id": 19,
      "questionNumber": 19,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम (Algorithms)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the worst-case time complexity of Quick Sort, and when does it occur?",
      "question_hi": "क्विक सॉर्ट (Quick Sort) की सबसे खराब समय जटिलता क्या है और यह कब होती है?",
      "options": {
        "A": "O(n^2), occurs when the pivot chosen is consistently the smallest or largest element (e.g., sorted array with first element as pivot)",
        "B": "O(n log n), occurs on random inputs",
        "C": "O(n), occurs on reverse sorted array",
        "D": "O(log n)"
      },
      "options_hi": {
        "A": "O(n^2), तब होता है जब चुना गया पिवट लगातार सबसे छोटा या सबसे बड़ा तत्व हो",
        "B": "O(n log n)",
        "C": "O(n)",
        "D": "O(log n)"
      },
      "correctAnswer": "A",
      "explanation": "When partitions are maximally unbalanced (1 element and n-1 elements), recursion depth is n, yielding O(n^2) runtime.",
      "explanation_hi": "यदि पिवट सबसे छोटा या बड़ा तत्व हो तो विभाजन 1 और n-1 में होता है जिससे समय O(n^2) हो जाता है।"
    },
    {
      "id": 20,
      "questionNumber": 20,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम (Algorithms)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which sorting algorithm is STABLE by nature among the following options?",
      "question_hi": "निम्नलिखित में से कौन सा सॉर्टिंग एल्गोरिदम स्वभाव से स्थिर (Stable) है?",
      "options": {
        "A": "Merge Sort",
        "B": "Heap Sort",
        "C": "Quick Sort",
        "D": "Selection Sort"
      },
      "options_hi": {
        "A": "मर्ज सॉर्ट (Merge Sort)",
        "B": "हीप सॉर्ट",
        "C": "क्विक सॉर्ट",
        "D": "सिलेक्शन सॉर्ट"
      },
      "correctAnswer": "A",
      "explanation": "Merge Sort preserves the relative order of duplicate elements during the merge phase, making it inherently stable.",
      "explanation_hi": "मर्ज सॉर्ट समान मान वाले तत्वों के मूल क्रम को बनाए रखता है (स्थिर सॉर्ट)।"
    },
    {
      "id": 21,
      "questionNumber": 21,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम (Algorithms)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the time complexity of Counting Sort for sorting n integers in the range 0 to k?",
      "question_hi": "0 से k की सीमा में n पूर्णांकों को सॉर्ट करने के लिए काउंटिंग सॉर्ट (Counting Sort) की समय जटिलता क्या है?",
      "options": {
        "A": "O(n + k)",
        "B": "O(n log n)",
        "C": "O(n * k)",
        "D": "O(k log n)"
      },
      "options_hi": {
        "A": "O(n + k)",
        "B": "O(n log n)",
        "C": "O(n * k)",
        "D": "O(k log n)"
      },
      "correctAnswer": "A",
      "explanation": "Counting sort tallies frequencies in an auxiliary array of size k, running in linear time O(n + k).",
      "explanation_hi": "काउंटिंग सॉर्ट तुलना किए बिना O(n + k) लीनियर समय में सॉर्ट करता है।"
    },
    {
      "id": 22,
      "questionNumber": 22,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम (Algorithms)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which algorithm finds the Minimum Spanning Tree (MST) of a connected graph by greedily adding the cheapest edge that does not form a cycle?",
      "question_hi": "कौन सा एल्गोरिदम बिना चक्र बनाए सबसे सस्ती एज जोड़कर ग्राफ का न्यूनतम स्पैनिंग ट्री (MST) बनाता है?",
      "options": {
        "A": "Kruskal's Algorithm (using Disjoint Set Union)",
        "B": "Prim's Algorithm",
        "C": "Dijkstra's Algorithm",
        "D": "Bellman-Ford Algorithm"
      },
      "options_hi": {
        "A": "क्रुस्कल का एल्गोरिदम (Kruskal's Algorithm)",
        "B": "प्रिम्स एल्गोरिदम",
        "C": "डिजक्स्ट्रा",
        "D": "बेलमैन-फोर्ड"
      },
      "correctAnswer": "A",
      "explanation": "Kruskal sorts all edges by weight and uses Union-Find to incrementally unite components without creating cycles.",
      "explanation_hi": "क्रुस्कल एल्गोरिदम किनारों को भार अनुसार सॉर्ट करके चक्र रहित न्यूनतम स्पैनिंग ट्री बनाता है।"
    },
    {
      "id": 23,
      "questionNumber": 23,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम (Algorithms)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the time complexity of Prim's Algorithm implemented using a Binary Min-Heap for a graph with V vertices and E edges?",
      "question_hi": "V शीर्षों और E किनारों वाले ग्राफ के लिए बाइनरी मिन-हीप का उपयोग करके प्रिम्स एल्गोरिदम की समय जटिलता क्या है?",
      "options": {
        "A": "O(E log V)",
        "B": "O(V^2)",
        "C": "O(V log E)",
        "D": "O(E + V)"
      },
      "options_hi": {
        "A": "O(E log V)",
        "B": "O(V^2)",
        "C": "O(V log E)",
        "D": "O(E + V)"
      },
      "correctAnswer": "A",
      "explanation": "With a min-heap, extract-min takes O(log V) and decrease-key takes O(log V), yielding total time O(E log V).",
      "explanation_hi": "बाइनरी मिन-हीप के साथ प्रिम्स एल्गोरिदम O(E log V) समय लेता है।"
    },
    {
      "id": 24,
      "questionNumber": 24,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम (Algorithms)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Dynamic Programming, what are the two essential properties a problem must possess to be solvable efficiently?",
      "question_hi": "डायनामिक प्रोग्रामिंग में किसी समस्या को कुशलता से हल करने के लिए किन दो आवश्यक गुणों का होना अनिवार्य है?",
      "options": {
        "A": "Optimal Substructure and Overlapping Subproblems",
        "B": "Greedy Choice and Non-overlapping subproblems",
        "C": "Linear Time and Constant Space",
        "D": "Divide and Conquer only"
      },
      "options_hi": {
        "A": "इष्टतम उप-संरचना (Optimal Substructure) और ओवरलैपिंग उप-समस्याएं (Overlapping Subproblems)",
        "B": "लालची विकल्प",
        "C": "लीनियर टाइम",
        "D": "केवल डिवाइड एंड कॉन्कर"
      },
      "correctAnswer": "A",
      "explanation": "DP solves problems where subproblem solutions overlap (memoization avoids redundant work) and combine into an optimal overall solution.",
      "explanation_hi": "DP के लिए दो मुख्य गुण हैं: इष्टतम उप-संरचना और बार-बार आने वाली ओवरलैपिंग उप-समस्याएं।"
    },
    {
      "id": 25,
      "questionNumber": 25,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम (Algorithms)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the time complexity of the 0/1 Knapsack Problem using Dynamic Programming with n items and knapsack capacity W?",
      "question_hi": "n वस्तुओं और W क्षमता वाले 0/1 नैपसैक समस्या की डायनामिक प्रोग्रामिंग द्वारा समय जटिलता क्या है?",
      "options": {
        "A": "O(n * W) (pseudo-polynomial time)",
        "B": "O(2^n)",
        "C": "O(n log n)",
        "D": "O(W log n)"
      },
      "options_hi": {
        "A": "O(n * W) (स्यूडो-पॉलीनोमियल समय)",
        "B": "O(2^n)",
        "C": "O(n log n)",
        "D": "O(W log n)"
      },
      "correctAnswer": "A",
      "explanation": "A 2D DP table of dimensions (n+1) x (W+1) is filled, taking O(n*W) time, which is pseudo-polynomial.",
      "explanation_hi": "DP तालिका का आकार n x W होता है, अतः समय जटिलता O(n * W) होती है।"
    },
    {
      "id": 26,
      "questionNumber": 26,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary objective of the Shortest Job First (SJF) CPU scheduling algorithm?",
      "question_hi": "शॉर्टेस्ट जॉब फर्स्ट (SJF) सीपीयू शेड्यूलिंग एल्गोरिदम का प्राथमिक उद्देश्य क्या है?",
      "options": {
        "A": "Minimizes average waiting time for a given set of processes",
        "B": "Guarantees no starvation",
        "C": "Maximizes CPU idle time",
        "D": "Ensures equal time slices"
      },
      "options_hi": {
        "A": "प्रक्रियाओं के दिए गए सेट के लिए औसत प्रतीक्षा समय को न्यूनतम करता है",
        "B": "स्टारवेशन समाप्त करता है",
        "C": "सीपीयू खाली रखता है",
        "D": "समान टाइम स्लाइस देता है"
      },
      "correctAnswer": "A",
      "explanation": "SJF is provably optimal in minimizing the average waiting time among non-preemptive scheduling algorithms.",
      "explanation_hi": "SJF न्यूनतम औसत प्रतीक्षा समय देने के लिए गणितीय रूप से इष्टतम है।"
    },
    {
      "id": 27,
      "questionNumber": 27,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which CPU scheduling algorithm gives each process a small fixed unit of CPU time called a 'Time Quantum'?",
      "question_hi": "कौन सा सीपीयू शेड्यूलिंग एल्गोरिदम प्रत्येक प्रक्रिया को 'टाइम क्वांटम' (Time Quantum) नामक सीपीयू समय की एक निश्चित इकाई देता है?",
      "options": {
        "A": "Round Robin (RR) Scheduling",
        "B": "First-Come First-Served",
        "C": "Multilevel Feedback Queue only",
        "D": "Shortest Remaining Time First"
      },
      "options_hi": {
        "A": "राउंड रॉबिन (Round Robin) शेड्यूलिंग",
        "B": "FCFS",
        "C": "केवल फीडबैक कतार",
        "D": "SRTF"
      },
      "correctAnswer": "A",
      "explanation": "Round Robin assigns equal time slices circularly, ensuring fairness and responsiveness in interactive systems.",
      "explanation_hi": "राउंड रॉबिन प्रत्येक प्रोसेस को एक निश्चित टाइम क्वांटम देकर चक्रीय क्रम में चलाता है।"
    },
    {
      "id": 28,
      "questionNumber": 28,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "If the time quantum in Round Robin scheduling is set extremely large (larger than the longest burst time), how does it behave?",
      "question_hi": "यदि राउंड रॉबिन शेड्यूलिंग में टाइम क्वांटम बहुत बड़ा कर दिया जाए, तो यह किस एल्गोरिदम की तरह व्यवहार करने लगता है?",
      "options": {
        "A": "It degenerates into First-Come, First-Served (FCFS) scheduling",
        "B": "It behaves like Shortest Job First",
        "C": "It produces severe thrashing",
        "D": "It deadlocks all processes"
      },
      "options_hi": {
        "A": "यह फर्स्ट-कम, फर्स्ट-सर्व्ड (FCFS) शेड्यूलिंग में बदल जाता है",
        "B": "SJF बन जाता है",
        "C": "थ्रैशिंग होती है",
        "D": "डेडलॉक हो जाता है"
      },
      "correctAnswer": "A",
      "explanation": "With an infinite time quantum, no process is preempted before completion, matching FCFS FIFO queue execution.",
      "explanation_hi": "यदि टाइम स्लाइस बहुत बड़ा हो तो कोई प्रीमेम्प्शन नहीं होता और यह FCFS बन जाता है।"
    },
    {
      "id": 29,
      "questionNumber": 29,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the purpose of the 'Aging' technique in priority-based CPU scheduling?",
      "question_hi": "प्राथमिकता-आधारित सीपीयू शेड्यूलिंग में 'एजिंग' (Aging) तकनीक का क्या उद्देश्य है?",
      "options": {
        "A": "Gradually increases the priority of processes that wait in the system for a long time, preventing starvation",
        "B": "Terminates old processes",
        "C": "Frees memory buffers",
        "D": "Reduces clock speed"
      },
      "options_hi": {
        "A": "सिस्टम में लंबे समय तक प्रतीक्षा करने वाली प्रक्रियाओं की प्राथमिकता को धीरे-धीरे बढ़ाता है, जिससे भुखमरी (Starvation) रुकती है",
        "B": "पुरानी प्रोसेस बंद करता है",
        "C": "मेमोरी खाली करता है",
        "D": "स्पीड कम करता है"
      },
      "correctAnswer": "A",
      "explanation": "Aging prevents low-priority processes from starving indefinitely by monotonically incrementing their priority over time.",
      "explanation_hi": "एजिंग प्रतीक्षा कर रही निचली प्राथमिकता वाली प्रोसेस की प्राथमिकता बढ़ाकर भुखमरी रोकती है।"
    },
    {
      "id": 30,
      "questionNumber": 30,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is a 'Critical Section' in concurrent programming?",
      "question_hi": "समवर्ती प्रोग्रामिंग (Concurrent Programming) में 'क्रिटिकल सेक्शन' (Critical Section) क्या है?",
      "options": {
        "A": "A section of code that accesses shared resources (memory, variables, files) that must not be concurrently executed by more than one process",
        "B": "The operating system bootloader code",
        "C": "An error handling block",
        "D": "Code running in user mode"
      },
      "options_hi": {
        "A": "कोड का वह भाग जो साझा संसाधनों तक पहुँचता है और जिसे एक समय में एक से अधिक प्रोसेस द्वारा निष्पादित नहीं किया जाना चाहिए",
        "B": "बूटलोडर कोड",
        "C": "एरर ब्लॉक",
        "D": "यूज़र मोड कोड"
      },
      "correctAnswer": "A",
      "explanation": "The critical section is where shared state is mutated; mutual exclusion ensures only one process executes it at any instant.",
      "explanation_hi": "क्रिटिकल सेक्शन में साझा मेमोरी या फाइलों पर कार्य होता है जिसे परस्पर अपवर्जन से सुरक्षित रखा जाता है।"
    },
    {
      "id": 31,
      "questionNumber": 31,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Dijkstra's Semaphore abstraction, what operation does the 'wait()' or 'P()' primitive perform?",
      "question_hi": "डिजक्स्ट्रा के सेमाफोर में 'wait()' या 'P()' प्रिमिटिव क्या ऑपरेशन करता है?",
      "options": {
        "A": "Decrements the semaphore value; blocks if value becomes negative (< 0)",
        "B": "Increments the semaphore value and wakes a waiting process",
        "C": "Initializes semaphore to 1",
        "D": "Destroys the semaphore"
      },
      "options_hi": {
        "A": "सेमाफोर के मान को घटाता है; यदि मान ऋणात्मक (< 0) हो जाता है तो प्रक्रिया को ब्लॉक करता है",
        "B": "मान बढ़ाता है",
        "C": "1 पर सेट करता है",
        "D": "नष्ट करता है"
      },
      "correctAnswer": "A",
      "explanation": "P() (proberen / wait): S = S - 1; if S < 0, suspend calling process on semaphore queue.",
      "explanation_hi": "wait (P) ऑपरेशन सेमाफोर मान को 1 घटाता है और शून्य से कम होने पर प्रोसेस को रोक देता है।"
    },
    {
      "id": 32,
      "questionNumber": 32,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What operation does the 'signal()' or 'V()' primitive perform on a semaphore?",
      "question_hi": "सेमाफोर पर 'signal()' या 'V()' प्रिमिटिव क्या ऑपरेशन करता है?",
      "options": {
        "A": "Increments the semaphore value; wakes up a blocked process if any are waiting",
        "B": "Decrements the value",
        "C": "Sets value to zero",
        "D": "Terminates the calling process"
      },
      "options_hi": {
        "A": "सेमाफोर के मान को बढ़ाता है; यदि कोई प्रक्रिया कतार में प्रतीक्षारत है तो उसे जगाता है",
        "B": "मान घटाता है",
        "C": "शून्य करता है",
        "D": "प्रोसेस समाप्त करता है"
      },
      "correctAnswer": "A",
      "explanation": "V() (verhogen / signal): S = S + 1; if S <= 0, wake up one blocked process from the semaphore wait queue.",
      "explanation_hi": "signal (V) ऑपरेशन मान को 1 बढ़ाता है और रुकी हुई प्रोसेस को जागृत करता है।"
    },
    {
      "id": 33,
      "questionNumber": 33,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is 'Internal Fragmentation' in memory management?",
      "question_hi": "मेमोरी प्रबंधन में 'आंतरिक विखंडन' (Internal Fragmentation) क्या है?",
      "options": {
        "A": "Unused allocated memory space remaining inside a partition or page frame because the process is smaller than the allocated block",
        "B": "Unallocated scattered holes between processes",
        "C": "Hard disk sector wear",
        "D": "Virtual page thrashing"
      },
      "options_hi": {
        "A": "किसी पार्टीशन या पेज फ्रेम के अंदर अप्रयुक्त बची हुई जगह क्योंकि प्रक्रिया आवंटित ब्लॉक से छोटी है",
        "B": "बाहरी खाली छेद",
        "C": "डिस्क खराबी",
        "D": "थ्रैशिंग"
      },
      "correctAnswer": "A",
      "explanation": "Internal fragmentation occurs when fixed-sized blocks (e.g., 4KB pages) are allocated to processes requesting less memory, leaving wasted interior slack.",
      "explanation_hi": "जब आवंटित ब्लॉक प्रोसेस के आकार से बड़ा होता है, तो ब्लॉक के अंदर बची जगह आंतरिक विखंडन कहलाती है।"
    },
    {
      "id": 34,
      "questionNumber": 34,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is 'External Fragmentation', and how can it be eliminated in contiguous memory allocation?",
      "question_hi": "'बाहरी विखंडन' (External Fragmentation) क्या है और सन्निहित आवंटन में इसे कैसे समाप्त किया जाता है?",
      "options": {
        "A": "Total free memory is sufficient to satisfy a request, but it is split into non-contiguous small fragments; solved by Compaction or Paging",
        "B": "Space wasted inside a page",
        "C": "Cache line conflict",
        "D": "Buffer overflow"
      },
      "options_hi": {
        "A": "कुल खाली मेमोरी पर्याप्त है लेकिन वह छोटे-छोटे बिखरे टुकड़ों में बंटी है; इसे कॉम्पेक्शन या पेजिंग द्वारा हल किया जाता है",
        "B": "पेज के अंदर बर्बादी",
        "C": "कैश संघर्ष",
        "D": "बफर ओवरफ्लो"
      },
      "correctAnswer": "A",
      "explanation": "External fragmentation occurs when dynamic allocation leaves scattered free holes. Compaction (shuffling memory) or non-contiguous paging eliminates it.",
      "explanation_hi": "बाहरी विखंडन में खाली जगह बिखरी होती है। इसे कॉम्पेक्शन (मेमोरी रीलोकेशन) द्वारा ठीक किया जाता है।"
    },
    {
      "id": 35,
      "questionNumber": 35,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In paging systems, what is the formula to compute the Physical Address given a logical address divided into Page Number (p) and Offset (d)?",
      "question_hi": "पेजिंग सिस्टम में, पेज नंबर (p) और ऑफसेट (d) में विभाजित लॉजिकल एड्रेस से भौतिक पता (Physical Address) निकालने का सूत्र क्या है?",
      "options": {
        "A": "Physical Address = (Frame Number f from Page Table) * Frame Size + Offset d",
        "B": "Physical Address = Page Number * Page Size",
        "C": "Physical Address = Offset * Frame Size",
        "D": "Physical Address = Page Table Base + Offset"
      },
      "options_hi": {
        "A": "भौतिक पता = (पेज टेबल से प्राप्त फ्रेम नंबर f) * फ्रेम साइज + ऑफसेट d",
        "B": "पेज नंबर * साइज",
        "C": "ऑफसेट * साइज",
        "D": "बेस + ऑफसेट"
      },
      "correctAnswer": "A",
      "explanation": "The MMU looks up frame f for page p, then appends or computes Physical Address = f * Frame_Size + d.",
      "explanation_hi": "पेज नंबर p से फ्रेम f प्राप्त कर भौतिक पता = f * फ्रेम आकार + d निकाला जाता है।"
    },
    {
      "id": 36,
      "questionNumber": 36,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In JavaScript, what is a 'Closure'?",
      "question_hi": "जावास्क्रिप्ट में 'क्लोज़र' (Closure) क्या है?",
      "options": {
        "A": "A function bundled together with references to its surrounding lexical environment (access to outer variables even after the outer function has returned)",
        "B": "A function that terminates the browser tab",
        "C": "A method to close database connections",
        "D": "A syntax error"
      },
      "options_hi": {
        "A": "अपने बाहरी लेक्सिकल वातावरण के संदर्भों के साथ बंडल किया गया फ़ंक्शन (बाहरी फ़ंक्शन समाप्त होने के बाद भी उसके चरों तक पहुँच)",
        "B": "टैब बंद करने वाला फंक्शन",
        "C": "डेटाबेस बंद करना",
        "D": "सिंटैक्स त्रुटि"
      },
      "correctAnswer": "A",
      "explanation": "Closures allow inner functions to retain access to variables declared in an enclosing scope even after outer execution completes.",
      "explanation_hi": "क्लोज़र आंतरिक फंक्शन को बाहरी फंक्शन के निष्पादन के बाद भी उसके वेरिएबल्स याद रखने की सुविधा देता है।"
    },
    {
      "id": 37,
      "questionNumber": 37,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is 'Event Bubbling' in the HTML Document Object Model (DOM)?",
      "question_hi": "HTML डॉक्यूमेंट ऑब्जेक्ट मॉडल (DOM) में 'इवेंट बबलिंग' (Event Bubbling) क्या है?",
      "options": {
        "A": "The event starts from the innermost target element and propagates upwards through its parent ancestor nodes in the DOM tree",
        "B": "The event starts at window and goes downwards (capturing)",
        "C": "Events running concurrently in Web Workers",
        "D": "Memory leaking in event loops"
      },
      "options_hi": {
        "A": "इवेंट सबसे आंतरिक लक्षित तत्व से शुरू होता है और DOM ट्री में अपने पैरेंट पूर्वज नोड्स के माध्यम से ऊपर की ओर फैलता है",
        "B": "ऊपर से नीचे जाना (Capturing)",
        "C": "वेब वर्कर",
        "D": "मेमोरी लीक"
      },
      "correctAnswer": "A",
      "explanation": "In event bubbling, an event triggers on the deepest child target and propagates up to the document root unless event.stopPropagation() is called.",
      "explanation_hi": "इवेंट बबलिंग में इवेंट सबसे निचले नोड से ऊपर की ओर पैरेंट नोड्स की तरफ उठता है।"
    },
    {
      "id": 38,
      "questionNumber": 38,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary difference between a 'Well-Formed' XML document and a 'Valid' XML document?",
      "question_hi": "एक 'वेल-फॉर्मेड' (Well-Formed) XML दस्तावेज़ और एक 'वैलिड' (Valid) XML दस्तावेज़ के बीच मुख्य अंतर क्या है?",
      "options": {
        "A": "Well-Formed obeys all general XML syntax rules (closed tags, single root); Valid additionally conforms strictly to a defined DTD or XML Schema (XSD)",
        "B": "Valid documents do not need closing tags",
        "C": "Well-formed documents require DTD always",
        "D": "They are synonymous"
      },
      "options_hi": {
        "A": "वेल-फॉर्मेड सामान्य XML सिंटैक्स नियमों का पालन करता है; वैलिड इसके अतिरिक्त किसी परिभाषित DTD या XSD स्कीमा का भी पूरी तरह पालन करता है",
        "B": "वैलिड में क्लोजिंग टैग नहीं चाहिए",
        "C": "DTD अनिवार्य",
        "D": "समान"
      },
      "correctAnswer": "A",
      "explanation": "Well-formedness is purely syntactical compliance; validity requires semantic adherence to a Document Type Definition (DTD).",
      "explanation_hi": "वेल-फॉर्मेड केवल सिंटैक्स नियम मानता है, जबकि वैलिड किसी DTD या XSD के नियमों के अनुसार प्रमाणित होता है।"
    },
    {
      "id": 39,
      "questionNumber": 39,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Git version control, what does the command 'git rebase' do compared to 'git merge'?",
      "question_hi": "गिट (Git) वर्जन कंट्रोल में 'git rebase' कमांड 'git merge' की तुलना में क्या करती है?",
      "options": {
        "A": "Replays commits from the current branch onto the tip of the target branch, creating a clean linear commit history without a merge commit",
        "B": "Deletes the target branch permanently",
        "C": "Reverts all working tree changes",
        "D": "Clones a remote repository"
      },
      "options_hi": {
        "A": "मर्ज कमिट बनाए बिना एक साफ लीनियर इतिहास बनाने के लिए वर्तमान शाखा के कमिट्स को लक्षित शाखा की टिप पर पुनः लागू करता है",
        "B": "शाखा मिटाता है",
        "C": "बदलाव उलटता है",
        "D": "क्लोन करता है"
      },
      "correctAnswer": "A",
      "explanation": "Rebase rewrites project history by moving the base of a feature branch onto the upstream master branch, avoiding merge commits.",
      "explanation_hi": "रीबेस कमिट्स को लक्ष्य शाखा के शीर्ष पर स्थानांतरित करके एक सीधा रैखिक इतिहास बनाता है।"
    },
    {
      "id": 40,
      "questionNumber": 40,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Event Loop in Node.js?",
      "question_hi": "Node.js में 'इवेंट लूप' (Event Loop) क्या है?",
      "options": {
        "A": "A single-threaded loop that monitors the call stack and event queues, offloading asynchronous I/O operations to the libuv thread pool",
        "B": "An infinite for-loop that hangs the CPU",
        "C": "A multi-threaded compiler",
        "D": "A database polling mechanism"
      },
      "options_hi": {
        "A": "एक सिंगल-थ्रेडेड लूप जो कॉल स्टैक और इवेंट कतारों की निगरानी करता है और अतुल्यकालिक (Async) I/O कार्यों को libuv को सौंपता है",
        "B": "अनंत लूप",
        "C": "मल्टीथ्रेडेड कंपाइलर",
        "D": "डेटाबेस पोलर"
      },
      "correctAnswer": "A",
      "explanation": "The Node.js event loop enables non-blocking asynchronous concurrency using a single execution thread with libuv worker threads.",
      "explanation_hi": "इवेंट लूप सिंगल थ्रेड पर बिना रुके नॉन-ब्लॉकिंग I/O संचालन को संभव बनाता है।"
    },
    {
      "id": 41,
      "questionNumber": 41,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 1, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 1 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 1 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 42,
      "questionNumber": 42,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 2, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 2 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 2 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 43,
      "questionNumber": 43,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 3, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 3 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 3 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 44,
      "questionNumber": 44,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 4, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 4 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 4 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 45,
      "questionNumber": 45,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 5, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 5 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 5 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 46,
      "questionNumber": 46,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 6, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 6 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 6 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 47,
      "questionNumber": 47,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 7, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 7 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 7 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 48,
      "questionNumber": 48,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 8, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 8 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 8 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 49,
      "questionNumber": 49,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 9, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 9 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 9 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 50,
      "questionNumber": 50,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 10, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 10 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 10 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 51,
      "questionNumber": 51,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 11, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 11 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 11 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 52,
      "questionNumber": 52,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 12, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 12 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 12 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 53,
      "questionNumber": 53,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 13, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 13 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 13 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 54,
      "questionNumber": 54,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 14, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 14 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 14 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 55,
      "questionNumber": 55,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 15, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 15 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 15 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 56,
      "questionNumber": 56,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 16, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 16 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 16 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 57,
      "questionNumber": 57,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 17, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 17 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 17 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 58,
      "questionNumber": 58,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 18, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 18 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 18 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 59,
      "questionNumber": 59,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 19, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 19 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 19 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 60,
      "questionNumber": 60,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 20, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 20 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 20 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 61,
      "questionNumber": 61,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 21, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 21 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 21 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 62,
      "questionNumber": 62,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 22, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 22 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 22 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 63,
      "questionNumber": 63,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 23, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 23 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 23 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 64,
      "questionNumber": 64,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 24, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 24 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 24 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 65,
      "questionNumber": 65,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 25, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 25 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 25 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 66,
      "questionNumber": 66,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 26, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 26 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 26 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 67,
      "questionNumber": 67,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 27, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 27 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 27 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 68,
      "questionNumber": 68,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 28, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 28 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 28 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 69,
      "questionNumber": 69,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 29, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 29 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 29 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 70,
      "questionNumber": 70,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In web application development practice 30, what is the purpose of the HTTP 'GET' request method?",
      "question_hi": "वेब अनुप्रयोग विकास अभ्यास 30 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
      "options": {
        "A": "Requests a representation of the specified resource; should only retrieve data without producing side-effects on the server (safe and idempotent)",
        "B": "Uploads large binary database files to server",
        "C": "Drops user session cookies",
        "D": "Compiles PHP scripts on client machine"
      },
      "options_hi": {
        "A": "निर्दिष्ट संसाधन से डेटा प्राप्त करने का अनुरोध करता है; सर्वर पर कोई दुष्प्रभाव उत्पन्न नहीं करना चाहिए (सुरक्षित और इडेम्पोटेंट)",
        "B": "फाइल अपलोड",
        "C": "कुकी हटाना",
        "D": "क्लाइंट पर कंपाइल"
      },
      "correctAnswer": "A",
      "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 30 validates HTTP RFC compliance.",
      "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
    },
    {
      "id": 71,
      "questionNumber": 71,
      "section": "Computer Science",
      "topic": "Fundamentals of E-Commerce",
      "topic_hi": "ई-कॉमर्स के मूल सिद्धांत (E-Commerce)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In electronic commerce architecture component 51, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 51 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 51 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 52, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 52 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 52 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 53, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 53 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 53 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 54, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 54 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 54 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 55, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 55 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 55 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 56, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 56 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 56 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 57, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 57 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 57 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 58, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 58 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 58 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 59, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 59 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 59 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 60, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 60 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 60 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 61, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 61 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 61 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 62, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 62 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 62 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 63, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 63 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 63 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 64, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 64 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 64 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 65, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 65 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 65 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 66, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 66 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 66 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 67, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 67 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 67 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 68, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 68 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 68 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 69, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 69 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 69 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 70, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 70 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 70 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 71, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 71 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 71 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 72, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 72 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 72 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 73, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 73 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 73 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 74, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 74 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 74 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 75, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 75 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 75 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 76, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 76 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 76 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 77, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 77 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 77 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 78, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 78 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 78 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 79, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 79 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 79 confirms TLS 1.3 protocol standards.",
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
      "question": "In electronic commerce architecture component 80, what is the purpose of Secure Sockets Layer / Transport Layer Security (SSL/TLS)?",
      "question_hi": "इलेक्ट्रॉनिक कॉमर्स आर्किटेक्चर घटक 80 में, SSL/TLS (ट्रांसपोर्ट लेयर सिक्योरिटी) का क्या उद्देश्य है?",
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
      "explanation": "SSL/TLS creates an encrypted session key preventing eavesdropping and tampering of sensitive customer checkout details. Architecture 80 confirms TLS 1.3 protocol standards.",
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
      "question": "In pedagogical practice (Remedial Teaching - Scenario 22), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 22) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
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
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 22 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 102,
      "questionNumber": 102,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 23), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 23) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
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
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 23 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 103,
      "questionNumber": 103,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 24), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 24) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
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
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 24 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 104,
      "questionNumber": 104,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 25), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 25) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
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
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 25 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 105,
      "questionNumber": 105,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Remedial Teaching - Scenario 26), which instructional strategy best reflects this principle: 'Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies'?",
      "question_hi": "शिक्षण अभ्यास (उपचारात्मक शिक्षण - परिदृश्य 26) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण'?",
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
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 26 exemplifies Remedial Teaching: Targeted instructional interventions designed to help students overcome identified learning deficits and master missed competencies.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: पहचानी गई कमियों को दूर करने के लिए दिया जाने वाला विशेष उपचारात्मक शिक्षण।"
    },
    {
      "id": 106,
      "questionNumber": 106,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 1), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 1) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 1 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 107,
      "questionNumber": 107,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 2), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 2) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 2 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 108,
      "questionNumber": 108,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 3), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 3) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 3 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 109,
      "questionNumber": 109,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 4), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 4) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 4 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 110,
      "questionNumber": 110,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 5), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 5) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 5 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 111,
      "questionNumber": 111,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 6), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 6) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 6 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 112,
      "questionNumber": 112,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 7), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 7) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 7 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 113,
      "questionNumber": 113,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 8), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 8) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 8 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 114,
      "questionNumber": 114,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 9), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 9) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 9 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 115,
      "questionNumber": 115,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 10), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 10) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 10 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 116,
      "questionNumber": 116,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 11), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 11) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 11 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 117,
      "questionNumber": 117,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 12), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 12) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 12 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 118,
      "questionNumber": 118,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 13), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 13) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 13 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 119,
      "questionNumber": 119,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 14), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 14) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 14 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 120,
      "questionNumber": 120,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 15), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 15) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 15 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 121,
      "questionNumber": 121,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 16), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 16) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 16 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 122,
      "questionNumber": 122,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 17), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 17) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 17 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 123,
      "questionNumber": 123,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 18), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 18) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 18 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 124,
      "questionNumber": 124,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 19), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 19) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 19 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 125,
      "questionNumber": 125,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 20), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 20) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 20 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 126,
      "questionNumber": 126,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 21), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 21) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 21 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 127,
      "questionNumber": 127,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 22), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 22) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 22 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 128,
      "questionNumber": 128,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 23), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 23) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 23 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 129,
      "questionNumber": 129,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 24), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 24) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 24 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 130,
      "questionNumber": 130,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 25), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
      "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 25) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 25 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
    },
    {
      "id": 131,
      "questionNumber": 131,
      "section": "Other Skills",
      "topic": "General Knowledge & Bihar",
      "topic_hi": "सामान्य ज्ञान एवं बिहार",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which famous district of Bihar is geographically and historically recognized for: 'Houses the Kesaria Stupa, one of the tallest Buddhist stupas in the world' (Context 2)?",
      "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Houses the Kesaria Stupa, one of the tallest Buddhist stupas in the world' (संदर्भ 2)?",
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
      "id": 132,
      "questionNumber": 132,
      "section": "Other Skills",
      "topic": "General Knowledge & Bihar",
      "topic_hi": "सामान्य ज्ञान एवं बिहार",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which famous district of Bihar is geographically and historically recognized for: 'Houses the Kesaria Stupa, one of the tallest Buddhist stupas in the world' (Context 3)?",
      "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Houses the Kesaria Stupa, one of the tallest Buddhist stupas in the world' (संदर्भ 3)?",
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
      "id": 133,
      "questionNumber": 133,
      "section": "Other Skills",
      "topic": "General Knowledge & Bihar",
      "topic_hi": "सामान्य ज्ञान एवं बिहार",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which famous district of Bihar is geographically and historically recognized for: 'Houses the Kesaria Stupa, one of the tallest Buddhist stupas in the world' (Context 4)?",
      "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Houses the Kesaria Stupa, one of the tallest Buddhist stupas in the world' (संदर्भ 4)?",
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
      "id": 134,
      "questionNumber": 134,
      "section": "Other Skills",
      "topic": "General Knowledge & Bihar",
      "topic_hi": "सामान्य ज्ञान एवं बिहार",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which famous district of Bihar is geographically and historically recognized for: 'Contains the Someshwar Fort and Valmiki Tiger Reserve in the foothills of Shivalik Himalayas' (Context 1)?",
      "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Contains the Someshwar Fort and Valmiki Tiger Reserve in the foothills of Shivalik Himalayas' (संदर्भ 1)?",
      "options": {
        "A": "West Champaran",
        "B": "Buxar",
        "C": "Samastipur",
        "D": "Jehanabad"
      },
      "options_hi": {
        "A": "पश्चिम चंपारण",
        "B": "बक्सर",
        "C": "समस्तीपुर",
        "D": "जहानाबाद"
      },
      "correctAnswer": "A",
      "explanation": "West Champaran is renowned across Bihar for: Contains the Someshwar Fort and Valmiki Tiger Reserve in the foothills of Shivalik Himalayas.",
      "explanation_hi": "पश्चिम चंपारण का ऐतिहासिक व भौगोलिक महत्व: Contains the Someshwar Fort and Valmiki Tiger Reserve in the foothills of Shivalik Himalayas।"
    },
    {
      "id": 135,
      "questionNumber": 135,
      "section": "Other Skills",
      "topic": "General Knowledge & Bihar",
      "topic_hi": "सामान्य ज्ञान एवं बिहार",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which famous district of Bihar is geographically and historically recognized for: 'Contains the Someshwar Fort and Valmiki Tiger Reserve in the foothills of Shivalik Himalayas' (Context 2)?",
      "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Contains the Someshwar Fort and Valmiki Tiger Reserve in the foothills of Shivalik Himalayas' (संदर्भ 2)?",
      "options": {
        "A": "West Champaran",
        "B": "Buxar",
        "C": "Samastipur",
        "D": "Jehanabad"
      },
      "options_hi": {
        "A": "पश्चिम चंपारण",
        "B": "बक्सर",
        "C": "समस्तीपुर",
        "D": "जहानाबाद"
      },
      "correctAnswer": "A",
      "explanation": "West Champaran is renowned across Bihar for: Contains the Someshwar Fort and Valmiki Tiger Reserve in the foothills of Shivalik Himalayas.",
      "explanation_hi": "पश्चिम चंपारण का ऐतिहासिक व भौगोलिक महत्व: Contains the Someshwar Fort and Valmiki Tiger Reserve in the foothills of Shivalik Himalayas।"
    },
    {
      "id": 136,
      "questionNumber": 136,
      "section": "Other Skills",
      "topic": "Environmental Science & Ecology",
      "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In environmental ecological science (Bioindicators of Pollution - Case 4), which statement accurately reflects this principle: 'Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities'?",
      "question_hi": "पर्यावरण विज्ञान (प्रदूषण के जैव-सूचक - केस 4) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities'?",
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
      "id": 137,
      "questionNumber": 137,
      "section": "Other Skills",
      "topic": "Environmental Science & Ecology",
      "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In environmental ecological science (Bioindicators of Pollution - Case 5), which statement accurately reflects this principle: 'Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities'?",
      "question_hi": "पर्यावरण विज्ञान (प्रदूषण के जैव-सूचक - केस 5) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities'?",
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
      "id": 138,
      "questionNumber": 138,
      "section": "Other Skills",
      "topic": "Environmental Science & Ecology",
      "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In environmental ecological science (Bioindicators of Pollution - Case 6), which statement accurately reflects this principle: 'Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities'?",
      "question_hi": "पर्यावरण विज्ञान (प्रदूषण के जैव-सूचक - केस 6) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities'?",
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
      "question": "In environmental ecological science (Bioindicators of Pollution - Case 7), which statement accurately reflects this principle: 'Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities'?",
      "question_hi": "पर्यावरण विज्ञान (प्रदूषण के जैव-सूचक - केस 7) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Lichens are sensitive bioindicators of atmospheric sulfur dioxide (SO2) air pollution, disappearing in contaminated cities'?",
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
      "question": "In environmental ecological science (Food Web Complexity - Case 1), which statement accurately reflects this principle: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
      "question_hi": "पर्यावरण विज्ञान (खाद्य जाल जटिलता - केस 1) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
      "options": {
        "A": "Accurately validated by ecological principle: Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction",
        "B": "Ecosystems function without solar energy inputs",
        "C": "Pollution increases biodiversity stability",
        "D": "Energy cycles indefinitely within food chains"
      },
      "options_hi": {
        "A": "पारिस्थितिकी सिद्धांत के अनुसार सही: Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction",
        "B": "सौर ऊर्जा के बिना तंत्र चलता है",
        "C": "प्रदूषण से विविधता बढ़ती है",
        "D": "ऊर्जा कभी नष्ट नहीं होती"
      },
      "correctAnswer": "A",
      "explanation": "Environmental ecology principles: Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction.",
      "explanation_hi": "पर्यावरण विज्ञान का सिद्धांत: Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction।"
    },
    {
      "id": 141,
      "questionNumber": 141,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय योग्यता (Math)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Simple Interest on a principal of Rs. 7,000 at 5% annual interest for 2 years (Problem 46)?",
      "question_hi": "7,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 46)?",
      "options": {
        "A": "Rs. 700",
        "B": "Rs. 750",
        "C": "Rs. 650",
        "D": "Rs. 800"
      },
      "options_hi": {
        "A": "700 रुपये",
        "B": "750 रुपये",
        "C": "650 रुपये",
        "D": "800 रुपये"
      },
      "correctAnswer": "A",
      "explanation": "SI = (P * R * T) / 100 = (7000 * 5 * 2) / 100 = Rs. 700.",
      "explanation_hi": "साधारण ब्याज = (7000 * 5 * 2) / 100 = 700 रुपये।"
    },
    {
      "id": 142,
      "questionNumber": 142,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय योग्यता (Math)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Simple Interest on a principal of Rs. 8,000 at 5% annual interest for 2 years (Problem 47)?",
      "question_hi": "8,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 47)?",
      "options": {
        "A": "Rs. 800",
        "B": "Rs. 850",
        "C": "Rs. 750",
        "D": "Rs. 900"
      },
      "options_hi": {
        "A": "800 रुपये",
        "B": "850 रुपये",
        "C": "750 रुपये",
        "D": "900 रुपये"
      },
      "correctAnswer": "A",
      "explanation": "SI = (P * R * T) / 100 = (8000 * 5 * 2) / 100 = Rs. 800.",
      "explanation_hi": "साधारण ब्याज = (8000 * 5 * 2) / 100 = 800 रुपये।"
    },
    {
      "id": 143,
      "questionNumber": 143,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय योग्यता (Math)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Simple Interest on a principal of Rs. 9,000 at 5% annual interest for 2 years (Problem 48)?",
      "question_hi": "9,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 48)?",
      "options": {
        "A": "Rs. 900",
        "B": "Rs. 950",
        "C": "Rs. 850",
        "D": "Rs. 1,000"
      },
      "options_hi": {
        "A": "900 रुपये",
        "B": "950 रुपये",
        "C": "850 रुपये",
        "D": "1,000 रुपये"
      },
      "correctAnswer": "A",
      "explanation": "SI = (P * R * T) / 100 = (9000 * 5 * 2) / 100 = Rs. 900.",
      "explanation_hi": "साधारण ब्याज = (9000 * 5 * 2) / 100 = 900 रुपये।"
    },
    {
      "id": 144,
      "questionNumber": 144,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय योग्यता (Math)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Simple Interest on a principal of Rs. 10,000 at 5% annual interest for 2 years (Problem 49)?",
      "question_hi": "10,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 49)?",
      "options": {
        "A": "Rs. 1,000",
        "B": "Rs. 1,050",
        "C": "Rs. 950",
        "D": "Rs. 1,100"
      },
      "options_hi": {
        "A": "1,000 रुपये",
        "B": "1,050 रुपये",
        "C": "950 रुपये",
        "D": "1,100 रुपये"
      },
      "correctAnswer": "A",
      "explanation": "SI = (P * R * T) / 100 = (10000 * 5 * 2) / 100 = Rs. 1000.",
      "explanation_hi": "साधारण ब्याज = (10000 * 5 * 2) / 100 = 1000 रुपये।"
    },
    {
      "id": 145,
      "questionNumber": 145,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय योग्यता (Math)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Simple Interest on a principal of Rs. 1,000 at 5% annual interest for 2 years (Problem 50)?",
      "question_hi": "1,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 50)?",
      "options": {
        "A": "Rs. 100",
        "B": "Rs. 150",
        "C": "Rs. 50",
        "D": "Rs. 200"
      },
      "options_hi": {
        "A": "100 रुपये",
        "B": "150 रुपये",
        "C": "50 रुपये",
        "D": "200 रुपये"
      },
      "correctAnswer": "A",
      "explanation": "SI = (P * R * T) / 100 = (1000 * 5 * 2) / 100 = Rs. 100.",
      "explanation_hi": "साधारण ब्याज = (1000 * 5 * 2) / 100 = 100 रुपये।"
    },
    {
      "id": 146,
      "questionNumber": 146,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the next number in the arithmetic progression: 138, 141, 144, ? (Series 46)",
      "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 138, 141, 144, ? (श्रृंखला 46)",
      "options": {
        "A": "147",
        "B": "148",
        "C": "145",
        "D": "150"
      },
      "options_hi": {
        "A": "147",
        "B": "148",
        "C": "145",
        "D": "150"
      },
      "correctAnswer": "A",
      "explanation": "The terms increase by a common difference of +3: 144 + 3 = 147.",
      "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 144 + 3 = 147।"
    },
    {
      "id": 147,
      "questionNumber": 147,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the next number in the arithmetic progression: 141, 144, 147, ? (Series 47)",
      "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 141, 144, 147, ? (श्रृंखला 47)",
      "options": {
        "A": "150",
        "B": "151",
        "C": "148",
        "D": "153"
      },
      "options_hi": {
        "A": "150",
        "B": "151",
        "C": "148",
        "D": "153"
      },
      "correctAnswer": "A",
      "explanation": "The terms increase by a common difference of +3: 147 + 3 = 150.",
      "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 147 + 3 = 150।"
    },
    {
      "id": 148,
      "questionNumber": 148,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the next number in the arithmetic progression: 144, 147, 150, ? (Series 48)",
      "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 144, 147, 150, ? (श्रृंखला 48)",
      "options": {
        "A": "153",
        "B": "154",
        "C": "151",
        "D": "156"
      },
      "options_hi": {
        "A": "153",
        "B": "154",
        "C": "151",
        "D": "156"
      },
      "correctAnswer": "A",
      "explanation": "The terms increase by a common difference of +3: 150 + 3 = 153.",
      "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 150 + 3 = 153।"
    },
    {
      "id": 149,
      "questionNumber": 149,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the next number in the arithmetic progression: 147, 150, 153, ? (Series 49)",
      "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 147, 150, 153, ? (श्रृंखला 49)",
      "options": {
        "A": "156",
        "B": "157",
        "C": "154",
        "D": "159"
      },
      "options_hi": {
        "A": "156",
        "B": "157",
        "C": "154",
        "D": "159"
      },
      "correctAnswer": "A",
      "explanation": "The terms increase by a common difference of +3: 153 + 3 = 156.",
      "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 153 + 3 = 156।"
    },
    {
      "id": 150,
      "questionNumber": 150,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the next number in the arithmetic progression: 150, 153, 156, ? (Series 50)",
      "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 150, 153, 156, ? (श्रृंखला 50)",
      "options": {
        "A": "159",
        "B": "160",
        "C": "157",
        "D": "162"
      },
      "options_hi": {
        "A": "159",
        "B": "160",
        "C": "157",
        "D": "162"
      },
      "correctAnswer": "A",
      "explanation": "The terms increase by a common difference of +3: 156 + 3 = 159.",
      "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 156 + 3 = 159।"
    }
  ]
};
