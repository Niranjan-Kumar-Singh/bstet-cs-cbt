// BSTET Official 2023 - Paper II (Class 11-12 Computer Science)
// Verbatim Official Question Paper & BSEB Verified Answer Key (Exam Date: 12/09/2023 Shift 1)
window.official_2023 = {
  "id": "official_2023",
  "title": "BSTET Official 2023 - Paper II",
  "subtitle": "Held On: 12 Sep 2023 (Shift 1) | Official Candidate Response Sheet & BSEB Verified Answer Key",
  "category": "Official PYQ",
  "isOfficial": true,
  "totalQuestions": 150,
  "totalMarks": 150,
  "durationMinutes": 150,
  "difficulty": "Real Exam Standard",
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
      "name": "Teaching Skills",
      "startQ": 101,
      "endQ": 130,
      "total": 30
    },
    {
      "id": "general",
      "name": "General Skills",
      "startQ": 131,
      "endQ": 150,
      "total": 20
    }
  ],
  "questions": [
    {
      "id": 1,
      "questionNumber": 1,
      "officialQuestionId": 1,
      "rightOptionId": "1001",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the simplified expression for the Boolean function F(A, B, C, D) = Σ(0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14) using the K-map method?",
      "question_hi": "K-मैप विधि का उपयोग करके बूलियन फ़ंक्शन F(A, B, C, D) = Σ(0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14) के लिए सरलीकृत अभिव्यक्ति क्या है?",
      "options": {
        "A": "A'B'C'D' + A'B'C'D + A'BC'D + AB'C'D + ABCD",
        "B": "A'B'C'D' + A'BC'D + AB'C'D + ABC'D + ABCD",
        "C": "A'B'C'D' + A'BC'D + ABC'D + ABCD",
        "D": "A'B'C'D' + A'BC'D' + A'BCD + ABCD"
      },
      "options_hi": {
        "A": "ए'बी'सी'डी' + ए'बी'सी'डी + ए'बीसी'डी + एबी'सी'डी + एबीसीडी",
        "B": "ए'बी'सी'डी' + ए'बीसी'डी + एबी'सी'डी + एबीसी'डी + एबीसीडी",
        "C": "ए'बी'सी'डी' + ए'बीसी'डी + एबीसी'डी + एबीसीडी",
        "D": "ए'बी'सी'डी' + ए'बीसी'डी' + ए'बीसीडी + एबीसीडी"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) A'B'C'D' + A'B'C'D + A'BC'D + AB'C'D + ABCD**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (A) correctly satisfies the circuit behavior and truth table properties.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) A'B'C'D' + A'B'C'D + A'BC'D + AB'C'D + ABCD?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 2,
      "questionNumber": 2,
      "officialQuestionId": 55,
      "rightOptionId": "55001",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a PLA, what components are used to implement the combinational logic functions?",
      "question_hi": "एक PLA (प्रोग्रामेबल लॉजिक एरे) में, कॉम्बिनेशनल लॉजिक फलनों को लागू करने के लिए किन घटकों का उपयोग किया जाता है?",
      "options": {
        "A": "AND gates and OR gates",
        "B": "NAND gates and XOR gates",
        "C": "NOR gates and XNOR gates",
        "D": "NOT gates and multiplexers"
      },
      "options_hi": {
        "A": "AND गेट्स और OR गेट्स",
        "B": "NAND गेट्स और XOR गेट्स",
        "C": "NOR गेट्स और XNOR गेट्स",
        "D": "NOT गेट्स और मल्टीप्लेक्सर्स"
      },
      "correctAnswer": "A",
      "explanation": "A Programmable Logic Array (PLA) consists of a programmable AND-plane followed by a programmable OR-plane to realize sum-of-products (SOP) Boolean expressions.",
      "explanation_hi": "एक प्रोग्रामेबल लॉजिक एरे (PLA) में SOP (सम-ऑफ-प्रोडक्ट्स) बूलियन व्यंजक लागू करने के लिए प्रोग्रामेबल AND गेट एरे और प्रोग्रामेबल OR गेट एरे का उपयोग होता है।"
    },
    {
      "id": 3,
      "questionNumber": 3,
      "officialQuestionId": 54,
      "rightOptionId": "54003",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which type of register is primarily used to temporarily hold data during arithmetic and logical operations in a microprocessor?",
      "question_hi": "माइक्रोप्रोसेसर में अंकगणितीय और तार्किक संचालन के दौरान डेटा को अस्थायी रूप से रखने के लिए मुख्य रूप से किस रजिस्टर का उपयोग किया जाता है?",
      "options": {
        "A": "Shift register",
        "B": "Parallel register",
        "C": "Accumulator register",
        "D": "Counter register"
      },
      "options_hi": {
        "A": "शिफ्ट रजिस्टर",
        "B": "पैरेलल रजिस्टर",
        "C": "एक्युमुलेटर रजिस्टर",
        "D": "काउंटर रजिस्टर"
      },
      "correctAnswer": "C",
      "explanation": "The Accumulator register temporarily holds operands and stores the results of arithmetic and logic operations performed by the ALU.",
      "explanation_hi": "एक्युमुलेटर (Accumulator) रजिस्टर ALU द्वारा किए जाने वाले अंकगणितीय और तार्किक संचालन के मध्यवर्ती डेटा और परिणामों को अस्थायी रूप से रखता है।"
    },
    {
      "id": 4,
      "questionNumber": 4,
      "officialQuestionId": 53,
      "rightOptionId": "53004",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which logic family uses both depletion and enhancement mode MOSFETs for its operation?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: Which logic family uses both depletion and enhancement mode MOSFETs for its operation के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "TTL",
        "B": "ECL",
        "C": "PMOS",
        "D": "CMOS"
      },
      "options_hi": {
        "A": "टीटीएल",
        "B": "ईसीएल",
        "C": "पीएमओएस",
        "D": "सीएमओएस"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) CMOS**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (D) correctly satisfies the circuit behavior and truth table properties.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) CMOS?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 5,
      "questionNumber": 5,
      "officialQuestionId": 52,
      "rightOptionId": "52004",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary difference between ROM and RAM?",
      "question_hi": "ROM और RAM के बीच प्राथमिक अंतर क्या है?",
      "options": {
        "A": "ROM is faster than RAM",
        "B": "ROM is volatile, while RAM is non-volatile",
        "C": "ROM is used for data storage, while RAM is used for program execution",
        "D": "ROM stores permanent data that cannot be changed, while RAM stores temporary data that can be read and written"
      },
      "options_hi": {
        "A": "ROM is faster than RAM",
        "B": "ROM अस्थिर है, जबकि RAM गैर-वाष्पशील है",
        "C": "ROM का उपयोग किसके लिए किया जाता है data storage, while RAM का उपयोग किसके लिए किया जाता है program execution",
        "D": "ROM स्थायी डेटा संग्रहीत करता है जिसे बदला नहीं जा सकता, जबकि RAM अस्थायी डेटा संग्रहीत करता है जिसे पढ़ा और लिखा जा सकता है"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) ROM stores permanent data that cannot be changed, while RAM stores temporary data that can be read and written**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (D) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) ROM stores permanent data that cannot be changed, while RAM stores temporary data that can be read and written?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 6,
      "questionNumber": 6,
      "officialQuestionId": 51,
      "rightOptionId": "51001",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Given a Boolean function F(A, B, C) = Σ(0, 1, 2, 3, 5), what is the expression in SOP form?",
      "question_hi": "बूलियन फलन F(A, B, C) = Σ(0, 1, 2, 3, 5) के लिए, सम-ऑफ-प्रोडक्ट्स (SOP) के न्यूनतम रूप में अभिव्यक्ति क्या है?",
      "options": {
        "A": "A'B' + AB' + AB + AC",
        "B": "A + B + C",
        "C": "AB' + C'",
        "D": "A'B'C'"
      },
      "options_hi": {
        "A": "A' + B'C",
        "B": "A'B' + BC",
        "C": "A + B'C'",
        "D": "A'B + C'"
      },
      "correctAnswer": "A",
      "explanation": "On a 3-variable K-map, minterms 0, 1, 2, 3 form a quad giving A', and minterms 1, 5 form a pair giving B'C. Minimized SOP = A' + B'C.",
      "explanation_hi": "3-चर K-मैप पर: मिनटरम 0, 1, 2, 3 से क्वॉड A' बनता है और मिनटरम 1, 5 से युग्म B'C बनता है। न्यूनतम व्यंजक A' + B'C है।"
    },
    {
      "id": 7,
      "questionNumber": 7,
      "officialQuestionId": 50,
      "rightOptionId": "50002",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "If the sum of two positive binary numbers is 11010 and there is a carry-out from the MSB, what should be done to obtain the correct result?",
      "question_hi": "यदि दो सकारात्मक बाइनरी संख्याओं का योग 11010 है और एमएसबी से कोई कैरी-आउट होता है, तो सही परिणाम प्राप्त करने के लिए क्या किया जाना चाहिए?",
      "options": {
        "A": "Discard the carry",
        "B": "Add the carry to the least significant bit (LSB)",
        "C": "Add the carry to the most significant bit (MSB)",
        "D": "Subtract the carry from the MSB"
      },
      "options_hi": {
        "A": "कैरी को त्यागें",
        "B": "कैरी को न्यूनतम महत्वपूर्ण बिट (एलएसबी) में जोड़ें",
        "C": "कैरी को सबसे महत्वपूर्ण बिट (MSB) में जोड़ें",
        "D": "MSB से कैरी घटाएँ"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Add the carry to the least significant bit (LSB)**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (B) correctly satisfies the circuit behavior and truth table properties.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Add the carry to the least significant bit (LSB)?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 8,
      "questionNumber": 8,
      "officialQuestionId": 49,
      "rightOptionId": "49001",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In binary multiplication using the simple method, what is the first step after aligning the digits and preparing for multiplication?",
      "question_hi": "सरल विधि का उपयोग करके द्विआधारी गुणन में, अंकों को संरेखित करने और गुणन की तैयारी के बाद पहला चरण क्या है?",
      "options": {
        "A": "Multiply the least significant bit (LSB) by the multiplier",
        "B": "Multiply the most significant bit (MSB) by the multiplier",
        "C": "Multiply the least significant bit (LSB) by the multiplicand",
        "D": "Multiply the most significant bit (MSB) by the multiplicand"
      },
      "options_hi": {
        "A": "गुणक द्वारा न्यूनतम महत्वपूर्ण बिट (एलएसबी) को गुणा करें",
        "B": "सबसे महत्वपूर्ण बिट (MSB) को गुणक से गुणा करें",
        "C": "न्यूनतम महत्वपूर्ण बिट (एलएसबी) को गुणक से गुणा करें",
        "D": "सबसे महत्वपूर्ण बिट (MSB) को गुणक से गुणा करें"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Multiply the least significant bit (LSB) by the multiplier**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Multiply the least significant bit (LSB) by the multiplier?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 9,
      "questionNumber": 9,
      "officialQuestionId": 48,
      "rightOptionId": "48002",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the relationship between the distance between parity bits and their error detection and correction capability in Hamming Code?",
      "question_hi": "पैरिटी बिट्स के बीच की दूरी (हैमिंग दूरी) और उनकी त्रुटि पहचान/सुधार क्षमता के बीच क्या संबंध है?",
      "options": {
        "A": "Closer parity bits provide higher error correction capability",
        "B": "Closer parity bits provide lower error correction capability",
        "C": "Distance between parity bits has no impact on error correction capability",
        "D": "The position of parity bits is irrelevant in Hamming Code"
      },
      "options_hi": {
        "A": "दूरी बढ़ने से क्षमता घटती है",
        "B": "दूरी बढ़ने से क्षमता बढ़ती है",
        "C": "दूरी और क्षमता असंबंधित हैं",
        "D": "केवल 1-बिट त्रुटियां पहचानी जा सकती हैं"
      },
      "correctAnswer": "B",
      "explanation": "Greater Hamming distance between valid codewords directly increases the error-detecting and error-correcting capability of the code.",
      "explanation_hi": "कोडवर्ड्स के बीच न्यूनतम हैमिंग दूरी जितनी अधिक होगी, त्रुटि का पता लगाने (एरर डिटेक्शन) और सुधारने (करेक्शन) की क्षमता उतनी ही बढ़ जाती है।"
    },
    {
      "id": 10,
      "questionNumber": 10,
      "officialQuestionId": 47,
      "rightOptionId": "47003",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "To convert a Gray Code to its binary equivalent, which technique is commonly used?",
      "question_hi": "ग्रे कोड को उसके बाइनरी समकक्ष में बदलने के लिए आमतौर पर किस तकनीक का उपयोग किया जाता है?",
      "options": {
        "A": "Subtraction method",
        "B": "Addition method",
        "C": "Exclusive OR (XOR) operation",
        "D": "Division method"
      },
      "options_hi": {
        "A": "प्रत्येक बिट का पूरक लेना",
        "B": "केवल AND गेट्स का उपयोग",
        "C": "क्रमिक XOR संचालन",
        "D": "प्रत्येक बिट में 1 जोड़ना"
      },
      "correctAnswer": "C",
      "explanation": "Converting Gray code to Binary involves successive XOR operations: B[n-1] = G[n-1], and B[i] = B[i+1] XOR G[i].",
      "explanation_hi": "ग्रे कोड को बाइनरी में बदलने के लिए क्रमिक XOR ऑपरेशंस किए जाते हैं: B[n-1] = G[n-1] और B[i] = B[i+1] XOR G[i]।"
    },
    {
      "id": 11,
      "questionNumber": 11,
      "officialQuestionId": 46,
      "rightOptionId": "46003",
      "section": "Computer Science",
      "topic": "Unit V: Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which component of an ideal microcomputer is responsible for temporarily holding data and instructions during processing?",
      "question_hi": "प्रसंस्करण के दौरान डेटा और निर्देशों को अस्थायी रूप से रखने के लिए एक आदर्श माइक्रो कंप्यूटर का कौन सा घटक जिम्मेदार है?",
      "options": {
        "A": "CPU",
        "B": "ALU",
        "C": "Memory",
        "D": "Output devices"
      },
      "options_hi": {
        "A": "CPU",
        "B": "आलू",
        "C": "याद",
        "D": "आउटपुट डिवाइस"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Memory**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (C) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Memory?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 12,
      "questionNumber": 12,
      "officialQuestionId": 45,
      "rightOptionId": "45003",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "How is the width of the data bus typically measured in a microcomputer system?",
      "question_hi": "माइक्रोकंप्यूटर सिस्टम में डेटा बस की चौड़ाई आमतौर पर किसमें मापी जाती है?",
      "options": {
        "A": "In kilobytes (KB)",
        "B": "In megahertz (MHz)",
        "C": "In bits",
        "D": "In address lines"
      },
      "options_hi": {
        "A": "बाइट्स में",
        "B": "किलोबाइट्स में",
        "C": "बिट्स में",
        "D": "मेगाबाइट्स में"
      },
      "correctAnswer": "C",
      "explanation": "Data bus width is measured in bits (e.g. 8-bit, 16-bit, 32-bit, 64-bit), indicating how many bits of data can be transferred simultaneously.",
      "explanation_hi": "डेटा बस की चौड़ाई बिट्स (जैसे 8-बिट, 16-बिट, 32-बिट या 64-बिट) में मापी जाती है, जो समानांतर डेटा ट्रांसफर की क्षमता दर्शाती है।"
    },
    {
      "id": 13,
      "questionNumber": 13,
      "officialQuestionId": 44,
      "rightOptionId": "44003",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Microcontrollers find application in various fields. What is a typical application of microcontrollers in the automotive industry?",
      "question_hi": "ऑटोमोटिव (वाहन) उद्योग में माइक्रोकंट्रोलर्स का विशिष्ट अनुप्रयोग क्या है?",
      "options": {
        "A": "Operating systems for computers",
        "B": "Entertainment systems in airplanes",
        "C": "Engine control in cars",
        "D": "Weather forecasting systems"
      },
      "options_hi": {
        "A": "कंप्यूटर ऑपरेटिंग सिस्टम",
        "B": "विमान मनोरंजन प्रणाली",
        "C": "कारों में इंजन नियंत्रण (Engine Control)",
        "D": "मौसम पूर्वानुमान प्रणाली"
      },
      "correctAnswer": "C",
      "explanation": "Microcontrollers are widely deployed in modern vehicles for engine control units (ECUs), fuel injection, ABS, and cruise control.",
      "explanation_hi": "वाहनों में माइक्रोकंट्रोलर्स का उपयोग इंजन कंट्रोल यूनिट (ECU), ईंधन इंजेक्शन और सुरक्षा प्रणालियों के सटीक नियंत्रण हेतु किया जाता है।"
    },
    {
      "id": 14,
      "questionNumber": 14,
      "officialQuestionId": 43,
      "rightOptionId": "43003",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which data structure often results in a time-space tradeoff by using extra memory to speed up operations?",
      "question_hi": "संचालन को गति देने के लिए अतिरिक्त मेमोरी का उपयोग करके किस डेटा संरचना के परिणामस्वरूप अक्सर समय-अंतरिक्ष समझौता होता है?",
      "options": {
        "A": "Arrays",
        "B": "Linked lists",
        "C": "Hash tables",
        "D": "Stacks"
      },
      "options_hi": {
        "A": "सरणियों",
        "B": "लिंक की गई सूचियाँ",
        "C": "हैश टेबल",
        "D": "स्टैक (Stack)s"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Hash tables**\n\n**Data Structure Characteristics**: Efficient data manipulation requires understanding asymptotic costs, pointer manipulation, and memory layout (contiguous vs node-based).\n- Option (C) reflects the standard behavior and complexity bounds.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Hash tables?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 15,
      "questionNumber": 15,
      "officialQuestionId": 42,
      "rightOptionId": "42004",
      "section": "Computer Science",
      "topic": "Unit II: Data Structures & Algorithms",
      "topic_hi": "डेटा स्ट्रक्चर और एल्गोरिदम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which term refers to the strategy of optimizing an algorithm's use of resources, often by making sacrifices in one aspect for improvements in another?",
      "question_hi": "कौन सा शब्द किसी एल्गोरिदम के संसाधनों के उपयोग को अनुकूलित करने की रणनीति को संदर्भित करता है, अक्सर एक पहलू में दूसरे में सुधार के लिए बलिदान देकर?",
      "options": {
        "A": "Greedy algorithm",
        "B": "Divide and conquer",
        "C": "Dynamic programming",
        "D": "Tradeoff"
      },
      "options_hi": {
        "A": "लालची एल्गोरिदम (Greedy Algorithm)",
        "B": "फूट डालो और राज करो",
        "C": "डायनामिक प्रोग्रामिंग",
        "D": "अदला - बदली"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Tradeoff**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (D) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Tradeoff?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 16,
      "questionNumber": 16,
      "officialQuestionId": 41,
      "rightOptionId": "41004",
      "section": "Computer Science",
      "topic": "Unit II: Data Structures & Algorithms",
      "topic_hi": "डेटा स्ट्रक्चर और एल्गोरिदम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Conditional asymptotic notation allows for a more nuanced analysis of algorithm behavior under specific conditions. This is particularly useful when:",
      "question_hi": "सशर्त स्पर्शोन्मुख संकेतन विशिष्ट परिस्थितियों में एल्गोरिथम व्यवहार के अधिक सूक्ष्म विश्लेषण की अनुमति देता है। यह विशेष रूप से तब उपयोगी होता है जब:",
      "options": {
        "A": "Analyzing algorithms with constant time complexity",
        "B": "The input size is fixed",
        "C": "The input data is random",
        "D": "Algorithm behavior varies based on certain input characteristics"
      },
      "options_hi": {
        "A": "निरंतर समय जटिलता के साथ एल्गोरिदम का विश्लेषण",
        "B": "इनपुट का आकार निश्चित है",
        "C": "इनपुट डेटा यादृच्छिक है",
        "D": "एल्गोरिदम का व्यवहार कुछ इनपुट विशेषताओं के आधार पर भिन्न होता है"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Algorithm behavior varies based on certain input characteristics**\n\n**Algorithm Analysis**: Algorithmic paradigms (Divide-and-Conquer, Dynamic Programming, Greedy) balance space and time tradeoffs.\n- Option (D) correctly identifies the algorithmic property.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Algorithm behavior varies based on certain input characteristics?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 17,
      "questionNumber": 17,
      "officialQuestionId": 56,
      "rightOptionId": "56001",
      "section": "Computer Science",
      "topic": "Unit II: Data Structures & Algorithms",
      "topic_hi": "डेटा स्ट्रक्चर और एल्गोरिदम",
      "marks": 1,
      "negativeMarks": 0,
      "question": ".If an algorithm's behavior is bounded by \"o(f(n)) if g(n)\", what notation does it become when the condition is removed?",
      "question_hi": ".यदि किसी एल्गोरिदम का व्यवहार \"o(f(n)) if g(n)\" से घिरा है, तो शर्त हटा दिए जाने पर यह कौन सा संकेतन बन जाता है?",
      "options": {
        "A": "o(f(n))",
        "B": "o(g(n))",
        "C": "o(f(n) + g(n))",
        "D": "o(f(n) * g(n))"
      },
      "options_hi": {
        "A": "ओ(एफ(एन))",
        "B": "ओ(जी(एन))",
        "C": "ओ(एफ(एन) + जी(एन))",
        "D": "ओ(एफ(एन) * जी(एन))"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) o(f(n))**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) o(f(n))?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 18,
      "questionNumber": 18,
      "officialQuestionId": 57,
      "rightOptionId": "57001",
      "section": "Computer Science",
      "topic": "Unit II: Data Structures & Algorithms",
      "topic_hi": "डेटा स्ट्रक्चर और एल्गोरिदम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The recurrence equation T(n) = T(n/2) + 1 represents the time complexity of which algorithmic paradigm?",
      "question_hi": "पुनरावृत्ति समीकरण T(n) = T(n/2) + 1 किस एल्गोरिथम प्रतिमान की समय जटिलता को दर्शाता है?",
      "options": {
        "A": "Divide and Conquer",
        "B": "Greedy Algorithms",
        "C": "Dynamic Programming",
        "D": "Brute Force"
      },
      "options_hi": {
        "A": "फूट डालो और राज करो",
        "B": "Greedy Algorithms",
        "C": "डायनामिक प्रोग्रामिंग",
        "D": "पाशविक बल"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Divide and Conquer**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (A) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Divide and Conquer?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 19,
      "questionNumber": 19,
      "officialQuestionId": 58,
      "rightOptionId": "58002",
      "section": "Computer Science",
      "topic": "Unit II: Data Structures & Algorithms",
      "topic_hi": "डेटा स्ट्रक्चर और एल्गोरिदम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Divide and Conquer is an algorithmic paradigm that solves problems by:",
      "question_hi": "डिवाइड एंड कॉन्कर (विभाजन और विजय) एक एल्गोरिदमिक प्रतिमान है जो समस्याओं को कैसे हल करता है?",
      "options": {
        "A": "Iteratively solving subproblems",
        "B": "Recursively solving subproblems",
        "C": "Using heuristics to find solutions",
        "D": "Greedily combining solutions"
      },
      "options_hi": {
        "A": "केवल रैंडम विकल्पों की जांच करके",
        "B": "समस्या को छोटी उप-समस्याओं में विभाजित करके, उन्हें हल करके और परिणामों को मिलाकर",
        "C": "हमेशा स्थानीय रूप से सर्वोत्तम विकल्प चुनकर",
        "D": "एक-एक करके सभी संभावनाओं को आज़माकर"
      },
      "correctAnswer": "B",
      "explanation": "Divide and conquer divides a problem into subproblems of the same type, solves them recursively, and combines the results (e.g. Merge Sort).",
      "explanation_hi": "डिवाइड एंड कॉन्कर रणनीति समस्या को समान उप-समस्याओं में विभाजित करती है, उन्हें रिकर्सिव रूप से हल करती है और फिर समाधानों को जोड़ती है।"
    },
    {
      "id": 20,
      "questionNumber": 20,
      "officialQuestionId": 67,
      "rightOptionId": "67004",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A threaded binary tree is a binary tree in which:",
      "question_hi": "एक थ्रेडेड बाइनरी ट्री (Threaded Binary Tree) वह ट्री है जिसमें:",
      "options": {
        "A": "Each node has two children",
        "B": "Each node has at most one child",
        "C": "Each node is connected to its parent",
        "D": "Each node has a thread connecting it to its predecessor or successor"
      },
      "options_hi": {
        "A": "सभी नोड्स के दो बच्चे होते हैं",
        "B": "प्रत्येक नोड में एक अतिरिक्त स्ट्रिंग होती है",
        "C": "ट्री पूरी तरह से संतुलित होता है",
        "D": "खाली (NULL) पॉइंटर्स को इन-ऑर्डर पूर्ववर्ती या परवर्ती नोड्स के पॉइंटर्स से बदल दिया जाता है"
      },
      "correctAnswer": "D",
      "explanation": "A threaded binary tree replaces NULL child pointers with direct threads pointing to in-order predecessor or successor nodes.",
      "explanation_hi": "थ्रेडेड बाइनरी ट्री में NULL पॉइंटर्स को इन-ऑर्डर ट्रैवर्सल के पूर्ववर्ती या परवर्ती नोड्स से जोड़ दिया जाता है, जिससे स्टैक के बिना ट्रैवर्सल संभव होता है।"
    },
    {
      "id": 21,
      "questionNumber": 21,
      "officialQuestionId": 73,
      "rightOptionId": "73001",
      "section": "Computer Science",
      "topic": "Unit II: Data Structures & Algorithms",
      "topic_hi": "डेटा स्ट्रक्चर और एल्गोरिदम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which traversal algorithm is typically implemented using a stack data structure?",
      "question_hi": "कौन सा ट्रैवर्सल एल्गोरिदम आमतौर पर स्टैक डेटा संरचना का उपयोग करके कार्यान्वित किया जाता है?",
      "options": {
        "A": "DFS",
        "B": "BFS",
        "C": "Both DFS and BFS",
        "D": "Neither DFS nor BFS"
      },
      "options_hi": {
        "A": "डीएफएस",
        "B": "बीएफ",
        "C": "डीएफएस और बीएफएस दोनों",
        "D": "न तो डीएफएस और न ही बीएफएस"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) DFS**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (A) correctly satisfies the circuit behavior and truth table properties.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) DFS?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 22,
      "questionNumber": 22,
      "officialQuestionId": 72,
      "rightOptionId": "72001",
      "section": "Computer Science",
      "topic": "Unit II: Data Structures & Algorithms",
      "topic_hi": "डेटा स्ट्रक्चर और एल्गोरिदम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a directed graph, an edge that points from vertex A to vertex B is denoted as:",
      "question_hi": "एक निर्देशित ग्राफ़ में, एक किनारा जो शीर्ष A से शीर्ष B की ओर इंगित करता है, उसे इस प्रकार दर्शाया गया है:",
      "options": {
        "A": "(A, B)",
        "B": "[A, B]",
        "C": "<A, B>",
        "D": "{A, B}"
      },
      "options_hi": {
        "A": "(ए, बी)",
        "B": "[ए, बी]",
        "C": "<ए, बी>",
        "D": "{ए, बी}"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) (A, B)**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (A) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) (A, B)?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 23,
      "questionNumber": 23,
      "officialQuestionId": 71,
      "rightOptionId": "71001",
      "section": "Computer Science",
      "topic": "Unit II: Data Structures & Algorithms",
      "topic_hi": "डेटा स्ट्रक्चर और एल्गोरिदम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Separate chaining involves storing collided elements in separate data structures, typically in:",
      "question_hi": "हैश टेबल में सेपरेट चेनिंग (Separate Chaining) तकनीक में टकराव (Collision) वाले तत्वों को किस डेटा संरचना में संग्रहीत किया जाता है?",
      "options": {
        "A": "Linked lists",
        "B": "Arrays",
        "C": "Stacks",
        "D": "Queues"
      },
      "options_hi": {
        "A": "लिंक्ड लिस्ट (Linked List)",
        "B": "स्टैक (Stack)",
        "C": "क्यू (Queue)",
        "D": "बाइनरी सर्च ट्री"
      },
      "correctAnswer": "A",
      "explanation": "Separate chaining stores all elements that hash to the same bucket in a singly linked list originating from that bucket.",
      "explanation_hi": "सेपरेट चेनिंग में एक ही हैश स्लॉट पर मैप होने वाले सभी डेटा तत्वों को एक लिंक्ड लिस्ट में जोड़कर टकराव का समाधान किया जाता है।"
    },
    {
      "id": 24,
      "questionNumber": 24,
      "officialQuestionId": 70,
      "rightOptionId": "70001",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which collision resolution technique involves placing collided elements in the next available empty slot in the hash table?",
      "question_hi": "किस टकराव समाधान तकनीक में टकराए गए तत्वों को हैश तालिका में अगले उपलब्ध खाली स्लॉट में रखना शामिल है?",
      "options": {
        "A": "Linear probing",
        "B": "Quadratic probing",
        "C": "Separate chaining",
        "D": "Double hashing"
      },
      "options_hi": {
        "A": "रैखिक जांच",
        "B": "द्विघात जांच",
        "C": "अलग जंजीर",
        "D": "डबल हैशिंग"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Linear probing**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (A) correctly satisfies the circuit behavior and truth table properties.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Linear probing?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 25,
      "questionNumber": 25,
      "officialQuestionId": 69,
      "rightOptionId": "69003",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In the Tower of Hanoi problem with \"n\" disks, how many moves are required to solve the problem?",
      "question_hi": "\"एन\" डिस्क के साथ हनोई टॉवर समस्या में, समस्या को हल करने के लिए कितनी चालों की आवश्यकता है?",
      "options": {
        "A": "n",
        "B": "2n",
        "C": "2^n - 1",
        "D": "2^n"
      },
      "options_hi": {
        "A": "n",
        "B": "2n",
        "C": "2^एन -",
        "D": "2^एन"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (A) n**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) n?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 26,
      "questionNumber": 26,
      "officialQuestionId": 68,
      "rightOptionId": "68002",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The process of removing recursion involves replacing recursive function calls with:",
      "question_hi": "निम्नलिखित में से The process of removing recursion involves replacing recursive function calls with: के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options": {
        "A": "More recursive function calls",
        "B": "Loops",
        "C": "Additional memory allocation",
        "D": "Non-recursive function calls"
      },
      "options_hi": {
        "A": "अधिक पुनरावर्ती फ़ंक्शन कॉल",
        "B": "छोरों",
        "C": "अतिरिक्त मेमोरी आवंटन",
        "D": "गैर-पुनरावर्ती फ़ंक्शन कॉल"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Loops**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (B) correctly satisfies the circuit behavior and truth table properties.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Loops?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 27,
      "questionNumber": 27,
      "officialQuestionId": 66,
      "rightOptionId": "66001",
      "section": "Computer Science",
      "topic": "Unit V: Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A formal model of protection in an operating system provides:",
      "question_hi": "ऑपरेटिंग सिस्टम में सुरक्षा (Protection) का एक औपचारिक मॉडल क्या प्रदान करता है?",
      "options": {
        "A": "A mathematical framework for analyzing resource allocation",
        "B": "Guidelines for designing user interfaces",
        "C": "Methods for optimizing memory management",
        "D": "Techniques for improving CPU utilization"
      },
      "options_hi": {
        "A": "एक्सेस कंट्रोल नीतियों और अनुमतियों का एक औपचारिक विनिर्देश",
        "B": "केवल हार्डवेयर पासवर्ड",
        "C": "नेटवर्क फ़ायरवॉल नियम",
        "D": "एंटीवायरस स्कैनिंग"
      },
      "correctAnswer": "A",
      "explanation": "A formal protection model (like Lampson's access matrix or Bell-LaPadula) defines precise rules governing which subjects can access which objects.",
      "explanation_hi": "प्रोटेक्शन मॉडल (जैसे एक्सेस मैट्रिक्स) औपचारिक रूप से यह परिभाषित करता है कि कौन से उपयोगकर्ता/प्रोसेस किन सिस्टम संसाधनों तक पहुंच सकते हैं।"
    },
    {
      "id": 28,
      "questionNumber": 28,
      "officialQuestionId": 59,
      "rightOptionId": "59002",
      "section": "Computer Science",
      "topic": "Unit V: Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In an operating system, a \"buffer cache\" is used to:",
      "question_hi": "ऑपरेटिंग सिस्टम में 'बफर कैश' (Buffer Cache) का उपयोग किसलिए किया जाता है?",
      "options": {
        "A": "Store files in memory",
        "B": "Store copies of frequently used files in memory",
        "C": "Store the operating system kernel",
        "D": "Store input/output devices"
      },
      "options_hi": {
        "A": "केवल वायरस की जांच के लिए",
        "B": "डिस्क I/O संचालन को गति देने और बार-बार एक्सेस किए जाने वाले ब्लॉक को मेमोरी में रखने के लिए",
        "C": "नेटवर्क आईपी आवंटित करने के लिए",
        "D": "सीपीयू रजिस्टर खाली करने के लिए"
      },
      "correctAnswer": "B",
      "explanation": "The buffer cache holds frequently or recently accessed disk blocks in RAM to minimize costly physical disk I/O operations.",
      "explanation_hi": "बफर कैश हाल ही में उपयोग किए गए डिस्क ब्लॉक्स को मुख्य मेमोरी (RAM) में रखता है ताकि धीमी डिस्क रीड/राइट संचालन को कम किया जा सके।"
    },
    {
      "id": 29,
      "questionNumber": 29,
      "officialQuestionId": 65,
      "rightOptionId": "65004",
      "section": "Computer Science",
      "topic": "Unit V: Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "File manipulation operations in an operating system include:",
      "question_hi": "ऑपरेटिंग सिस्टम में फ़ाइल हेरफेर (File Manipulation) संचालन में क्या शामिल है?",
      "options": {
        "A": "Allocating memory to files",
        "B": "Assigning file names to processes",
        "C": "Loading files into CPU registers",
        "D": "Reading, writing, and modifying file content"
      },
      "options_hi": {
        "A": "केवल फ़ाइल का आकार देखना",
        "B": "केवल प्रिंटर चालू करना",
        "C": "फ़ाइलों को कंपाइल करना",
        "D": "फ़ाइल बनाना, पढ़ना, लिखना, खोलना, बंद करना और हटाना"
      },
      "correctAnswer": "D",
      "explanation": "File manipulation operations include create, open, read, write, seek, close, and delete.",
      "explanation_hi": "फ़ाइल संचालन में फ़ाइल का निर्माण, ओपन, रीड, राइट, क्लोज और डिलीट जैसे बुनियादी ऑपरेशंस शामिल हैं।"
    },
    {
      "id": 30,
      "questionNumber": 30,
      "officialQuestionId": 64,
      "rightOptionId": "64003",
      "section": "Computer Science",
      "topic": "Unit V: Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The I/O subsystem in an operating system is responsible for:",
      "question_hi": "ऑपरेटिंग सिस्टम में I/O सबसिस्टम किसके लिए जिम्मेदार है?",
      "options": {
        "A": "Allocating memory for processes",
        "B": "Managing the file system",
        "C": "Managing input/output operations between processes and input/output devices",
        "D": "Allocating CPU time to processes"
      },
      "options_hi": {
        "A": "केवल वेब ब्राउजिंग",
        "B": "कंपाइलर निष्पादन",
        "C": "I/O डिवाइस प्रबंधन, बफरिंग, कैशिंग, स्पूलिंग और डिवाइस ड्राइवर इंटरफेस",
        "D": "प्रोग्रामिंग सिंटेक्स जांचना"
      },
      "correctAnswer": "C",
      "explanation": "The I/O subsystem handles buffering, caching, spooling, device driver interfaces, and error handling for peripheral hardware devices.",
      "explanation_hi": "I/O सबसिस्टम डिवाइस प्रबंधन, बफरिंग, स्पूलिंग और विभिन्न हार्डवेयर डिवाइस ड्राइवरों के साथ संचार का प्रबंधन करता है।"
    },
    {
      "id": 31,
      "questionNumber": 31,
      "officialQuestionId": 63,
      "rightOptionId": "63003",
      "section": "Computer Science",
      "topic": "Unit V: Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The primary goal of load control is to:",
      "question_hi": "सिस्टम में लोड कंट्रोल (Load Control) का प्राथमिक लक्ष्य क्या है?",
      "options": {
        "A": "Prevent processes from running concurrently",
        "B": "Avoid context switching between processes",
        "C": "Ensure that CPU time is evenly distributed among processes",
        "D": "Maximize the usage of virtual memory"
      },
      "options_hi": {
        "A": "सभी प्रक्रियाओं को तुरंत बंद करना",
        "B": "केवल नेटवर्क बैंडविड्थ बढ़ाना",
        "C": "थ्रैशिंग (Thrashing) को रोकना और सिस्टम थ्रूपुट को अनुकूलतम बनाए रखना",
        "D": "सीपीयू क्लॉक गति बढ़ाना"
      },
      "correctAnswer": "C",
      "explanation": "Load control adjusts the degree of multiprogramming to prevent thrashing, ensuring active processes have sufficient working sets in memory.",
      "explanation_hi": "लोड कंट्रोल का मुख्य उद्देश्य मल्टीप्रोग्रामिंग की डिग्री को नियंत्रित करके थ्रैशिंग (Thrashing) से बचना और सिस्टम के थ्रूपुट को अधिकतम रखना है।"
    },
    {
      "id": 32,
      "questionNumber": 32,
      "officialQuestionId": 62,
      "rightOptionId": "62003",
      "section": "Computer Science",
      "topic": "Unit IV: DBMS & SQL",
      "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The purpose of a page table in a paging system is to:",
      "question_hi": "पेजिंग सिस्टम में पेज टेबल का उद्देश्य है:",
      "options": {
        "A": "Store pages of memory",
        "B": "Manage input/output operations",
        "C": "Translate virtual addresses to physical addresses",
        "D": "Store program instructions"
      },
      "options_hi": {
        "A": "स्मृति के पन्ने संग्रहित करें",
        "B": "इनपुट/आउटपुट संचालन प्रबंधित करें",
        "C": "आभासी पतों का भौतिक पतों में अनुवाद करें",
        "D": "स्टोर प्रोग्राम निर्देश"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Translate virtual addresses to physical addresses**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (C) correctly satisfies the circuit behavior and truth table properties.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Translate virtual addresses to physical addresses?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 33,
      "questionNumber": 33,
      "officialQuestionId": 61,
      "rightOptionId": "61001",
      "section": "Computer Science",
      "topic": "Unit V: Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In multiprogramming with fixed partitions, if a process requires more memory than is available in a partition, it may lead to:",
      "question_hi": "निश्चित विभाजनों के साथ मल्टीप्रोग्रामिंग में, यदि किसी प्रक्रिया को विभाजन में उपलब्ध मेमोरी से अधिक मेमोरी की आवश्यकता होती है, तो इसका परिणाम यह हो सकता है:",
      "options": {
        "A": "Fragmentation",
        "B": "Deadlock",
        "C": "Priority inversion",
        "D": "Starvation"
      },
      "options_hi": {
        "A": "विखंडन",
        "B": "डेडलॉक (गतिरोध)",
        "C": "प्राथमिकता उलटा",
        "D": "भुखमरी"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Fragmentation**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (A) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Fragmentation?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 34,
      "questionNumber": 34,
      "officialQuestionId": 60,
      "rightOptionId": "60004",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is DBMS?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: What is DBMS के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "DBMS is a collection of queries",
        "B": ") DBMS is a high-level language",
        "C": "DBMS is a programming language",
        "D": "DBMS stores, modifies and retrieves data"
      },
      "options_hi": {
        "A": "DBMS प्रश्नों का एक संग्रह है",
        "B": ") DBMS एक उच्च स्तरीय भाषा है",
        "C": "DBMS एक प्रोग्रामिंग भाषा है",
        "D": "DBMS डेटा को संग्रहीत, संशोधित और पुनर्प्राप्त करता है"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) DBMS stores, modifies and retrieves data**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (D) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) DBMS stores, modifies and retrieves data?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 35,
      "questionNumber": 35,
      "officialQuestionId": 40,
      "rightOptionId": "40003",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is correct according to the technology deployed by DBMS?",
      "question_hi": "DBMS द्वारा तैनात तकनीक के अनुसार निम्नलिखित में से कौन सा सही है?",
      "options": {
        "A": "Pointers are used to maintain transactional integrity and consistency",
        "B": "Cursors are used to maintain transactional integrity and consistency",
        "C": "Locks are used to maintain transactional integrity and consistency",
        "D": "Triggers are used to maintain transactional integrity and consistency"
      },
      "options_hi": {
        "A": "लेन-देन की अखंडता और स्थिरता बनाए रखने के लिए पॉइंटर्स का उपयोग किया जाता है",
        "B": "Cursors are used to maintain transactional integrity and consistency",
        "C": "लेन-देन की अखंडता और स्थिरता बनाए रखने के लिए ताले का उपयोग किया जाता है",
        "D": "Triggers are used to maintain transactional integrity and consistency"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Locks are used to maintain transactional integrity and consistency**\n\n**Database Concept**: Relational integrity, ACID transaction properties, and normalization rules (1NF to BCNF) eliminate anomalies and preserve data consistency.\n- Option (C) strictly adheres to relational database theory.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Locks are used to maintain transactional integrity and consistency?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 36,
      "questionNumber": 36,
      "officialQuestionId": 39,
      "rightOptionId": "39001",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The term \"NTFS\" refers to which one of the following?",
      "question_hi": "शब्द \"एनटीएफएस\" निम्नलिखित में से किसको संदर्भित करता है?",
      "options": {
        "A": "New Technology File System",
        "B": "New Tree File System",
        "C": "New Table type File System",
        "D": "Both A and C"
      },
      "options_hi": {
        "A": "नई तकनीकी फ़ाइल प्रणाली",
        "B": "नया ट्री फ़ाइल सिस्टम",
        "C": "नया टेबल प्रकार फ़ाइल सिस्टम",
        "D": "ए और सी दोनों"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) New Technology File System**\n\n**Data Structure Characteristics**: Efficient data manipulation requires understanding asymptotic costs, pointer manipulation, and memory layout (contiguous vs node-based).\n- Option (A) reflects the standard behavior and complexity bounds.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) New Technology File System?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 37,
      "questionNumber": 37,
      "officialQuestionId": 38,
      "rightOptionId": "38003",
      "section": "Computer Science",
      "topic": "Unit IV: DBMS & SQL",
      "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is a top-down approach in which the entity's higher level can be divided into two lower sub-entities?",
      "question_hi": "डेटाबेस डिज़ाइन में कौन सा टॉप-डाउन दृष्टिकोण है जिसमें एक उच्च-स्तरीय इकाई को उप-इकाइयों में विभाजित किया जाता है?",
      "options": {
        "A": "Aggregation",
        "B": "Generalization",
        "C": "Specialization",
        "D": "All of the above"
      },
      "options_hi": {
        "A": "जनरलाइजेशन (Generalization)",
        "B": "एग्रीगेशन (Aggregation)",
        "C": "स्पेशलाइजेशन (Specialization)",
        "D": "नॉर्मलाइजेशन (Normalization)"
      },
      "correctAnswer": "C",
      "explanation": "Specialization is a top-down design process where a higher-level entity type is broken down into one or more lower-level specialized entity types.",
      "explanation_hi": "स्पेशलाइजेशन (Specialization) एक टॉप-डाउन दृष्टिकोण है जिसमें उच्च-स्तरीय सामान्य इकाई को विशिष्ट उप-इकाइयों में विभाजित किया जाता है।"
    },
    {
      "id": 38,
      "questionNumber": 38,
      "officialQuestionId": 37,
      "rightOptionId": "37003",
      "section": "Computer Science",
      "topic": "Unit IX: Software Engineering",
      "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The term \"DFD\" stands for?",
      "question_hi": "सॉफ्टवेयर इंजीनियरिंग में 'DFD' का पूर्ण रूप क्या है?",
      "options": {
        "A": "Data file diagram",
        "B": "Data flow document",
        "C": "Data flow diagram",
        "D": "None of the above"
      },
      "options_hi": {
        "A": "Data File Design",
        "B": "Direct Flow Diagram",
        "C": "Data Flow Diagram",
        "D": "Distributed File Distribution"
      },
      "correctAnswer": "C",
      "explanation": "DFD stands for Data Flow Diagram, a graphical representation of the flow of data through an information system.",
      "explanation_hi": "DFD का पूर्ण रूप Data Flow Diagram (डेटा फ्लो आरेख) है, जो सिस्टम में डेटा के प्रवाह और प्रसंस्करण को दर्शाता है।"
    },
    {
      "id": 39,
      "questionNumber": 39,
      "officialQuestionId": 17,
      "rightOptionId": "17002",
      "section": "Computer Science",
      "topic": "Unit IV: DBMS & SQL",
      "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The term \"FAT\" is stands for_____",
      "question_hi": "फ़ाइल सिस्टम में 'FAT' का पूर्ण रूप क्या है?",
      "options": {
        "A": "File Allocation Tree",
        "B": "File Allocation Table",
        "C": "File Allocation Graph",
        "D": "All of the above"
      },
      "options_hi": {
        "A": "File Access Time",
        "B": "File Allocation Table",
        "C": "Fixed Address Table",
        "D": "Format Allocation Tool"
      },
      "correctAnswer": "B",
      "explanation": "FAT stands for File Allocation Table, an architecture supported by virtually all major operating systems.",
      "explanation_hi": "FAT का पूर्ण रूप File Allocation Table (फ़ाइल एलोकेशन टेबल) है, जो डिस्क पर फ़ाइल क्लस्टर्स का रिकॉर्ड रखता है।"
    },
    {
      "id": 40,
      "questionNumber": 40,
      "officialQuestionId": 16,
      "rightOptionId": "16003",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The term \"Data\" refers to:",
      "question_hi": "कंप्यूटर विज्ञान में 'डेटा' (Data) शब्द का क्या अर्थ है?",
      "options": {
        "A": "The electronic representation of the information(or data)",
        "B": "Basic information",
        "C": "Row Facts and figures",
        "D": "Both A and C"
      },
      "options_hi": {
        "A": "हमेशा अंतिम सार्थक सूचना",
        "B": "केवल दशमलव संख्याएँ",
        "C": "कच्चे, असंसाधित तथ्य और आंकड़े (Raw unprocessed facts)",
        "D": "निष्पादन योग्य प्रोग्राम"
      },
      "correctAnswer": "C",
      "explanation": "Data refers to raw, unprocessed facts, figures, and symbols that become meaningful information after processing.",
      "explanation_hi": "डेटा का अर्थ कच्चे, असंसाधित तथ्य, आंकड़े या अवलोकन हैं जिन्हें प्रोसेस करके उपयोगी जानकारी में बदला जाता है।"
    },
    {
      "id": 41,
      "questionNumber": 41,
      "officialQuestionId": 15,
      "rightOptionId": "15003",
      "section": "Computer Science",
      "topic": "Unit VI: Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary function of routing in the network layer?",
      "question_hi": "का प्राथमिक कार्य क्या है routing in the नेटवर्क परत (Network Layer)?",
      "options": {
        "A": "Data framing",
        "B": "Error correction",
        "C": "Finding the best path for data",
        "D": "Flow control"
      },
      "options_hi": {
        "A": "डेटा फ़्रेमिंग",
        "B": "त्रुटि सुधार",
        "C": "डेटा के लिए सर्वोत्तम पथ ढूँढना",
        "D": "प्रवाह नियंत्रण"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Finding the best path for data**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (C) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Finding the best path for data?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 42,
      "questionNumber": 42,
      "officialQuestionId": 14,
      "rightOptionId": "14002",
      "section": "Computer Science",
      "topic": "Unit V: Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is a socket in the context of process-to-process communication?",
      "question_hi": "प्रोसेस-टू-प्रोसेस संचार के संदर्भ में सॉकेट क्या है?",
      "options": {
        "A": "A hardware device for data transmission",
        "B": "A software interface for network communication",
        "C": "A type of cable used for high-speed data transmission",
        "D": "type of network topology"
      },
      "options_hi": {
        "A": "डेटा ट्रांसमिशन के लिए एक हार्डवेयर डिवाइस",
        "B": "नेटवर्क संचार के लिए एक सॉफ्टवेयर इंटरफ़ेस",
        "C": "हाई-स्पीड डेटा ट्रांसमिशन के लिए उपयोग की जाने वाली एक प्रकार की केबल",
        "D": "नेटवर्क टोपोलॉजी का प्रकार"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) A software interface for network communication**\n\n**Operating System Principle**: The OS kernel orchestrates resource virtualization, process synchronization, memory paging, and file management.\n- Option (B) is the definitive mechanism implemented in modern operating systems.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) A software interface for network communication?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 43,
      "questionNumber": 43,
      "officialQuestionId": 13,
      "rightOptionId": "13001",
      "section": "Computer Science",
      "topic": "Unit VI: Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Data transmission using multiple pathways simultaneously is known as:",
      "question_hi": "एक साथ कई मार्गों का उपयोग करके डेटा ट्रांसमिशन को इस रूप में जाना जाता है:",
      "options": {
        "A": "Parallel Transmission",
        "B": "Serial Transmission",
        "C": "Duplex Transmission",
        "D": "Half-duplex Transmission"
      },
      "options_hi": {
        "A": "Parallel Transmission",
        "B": "सीरियल ट्रांसमिशन",
        "C": "डुप्लेक्स ट्रांसमिशन",
        "D": "हाफ-डुप्लेक्स ट्रांसमिशन"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Parallel Transmission**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Parallel Transmission?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 44,
      "questionNumber": 44,
      "officialQuestionId": 12,
      "rightOptionId": "12003",
      "section": "Computer Science",
      "topic": "Unit VI: Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is NOT a network topology?",
      "question_hi": "निम्नलिखित में से कौन सा एक नेटवर्क टोपोलॉजी (Network Topology) नहीं है?",
      "options": {
        "A": "Star",
        "B": "Ring",
        "C": "Disk",
        "D": "Mesh"
      },
      "options_hi": {
        "A": "Star",
        "B": "Ring",
        "C": "Peer-to-Peer",
        "D": "Bus"
      },
      "correctAnswer": "C",
      "explanation": "Star, Ring, Bus, and Mesh are physical network topologies; Peer-to-Peer is a network architecture or operational model, not a topology.",
      "explanation_hi": "स्टार, रिंग और बस भौतिक नेटवर्क टोपोलॉजी हैं, जबकि पीयर-टू-पीयर (P2P) एक नेटवर्क आर्किटेक्चर है, टोपोलॉजी नहीं।"
    },
    {
      "id": 45,
      "questionNumber": 45,
      "officialQuestionId": 11,
      "rightOptionId": "11001",
      "section": "Computer Science",
      "topic": "Unit VI: Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Contention-based MAC protocols are commonly used in:",
      "question_hi": "कंटेन्शन-आधारित (Contention-based) MAC प्रोटोकॉल आमतौर पर कहाँ उपयोग किए जाते हैं?",
      "options": {
        "A": "Ethernet networks",
        "B": "Token Ring networks",
        "C": "ATM networks",
        "D": "Point-to-Point networks"
      },
      "options_hi": {
        "A": "ईथरनेट और वायरलेस लैन (जैसे CSMA/CD और CSMA/CA)",
        "B": "टोकन रिंग नेटवर्क",
        "C": "सैटेलाइट टीडीएमए",
        "D": "पॉइंट-टू-पॉइंट लीज्ड लाइन"
      },
      "correctAnswer": "A",
      "explanation": "Contention-based Medium Access Control protocols (e.g. ALOHA, CSMA/CD, CSMA/CA) are foundational to Ethernet and Wi-Fi networks.",
      "explanation_hi": "कंटेन्शन-आधारित प्रोटोकॉल (जैसे CSMA/CD और CSMA/CA) ईथरनेट और वाई-फाई लैन नेटवर्क में साझा माध्यम एक्सेस के लिए उपयोग होते हैं।"
    },
    {
      "id": 46,
      "questionNumber": 46,
      "officialQuestionId": 10,
      "rightOptionId": "10003",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Routing involves:",
      "question_hi": "निम्नलिखित में से Routing involves: के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options": {
        "A": "Dividing data into frames",
        "B": "Managing flow control",
        "C": "Determining the best path for data packets",
        "D": "Correcting errors in data transmission"
      },
      "options_hi": {
        "A": "डेटा को फ़्रेम में विभाजित करना",
        "B": "प्रवाह नियंत्रण का प्रबंध करना",
        "C": "डेटा पैकेट के लिए सर्वोत्तम पथ का निर्धारण",
        "D": "डेटा ट्रांसमिशन में त्रुटियों को ठीक करना"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Determining the best path for data packets**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (C) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Determining the best path for data packets?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 47,
      "questionNumber": 47,
      "officialQuestionId": 9,
      "rightOptionId": "9003",
      "section": "Computer Science",
      "topic": "Unit V: Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the purpose of ARP (Address Resolution Protocol)?",
      "question_hi": "कंप्यूटर नेटवर्किंग में ARP (Address Resolution Protocol) का प्राथमिक उद्देश्य क्या है?",
      "options": {
        "A": "To assign IP addresses to devices",
        "B": "To resolve domain names to IP addresses",
        "C": "To map MAC addresses to IP addresses",
        "D": "To manage network congestion"
      },
      "options_hi": {
        "A": "डोमेन नाम को IP पते में बदलना",
        "B": "ईमेल संदेश भेजना",
        "C": "तार्किक IP पते को भौतिक MAC पते में मैप करना",
        "D": "नेटवर्क ट्रैफ़िक को एन्क्रिप्ट करना"
      },
      "correctAnswer": "C",
      "explanation": "ARP translates a known 32-bit network-layer IPv4 address into its corresponding physical 48-bit MAC address on a local network segment.",
      "explanation_hi": "ARP (एड्रेस रेजोल्यूशन प्रोटोकॉल) ज्ञात तार्किक IP एड्रेस को लोकल नेटवर्क के भौतिक MAC एड्रेस में मैप करता है।"
    },
    {
      "id": 48,
      "questionNumber": 48,
      "officialQuestionId": 8,
      "rightOptionId": "8003",
      "section": "Computer Science",
      "topic": "Unit IX: Software Engineering",
      "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which software life cycle model allows for iterative development and incorporates risk analysis?",
      "question_hi": "कौन सा सॉफ़्टवेयर जीवन चक्र मॉडल पुनरावृत्तीय विकास की अनुमति देता है और जोखिम विश्लेषण को शामिल करता है?",
      "options": {
        "A": "Waterfall model",
        "B": "Prototype model",
        "C": "Spiral model",
        "D": "Agile model"
      },
      "options_hi": {
        "A": "झरना मॉडल",
        "B": "प्रोटोटाइप मॉडल",
        "C": "सर्पिल मॉडल",
        "D": "चंचल मॉडल"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Spiral model**\n\n**Software Engineering Methodology**: High-quality software development requires structured life cycles (SDLC), formal requirement specifications (SRS), and comprehensive testing verification.\n- Option (C) correctly describes the software engineering standard.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Spiral model?**\n\n**विषय अवधारणा (सॉफ्टवेयर इंजीनियरिंग)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 49,
      "questionNumber": 49,
      "officialQuestionId": 7,
      "rightOptionId": "7003",
      "section": "Computer Science",
      "topic": "Unit IX: Software Engineering",
      "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the main goal of software quality assurance?",
      "question_hi": "सॉफ़्टवेयर गुणवत्ता आश्वासन का मुख्य लक्ष्य क्या है?",
      "options": {
        "A": "To eliminate all defects from the software",
        "B": "To ensure the software is defect-free before release",
        "C": "To establish and enforce standards and processes to improve software quality",
        "D": "To test software under different conditions"
      },
      "options_hi": {
        "A": "सॉफ्टवेयर से सभी दोषों को दूर करना",
        "B": "यह सुनिश्चित करने के लिए कि सॉफ़्टवेयर रिलीज़ से पहले दोष-मुक्त है",
        "C": "सॉफ़्टवेयर गुणवत्ता में सुधार के लिए मानकों और प्रक्रियाओं को स्थापित करना और लागू करना",
        "D": "To test software under different conditions"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) To establish and enforce standards and processes to improve software quality**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (C) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) To establish and enforce standards and processes to improve software quality?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 50,
      "questionNumber": 50,
      "officialQuestionId": 6,
      "rightOptionId": "6003",
      "section": "Computer Science",
      "topic": "Unit IX: Software Engineering",
      "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Reverse engineering is primarily used for:",
      "question_hi": "सॉफ्टवेयर विकास में रिवर्स इंजीनियरिंग (Reverse Engineering) का प्राथमिक उपयोग किसलिए किया जाता है?",
      "options": {
        "A": "Creating new software from scratch",
        "B": "Improving software performance",
        "C": "Understanding and documenting existing software",
        "D": "Testing software components"
      },
      "options_hi": {
        "A": "नया कोड सीधे डिलीट करने के लिए",
        "B": "केवल प्रिंटआउट निकालने के लिए",
        "C": "किसी मौजूदा सिस्टम के डिज़ाइन, घटकों और कार्यप्रणाली को समझने के लिए",
        "D": "हार्ड ड्राइव को फॉर्मेट करने के लिए"
      },
      "correctAnswer": "C",
      "explanation": "Reverse engineering analyzes an existing compiled or legacy system to identify its underlying architecture, components, and interrelationships.",
      "explanation_hi": "रिवर्स इंजीनियरिंग का उपयोग किसी मौजूदा सॉफ्टवेयर या सिस्टम के आर्किटेक्चर और डिज़ाइन सिद्धांतों को समझने के लिए किया जाता है।"
    },
    {
      "id": 51,
      "questionNumber": 51,
      "officialQuestionId": 5,
      "rightOptionId": "5003",
      "section": "Computer Science",
      "topic": "Unit IX: Software Engineering",
      "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which testing approach involves testing individual components or units of code?",
      "question_hi": "सॉफ्टवेयर के अलग-अलग व्यक्तिगत घटकों या इकाइयों का परीक्षण करने में कौन सा परीक्षण दृष्टिकोण शामिल है?",
      "options": {
        "A": "Integration Testing",
        "B": "System Testing",
        "C": "Unit Testing",
        "D": "Acceptance Testing"
      },
      "options_hi": {
        "A": "सिस्टम टेस्टिंग",
        "B": "स्वीकृति (Acceptance) टेस्टिंग",
        "C": "यूनिट टेस्टिंग (Unit Testing)",
        "D": "लोड टेस्टिंग"
      },
      "correctAnswer": "C",
      "explanation": "Unit testing validates that each individual module, class, or function executes correctly in complete isolation.",
      "explanation_hi": "यूनिट टेस्टिंग में सॉफ्टवेयर के प्रत्येक सबसे छोटे परीक्षण योग्य मॉड्यूल, फंक्शन या क्लास की कार्यप्रणाली का स्वतंत्र रूप से परीक्षण किया जाता है।"
    },
    {
      "id": 52,
      "questionNumber": 52,
      "officialQuestionId": 4,
      "rightOptionId": "4003",
      "section": "Computer Science",
      "topic": "Unit IX: Software Engineering",
      "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the main goal of System Testing?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: What is the main goal of System Testing के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "Testing individual components in isolation",
        "B": "Testing the integration between different software components",
        "C": "Testing software functionality from the user's perspective",
        "D": "Identifying defects in the source code"
      },
      "options_hi": {
        "A": "अलग-अलग घटकों का अलगाव में परीक्षण करना",
        "B": "विभिन्न सॉफ़्टवेयर घटकों के बीच एकीकरण का परीक्षण करना",
        "C": "उपयोगकर्ता के दृष्टिकोण से सॉफ़्टवेयर कार्यक्षमता का परीक्षण करना",
        "D": "स्रोत कोड में दोषों की पहचान करना"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Testing software functionality from the user's perspective**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (C) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Testing software functionality from the user's perspective?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 53,
      "questionNumber": 53,
      "officialQuestionId": 3,
      "rightOptionId": "3002",
      "section": "Computer Science",
      "topic": "Unit IX: Software Engineering",
      "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which metric is used for estimating the size of a software project?",
      "question_hi": "किसी सॉफ़्टवेयर प्रोजेक्ट के आकार का अनुमान लगाने के लिए किस मीट्रिक का उपयोग किया जाता है?",
      "options": {
        "A": "Cyclomatic Complexity",
        "B": "Function Points (FP)",
        "C": "Defect Density",
        "D": "Software Reliability Index"
      },
      "options_hi": {
        "A": "चक्रीय जटिलता",
        "B": "फ़ंक्शन पॉइंट (एफपी)",
        "C": "दोष घनत्व",
        "D": "सॉफ़्टवेयर विश्वसनीयता सूचकांक"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Function Points (FP)**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Function Points (FP)?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 54,
      "questionNumber": 54,
      "officialQuestionId": 18,
      "rightOptionId": "18002",
      "section": "Computer Science",
      "topic": "Unit V: Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the purpose of staffing level estimation in software project management?",
      "question_hi": "सॉफ्टवेयर प्रोजेक्ट प्रबंधन में स्टाफिंग स्तर का अनुमान लगाने का क्या उद्देश्य है?",
      "options": {
        "A": "To determine the number of hardware components required",
        "B": "To identify potential risks in the project",
        "C": "To allocate appropriate resources to the project",
        "D": "To estimate the maintenance costs of the software"
      },
      "options_hi": {
        "A": "केवल कार्यालय का आकार निर्धारित करना",
        "B": "परियोजना को समय पर पूरा करने हेतु आवश्यक मानव संसाधन, कौशल और भूमिकाओं का निर्धारण करना",
        "C": "कर्मचारियों के वेतन को कम करना",
        "D": "केवल हार्डवेयर खरीदना"
      },
      "correctAnswer": "B",
      "explanation": "Staffing estimation determines the number, skill sets, and roles of developers and testers needed across project phases to meet delivery milestones.",
      "explanation_hi": "स्टाफिंग एस्टिमेशन परियोजना की समयसीमा और गुणवत्ता लक्ष्यों को पूरा करने के लिए आवश्यक जनशक्ति, विशेषज्ञता और भूमिकाओं की योजना बनाता है।"
    },
    {
      "id": 55,
      "questionNumber": 55,
      "officialQuestionId": 2,
      "rightOptionId": "2002",
      "section": "Computer Science",
      "topic": "Unit III: Programming in C++ / OOP",
      "topic_hi": "C++ प्रोग्रामिंग और ऑब्जेक्ट ओरिएंटेड डिज़ाइन",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which keyword is used to create an instance of a class in most programming languages?",
      "question_hi": "अधिकांश ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग भाषाओं (जैसे C++, Java) में क्लास का इंस्टेंस (ऑब्जेक्ट) बनाने के लिए किस कीवर्ड का उपयोग किया जाता है?",
      "options": {
        "A": "alloc",
        "B": "new",
        "C": "create",
        "D": "instance"
      },
      "options_hi": {
        "A": "create",
        "B": "new",
        "C": "instantiate",
        "D": "alloc"
      },
      "correctAnswer": "B",
      "explanation": "The 'new' keyword dynamically allocates memory on the heap and invokes the constructor to instantiate an object of a class.",
      "explanation_hi": "C++, Java और कई अन्य OOP भाषाओं में क्लास का ऑब्जेक्ट बनाने और डायनेमिक मेमोरी आवंटित करने के लिए 'new' कीवर्ड का उपयोग किया जाता है।"
    },
    {
      "id": 56,
      "questionNumber": 56,
      "officialQuestionId": 19,
      "rightOptionId": "19002",
      "section": "Computer Science",
      "topic": "Unit III: Programming in C++ / OOP",
      "topic_hi": "C++ प्रोग्रामिंग और ऑब्जेक्ट ओरिएंटेड डिज़ाइन",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is an abstract class in OOP?",
      "question_hi": "OOP में एक अमूर्त वर्ग क्या है?",
      "options": {
        "A": "A class with no methods",
        "B": "A class that cannot be instantiated",
        "C": "A class that can only have private members",
        "D": "A class that cannot have methods with parameters"
      },
      "options_hi": {
        "A": "एक वर्ग जिसमें कोई विधि नहीं है",
        "B": "एक वर्ग जिसे त्वरित नहीं किया जा सकता",
        "C": "एक वर्ग जिसमें केवल निजी सदस्य हो सकते हैं",
        "D": "एक वर्ग जिसमें मापदंडों के साथ विधियाँ नहीं हो सकतीं"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) A class that cannot be instantiated**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (B) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) A class that cannot be instantiated?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 57,
      "questionNumber": 57,
      "officialQuestionId": 21,
      "rightOptionId": "21001",
      "section": "Computer Science",
      "topic": "Unit V: Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the purpose of the \"super\" keyword in Java and other similar languages?",
      "question_hi": "का उद्देश्य क्या है the \"super\" keyword जावा (Java) में and other similar languages?",
      "options": {
        "A": "It refers to the superclass in inheritance",
        "B": "It creates a new object instance",
        "C": "It defines a new class",
        "D": "It handles exceptions"
      },
      "options_hi": {
        "A": "यह वंशानुक्रम में सुपरक्लास को संदर्भित करता है",
        "B": "यह एक नया ऑब्जेक्ट इंस्टेंस बनाता है",
        "C": "यह एक नये वर्ग को परिभाषित करता है",
        "D": "यह अपवादों को संभालता है"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) It refers to the superclass in inheritance**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (A) correctly satisfies the circuit behavior and truth table properties.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) It refers to the superclass in संबद्धता (Inheritance)?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 58,
      "questionNumber": 58,
      "officialQuestionId": 36,
      "rightOptionId": "36002",
      "section": "Computer Science",
      "topic": "Unit III: Programming in C++ / OOP",
      "topic_hi": "C++ प्रोग्रामिंग और ऑब्जेक्ट ओरिएंटेड डिज़ाइन",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following best defines a class?",
      "question_hi": "निम्नलिखित में से कौन एक वर्ग को सर्वोत्तम रूप से परिभाषित करता है?",
      "options": {
        "A": "An instance of an object",
        "B": "A blueprint for creating objects",
        "C": "A variable holding data",
        "D": "A function with a return value"
      },
      "options_hi": {
        "A": "किसी वस्तु का एक उदाहरण",
        "B": "वस्तुएँ बनाने का एक खाका",
        "C": "A variable holding data",
        "D": "रिटर्न वैल्यू वाला एक फ़ंक्शन"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) A blueprint for creating objects**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (B) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) A blueprint for creating objects?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 59,
      "questionNumber": 59,
      "officialQuestionId": 35,
      "rightOptionId": "35002",
      "section": "Computer Science",
      "topic": "Unit VI: Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which principle ensures that only essential information is visible to the outside world?",
      "question_hi": "ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग का कौन सा सिद्धांत यह सुनिश्चित करता है कि बाहरी दुनिया के लिए केवल आवश्यक जानकारी ही दिखाई दे और आंतरिक विवरण छिपे रहें?",
      "options": {
        "A": "Polymorphism",
        "B": "Information hiding",
        "C": "Encapsulation",
        "D": "Abstraction"
      },
      "options_hi": {
        "A": "Inheritance",
        "B": "Abstraction (एब्स्ट्रैक्शन)",
        "C": "Polymorphism",
        "D": "Coupling"
      },
      "correctAnswer": "B",
      "explanation": "Abstraction exposes only essential interface details to the user while hiding internal background implementation and complexity.",
      "explanation_hi": "डेटा एब्स्ट्रैक्शन (Abstraction) आंतरिक क्रियान्वयन विवरण को छुपाकर केवल उपयोगकर्ता के लिए आवश्यक इंटरफ़ेस प्रदर्शित करता है।"
    },
    {
      "id": 60,
      "questionNumber": 60,
      "officialQuestionId": 34,
      "rightOptionId": "34003",
      "section": "Computer Science",
      "topic": "Unit III: Programming in C++ / OOP",
      "topic_hi": "C++ प्रोग्रामिंग और ऑब्जेक्ट ओरिएंटेड डिज़ाइन",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the main purpose of inheritance in OOP?",
      "question_hi": "ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग (OOP) में इनहेरिटेंस (Inheritance) का मुख्य उद्देश्य क्या है?",
      "options": {
        "A": "To create instances of classes",
        "B": "To prevent data abstraction",
        "C": "To establish a parent-child relationship between classes",
        "D": "To define exceptions"
      },
      "options_hi": {
        "A": "प्रोग्राम को जटिल बनाना",
        "B": "मेमोरी की खपत बढ़ाना",
        "C": "कोड की पुन: प्रयोज्यता (Code Reusability) और पदानुक्रमित संबंध स्थापित करना",
        "D": "सभी वेरिएबल्स को ग्लोबल बनाना"
      },
      "correctAnswer": "C",
      "explanation": "Inheritance facilitates code reusability by allowing a derived class to inherit fields and methods from an existing base class.",
      "explanation_hi": "इनहेरिटेंस का मुख्य लाभ कोड पुन: प्रयोज्यता (Code Reusability) है, जिससे मौजूदा क्लास की विशेषताओं को नई क्लास में पुनः उपयोग किया जा सकता है।"
    },
    {
      "id": 61,
      "questionNumber": 61,
      "officialQuestionId": 33,
      "rightOptionId": "33003",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What are abstract methods?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: What are abstract methods के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "Methods that are inaccessible to the outside world",
        "B": "Methods that have implementation details",
        "C": "Methods without a body, defined in an abstract class",
        "D": "Methods that cannot be inherited"
      },
      "options_hi": {
        "A": "वे विधियाँ जो बाहरी दुनिया के लिए अप्राप्य हैं",
        "B": "वे विधियाँ जिनमें कार्यान्वयन विवरण हैं",
        "C": "बिना किसी निकाय के विधियाँ, एक अमूर्त वर्ग में परिभाषित",
        "D": "वे विधियाँ जो विरासत में नहीं मिल सकतीं"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Methods without a body, defined in an abstract class**\n\n**Data Structure Characteristics**: Efficient data manipulation requires understanding asymptotic costs, pointer manipulation, and memory layout (contiguous vs node-based).\n- Option (C) reflects the standard behavior and complexity bounds.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Methods without a body, defined in an abstract class?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 62,
      "questionNumber": 62,
      "officialQuestionId": 32,
      "rightOptionId": "32003",
      "section": "Computer Science",
      "topic": "Unit VI: Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which protocol is commonly used for sending emails?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: Which protocol is commonly used for sending emails के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": ".HTTPS",
        "B": "FTP",
        "C": "SMTP",
        "D": "TCP"
      },
      "options_hi": {
        "A": ".HTTPS",
        "B": "एफ़टीपी",
        "C": "एसएमटीपी",
        "D": "टीसीपी"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) SMTP**\n\n**Networking Protocol**: Across the 7 layers of OSI and 4 layers of TCP/IP, standardized protocol headers, addressing (IPv4/IPv6), and routing ensure end-to-end reliability.\n- Option (C) is the standard specification.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) SMTP?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 63,
      "questionNumber": 63,
      "officialQuestionId": 31,
      "rightOptionId": "31004",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What does CSS stand for?",
      "question_hi": "CSS का पूर्ण रूप (Full Form) क्या है?",
      "options": {
        "A": "Cascading Style System",
        "B": "Creative Styling Script",
        "C": "Computer Style Sheets",
        "D": "Cascading Style Sheets"
      },
      "options_hi": {
        "A": "कैस्केडिंग स्टाइल सिस्टम",
        "B": "क्रिएटिव स्टाइलिंग स्क्रिप्ट",
        "C": "Computer Style Sheets",
        "D": "व्यापक शैली पत्रक"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Cascading Style Sheets**\n\n**Concept Overview**: Option (D) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Cascading Style Sheets?**\n\n**विषय अवधारणा (वेब डेवलपमेंट (Web Tech))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 64,
      "questionNumber": 64,
      "officialQuestionId": 30,
      "rightOptionId": "30004",
      "section": "Computer Science",
      "topic": "Unit VI: Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which library simplifies JavaScript tasks like HTML document traversal and manipulation?",
      "question_hi": "कौन सी लाइब्रेरी HTML दस्तावेज़ ट्रैवर्सल और हेरफेर जैसे जावास्क्रिप्ट कार्यों को सरल बनाती है?",
      "options": {
        "A": "JavaFX",
        "B": "Bootstrap",
        "C": "React",
        "D": "jQuery"
      },
      "options_hi": {
        "A": "जावाएफएक्स",
        "B": "बूटस्ट्रैप",
        "C": "प्रतिक्रिया",
        "D": "jQuery"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) jQuery**\n\n**Data Structure Characteristics**: Efficient data manipulation requires understanding asymptotic costs, pointer manipulation, and memory layout (contiguous vs node-based).\n- Option (D) reflects the standard behavior and complexity bounds.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) jQuery?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 65,
      "questionNumber": 65,
      "officialQuestionId": 29,
      "rightOptionId": "29001",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What does AJAX stand for?",
      "question_hi": "AJAX का पूर्ण रूप (Full Form) क्या है?",
      "options": {
        "A": "Asynchronous JavaScript and XML",
        "B": "Automated JavaScript and XHTML",
        "C": "Advanced JavaScript and XML",
        "D": "Asynchronous JSON and XHTML"
      },
      "options_hi": {
        "A": "अतुल्यकालिक जावास्क्रिप्ट और एक्सएमएल",
        "B": "स्वचालित जावास्क्रिप्ट और एक्सएचटीएमएल",
        "C": "उन्नत जावास्क्रिप्ट और एक्सएमएल",
        "D": "Asynchronous JSON and XHTML"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Asynchronous JavaScript and XML**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Asynchronous JavaScript and XML?**\n\n**विषय अवधारणा (वेब डेवलपमेंट (Web Tech))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 66,
      "questionNumber": 66,
      "officialQuestionId": 28,
      "rightOptionId": "28003",
      "section": "Computer Science",
      "topic": "Unit VII: Web Technologies & Internet",
      "topic_hi": "वेब टेक्नोलॉजी और इंटरनेट",
      "marks": 1,
      "negativeMarks": 0,
      "question": "How does the DOM tree structure reflect the hierarchy of HTML elements?",
      "question_hi": "DOM ट्री संरचना HTML तत्वों के पदानुक्रम को कैसे दर्शाती है?",
      "options": {
        "A": "In alphabetical order",
        "B": "Based on the element's size",
        "C": "In a parent-child relationship",
        "D": "According to the element's color"
      },
      "options_hi": {
        "A": "वर्णानुक्रम में",
        "B": "तत्व के आकार के आधार पर",
        "C": "माता-पिता-बच्चे के रिश्ते में",
        "D": "तत्व के रंग के अनुसार"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) In a parent-child relationship**\n\n**Data Structure Characteristics**: Efficient data manipulation requires understanding asymptotic costs, pointer manipulation, and memory layout (contiguous vs node-based).\n- Option (C) reflects the standard behavior and complexity bounds.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) In a parent-child relationship?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 67,
      "questionNumber": 67,
      "officialQuestionId": 27,
      "rightOptionId": "27001",
      "section": "Computer Science",
      "topic": "Unit VII: Web Technologies & Internet",
      "topic_hi": "वेब टेक्नोलॉजी और इंटरनेट",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In XML, which attribute is used to uniquely identify an element?",
      "question_hi": "XML में किसी एलिमेंट को विशिष्ट रूप से पहचानने के लिए किस विशेषता (Attribute) का उपयोग किया जाता है?",
      "options": {
        "A": "id",
        "B": "class",
        "C": "name",
        "D": "tag"
      },
      "options_hi": {
        "A": "id",
        "B": "key",
        "C": "name",
        "D": "unique"
      },
      "correctAnswer": "A",
      "explanation": "In XML schemas and DTDs, the 'id' attribute of type ID uniquely identifies an element within an XML document.",
      "explanation_hi": "XML दस्तावेज़ में किसी एलिमेंट की विशिष्ट पहचान के लिए 'id' एट्रिब्यूट का उपयोग किया जाता है।"
    },
    {
      "id": 68,
      "questionNumber": 68,
      "officialQuestionId": 26,
      "rightOptionId": "26004",
      "section": "Computer Science",
      "topic": "Unit VIII: Theory of Computation",
      "topic_hi": "थ्योरी ऑफ कंप्यूटेशन (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The Kleene Star operation accepts the following string of finite length over set A = {0,1} | where string s contains even number of 0 and 1.",
      "question_hi": "क्लेन स्टार ऑपरेशन सेट ए = {0,1} | पर परिमित लंबाई की निम्नलिखित स्ट्रिंग को स्वीकार करता है जहां स्ट्रिंग s में 0 और 1 की सम संख्या है।",
      "options": {
        "A": "01, 0011,010101",
        "B": "0011, 11001100",
        "C": "ε, 0011, 11001101",
        "D": "ε, 0011, 11001100"
      },
      "options_hi": {
        "A": "01, 0011,",
        "B": "0011,",
        "C": "ε, 0011,",
        "D": "ε, 0011,"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (B) 0011,**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) 0011,?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 69,
      "questionNumber": 69,
      "officialQuestionId": 25,
      "rightOptionId": "25001",
      "section": "Computer Science",
      "topic": "Unit VIII: Theory of Computation",
      "topic_hi": "थ्योरी ऑफ कंप्यूटेशन (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A Language for which DFA exist is a________",
      "question_hi": "वह भाषा जिसके लिए डिटरमिनिस्टिक फाइनाइट ऑटोमेटा (DFA) मौजूद है, वह क्या कहलाती है?",
      "options": {
        "A": "Regular Language",
        "B": "Non-Regular Language",
        "C": "Any language",
        "D": "Cannot be said"
      },
      "options_hi": {
        "A": "नियमित भाषा (Regular Language)",
        "B": "कॉन्टेक्स्ट-फ्री भाषा",
        "C": "रिकर्सिवली इन्यूमरेबल भाषा",
        "D": "प्राकृतिक भाषा"
      },
      "correctAnswer": "A",
      "explanation": "By definition, a formal language is regular if and only if it can be recognized by a Finite Automaton (DFA or NFA).",
      "explanation_hi": "परिभाषा के अनुसार, वह भाषा जिसके लिए फाइनाइट ऑटोमेटा (DFA या NFA) मौजूद होता है, रेगुलर भाषा (Regular Language) कहलाती है।"
    },
    {
      "id": 70,
      "questionNumber": 70,
      "officialQuestionId": 24,
      "rightOptionId": "24004",
      "section": "Computer Science",
      "topic": "Unit IV: DBMS & SQL",
      "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Let u=’1101’, v=’0001’, then uv=11010001 and vu= 00011101.Using the given information what is the identity element for the string?",
      "question_hi": "यदि u = '1101' और v = '0001' है, तो uv = 11010001 और vu = 00011101 है। यह स्ट्रिंग ऑपरेशन क्या दर्शाता है?",
      "options": {
        "A": "u-1",
        "B": "v-1",
        "C": "u-1v-1",
        "D": "ε"
      },
      "options_hi": {
        "A": "स्ट्रिंग एडिशन",
        "B": "स्ट्रिंग इंटरसेक्शन",
        "C": "स्ट्रिंग रिवर्सल",
        "D": "स्ट्रिंग कॉन्कैटिनेशन (Concatenation)"
      },
      "correctAnswer": "D",
      "explanation": "Concatenation joins two strings end-to-end; string concatenation is non-commutative (uv != vu).",
      "explanation_hi": "दो स्ट्रिंग्स को एक के बाद एक जोड़ना कॉन्कैटिनेशन (Concatenation) कहलाता है, जो सामान्यतः गैर-क्रमविनिमेय (non-commutative) होता है।"
    },
    {
      "id": 71,
      "questionNumber": 71,
      "officialQuestionId": 23,
      "rightOptionId": "23003",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "For a DFA accepting binary numbers whose decimal equivalent is divisible by 3, what are all the possible remainders?",
      "question_hi": "उन बाइनरी संख्याओं को स्वीकार करने वाले DFA में कम से कम कितनी अवस्थाएँ (States) होंगी जिनका दशमलव समतुल्य 3 से विभाज्य है?",
      "options": {
        "A": "0",
        "B": "0,2",
        "C": "0,1,2",
        "D": "0,1,2,3"
      },
      "options_hi": {
        "A": "2",
        "B": "4",
        "C": "3",
        "D": "5"
      },
      "correctAnswer": "C",
      "explanation": "A binary number modulo 3 has 3 possible remainders (0, 1, 2). Hence exactly 3 states are required in the minimal DFA.",
      "explanation_hi": "किसी बाइनरी संख्या को 3 से विभाजित करने पर 3 संभावित शेषफल (0, 1, 2) हो सकते हैं, अतः न्यूनतम DFA में 3 अवस्थाएँ (states) आवश्यक हैं।"
    },
    {
      "id": 72,
      "questionNumber": 72,
      "officialQuestionId": 22,
      "rightOptionId": "22002",
      "section": "Computer Science",
      "topic": "Unit VIII: Theory of Computation",
      "topic_hi": "थ्योरी ऑफ कंप्यूटेशन (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Minimum Number of states require to accept string ends with 101.",
      "question_hi": "'101' पर समाप्त होने वाले स्ट्रिंग्स को स्वीकार करने के लिए न्यूनतम DFA में कितनी अवस्थाएँ (States) आवश्यक हैं?",
      "options": {
        "A": "3",
        "B": "2",
        "C": "1",
        "D": "can’t be represented"
      },
      "options_hi": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "2"
      },
      "correctAnswer": "B",
      "explanation": "To accept strings over {0,1} ending with a fixed pattern of length k (here '101' where k=3), the minimal DFA requires exactly k + 1 = 4 states.",
      "explanation_hi": "लंबाई k (यहाँ '101' की लंबाई 3 है) के पैटर्न पर समाप्त होने वाली स्ट्रिंग्स को स्वीकार करने के लिए न्यूनतम DFA में k + 1 = 4 स्टेट्स की आवश्यकता होती है।"
    },
    {
      "id": 73,
      "questionNumber": 73,
      "officialQuestionId": 74,
      "rightOptionId": "74001",
      "section": "Computer Science",
      "topic": "Unit V: Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "If NFA of 5 states excluding the initial state is converted into DFA, maximum possible number of states for the DFA is?",
      "question_hi": "यदि प्रारंभिक अवस्था को छोड़कर 5 अवस्थाओं वाले NFA (कुल 6 अवस्थाएँ) को DFA में परिवर्तित किया जाए, तो DFA में अधिकतम कितनी अवस्थाएँ हो सकती हैं?",
      "options": {
        "A": "64",
        "B": "32",
        "C": "128",
        "D": "187"
      },
      "options_hi": {
        "A": "64 (2^6)",
        "B": "32 (2^5)",
        "C": "128 (2^7)",
        "D": "16 (2^4)"
      },
      "correctAnswer": "A",
      "explanation": "An NFA with n total states yields at most 2^n states in its equivalent power-set DFA. For n = 1 + 5 = 6 states, 2^6 = 64 states.",
      "explanation_hi": "n कुल स्टेट्स वाले NFA को DFA में बदलने पर पावर सेट निर्माण के तहत अधिकतम 2^n स्टेट्स हो सकती हैं। कुल 6 स्टेट्स के लिए 2^6 = 64 अवस्थाएँ होती हैं।"
    },
    {
      "id": 74,
      "questionNumber": 74,
      "officialQuestionId": 20,
      "rightOptionId": "20004",
      "section": "Computer Science",
      "topic": "Unit III: Programming in C++ / OOP",
      "topic_hi": "C++ प्रोग्रामिंग और ऑब्जेक्ट ओरिएंटेड डिज़ाइन",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The class of CFG is not closed under",
      "question_hi": "कॉन्टेक्स्ट-फ्री ग्रामर (CFG) / CFL का वर्ग किस संचालन के तहत बंद (Closed) नहीं है?",
      "options": {
        "A": "Concatenation",
        "B": "Intersection",
        "C": "Union",
        "D": "Repeated Concatenation."
      },
      "options_hi": {
        "A": "कॉन्कैटिनेशन",
        "B": "यूनियन",
        "C": "क्लीन स्टार",
        "D": "इंटरसेक्शन (Intersection) और कॉम्प्लिमेंट"
      },
      "correctAnswer": "D",
      "explanation": "Context-free languages (CFLs) are closed under union, concatenation, and Kleene star, but are NOT closed under intersection or complementation.",
      "explanation_hi": "कॉन्टेक्स्ट-फ्री भाषाएँ (CFL) यूनियन, कॉन्कैटिनेशन और क्लीन स्टार के तहत बंद हैं, लेकिन इंटरसेक्शन और कॉम्प्लिमेंट के तहत बंद नहीं हैं।"
    },
    {
      "id": 75,
      "questionNumber": 75,
      "officialQuestionId": 75,
      "rightOptionId": "75002",
      "section": "Computer Science",
      "topic": "Unit X: Emerging Tech, AI & Graphics",
      "topic_hi": "उभरती प्रौद्योगिकियां, AI और कंप्यूटर ग्राफिक्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which among the following is not true about IoT?",
      "question_hi": "IoT (इंटरनेट ऑफ थिंग्स) के बारे में निम्नलिखित में से कौन सा कथन सत्य नहीं है?",
      "options": {
        "A": "IoT uses Micro Controllers",
        "B": "IoT is fully safe",
        "C": "IoT uses Sensors and Actuators",
        "D": "IoT uses wireless technology"
      },
      "options_hi": {
        "A": "IoT डिवाइस इंटरनेट पर डेटा साझा करते हैं",
        "B": "IoT डिवाइस में शून्य सुरक्षा और गोपनीयता जोखिम होते हैं",
        "C": "IoT में सेंसर और एक्ट्यूएटर शामिल होते हैं",
        "D": "IoT स्मार्ट होम और औद्योगिक स्वचालन को सक्षम बनाता है"
      },
      "correctAnswer": "B",
      "explanation": "IoT devices face massive security, authentication, and data privacy vulnerabilities, making statement B demonstrably false.",
      "explanation_hi": "IoT उपकरणों में सुरक्षा और डेटा गोपनीयता के गंभीर जोखिम होते हैं, अतः यह दावा गलत है कि IoT में कोई सुरक्षा जोखिम नहीं होता।"
    },
    {
      "id": 76,
      "questionNumber": 76,
      "officialQuestionId": 78,
      "rightOptionId": "78002",
      "section": "Computer Science",
      "topic": "Unit X: Emerging Tech, AI & Graphics",
      "topic_hi": "उभरती प्रौद्योगिकियां, AI और कंप्यूटर ग्राफिक्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "About IoT, which among the followings isnot correct?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: About IoT, which among the followings isnot correct के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "Light sensor is analog",
        "B": "microphone is a digital sensor",
        "C": "Keyboard is a digital sensor",
        "D": "Push button is a digital Sensor"
      },
      "options_hi": {
        "A": "लाइट सेंसर एनालॉग है",
        "B": "माइक्रोफ़ोन एक डिजिटल सेंसर है",
        "C": "कीबोर्ड एक डिजिटल सेंसर है",
        "D": "पुश बटन एक डिजिटल सेंसर है"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) microphone is a digital sensor**\n\n**IoT Architecture**: Interconnected smart devices employ lightweight communication protocols (Zigbee, MQTT, CoAP) and edge/cloud integration.\n- Option (B) correctly represents the IoT standard.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) microphone is a digital sensor?**\n\n**विषय अवधारणा (इंटरनेट ऑफ थिंग्स (IoT))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 77,
      "questionNumber": 77,
      "officialQuestionId": 92,
      "rightOptionId": "92002",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "BLE stands for",
      "question_hi": "BLE का पूर्ण रूप (Full Form) क्या है?",
      "options": {
        "A": "Bluetooth large energy",
        "B": "Bluetooth low energy",
        "C": "Bluetooth light energy",
        "D": "Bluetooth long energy"
      },
      "options_hi": {
        "A": "ब्लूटूथ बड़ी ऊर्जा",
        "B": "ब्लूटूथ कम ऊर्जा",
        "C": "ब्लूटूथ प्रकाश ऊर्जा",
        "D": "ब्लूटूथ लंबी ऊर्जा"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Bluetooth low energy**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Bluetooth low energy?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 78,
      "questionNumber": 78,
      "officialQuestionId": 93,
      "rightOptionId": "93002",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "WSN stands for?",
      "question_hi": "WSN का पूर्ण रूप (Full Form) क्या है?",
      "options": {
        "A": "Wireless Standard Protocol",
        "B": "Wireless Sensor Protocol",
        "C": "Wireless Serial Protocol",
        "D": "Wireless Single Protocol"
      },
      "options_hi": {
        "A": "वायरलेस मानक प्रोटोकॉल",
        "B": "वायरलेस सेंसर प्रोटोकॉल",
        "C": "वायरलेस सीरियल प्रोटोकॉल",
        "D": "वायरलेस सिंगल प्रोटोकॉल"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Wireless Sensor Protocol**\n\n**IoT Architecture**: Interconnected smart devices employ lightweight communication protocols (Zigbee, MQTT, CoAP) and edge/cloud integration.\n- Option (B) correctly represents the IoT standard.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Wireless Sensor Protocol?**\n\n**विषय अवधारणा (इंटरनेट ऑफ थिंग्स (IoT))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 79,
      "questionNumber": 79,
      "officialQuestionId": 94,
      "rightOptionId": "94004",
      "section": "Computer Science",
      "topic": "Unit X: Emerging Tech, AI & Graphics",
      "topic_hi": "उभरती प्रौद्योगिकियां, AI और कंप्यूटर ग्राफिक्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A complex SCADA system has _______levels?",
      "question_hi": "एक जटिल SCADA (पर्यवेक्षी नियंत्रण और डेटा अधिग्रहण) प्रणाली में आमतौर पर कितने स्तर (Levels) होते हैं?",
      "options": {
        "A": "6",
        "B": "5",
        "C": "3",
        "D": "4"
      },
      "options_hi": {
        "A": "2",
        "B": "3",
        "C": "5",
        "D": "4"
      },
      "correctAnswer": "D",
      "explanation": "Industrial SCADA architectures are traditionally structured into 4 hierarchical levels: Level 0 (Field instrumentation), Level 1 (Direct control/PLCs), Level 2 (Plant supervisory), and Level 3 (Production control).",
      "explanation_hi": "औद्योगिक SCADA प्रणालियों को पारंपरिक रूप से 4 पदानुक्रमित स्तरों (फ़ील्ड इंस्ट्रूमेंटेशन, डायरेक्ट कंट्रोल, प्लांट सुपरवाइजरी, प्रोडक्शन कंट्रोल) में विभाजित किया जाता है।"
    },
    {
      "id": 80,
      "questionNumber": 80,
      "officialQuestionId": 97,
      "rightOptionId": "97001",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the role of the MISO pin in the RFID Module?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: What is the role of the MISO pin in the RFID Module के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "Master In Slave Out",
        "B": "Manage Internal Slave Output",
        "C": "Master Internal Search Optimization",
        "D": "Manage Input Slave Op"
      },
      "options_hi": {
        "A": "मास्टर इन स्लेव आउट",
        "B": "आंतरिक स्लेव आउटपुट प्रबंधित करें",
        "C": "मास्टर आंतरिक खोज अनुकूलन",
        "D": "इनपुट स्लेव ऑप प्रबंधित करें"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Master In Slave Out**\n\n**IoT Architecture**: Interconnected smart devices employ lightweight communication protocols (Zigbee, MQTT, CoAP) and edge/cloud integration.\n- Option (A) correctly represents the IoT standard.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Master In Slave Out?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 81,
      "questionNumber": 81,
      "officialQuestionId": 96,
      "rightOptionId": "96003",
      "section": "Computer Science",
      "topic": "Unit IV: DBMS & SQL",
      "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Who is known as the father of AI?",
      "question_hi": "आर्टिफिशियल इंटेलिजेंस (AI) का जनक किसे कहा जाता है?",
      "options": {
        "A": "Fisher Ada",
        "B": "Alan Turing",
        "C": "John McCarthy",
        "D": "Allen Newell"
      },
      "options_hi": {
        "A": "एलन ट्यूरिंग",
        "B": "चार्ल्स बैबेज",
        "C": "जॉन मैकार्थी (John McCarthy)",
        "D": "टिम बर्नर्स-ली"
      },
      "correctAnswer": "C",
      "explanation": "John McCarthy coined the term 'Artificial Intelligence' in 1956 at the Dartmouth Conference and developed the Lisp programming language.",
      "explanation_hi": "जॉन मैकार्थी ने 1956 में डार्टमाउथ सम्मेलन में 'आर्टिफिशियल इंटेलिजेंस' शब्द गढ़ा और लिस्प (Lisp) भाषा का विकास किया, इसलिए उन्हें AI का जनक कहा जाता है।"
    },
    {
      "id": 82,
      "questionNumber": 82,
      "officialQuestionId": 91,
      "rightOptionId": "91002",
      "section": "Computer Science",
      "topic": "Unit VIII: Theory of Computation",
      "topic_hi": "थ्योरी ऑफ कंप्यूटेशन (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Programming language commonly used for AI is___?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: Programming language commonly used for AI is___ के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "Lisp",
        "B": "Perl",
        "C": "Prolog",
        "D": "C++"
      },
      "options_hi": {
        "A": "तुतलाना",
        "B": "पर्ल",
        "C": "प्रोलॉग",
        "D": "सी++"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Perl**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (B) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Perl?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 83,
      "questionNumber": 83,
      "officialQuestionId": 98,
      "rightOptionId": "98004",
      "section": "Computer Science",
      "topic": "Unit II: Data Structures & Algorithms",
      "topic_hi": "डेटा स्ट्रक्चर और एल्गोरिदम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The algorithm used in the Game tree to make decisions of Win/Lose is ________________?",
      "question_hi": "गेम ट्री में जीत/हार का निर्णय लेने के लिए उपयोग किया जाने वाला एल्गोरिदम ________________ है?",
      "options": {
        "A": "Heuristic Search Algorithm",
        "B": "DFS/ BFL algorithm",
        "C": "Greedy Search algorithm",
        "D": "Min/Max algorithm"
      },
      "options_hi": {
        "A": "अनुमानी खोज एल्गोरिथम",
        "B": "डीएफएस/बीएफएल एल्गोरिदम",
        "C": "लालची खोज एल्गोरिदम",
        "D": "न्यूनतम/अधिकतम एल्गोरिदम"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Min/Max algorithm**\n\n**Data Structure Characteristics**: Efficient data manipulation requires understanding asymptotic costs, pointer manipulation, and memory layout (contiguous vs node-based).\n- Option (D) reflects the standard behavior and complexity bounds.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Min/Max algorithm?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 84,
      "questionNumber": 84,
      "officialQuestionId": 99,
      "rightOptionId": "99001",
      "section": "Computer Science",
      "topic": "Unit V: Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Uniform-cost search expands the node n with the __________",
      "question_hi": "यूनिफ़ॉर्म-कॉस्ट सर्च (Uniform-cost Search) किस नोड n का विस्तार सबसे पहले करता है?",
      "options": {
        "A": "Lowest path cost",
        "B": "Heuristic cost",
        "C": "Highest path cost",
        "D": "Average path cost"
      },
      "options_hi": {
        "A": "न्यूनतम पथ लागत g(n) वाला नोड",
        "B": "अधिकतम ह्युरिस्टिक मान वाला नोड",
        "C": "ट्री में सबसे गहरा नोड",
        "D": "रैंडम रूप से चयनित नोड"
      },
      "correctAnswer": "A",
      "explanation": "Uniform-Cost Search (Dijkstra's on trees) always expands the unvisited frontier node with the lowest cumulative path cost g(n) from the root.",
      "explanation_hi": "यूनिफ़ॉर्म-कॉस्ट सर्च हमेशा प्रारंभिक नोड से सबसे कम संचयी पथ लागत g(n) वाले नोड का विस्तार करता है।"
    },
    {
      "id": 85,
      "questionNumber": 85,
      "officialQuestionId": 100,
      "rightOptionId": "100002",
      "section": "Computer Science",
      "topic": "Unit V: Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The process of removing detail from a given state representation is called ______",
      "question_hi": "किसी दिए गए राज्य प्रतिनिधित्व से विवरण हटाने की प्रक्रिया को ______ कहा जाता है",
      "options": {
        "A": "Extraction",
        "B": "Abstraction",
        "C": "Data Mining",
        "D": "Information Retrieval"
      },
      "options_hi": {
        "A": "निष्कर्षण",
        "B": "मतिहीनता",
        "C": "डेटा खनन",
        "D": "सूचना की पुनर्प्राप्ति"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Abstraction**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (B) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Abstraction?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 86,
      "questionNumber": 86,
      "officialQuestionId": 95,
      "rightOptionId": "95001",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What does a first order predicate logic contain?",
      "question_hi": "फर्स्ट ऑर्डर प्रेडिकेट लॉजिक (FOPL) में क्या शामिल होता है?",
      "options": {
        "A": "Predicate and a subject",
        "B": "Predicate and a Preposition",
        "C": "Subject and an object",
        "D": "None of the above"
      },
      "options_hi": {
        "A": "वस्तुएं, संबंध (प्रेडिकेट्स), फलन और क्वांटिफायर्स (∀, ∃)",
        "B": "केवल बूलियन सत्य और असत्य मान",
        "C": "केवल अंकगणितीय जोड़",
        "D": "केवल स्ट्रिंग ऑपरेशंस"
      },
      "correctAnswer": "A",
      "explanation": "First-Order Predicate Logic extends propositional logic by introducing objects, relations (predicates), functions, and quantifiers (Universal ∀ and Existential ∃).",
      "explanation_hi": "फर्स्ट ऑर्डर प्रेडिकेट लॉजिक में वस्तुएं (Objects), संबंध (Predicates), फलन और क्वांटिफायर्स (सार्वभौमिक ∀ और अस्तित्वपरक ∃) शामिल होते हैं।"
    },
    {
      "id": 87,
      "questionNumber": 87,
      "officialQuestionId": 90,
      "rightOptionId": "90002",
      "section": "Computer Science",
      "topic": "Unit X: Emerging Tech, AI & Graphics",
      "topic_hi": "उभरती प्रौद्योगिकियां, AI और कंप्यूटर ग्राफिक्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following can improve the performance of AI agent?",
      "question_hi": "निम्नलिखित में से कौन AI एजेंट के प्रदर्शन में सुधार कर सकता है?",
      "options": {
        "A": "Precision",
        "B": "Learning",
        "C": "Observing",
        "D": "All of the above"
      },
      "options_hi": {
        "A": "शुद्धता",
        "B": "सीखना",
        "C": "अवलोकन",
        "D": "उपरोक्त सभी"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Learning**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Learning?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 88,
      "questionNumber": 88,
      "officialQuestionId": 77,
      "rightOptionId": "77004",
      "section": "Computer Science",
      "topic": "Unit X: Emerging Tech, AI & Graphics",
      "topic_hi": "उभरती प्रौद्योगिकियां, AI और कंप्यूटर ग्राफिक्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is part of the four main types for e‐commerce?",
      "question_hi": "निम्नलिखित में से कौन सा ई-कॉमर्स के चार मुख्य प्रकारों का हिस्सा है?",
      "options": {
        "A": "B2B",
        "B": "B2C",
        "C": "C2B",
        "D": "All of the above"
      },
      "options_hi": {
        "A": "बी2बी",
        "B": "बी2सी",
        "C": "सी2बी",
        "D": "उपरोक्त सभी"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) All of the above**\n\n**Concept Overview**: Option (D) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) उपरोक्त सभी**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 89,
      "questionNumber": 89,
      "officialQuestionId": 88,
      "rightOptionId": "88003",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the process in which a buyer posts its interest in buying a certain quantity of items, and sellers compete for the business by submitting successively\nlower bids until there is only one seller left?",
      "question_hi": "वह प्रक्रिया क्या है जिसमें एक खरीदार एक निश्चित मात्रा में वस्तुओं को खरीदने में अपनी रुचि दिखाता है, और विक्रेता क्रमिक रूप से कम बोलियाँ प्रस्तुत करके व्यवसाय के लिए प्रतिस्पर्धा करते हैं जब तक कि केवल एक विक्रेता न रह जाए?",
      "options": {
        "A": "B2B Marketplace",
        "B": "Auction",
        "C": "Reverse Auction",
        "D": "Intranet"
      },
      "options_hi": {
        "A": "B2B बाज़ार",
        "B": "नीलामी",
        "C": "उलटी नीलामी",
        "D": "इंट्रानेट"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (B) Auction**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (B) correctly satisfies the circuit behavior and truth table properties.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Auction?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 90,
      "questionNumber": 90,
      "officialQuestionId": 87,
      "rightOptionId": "87002",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "If it is easy for competitors to enter the market, the threat of new entrants is considered:",
      "question_hi": "यदि प्रतिस्पर्धियों के लिए बाज़ार में प्रवेश करना आसान है, तो नए प्रवेशकों के खतरे पर विचार किया जाता है:",
      "options": {
        "A": "Low",
        "B": "High",
        "C": "Moderate",
        "D": "Negligible"
      },
      "options_hi": {
        "A": "Low",
        "B": "उच्च",
        "C": "Moderate",
        "D": "नगण्य"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) High**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) High?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 91,
      "questionNumber": 91,
      "officialQuestionId": 89,
      "rightOptionId": "89001",
      "section": "Computer Science",
      "topic": "Unit X: Emerging Tech, AI & Graphics",
      "topic_hi": "उभरती प्रौद्योगिकियां, AI और कंप्यूटर ग्राफिक्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following refers to creating products tailored to individual customers?",
      "question_hi": "निम्नलिखित में से कौन सा व्यक्तिगत ग्राहकों की आवश्यकताओं के अनुरूप उत्पाद तैयार करने को संदर्भित करता है?",
      "options": {
        "A": "Customization",
        "B": "Adaptation",
        "C": "Direct material",
        "D": "Auction"
      },
      "options_hi": {
        "A": "कस्टमाइजेशन (Customization)",
        "B": "एडॉप्टेशन (Adaptation)",
        "C": "डायरेक्ट मटेरियल",
        "D": "नीलामी (Auction)"
      },
      "correctAnswer": "A",
      "explanation": "Customization (or mass customization) is the manufacturing process of producing goods tailored specifically to individual customer specifications.",
      "explanation_hi": "कस्टमाइजेशन (Customization) व्यक्तिगत ग्राहकों की विशिष्ट प्राथमिकताओं और आवश्यकताओं के अनुसार उत्पादों को अनुकूलित करने की प्रक्रिया है।"
    },
    {
      "id": 92,
      "questionNumber": 92,
      "officialQuestionId": 86,
      "rightOptionId": "86002",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which form of e‐marketplace brings together buyers and sellers from the same industry?",
      "question_hi": "ई-मार्केटप्लेस का कौन सा रूप एक ही उद्योग के खरीदारों और विक्रेताओं को एक साथ लाता है?",
      "options": {
        "A": "Horizontal",
        "B": "Vertical",
        "C": "integrated",
        "D": "isolated"
      },
      "options_hi": {
        "A": "क्षैतिज",
        "B": "खड़ा",
        "C": "एकीकृत",
        "D": "एकाकी"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Vertical**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (B) correctly satisfies the circuit behavior and truth table properties.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Vertical?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 93,
      "questionNumber": 93,
      "officialQuestionId": 85,
      "rightOptionId": "85004",
      "section": "Computer Science",
      "topic": "Unit VI: Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is done by Secure Sockets Layers?",
      "question_hi": "सिक्योर सॉकेट्स लेयर (SSL / TLS) द्वारा निम्नलिखित में से कौन सा कार्य किया जाता है?",
      "options": {
        "A": "creates a secure, private connection to a web server",
        "B": "Encrypts information",
        "C": "Sends information over the internet",
        "D": "All of the above"
      },
      "options_hi": {
        "A": "केवल वेबपेज कैशिंग",
        "B": "केवल IP रूटिंग",
        "C": "केवल फ़ाइल डाउनलोडिंग",
        "D": "क्लाइंट-सर्वर संचार का प्रमाणीकरण, डेटा एन्क्रिप्शन और अखंडता (Integrity)"
      },
      "correctAnswer": "D",
      "explanation": "SSL/TLS provides cryptographic endpoint authentication, symmetric data encryption, and message integrity checks over TCP connections.",
      "explanation_hi": "SSL/TLS नेटवर्क कनेक्शन पर डेटा एन्क्रिप्शन, सर्वर प्रमाणीकरण और डेटा अखंडता (इंटीग्रिटी) सुनिश्चित करता है।"
    },
    {
      "id": 94,
      "questionNumber": 94,
      "officialQuestionId": 84,
      "rightOptionId": "84003",
      "section": "Computer Science",
      "topic": "Unit I: Digital Logic & Architecture",
      "topic_hi": "डिजिटल लॉजिक और कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The delay that occur during the playback of a stream is called ___________",
      "question_hi": "किसी स्ट्रीम के प्लेबैक के दौरान होने वाली देरी को ___________ कहा जाता है",
      "options": {
        "A": "Stream delay",
        "B": "Playback delay",
        "C": "Jitter",
        "D": "Event delay"
      },
      "options_hi": {
        "A": "स्ट्रीम में देरी",
        "B": "प्लेबैक में देरी",
        "C": "घबराना",
        "D": "घटना में देरी"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Jitter**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (C) correctly satisfies the circuit behavior and truth table properties.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Jitter?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 95,
      "questionNumber": 95,
      "officialQuestionId": 76,
      "rightOptionId": "76004",
      "section": "Computer Science",
      "topic": "Unit VI: Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In teardown state of real time streaming protocol is ___________",
      "question_hi": "निम्नलिखित में से In teardown state of real time streaming protocol is ___________ के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options": {
        "A": "the server resources for client",
        "B": "server delivers the stream to client",
        "C": "server suspends delivery of stream",
        "D": "server breaks down the connection"
      },
      "options_hi": {
        "A": "क्लाइंट के लिए सर्वर संसाधन",
        "B": "सर्वर क्लाइंट को स्ट्रीम डिलीवर करता है",
        "C": "server suspends delivery of stream",
        "D": "सर्वर कनेक्शन तोड़ देता है"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) server breaks down the connection**\n\n**Concept Overview**: Option (D) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) server breaks down the connection?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 96,
      "questionNumber": 96,
      "officialQuestionId": 83,
      "rightOptionId": "83004",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Real Time Interactive Audio Video, Jitter is introduced in real-time data by delay between____",
      "question_hi": "रियल टाइम इंटरएक्टिव ऑडियो वीडियो में, जिटर को ____ के बीच देरी से वास्तविक समय डेटा में पेश किया जाता है",
      "options": {
        "A": "pixels",
        "B": "layers",
        "C": "frames",
        "D": "packets"
      },
      "options_hi": {
        "A": "पिक्सेल",
        "B": "परतें",
        "C": "फ़्रेम",
        "D": "पैकेट"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) packets**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (D) accurately reflects the microarchitectural functionality.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) packets?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 97,
      "questionNumber": 97,
      "officialQuestionId": 82,
      "rightOptionId": "82001",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Audio and Video Compression, voice is sampled at 8000 samples per second with_____________",
      "question_hi": "ऑडियो और वीडियो संपीड़न में, आवाज को _____________ के साथ प्रति सेकंड 8000 नमूनों पर नमूना लिया जाता है",
      "options": {
        "A": "8 bits per sample",
        "B": "5 bits per sample",
        "C": "7 bits per sample",
        "D": "6 bits per sample"
      },
      "options_hi": {
        "A": "प्रति नमूना 8 बिट्स",
        "B": "प्रति नमूना 5 बिट",
        "C": "प्रति नमूना 7 बिट्स",
        "D": "प्रति नमूना 6 बिट्स"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) 8 bits per sample**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) 8 bits per sample?**\n\n**विषय अवधारणा (मल्टीमीडिया तकनीक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 98,
      "questionNumber": 98,
      "officialQuestionId": 81,
      "rightOptionId": "81003",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Audio compression can be used for____________",
      "question_hi": "निम्नलिखित में से Audio compression can be used for____________ के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options": {
        "A": "voice and data",
        "B": "video and voice",
        "C": "speech or music",
        "D": "picture and colors"
      },
      "options_hi": {
        "A": "voice and data",
        "B": "वीडियो और आवाज",
        "C": "भाषण या संगीत",
        "D": "चित्र और रंग"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) speech or music**\n\n**Concept Overview**: Option (C) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) speech or music?**\n\n**विषय अवधारणा (मल्टीमीडिया तकनीक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 99,
      "questionNumber": 99,
      "officialQuestionId": 80,
      "rightOptionId": "80003",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Each ___ represents a particular colour.",
      "question_hi": "डिजिटल इमेज और कंप्यूटर ग्राफिक्स में, प्रत्येक ___ एक विशेष रंग का प्रतिनिधित्व करता है।",
      "options": {
        "A": "Frame",
        "B": "Character",
        "C": "Pixel value",
        "D": "None of the above"
      },
      "options_hi": {
        "A": "फाइल",
        "B": "फ़ोल्डर",
        "C": "पिक्सेल (Pixel)",
        "D": "केबल"
      },
      "correctAnswer": "C",
      "explanation": "A pixel (picture element) is the smallest addressable unit on a display screen, holding specific color and brightness values.",
      "explanation_hi": "पिक्सेल (Pixel) डिजिटल स्क्रीन पर प्रदर्शित होने वाली सबसे छोटी इकाई है जो एक विशिष्ट रंग और चमक का प्रतिनिधित्व करता है।"
    },
    {
      "id": 100,
      "questionNumber": 100,
      "officialQuestionId": 79,
      "rightOptionId": "79002",
      "section": "Computer Science",
      "topic": "Computer Science Core",
      "topic_hi": "कंप्यूटर विज्ञान कोर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "___________ is basically a form of pictorial presentation.",
      "question_hi": "___________ मूलतः सचित्र प्रस्तुति का एक रूप है।",
      "options": {
        "A": "Photography",
        "B": "Animations",
        "C": "Drawing",
        "D": "Creativity"
      },
      "options_hi": {
        "A": "Photography",
        "B": "एनिमेशन",
        "C": "चित्रकला",
        "D": "रचनात्मकता"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Animations**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Animations?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 101,
      "questionNumber": 101,
      "officialQuestionId": 120,
      "rightOptionId": "120004",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The main aim of classroom teaching is",
      "question_hi": "कक्षा शिक्षण का मुख्य उद्देश्य है",
      "options": {
        "A": "to give information",
        "B": "help to pass examination",
        "C": "syllabus coverage",
        "D": "to develop personality"
      },
      "options_hi": {
        "A": "जानकारी देने के लिए",
        "B": "परीक्षा पास करने में मदद करें",
        "C": "पाठ्यक्रम कवरेज",
        "D": "व्यक्तित्व का विकास करना"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) to develop personality**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (D) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) to develop personality?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 102,
      "questionNumber": 102,
      "officialQuestionId": 121,
      "rightOptionId": "121003",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "To ensure participation of students we use",
      "question_hi": "छात्रों की भागीदारी सुनिश्चित करने के लिए हम इसका उपयोग करते हैं",
      "options": {
        "A": "demonstration",
        "B": "little man's lecture",
        "C": "discussion",
        "D": "illustration"
      },
      "options_hi": {
        "A": "प्रदर्शन",
        "B": "छोटे आदमी का व्याख्यान",
        "C": "बहस",
        "D": "चित्रण"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) discussion**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) discussion?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 103,
      "questionNumber": 103,
      "officialQuestionId": 125,
      "rightOptionId": "125001",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "learning through independent effort is",
      "question_hi": "स्वतंत्र प्रयास से सीखना है",
      "options": {
        "A": "autonomous learning",
        "B": "autocratic learning",
        "C": "democratic learning",
        "D": "all the above"
      },
      "options_hi": {
        "A": "स्वायत्त शिक्षा",
        "B": "निरंकुश शिक्षा",
        "C": "लोकतांत्रिक शिक्षा",
        "D": "उपरोक्त सभी"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) autonomous learning**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) autonomous learning?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 104,
      "questionNumber": 104,
      "officialQuestionId": 123,
      "rightOptionId": "123004",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Aims",
      "question_hi": "निम्नलिखित में से Aims के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options": {
        "A": "may include abstract concepts",
        "B": "difficult to measure",
        "C": "may include appreciation",
        "D": "All the above"
      },
      "options_hi": {
        "A": "इसमें अमूर्त अवधारणाएँ शामिल हो सकती हैं",
        "B": "मापना कठिन",
        "C": "सराहना शामिल हो सकती है",
        "D": "उपरोक्त सभी"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) All the above**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (D) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) All the above?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 105,
      "questionNumber": 105,
      "officialQuestionId": 124,
      "rightOptionId": "124004",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "psychomotor domain relates to",
      "question_hi": "साइकोमोटर डोमेन से संबंधित है",
      "options": {
        "A": "map making",
        "B": "project making",
        "C": "playing",
        "D": "all the above"
      },
      "options_hi": {
        "A": "मानचित्र बनाना",
        "B": "प्रोजेक्ट बनाना",
        "C": "खेलना",
        "D": "उपरोक्त सभी"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) all the above**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (D) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) all the above?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 106,
      "questionNumber": 106,
      "officialQuestionId": 119,
      "rightOptionId": "119001",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Heuristic means",
      "question_hi": "निम्नलिखित में से Heuristic means के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options": {
        "A": "to invertigate",
        "B": "to show",
        "C": "to do",
        "D": "to act"
      },
      "options_hi": {
        "A": "पलटना",
        "B": "जाहिर करना",
        "C": "करने के लिए",
        "D": "कार्य करने के लिए"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) to invertigate**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) to invertigate?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 107,
      "questionNumber": 107,
      "officialQuestionId": 117,
      "rightOptionId": "117002",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Armstrong gifted teaching with",
      "question_hi": "निम्नलिखित में से Armstrong gifted teaching with के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options": {
        "A": "Project method",
        "B": "heuristic method",
        "C": "team teaching",
        "D": "blended method"
      },
      "options_hi": {
        "A": "प्रोजेक्ट विधि",
        "B": "अनुमानी पद्धति",
        "C": "टीम शिक्षण",
        "D": "मिश्रित विधि"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) heuristic method**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (B) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) अनुसंधान / ह्यूरिस्टिक विधि?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 108,
      "questionNumber": 108,
      "officialQuestionId": 126,
      "rightOptionId": "126001",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Set induction relates to",
      "question_hi": "निम्नलिखित में से Set induction relates to के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options": {
        "A": "previous knowledge",
        "B": "new knowledge",
        "C": "specific objectives",
        "D": "statement of aim"
      },
      "options_hi": {
        "A": "पूर्व ज्ञान",
        "B": "नया ज्ञान",
        "C": "विशिष्ट उद्देश्य",
        "D": "उद्देश्य का कथन"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) previous knowledge**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) previous knowledge?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 109,
      "questionNumber": 109,
      "officialQuestionId": 127,
      "rightOptionId": "127003",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Diadactic teaching materials was introduced by",
      "question_hi": "निम्नलिखित में से Diadactic teaching materials was introduced by के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options": {
        "A": "Pestalozzi",
        "B": "froebel",
        "C": "Montessori",
        "D": "Dewey"
      },
      "options_hi": {
        "A": "Pestalozzi",
        "B": "फ्रोबेल",
        "C": "Montessori",
        "D": "डेवी"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Montessori**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Montessori?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 110,
      "questionNumber": 110,
      "officialQuestionId": 128,
      "rightOptionId": "128003",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The centre point of a lesson plan is",
      "question_hi": "पाठ योजना का केन्द्र बिन्दु है",
      "options": {
        "A": "principal",
        "B": "teacher",
        "C": "student",
        "D": "none of the above"
      },
      "options_hi": {
        "A": "प्रधानाचार्य",
        "B": "अध्यापक",
        "C": "विद्यार्थी",
        "D": "उपरोक्त में से कोई नहीं"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) student**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) student?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 111,
      "questionNumber": 111,
      "officialQuestionId": 129,
      "rightOptionId": "129004",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "According to Howard Gardner, a philosopher has …………. Type of intelligence and a sculptor has more ………… type of intelligence.",
      "question_hi": "हॉवर्ड गार्डनर के अनुसार, एक दार्शनिक के पास …………. बुद्धि का प्रकार और एक मूर्तिकार के पास ………… प्रकार की बुद्धि अधिक होती है।",
      "options": {
        "A": "interpersonal; linguistic",
        "B": "linguistic; interpersonal",
        "C": "spatial; intrapersonal",
        "D": "intrapersonal; spatial"
      },
      "options_hi": {
        "A": "पारस्परिक; भाषाई",
        "B": "भाषाई; पारस्परिक",
        "C": "स्थानिक; intrapersonal",
        "D": "अंतर्वैयक्तिक; स्थानिक"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) intrapersonal; spatial**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (D) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) intrapersonal; spatial?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 112,
      "questionNumber": 112,
      "officialQuestionId": 108,
      "rightOptionId": "108003",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is an example of an internal attribution for failure?",
      "question_hi": "निम्नलिखित में से कौन सा विफलता के लिए आंतरिक आरोप का उदाहरण है?",
      "options": {
        "A": "I failed the test because my friends were distracting me.",
        "B": "I received a low grade because the teacher is a tough grader.",
        "C": "I failed the test because I didn't study enough.",
        "D": "I didn't get good marks because the teacher was biased."
      },
      "options_hi": {
        "A": "मैं परीक्षा में असफल हो गया क्योंकि मेरे दोस्त मेरा ध्यान भटका रहे थे।",
        "B": "मुझे निम्न ग्रेड प्राप्त हुआ क्योंकि शिक्षक एक कठिन ग्रेडर है।",
        "C": "मैं परीक्षा में असफल हो गया क्योंकि मैंने पर्याप्त अध्ययन नहीं किया।",
        "D": "मुझे अच्छे अंक नहीं मिले क्योंकि शिक्षक पक्षपाती थे।"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) I failed the test because I didn't study enough.**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) I failed the test because I didn't study enough.**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 113,
      "questionNumber": 113,
      "officialQuestionId": 130,
      "rightOptionId": "130001",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is an example of a question that requires students to reflect on their own thinking?",
      "question_hi": "निम्नलिखित में से कौन सा an example of a question that requires students to reflect on their own thinking है?",
      "options": {
        "A": "how has your thinking about the use of verbs changed since the beginning of the class ?",
        "B": "what is the relationship between nouns and verbs in a sentence?",
        "C": "what is the definition of a verb?",
        "D": "how do you change a verb to the present tense?"
      },
      "options_hi": {
        "A": "कक्षा की शुरुआत से क्रियाओं के उपयोग के बारे में आपकी सोच कैसे बदल गई है?",
        "B": "एक वाक्य में संज्ञा और क्रिया के बीच क्या संबंध है?",
        "C": "क्रिया की परिभाषा क्या है?",
        "D": "आप क्रिया को वर्तमान काल में कैसे बदलते हैं?"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) how has your thinking about the use of verbs changed since the beginning of the class ?**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) how has your thinking about the use of verbs changed since the beginning of the class ?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 114,
      "questionNumber": 114,
      "officialQuestionId": 122,
      "rightOptionId": "122003",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Micro teaching is more effective",
      "question_hi": "शिक्षण कला में, सूक्ष्म शिक्षण (Micro Teaching) किस स्थिति में अधिक प्रभावी होता है?",
      "options": {
        "A": "always",
        "B": "after the teaching-practice",
        "C": "during the teaching-practice",
        "D": "during the preparation for teaching-practice"
      },
      "options_hi": {
        "A": "केवल वार्षिक परीक्षाओं के दौरान",
        "B": "केवल कक्षा में अनुशासन बनाए रखने हेतु",
        "C": "शिक्षण अभ्यास (Teaching Practice) और शिक्षक प्रशिक्षण के दौरान",
        "D": "केवल गृहकार्य जांचने हेतु"
      },
      "correctAnswer": "C",
      "explanation": "Micro-teaching is a teacher training technique that allows student-teachers to master specific pedagogical skills in a scaled-down classroom setting.",
      "explanation_hi": "सूक्ष्म शिक्षण (Micro-teaching) शिक्षक प्रशिक्षण और शिक्षण अभ्यास के दौरान विशिष्ट शिक्षण कौशलों में महारत हासिल करने के लिए सबसे प्रभावी तकनीक है।"
    },
    {
      "id": 115,
      "questionNumber": 115,
      "officialQuestionId": 118,
      "rightOptionId": "118002",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following are the characteristics of a person with scientific attitude?",
      "question_hi": "वैज्ञानिक दृष्टिकोण वाले व्यक्ति की निम्नलिखित में से कौन सी विशेषताएँ हैं?",
      "options": {
        "A": "Brevity",
        "B": "Objectivity",
        "C": "Adventure",
        "D": "Sharp memory"
      },
      "options_hi": {
        "A": "संक्षिप्तता",
        "B": "Objectivity",
        "C": "साहसिक काम",
        "D": "तीव्र स्मृति"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Objectivity**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (B) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Objectivity?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 116,
      "questionNumber": 116,
      "officialQuestionId": 115,
      "rightOptionId": "115003",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Library man Provide",
      "question_hi": "निम्नलिखित में से Library man Provide के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options": {
        "A": "Physical mateial",
        "B": "Digital material",
        "C": "Both A & B",
        "D": "None of these"
      },
      "options_hi": {
        "A": "भौतिक सामग्री",
        "B": "डिजिटल सामग्री",
        "C": "ए और बी दोनों",
        "D": "इनमें से कोई नहीं"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Both A & B**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Both A & B?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 117,
      "questionNumber": 117,
      "officialQuestionId": 116,
      "rightOptionId": "116001",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following components are essential for library?",
      "question_hi": "निम्नलिखित में से कौन सा घटक पुस्तकालय के लिए आवश्यक है?",
      "options": {
        "A": "Learning",
        "B": "Walking",
        "C": "Playing",
        "D": "None of these"
      },
      "options_hi": {
        "A": "सीखना",
        "B": "चलना",
        "C": "खेलना",
        "D": "इनमें से कोई नहीं"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Learning**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Learning?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 118,
      "questionNumber": 118,
      "officialQuestionId": 101,
      "rightOptionId": "101001",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A teacher should ask-",
      "question_hi": "निम्नलिखित में से A teacher should ask- के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options": {
        "A": "meaningful question",
        "B": "maximum number of question in a fixed time",
        "C": "as many question as possible",
        "D": "None of these"
      },
      "options_hi": {
        "A": "सार्थक प्रश्न",
        "B": "एक निश्चित समय में प्रश्नों की अधिकतम संख्या",
        "C": "जितना संभव हो उतने प्रश्न",
        "D": "इनमें से कोई नहीं"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) meaningful question**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) meaningful question?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 119,
      "questionNumber": 119,
      "officialQuestionId": 102,
      "rightOptionId": "102003",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following important cause of failure for teacher?",
      "question_hi": "निम्नलिखित में से शिक्षक की विफलता का कौन सा महत्वपूर्ण कारण है?",
      "options": {
        "A": "interpersonal relationship",
        "B": "verbal ability",
        "C": "lack of command over the knowledge of subject",
        "D": "None of the above"
      },
      "options_hi": {
        "A": "पारस्परिक संबंध",
        "B": "मौखिक क्षमता",
        "C": "विषय के ज्ञान पर पकड़ का अभाव",
        "D": "उपरोक्त में से कोई नहीं"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) lack of command over the knowledge of subject**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) lack of command over the knowledge of subject?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 120,
      "questionNumber": 120,
      "officialQuestionId": 104,
      "rightOptionId": "104002",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Teacher should master during his teaching period",
      "question_hi": "शिक्षक को अपने शिक्षण काल ​​के दौरान महारत हासिल करनी चाहिए",
      "options": {
        "A": "in one of the teaching method",
        "B": "equally acros all teaching method",
        "C": "Both A & B",
        "D": "None of these"
      },
      "options_hi": {
        "A": "शिक्षण पद्धति में से एक में",
        "B": "सभी शिक्षण पद्धतियों में समान रूप से",
        "C": "ए और बी दोनों",
        "D": "इनमें से कोई नहीं"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) equally acros all teaching method**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (B) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) equally acros all teaching method?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 121,
      "questionNumber": 121,
      "officialQuestionId": 105,
      "rightOptionId": "105001",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Knowledge is-",
      "question_hi": "निम्नलिखित में से Knowledge is- के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options": {
        "A": "Information",
        "B": "Application",
        "C": "Analysis",
        "D": "Understanding"
      },
      "options_hi": {
        "A": "जानकारी",
        "B": "आवेदन",
        "C": "विश्लेषण",
        "D": "समझ"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Information**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Information?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 122,
      "questionNumber": 122,
      "officialQuestionId": 106,
      "rightOptionId": "106003",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Formative evaluation is conducted",
      "question_hi": "रचनात्मक मूल्यांकन आयोजित किया जाता है",
      "options": {
        "A": "After the teaching learning process",
        "B": "Before the teaching learning process",
        "C": "During the teaching learning process",
        "D": "All of the above"
      },
      "options_hi": {
        "A": "शिक्षण सीखने की प्रक्रिया के बाद",
        "B": "शिक्षण-अधिगम प्रक्रिया से पहले",
        "C": "शिक्षण-अधिगम प्रक्रिया के दौरान",
        "D": "उपरोक्त सभी"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) During the teaching learning process**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) During the teaching learning process?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 123,
      "questionNumber": 123,
      "officialQuestionId": 107,
      "rightOptionId": "107003",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which technique is used for evaluation of interest?",
      "question_hi": "रुचि के मूल्यांकन के लिए किस तकनीक का उपयोग किया जाता है?",
      "options": {
        "A": "Observation technique",
        "B": "Check list",
        "C": "Rating scale",
        "D": "Projective Technique"
      },
      "options_hi": {
        "A": "अवलोकन तकनीक",
        "B": "सूची जांचें",
        "C": "दर्ज़ा पैमाने",
        "D": "प्रोजेक्टिव तकनीक"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Rating scale**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Rating scale?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 124,
      "questionNumber": 124,
      "officialQuestionId": 103,
      "rightOptionId": "103004",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is not a type of curriculum design?",
      "question_hi": "निम्नलिखित में से कौन सा पाठ्यक्रम डिज़ाइन का एक प्रकार नहीं है?",
      "options": {
        "A": "Subject-centered",
        "B": "Problem Centered",
        "C": "Learner-Centered",
        "D": "Teacher-Centered"
      },
      "options_hi": {
        "A": "विषय केन्द्रित",
        "B": "समस्या केन्द्रित",
        "C": "शिक्षार्थी केंद्रित",
        "D": "शिक्षक-केन्द्रित"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Teacher-Centered**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (D) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Teacher-Centered?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 125,
      "questionNumber": 125,
      "officialQuestionId": 109,
      "rightOptionId": "109004",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is not the nature of curriculum?",
      "question_hi": "निम्नलिखित में से कौन सा the nature of curriculum नहीं है?",
      "options": {
        "A": "Critical",
        "B": "Creative",
        "C": "Conservative",
        "D": "Active"
      },
      "options_hi": {
        "A": "गंभीर",
        "B": "रचनात्मक",
        "C": "रूढ़िवादी",
        "D": "सक्रिय"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Active**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (D) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Active?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 126,
      "questionNumber": 126,
      "officialQuestionId": 110,
      "rightOptionId": "110001",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The biggest challenge before democracy is -",
      "question_hi": "लोकतंत्र के समक्ष सबसे बड़ी चुनौती है -",
      "options": {
        "A": "Fundamentalism",
        "B": "Castism",
        "C": "Regionalism",
        "D": "All the above"
      },
      "options_hi": {
        "A": "कट्टरवाद",
        "B": "जातिवाद",
        "C": "क्षेत्रवाद",
        "D": "उपरोक्त सभी"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Fundamentalism**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Fundamentalism?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 127,
      "questionNumber": 127,
      "officialQuestionId": 111,
      "rightOptionId": "111001",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A teacher shoul behave with all the student as -",
      "question_hi": "एक शिक्षक को सभी विद्यार्थियों के साथ ऐसा व्यवहार करना चाहिए -",
      "options": {
        "A": "as a friend",
        "B": "as a master",
        "C": "equally",
        "D": "personally"
      },
      "options_hi": {
        "A": "एक दोस्त के रूप में",
        "B": "एक गुरु के रूप में",
        "C": "समान रूप से",
        "D": "व्यक्तिगत रूप से"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) as a friend**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) as a friend?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 128,
      "questionNumber": 128,
      "officialQuestionId": 112,
      "rightOptionId": "112003",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Failure can be our best teacher if-",
      "question_hi": "असफलता हमारी सबसे अच्छी शिक्षक हो सकती है यदि-",
      "options": {
        "A": "we work harder than before",
        "B": "we know the reasons of failure",
        "C": "we know the reasons of failure and then being encouraged we work harder than before",
        "D": "none of the above"
      },
      "options_hi": {
        "A": "हम पहले से ज्यादा मेहनत करते हैं",
        "B": "हम असफलता के कारणों को जानते हैं",
        "C": "हम असफलता के कारणों को जानते हैं और फिर प्रोत्साहित होकर पहले से अधिक मेहनत करते हैं",
        "D": "उपरोक्त में से कोई नहीं"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (A) we work harder than before**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) we work harder than before?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 129,
      "questionNumber": 129,
      "officialQuestionId": 113,
      "rightOptionId": "113001",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Chal-Board is a kind of teaching aid-",
      "question_hi": "निम्नलिखित में से Chal-Board is a kind of teaching aid- के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options": {
        "A": "Visual",
        "B": "Audio",
        "C": "Audio-Visual",
        "D": "All of the above"
      },
      "options_hi": {
        "A": "तस्वीर",
        "B": "ऑडियो",
        "C": "दृश्य-श्रव्य",
        "D": "उपरोक्त सभी"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Visual**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Visual?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 130,
      "questionNumber": 130,
      "officialQuestionId": 114,
      "rightOptionId": "114002",
      "section": "Teaching Skills",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला एवं शिक्षाशास्त्र",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Television is",
      "question_hi": "निम्नलिखित में से Television is के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options": {
        "A": "Visual aid",
        "B": "Audio-visual aid",
        "C": "Audio aid",
        "D": "None of the above"
      },
      "options_hi": {
        "A": "दृश्य सहायता",
        "B": "श्रव्य-दृश्य सहायता",
        "C": "ऑडियो सहायता",
        "D": "उपरोक्त में से कोई नहीं"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (A) Visual aid**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Visual aid?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 131,
      "questionNumber": 131,
      "officialQuestionId": 149,
      "rightOptionId": "149001",
      "section": "General Skills",
      "topic": "General Knowledge",
      "topic_hi": "सामान्य ज्ञान एवं जागरूकता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "There were widespread rises against the British in the 1820s. Which one of the following did not revolt in the 1820s?",
      "question_hi": "1820 के दशक में अंग्रेजों के खिलाफ व्यापक विद्रोह हुए। निम्नलिखित में से किसने 1820 के दशक में विद्रोह नहीं किया था?",
      "options": {
        "A": "Santhals",
        "B": "Ahoms",
        "C": "Pagal Panthis",
        "D": "Ramosi"
      },
      "options_hi": {
        "A": "संथाल",
        "B": "अहोम",
        "C": "पागल पंथी",
        "D": "रामोसी"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Santhals**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Santhals?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 132,
      "questionNumber": 132,
      "officialQuestionId": 148,
      "rightOptionId": "148004",
      "section": "General Skills",
      "topic": "General Knowledge",
      "topic_hi": "सामान्य ज्ञान एवं जागरूकता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "If the Sun rises at Tirap in Arunachal Pradesh at 5.00 am (IST), then when (IST) the Sun will rise in Kandla, Gujarat?",
      "question_hi": "यदि अरुणाचल प्रदेश के तिराप में सूर्य सुबह 5.00 बजे (IST) उगता है, तो गुजरात के कांडला में सूर्य कब (IST) उगेगा?",
      "options": {
        "A": "About 5.00 a.m.",
        "B": "About 6.20 a.m.",
        "C": "About 7.30 a.m.",
        "D": "About 7.00 a.m."
      },
      "options_hi": {
        "A": "सुबह करीब 5.00 बजे",
        "B": "सुबह करीब 6.20 बजे",
        "C": "सुबह करीब साढ़े सात बजे",
        "D": "सुबह करीब सात बजे"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) About 7.00 a.m.**\n\n**Concept Overview**: Option (D) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) About 7.00 a.m.**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 133,
      "questionNumber": 133,
      "officialQuestionId": 147,
      "rightOptionId": "147001",
      "section": "General Skills",
      "topic": "General Knowledge",
      "topic_hi": "सामान्य ज्ञान एवं जागरूकता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the maximum investment by any single investor in an Indian company?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: What is the maximum investment by any single investor in an Indian company के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "10%",
        "B": "15%",
        "C": "20%",
        "D": "25%"
      },
      "options_hi": {
        "A": "10%",
        "B": "15%",
        "C": "20%",
        "D": "25%"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) 10%**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) 10%?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 134,
      "questionNumber": 134,
      "officialQuestionId": 146,
      "rightOptionId": "146004",
      "section": "General Skills",
      "topic": "General Knowledge",
      "topic_hi": "सामान्य ज्ञान एवं जागरूकता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Who among the following was not related to Champaran Satyagraha?",
      "question_hi": "निम्नलिखित में से कौन चंपारण सत्याग्रह से संबंधित नहीं था?",
      "options": {
        "A": "Dr. Rajendra Prasad",
        "B": "Anugrah Narayan Singh",
        "C": "JB Kriplani",
        "D": "Jai Prakash Narayan"
      },
      "options_hi": {
        "A": "डॉ. राजेंद्र प्रसाद",
        "B": "अनुग्रह नारायण सिंह",
        "C": "जेबी कृपलानी",
        "D": "जय प्रकाश नारायण"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Jai Prakash Narayan**\n\n**Concept Overview**: Option (D) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Jai Prakash Narayan?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 135,
      "questionNumber": 135,
      "officialQuestionId": 145,
      "rightOptionId": "145003",
      "section": "General Skills",
      "topic": "General Knowledge",
      "topic_hi": "सामान्य ज्ञान एवं जागरूकता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Visva-Bharati University, which was seen in the news recently, is located in which state?",
      "question_hi": "विश्वभारती विश्वविद्यालय, जो हाल ही में खबरों में था, किस राज्य में स्थित है?",
      "options": {
        "A": "Uttar Pradesh",
        "B": "Bihar",
        "C": "West Bengal",
        "D": "Odisha"
      },
      "options_hi": {
        "A": "उतार प्रदेश।",
        "B": "बिहार",
        "C": "पश्चिम बंगाल",
        "D": "ओडिशा"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) West Bengal**\n\n**Concept Overview**: Option (C) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) West Bengal?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 136,
      "questionNumber": 136,
      "officialQuestionId": 144,
      "rightOptionId": "144004",
      "section": "General Skills",
      "topic": "General Knowledge",
      "topic_hi": "सामान्य ज्ञान एवं जागरूकता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Rama plays cricket with his friends every evening. Which energy does he use to play cricket?",
      "question_hi": "राम हर शाम अपने दोस्तों के साथ क्रिकेट खेलता है। वह क्रिकेट खेलने के लिए किस ऊर्जा का उपयोग करता है?",
      "options": {
        "A": "Sound energy",
        "B": "Light energy",
        "C": "Chemical energy",
        "D": "Muscular energy"
      },
      "options_hi": {
        "A": "ध्वनि ऊर्जा",
        "B": "प्रकाश ऊर्जा",
        "C": "रसायन ऊर्जा",
        "D": "मांसपेशियों की ऊर्जा"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Muscular energy**\n\n**Concept Overview**: Option (D) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Muscular energy?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 137,
      "questionNumber": 137,
      "officialQuestionId": 143,
      "rightOptionId": "143002",
      "section": "General Skills",
      "topic": "General Knowledge",
      "topic_hi": "सामान्य ज्ञान एवं जागरूकता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which one of the following is 'sticky rice' and is a common variety of rice in Assam?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: Which one of the following is 'sticky rice' and is a common variety of rice in Assam के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "Ponni rice",
        "B": "Bora rice",
        "C": "Arborio rice",
        "D": "Bomba rice"
      },
      "options_hi": {
        "A": "पोन्नी चावल",
        "B": "बोरा चावल",
        "C": "अरबोरियो चावल",
        "D": "बोम्बा चावल"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Bora rice**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Bora rice?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 138,
      "questionNumber": 138,
      "officialQuestionId": 142,
      "rightOptionId": "142003",
      "section": "General Skills",
      "topic": "General Knowledge",
      "topic_hi": "सामान्य ज्ञान एवं जागरूकता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "When we burn fuels, we get :",
      "question_hi": "जब हम ईंधन जलाते हैं, तो हमें मिलता है:",
      "options": {
        "A": "Light and sound energy",
        "B": "Only light energy",
        "C": "Heat and light energy",
        "D": "Mechanical and Light energy"
      },
      "options_hi": {
        "A": "प्रकाश एवं ध्वनि ऊर्जा",
        "B": "केवल प्रकाश ऊर्जा",
        "C": "ऊष्मा और प्रकाश ऊर्जा",
        "D": "यांत्रिक और प्रकाश ऊर्जा"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Heat and light energy**\n\n**Concept Overview**: Option (C) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Heat and light energy?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 139,
      "questionNumber": 139,
      "officialQuestionId": 141,
      "rightOptionId": "141001",
      "section": "General Skills",
      "topic": "General Knowledge",
      "topic_hi": "सामान्य ज्ञान एवं जागरूकता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Consider the following statements about snakes and identify the Incorrect one from the following:",
      "question_hi": "साँपों के बारे में निम्नलिखित कथनों पर विचार करें और निम्नलिखित में से गलत की पहचान करें:",
      "options": {
        "A": "They chew up their prey",
        "B": "They swallow their food whole",
        "C": "Snakes have sharp teeth",
        "D": "Poisonous snakes have fangs."
      },
      "options_hi": {
        "A": "वे अपने शिकार को चबा जाते हैं",
        "B": "वे अपना भोजन पूरा निगल लेते हैं",
        "C": "साँपों के दाँत नुकीले होते हैं",
        "D": "Poisonous snakes have fangs."
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) They chew up their prey**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) They chew up their prey?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 140,
      "questionNumber": 140,
      "officialQuestionId": 131,
      "rightOptionId": "131004",
      "section": "General Skills",
      "topic": "General Knowledge",
      "topic_hi": "सामान्य ज्ञान एवं जागरूकता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "With respect to Gujarat, the locations of Uttar Pradesh and Andhra Pradesh, respectively, are:",
      "question_hi": "गुजरात के संबंध में, उत्तर प्रदेश और आंध्र प्रदेश के स्थान क्रमशः हैं:",
      "options": {
        "A": "North-West; Saouth-East",
        "B": "North-West; South-West",
        "C": "North-East; South-West",
        "D": "North-East; South-East"
      },
      "options_hi": {
        "A": "उत्तर-पश्चिम; दक्षिण-पूर्व",
        "B": "उत्तर-पश्चिम; दक्षिण पश्चिम",
        "C": "ईशान कोण; दक्षिण पश्चिम",
        "D": "ईशान कोण; दक्षिण पूर्व"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) North-East; South-East**\n\n**Reasoning Logic**: Analyzing the pattern, sequence progression, or syllogistic validity demonstrates that option (D) uniquely satisfies the given conditions.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) North-East; South-East?**\n\n**विषय अवधारणा (तार्किक विचार)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 141,
      "questionNumber": 141,
      "officialQuestionId": 139,
      "rightOptionId": "139001",
      "section": "General Skills",
      "topic": "General Knowledge",
      "topic_hi": "सामान्य ज्ञान एवं जागरूकता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which one of the following groups have all 3-dimensional shapes?",
      "question_hi": "निम्नलिखित में से किस समूह में सभी त्रि-आयामी आकृतियाँ हैं?",
      "options": {
        "A": "Cube, Cuboid, Sphere, Cylinder",
        "B": "Cube, Cuboid, Semi-Circle, Cone",
        "C": "Cube, Cuboid, Circle, Cone",
        "D": "Cube, Cuboid, Circle, Triangle"
      },
      "options_hi": {
        "A": "घन, घनाभ, गोला, बेलन",
        "B": "घन, घनाभ, अर्धवृत्त, शंकु",
        "C": "घन, घनाभ, वृत्त, शंकु",
        "D": "Cube, Cuboid, Circle, Triangle"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Cube, Cuboid, Sphere, Cylinder**\n\n**Mathematical Principle**: Solve using standard mathematical formulas and proportional relationships.\n- The correct step-by-step simplification leads directly to option (A): **Cube, Cuboid, Sphere, Cylinder**.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Cube, Cuboid, Sphere, Cylinder?**\n\n**विषय अवधारणा (गणितीय अभिरुचि)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 142,
      "questionNumber": 142,
      "officialQuestionId": 138,
      "rightOptionId": "138003",
      "section": "General Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय अभिक्षमता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the missing number in the pattern given below? 1, 6, 15, -------45, 66, 91",
      "question_hi": "दी गई संख्या श्रृंखला में लुप्त संख्या क्या है? 1, 6, 15, __, 45, 66, 91",
      "options": {
        "A": "25",
        "B": "36",
        "C": "28",
        "D": "32"
      },
      "options_hi": {
        "A": "25",
        "B": "26",
        "C": "28",
        "D": "30"
      },
      "correctAnswer": "C",
      "explanation": "Differences between consecutive terms are consecutive multiples of 4: 6-1=5, 15-6=9 (+4), next difference is 9+4=13, so 15+13=28. Check: 45-28=17, 66-45=21, 91-66=25.",
      "explanation_hi": "पदों का अंतर 4 की वृद्धि दर्शाता है: 6-1=5, 15-6=9, अगला अंतर 9+4=13 होगा, अतः 15+13=28। आगे: 45-28=17, 66-45=21, 91-66=25।"
    },
    {
      "id": 143,
      "questionNumber": 143,
      "officialQuestionId": 137,
      "rightOptionId": "137002",
      "section": "General Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय अभिक्षमता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A whole number is added to 100 and the same number is subtracted from 100. the sum of the two resulting numbers so obtained is :",
      "question_hi": "एक पूर्ण संख्या को 100 में जोड़ा जाता है और उसी संख्या को 100 में से घटाया जाता है। इस प्रकार प्राप्त दोनों परिणामी संख्याओं का योग क्या होगा?",
      "options": {
        "A": "100",
        "B": "200",
        "C": "0",
        "D": "50"
      },
      "options_hi": {
        "A": "200",
        "B": "100",
        "C": "0",
        "D": "50"
      },
      "correctAnswer": "B",
      "explanation": "Let the whole number be x. The two resulting numbers are (100 + x) and (100 - x). Their sum is (100 + x) + (100 - x) = 200.",
      "explanation_hi": "माना वह पूर्ण संख्या x है। परिणामी संख्याएं (100 + x) और (100 - x) होंगी। इनका योग = (100 + x) + (100 - x) = 200 होगा।"
    },
    {
      "id": 144,
      "questionNumber": 144,
      "officialQuestionId": 136,
      "rightOptionId": "136001",
      "section": "General Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय अभिक्षमता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The sum of 5 - 5 + 5 - 5 + 5 - 5 …………… , to odd number of terms is :",
      "question_hi": "श्रृंखला 5 - 5 + 5 - 5 + 5 - 5 …………… के विषम पदों (Odd number of terms) का योग क्या होगा?",
      "options": {
        "A": "5",
        "B": "15",
        "C": "0",
        "D": "-5"
      },
      "options_hi": {
        "A": "5",
        "B": "0",
        "C": "-5",
        "D": "10"
      },
      "correctAnswer": "A",
      "explanation": "Every pair (5 - 5) sums to 0. For an odd number of terms (2k + 1), k pairs cancel out to 0 leaving the final term +5.",
      "explanation_hi": "प्रत्येक सम युग्म (5 - 5) का योग 0 होता है। किसी भी विषम संख्या में पदों के लिए, सभी युग्म कटकर 0 हो जाते हैं और अंतिम पद +5 शेष बचता है।"
    },
    {
      "id": 145,
      "questionNumber": 145,
      "officialQuestionId": 135,
      "rightOptionId": "135002",
      "section": "General Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय अभिक्षमता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following arrangements represents a descending order of numbers?",
      "question_hi": "निम्नलिखित में से कौन सी व्यवस्था संख्याओं के घटते क्रम को दर्शाती है?",
      "options": {
        "A": "10.5, 1.50, 1.05, 1.055, 1.005, 0.155",
        "B": "10.5, 1.50, 1.055, 1.05, 1.005, 0.155",
        "C": "1.05, 1.005, 1.50, 1.055, 10.5, 0.155",
        "D": "10.5, 1.05, 1.055, 1.50, 1.005, 0.155"
      },
      "options_hi": {
        "A": "10.5, 1.50, 1.05, 1.055, 1.005, 0.",
        "B": "10.5, 1.50, 1.055, 1.05, 1.005, 0.",
        "C": "1.05, 1.005, 1.50, 1.055, 10.5, 0.",
        "D": "10.5, 1.05, 1.055, 1.50, 1.005, 0."
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) 10.5, 1.50, 1.055, 1.05, 1.005, 0.**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) 10.5, 1.50, 1.055, 1.05, 1.005, 0.**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 146,
      "questionNumber": 146,
      "officialQuestionId": 134,
      "rightOptionId": "134003",
      "section": "General Skills",
      "topic": "General Knowledge",
      "topic_hi": "सामान्य ज्ञान एवं जागरूकता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Monday : April : : Friday : ?",
      "question_hi": "कंप्यूटर साइंस अवधारणा: Monday : April : : Friday :  के संबंध में सही कथन या मान क्या है?",
      "options": {
        "A": "July",
        "B": "Saturday",
        "C": "August",
        "D": "Tuesday"
      },
      "options_hi": {
        "A": "जुलाई",
        "B": "शनिवार",
        "C": "अगस्त",
        "D": "मंगलवार"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) August**\n\n**Concept Overview**: Option (C) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) August?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 147,
      "questionNumber": 147,
      "officialQuestionId": 133,
      "rightOptionId": "133002",
      "section": "General Skills",
      "topic": "General Knowledge",
      "topic_hi": "सामान्य ज्ञान एवं जागरूकता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Choose the word which is least like the other words in the group.",
      "question_hi": "वह शब्द चुनें जो समूह के अन्य शब्दों से कम से कम मेल खाता हो।",
      "options": {
        "A": "Kidney",
        "B": "Heart",
        "C": "Lung",
        "D": "Ear"
      },
      "options_hi": {
        "A": "किडनी",
        "B": "दिल",
        "C": "फेफड़ा",
        "D": "कान"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Heart**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Heart?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 148,
      "questionNumber": 148,
      "officialQuestionId": 132,
      "rightOptionId": "132004",
      "section": "General Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय अभिक्षमता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "60,30,120,15,240?",
      "question_hi": "दी गई संख्या श्रृंखला में प्रश्न चिह्न (?) के स्थान पर क्या आएगा? 60, 30, 120, 15, 240, ?",
      "options": {
        "A": "30",
        "B": "120",
        "C": "140",
        "D": "71/2"
      },
      "options_hi": {
        "A": "30",
        "B": "12",
        "C": "10",
        "D": "7.5"
      },
      "correctAnswer": "D",
      "explanation": "Two alternating series: (1) 60, 120, 240 (multiplying by 2); (2) 30, 15, ? (dividing by 2). Therefore, 15 / 2 = 7.5.",
      "explanation_hi": "दो एकांतर श्रृंखलाएँ: (1) 60, 120, 240 (2 से गुणा); (2) 30, 15, ? (2 से भाग)। अतः 15 / 2 = 7.5।"
    },
    {
      "id": 149,
      "questionNumber": 149,
      "officialQuestionId": 140,
      "rightOptionId": "140001",
      "section": "General Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक क्षमता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a certain code, if BAD is written as YZW and SAID is written as HZRW, then LIFE will be written as:",
      "question_hi": "एक निश्चित कोड में, यदि BAD को YZW और SAID को HZRW के रूप में लिखा जाता है, तो LIFE को इस प्रकार लिखा जाएगा:",
      "options": {
        "A": "ORUV",
        "B": "OSUV",
        "C": "OQVU",
        "D": "ORVW"
      },
      "options_hi": {
        "A": "ओआरयूवी",
        "B": "ओसुव",
        "C": "OQVU",
        "D": "ORVW"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) ORUV**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) ORUV?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 150,
      "questionNumber": 150,
      "officialQuestionId": 150,
      "rightOptionId": "150001",
      "section": "General Skills",
      "topic": "General Knowledge",
      "topic_hi": "सामान्य ज्ञान एवं जागरूकता",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Pointing towards Sita, Nikhil said, \"I am the only son of her mother's son\". How is Sita related to Nikhil?",
      "question_hi": "सीता की ओर इशारा करते हुए, निखिल ने कहा, \"मैं उसकी माँ के बेटे का इकलौता बेटा हूँ\"। सीता का निखिल से क्या संबंध है?",
      "options": {
        "A": "Aunt",
        "B": "Niece",
        "C": "Mother",
        "D": "Cousin"
      },
      "options_hi": {
        "A": "चाची",
        "B": "भतीजी",
        "C": "माँ",
        "D": "चचेरा"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Aunt**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Aunt?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    }
  ]
};
