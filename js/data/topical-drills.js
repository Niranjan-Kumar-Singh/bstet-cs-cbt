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
        "topic": "Operating Systems",
        "topic_hi": "ऑपरेटिंग सिस्टम",
        "marks": 1,
        "negativeMarks": 0,
        "question": "How does the hardware 'Test-and-Set' atomic instruction ensure mutual exclusion in multi-threaded programming?",
        "question_hi": "हार्डवेयर 'टेस्ट-एंड-सेट' (Test-and-Set) एटॉमिक निर्देश मल्टी-थ्रेडेड प्रोग्रामिंग में म्युचुअल एक्सक्लूजन कैसे सुनिश्चित करता है?",
        "options": {
          "A": "It reads the current value of a memory flag and sets it to 1 as a single uninterruptible atomic memory cycle",
          "B": "It checks whether a thread has exceeded its stack size",
          "C": "It pauses the system timer interrupt",
          "D": "It verifies the CRC of shared memory"
        },
        "options_hi": {
          "A": "यह मेमोरी फ्लैग के वर्तमान मान को पढ़ता है और एक एकल निर्बाध परमाणु मेमोरी चक्र के रूप में इसे 1 पर सेट करता है",
          "B": "यह जांचता है कि क्या थ्रेड अपने स्टैक आकार से अधिक हो गया है",
          "C": "यह सिस्टम टाइमर इंटरप्ट को रोकता है",
          "D": "यह साझा मेमोरी के CRC को सत्यापित करता है"
        },
        "correctAnswer": "A",
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
          "A": "It provides a more uniform and fair waiting time across all disk cylinders",
          "B": "It eliminates disk head seek time completely",
          "C": "It services requests only during the return stroke",
          "D": "It requires less RAM buffer memory"
        },
        "options_hi": {
          "A": "यह सभी डिस्क सिलेंडरों में अधिक समान और निष्पक्ष प्रतीक्षा समय प्रदान करता है",
          "B": "यह डिस्क हेड सीक टाइम को पूरी तरह से समाप्त करता है",
          "C": "यह केवल वापसी स्ट्रोक के दौरान अनुरोधों को पूरा करता है",
          "D": "इसे कम रैम बफर मेमोरी की आवश्यकता होती है"
        },
        "correctAnswer": "A",
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
          "A": "Strictly non-decreasing sorted order of keys",
          "B": "Root node first, followed by left and right subtrees",
          "C": "Descending reverse sorted order",
          "D": "Breadth-first level order"
        },
        "options_hi": {
          "A": "कुंजियों के पूर्णतः गैर-घटते (आरोही) सॉर्टेड क्रम में",
          "B": "पहले रूट नोड, उसके बाद बाएं और दाएं सबट्री",
          "C": "अवरोही उल्टे सॉर्टेड क्रम में",
          "D": "ब्रेड्थ-फर्स्ट स्तर क्रम में"
        },
        "correctAnswer": "A",
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
        "topic_hi": "एल्गोरिदम",
        "marks": 1,
        "negativeMarks": 0,
        "question": "What is the worst-case time complexity of Dijkstra's single-source shortest path algorithm when implemented with an Adjacency List and a Binary Min-Heap?",
        "question_hi": "एडजेसेंसी लिस्ट और बाइनरी मिन-हीप के साथ लागू किए जाने पर डिजक्स्ट्रा के सबसे छोटे पथ एल्गोरिदम की सबसे खराब स्थिति समय जटिलता क्या है?",
        "options": {
          "A": "O((V + E) log V)",
          "B": "O(V^2)",
          "C": "O(E * V)",
          "D": "O(V^3)"
        },
        "options_hi": {
          "A": "O((V + E) log V)",
          "B": "O(V^2)",
          "C": "O(E * V)",
          "D": "O(V^3)"
        },
        "correctAnswer": "A",
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
          "A": "Split Horizon with Poison Reverse",
          "B": "Sliding Window Protocol",
          "C": "Three-way handshake",
          "D": "Address Resolution Protocol"
        },
        "options_hi": {
          "A": "पॉइज़न रिवर्स के साथ स्प्लिट होराइजन (Split Horizon with Poison Reverse)",
          "B": "स्लाइडिंग विंडो प्रोटोकॉल",
          "C": "थ्री-वे हैंडशेक",
          "D": "एड्रेस रिज़ॉल्यूशन प्रोटोकॉल"
        },
        "correctAnswer": "A",
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
          "A": "1 / (1 + 2a), where a = Propagation Time / Transmission Time",
          "B": "2a / (1 + a)",
          "C": "1 / (2a)",
          "D": "(1 + a) / 2"
        },
        "options_hi": {
          "A": "1 / (1 + 2a), जहां a = प्रोपेगेशन समय / ट्रांसमिशन समय",
          "B": "2a / (1 + a)",
          "C": "1 / (2a)",
          "D": "(1 + a) / 2"
        },
        "correctAnswer": "A",
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
          "A": "SSH: Port 22, SMTP: Port 25",
          "B": "SSH: Port 23, SMTP: Port 80",
          "C": "SSH: Port 443, SMTP: Port 110",
          "D": "SSH: Port 21, SMTP: Port 53"
        },
        "options_hi": {
          "A": "SSH: पोर्ट 22, SMTP: पोर्ट 25",
          "B": "SSH: पोर्ट 23, SMTP: पोर्ट 80",
          "C": "SSH: पोर्ट 443, SMTP: पोर्ट 110",
          "D": "SSH: पोर्ट 21, SMTP: पोर्ट 53"
        },
        "correctAnswer": "A",
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
          "A": "A minimal superkey with no redundant attributes (any proper subset is not a superkey)",
          "B": "Any column that contains numeric integer data",
          "C": "A key containing foreign key references to other tables",
          "D": "An index created exclusively on text columns"
        },
        "options_hi": {
          "A": "बिना किसी निरर्थक विशेषता के एक न्यूनतम सुपरकी (जिसका कोई भी उचित उपसमुच्चय सुपरकी नहीं है)",
          "B": "कोई भी कॉलम जिसमें संख्यात्मक पूर्णांक डेटा होता है",
          "C": "अन्य तालिकाओं के लिए विदेशी कुंजी संदर्भ रखने वाली कुंजी",
          "D": "विशेष रूप से टेक्स्ट कॉलम पर बनाया गया एक इंडेक्स"
        },
        "correctAnswer": "A",
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
          "A": "By constructing a precedence (serialization) graph and checking that it contains no directed cycles",
          "B": "By verifying that all transactions commit within 1 second",
          "C": "By ensuring all read locks are shared",
          "D": "By running all transactions on a single CPU core"
        },
        "options_hi": {
          "A": "एक प्राथमिकता (सीरियलाइजेशन) ग्राफ का निर्माण करके और यह जांचकर कि इसमें कोई निर्देशित चक्र (directed cycles) नहीं हैं",
          "B": "यह सत्यापित करके कि सभी लेनदेन 1 सेकंड के भीतर कमिट होते हैं",
          "C": "यह सुनिश्चित करके कि सभी रीड लॉक साझा किए गए हैं",
          "D": "एकल CPU कोर पर सभी लेनदेन चलाकर"
        },
        "correctAnswer": "A",
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
          "A": "Lists are mutable and dynamically sized; Tuples are immutable and fixed in size",
          "B": "Lists can hold only integers; Tuples can hold heterogeneous data",
          "C": "Tuples support in-place item assignment; Lists do not",
          "D": "Lists are passed by value; Tuples are passed by reference"
        },
        "options_hi": {
          "A": "लिस्ट परिवर्तनशील (Mutable) और गतिशील आकार की होती हैं; टपल अपरिवर्तनीय (Immutable) और निश्चित आकार के होते हैं",
          "B": "लिस्ट केवल पूर्णांक रख सकती हैं; टपल विषम डेटा रख सकते हैं",
          "C": "टपल इन-प्लेस आइटम असाइनमेंट का समर्थन करते हैं; लिस्ट नहीं करती",
          "D": "लिस्ट मान द्वारा पास की जाती हैं; टपल संदर्भ द्वारा पास किए जाते हैं"
        },
        "correctAnswer": "A",
        "explanation": "In Python, lists are mutable sequences allowing in-place insertion, deletion, and reassignment, with over-allocation overhead. Tuples are immutable fixed sequences that consume less memory and can be used as dictionary keys.",
        "explanation_hi": "पायथन में लिस्ट म्यूटेबल (परिवर्तनीय) होती हैं जिनमें तत्व जोड़े या बदले जा सकते हैं। टपल इम्यूटेबल (अपरिवर्तनीय) होते हैं, कम मेमोरी लेते हैं और डिक्शनरी की के रूप में प्रयुक्त हो सकते हैं।"
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
          "A": "Providing practice problems where students apply the newly generalized rule or formula to novel situations, solidifying retention",
          "B": "Taking attendance at the end of the period",
          "C": "Erasing the blackboard",
          "D": "Dismissing the class"
        },
        "options_hi": {
          "A": "अभ्यास समस्याएं प्रदान करना जहाँ छात्र नई सामान्यीकृत नियम या सूत्र को नई स्थितियों में लागू करते हैं, जिससे समझ पक्की होती है",
          "B": "कक्षा के अंत में उपस्थिति दर्ज करना",
          "C": "श्यामपट्ट साफ करना",
          "D": "कक्षा समाप्त करना"
        },
        "correctAnswer": "A",
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
          "A": "Positive Verbal, Positive Non-Verbal, Negative Verbal, and Negative Non-Verbal",
          "B": "Cash, Food, Certificate, and Trophy",
          "C": "Shouting, Detention, Suspension, and Expulsion",
          "D": "Reading, Writing, Speaking, and Listening"
        },
        "options_hi": {
          "A": "सकारात्मक शाब्दिक, सकारात्मक अशाब्दिक, नकारात्मक शाब्दिक, और नकारात्मक अशाब्दिक",
          "B": "नकद, भोजन, प्रमाण पत्र, और ट्रॉफी",
          "C": "चिल्लाना, हिरासत, निलंबन, और निष्कासन",
          "D": "पढ़ना, लिखना, बोलना, और सुनना"
        },
        "correctAnswer": "A",
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
          "A": "Helping students organize, integrate, and consolidate the major points of the lesson into a cohesive mental framework",
          "B": "Rushing through the last 5 slides without questions",
          "C": "Assigning surprise punitive detention",
          "D": "Collecting examination fees"
        },
        "options_hi": {
          "A": "छात्रों को पाठ के प्रमुख बिंदुओं को एक सुसंगत मानसिक ढांचे में व्यवस्थित, एकीकृत और समेकित करने में मदद करना",
          "B": "बिना किसी प्रश्न के अंतिम 5 स्लाइडों को जल्दी से समाप्त करना",
          "C": "अचानक दंडात्मक हिरासत सौंपना",
          "D": "परीक्षा शुल्क एकत्र करना"
        },
        "correctAnswer": "A",
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
          "A": "To identify questions that successfully separate high-scoring students from low-scoring students, flagging defective or ambiguous items for revision",
          "B": "To measure how fast students finish writing the exam",
          "C": "To ensure that all students receive identical marks",
          "D": "To translate questions into multiple languages"
        },
        "options_hi": {
          "A": "उन प्रश्नों की पहचान करना जो उच्च अंक प्राप्त करने वाले छात्रों को कम अंक प्राप्त करने वाले छात्रों से सफलतापूर्वक अलग करते हैं, और दोषपूर्ण प्रश्नों को हटाने में मदद करते हैं",
          "B": "यह मापना कि छात्र कितनी तेजी से परीक्षा लिखना समाप्त करते हैं",
          "C": "यह सुनिश्चित करना कि सभी छात्रों को समान अंक मिलें",
          "D": "प्रश्नों का कई भाषाओं में अनुवाद करना"
        },
        "correctAnswer": "A",
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
          "A": "Every single student in the class scored the exact same identical mark",
          "B": "All students failed the examination",
          "C": "The exam was extremely difficult",
          "D": "The teacher did not evaluate any papers"
        },
        "options_hi": {
          "A": "कक्षा के प्रत्येक छात्र ने बिल्कुल समान अंक प्राप्त किए हैं (कोई विचलन नहीं)",
          "B": "सभी छात्र परीक्षा में अनुत्तीर्ण हो गए",
          "C": "परीक्षा अत्यंत कठिन थी",
          "D": "शिक्षक ने किसी भी पेपर का मूल्यांकन नहीं किया"
        },
        "correctAnswer": "A",
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
          "A": "Recall / List / State",
          "B": "Analyze / Differentiate",
          "C": "Evaluate / Judge",
          "D": "Create / Formulate"
        },
        "options_hi": {
          "A": "याद करना / सूची बनाना / बताना (Recall / List / State)",
          "B": "विश्लेषण करना",
          "C": "मूल्यांकन करना",
          "D": "सृजन करना"
        },
        "correctAnswer": "A",
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
          "A": "Execute / Implement / Solve in a new context",
          "B": "Memorize definitions",
          "C": "List dates of events",
          "D": "Evaluate moral dilemmas"
        },
        "options_hi": {
          "A": "निष्पादित करना / लागू करना / नए संदर्भ में हल करना (Implement / Solve)",
          "B": "परिभाषाएं रटना",
          "C": "घटनाओं की तारीखें लिखना",
          "D": "नैतिक दुविधाओं का मूल्यांकन"
        },
        "correctAnswer": "A",
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
          "A": "Critique / Judge / Defend with evidence",
          "B": "Repeat aloud",
          "C": "Draw basic diagrams",
          "D": "Write alphabet letters"
        },
        "options_hi": {
          "A": "समीक्षा करना / आंकना / साक्ष्यों के साथ बचाव करना (Critique / Judge)",
          "B": "जोर से दोहराना",
          "C": "बुनियादी चित्र बनाना",
          "D": "वर्णमाला लिखना"
        },
        "correctAnswer": "A",
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
          "A": "Design / Formulate / Construct a novel solution",
          "B": "Copy verbatim from notes",
          "C": "State textbook formulas",
          "D": "Identify colors"
        },
        "options_hi": {
          "A": "डिजाइन करना / तैयार करना / एक नया समाधान बनाना (Design / Formulate / Construct)",
          "B": "नोट्स से नकल करना",
          "C": "किताब के सूत्र बोलना",
          "D": "रंग पहचानना"
        },
        "correctAnswer": "A",
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
          "A": "Students actively self-monitoring, critically evaluating their own learning processes, and setting personal academic goals through metacognition",
          "B": "Taking external national board exams",
          "C": "Receiving teacher punishments for mistakes",
          "D": "Parents grading student homework at home"
        },
        "options_hi": {
          "A": "छात्रों द्वारा अपनी सीखने की प्रक्रियाओं की सक्रिय स्व-निगरानी करना, मेटाकॉग्निशन द्वारा आत्म-मूल्यांकन करना और व्यक्तिगत लक्ष्य तय करना",
          "B": "बाहरी राष्ट्रीय बोर्ड परीक्षा देना",
          "C": "गलतियों के लिए शिक्षक से दंड पाना",
          "D": "माता-पिता द्वारा घर पर गृहकार्य की जांच करना"
        },
        "correctAnswer": "A",
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
          "A": "A purposeful, systematic collection of student work over time that documents growth, effort, skills, and academic achievements across subjects",
          "B": "A leather folder holding report cards only",
          "C": "A multiple-choice computerized test",
          "D": "A punishment diary kept by the discipline teacher"
        },
        "options_hi": {
          "A": "समय के साथ छात्र के चुनिंदा कार्यों का एक व्यवस्थित संग्रह जो विभिन्न विषयों में उसकी प्रगति, प्रयास, कौशल और उपलब्धियों को प्रदर्शित करता है",
          "B": "केवल रिपोर्ट कार्ड रखने वाला लेदर फोल्डर",
          "C": "एक बहुविकल्पीय कम्प्यूटरीकृत परीक्षण",
          "D": "अनुशासन शिक्षक द्वारा रखी गई दंड डायरी"
        },
        "correctAnswer": "A",
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
          "A": "A Holistic Rubric evaluates overall performance as a single composite score; an Analytic Rubric evaluates each specific criterion independently with separate scores",
          "B": "Holistic rubrics are used in art; analytic rubrics only in mathematics",
          "C": "Holistic rubrics are written in Hindi; analytic in English",
          "D": "Analytic rubrics take less time than holistic rubrics"
        },
        "options_hi": {
          "A": "समग्र रूब्रिक (Holistic) समग्र प्रदर्शन का एक एकल समग्र स्कोर के रूप में मूल्यांकन करता है; विश्लेषणात्मक रूब्रिक (Analytic) प्रत्येक विशिष्ट मानदंड का अलग-अलग अंकों के साथ स्वतंत्र मूल्यांकन करता है",
          "B": "होलिस्टिक रूब्रिक कला में उपयोग होता है; एनालिटिक केवल गणित में",
          "C": "होलिस्टिक हिंदी में लिखा जाता है; एनालिटिक अंग्रेजी में",
          "D": "एनालिटिक रूब्रिक में कम समय लगता है"
        },
        "correctAnswer": "A",
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
          "A": "The superficial appearance to test-takers and laypeople that the test looks relevant, appropriate, and measures what it claims to measure",
          "B": "The facial expressions of candidates during testing",
          "C": "The mathematical correlation with a gold standard test",
          "D": "The ink clarity of the test booklet"
        },
        "options_hi": {
          "A": "परीक्षार्थियों और आम लोगों को सतही तौर पर यह प्रतीत होना कि परीक्षण प्रासंगिक, उपयुक्त है और उसी चीज को मापता है जिसका वह दावा करता है",
          "B": "परीक्षा के दौरान उम्मीदवारों के चेहरे के भाव",
          "C": "स्वर्ण मानक परीक्षण के साथ गणितीय सहसंबंध",
          "D": "परीक्षण पुस्तिका की स्याही स्पष्टता"
        },
        "correctAnswer": "A",
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
          "A": "The degree to which scores on a newly designed test correlate with scores on an established, validated criterion test administered simultaneously",
          "B": "Passing an examination with distinction",
          "C": "Testing multiple subjects on the same afternoon",
          "D": "Verifying the test font size"
        },
        "options_hi": {
          "A": "वह सीमा जिस तक एक नए डिज़ाइन किए गए परीक्षण के अंक एक साथ प्रशासित स्थापित मान्य परीक्षण के अंकों के साथ सहसंबंधित होते हैं",
          "B": "डिस्टिंक्शन के साथ परीक्षा उत्तीर्ण करना",
          "C": "एक ही दोपहर में कई विषयों का परीक्षण",
          "D": "परीक्षण फ़ॉन्ट आकार को सत्यापित करना"
        },
        "correctAnswer": "A",
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
          "A": "The score awarded to a student is completely independent of the personal opinion, subjective bias, mood, or identity of the evaluator",
          "B": "The test contains only subjective essays",
          "C": "The exam is conducted in the dark",
          "D": "The score is based on the student's physical appearance"
        },
        "options_hi": {
          "A": "छात्र को दिए गए अंक मूल्यांकनकर्ता की व्यक्तिगत राय, व्यक्तिपरक पूर्वाग्रह, मनोदशा या पहचान से पूरी तरह स्वतंत्र होते हैं",
          "B": "परीक्षण में केवल व्यक्तिपरक निबंध शामिल हैं",
          "C": "परीक्षा अंधेरे में आयोजित की जाती है",
          "D": "अंक छात्र के शारीरिक रूप-रंग पर आधारित होते हैं"
        },
        "correctAnswer": "A",
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
          "A": "A linear transformation that eliminates negative numbers and decimals: T = 50 + 10 * Z (Mean = 50, SD = 10)",
          "B": "The temperature of the examination hall",
          "C": "The total time spent writing answers",
          "D": "The teacher's personal rating"
        },
        "options_hi": {
          "A": "एक रैखिक परिवर्तन जो ऋणात्मक संख्याओं और दशमलवों को समाप्त करता है: T = 50 + 10 * Z (माध्य = 50, SD = 10)",
          "B": "परीक्षा हॉल का तापमान",
          "C": "उत्तर लिखने में बिताया गया कुल समय",
          "D": "शिक्षक की व्यक्तिगत रेटिंग"
        },
        "correctAnswer": "A",
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
          "A": "The amount of time students are actively, meaningfully engaged in learning activities with high success rates",
          "B": "The total hours the school building remains open",
          "C": "The recess break duration",
          "D": "The time taken by the teacher to call attendance"
        },
        "options_hi": {
          "A": "वह समय जब छात्र उच्च सफलता दर के साथ सीखने की गतिविधियों में सक्रिय और सार्थक रूप से लगे होते हैं",
          "B": "स्कूल की इमारत खुले रहने के कुल घंटे",
          "C": "लंच ब्रेक की अवधि",
          "D": "शिक्षक द्वारा हाजिरी लगाने में लिया गया समय"
        },
        "correctAnswer": "A",
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
          "A": "A state of physical, emotional, and mental exhaustion caused by chronic occupational stress, characterized by emotional exhaustion, depersonalization, and reduced personal accomplishment",
          "B": "A fire hazard inside the physics laboratory",
          "C": "A teacher taking annual sick leave",
          "D": "Retiring at the official age of 60"
        },
        "options_hi": {
          "A": "पुरानी व्यावसायिक तनाव के कारण शारीरिक, भावनात्मक और मानसिक थकावट की स्थिति, जो भावनात्मक थकावट और कम व्यक्तिगत उपलब्धि से चिह्नित होती है",
          "B": "भौतिकी प्रयोगशाला में आग का खतरा",
          "C": "शिक्षक का वार्षिक बीमारी अवकाश लेना",
          "D": "60 वर्ष की आधिकारिक आयु में सेवानिवृत्त होना"
        },
        "correctAnswer": "A",
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
        "topic_hi": "शिक्षण कला",
        "marks": 1,
        "negativeMarks": 0,
        "question": "In the constructivist 5E instructional model (Bybee), what is the primary role of the learner during the 'Explore' phase?",
        "question_hi": "रचनावादी 5E शिक्षण मॉडल (Bybee) में, 'अन्वेषण' (Explore) चरण के दौरान शिक्षार्थी की प्राथमिक भूमिका क्या होती है?",
        "options": {
          "A": "Actively manipulate materials, test predictions, and collaborate without direct teacher instruction",
          "B": "Listen attentively to the teacher's formal definitions and formulas",
          "C": "Take a written summative exam to determine final mastery",
          "D": "Memorize textbook summaries and copy notes from the board"
        },
        "options_hi": {
          "A": "शिक्षक के सीधे व्याख्यान के बिना सामग्रियों के साथ सक्रिय रूप से कार्य करना, परिकल्पनाओं का परीक्षण और सहपाठियों के साथ सहयोग करना",
          "B": "शिक्षक द्वारा दी गई औपचारिक परिभाषाओं और सूत्रों को ध्यान से सुनना",
          "C": "अंतिम योग्यता निर्धारित करने के लिए लिखित योगात्मक परीक्षा देना",
          "D": "पाठ्यपुस्तक के सारांश को याद करना और बोर्ड से नोट्स कॉपी करना"
        },
        "correctAnswer": "A",
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
          "A": "7 categories for Teacher Talk, 2 for Student Talk, 1 for Silence/Confusion",
          "B": "5 categories for Teacher Talk, 4 for Student Talk, 1 for Silence/Confusion",
          "C": "6 categories for Teacher Talk, 3 for Student Talk, 1 for Silence/Confusion",
          "D": "4 categories for Teacher Talk, 4 for Student Talk, 2 for Silence/Confusion"
        },
        "options_hi": {
          "A": "शिक्षक कथन के लिए 7 श्रेणियां, छात्र कथन के लिए 2, मौन/भ्रांति के लिए 1",
          "B": "शिक्षक कथन के लिए 5 श्रेणियां, छात्र कथन के लिए 4, मौन/भ्रांति के लिए 1",
          "C": "शिक्षक कथन के लिए 6 श्रेणियां, छात्र कथन के लिए 3, मौन/भ्रांति के लिए 1",
          "D": "शिक्षक कथन के लिए 4 श्रेणियां, छात्र कथन के लिए 4, मौन/भ्रांति के लिए 2"
        },
        "correctAnswer": "A",
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
          "A": "Gaining attention (reception)",
          "B": "Informing learners of objectives (expectancy)",
          "C": "Stimulating recall of prior learning (retrieval)",
          "D": "Presenting the stimulus (selective perception)"
        },
        "options_hi": {
          "A": "ध्यान आकर्षित करना (Gaining attention)",
          "B": "शिक्षार्थियों को उद्देश्य से अवगत कराना",
          "C": "पूर्व ज्ञान का स्मरण कराना",
          "D": "सामग्री या उद्दीपक प्रस्तुत करना"
        },
        "correctAnswer": "A",
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
          "A": "Formative Assessment",
          "B": "Summative Assessment",
          "C": "Placement Assessment",
          "D": "Norm-Referenced Standardized Testing"
        },
        "options_hi": {
          "A": "रचनात्मक / निर्माणात्मक मूल्यांकन (Formative Assessment)",
          "B": "योगात्मक मूल्यांकन (Summative Assessment)",
          "C": "स्थापन मूल्यांकन (Placement Assessment)",
          "D": "मानक-संदर्भित मानकीकृत परीक्षण"
        },
        "correctAnswer": "A",
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
          "A": "A scoring guide with specific criteria and performance levels used to assess student work objectively",
          "B": "A punishment system for disobedient students in secondary schools",
          "C": "An attendance register maintained exclusively by the headmaster",
          "D": "A standardized national textbook published by NCERT"
        },
        "options_hi": {
          "A": "छात्रों के कार्य का वस्तुनिष्ठ मूल्यांकन करने के लिए विशिष्ट मानदंडों और प्रदर्शन स्तरों वाली एक अंकन मार्गदर्शिका (Scoring Guide)",
          "B": "माध्यमिक विद्यालयों में अवज्ञाकारी छात्रों के लिए दंड प्रणाली",
          "C": "विशेष रूप से प्रधानाध्यापक द्वारा रखी जाने वाली उपस्थिति पंजी",
          "D": "NCERT द्वारा प्रकाशित एक मानकीकृत राष्ट्रीय पाठ्यपुस्तक"
        },
        "correctAnswer": "A",
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
          "A": "36 minutes",
          "B": "45 minutes",
          "C": "20 minutes",
          "D": "60 minutes"
        },
        "options_hi": {
          "A": "36 मिनट",
          "B": "45 मिनट",
          "C": "20 मिनट",
          "D": "60 मिनट"
        },
        "correctAnswer": "A",
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
          "A": "Operant conditioning and immediate positive reinforcement",
          "B": "Classical conditioning of involuntary reflexes",
          "C": "Gestalt insight and sudden perceptual restructuring",
          "D": "Social observational modeling and vicarious imitation"
        },
        "options_hi": {
          "A": "सक्रिय अनुबंधन (क्रियाप्रसूत अनुबंधन) और तत्काल सकारात्मक पुनर्बलन",
          "B": "अनैच्छिक प्रतिवर्तों का शास्त्रीय अनुबंधन",
          "C": "गेस्टाल्ट अंतर्दृष्टि और अचानक प्रत्यक्षीकरण पुनर्गठन",
          "D": "सामाजिक अवलोकनात्मक मॉडलिंग और अनुकरण"
        },
        "correctAnswer": "A",
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
          "A": "Reliability",
          "B": "Validity",
          "C": "Usability",
          "D": "Subjectivity"
        },
        "options_hi": {
          "A": "विश्वसनीयता (Reliability)",
          "B": "वैधता (Validity)",
          "C": "उपयोगिता (Usability)",
          "D": "व्यक्तिपरकता (Subjectivity)"
        },
        "correctAnswer": "A",
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
          "A": "To pinpoint specific learning deficiencies and underlying misconceptions of individual students",
          "B": "To assign final letter grades and ranks at the end of the semester",
          "C": "To select top scholarship recipients across the state",
          "D": "To evaluate the teacher's administrative punctuality"
        },
        "options_hi": {
          "A": "अलग-अलग छात्रों की विशिष्ट अधिगम कठिनाइयों, कमजोरियों और भ्रांतियों की पहचान करना",
          "B": "सत्र के अंत में अंतिम ग्रेड और रैंक आवंटित करना",
          "C": "राज्य भर में शीर्ष छात्रवृत्ति प्राप्तकर्ताओं का चयन करना",
          "D": "शिक्षक की प्रशासनिक समयबद्धता का मूल्यांकन करना"
        },
        "correctAnswer": "A",
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
          "A": "Project Method",
          "B": "Dalton Plan",
          "C": "Heuristic Method",
          "D": "Kindergarten Method"
        },
        "options_hi": {
          "A": "परियोजना विधि (Project Method)",
          "B": "डाल्टन योजना (Dalton Plan)",
          "C": "ह्यूरिस्टिक (खोज) विधि",
          "D": "किंडरगार्टन विधि"
        },
        "correctAnswer": "A",
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
          "A": "H.E. Armstrong",
          "B": "John Dewey",
          "C": "Friedrich Froebel",
          "D": "Helen Parkhurst"
        },
        "options_hi": {
          "A": "एच. ई. आर्मस्ट्रांग (H.E. Armstrong)",
          "B": "जॉन डीवी",
          "C": "फ्रेडरिक फ्रोबेल",
          "D": "हेलेन पार्खर्स्ट"
        },
        "correctAnswer": "A",
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
          "A": "To encourage deeper thinking, clarification, and elaboration beyond initial shallow answers",
          "B": "To intimidate quiet students and test their speed of answering",
          "C": "To introduce completely unrelated topics to distract the class",
          "D": "To test whether the microphone audio level is adequate"
        },
        "options_hi": {
          "A": "प्रारंभिक संक्षिप्त उत्तरों से आगे बढ़कर गहन चिंतन, स्पष्टीकरण और विस्तृत व्याख्या को प्रोत्साहित करना",
          "B": "शांत छात्रों को डराना और उनके उत्तर देने की गति का परीक्षण करना",
          "C": "कक्षा का ध्यान भटकाने के लिए पूरी तरह से असंबंधित विषयों को प्रस्तुत करना",
          "D": "यह जांचना कि माइक्रोफ़ोन ऑडियो स्तर पर्याप्त है या नहीं"
        },
        "correctAnswer": "A",
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
          "A": "Diorama and Specimen Mock-up",
          "B": "Overhead Projector (OHP) transparency",
          "C": "Digital PowerPoint slideshow",
          "D": "Filmstrip projector slide"
        },
        "options_hi": {
          "A": "डायोरामा (Diorama) और नमूना मॉडल (Mock-up/Specimen)",
          "B": "ओवरहेड प्रोजेक्टर (OHP) ट्रांसपेरेंसी",
          "C": "डिजिटल पावरपॉइंट स्लाइड शो",
          "D": "फिल्मस्ट्रिप प्रोजेक्टर स्लाइड"
        },
        "correctAnswer": "A",
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
          "A": "An evaluator's general positive or negative overall impression biasing ratings on specific separate traits",
          "B": "The tendency of students to forget answers under examination stress",
          "C": "The immediate retention of facts reviewed right before entering the hall",
          "D": "A grading system that uses glowing digital indicators"
        },
        "options_hi": {
          "A": "मूल्यांकनकर्ता की सामान्य समग्र सकारात्मक या नकारात्मक धारणा का छात्र के विशिष्ट अलग-अलग लक्षणों के मूल्यांकन को प्रभावित करना",
          "B": "परीक्षा तनाव में छात्रों द्वारा उत्तर भूलने की प्रवृत्ति",
          "C": "परीक्षा हॉल में प्रवेश करने से ठीक पहले पढ़े गए तथ्यों का तात्कालिक स्मरण",
          "D": "चमकदार डिजिटल संकेतकों का उपयोग करने वाली एक अंकन प्रणाली"
        },
        "correctAnswer": "A",
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
          "A": "Polya's heuristic four-stage problem-solving model (Understand, Plan, Carry out, Look back)",
          "B": "Passive rote memorization of written code snippets from the blackboard",
          "C": "Reading programming code out loud in chorus without practical compiler execution",
          "D": "Punishing students every time an algorithm throws a syntax error"
        },
        "options_hi": {
          "A": "जॉर्ज पोल्या का चार-चरणीय समस्या समाधान मॉडल (समझना, योजना बनाना, क्रियान्वित करना, पुनरावलोकन)",
          "B": "श्यामपट्ट से लिखे गए कोड अंशों का निष्क्रिय रट्टा लगाना",
          "C": "बिना कंप्यूटर निष्पादन के सस्वर समूह पाठ में कोड को जोर-जोर से पढ़ना",
          "D": "एल्गोरिदम में सिंटैक्स त्रुटि आने पर हर बार छात्रों को दंडित करना"
        },
        "correctAnswer": "A",
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
          "A": "Assessing candidate performance against predefined learning standards or behavioral objectives",
          "B": "Ranking test-takers on a bell curve to award percentiles relative to peers",
          "C": "Ensuring exactly 50% of examinees pass and 50% fail each session",
          "D": "Selecting candidates solely based on height and physical stamina"
        },
        "options_hi": {
          "A": "पूर्व-निर्धारित अधिगम मानकों या व्यवहारिक उद्देश्यों के विरुद्ध अभ्यर्थी के प्रदर्शन का आकलन करना",
          "B": "सहपाठियों की तुलना में पर्सेंटाइल देने के लिए सामान्य वितरण वक्र (Bell curve) पर छात्रों को रैंक करना",
          "C": "यह सुनिश्चित करना कि प्रत्येक सत्र में ठीक 50% अभ्यर्थी उत्तीर्ण हों और 50% अनुत्तीर्ण हों",
          "D": "केवल शारीरिक कद-काठी के आधार पर अभ्यर्थियों का चयन करना"
        },
        "correctAnswer": "A",
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
          "A": "21 disabilities",
          "B": "7 disabilities",
          "C": "14 disabilities",
          "D": "28 disabilities"
        },
        "options_hi": {
          "A": "21 दिव्यांगताएं",
          "B": "7 दिव्यांगताएं",
          "C": "14 दिव्यांगताएं",
          "D": "28 दिव्यांगताएं"
        },
        "correctAnswer": "A",
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
          "A": "15 seconds",
          "B": "20 seconds",
          "C": "12 seconds",
          "D": "18 seconds"
        },
        "options_hi": {
          "A": "15 सेकंड",
          "B": "20 सेकंड",
          "C": "12 सेकंड",
          "D": "18 सेकंड"
        },
        "correctAnswer": "A",
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
          "A": "24 years",
          "B": "30 years",
          "C": "20 years",
          "D": "28 years"
        },
        "options_hi": {
          "A": "24 वर्ष",
          "B": "30 वर्ष",
          "C": "20 वर्ष",
          "D": "28 वर्ष"
        },
        "correctAnswer": "A",
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
          "A": "96",
          "B": "112",
          "C": "84",
          "D": "120"
        },
        "options_hi": {
          "A": "96",
          "B": "112",
          "C": "84",
          "D": "120"
        },
        "correctAnswer": "A",
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
          "A": "713",
          "B": "675",
          "C": "725",
          "D": "697"
        },
        "options_hi": {
          "A": "713",
          "B": "675",
          "C": "725",
          "D": "697"
        },
        "correctAnswer": "A",
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
          "A": "UVWFGPV",
          "B": "UVWGGQV",
          "C": "TVWFGPU",
          "D": "UWWFGPV"
        },
        "options_hi": {
          "A": "UVWFGPV",
          "B": "UVWGGQV",
          "C": "TVWFGPU",
          "D": "UWWFGPV"
        },
        "correctAnswer": "A",
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
          "A": "Her Son",
          "B": "Her Brother",
          "C": "Her Nephew",
          "D": "Her Father"
        },
        "options_hi": {
          "A": "उसका पुत्र (बेटा)",
          "B": "उसका भाई",
          "C": "उसका भतीजा / भांजा",
          "D": "उसका पिता"
        },
        "correctAnswer": "A",
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
          "A": "15 meters, East",
          "B": "10 meters, West",
          "C": "15 meters, South",
          "D": "25 meters, North"
        },
        "options_hi": {
          "A": "15 मीटर, पूर्व दिशा",
          "B": "10 मीटर, पश्चिम दिशा",
          "C": "15 मीटर, दक्षिण दिशा",
          "D": "25 मीटर, उत्तर दिशा"
        },
        "correctAnswer": "A",
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
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "Statements: (1) All books are papers. (2) Some papers are pens. Conclusions: I. Some pens are books. II. Some papers are books. Which conclusion logically follows?",
        "question_hi": "कथन: (1) सभी पुस्तकें कागज हैं। (2) कुछ कागज पेन हैं। निष्कर्ष: I. कुछ पेन पुस्तकें हैं। II. कुछ कागज पुस्तकें हैं। कौन सा निष्कर्ष तार्किक रूप से निकलता है?",
        "options": {
          "A": "Only conclusion II follows",
          "B": "Only conclusion I follows",
          "C": "Both conclusion I and II follow",
          "D": "Neither conclusion I nor II follows"
        },
        "options_hi": {
          "A": "केवल निष्कर्ष II निकलता है",
          "B": "केवल निष्कर्ष I निकलता है",
          "C": "निष्कर्ष I और II दोनों निकलते हैं",
          "D": "न तो निष्कर्ष I और न ही II निकलता है"
        },
        "correctAnswer": "A",
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
          "A": "144 (it is not a cube, while others are perfect cubes)",
          "B": "64",
          "C": "125",
          "D": "27"
        },
        "options_hi": {
          "A": "144 (यह पूर्ण घन नहीं है, जबकि अन्य सभी पूर्ण घन हैं)",
          "B": "64",
          "C": "125",
          "D": "27"
        },
        "correctAnswer": "A",
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
          "A": "20 days",
          "B": "18 days",
          "C": "24 days",
          "D": "15 days"
        },
        "options_hi": {
          "A": "20 दिन",
          "B": "18 दिन",
          "C": "24 दिन",
          "D": "15 दिन"
        },
        "correctAnswer": "A",
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
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "A shopkeeper professes to sell his goods at cost price, but uses a false weight of 900 grams instead of a true kilogram (1,000 grams). What is his actual gain percentage?",
        "question_hi": "एक बेईमान दुकानदार अपनी वस्तुओं को क्रय मूल्य पर बेचने का दावा करता है, लेकिन 1 किलोग्राम (1,000 ग्राम) के स्थान पर 900 ग्राम के गलत बाट का उपयोग करता है। उसका वास्तविक लाभ प्रतिशत क्या है?",
        "options": {
          "A": "11.11% (100/9 %)",
          "B": "10%",
          "C": "12.5%",
          "D": "9.09%"
        },
        "options_hi": {
          "A": "11.11% (100/9 %)",
          "B": "10%",
          "C": "12.5%",
          "D": "9.09%"
        },
        "correctAnswer": "A",
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
          "A": "125%",
          "B": "100%",
          "C": "150%",
          "D": "75%"
        },
        "options_hi": {
          "A": "125%",
          "B": "100%",
          "C": "150%",
          "D": "75%"
        },
        "correctAnswer": "A",
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
          "A": "3 hours",
          "B": "4 hours",
          "C": "3.5 hours",
          "D": "5 hours"
        },
        "options_hi": {
          "A": "3 घंटे",
          "B": "4 घंटे",
          "C": "3.5 घंटे",
          "D": "5 घंटे"
        },
        "correctAnswer": "A",
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
          "A": "3",
          "B": "1",
          "C": "7",
          "D": "9"
        },
        "options_hi": {
          "A": "3",
          "B": "1",
          "C": "7",
          "D": "9"
        },
        "correctAnswer": "A",
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
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "If a number 5432*7 is divisible by 9, what digit must replace the asterisk (*) symbol?",
        "question_hi": "यदि संख्या 5432*7, 9 से पूर्णतः विभाज्य है, तो स्टार (*) के स्थान पर कौन सा अंक आएगा?",
        "options": {
          "A": "6",
          "B": "5",
          "C": "4",
          "D": "7"
        },
        "options_hi": {
          "A": "6",
          "B": "5",
          "C": "4",
          "D": "7"
        },
        "correctAnswer": "A",
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
          "A": "15 years",
          "B": "20 years",
          "C": "10 years",
          "D": "12 years"
        },
        "options_hi": {
          "A": "15 वर्ष",
          "B": "20 वर्ष",
          "C": "10 वर्ष",
          "D": "12 वर्ष"
        },
        "correctAnswer": "A",
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
          "A": "₹15,000",
          "B": "₹25,000",
          "C": "₹18,000",
          "D": "₹12,000"
        },
        "options_hi": {
          "A": "₹15,000",
          "B": "₹25,000",
          "C": "₹18,000",
          "D": "₹12,000"
        },
        "correctAnswer": "A",
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
          "A": "8251896",
          "B": "8251869",
          "C": "8251986",
          "D": "8521896"
        },
        "options_hi": {
          "A": "8251896",
          "B": "8251869",
          "C": "8251986",
          "D": "8521896"
        },
        "correctAnswer": "A",
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
          "A": "Great-grandchild (प्रपौत्र / प्रपौत्री)",
          "B": "Grandchild",
          "C": "Child",
          "D": "Nephew"
        },
        "options_hi": {
          "A": "प्रपौत्र / प्रपौत्री (Great-grandchild)",
          "B": "पौत्र / नाती",
          "C": "संतान",
          "D": "भतीजा"
        },
        "correctAnswer": "A",
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
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "marks": 1,
        "negativeMarks": 0,
        "question": "If South-East becomes North, North-East becomes West, and so on, what will West become?",
        "question_hi": "यदि दक्षिण-पूर्व, उत्तर बन जाता है; उत्तर-पूर्व, पश्चिम बन जाता है और इसी प्रकार आगे भी, तो पश्चिम क्या बन जाएगा?",
        "options": {
          "A": "South-East",
          "B": "North-West",
          "C": "South-West",
          "D": "North-East"
        },
        "options_hi": {
          "A": "दक्षिण-पूर्व (South-East)",
          "B": "उत्तर-पश्चिम",
          "C": "दक्षिण-पश्चिम",
          "D": "उत्तर-पूर्व"
        },
        "correctAnswer": "A",
        "explanation": "South-East (135°) becomes North (0°/360°), which represents a rotation of 135° anti-clockwise. Applying a 135° anti-clockwise rotation to West (270°) lands on 135°, which is South-East.",
        "explanation_hi": "प्रत्येक दिशा 135° वामावर्त (Anti-clockwise) घूम रही है। अतः पश्चिम (West) 135° वामावर्त घूमने पर 'दक्षिण-पूर्व' (South-East) बन जाएगा।"
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
          "A": "56",
          "B": "54",
          "C": "60",
          "D": "48"
        },
        "options_hi": {
          "A": "56",
          "B": "54",
          "C": "60",
          "D": "48"
        },
        "correctAnswer": "A",
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
          "A": "A large circle containing two separate non-overlapping circles inside it",
          "B": "Three intersecting concentric circles",
          "C": "Three completely detached separate circles",
          "D": "Two overlapping circles inside a square"
        },
        "options_hi": {
          "A": "एक बड़ा वृत्त (मानव) जिसके अंदर दो अलग-अलग गैर-अतिव्यापी वृत्त (इंजीनियर और डॉक्टर) स्थित हैं",
          "B": "तीन परस्पर जुड़े हुए वृत्त",
          "C": "तीन पूरी तरह से अलग-अलग वृत्त",
          "D": "एक वर्ग के अंदर दो परस्पर जुड़े वृत्त"
        },
        "correctAnswer": "A",
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
          "A": "72 km/h",
          "B": "75 km/h",
          "C": "70 km/h",
          "D": "80 km/h"
        },
        "options_hi": {
          "A": "72 किमी/घंटा",
          "B": "75 किमी/घंटा",
          "C": "70 किमी/घंटा",
          "D": "80 किमी/घंटा"
        },
        "correctAnswer": "A",
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
          "A": "544",
          "B": "540",
          "C": "536",
          "D": "548"
        },
        "options_hi": {
          "A": "544",
          "B": "540",
          "C": "536",
          "D": "548"
        },
        "correctAnswer": "A",
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
          "A": "360 ways",
          "B": "720 ways",
          "C": "120 ways",
          "D": "180 ways"
        },
        "options_hi": {
          "A": "360 तरीके",
          "B": "720 तरीके",
          "C": "120 तरीके",
          "D": "180 तरीके"
        },
        "correctAnswer": "A",
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
          "A": "28",
          "B": "21",
          "C": "32",
          "D": "24"
        },
        "options_hi": {
          "A": "28",
          "B": "21",
          "C": "32",
          "D": "24"
        },
        "correctAnswer": "A",
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
          "A": "Tuesday",
          "B": "Monday",
          "C": "Wednesday",
          "D": "Sunday"
        },
        "options_hi": {
          "A": "मंगलवार",
          "B": "सोमवार",
          "C": "बुधवार",
          "D": "रविवार"
        },
        "correctAnswer": "A",
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
          "A": "Chisel (छेनी)",
          "B": "Pen",
          "C": "Anvil",
          "D": "Telescope"
        },
        "options_hi": {
          "A": "छेनी (Chisel)",
          "B": "कलम",
          "C": "निहाई",
          "D": "दूरबीन"
        },
        "correctAnswer": "A",
        "explanation": "A stethoscope is the primary diagnostic instrument of a doctor; a chisel is the primary sculpting tool of a sculptor.",
        "explanation_hi": "स्टेथोस्कोप डॉक्टर का प्रमुख उपकरण है, उसी प्रकार छेनी (Chisel) मूर्तिकार का प्रमुख औजार है।"
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
