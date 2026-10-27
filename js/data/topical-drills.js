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
          "A": "4 NAND gates",
          "B": "3 NAND gates",
          "C": "5 NAND gates",
          "D": "2 NAND gates"
        },
        "options_hi": {
          "A": "4 NAND गेट",
          "B": "3 NAND गेट",
          "C": "5 NAND गेट",
          "D": "2 NAND गेट"
        },
        "correctAnswer": "A",
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
          "A": "5 NOR gates",
          "B": "4 NOR gates",
          "C": "3 NOR gates",
          "D": "6 NOR gates"
        },
        "options_hi": {
          "A": "5 NOR गेट",
          "B": "4 NOR गेट",
          "C": "3 NOR गेट",
          "D": "6 NOR गेट"
        },
        "correctAnswer": "A",
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
          "A": "When the sum exceeds 9 (1001_2) or when an output carry is generated",
          "B": "Only when sum is odd",
          "C": "When sum is less than 5",
          "D": "Always on every addition"
        },
        "options_hi": {
          "A": "जब योग 9 (1001_2) से अधिक हो या जब कोई आउटपुट कैरी उत्पन्न हो",
          "B": "केवल जब योग विषम हो",
          "C": "जब योग 5 से कम हो",
          "D": "हमेशा"
        },
        "correctAnswer": "A",
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
          "A": "Exchanges the 16-bit contents of register pair H-L with register pair D-E",
          "B": "Exchanges Accumulator with B",
          "C": "Exchanges Stack Pointer with Program Counter",
          "D": "Clears H-L register"
        },
        "options_hi": {
          "A": "रजिस्टर जोड़ी H-L की 16-बिट सामग्री को रजिस्टर जोड़ी D-E के साथ बदलता है",
          "B": "A और B को बदलता है",
          "C": "SP और PC को बदलता है",
          "D": "H-L को खाली करता है"
        },
        "correctAnswer": "A",
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
          "A": "Memory-Mapped I/O uses the same address space and memory instructions (MOV, LDA) for both memory and I/O devices",
          "B": "Memory-mapped I/O uses IN and OUT instructions",
          "C": "Isolated I/O cannot address disks",
          "D": "Memory-mapped I/O requires separate buses"
        },
        "options_hi": {
          "A": "मेमोरी-मैप्ड I/O मेमोरी और I/O डिवाइस दोनों के लिए समान पता स्थान और मेमोरी निर्देशों का उपयोग करता है",
          "B": "मेमोरी मैप्ड में IN/OUT प्रयुक्त होते हैं",
          "C": "पृथक I/O डिस्क नहीं चला सकता",
          "D": "अलग बस चाहिए"
        },
        "correctAnswer": "A",
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
          "A": "Simple, fixed-length instructions executed in a single clock cycle with a Load/Store memory architecture",
          "B": "Complex variable-length instructions with many memory addressing modes",
          "C": "Microprogrammed control units",
          "D": "Small register files"
        },
        "options_hi": {
          "A": "लोड/स्टोर मेमोरी मॉडल के साथ एक ही क्लॉक साइकिल में निष्पादित होने वाले सरल, निश्चित लंबाई के निर्देश",
          "B": "जटिल चर लंबाई निर्देश",
          "C": "माइक्रोप्रोग्राम्ड यूनिट",
          "D": "कम रजिस्टर"
        },
        "correctAnswer": "A",
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
          "A": "Threads (pointers) pointing to the in-order predecessor or in-order successor",
          "B": "Pointers to the root node",
          "C": "Pointers to the parent node",
          "D": "Random hash values"
        },
        "options_hi": {
          "A": "इन-ऑर्डर पूर्ववर्ती या इन-ऑर्डर परवर्ती नोड्स को इंगित करने वाले थ्रेड्स (पॉइंटर्स)",
          "B": "रूट नोड के पॉइंटर",
          "C": "पैरेंट नोड के पॉइंटर",
          "D": "हैश वैल्यू"
        },
        "correctAnswer": "A",
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
          "A": "T(n) = 7T(n/2) + O(n^2)",
          "B": "T(n) = 8T(n/2) + O(n^2)",
          "C": "T(n) = 4T(n/2) + O(n)",
          "D": "T(n) = 2T(n/2) + O(n^2)"
        },
        "options_hi": {
          "A": "T(n) = 7T(n/2) + O(n^2)",
          "B": "T(n) = 8T(n/2) + O(n^2)",
          "C": "T(n) = 4T(n/2) + O(n)",
          "D": "T(n) = 2T(n/2) + O(n^2)"
        },
        "correctAnswer": "A",
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
          "A": "Sorting items by decreasing ratio of Value to Weight (v_i / w_i)",
          "B": "Selecting items with maximum absolute value first",
          "C": "Selecting items with minimum weight first",
          "D": "Selecting items in random order"
        },
        "options_hi": {
          "A": "वस्तुओं को मूल्य-प्रति-इकाई-भार अनुपात (v_i / w_i) के घटते क्रम में सॉर्ट करना",
          "B": "अधिकतम मूल्य वाली वस्तुएं पहले",
          "C": "न्यूनतम भार वाली पहले",
          "D": "रैंडम क्रम"
        },
        "correctAnswer": "A",
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
          "A": "A lock where a thread loops repeatedly ('busy waits') checking for lock availability; effective on multiprocessor systems for very short wait durations",
          "B": "A lock for single-core CPUs only",
          "C": "A deadlock detection algorithm",
          "D": "A disk block lock"
        },
        "options_hi": {
          "A": "एक लॉक जिसमें थ्रेड लॉक मिलने तक व्यस्त प्रतीक्षा (Busy Wait) लूप चलाता है; मल्टीप्रोसेसर में अल्पकालिक प्रतीक्षा के लिए प्रभावी",
          "B": "सिंगल कोर लॉक",
          "C": "डेडलॉक चेकर",
          "D": "डिस्क लॉक"
        },
        "correctAnswer": "A",
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
          "A": "Estimates the set of pages an active process is currently referencing to prevent thrashing",
          "B": "Schedules CPU tasks",
          "C": "Allocates file descriptors",
          "D": "Measures disk access speed"
        },
        "options_hi": {
          "A": "थ्रैशिंग रोकने के लिए किसी प्रक्रिया द्वारा संदर्भित सक्रिय पेजों के सेट का अनुमान लगाता है",
          "B": "टास्क शेड्यूलिंग",
          "C": "फाइल डिस्क्रिप्टर",
          "D": "डिस्क स्पीड"
        },
        "correctAnswer": "A",
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
          "A": "Eliminates external fragmentation and supports fast direct/random access via an index block",
          "B": "Requires no index overhead",
          "C": "Stores entire file in one block",
          "D": "Only allows sequential access"
        },
        "options_hi": {
          "A": "बाहरी विखंडन को समाप्त करता है और इंडेक्स ब्लॉक के माध्यम से तेज़ रैंडम एक्सेस का समर्थन करता है",
          "B": "कोई ओवरहेड नहीं",
          "C": "एक ब्लॉक में पूरी फाइल",
          "D": "केवल अनुक्रमिक एक्सेस"
        },
        "correctAnswer": "A",
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
        "topic": "Digital Logic",
        "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which fundamental logic gate operates according to the truth rule: 'Output is 1 (HIGH) if and only if ALL inputs are 0 (LOW)'?",
        "question_hi": "कौन सा लॉजिक गेट इस सत्यता नियम के अनुसार कार्य करता है: 'आउटपुट 1 केवल तभी होता है जब सभी इनपुट 0 हों'?",
        "options": {
          "A": "NOR gate",
          "B": "AND gate",
          "C": "OR gate",
          "D": "Inverter"
        },
        "options_hi": {
          "A": "नॉर (NOR) गेट",
          "B": "AND गेट",
          "C": "OR गेट",
          "D": "नॉट गेट"
        },
        "correctAnswer": "A",
        "explanation": "Definition matches the NOR gate. Output is 1 (HIGH) if and only if ALL inputs are 0 (LOW).",
        "explanation_hi": "यह नॉर (NOR) गेट की मानक सत्यता सारणी का नियम है। आउटपुट 1 केवल तभी होता है जब सभी इनपुट 0 हों।"
      },
      {
        "id": 18,
        "questionNumber": 18,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which fundamental logic gate operates according to the truth rule: 'Output is 1 (HIGH) when inputs have an ODD number of 1s'?",
        "question_hi": "कौन सा लॉजिक गेट इस सत्यता नियम के अनुसार कार्य करता है: 'आउटपुट 1 तब होता है जब इनपुट में 1s की संख्या विषम हो'?",
        "options": {
          "A": "XOR gate",
          "B": "AND gate",
          "C": "OR gate",
          "D": "Inverter"
        },
        "options_hi": {
          "A": "एक्स-ऑर (XOR) गेट",
          "B": "AND गेट",
          "C": "OR गेट",
          "D": "नॉट गेट"
        },
        "correctAnswer": "A",
        "explanation": "Definition matches the XOR gate. Output is 1 (HIGH) when inputs have an ODD number of 1s.",
        "explanation_hi": "यह एक्स-ऑर (XOR) गेट की मानक सत्यता सारणी का नियम है। आउटपुट 1 तब होता है जब इनपुट में 1s की संख्या विषम हो।"
      },
      {
        "id": 19,
        "questionNumber": 19,
        "section": "Computer Science",
        "topic": "Digital Logic",
        "topic_hi": "डिजिटल लॉजिक (Digital Logic)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which fundamental logic gate operates according to the truth rule: 'Output is 1 (HIGH) when inputs are identical (even parity)'?",
        "question_hi": "कौन सा लॉजिक गेट इस सत्यता नियम के अनुसार कार्य करता है: 'आउटपुट 1 तब होता है जब इनपुट समान हों'?",
        "options": {
          "A": "XNOR gate",
          "B": "AND gate",
          "C": "OR gate",
          "D": "Inverter"
        },
        "options_hi": {
          "A": "एक्स-नॉर (XNOR) गेट",
          "B": "AND गेट",
          "C": "OR गेट",
          "D": "नॉट गेट"
        },
        "correctAnswer": "A",
        "explanation": "Definition matches the XNOR gate. Output is 1 (HIGH) when inputs are identical (even parity).",
        "explanation_hi": "यह एक्स-नॉर (XNOR) गेट की मानक सत्यता सारणी का नियम है। आउटपुट 1 तब होता है जब इनपुट समान हों।"
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
          "A": "Holds the binary instruction word currently being decoded and executed",
          "B": "Buffers peripheral video output",
          "C": "Acts as virtual swap partition",
          "D": "Manages network packets"
        },
        "options_hi": {
          "A": "Holds the binary instruction word currently being decoded and executed",
          "B": "वीडियो बफर",
          "C": "स्वैप पार्टीशन",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
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
          "A": "Holds the memory address of the top of the execution call stack",
          "B": "Buffers peripheral video output",
          "C": "Acts as virtual swap partition",
          "D": "Manages network packets"
        },
        "options_hi": {
          "A": "Holds the memory address of the top of the execution call stack",
          "B": "वीडियो बफर",
          "C": "स्वैप पार्टीशन",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
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
          "A": "Contains condition bits (Zero, Sign, Carry, Overflow, Parity) indicating ALU result status",
          "B": "Buffers peripheral video output",
          "C": "Acts as virtual swap partition",
          "D": "Manages network packets"
        },
        "options_hi": {
          "A": "Contains condition bits (Zero, Sign, Carry, Overflow, Parity) indicating ALU result status",
          "B": "वीडियो बफर",
          "C": "स्वैप पार्टीशन",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
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
          "A": "Data structure: Stack / Recursion (LIFO); Complexity: O(V + E)",
          "B": "Data structure: Priority Queue; Complexity: O(V^2)",
          "C": "Data structure: Binary Heap; Complexity: O(log V)",
          "D": "Data structure: Array; Complexity: O(E^2)"
        },
        "options_hi": {
          "A": "डेटा संरचना: Stack / Recursion (LIFO); जटिलता: O(V + E)",
          "B": "प्रायोरिटी कतार",
          "C": "बाइनरी हीप",
          "D": "ऐरे"
        },
        "correctAnswer": "A",
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
          "A": "Direct array element lookup by index A[i]",
          "B": "Matrix multiplication using standard 3 loops",
          "C": "Traversing every pair of vertices in a complete graph",
          "D": "Tower of Hanoi moves"
        },
        "options_hi": {
          "A": "Direct array element lookup by index A[i]",
          "B": "मैट्रिक्स गुणन",
          "C": "सभी शीर्ष युग्म",
          "D": "हनोई टॉवर"
        },
        "correctAnswer": "A",
        "explanation": "Direct array element lookup by index A[i] runs in O(1) time asymptotically.",
        "explanation_hi": "Direct array element lookup by index A[i] की समय जटिलता O(1) होती है।"
      },
      {
        "id": 27,
        "questionNumber": 27,
        "section": "Computer Science",
        "topic": "Algorithms",
        "topic_hi": "एल्गोरिदम (Algorithms)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which canonical computer science operation has a time complexity of O(log n) (Logarithmic Time)?",
        "question_hi": "किस मानक कंप्यूटर विज्ञान ऑपरेशन की समय जटिलता O(log n) (Logarithmic Time) होती है?",
        "options": {
          "A": "Binary Search on a sorted array of n elements",
          "B": "Matrix multiplication using standard 3 loops",
          "C": "Traversing every pair of vertices in a complete graph",
          "D": "Tower of Hanoi moves"
        },
        "options_hi": {
          "A": "Binary Search on a sorted array of n elements",
          "B": "मैट्रिक्स गुणन",
          "C": "सभी शीर्ष युग्म",
          "D": "हनोई टॉवर"
        },
        "correctAnswer": "A",
        "explanation": "Binary Search on a sorted array of n elements runs in O(log n) time asymptotically.",
        "explanation_hi": "Binary Search on a sorted array of n elements की समय जटिलता O(log n) होती है।"
      },
      {
        "id": 28,
        "questionNumber": 28,
        "section": "Computer Science",
        "topic": "Algorithms",
        "topic_hi": "एल्गोरिदम (Algorithms)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which canonical computer science operation has a time complexity of O(n) (Linear Time)?",
        "question_hi": "किस मानक कंप्यूटर विज्ञान ऑपरेशन की समय जटिलता O(n) (Linear Time) होती है?",
        "options": {
          "A": "Finding the minimum or maximum element in an unsorted array",
          "B": "Matrix multiplication using standard 3 loops",
          "C": "Traversing every pair of vertices in a complete graph",
          "D": "Tower of Hanoi moves"
        },
        "options_hi": {
          "A": "Finding the minimum or maximum element in an unsorted array",
          "B": "मैट्रिक्स गुणन",
          "C": "सभी शीर्ष युग्म",
          "D": "हनोई टॉवर"
        },
        "correctAnswer": "A",
        "explanation": "Finding the minimum or maximum element in an unsorted array runs in O(n) time asymptotically.",
        "explanation_hi": "Finding the minimum or maximum element in an unsorted array की समय जटिलता O(n) होती है।"
      },
      {
        "id": 29,
        "questionNumber": 29,
        "section": "Computer Science",
        "topic": "Algorithms",
        "topic_hi": "एल्गोरिदम (Algorithms)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which canonical computer science operation has a time complexity of O(n log n) (Linearithmic Time)?",
        "question_hi": "किस मानक कंप्यूटर विज्ञान ऑपरेशन की समय जटिलता O(n log n) (Linearithmic Time) होती है?",
        "options": {
          "A": "Merge Sort and Heap Sort in worst case",
          "B": "Matrix multiplication using standard 3 loops",
          "C": "Traversing every pair of vertices in a complete graph",
          "D": "Tower of Hanoi moves"
        },
        "options_hi": {
          "A": "Merge Sort and Heap Sort in worst case",
          "B": "मैट्रिक्स गुणन",
          "C": "सभी शीर्ष युग्म",
          "D": "हनोई टॉवर"
        },
        "correctAnswer": "A",
        "explanation": "Merge Sort and Heap Sort in worst case runs in O(n log n) time asymptotically.",
        "explanation_hi": "Merge Sort and Heap Sort in worst case की समय जटिलता O(n log n) होती है।"
      },
      {
        "id": 30,
        "questionNumber": 30,
        "section": "Computer Science",
        "topic": "Algorithms",
        "topic_hi": "एल्गोरिदम (Algorithms)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which canonical computer science operation has a time complexity of O(n^2) (Quadratic Time)?",
        "question_hi": "किस मानक कंप्यूटर विज्ञान ऑपरेशन की समय जटिलता O(n^2) (Quadratic Time) होती है?",
        "options": {
          "A": "Bubble Sort and Selection Sort in worst case",
          "B": "Matrix multiplication using standard 3 loops",
          "C": "Traversing every pair of vertices in a complete graph",
          "D": "Tower of Hanoi moves"
        },
        "options_hi": {
          "A": "Bubble Sort and Selection Sort in worst case",
          "B": "मैट्रिक्स गुणन",
          "C": "सभी शीर्ष युग्म",
          "D": "हनोई टॉवर"
        },
        "correctAnswer": "A",
        "explanation": "Bubble Sort and Selection Sort in worst case runs in O(n^2) time asymptotically.",
        "explanation_hi": "Bubble Sort and Selection Sort in worst case की समय जटिलता O(n^2) होती है।"
      },
      {
        "id": 31,
        "questionNumber": 31,
        "section": "Computer Science",
        "topic": "Algorithms",
        "topic_hi": "एल्गोरिदम (Algorithms)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which canonical computer science operation has a time complexity of O(2^n) (Exponential Time)?",
        "question_hi": "किस मानक कंप्यूटर विज्ञान ऑपरेशन की समय जटिलता O(2^n) (Exponential Time) होती है?",
        "options": {
          "A": "Recursive calculation of Fibonacci numbers without memoization",
          "B": "Matrix multiplication using standard 3 loops",
          "C": "Traversing every pair of vertices in a complete graph",
          "D": "Tower of Hanoi moves"
        },
        "options_hi": {
          "A": "Recursive calculation of Fibonacci numbers without memoization",
          "B": "मैट्रिक्स गुणन",
          "C": "सभी शीर्ष युग्म",
          "D": "हनोई टॉवर"
        },
        "correctAnswer": "A",
        "explanation": "Recursive calculation of Fibonacci numbers without memoization runs in O(2^n) time asymptotically.",
        "explanation_hi": "Recursive calculation of Fibonacci numbers without memoization की समय जटिलता O(2^n) होती है।"
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
        "topic": "Operating Systems",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In operating system process life cycle, what event triggers the state transition 'Running to Waiting (Blocked)'?",
        "question_hi": "ऑपरेटिंग सिस्टम प्रोसेस लाइफ साइकिल में, 'रनिंग से वेटिंग (ब्लॉक्ड)' अवस्था परिवर्तन किस घटना से होता है?",
        "options": {
          "A": "Process initiates an I/O request or waits for an event/signal",
          "B": "User logs out",
          "C": "Memory page fault occurs",
          "D": "Compiler finishes lexical analysis"
        },
        "options_hi": {
          "A": "Process initiates an I/O request or waits for an event/signal",
          "B": "यूज़र लॉगआउट",
          "C": "पेज फॉल्ट",
          "D": "कंपाइलर समाप्ति"
        },
        "correctAnswer": "A",
        "explanation": "The transition Running to Waiting (Blocked) occurs when: Process initiates an I/O request or waits for an event/signal.",
        "explanation_hi": "रनिंग से वेटिंग (ब्लॉक्ड) अवस्था परिवर्तन तब होता है जब: Process initiates an I/O request or waits for an event/signal।"
      },
      {
        "id": 34,
        "questionNumber": 34,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In operating system process life cycle, what event triggers the state transition 'Waiting to Ready'?",
        "question_hi": "ऑपरेटिंग सिस्टम प्रोसेस लाइफ साइकिल में, 'वेटिंग से रेडी' अवस्था परिवर्तन किस घटना से होता है?",
        "options": {
          "A": "Completion of the requested I/O operation or arrival of awaited signal",
          "B": "User logs out",
          "C": "Memory page fault occurs",
          "D": "Compiler finishes lexical analysis"
        },
        "options_hi": {
          "A": "Completion of the requested I/O operation or arrival of awaited signal",
          "B": "यूज़र लॉगआउट",
          "C": "पेज फॉल्ट",
          "D": "कंपाइलर समाप्ति"
        },
        "correctAnswer": "A",
        "explanation": "The transition Waiting to Ready occurs when: Completion of the requested I/O operation or arrival of awaited signal.",
        "explanation_hi": "वेटिंग से रेडी अवस्था परिवर्तन तब होता है जब: Completion of the requested I/O operation or arrival of awaited signal।"
      },
      {
        "id": 35,
        "questionNumber": 35,
        "section": "Computer Science",
        "topic": "Operating Systems",
        "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In operating system process life cycle, what event triggers the state transition 'Ready to Running'?",
        "question_hi": "ऑपरेटिंग सिस्टम प्रोसेस लाइफ साइकिल में, 'रेडी से रनिंग' अवस्था परिवर्तन किस घटना से होता है?",
        "options": {
          "A": "CPU Scheduler (Dispatcher) assigns processor core to the process",
          "B": "User logs out",
          "C": "Memory page fault occurs",
          "D": "Compiler finishes lexical analysis"
        },
        "options_hi": {
          "A": "CPU Scheduler (Dispatcher) assigns processor core to the process",
          "B": "यूज़र लॉगआउट",
          "C": "पेज फॉल्ट",
          "D": "कंपाइलर समाप्ति"
        },
        "correctAnswer": "A",
        "explanation": "The transition Ready to Running occurs when: CPU Scheduler (Dispatcher) assigns processor core to the process.",
        "explanation_hi": "रेडी से रनिंग अवस्था परिवर्तन तब होता है जब: CPU Scheduler (Dispatcher) assigns processor core to the process।"
      },
      {
        "id": 36,
        "questionNumber": 36,
        "section": "Computer Science",
        "topic": "Web-Based Application Development",
        "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In web application development practice 31, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 31 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 31 validates HTTP RFC compliance.",
        "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
      },
      {
        "id": 37,
        "questionNumber": 37,
        "section": "Computer Science",
        "topic": "Web-Based Application Development",
        "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In web application development practice 32, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 32 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 32 validates HTTP RFC compliance.",
        "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
      },
      {
        "id": 38,
        "questionNumber": 38,
        "section": "Computer Science",
        "topic": "Web-Based Application Development",
        "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In web application development practice 33, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 33 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 33 validates HTTP RFC compliance.",
        "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
      },
      {
        "id": 39,
        "questionNumber": 39,
        "section": "Computer Science",
        "topic": "Web-Based Application Development",
        "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In web application development practice 34, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 34 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 34 validates HTTP RFC compliance.",
        "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
      },
      {
        "id": 40,
        "questionNumber": 40,
        "section": "Computer Science",
        "topic": "Web-Based Application Development",
        "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In web application development practice 35, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 35 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 35 validates HTTP RFC compliance.",
        "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
      },
      {
        "id": 41,
        "questionNumber": 41,
        "section": "Computer Science",
        "topic": "Web-Based Application Development",
        "topic_hi": "वेब-आधारित अनुप्रयोग विकास (Web Dev)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In web application development practice 36, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 36 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 36 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 37, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 37 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 37 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 38, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 38 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 38 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 39, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 39 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 39 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 40, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 40 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 40 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 41, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 41 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 41 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 42, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 42 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 42 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 43, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 43 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 43 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 44, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 44 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 44 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 45, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 45 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 45 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 46, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 46 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 46 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 47, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 47 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 47 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 48, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 48 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 48 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 49, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 49 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 49 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 50, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 50 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 50 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 51, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 51 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 51 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 52, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 52 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 52 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 53, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 53 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 53 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 54, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 54 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 54 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 55, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 55 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 55 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 56, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 56 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 56 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 57, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 57 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 57 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 58, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 58 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 58 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 59, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 59 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 59 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 60, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 60 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 60 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 61, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 61 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 61 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 62, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 62 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 62 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 63, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 63 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 63 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 64, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 64 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 64 validates HTTP RFC compliance.",
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
        "question": "In web application development practice 65, what is the purpose of the HTTP 'GET' request method?",
        "question_hi": "वेब अनुप्रयोग विकास अभ्यास 65 में, HTTP 'GET' अनुरोध विधि का क्या उद्देश्य है?",
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
        "explanation": "HTTP GET is safe and idempotent, intended exclusively for read-only information retrieval. Case 65 validates HTTP RFC compliance.",
        "explanation_hi": "GET विधि केवल सर्वर से डेटा प्राप्त करने के लिए होती है और सर्वर के डेटा को बदलती नहीं है।"
      },
      {
        "id": 71,
        "questionNumber": 71,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the standard Audio CD digital sampling rate specified by the Red Book standard, and why was it chosen?",
        "question_hi": "रेड बुक मानक द्वारा निर्दिष्ट मानक ऑडियो सीडी डिजिटल नमूनाकरण दर (Sampling Rate) क्या है और इसे क्यों चुना गया?",
        "options": {
          "A": "44.1 kHz (by Nyquist Theorem, samples at more than twice the 20 kHz human hearing limit)",
          "B": "22.05 kHz",
          "C": "96 kHz",
          "D": "128 kHz"
        },
        "options_hi": {
          "A": "44.1 kHz (नाइक्विस्ट प्रमेय द्वारा, 20 kHz मानव श्रवण सीमा के दोगुने से अधिक पर नमूना लेता है)",
          "B": "22.05 kHz",
          "C": "96 kHz",
          "D": "128 kHz"
        },
        "correctAnswer": "A",
        "explanation": "Human audible spectrum is ~20 Hz to 20 kHz. By Nyquist sampling criteria, sampling frequency must exceed 2 * 20 kHz = 40 kHz; 44.1 kHz was selected for CD-DA.",
        "explanation_hi": "मानव कान अधिकतम 20 kHz सुन सकता है, नाइक्विस्ट नियम के अनुसार सैंपलिंग दर कम से कम 40 kHz होनी चाहिए, अतः 44.1 kHz चुना गया।"
      },
      {
        "id": 72,
        "questionNumber": 72,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What does 'MIDI' stand for in digital audio technology, and how does it store musical data?",
        "question_hi": "डिजिटल ऑडियो तकनीक में 'MIDI' का क्या अर्थ है और यह संगीत डेटा को कैसे संग्रहीत करता है?",
        "options": {
          "A": "Musical Instrument Digital Interface: Stores performance event instructions (note on/off, pitch, velocity) rather than sampled audio waveforms",
          "B": "Medium Interface Digital Internet",
          "C": "Compressed MP3 audio format",
          "D": "Sound wave amplitude format"
        },
        "options_hi": {
          "A": "म्यूजिकल इंस्ट्रूमेंट डिजिटल इंटरफ़ेस (MIDI): ऑडियो तरंगों के बजाय वाद्य संगीत की घटनाओं (नोट, पिच, वेग) के निर्देश संग्रहीत करता है",
          "B": "डिजिटल इंटरनेट",
          "C": "MP3 ऑडियो",
          "D": "तरंग आयाम"
        },
        "correctAnswer": "A",
        "explanation": "MIDI transmits alphanumeric control commands instructing synthesizers when to trigger notes, resulting in tiny file sizes compared to digitized audio.",
        "explanation_hi": "MIDI ऑडियो रिकॉर्डिंग नहीं बल्कि संगीत वाद्ययंत्रों के लिए डिजिटल निर्देश (नोट ऑन/ऑफ, पिच) रखता है।"
      },
      {
        "id": 73,
        "questionNumber": 73,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What type of data compression does the MP3 (MPEG-1 Audio Layer III) audio format utilize?",
        "question_hi": "MP3 (MPEG-1 ऑडियो लेयर III) प्रारूप किस प्रकार के डेटा संपीड़न (Compression) का उपयोग करता है?",
        "options": {
          "A": "Lossy compression based on Psychoacoustic models (removing audio frequencies inaudible to the human ear)",
          "B": "Lossless Huffman coding only",
          "C": "Run-length encoding",
          "D": "Lempel-Ziv compression"
        },
        "options_hi": {
          "A": "साइकोकॉस्टिक मॉडल पर आधारित हानियुक्त संपीड़न - Lossy Compression (मानव कान को न सुनाई देने वाली आवृत्तियों को हटाना)",
          "B": "हानिरहित कोडिंग",
          "C": "रन-लेंथ कोडिंग",
          "D": "LZW"
        },
        "correctAnswer": "A",
        "explanation": "MP3 eliminates sound masked by auditory masking thresholds, achieving roughly 10:1 to 12:1 compression without noticeable fidelity degradation.",
        "explanation_hi": "MP3 साइकोकॉस्टिक मॉडल से उन आवाज़ों को हटा देता है जिन्हें मानव कान नहीं सुन पाता (Lossy Compression)।"
      },
      {
        "id": 74,
        "questionNumber": 74,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the fundamental difference between Raster Graphics and Vector Graphics?",
        "question_hi": "रास्टर ग्राफिक्स (Raster Graphics) और वेक्टर ग्राफिक्स (Vector Graphics) के बीच मूलभूत अंतर क्या है?",
        "options": {
          "A": "Raster graphics are grids of colored pixels that lose quality when scaled; Vector graphics use mathematical equations (lines, curves) and scale losslessly",
          "B": "Raster uses vectors; vector uses pixels",
          "C": "Vector graphics cannot be printed",
          "D": "Raster graphics have smaller file sizes always"
        },
        "options_hi": {
          "A": "रास्टर ग्राफिक्स रंगीन पिक्सेल के ग्रिड हैं जो बड़ा करने पर फटने लगते हैं; वेक्टर ग्राफिक्स गणितीय सूत्रों का उपयोग करते हैं और बिना गुणवत्ता खोए स्केल होते हैं",
          "B": "उल्टा होता है",
          "C": "वेक्टर प्रिंट नहीं होते",
          "D": "रास्टर हमेशा छोटे होते हैं"
        },
        "correctAnswer": "A",
        "explanation": "Bitmaps/rasters pixelate when enlarged; vector formats (SVG, AI) recalculate mathematical endpoints and curves, retaining sharp rendering at any scale.",
        "explanation_hi": "रास्टर पिक्सेल आधारित होते हैं जो ज़ूम करने पर पिक्सलेट होते हैं; वेक्टर गणितीय रेखाओं पर आधारित होते हैं और कभी नहीं फटते।"
      },
      {
        "id": 75,
        "questionNumber": 75,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What color model is ADDITIVE and standardly used for digital electronic display screens?",
        "question_hi": "डिजिटल इलेक्ट्रॉनिक डिस्प्ले स्क्रीन के लिए कौन सा रंग मॉडल योगात्मक (Additive) है और मानक रूप से उपयोग किया जाता है?",
        "options": {
          "A": "RGB Color Model (Red, Green, Blue)",
          "B": "CMYK Color Model",
          "C": "Grayscale Model",
          "D": "YUV Model"
        },
        "options_hi": {
          "A": "RGB रंग मॉडल (रेड, ग्रीन, ब्लू - योगात्मक मॉडल)",
          "B": "CMYK मॉडल",
          "C": "ग्रेस्केल",
          "D": "YUV"
        },
        "correctAnswer": "A",
        "explanation": "RGB combines light beams (0 to 255); mixing all three primary colors at full intensity produces white light.",
        "explanation_hi": "RGB एक योगात्मक (Additive) रंग मॉडल है जो स्क्रीन और मॉनिटर पर उपयोग होता है।"
      },
      {
        "id": 76,
        "questionNumber": 76,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What color model is SUBTRACTIVE and utilized standardly in commercial color printing presses?",
        "question_hi": "व्यावसायिक रंगीन प्रिंटिंग प्रेसों में किस सबट्रैक्टिव (Subtractive) रंग मॉडल का उपयोग किया जाता है?",
        "options": {
          "A": "CMYK Color Model (Cyan, Magenta, Yellow, Key/Black)",
          "B": "RGB Model",
          "C": "HSL Model",
          "D": "Indexed Color"
        },
        "options_hi": {
          "A": "CMYK रंग मॉडल (सियान, मैजेंटा, येलो, ब्लैक)",
          "B": "RGB मॉडल",
          "C": "HSL मॉडल",
          "D": "इंडेक्सड"
        },
        "correctAnswer": "A",
        "explanation": "CMYK inks subtract light reflected from paper; combining Cyan, Magenta, and Yellow subtracts wavelengths to yield black (K ink provides true depth).",
        "explanation_hi": "CMYK एक सबट्रैक्टिव रंग मॉडल है जो प्रिंटिंग और स्याही के लिए मानक है।"
      },
      {
        "id": 77,
        "questionNumber": 77,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What animation technique smoothly transforms one image or shape into another through a seamless digital metamorphosis?",
        "question_hi": "कौन सी एनीमेशन तकनीक एक सहज डिजिटल परिवर्तन के माध्यम से एक छवि को दूसरी छवि में सुचारू रूप से बदलती है?",
        "options": {
          "A": "Morphing",
          "B": "Kinematics",
          "C": "Tweening only",
          "D": "Motion Capture"
        },
        "options_hi": {
          "A": "मॉर्फिंग (Morphing)",
          "B": "किनेमेटिक्स",
          "C": "ट्वीनिंग",
          "D": "मोशन कैप्चर"
        },
        "correctAnswer": "A",
        "explanation": "Morphing combines digital image warping with cross-dissolve to smoothly metamorphose a source subject into a target subject.",
        "explanation_hi": "मॉर्फिंग तकनीक में एक चेहरे या छवि को धीरे-धीरे दूसरी छवि में रूपांतरित किया जाता है।"
      },
      {
        "id": 78,
        "questionNumber": 78,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In digital video compression (MPEG standards), what is an 'I-Frame' (Intra-coded frame)?",
        "question_hi": "डिजिटल वीडियो संपीड़न (MPEG) में, 'I-फ़्रेम' (Intra-coded Frame) क्या है?",
        "options": {
          "A": "A completely self-contained video frame compressed using spatial compression only, requiring no other frames for decoding",
          "B": "A frame that depends on future frames",
          "C": "A frame that contains only audio",
          "D": "An uncompressed raw frame"
        },
        "options_hi": {
          "A": "पूरी तरह से आत्मनिर्भर वीडियो फ़्रेम जो केवल स्थानिक संपीड़न का उपयोग करता है और जिसे डिकोड करने के लिए किसी अन्य फ़्रेम की आवश्यकता नहीं होती",
          "B": "भविष्य पर निर्भर फ़्रेम",
          "C": "केवल ऑडियो",
          "D": "असंपीड़ित फ़्रेम"
        },
        "correctAnswer": "A",
        "explanation": "I-frames serve as reference keyframes; P-frames and B-frames store only temporal motion differences relative to adjacent I-frames.",
        "explanation_hi": "I-फ़्रेम एक पूर्ण स्वतंत्र कुंजी फ़्रेम (Keyframe) होता है जिसे पढ़ने के लिए किसी अन्य फ़्रेम की ज़रूरत नहीं होती।"
      },
      {
        "id": 79,
        "questionNumber": 79,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the frame rate of standard television broadcast under the NTSC standard?",
        "question_hi": "NTSC मानक के तहत मानक टेलीविज़न प्रसारण की फ़्रेम दर क्या है?",
        "options": {
          "A": "29.97 frames per second (approx. 30 fps, 525 scan lines)",
          "B": "25 frames per second",
          "C": "60 frames per second",
          "D": "24 frames per second"
        },
        "options_hi": {
          "A": "29.97 फ़्रेम प्रति सेकंड (लगभग 30 fps, 525 स्कैन लाइनें)",
          "B": "25 fps",
          "C": "60 fps",
          "D": "24 fps"
        },
        "correctAnswer": "A",
        "explanation": "NTSC broadcast operates at 29.97 fps with 525 lines/60 Hz; PAL and SECAM operate at 25 fps with 625 lines/50 Hz.",
        "explanation_hi": "NTSC मानक में लगभग 29.97 फ़्रेम प्रति सेकंड होते हैं।"
      },
      {
        "id": 80,
        "questionNumber": 80,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the frame rate of television broadcast under the PAL (Phase Alternating Line) standard?",
        "question_hi": "PAL (फेज़ अल्टरनेटिंग लाइन) मानक के तहत टेलीविज़न प्रसारण की फ़्रेम दर क्या है?",
        "options": {
          "A": "25 frames per second (625 scan lines, 50 Hz field rate)",
          "B": "29.97 frames per second",
          "C": "30 frames per second",
          "D": "120 frames per second"
        },
        "options_hi": {
          "A": "25 फ़्रेम प्रति सेकंड (625 स्कैन लाइनें, 50 Hz फ़ील्ड दर)",
          "B": "29.97 fps",
          "C": "30 fps",
          "D": "120 fps"
        },
        "correctAnswer": "A",
        "explanation": "PAL is used widely across Europe, India, and Australia, delivering 25 interlaced frames per second.",
        "explanation_hi": "भारत और यूरोप में प्रयुक्त PAL मानक में 25 फ़्रेम प्रति सेकंड (625 लाइनें) होती हैं।"
      },
      {
        "id": 81,
        "questionNumber": 81,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 1, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 1 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 1 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 82,
        "questionNumber": 82,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 2, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 2 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 2 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 83,
        "questionNumber": 83,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 3, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 3 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 3 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 84,
        "questionNumber": 84,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 4, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 4 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 4 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 85,
        "questionNumber": 85,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 5, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 5 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 5 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 86,
        "questionNumber": 86,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 6, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 6 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 6 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 87,
        "questionNumber": 87,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 7, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 7 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 7 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 88,
        "questionNumber": 88,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 8, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 8 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 8 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 89,
        "questionNumber": 89,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 9, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 9 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 9 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 90,
        "questionNumber": 90,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 10, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 10 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 10 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 91,
        "questionNumber": 91,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 11, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 11 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 11 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 92,
        "questionNumber": 92,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 12, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 12 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 12 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 93,
        "questionNumber": 93,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 13, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 13 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 13 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 94,
        "questionNumber": 94,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 14, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 14 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 14 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 95,
        "questionNumber": 95,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 15, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 15 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 15 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 96,
        "questionNumber": 96,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 16, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 16 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 16 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 97,
        "questionNumber": 97,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 17, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 17 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 17 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 98,
        "questionNumber": 98,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 18, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 18 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 18 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 99,
        "questionNumber": 99,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 19, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 19 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 19 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
      },
      {
        "id": 100,
        "questionNumber": 100,
        "section": "Computer Science",
        "topic": "Multimedia",
        "topic_hi": "मल्टीमीडिया (Multimedia)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In multimedia digital production workflow 20, what is the role of an Audio Sound Card?",
        "question_hi": "मल्टीमीडिया डिजिटल उत्पादन वर्कफ़्लो 20 में, एक ऑडियो साउंड कार्ड की क्या भूमिका है?",
        "options": {
          "A": "Converts analog sound wave signals to digital bitstreams via ADC, and digital audio to audible analog sound via DAC",
          "B": "Renders 3D polygon graphics",
          "C": "Compresses video files into ZIP archives",
          "D": "Routes network packets across subnets"
        },
        "options_hi": {
          "A": "ADC द्वारा एनालॉग ध्वनि को डिजिटल बिट्स में और DAC द्वारा डिजिटल ऑडियो को सुनने योग्य एनालॉग ध्वनि में बदलता है",
          "B": "3D ग्राफिक्स",
          "C": "ZIP बनाना",
          "D": "नेटवर्क पैकेट"
        },
        "correctAnswer": "A",
        "explanation": "Sound cards integrate DAC and ADC chips with DSP processing to facilitate recording and sound output. Workflow 20 covers digital audio hardware interfaces.",
        "explanation_hi": "साउंड कार्ड में ADC और DAC होते हैं जो एनालॉग आवाज़ को डिजिटल और डिजिटल को स्पीकर के लिए एनालॉग में बदलते हैं।"
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
        "question": "In pedagogical practice (Bruner's Spiral Curriculum - Scenario 26), which instructional strategy best reflects this principle: 'Revisits foundational concepts iteratively across schooling with increasing depth, abstraction, and complexity'?",
        "question_hi": "शिक्षण अभ्यास (ब्रूनर का सर्पिल पाठ्यक्रम - परिदृश्य 26) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'बुनियादी अवधारणाओं को बढ़ती जटिलता और अमूर्तता के साथ बार-बार दोहराता है'?",
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
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 1), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 1) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 1 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 3,
        "questionNumber": 3,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 2), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 2) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 2 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 4,
        "questionNumber": 4,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 3), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 3) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 3 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 5,
        "questionNumber": 5,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 4), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 4) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 4 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 6,
        "questionNumber": 6,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 5), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 5) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 5 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 7,
        "questionNumber": 7,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 6), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 6) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 6 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 8,
        "questionNumber": 8,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 7), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 7) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 7 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 9,
        "questionNumber": 9,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 8), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 8) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 8 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 10,
        "questionNumber": 10,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 9), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 9) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 9 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 11,
        "questionNumber": 11,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 10), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 10) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 10 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 12,
        "questionNumber": 12,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 11), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 11) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 11 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 13,
        "questionNumber": 13,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 12), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 12) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 12 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 14,
        "questionNumber": 14,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 13), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 13) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 13 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 15,
        "questionNumber": 15,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 14), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 14) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 14 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 16,
        "questionNumber": 16,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 15), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 15) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 15 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 17,
        "questionNumber": 17,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 16), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 16) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 16 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 18,
        "questionNumber": 18,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 17), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 17) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 17 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 19,
        "questionNumber": 19,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 18), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 18) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 18 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 20,
        "questionNumber": 20,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 19), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 19) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 19 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 21,
        "questionNumber": 21,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 20), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 20) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 20 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 22,
        "questionNumber": 22,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 21), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 21) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 21 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 23,
        "questionNumber": 23,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 22), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 22) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 22 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 24,
        "questionNumber": 24,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 23), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 23) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 23 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 25,
        "questionNumber": 25,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 24), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 24) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 24 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 26,
        "questionNumber": 26,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 25), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 25) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 25 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 27,
        "questionNumber": 27,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Experiential Learning Cycle (Kolb) - Scenario 26), which instructional strategy best reflects this principle: 'Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation'?",
        "question_hi": "शिक्षण अभ्यास (कोल्ब का अनुभवात्मक अधिगम चक्र - परिदृश्य 26) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 26 exemplifies Experiential Learning Cycle (Kolb): Four stages: Concrete Experience -> Reflective Observation -> Abstract Conceptualization -> Active Experimentation.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: मूर्त अनुभव -> चिंतनशील अवलोकन -> अमूर्त संकल्पना -> सक्रिय प्रयोग।"
      },
      {
        "id": 28,
        "questionNumber": 28,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 1), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 1) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 1 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 29,
        "questionNumber": 29,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 2), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 2) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 2 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 30,
        "questionNumber": 30,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 3), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 3) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 3 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 31,
        "questionNumber": 31,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 4), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 4) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 4 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 32,
        "questionNumber": 32,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 5), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 5) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 5 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 33,
        "questionNumber": 33,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 6), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 6) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 6 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 34,
        "questionNumber": 34,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 7), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 7) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 7 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 35,
        "questionNumber": 35,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 8), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 8) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 8 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 36,
        "questionNumber": 36,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 9), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 9) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 9 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 37,
        "questionNumber": 37,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 10), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 10) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 10 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 38,
        "questionNumber": 38,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 11), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 11) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 11 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 39,
        "questionNumber": 39,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 12), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 12) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 12 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 40,
        "questionNumber": 40,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 13), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 13) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 13 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 41,
        "questionNumber": 41,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 14), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 14) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 14 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 42,
        "questionNumber": 42,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 15), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 15) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 15 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 43,
        "questionNumber": 43,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 16), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 16) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 16 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 44,
        "questionNumber": 44,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 17), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 17) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 17 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 45,
        "questionNumber": 45,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 18), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 18) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 18 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 46,
        "questionNumber": 46,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 19), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 19) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 19 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 47,
        "questionNumber": 47,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 20), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 20) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 20 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 48,
        "questionNumber": 48,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 21), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 21) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 21 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 49,
        "questionNumber": 49,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 22), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 22) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 22 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
      },
      {
        "id": 50,
        "questionNumber": 50,
        "section": "Art of Teaching",
        "topic": "Art of Teaching",
        "topic_hi": "शिक्षण कला (Art of Teaching)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In pedagogical practice (Low-Cost Teaching-Learning Material (TLM) - Scenario 23), which instructional strategy best reflects this principle: 'Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense'?",
        "question_hi": "शिक्षण अभ्यास (कम लागत वाली शिक्षण सामग्री (TLM) - परिदृश्य 23) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं'?",
        "options": {
          "A": "Implementing student-centric active engagement aligned with: Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense",
          "B": "Enforcing rote repetition without conceptual understanding",
          "C": "Restricting classroom dialogue strictly to textbook reading",
          "D": "Administering punitive exams without constructive feedback"
        },
        "options_hi": {
          "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं",
          "B": "बिना समझे रटना",
          "C": "केवल किताब पढ़ना",
          "D": "बिना फीडबैक के दंडनीय परीक्षा"
        },
        "correctAnswer": "A",
        "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 23 exemplifies Low-Cost Teaching-Learning Material (TLM): Locally sourced, improvised pedagogical models that make abstract science and computing concepts tangible without high expense.",
        "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: स्थानीय रूप से उपलब्ध वस्तुओं से बने मॉडल जो अमूर्त अवधारणाओं को मूर्त बनाते हैं।"
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
        "topic": "General Knowledge & Bihar",
        "topic_hi": "सामान्य ज्ञान एवं बिहार",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which famous district of Bihar is geographically and historically recognized for: 'Contains the Someshwar Fort and Valmiki Tiger Reserve in the foothills of Shivalik Himalayas' (Context 3)?",
        "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Contains the Someshwar Fort and Valmiki Tiger Reserve in the foothills of Shivalik Himalayas' (संदर्भ 3)?",
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
        "id": 2,
        "questionNumber": 2,
        "section": "Other Skills",
        "topic": "General Knowledge & Bihar",
        "topic_hi": "सामान्य ज्ञान एवं बिहार",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which famous district of Bihar is geographically and historically recognized for: 'Contains the Someshwar Fort and Valmiki Tiger Reserve in the foothills of Shivalik Himalayas' (Context 4)?",
        "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Contains the Someshwar Fort and Valmiki Tiger Reserve in the foothills of Shivalik Himalayas' (संदर्भ 4)?",
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
        "id": 3,
        "questionNumber": 3,
        "section": "Other Skills",
        "topic": "General Knowledge & Bihar",
        "topic_hi": "सामान्य ज्ञान एवं बिहार",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which famous district of Bihar is geographically and historically recognized for: 'Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas' (Context 1)?",
        "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas' (संदर्भ 1)?",
        "options": {
          "A": "Banka",
          "B": "Buxar",
          "C": "Samastipur",
          "D": "Jehanabad"
        },
        "options_hi": {
          "A": "बांका",
          "B": "बक्सर",
          "C": "समस्तीपुर",
          "D": "जहानाबाद"
        },
        "correctAnswer": "A",
        "explanation": "Banka is renowned across Bihar for: Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas.",
        "explanation_hi": "बांका का ऐतिहासिक व भौगोलिक महत्व: Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas।"
      },
      {
        "id": 4,
        "questionNumber": 4,
        "section": "Other Skills",
        "topic": "General Knowledge & Bihar",
        "topic_hi": "सामान्य ज्ञान एवं बिहार",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which famous district of Bihar is geographically and historically recognized for: 'Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas' (Context 2)?",
        "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas' (संदर्भ 2)?",
        "options": {
          "A": "Banka",
          "B": "Buxar",
          "C": "Samastipur",
          "D": "Jehanabad"
        },
        "options_hi": {
          "A": "बांका",
          "B": "बक्सर",
          "C": "समस्तीपुर",
          "D": "जहानाबाद"
        },
        "correctAnswer": "A",
        "explanation": "Banka is renowned across Bihar for: Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas.",
        "explanation_hi": "बांका का ऐतिहासिक व भौगोलिक महत्व: Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas।"
      },
      {
        "id": 5,
        "questionNumber": 5,
        "section": "Other Skills",
        "topic": "General Knowledge & Bihar",
        "topic_hi": "सामान्य ज्ञान एवं बिहार",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which famous district of Bihar is geographically and historically recognized for: 'Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas' (Context 3)?",
        "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas' (संदर्भ 3)?",
        "options": {
          "A": "Banka",
          "B": "Buxar",
          "C": "Samastipur",
          "D": "Jehanabad"
        },
        "options_hi": {
          "A": "बांका",
          "B": "बक्सर",
          "C": "समस्तीपुर",
          "D": "जहानाबाद"
        },
        "correctAnswer": "A",
        "explanation": "Banka is renowned across Bihar for: Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas.",
        "explanation_hi": "बांका का ऐतिहासिक व भौगोलिक महत्व: Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas।"
      },
      {
        "id": 6,
        "questionNumber": 6,
        "section": "Other Skills",
        "topic": "General Knowledge & Bihar",
        "topic_hi": "सामान्य ज्ञान एवं बिहार",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which famous district of Bihar is geographically and historically recognized for: 'Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas' (Context 4)?",
        "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas' (संदर्भ 4)?",
        "options": {
          "A": "Banka",
          "B": "Buxar",
          "C": "Samastipur",
          "D": "Jehanabad"
        },
        "options_hi": {
          "A": "बांका",
          "B": "बक्सर",
          "C": "समस्तीपुर",
          "D": "जहानाबाद"
        },
        "correctAnswer": "A",
        "explanation": "Banka is renowned across Bihar for: Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas.",
        "explanation_hi": "बांका का ऐतिहासिक व भौगोलिक महत्व: Home to Mandar Hill (Mandar Parvat), historically associated with the legendary Samudra Manthan in Hindu puranas।"
      },
      {
        "id": 7,
        "questionNumber": 7,
        "section": "Other Skills",
        "topic": "General Knowledge & Bihar",
        "topic_hi": "सामान्य ज्ञान एवं बिहार",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which famous district of Bihar is geographically and historically recognized for: 'Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl' (Context 1)?",
        "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl' (संदर्भ 1)?",
        "options": {
          "A": "Katihar",
          "B": "Buxar",
          "C": "Samastipur",
          "D": "Jehanabad"
        },
        "options_hi": {
          "A": "कटिहार",
          "B": "बक्सर",
          "C": "समस्तीपुर",
          "D": "जहानाबाद"
        },
        "correctAnswer": "A",
        "explanation": "Katihar is renowned across Bihar for: Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl.",
        "explanation_hi": "कटिहार का ऐतिहासिक व भौगोलिक महत्व: Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl।"
      },
      {
        "id": 8,
        "questionNumber": 8,
        "section": "Other Skills",
        "topic": "General Knowledge & Bihar",
        "topic_hi": "सामान्य ज्ञान एवं बिहार",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which famous district of Bihar is geographically and historically recognized for: 'Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl' (Context 2)?",
        "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl' (संदर्भ 2)?",
        "options": {
          "A": "Katihar",
          "B": "Buxar",
          "C": "Samastipur",
          "D": "Jehanabad"
        },
        "options_hi": {
          "A": "कटिहार",
          "B": "बक्सर",
          "C": "समस्तीपुर",
          "D": "जहानाबाद"
        },
        "correctAnswer": "A",
        "explanation": "Katihar is renowned across Bihar for: Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl.",
        "explanation_hi": "कटिहार का ऐतिहासिक व भौगोलिक महत्व: Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl।"
      },
      {
        "id": 9,
        "questionNumber": 9,
        "section": "Other Skills",
        "topic": "General Knowledge & Bihar",
        "topic_hi": "सामान्य ज्ञान एवं बिहार",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which famous district of Bihar is geographically and historically recognized for: 'Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl' (Context 3)?",
        "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl' (संदर्भ 3)?",
        "options": {
          "A": "Katihar",
          "B": "Buxar",
          "C": "Samastipur",
          "D": "Jehanabad"
        },
        "options_hi": {
          "A": "कटिहार",
          "B": "बक्सर",
          "C": "समस्तीपुर",
          "D": "जहानाबाद"
        },
        "correctAnswer": "A",
        "explanation": "Katihar is renowned across Bihar for: Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl.",
        "explanation_hi": "कटिहार का ऐतिहासिक व भौगोलिक महत्व: Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl।"
      },
      {
        "id": 10,
        "questionNumber": 10,
        "section": "Other Skills",
        "topic": "General Knowledge & Bihar",
        "topic_hi": "सामान्य ज्ञान एवं बिहार",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which famous district of Bihar is geographically and historically recognized for: 'Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl' (Context 4)?",
        "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl' (संदर्भ 4)?",
        "options": {
          "A": "Katihar",
          "B": "Buxar",
          "C": "Samastipur",
          "D": "Jehanabad"
        },
        "options_hi": {
          "A": "कटिहार",
          "B": "बक्सर",
          "C": "समस्तीपुर",
          "D": "जहानाबाद"
        },
        "correctAnswer": "A",
        "explanation": "Katihar is renowned across Bihar for: Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl.",
        "explanation_hi": "कटिहार का ऐतिहासिक व भौगोलिक महत्व: Famous for Goga Bil Lake, a protected wetland community reserve attracting migratory waterfowl।"
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
          "A": "Article 21A (inserted by 86th Constitutional Amendment Act, 2002)",
          "B": "Article 19",
          "C": "Article 14",
          "D": "Article 32"
        },
        "options_hi": {
          "A": "अनुच्छेद 21A (86वां संविधान संशोधन 2002)",
          "B": "अनुच्छेद 19",
          "C": "अनुच्छेद 14",
          "D": "अनुच्छेद 32"
        },
        "correctAnswer": "A",
        "explanation": "Article 21A guarantees free and compulsory education to all children aged 6-14 years as a fundamental right.",
        "explanation_hi": "86वें संविधान संशोधन 2002 द्वारा अनुच्छेद 21A जोड़कर शिक्षा को मौलिक अधिकार बनाया गया।"
      },
      {
        "id": 12,
        "questionNumber": 12,
        "section": "Other Skills",
        "topic": "General Knowledge & Bihar",
        "topic_hi": "सामान्य ज्ञान एवं बिहार",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which fundamental article of the Constitution of India provides for the Right to Education (RTE) as a Fundamental Right (Clause 2)?",
        "question_hi": "भारत के संविधान का कौन सा अनुच्छेद 6 से 14 वर्ष के बच्चों के लिए 'शिक्षा के अधिकार' को मौलिक अधिकार बनाता है (क्लॉज 2)?",
        "options": {
          "A": "Article 21A (inserted by 86th Constitutional Amendment Act, 2002)",
          "B": "Article 19",
          "C": "Article 14",
          "D": "Article 32"
        },
        "options_hi": {
          "A": "अनुच्छेद 21A (86वां संविधान संशोधन 2002)",
          "B": "अनुच्छेद 19",
          "C": "अनुच्छेद 14",
          "D": "अनुच्छेद 32"
        },
        "correctAnswer": "A",
        "explanation": "Article 21A guarantees free and compulsory education to all children aged 6-14 years as a fundamental right.",
        "explanation_hi": "86वें संविधान संशोधन 2002 द्वारा अनुच्छेद 21A जोड़कर शिक्षा को मौलिक अधिकार बनाया गया।"
      },
      {
        "id": 13,
        "questionNumber": 13,
        "section": "Other Skills",
        "topic": "General Knowledge & Bihar",
        "topic_hi": "सामान्य ज्ञान एवं बिहार",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which fundamental article of the Constitution of India provides for the Right to Education (RTE) as a Fundamental Right (Clause 3)?",
        "question_hi": "भारत के संविधान का कौन सा अनुच्छेद 6 से 14 वर्ष के बच्चों के लिए 'शिक्षा के अधिकार' को मौलिक अधिकार बनाता है (क्लॉज 3)?",
        "options": {
          "A": "Article 21A (inserted by 86th Constitutional Amendment Act, 2002)",
          "B": "Article 19",
          "C": "Article 14",
          "D": "Article 32"
        },
        "options_hi": {
          "A": "अनुच्छेद 21A (86वां संविधान संशोधन 2002)",
          "B": "अनुच्छेद 19",
          "C": "अनुच्छेद 14",
          "D": "अनुच्छेद 32"
        },
        "correctAnswer": "A",
        "explanation": "Article 21A guarantees free and compulsory education to all children aged 6-14 years as a fundamental right.",
        "explanation_hi": "86वें संविधान संशोधन 2002 द्वारा अनुच्छेद 21A जोड़कर शिक्षा को मौलिक अधिकार बनाया गया।"
      },
      {
        "id": 14,
        "questionNumber": 14,
        "section": "Other Skills",
        "topic": "General Knowledge & Bihar",
        "topic_hi": "सामान्य ज्ञान एवं बिहार",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which fundamental article of the Constitution of India provides for the Right to Education (RTE) as a Fundamental Right (Clause 4)?",
        "question_hi": "भारत के संविधान का कौन सा अनुच्छेद 6 से 14 वर्ष के बच्चों के लिए 'शिक्षा के अधिकार' को मौलिक अधिकार बनाता है (क्लॉज 4)?",
        "options": {
          "A": "Article 21A (inserted by 86th Constitutional Amendment Act, 2002)",
          "B": "Article 19",
          "C": "Article 14",
          "D": "Article 32"
        },
        "options_hi": {
          "A": "अनुच्छेद 21A (86वां संविधान संशोधन 2002)",
          "B": "अनुच्छेद 19",
          "C": "अनुच्छेद 14",
          "D": "अनुच्छेद 32"
        },
        "correctAnswer": "A",
        "explanation": "Article 21A guarantees free and compulsory education to all children aged 6-14 years as a fundamental right.",
        "explanation_hi": "86वें संविधान संशोधन 2002 द्वारा अनुच्छेद 21A जोड़कर शिक्षा को मौलिक अधिकार बनाया गया।"
      },
      {
        "id": 15,
        "questionNumber": 15,
        "section": "Other Skills",
        "topic": "General Knowledge & Bihar",
        "topic_hi": "सामान्य ज्ञान एवं बिहार",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Which fundamental article of the Constitution of India provides for the Right to Education (RTE) as a Fundamental Right (Clause 5)?",
        "question_hi": "भारत के संविधान का कौन सा अनुच्छेद 6 से 14 वर्ष के बच्चों के लिए 'शिक्षा के अधिकार' को मौलिक अधिकार बनाता है (क्लॉज 5)?",
        "options": {
          "A": "Article 21A (inserted by 86th Constitutional Amendment Act, 2002)",
          "B": "Article 19",
          "C": "Article 14",
          "D": "Article 32"
        },
        "options_hi": {
          "A": "अनुच्छेद 21A (86वां संविधान संशोधन 2002)",
          "B": "अनुच्छेद 19",
          "C": "अनुच्छेद 14",
          "D": "अनुच्छेद 32"
        },
        "correctAnswer": "A",
        "explanation": "Article 21A guarantees free and compulsory education to all children aged 6-14 years as a fundamental right.",
        "explanation_hi": "86वें संविधान संशोधन 2002 द्वारा अनुच्छेद 21A जोड़कर शिक्षा को मौलिक अधिकार बनाया गया।"
      },
      {
        "id": 16,
        "questionNumber": 16,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Food Web Complexity - Case 2), which statement accurately reflects this principle: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
        "question_hi": "पर्यावरण विज्ञान (खाद्य जाल जटिलता - केस 2) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
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
        "id": 17,
        "questionNumber": 17,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Food Web Complexity - Case 3), which statement accurately reflects this principle: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
        "question_hi": "पर्यावरण विज्ञान (खाद्य जाल जटिलता - केस 3) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
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
        "id": 18,
        "questionNumber": 18,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Food Web Complexity - Case 4), which statement accurately reflects this principle: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
        "question_hi": "पर्यावरण विज्ञान (खाद्य जाल जटिलता - केस 4) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
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
        "id": 19,
        "questionNumber": 19,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Food Web Complexity - Case 5), which statement accurately reflects this principle: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
        "question_hi": "पर्यावरण विज्ञान (खाद्य जाल जटिलता - केस 5) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
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
        "id": 20,
        "questionNumber": 20,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Food Web Complexity - Case 6), which statement accurately reflects this principle: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
        "question_hi": "पर्यावरण विज्ञान (खाद्य जाल जटिलता - केस 6) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
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
        "id": 21,
        "questionNumber": 21,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Food Web Complexity - Case 7), which statement accurately reflects this principle: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
        "question_hi": "पर्यावरण विज्ञान (खाद्य जाल जटिलता - केस 7) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Interconnected interlocking food chains provide ecosystem stability, resilience against localized species extinction'?",
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
        "id": 22,
        "questionNumber": 22,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Ecological Succession - Case 1), which statement accurately reflects this principle: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
        "question_hi": "पर्यावरण विज्ञान (पारिस्थितिक अनुक्रमण - केस 1) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
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
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Ecological Succession - Case 2), which statement accurately reflects this principle: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
        "question_hi": "पर्यावरण विज्ञान (पारिस्थितिक अनुक्रमण - केस 2) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
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
        "id": 24,
        "questionNumber": 24,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Ecological Succession - Case 3), which statement accurately reflects this principle: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
        "question_hi": "पर्यावरण विज्ञान (पारिस्थितिक अनुक्रमण - केस 3) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
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
        "id": 25,
        "questionNumber": 25,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Ecological Succession - Case 4), which statement accurately reflects this principle: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
        "question_hi": "पर्यावरण विज्ञान (पारिस्थितिक अनुक्रमण - केस 4) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
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
        "id": 26,
        "questionNumber": 26,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Ecological Succession - Case 5), which statement accurately reflects this principle: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
        "question_hi": "पर्यावरण विज्ञान (पारिस्थितिक अनुक्रमण - केस 5) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
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
        "id": 27,
        "questionNumber": 27,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Ecological Succession - Case 6), which statement accurately reflects this principle: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
        "question_hi": "पर्यावरण विज्ञान (पारिस्थितिक अनुक्रमण - केस 6) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
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
        "id": 28,
        "questionNumber": 28,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Ecological Succession - Case 7), which statement accurately reflects this principle: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
        "question_hi": "पर्यावरण विज्ञान (पारिस्थितिक अनुक्रमण - केस 7) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Predictable orderly chronological process of community change from pioneer species (lichens/mosses) to stable climax forest'?",
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
        "id": 29,
        "questionNumber": 29,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Nitrogen Cycle Dynamics - Case 1), which statement accurately reflects this principle: 'Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium'?",
        "question_hi": "पर्यावरण विज्ञान (नाइट्रोजन चक्र - केस 1) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium'?",
        "options": {
          "A": "Accurately validated by ecological principle: Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium",
          "B": "Ecosystems function without solar energy inputs",
          "C": "Pollution increases biodiversity stability",
          "D": "Energy cycles indefinitely within food chains"
        },
        "options_hi": {
          "A": "पारिस्थितिकी सिद्धांत के अनुसार सही: Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium",
          "B": "सौर ऊर्जा के बिना तंत्र चलता है",
          "C": "प्रदूषण से विविधता बढ़ती है",
          "D": "ऊर्जा कभी नष्ट नहीं होती"
        },
        "correctAnswer": "A",
        "explanation": "Environmental ecology principles: Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium.",
        "explanation_hi": "पर्यावरण विज्ञान का सिद्धांत: Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium।"
      },
      {
        "id": 30,
        "questionNumber": 30,
        "section": "Other Skills",
        "topic": "Environmental Science & Ecology",
        "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In environmental ecological science (Nitrogen Cycle Dynamics - Case 2), which statement accurately reflects this principle: 'Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium'?",
        "question_hi": "पर्यावरण विज्ञान (नाइट्रोजन चक्र - केस 2) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium'?",
        "options": {
          "A": "Accurately validated by ecological principle: Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium",
          "B": "Ecosystems function without solar energy inputs",
          "C": "Pollution increases biodiversity stability",
          "D": "Energy cycles indefinitely within food chains"
        },
        "options_hi": {
          "A": "पारिस्थितिकी सिद्धांत के अनुसार सही: Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium",
          "B": "सौर ऊर्जा के बिना तंत्र चलता है",
          "C": "प्रदूषण से विविधता बढ़ती है",
          "D": "ऊर्जा कभी नष्ट नहीं होती"
        },
        "correctAnswer": "A",
        "explanation": "Environmental ecology principles: Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium.",
        "explanation_hi": "पर्यावरण विज्ञान का सिद्धांत: Atmospheric N2 is biologically fixed by symbiotic bacteria like Rhizobium in legume root nodules into plant-usable ammonium।"
      },
      {
        "id": 31,
        "questionNumber": 31,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the Simple Interest on a principal of Rs. 2,000 at 5% annual interest for 2 years (Problem 51)?",
        "question_hi": "2,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 51)?",
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
        "id": 32,
        "questionNumber": 32,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the Simple Interest on a principal of Rs. 3,000 at 5% annual interest for 2 years (Problem 52)?",
        "question_hi": "3,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 52)?",
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
        "id": 33,
        "questionNumber": 33,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the Simple Interest on a principal of Rs. 4,000 at 5% annual interest for 2 years (Problem 53)?",
        "question_hi": "4,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 53)?",
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
        "id": 34,
        "questionNumber": 34,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the Simple Interest on a principal of Rs. 5,000 at 5% annual interest for 2 years (Problem 54)?",
        "question_hi": "5,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 54)?",
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
        "id": 35,
        "questionNumber": 35,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the Simple Interest on a principal of Rs. 6,000 at 5% annual interest for 2 years (Problem 55)?",
        "question_hi": "6,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 55)?",
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
        "id": 36,
        "questionNumber": 36,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the Simple Interest on a principal of Rs. 7,000 at 5% annual interest for 2 years (Problem 56)?",
        "question_hi": "7,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 56)?",
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
        "id": 37,
        "questionNumber": 37,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the Simple Interest on a principal of Rs. 8,000 at 5% annual interest for 2 years (Problem 57)?",
        "question_hi": "8,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 57)?",
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
        "id": 38,
        "questionNumber": 38,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the Simple Interest on a principal of Rs. 9,000 at 5% annual interest for 2 years (Problem 58)?",
        "question_hi": "9,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 58)?",
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
        "id": 39,
        "questionNumber": 39,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the Simple Interest on a principal of Rs. 10,000 at 5% annual interest for 2 years (Problem 59)?",
        "question_hi": "10,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 59)?",
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
        "id": 40,
        "questionNumber": 40,
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता (Math)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the Simple Interest on a principal of Rs. 1,000 at 5% annual interest for 2 years (Problem 60)?",
        "question_hi": "1,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 60)?",
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
        "id": 41,
        "questionNumber": 41,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the next number in the arithmetic progression: 153, 156, 159, ? (Series 51)",
        "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 153, 156, 159, ? (श्रृंखला 51)",
        "options": {
          "A": "162",
          "B": "163",
          "C": "160",
          "D": "165"
        },
        "options_hi": {
          "A": "162",
          "B": "163",
          "C": "160",
          "D": "165"
        },
        "correctAnswer": "A",
        "explanation": "The terms increase by a common difference of +3: 159 + 3 = 162.",
        "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 159 + 3 = 162।"
      },
      {
        "id": 42,
        "questionNumber": 42,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the next number in the arithmetic progression: 156, 159, 162, ? (Series 52)",
        "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 156, 159, 162, ? (श्रृंखला 52)",
        "options": {
          "A": "165",
          "B": "166",
          "C": "163",
          "D": "168"
        },
        "options_hi": {
          "A": "165",
          "B": "166",
          "C": "163",
          "D": "168"
        },
        "correctAnswer": "A",
        "explanation": "The terms increase by a common difference of +3: 162 + 3 = 165.",
        "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 162 + 3 = 165।"
      },
      {
        "id": 43,
        "questionNumber": 43,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the next number in the arithmetic progression: 159, 162, 165, ? (Series 53)",
        "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 159, 162, 165, ? (श्रृंखला 53)",
        "options": {
          "A": "168",
          "B": "169",
          "C": "166",
          "D": "171"
        },
        "options_hi": {
          "A": "168",
          "B": "169",
          "C": "166",
          "D": "171"
        },
        "correctAnswer": "A",
        "explanation": "The terms increase by a common difference of +3: 165 + 3 = 168.",
        "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 165 + 3 = 168।"
      },
      {
        "id": 44,
        "questionNumber": 44,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the next number in the arithmetic progression: 162, 165, 168, ? (Series 54)",
        "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 162, 165, 168, ? (श्रृंखला 54)",
        "options": {
          "A": "171",
          "B": "172",
          "C": "169",
          "D": "174"
        },
        "options_hi": {
          "A": "171",
          "B": "172",
          "C": "169",
          "D": "174"
        },
        "correctAnswer": "A",
        "explanation": "The terms increase by a common difference of +3: 168 + 3 = 171.",
        "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 168 + 3 = 171।"
      },
      {
        "id": 45,
        "questionNumber": 45,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the next number in the arithmetic progression: 165, 168, 171, ? (Series 55)",
        "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 165, 168, 171, ? (श्रृंखला 55)",
        "options": {
          "A": "174",
          "B": "175",
          "C": "172",
          "D": "177"
        },
        "options_hi": {
          "A": "174",
          "B": "175",
          "C": "172",
          "D": "177"
        },
        "correctAnswer": "A",
        "explanation": "The terms increase by a common difference of +3: 171 + 3 = 174.",
        "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 171 + 3 = 174।"
      },
      {
        "id": 46,
        "questionNumber": 46,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the next number in the arithmetic progression: 168, 171, 174, ? (Series 56)",
        "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 168, 171, 174, ? (श्रृंखला 56)",
        "options": {
          "A": "177",
          "B": "178",
          "C": "175",
          "D": "180"
        },
        "options_hi": {
          "A": "177",
          "B": "178",
          "C": "175",
          "D": "180"
        },
        "correctAnswer": "A",
        "explanation": "The terms increase by a common difference of +3: 174 + 3 = 177.",
        "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 174 + 3 = 177।"
      },
      {
        "id": 47,
        "questionNumber": 47,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the next number in the arithmetic progression: 171, 174, 177, ? (Series 57)",
        "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 171, 174, 177, ? (श्रृंखला 57)",
        "options": {
          "A": "180",
          "B": "181",
          "C": "178",
          "D": "183"
        },
        "options_hi": {
          "A": "180",
          "B": "181",
          "C": "178",
          "D": "183"
        },
        "correctAnswer": "A",
        "explanation": "The terms increase by a common difference of +3: 177 + 3 = 180.",
        "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 177 + 3 = 180।"
      },
      {
        "id": 48,
        "questionNumber": 48,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the next number in the arithmetic progression: 174, 177, 180, ? (Series 58)",
        "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 174, 177, 180, ? (श्रृंखला 58)",
        "options": {
          "A": "183",
          "B": "184",
          "C": "181",
          "D": "186"
        },
        "options_hi": {
          "A": "183",
          "B": "184",
          "C": "181",
          "D": "186"
        },
        "correctAnswer": "A",
        "explanation": "The terms increase by a common difference of +3: 180 + 3 = 183.",
        "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 180 + 3 = 183।"
      },
      {
        "id": 49,
        "questionNumber": 49,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the next number in the arithmetic progression: 177, 180, 183, ? (Series 59)",
        "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 177, 180, 183, ? (श्रृंखला 59)",
        "options": {
          "A": "186",
          "B": "187",
          "C": "184",
          "D": "189"
        },
        "options_hi": {
          "A": "186",
          "B": "187",
          "C": "184",
          "D": "189"
        },
        "correctAnswer": "A",
        "explanation": "The terms increase by a common difference of +3: 183 + 3 = 186.",
        "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 183 + 3 = 186।"
      },
      {
        "id": 50,
        "questionNumber": 50,
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the next number in the arithmetic progression: 180, 183, 186, ? (Series 60)",
        "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 180, 183, 186, ? (श्रृंखला 60)",
        "options": {
          "A": "189",
          "B": "190",
          "C": "187",
          "D": "192"
        },
        "options_hi": {
          "A": "189",
          "B": "190",
          "C": "187",
          "D": "192"
        },
        "correctAnswer": "A",
        "explanation": "The terms increase by a common difference of +3: 186 + 3 = 189.",
        "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 186 + 3 = 189।"
      }
    ]
  }
};
