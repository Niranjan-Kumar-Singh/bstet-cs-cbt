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
        "topic": "Computer Science Fundamentals",
        "topic_hi": "कंप्यूटर विज्ञान (CS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "How many 2-input NAND gates are required to implement a 2-input EXCLUSIVE-OR (XOR) gate?",
        "question_hi": "2-इनपुट एक्सक्लूसिव-OR (XOR) गेट को लागू करने के लिए कितने 2-इनपुट NAND गेट्स की आवश्यकता होती है?",
        "options": {
          "A": "5 NAND gates",
          "B": "4 NAND gates",
          "C": "3 NAND gates",
          "D": "2 NAND gates"
        },
        "options_hi": {
          "A": "5 NAND गेट",
          "B": "4 NAND गेट",
          "C": "3 NAND गेट",
          "D": "2 NAND गेट"
        },
        "correctAnswer": "B",
        "explanation": "A 2-input XOR gate can be synthesized using a minimum of 4 two-input NAND gates.",
        "explanation_hi": "2-इनपुट XOR गेट को न्यूनतम 4 NAND गेटों का उपयोग करके बनाया जाता है।"
      },
      {
        "id": 2,
        "questionNumber": 2,
        "section": "Computer Science",
        "topic": "Computer Science Fundamentals",
        "topic_hi": "कंप्यूटर विज्ञान (CS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "How many 2-input NOR gates are required to implement a 2-input EXCLUSIVE-OR (XOR) gate?",
        "question_hi": "2-इनपुट XOR गेट को लागू करने के लिए कितने 2-इनपुट NOR गेट्स की आवश्यकता होती है?",
        "options": {
          "A": "3 NOR gates",
          "B": "4 NOR gates",
          "C": "5 NOR gates",
          "D": "6 NOR gates"
        },
        "options_hi": {
          "A": "3 NOR गेट",
          "B": "4 NOR गेट",
          "C": "5 NOR गेट",
          "D": "6 NOR गेट"
        },
        "correctAnswer": "C",
        "explanation": "Implementing XOR using universal NOR logic requires 5 two-input NOR gates.",
        "explanation_hi": "NOR गेट्स के उपयोग से XOR गेट बनाने में 5 गेट लगते हैं।"
      },
      {
        "id": 3,
        "questionNumber": 3,
        "section": "Computer Science",
        "topic": "Computer Science Fundamentals",
        "topic_hi": "कंप्यूटर विज्ञान (CS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In a BCD (Binary Coded Decimal) Adder, under what conditions must the correction value binary 0110 (decimal 6) be added to the 4-bit sum?",
        "question_hi": "BCD (बाइनरी कोडेड दशमलव) एडर में, किन परिस्थितियों में 4-बिट योग में बाइनरी 0110 (6) का सुधार जोड़ा जाना चाहिए?",
        "options": {
          "A": "Always on every addition",
          "B": "Only when sum is odd",
          "C": "When sum is less than 5",
          "D": "When the sum exceeds 9 (1001_2) or when an output carry is generated"
        },
        "options_hi": {
          "A": "हमेशा",
          "B": "केवल जब योग विषम हो",
          "C": "जब योग 5 से कम हो",
          "D": "जब योग 9 (1001_2) से अधिक हो या जब कोई आउटपुट कैरी उत्पन्न हो"
        },
        "correctAnswer": "D",
        "explanation": "BCD valid digits range from 0 to 9. Sum > 9 or carry asserts C_out indicates an invalid BCD digit, corrected by adding 6.",
        "explanation_hi": "यदि 4-बिट योग 9 से अधिक हो या कैरी आए तो BCD बनाने के लिए 6 (0110) जोड़ा जाता है।"
      },
      {
        "id": 4,
        "questionNumber": 4,
        "section": "Computer Science",
        "topic": "Computer Science Fundamentals",
        "topic_hi": "कंप्यूटर विज्ञान (CS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In 8085 microprocessor, what is the memory vector address for the highest priority non-maskable interrupt (TRAP)?",
        "question_hi": "8085 माइक्रोप्रोसेसर में, उच्चतम प्राथमिकता वाले नॉन-मास्क करने योग्य इंटरप्ट (TRAP) का मेमोरी वेक्टर पता क्या है?",
        "options": {
          "A": "0024H",
          "B": "003CH",
          "C": "0034H",
          "D": "002CH"
        },
        "options_hi": {
          "A": "0024H",
          "B": "003CH",
          "C": "0034H",
          "D": "002CH"
        },
        "correctAnswer": "A",
        "explanation": "TRAP (RST 4.5) branches to address 4.5 * 8 = 36 = 0024H in hexadecimal.",
        "explanation_hi": "TRAP का वेक्टर पता 4.5 * 8 = 36 = 0024H होता है।"
      },
      {
        "id": 5,
        "questionNumber": 5,
        "section": "Computer Science",
        "topic": "Computer Science Fundamentals",
        "topic_hi": "कंप्यूटर विज्ञान (CS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In 8085 microprocessor, what operation does the instruction 'XCHG' perform?",
        "question_hi": "8085 माइक्रोप्रोसेसर में 'XCHG' निर्देश क्या ऑपरेशन करता है?",
        "options": {
          "A": "Clears H-L register",
          "B": "Exchanges the 16-bit contents of register pair H-L with register pair D-E",
          "C": "Exchanges Stack Pointer with Program Counter",
          "D": "Exchanges Accumulator with B"
        },
        "options_hi": {
          "A": "H-L को खाली करता है",
          "B": "रजिस्टर जोड़ी H-L की 16-बिट सामग्री को रजिस्टर जोड़ी D-E के साथ बदलता है",
          "C": "SP और PC को बदलता है",
          "D": "A और B को बदलता है"
        },
        "correctAnswer": "B",
        "explanation": "XCHG swaps H with D and L with E registers in a single instruction.",
        "explanation_hi": "XCHG निर्देश H-L और D-E रजिस्टर जोड़ों के डेटा की अदला-बदली करता है।"
      },
      {
        "id": 6,
        "questionNumber": 6,
        "section": "Computer Science",
        "topic": "Computer Science Fundamentals",
        "topic_hi": "कंप्यूटर विज्ञान (CS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary difference between Memory-Mapped I/O and Isolated (I/O-Mapped) I/O?",
        "question_hi": "मेमोरी-मैप्ड I/O और पृथक (I/O-मैप्ड) I/O के बीच मुख्य अंतर क्या है?",
        "options": {
          "A": "Memory-mapped I/O uses IN and OUT instructions",
          "B": "Isolated I/O cannot address disks",
          "C": "Memory-Mapped I/O uses the same address space and memory instructions (MOV, LDA) for both memory and I/O devices",
          "D": "Memory-mapped I/O requires separate buses"
        },
        "options_hi": {
          "A": "मेमोरी मैप्ड में IN/OUT प्रयुक्त होते हैं",
          "B": "पृथक I/O डिस्क नहीं चला सकता",
          "C": "मेमोरी-मैप्ड I/O मेमोरी और I/O डिवाइस दोनों के लिए समान पता स्थान और मेमोरी निर्देशों का उपयोग करता है",
          "D": "अलग बस चाहिए"
        },
        "correctAnswer": "C",
        "explanation": "In memory-mapped I/O, I/O ports occupy addresses in the unified memory map, allowing standard memory instructions to control peripherals.",
        "explanation_hi": "मेमोरी-मैप्ड I/O में डिवाइस को सामान्य मेमोरी लोकेशन मानकर सामान्य निर्देशों से नियंत्रित किया जाता है।"
      },
      {
        "id": 7,
        "questionNumber": 7,
        "section": "Computer Science",
        "topic": "Computer Science Fundamentals",
        "topic_hi": "कंप्यूटर विज्ञान (CS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In a RISC (Reduced Instruction Set Computer) architecture, what is a primary design philosophy?",
        "question_hi": "RISC (रिड्यूस्ड इंस्ट्रक्शन सेट कंप्यूटर) आर्किटेक्चर का प्राथमिक डिज़ाइन सिद्धांत क्या है?",
        "options": {
          "A": "Small register files",
          "B": "Complex variable-length instructions with many memory addressing modes",
          "C": "Microprogrammed control units",
          "D": "Simple, fixed-length instructions executed in a single clock cycle with a Load/Store memory architecture"
        },
        "options_hi": {
          "A": "कम रजिस्टर",
          "B": "जटिल चर लंबाई निर्देश",
          "C": "माइक्रोप्रोग्राम्ड यूनिट",
          "D": "लोड/स्टोर मेमोरी मॉडल के साथ एक ही क्लॉक साइकिल में निष्पादित होने वाले सरल, निश्चित लंबाई के निर्देश"
        },
        "correctAnswer": "D",
        "explanation": "RISC emphasizes single-cycle execution, uniform instruction formats, hardwired control, and exclusive Load/Store memory access.",
        "explanation_hi": "RISC में निर्देश सरल, निश्चित लंबाई के तथा लोड/स्टोर सिद्धांत पर आधारित होते हैं।"
      },
      {
        "id": 8,
        "questionNumber": 8,
        "section": "Computer Science",
        "topic": "Computer Science Fundamentals",
        "topic_hi": "कंप्यूटर विज्ञान (CS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the maximum number of nodes in a Binary Tree of height h (where height of root is 0)?",
        "question_hi": "ऊंचाई h वाले बाइनरी ट्री में नोड्स की अधिकतम संख्या क्या होती है (जहां रूट की ऊंचाई 0 है)?",
        "options": {
          "A": "2^(h + 1) - 1",
          "B": "2^h - 1",
          "C": "2^h",
          "D": "2^(h - 1)"
        },
        "options_hi": {
          "A": "2^(h + 1) - 1",
          "B": "2^h - 1",
          "C": "2^h",
          "D": "2^(h - 1)"
        },
        "correctAnswer": "A",
        "explanation": "Sum of geometric series sum_{i=0}^h 2^i = 2^(h+1) - 1. E.g., for h=2: 1 + 2 + 4 = 7 = 2^3 - 1.",
        "explanation_hi": "ऊंचाई h के पूर्ण बाइनरी ट्री में अधिकतम नोड = 2^(h+1) - 1 होते हैं।"
      },
      {
        "id": 9,
        "questionNumber": 9,
        "section": "Computer Science",
        "topic": "Computer Science Fundamentals",
        "topic_hi": "कंप्यूटर विज्ञान (CS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In a Threaded Binary Tree, what replaces the NULL pointers of leaf nodes?",
        "question_hi": "थ्रेडेड बाइनरी ट्री (Threaded Binary Tree) में लीफ नोड्स के NULL पॉइंटर्स को किससे बदला जाता है?",
        "options": {
          "A": "Pointers to the root node",
          "B": "Threads (pointers) pointing to the in-order predecessor or in-order successor",
          "C": "Pointers to the parent node",
          "D": "Random hash values"
        },
        "options_hi": {
          "A": "रूट नोड के पॉइंटर",
          "B": "इन-ऑर्डर पूर्ववर्ती या इन-ऑर्डर परवर्ती नोड्स को इंगित करने वाले थ्रेड्स (पॉइंटर्स)",
          "C": "पैरेंट नोड के पॉइंटर",
          "D": "हैश वैल्यू"
        },
        "correctAnswer": "B",
        "explanation": "Threaded binary trees utilize wasted leaf NULL pointers to point to inorder predecessors and successors, enabling stack-free traversal.",
        "explanation_hi": "थ्रेडेड बाइनरी ट्री में अप्रयुक्त NULL पॉइंटर्स इन-ऑर्डर प्रीसीडर या सक्सेसर की ओर निर्देशित होते हैं।"
      },
      {
        "id": 10,
        "questionNumber": 10,
        "section": "Computer Science",
        "topic": "Computer Science Fundamentals",
        "topic_hi": "कंप्यूटर विज्ञान (CS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the recurrence relation for Strassen's Matrix Multiplication algorithm?",
        "question_hi": "स्ट्रासेन के मैट्रिक्स गुणन एल्गोरिदम का पुनरावृत्ति संबंध (Recurrence Relation) क्या है?",
        "options": {
          "A": "T(n) = 4T(n/2) + O(n)",
          "B": "T(n) = 8T(n/2) + O(n^2)",
          "C": "T(n) = 7T(n/2) + O(n^2)",
          "D": "T(n) = 2T(n/2) + O(n^2)"
        },
        "options_hi": {
          "A": "T(n) = 4T(n/2) + O(n)",
          "B": "T(n) = 8T(n/2) + O(n^2)",
          "C": "T(n) = 7T(n/2) + O(n^2)",
          "D": "T(n) = 2T(n/2) + O(n^2)"
        },
        "correctAnswer": "C",
        "explanation": "Strassen reduces matrix multiplications from 8 to 7 subproblems, yielding T(n) = 7T(n/2) + O(n^2) = O(n^(log_2 7)) = O(n^2.807).",
        "explanation_hi": "स्ट्रासेन एल्गोरिदम 8 के स्थान पर 7 गुणन करता है जिससे T(n) = 7T(n/2) + O(n^2) = O(n^2.81) प्राप्त होता है।"
      },
      {
        "id": 11,
        "questionNumber": 11,
        "section": "Computer Science",
        "topic": "Computer Science Fundamentals",
        "topic_hi": "कंप्यूटर विज्ञान (CS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In the Fractional Knapsack problem, which greedy selection strategy yields the mathematically optimal total value?",
        "question_hi": "भिन्नात्मक नैपसैक समस्या (Fractional Knapsack) में कौन सी लालची रणनीति इष्टतम कुल मूल्य देती है?",
        "options": {
          "A": "Selecting items with maximum absolute value first",
          "B": "Selecting items in random order",
          "C": "Selecting items with minimum weight first",
          "D": "Sorting items by decreasing ratio of Value to Weight (v_i / w_i)"
        },
        "options_hi": {
          "A": "अधिकतम मूल्य वाली वस्तुएं पहले",
          "B": "रैंडम क्रम",
          "C": "न्यूनतम भार वाली पहले",
          "D": "वस्तुओं को मूल्य-प्रति-इकाई-भार अनुपात (v_i / w_i) के घटते क्रम में सॉर्ट करना"
        },
        "correctAnswer": "D",
        "explanation": "Greedy choice selects items with highest value-per-unit-weight density, provably optimal for fractional relaxation.",
        "explanation_hi": "भिन्नात्मक नैपसैक में वस्तुओं को मूल्य/भार (Value/Weight) अनुपात के अनुसार छांटकर भरा जाता है।"
      },
      {
        "id": 12,
        "questionNumber": 12,
        "section": "Computer Science",
        "topic": "Computer Science Fundamentals",
        "topic_hi": "कंप्यूटर विज्ञान (CS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What synchronization primitive combines mutual exclusion with condition synchronization inside a high-level programming language construct?",
        "question_hi": "उच्च स्तरीय भाषा में परस्पर अपवर्जन और स्थिति सिंक्रोनाइज़ेशन को संयोजित करने वाला प्रिमिटिव कौन सा है?",
        "options": {
          "A": "Monitor",
          "B": "Spinlock",
          "C": "Counting Semaphore",
          "D": "Pipe"
        },
        "options_hi": {
          "A": "मॉनिटर (Monitor)",
          "B": "स्पिनलॉक",
          "C": "काउंटिंग सेमाफोर",
          "D": "पाइप"
        },
        "correctAnswer": "A",
        "explanation": "A Monitor encapsulates shared data, procedures, and condition variables, guaranteeing that only one process is active inside the monitor at any time.",
        "explanation_hi": "मॉनिटर भाषा स्तर का कंस्ट्रक्ट है जिसमें एक समय में केवल एक प्रक्रिया प्रवेश कर सकती है।"
      },
      {
        "id": 13,
        "questionNumber": 13,
        "section": "Computer Science",
        "topic": "Computer Science Fundamentals",
        "topic_hi": "कंप्यूटर विज्ञान (CS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is a 'Spinlock', and in what environment is it most effective?",
        "question_hi": "'स्पिनलॉक' (Spinlock) क्या है, और यह किस वातावरण में सबसे प्रभावी है?",
        "options": {
          "A": "A deadlock detection algorithm",
          "B": "A lock where a thread loops repeatedly ('busy waits') checking for lock availability; effective on multiprocessor systems for very short wait durations",
          "C": "A lock for single-core CPUs only",
          "D": "A disk block lock"
        },
        "options_hi": {
          "A": "डेडलॉक चेकर",
          "B": "एक लॉक जिसमें थ्रेड लॉक मिलने तक व्यस्त प्रतीक्षा (Busy Wait) लूप चलाता है; मल्टीप्रोसेसर में अल्पकालिक प्रतीक्षा के लिए प्रभावी",
          "C": "सिंगल कोर लॉक",
          "D": "डिस्क लॉक"
        },
        "correctAnswer": "B",
        "explanation": "Spinlocks avoid context switch overhead when waiting time is expected to be less than the cost of two context switches on multiprocessor machines.",
        "explanation_hi": "स्पिनलॉक में थ्रेड सोता नहीं बल्कि लूप चलाकर इंतज़ार करता है, जो मल्टीकोर पर छोटे समय के लिए तेज़ होता है।"
      },
      {
        "id": 14,
        "questionNumber": 14,
        "section": "Computer Science",
        "topic": "Computer Science Fundamentals",
        "topic_hi": "कंप्यूटर विज्ञान (CS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the 'Working Set Model' in operating systems used for?",
        "question_hi": "ऑपरेटिंग सिस्टम में 'वर्किंग सेट मॉडल' (Working Set Model) का उपयोग किस लिए किया जाता है?",
        "options": {
          "A": "Allocates file descriptors",
          "B": "Schedules CPU tasks",
          "C": "Estimates the set of pages an active process is currently referencing to prevent thrashing",
          "D": "Measures disk access speed"
        },
        "options_hi": {
          "A": "फाइल डिस्क्रिप्टर",
          "B": "टास्क शेड्यूलिंग",
          "C": "थ्रैशिंग रोकने के लिए किसी प्रक्रिया द्वारा संदर्भित सक्रिय पेजों के सेट का अनुमान लगाता है",
          "D": "डिस्क स्पीड"
        },
        "correctAnswer": "C",
        "explanation": "Denning's working-set model defines W(t, Delta) as the pages referenced in the last Delta time units; allocating the working set prevents thrashing.",
        "explanation_hi": "वर्किंग सेट मॉडल प्रोसेस के हालिया संदर्भित पेजों को ट्रैक कर थ्रैशिंग को रोकता है।"
      },
      {
        "id": 15,
        "questionNumber": 15,
        "section": "Computer Science",
        "topic": "Computer Science Fundamentals",
        "topic_hi": "कंप्यूटर विज्ञान (CS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary advantage of the Indexed File Allocation method over Contiguous Allocation?",
        "question_hi": "कंटीगुअस (सन्निहित) आवंटन की तुलना में इंडेक्सड फ़ाइल आवंटन (Indexed File Allocation) का प्राथमिक लाभ क्या है?",
        "options": {
          "A": "Only allows sequential access",
          "B": "Requires no index overhead",
          "C": "Stores entire file in one block",
          "D": "Eliminates external fragmentation and supports fast direct/random access via an index block"
        },
        "options_hi": {
          "A": "केवल अनुक्रमिक एक्सेस",
          "B": "कोई ओवरहेड नहीं",
          "C": "एक ब्लॉक में पूरी फाइल",
          "D": "बाहरी विखंडन को समाप्त करता है और इंडेक्स ब्लॉक के माध्यम से तेज़ रैंडम एक्सेस का समर्थन करता है"
        },
        "correctAnswer": "D",
        "explanation": "Indexed allocation brings all file pointers together into an index block, avoiding external fragmentation while maintaining random access.",
        "explanation_hi": "इंडेक्सड आवंटन सभी डेटा ब्लॉकों के पते एक इंडेक्स ब्लॉक में रखकर तेज़ डायरेक्ट एक्सेस देता है।"
      },
      {
        "id": 16,
        "questionNumber": 16,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which fundamental logic gate operates according to the truth rule: 'Output is 0 (LOW) if and only if ALL inputs are 1 (HIGH)'?",
        "question_hi": "कौन सा लॉजिक गेट इस सत्यता नियम के अनुसार कार्य करता है: 'आउटपुट 0 केवल तभी होता है जब सभी इनपुट 1 हों'?",
        "options": {
          "A": "NAND gate",
          "B": "AND gate",
          "C": "OR gate",
          "D": "Inverter"
        },
        "options_hi": {
          "A": "नैन्ड (NAND) गेट",
          "B": "AND गेट",
          "C": "OR गेट",
          "D": "नॉट गेट"
        },
        "correctAnswer": "A",
        "explanation": "Definition matches the NAND gate. Output is 0 (LOW) if and only if ALL inputs are 1 (HIGH).",
        "explanation_hi": "यह नैन्ड (NAND) गेट की मानक सत्यता सारणी का नियम है। आउटपुट 0 केवल तभी होता है जब सभी इनपुट 1 हों।"
      },
      {
        "id": 17,
        "questionNumber": 17,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "topic_hi": "ऑपरेटिंग सिस्टम",
        "marks": 1,
        "negativeMarks": 0,
        "question": "How does the hardware 'Test-and-Set' atomic instruction ensure mutual exclusion in multi-threaded programming?",
        "question_hi": "हार्डवेयर 'टेस्ट-एंड-सेट' (Test-and-Set) एटॉमिक निर्देश मल्टी-थ्रेडेड प्रोग्रामिंग में म्युचुअल एक्सक्लूजन कैसे सुनिश्चित करता है?",
        "options": {
          "A": "It verifies the CRC of shared memory",
          "B": "It reads the current value of a memory flag and sets it to 1 as a single uninterruptible atomic memory cycle",
          "C": "It pauses the system timer interrupt",
          "D": "It checks whether a thread has exceeded its stack size"
        },
        "options_hi": {
          "A": "यह साझा मेमोरी के CRC को सत्यापित करता है",
          "B": "यह मेमोरी फ्लैग के वर्तमान मान को पढ़ता है और एक एकल निर्बाध परमाणु मेमोरी चक्र के रूप में इसे 1 पर सेट करता है",
          "C": "यह सिस्टम टाइमर इंटरप्ट को रोकता है",
          "D": "यह जांचता है कि क्या थ्रेड अपने स्टैक आकार से अधिक हो गया है"
        },
        "correctAnswer": "B",
        "explanation": "Test-and-Set is executed atomically by hardware: it returns the old value of a memory location and sets it to true (1) in one indivisible operation, preventing race conditions when acquiring a lock.",
        "explanation_hi": "Test-and-Set एक एटॉमिक (अविभाज्य) हार्डवेयर निर्देश है जो एक ही क्लॉक चक्र में मेमोरी स्थान के पुराने मान को पढ़कर उसे 1 सेट कर देता है, जिससे दो थ्रेड एक साथ लॉक प्राप्त नहीं कर सकते।"
      },
      {
        "id": 18,
        "questionNumber": 18,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "topic_hi": "ऑपरेटिंग सिस्टम",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary advantage of the Circular SCAN (C-SCAN) disk scheduling algorithm over the standard SCAN algorithm?",
        "question_hi": "मानक SCAN एल्गोरिदम की तुलना में सर्कुलर SCAN (C-SCAN) डिस्क शेड्यूलिंग एल्गोरिदम का प्राथमिक लाभ क्या है?",
        "options": {
          "A": "It eliminates disk head seek time completely",
          "B": "It services requests only during the return stroke",
          "C": "It provides a more uniform and fair waiting time across all disk cylinders",
          "D": "It requires less RAM buffer memory"
        },
        "options_hi": {
          "A": "यह डिस्क हेड सीक टाइम को पूरी तरह से समाप्त करता है",
          "B": "यह केवल वापसी स्ट्रोक के दौरान अनुरोधों को पूरा करता है",
          "C": "यह सभी डिस्क सिलेंडरों में अधिक समान और निष्पक्ष प्रतीक्षा समय प्रदान करता है",
          "D": "इसे कम रैम बफर मेमोरी की आवश्यकता होती है"
        },
        "correctAnswer": "C",
        "explanation": "Standard SCAN provides unequal service: cylinders near the middle get serviced twice per cycle, while cylinders at the edges wait the longest. C-SCAN scans in only one direction and returns directly to the start without servicing, providing uniform wait time.",
        "explanation_hi": "SCAN में किनारों के सिलेंडरों को लंबा इंतजार करना पड़ता है। C-SCAN केवल एक दिशा में अनुरोध पूरे करता है और वापस आते समय कोई अनुरोध नहीं लेता, जिससे डिस्क के सभी सिलेंडरों को समान और निष्पक्ष प्रतीक्षा समय मिलता है।"
      },
      {
        "id": 19,
        "questionNumber": 19,
        "section": "Computer Science",
        "topic": "Algorithms",
        "topic_hi": "एल्गोरिदम",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In what order are nodes visited during an in-order depth-first traversal of a Binary Search Tree (BST)?",
        "question_hi": "बाइनरी सर्च ट्री (BST) के इन-ऑर्डर (In-order) ट्रैवर्सल के दौरान नोड्स को किस क्रम में देखा जाता है?",
        "options": {
          "A": "Breadth-first level order",
          "B": "Root node first, followed by left and right subtrees",
          "C": "Descending reverse sorted order",
          "D": "Strictly non-decreasing sorted order of keys"
        },
        "options_hi": {
          "A": "ब्रेड्थ-फर्स्ट स्तर क्रम में",
          "B": "पहले रूट नोड, उसके बाद बाएं और दाएं सबट्री",
          "C": "अवरोही उल्टे सॉर्टेड क्रम में",
          "D": "कुंजियों के पूर्णतः गैर-घटते (आरोही) सॉर्टेड क्रम में"
        },
        "correctAnswer": "D",
        "explanation": "In-order traversal visits Left Subtree -> Root -> Right Subtree. Due to the BST property (Left < Root < Right), this traversal always outputs the stored keys in non-decreasing (ascending) sorted order.",
        "explanation_hi": "इन-ऑर्डर ट्रैवर्सल (बायां सबट्री -> रूट -> दायां सबट्री) बाइनरी सर्च ट्री (BST) के तत्वों को हमेशा आरोही (Ascending / Sorted) क्रम में प्रदर्शित करता है।"
      },
      {
        "id": 20,
        "questionNumber": 20,
        "section": "Computer Science",
        "topic": "Computer Organization & Architecture",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the dedicated role of the 'Program Counter (PC)' in central processor architecture?",
        "question_hi": "सीपीयू आर्किटेक्चर में 'प्रोग्राम काउंटर (PC)' का विशिष्ट कार्य क्या है?",
        "options": {
          "A": "Holds the memory address of the next instruction to be fetched and executed",
          "B": "Buffers peripheral video output",
          "C": "Acts as virtual swap partition",
          "D": "Manages network packets"
        },
        "options_hi": {
          "A": "Holds the memory address of the next instruction to be fetched and executed",
          "B": "वीडियो बफर",
          "C": "स्वैप पार्टीशन",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "The Program Counter (PC) is a specialized CPU register whose primary function is: Holds the memory address of the next instruction to be fetched and executed.",
        "explanation_hi": "प्रोग्राम काउंटर (PC) का मुख्य कार्य: Holds the memory address of the next instruction to be fetched and executed।"
      },
      {
        "id": 21,
        "questionNumber": 21,
        "section": "Computer Science",
        "topic": "Computer Organization & Architecture",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the dedicated role of the 'Instruction Register (IR)' in central processor architecture?",
        "question_hi": "सीपीयू आर्किटेक्चर में 'निर्देश रजिस्टर (IR)' का विशिष्ट कार्य क्या है?",
        "options": {
          "A": "Buffers peripheral video output",
          "B": "Holds the binary instruction word currently being decoded and executed",
          "C": "Acts as virtual swap partition",
          "D": "Manages network packets"
        },
        "options_hi": {
          "A": "वीडियो बफर",
          "B": "Holds the binary instruction word currently being decoded and executed",
          "C": "स्वैप पार्टीशन",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "B",
        "explanation": "The Instruction Register (IR) is a specialized CPU register whose primary function is: Holds the binary instruction word currently being decoded and executed.",
        "explanation_hi": "निर्देश रजिस्टर (IR) का मुख्य कार्य: Holds the binary instruction word currently being decoded and executed।"
      },
      {
        "id": 22,
        "questionNumber": 22,
        "section": "Computer Science",
        "topic": "Computer Organization & Architecture",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the dedicated role of the 'Stack Pointer (SP)' in central processor architecture?",
        "question_hi": "सीपीयू आर्किटेक्चर में 'स्टैक पॉइंटर (SP)' का विशिष्ट कार्य क्या है?",
        "options": {
          "A": "Acts as virtual swap partition",
          "B": "Buffers peripheral video output",
          "C": "Holds the memory address of the top of the execution call stack",
          "D": "Manages network packets"
        },
        "options_hi": {
          "A": "स्वैप पार्टीशन",
          "B": "वीडियो बफर",
          "C": "Holds the memory address of the top of the execution call stack",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "C",
        "explanation": "The Stack Pointer (SP) is a specialized CPU register whose primary function is: Holds the memory address of the top of the execution call stack.",
        "explanation_hi": "स्टैक पॉइंटर (SP) का मुख्य कार्य: Holds the memory address of the top of the execution call stack।"
      },
      {
        "id": 23,
        "questionNumber": 23,
        "section": "Computer Science",
        "topic": "Computer Organization & Architecture",
        "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the dedicated role of the 'Flags / Status Register' in central processor architecture?",
        "question_hi": "सीपीयू आर्किटेक्चर में 'फ्लैग / स्टेटस रजिस्टर' का विशिष्ट कार्य क्या है?",
        "options": {
          "A": "Buffers peripheral video output",
          "B": "Manages network packets",
          "C": "Acts as virtual swap partition",
          "D": "Contains condition bits (Zero, Sign, Carry, Overflow, Parity) indicating ALU result status"
        },
        "options_hi": {
          "A": "वीडियो बफर",
          "B": "नेटवर्क पैकेट",
          "C": "स्वैप पार्टीशन",
          "D": "Contains condition bits (Zero, Sign, Carry, Overflow, Parity) indicating ALU result status"
        },
        "correctAnswer": "D",
        "explanation": "The Flags / Status Register is a specialized CPU register whose primary function is: Contains condition bits (Zero, Sign, Carry, Overflow, Parity) indicating ALU result status.",
        "explanation_hi": "फ्लैग / स्टेटस रजिस्टर का मुख्य कार्य: Contains condition bits (Zero, Sign, Carry, Overflow, Parity) indicating ALU result status।"
      },
      {
        "id": 24,
        "questionNumber": 24,
        "section": "Computer Science",
        "topic": "Programming and Data Structures",
        "topic_hi": "प्रोग्रामिंग और डेटा संरचनाएं (DSA)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which fundamental data structure is utilized by 'Breadth First Search (BFS)' to explore vertices, and what is its time complexity?",
        "question_hi": "शीर्षों का अन्वेषण करने के लिए 'ब्रेड्थ फर्स्ट सर्च (BFS)' द्वारा किस डेटा संरचना का उपयोग किया जाता है और इसकी समय जटिलता क्या है?",
        "options": {
          "A": "Data structure: Queue (FIFO); Complexity: O(V + E)",
          "B": "Data structure: Priority Queue; Complexity: O(V^2)",
          "C": "Data structure: Binary Heap; Complexity: O(log V)",
          "D": "Data structure: Array; Complexity: O(E^2)"
        },
        "options_hi": {
          "A": "डेटा संरचना: Queue (FIFO); जटिलता: O(V + E)",
          "B": "प्रायोरिटी कतार",
          "C": "बाइनरी हीप",
          "D": "ऐरे"
        },
        "correctAnswer": "A",
        "explanation": "Breadth First Search (BFS) uses a Queue (FIFO) and visits each vertex and edge once, taking O(V + E). Finds the shortest path in unweighted graphs level by level.",
        "explanation_hi": "ब्रेड्थ फर्स्ट सर्च (BFS) Queue (FIFO) का उपयोग करता है और इसकी समय जटिलता O(V + E) होती है। Finds the shortest path in unweighted graphs level by level।"
      },
      {
        "id": 25,
        "questionNumber": 25,
        "section": "Computer Science",
        "topic": "Programming and Data Structures",
        "topic_hi": "प्रोग्रामिंग और डेटा संरचनाएं (DSA)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which fundamental data structure is utilized by 'Depth First Search (DFS)' to explore vertices, and what is its time complexity?",
        "question_hi": "शीर्षों का अन्वेषण करने के लिए 'डेप्थ फर्स्ट सर्च (DFS)' द्वारा किस डेटा संरचना का उपयोग किया जाता है और इसकी समय जटिलता क्या है?",
        "options": {
          "A": "Data structure: Binary Heap; Complexity: O(log V)",
          "B": "Data structure: Stack / Recursion (LIFO); Complexity: O(V + E)",
          "C": "Data structure: Priority Queue; Complexity: O(V^2)",
          "D": "Data structure: Array; Complexity: O(E^2)"
        },
        "options_hi": {
          "A": "बाइनरी हीप",
          "B": "डेटा संरचना: Stack / Recursion (LIFO); जटिलता: O(V + E)",
          "C": "प्रायोरिटी कतार",
          "D": "ऐरे"
        },
        "correctAnswer": "B",
        "explanation": "Depth First Search (DFS) uses a Stack / Recursion (LIFO) and visits each vertex and edge once, taking O(V + E). Explores as deep as possible along each branch before backtracking; used in cycle detection and topological sort.",
        "explanation_hi": "डेप्थ फर्स्ट सर्च (DFS) Stack / Recursion (LIFO) का उपयोग करता है और इसकी समय जटिलता O(V + E) होती है। Explores as deep as possible along each branch before backtracking; used in cycle detection and topological sort।"
      },
      {
        "id": 26,
        "questionNumber": 26,
        "section": "Computer Science",
        "topic": "Algorithms",
        "topic_hi": "एल्गोरिदम (Algorithms)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which canonical computer science operation has a time complexity of O(1) (Constant Time)?",
        "question_hi": "किस मानक कंप्यूटर विज्ञान ऑपरेशन की समय जटिलता O(1) (Constant Time) होती है?",
        "options": {
          "A": "Traversing every pair of vertices in a complete graph",
          "B": "Matrix multiplication using standard 3 loops",
          "C": "Direct array element lookup by index A[i]",
          "D": "Tower of Hanoi moves"
        },
        "options_hi": {
          "A": "सभी शीर्ष युग्म",
          "B": "मैट्रिक्स गुणन",
          "C": "Direct array element lookup by index A[i]",
          "D": "हनोई टॉवर"
        },
        "correctAnswer": "C",
        "explanation": "Direct array element lookup by index A[i] runs in O(1) time asymptotically.",
        "explanation_hi": "Direct array element lookup by index A[i] की समय जटिलता O(1) होती है।"
      },
      {
        "id": 27,
        "questionNumber": 27,
        "section": "Computer Science",
        "topic": "Algorithms",
        "topic_hi": "एल्गोरिदम",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the worst-case time complexity of Dijkstra's single-source shortest path algorithm when implemented with an Adjacency List and a Binary Min-Heap?",
        "question_hi": "एडजेसेंसी लिस्ट और बाइनरी मिन-हीप के साथ लागू किए जाने पर डिजक्स्ट्रा के सबसे छोटे पथ एल्गोरिदम की सबसे खराब स्थिति समय जटिलता क्या है?",
        "options": {
          "A": "O(V^3)",
          "B": "O(V^2)",
          "C": "O(E * V)",
          "D": "O((V + E) log V)"
        },
        "options_hi": {
          "A": "O(V^3)",
          "B": "O(V^2)",
          "C": "O(E * V)",
          "D": "O((V + E) log V)"
        },
        "correctAnswer": "D",
        "explanation": "Extracting min vertex takes O(V log V) total across all vertices, and edge relaxations (Decrease-Key) take O(E log V). Combined running time is O((V + E) log V).",
        "explanation_hi": "बाइनरी मिन-हीप का उपयोग करने पर डिजक्स्ट्रा एल्गोरिदम की समय जटिलता O((V + E) log V) होती है, जहाँ V शीर्षों की संख्या और E किनारों की संख्या है।"
      },
      {
        "id": 28,
        "questionNumber": 28,
        "section": "Computer Science",
        "topic": "Algorithms",
        "topic_hi": "एल्गोरिदम",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the time complexity of solving the Matrix Chain Multiplication problem for n matrices using dynamic programming?",
        "question_hi": "डायनामिक प्रोग्रामिंग का उपयोग करके n मैट्रिक्स के लिए मैट्रिक्स चेन गुणन समस्या को हल करने की समय जटिलता क्या है?",
        "options": {
          "A": "O(n^3)",
          "B": "O(n^2)",
          "C": "O(2^n)",
          "D": "O(n log n)"
        },
        "options_hi": {
          "A": "O(n^3)",
          "B": "O(n^2)",
          "C": "O(2^n)",
          "D": "O(n log n)"
        },
        "correctAnswer": "A",
        "explanation": "The DP table has O(n^2) states (subchain lengths from 2 to n). For each subproblem of length l, testing all k partition points takes O(n) steps, yielding total time O(n^3) and space O(n^2).",
        "explanation_hi": "मैट्रिक्स चेन गुणन में O(n^2) उप-समस्याएं होती हैं और प्रत्येक के विभाजन बिंदु खोजने में O(n) समय लगता है। अतः कुल समय जटिलता O(n^3) होती है।"
      },
      {
        "id": 29,
        "questionNumber": 29,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "topic_hi": "कंप्यूटर नेटवर्क्स",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In distance vector routing protocols (such as RIP), what mechanism is commonly used to prevent two adjacent routers from creating a routing loop by advertising incorrect route costs back to each other?",
        "question_hi": "डिस्टेंस वेक्टर रूटिंग प्रोटोकॉल (जैसे RIP) में, दो आसन्न राउटर्स को एक दूसरे को गलत लागत वाले रूट विज्ञापित करके रूटिंग लूप बनाने से रोकने के लिए आमतौर पर किस तंत्र का उपयोग किया जाता है?",
        "options": {
          "A": "Address Resolution Protocol",
          "B": "Split Horizon with Poison Reverse",
          "C": "Three-way handshake",
          "D": "Sliding Window Protocol"
        },
        "options_hi": {
          "A": "एड्रेस रिज़ॉल्यूशन प्रोटोकॉल",
          "B": "पॉइज़न रिवर्स के साथ स्प्लिट होराइजन (Split Horizon with Poison Reverse)",
          "C": "थ्री-वे हैंडशेक",
          "D": "स्लाइडिंग विंडो प्रोटोकॉल"
        },
        "correctAnswer": "B",
        "explanation": "Split Horizon dictates that a router must never advertise a route back out the same interface from which it learned it. Poison Reverse advertises the route back with metric infinity (16 in RIP), preventing the Count-to-Infinity loop.",
        "explanation_hi": "स्प्लिट होराइजन नियम के अनुसार राउटर जिस इंटरफेस से रूट सीखता है, उस इंटरफेस पर उसे दोबारा विज्ञापित नहीं करता। पॉइज़न रिवर्स उस रूट को अनंत दूरी (मैट्रिक 16) के साथ विज्ञापित करके काउंट-टू-इनफिनिटी लूप को रोकता है।"
      },
      {
        "id": 30,
        "questionNumber": 30,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "topic_hi": "कंप्यूटर नेटवर्क्स",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the theoretical maximum link utilization (efficiency) of the Stop-and-Wait ARQ protocol?",
        "question_hi": "स्टॉप-एंड-वेट ARQ प्रोटोकॉल की सैद्धांतिक अधिकतम लिंक उपयोगिता (दक्षता) क्या है?",
        "options": {
          "A": "2a / (1 + a)",
          "B": "1 / (2a)",
          "C": "1 / (1 + 2a), where a = Propagation Time / Transmission Time",
          "D": "(1 + a) / 2"
        },
        "options_hi": {
          "A": "2a / (1 + a)",
          "B": "1 / (2a)",
          "C": "1 / (1 + 2a), जहां a = प्रोपेगेशन समय / ट्रांसमिशन समय",
          "D": "(1 + a) / 2"
        },
        "correctAnswer": "C",
        "explanation": "Total cycle time for sending 1 frame and receiving ACK = T_tx + 2 * T_prop. Efficiency eta = T_tx / (T_tx + 2 * T_prop) = 1 / (1 + 2a), where a = T_prop / T_tx.",
        "explanation_hi": "स्टॉप-एंड-वेट की दक्षता का सूत्र eta = 1 / (1 + 2a) होता है, जहाँ a = प्रोपेगेशन डिले / ट्रांसमिशन समय (Tp / Tt) है।"
      },
      {
        "id": 31,
        "questionNumber": 31,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "topic_hi": "कंप्यूटर नेटवर्क्स",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What default well-known transport-layer port numbers are used by Secure Shell (SSH) and Simple Mail Transfer Protocol (SMTP) respectively?",
        "question_hi": "सिक्योर शेल (SSH) और सिंपल मेल ट्रांसफर प्रोटोकॉल (SMTP) द्वारा क्रमशः कौन से डिफ़ॉल्ट पोर्ट नंबर उपयोग किए जाते हैं?",
        "options": {
          "A": "SSH: Port 21, SMTP: Port 53",
          "B": "SSH: Port 23, SMTP: Port 80",
          "C": "SSH: Port 443, SMTP: Port 110",
          "D": "SSH: Port 22, SMTP: Port 25"
        },
        "options_hi": {
          "A": "SSH: पोर्ट 21, SMTP: पोर्ट 53",
          "B": "SSH: पोर्ट 23, SMTP: पोर्ट 80",
          "C": "SSH: पोर्ट 443, SMTP: पोर्ट 110",
          "D": "SSH: पोर्ट 22, SMTP: पोर्ट 25"
        },
        "correctAnswer": "D",
        "explanation": "Standard IANA well-known port allocations: SSH uses TCP port 22; Telnet uses 23; SMTP uses TCP port 25; DNS uses port 53; HTTP uses 80; HTTPS uses 443.",
        "explanation_hi": "मानक नेटवर्क पोर्ट: SSH पोर्ट 22 (सुरक्षित रिमोट लॉगिन) का उपयोग करता है और SMTP पोर्ट 25 (ईमेल प्रेषण) का उपयोग करता है।"
      },
      {
        "id": 32,
        "questionNumber": 32,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In operating system process life cycle, what event triggers the state transition 'Running to Ready'?",
        "question_hi": "ऑपरेटिंग सिस्टम प्रोसेस लाइफ साइकिल में, 'रनिंग से रेडी' अवस्था परिवर्तन किस घटना से होता है?",
        "options": {
          "A": "Expiration of the allotted CPU time quantum (preemption)",
          "B": "User logs out",
          "C": "Memory page fault occurs",
          "D": "Compiler finishes lexical analysis"
        },
        "options_hi": {
          "A": "Expiration of the allotted CPU time quantum (preemption)",
          "B": "यूज़र लॉगआउट",
          "C": "पेज फॉल्ट",
          "D": "कंपाइलर समाप्ति"
        },
        "correctAnswer": "A",
        "explanation": "The transition Running to Ready occurs when: Expiration of the allotted CPU time quantum (preemption).",
        "explanation_hi": "रनिंग से रेडी अवस्था परिवर्तन तब होता है जब: Expiration of the allotted CPU time quantum (preemption)।"
      },
      {
        "id": 33,
        "questionNumber": 33,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the definition of a Candidate Key in relational database theory?",
        "question_hi": "रिलेशनल डेटाबेस सिद्धांत में उम्मीदवार कुंजी (Candidate Key) की क्या परिभाषा है?",
        "options": {
          "A": "Any column that contains numeric integer data",
          "B": "A minimal superkey with no redundant attributes (any proper subset is not a superkey)",
          "C": "A key containing foreign key references to other tables",
          "D": "An index created exclusively on text columns"
        },
        "options_hi": {
          "A": "कोई भी कॉलम जिसमें संख्यात्मक पूर्णांक डेटा होता है",
          "B": "बिना किसी निरर्थक विशेषता के एक न्यूनतम सुपरकी (जिसका कोई भी उचित उपसमुच्चय सुपरकी नहीं है)",
          "C": "अन्य तालिकाओं के लिए विदेशी कुंजी संदर्भ रखने वाली कुंजी",
          "D": "विशेष रूप से टेक्स्ट कॉलम पर बनाया गया एक इंडेक्स"
        },
        "correctAnswer": "B",
        "explanation": "A Candidate Key is a minimal superkey: it possesses the uniqueness property (uniquely identifies every tuple in the relation) and the irreducibility property (removing any attribute destroys uniqueness).",
        "explanation_hi": "कैंडिडेट की (उम्मीदवार कुंजी) एक न्यूनतम सुपरकी होती है। यह प्रत्येक रिकॉर्ड को विशिष्ट रूप से पहचानती है और इसमें से किसी भी एट्रिब्यूट को हटाने पर यह विशिष्टता समाप्त हो जाती है।"
      },
      {
        "id": 34,
        "questionNumber": 34,
        "section": "Computer Science",
        "topic": "Database Management Systems",
        "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम",
        "marks": 1,
        "negativeMarks": 0,
        "question": "How can Conflict Serializability of a concurrent database transaction schedule be formally validated?",
        "question_hi": "समवर्ती डेटाबेस लेनदेन अनुसूची की संघर्ष क्रमबद्धता (Conflict Serializability) को औपचारिक रूप से कैसे मान्य किया जा सकता है?",
        "options": {
          "A": "By ensuring all read locks are shared",
          "B": "By verifying that all transactions commit within 1 second",
          "C": "By constructing a precedence (serialization) graph and checking that it contains no directed cycles",
          "D": "By running all transactions on a single CPU core"
        },
        "options_hi": {
          "A": "यह सुनिश्चित करके कि सभी रीड लॉक साझा किए गए हैं",
          "B": "यह सत्यापित करके कि सभी लेनदेन 1 सेकंड के भीतर कमिट होते हैं",
          "C": "एक प्राथमिकता (सीरियलाइजेशन) ग्राफ का निर्माण करके और यह जांचकर कि इसमें कोई निर्देशित चक्र (directed cycles) नहीं हैं",
          "D": "एकल CPU कोर पर सभी लेनदेन चलाकर"
        },
        "correctAnswer": "C",
        "explanation": "A schedule is conflict serializable if and only if its precedence graph (where vertices are transactions and directed edges represent conflicting operations) is acyclic (contains no directed cycles).",
        "explanation_hi": "एक समवर्ती शेड्यूल संघर्ष क्रमबद्ध (Conflict Serializable) होता है यदि और केवल यदि इसका प्रेसीडेंस ग्राफ (Precedence Graph) चक्रीय न हो (कोई Directed Cycle न हो)।"
      },
      {
        "id": 35,
        "questionNumber": 35,
        "section": "Computer Science",
        "topic": "Programming & Data Structures",
        "topic_hi": "प्रोग्रामिंग एवं डेटा संरचनाएं",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In Python, what is the fundamental architectural difference between a List and a Tuple?",
        "question_hi": "पायथन में लिस्ट (List) और टपल (Tuple) के बीच मौलिक संरचनात्मक अंतर क्या है?",
        "options": {
          "A": "Lists can hold only integers; Tuples can hold heterogeneous data",
          "B": "Lists are passed by value; Tuples are passed by reference",
          "C": "Tuples support in-place item assignment; Lists do not",
          "D": "Lists are mutable and dynamically sized; Tuples are immutable and fixed in size"
        },
        "options_hi": {
          "A": "लिस्ट केवल पूर्णांक रख सकती हैं; टपल विषम डेटा रख सकते हैं",
          "B": "लिस्ट मान द्वारा पास की जाती हैं; टपल संदर्भ द्वारा पास किए जाते हैं",
          "C": "टपल इन-प्लेस आइटम असाइनमेंट का समर्थन करते हैं; लिस्ट नहीं करती",
          "D": "लिस्ट परिवर्तनशील (Mutable) और गतिशील आकार की होती हैं; टपल अपरिवर्तनीय (Immutable) और निश्चित आकार के होते हैं"
        },
        "correctAnswer": "D",
        "explanation": "In Python, lists are mutable sequences allowing in-place insertion, deletion, and reassignment, with over-allocation overhead. Tuples are immutable fixed sequences that consume less memory and can be used as dictionary keys.",
        "explanation_hi": "पायथन में लिस्ट म्यूटेबल (परिवर्तनीय) होती हैं जिनमें तत्व जोड़े या बदले जा सकते हैं। टपल इम्यूटेबल (अपरिवर्तनीय) होते हैं, कम मेमोरी लेते हैं और डिक्शनरी की के रूप में प्रयुक्त हो सकते हैं।"
      },
      {
        "id": 36,
        "questionNumber": 36,
        "section": "Computer Science",
        "topic": "Python Programming",
        "topic_hi": "पायथन प्रोग्रामिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In Python, which built-in function returns a tuple containing the quotient and remainder of two numbers?",
        "question_hi": "पायथन में कौन सा अंतर्निहित फ़ंक्शन दो संख्याओं का भागफल और शेषफल युक्त टुपल लौटाता है?",
        "options": {
          "A": "divmod()",
          "B": "modulo()",
          "C": "quorem()",
          "D": "remainder()"
        },
        "options_hi": {
          "A": "divmod()",
          "B": "modulo()",
          "C": "quorem()",
          "D": "remainder()"
        },
        "correctAnswer": "A",
        "explanation": "divmod(a, b) takes two arguments and returns a pair (a // b, a % b).",
        "explanation_hi": "divmod(a, b) फ़ंक्शन दो तर्क लेता है और भागफल तथा शेषफल का टुपल (a // b, a % b) लौटाता है।"
      },
      {
        "id": 37,
        "questionNumber": 37,
        "section": "Computer Science",
        "topic": "Python Programming",
        "topic_hi": "पायथन प्रोग्रामिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the output of the Python expression: [x**2 for x in range(5) if x % 2 == 1]?",
        "question_hi": "पायथन व्यंजक [x**2 for x in range(5) if x % 2 == 1] का आउटपुट क्या होगा?",
        "options": {
          "A": "[1, 9]",
          "B": "[0, 4, 16]",
          "C": "[1, 4, 9]",
          "D": "[1, 9, 25]"
        },
        "options_hi": {
          "A": "[1, 9]",
          "B": "[0, 4, 16]",
          "C": "[1, 4, 9]",
          "D": "[1, 9, 25]"
        },
        "correctAnswer": "B",
        "explanation": "range(5) produces 0, 1, 2, 3, 4. Odd values are 1 and 3. Their squares are 1 and 9.",
        "explanation_hi": "range(5) में विषम संख्याएं 1 और 3 हैं। इनके वर्ग 1 और 9 हैं, अतः परिणाम [1, 9] है।"
      },
      {
        "id": 38,
        "questionNumber": 38,
        "section": "Computer Science",
        "topic": "Python Programming",
        "topic_hi": "पायथन प्रोग्रामिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In Python, which of the following data types is immutable?",
        "question_hi": "पायथन में निम्नलिखित में से कौन सा डेटा प्रकार अपरिवर्तनीय (Immutable) है?",
        "options": {
          "A": "Tuple",
          "B": "List",
          "C": "Dictionary",
          "D": "Set"
        },
        "options_hi": {
          "A": "टुपल (Tuple)",
          "B": "लिस्ट (List)",
          "C": "डिक्शनरी (Dictionary)",
          "D": "सेट (Set)"
        },
        "correctAnswer": "C",
        "explanation": "Tuples, strings, and integers are immutable in Python; lists, dictionaries, and sets are mutable.",
        "explanation_hi": "पायथन में टुपल, स्ट्रिंग और पूर्णांक इम्यूटेबल होते हैं, जबकि लिस्ट, डिक्शनरी और सेट म्यूटेबल होते हैं।"
      },
      {
        "id": 39,
        "questionNumber": 39,
        "section": "Computer Science",
        "topic": "Operating Systems & Linux",
        "topic_hi": "ऑपरेटिंग सिस्टम और लिनक्स",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which Unix command is used to display disk space usage of file systems in a human-readable format?",
        "question_hi": "फ़ाइल सिस्टम के डिस्क स्पेस उपयोग को मानव-पठनीय प्रारूप में प्रदर्शित करने के लिए किस यूनिक्स कमांड का उपयोग किया जाता है?",
        "options": {
          "A": "df -h",
          "B": "du -s",
          "C": "fdisk -l",
          "D": "ls -d"
        },
        "options_hi": {
          "A": "df -h",
          "B": "du -s",
          "C": "fdisk -l",
          "D": "ls -d"
        },
        "correctAnswer": "D",
        "explanation": "df -h (disk free human-readable) displays filesystem usage in MB/GB.",
        "explanation_hi": "df -h कमांड माउंटेड फ़ाइल सिस्टम के डिस्क स्थान को MB या GB जैसे मानव-पठनीय प्रारूप में दिखाता है।"
      },
      {
        "id": 40,
        "questionNumber": 40,
        "section": "Computer Science",
        "topic": "Operating Systems & Linux",
        "topic_hi": "ऑपरेटिंग सिस्टम और लिनक्स",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In Linux file permissions, what numeric permission string corresponds to 'rwxr-xr--'?",
        "question_hi": "लिनक्स फ़ाइल अनुमतियों में, 'rwxr-xr--' किस संख्यात्मक अनुमति कोड से मेल खाता है?",
        "options": {
          "A": "754",
          "B": "755",
          "C": "644",
          "D": "744"
        },
        "options_hi": {
          "A": "754",
          "B": "755",
          "C": "644",
          "D": "744"
        },
        "correctAnswer": "A",
        "explanation": "Owner: rwx = 4+2+1=7; Group: r-x = 4+0+1=5; Others: r-- = 4+0+0=4 => 754.",
        "explanation_hi": "ओनर: rwx = 7, ग्रुप: r-x = 5, अन्य: r-- = 4, अतः संख्यात्मक कोड 754 है।"
      },
      {
        "id": 41,
        "questionNumber": 41,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In TCP/IP networking, which port number is assigned by default to HTTPS traffic?",
        "question_hi": "TCP/IP नेटवर्किंग में, HTTPS ट्रैफ़िक के लिए डिफ़ॉल्ट रूप से कौन सा पोर्ट नंबर असाइन किया गया है?",
        "options": {
          "A": "443",
          "B": "80",
          "C": "8080",
          "D": "21"
        },
        "options_hi": {
          "A": "443",
          "B": "80",
          "C": "8080",
          "D": "21"
        },
        "correctAnswer": "B",
        "explanation": "HTTPS operates on TCP port 443; unencrypted HTTP uses port 80.",
        "explanation_hi": "सुरक्षित वेब ब्राउजिंग (HTTPS) टीसीपी पोर्ट 443 का उपयोग करता है, जबकि HTTP पोर्ट 80 का उपयोग करता है।"
      },
      {
        "id": 42,
        "questionNumber": 42,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the network address for the IP address 192.168.10.45 with a subnet mask of 255.255.255.224 (/27)?",
        "question_hi": "सबनेट मास्क 255.255.255.224 (/27) के साथ IP एड्रेस 192.168.10.45 का नेटवर्क एड्रेस क्या होगा?",
        "options": {
          "A": "192.168.10.32",
          "B": "192.168.10.0",
          "C": "192.168.10.40",
          "D": "192.168.10.48"
        },
        "options_hi": {
          "A": "192.168.10.32",
          "B": "192.168.10.0",
          "C": "192.168.10.40",
          "D": "192.168.10.48"
        },
        "correctAnswer": "C",
        "explanation": "Block size = 256 - 224 = 32. Subnet ranges: .0, .32, .64. Since 45 falls between 32 and 63, network address is 192.168.10.32.",
        "explanation_hi": "ब्लॉक साइज 256 - 224 = 32 है। सबनेट्स 0, 32, 64 हैं। 45 सबनेट 32 में आता है, अतः नेटवर्क पता 192.168.10.32 है।"
      },
      {
        "id": 43,
        "questionNumber": 43,
        "section": "Computer Science",
        "topic": "Software Engineering",
        "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In software testing, what does Cyclomatic Complexity measure?",
        "question_hi": "सॉफ्टवेयर टेस्टिंग में साइक्लोमैटिक जटिलता (Cyclomatic Complexity) क्या मापती है?",
        "options": {
          "A": "The number of linearly independent paths through program source code",
          "B": "The total lines of code in the software",
          "C": "The execution runtime of the program",
          "D": "The memory consumption of functions"
        },
        "options_hi": {
          "A": "प्रोग्राम सोर्स कोड में रैखिक रूप से स्वतंत्र पथों की संख्या",
          "B": "सॉफ्टवेयर में कोड की कुल पंक्तियों की संख्या",
          "C": "प्रोग्राम का निष्पादन रनटाइम",
          "D": "फ़ंक्शंस की मेमोरी खपत"
        },
        "correctAnswer": "D",
        "explanation": "McCabe's Cyclomatic Complexity V(G) = E - N + 2P measures linearly independent control flow paths.",
        "explanation_hi": "मैक्केब की साइक्लोमैटिक जटिलता V(G) = E - N + 2P किसी प्रोग्राम के कंट्रोल फ्लो ग्राफ में स्वतंत्र पथों की संख्या मापती है।"
      },
      {
        "id": 44,
        "questionNumber": 44,
        "section": "Computer Science",
        "topic": "DBMS & SQL",
        "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम (DBMS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In relational database design, a relation is in BCNF (Boyce-Codd Normal Form) if and only if:",
        "question_hi": "रिलेशनल डेटाबेस डिज़ाइन में, कोई संबंध BCNF में केवल और केवल तब होता है जब:",
        "options": {
          "A": "For every non-trivial functional dependency X -> Y, X is a superkey",
          "B": "All multi-valued dependencies are eliminated",
          "C": "Every non-prime attribute is fully functionally dependent on the candidate key",
          "D": "There are no transitive dependencies between non-prime attributes"
        },
        "options_hi": {
          "A": "प्रत्येक गैर-तुच्छ कार्यात्मक निर्भरता X -> Y के लिए, X एक सुपरकी हो",
          "B": "सभी बहु-मूल्यवान निर्भरताएं समाप्त हो जाएं",
          "C": "प्रत्येक गैर-प्रमुख विशेषता उम्मीदवार कुंजी पर पूरी तरह निर्भर हो",
          "D": "गैर-प्रमुख विशेषताओं के बीच कोई सकर्मक निर्भरता न हो"
        },
        "correctAnswer": "A",
        "explanation": "BCNF requires that for every functional dependency X -> Y, the determinant X must be a candidate/superkey.",
        "explanation_hi": "BCNF में प्रत्येक फंक्शनल डिपेंडेंसी X -> Y में निर्धारक X का सुपरकी होना अनिवार्य है।"
      },
      {
        "id": 45,
        "questionNumber": 45,
        "section": "Computer Science",
        "topic": "Web Technologies",
        "topic_hi": "वेब टेक्नोलॉजी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which HTTP status code indicates that a client must authenticate itself to get the requested response?",
        "question_hi": "कौन सा HTTP स्टेटस कोड दर्शाता है कि अनुरोधित प्रतिक्रिया प्राप्त करने के लिए क्लाइंट को प्रमाणित होना अनिवार्य है?",
        "options": {
          "A": "401 Unauthorized",
          "B": "403 Forbidden",
          "C": "404 Not Found",
          "D": "400 Bad Request"
        },
        "options_hi": {
          "A": "401 Unauthorized",
          "B": "403 Forbidden",
          "C": "404 Not Found",
          "D": "400 Bad Request"
        },
        "correctAnswer": "B",
        "explanation": "401 Unauthorized indicates authentication is required; 403 Forbidden indicates the server refuses access even if authenticated.",
        "explanation_hi": "401 Unauthorized इंगित करता है कि प्रमाणीकरण आवश्यक है; 403 Forbidden दर्शाता है कि सर्वर एक्सेस की अनुमति नहीं दे रहा है।"
      },
      {
        "id": 46,
        "questionNumber": 46,
        "section": "Computer Science",
        "topic": "Algorithms",
        "topic_hi": "एल्गोरिदम",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which sorting algorithm has a worst-case time complexity of O(n log n) and is stable?",
        "question_hi": "किस सॉर्टिंग एल्गोरिदम की सबसे खराब स्थिति समय जटिलता O(n log n) है और वह स्थिर (Stable) है?",
        "options": {
          "A": "Merge Sort",
          "B": "Quick Sort",
          "C": "Heap Sort",
          "D": "Selection Sort"
        },
        "options_hi": {
          "A": "मर्ज सॉर्ट (Merge Sort)",
          "B": "क्विक सॉर्ट (Quick Sort)",
          "C": "हीप सॉर्ट (Heap Sort)",
          "D": "सिलेक्शन सॉर्ट"
        },
        "correctAnswer": "C",
        "explanation": "Merge Sort always takes O(n log n) time across best, average, and worst cases, and preserves relative order of equal keys (stable).",
        "explanation_hi": "मर्ज सॉर्ट सर्वश्रेष्ठ, औसत और सबसे खराब सभी स्थितियों में O(n log n) समय लेता है और स्थिर (Stable) रहता है।"
      },
      {
        "id": 47,
        "questionNumber": 47,
        "section": "Computer Science",
        "topic": "Object Oriented Programming",
        "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In object-oriented programming, when a function in a derived class has the same name and parameters as in the base class, it is called:",
        "question_hi": "OOP में जब व्युत्पन्न क्लास में किसी फ़ंक्शन का नाम और पैरामीटर बेस क्लास के समान होते हैं, तो इसे क्या कहा जाता है?",
        "options": {
          "A": "Method Overriding",
          "B": "Method Overloading",
          "C": "Operator Overloading",
          "D": "Function Binding"
        },
        "options_hi": {
          "A": "मेथड ओवरराइडिंग (Method Overriding)",
          "B": "मेथड ओवरलोडिंग",
          "C": "ऑपरेटर ओवरलोडिंग",
          "D": "फ़ंक्शन बाइंडिंग"
        },
        "correctAnswer": "D",
        "explanation": "Method overriding provides a specific implementation of a method already defined in the superclass (runtime polymorphism).",
        "explanation_hi": "मेथड ओवरराइडिंग बेस क्लास के मेथड को चाइल्ड क्लास में नई परिभाषा प्रदान करता है (रन-टाइम पॉलिमॉर्फिज्म)।"
      },
      {
        "id": 48,
        "questionNumber": 48,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "topic_hi": "ऑपरेटिंग सिस्टम",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which CPU scheduling algorithm may lead to process starvation if high priority processes continuously arrive?",
        "question_hi": "यदि उच्च प्राथमिकता वाली प्रक्रियाएं लगातार आती रहें, तो कौन सा CPU शेड्यूलिंग एल्गोरिदम भुखमरी (Starvation) का कारण बन सकता है?",
        "options": {
          "A": "Priority Scheduling",
          "B": "Round Robin",
          "C": "First-Come First-Served",
          "D": "FIFO"
        },
        "options_hi": {
          "A": "प्राथमिकता शेड्यूलिंग (Priority Scheduling)",
          "B": "राउंड रॉबिन",
          "C": "FCFS",
          "D": "FIFO"
        },
        "correctAnswer": "A",
        "explanation": "In priority scheduling, low priority processes may starve if high priority processes continuously arrive (mitigated by aging).",
        "explanation_hi": "प्रायोरिटी शेड्यूलिंग में यदि उच्च प्राथमिकता वाले प्रोसेस लगातार आते रहें तो कम प्राथमिकता वाले प्रोसेस भुखमरी का शिकार हो जाते हैं।"
      },
      {
        "id": 49,
        "questionNumber": 49,
        "section": "Computer Science",
        "topic": "DBMS & SQL",
        "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम (DBMS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In SQL, which aggregate function ignores NULL values when calculating results?",
        "question_hi": "SQL में कौन सा एग्रीगेट फ़ंक्शन परिणाम की गणना करते समय NULL मानों को अनदेखा करता है?",
        "options": {
          "A": "AVG()",
          "B": "COUNT(*)",
          "C": "NVL()",
          "D": "COALESCE()"
        },
        "options_hi": {
          "A": "AVG()",
          "B": "COUNT(*)",
          "C": "NVL()",
          "D": "COALESCE()"
        },
        "correctAnswer": "B",
        "explanation": "Aggregate functions like SUM(), AVG(), MIN(), MAX(), and COUNT(column) ignore NULL values; only COUNT(*) counts all rows.",
        "explanation_hi": "SUM(), AVG(), MIN(), MAX() फ़ंक्शन NULL मानों को छोड़ देते हैं, केवल COUNT(*) सभी पंक्तियों की गणना करता है।"
      },
      {
        "id": 50,
        "questionNumber": 50,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In Computer Networks, what is the size of the MAC (Media Access Control) address?",
        "question_hi": "कंप्यूटर नेटवर्क में MAC (मीडिया एक्सेस कंट्रोल) पते का आकार कितना होता है?",
        "options": {
          "A": "48 bits (6 bytes)",
          "B": "32 bits (4 bytes)",
          "C": "64 bits (8 bytes)",
          "D": "128 bits (16 bytes)"
        },
        "options_hi": {
          "A": "48 बिट्स (6 बाइट्स)",
          "B": "32 बिट्स (4 बाइट्स)",
          "C": "64 बिट्स (8 बाइट्स)",
          "D": "128 बिट्स (16 बाइट्स)"
        },
        "correctAnswer": "C",
        "explanation": "A physical MAC address consists of 48 bits (12 hexadecimal digits), represented as 6 pairs separated by colons or hyphens.",
        "explanation_hi": "भौतिक MAC पता 48 बिट्स (6 बाइट्स) का होता है जिसे हेक्साडेसिमल अंकों में दर्शाया जाता है।"
      },
      {
        "id": 51,
        "questionNumber": 51,
        "section": "Computer Science",
        "topic": "Programming in C++",
        "topic_hi": "C++ प्रोग्रामिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In C++, which operator cannot be overloaded?",
        "question_hi": "C++ में निम्नलिखित में से किस ऑपरेटर को ओवरलोड नहीं किया जा सकता है?",
        "options": {
          "A": "Scope resolution operator (::)",
          "B": "Addition operator (+)",
          "C": "Subscript operator ([])",
          "D": "Function call operator (())"
        },
        "options_hi": {
          "A": "स्कोप रिज़ॉल्यूशन ऑपरेटर (::)",
          "B": "जोड़ ऑपरेटर (+)",
          "C": "सबस्क्रिप्ट ऑपरेटर ([])",
          "D": "फ़ंक्शन कॉल ऑपरेटर (())"
        },
        "correctAnswer": "D",
        "explanation": "Operators that cannot be overloaded in C++ include ::, ., .*, and ?: (ternary conditional).",
        "explanation_hi": "C++ में स्कोप रिज़ॉल्यूशन (::), मेंबर एक्सेस (.), और टर्नरी ऑपरेटर (? :) को ओवरलोड नहीं किया जा सकता।"
      },
      {
        "id": 52,
        "questionNumber": 52,
        "section": "Computer Science",
        "topic": "Data Structures",
        "topic_hi": "डेटा संरचनाएं",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In an AVL tree, what is the maximum allowed difference between the heights of the left and right subtrees of any node?",
        "question_hi": "AVL ट्री में किसी भी नोड के बाएं और दाएं सब-ट्री की ऊंचाइयों के बीच अधिकतम स्वीकार्य अंतर कितना होता है?",
        "options": {
          "A": "1",
          "B": "0",
          "C": "2",
          "D": "3"
        },
        "options_hi": {
          "A": "1",
          "B": "0",
          "C": "2",
          "D": "3"
        },
        "correctAnswer": "A",
        "explanation": "The balance factor of any node in an AVL tree must be -1, 0, or +1. If it exceeds 1, a rotation is required.",
        "explanation_hi": "AVL ट्री में प्रत्येक नोड का बैलेंस फ़ैक्टर -1, 0, या +1 होना चाहिए; अंतर 1 से अधिक नहीं हो सकता।"
      },
      {
        "id": 53,
        "questionNumber": 53,
        "section": "Computer Science",
        "topic": "System Programming",
        "topic_hi": "सिस्टम प्रोग्रामिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary role of the Linker in the program compilation and build process?",
        "question_hi": "प्रोग्राम संकलन और निर्माण प्रक्रिया में लिंकर (Linker) की प्राथमिक भूमिका क्या है?",
        "options": {
          "A": "Combines object files and library routines into a single executable file",
          "B": "Converts high-level source code into assembly language",
          "C": "Loads the executable program into physical memory for execution",
          "D": "Checks source code syntax and semantics"
        },
        "options_hi": {
          "A": "ऑब्जेक्ट फ़ाइलों और लाइब्रेरी रूटीन को एक निष्पादन योग्य फ़ाइल में जोड़ना",
          "B": "उच्च-स्तरीय कोड को असेंबली भाषा में बदलना",
          "C": "एग्जीक्यूटेबल प्रोग्राम को मेमोरी में लोड करना",
          "D": "सिंटैक्स और त्रुटियों की जांच करना"
        },
        "correctAnswer": "B",
        "explanation": "The linker resolves external references across compiled object files and libraries to output the executable binary.",
        "explanation_hi": "लिंकर विभिन्न कंपाइल की गई ऑब्जेक्ट फ़ाइलों और पुस्तकालयों को जोड़कर एक संपूर्ण निष्पादन योग्य फ़ाइल बनाता है।"
      },
      {
        "id": 54,
        "questionNumber": 54,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which layer of the OSI reference model is responsible for routing packets across multiple intermediary networks?",
        "question_hi": "OSI मॉडल की कौन सी परत कई मध्यवर्ती नेटवर्कों में पैकेट को रूट करने के लिए जिम्मेदार है?",
        "options": {
          "A": "Network Layer (Layer 3)",
          "B": "Data Link Layer (Layer 2)",
          "C": "Transport Layer (Layer 4)",
          "D": "Physical Layer (Layer 1)"
        },
        "options_hi": {
          "A": "नेटवर्क परत (Layer 3)",
          "B": "डेटा लिंक परत (Layer 2)",
          "C": "ट्रांसपोर्ट परत (Layer 4)",
          "D": "भौतिक परत (Layer 1)"
        },
        "correctAnswer": "C",
        "explanation": "The Network layer handles logical addressing (IP) and path determination (routing) across heterogeneous networks.",
        "explanation_hi": "नेटवर्क परत (Layer 3) पैकेट्स के तार्किक एड्रेसिंग और रूटिंग के लिए जिम्मेदार है।"
      },
      {
        "id": 55,
        "questionNumber": 55,
        "section": "Computer Science",
        "topic": "DBMS & SQL",
        "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम (DBMS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In relational databases, which of the following is an example of a DDL (Data Definition Language) command?",
        "question_hi": "रिलेशनल डेटाबेस में, निम्नलिखित में से कौन सा DDL कमांड का उदाहरण है?",
        "options": {
          "A": "ALTER TABLE",
          "B": "SELECT",
          "C": "INSERT",
          "D": "UPDATE"
        },
        "options_hi": {
          "A": "ALTER TABLE",
          "B": "SELECT",
          "C": "INSERT",
          "D": "UPDATE"
        },
        "correctAnswer": "D",
        "explanation": "DDL commands define and modify database structures: CREATE, ALTER, DROP, TRUNCATE. INSERT and UPDATE are DML.",
        "explanation_hi": "ALTER, CREATE, DROP DDL कमांड हैं जो स्कीमा संरचना को बदलते हैं, जबकि INSERT और UPDATE DML कमांड हैं।"
      },
      {
        "id": 56,
        "questionNumber": 56,
        "section": "Computer Science",
        "topic": "Python Programming",
        "topic_hi": "पायथन प्रोग्रामिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In Python, what is the output of bool([])?",
        "question_hi": "पायथन में, bool([]) का आउटपुट क्या होता है?",
        "options": {
          "A": "False",
          "B": "True",
          "C": "None",
          "D": "Error"
        },
        "options_hi": {
          "A": "False",
          "B": "True",
          "C": "None",
          "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "In Python, empty sequences (lists, tuples, strings) evaluate to False in a boolean context.",
        "explanation_hi": "पायथन में खाली अनुक्रम (जैसे खाली सूची []) बूलियन संदर्भ में False माने जाते हैं।"
      },
      {
        "id": 57,
        "questionNumber": 57,
        "section": "Computer Science",
        "topic": "DBMS & SQL",
        "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम (DBMS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which concurrency control protocol prevents deadlocks by using timestamps and aborting younger transactions?",
        "question_hi": "कौन सा समवर्ती नियंत्रण प्रोटोकॉल टाइमस्टैम्प का उपयोग करके और नए लेनदेन को निरस्त करके डेडलॉक को रोकता है?",
        "options": {
          "A": "Wait-Die Scheme",
          "B": "Two-Phase Locking (2PL)",
          "C": "Strict 2PL",
          "D": "Validation-based Protocol"
        },
        "options_hi": {
          "A": "Wait-Die योजना",
          "B": "टू-फेज लॉकिंग (2PL)",
          "C": "सख्त 2PL",
          "D": "सत्यापन आधारित प्रोटोकॉल"
        },
        "correctAnswer": "B",
        "explanation": "In Wait-Die, if an older transaction requests a resource held by a younger one, it waits; if younger requests older, it dies.",
        "explanation_hi": "Wait-Die योजना में पुराना लेनदेन प्रतीक्षा कर सकता है जबकि नया लेनदेन निरस्त (Die) हो जाता है।"
      },
      {
        "id": 58,
        "questionNumber": 58,
        "section": "Computer Science",
        "topic": "Web Technologies",
        "topic_hi": "वेब टेक्नोलॉजी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In CSS, which property controls the space between the border of an element and its outer neighboring elements?",
        "question_hi": "CSS में, कौन सा गुण किसी तत्व की सीमा (Border) और उसके बाहरी पड़ोसी तत्वों के बीच की दूरी को नियंत्रित करता है?",
        "options": {
          "A": "margin",
          "B": "padding",
          "C": "outline",
          "D": "spacing"
        },
        "options_hi": {
          "A": "margin",
          "B": "padding",
          "C": "outline",
          "D": "spacing"
        },
        "correctAnswer": "C",
        "explanation": "Margin defines the space outside the border; padding defines space between content and border.",
        "explanation_hi": "मार्जिन (Margin) बॉर्डर के बाहर के स्थान को नियंत्रित करता है, जबकि पैडिंग (Padding) सामग्री और बॉर्डर के बीच होता है।"
      },
      {
        "id": 59,
        "questionNumber": 59,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "topic_hi": "ऑपरेटिंग सिस्टम",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In operating systems, a thread is often termed as a:",
        "question_hi": "ऑपरेटिंग सिस्टम में, थ्रेड (Thread) को अक्सर क्या कहा जाता है?",
        "options": {
          "A": "Lightweight Process (LWP)",
          "B": "Heavyweight Task",
          "C": "Virtual Processor",
          "D": "Microkernel"
        },
        "options_hi": {
          "A": "लाइटवेट प्रोसेस (LWP)",
          "B": "हैवीवेट टास्क",
          "C": "वर्चुअल प्रोसेसर",
          "D": "माइक्रोकर्नेल"
        },
        "correctAnswer": "D",
        "explanation": "A thread shares code and data segment with peer threads within the same process, requiring less overhead than a process.",
        "explanation_hi": "थ्रेड एक लाइटवेट प्रोसेस (LWP) है जो अपने जनक प्रोसेस की मेमोरी और संसाधनों को साझा करता है।"
      },
      {
        "id": 60,
        "questionNumber": 60,
        "section": "Computer Science",
        "topic": "Data Structures",
        "topic_hi": "डेटा संरचनाएं",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which data structure is fundamentally utilized to implement Breadth-First Search (BFS) on graphs?",
        "question_hi": "ग्राफ़ पर ब्रेड्थ-फर्स्ट सर्च (BFS) को लागू करने के लिए मौलिक रूप से किस डेटा संरचना का उपयोग किया जाता है?",
        "options": {
          "A": "Queue",
          "B": "Stack",
          "C": "Priority Queue",
          "D": "Binary Search Tree"
        },
        "options_hi": {
          "A": "क्यू (Queue)",
          "B": "स्टैक (Stack)",
          "C": "प्रायोरिटी क्यू",
          "D": "बाइनरी सर्च ट्री"
        },
        "correctAnswer": "A",
        "explanation": "BFS visits nodes level by level using a FIFO Queue; DFS uses a LIFO Stack.",
        "explanation_hi": "BFS स्तर-दर-स्तर नोड्स का भ्रमण करने के लिए FIFO क्यू (Queue) का उपयोग करता है; DFS स्टैक का उपयोग करता है।"
      },
      {
        "id": 61,
        "questionNumber": 61,
        "section": "Computer Science",
        "topic": "Python Programming",
        "topic_hi": "पायथन प्रोग्रामिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In Python, what is the key difference between the '==' operator and the 'is' operator?",
        "question_hi": "पायथन में, '==' ऑपरेटर और 'is' ऑपरेटर के बीच मुख्य अंतर क्या है?",
        "options": {
          "A": "'==' compares values, while 'is' compares memory object identity",
          "B": "'is' compares values, while '==' compares memory addresses",
          "C": "Both operators are completely identical in all cases",
          "D": "'is' can only be used with numeric integer variables"
        },
        "options_hi": {
          "A": "'==' मानों की तुलना करता है, जबकि 'is' मेमोरी ऑब्जेक्ट पहचान की तुलना करता है",
          "B": "'is' मानों की तुलना करता है, जबकि '==' मेमोरी पते की तुलना करता है",
          "C": "दोनों ऑपरेटर पूरी तरह समान हैं",
          "D": "'is' केवल पूर्णांकों के लिए प्रयुक्त होता है"
        },
        "correctAnswer": "B",
        "explanation": "'==' checks for value equality (invoking __eq__), while 'is' checks if two variables point to the exact same memory address (id(a) == id(b)).",
        "explanation_hi": "'==' दो चरों के मान की समानता की जांच करता है, जबकि 'is' यह जांचता है कि दोनों चर मेमोरी में एक ही ऑब्जेक्ट को संदर्भित कर रहे हैं या नहीं।"
      },
      {
        "id": 62,
        "questionNumber": 62,
        "section": "Computer Science",
        "topic": "Python Programming",
        "topic_hi": "पायथन प्रोग्रामिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In a Python function definition, what does the '*args' syntax allow?",
        "question_hi": "पायथन फ़ंक्शन परिभाषा में, '*args' सिंटैक्स क्या अनुमति देता है?",
        "options": {
          "A": "Passing an arbitrary number of positional arguments as a tuple",
          "B": "Passing keyword arguments as a dictionary",
          "C": "Enforcing strict type checking on parameters",
          "D": "Returning multiple values automatically"
        },
        "options_hi": {
          "A": "टुपल के रूप में मनमानी संख्या में स्थितीय तर्कों को पास करना",
          "B": "डिक्शनरी के रूप में कीवर्ड तर्क पास करना",
          "C": "सख्त प्रकार जांच लागू करना",
          "D": "स्वचालित रूप से कई मान वापस करना"
        },
        "correctAnswer": "C",
        "explanation": "*args captures arbitrary positional arguments into a tuple; **kwargs captures keyword arguments into a dictionary.",
        "explanation_hi": "*args मनमाने स्थितीय तर्कों को एक टुपल में एकत्रित करता है, जबकि **kwargs कीवर्ड तर्कों को डिक्शनरी में लेता है।"
      },
      {
        "id": 63,
        "questionNumber": 63,
        "section": "Computer Science",
        "topic": "Operating Systems & Linux",
        "topic_hi": "ऑपरेटिंग सिस्टम और लिनक्स",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which command-line flag in the Unix 'grep' utility enables case-insensitive pattern matching?",
        "question_hi": "यूनिक्स 'grep' यूटिलिटी में कौन सा कमांड-लाइन फ़्लैग केस-असंवेदनशील पैटर्न मिलान को सक्षम करता है?",
        "options": {
          "A": "-i",
          "B": "-c",
          "C": "-v",
          "D": "-n"
        },
        "options_hi": {
          "A": "-i",
          "B": "-c",
          "C": "-v",
          "D": "-n"
        },
        "correctAnswer": "D",
        "explanation": "grep -i ignores case distinctions; -v inverts matching; -c counts matching lines; -n prints line numbers.",
        "explanation_hi": "grep -i केस-संवेदनशीलता को अनदेखा करता है; -v मिलान न होने वाली पंक्तियाँ दिखाता है।"
      },
      {
        "id": 64,
        "questionNumber": 64,
        "section": "Computer Science",
        "topic": "Operating Systems & Linux",
        "topic_hi": "ऑपरेटिंग सिस्टम और लिनक्स",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In Unix/Linux filesystems, which critical file attribute is NOT stored inside the file's Inode structure?",
        "question_hi": "यूनिक्स/लिनक्स फ़ाइल सिस्टम में, कौन सी महत्वपूर्ण फ़ाइल विशेषता इनोड (Inode) संरचना में संग्रहीत नहीं होती है?",
        "options": {
          "A": "Filename",
          "B": "File size",
          "C": "File owner UID",
          "D": "File permissions"
        },
        "options_hi": {
          "A": "फ़ाइल का नाम (Filename)",
          "B": "फ़ाइल का आकार",
          "C": "फ़ाइल स्वामी UID",
          "D": "फ़ाइल अनुमतियाँ"
        },
        "correctAnswer": "A",
        "explanation": "Inodes store file permissions, size, timestamps, block pointers, and owner UID; the filename is stored in the directory entry.",
        "explanation_hi": "इनोड में फ़ाइल अनुमतियाँ, आकार और ब्लॉक पॉइंटर्स होते हैं; फ़ाइल का नाम केवल डायरेक्टरी एंट्री में संग्रहीत होता है।"
      },
      {
        "id": 65,
        "questionNumber": 65,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "topic_hi": "ऑपरेटिंग सिस्टम",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which deadlock handling technique employs the Banker's Algorithm?",
        "question_hi": "कौन सी डेडलॉक हैंडलिंग तकनीक बैंकर एल्गोरिदम (Banker's Algorithm) का उपयोग करती है?",
        "options": {
          "A": "Deadlock Avoidance",
          "B": "Deadlock Detection",
          "C": "Deadlock Prevention",
          "D": "Deadlock Ignorance"
        },
        "options_hi": {
          "A": "डेडलॉक परिहार (Deadlock Avoidance)",
          "B": "डेडलॉक पहचान",
          "C": "डेडलॉक रोकथाम",
          "D": "डेडलॉक उपेक्षा"
        },
        "correctAnswer": "B",
        "explanation": "Dijkstra's Banker's Algorithm dynamically tests for safety by simulating the allocation of resources to avoid deadlocks.",
        "explanation_hi": "बैंकर एल्गोरिदम सुरक्षा स्थिति का परीक्षण करके डेडलॉक से बचने (Deadlock Avoidance) के लिए उपयोग किया जाता है।"
      },
      {
        "id": 66,
        "questionNumber": 66,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "topic_hi": "ऑपरेटिंग सिस्टम",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Belady's Anomaly (where increasing page frames increases page faults) can occur in which page replacement algorithm?",
        "question_hi": "बेलाडी की विसंगति (Belady's Anomaly) किस पेज रिप्लेसमेंट एल्गोरिदम में हो सकती है?",
        "options": {
          "A": "First-In First-Out (FIFO)",
          "B": "Least Recently Used (LRU)",
          "C": "Optimal Page Replacement",
          "D": "Most Recently Used (MRU)"
        },
        "options_hi": {
          "A": "FIFO (First-In First-Out)",
          "B": "LRU (Least Recently Used)",
          "C": "ऑप्टिमल पेज रिप्लेसमेंट",
          "D": "MRU"
        },
        "correctAnswer": "C",
        "explanation": "Belady's Anomaly occurs in FIFO because it is not a stack algorithm (unlike LRU or Optimal).",
        "explanation_hi": "FIFO एक स्टैक एल्गोरिदम नहीं है, इसलिए इसमें अधिक फ्रेम आवंटित करने पर भी पेज फॉल्ट बढ़ सकते हैं (बेलाडी विसंगति)।"
      },
      {
        "id": 67,
        "questionNumber": 67,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "topic_hi": "ऑपरेटिंग सिस्टम",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In Unix-like systems, what does the fork() system call return to the newly created child process upon success?",
        "question_hi": "यूनिक्स प्रणालियों में, सफलता पर fork() सिस्टम कॉल नवनिर्मित चाइल्ड प्रोसेस को क्या लौटाता है?",
        "options": {
          "A": "0",
          "B": "The PID of the parent",
          "C": "A positive integer equal to its own PID",
          "D": "-1"
        },
        "options_hi": {
          "A": "0",
          "B": "पैरेंट की PID",
          "C": "अपनी स्वयं की PID के बराबर धनात्मक पूर्णांक",
          "D": "-1"
        },
        "correctAnswer": "D",
        "explanation": "fork() returns 0 to the child process and the child's PID to the parent process on successful execution.",
        "explanation_hi": "fork() चाइल्ड प्रोसेस को 0 लौटाता है तथा पैरेंट प्रोसेस को चाइल्ड की प्रोसेस आईडी (PID) लौटाता है।"
      },
      {
        "id": 68,
        "questionNumber": 68,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which sequence of packet flags initiates a reliable TCP connection establishment (Three-Way Handshake)?",
        "question_hi": "विश्वसनीय TCP कनेक्शन स्थापित करने (थ्री-वे हैंडशेक) के लिए पैकेट फ़्लैग का कौन सा क्रम उपयोग किया जाता है?",
        "options": {
          "A": "SYN -> SYN-ACK -> ACK",
          "B": "ACK -> SYN -> ACK",
          "C": "FIN -> ACK -> FIN-ACK",
          "D": "SYN -> ACK -> DATA"
        },
        "options_hi": {
          "A": "SYN -> SYN-ACK -> ACK",
          "B": "ACK -> SYN -> ACK",
          "C": "FIN -> ACK -> FIN-ACK",
          "D": "SYN -> ACK -> DATA"
        },
        "correctAnswer": "A",
        "explanation": "TCP 3-way handshake: Client sends SYN, Server responds with SYN-ACK, Client sends ACK.",
        "explanation_hi": "TCP कनेक्शन स्थापना: क्लाइंट SYN भेजता है, सर्वर SYN-ACK भेजता है, और क्लाइंट ACK के साथ पुष्टि करता है।"
      },
      {
        "id": 69,
        "questionNumber": 69,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which routing algorithm is fundamentally employed by the Distance Vector Routing protocol (e.g., RIP)?",
        "question_hi": "डिस्टेंस वेक्टर रूटिंग प्रोटोकॉल (जैसे RIP) द्वारा मौलिक रूप से किस रूटिंग एल्गोरिदम का उपयोग किया जाता है?",
        "options": {
          "A": "Bellman-Ford Algorithm",
          "B": "Dijkstra's Algorithm",
          "C": "Floyd-Warshall Algorithm",
          "D": "Kruskal's Algorithm"
        },
        "options_hi": {
          "A": "बेलमैन-फ़ोर्ड एल्गोरिदम (Bellman-Ford)",
          "B": "डिज्कस्ट्रा एल्गोरिदम",
          "C": "फ्लॉयड-वॉर्शाल",
          "D": "क्रुस्कल एल्गोरिदम"
        },
        "correctAnswer": "B",
        "explanation": "Distance Vector routing protocols (like RIP) use the Bellman-Ford algorithm; Link State protocols (like OSPF) use Dijkstra's.",
        "explanation_hi": "डिस्टेंस वेक्टर रूटिंग बेलमैन-फ़ोर्ड एल्गोरिदम पर आधारित है, जबकि लिंक स्टेट रूटिंग डिज्कस्ट्रा पर आधारित है।"
      },
      {
        "id": 70,
        "questionNumber": 70,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In internet architecture, what is the primary function of the Domain Name System (DNS)?",
        "question_hi": "इंटरनेट आर्किटेक्चर में, डोमेन नेम सिस्टम (DNS) का प्राथमिक कार्य क्या है?",
        "options": {
          "A": "Translates human-readable domain names into numerical IP addresses",
          "B": "Assigns dynamic IP addresses to client workstations",
          "C": "Encrypts web browser communications",
          "D": "Filters malicious incoming traffic at firewalls"
        },
        "options_hi": {
          "A": "मानव-पठनीय डोमेन नामों को संख्यात्मक IP पतों में अनुवादित करना",
          "B": "क्लाइंट कंप्यूटरों को डायनेमिक IP एड्रेस देना",
          "C": "वेब संचार को एन्क्रिप्ट करना",
          "D": "फ़ायरवॉल पर ट्रैफ़िक फ़िल्टर करना"
        },
        "correctAnswer": "C",
        "explanation": "DNS serves as the internet's phonebook, resolving hostnames (like example.com) to IP addresses (like 93.184.216.34).",
        "explanation_hi": "DNS इंटरनेट की डायरेक्टरी है जो डोमेन नामों को संख्यात्मक IP पतों में बदलती है।"
      },
      {
        "id": 71,
        "questionNumber": 71,
        "section": "Computer Science",
        "topic": "Computer Networks",
        "topic_hi": "कंप्यूटर नेटवर्क",
        "marks": 1,
        "negativeMarks": 0,
        "question": "How many bits are used in an IPv6 address?",
        "question_hi": "एक IPv6 पते (Address) में कितने बिट्स का उपयोग किया जाता है?",
        "options": {
          "A": "128 bits (16 bytes)",
          "B": "32 bits (4 bytes)",
          "C": "64 bits (8 bytes)",
          "D": "256 bits (32 bytes)"
        },
        "options_hi": {
          "A": "128 बिट्स (16 बाइट्स)",
          "B": "32 बिट्स (4 बाइट्स)",
          "C": "64 बिट्स (8 बाइट्स)",
          "D": "256 बिट्स (32 बाइट्स)"
        },
        "correctAnswer": "D",
        "explanation": "IPv6 addresses are 128 bits in length, written as eight groups of four hexadecimal digits separated by colons.",
        "explanation_hi": "IPv6 पता 128 बिट्स लंबा होता है, जिसे कोलन से अलग किए गए 8 हेक्साडेसिमल समूहों में लिखा जाता है।"
      },
      {
        "id": 72,
        "questionNumber": 72,
        "section": "Computer Science",
        "topic": "DBMS & SQL",
        "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम (DBMS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which ACID property ensures that once a database transaction commits, its modifications persist permanently even after hardware crashes?",
        "question_hi": "कौन सा ACID गुण यह सुनिश्चित करता है कि एक बार लेनदेन कमिट होने के बाद, क्रैश होने पर भी उसके संशोधन स्थायी रूप से बने रहते हैं?",
        "options": {
          "A": "Durability",
          "B": "Atomicity",
          "C": "Consistency",
          "D": "Isolation"
        },
        "options_hi": {
          "A": "स्थायित्व (Durability)",
          "B": "परमाणुकता (Atomicity)",
          "C": "स्थिरता (Consistency)",
          "D": "अलगाव (Isolation)"
        },
        "correctAnswer": "A",
        "explanation": "Durability guarantees that committed data is written to non-volatile storage and will survive any subsequent system failures.",
        "explanation_hi": "स्थायित्व (Durability) यह सुनिश्चित करता है कि कमिट किया गया डेटा स्थायी रूप से सुरक्षित रहे।"
      },
      {
        "id": 73,
        "questionNumber": 73,
        "section": "Computer Science",
        "topic": "DBMS & SQL",
        "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम (DBMS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In relational database theory, what distinguishes a Candidate Key from a Superkey?",
        "question_hi": "रिलेशनल डेटाबेस सिद्धांत में, एक उम्मीदवार कुंजी (Candidate Key) सुपरकी से कैसे भिन्न होती है?",
        "options": {
          "A": "A Candidate Key is a minimal Superkey with no redundant attributes",
          "B": "A Candidate Key can accept NULL values freely",
          "C": "A Superkey contains fewer columns than a candidate key",
          "D": "There can be only one Candidate Key per table"
        },
        "options_hi": {
          "A": "उम्मीदवार कुंजी एक न्यूनतम सुपरकी होती है जिसमें कोई अनावश्यक विशेषता नहीं होती",
          "B": "उम्मीदवार कुंजी NULL मान स्वीकार कर सकती है",
          "C": "सुपरकी में उम्मीदवार कुंजी से कम कॉलम होते हैं",
          "D": "प्रति टेबल केवल एक उम्मीदवार कुंजी हो सकती है"
        },
        "correctAnswer": "B",
        "explanation": "A Candidate Key is a minimal superkey; removing any attribute from it would cause it to lose its unique identification property.",
        "explanation_hi": "कैंडिडेट की एक न्यूनतम सुपरकी होती है जिसमें से किसी भी विशेषता को हटाने पर विशिष्टता का गुण समाप्त हो जाता है।"
      },
      {
        "id": 74,
        "questionNumber": 74,
        "section": "Computer Science",
        "topic": "DBMS & SQL",
        "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम (DBMS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In database indexing, what structural advantage does a B+ Tree offer over a traditional B-Tree?",
        "question_hi": "डेटाबेस इंडेक्सिंग में, B+ ट्री पारंपरिक B-ट्री की तुलना में क्या संरचनात्मक लाभ प्रदान करता है?",
        "options": {
          "A": "All data pointers reside exclusively in leaf nodes linked sequentially for fast range queries",
          "B": "Internal nodes store both keys and record pointers",
          "C": "B+ Trees have a smaller fan-out factor",
          "D": "B+ Trees can only be used with primary keys"
        },
        "options_hi": {
          "A": "सभी डेटा पॉइंटर्स केवल लीफ़ नोड्स में रहते हैं जो रेंज प्रश्नों के लिए क्रमिक रूप से जुड़े होते हैं",
          "B": "आंतरिक नोड्स कीज़ और रिकॉर्ड दोनों संग्रहीत करते हैं",
          "C": "B+ ट्री में छोटा फैन-आउट होता है",
          "D": "B+ ट्री केवल प्राइमरी की के साथ काम करता है"
        },
        "correctAnswer": "C",
        "explanation": "In a B+ Tree, leaf nodes form a linked list for fast sequential range scans, while internal nodes only store routing keys.",
        "explanation_hi": "B+ ट्री में सभी वास्तविक डेटा रिकॉर्ड्स लीफ़ नोड्स में होते हैं जो आपस में लिंक्ड होते हैं, जिससे रेंज क्वेरी बहुत तेज़ होती है।"
      },
      {
        "id": 75,
        "questionNumber": 75,
        "section": "Computer Science",
        "topic": "DBMS & SQL",
        "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम (DBMS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What database constraint enforces that a foreign key value in a child table must match an existing primary key value in the parent table?",
        "question_hi": "कौन सा कंस्ट्रेंट यह लागू करता है कि चाइल्ड टेबल में फॉरेन की का मान पैरेंट टेबल की प्राइमरी की से मेल खाना चाहिए?",
        "options": {
          "A": "Referential Integrity Constraint",
          "B": "Entity Integrity Constraint",
          "C": "Domain Constraint",
          "D": "Check Constraint"
        },
        "options_hi": {
          "A": "संदर्भगत अखंडता (Referential Integrity)",
          "B": "इकाई अखंडता (Entity Integrity)",
          "C": "डोमेन कंस्ट्रेंट",
          "D": "चेक कंस्ट्रेंट"
        },
        "correctAnswer": "D",
        "explanation": "Referential integrity guarantees that references between tables via foreign keys remain valid and consistent.",
        "explanation_hi": "रेफरेंशियल इंटीग्रिटी यह सुनिश्चित करती है कि फॉरेन की द्वारा संदर्भित संबंध हमेशा वैध और संगत रहें।"
      },
      {
        "id": 76,
        "questionNumber": 76,
        "section": "Computer Science",
        "topic": "Programming in C++",
        "topic_hi": "C++ प्रोग्रामिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In C++, what makes an abstract base class impossible to instantiate directly?",
        "question_hi": "C++ में कौन सी विशेषता एक एब्सट्रैक्ट बेस क्लास को सीधे इंस्टेंटिएट करना असंभव बनाती है?",
        "options": {
          "A": "Presence of at least one Pure Virtual Function (= 0)",
          "B": "Absence of a default constructor",
          "C": "Having all member variables declared private",
          "D": "Using the 'abstract' keyword in the class header"
        },
        "options_hi": {
          "A": "कम से कम एक शुद्ध वर्चुअल फ़ंक्शन (Pure Virtual Function = 0) की उपस्थिति",
          "B": "डिफ़ॉल्ट कंस्ट्रक्टर का न होना",
          "C": "सभी मेंबर वेरिएबल्स का प्राइवेट होना",
          "D": "'abstract' कीवर्ड का उपयोग"
        },
        "correctAnswer": "A",
        "explanation": "A class containing at least one pure virtual function (e.g. virtual void draw() = 0;) is abstract and cannot be instantiated.",
        "explanation_hi": "कम से कम एक प्योर वर्चुअल फ़ंक्शन (= 0) रखने वाली क्लास एब्सट्रैक्ट क्लास बन जाती है और उसका सीधा ऑब्जेक्ट नहीं बन सकता।"
      },
      {
        "id": 77,
        "questionNumber": 77,
        "section": "Computer Science",
        "topic": "Programming in C++",
        "topic_hi": "C++ प्रोग्रामिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In C++, which non-member function can be granted special access to private and protected class members?",
        "question_hi": "C++ में, किस गैर-सदस्यीय फ़ंक्शन को क्लास के निजी और संरक्षित सदस्यों तक पहुंच प्रदान की जा सकती है?",
        "options": {
          "A": "Friend Function",
          "B": "Static Member Function",
          "C": "Inline Function",
          "D": "Virtual Function"
        },
        "options_hi": {
          "A": "फ्रेंड फ़ंक्शन (Friend Function)",
          "B": "स्टैटिक मेंबर फ़ंक्शन",
          "C": "इनलाइन फ़ंक्शन",
          "D": "वर्चुअल फ़ंक्शन"
        },
        "correctAnswer": "B",
        "explanation": "Declaring a function with the 'friend' keyword inside a class grants it access to private and protected members of that class.",
        "explanation_hi": "क्लास में 'friend' कीवर्ड से घोषित फ़ंक्शन को क्लास के प्राइवेट और प्रोटेक्टेड मेंबर्स तक सीधी पहुंच प्राप्त होती है।"
      },
      {
        "id": 78,
        "questionNumber": 78,
        "section": "Computer Science",
        "topic": "Programming in C++",
        "topic_hi": "C++ प्रोग्रामिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In C++, why can a constructor never be declared as 'virtual'?",
        "question_hi": "C++ में किसी कंस्ट्रक्टर को 'virtual' क्यों घोषित नहीं किया जा सकता है?",
        "options": {
          "A": "Because the virtual table pointer (vptr) is initialized during constructor execution",
          "B": "Because constructors do not return a value",
          "C": "Because constructors cannot be overloaded",
          "D": "Because derived classes inherit constructors directly"
        },
        "options_hi": {
          "A": "क्योंकि वर्चुअल टेबल पॉइंटर (vptr) कंस्ट्रक्टर निष्पादन के दौरान ही आरंभ होता है",
          "B": "क्योंकि कंस्ट्रक्टर कोई मान नहीं लौटाते",
          "C": "क्योंकि कंस्ट्रक्टर ओवरलोड नहीं हो सकते",
          "D": "क्योंकि चाइल्ड क्लास कंस्ट्रक्टर को इनहेरिट करती है"
        },
        "correctAnswer": "C",
        "explanation": "Virtual dispatch requires a vptr pointing to a vtable, which does not exist until the constructor initializes the object.",
        "explanation_hi": "वर्चुअल मैकेनिज्म vptr पर निर्भर करता है जो ऑब्जेक्ट के निर्माण के दौरान ही सेट होता है, अतः कंस्ट्रक्टर वर्चुअल नहीं हो सकता।"
      },
      {
        "id": 79,
        "questionNumber": 79,
        "section": "Computer Science",
        "topic": "Programming in C++",
        "topic_hi": "C++ प्रोग्रामिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In the C++ Standard Template Library (STL), which container guarantees elements are stored in contiguous memory locations?",
        "question_hi": "C++ STL में, कौन सा कंटेनर गारंटी देता है कि तत्व निरंतर (Contiguous) मेमोरी स्थानों में संग्रहीत होते हैं?",
        "options": {
          "A": "std::vector",
          "B": "std::list",
          "C": "std::deque",
          "D": "std::set"
        },
        "options_hi": {
          "A": "std::vector",
          "B": "std::list",
          "C": "std::deque",
          "D": "std::set"
        },
        "correctAnswer": "D",
        "explanation": "std::vector and std::array store elements contiguously, enabling O(1) random pointer arithmetic and cache locality.",
        "explanation_hi": "std::vector तत्वों को मेमोरी में लगातार संग्रहीत करता है, जिससे इंडेक्स द्वारा O(1) सीधी पहुंच संभव होती है।"
      },
      {
        "id": 80,
        "questionNumber": 80,
        "section": "Computer Science",
        "topic": "Web Technologies",
        "topic_hi": "वेब टेक्नोलॉजी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In modern web application development, what does JSON stand for?",
        "question_hi": "आधुनिक वेब विकास में, JSON का पूर्ण रूप क्या है?",
        "options": {
          "A": "JavaScript Object Notation",
          "B": "Java Standard Output Network",
          "C": "JavaScript Order Number",
          "D": "Java Synchronized Object Node"
        },
        "options_hi": {
          "A": "JavaScript Object Notation",
          "B": "Java Standard Output Network",
          "C": "JavaScript Order Number",
          "D": "Java Synchronized Object Node"
        },
        "correctAnswer": "A",
        "explanation": "JSON (JavaScript Object Notation) is a lightweight data-interchange format readable by humans and machines.",
        "explanation_hi": "JSON का पूर्ण रूप JavaScript Object Notation है जो डेटा विनिमय का एक मानक हल्का प्रारूप है।"
      },
      {
        "id": 81,
        "questionNumber": 81,
        "section": "Computer Science",
        "topic": "Web Technologies",
        "topic_hi": "वेब टेक्नोलॉजी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What does DOM stand for in client-side web development?",
        "question_hi": "क्लाइंट-साइड वेब विकास में DOM का क्या अर्थ है?",
        "options": {
          "A": "Document Object Model",
          "B": "Data Object Module",
          "C": "Dynamic Origin Management",
          "D": "Digital Output Matrix"
        },
        "options_hi": {
          "A": "Document Object Model",
          "B": "Data Object Module",
          "C": "Dynamic Origin Management",
          "D": "Digital Output Matrix"
        },
        "correctAnswer": "B",
        "explanation": "The Document Object Model (DOM) is a programming interface for HTML and XML documents representing nodes and objects.",
        "explanation_hi": "DOM (डॉक्यूमेंट ऑब्जेक्ट मॉडल) HTML दस्तावेज़ को नोड्स के ट्री के रूप में प्रस्तुत करता है जिसे जावास्क्रिप्ट द्वारा बदला जा सकता है।"
      },
      {
        "id": 82,
        "questionNumber": 82,
        "section": "Computer Science",
        "topic": "Web Technologies",
        "topic_hi": "वेब टेक्नोलॉजी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary benefit of using AJAX in modern web applications?",
        "question_hi": "आधुनिक वेब अनुप्रयोगों में AJAX का उपयोग करने का प्राथमिक लाभ क्या है?",
        "options": {
          "A": "Asynchronously exchanging data with a web server without reloading the whole web page",
          "B": "Securing web sockets against DDoS attacks",
          "C": "Compiling server-side code into native binaries",
          "D": "Increasing display monitor refresh rates"
        },
        "options_hi": {
          "A": "पूरे वेब पेज को पुनः लोड किए बिना सर्वर के साथ अतुल्यकालिक रूप से डेटा का आदान-प्रदान करना",
          "B": "वेब सॉकेट्स को सुरक्षित करना",
          "C": "सर्वर कोड को कंपाइल करना",
          "D": "डिस्प्ले रिफ्रेश दर बढ़ाना"
        },
        "correctAnswer": "C",
        "explanation": "AJAX (Asynchronous JavaScript and XML) allows client scripts to update parts of a web page in the background.",
        "explanation_hi": "AJAX पूरे पेज को दोबारा लोड किए बिना बैकग्राउंड में सर्वर से डेटा प्राप्त करने और पेज अपडेट करने की सुविधा देता है।"
      },
      {
        "id": 83,
        "questionNumber": 83,
        "section": "Computer Science",
        "topic": "Web Technologies & Security",
        "topic_hi": "वेब सुरक्षा",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What security protection does setting the 'HttpOnly' flag on an HTTP cookie provide?",
        "question_hi": "HTTP कुकी पर 'HttpOnly' फ़्लैग सेट करने से कौन सी सुरक्षा मिलती है?",
        "options": {
          "A": "Prevents client-side scripts (e.g. JavaScript document.cookie) from accessing the cookie",
          "B": "Encrypts the cookie contents with 256-bit AES",
          "C": "Forces the cookie to be transmitted only over HTTPS connections",
          "D": "Automatically expires the cookie after 15 minutes"
        },
        "options_hi": {
          "A": "क्लाइंट-साइड जावास्क्रिप्ट (document.cookie) को कुकी तक पहुंचने से रोकता है (XSS से बचाव)",
          "B": "कुकी सामग्री को एन्क्रिप्ट करता है",
          "C": "कुकी को केवल HTTPS पर भेजने के लिए बाध्य करता है",
          "D": "15 मिनट बाद कुकी समाप्त करता है"
        },
        "correctAnswer": "D",
        "explanation": "The HttpOnly flag prevents Cross-Site Scripting (XSS) attacks from stealing sensitive session tokens via JavaScript.",
        "explanation_hi": "HttpOnly फ़्लैग क्लाइंट स्क्रिप्ट्स को कुकी पढ़ने से रोकता है, जिससे XSS हमलों में सत्र टोकन की चोरी नहीं हो सकती।"
      },
      {
        "id": 84,
        "questionNumber": 84,
        "section": "Computer Science",
        "topic": "Software Engineering",
        "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Why is the traditional Waterfall Model deemed unsuitable for projects with volatile or evolving user requirements?",
        "question_hi": "पारंपरिक वॉटरफॉल मॉडल को परिवर्तनशील आवश्यकताओं वाली परियोजनाओं के लिए अनुपयुक्त क्यों माना जाता है?",
        "options": {
          "A": "Its linear-sequential nature makes accommodating changes late in development difficult and costly",
          "B": "It requires daily customer meetings",
          "C": "It does not incorporate any verification or testing phase",
          "D": "It can only be used with compiled languages"
        },
        "options_hi": {
          "A": "इसकी रैखिक प्रकृति के कारण विकास के बाद के चरणों में परिवर्तन करना अत्यंत कठिन और महंगा होता है",
          "B": "इसमें दैनिक बैठकों की आवश्यकता होती है",
          "C": "इसमें टेस्टिंग का कोई चरण नहीं होता",
          "D": "यह केवल कंपाइल भाषाओं में काम करता है"
        },
        "correctAnswer": "A",
        "explanation": "Waterfall cascades through phases strictly in order; backtracking to redesign or change specifications is prohibitively expensive.",
        "explanation_hi": "वॉटरफॉल मॉडल एक रैखिक मॉडल है, जिसमें एक बार चरण पूरा होने के बाद आवश्यकताओं में बदलाव करना बेहद जटिल होता है।"
      },
      {
        "id": 85,
        "questionNumber": 85,
        "section": "Computer Science",
        "topic": "Software Engineering",
        "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In software architecture, what is the golden rule for achieving high maintainability and testability?",
        "question_hi": "सॉफ्टवेयर आर्किटेक्चर में, उच्च रखरखाव और परीक्षण क्षमता प्राप्त करने का स्वर्णिम नियम क्या है?",
        "options": {
          "A": "High Cohesion and Low Coupling",
          "B": "Low Cohesion and High Coupling",
          "C": "High Coupling and Maximum Global Variables",
          "D": "Zero Abstraction and Monolithic Structure"
        },
        "options_hi": {
          "A": "उच्च संसंजन (High Cohesion) और निम्न युग्मन (Low Coupling)",
          "B": "निम्न संसंजन और उच्च युग्मन",
          "C": "उच्च युग्मन और ग्लोबल चर",
          "D": "शून्य अमूर्तता"
        },
        "correctAnswer": "B",
        "explanation": "High cohesion means a module focuses on a single task; low coupling means modules have minimal interdependencies.",
        "explanation_hi": "हाई कोहेजन और लो कपलिंग सॉफ्टवेयर डिज़ाइन का मुख्य सिद्धांत है।"
      },
      {
        "id": 86,
        "questionNumber": 86,
        "section": "Computer Science",
        "topic": "Software Engineering",
        "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which software testing methodology validates application functionality without examining internal code structure or logic?",
        "question_hi": "कौन सी सॉफ्टवेयर टेस्टिंग पद्धति आंतरिक कोड संरचना या लॉजिक की जांच किए बिना अनुप्रयोग कार्यक्षमता का परीक्षण करती है?",
        "options": {
          "A": "Black Box Testing",
          "B": "White Box Testing",
          "C": "Mutation Testing",
          "D": "Code Coverage Analysis"
        },
        "options_hi": {
          "A": "ब्लैक बॉक्स टेस्टिंग (Black Box Testing)",
          "B": "व्हाइट बॉक्स टेस्टिंग",
          "C": "म्यूटेशन टेस्टिंग",
          "D": "कोड कवरेज विश्लेषण"
        },
        "correctAnswer": "C",
        "explanation": "Black box testing focuses strictly on software inputs and expected outputs against specification requirements.",
        "explanation_hi": "ब्लैक बॉक्स टेस्टिंग में परीक्षक आंतरिक कोड को देखे बिना केवल इनपुट और अपेक्षित आउटपुट के आधार पर सॉफ्टवेयर की जांच करता है।"
      },
      {
        "id": 87,
        "questionNumber": 87,
        "section": "Computer Science",
        "topic": "Theory of Computation",
        "topic_hi": "थ्योरी ऑफ कंप्यूटेशन",
        "marks": 1,
        "negativeMarks": 0,
        "question": "According to the Chomsky Hierarchy of formal grammars, Regular Grammars belong to which grammar type?",
        "question_hi": "नोम चॉम्स्की के व्याकरण पदानुक्रम के अनुसार, नियमित व्याकरण (Regular Grammar) किस प्रकार से संबंधित है?",
        "options": {
          "A": "Type-3 Grammar",
          "B": "Type-2 Grammar",
          "C": "Type-1 Grammar",
          "D": "Type-0 Grammar"
        },
        "options_hi": {
          "A": "टाइप-3 व्याकरण (Type-3)",
          "B": "टाइप-2 व्याकरण",
          "C": "टाइप-1 व्याकरण",
          "D": "टाइप-0 व्याकरण"
        },
        "correctAnswer": "D",
        "explanation": "Chomsky Hierarchy: Type 0 = Unrestricted, Type 1 = Context-Sensitive, Type 2 = Context-Free, Type 3 = Regular.",
        "explanation_hi": "चॉम्स्की पदानुक्रम में टाइप-3 रेगुलर व्याकरण, टाइप-2 कॉन्टेक्स्ट-फ्री, टाइप-1 कॉन्टेक्स्ट-सेंसिटिव और टाइप-0 अप्रतिबंधित होता है।"
      },
      {
        "id": 88,
        "questionNumber": 88,
        "section": "Computer Science",
        "topic": "Theory of Computation",
        "topic_hi": "थ्योरी ऑफ कंप्यूटेशन",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Alan Turing proved that the Halting Problem for Turing machines is:",
        "question_hi": "एलन ट्यूरिंग ने सिद्ध किया कि ट्यूरिंग मशीनों के लिए हॉल्टिंग समस्या (Halting Problem) क्या है?",
        "options": {
          "A": "Undecidable",
          "B": "Decidable in Polynomial Time",
          "C": "Tractable",
          "D": "Linear Time Solvable"
        },
        "options_hi": {
          "A": "अनिर्णायक (Undecidable)",
          "B": "पॉलीनोमियल समय में निर्णय योग्य",
          "C": "ट्रैक्टेबल",
          "D": "रैखिक समय में हल योग्य"
        },
        "correctAnswer": "A",
        "explanation": "The Halting Problem is the classic undecidable problem: no algorithm can determine whether an arbitrary program will finish running.",
        "explanation_hi": "हॉल्टिंग समस्या क्लासिक अनिर्णायक (Undecidable) समस्या है; कोई भी सामान्य एल्गोरिदम यह तय नहीं कर सकता कि कोई प्रोग्राम रुकेगा या नहीं।"
      },
      {
        "id": 89,
        "questionNumber": 89,
        "section": "Computer Science",
        "topic": "Internet of Things",
        "topic_hi": "IoT",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In the Internet of Things (IoT), what messaging protocol is designed specifically for lightweight, low-bandwidth publish/subscribe communication?",
        "question_hi": "इंटरनेट ऑफ थिंग्स में, हल्के, कम-बैंडविड्थ वाले पब्लिश/सब्सक्राइब संचार के लिए विशेष रूप से कौन सा प्रोटोकॉल डिज़ाइन किया गया है?",
        "options": {
          "A": "MQTT (Message Queuing Telemetry Transport)",
          "B": "FTP (File Transfer Protocol)",
          "C": "SMTP",
          "D": "SNMP"
        },
        "options_hi": {
          "A": "MQTT (Message Queuing Telemetry Transport)",
          "B": "FTP",
          "C": "SMTP",
          "D": "SNMP"
        },
        "correctAnswer": "B",
        "explanation": "MQTT is an extremely lightweight ISO standard publish-subscribe network protocol ideal for resource-constrained IoT sensors.",
        "explanation_hi": "MQTT एक बेहद हल्का पब्लिश/सब्सक्राइब प्रोटोकॉल है जिसे कम बैंडविड्थ और सीमित संसाधनों वाले IoT सेंसरों के लिए बनाया गया है।"
      },
      {
        "id": 90,
        "questionNumber": 90,
        "section": "Computer Science",
        "topic": "Artificial Intelligence",
        "topic_hi": "आर्टिफिशियल इंटेलिजेंस",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In machine learning, what distinguishes Supervised Learning from Unsupervised Learning?",
        "question_hi": "मशीन लर्निंग में, सुपरवाइज्ड लर्निंग और अनसुपरवाइज्ड लर्निंग के बीच क्या अंतर है?",
        "options": {
          "A": "Supervised Learning trains on labeled dataset with known ground truth targets",
          "B": "Supervised Learning requires no human intervention",
          "C": "Unsupervised Learning uses reinforcement feedback loops",
          "D": "Supervised Learning can only perform clustering"
        },
        "options_hi": {
          "A": "सुपरवाइज्ड लर्निंग ज्ञात लक्षित लेबलों (Labeled data) के साथ डेटासेट पर प्रशिक्षण करती है",
          "B": "सुपरवाइज्ड लर्निंग में मानवीय हस्तक्षेप नहीं होता",
          "C": "अनसुपरवाइज्ड लर्निंग सुदृढ़ीकरण लूप का उपयोग करती है",
          "D": "सुपरवाइज्ड लर्निंग केवल क्लस्टरिंग करती है"
        },
        "correctAnswer": "C",
        "explanation": "Supervised learning algorithms are provided pairs of input features and expected target labels (e.g. classification, regression).",
        "explanation_hi": "सुपरवाइज्ड लर्निंग में मॉडल को इनपुट सुविधाओं के साथ सही आउटपुट लेबल प्रदान किए जाते हैं।"
      },
      {
        "id": 91,
        "questionNumber": 91,
        "section": "Computer Science",
        "topic": "Web Technology",
        "topic_hi": "वेब टेक्नोलॉजी (Web Technology)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which HTTP response status code indicates that the server understands the request but refuses to authorize it (Forbidden)?",
        "question_hi": "कौन सा HTTP प्रतिक्रिया स्थिति कोड इंगित करता है कि सर्वर अनुरोध को समझता है लेकिन इसे अधिकृत करने से इनकार करता है (प्रतिबंधित/Forbidden)?",
        "options": {
          "A": "500 Internal Server Error",
          "B": "401 Unauthorized",
          "C": "404 Not Found",
          "D": "403 Forbidden"
        },
        "options_hi": {
          "A": "500 इंटरनल सर्वर एरर (500 Internal Server Error)",
          "B": "401 अनऑथराइज्ड (401 Unauthorized)",
          "C": "404 नॉट फाउंड (404 Not Found)",
          "D": "403 फॉरबिडन (403 Forbidden)"
        },
        "correctAnswer": "D",
        "explanation": "HTTP 403 Forbidden indicates the server understands the request but refuses to authorize it, unlike 401 which indicates missing authentication.",
        "explanation_hi": "HTTP 403 Forbidden इंगित करता है कि सर्वर अनुरोध समझता है लेकिन क्लाइंट के पास एक्सेस की अनुमति नहीं है।"
      },
      {
        "id": 92,
        "questionNumber": 92,
        "section": "Computer Science",
        "topic": "Web Technology",
        "topic_hi": "वेब टेक्नोलॉजी (Web Technology)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In HTML5, which semantic tag is specifically used to define the introductory content or navigation links for a document or section?",
        "question_hi": "HTML5 में, किस सिमेंटिक टैग का उपयोग किसी दस्तावेज़ या अनुभाग के लिए परिचयात्मक सामग्री या नेविगेशन लिंक को परिभाषित करने के लिए किया जाता है?",
        "options": {
          "A": "<header>",
          "B": "<top>",
          "C": "<section>",
          "D": "<navhead>"
        },
        "options_hi": {
          "A": "<header>",
          "B": "<top>",
          "C": "<section>",
          "D": "<navhead>"
        },
        "correctAnswer": "A",
        "explanation": "The <header> element represents introductory content, typically containing headings, logos, and navigation links.",
        "explanation_hi": "<header> तत्व परिचयात्मक सामग्री या नेविगेशनल लिंक के समूह का प्रतिनिधित्व करता है।"
      },
      {
        "id": 93,
        "questionNumber": 93,
        "section": "Computer Science",
        "topic": "Cyber Security",
        "topic_hi": "साइबर सुरक्षा (Cyber Security)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In symmetric key cryptography, which cipher algorithm was selected by NIST in 2001 as the Advanced Encryption Standard (AES)?",
        "question_hi": "सममित कुंजी क्रिप्टोग्राफी में, 2001 में NIST द्वारा उन्नत एन्क्रिप्शन मानक (AES) के रूप में किस सिफर एल्गोरिदम को चुना गया था?",
        "options": {
          "A": "Twofish",
          "B": "Rijndael",
          "C": "Blowfish",
          "D": "RC6"
        },
        "options_hi": {
          "A": "टूफ़िश (Twofish)",
          "B": "रिजन्डेल (Rijndael)",
          "C": "ब्लोफ़िश (Blowfish)",
          "D": "RC6"
        },
        "correctAnswer": "B",
        "explanation": "AES is based on the Rijndael cipher developed by Vincent Rijmen and Joan Daemen, supporting 128, 192, and 256-bit keys.",
        "explanation_hi": "AES विन्सेंट रिजमेन और जोन डेमेन द्वारा विकसित रिजन्डेल (Rijndael) एल्गोरिदम पर आधारित है।"
      },
      {
        "id": 94,
        "questionNumber": 94,
        "section": "Computer Science",
        "topic": "Software Engineering",
        "topic_hi": "सॉफ्टवेयर इंजीनियरिंग (Software Engineering)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which phase of the Software Development Life Cycle (SDLC) historically consumes the largest share of effort and financial cost over the system lifespan?",
        "question_hi": "सॉफ्टवेयर विकास जीवन चक्र (SDLC) का कौन सा चरण सिस्टम के पूरे जीवनकाल में प्रयास और वित्तीय लागत का सबसे बड़ा हिस्सा लेता है?",
        "options": {
          "A": "Testing phase",
          "B": "Coding phase",
          "C": "Maintenance phase",
          "D": "Design phase"
        },
        "options_hi": {
          "A": "परीक्षण चरण (Testing phase)",
          "B": "कोडिंग चरण (Coding phase)",
          "C": "रखरखाव चरण (Maintenance phase)",
          "D": "डिज़ाइन चरण (Design phase)"
        },
        "correctAnswer": "C",
        "explanation": "Software maintenance (corrective, adaptive, perfective, and preventive) accounts for 60% to 80% of total lifecycle software costs.",
        "explanation_hi": "सॉफ्टवेयर रखरखाव (मेंटेनेंस) कुल सॉफ़्टवेयर जीवन चक्र लागत का 60% से 80% हिस्सा होता है।"
      },
      {
        "id": 95,
        "questionNumber": 95,
        "section": "Computer Science",
        "topic": "Cyber Law & Ethics",
        "topic_hi": "साइबर कानून एवं नैतिकता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Under the Information Technology (IT) Act, 2000 of India, which section provides punishment for hacking and unauthorized computer data alteration?",
        "question_hi": "भारत के सूचना प्रौद्योगिकी (आईटी) अधिनियम, 2000 के तहत, कौन सी धारा हैकिंग और अनधिकृत कंप्यूटर डेटा परिवर्तन के लिए दंड प्रदान करती है?",
        "options": {
          "A": "Section 67",
          "B": "Section 43",
          "C": "Section 65",
          "D": "Section 66"
        },
        "options_hi": {
          "A": "धारा 67 (Section 67)",
          "B": "धारा 43 (Section 43)",
          "C": "धारा 65 (Section 65)",
          "D": "धारा 66 (Section 66)"
        },
        "correctAnswer": "D",
        "explanation": "Section 66 of the IT Act penalizes computer related offences (hacking) with imprisonment up to 3 years or fine up to 5 lakh rupees.",
        "explanation_hi": "आईटी अधिनियम की धारा 66 कंप्यूटर से संबंधित अपराधों (हैकिंग) के लिए 3 साल तक की जेल या 5 लाख रुपये तक के जुर्माने का प्रावधान करती है।"
      },
      {
        "id": 96,
        "questionNumber": 96,
        "section": "Computer Science",
        "topic": "Web Technology",
        "topic_hi": "वेब टेक्नोलॉजी (Web Technology)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In CSS (Cascading Style Sheets), which property is used to create spacing around elements, outside of any defined borders?",
        "question_hi": "CSS में, किसी परिभाषित बॉर्डर के बाहर, तत्वों के चारों ओर खाली स्थान बनाने के लिए किस प्रॉपर्टी का उपयोग किया जाता है?",
        "options": {
          "A": "margin",
          "B": "padding",
          "C": "border-spacing",
          "D": "outline"
        },
        "options_hi": {
          "A": "मार्जिन (margin)",
          "B": "पैडिंग (padding)",
          "C": "बॉर्डर-स्पेसिंग (border-spacing)",
          "D": "आउटलाइन (outline)"
        },
        "correctAnswer": "A",
        "explanation": "Margin creates space outside the border of an element, whereas padding creates space inside the border.",
        "explanation_hi": "मार्जिन (Margin) किसी तत्व के बॉर्डर के बाहर स्थान बनाता है, जबकि पैडिंग बॉर्डर के अंदर सामग्री के चारों ओर स्थान बनाती है।"
      },
      {
        "id": 97,
        "questionNumber": 97,
        "section": "Computer Science",
        "topic": "Cloud Computing",
        "topic_hi": "क्लाउड कंप्यूटिंग (Cloud Computing)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which cloud computing service model provides virtualized hardware, storage, and network infrastructure on demand over the internet?",
        "question_hi": "कौन सा क्लाउड कंप्यूटिंग सेवा मॉडल इंटरनेट पर मांग पर वर्चुअलाइज्ड हार्डवेयर, स्टोरेज और नेटवर्क इंफ्रास्ट्रक्चर प्रदान करता है?",
        "options": {
          "A": "PaaS (Platform as a Service)",
          "B": "IaaS (Infrastructure as a Service)",
          "C": "SaaS (Software as a Service)",
          "D": "FaaS (Function as a Service)"
        },
        "options_hi": {
          "A": "PaaS (प्लेटफ़ॉर्म एज़ अ सर्विस)",
          "B": "IaaS (इन्फ्रास्ट्रक्चर एज़ अ सर्विस)",
          "C": "SaaS (सॉफ़्टवेयर एज़ अ सर्विस)",
          "D": "FaaS (फ़ंक्शन एज़ अ सर्विस)"
        },
        "correctAnswer": "B",
        "explanation": "IaaS provides fundamental compute resources such as virtual machines, network storage, and firewalls on demand (e.g., AWS EC2, Google Compute Engine).",
        "explanation_hi": "IaaS (जैसे AWS EC2, GCP) उपयोगकर्ताओं को वर्चुअलाइज्ड कंप्यूटिंग संसाधन, स्टोरेज और नेटवर्क इन्फ्रास्ट्रक्चर प्रदान करता है।"
      },
      {
        "id": 98,
        "questionNumber": 98,
        "section": "Computer Science",
        "topic": "Software Tools & Engineering",
        "topic_hi": "सॉफ्टवेयर टूल्स एवं इंजीनियरिंग",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In Git version control, which command creates a new branch and immediately switches to it?",
        "question_hi": "गिट (Git) संस्करण नियंत्रण में, कौन सा कमांड एक नई शाखा बनाता है और तुरंत उस पर स्विच करता है?",
        "options": {
          "A": "git switch -create <branch_name>",
          "B": "git branch -new <branch_name>",
          "C": "git checkout -b <branch_name>",
          "D": "git commit -b <branch_name>"
        },
        "options_hi": {
          "A": "git switch -create <branch_name>",
          "B": "git branch -new <branch_name>",
          "C": "git checkout -b <branch_name>",
          "D": "git commit -b <branch_name>"
        },
        "correctAnswer": "C",
        "explanation": "'git checkout -b <name>' (or modern 'git switch -c <name>') creates a branch and checks it out simultaneously.",
        "explanation_hi": "'git checkout -b' कमांड एक नई ब्रांच बनाता है और हेड (HEAD) को तुरंत उस नई ब्रांच पर स्विच कर देता है।"
      },
      {
        "id": 99,
        "questionNumber": 99,
        "section": "Computer Science",
        "topic": "Cyber Security",
        "topic_hi": "साइबर सुरक्षा (Cyber Security)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the key size and block size used by the legacy Data Encryption Standard (DES) algorithm?",
        "question_hi": "पारंपरिक डेटा एन्क्रिप्शन मानक (DES) एल्गोरिदम द्वारा उपयोग किए जाने वाले कुंजी का आकार और ब्लॉक का आकार क्या है?",
        "options": {
          "A": "56-bit key and 56-bit block size",
          "B": "64-bit key and 128-bit block size",
          "C": "128-bit key and 64-bit block size",
          "D": "56-bit key and 64-bit block size"
        },
        "options_hi": {
          "A": "56-बिट कुंजी और 56-बिट ब्लॉक आकार",
          "B": "64-बिट कुंजी और 128-बिट ब्लॉक आकार",
          "C": "128-बिट कुंजी और 64-बिट ब्लॉक आकार",
          "D": "56-बिट कुंजी और 64-बिट ब्लॉक आकार"
        },
        "correctAnswer": "D",
        "explanation": "DES uses a 64-bit key (with 8 parity bits, resulting in an effective 56-bit key) and encrypts data in 64-bit blocks.",
        "explanation_hi": "DES में 64-बिट ब्लॉक आकार और 56-बिट प्रभावी कुंजी आकार (8 पैरिटी बिट्स छोड़कर) का उपयोग होता है।"
      },
      {
        "id": 100,
        "questionNumber": 100,
        "section": "Computer Science",
        "topic": "Web Technology",
        "topic_hi": "वेब टेक्नोलॉजी (Web Technology)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In JavaScript, which operator performs strict equality comparison without type coercion?",
        "question_hi": "जावास्क्रिप्ट में, कौन सा ऑपरेटर प्रकार रूपांतरण (type coercion) के बिना सख्त समानता तुलना करता है?",
        "options": {
          "A": "===",
          "B": "==",
          "C": "=",
          "D": "<=>"
        },
        "options_hi": {
          "A": "===",
          "B": "==",
          "C": "=",
          "D": "<=>"
        },
        "correctAnswer": "A",
        "explanation": "The strict equality operator '===' compares both value and type without performing implicit type conversion.",
        "explanation_hi": "स्ट्रिक्ट इक्वलिटी ऑपरेटर '===' मान और डेटा प्रकार दोनों की जांच करता है बिना किसी इंप्लिसिट टाइप कास्टिंग के।"
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
        "id": 1,
        "questionNumber": 1,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Bruner's Spiral Curriculum), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
        "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
        "options": {
          "A": "Restricting classroom dialogue strictly to textbook reading",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Implementing student-centric active engagement aligned with: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "केवल किताब पढ़ना",
          "B": "बिना समझे रटना",
          "C": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "C",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 26 exemplifies Bruner's Spiral Curriculum: Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है।"
      },
      {
        "id": 2,
        "questionNumber": 2,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb)), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Administering punitive exams without constructive feedback",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation"
        },
        "options_hi": {
          "A": "बिना फीडबैक के दंडनीय परीक्षा",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग"
        },
        "correctAnswer": "D",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 1 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 3,
        "questionNumber": 3,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In Herbartian lesson planning, what occurs during the 'Generalization' (सामान्यीकरण) step?",
        "question_hi": "हर्बर्टियन पाठ योजना में 'सामान्यीकरण' (Generalization) चरण के दौरान क्या होता है?",
        "options": {
          "A": "Formulating universal laws, rules, scientific principles, or mathematical formulas derived from the observed facts",
          "B": "Testing student handwriting neatness",
          "C": "Dictating definitions for rote memory",
          "D": "Checking school uniform compliance"
        },
        "options_hi": {
          "A": "देखे गए तथ्यों से प्राप्त सार्वभौमिक नियमों, वैज्ञानिक सिद्धांतों या गणितीय सूत्रों का निर्माण करना",
          "B": "छात्र हस्तलेखन स्वच्छता का परीक्षण",
          "C": "रटने के लिए परिभाषाएं लिखवाना",
          "D": "स्कूल वर्दी अनुपालन की जांच"
        },
        "correctAnswer": "A",
        "explanation": "Generalization (Herbart's 4th step) guides students from specific examples to abstract synthesis: extracting the underlying general law, rule, or formula (Inductive synthesis).",
        "explanation_hi": "सामान्यीकरण (Generalization) में शिक्षक छात्रों की मदद से विभिन्न उदाहरणों के आधार पर एक सामान्य नियम, सूत्र या सिद्धांत (Rule/Formula) स्थापित करता है।"
      },
      {
        "id": 4,
        "questionNumber": 4,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In Herbartian lesson planning, what is the role of the 'Application' (अनुप्रयोग) step?",
        "question_hi": "हर्बर्टियन पाठ योजना में 'अनुप्रयोग' (Application) चरण की क्या भूमिका है?",
        "options": {
          "A": "Dismissing the class",
          "B": "Providing practice problems where students apply the newly generalized rule or formula to novel situations, solidifying retention",
          "C": "Erasing the blackboard",
          "D": "Taking attendance at the end of the period"
        },
        "options_hi": {
          "A": "कक्षा समाप्त करना",
          "B": "अभ्यास समस्याएं प्रदान करना जहाँ छात्र नई सामान्यीकृत नियम या सूत्र को नई स्थितियों में लागू करते हैं, जिससे समझ पक्की होती है",
          "C": "श्यामपट्ट साफ करना",
          "D": "कक्षा के अंत में उपस्थिति दर्ज करना"
        },
        "correctAnswer": "B",
        "explanation": "Application (Herbart's 5th step) tests whether learning has truly transferred by having students utilize the derived principle to solve fresh, independent problems.",
        "explanation_hi": "अनुप्रयोग (Application) हर्बर्ट का अंतिम चरण है जहाँ छात्र सीखे गए नए नियम या सूत्र का उपयोग नई समस्याओं और प्रश्नों को हल करने में करते हैं ताकि ज्ञान स्थायी हो सके।"
      },
      {
        "id": 5,
        "questionNumber": 5,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In microteaching, what are the four types of reinforcement classified under the Skill of Reinforcement?",
        "question_hi": "सूक्ष्म-शिक्षण में पुनर्बलन कौशल के अंतर्गत वर्गीकृत चार प्रकार के पुनर्बलन कौन से हैं?",
        "options": {
          "A": "Cash, Food, Certificate, and Trophy",
          "B": "Shouting, Detention, Suspension, and Expulsion",
          "C": "Positive Verbal, Positive Non-Verbal, Negative Verbal, and Negative Non-Verbal",
          "D": "Reading, Writing, Speaking, and Listening"
        },
        "options_hi": {
          "A": "नकद, भोजन, प्रमाण पत्र, और ट्रॉफी",
          "B": "चिल्लाना, हिरासत, निलंबन, और निष्कासन",
          "C": "सकारात्मक शाब्दिक, सकारात्मक अशाब्दिक, नकारात्मक शाब्दिक, और नकारात्मक अशाब्दिक",
          "D": "पढ़ना, लिखना, बोलना, और सुनना"
        },
        "correctAnswer": "C",
        "explanation": "Reinforcement categories: 1) Positive Verbal (saying 'excellent'), 2) Positive Non-Verbal (smiling, nodding), 3) Negative Verbal (discouraging words like 'wrong', 'nonsense'), 4) Negative Non-Verbal (frowning, glaring). Desirable teaching relies on positive reinforcement.",
        "explanation_hi": "पुनर्बलन कौशल के 4 प्रकार हैं: 1. सकारात्मक शाब्दिक (तारीफ करना), 2. सकारात्मक अशाब्दिक (मुस्कुराना, सिर हिलाना), 3. नकारात्मक शाब्दिक (हतोत्साहित करना), और 4. नकारात्मक अशाब्दिक (आँखें तरेरना या भौंहें सिकोड़ना)। शिक्षक को सकारात्मक पुनर्बलन का ही प्रयोग करना चाहिए।"
      },
      {
        "id": 6,
        "questionNumber": 6,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In classroom microteaching, what is the primary purpose of 'Closure' at the end of a lesson?",
        "question_hi": "कक्षा सूक्ष्म-शिक्षण में पाठ के अंत में 'समापन' (Closure) का प्राथमिक उद्देश्य क्या है?",
        "options": {
          "A": "Collecting examination fees",
          "B": "Rushing through the last 5 slides without questions",
          "C": "Assigning surprise punitive detention",
          "D": "Helping students organize, integrate, and consolidate the major points of the lesson into a cohesive mental framework"
        },
        "options_hi": {
          "A": "परीक्षा शुल्क एकत्र करना",
          "B": "बिना किसी प्रश्न के अंतिम 5 स्लाइडों को जल्दी से समाप्त करना",
          "C": "अचानक दंडात्मक हिरासत सौंपना",
          "D": "छात्रों को पाठ के प्रमुख बिंदुओं को एक सुसंगत मानसिक ढांचे में व्यवस्थित, एकीकृत और समेकित करने में मदद करना"
        },
        "correctAnswer": "D",
        "explanation": "Closure brings cognitive completion to an instructional session: drawing student attention back to core objectives, summarizing learning, and linking to future lessons.",
        "explanation_hi": "समापन कौशल (Closure) पाठ को अचानक छोड़ने के बजाय पूरे व्याख्यान के मुख्य विचारों को एक सूत्र में पिरोने और छात्रों को यह समझाने में मदद करता है कि उन्होंने आज क्या सीखा।"
      },
      {
        "id": 7,
        "questionNumber": 7,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In Continuous and Comprehensive Evaluation (CCE), what constitutes the 'Co-Scholastic' domain of assessment?",
        "question_hi": "सतत एवं व्यापक मूल्यांकन (CCE) में मूल्यांकन का 'सह-शैक्षणिक' (Co-Scholastic) क्षेत्र क्या होता है?",
        "options": {
          "A": "Life skills, attitudes and values, co-curricular activity participation (arts, music, sports, yoga, community service)",
          "B": "Marks scored in Physics and Mathematics examinations only",
          "C": "The weight of school bags",
          "D": "Tuition fees paid by parents"
        },
        "options_hi": {
          "A": "जीवन कौशल, दृष्टिकोण और मूल्य, सह-पाठ्यचर्या गतिविधि भागीदारी (कला, संगीत, खेल, योग, सामुदायिक सेवा)",
          "B": "केवल भौतिकी और गणित परीक्षाओं में प्राप्त अंक",
          "C": "स्कूल बैग का वजन",
          "D": "माता-पिता द्वारा भुगतान की गई ट्यूशन फीस"
        },
        "correctAnswer": "A",
        "explanation": "CCE evaluates two domains: Scholastic (curricular academic subjects like CS, Science, Math) and Co-Scholastic (Life Skills: thinking/emotional/social, Attitudes, Values, Performing Arts, Health & Physical Education).",
        "explanation_hi": "CCE में दो क्षेत्र होते हैं: 1. शैक्षणिक (Scholastic - पाठ्य विषय जैसे कंप्यूटर, विज्ञान, गणित) और 2. सह-शैक्षणिक (Co-Scholastic - जीवन कौशल, खेलकूद, कला, संगीत, नैतिक मूल्य और अनुशासन)।"
      },
      {
        "id": 8,
        "questionNumber": 8,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary diagnostic utility of an 'Item Discrimination Index' (D) in test construction?",
        "question_hi": "परीक्षण निर्माण में 'आइटम विभेदन सूचकांक' (D) की प्राथमिक निदानात्मक उपयोगिता क्या है?",
        "options": {
          "A": "To measure how fast students finish writing the exam",
          "B": "To identify questions that successfully separate high-scoring students from low-scoring students, flagging defective or ambiguous items for revision",
          "C": "To ensure that all students receive identical marks",
          "D": "To translate questions into multiple languages"
        },
        "options_hi": {
          "A": "यह मापना कि छात्र कितनी तेजी से परीक्षा लिखना समाप्त करते हैं",
          "B": "उन प्रश्नों की पहचान करना जो उच्च अंक प्राप्त करने वाले छात्रों को कम अंक प्राप्त करने वाले छात्रों से सफलतापूर्वक अलग करते हैं, और दोषपूर्ण प्रश्नों को हटाने में मदद करते हैं",
          "C": "यह सुनिश्चित करना कि सभी छात्रों को समान अंक मिलें",
          "D": "प्रश्नों का कई भाषाओं में अनुवाद करना"
        },
        "correctAnswer": "B",
        "explanation": "Discrimination index D reveals item quality: items with D >= 0.40 are excellent differentiators; items with D < 0.20 are poor; negative D items must be discarded as misleading.",
        "explanation_hi": "विभेदन सूचकांक (Item Discrimination D) यह बताता है कि प्रश्न अच्छे और कमजोर छात्रों में भेद कर पा रहा है या नहीं। यदि D का मान ऋणात्मक हो, तो प्रश्न दोषपूर्ण होता है और उसे हटा दिया जाता है।"
      },
      {
        "id": 9,
        "questionNumber": 9,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What does a 'Standard Deviation' (SD) of zero in a class's test scores indicate?",
        "question_hi": "कक्षा के परीक्षा अंकों में शून्य का 'मानक विचलन' (SD = 0) क्या दर्शाता है?",
        "options": {
          "A": "The exam was extremely difficult",
          "B": "All students failed the examination",
          "C": "Every single student in the class scored the exact same identical mark",
          "D": "The teacher did not evaluate any papers"
        },
        "options_hi": {
          "A": "परीक्षा अत्यंत कठिन थी",
          "B": "सभी छात्र परीक्षा में अनुत्तीर्ण हो गए",
          "C": "कक्षा के प्रत्येक छात्र ने बिल्कुल समान अंक प्राप्त किए हैं (कोई विचलन नहीं)",
          "D": "शिक्षक ने किसी भी पेपर का मूल्यांकन नहीं किया"
        },
        "correctAnswer": "C",
        "explanation": "Standard deviation measures dispersion around the mean. An SD of zero mathematically means there is zero variability: every observation equals the mean.",
        "explanation_hi": "मानक विचलन (SD) अंकों के फैलाव को मापता है। यदि SD = 0 है, तो इसका अर्थ है कि कक्षा के सभी छात्रों के अंक बिल्कुल एक समान हैं (कोई अंतर या फैलाव नहीं है)।"
      },
      {
        "id": 10,
        "questionNumber": 10,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which action verb is classified under the 'Remembering' cognitive level of Revised Bloom's Taxonomy?",
        "question_hi": "संशोधित ब्लूम वर्गीकरण के 'याद रखना' (Remembering) संज्ञानात्मक स्तर के अंतर्गत कौन सी क्रिया (Action Verb) वर्गीकृत है?",
        "options": {
          "A": "Analyze / Differentiate",
          "B": "Create / Formulate",
          "C": "Evaluate / Judge",
          "D": "Recall / List / State"
        },
        "options_hi": {
          "A": "विश्लेषण करना",
          "B": "सृजन करना",
          "C": "मूल्यांकन करना",
          "D": "याद करना / सूची बनाना / बताना (Recall / List / State)"
        },
        "correctAnswer": "D",
        "explanation": "Remembering is the lowest cognitive level in Bloom's taxonomy, characterized by verbs such as recall, define, list, name, state, and identify factual knowledge.",
        "explanation_hi": "याद रखना (Remembering) ब्लूम का पहला स्तर है जिसमें तथ्यों, परिभाषाओं और सूत्रों का सटीक स्मरण (Recall) और पहचानना शामिल है।"
      },
      {
        "id": 11,
        "questionNumber": 11,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which action verb belongs to the 'Understanding' level of Bloom's Revised Taxonomy?",
        "question_hi": "ब्लूम के संशोधित वर्गीकरण के 'समझना / बोध' (Understanding) स्तर से कौन सी क्रिया संबंधित है?",
        "options": {
          "A": "Explain / Summarize / Paraphrase",
          "B": "Compute / Solve",
          "C": "Dissect / Breakdown",
          "D": "Criticize / Defend"
        },
        "options_hi": {
          "A": "व्याख्या करना / सारांशित करना / अपने शब्दों में कहना (Explain / Summarize)",
          "B": "गणना करना",
          "C": "विच्छेद करना",
          "D": "आलोचना करना"
        },
        "correctAnswer": "A",
        "explanation": "Understanding involves constructing meaning from instructional messages: interpreting, exemplifying, classifying, summarizing, inferring, comparing, and explaining in one's own words.",
        "explanation_hi": "बोध स्तर (Understanding) में छात्र सीखी गई सामग्री को अपने शब्दों में व्यक्त करने, उदाहरण देने, सारांश निकालने और व्याख्या करने में सक्षम होता है।"
      },
      {
        "id": 12,
        "questionNumber": 12,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which action verb is associated with the 'Applying' level of Bloom's Taxonomy?",
        "question_hi": "ब्लूम वर्गीकरण के 'लागू करना / अनुप्रयोग' (Applying) स्तर से कौन सा एक्शन वर्ब जुड़ा है?",
        "options": {
          "A": "List dates of events",
          "B": "Execute / Implement / Solve in a new context",
          "C": "Memorize definitions",
          "D": "Evaluate moral dilemmas"
        },
        "options_hi": {
          "A": "घटनाओं की तारीखें लिखना",
          "B": "निष्पादित करना / लागू करना / नए संदर्भ में हल करना (Implement / Solve)",
          "C": "परिभाषाएं रटना",
          "D": "नैतिक दुविधाओं का मूल्यांकन"
        },
        "correctAnswer": "B",
        "explanation": "Applying involves carrying out or using a procedure or formula in a given novel situation: verbs include compute, solve, demonstrate, apply, and execute.",
        "explanation_hi": "अनुप्रयोग (Applying) स्तर पर छात्र सीखे गए नियमों, सिद्धांतों और गणितीय सूत्रों का उपयोग नई व्यावहारिक समस्याओं को हल करने में करता है।"
      },
      {
        "id": 13,
        "questionNumber": 13,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which action verb is directly associated with the 'Evaluating' level of Bloom's Taxonomy?",
        "question_hi": "ब्लूम वर्गीकरण के 'मूल्यांकन' (Evaluating) स्तर से कौन सा एक्शन वर्ब सीधे संबंधित है?",
        "options": {
          "A": "Draw basic diagrams",
          "B": "Repeat aloud",
          "C": "Critique / Judge / Defend with evidence",
          "D": "Write alphabet letters"
        },
        "options_hi": {
          "A": "बुनियादी चित्र बनाना",
          "B": "जोर से दोहराना",
          "C": "समीक्षा करना / आंकना / साक्ष्यों के साथ बचाव करना (Critique / Judge)",
          "D": "वर्णमाला लिखना"
        },
        "correctAnswer": "C",
        "explanation": "Evaluating involves making judgments based on criteria and standards: checking, critiquing, defending, assessing, and evaluating competing methodologies.",
        "explanation_hi": "मूल्यांकन (Evaluating) में किसी विचार, समाधान या पद्धति की गुणवत्ता और वैधता को तय मानकों और साक्ष्यों के आधार पर जांचा और परखा जाता है।"
      },
      {
        "id": 14,
        "questionNumber": 14,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which action verb belongs to the highest cognitive level 'Creating' in Bloom's Revised Taxonomy?",
        "question_hi": "ब्लूम के संशोधित वर्गीकरण में सर्वोच्च संज्ञानात्मक स्तर 'सृजन' (Creating) से कौन सी क्रिया संबंधित है?",
        "options": {
          "A": "Identify colors",
          "B": "Copy verbatim from notes",
          "C": "State textbook formulas",
          "D": "Design / Formulate / Construct a novel solution"
        },
        "options_hi": {
          "A": "रंग पहचानना",
          "B": "नोट्स से नकल करना",
          "C": "किताब के सूत्र बोलना",
          "D": "डिजाइन करना / तैयार करना / एक नया समाधान बनाना (Design / Formulate / Construct)"
        },
        "correctAnswer": "D",
        "explanation": "Creating is the highest cognitive process: reorganizing disparate elements into a new pattern, generating hypotheses, designing experiments, or building original software.",
        "explanation_hi": "सृजन (Creating) ब्लूम का सर्वोच्च स्तर है जहाँ छात्र विभिन्न तत्वों को जोड़कर एक नया, मौलिक विचार, डिजाइन, परिकल्पना या समाधान तैयार करता है।"
      },
      {
        "id": 15,
        "questionNumber": 15,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In Elizabeth Simpson's Psychomotor Domain of educational objectives, what is the highest level representing natural, effortless, automatic skill performance?",
        "question_hi": "एलिजाबेथ सिम्पसन के मनो-प्रेरक (क्रियात्मक) उद्देश्यों के वर्गीकरण में स्वाभाविक, सहज और स्वचालित कौशल प्रदर्शन का उच्चतम स्तर कौन सा है?",
        "options": {
          "A": "Origination / Naturalization",
          "B": "Imitation",
          "C": "Manipulation",
          "D": "Precision"
        },
        "options_hi": {
          "A": "स्वाभाविकीकरण / मौलिक रचना (Naturalization / Origination)",
          "B": "अनुकरण (Imitation)",
          "C": "हस्तकौशल (Manipulation)",
          "D": "परिशुद्धता (Precision)"
        },
        "correctAnswer": "A",
        "explanation": "Naturalization/Origination is the apex of psychomotor skills: the learner executes complex motor tasks with unconscious fluidity, elegance, speed, and creative improvisation.",
        "explanation_hi": "क्रियात्मक क्षेत्र (Psychomotor Domain) का सर्वोच्च स्तर स्वाभाविकीकरण (Naturalization) है जहाँ शारीरिक कौशल बिना किसी सचेत प्रयास के पूरी तरह स्वाभाविक और स्वचालित हो जाता है।"
      },
      {
        "id": 16,
        "questionNumber": 16,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is 'Assessment AS Learning' in modern educational evaluation?",
        "question_hi": "आधुनिक शैक्षिक मूल्यांकन में 'सीखने के रूप में आकलन' (Assessment AS Learning) क्या है?",
        "options": {
          "A": "Parents grading student homework at home",
          "B": "Students actively self-monitoring, critically evaluating their own learning processes, and setting personal academic goals through metacognition",
          "C": "Receiving teacher punishments for mistakes",
          "D": "Taking external national board exams"
        },
        "options_hi": {
          "A": "माता-पिता द्वारा घर पर गृहकार्य की जांच करना",
          "B": "छात्रों द्वारा अपनी सीखने की प्रक्रियाओं की सक्रिय स्व-निगरानी करना, मेटाकॉग्निशन द्वारा आत्म-मूल्यांकन करना और व्यक्तिगत लक्ष्य तय करना",
          "C": "गलतियों के लिए शिक्षक से दंड पाना",
          "D": "बाहरी राष्ट्रीय बोर्ड परीक्षा देना"
        },
        "correctAnswer": "B",
        "explanation": "Assessment AS Learning develops students' metacognitive capacities: learners act as critical assessors of their own learning, diagnosing their own progress against rubrics.",
        "explanation_hi": "सीखने के रूप में आकलन (Assessment AS Learning) छात्र-केंद्रित होता है जहाँ छात्र स्वयं अपने काम की समीक्षा करता है, अपनी कमजोरियों को पहचानता है और स्व-मूल्यांकन करता है।"
      },
      {
        "id": 17,
        "questionNumber": 17,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is a 'Portfolio Assessment' in continuous evaluation?",
        "question_hi": "सतत मूल्यांकन में 'पोर्टफोलियो मूल्यांकन' (Portfolio Assessment) क्या है?",
        "options": {
          "A": "A leather folder holding report cards only",
          "B": "A multiple-choice computerized test",
          "C": "A purposeful, systematic collection of student work over time that documents growth, effort, skills, and academic achievements across subjects",
          "D": "A punishment diary kept by the discipline teacher"
        },
        "options_hi": {
          "A": "केवल रिपोर्ट कार्ड रखने वाला लेदर फोल्डर",
          "B": "एक बहुविकल्पीय कम्प्यूटरीकृत परीक्षण",
          "C": "समय के साथ छात्र के चुनिंदा कार्यों का एक व्यवस्थित संग्रह जो विभिन्न विषयों में उसकी प्रगति, प्रयास, कौशल और उपलब्धियों को प्रदर्शित करता है",
          "D": "अनुशासन शिक्षक द्वारा रखी गई दंड डायरी"
        },
        "correctAnswer": "C",
        "explanation": "A student portfolio contains selected drafts, essays, lab reports, artwork, and reflective self-assessments accumulated across an academic year, evidencing progressive longitudinal mastery.",
        "explanation_hi": "पोर्टफोलियो (Portfolio) छात्र द्वारा किए गए सर्वोत्तम कार्यों का क्रमिक और उद्देश्यपूर्ण संग्रह है जो समय के साथ उसके ज्ञान, कौशल, रचनात्मकता और शैक्षणिक विकास की कहानी बयां करता है।"
      },
      {
        "id": 18,
        "questionNumber": 18,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the difference between a Holistic Rubric and an Analytic Rubric?",
        "question_hi": "होलिस्टिक रूब्रिक (समग्र रूब्रिक) और एनालिटिक रूब्रिक (विश्लेषणात्मक रूब्रिक) के बीच क्या अंतर है?",
        "options": {
          "A": "Analytic rubrics take less time than holistic rubrics",
          "B": "Holistic rubrics are used in art; analytic rubrics only in mathematics",
          "C": "Holistic rubrics are written in Hindi; analytic in English",
          "D": "A Holistic Rubric evaluates overall performance as a single composite score; an Analytic Rubric evaluates each specific criterion independently with separate scores"
        },
        "options_hi": {
          "A": "एनालिटिक रूब्रिक में कम समय लगता है",
          "B": "होलिस्टिक रूब्रिक कला में उपयोग होता है; एनालिटिक केवल गणित में",
          "C": "होलिस्टिक हिंदी में लिखा जाता है; एनालिटिक अंग्रेजी में",
          "D": "समग्र रूब्रिक (Holistic) समग्र प्रदर्शन का एक एकल समग्र स्कोर के रूप में मूल्यांकन करता है; विश्लेषणात्मक रूब्रिक (Analytic) प्रत्येक विशिष्ट मानदंड का अलग-अलग अंकों के साथ स्वतंत्र मूल्यांकन करता है"
        },
        "correctAnswer": "D",
        "explanation": "Holistic scoring judges the total product as a whole on a single scale. Analytic scoring breaks the assignment into individual traits (e.g., content, organization, grammar) scored on separate rubric scales.",
        "explanation_hi": "होलिस्टिक रूब्रिक (Holistic Rubric) पूरे कार्य का एक समग्र अंक देता है। जबकि एनालिटिक रूब्रिक (Analytic Rubric) कार्य के अलग-अलग पहलुओं (जैसे विषय-वस्तु, भाषा, संगठन, प्रस्तुति) को अलग-अलग जांचकर विस्तृत फीडबैक देता है।"
      },
      {
        "id": 19,
        "questionNumber": 19,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What does 'Test-Retest Reliability' measure in an achievement test?",
        "question_hi": "उपलब्धि परीक्षण में 'परीक्षण-पुनर्परीक्षण विश्वसनीयता' (Test-Retest Reliability) क्या मापती है?",
        "options": {
          "A": "The stability and consistency of test scores over time when administered to the same group of students on two different occasions",
          "B": "The length of the test paper",
          "C": "The spelling accuracy of the examiner",
          "D": "The speed at which students submit papers"
        },
        "options_hi": {
          "A": "दो अलग-अलग अवसरों पर छात्रों के एक ही समूह को प्रशासित किए जाने पर समय के साथ परीक्षा अंकों की स्थिरता और निरंतरता",
          "B": "प्रश्न पत्र की लंबाई",
          "C": "परीक्षक की वर्तनी शुद्धता",
          "D": "जिस गति से छात्र पेपर जमा करते हैं"
        },
        "correctAnswer": "A",
        "explanation": "Test-Retest reliability measures temporal stability: identical tests administered weeks apart should yield a high positive correlation (r >= 0.80) if the psychological trait is stable.",
        "explanation_hi": "परीक्षण-पुनर्परीक्षण विश्वसनीयता (Test-Retest Reliability) यह जांचती है कि यदि एक ही परीक्षा कुछ समय के अंतराल पर उन्हीं छात्रों से दोबारा ली जाए, तो अंकों में कितनी स्थिरता और समानता रहती है।"
      },
      {
        "id": 20,
        "questionNumber": 20,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is 'Face Validity' of an educational test?",
        "question_hi": "शैक्षिक परीक्षण की 'आभासी / प्रत्यक्ष वैधता' (Face Validity) क्या है?",
        "options": {
          "A": "The facial expressions of candidates during testing",
          "B": "The superficial appearance to test-takers and laypeople that the test looks relevant, appropriate, and measures what it claims to measure",
          "C": "The mathematical correlation with a gold standard test",
          "D": "The ink clarity of the test booklet"
        },
        "options_hi": {
          "A": "परीक्षा के दौरान उम्मीदवारों के चेहरे के भाव",
          "B": "परीक्षार्थियों और आम लोगों को सतही तौर पर यह प्रतीत होना कि परीक्षण प्रासंगिक, उपयुक्त है और उसी चीज को मापता है जिसका वह दावा करता है",
          "C": "स्वर्ण मानक परीक्षण के साथ गणितीय सहसंबंध",
          "D": "परीक्षण पुस्तिका की स्याही स्पष्टता"
        },
        "correctAnswer": "B",
        "explanation": "Face validity is not psychometric validity in the statistical sense; it merely refers to whether the test items appear superficially reasonable and fair to students and the public.",
        "explanation_hi": "आभासी वैधता (Face Validity) का अर्थ है कि देखने में ही प्रश्न-पत्र उस विषय के अनुकूल और प्रासंगिक प्रतीत होता है (जैसे गणित की परीक्षा में गणितीय सवाल ही दिखना)।"
      },
      {
        "id": 21,
        "questionNumber": 21,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is 'Concurrent Validity' in educational measurement?",
        "question_hi": "शैक्षिक मापन में 'समवर्ती वैधता' (Concurrent Validity) क्या है?",
        "options": {
          "A": "Testing multiple subjects on the same afternoon",
          "B": "Passing an examination with distinction",
          "C": "The degree to which scores on a newly designed test correlate with scores on an established, validated criterion test administered simultaneously",
          "D": "Verifying the test font size"
        },
        "options_hi": {
          "A": "एक ही दोपहर में कई विषयों का परीक्षण",
          "B": "डिस्टिंक्शन के साथ परीक्षा उत्तीर्ण करना",
          "C": "वह सीमा जिस तक एक नए डिज़ाइन किए गए परीक्षण के अंक एक साथ प्रशासित स्थापित मान्य परीक्षण के अंकों के साथ सहसंबंधित होते हैं",
          "D": "परीक्षण फ़ॉन्ट आकार को सत्यापित करना"
        },
        "correctAnswer": "C",
        "explanation": "Concurrent validity assesses how well a new, shorter or cheaper test correlates with an existing accepted 'gold standard' test administered at approximately the same time.",
        "explanation_hi": "समवर्ती वैधता (Concurrent Validity) यह मापती है कि नए परीक्षण के परिणाम उसी समय लिए गए किसी पहले से स्थापित और प्रामाणिक परीक्षण के परिणामों से कितने मिलते-जुलते हैं।"
      },
      {
        "id": 22,
        "questionNumber": 22,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What does 'Objectivity' mean in the scoring of an examination paper?",
        "question_hi": "परीक्षा पत्र के मूल्यांकन में 'वस्तुनिष्ठता' (Objectivity) का क्या अर्थ है?",
        "options": {
          "A": "The test contains only subjective essays",
          "B": "The score is based on the student's physical appearance",
          "C": "The exam is conducted in the dark",
          "D": "The score awarded to a student is completely independent of the personal opinion, subjective bias, mood, or identity of the evaluator"
        },
        "options_hi": {
          "A": "परीक्षण में केवल व्यक्तिपरक निबंध शामिल हैं",
          "B": "अंक छात्र के शारीरिक रूप-रंग पर आधारित होते हैं",
          "C": "परीक्षा अंधेरे में आयोजित की जाती है",
          "D": "छात्र को दिए गए अंक मूल्यांकनकर्ता की व्यक्तिगत राय, व्यक्तिपरक पूर्वाग्रह, मनोदशा या पहचान से पूरी तरह स्वतंत्र होते हैं"
        },
        "correctAnswer": "D",
        "explanation": "A test possesses objectivity of scoring when multiple independent scorers award the exact same marks to a given student response (as achieved in multiple-choice questions with objective answer keys).",
        "explanation_hi": "वस्तुनिष्ठता (Objectivity) का अर्थ है कि मूल्यांकन पर परीक्षक के व्यक्तिगत विचारों, पसंद-नापसंद या मूड का कोई प्रभाव नहीं पड़ता। चाहे कोई भी जांचे, छात्र को बिल्कुल समान अंक मिलेंगे।"
      },
      {
        "id": 23,
        "questionNumber": 23,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is a 'Z-Score' in standard educational statistics?",
        "question_hi": "मानक शैक्षिक सांख्यिकी में 'Z-स्कोर' (Z-Score) क्या है?",
        "options": {
          "A": "A standardized score indicating how many standard deviations a raw score lies above or below the distribution mean: Z = (X - Mean) / SD",
          "B": "The grade scored on the final letter exam",
          "C": "The zero score awarded for cheating",
          "D": "The percentile rank multiplied by 100"
        },
        "options_hi": {
          "A": "एक मानकीकृत स्कोर जो बताता है कि कच्चा स्कोर वितरण माध्य से कितने मानक विचलन ऊपर या नीचे है: Z = (X - Mean) / SD",
          "B": "अंतिम परीक्षा में प्राप्त ग्रेड",
          "C": "नकल करने पर दिया गया शून्य अंक",
          "D": "पर्सेंटाइल रैंक को 100 से गुणा करना"
        },
        "correctAnswer": "A",
        "explanation": "A Z-score transforms raw scores into standard deviation units, allowing direct, meaningful comparison of student performance across different subjects with different means and scales.",
        "explanation_hi": "Z-स्कोर एक मानक प्राप्तांक है जो यह दर्शाता है कि छात्र का प्राप्तांक कक्षा के औसत (Mean) से कितने मानक विचलन (SD) दूर है। सूत्र: Z = (X - Mean) / SD।"
      },
      {
        "id": 24,
        "questionNumber": 24,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In statistics, what is the 'T-Score' derived from a Z-Score?",
        "question_hi": "सांख्यिकी में Z-स्कोर से प्राप्त 'T-स्कोर' (T-Score) क्या है?",
        "options": {
          "A": "The total time spent writing answers",
          "B": "A linear transformation that eliminates negative numbers and decimals: T = 50 + 10 * Z (Mean = 50, SD = 10)",
          "C": "The temperature of the examination hall",
          "D": "The teacher's personal rating"
        },
        "options_hi": {
          "A": "उत्तर लिखने में बिताया गया कुल समय",
          "B": "एक रैखिक परिवर्तन जो ऋणात्मक संख्याओं और दशमलवों को समाप्त करता है: T = 50 + 10 * Z (माध्य = 50, SD = 10)",
          "C": "परीक्षा हॉल का तापमान",
          "D": "शिक्षक की व्यक्तिगत रेटिंग"
        },
        "correctAnswer": "B",
        "explanation": "T-scores scale Z-scores to a convenient distribution with a Mean of 50 and a Standard Deviation of 10, preventing negative numbers and decimal fractions in standardized reporting.",
        "explanation_hi": "T-स्कोर एक रूपांतरित मानक स्कोर है जिसका माध्य हमेशा 50 और मानक विचलन 10 होता है (T = 50 + 10Z)। इससे ऋणात्मक अंकों और दशमलव की समस्या दूर हो जाती है।"
      },
      {
        "id": 25,
        "questionNumber": 25,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In classroom management, what is 'Time-on-Task' (Academic Learning Time)?",
        "question_hi": "कक्षा प्रबंधन में 'कार्य पर समय' (Time-on-Task / एकेडमिक लर्निंग टाइम) क्या है?",
        "options": {
          "A": "The recess break duration",
          "B": "The total hours the school building remains open",
          "C": "The amount of time students are actively, meaningfully engaged in learning activities with high success rates",
          "D": "The time taken by the teacher to call attendance"
        },
        "options_hi": {
          "A": "लंच ब्रेक की अवधि",
          "B": "स्कूल की इमारत खुले रहने के कुल घंटे",
          "C": "वह समय जब छात्र उच्च सफलता दर के साथ सीखने की गतिविधियों में सक्रिय और सार्थक रूप से लगे होते हैं",
          "D": "शिक्षक द्वारा हाजिरी लगाने में लिया गया समय"
        },
        "correctAnswer": "C",
        "explanation": "Academic Learning Time (ALT) is the subset of allocated instructional time during which students are actively focused on and comprehending the learning task, directly predicting academic achievement.",
        "explanation_hi": "Time-on-Task (सक्रिय शिक्षण समय) वह वास्तविक अवधि है जिसमें छात्र कक्षा में बिना ध्यान भटकाए सीधे विषय-वस्तु को सीखने और अभ्यास करने में सक्रिय रूप से लगे होते हैं।"
      },
      {
        "id": 26,
        "questionNumber": 26,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is 'Teacher Burnout' in educational psychology?",
        "question_hi": "शिक्षा मनोविज्ञान में 'शिक्षक बर्नआउट' (Teacher Burnout) क्या है?",
        "options": {
          "A": "Retiring at the official age of 60",
          "B": "A fire hazard inside the physics laboratory",
          "C": "A teacher taking annual sick leave",
          "D": "A state of physical, emotional, and mental exhaustion caused by chronic occupational stress, characterized by emotional exhaustion, depersonalization, and reduced personal accomplishment"
        },
        "options_hi": {
          "A": "60 वर्ष की आधिकारिक आयु में सेवानिवृत्त होना",
          "B": "भौतिकी प्रयोगशाला में आग का खतरा",
          "C": "शिक्षक का वार्षिक बीमारी अवकाश लेना",
          "D": "पुरानी व्यावसायिक तनाव के कारण शारीरिक, भावनात्मक और मानसिक थकावट की स्थिति, जो भावनात्मक थकावट और कम व्यक्तिगत उपलब्धि से चिह्नित होती है"
        },
        "correctAnswer": "D",
        "explanation": "Teacher burnout involves emotional exhaustion (feeling drained), depersonalization (cynical detachment from students), and a diminished sense of personal teaching efficacy, requiring institutional supportive interventions.",
        "explanation_hi": "शिक्षक बर्नआउट (Teacher Burnout) अत्यधिक कार्यभार, अनुशासन समस्याओं और प्रशासनिक तनाव के कारण होने वाली गंभीर मानसिक और भावनात्मक थकावट है, जिससे शिक्षक में उत्साह और संवेदनशीलता की कमी हो जाती है।"
      },
      {
        "id": 27,
        "questionNumber": 27,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following represents the correct sequence of Johann Friedrich Herbart's formal five steps of teaching?",
        "question_hi": "जोहान फ्रेडरिक हर्बर्ट के शिक्षण के औपचारिक पांच चरणों का सही क्रम निम्नलिखित में से कौन सा है?",
        "options": {
          "A": "Preparation, Presentation, Association, Generalization, Application",
          "B": "Presentation, Preparation, Generalization, Association, Evaluation",
          "C": "Preparation, Association, Presentation, Application, Generalization",
          "D": "Introduction, Statement of Aim, Recapitulation, Homework, Evaluation"
        },
        "options_hi": {
          "A": "प्रस्तावना (तैयारी), प्रस्तुतीकरण, संबंध (तुलना), सामान्यीकरण, अनुप्रयोग",
          "B": "प्रस्तुतीकरण, प्रस्तावना, सामान्यीकरण, संबंध, मूल्यांकन",
          "C": "प्रस्तावना, संबंध, प्रस्तुतीकरण, अनुप्रयोग, सामान्यीकरण",
          "D": "परिचय, उद्देश्य कथन, पुनरावृत्ति, गृहकार्य, मूल्यांकन"
        },
        "correctAnswer": "A",
        "explanation": "Herbart's 5-step instructional model proceeds as: 1. Preparation (linking past knowledge), 2. Presentation (new material), 3. Association/Comparison (relating ideas), 4. Generalization (deriving rules/laws), and 5. Application (using new knowledge in practical situations).",
        "explanation_hi": "हर्बर्ट की पंचपदीय शिक्षण प्रणाली के चरण हैं: 1. प्रस्तावना (पूर्व ज्ञान से जोड़ना), 2. प्रस्तुतीकरण (नया ज्ञान देना), 3. तुलना या संबंध स्थापन, 4. सामान्यीकरण (सिद्धांत या नियम निकालना), और 5. अनुप्रयोग (नवीन परिस्थितियों में प्रयोग)।"
      },
      {
        "id": 28,
        "questionNumber": 28,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM)), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM)) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Administering punitive exams without constructive feedback",
          "B": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Enforcing rote repetition without conceptual understanding"
        },
        "options_hi": {
          "A": "बिना फीडबैक के दंडनीय परीक्षा",
          "B": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "C": "केवल किताब पढ़ना",
          "D": "बिना समझे रटना"
        },
        "correctAnswer": "B",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 1 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 29,
        "questionNumber": 29,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In the constructivist 5E instructional model (Bybee), what is the primary role of the learner during the 'Explore' phase?",
        "question_hi": "रचनावादी 5E शिक्षण मॉडल (Bybee) में, 'अन्वेषण' (Explore) चरण के दौरान शिक्षार्थी की प्राथमिक भूमिका क्या होती है?",
        "options": {
          "A": "Listen attentively to the teacher's formal definitions and formulas",
          "B": "Take a written summative exam to determine final mastery",
          "C": "Actively manipulate materials, test predictions, and collaborate without direct teacher instruction",
          "D": "Memorize textbook summaries and copy notes from the board"
        },
        "options_hi": {
          "A": "शिक्षक द्वारा दी गई औपचारिक परिभाषाओं और सूत्रों को ध्यान से सुनना",
          "B": "अंतिम योग्यता निर्धारित करने के लिए लिखित योगात्मक परीक्षा देना",
          "C": "शिक्षक के सीधे व्याख्यान के बिना सामग्रियों के साथ सक्रिय रूप से कार्य करना, परिकल्पनाओं का परीक्षण और सहपाठियों के साथ सहयोग करना",
          "D": "पाठ्यपुस्तक के सारांश को याद करना और बोर्ड से नोट्स कॉपी करना"
        },
        "correctAnswer": "C",
        "explanation": "In Bybee's 5E Model (Engage, Explore, Explain, Elaborate, Evaluate), the 'Explore' stage allows students to work with hands-on materials, observe, experiment, and collaborate before the teacher introduces formal vocabulary in the 'Explain' stage.",
        "explanation_hi": "5E मॉडल (Engage, Explore, Explain, Elaborate, Evaluate) के अन्वेषण (Explore) चरण में छात्र स्वयं प्रयोग करके, सामग्री को छूकर और सहपाठियों से संवाद करके समझ विकसित करते हैं, जिसके बाद शिक्षक औपचारिक व्याख्या (Explain) प्रस्तुत करता है।"
      },
      {
        "id": 30,
        "questionNumber": 30,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In Ned Flanders' Interaction Analysis Categories (FIAC), how many categories are allocated to Teacher Talk, Student Talk, and Silence/Confusion respectively?",
        "question_hi": "नेड फ्लैंडर्स की अंतःक्रिया विश्लेषण प्रणाली (FIAC) में क्रमशः शिक्षक कथन (Teacher Talk), छात्र कथन (Student Talk) और मौन/भ्रांति (Silence/Confusion) के लिए कितनी श्रेणियां आवंटित हैं?",
        "options": {
          "A": "4 categories for Teacher Talk, 4 for Student Talk, 2 for Silence/Confusion",
          "B": "5 categories for Teacher Talk, 4 for Student Talk, 1 for Silence/Confusion",
          "C": "6 categories for Teacher Talk, 3 for Student Talk, 1 for Silence/Confusion",
          "D": "7 categories for Teacher Talk, 2 for Student Talk, 1 for Silence/Confusion"
        },
        "options_hi": {
          "A": "शिक्षक कथन के लिए 4 श्रेणियां, छात्र कथन के लिए 4, मौन/भ्रांति के लिए 2",
          "B": "शिक्षक कथन के लिए 5 श्रेणियां, छात्र कथन के लिए 4, मौन/भ्रांति के लिए 1",
          "C": "शिक्षक कथन के लिए 6 श्रेणियां, छात्र कथन के लिए 3, मौन/भ्रांति के लिए 1",
          "D": "शिक्षक कथन के लिए 7 श्रेणियां, छात्र कथन के लिए 2, मौन/भ्रांति के लिए 1"
        },
        "correctAnswer": "D",
        "explanation": "Flanders' 10-category system classifies classroom verbal behavior into: 1-7 (Teacher Talk, where 1-4 are indirect and 5-7 are direct), 8-9 (Pupil Talk: response and initiation), and 10 (Silence or Confusion).",
        "explanation_hi": "फ्लैंडर्स के 10-श्रेणी अंतःक्रिया विश्लेषण में श्रेणी 1 से 7 तक शिक्षक वार्ता (Teacher Talk), श्रेणी 8 और 9 छात्र वार्ता (Pupil Talk), तथा श्रेणी 10 मौन या भ्रम (Silence/Confusion) के लिए निर्धारित है।"
      },
      {
        "id": 31,
        "questionNumber": 31,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary objective of Action Research conducted by a school teacher?",
        "question_hi": "एक विद्यालय शिक्षक द्वारा किए जाने वाले क्रियात्मक अनुसंधान (Action Research) का प्राथमिक उद्देश्य क्या होता है?",
        "options": {
          "A": "To solve immediate, practical classroom and school-level operational problems to improve practice",
          "B": "To formulate grand universal scientific theories and publish in international journals",
          "C": "To compare global educational standards across different nations",
          "D": "To evaluate the monetary budget allocation of state education departments"
        },
        "options_hi": {
          "A": "शिक्षण कार्यप्रणाली और कक्षा की तात्कालिक व्यावहारिक समस्याओं का समाधान कर शिक्षण में सुधार करना",
          "B": "सार्वभौमिक वैज्ञानिक सिद्धांतों का निर्माण करना और अंतरराष्ट्रीय पत्रिकाओं में प्रकाशित करना",
          "C": "विभिन्न देशों के बीच वैश्विक शैक्षिक मानकों की तुलना करना",
          "D": "राज्य शिक्षा विभागों के मौद्रिक बजट आवंटन का मूल्यांकन करना"
        },
        "correctAnswer": "A",
        "explanation": "Action research (popularized in education by Stephen Corey) is conducted by educational practitioners (teachers, principals) to diagnose, reflect, and solve immediate problems within their own classrooms/schools to enhance teaching-learning efficacy.",
        "explanation_hi": "क्रियात्मक अनुसंधान (Action Research) का मुख्य उद्देश्य कक्षा या विद्यालय की तात्कालिक, स्थानीय समस्याओं का समाधान करना और स्वयं की शिक्षण प्रक्रिया में सुधार लाना होता है, न कि व्यापक सिद्धांत बनाना।"
      },
      {
        "id": 32,
        "questionNumber": 32,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "According to Robert Gagne's Conditions of Learning, what is the very FIRST event of instruction?",
        "question_hi": "रॉबर्ट गैगने के अधिगम के सोपानों के अनुसार, अनुदेशन की 9 घटनाओं (Events of Instruction) में सबसे पहली घटना कौन सी है?",
        "options": {
          "A": "Informing learners of objectives (expectancy)",
          "B": "Gaining attention (reception)",
          "C": "Stimulating recall of prior learning (retrieval)",
          "D": "Presenting the stimulus (selective perception)"
        },
        "options_hi": {
          "A": "शिक्षार्थियों को उद्देश्य से अवगत कराना",
          "B": "ध्यान आकर्षित करना (Gaining attention)",
          "C": "पूर्व ज्ञान का स्मरण कराना",
          "D": "सामग्री या उद्दीपक प्रस्तुत करना"
        },
        "correctAnswer": "B",
        "explanation": "Gagne's 9 Events of Instruction begin with: 1. Gaining attention (arousing curiosity/alertness), followed by 2. Informing learners of objectives, 3. Stimulating recall of prior learning, 4. Presenting the content, etc.",
        "explanation_hi": "गैगने के 9 अनुदेशात्मक चरणों में पहला चरण 'ध्यान आकर्षित करना' (Gaining Attention) है, जिससे शिक्षार्थियों की एकाग्रता और तत्परता विषय वस्तु की ओर केंद्रित होती है।"
      },
      {
        "id": 33,
        "questionNumber": 33,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which type of assessment is conducted strictly during the instructional process to monitor learning and provide ongoing corrective feedback?",
        "question_hi": "अधिगम की निगरानी करने और निरंतर सुधारात्मक प्रतिपुष्टि (Feedback) प्रदान करने के लिए शिक्षण प्रक्रिया के दौरान कौन सा मूल्यांकन आयोजित किया जाता है?",
        "options": {
          "A": "Placement Assessment",
          "B": "Summative Assessment",
          "C": "Formative Assessment",
          "D": "Norm-Referenced Standardized Testing"
        },
        "options_hi": {
          "A": "स्थापन मूल्यांकन (Placement Assessment)",
          "B": "योगात्मक मूल्यांकन (Summative Assessment)",
          "C": "रचनात्मक / निर्माणात्मक मूल्यांकन (Formative Assessment)",
          "D": "मानक-संदर्भित मानकीकृत परीक्षण"
        },
        "correctAnswer": "C",
        "explanation": "Formative assessment ('assessment for learning') occurs during instruction to diagnose misconceptions and offer real-time feedback to guide teachers and learners, unlike summative assessment which evaluates final achievement at the end.",
        "explanation_hi": "रचनात्मक (निर्माणात्मक) मूल्यांकन शिक्षण प्रक्रिया के साथ-साथ चलता है। इसका मुख्य उद्देश्य छात्रों की प्रगति की जांच करना और सुधारात्मक प्रतिक्रिया (फीडबैक) देकर अधिगम में सुधार करना है।"
      },
      {
        "id": 34,
        "questionNumber": 34,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In education, a 'Rubric' is best defined as:",
        "question_hi": "शिक्षा में, 'रूब्रिक' (Rubric) को सर्वोत्तम रूप से किस रूप में परिभाषित किया जाता है?",
        "options": {
          "A": "A punishment system for disobedient students in secondary schools",
          "B": "A standardized national textbook published by NCERT",
          "C": "An attendance register maintained exclusively by the headmaster",
          "D": "A scoring guide with specific criteria and performance levels used to assess student work objectively"
        },
        "options_hi": {
          "A": "माध्यमिक विद्यालयों में अवज्ञाकारी छात्रों के लिए दंड प्रणाली",
          "B": "NCERT द्वारा प्रकाशित एक मानकीकृत राष्ट्रीय पाठ्यपुस्तक",
          "C": "विशेष रूप से प्रधानाध्यापक द्वारा रखी जाने वाली उपस्थिति पंजी",
          "D": "छात्रों के कार्य का वस्तुनिष्ठ मूल्यांकन करने के लिए विशिष्ट मानदंडों और प्रदर्शन स्तरों वाली एक अंकन मार्गदर्शिका (Scoring Guide)"
        },
        "correctAnswer": "D",
        "explanation": "A rubric is an explicit scoring matrix that lays out qualitative performance criteria and graduated performance descriptions (e.g., Novice, Competent, Exemplary) for evaluating essays, projects, and portfolios.",
        "explanation_hi": "रूब्रिक एक मूल्यांकन उपकरण (Scoring Guide) है जिसमें छात्रों के प्रदर्शन के विभिन्न स्तरों और उनके मूल्यांकन के स्पष्ट मानक (Criteria) पूर्व-निर्धारित होते हैं, जिससे निष्पक्ष मूल्यांकन संभव होता है।"
      },
      {
        "id": 35,
        "questionNumber": 35,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What does the 'Spiral Curriculum' concept formulated by Jerome Bruner emphasize?",
        "question_hi": "जेरोम ब्रूनर द्वारा प्रतिपादित 'सर्पिल पाठ्यचर्या' (Spiral Curriculum) की अवधारणा किस पर बल देती है?",
        "options": {
          "A": "Revisiting key concepts repeatedly across grade levels at increasing depths and complexity",
          "B": "Teaching topics once and never repeating them in subsequent academic years",
          "C": "Eliminating abstract sciences completely from secondary curricula",
          "D": "Allowing students to choose arbitrary syllabi without sequential structure"
        },
        "options_hi": {
          "A": "प्रत्येक कक्षा स्तर पर प्रमुख अवधारणाओं को बढ़ती हुई जटिलता और गहराई के साथ बार-बार दोहराना",
          "B": "विषयों को केवल एक बार पढ़ाना और बाद के शैक्षणिक वर्षों में उन्हें कभी न दोहराना",
          "C": "माध्यमिक पाठ्यचर्या से अमूर्त विज्ञान को पूरी तरह समाप्त करना",
          "D": "छात्रों को बिना किसी क्रमिक संरचना के मनमाना पाठ्यक्रम चुनने की अनुमति देना"
        },
        "correctAnswer": "A",
        "explanation": "Jerome Bruner proposed that any subject can be taught effectively in some intellectually honest form to any child at any stage of development by revisiting fundamental ideas spirally with increasing sophistication.",
        "explanation_hi": "ब्रूनर के स्पाइरल (सर्पिल) पाठ्यक्रम सिद्धांत का अर्थ है कि आधारभूत अवधारणाओं को समय-समय पर पुनः प्रस्तुत किया जाए और प्रत्येक स्तर पर उनकी गहनता व जटिलता को बढ़ाया जाए।"
      },
      {
        "id": 36,
        "questionNumber": 36,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In the microteaching cycle proposed by Allen and Ryan (and adapted by NCERT), what is the total duration of one standard cycle?",
        "question_hi": "एलन और रयान द्वारा प्रस्तावित (तथा NCERT द्वारा भारतीय परिस्थितियों में अपनाए गए) सूक्ष्म-शिक्षण चक्र की कुल मानक अवधि कितनी है?",
        "options": {
          "A": "20 minutes",
          "B": "36 minutes",
          "C": "45 minutes",
          "D": "60 minutes"
        },
        "options_hi": {
          "A": "20 मिनट",
          "B": "36 मिनट",
          "C": "45 मिनट",
          "D": "60 मिनट"
        },
        "correctAnswer": "B",
        "explanation": "NCERT's standard microteaching cycle is 36 minutes: Teach (6 min), Feedback (6 min), Re-plan (12 min), Re-teach (6 min), Re-feedback (6 min).",
        "explanation_hi": "NCERT के अनुसार सूक्ष्म-शिक्षण चक्र की कुल अवधि 36 मिनट होती है: शिक्षण (6 मिनट) + प्रतिपुष्टि (6 मिनट) + पुनः योजना (12 मिनट) + पुनः शिक्षण (6 मिनट) + पुनः प्रतिपुष्टि (6 मिनट)।"
      },
      {
        "id": 37,
        "questionNumber": 37,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which psychological principle forms the foundation of programmed learning developed by B.F. Skinner?",
        "question_hi": "बी.एफ. स्किनर द्वारा विकसित अभिक्रमित अनुदेशन (Programmed Instruction) की आधारशिला कौन सा मनोवैज्ञानिक सिद्धांत है?",
        "options": {
          "A": "Gestalt insight and sudden perceptual restructuring",
          "B": "Classical conditioning of involuntary reflexes",
          "C": "Operant conditioning and immediate positive reinforcement",
          "D": "Social observational modeling and vicarious imitation"
        },
        "options_hi": {
          "A": "गेस्टाल्ट अंतर्दृष्टि और अचानक प्रत्यक्षीकरण पुनर्गठन",
          "B": "अनैच्छिक प्रतिवर्तों का शास्त्रीय अनुबंधन",
          "C": "सक्रिय अनुबंधन (क्रियाप्रसूत अनुबंधन) और तत्काल सकारात्मक पुनर्बलन",
          "D": "सामाजिक अवलोकनात्मक मॉडलिंग और अनुकरण"
        },
        "correctAnswer": "C",
        "explanation": "Skinner's programmed instruction is based on Operant Conditioning principles: small steps, active responding, immediate feedback/reinforcement, and self-pacing.",
        "explanation_hi": "अभिक्रमित अनुदेशन स्किनर के 'क्रियाप्रसूत अनुबंधन' (Operant Conditioning) सिद्धांत पर आधारित है, जिसमें सामग्री को छोटे-छोटे पदों में बांटकर तुरंत पृष्ठपोषण (पुनर्बलन) प्रदान किया जाता है।"
      },
      {
        "id": 38,
        "questionNumber": 38,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In an examination, if a test yields consistent and stable results upon repeated administration to the same group of students under identical conditions, the test is said to possess high:",
        "question_hi": "यदि कोई परीक्षा समान परिस्थितियों में एक ही छात्र समूह पर बार-बार प्रशासित करने पर सुसंगत और स्थिर परिणाम देती है, तो उस परीक्षण में क्या उच्च माना जाता है?",
        "options": {
          "A": "Subjectivity",
          "B": "Validity",
          "C": "Usability",
          "D": "Reliability"
        },
        "options_hi": {
          "A": "व्यक्तिपरकता (Subjectivity)",
          "B": "वैधता (Validity)",
          "C": "उपयोगिता (Usability)",
          "D": "विश्वसनीयता (Reliability)"
        },
        "correctAnswer": "D",
        "explanation": "Reliability refers to the consistency, stability, and repeatability of test scores. Validity refers to whether the test measures what it claims to measure.",
        "explanation_hi": "विश्वसनीयता (Reliability) का अर्थ परीक्षण परिणामों की स्थिरता और संगति से है। यदि बार-बार परीक्षण करने पर भी अंक समान आते हैं, तो परीक्षण विश्वसनीय है।"
      },
      {
        "id": 39,
        "questionNumber": 39,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "According to the National Education Policy (NEP) 2020, what is the structure of the 'Middle Stage' of school education?",
        "question_hi": "राष्ट्रीय शिक्षा नीति (NEP) 2020 के अनुसार, स्कूली शिक्षा के 'मध्य चरण' (Middle Stage) की संरचना क्या है?",
        "options": {
          "A": "3 years covering Classes 6 to 8 for age group 11 to 14 years",
          "B": "2 years covering Classes 9 and 10 for age group 14 to 16 years",
          "C": "5 years covering Preschool to Class 2 for age group 3 to 8 years",
          "D": "4 years covering Classes 9 to 12 for age group 14 to 18 years"
        },
        "options_hi": {
          "A": "3 वर्ष, कक्षा 6 से 8 (आयु वर्ग 11 से 14 वर्ष)",
          "B": "2 वर्ष, कक्षा 9 और 10 (आयु वर्ग 14 से 16 वर्ष)",
          "C": "5 वर्ष, प्री-स्कूल से कक्षा 2 (आयु वर्ग 3 से 8 वर्ष)",
          "D": "4 वर्ष, कक्षा 9 से 12 (आयु वर्ग 14 से 18 वर्ष)"
        },
        "correctAnswer": "A",
        "explanation": "NEP 2020 introduces the 5+3+3+4 design: Foundational (5 yrs: ages 3-8), Preparatory (3 yrs: Classes 3-5, ages 8-11), Middle (3 yrs: Classes 6-8, ages 11-14), and Secondary (4 yrs: Classes 9-12, ages 14-18).",
        "explanation_hi": "NEP 2020 के 5+3+3+4 प्रारूप में मिडिल स्टेज (Middle Stage) 3 वर्ष का है, जिसमें कक्षा 6 से 8 के छात्र (आयु 11-14 वर्ष) शामिल हैं।"
      },
      {
        "id": 40,
        "questionNumber": 40,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary function of a 'Diagnostic Test' in a classroom?",
        "question_hi": "कक्षा में 'निदानात्मक परीक्षण' (Diagnostic Test) का मुख्य कार्य क्या है?",
        "options": {
          "A": "To evaluate the teacher's administrative punctuality",
          "B": "To pinpoint specific learning deficiencies and underlying misconceptions of individual students",
          "C": "To select top scholarship recipients across the state",
          "D": "To assign final letter grades and ranks at the end of the semester"
        },
        "options_hi": {
          "A": "शिक्षक की प्रशासनिक समयबद्धता का मूल्यांकन करना",
          "B": "अलग-अलग छात्रों की विशिष्ट अधिगम कठिनाइयों, कमजोरियों और भ्रांतियों की पहचान करना",
          "C": "राज्य भर में शीर्ष छात्रवृत्ति प्राप्तकर्ताओं का चयन करना",
          "D": "सत्र के अंत में अंतिम ग्रेड और रैंक आवंटित करना"
        },
        "correctAnswer": "B",
        "explanation": "Diagnostic tests identify the precise learning gaps, weaknesses, and misconceptions that students encounter, enabling targeted remedial instruction.",
        "explanation_hi": "निदानात्मक परीक्षण (Diagnostic Test) का उद्देश्य छात्र की अधिगम संबंधी कमजोरियों और कठिनाइयों के कारणों का पता लगाना है ताकि उपचारात्मक शिक्षण (Remedial Teaching) किया जा सके।"
      },
      {
        "id": 41,
        "questionNumber": 41,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following teaching methods was devised by William Heard Kilpatrick based on John Dewey's Pragmatism?",
        "question_hi": "जॉन डीवी के प्रयोजनवाद (Pragmatism) पर आधारित निम्नलिखित में से कौन सी शिक्षण विधि विलियम हर्ड किलपैट्रिक द्वारा प्रतिपादित की गई थी?",
        "options": {
          "A": "Dalton Plan",
          "B": "Heuristic Method",
          "C": "Project Method",
          "D": "Kindergarten Method"
        },
        "options_hi": {
          "A": "डाल्टन योजना (Dalton Plan)",
          "B": "ह्यूरिस्टिक (खोज) विधि",
          "C": "परियोजना विधि (Project Method)",
          "D": "किंडरगार्टन विधि"
        },
        "correctAnswer": "C",
        "explanation": "Kilpatrick developed the Project Method ('learning by doing' through purposeful, real-world social activities), inspired by Dewey's pragmatism.",
        "explanation_hi": "परियोजना (प्रोजेक्ट) विधि का प्रतिपादन विलियम हर्ड किलपैट्रिक ने किया था। यह जॉन डीवी के प्रयोजनवादी दर्शन और 'करके सीखने' (Learning by doing) के सिद्धांत पर आधारित है।"
      },
      {
        "id": 42,
        "questionNumber": 42,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Who is credited with inventing the 'Heuristic Method' of teaching science and mathematics?",
        "question_hi": "विज्ञान और गणित के शिक्षण में 'ह्यूरिस्टिक विधि' (Heuristic Method - खोज विधि) के प्रतिपादक किसे माना जाता है?",
        "options": {
          "A": "Helen Parkhurst",
          "B": "John Dewey",
          "C": "Friedrich Froebel",
          "D": "H.E. Armstrong"
        },
        "options_hi": {
          "A": "हेलेन पार्खर्स्ट",
          "B": "जॉन डीवी",
          "C": "फ्रेडरिक फ्रोबेल",
          "D": "एच. ई. आर्मस्ट्रांग (H.E. Armstrong)"
        },
        "correctAnswer": "D",
        "explanation": "The Heuristic method was introduced by Prof. H.E. Armstrong. The word comes from the Greek 'Heurisco' ('I discover'), placing the pupil in the role of an original discoverer.",
        "explanation_hi": "ह्यूरिस्टिक पद्धति के जन्मदाता प्रो. एच. ई. आर्मस्ट्रांग हैं। 'ह्यूरिस्को' एक ग्रीक शब्द है जिसका अर्थ है 'मैं खोजता हूँ'। इसमें बालक एक अन्वेषक के रूप में स्वयं सीखता है।"
      },
      {
        "id": 43,
        "questionNumber": 43,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the key feature of the 'Dalton Plan' instructional method developed by Helen Parkhurst?",
        "question_hi": "हेलेन पार्खर्स्ट द्वारा विकसित 'डाल्टन योजना' (Dalton Plan) की मुख्य विशेषता क्या है?",
        "options": {
          "A": "Contract system where students work at their own pace without rigid bell schedules",
          "B": "Strict military drill and rote repetition of textbooks",
          "C": "Complete abolition of textbooks and teacher guidance",
          "D": "Compulsory physical punishment for incomplete daily tasks"
        },
        "options_hi": {
          "A": "अनुबंध प्रणाली (Contract System) जहाँ छात्र बिना घंटी के कठोर समय सारिणी के अपनी गति से व्यक्तिगत रूप से सीखते हैं",
          "B": "कठोर सैन्य ड्रिल और पाठ्यपुस्तकों का रटंत अभ्यास",
          "C": "पाठ्यपुस्तकों और शिक्षक मार्गदर्शन का पूर्ण उन्मूलन",
          "D": "अपूर्ण दैनिक कार्यों के लिए अनिवार्य शारीरिक दंड"
        },
        "correctAnswer": "A",
        "explanation": "Under the Dalton Plan (Helen Parkhurst), classrooms become subject laboratories; students sign monthly contracts (assignments) and work independently at their own individual tempo.",
        "explanation_hi": "हेलेन पार्कहर्स्ट द्वारा प्रतिपादित डाल्टन प्रणाली में कक्षाएं 'प्रयोगशालाओं' में बदल जाती हैं। छात्र 'असाइनमेंट/अनुबंध' के तहत अपनी रुचि व गति से कार्य करते हैं।"
      },
      {
        "id": 44,
        "questionNumber": 44,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In classroom questioning techniques, what is the primary purpose of a 'Probing Question'?",
        "question_hi": "कक्षा में प्रश्न पूछने की तकनीक में, 'खोजपूर्ण प्रश्न' (Probing Question / अनुशीलन प्रश्न) का प्राथमिक उद्देश्य क्या होता है?",
        "options": {
          "A": "To intimidate quiet students and test their speed of answering",
          "B": "To encourage deeper thinking, clarification, and elaboration beyond initial shallow answers",
          "C": "To introduce completely unrelated topics to distract the class",
          "D": "To test whether the microphone audio level is adequate"
        },
        "options_hi": {
          "A": "शांत छात्रों को डराना और उनके उत्तर देने की गति का परीक्षण करना",
          "B": "प्रारंभिक संक्षिप्त उत्तरों से आगे बढ़कर गहन चिंतन, स्पष्टीकरण और विस्तृत व्याख्या को प्रोत्साहित करना",
          "C": "कक्षा का ध्यान भटकाने के लिए पूरी तरह से असंबंधित विषयों को प्रस्तुत करना",
          "D": "यह जांचना कि माइक्रोफ़ोन ऑडियो स्तर पर्याप्त है या नहीं"
        },
        "correctAnswer": "B",
        "explanation": "Probing questions (such as prompting, seeking further information, re-focusing, increasing critical awareness) guide learners to think more deeply when their initial answer is incomplete or vague.",
        "explanation_hi": "खोजपूर्ण प्रश्न (Probing questions) कौशल का उपयोग तब किया जाता है जब छात्र अधूरा या सतही उत्तर देता है। यह छात्र से अतिरिक्त जानकारी, स्पष्टीकरण या गहन तर्क निकालने में मदद करता है।"
      },
      {
        "id": 45,
        "questionNumber": 45,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following is classified as an unprojected, 3D non-verbal instructional aid?",
        "question_hi": "निम्नलिखित में से किसे अप्रक्षेपित (Unprojected), त्रिविमीय (3D) गैर-मौखिक शिक्षण सहायक सामग्री के रूप में वर्गीकृत किया गया है?",
        "options": {
          "A": "Digital PowerPoint slideshow",
          "B": "Overhead Projector (OHP) transparency",
          "C": "Diorama and Specimen Mock-up",
          "D": "Filmstrip projector slide"
        },
        "options_hi": {
          "A": "डिजिटल पावरपॉइंट स्लाइड शो",
          "B": "ओवरहेड प्रोजेक्टर (OHP) ट्रांसपेरेंसी",
          "C": "डायोरामा (Diorama) और नमूना मॉडल (Mock-up/Specimen)",
          "D": "फिल्मस्ट्रिप प्रोजेक्टर स्लाइड"
        },
        "correctAnswer": "C",
        "explanation": "Dioramas, models, mock-ups, and specimens are non-projected three-dimensional (3D) teaching aids, providing physical realism without electrical projection.",
        "explanation_hi": "डायोरामा (Diorama), वास्तविक नमूने (Specimen) और मॉडल अप्रक्षेपित त्रिविमीय (3D) दृश्य सहायक सामग्री हैं जो विद्यार्थियों को वास्तविक जीवन जैसा अनुभव देती हैं।"
      },
      {
        "id": 46,
        "questionNumber": 46,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the psychological phenomenon known as the 'Halo Effect' in student evaluation?",
        "question_hi": "छात्र मूल्यांकन में 'हालो प्रभाव' (Halo Effect) के रूप में जानी जाने वाली मनोवैज्ञानिक घटना क्या है?",
        "options": {
          "A": "The tendency of students to forget answers under examination stress",
          "B": "A grading system that uses glowing digital indicators",
          "C": "The immediate retention of facts reviewed right before entering the hall",
          "D": "An evaluator's general positive or negative overall impression biasing ratings on specific separate traits"
        },
        "options_hi": {
          "A": "परीक्षा तनाव में छात्रों द्वारा उत्तर भूलने की प्रवृत्ति",
          "B": "चमकदार डिजिटल संकेतकों का उपयोग करने वाली एक अंकन प्रणाली",
          "C": "परीक्षा हॉल में प्रवेश करने से ठीक पहले पढ़े गए तथ्यों का तात्कालिक स्मरण",
          "D": "मूल्यांकनकर्ता की सामान्य समग्र सकारात्मक या नकारात्मक धारणा का छात्र के विशिष्ट अलग-अलग लक्षणों के मूल्यांकन को प्रभावित करना"
        },
        "correctAnswer": "D",
        "explanation": "The Halo Effect is an evaluator cognitive bias where an overarching perception (e.g., student is well-behaved or neat) leads the grader to inflate ratings on unrelated specific skills like analytical problem solving.",
        "explanation_hi": "हालो प्रभाव (Halo Effect) एक पूर्वाग्रह है जिसमें परीक्षक छात्र के एक सामान्य गुण (जैसे अच्छा व्यवहार या सुंदर लिखावट) के आधार पर उसके अन्य असंबंधित शैक्षणिक गुणों को भी उच्च या निम्न आंक लेता है।"
      },
      {
        "id": 47,
        "questionNumber": 47,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In educational research, which coefficient of correlation indicates the strongest linear relationship between two variables?",
        "question_hi": "शैक्षिक अनुसंधान में, कौन सा सहसंबंध गुणांक (Correlation Coefficient) दो चरों के बीच सबसे मजबूत रैखिक संबंध को दर्शाता है?",
        "options": {
          "A": "-0.92",
          "B": "+0.75",
          "C": "+0.10",
          "D": "0.00"
        },
        "options_hi": {
          "A": "-0.92",
          "B": "+0.75",
          "C": "+0.10",
          "D": "0.00"
        },
        "correctAnswer": "A",
        "explanation": "Correlation strength is determined by absolute value (|r|). |-0.92| = 0.92, which is larger than |+0.75| = 0.75, representing a stronger relationship (even though negative/inverse).",
        "explanation_hi": "सहसंबंध की शक्ति उसके निरपेक्ष मान (Absolute value) से तय होती है। |-0.92| = 0.92 जो कि |+0.75| से बड़ा है, अतः -0.92 सबसे मजबूत संबंध (विपरीत दिशा में) दर्शाता है।"
      },
      {
        "id": 48,
        "questionNumber": 48,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which of the following is the most suitable strategy to teach problem-solving in Computer Science algorithms?",
        "question_hi": "कंप्यूटर साइंस एल्गोरिदम में समस्या-समाधान (Problem-Solving) सिखाने के लिए निम्नलिखित में से कौन सी रणनीति सबसे उपयुक्त है?",
        "options": {
          "A": "Reading programming code out loud in chorus without practical compiler execution",
          "B": "Polya's heuristic four-stage problem-solving model (Understand, Plan, Carry out, Look back)",
          "C": "Passive rote memorization of written code snippets from the blackboard",
          "D": "Punishing students every time an algorithm throws a syntax error"
        },
        "options_hi": {
          "A": "बिना कंप्यूटर निष्पादन के सस्वर समूह पाठ में कोड को जोर-जोर से पढ़ना",
          "B": "जॉर्ज पोल्या का चार-चरणीय समस्या समाधान मॉडल (समझना, योजना बनाना, क्रियान्वित करना, पुनरावलोकन)",
          "C": "श्यामपट्ट से लिखे गए कोड अंशों का निष्क्रिय रट्टा लगाना",
          "D": "एल्गोरिदम में सिंटैक्स त्रुटि आने पर हर बार छात्रों को दंडित करना"
        },
        "correctAnswer": "B",
        "explanation": "George Polya's 4-stage framework: 1. Understand the problem, 2. Devise a plan, 3. Carry out the plan, and 4. Look back (reflect and test), is the gold standard in computational and mathematical problem-solving.",
        "explanation_hi": "जॉर्ज पोल्या (George Polya) का 4-चरणीय मॉडल (समस्या को समझना, योजना बनाना, क्रियान्वयन, और परिणाम की समीक्षा) कंप्यूटर विज्ञान और गणितीय समस्या समाधान सिखाने की सर्वोत्तम विधि है।"
      },
      {
        "id": 49,
        "questionNumber": 49,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the primary characteristic of 'Criterion-Referenced Tests' (CRT)?",
        "question_hi": "मानदंड-संदर्भित परीक्षण (Criterion-Referenced Test - CRT) की प्राथमिक विशेषता क्या है?",
        "options": {
          "A": "Ensuring exactly 50% of examinees pass and 50% fail each session",
          "B": "Ranking test-takers on a bell curve to award percentiles relative to peers",
          "C": "Assessing candidate performance against predefined learning standards or behavioral objectives",
          "D": "Selecting candidates solely based on height and physical stamina"
        },
        "options_hi": {
          "A": "यह सुनिश्चित करना कि प्रत्येक सत्र में ठीक 50% अभ्यर्थी उत्तीर्ण हों और 50% अनुत्तीर्ण हों",
          "B": "सहपाठियों की तुलना में पर्सेंटाइल देने के लिए सामान्य वितरण वक्र (Bell curve) पर छात्रों को रैंक करना",
          "C": "पूर्व-निर्धारित अधिगम मानकों या व्यवहारिक उद्देश्यों के विरुद्ध अभ्यर्थी के प्रदर्शन का आकलन करना",
          "D": "केवल शारीरिक कद-काठी के आधार पर अभ्यर्थियों का चयन करना"
        },
        "correctAnswer": "C",
        "explanation": "Criterion-referenced testing compares student scores against absolute pre-established performance criteria (e.g., getting 75 marks out of 150 to qualify STET), unlike norm-referenced tests that rank students relative to each other.",
        "explanation_hi": "मानदंड-संदर्भित परीक्षण (CRT) में छात्र के प्रदर्शन की तुलना किसी पूर्व-निर्धारित कसौटी या उद्देश्य (जैसे 50% अर्हक अंक) से की जाती है, न कि अन्य छात्रों के साथ रैंक बनाकर।"
      },
      {
        "id": 50,
        "questionNumber": 50,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Under the Rights of Persons with Disabilities (RPwD) Act 2016 in India, how many benchmark disabilities are recognized for educational accommodations?",
        "question_hi": "भारत में दिव्यांगजन अधिकार अधिनियम (RPwD Act) 2016 के तहत शैक्षिक सुविधाओं और अधिकारों के लिए कितनी दिव्यांगताओं को मान्यता दी गई है?",
        "options": {
          "A": "28 disabilities",
          "B": "7 disabilities",
          "C": "14 disabilities",
          "D": "21 disabilities"
        },
        "options_hi": {
          "A": "28 दिव्यांगताएं",
          "B": "7 दिव्यांगताएं",
          "C": "14 दिव्यांगताएं",
          "D": "21 दिव्यांगताएं"
        },
        "correctAnswer": "D",
        "explanation": "The RPwD Act 2016 expanded the number of recognized disabilities from 7 (under the 1995 PwD Act) to 21 categories, including acid attack victims, dwarfism, intellectual disability, and specific learning disabilities.",
        "explanation_hi": "RPwD अधिनियम 2016 ने 1995 के कानून की 7 श्रेणियों से बढ़ाकर दिव्यांगताओं की संख्या 21 कर दी है, जिसमें ऑटिज्म, बौद्धिक दिव्यांगता और विशिष्ट सीखने की अक्षमताएं शामिल हैं।"
      }
    ]
  },
  "drill_general_50": {
    "id": "drill_general_50",
    "title": "General Skills 50Q Booster Drill",
    "subtitle": "GK, Environmental Science, Mathematical Aptitude & Logical Reasoning",
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
        "id": 1,
        "questionNumber": 1,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A train 300 meters long is traveling at a constant speed of 72 km/h. How many seconds will it take to completely pass an electric pole standing beside the track?",
        "question_hi": "300 मीटर लंबी एक रेलगाड़ी 72 किमी/घंटा की नियत गति से चल रही है। ट्रैक के किनारे खड़े एक बिजली के खंभे को पूरी तरह पार करने में इसे कितने सेकंड का समय लगेगा?",
        "options": {
          "A": "18 seconds",
          "B": "20 seconds",
          "C": "12 seconds",
          "D": "15 seconds"
        },
        "options_hi": {
          "A": "18 सेकंड",
          "B": "20 सेकंड",
          "C": "12 सेकंड",
          "D": "15 सेकंड"
        },
        "correctAnswer": "D",
        "explanation": "Speed in m/s = 72 * (5/18) = 20 m/s. Distance to cross a point object (pole) = length of train = 300 m. Time = Distance / Speed = 300 / 20 = 15 seconds.",
        "explanation_hi": "चाल (मी/से में) = 72 * 5/18 = 20 मी/से। खंभे को पार करने में तय दूरी = गाड़ी की लंबाई = 300 मीटर। समय = 300 / 20 = 15 सेकंड।"
      },
      {
        "id": 2,
        "questionNumber": 2,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A train 240 meters long crosses a 360-meter long platform in 30 seconds. What is the speed of the train in km/h?",
        "question_hi": "240 मीटर लंबी एक रेलगाड़ी 360 मीटर लंबे प्लेटफॉर्म को 30 सेकंड में पार करती है। रेलगाड़ी की गति किमी/घंटा में क्या है?",
        "options": {
          "A": "72 km/h",
          "B": "60 km/h",
          "C": "54 km/h",
          "D": "80 km/h"
        },
        "options_hi": {
          "A": "72 किमी/घंटा",
          "B": "60 किमी/घंटा",
          "C": "54 किमी/घंटा",
          "D": "80 किमी/घंटा"
        },
        "correctAnswer": "A",
        "explanation": "Total distance = Train length + Platform length = 240 + 360 = 600 meters. Speed in m/s = 600 / 30 = 20 m/s. Speed in km/h = 20 * (18/5) = 72 km/h.",
        "explanation_hi": "कुल दूरी = 240 + 360 = 600 मीटर। चाल (मी/से) = 600 / 30 = 20 मी/से। चाल (किमी/घंटा) = 20 * 18/5 = 72 किमी/घंटा।"
      },
      {
        "id": 3,
        "questionNumber": 3,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "The ratio of ages of two friends P and Q is currently 4 : 5. After 6 years, the ratio of their ages becomes 5 : 6. What is the present age of P?",
        "question_hi": "दो मित्रों P और Q की वर्तमान आयु का अनुपात 4 : 5 है। 6 वर्ष बाद, उनकी आयु का अनुपात 5 : 6 हो जाता है। P की वर्तमान आयु क्या है?",
        "options": {
          "A": "28 years",
          "B": "24 years",
          "C": "20 years",
          "D": "30 years"
        },
        "options_hi": {
          "A": "28 वर्ष",
          "B": "24 वर्ष",
          "C": "20 वर्ष",
          "D": "30 वर्ष"
        },
        "correctAnswer": "B",
        "explanation": "Let ages be 4x and 5x. Then (4x + 6) / (5x + 6) = 5/6 => 6(4x + 6) = 5(5x + 6) => 24x + 36 = 25x + 30 => x = 6. Present age of P = 4x = 4 * 6 = 24 years.",
        "explanation_hi": "माना आयु 4x और 5x है। (4x + 6) / (5x + 6) = 5/6 => 24x + 36 = 25x + 30 => x = 6। P की वर्तमान आयु = 4 * 6 = 24 वर्ष।"
      },
      {
        "id": 4,
        "questionNumber": 4,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "The HCF and LCM of two numbers are 16 and 480 respectively. If one of the numbers is 80, what is the other number?",
        "question_hi": "दो संख्याओं का महत्तम समापवर्तक (HCF) 16 और लघुत्तम समापवर्त्य (LCM) 480 है। यदि उनमें से एक संख्या 80 है, तो दूसरी संख्या क्या है?",
        "options": {
          "A": "112",
          "B": "84",
          "C": "96",
          "D": "120"
        },
        "options_hi": {
          "A": "112",
          "B": "84",
          "C": "96",
          "D": "120"
        },
        "correctAnswer": "C",
        "explanation": "Formula: Product of two numbers = HCF * LCM => Number * 80 = 16 * 480 => Number = (16 * 480) / 80 = 16 * 6 = 96.",
        "explanation_hi": "सूत्र: पहली संख्या * दूसरी संख्या = HCF * LCM => दूसरी संख्या = (16 * 480) / 80 = 96।"
      },
      {
        "id": 5,
        "questionNumber": 5,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "The average of 5 consecutive odd numbers is 27. What is the product of the smallest and largest numbers among them?",
        "question_hi": "5 क्रमागत विषम संख्याओं का औसत 27 है। उनमें से सबसे छोटी और सबसे बड़ी संख्या का गुणनफल क्या है?",
        "options": {
          "A": "697",
          "B": "675",
          "C": "725",
          "D": "713"
        },
        "options_hi": {
          "A": "697",
          "B": "675",
          "C": "725",
          "D": "713"
        },
        "correctAnswer": "D",
        "explanation": "The average of an arithmetic sequence of consecutive odd numbers is the middle number = 27. The 5 numbers are 23, 25, 27, 29, 31. Smallest = 23, Largest = 31. Product = 23 * 31 = 713.",
        "explanation_hi": "5 क्रमागत विषम संख्याओं का औसत उनका मध्य पद होता है = 27। अतः संख्याएं हैं: 23, 25, 27, 29, 31। सबसे छोटी = 23, सबसे बड़ी = 31। गुणनफल = 23 * 31 = 713।"
      },
      {
        "id": 6,
        "questionNumber": 6,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the single equivalent discount for two successive discounts of 20% and 10%?",
        "question_hi": "20% और 10% की दो क्रमिक छूटों (Successive Discounts) के लिए एकल समतुल्य छूट क्या है?",
        "options": {
          "A": "28%",
          "B": "30%",
          "C": "25%",
          "D": "27%"
        },
        "options_hi": {
          "A": "28%",
          "B": "30%",
          "C": "25%",
          "D": "27%"
        },
        "correctAnswer": "A",
        "explanation": "Equivalent discount = [d1 + d2 - (d1 * d2 / 100)]% = [20 + 10 - (20 * 10 / 100)]% = [30 - 2]% = 28%.",
        "explanation_hi": "समतुल्य छूट = (a + b - ab/100)% = 20 + 10 - (200/100) = 30 - 2 = 28%।"
      },
      {
        "id": 7,
        "questionNumber": 7,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In a certain code language, 'TEACHER' is coded as 'VGCEJGT'. In the same code language, how will 'STUDENT' be written?",
        "question_hi": "एक निश्चित कूट भाषा में 'TEACHER' को 'VGCEJGT' लिखा जाता है। उसी कूट भाषा में 'STUDENT' को किस प्रकार लिखा जाएगा?",
        "options": {
          "A": "UVWGGQV",
          "B": "UVWFGPV",
          "C": "TVWFGPU",
          "D": "UWWFGPV"
        },
        "options_hi": {
          "A": "UVWGGQV",
          "B": "UVWFGPV",
          "C": "TVWFGPU",
          "D": "UWWFGPV"
        },
        "correctAnswer": "B",
        "explanation": "Pattern: Every letter is shifted forward by +2 positions in the alphabetical order: S(+2)->U, T(+2)->V, U(+2)->W, D(+2)->F, E(+2)->G, N(+2)->P, T(+2)->V = UVWFGPV.",
        "explanation_hi": "नियम: प्रत्येक अक्षर में +2 जोड़ा गया है: S+2=U, T+2=V, U+2=W, D+2=F, E+2=G, N+2=P, T+2=V। सही कोड 'UVWFGPV' है।"
      },
      {
        "id": 8,
        "questionNumber": 8,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Pointing to a man in a photograph, a woman says: 'He is the only son of my mother's only daughter.' How is the man in the photograph related to the woman?",
        "question_hi": "एक तस्वीर में एक व्यक्ति की ओर इशारा करते हुए एक महिला कहती है: 'वह मेरी माँ की इकलौती बेटी का इकलौता बेटा है।' तस्वीर वाला व्यक्ति उस महिला से किस प्रकार संबंधित है?",
        "options": {
          "A": "Her Nephew",
          "B": "Her Brother",
          "C": "Her Son",
          "D": "Her Father"
        },
        "options_hi": {
          "A": "उसका भतीजा / भांजा",
          "B": "उसका भाई",
          "C": "उसका पुत्र (बेटा)",
          "D": "उसका पिता"
        },
        "correctAnswer": "C",
        "explanation": "'My mother's only daughter' is the woman herself. The 'only son of herself' is therefore her own son.",
        "explanation_hi": "'मेरी माँ की इकलौती बेटी' स्वयं वह महिला है। अतः उसका इकलौता बेटा उसका अपना 'पुत्र' है।"
      },
      {
        "id": 9,
        "questionNumber": 9,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A person walks 10 meters towards the North, then turns right and walks 15 meters. He then turns right again and walks 10 meters. How far and in which direction is he now from his starting point?",
        "question_hi": "एक व्यक्ति उत्तर की ओर 10 मीटर चलता है, फिर दाएं मुड़कर 15 मीटर चलता है। इसके बाद वह फिर से दाएं मुड़ता है और 10 मीटर चलता है। वह अपने प्रारंभिक बिंदु से कितनी दूरी पर और किस दिशा में है?",
        "options": {
          "A": "10 meters, West",
          "B": "25 meters, North",
          "C": "15 meters, South",
          "D": "15 meters, East"
        },
        "options_hi": {
          "A": "10 मीटर, पश्चिम दिशा",
          "B": "25 मीटर, उत्तर दिशा",
          "C": "15 मीटर, दक्षिण दिशा",
          "D": "15 मीटर, पूर्व दिशा"
        },
        "correctAnswer": "D",
        "explanation": "North 10m (+Y). Turn right -> East 15m (+X). Turn right -> South 10m (-Y). Net displacement: Y coordinates cancel (10 - 10 = 0), leaving 15m along the positive X-axis (East).",
        "explanation_hi": "उत्तर में 10 मीटर जाकर दो बार दाएं मुड़ने पर वह 10 मीटर दक्षिण आकर प्रारंभिक रेखा पर आ जाता है। अब वह आरंभिक बिंदु से ठीक 15 मीटर पूर्व (East) में है।"
      },
      {
        "id": 10,
        "questionNumber": 10,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In a class of 45 students, Rohan ranks 16th from the top. What is his rank from the bottom of the class?",
        "question_hi": "45 छात्रों की एक कक्षा में रोहन का स्थान ऊपर से 16वां है। कक्षा में नीचे से उसका स्थान क्या होगा?",
        "options": {
          "A": "30th",
          "B": "29th",
          "C": "31st",
          "D": "28th"
        },
        "options_hi": {
          "A": "30वां",
          "B": "29वां",
          "C": "31वां",
          "D": "28वां"
        },
        "correctAnswer": "A",
        "explanation": "Formula: Rank from bottom = Total - Rank from top + 1 = 45 - 16 + 1 = 29 + 1 = 30th.",
        "explanation_hi": "सूत्र: नीचे से स्थान = कुल छात्र - ऊपर से स्थान + 1 = 45 - 16 + 1 = 30वां।"
      },
      {
        "id": 11,
        "questionNumber": 11,
        "section": "Other Skills",
        "topic": "General Knowledge & Bihar",
        "topic_hi": "सामान्य ज्ञान एवं बिहार",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which fundamental article of the Constitution of India provides for the Right to Education (RTE) as a Fundamental Right (Clause 1)?",
        "question_hi": "भारत के संविधान का कौन सा अनुच्छेद 6 से 14 वर्ष के बच्चों के लिए 'शिक्षा के अधिकार' को मौलिक अधिकार बनाता है (क्लॉज 1)?",
        "options": {
          "A": "Article 14",
          "B": "Article 21A (inserted by 86th Constitutional Amendment Act, 2002)",
          "C": "Article 19",
          "D": "Article 32"
        },
        "options_hi": {
          "A": "अनुच्छेद 14",
          "B": "अनुच्छेद 21A (86वां संविधान संशोधन 2002)",
          "C": "अनुच्छेद 19",
          "D": "अनुच्छेद 32"
        },
        "correctAnswer": "B",
        "explanation": "Article 21A guarantees free and compulsory education to all children aged 6-14 years as a fundamental right.",
        "explanation_hi": "86वें संविधान संशोधन 2002 द्वारा अनुच्छेद 21A जोड़कर शिक्षा को मौलिक अधिकार बनाया गया।"
      },
      {
        "id": 12,
        "questionNumber": 12,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Statements: (1) All books are papers. (2) Some papers are pens. Conclusions: I. Some pens are books. II. Some papers are books. Which conclusion logically follows?",
        "question_hi": "कथन: (1) सभी पुस्तकें कागज हैं। (2) कुछ कागज पेन हैं। निष्कर्ष: I. कुछ पेन पुस्तकें हैं। II. कुछ कागज पुस्तकें हैं। कौन सा निष्कर्ष तार्किक रूप से निकलता है?",
        "options": {
          "A": "Both conclusion I and II follow",
          "B": "Only conclusion I follows",
          "C": "Only conclusion II follows",
          "D": "Neither conclusion I nor II follows"
        },
        "options_hi": {
          "A": "निष्कर्ष I और II दोनों निकलते हैं",
          "B": "केवल निष्कर्ष I निकलता है",
          "C": "केवल निष्कर्ष II निकलता है",
          "D": "न तो निष्कर्ष I और न ही II निकलता है"
        },
        "correctAnswer": "C",
        "explanation": "Since all books are papers (A is subset of B), the converse 'some papers are books' is immediately valid (Conclusion II). There is no guaranteed overlap between pens and books, so Conclusion I does not necessarily follow.",
        "explanation_hi": "चूंकि सभी पुस्तकें कागज हैं, अतः कुछ कागज निश्चित रूप से पुस्तकें होंगे (निष्कर्ष II सत्य है)। पेन और पुस्तक के बीच कोई सीधा संबंध नहीं दिया गया है।"
      },
      {
        "id": 13,
        "questionNumber": 13,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Find the odd one out among the following numbers: 27, 64, 125, 144, 216",
        "question_hi": "निम्नलिखित संख्याओं में से विषम (असंगत) संख्या चुनिए: 27, 64, 125, 144, 216",
        "options": {
          "A": "27",
          "B": "64",
          "C": "125",
          "D": "144 (it is not a cube, while others are perfect cubes)"
        },
        "options_hi": {
          "A": "27",
          "B": "64",
          "C": "125",
          "D": "144 (यह पूर्ण घन नहीं है, जबकि अन्य सभी पूर्ण घन हैं)"
        },
        "correctAnswer": "D",
        "explanation": "27 = 3^3, 64 = 4^3, 125 = 5^3, 216 = 6^3 are all perfect cubes. 144 is 12^2 (a square, but not a cube).",
        "explanation_hi": "27 (3³), 64 (4³), 125 (5³), 216 (6³) पूर्ण घन हैं। केवल 144 किसी का घन नहीं है (यह 12 का वर्ग है)।"
      },
      {
        "id": 14,
        "questionNumber": 14,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the angle between the hour hand and the minute hand of a clock at exactly 3:30?",
        "question_hi": "ठीक 3:30 बजे घड़ी की घंटे की सुई और मिनट की सुई के बीच कितने डिग्री का कोण बनेगा?",
        "options": {
          "A": "75 degrees",
          "B": "90 degrees",
          "C": "80 degrees",
          "D": "70 degrees"
        },
        "options_hi": {
          "A": "75 डिग्री",
          "B": "90 डिग्री",
          "C": "80 डिग्री",
          "D": "70 डिग्री"
        },
        "correctAnswer": "A",
        "explanation": "Formula: Angle = |30*H - (11/2)*M| = |30*3 - (11/2)*30| = |90 - 165| = |-75| = 75 degrees.",
        "explanation_hi": "सूत्र: कोण = |30*H - (11/2)*M| = |30*3 - (11/2)*30| = |90 - 165| = 75 डिग्री।"
      },
      {
        "id": 15,
        "questionNumber": 15,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "If 15 men can complete a project in 20 days working 8 hours a day, how many days will 20 men take to complete the same project working 6 hours a day?",
        "question_hi": "यदि 15 व्यक्ति प्रतिदिन 8 घंटे कार्य करके किसी कार्य को 20 दिनों में पूरा कर सकते हैं, तो 20 व्यक्ति प्रतिदिन 6 घंटे कार्य करके उसी कार्य को कितने दिनों में पूरा करेंगे?",
        "options": {
          "A": "15 days",
          "B": "20 days",
          "C": "24 days",
          "D": "18 days"
        },
        "options_hi": {
          "A": "15 दिन",
          "B": "20 दिन",
          "C": "24 दिन",
          "D": "18 दिन"
        },
        "correctAnswer": "B",
        "explanation": "Formula: M1 * D1 * H1 = M2 * D2 * H2 => 15 * 20 * 8 = 20 * D2 * 6 => 2400 = 120 * D2 => D2 = 2400 / 120 = 20 days.",
        "explanation_hi": "सूत्र: M1 * D1 * H1 = M2 * D2 * H2 => 15 * 20 * 8 = 20 * D2 * 6 => D2 = 2400 / 120 = 20 दिन।"
      },
      {
        "id": 16,
        "questionNumber": 16,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Food Web Complexity), which statement accurately reflects this principle: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
        "question_hi": "पर्यावरण विज्ञान (खाद्य जाल जटिलता) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
        "options": {
          "A": "Ecosystems function without solar energy inputs",
          "B": "Pollution increases biodiversity stability",
          "C": "Accurately validated by ecological principle: Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction",
          "D": "Energy cycles indefinitely within food chains"
        },
        "options_hi": {
          "A": "सौर ऊर्जा के बिना तंत्र चलता है",
          "B": "प्रदूषण से विविधता बढ़ती है",
          "C": "पारिस्थितिकी सिद्धांत के अनुसार सही: Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction",
          "D": "ऊर्जा कभी नष्ट नहीं होती"
        },
        "correctAnswer": "C",
        "explanation": "Environmental ecology principles: Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction.",
        "explanation_hi": "पर्यावरण विज्ञान का सिद्धांत: Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction।"
      },
      {
        "id": 17,
        "questionNumber": 17,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A shopkeeper professes to sell his goods at cost price, but uses a false weight of 900 grams instead of a true kilogram (1,000 grams). What is his actual gain percentage?",
        "question_hi": "एक बेईमान दुकानदार अपनी वस्तुओं को क्रय मूल्य पर बेचने का दावा करता है, लेकिन 1 किलोग्राम (1,000 ग्राम) के स्थान पर 900 ग्राम के गलत बाट का उपयोग करता है। उसका वास्तविक लाभ प्रतिशत क्या है?",
        "options": {
          "A": "9.09%",
          "B": "10%",
          "C": "12.5%",
          "D": "11.11% (100/9 %)"
        },
        "options_hi": {
          "A": "9.09%",
          "B": "10%",
          "C": "12.5%",
          "D": "11.11% (100/9 %)"
        },
        "correctAnswer": "D",
        "explanation": "Gain % = [Error / (True weight - Error)] * 100 = [100 / 900] * 100 = 100 / 9 = 11.11%.",
        "explanation_hi": "लाभ % = [त्रुटि / (सत्य बाट - त्रुटि)] * 100 = [100 / 900] * 100 = 11.11%।"
      },
      {
        "id": 18,
        "questionNumber": 18,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "The perimeter of a rectangle is 80 cm and its length is 24 cm. What is the area of the rectangle?",
        "question_hi": "एक आयत का परिमाप 80 सेमी है और इसकी लंबाई 24 सेमी है। उस आयत का क्षेत्रफल क्या होगा?",
        "options": {
          "A": "384 sq. cm",
          "B": "400 sq. cm",
          "C": "360 sq. cm",
          "D": "420 sq. cm"
        },
        "options_hi": {
          "A": "384 वर्ग सेमी",
          "B": "400 वर्ग सेमी",
          "C": "360 वर्ग सेमी",
          "D": "420 वर्ग सेमी"
        },
        "correctAnswer": "A",
        "explanation": "Perimeter = 2*(L + B) => 80 = 2*(24 + B) => 24 + B = 40 => B = 16 cm. Area = L * B = 24 * 16 = 384 sq. cm.",
        "explanation_hi": "परिमाप = 2(लंबाई + चौड़ाई) => 80 = 2(24 + B) => चौड़ाई = 16 सेमी। क्षेत्रफल = लंबाई * चौड़ाई = 24 * 16 = 384 वर्ग सेमी।"
      },
      {
        "id": 19,
        "questionNumber": 19,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "If the radius of a circle is increased by 50%, by what percentage does the area of the circle increase?",
        "question_hi": "यदि किसी वृत्त की त्रिज्या में 50% की वृद्धि कर दी जाए, तो उस वृत्त के क्षेत्रफल में कितने प्रतिशत की वृद्धि होगी?",
        "options": {
          "A": "100%",
          "B": "125%",
          "C": "150%",
          "D": "75%"
        },
        "options_hi": {
          "A": "100%",
          "B": "125%",
          "C": "150%",
          "D": "75%"
        },
        "correctAnswer": "B",
        "explanation": "Net area change formula: (2r + r^2/100)% = 2(50) + (2500/100) = 100 + 25 = 125%.",
        "explanation_hi": "क्षेत्रफल में % परिवर्तन = (2a + a²/100)% = 2(50) + 2500/100 = 100 + 25 = 125%।"
      },
      {
        "id": 20,
        "questionNumber": 20,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A boat can travel at a speed of 12 km/h in still water. If the speed of the river current is 3 km/h, what is the time taken by the boat to travel 45 km downstream?",
        "question_hi": "शांत जल में एक नाव की गति 12 किमी/घंटा है। यदि नदी की धारा की गति 3 किमी/घंटा है, तो नाव को धारा के अनुकूल (Downstream) 45 किमी जाने में कितना समय लगेगा?",
        "options": {
          "A": "3.5 hours",
          "B": "4 hours",
          "C": "3 hours",
          "D": "5 hours"
        },
        "options_hi": {
          "A": "3.5 घंटे",
          "B": "4 घंटे",
          "C": "3 घंटे",
          "D": "5 घंटे"
        },
        "correctAnswer": "C",
        "explanation": "Downstream speed = Speed of boat + Speed of current = 12 + 3 = 15 km/h. Time = Distance / Speed = 45 / 15 = 3 hours.",
        "explanation_hi": "धारा के अनुकूल चाल = नाव की चाल + धारा की चाल = 12 + 3 = 15 किमी/घंटा। समय = दूरी / चाल = 45 / 15 = 3 घंटे।"
      },
      {
        "id": 21,
        "questionNumber": 21,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the unit digit of the exponential expression (7)^95?",
        "question_hi": "घातांकीय व्यंजक (7)^95 का इकाई अंक (Unit Digit) क्या होगा?",
        "options": {
          "A": "1",
          "B": "9",
          "C": "7",
          "D": "3"
        },
        "options_hi": {
          "A": "1",
          "B": "9",
          "C": "7",
          "D": "3"
        },
        "correctAnswer": "D",
        "explanation": "Cyclicity of powers of 7 is 4 (7^1=7, 7^2=9, 7^3=3, 7^4=1). Remainder of 95 divided by 4: 95 = 4 * 23 + 3. So the unit digit is the same as 7^3 = 343 => unit digit is 3.",
        "explanation_hi": "7 की घात की चक्रीयता 4 होती है (7, 9, 3, 1)। 95 को 4 से भाग देने पर शेषफल 3 बचता है। अतः इकाई अंक 7³ का इकाई अंक होगा = 3।"
      },
      {
        "id": 22,
        "questionNumber": 22,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Ecological Succession), which statement accurately reflects this principle: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
        "question_hi": "पर्यावरण विज्ञान (पारिस्थितिक अनुक्रमण) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
        "options": {
          "A": "Accurately validated by ecological principle: Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest",
          "B": "Ecosystems function without solar energy inputs",
          "C": "Pollution increases biodiversity stability",
          "D": "Energy cycles indefinitely within food chains"
        },
        "options_hi": {
          "A": "पारिस्थितिकी सिद्धांत के अनुसार सही: Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest",
          "B": "सौर ऊर्जा के बिना तंत्र चलता है",
          "C": "प्रदूषण से विविधता बढ़ती है",
          "D": "ऊर्जा कभी नष्ट नहीं होती"
        },
        "correctAnswer": "A",
        "explanation": "Environmental ecology principles: Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest.",
        "explanation_hi": "पर्यावरण विज्ञान का सिद्धांत: Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest।"
      },
      {
        "id": 23,
        "questionNumber": 23,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "If a number 5432*7 is divisible by 9, what digit must replace the asterisk (*) symbol?",
        "question_hi": "यदि संख्या 5432*7, 9 से पूर्णतः विभाज्य है, तो स्टार (*) के स्थान पर कौन सा अंक आएगा?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "5",
          "D": "7"
        },
        "options_hi": {
          "A": "4",
          "B": "6",
          "C": "5",
          "D": "7"
        },
        "correctAnswer": "B",
        "explanation": "Divisibility rule for 9: Sum of digits must be divisible by 9. Sum = 5 + 4 + 3 + 2 + * + 7 = 21 + *. The next multiple of 9 after 21 is 27. So * = 27 - 21 = 6.",
        "explanation_hi": "9 से विभाज्यता का नियम: अंकों का योग 9 से कटना चाहिए। 5 + 4 + 3 + 2 + * + 7 = 21 + *। 21 के बाद 9 का गुणज 27 है, अतः * = 6।"
      },
      {
        "id": 24,
        "questionNumber": 24,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A sum of money doubles itself in 5 years at simple interest. In how many years will it become 4 times itself at the same rate?",
        "question_hi": "साधारण ब्याज की दर से कोई धनराशि 5 वर्ष में दोगुनी हो जाती है। उसी ब्याज दर से यह कितने वर्षों में स्वयं की 4 गुनी हो जाएगी?",
        "options": {
          "A": "10 years",
          "B": "20 years",
          "C": "15 years",
          "D": "12 years"
        },
        "options_hi": {
          "A": "10 वर्ष",
          "B": "20 वर्ष",
          "C": "15 वर्ष",
          "D": "12 वर्ष"
        },
        "correctAnswer": "C",
        "explanation": "Formula: (T2 / T1) = (N2 - 1) / (N1 - 1) => (T2 / 5) = (4 - 1) / (2 - 1) = 3 / 1 => T2 = 5 * 3 = 15 years.",
        "explanation_hi": "सूत्र: (N1 - 1)/T1 = (N2 - 1)/T2 => (2 - 1)/5 = (4 - 1)/T2 => 1/5 = 3/T2 => T2 = 15 वर्ष।"
      },
      {
        "id": 25,
        "questionNumber": 25,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A and B invest in a business in the ratio 3 : 5. If their total annual profit is ₹40,000, what is the profit share of A?",
        "question_hi": "A और B एक व्यवसाय में 3 : 5 के अनुपात में निवेश करते हैं। यदि वर्ष के अंत में कुल लाभ ₹40,000 होता है, तो A का लाभांश क्या होगा?",
        "options": {
          "A": "₹12,000",
          "B": "₹25,000",
          "C": "₹18,000",
          "D": "₹15,000"
        },
        "options_hi": {
          "A": "₹12,000",
          "B": "₹25,000",
          "C": "₹18,000",
          "D": "₹15,000"
        },
        "correctAnswer": "D",
        "explanation": "Profit share of A = [3 / (3 + 5)] * 40,000 = (3/8) * 40,000 = 3 * 5,000 = ₹15,000.",
        "explanation_hi": "A का हिस्सा = (3 / 8) * 40,000 = ₹15,000।"
      },
      {
        "id": 26,
        "questionNumber": 26,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Find the next term in the letter series: B, E, I, N, T, ?",
        "question_hi": "अक्षर शृंखला में अगला पद ज्ञात कीजिए: B, E, I, N, T, ?",
        "options": {
          "A": "A",
          "B": "Z",
          "C": "Y",
          "D": "B"
        },
        "options_hi": {
          "A": "A",
          "B": "Z",
          "C": "Y",
          "D": "B"
        },
        "correctAnswer": "A",
        "explanation": "Alphabet positions: B(2) +3 -> E(5) +4 -> I(9) +5 -> N(14) +6 -> T(20) +7 -> 27. Wrapping 27 mod 26 gives position 1 = 'A'.",
        "explanation_hi": "अक्षरों का अंतर: B(+3) -> E(+4) -> I(+5) -> N(+6) -> T(+7) -> 20+7 = 27 = 'A'।"
      },
      {
        "id": 27,
        "questionNumber": 27,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "If 'DELHI' is coded as '73541' and 'CALCUTTA' is coded as '82589662', how will 'CALICUT' be coded?",
        "question_hi": "यदि 'DELHI' को '73541' और 'CALCUTTA' को '82589662' के रूप में कोडित किया जाता है, तो 'CALICUT' को कैसे कोडित किया जाएगा?",
        "options": {
          "A": "8521896",
          "B": "8251896",
          "C": "8251986",
          "D": "8251869"
        },
        "options_hi": {
          "A": "8521896",
          "B": "8251896",
          "C": "8251986",
          "D": "8251869"
        },
        "correctAnswer": "B",
        "explanation": "Direct letter mapping: C=8, A=2, L=5, I=1, C=8, U=9, T=6 => CALICUT = 8251896.",
        "explanation_hi": "प्रत्यक्ष कोडिंग: C=8, A=2, L=5, I=1, C=8, U=9, T=6 => CALICUT = 8251896।"
      },
      {
        "id": 28,
        "questionNumber": 28,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A is the brother of B. C is the mother of A. D is the father of C. How is B's child related to D?",
        "question_hi": "A, B का भाई है। C, A की माँ है। D, C का पिता है। B की संतान D से किस प्रकार संबंधित होगी?",
        "options": {
          "A": "Grandchild",
          "B": "Child",
          "C": "Great-grandchild (प्रपौत्र / प्रपौत्री)",
          "D": "Nephew"
        },
        "options_hi": {
          "A": "पौत्र / नाती",
          "B": "संतान",
          "C": "प्रपौत्र / प्रपौत्री (Great-grandchild)",
          "D": "भतीजा"
        },
        "correctAnswer": "C",
        "explanation": "C is the mother of A and B. D is the father of C (maternal grandfather of A and B). Therefore, B's child is the great-grandchild of D.",
        "explanation_hi": "C, B की माँ है और D, C का पिता (नाना) है। अतः B की संतान D की प्रपौत्र/प्रदौहित्र (Great-grandchild) होगी।"
      },
      {
        "id": 29,
        "questionNumber": 29,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Nitrogen Cycle Dynamics), which statement accurately reflects this principle: 'Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium'?",
        "question_hi": "पर्यावरण विज्ञान (नाइट्रोजन चक्र) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium'?",
        "options": {
          "A": "Energy cycles indefinitely within food chains",
          "B": "Ecosystems function without solar energy inputs",
          "C": "Pollution increases biodiversity stability",
          "D": "Accurately validated by ecological principle: Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium"
        },
        "options_hi": {
          "A": "ऊर्जा कभी नष्ट नहीं होती",
          "B": "सौर ऊर्जा के बिना तंत्र चलता है",
          "C": "प्रदूषण से विविधता बढ़ती है",
          "D": "पारिस्थितिकी सिद्धांत के अनुसार सही: Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium"
        },
        "correctAnswer": "D",
        "explanation": "Environmental ecology principles: Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium.",
        "explanation_hi": "पर्यावरण विज्ञान का सिद्धांत: Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium।"
      },
      {
        "question": "In a certain code language, if 'COMPUTER' is coded as 'RFUVQNPC', how will 'PRINTER' be coded in that same language?",
        "question_hi": "एक निश्चित कूट भाषा में, यदि 'COMPUTER' को 'RFUVQNPC' के रूप में कोडित किया जाता है, तो उसी भाषा में 'PRINTER' को कैसे कोडित किया जाएगा?",
        "options": {
          "A": "SFUOJSQ",
          "B": "SGVOKTR",
          "C": "SFVNJSQ",
          "D": "TEVOJSR"
        },
        "options_hi": {
          "A": "SFUOJSQ",
          "B": "SGVOKTR",
          "C": "SFVNJSQ",
          "D": "TEVOJSR"
        },
        "correctAnswer": "A",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता (Logical Reasoning)",
        "explanation": "The pattern reverses the word and then shifts each letter forward by +1: PRINTER reversed is RETNIRP -> +1 gives SFUOJSQ.",
        "explanation_hi": "पैटर्न में शब्द को पहले उल्टा किया जाता है और फिर प्रत्येक अक्षर में +1 जोड़ा जाता है: PRINTER का उल्टा RETNIRP -> प्रत्येक में +1 करने पर SFUOJSQ प्राप्त होता है।"
      },
      {
        "id": 31,
        "questionNumber": 31,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Find the missing number in the series: 2, 6, 12, 20, 30, 42, ?",
        "question_hi": "शृंखला में लुप्त संख्या ज्ञात कीजिए: 2, 6, 12, 20, 30, 42, ?",
        "options": {
          "A": "54",
          "B": "56",
          "C": "60",
          "D": "48"
        },
        "options_hi": {
          "A": "54",
          "B": "56",
          "C": "60",
          "D": "48"
        },
        "correctAnswer": "B",
        "explanation": "Pattern: n*(n+1) or differences of +4, +6, +8, +10, +12, +14. 42 + 14 = 56 (or 7 * 8 = 56).",
        "explanation_hi": "पैटर्न: क्रमागत अंतर +4, +6, +8, +10, +12, +14 है। 42 + 14 = 56 (या 7 * 8 = 56)।"
      },
      {
        "id": 32,
        "questionNumber": 32,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which diagram best represents the relationship among: 'Engineers', 'Human Beings', and 'Doctors'?",
        "question_hi": "'इंजीनियर', 'मानव' और 'डॉक्टर' के बीच संबंध को कौन सा वेन आरेख सबसे अच्छी तरह दर्शाता है?",
        "options": {
          "A": "Three completely detached separate circles",
          "B": "Three intersecting concentric circles",
          "C": "A large circle containing two separate non-overlapping circles inside it",
          "D": "Two overlapping circles inside a square"
        },
        "options_hi": {
          "A": "तीन पूरी तरह से अलग-अलग वृत्त",
          "B": "तीन परस्पर जुड़े हुए वृत्त",
          "C": "एक बड़ा वृत्त (मानव) जिसके अंदर दो अलग-अलग गैर-अतिव्यापी वृत्त (इंजीनियर और डॉक्टर) स्थित हैं",
          "D": "एक वर्ग के अंदर दो परस्पर जुड़े वृत्त"
        },
        "correctAnswer": "C",
        "explanation": "Both Engineers and Doctors are distinct professions belonging entirely within the set of Human Beings, with no typical professional overlap in this standard categorical classification.",
        "explanation_hi": "सभी इंजीनियर और सभी डॉक्टर 'मानव' होते हैं, और सामान्यतः कोई व्यक्ति एक साथ दोनों मुख्य पेशों में नहीं होता, इसलिए बड़े वृत्त के अंदर दो अलग वृत्त होंगे।"
      },
      {
        "id": 33,
        "questionNumber": 33,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A car covers a distance of 180 km at a speed of 60 km/h and returns the same distance at a speed of 90 km/h. What is the average speed of the car for the entire round trip?",
        "question_hi": "एक कार 60 किमी/घंटा की गति से 180 किमी की दूरी तय करती है और 90 किमी/घंटा की गति से उसी दूरी पर वापस आती है। पूरी यात्रा के लिए कार की औसत गति क्या है?",
        "options": {
          "A": "75 km/h",
          "B": "80 km/h",
          "C": "70 km/h",
          "D": "72 km/h"
        },
        "options_hi": {
          "A": "75 किमी/घंटा",
          "B": "80 किमी/घंटा",
          "C": "70 किमी/घंटा",
          "D": "72 किमी/घंटा"
        },
        "correctAnswer": "D",
        "explanation": "Formula: Average speed for equal distance = 2*x*y / (x + y) = (2 * 60 * 90) / (60 + 90) = 10,800 / 150 = 72 km/h.",
        "explanation_hi": "समान दूरी के लिए औसत चाल = 2xy / (x + y) = (2 * 60 * 90) / 150 = 72 किमी/घंटा।"
      },
      {
        "id": 34,
        "questionNumber": 34,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "The diagonal of a square is 10√2 cm. What is the perimeter of this square?",
        "question_hi": "एक वर्ग का विकर्ण 10√2 सेमी है। इस वर्ग का परिमाप क्या होगा?",
        "options": {
          "A": "40 cm",
          "B": "50 cm",
          "C": "35 cm",
          "D": "45 cm"
        },
        "options_hi": {
          "A": "40 सेमी",
          "B": "50 सेमी",
          "C": "35 सेमी",
          "D": "45 सेमी"
        },
        "correctAnswer": "A",
        "explanation": "Diagonal of square d = a√2 => 10√2 = a√2 => side a = 10 cm. Perimeter = 4 * a = 4 * 10 = 40 cm.",
        "explanation_hi": "विकर्ण = भुजा * √2 => 10√2 = a√2 => भुजा = 10 सेमी। परिमाप = 4 * भुजा = 40 सेमी।"
      },
      {
        "id": 35,
        "questionNumber": 35,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the smallest number which when divided by 12, 15, 20, and 54 leaves in each case a remainder of 4?",
        "question_hi": "वह सबसे छोटी संख्या कौन सी है जिसे 12, 15, 20 और 54 से भाग देने पर प्रत्येक स्थिति में शेषफल 4 बचता है?",
        "options": {
          "A": "536",
          "B": "544",
          "C": "540",
          "D": "548"
        },
        "options_hi": {
          "A": "536",
          "B": "544",
          "C": "540",
          "D": "548"
        },
        "correctAnswer": "B",
        "explanation": "LCM(12, 15, 20, 54) = 540. Required number = LCM + remainder = 540 + 4 = 544.",
        "explanation_hi": "12, 15, 20 और 54 का लघुत्तम समापवर्त्य (LCM) = 540। अभीष्ट संख्या = 540 + 4 = 544।"
      },
      {
        "id": 36,
        "questionNumber": 36,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In how many different ways can the letters of the word 'LEADER' be arranged?",
        "question_hi": "शब्द 'LEADER' के अक्षरों को कितने विभिन्न तरीकों से व्यवस्थित किया जा सकता है?",
        "options": {
          "A": "120 ways",
          "B": "720 ways",
          "C": "360 ways",
          "D": "180 ways"
        },
        "options_hi": {
          "A": "120 तरीके",
          "B": "720 तरीके",
          "C": "360 तरीके",
          "D": "180 तरीके"
        },
        "correctAnswer": "C",
        "explanation": "The word LEADER contains 6 letters with 'E' repeating 2 times. Total permutations = 6! / 2! = 720 / 2 = 360 ways.",
        "explanation_hi": "LEADER में 6 अक्षर हैं जिनमें 'E' 2 बार आया है। कुल विन्यास = 6! / 2! = 720 / 2 = 360।"
      },
      {
        "id": 37,
        "questionNumber": 37,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Two numbers are in the ratio 3 : 4. If their LCM is 84, what is the greater of the two numbers?",
        "question_hi": "दो संख्याएं 3 : 4 के अनुपात में हैं। यदि उनका LCM 84 है, तो दोनों में से बड़ी संख्या क्या है?",
        "options": {
          "A": "24",
          "B": "21",
          "C": "32",
          "D": "28"
        },
        "options_hi": {
          "A": "24",
          "B": "21",
          "C": "32",
          "D": "28"
        },
        "correctAnswer": "D",
        "explanation": "Let numbers be 3x and 4x. LCM = 12x = 84 => x = 7. Greater number = 4x = 4 * 7 = 28.",
        "explanation_hi": "माना संख्याएं 3x और 4x हैं। LCM = 12x = 84 => x = 7। बड़ी संख्या = 4 * 7 = 28।"
      },
      {
        "id": 38,
        "questionNumber": 38,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A tap can fill an empty pool in 8 hours. Due to a leak in the bottom, it takes 10 hours to fill the pool. In how many hours will the leak alone empty a full pool?",
        "question_hi": "एक नल किसी खाली हौज को 8 घंटे में भर सकता है। तली में रिसाव (छेद) होने के कारण इसे भरने में 10 घंटे लगते हैं। पूरा भरा हौज रिसाव द्वारा अकेले कितने घंटे में खाली हो जाएगा?",
        "options": {
          "A": "40 hours",
          "B": "30 hours",
          "C": "50 hours",
          "D": "45 hours"
        },
        "options_hi": {
          "A": "40 घंटे",
          "B": "30 घंटे",
          "C": "50 घंटे",
          "D": "45 घंटे"
        },
        "correctAnswer": "A",
        "explanation": "Pool capacity = LCM(8, 10) = 40 units. Tap rate = 5 units/hr. Net rate with leak = 4 units/hr. Leak emptying rate = 5 - 4 = 1 unit/hr. Time to empty = 40 / 1 = 40 hours.",
        "explanation_hi": "कुल क्षमता = 40 इकाई। नल की गति = 5 इकाई/घंटा। नल + रिसाव = 4 इकाई/घंटा। रिसाव की खाली करने की दर = 1 इकाई/घंटा। खाली होने का समय = 40 घंटे।"
      },
      {
        "id": 39,
        "questionNumber": 39,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "If 1st January 2024 was a Monday, what day of the week was 31st December 2024 (knowing 2024 is a leap year)?",
        "question_hi": "यदि 1 जनवरी 2024 को सोमवार था, तो 31 दिसंबर 2024 को सप्ताह का कौन सा दिन होगा (यह जानते हुए कि 2024 एक लीप वर्ष है)?",
        "options": {
          "A": "Sunday",
          "B": "Tuesday",
          "C": "Wednesday",
          "D": "Monday"
        },
        "options_hi": {
          "A": "रविवार",
          "B": "मंगलवार",
          "C": "बुधवार",
          "D": "सोमवार"
        },
        "correctAnswer": "B",
        "explanation": "In an ordinary year (365 days), the first and last days of the year are the same. In a leap year (366 days, 2 odd days), the year ends on the day AFTER it started. Since it started on Monday, it ends on Tuesday.",
        "explanation_hi": "एक लीप वर्ष (366 दिन) जिस दिन शुरू होता है, उससे अगले दिन समाप्त होता है। 1 जनवरी को सोमवार था, अतः 31 दिसंबर को मंगलवार होगा।"
      },
      {
        "id": 40,
        "questionNumber": 40,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Complete the analogy: Doctor : Stethoscope :: Sculptor : ?",
        "question_hi": "सादृश्यता पूर्ण कीजिए: चिकित्सक : स्टेथोस्कोप :: मूर्तिकार : ?",
        "options": {
          "A": "Pen",
          "B": "Anvil",
          "C": "Chisel (छेनी)",
          "D": "Telescope"
        },
        "options_hi": {
          "A": "कलम",
          "B": "निहाई",
          "C": "छेनी (Chisel)",
          "D": "दूरबीन"
        },
        "correctAnswer": "C",
        "explanation": "A stethoscope is the primary diagnostic instrument of a doctor; a chisel is the primary sculpting tool of a sculptor.",
        "explanation_hi": "स्टेथोस्कोप डॉक्टर का प्रमुख उपकरण है, उसी प्रकार छेनी (Chisel) मूर्तिकार का प्रमुख औजार है।"
      },
      {
        "id": 41,
        "questionNumber": 41,
        "section": "Other Skills",
        "topic": "Numerical Aptitude",
        "topic_hi": "संख्यात्मक अभियोग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A train running at a speed of 72 km/hr crosses a stationary pole in 15 seconds. What is the length of the train?",
        "question_hi": "72 किमी/घंटा की गति से चल रही एक रेलगाड़ी एक खंभे को 15 सेकंड में पार करती है। रेलगाड़ी की लंबाई क्या है?",
        "options": {
          "A": "180 meters",
          "B": "360 meters",
          "C": "250 meters",
          "D": "300 meters"
        },
        "options_hi": {
          "A": "180 मीटर",
          "B": "360 मीटर",
          "C": "250 मीटर",
          "D": "300 मीटर"
        },
        "correctAnswer": "D",
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Length = Speed * Time = 20 * 15 = 300 meters.",
        "explanation_hi": "गति = 72 * (5/18) = 20 मीटर/सेकंड। लंबाई = गति * समय = 20 * 15 = 300 मीटर।"
      },
      {
        "id": 42,
        "questionNumber": 42,
        "section": "Other Skills",
        "topic": "Numerical Aptitude",
        "topic_hi": "संख्यात्मक अभियोग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A can complete a piece of work in 12 days, and B can complete the same work in 24 days. Working together, in how many days will they finish the work?",
        "question_hi": "A किसी काम को 12 दिनों में पूरा कर सकता है, और B उसी काम को 24 दिनों में पूरा कर सकता है। एक साथ काम करते हुए वे काम को कितने दिनों में समाप्त करेंगे?",
        "options": {
          "A": "8 days",
          "B": "9 days",
          "C": "6 days",
          "D": "10 days"
        },
        "options_hi": {
          "A": "8 दिन",
          "B": "9 दिन",
          "C": "6 दिन",
          "D": "10 दिन"
        },
        "correctAnswer": "A",
        "explanation": "Combined 1-day work = 1/12 + 1/24 = 3/24 = 1/8. Total time required = 8 days.",
        "explanation_hi": "संयुक्त 1 दिन का कार्य = 1/12 + 1/24 = 3/24 = 1/8. अतः दोनों मिलकर काम को 8 दिनों में पूरा करेंगे।"
      },
      {
        "id": 43,
        "questionNumber": 43,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता (Logical Reasoning)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Pointing to a man in a photograph, Anita says, 'His father\\'s only son is my father.' How is Anita related to the man in the photograph?",
        "question_hi": "एक तस्वीर में एक व्यक्ति की ओर इशारा करते हुए, अनिता कहती है, 'उसके पिता का इकलौता बेटा मेरा पिता है।' अनिता का उस व्यक्ति से क्या संबंध है?",
        "options": {
          "A": "Sister",
          "B": "Daughter",
          "C": "Niece",
          "D": "Mother"
        },
        "options_hi": {
          "A": "बहन (Sister)",
          "B": "पुत्री (Daughter)",
          "C": "भतीजी/भांजी (Niece)",
          "D": "माता (Mother)"
        },
        "correctAnswer": "B",
        "explanation": "The man's father's only son is the man himself. Since he is Anita's father, Anita is his daughter.",
        "explanation_hi": "व्यक्ति के पिता का इकलौता पुत्र वह व्यक्ति स्वयं है। चूंकि वह अनिता का पिता है, अतः अनिता उसकी पुत्री है।"
      },
      {
        "id": 44,
        "questionNumber": 44,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता (Logical Reasoning)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Find the next missing number in the sequence: 3, 7, 15, 31, 63, ?",
        "question_hi": "श्रृंखला में अगली लुप्त संख्या ज्ञात कीजिए: 3, 7, 15, 31, 63, ?",
        "options": {
          "A": "128",
          "B": "125",
          "C": "127",
          "D": "120"
        },
        "options_hi": {
          "A": "128",
          "B": "125",
          "C": "127",
          "D": "120"
        },
        "correctAnswer": "C",
        "explanation": "The pattern is (x * 2) + 1: 3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1=127.",
        "explanation_hi": "पैटर्न है (x * 2) + 1: 63 * 2 + 1 = 127।"
      },
      {
        "id": 45,
        "questionNumber": 45,
        "section": "Other Skills",
        "topic": "Numerical Aptitude",
        "topic_hi": "संख्यात्मक अभियोग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "An article was purchased for Rs. 500 and sold for Rs. 650. What is the profit percentage?",
        "question_hi": "एक वस्तु को 500 रुपये में खरीदा गया और 650 रुपये में बेचा गया। लाभ प्रतिशत क्या है?",
        "options": {
          "A": "20%",
          "B": "25%",
          "C": "35%",
          "D": "30%"
        },
        "options_hi": {
          "A": "20%",
          "B": "25%",
          "C": "35%",
          "D": "30%"
        },
        "correctAnswer": "D",
        "explanation": "Profit = Rs. 650 - 500 = Rs. 150. Profit % = (150 / 500) * 100 = 30%.",
        "explanation_hi": "लाभ = 650 - 500 = 150 रुपये। लाभ प्रतिशत = (150 / 500) * 100 = 30%।"
      },
      {
        "id": 46,
        "questionNumber": 46,
        "section": "Other Skills",
        "topic": "Numerical Aptitude",
        "topic_hi": "संख्यात्मक अभियोग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the simple interest on a principal sum of Rs. 4,000 for 3 years at an annual interest rate of 5%?",
        "question_hi": "5% वार्षिक ब्याज दर पर 3 वर्ष के लिए 4,000 रुपये के मूलधन पर साधारण ब्याज क्या होगा?",
        "options": {
          "A": "Rs. 600",
          "B": "Rs. 500",
          "C": "Rs. 750",
          "D": "Rs. 450"
        },
        "options_hi": {
          "A": "600 रुपये",
          "B": "500 रुपये",
          "C": "750 रुपये",
          "D": "450 रुपये"
        },
        "correctAnswer": "A",
        "explanation": "SI = (P * R * T) / 100 = (4000 * 5 * 3) / 100 = Rs. 600.",
        "explanation_hi": "साधारण ब्याज = (मूलधन * दर * समय) / 100 = (4000 * 5 * 3) / 100 = 600 रुपये।"
      },
      {
        "id": 47,
        "questionNumber": 47,
        "section": "Other Skills",
        "topic": "Numerical Aptitude",
        "topic_hi": "संख्यात्मक अभियोग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "If 15% of a number is equal to 45, what is 40% of that same number?",
        "question_hi": "यदि किसी संख्या का 15% भाग 45 के बराबर है, तो उसी संख्या का 40% भाग क्या होगा?",
        "options": {
          "A": "100",
          "B": "120",
          "C": "135",
          "D": "150"
        },
        "options_hi": {
          "A": "100",
          "B": "120",
          "C": "135",
          "D": "150"
        },
        "correctAnswer": "B",
        "explanation": "The number = 45 / 0.15 = 300. 40% of 300 = 300 * 0.40 = 120.",
        "explanation_hi": "संख्या = 45 / 0.15 = 300। 300 का 40% = 300 * 0.40 = 120।"
      },
      {
        "id": 48,
        "questionNumber": 48,
        "section": "Other Skills",
        "topic": "Numerical Aptitude",
        "topic_hi": "संख्यात्मक अभियोग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "The ratio of ages of A and B is 3:5. If the sum of their present ages is 40 years, what is the age of B?",
        "question_hi": "A और B की आयु का अनुपात 3:5 है। यदि उनकी वर्तमान आयु का योग 40 वर्ष है, तो B की आयु क्या है?",
        "options": {
          "A": "20 years",
          "B": "15 years",
          "C": "25 years",
          "D": "30 years"
        },
        "options_hi": {
          "A": "20 वर्ष",
          "B": "15 वर्ष",
          "C": "25 वर्ष",
          "D": "30 वर्ष"
        },
        "correctAnswer": "C",
        "explanation": "Sum of ratio terms = 3 + 5 = 8. B's age = (5/8) * 40 = 25 years.",
        "explanation_hi": "अनुपात पदों का योग = 3 + 5 = 8। B की आयु = (5 / 8) * 40 = 25 वर्ष।"
      },
      {
        "id": 49,
        "questionNumber": 49,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता (Logical Reasoning)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In an examination, a candidate gets 4 marks for each correct answer and loses 1 mark for each wrong answer. If he attempts all 60 questions and scores 140 marks, how many questions did he answer correctly?",
        "question_hi": "एक परीक्षा में, एक अभ्यर्थी को प्रत्येक सही उत्तर के लिए 4 अंक मिलते हैं और प्रत्येक गलत उत्तर के लिए 1 अंक कटता है। यदि वह सभी 60 प्रश्नों को हल करता है और 140 अंक प्राप्त करता है, तो उसने कितने प्रश्न सही किए?",
        "options": {
          "A": "50",
          "B": "45",
          "C": "35",
          "D": "40"
        },
        "options_hi": {
          "A": "50",
          "B": "45",
          "C": "35",
          "D": "40"
        },
        "correctAnswer": "D",
        "explanation": "Let correct = c. 4c - (60 - c) = 140 => 5c = 200 => c = 40.",
        "explanation_hi": "माना सही उत्तर c हैं: 4c - (60 - c) = 140 => 5c = 200 => c = 40।"
      },
      {
        "id": 50,
        "questionNumber": 50,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता (Logical Reasoning)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Find the odd one out from the given four options: Iron, Copper, Brass, Silver.",
        "question_hi": "दिए गए चार विकल्पों में से विषम को चुनिए: लोहा (Iron), तांबा (Copper), पीतल (Brass), चांदी (Silver)।",
        "options": {
          "A": "Brass (Alloy)",
          "B": "Iron (Element)",
          "C": "Copper (Element)",
          "D": "Silver (Element)"
        },
        "options_hi": {
          "A": "पीतल (Brass - मिश्र धातु)",
          "B": "लोहा (Iron - तत्व)",
          "C": "तांबा (Copper - तत्व)",
          "D": "चांदी (Silver - तत्व)"
        },
        "correctAnswer": "A",
        "explanation": "Brass is an alloy of copper and zinc, whereas Iron, Copper, and Silver are pure elemental metals.",
        "explanation_hi": "पीतल (Brass) तांबे और जस्ता की एक मिश्र धातु (alloy) है, जबकि लोहा, तांबा और चांदी शुद्ध धातु तत्व हैं।"
      }
    ]
  }
};
