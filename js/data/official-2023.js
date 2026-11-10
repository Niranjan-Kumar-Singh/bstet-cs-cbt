// Generated Question Paper Data
window.official_2023 = {
  "id": "official_2023",
  "title": "BSTET Official 2023 - Paper II",
  "subtitle": "Held On: 12 Sep 2023 | Official Question Paper with Answer Key",
  "category": "Official PYQ",
  "isOfficial": true,
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
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the simplified expression for the Boolean function F(A, B, C, D) = Σ(0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14) using the K-map method?",
      "options": {
        "A": "A'B'C'D' + A'B'C'D + A'BC'D + AB'C'D + ABCD",
        "B": "A'B'C'D' + A'BC'D + AB'C'D + ABC'D + ABCD",
        "C": "A'B'C'D' + A'BC'D + ABC'D + ABCD",
        "D": "A'B'C'D' + A'BC'D' + A'BCD + ABCD"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) A'B'C'D' + A'B'C'D + A'BC'D + AB'C'D + ABCD**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (A) correctly satisfies the circuit behavior and truth table properties.",
      "topic_hi": "डिजिटल लॉजिक",
      "question_hi": "K-मैप विधि का उपयोग करके बूलियन फ़ंक्शन F(A, B, C, D) = Σ(0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14) के लिए सरलीकृत अभिव्यक्ति क्या है?",
      "options_hi": {
        "A": "ए'बी'सी'डी' + ए'बी'सी'डी + ए'बीसी'डी + एबी'सी'डी + एबीसीडी",
        "B": "ए'बी'सी'डी' + ए'बीसी'डी + एबी'सी'डी + एबीसी'डी + एबीसीडी",
        "C": "ए'बी'सी'डी' + ए'बीसी'डी + एबीसी'डी + एबीसीडी",
        "D": "ए'बी'सी'डी' + ए'बीसी'डी' + ए'बीसीडी + एबीसीडी"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) A'B'C'D' + A'B'C'D + A'BC'D + AB'C'D + ABCD?**\n\n**विषय अवधारणा (डिजिटल लॉजिक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 2,
      "questionNumber": 2,
      "section": "Computer Science",
      "topic": "Computer Architecture",
      "topic_hi": "कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which DMA transfer mode releases control of the system bus to the CPU after transferring each individual byte or word?",
      "question_hi": "कौन सा DMA ट्रांसफर मोड प्रत्येक बाइट या शब्द स्थानांतरित करने के बाद सिस्टम बस का नियंत्रण वापस CPU को सौंप देता है?",
      "options": {
        "A": "Burst Mode / Block Transfer Mode",
        "B": "Cycle Stealing Mode",
        "C": "Transparent / Hidden Mode",
        "D": "Polled I/O Mode"
      },
      "options_hi": {
        "A": "बर्स्ट मोड / ब्लॉक ट्रांसफर मोड",
        "B": "साइकिल स्टीलिंग मोड",
        "C": "ट्रांसपेरेंट / हिडन मोड",
        "D": "पोल्ड I/O मोड"
      },
      "correctAnswer": "B",
      "explanation": "In Cycle Stealing DMA, the DMA controller acquires the bus for transferring one single data word, and then releases the bus back to the CPU for instruction execution. In Burst mode, the entire block of data is transferred continuously before relinquishing bus control.",
      "explanation_hi": "साइकिल स्टीलिंग मोड (Cycle Stealing Mode) में DMA कंट्रोलर CPU से केवल एक मशीन साइकिल के लिए बस 'चुराता' है, एक शब्द भेजता है और तुरंत बस CPU को लौटा देता है। बर्स्ट मोड में पूरा डेटा ब्लॉक एक साथ भेजा जाता है।"
    },
    {
      "id": 3,
      "questionNumber": 3,
      "section": "Computer Science",
      "topic": "Computer Architecture",
      "topic_hi": "कंप्यूटर आर्किटेक्चर",
      "marks": 1,
      "negativeMarks": 0,
      "question": "According to the IEEE 754 single-precision 32-bit floating-point standard, how are the 32 bits allocated across sign, exponent, and mantissa (fraction)?",
      "question_hi": "IEEE 754 सिंगल-प्रिसिजन 32-बिट फ्लोटिंग-पॉइंट मानक के अनुसार, साइन, एक्सपोनेंट और मैंटिसा के बीच 32 बिट्स का वितरण किस प्रकार होता है?",
      "options": {
        "A": "1 bit sign, 8 bits exponent, 23 bits mantissa",
        "B": "1 bit sign, 11 bits exponent, 20 bits mantissa",
        "C": "2 bits sign, 8 bits exponent, 22 bits mantissa",
        "D": "1 bit sign, 7 bits exponent, 24 bits mantissa"
      },
      "options_hi": {
        "A": "1 बिट साइन, 8 बिट्स एक्सपोनेंट, 23 बिट्स मैंटिसा",
        "B": "1 बिट साइन, 11 बिट्स एक्सपोनेंट, 20 बिट्स मैंटिसा",
        "C": "2 बिट्स साइन, 8 बिट्स एक्सपोनेंट, 22 बिट्स मैंटिसा",
        "D": "1 बिट साइन, 7 बिट्स एक्सपोनेंट, 24 बिट्स मैंटिसा"
      },
      "correctAnswer": "A",
      "explanation": "IEEE 754 single-precision (32-bit) allocates: 1 bit for sign (bit 31), 8 bits for biased exponent with bias 127 (bits 30-23), and 23 bits for normalized fraction/mantissa (bits 22-0). Double-precision (64-bit) uses 1 sign, 11 exponent, and 52 fraction bits.",
      "explanation_hi": "IEEE 754 सिंगल-प्रिसिजन (32-बिट) में: 1 बिट साइन के लिए (बिट 31), 8 बिट्स बायस्ड एक्सपोनेंट के लिए (बायस 127), तथा 23 बिट्स मैंटिसा/फ्रैक्शन के लिए आवंटित होते हैं।"
    },
    {
      "id": 4,
      "questionNumber": 4,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which logic family uses both depletion and enhancement mode MOSFETs for its operation?",
      "options": {
        "A": "TTL",
        "B": "ECL",
        "C": "PMOS",
        "D": "CMOS"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) CMOS**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (D) correctly satisfies the circuit behavior and truth table properties.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "कंप्यूटर साइंस अवधारणा: Which logic family uses both depletion and enhancement mode MOSFETs for its operation के संबंध में सही कथन या मान क्या है?",
      "options_hi": {
        "A": "टीटीएल",
        "B": "ईसीएल",
        "C": "पीएमओएस",
        "D": "सीएमओएस"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) CMOS?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 5,
      "questionNumber": 5,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary difference between ROM and RAM?",
      "options": {
        "A": "ROM is faster than RAM",
        "B": "ROM is volatile, while RAM is non-volatile",
        "C": "ROM is used for data storage, while RAM is used for program execution",
        "D": "ROM stores permanent data that cannot be changed, while RAM stores temporary data that can be read and written"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) ROM stores permanent data that cannot be changed, while RAM stores temporary data that can be read and written**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (D) accurately reflects the microarchitectural functionality.",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "question_hi": "ROM और RAM के बीच प्राथमिक अंतर क्या है?",
      "options_hi": {
        "A": "ROM is faster than RAM",
        "B": "ROM अस्थिर है, जबकि RAM गैर-वाष्पशील है",
        "C": "ROM का उपयोग किसके लिए किया जाता है data storage, while RAM का उपयोग किसके लिए किया जाता है program execution",
        "D": "ROM स्थायी डेटा संग्रहीत करता है जिसे बदला नहीं जा सकता, जबकि RAM अस्थायी डेटा संग्रहीत करता है जिसे पढ़ा और लिखा जा सकता है"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) ROM stores permanent data that cannot be changed, while RAM stores temporary data that can be read and written?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 6,
      "questionNumber": 6,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Why must a base class destructor always be declared 'virtual' in C++ when deleting a derived class object through a base class pointer?",
      "question_hi": "C++ में जब बेस क्लास पॉइंटर के माध्यम से डिराइव्ड क्लास ऑब्जेक्ट को डिलीट किया जाता है, तो बेस क्लास डिस्ट्रक्टर को हमेशा 'virtual' घोषित क्यों किया जाना चाहिए?",
      "options": {
        "A": "To force the base class to become an abstract class",
        "B": "To ensure that the derived class destructor is invoked first, preventing resource leaks",
        "C": "To allow the destructor to accept parameters during cleanup",
        "D": "To prevent the derived class from defining its own destructor"
      },
      "options_hi": {
        "A": "बेस क्लास को एब्सट्रैक्ट क्लास बनाने के लिए बाध्य करने हेतु",
        "B": "यह सुनिश्चित करने के लिए कि डिराइव्ड क्लास का डिस्ट्रक्टर पहले कॉल हो, जिससे रिसोर्स लीक न हो",
        "C": "सफाई के दौरान डिस्ट्रक्टर को पैरामीटर स्वीकार करने की अनुमति देने हेतु",
        "D": "डिराइव्ड क्लास को अपना डिस्ट्रक्टर बनाने से रोकने हेतु"
      },
      "correctAnswer": "B",
      "explanation": "If a base class destructor is not virtual, calling 'delete basePtr' where basePtr points to a derived class object causes undefined behavior and typically executes only the base destructor. Declaring it virtual enables dynamic dispatch, ensuring the derived destructor executes first followed by base destructor.",
      "explanation_hi": "यदि बेस क्लास का डिस्ट्रक्टर वर्चुअल नहीं है, तो बेस पॉइंटर से ऑब्जेक्ट डिलीट करने पर केवल बेस क्लास का डिस्ट्रक्टर कॉल होगा और डिराइव्ड क्लास द्वारा आवंटित मेमोरी लीक हो जाएगी। वर्चुअल डिस्ट्रक्टर से पहले डिराइव्ड फिर बेस डिस्ट्रक्टर कॉल होता है।"
    },
    {
      "id": 7,
      "questionNumber": 7,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "marks": 1,
      "negativeMarks": 0,
      "question": "If the sum of two positive binary numbers is 11010 and there is a carry-out from the MSB, what should be done to obtain the correct result?",
      "options": {
        "A": "Discard the carry",
        "B": "Add the carry to the least significant bit (LSB)",
        "C": "Add the carry to the most significant bit (MSB)",
        "D": "Subtract the carry from the MSB"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Add the carry to the least significant bit (LSB)**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (B) correctly satisfies the circuit behavior and truth table properties.",
      "topic_hi": "कंप्यूटर नेटवर्क",
      "question_hi": "यदि दो सकारात्मक बाइनरी संख्याओं का योग 11010 है और एमएसबी से कोई कैरी-आउट होता है, तो सही परिणाम प्राप्त करने के लिए क्या किया जाना चाहिए?",
      "options_hi": {
        "A": "कैरी को त्यागें",
        "B": "कैरी को न्यूनतम महत्वपूर्ण बिट (एलएसबी) में जोड़ें",
        "C": "कैरी को सबसे महत्वपूर्ण बिट (MSB) में जोड़ें",
        "D": "MSB से कैरी घटाएँ"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Add the carry to the least significant bit (LSB)?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 8,
      "questionNumber": 8,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In binary multiplication using the simple method, what is the first step after aligning the digits and preparing for multiplication?",
      "options": {
        "A": "Multiply the least significant bit (LSB) by the multiplier",
        "B": "Multiply the most significant bit (MSB) by the multiplier",
        "C": "Multiply the least significant bit (LSB) by the multiplicand",
        "D": "Multiply the most significant bit (MSB) by the multiplicand"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Multiply the least significant bit (LSB) by the multiplier**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "सरल विधि का उपयोग करके द्विआधारी गुणन में, अंकों को संरेखित करने और गुणन की तैयारी के बाद पहला चरण क्या है?",
      "options_hi": {
        "A": "गुणक द्वारा न्यूनतम महत्वपूर्ण बिट (एलएसबी) को गुणा करें",
        "B": "सबसे महत्वपूर्ण बिट (MSB) को गुणक से गुणा करें",
        "C": "न्यूनतम महत्वपूर्ण बिट (एलएसबी) को गुणक से गुणा करें",
        "D": "सबसे महत्वपूर्ण बिट (MSB) को गुणक से गुणा करें"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Multiply the least significant bit (LSB) by the multiplier?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 9,
      "questionNumber": 9,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What happens in C++ when an object is passed by value to a function?",
      "question_hi": "C++ में जब किसी ऑब्जेक्ट को फंक्शन में 'पास बाय वैल्यू' भेजा जाता है तो क्या होता है?",
      "options": {
        "A": "The default constructor is executed to initialize the parameter",
        "B": "The copy constructor is invoked to create an identical independent copy in the function scope",
        "C": "The assignment operator (=) is automatically called",
        "D": "Only a reference address is passed without any constructor invocation"
      },
      "options_hi": {
        "A": "पैरामीटर प्रारंभ करने के लिए डिफॉल्ट कंस्ट्रक्टर निष्पादित होता है",
        "B": "फंक्शन स्कोप में एक स्वतंत्र प्रतिलिपि बनाने के लिए कॉपी कंस्ट्रक्टर कॉल होता है",
        "C": "असाइनमेंट ऑपरेटर (=) स्वचालित रूप से कॉल होता है",
        "D": "बिना किसी कंस्ट्रक्टर के केवल एक रेफरेंस एड्रेस पास होता है"
      },
      "correctAnswer": "B",
      "explanation": "Passing an object by value creates a new object in the called function's activation record using the class's copy constructor: ClassName(const ClassName&). When the function returns, this temporary copy is destroyed by the destructor.",
      "explanation_hi": "जब किसी ऑब्जेक्ट को पास-बाय-वैल्यू भेजा जाता है, तो कॉपी कंस्ट्रक्टर (Copy Constructor) का उपयोग करके फंक्शन के लिए उस ऑब्जेक्ट की एक नई कॉपी बनाई जाती है, जो फंक्शन समाप्ति पर नष्ट हो जाती है।"
    },
    {
      "id": 10,
      "questionNumber": 10,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In C++, how is the 'Diamond Problem' of multiple inheritance resolved where a class inherits from two classes that both inherit from the same common base class?",
      "question_hi": "C++ में मल्टीपल इनहेरिटेंस की 'डायमंड प्रॉब्लम' को कैसे हल किया जाता है जहां एक क्लास दो ऐसी क्लासों से इनहेरिट करती है जो दोनों एक ही बेस क्लास से इनहेरिटेड हैं?",
      "options": {
        "A": "By declaring the common base class as 'virtual' during inheritance in intermediate classes",
        "B": "By making the derived class a friend of the common base class",
        "C": "By declaring all base class member variables as private static",
        "D": "By overloading the assignment operator in both intermediate classes"
      },
      "options_hi": {
        "A": "मध्यवर्ती क्लासों में इनहेरिटेंस के दौरान सामान्य बेस क्लास को 'virtual' घोषित करके",
        "B": "डिराइव्ड क्लास को बेस क्लास की फ्रेंड क्लास बनाकर",
        "C": "बेस क्लास के सभी मेंबर वेरिएबल्स को प्राइवेट स्टैटिक घोषित करके",
        "D": "दोनों मध्यवर्ती क्लासों में असाइनमेंट ऑपरेटर को ओवरलोड करके"
      },
      "correctAnswer": "A",
      "explanation": "Virtual base classes (e.g., 'class B : virtual public A' and 'class C : virtual public A') ensure that only a single instance of the common base class A is included in the most derived class D, eliminating ambiguous duplicate member variables.",
      "explanation_hi": "वर्चुअल बेस क्लास (Virtual Base Class) का उपयोग करके डायमंड प्रॉब्लम हल होती है। इससे अंतिम डिराइव्ड क्लास में कॉमन बेस क्लास की केवल एक ही कॉपी शामिल होती है, जिससे एम्बिगुइटी (द्विअर्थी स्थिति) समाप्त हो जाती है।"
    },
    {
      "id": 11,
      "questionNumber": 11,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which component of an ideal microcomputer is responsible for temporarily holding data and instructions during processing?",
      "options": {
        "A": "CPU",
        "B": "ALU",
        "C": "Memory",
        "D": "Output devices"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Memory**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (C) accurately reflects the microarchitectural functionality.",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "question_hi": "प्रसंस्करण के दौरान डेटा और निर्देशों को अस्थायी रूप से रखने के लिए एक आदर्श माइक्रो कंप्यूटर का कौन सा घटक जिम्मेदार है?",
      "options_hi": {
        "A": "CPU",
        "B": "आलू",
        "C": "याद",
        "D": "आउटपुट डिवाइस"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Memory?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 12,
      "questionNumber": 12,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following operators CANNOT be overloaded in C++?",
      "question_hi": "C++ में निम्नलिखित में से किस ऑपरेटर को ओवरलोड नहीं किया जा सकता है?",
      "options": {
        "A": "+ and -",
        "B": "Scope resolution (::), Member selection (.), and Ternary conditional (?:)",
        "C": "Subscript [] and Function call ()",
        "D": "Bitwise shift operators (<< and >>)"
      },
      "options_hi": {
        "A": "+ और -",
        "B": "स्कोप रिज़ॉल्यूशन (::), मेंबर सिलेक्शन (.), तथा टर्नरी कंडीशनल (?:)",
        "C": "सबस्क्रिप्ट [] और फंक्शन कॉल ()",
        "D": "बिटवाइज़ शिफ्ट ऑपरेटर्स (<< और >>)"
      },
      "correctAnswer": "B",
      "explanation": "In C++, the operators that cannot be overloaded are: Scope resolution (::), Member selection (.), Member pointer selection (.*), Ternary conditional (?:), and sizeof / typeid operators.",
      "explanation_hi": "C++ में निम्नलिखित ऑपरेटर्स को ओवरलोड नहीं किया जा सकता: स्कोप रिज़ॉल्यूशन (::), डायरेक्ट मेंबर एक्सेस (.), पॉइंटर-टू-मेंबर (.*), टर्नरी ऑपरेटर (?:), तथा sizeof।"
    },
    {
      "id": 13,
      "questionNumber": 13,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is a 'pure virtual function' in C++, and what characteristic does it impart to the class that contains it?",
      "question_hi": "C++ में 'प्योर वर्चुअल फंक्शन' क्या है, और यह जिस क्लास में होता है उसे क्या विशेषता प्रदान करता है?",
      "options": {
        "A": "A function declared with '= 0' with no base definition, making the class abstract so it cannot be instantiated directly",
        "B": "A function that can only accept primitive integer arguments",
        "C": "A function that executes faster than inline functions",
        "D": "A function that cannot be overridden by any derived class"
      },
      "options_hi": {
        "A": "एक फंक्शन जिसे '= 0' के साथ घोषित किया जाता है, जो क्लास को एब्सट्रैक्ट बना देता है जिससे उसका सीधा ऑब्जेक्ट नहीं बन सकता",
        "B": "एक फंक्शन जो केवल प्रिमिटिव पूर्णांक आर्ग्युमेंट स्वीकार करता है",
        "C": "एक फंक्शन जो इनलाइन फंक्शन की तुलना में अधिक तेजी से चलता है",
        "D": "एक फंक्शन जिसे किसी भी डिराइव्ड क्लास द्वारा ओवरराइड नहीं किया जा सकता"
      },
      "correctAnswer": "A",
      "explanation": "A pure virtual function is defined using syntax 'virtual void func() = 0;'. Any class containing at least one pure virtual function becomes an Abstract Class, meaning objects of that class cannot be directly created, and derived classes must implement it to be concrete.",
      "explanation_hi": "प्योर वर्चुअल फंक्शन को 'virtual void func() = 0;' के रूप में लिखा जाता है। जिस क्लास में कम से कम एक प्योर वर्चुअल फंक्शन होता है वह एब्सट्रैक्ट क्लास (Abstract Class) बन जाती है और उसका सीधा ऑब्जेक्ट नहीं बनाया जा सकता।"
    },
    {
      "id": 14,
      "questionNumber": 14,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which data structure often results in a time-space tradeoff by using extra memory to speed up operations?",
      "options": {
        "A": "Arrays",
        "B": "Linked lists",
        "C": "Hash tables",
        "D": "Stacks"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Hash tables**\n\n**Data Structure Characteristics**: Efficient data manipulation requires understanding asymptotic costs, pointer manipulation, and memory layout (contiguous vs node-based).\n- Option (C) reflects the standard behavior and complexity bounds.",
      "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
      "question_hi": "संचालन को गति देने के लिए अतिरिक्त मेमोरी का उपयोग करके किस डेटा संरचना के परिणामस्वरूप अक्सर समय-अंतरिक्ष समझौता होता है?",
      "options_hi": {
        "A": "सरणियों",
        "B": "लिंक की गई सूचियाँ",
        "C": "हैश टेबल",
        "D": "स्टैक (Stack)s"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Hash tables?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 15,
      "questionNumber": 15,
      "section": "Computer Science",
      "topic": "Algorithms",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which term refers to the strategy of optimizing an algorithm's use of resources, often by making sacrifices in one aspect for improvements in another?",
      "options": {
        "A": "Greedy algorithm",
        "B": "Divide and conquer",
        "C": "Dynamic programming",
        "D": "Tradeoff"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Tradeoff**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (D) accurately reflects the microarchitectural functionality.",
      "topic_hi": "एल्गोरिदम एवं विश्लेषण",
      "question_hi": "कौन सा शब्द किसी एल्गोरिदम के संसाधनों के उपयोग को अनुकूलित करने की रणनीति को संदर्भित करता है, अक्सर एक पहलू में दूसरे में सुधार के लिए बलिदान देकर?",
      "options_hi": {
        "A": "लालची एल्गोरिदम (Greedy Algorithm)",
        "B": "फूट डालो और राज करो",
        "C": "डायनामिक प्रोग्रामिंग",
        "D": "अदला - बदली"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Tradeoff?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 16,
      "questionNumber": 16,
      "section": "Computer Science",
      "topic": "Algorithms",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Conditional asymptotic notation allows for a more nuanced analysis of algorithm behavior under specific conditions. This is particularly useful when:",
      "options": {
        "A": "Analyzing algorithms with constant time complexity",
        "B": "The input size is fixed",
        "C": "The input data is random",
        "D": "Algorithm behavior varies based on certain input characteristics"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Algorithm behavior varies based on certain input characteristics**\n\n**Algorithm Analysis**: Algorithmic paradigms (Divide-and-Conquer, Dynamic Programming, Greedy) balance space and time tradeoffs.\n- Option (D) correctly identifies the algorithmic property.",
      "topic_hi": "एल्गोरिदम एवं विश्लेषण",
      "question_hi": "सशर्त स्पर्शोन्मुख संकेतन विशिष्ट परिस्थितियों में एल्गोरिथम व्यवहार के अधिक सूक्ष्म विश्लेषण की अनुमति देता है। यह विशेष रूप से तब उपयोगी होता है जब:",
      "options_hi": {
        "A": "निरंतर समय जटिलता के साथ एल्गोरिदम का विश्लेषण",
        "B": "इनपुट का आकार निश्चित है",
        "C": "इनपुट डेटा यादृच्छिक है",
        "D": "एल्गोरिदम का व्यवहार कुछ इनपुट विशेषताओं के आधार पर भिन्न होता है"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Algorithm behavior varies based on certain input characteristics?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 17,
      "questionNumber": 17,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": ".If an algorithm's behavior is bounded by \"o(f(n)) if g(n)\", what notation does it become when the condition is removed?",
      "options": {
        "A": "o(f(n))",
        "B": "o(g(n))",
        "C": "o(f(n) + g(n))",
        "D": "o(f(n) * g(n))"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) o(f(n))**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": ".यदि किसी एल्गोरिदम का व्यवहार \"o(f(n)) if g(n)\" से घिरा है, तो शर्त हटा दिए जाने पर यह कौन सा संकेतन बन जाता है?",
      "options_hi": {
        "A": "ओ(एफ(एन))",
        "B": "ओ(जी(एन))",
        "C": "ओ(एफ(एन) + जी(एन))",
        "D": "ओ(एफ(एन) * जी(एन))"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) o(f(n))?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 18,
      "questionNumber": 18,
      "section": "Computer Science",
      "topic": "Algorithms",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The recurrence equation T(n) = T(n/2) + 1 represents the time complexity of which algorithmic paradigm?",
      "options": {
        "A": "Divide and Conquer",
        "B": "Greedy Algorithms",
        "C": "Dynamic Programming",
        "D": "Brute Force"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Divide and Conquer**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (A) accurately reflects the microarchitectural functionality.",
      "topic_hi": "एल्गोरिदम एवं विश्लेषण",
      "question_hi": "पुनरावृत्ति समीकरण T(n) = T(n/2) + 1 किस एल्गोरिथम प्रतिमान की समय जटिलता को दर्शाता है?",
      "options_hi": {
        "A": "फूट डालो और राज करो",
        "B": "Greedy Algorithms",
        "C": "डायनामिक प्रोग्रामिंग",
        "D": "पाशविक बल"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Divide and Conquer?**\n\n**विषय अवधारणा (एल्गोरिदम एवं विश्लेषण)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 19,
      "questionNumber": 19,
      "section": "Computer Science",
      "topic": "Data Structures",
      "topic_hi": "डेटा स्ट्रक्चर्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the condition to check if a circular queue implemented using an array of size N is completely full (where front and rear are pointers)?",
      "question_hi": "N आकार के ऐरे का उपयोग करके कार्यान्वित सर्कुलर कतार (Circular Queue) के पूरी तरह भरे होने की जांच करने की शर्त क्या है?",
      "options": {
        "A": "rear == N - 1",
        "B": "(rear + 1) % N == front",
        "C": "front == rear + 1",
        "D": "front == (rear + 1)"
      },
      "options_hi": {
        "A": "rear == N - 1",
        "B": "(rear + 1) % N == front",
        "C": "front == rear + 1",
        "D": "front == (rear + 1)"
      },
      "correctAnswer": "B",
      "explanation": "In a circular queue of capacity N, to distinguish between an empty and a full queue without an auxiliary counter, the queue is full when the next position after rear modulo N equals front: (rear + 1) % N == front.",
      "explanation_hi": "N साइज के सर्कुलर क्यू में जब rear का अगला स्थान मॉड्यूलो N करने पर front के बराबर हो जाता है यानी '(rear + 1) % N == front', तब सर्कुलर क्यू को पूर्ण (Full) माना जाता है।"
    },
    {
      "id": 20,
      "questionNumber": 20,
      "section": "Computer Science",
      "topic": "Data Structures",
      "topic_hi": "डेटा स्ट्रक्चर्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which tree traversal order of a Binary Search Tree (BST) always outputs keys in strictly ascending sorted order?",
      "question_hi": "बाइनरी सर्च ट्री (BST) का कौन सा ट्री ट्रैवर्सल क्रम हमेशा कुंजियों को सख्ती से आरोही (सॉर्टेड) क्रम में आउटपुट करता है?",
      "options": {
        "A": "Pre-order traversal (Root, Left, Right)",
        "B": "In-order traversal (Left, Root, Right)",
        "C": "Post-order traversal (Left, Right, Root)",
        "D": "Level-order traversal (Breadth-first)"
      },
      "options_hi": {
        "A": "प्री-ऑर्डर ट्रैवर्सल (रूट, लेफ्ट, राइट)",
        "B": "इन-ऑर्डर ट्रैवर्सल (लेफ्ट, रूट, राइट)",
        "C": "पोस्ट-ऑर्डर ट्रैवर्सल (लेफ्ट, राइट, रूट)",
        "D": "लेवल-ऑर्डर ट्रैवर्सल (ब्रेड्थ-फर्स्ट)"
      },
      "correctAnswer": "B",
      "explanation": "In a BST, every left descendant is smaller than the root, and every right descendant is greater. An In-order traversal visits Left subtree, then Root, then Right subtree, systematically processing elements in ascending numerical order.",
      "explanation_hi": "BST में लेफ्ट सबट्री के सभी नोड्स रूट से छोटे और राइट सबट्री के सभी नोड्स रूट से बड़े होते हैं। अतः इन-ऑर्डर ट्रैवर्सल (Left -> Root -> Right) हमेशा तत्वों को आरोही (सॉर्टेड) क्रम में प्रदर्शित करता है।"
    },
    {
      "id": 21,
      "questionNumber": 21,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which traversal algorithm is typically implemented using a stack data structure?",
      "options": {
        "A": "DFS",
        "B": "BFS",
        "C": "Both DFS and BFS",
        "D": "Neither DFS nor BFS"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) DFS**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (A) correctly satisfies the circuit behavior and truth table properties.",
      "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
      "question_hi": "कौन सा ट्रैवर्सल एल्गोरिदम आमतौर पर स्टैक डेटा संरचना का उपयोग करके कार्यान्वित किया जाता है?",
      "options_hi": {
        "A": "डीएफएस",
        "B": "बीएफ",
        "C": "डीएफएस और बीएफएस दोनों",
        "D": "न तो डीएफएस और न ही बीएफएस"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) DFS?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 22,
      "questionNumber": 22,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a directed graph, an edge that points from vertex A to vertex B is denoted as:",
      "options": {
        "A": "(A, B)",
        "B": "[A, B]",
        "C": "<A, B>",
        "D": "{A, B}"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) (A, B)**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (A) accurately reflects the microarchitectural functionality.",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "question_hi": "एक निर्देशित ग्राफ़ में, एक किनारा जो शीर्ष A से शीर्ष B की ओर इंगित करता है, उसे इस प्रकार दर्शाया गया है:",
      "options_hi": {
        "A": "(ए, बी)",
        "B": "[ए, बी]",
        "C": "<ए, बी>",
        "D": "{ए, बी}"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) (A, B)?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 23,
      "questionNumber": 23,
      "section": "Computer Science",
      "topic": "Data Structures",
      "topic_hi": "डेटा स्ट्रक्चर्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In an AVL tree, what is the maximum permissible balance factor (height(left) - height(right)) for any node before rebalancing rotation is triggered?",
      "question_hi": "AVL ट्री में, रीबैलेंसिंग रोटेशन शुरू होने से पहले किसी भी नोड के लिए अधिकतम अनुमेय बैलेंस फैक्टर (ऊंचाई(बायां) - ऊंचाई(दायां)) क्या होता है?",
      "options": {
        "A": "0 only",
        "B": "-1, 0, or +1",
        "C": "-2 to +2",
        "D": "Any positive integer"
      },
      "options_hi": {
        "A": "केवल 0",
        "B": "-1, 0, या +1",
        "C": "-2 से +2 तक",
        "D": "कोई भी धनात्मक पूर्णांक"
      },
      "correctAnswer": "B",
      "explanation": "An AVL tree is a strictly height-balanced Binary Search Tree. For every node, the height difference between its left and right subtrees (Balance Factor) must be within {-1, 0, +1}. If an insertion or deletion results in a balance factor of +2 or -2, rotations (LL, RR, LR, RL) restore balance in O(log N) time.",
      "explanation_hi": "AVL ट्री एक सेल्फ-बैलेंसिंग BST है जिसमें प्रत्येक नोड का बैलेंस फैक्टर (Left Height - Right Height) केवल {-1, 0, +1} में से एक हो सकता है। यदि यह मान +2 या -2 होता है, तो रोटेशन द्वारा पुनः संतुलित किया जाता है।"
    },
    {
      "id": 24,
      "questionNumber": 24,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which collision resolution technique involves placing collided elements in the next available empty slot in the hash table?",
      "options": {
        "A": "Linear probing",
        "B": "Quadratic probing",
        "C": "Separate chaining",
        "D": "Double hashing"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Linear probing**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (A) correctly satisfies the circuit behavior and truth table properties.",
      "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
      "question_hi": "किस टकराव समाधान तकनीक में टकराए गए तत्वों को हैश तालिका में अगले उपलब्ध खाली स्लॉट में रखना शामिल है?",
      "options_hi": {
        "A": "रैखिक जांच",
        "B": "द्विघात जांच",
        "C": "अलग जंजीर",
        "D": "डबल हैशिंग"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Linear probing?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 25,
      "questionNumber": 25,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In the Tower of Hanoi problem with \"n\" disks, how many moves are required to solve the problem?",
      "options": {
        "A": "n",
        "B": "2n",
        "C": "2^n -",
        "D": "2^n"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) n**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "\"एन\" डिस्क के साथ हनोई टॉवर समस्या में, समस्या को हल करने के लिए कितनी चालों की आवश्यकता है?",
      "options_hi": {
        "A": "n",
        "B": "2n",
        "C": "2^एन -",
        "D": "2^एन"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) n?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 26,
      "questionNumber": 26,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The process of removing recursion involves replacing recursive function calls with:",
      "options": {
        "A": "More recursive function calls",
        "B": "Loops",
        "C": "Additional memory allocation",
        "D": "Non-recursive function calls"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Loops**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (B) correctly satisfies the circuit behavior and truth table properties.",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "question_hi": "निम्नलिखित में से The process of removing recursion involves replacing recursive function calls with: के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options_hi": {
        "A": "अधिक पुनरावर्ती फ़ंक्शन कॉल",
        "B": "छोरों",
        "C": "अतिरिक्त मेमोरी आवंटन",
        "D": "गैर-पुनरावर्ती फ़ंक्शन कॉल"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Loops?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 27,
      "questionNumber": 27,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the worst-case time complexity of the randomized QuickSort algorithm when selecting a pivot element, and when does it occur?",
      "question_hi": "पिवट तत्व चुनते समय रैंडमाइज्ड क्विक-सॉर्ट एल्गोरिदम की सबसे खराब स्थिति (Worst-case) समय जटिलता क्या है, और यह कब होती है?",
      "options": {
        "A": "O(N log N) in all cases",
        "B": "O(N^2) when the chosen pivot is repeatedly the smallest or largest element",
        "C": "O(N) when elements are distinct",
        "D": "O(log N) on sorted inputs"
      },
      "options_hi": {
        "A": "सभी मामलों में O(N log N)",
        "B": "O(N^2) जब चुना गया पिवट बार-बार सबसे छोटा या सबसे बड़ा तत्व निकलता है",
        "C": "O(N) जब तत्व भिन्न हों",
        "D": "सॉर्टेड इनपुट पर O(log N)"
      },
      "correctAnswer": "B",
      "explanation": "QuickSort has an average time complexity of O(N log N). However, if the pivot selected at each recursive step divides the array into unbalanced partitions of size 0 and N-1 (e.g., repeatedly picking the minimum or maximum element), the recurrence relation becomes T(N) = T(N-1) + O(N), yielding O(N^2) worst-case time.",
      "explanation_hi": "क्विक-सॉर्ट की औसत समय जटिलता O(N log N) होती है। लेकिन यदि चुना गया पिवट हमेशा सबसे छोटा या सबसे बड़ा तत्व निकलता है (पार्टिशन अत्यंत असंतुलित हो), तो समय जटिलता O(N^2) हो जाती है।"
    },
    {
      "id": 28,
      "questionNumber": 28,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which algorithmic design paradigm does Dijkstra's Single-Source Shortest Path algorithm utilize, and what constraint does it impose on edge weights?",
      "question_hi": "डिज्क्स्ट्रा का सिंगल-सोर्स शॉर्टेस्ट पाथ एल्गोरिदम किस एल्गोरिदम डिज़ाइन तकनीक का उपयोग करता है, और यह किनारा भार (edge weights) पर क्या प्रतिबंध लगाता है?",
      "options": {
        "A": "Dynamic Programming; all edge weights must be strictly equal",
        "B": "Greedy Approach; all edge weights must be non-negative (>= 0)",
        "C": "Divide and Conquer; operates only on directed acyclic graphs",
        "D": "Backtracking; allows arbitrarily negative cycles"
      },
      "options_hi": {
        "A": "डायनामिक प्रोग्रामिंग; सभी किनारों का भार बिल्कुल समान होना चाहिए",
        "B": "ग्रीडी तकनीक; सभी किनारों का भार गैर-ऋणात्मक (>= 0) होना चाहिए",
        "C": "डिवाइड एंड कॉन्कर; केवल निर्देशित चक्रीय रेखांकनों पर कार्य करता है",
        "D": "बैकट्रैकिंग; मनमाने ढंग से नकारात्मक चक्रों की अनुमति देता है"
      },
      "correctAnswer": "B",
      "explanation": "Dijkstra's algorithm uses a Greedy strategy by repeatedly selecting the vertex with the minimum tentative distance. It assumes once a vertex is visited, its shortest distance is finalized. This assumption fails if there are negative edge weights (which require Bellman-Ford algorithm).",
      "explanation_hi": "डिज्क्स्ट्रा एल्गोरिदम एक ग्रीडी (Greedy) दृष्टिकोण का उपयोग करता है। यह हमेशा न्यूनतम दूरी वाले अनविजिटेड नोड को चुनता है। यह केवल गैर-ऋणात्मक (non-negative) भार वाले किनारों पर ही सही काम करता है। नकारात्मक भार के लिए बेलमैन-फोर्ड का उपयोग किया जाता है।"
    },
    {
      "id": 29,
      "questionNumber": 29,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A relation R(A, B, C, D) has functional dependencies: A -> B, B -> C, and C -> D. If A is the primary key, in what highest normal form is relation R?",
      "question_hi": "एक रिलेशन R(A, B, C, D) में कार्यात्मक निर्भरताएं (FDs) हैं: A -> B, B -> C, तथा C -> D। यदि A प्राथमिक कुंजी है, तो रिलेशन R किस उच्चतम नॉर्मल फॉर्म में है?",
      "options": {
        "A": "1NF only (Transitive dependencies exist between non-prime attributes)",
        "B": "2NF only (No partial dependency, but transitive dependencies exist)",
        "C": "3NF",
        "D": "BCNF"
      },
      "options_hi": {
        "A": "केवल 1NF (नॉन-प्राइम एट्रिब्यूट्स के बीच ट्रांजिटिव निर्भरता है)",
        "B": "केवल 2NF (कोई आंशिक निर्भरता नहीं है, परंतु ट्रांजिटिव निर्भरता उपस्थित है)",
        "C": "3NF",
        "D": "BCNF"
      },
      "correctAnswer": "B",
      "explanation": "Key is A. All non-prime attributes (B, C, D) are fully functionally dependent on A, so R is in 2NF. However, A -> B and B -> C means A -> C is a transitive dependency through non-key attribute B. Similarly B -> D is transitive. Thus, R violates 3NF and remains in 2NF.",
      "explanation_hi": "कैंडिडेट कुंजी A है। सभी गैर-कुंजी विशेषताएं A पर पूर्ण रूप से निर्भर हैं, अतः यह 2NF में है। लेकिन A -> B और B -> C के कारण A -> C एक संक्रामक (Transitive) निर्भरता है जो 3NF का उल्लंघन करती है। अतः रिलेशन केवल 2NF में है।"
    },
    {
      "id": 30,
      "questionNumber": 30,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the fundamental difference between Third Normal Form (3NF) and Boyce-Codd Normal Form (BCNF)?",
      "question_hi": "थर्ड नॉर्मल फॉर्म (3NF) और बॉयस-कॉड नॉर्मल फॉर्म (BCNF) के बीच मूलभूत अंतर क्या है?",
      "options": {
        "A": "3NF allows partial dependencies whereas BCNF prohibits them",
        "B": "In 3NF, for X -> Y, Y can be a prime attribute; in BCNF, X must strictly be a Super Key for every non-trivial dependency",
        "C": "BCNF requires multivalued dependencies whereas 3NF requires join dependencies",
        "D": "3NF relations can never be decomposed into BCNF without losing data"
      },
      "options_hi": {
        "A": "3NF आंशिक निर्भरता की अनुमति देता है जबकि BCNF इसे रोकता है",
        "B": "3NF में X -> Y के लिए Y प्राइम एट्रिब्यूट हो सकता है; BCNF में प्रत्येक नॉन-ट्रिवियल निर्भरता के लिए X का सुपर की होना अनिवार्य है",
        "C": "BCNF में मल्टीवैल्यूड निर्भरता की आवश्यकता होती है जबकि 3NF में जॉइन निर्भरता की",
        "D": "डेटा खोए बिना 3NF रिलेशंस को कभी भी BCNF में विघटित नहीं किया जा सकता"
      },
      "correctAnswer": "B",
      "explanation": "For any non-trivial functional dependency X -> Y: 3NF requires either X to be a super key OR Y to be a prime attribute (part of any candidate key). BCNF is stricter and mandates that X MUST be a super key, with no exceptions for prime attributes.",
      "explanation_hi": "3NF में किसी फंक्शनल डिपेंडेंसी X -> Y के लिए या तो X सुपर की हो, या Y प्राइम एट्रिब्यूट (कुंजी का हिस्सा) हो। BCNF अधिक सख्त है और इसमें X का अनिवार्य रूप से सुपर की (Super Key) होना ही चाहिए।"
    },
    {
      "id": 31,
      "questionNumber": 31,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which transaction isolation level prevents Dirty Reads and Non-Repeatable Reads, but may still allow Phantom Reads?",
      "question_hi": "कौन सा ट्रांजैक्शन आइसोलेशन स्तर डर्टी रीड्स और नॉन-रिपीटेबल रीड्स को रोकता है, परंतु फैंटम रीड्स की अनुमति दे सकता है?",
      "options": {
        "A": "Read Uncommitted",
        "B": "Read Committed",
        "C": "Repeatable Read",
        "D": "Serializable"
      },
      "options_hi": {
        "A": "रीड अनकमिटेड",
        "B": "रीड कमिटेड",
        "C": "रिपीटेबल रीड",
        "D": "सीरियलाइजेबल"
      },
      "correctAnswer": "C",
      "explanation": "According to SQL-92 standards: Repeatable Read locks all rows read by a query so other transactions cannot update or delete them, preventing Dirty Reads and Non-Repeatable Reads. However, other transactions can insert new matching rows, causing Phantom Reads. Serializable prevents all three.",
      "explanation_hi": "SQL मानकों के अनुसार, 'Repeatable Read' आइसोलेशन लेवल डर्टी रीड और नॉन-रिपीटेबल रीड को रोकता है, लेकिन नई रो (पंक्ति) इंसर्ट होने पर फैंटम रीड (Phantom Read) की संभावना बनी रहती है। सीरियलाइजेबल तीनों को रोकता है।"
    },
    {
      "id": 32,
      "questionNumber": 32,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The purpose of a page table in a paging system is to:",
      "options": {
        "A": "Store pages of memory",
        "B": "Manage input/output operations",
        "C": "Translate virtual addresses to physical addresses",
        "D": "Store program instructions"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Translate virtual addresses to physical addresses**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (C) correctly satisfies the circuit behavior and truth table properties.",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "question_hi": "पेजिंग सिस्टम में पेज टेबल का उद्देश्य है:",
      "options_hi": {
        "A": "स्मृति के पन्ने संग्रहित करें",
        "B": "इनपुट/आउटपुट संचालन प्रबंधित करें",
        "C": "आभासी पतों का भौतिक पतों में अनुवाद करें",
        "D": "स्टोर प्रोग्राम निर्देश"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Translate virtual addresses to physical addresses?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 33,
      "questionNumber": 33,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In multiprogramming with fixed partitions, if a process requires more memory than is available in a partition, it may lead to:",
      "options": {
        "A": "Fragmentation",
        "B": "Deadlock",
        "C": "Priority inversion",
        "D": "Starvation"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Fragmentation**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (A) accurately reflects the microarchitectural functionality.",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "question_hi": "निश्चित विभाजनों के साथ मल्टीप्रोग्रामिंग में, यदि किसी प्रक्रिया को विभाजन में उपलब्ध मेमोरी से अधिक मेमोरी की आवश्यकता होती है, तो इसका परिणाम यह हो सकता है:",
      "options_hi": {
        "A": "विखंडन",
        "B": "डेडलॉक (गतिरोध)",
        "C": "प्राथमिकता उलटा",
        "D": "भुखमरी"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Fragmentation?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 34,
      "questionNumber": 34,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is DBMS?",
      "options": {
        "A": "DBMS is a collection of queries",
        "B": ") DBMS is a high-level language",
        "C": "DBMS is a programming language",
        "D": "DBMS stores, modifies and retrieves data"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) DBMS stores, modifies and retrieves data**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (D) accurately reflects the microarchitectural functionality.",
      "topic_hi": "कंप्यूटर नेटवर्क",
      "question_hi": "कंप्यूटर साइंस अवधारणा: What is DBMS के संबंध में सही कथन या मान क्या है?",
      "options_hi": {
        "A": "DBMS प्रश्नों का एक संग्रह है",
        "B": ") DBMS एक उच्च स्तरीय भाषा है",
        "C": "DBMS एक प्रोग्रामिंग भाषा है",
        "D": "DBMS डेटा को संग्रहीत, संशोधित और पुनर्प्राप्त करता है"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) DBMS stores, modifies and retrieves data?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 35,
      "questionNumber": 35,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is correct according to the technology deployed by DBMS?",
      "options": {
        "A": "Pointers are used to maintain transactional integrity and consistency",
        "B": "Cursors are used to maintain transactional integrity and consistency",
        "C": "Locks are used to maintain transactional integrity and consistency",
        "D": "Triggers are used to maintain transactional integrity and consistency"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Locks are used to maintain transactional integrity and consistency**\n\n**Database Concept**: Relational integrity, ACID transaction properties, and normalization rules (1NF to BCNF) eliminate anomalies and preserve data consistency.\n- Option (C) strictly adheres to relational database theory.",
      "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
      "question_hi": "DBMS द्वारा तैनात तकनीक के अनुसार निम्नलिखित में से कौन सा सही है?",
      "options_hi": {
        "A": "लेन-देन की अखंडता और स्थिरता बनाए रखने के लिए पॉइंटर्स का उपयोग किया जाता है",
        "B": "Cursors are used to maintain transactional integrity and consistency",
        "C": "लेन-देन की अखंडता और स्थिरता बनाए रखने के लिए ताले का उपयोग किया जाता है",
        "D": "Triggers are used to maintain transactional integrity and consistency"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Locks are used to maintain transactional integrity and consistency?**\n\n**विषय अवधारणा (डेटाबेस प्रबंधन प्रणाली (DBMS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 36,
      "questionNumber": 36,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The term \"NTFS\" refers to which one of the following?",
      "options": {
        "A": "New Technology File System",
        "B": "New Tree File System",
        "C": "New Table type File System",
        "D": "Both A and C"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) New Technology File System**\n\n**Data Structure Characteristics**: Efficient data manipulation requires understanding asymptotic costs, pointer manipulation, and memory layout (contiguous vs node-based).\n- Option (A) reflects the standard behavior and complexity bounds.",
      "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
      "question_hi": "शब्द \"एनटीएफएस\" निम्नलिखित में से किसको संदर्भित करता है?",
      "options_hi": {
        "A": "नई तकनीकी फ़ाइल प्रणाली",
        "B": "नया ट्री फ़ाइल सिस्टम",
        "C": "नया टेबल प्रकार फ़ाइल सिस्टम",
        "D": "ए और सी दोनों"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) New Technology File System?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 37,
      "questionNumber": 37,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In SQL, what is the key difference between the WHERE clause and the HAVING clause?",
      "question_hi": "SQL में WHERE क्लॉज और HAVING क्लॉज के बीच क्या मुख्य अंतर है?",
      "options": {
        "A": "WHERE filters rows before aggregation; HAVING filters groups after GROUP BY aggregation",
        "B": "WHERE can use aggregate functions like AVG(); HAVING cannot",
        "C": "HAVING applies only to sorting ORDER BY results",
        "D": "WHERE is used only in DDL; HAVING is used only in DML"
      },
      "options_hi": {
        "A": "WHERE एग्रीगेशन से पहले व्यक्तिगत पंक्तियों को फ़िल्टर करता है; HAVING GROUP BY के बाद समूहों (Groups) को फ़िल्टर करता है",
        "B": "WHERE एग्रीगेट फंक्शन (जैसे AVG) का उपयोग कर सकता है; HAVING नहीं कर सकता",
        "C": "HAVING केवल ORDER BY परिणामों को सॉर्ट करने के लिए लागू होता है",
        "D": "WHERE केवल DDL में प्रयुक्त होता है; HAVING केवल DML में"
      },
      "correctAnswer": "A",
      "explanation": "The WHERE clause filters individual rows before grouping and cannot contain aggregate functions (e.g., COUNT, SUM). The HAVING clause is evaluated after GROUP BY to filter aggregate groups based on condition criteria.",
      "explanation_hi": "WHERE क्लॉज टेबल की व्यक्तिगत पंक्तियों पर ग्रुपिंग से पहले फ़िल्टर लगाता है और इसमें एग्रीगेट फंक्शन का प्रयोग नहीं हो सकता। HAVING क्लॉज GROUP BY के बाद समूहों पर कंडीशन लगाने के लिए उपयोग होता है।"
    },
    {
      "id": 38,
      "questionNumber": 38,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Strict Two-Phase Locking (Strict 2PL) protocol, when does a transaction release its exclusive (write) locks?",
      "question_hi": "स्ट्रिक्ट टू-फेज लॉकिंग (Strict 2PL) प्रोटोकॉल में, एक ट्रांजैक्शन अपने एक्सक्लूसिव (राइट) लॉक कब छोड़ता है?",
      "options": {
        "A": "Immediately after updating the respective data item",
        "B": "At the end of the transaction after it commits or aborts",
        "C": "As soon as the shrinking phase begins",
        "D": "Whenever another transaction requests a shared lock"
      },
      "options_hi": {
        "A": "संबंधित डेटा आइटम को अपडेट करने के तुरंत बाद",
        "B": "ट्रांजैक्शन के अंत में उसके कमिट या अबॉर्ट होने के बाद",
        "C": "जैसे ही श्रिंकिंग फेज (सिकुड़ने का चरण) शुरू होता है",
        "D": "जब भी कोई अन्य ट्रांजैक्शन शेयर्ड लॉक का अनुरोध करता है"
      },
      "correctAnswer": "B",
      "explanation": "Strict 2PL mandates that all exclusive (X) locks held by a transaction must be retained until the transaction fully commits or aborts. This guarantees strict serializability and prevents cascading aborts (cascadeless schedules).",
      "explanation_hi": "स्ट्रिक्ट 2PL प्रोटोकॉल में ट्रांजैक्शन द्वारा लिए गए सभी एक्सक्लूसिव (राइट) लॉक केवल तभी छोड़े जाते हैं जब ट्रांजैक्शन पूरी तरह कमिट या अबॉर्ट हो जाता है। इससे कैस्केडिंग रोलबैक की समस्या पूरी तरह समाप्त हो जाती है।"
    },
    {
      "id": 39,
      "questionNumber": 39,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is Belady's Anomaly in operating system virtual memory management?",
      "question_hi": "ऑपरेटिंग सिस्टम के वर्चुअल मेमोरी प्रबंधन में बेलेडी की विसंगति (Belady's Anomaly) क्या है?",
      "options": {
        "A": "Page fault rate increases as the number of allocated page frames increases under FIFO page replacement",
        "B": "LRU algorithm performs worse than Random replacement on cyclic loops",
        "C": "Thrashing causes CPU utilization to drop to zero permanently",
        "D": "Virtual memory access time exceeds physical RAM access time"
      },
      "options_hi": {
        "A": "FIFO पेज रिप्लेसमेंट के तहत आवंटित पेज फ्रेम की संख्या बढ़ाने पर पेज फॉल्ट की संख्या कम होने के बजाय बढ़ जाती है",
        "B": "चक्रीय लूप्स पर LRU एल्गोरिदम रैंडम रिप्लेसमेंट से खराब प्रदर्शन करता है",
        "C": "थ्रैशिंग के कारण CPU उपयोग स्थायी रूप से शून्य हो जाता है",
        "D": "वर्चुअल मेमोरी एक्सेस का समय भौतिक रैम एक्सेस समय से अधिक हो जाता है"
      },
      "correctAnswer": "A",
      "explanation": "Belady's Anomaly is a counter-intuitive phenomenon where increasing the number of physical page frames allocated to a process results in an increased number of page faults. It occurs in FIFO page replacement, but never in stack-based algorithms like LRU or Optimal.",
      "explanation_hi": "बेलेडी की विसंगति एक ऐसी स्थिति है जिसमें प्रोसेस को अधिक पेज फ्रेम (मेमोरी) देने के बावजूद पेज फॉल्ट्स की संख्या बढ़ जाती है। यह FIFO पेज रिप्लेसमेंट में देखी जाती है, परंतु LRU या ऑप्टिमल में कभी नहीं होती।"
    },
    {
      "id": 40,
      "questionNumber": 40,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following conditions is NOT one of the four necessary conditions for a deadlock to occur (Coffman conditions)?",
      "question_hi": "निम्नलिखित में से कौन सी स्थिति डेडलॉक उत्पन्न होने के लिए आवश्यक चार शर्तों (कॉफमैन शर्तों) में से एक नहीं है?",
      "options": {
        "A": "Mutual Exclusion",
        "B": "Hold and Wait",
        "C": "Preemption of resources by higher-priority processes",
        "D": "Circular Wait"
      },
      "options_hi": {
        "A": "म्यूचुअल एक्सक्लूजन (पारस्परिक अपवर्जन)",
        "B": "होल्ड एंड वेट",
        "C": "उच्च प्राथमिकता वाले प्रोसेस द्वारा संसाधनों का प्रीएम्पशन (छीनना)",
        "D": "सर्कुलर वेट (चक्रीय प्रतीक्षा)"
      },
      "correctAnswer": "C",
      "explanation": "The four necessary Coffman conditions for deadlock are: 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption (resources cannot be forcibly confiscated), and 4. Circular Wait. 'Preemption' actually prevents deadlock.",
      "explanation_hi": "डेडलॉक के लिए चार आवश्यक शर्तें हैं: 1. म्यूचुअल एक्सक्लूजन, 2. होल्ड एंड वेट, 3. नो प्रीएम्पशन (संसाधन छीना नहीं जा सकता), और 4. सर्कुलर वेट। संसाधनों का प्रीएम्पशन होने पर डेडलॉक कभी नहीं हो सकता।"
    },
    {
      "id": 41,
      "questionNumber": 41,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary function of routing in the network layer?",
      "options": {
        "A": "Data framing",
        "B": "Error correction",
        "C": "Finding the best path for data",
        "D": "Flow control"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Finding the best path for data**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (C) accurately reflects the microarchitectural functionality.",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "question_hi": "का प्राथमिक कार्य क्या है routing in the नेटवर्क परत (Network Layer)?",
      "options_hi": {
        "A": "डेटा फ़्रेमिंग",
        "B": "त्रुटि सुधार",
        "C": "डेटा के लिए सर्वोत्तम पथ ढूँढना",
        "D": "प्रवाह नियंत्रण"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Finding the best path for data?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 42,
      "questionNumber": 42,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is a socket in the context of process-to-process communication?",
      "options": {
        "A": "A hardware device for data transmission",
        "B": "A software interface for network communication",
        "C": "A type of cable used for high-speed data transmission",
        "D": "type of network topology"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) A software interface for network communication**\n\n**Operating System Principle**: The OS kernel orchestrates resource virtualization, process synchronization, memory paging, and file management.\n- Option (B) is the definitive mechanism implemented in modern operating systems.",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "question_hi": "प्रोसेस-टू-प्रोसेस संचार के संदर्भ में सॉकेट क्या है?",
      "options_hi": {
        "A": "डेटा ट्रांसमिशन के लिए एक हार्डवेयर डिवाइस",
        "B": "नेटवर्क संचार के लिए एक सॉफ्टवेयर इंटरफ़ेस",
        "C": "हाई-स्पीड डेटा ट्रांसमिशन के लिए उपयोग की जाने वाली एक प्रकार की केबल",
        "D": "नेटवर्क टोपोलॉजी का प्रकार"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) A software interface for network communication?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 43,
      "questionNumber": 43,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Data transmission using multiple pathways simultaneously is known as:",
      "options": {
        "A": "Parallel Transmission",
        "B": "Serial Transmission",
        "C": "Duplex Transmission",
        "D": "Half-duplex Transmission"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Parallel Transmission**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "एक साथ कई मार्गों का उपयोग करके डेटा ट्रांसमिशन को इस रूप में जाना जाता है:",
      "options_hi": {
        "A": "Parallel Transmission",
        "B": "सीरियल ट्रांसमिशन",
        "C": "डुप्लेक्स ट्रांसमिशन",
        "D": "हाफ-डुप्लेक्स ट्रांसमिशन"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Parallel Transmission?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 44,
      "questionNumber": 44,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is 'Thrashing' in an operating system, and how can it be detected and prevented?",
      "question_hi": "ऑपरेटिंग सिस्टम में 'थ्रैशिंग' (Thrashing) क्या है, और इसे कैसे पहचाना और रोका जाता है?",
      "options": {
        "A": "A process spends more time paging (swapping pages in and out) than executing instructions; prevented by the Working Set Model",
        "B": "Two processes write to the same memory location simultaneously; prevented by mutex",
        "C": "CPU executes infinite recursive loops; prevented by watchdog timer",
        "D": "Hard disk head crashes on the magnetic platter; prevented by RAID"
      },
      "options_hi": {
        "A": "जब प्रोसेस निर्देश निष्पादित करने से अधिक समय पेजिंग (स्वैपिंग) में बिताता है; वर्किंग सेट मॉडल द्वारा रोका जाता है",
        "B": "दो प्रोसेस एक ही मेमोरी लोकेशन पर एक साथ लिखते हैं; म्यूटेक्स द्वारा रोका जाता है",
        "C": "सीपीयू अनंत रिकर्सिव लूप चलाता है; वॉचडॉग टाइमर द्वारा रोका जाता है",
        "D": "हार्ड डिस्क हेड मैग्नेटिक प्लैटर पर क्रैश होता है; RAID द्वारा रोका जाता है"
      },
      "correctAnswer": "A",
      "explanation": "Thrashing occurs when a system does not have enough frames to hold the working sets of all active processes. The CPU utilization plunges as processes continually wait for page-fault I/O. It is prevented by decreasing the degree of multiprogramming and using the Working Set Strategy.",
      "explanation_hi": "थ्रैशिंग वह स्थिति है जहां ऑपरेटिंग सिस्टम उपयोगी काम करने की तुलना में पेजों की अदला-बदली (स्वैपिंग) में अधिक समय व्यतीत करता है, जिससे CPU यूटिलाइजेशन गिर जाता है। इसे वर्किंग सेट मॉडल और डिग्री ऑफ मल्टीप्रोग्रामिंग घटाकर रोका जाता है।"
    },
    {
      "id": 45,
      "questionNumber": 45,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In modern operating systems, what is the primary purpose of the Translation Lookaside Buffer (TLB)?",
      "question_hi": "आधुनिक ऑपरेटिंग सिस्टम में, ट्रांसलेशन लुकअसाइड बफर (TLB) का प्राथमिक उद्देश्य क्या है?",
      "options": {
        "A": "To store compiled binary code instructions",
        "B": "To act as a high-speed hardware cache for virtual-to-physical page table address translations",
        "C": "To buffer network packets before transmission",
        "D": "To maintain process control blocks in the ready queue"
      },
      "options_hi": {
        "A": "कंपाइल किए गए बाइनरी कोड निर्देशों को संग्रहीत करना",
        "B": "वर्चुअल-टू-फिजिकल पेज टेबल एड्रेस ट्रांसलेशन के लिए हाई-स्पीड हार्डवेयर कैश के रूप में कार्य करना",
        "C": "प्रसारण से पहले नेटवर्क पैकेटों को बफर करना",
        "D": "रेडी क्यू में प्रोसेस कंट्रोल ब्लॉक (PCB) को बनाए रखना"
      },
      "correctAnswer": "B",
      "explanation": "The TLB is an associative, high-speed hardware cache located inside the Memory Management Unit (MMU). It stores recent virtual page number to physical frame number mappings, avoiding two sequential memory accesses for every single memory read or write.",
      "explanation_hi": "TLB (Translation Lookaside Buffer) MMU के अंदर एक तेज़ हार्डवेयर कैश है जो हाल ही में अनुवादित वर्चुअल-से-फिजिकल पेज एड्रेस को स्टोर करता है, जिससे हर मेमोरी एक्सेस के लिए पेज टेबल तक बार-बार जाने की जरूरत नहीं पड़ती।"
    },
    {
      "id": 46,
      "questionNumber": 46,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Routing involves:",
      "options": {
        "A": "Dividing data into frames",
        "B": "Managing flow control",
        "C": "Determining the best path for data packets",
        "D": "Correcting errors in data transmission"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Determining the best path for data packets**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (C) accurately reflects the microarchitectural functionality.",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "question_hi": "निम्नलिखित में से Routing involves: के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options_hi": {
        "A": "डेटा को फ़्रेम में विभाजित करना",
        "B": "प्रवाह नियंत्रण का प्रबंध करना",
        "C": "डेटा पैकेट के लिए सर्वोत्तम पथ का निर्धारण",
        "D": "डेटा ट्रांसमिशन में त्रुटियों को ठीक करना"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Determining the best path for data packets?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 47,
      "questionNumber": 47,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which disk scheduling algorithm services disk I/O requests by moving the head towards one end of the disk and reversing direction only after reaching the final cylinder, like an elevator?",
      "question_hi": "कौन सा डिस्क शेड्यूलिंग एल्गोरिदम डिस्क हेड को एक छोर तक ले जाकर और केवल अंतिम सिलेंडर तक पहुंचने के बाद ही दिशा उलटकर लिफ्ट की तरह सर्विस देता है?",
      "options": {
        "A": "SSTF (Shortest Seek Time First)",
        "B": "SCAN (Elevator Algorithm)",
        "C": "FCFS (First-Come, First-Served)",
        "D": "C-SCAN (Circular SCAN)"
      },
      "options_hi": {
        "A": "SSTF (शॉर्टेस्ट सीक टाइम फर्स्ट)",
        "B": "SCAN (एलीवेटर एल्गोरिदम)",
        "C": "FCFS (फर्स्ट-कम, फर्स्ट-सर्व्ड)",
        "D": "C-SCAN (सर्कुलर स्कैन)"
      },
      "correctAnswer": "B",
      "explanation": "The SCAN algorithm (also known as the Elevator algorithm) starts at one end of the disk and moves toward the other end, servicing requests as it reaches each cylinder, until it gets to the other end of the disk. At the end, the direction is reversed. In contrast, C-SCAN returns immediately to the beginning without servicing on return.",
      "explanation_hi": "SCAN एल्गोरिदम (एलीवेटर एल्गोरिदम) डिस्क हेड को एक दिशा में अंत तक ले जाता है और रास्ते में आने वाले सभी अनुरोधों को पूरा करता है। अंत में पहुंचकर यह दिशा बदलकर विपरीत दिशा में कार्य करता है।"
    },
    {
      "id": 48,
      "questionNumber": 48,
      "section": "Computer Science",
      "topic": "Software Engineering",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which software life cycle model allows for iterative development and incorporates risk analysis?",
      "options": {
        "A": "Waterfall model",
        "B": "Prototype model",
        "C": "Spiral model",
        "D": "Agile model"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Spiral model**\n\n**Software Engineering Methodology**: High-quality software development requires structured life cycles (SDLC), formal requirement specifications (SRS), and comprehensive testing verification.\n- Option (C) correctly describes the software engineering standard.",
      "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
      "question_hi": "कौन सा सॉफ़्टवेयर जीवन चक्र मॉडल पुनरावृत्तीय विकास की अनुमति देता है और जोखिम विश्लेषण को शामिल करता है?",
      "options_hi": {
        "A": "झरना मॉडल",
        "B": "प्रोटोटाइप मॉडल",
        "C": "सर्पिल मॉडल",
        "D": "चंचल मॉडल"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Spiral model?**\n\n**विषय अवधारणा (सॉफ्टवेयर इंजीनियरिंग)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 49,
      "questionNumber": 49,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the main goal of software quality assurance?",
      "options": {
        "A": "To eliminate all defects from the software",
        "B": "To ensure the software is defect-free before release",
        "C": "To establish and enforce standards and processes to improve software quality",
        "D": "To test software under different conditions"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) To establish and enforce standards and processes to improve software quality**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (C) accurately reflects the microarchitectural functionality.",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "question_hi": "सॉफ़्टवेयर गुणवत्ता आश्वासन का मुख्य लक्ष्य क्या है?",
      "options_hi": {
        "A": "सॉफ्टवेयर से सभी दोषों को दूर करना",
        "B": "यह सुनिश्चित करने के लिए कि सॉफ़्टवेयर रिलीज़ से पहले दोष-मुक्त है",
        "C": "सॉफ़्टवेयर गुणवत्ता में सुधार के लिए मानकों और प्रक्रियाओं को स्थापित करना और लागू करना",
        "D": "To test software under different conditions"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) To establish and enforce standards and processes to improve software quality?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 50,
      "questionNumber": 50,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Given the IPv4 address 192.168.10.130 with subnet mask 255.255.255.192 (/26), what is the valid subnet network address and the broadcast address?",
      "question_hi": "सबनेट मास्क 255.255.255.192 (/26) के साथ IPv4 एड्रेस 192.168.10.130 दिया गया है। वैध सबनेट नेटवर्क एड्रेस और ब्रॉडकास्ट एड्रेस क्या होगा?",
      "options": {
        "A": "Network: 192.168.10.128, Broadcast: 192.168.10.191",
        "B": "Network: 192.168.10.128, Broadcast: 192.168.10.255",
        "C": "Network: 192.168.10.0, Broadcast: 192.168.10.127",
        "D": "Network: 192.168.10.64, Broadcast: 192.168.10.127"
      },
      "options_hi": {
        "A": "नेटवर्क: 192.168.10.128, ब्रॉडकास्ट: 192.168.10.191",
        "B": "नेटवर्क: 192.168.10.128, ब्रॉडकास्ट: 192.168.10.255",
        "C": "नेटवर्क: 192.168.10.0, ब्रॉडकास्ट: 192.168.10.127",
        "D": "नेटवर्क: 192.168.10.64, ब्रॉडकास्ट: 192.168.10.127"
      },
      "correctAnswer": "A",
      "explanation": "Mask 255.255.255.192 has 6 host bits, block size = 256 - 192 = 64. Subnet blocks start at .0, .64, .128, .192. For IP .130: it falls in the block starting at 192.168.10.128. Its broadcast address is the last IP of the block: 128 + 64 - 1 = 192.168.10.191.",
      "explanation_hi": "मास्क /26 (255.255.255.192) का ब्लॉक साइज = 256 - 192 = 64 है। सबनेट्स: 0, 64, 128, 192। आईपी .130 सबनेट 192.168.10.128 में आता है, तथा इसका ब्रॉडकास्ट पता 128 + 63 = 192.168.10.191 है।"
    },
    {
      "id": 51,
      "questionNumber": 51,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary mechanism used by TCP (Transmission Control Protocol) to achieve reliable end-to-end flow control without overwhelming the receiver?",
      "question_hi": "रिसीवर को ओवरवेल्म किए बिना विश्वसनीय एंड-टू-एंड फ्लो कंट्रोल प्राप्त करने के लिए TCP द्वारा उपयोग किया जाने वाला प्राथमिक तंत्र क्या है?",
      "options": {
        "A": "Sliding Window Protocol with dynamic Receiver Advertised Window (rwnd)",
        "B": "Hop-by-hop Token Ring circulation",
        "C": "Unacknowledged datagram dropping",
        "D": "Stop-and-Wait ARQ with fixed 1-byte packets"
      },
      "options_hi": {
        "A": "डायनेमिक रिसीवर एडवरटाइज़्ड विंडो (rwnd) के साथ स्लाइडिंग विंडो प्रोटोकॉल",
        "B": "हॉप-बाय-हॉप टोकन रिंग सर्कुलेशन",
        "C": "अनएक्नॉलेज्ड डेटाग्राम ड्रॉपिंग",
        "D": "फिक्स्ड 1-बाइट पैकेट के साथ स्टॉप-एंड-वेट ARQ"
      },
      "correctAnswer": "A",
      "explanation": "TCP flow control is governed by the Sliding Window protocol where the receiver continuously advertises its available buffer capacity in the 'rwnd' field of TCP header acknowledgments. The sender never sends more unacknowledged data than min(rwnd, cwnd).",
      "explanation_hi": "TCP फ्लो कंट्रोल स्लाइडिंग विंडो प्रोटोकॉल पर आधारित है जिसमें रिसीवर अपने हेडर के 'rwnd' फील्ड में उपलब्ध बफर स्पेस भेजता है। प्रेषक कभी भी रिसीवर बफर से अधिक डेटा नहीं भेजता, जिससे डेटा ओवरफ्लो नहीं होता।"
    },
    {
      "id": 52,
      "questionNumber": 52,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the main goal of System Testing?",
      "options": {
        "A": "Testing individual components in isolation",
        "B": "Testing the integration between different software components",
        "C": "Testing software functionality from the user's perspective",
        "D": "Identifying defects in the source code"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Testing software functionality from the user's perspective**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (C) accurately reflects the microarchitectural functionality.",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "question_hi": "कंप्यूटर साइंस अवधारणा: What is the main goal of System Testing के संबंध में सही कथन या मान क्या है?",
      "options_hi": {
        "A": "अलग-अलग घटकों का अलगाव में परीक्षण करना",
        "B": "विभिन्न सॉफ़्टवेयर घटकों के बीच एकीकरण का परीक्षण करना",
        "C": "उपयोगकर्ता के दृष्टिकोण से सॉफ़्टवेयर कार्यक्षमता का परीक्षण करना",
        "D": "स्रोत कोड में दोषों की पहचान करना"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Testing software functionality from the user's perspective?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 53,
      "questionNumber": 53,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which metric is used for estimating the size of a software project?",
      "options": {
        "A": "Cyclomatic Complexity",
        "B": "Function Points (FP)",
        "C": "Defect Density",
        "D": "Software Reliability Index"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Function Points (FP)**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "किसी सॉफ़्टवेयर प्रोजेक्ट के आकार का अनुमान लगाने के लिए किस मीट्रिक का उपयोग किया जाता है?",
      "options_hi": {
        "A": "चक्रीय जटिलता",
        "B": "फ़ंक्शन पॉइंट (एफपी)",
        "C": "दोष घनत्व",
        "D": "सॉफ़्टवेयर विश्वसनीयता सूचकांक"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Function Points (FP)?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 54,
      "questionNumber": 54,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "How does the Address Resolution Protocol (ARP) determine the physical MAC address corresponding to a known target IPv4 address on a local area network?",
      "question_hi": "एड्रेस रिज़ॉल्यूशन प्रोटोकॉल (ARP) स्थानीय नेटवर्क पर किसी ज्ञात लक्ष्य IPv4 पते के अनुरूप भौतिक MAC पते का निर्धारण कैसे करता है?",
      "options": {
        "A": "Sends an ARP Request via Broadcast (FF:FF:FF:FF:FF:FF) and receives an ARP Reply via Unicast",
        "B": "Queries an external DNS root server over UDP port 53",
        "C": "Performs binary search on the ISP routing table",
        "D": "Calculates the MAC address mathematically using a hash function on the IP"
      },
      "options_hi": {
        "A": "ब्रॉडकास्ट (FF:FF:FF:FF:FF:FF) द्वारा ARP रिक्वेस्ट भेजता है और यूनीकास्ट द्वारा ARP रिप्लाई प्राप्त करता है",
        "B": "UDP पोर्ट 53 पर बाहरी DNS रूट सर्वर से क्वेरी करता है",
        "C": "आईएसपी रूटिंग टेबल पर बाइनरी सर्च करता है",
        "D": "आईपी पर हैश फ़ंक्शन का उपयोग करके गणितीय रूप से मैक एड्रेस निकालता है"
      },
      "correctAnswer": "A",
      "explanation": "When a host needs to resolve an IP to a MAC address, it broadcasts an ARP Request frame to all devices on the LAN (destination MAC FF:FF:FF:FF:FF:FF). The target host with that IP recognizes its address and responds with a unicast ARP Reply containing its physical MAC address.",
      "explanation_hi": "ARP रिक्वेस्ट पूरे लोकल नेटवर्क पर ब्रॉडकास्ट (FF:FF:FF:FF:FF:FF) की जाती है। संबंधित आईपी वाला नोड अपनी पहचान कर केवल अनुरोधकर्ता को यूनीकास्ट (Unicast) द्वारा अपना मैक एड्रेस (ARP Reply) भेजता है।"
    },
    {
      "id": 55,
      "questionNumber": 55,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Distance Vector Routing (such as RIP), what phenomenon causes routing loops where two routers continually increment the distance to an unreachable network, and how is it mitigated?",
      "question_hi": "डिस्टेंस वेक्टर रूटिंग (जैसे RIP) में, कौन सी घटना रूटिंग लूप का कारण बनती है जहां दो राउटर किसी दुर्गम नेटवर्क की दूरी को लगातार बढ़ाते रहते हैं, और इसे कैसे रोका जाता है?",
      "options": {
        "A": "Count-to-Infinity problem; mitigated by Split Horizon with Poison Reverse",
        "B": "BGP path oscillation; mitigated by autonomous system numbers",
        "C": "OSPF area partition; mitigated by virtual links",
        "D": "ARP spoofing; mitigated by dynamic ARP inspection"
      },
      "options_hi": {
        "A": "काउंट-टू-इनफिनिटी समस्या; स्प्लिट होराइजन विथ पॉइज़न रिवर्स द्वारा कम की जाती है",
        "B": "BGP पाथ ऑसिलेशन; ऑटोनॉमस सिस्टम नंबरों द्वारा कम किया जाता है",
        "C": "OSPF एरिया पार्टिशन; वर्चुअल लिंक्स द्वारा कम किया जाता है",
        "D": "ARP स्पूफिंग; डायनेमिक एआरपी निरीक्षण द्वारा कम किया जाता है"
      },
      "correctAnswer": "A",
      "explanation": "The Count-to-Infinity problem occurs when an unreachable link causes routers to propagate outdated routes to each other, incrementing metric values up to infinity (16 in RIP). Split Horizon (never advertise a route back out the interface it was learned from) and Poison Reverse mitigate this loop.",
      "explanation_hi": "काउंट-टू-इनफिनिटी समस्या में जब कोई लिंक डाउन होता है तो राउटर एक-दूसरे से पुरानी जानकारी लेकर दूरी को 16 (अनंत) तक बढ़ाते रहते हैं। इसे 'स्प्लिट होराइजन' और 'पॉइज़न रिवर्स' तकनीकों से रोका जाता है।"
    },
    {
      "id": 56,
      "questionNumber": 56,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is an abstract class in OOP?",
      "options": {
        "A": "A class with no methods",
        "B": "A class that cannot be instantiated",
        "C": "A class that can only have private members",
        "D": "A class that cannot have methods with parameters"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) A class that cannot be instantiated**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (B) accurately reflects the microarchitectural functionality.",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "question_hi": "OOP में एक अमूर्त वर्ग क्या है?",
      "options_hi": {
        "A": "एक वर्ग जिसमें कोई विधि नहीं है",
        "B": "एक वर्ग जिसे त्वरित नहीं किया जा सकता",
        "C": "एक वर्ग जिसमें केवल निजी सदस्य हो सकते हैं",
        "D": "एक वर्ग जिसमें मापदंडों के साथ विधियाँ नहीं हो सकतीं"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) A class that cannot be instantiated?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 57,
      "questionNumber": 57,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the purpose of the \"super\" keyword in Java and other similar languages?",
      "options": {
        "A": "It refers to the superclass in inheritance",
        "B": "It creates a new object instance",
        "C": "It defines a new class",
        "D": "It handles exceptions"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) It refers to the superclass in inheritance**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (A) correctly satisfies the circuit behavior and truth table properties.",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "question_hi": "का उद्देश्य क्या है the \"super\" keyword जावा (Java) में and other similar languages?",
      "options_hi": {
        "A": "यह वंशानुक्रम में सुपरक्लास को संदर्भित करता है",
        "B": "यह एक नया ऑब्जेक्ट इंस्टेंस बनाता है",
        "C": "यह एक नये वर्ग को परिभाषित करता है",
        "D": "यह अपवादों को संभालता है"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) It refers to the superclass in संबद्धता (Inheritance)?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 58,
      "questionNumber": 58,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following best defines a class?",
      "options": {
        "A": "An instance of an object",
        "B": "A blueprint for creating objects",
        "C": "A variable holding data",
        "D": "A function with a return value"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) A blueprint for creating objects**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (B) accurately reflects the microarchitectural functionality.",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "question_hi": "निम्नलिखित में से कौन एक वर्ग को सर्वोत्तम रूप से परिभाषित करता है?",
      "options_hi": {
        "A": "किसी वस्तु का एक उदाहरण",
        "B": "वस्तुएँ बनाने का एक खाका",
        "C": "A variable holding data",
        "D": "रिटर्न वैल्यू वाला एक फ़ंक्शन"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) A blueprint for creating objects?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 59,
      "questionNumber": 59,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which cryptographic algorithm is an asymmetric public-key cryptosystem based on the mathematical difficulty of factoring large prime numbers?",
      "question_hi": "कौन सा क्रिप्टोग्राफ़िक एल्गोरिदम बड़ी अभाज्य संख्याओं (prime numbers) के गुणनखंड की गणितीय जटिलता पर आधारित एक असममित (asymmetric) सार्वजनिक-कुंजी क्रिप्टोसिस्टम है?",
      "options": {
        "A": "DES (Data Encryption Standard)",
        "B": "AES (Advanced Encryption Standard)",
        "C": "RSA (Rivest-Shamir-Adleman)",
        "D": "MD5 (Message Digest 5)"
      },
      "options_hi": {
        "A": "DES (डेटा एन्क्रिप्शन स्टैंडर्ड)",
        "B": "AES (एडवांस्ड एन्क्रिप्शन स्टैंडर्ड)",
        "C": "RSA (रिवेस्ट-शमीर-एडलमैन)",
        "D": "MD5 (मैसेज डाइजेस्ट 5)"
      },
      "correctAnswer": "C",
      "explanation": "RSA is an asymmetric cipher that uses a public key for encryption and a private key for decryption. Its security relies on the prime factorization problem: multiplying two large primes is easy, but factoring their product back into primes is computationally infeasible.",
      "explanation_hi": "RSA एक असममित (पब्लिक-की) सिफर है जिसमें एन्क्रिप्शन के लिए पब्लिक की तथा डिक्रिप्शन के लिए प्राइवेट की का उपयोग होता है। इसकी सुरक्षा दो विशाल अभाज्य संख्याओं के गुणनफल को पुनः फैक्टर करने की जटिलता पर आधारित है।"
    },
    {
      "id": 60,
      "questionNumber": 60,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "थ्योरी ऑफ कंप्यूटेशन",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following formal languages is NOT a regular language and cannot be accepted by any Deterministic Finite Automaton (DFA)?",
      "question_hi": "निम्नलिखित में से कौन सी औपचारिक भाषा एक रेगुलर भाषा नहीं है और इसे किसी भी डिटरमिनिस्टिक फाइनाइट ऑटोमेटा (DFA) द्वारा स्वीकार नहीं किया जा सकता है?",
      "options": {
        "A": "L = { w in {0, 1}* | w contains an even number of 0s }",
        "B": "L = { 0^n 1^n | n >= 0 }",
        "C": "L = { w in {a, b}* | w starts and ends with the same symbol }",
        "D": "L = { 0^m 1^n | m >= 1, n >= 1 }"
      },
      "options_hi": {
        "A": "L = { w in {0, 1}* | w में 0 की संख्या सम है }",
        "B": "L = { 0^n 1^n | n >= 0 }",
        "C": "L = { w in {a, b}* | w समान प्रतीक से शुरू और समाप्त होता है }",
        "D": "L = { 0^m 1^n | m >= 1, n >= 1 }"
      },
      "correctAnswer": "B",
      "explanation": "The language L = {0^n 1^n | n >= 0} requires remembering the exact count of 0s to match with equal 1s. Since a DFA has strictly finite memory (finite states) and no stack, it cannot count unbounded numbers. It is a Deterministic Context-Free Language accepted by a Pushdown Automaton (PDA).",
      "explanation_hi": "भाषा L = {0^n 1^n | n >= 0} के लिए 0 की संख्या याद रखने की आवश्यकता होती है ताकि 1 की संख्या की तुलना की जा सके। DFA में मेमोरी सीमित (परिमित अवस्थाएं) होती है और स्टैक नहीं होता, अतः यह रेगुलर नहीं है (यह CFL है)।"
    },
    {
      "id": 61,
      "questionNumber": 61,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What are abstract methods?",
      "options": {
        "A": "Methods that are inaccessible to the outside world",
        "B": "Methods that have implementation details",
        "C": "Methods without a body, defined in an abstract class",
        "D": "Methods that cannot be inherited"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Methods without a body, defined in an abstract class**\n\n**Data Structure Characteristics**: Efficient data manipulation requires understanding asymptotic costs, pointer manipulation, and memory layout (contiguous vs node-based).\n- Option (C) reflects the standard behavior and complexity bounds.",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "question_hi": "कंप्यूटर साइंस अवधारणा: What are abstract methods के संबंध में सही कथन या मान क्या है?",
      "options_hi": {
        "A": "वे विधियाँ जो बाहरी दुनिया के लिए अप्राप्य हैं",
        "B": "वे विधियाँ जिनमें कार्यान्वयन विवरण हैं",
        "C": "बिना किसी निकाय के विधियाँ, एक अमूर्त वर्ग में परिभाषित",
        "D": "वे विधियाँ जो विरासत में नहीं मिल सकतीं"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Methods without a body, defined in an abstract class?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 62,
      "questionNumber": 62,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which protocol is commonly used for sending emails?",
      "options": {
        "A": ".HTTPS",
        "B": "FTP",
        "C": "SMTP",
        "D": "TCP"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) SMTP**\n\n**Networking Protocol**: Across the 7 layers of OSI and 4 layers of TCP/IP, standardized protocol headers, addressing (IPv4/IPv6), and routing ensure end-to-end reliability.\n- Option (C) is the standard specification.",
      "topic_hi": "कंप्यूटर नेटवर्क",
      "question_hi": "कंप्यूटर साइंस अवधारणा: Which protocol is commonly used for sending emails के संबंध में सही कथन या मान क्या है?",
      "options_hi": {
        "A": ".HTTPS",
        "B": "एफ़टीपी",
        "C": "एसएमटीपी",
        "D": "टीसीपी"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) SMTP?**\n\n**विषय अवधारणा (कंप्यूटर नेटवर्क)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 63,
      "questionNumber": 63,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What does CSS stand for?",
      "options": {
        "A": "Cascading Style System",
        "B": "Creative Styling Script",
        "C": "Computer Style Sheets",
        "D": "Cascading Style Sheets"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Cascading Style Sheets**\n\n**Concept Overview**: Option (D) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "वेब डेवलपमेंट (Web Tech)",
      "question_hi": "CSS का पूर्ण रूप (Full Form) क्या है?",
      "options_hi": {
        "A": "कैस्केडिंग स्टाइल सिस्टम",
        "B": "क्रिएटिव स्टाइलिंग स्क्रिप्ट",
        "C": "Computer Style Sheets",
        "D": "व्यापक शैली पत्रक"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Cascading Style Sheets?**\n\n**विषय अवधारणा (वेब डेवलपमेंट (Web Tech))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 64,
      "questionNumber": 64,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which library simplifies JavaScript tasks like HTML document traversal and manipulation?",
      "options": {
        "A": "JavaFX",
        "B": "Bootstrap",
        "C": "React",
        "D": "jQuery"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) jQuery**\n\n**Data Structure Characteristics**: Efficient data manipulation requires understanding asymptotic costs, pointer manipulation, and memory layout (contiguous vs node-based).\n- Option (D) reflects the standard behavior and complexity bounds.",
      "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
      "question_hi": "कौन सी लाइब्रेरी HTML दस्तावेज़ ट्रैवर्सल और हेरफेर जैसे जावास्क्रिप्ट कार्यों को सरल बनाती है?",
      "options_hi": {
        "A": "जावाएफएक्स",
        "B": "बूटस्ट्रैप",
        "C": "प्रतिक्रिया",
        "D": "jQuery"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) jQuery?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 65,
      "questionNumber": 65,
      "section": "Computer Science",
      "topic": "Web-Based Application Development",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What does AJAX stand for?",
      "options": {
        "A": "Asynchronous JavaScript and XML",
        "B": "Automated JavaScript and XHTML",
        "C": "Advanced JavaScript and XML",
        "D": "Asynchronous JSON and XHTML"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Asynchronous JavaScript and XML**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "वेब डेवलपमेंट (Web Tech)",
      "question_hi": "AJAX का पूर्ण रूप (Full Form) क्या है?",
      "options_hi": {
        "A": "अतुल्यकालिक जावास्क्रिप्ट और एक्सएमएल",
        "B": "स्वचालित जावास्क्रिप्ट और एक्सएचटीएमएल",
        "C": "उन्नत जावास्क्रिप्ट और एक्सएमएल",
        "D": "Asynchronous JSON and XHTML"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Asynchronous JavaScript and XML?**\n\n**विषय अवधारणा (वेब डेवलपमेंट (Web Tech))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 66,
      "questionNumber": 66,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "marks": 1,
      "negativeMarks": 0,
      "question": "How does the DOM tree structure reflect the hierarchy of HTML elements?",
      "options": {
        "A": "In alphabetical order",
        "B": "Based on the element's size",
        "C": "In a parent-child relationship",
        "D": "According to the element's color"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) In a parent-child relationship**\n\n**Data Structure Characteristics**: Efficient data manipulation requires understanding asymptotic costs, pointer manipulation, and memory layout (contiguous vs node-based).\n- Option (C) reflects the standard behavior and complexity bounds.",
      "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
      "question_hi": "DOM ट्री संरचना HTML तत्वों के पदानुक्रम को कैसे दर्शाती है?",
      "options_hi": {
        "A": "वर्णानुक्रम में",
        "B": "तत्व के आकार के आधार पर",
        "C": "माता-पिता-बच्चे के रिश्ते में",
        "D": "तत्व के रंग के अनुसार"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) In a parent-child relationship?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 67,
      "questionNumber": 67,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "थ्योरी ऑफ कंप्यूटेशन",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the closure property of Regular Languages under the set operations of Union, Intersection, and Complement?",
      "question_hi": "यूनियन, इंटरसेक्शन और कॉम्प्लिमेंट के सेट ऑपरेशनों के तहत रेगुलर भाषाओं की क्लोजर विशेषता क्या है?",
      "options": {
        "A": "Closed under Union, but NOT closed under Intersection or Complement",
        "B": "Closed under Union, Intersection, and Complement",
        "C": "Closed only under Concatenation and Kleene star",
        "D": "Not closed under any Boolean operations"
      },
      "options_hi": {
        "A": "यूनियन के तहत क्लोज्ड है, लेकिन इंटरसेक्शन या कॉम्प्लिमेंट के तहत नहीं",
        "B": "यूनियन, इंटरसेक्शन और कॉम्प्लिमेंट तीनों के तहत क्लोज्ड है",
        "C": "केवल कॉनकैटेनेशन और क्लेन स्टार के तहत क्लोज्ड है",
        "D": "किसी भी बूलियन ऑपरेशन के तहत क्लोज्ड नहीं है"
      },
      "correctAnswer": "B",
      "explanation": "Regular languages form a Boolean algebra and are closed under all major operations: Union, Intersection, Complement, Concatenation, Kleene Star, Set Difference, and Reversal. (Note: Context-Free languages are NOT closed under Intersection or Complement).",
      "explanation_hi": "रेगुलर भाषाएं यूनियन, इंटरसेक्शन, कॉम्प्लिमेंट, कॉनकैटेनेशन और क्लेन क्लोजर - इन सभी संक्रियाओं के तहत क्लोज्ड (Closed) होती हैं। (जबकि कॉन्टेक्स्ट-फ्री भाषाएं इंटरसेक्शन और कॉम्प्लिमेंट में क्लोज्ड नहीं होतीं)।"
    },
    {
      "id": 68,
      "questionNumber": 68,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The Kleene Star operation accepts the following string of finite length over set A = {0,1} | where string s contains even number of 0 and 1.",
      "options": {
        "A": "01, 0011,",
        "B": "0011,",
        "C": "ε, 0011,",
        "D": "ε, 0011,"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) 0011,**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "क्लेन स्टार ऑपरेशन सेट ए = {0,1} | पर परिमित लंबाई की निम्नलिखित स्ट्रिंग को स्वीकार करता है जहां स्ट्रिंग s में 0 और 1 की सम संख्या है।",
      "options_hi": {
        "A": "01, 0011,",
        "B": "0011,",
        "C": "ε, 0011,",
        "D": "ε, 0011,"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) 0011,?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 69,
      "questionNumber": 69,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "थ्योरी ऑफ कंप्यूटेशन",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In the Chomsky Hierarchy of formal grammars, which class of automata accepts Context-Free Languages (Type 2 grammars)?",
      "question_hi": "फॉर्मल ग्रामर के चॉम्स्की पदानुक्रम (Chomsky Hierarchy) में, कौन सा ऑटोमेटा कॉन्टेक्स्ट-फ्री लैंग्वेज (टाइप 2 ग्रामर) को स्वीकार करता है?",
      "options": {
        "A": "Finite State Automata",
        "B": "Pushdown Automata (PDA)",
        "C": "Linear Bounded Automata (LBA)",
        "D": "Turing Machines"
      },
      "options_hi": {
        "A": "फाइनाइट स्टेट ऑटोमेटा",
        "B": "पुशडाउन ऑटोमेटा (PDA)",
        "C": "लीनियर बाउंडेड ऑटोमेटा (LBA)",
        "D": "ट्यूरिंग मशीन"
      },
      "correctAnswer": "B",
      "explanation": "Under the Chomsky Hierarchy: Type 3 (Regular) -> Finite Automata; Type 2 (Context-Free) -> Pushdown Automata; Type 1 (Context-Sensitive) -> Linear Bounded Automata; Type 0 (Unrestricted / Recursively Enumerable) -> Turing Machine.",
      "explanation_hi": "चॉम्स्की पदानुक्रम के अनुसार: टाइप 3 (रेगुलर) को फाइनाइट ऑटोमेटा; टाइप 2 (CFL) को पुशडाउन ऑटोमेटा (PDA); टाइप 1 (CSL) को लीनियर बाउंडेड ऑटोमेटा (LBA); तथा टाइप 0 को ट्यूरिंग मशीन स्वीकार करती है।"
    },
    {
      "id": 70,
      "questionNumber": 70,
      "section": "Computer Science",
      "topic": "Software Engineering",
      "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In software metrics, how is McCabe's Cyclomatic Complexity V(G) computed from a program control flow graph with E edges, N nodes, and P connected components?",
      "question_hi": "सॉफ्टवेयर मेट्रिक्स में, E किनारों (edges), N नोड्स और P कनेक्टेड घटकों वाले प्रोग्राम कंट्रोल फ्लो ग्राफ से मैकेबे की साइक्लोमैटिक जटिलता V(G) की गणना कैसे की जाती है?",
      "options": {
        "A": "V(G) = E - N + 2P",
        "B": "V(G) = E + N - 2P",
        "C": "V(G) = E * N / P",
        "D": "V(G) = N - E + P"
      },
      "options_hi": {
        "A": "V(G) = E - N + 2P",
        "B": "V(G) = E + N - 2P",
        "C": "V(G) = E * N / P",
        "D": "V(G) = N - E + P"
      },
      "correctAnswer": "A",
      "explanation": "McCabe's Cyclomatic Complexity formula is V(G) = E - N + 2P. For a single program module (P=1), V(G) = E - N + 2. Alternatively, V(G) = Predicate nodes + 1. It measures the number of linearly independent execution paths through the code.",
      "explanation_hi": "मैकेबे की साइक्लोमैटिक जटिलता का सूत्र V(G) = E - N + 2P होता है। एकल प्रोग्राम (P=1) के लिए यह E - N + 2 या (प्रेडिकेट नोड्स + 1) होता है। यह कोड में स्वतंत्र पाथ्स की संख्या मापता है।"
    },
    {
      "id": 71,
      "questionNumber": 71,
      "section": "Computer Science",
      "topic": "Software Engineering",
      "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which type of software module cohesion is considered the BEST and strongest in structural software design?",
      "question_hi": "स्ट्रक्चरल सॉफ्टवेयर डिजाइन में किस प्रकार के मॉड्यूल कोहेज़न (Cohesion) को सबसे अच्छा और मजबूत माना जाता है?",
      "options": {
        "A": "Coincidental Cohesion",
        "B": "Functional Cohesion",
        "C": "Temporal Cohesion",
        "D": "Logical Cohesion"
      },
      "options_hi": {
        "A": "कोइन्सिडेंटल कोहेज़न",
        "B": "फंक्शनल कोहेज़न",
        "C": "टेम्पोरल कोहेज़न",
        "D": "लॉजिकल कोहेज़न"
      },
      "correctAnswer": "B",
      "explanation": "Functional Cohesion is the strongest and most desirable type of cohesion, where every task in the module contributes strictly to a single, well-defined function (e.g., calculating square root). Coincidental cohesion is the worst where unrelated tasks are grouped together arbitrarily.",
      "explanation_hi": "फंक्शनल कोहेज़न (Functional Cohesion) सबसे मजबूत और आदर्श कोहेज़न है, जिसमें मॉड्यूल के सभी घटक केवल एक ही विशिष्ट कार्य को पूरा करने के लिए समर्पित होते हैं। सबसे खराब कोइन्सिडेंटल कोहेज़न होता है।"
    },
    {
      "id": 72,
      "questionNumber": 72,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the minimum number of states required in a DFA to accept all binary strings ending with '101'?",
      "options": {
        "A": "4 states",
        "B": "3 states",
        "C": "5 states",
        "D": "6 states"
      },
      "correctAnswer": "A",
      "explanation": "To recognize a pattern of length k at the end of a string in a DFA, the minimum number of states required is k + 1. For pattern '101' (length 3), minimum states = 3 + 1 = 4.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "'101' के साथ समाप्त होने वाली सभी बाइनरी स्ट्रिंग्स को स्वीकार करने के लिए एक DFA में आवश्यक न्यूनतम अवस्थाओं (States) की संख्या कितनी है?",
      "options_hi": {
        "A": "4 अवस्थाएं (States)",
        "B": "3 अवस्थाएं",
        "C": "5 अवस्थाएं",
        "D": "6 अवस्थाएं"
      },
      "explanation_hi": "DFA में k लंबाई के पैटर्न पर समाप्त होने वाली स्ट्रिंग को पहचानने के लिए न्यूनतम (k + 1) अवस्थाओं की आवश्यकता होती है। '101' की लंबाई 3 है, अतः न्यूनतम अवस्थाएं = 3 + 1 = 4 होंगी।"
    },
    {
      "id": 73,
      "questionNumber": 73,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "marks": 1,
      "negativeMarks": 0,
      "question": "If an NFA has 5 states excluding the initial state (total 6 states), what is the maximum possible number of states for an equivalent DFA?",
      "options": {
        "A": "64 states (2⁶)",
        "B": "32 states (2⁵)",
        "C": "16 states (2⁴)",
        "D": "128 states (2⁷)"
      },
      "correctAnswer": "A",
      "explanation": "By subset construction (powerset construction), an NFA with n states can have at most 2ⁿ states in its equivalent DFA. For total 6 states (initial + 5), maximum states = 2⁶ = 64.",
      "topic_hi": "डिजिटल लॉजिक",
      "question_hi": "यदि प्रारंभिक अवस्था को छोड़कर 5 अवस्थाओं (कुल 6 अवस्थाओं) वाले NFA को समकक्ष DFA में परिवर्तित किया जाता है, तो DFA के लिए अधिकतम संभावित अवस्थाओं की संख्या क्या है?",
      "options_hi": {
        "A": "64 अवस्थाएं (2⁶)",
        "B": "32 अवस्थाएं (2⁵)",
        "C": "16 अवस्थाएं (2⁴)",
        "D": "128 अवस्थाएं (2⁷)"
      },
      "explanation_hi": "पावरसेट निर्माण (Subset Construction) नियम के अनुसार n अवस्थाओं वाले NFA के समकक्ष DFA में अधिकतम 2ⁿ अवस्थाएं हो सकती हैं। कुल 6 अवस्थाओं हेतु 2⁶ = 64 अवस्थाएं संभव हैं।"
    },
    {
      "id": 74,
      "questionNumber": 74,
      "section": "Computer Science",
      "topic": "Software Engineering",
      "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary difference between Black-Box testing and White-Box testing methodologies?",
      "question_hi": "ब्लैक-बॉक्स टेस्टिंग और व्हाइट-बॉक्स टेस्टिंग पद्धतियों के बीच प्राथमिक अंतर क्या है?",
      "options": {
        "A": "Black-Box examines software functionality against specifications without looking at internal code; White-Box tests internal logic, branches, and code structure",
        "B": "Black-Box is performed only by developers; White-Box is performed only by end-users",
        "C": "Black-Box tests hardware; White-Box tests operating systems",
        "D": "Black-Box tests source code syntax; White-Box tests database schemas"
      },
      "options_hi": {
        "A": "ब्लैक-बॉक्स आंतरिक कोड को देखे बिना विनिर्देशों के अनुसार कार्यक्षमता का परीक्षण करता है; व्हाइट-बॉक्स आंतरिक तर्क, शाखाओं और कोड संरचना का परीक्षण करता है",
        "B": "ब्लैक-बॉक्स केवल डेवलपर्स द्वारा किया जाता है; व्हाइट-बॉक्स केवल अंतिम उपयोगकर्ताओं द्वारा",
        "C": "ब्लैक-बॉक्स हार्डवेयर का परीक्षण करता है; व्हाइट-बॉक्स ऑपरेटिंग सिस्टम का",
        "D": "ब्लैक-बॉक्स स्रोत कोड सिंटैक्स का परीक्षण करता है; व्हाइट-बॉक्स डेटाबेस स्कीमा का"
      },
      "correctAnswer": "A",
      "explanation": "Black-Box testing (Behavioral) tests functionality based on requirements/specifications without access to source code (e.g., Boundary Value Analysis, Equivalence Partitioning). White-Box testing (Structural) examines source code structure, control paths, loops, and conditions.",
      "explanation_hi": "ब्लैक-बॉक्स टेस्टिंग में आंतरिक कोड की जानकारी के बिना केवल इनपुट और आउटपुट के आधार पर कार्यक्षमता का परीक्षण किया जाता है। व्हाइट-बॉक्स टेस्टिंग में प्रोग्राम के आंतरिक लॉजिक, लूप्स और पाथ्स की जांच की जाती है।"
    },
    {
      "id": 75,
      "questionNumber": 75,
      "section": "Computer Science",
      "topic": "Web Technologies",
      "topic_hi": "वेब टेक्नोलॉजीज",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In modern CSS layout, what is the effect of setting 'box-sizing: border-box;' on HTML elements?",
      "question_hi": "आधुनिक सीएसएस लेआउट में, HTML तत्वों पर 'box-sizing: border-box;' सेट करने का क्या प्रभाव होता है?",
      "options": {
        "A": "Padding and border are included within the element's specified width and height",
        "B": "Padding is added outside the element's width, increasing total rendered dimensions",
        "C": "Removes all borders and outlines from the element",
        "D": "Forces elements to display strictly as inline text spans"
      },
      "options_hi": {
        "A": "पैडिंग और बॉर्डर तत्व की निर्दिष्ट चौड़ाई और ऊंचाई के अंदर ही शामिल हो जाते हैं",
        "B": "पैडिंग तत्व की चौड़ाई के बाहर जुड़ती है, जिससे कुल आयाम बढ़ जाते हैं",
        "C": "तत्व से सभी बॉर्डर और आउटलाइन हटा देता है",
        "D": "तत्वों को इनलाइन टेक्स्ट के रूप में प्रदर्शित करने के लिए बाध्य करता है"
      },
      "correctAnswer": "A",
      "explanation": "With 'box-sizing: border-box', the element's total width and height include its content, padding, and border. This prevents layout breakage when adding padding or borders, unlike the default 'content-box' where padding expands the element outwards.",
      "explanation_hi": "'box-sizing: border-box' सेट करने पर किसी एलिमेंट की दी गई चौड़ाई (width) और ऊंचाई में ही उसकी पैडिंग और बॉर्डर समाहित हो जाते हैं, जिससे लेआउट की गणना आसान हो जाती है और डिजाइन बिगड़ता नहीं है।"
    },
    {
      "id": 76,
      "questionNumber": 76,
      "section": "Computer Science",
      "topic": "Internet of Things",
      "marks": 1,
      "negativeMarks": 0,
      "question": "About IoT, which among the followings isnot correct?",
      "options": {
        "A": "Light sensor is analog",
        "B": "microphone is a digital sensor",
        "C": "Keyboard is a digital sensor",
        "D": "Push button is a digital Sensor"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) microphone is a digital sensor**\n\n**IoT Architecture**: Interconnected smart devices employ lightweight communication protocols (Zigbee, MQTT, CoAP) and edge/cloud integration.\n- Option (B) correctly represents the IoT standard.",
      "topic_hi": "इंटरनेट ऑफ थिंग्स (IoT)",
      "question_hi": "कंप्यूटर साइंस अवधारणा: About IoT, which among the followings isnot correct के संबंध में सही कथन या मान क्या है?",
      "options_hi": {
        "A": "लाइट सेंसर एनालॉग है",
        "B": "माइक्रोफ़ोन एक डिजिटल सेंसर है",
        "C": "कीबोर्ड एक डिजिटल सेंसर है",
        "D": "पुश बटन एक डिजिटल सेंसर है"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) microphone is a digital sensor?**\n\n**विषय अवधारणा (इंटरनेट ऑफ थिंग्स (IoT))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 77,
      "questionNumber": 77,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "BLE stands for",
      "options": {
        "A": "Bluetooth large energy",
        "B": "Bluetooth low energy",
        "C": "Bluetooth light energy",
        "D": "Bluetooth long energy"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Bluetooth low energy**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "BLE का पूर्ण रूप (Full Form) क्या है?",
      "options_hi": {
        "A": "ब्लूटूथ बड़ी ऊर्जा",
        "B": "ब्लूटूथ कम ऊर्जा",
        "C": "ब्लूटूथ प्रकाश ऊर्जा",
        "D": "ब्लूटूथ लंबी ऊर्जा"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Bluetooth low energy?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 78,
      "questionNumber": 78,
      "section": "Computer Science",
      "topic": "Internet of Things",
      "marks": 1,
      "negativeMarks": 0,
      "question": "WSN stands for?",
      "options": {
        "A": "Wireless Standard Protocol",
        "B": "Wireless Sensor Protocol",
        "C": "Wireless Serial Protocol",
        "D": "Wireless Single Protocol"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Wireless Sensor Protocol**\n\n**IoT Architecture**: Interconnected smart devices employ lightweight communication protocols (Zigbee, MQTT, CoAP) and edge/cloud integration.\n- Option (B) correctly represents the IoT standard.",
      "topic_hi": "इंटरनेट ऑफ थिंग्स (IoT)",
      "question_hi": "WSN का पूर्ण रूप (Full Form) क्या है?",
      "options_hi": {
        "A": "वायरलेस मानक प्रोटोकॉल",
        "B": "वायरलेस सेंसर प्रोटोकॉल",
        "C": "वायरलेस सीरियल प्रोटोकॉल",
        "D": "वायरलेस सिंगल प्रोटोकॉल"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Wireless Sensor Protocol?**\n\n**विषय अवधारणा (इंटरनेट ऑफ थिंग्स (IoT))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 79,
      "questionNumber": 79,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A complex SCADA (Supervisory Control and Data Acquisition) system architecture typically comprises how many functional levels of hierarchy?",
      "options": {
        "A": "4 levels",
        "B": "2 levels",
        "C": "6 levels",
        "D": "1 level"
      },
      "correctAnswer": "A",
      "explanation": "Standard SCADA hierarchical architectures generally operate across 4 distinct levels: Level 0 (Field instrumentation/sensors), Level 1 (Direct control/PLCs/RTUs), Level 2 (Supervisory computers/HMI), and Level 3/4 (Production scheduling/Enterprise management).",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "एक जटिल SCADA प्रणाली वास्तुकला में आमतौर पर पदानुक्रम के कितने कार्यात्मक स्तर (Functional Levels) होते हैं?",
      "options_hi": {
        "A": "4 स्तर (Field, Control, Supervisory, Enterprise)",
        "B": "2 स्तर",
        "C": "6 स्तर",
        "D": "1 स्तर"
      },
      "explanation_hi": "मानक SCADA आर्किटेक्चर में सामान्यतः 4 कार्यात्मक स्तर होते हैं: स्तर 0 (फील्ड उपकरण/सेंसर), स्तर 1 (प्रत्यक्ष नियंत्रण/PLC/RTU), स्तर 2 (पर्यवेक्षी कंप्यूटर/HMI), और स्तर 3/4 (उत्पादन एवं उद्यम प्रबंधन)।"
    },
    {
      "id": 80,
      "questionNumber": 80,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the role of the MISO pin in the RFID Module?",
      "options": {
        "A": "Master In Slave Out",
        "B": "Manage Internal Slave Output",
        "C": "Master Internal Search Optimization",
        "D": "Manage Input Slave Op"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Master In Slave Out**\n\n**IoT Architecture**: Interconnected smart devices employ lightweight communication protocols (Zigbee, MQTT, CoAP) and edge/cloud integration.\n- Option (A) correctly represents the IoT standard.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "कंप्यूटर साइंस अवधारणा: What is the role of the MISO pin in the RFID Module के संबंध में सही कथन या मान क्या है?",
      "options_hi": {
        "A": "मास्टर इन स्लेव आउट",
        "B": "आंतरिक स्लेव आउटपुट प्रबंधित करें",
        "C": "मास्टर आंतरिक खोज अनुकूलन",
        "D": "इनपुट स्लेव ऑप प्रबंधित करें"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Master In Slave Out?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 81,
      "questionNumber": 81,
      "section": "Computer Science",
      "topic": "Web Technologies",
      "topic_hi": "वेब टेक्नोलॉजीज",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary difference between 'let' and 'var' declarations in JavaScript (ES6)?",
      "question_hi": "जावास्क्रिप्ट (ES6) में 'let' और 'var' घोषणाओं के बीच क्या मुख्य अंतर है?",
      "options": {
        "A": "let is block-scoped and not hoisted with initialization (Temporal Dead Zone); var is function-scoped",
        "B": "var variables are immutable constants; let variables can be reassigned",
        "C": "let can only store numeric values; var stores strings and objects",
        "D": "let variables are uploaded to global window object automatically"
      },
      "options_hi": {
        "A": "let ब्लॉक-स्कोप्ड होता है और टेम्पोरल डेड ज़ोन के अधीन होता है; var फंक्शन-स्कोप्ड होता है",
        "B": "var वेरिएबल अपरिवर्तनीय स्थिरांक होते हैं; let वेरिएबल बदले जा सकते हैं",
        "C": "let केवल संख्यात्मक मान संग्रहीत कर सकता है; var स्ट्रिंग्स और ऑब्जेक्ट्स",
        "D": "let वेरिएबल्स विंडो ऑब्जेक्ट पर स्वतः जुड़ जाते हैं"
      },
      "correctAnswer": "A",
      "explanation": "'let' is block-scoped (confined to nearest enclosing curly braces {}) and resides in a Temporal Dead Zone from block entry until its definition. 'var' is function-scoped, hoisted to the top of its enclosing function, and can lead to unintended accidental variable sharing.",
      "explanation_hi": "'let' ब्लॉक-स्कोप्ड (जैसे if, for लूप के अंदर) होता है और इसके इनिशियलाइज़ेशन से पहले इसे एक्सेस करने पर ReferenceError (TDZ) आता है। जबकि 'var' फंक्शन-स्कोप्ड होता है और होइस्ट हो जाता है।"
    },
    {
      "id": 82,
      "questionNumber": 82,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Programming language commonly used for AI is___?",
      "options": {
        "A": "Lisp",
        "B": "Perl",
        "C": "Prolog",
        "D": "C++"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Perl**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (B) accurately reflects the microarchitectural functionality.",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)",
      "question_hi": "कंप्यूटर साइंस अवधारणा: Programming language commonly used for AI is___ के संबंध में सही कथन या मान क्या है?",
      "options_hi": {
        "A": "तुतलाना",
        "B": "पर्ल",
        "C": "प्रोलॉग",
        "D": "सी++"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Perl?**\n\n**विषय अवधारणा (ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 83,
      "questionNumber": 83,
      "section": "Computer Science",
      "topic": "Programming & Data Structures",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The algorithm used in the Game tree to make decisions of Win/Lose is ________________?",
      "options": {
        "A": "Heuristic Search Algorithm",
        "B": "DFS/ BFL algorithm",
        "C": "Greedy Search algorithm",
        "D": "Min/Max algorithm"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Min/Max algorithm**\n\n**Data Structure Characteristics**: Efficient data manipulation requires understanding asymptotic costs, pointer manipulation, and memory layout (contiguous vs node-based).\n- Option (D) reflects the standard behavior and complexity bounds.",
      "topic_hi": "प्रोग्रामिंग एवं डेटा संरचना (DSA)",
      "question_hi": "गेम ट्री में जीत/हार का निर्णय लेने के लिए उपयोग किया जाने वाला एल्गोरिदम ________________ है?",
      "options_hi": {
        "A": "अनुमानी खोज एल्गोरिथम",
        "B": "डीएफएस/बीएफएल एल्गोरिदम",
        "C": "लालची खोज एल्गोरिदम",
        "D": "न्यूनतम/अधिकतम एल्गोरिदम"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Min/Max algorithm?**\n\n**विषय अवधारणा (प्रोग्रामिंग एवं डेटा संरचना (DSA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 84,
      "questionNumber": 84,
      "section": "Computer Science",
      "topic": "Python Programming",
      "topic_hi": "पायथन प्रोग्रामिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Python, which of the following standard data types is MUTABLE?",
      "question_hi": "पायथन में, निम्नलिखित में से कौन सा मानक डेटा प्रकार म्यूटेबल (परिवर्तनीय) है?",
      "options": {
        "A": "Tuple",
        "B": "List",
        "C": "String",
        "D": "Frozenset"
      },
      "options_hi": {
        "A": "टपल (Tuple)",
        "B": "लिस्ट (List)",
        "C": "स्ट्रिंग (String)",
        "D": "फ्रोजनसेट (Frozenset)"
      },
      "correctAnswer": "B",
      "explanation": "In Python, Lists, Dictionaries, and Sets are mutable (their internal elements can be modified in-place without altering their object memory address). Tuples, Strings, Integers, and Frozensets are immutable.",
      "explanation_hi": "पायथन में लिस्ट (List), डिक्शनरी (Dictionary) और सेट (Set) म्यूटेबल होते हैं यानी उनके तत्वों को सीधे बदला जा सकता है। जबकि टपल, स्ट्रिंग, पूर्णांक और फ्रोजनसेट इम्यूटेबल (अपरिवर्तनीय) होते हैं।"
    },
    {
      "id": 85,
      "questionNumber": 85,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The process of removing detail from a given state representation is called ______",
      "options": {
        "A": "Extraction",
        "B": "Abstraction",
        "C": "Data Mining",
        "D": "Information Retrieval"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Abstraction**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (B) accurately reflects the microarchitectural functionality.",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "question_hi": "किसी दिए गए राज्य प्रतिनिधित्व से विवरण हटाने की प्रक्रिया को ______ कहा जाता है",
      "options_hi": {
        "A": "निष्कर्षण",
        "B": "मतिहीनता",
        "C": "डेटा खनन",
        "D": "सूचना की पुनर्प्राप्ति"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Abstraction?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 86,
      "questionNumber": 86,
      "section": "Computer Science",
      "topic": "Python Programming",
      "topic_hi": "पायथन प्रोग्रामिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the output of the Python expression: [x**2 for x in range(5) if x % 2 != 0]?",
      "question_hi": "पायथन एक्सप्रेशन का आउटपुट क्या होगा: [x**2 for x in range(5) if x % 2 != 0]?",
      "options": {
        "A": "[1, 9]",
        "B": "[0, 4, 16]",
        "C": "[1, 4, 9, 16]",
        "D": "[0, 1, 4, 9, 16]"
      },
      "options_hi": {
        "A": "[1, 9]",
        "B": "[0, 4, 16]",
        "C": "[1, 4, 9, 16]",
        "D": "[0, 1, 4, 9, 16]"
      },
      "correctAnswer": "A",
      "explanation": "range(5) produces values 0, 1, 2, 3, 4. The condition 'x % 2 != 0' filters odd numbers: 1 and 3. Computing x**2 gives 1**2 = 1 and 3**2 = 9. The resulting list is [1, 9].",
      "explanation_hi": "range(5) में 0, 1, 2, 3, 4 संख्याएं आती हैं। 'x % 2 != 0' केवल विषम संख्याओं (1 और 3) को चुनता है। इनका वर्ग (x**2) करने पर 1 और 9 प्राप्त होता है, अतः उत्तर [1, 9] है।"
    },
    {
      "id": 87,
      "questionNumber": 87,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following can improve the performance of AI agent?",
      "options": {
        "A": "Precision",
        "B": "Learning",
        "C": "Observing",
        "D": "All of the above"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Learning**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "निम्नलिखित में से कौन AI एजेंट के प्रदर्शन में सुधार कर सकता है?",
      "options_hi": {
        "A": "शुद्धता",
        "B": "सीखना",
        "C": "अवलोकन",
        "D": "उपरोक्त सभी"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Learning?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 88,
      "questionNumber": 88,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is part of the four main types for e‐commerce?",
      "options": {
        "A": "B2B",
        "B": "B2C",
        "C": "C2B",
        "D": "All of the above"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) All of the above**\n\n**Concept Overview**: Option (D) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "निम्नलिखित में से कौन सा ई-कॉमर्स के चार मुख्य प्रकारों का हिस्सा है?",
      "options_hi": {
        "A": "बी2बी",
        "B": "बी2सी",
        "C": "सी2बी",
        "D": "उपरोक्त सभी"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) उपरोक्त सभी**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 89,
      "questionNumber": 89,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the process in which a buyer posts its interest in buying a certain quantity of items, and sellers compete for the business by submitting successively lower bids until there is only one seller left?",
      "options": {
        "A": "B2B Marketplace",
        "B": "Auction",
        "C": "Reverse Auction",
        "D": "Intranet"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Auction**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (B) correctly satisfies the circuit behavior and truth table properties.",
      "topic_hi": "ऑपरेटिंग सिस्टम (OS)",
      "question_hi": "वह प्रक्रिया क्या है जिसमें एक खरीदार एक निश्चित मात्रा में वस्तुओं को खरीदने में अपनी रुचि दिखाता है, और विक्रेता क्रमिक रूप से कम बोलियाँ प्रस्तुत करके व्यवसाय के लिए प्रतिस्पर्धा करते हैं जब तक कि केवल एक विक्रेता न रह जाए?",
      "options_hi": {
        "A": "B2B बाज़ार",
        "B": "नीलामी",
        "C": "उलटी नीलामी",
        "D": "इंट्रानेट"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Auction?**\n\n**विषय अवधारणा (ऑपरेटिंग सिस्टम (OS))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 90,
      "questionNumber": 90,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "If it is easy for competitors to enter the market, the threat of new entrants is considered:",
      "options": {
        "A": "Low",
        "B": "High",
        "C": "Moderate",
        "D": "Negligible"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) High**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "यदि प्रतिस्पर्धियों के लिए बाज़ार में प्रवेश करना आसान है, तो नए प्रवेशकों के खतरे पर विचार किया जाता है:",
      "options_hi": {
        "A": "Low",
        "B": "उच्च",
        "C": "Moderate",
        "D": "नगण्य"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) High?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 91,
      "questionNumber": 91,
      "section": "Computer Science",
      "topic": "Artificial Intelligence",
      "topic_hi": "आर्टिफिशियल इंटेलिजेंस",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In heuristic search algorithms, what condition must a heuristic function h(n) satisfy to be considered 'admissible' in A* search?",
      "question_hi": "ह्यूरिस्टिक सर्च एल्गोरिदम में, A* सर्च में ह्यूरिस्टिक फ़ंक्शन h(n) को 'एडमिसिबल' (स्वीकार्य) माने जाने के लिए किस शर्त को पूरा करना होगा?",
      "options": {
        "A": "h(n) must never overestimate the true minimum cost to reach the goal from node n (h(n) <= h*(n))",
        "B": "h(n) must always equal the exact euclidean distance",
        "C": "h(n) must be strictly greater than the actual cost to speed up exploration",
        "D": "h(n) must be equal to 0 for all nodes"
      },
      "options_hi": {
        "A": "h(n) को कभी भी नोड n से लक्ष्य तक पहुंचने की वास्तविक न्यूनतम लागत से अधिक नहीं होना चाहिए (h(n) <= h*(n))",
        "B": "h(n) को हमेशा सटीक यूक्लिडियन दूरी के बराबर होना चाहिए",
        "C": "खोज को गति देने के लिए h(n) को वास्तविक लागत से अधिक होना चाहिए",
        "D": "सभी नोड्स के लिए h(n) का मान शून्य होना चाहिए"
      },
      "correctAnswer": "A",
      "explanation": "A heuristic h(n) is admissible if it never overestimates the cost to reach the goal: h(n) <= h*(n) for all n, where h*(n) is true cost. An admissible heuristic guarantees that A* tree search will always find an optimal shortest path.",
      "explanation_hi": "A* सर्च में कोई ह्यूरिस्टिक h(n) तब एडमिसिबल (स्वीकार्य) कहलाता है जब वह लक्ष्य तक पहुंचने की वास्तविक लागत से कभी भी अधिक अनुमान नहीं लगाता (h(n) <= h*(n))। यह सर्वोत्तम (ऑप्टिमल) समाधान की गारंटी देता है।"
    },
    {
      "id": 92,
      "questionNumber": 92,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which form of e‐marketplace brings together buyers and sellers from the same industry?",
      "options": {
        "A": "Horizontal",
        "B": "Vertical",
        "C": "integrated",
        "D": "isolated"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Vertical**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (B) correctly satisfies the circuit behavior and truth table properties.",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "question_hi": "ई-मार्केटप्लेस का कौन सा रूप एक ही उद्योग के खरीदारों और विक्रेताओं को एक साथ लाता है?",
      "options_hi": {
        "A": "क्षैतिज",
        "B": "खड़ा",
        "C": "एकीकृत",
        "D": "एकाकी"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Vertical?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 93,
      "questionNumber": 93,
      "section": "Computer Science",
      "topic": "Internet of Things",
      "topic_hi": "इंटरनेट ऑफ थिंग्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which lightweight publish-subscribe messaging protocol running over TCP/IP is widely used for constrained IoT devices with limited bandwidth?",
      "question_hi": "सीमित बैंडविड्थ वाले IoT उपकरणों के लिए TCP/IP पर चलने वाला कौन सा लाइटवेट पब्लिश-सब्सक्राइब मैसेजिंग प्रोटोकॉल व्यापक रूप से उपयोग किया जाता है?",
      "options": {
        "A": "MQTT (Message Queuing Telemetry Transport)",
        "B": "FTP (File Transfer Protocol)",
        "C": "SNMP (Simple Network Management Protocol)",
        "D": "Telnet"
      },
      "options_hi": {
        "A": "MQTT (मैसेज क्यूइंग टेलीमेट्री ट्रांसपोर्ट)",
        "B": "FTP (फाइल ट्रांसफर प्रोटोकॉल)",
        "C": "SNMP (सिंपल नेटवर्क मैनेजमेंट प्रोटोकॉल)",
        "D": "टेलनेट"
      },
      "correctAnswer": "A",
      "explanation": "MQTT is an extremely lightweight, publish/subscribe network protocol designed for resource-constrained devices, low-bandwidth, high-latency, or unreliable networks. It uses a central broker and supports 3 Quality of Service (QoS) levels.",
      "explanation_hi": "MQTT (Message Queuing Telemetry Transport) एक बहुत हल्का पब्लिश/सब्सक्राइब प्रोटोकॉल है जो कम मेमोरी, कम बैटरी और सीमित बैंडविड्थ वाले IoT सेंसर्स और डिवाइसेज के लिए बनाया गया है।"
    },
    {
      "id": 94,
      "questionNumber": 94,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The delay that occur during the playback of a stream is called ___________",
      "options": {
        "A": "Stream delay",
        "B": "Playback delay",
        "C": "Jitter",
        "D": "Event delay"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Jitter**\n\n**Digital Logic & Circuits**: In digital electronics and Boolean algebra, logic minimization (K-Maps) and circuit synthesis follow canonical SOP/POS rules.\n- Option (C) correctly satisfies the circuit behavior and truth table properties.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "किसी स्ट्रीम के प्लेबैक के दौरान होने वाली देरी को ___________ कहा जाता है",
      "options_hi": {
        "A": "स्ट्रीम में देरी",
        "B": "प्लेबैक में देरी",
        "C": "घबराना",
        "D": "घटना में देरी"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Jitter?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 95,
      "questionNumber": 95,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In teardown state of real time streaming protocol is ___________",
      "options": {
        "A": "the server resources for client",
        "B": "server delivers the stream to client",
        "C": "server suspends delivery of stream",
        "D": "server breaks down the connection"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) server breaks down the connection**\n\n**Concept Overview**: Option (D) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "निम्नलिखित में से In teardown state of real time streaming protocol is ___________ के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options_hi": {
        "A": "क्लाइंट के लिए सर्वर संसाधन",
        "B": "सर्वर क्लाइंट को स्ट्रीम डिलीवर करता है",
        "C": "server suspends delivery of stream",
        "D": "सर्वर कनेक्शन तोड़ देता है"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) server breaks down the connection?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 96,
      "questionNumber": 96,
      "section": "Computer Science",
      "topic": "Computer Organization & Architecture",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Real Time Interactive Audio Video, Jitter is introduced in real-time data by delay between____",
      "options": {
        "A": "pixels",
        "B": "layers",
        "C": "frames",
        "D": "packets"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) packets**\n\n**Computer Architecture**: High-speed processing relies on register operations, memory bus hierarchy, and efficient CPU datapath cycles.\n- Option (D) accurately reflects the microarchitectural functionality.",
      "topic_hi": "कंप्यूटर संगठन एवं वास्तुकला (COA)",
      "question_hi": "रियल टाइम इंटरएक्टिव ऑडियो वीडियो में, जिटर को ____ के बीच देरी से वास्तविक समय डेटा में पेश किया जाता है",
      "options_hi": {
        "A": "पिक्सेल",
        "B": "परतें",
        "C": "फ़्रेम",
        "D": "पैकेट"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) packets?**\n\n**विषय अवधारणा (कंप्यूटर संगठन एवं वास्तुकला (COA))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 97,
      "questionNumber": 97,
      "section": "Computer Science",
      "topic": "Multimedia",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Audio and Video Compression, voice is sampled at 8000 samples per second with_____________",
      "options": {
        "A": "8 bits per sample",
        "B": "5 bits per sample",
        "C": "7 bits per sample",
        "D": "6 bits per sample"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) 8 bits per sample**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "मल्टीमीडिया तकनीक",
      "question_hi": "ऑडियो और वीडियो संपीड़न में, आवाज को _____________ के साथ प्रति सेकंड 8000 नमूनों पर नमूना लिया जाता है",
      "options_hi": {
        "A": "प्रति नमूना 8 बिट्स",
        "B": "प्रति नमूना 5 बिट",
        "C": "प्रति नमूना 7 बिट्स",
        "D": "प्रति नमूना 6 बिट्स"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) 8 bits per sample?**\n\n**विषय अवधारणा (मल्टीमीडिया तकनीक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 98,
      "questionNumber": 98,
      "section": "Computer Science",
      "topic": "Multimedia",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Audio compression can be used for____________",
      "options": {
        "A": "voice and data",
        "B": "video and voice",
        "C": "speech or music",
        "D": "picture and colors"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) speech or music**\n\n**Concept Overview**: Option (C) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "मल्टीमीडिया तकनीक",
      "question_hi": "निम्नलिखित में से Audio compression can be used for____________ के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options_hi": {
        "A": "voice and data",
        "B": "वीडियो और आवाज",
        "C": "भाषण या संगीत",
        "D": "चित्र और रंग"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) speech or music?**\n\n**विषय अवधारणा (मल्टीमीडिया तकनीक)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 99,
      "questionNumber": 99,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following Boolean algebra identities represents Demorgan's first law?",
      "question_hi": "निम्नलिखित में से कौन सी बूलियन बीजगणित सर्वसमिका डि मॉर्गन के प्रथम नियम को दर्शाती है?",
      "options": {
        "A": "(A + B)' = A' . B'",
        "B": "(A . B)' = A' + B'",
        "C": "A + A'B = A + B",
        "D": "A(A + B) = A"
      },
      "options_hi": {
        "A": "(A + B)' = A' . B'",
        "B": "(A . B)' = A' + B'",
        "C": "A + A'B = A + B",
        "D": "A(A + B) = A"
      },
      "correctAnswer": "A",
      "explanation": "De Morgan's first law states that the complement of a sum is equal to the product of the complements: (A + B)' = A' . B'. De Morgan's second law is (A . B)' = A' + B'.",
      "explanation_hi": "डि मॉर्गन का पहला नियम कहता है कि योग का पूरक (complement of sum) व्यक्तिगत पूरकों के गुणनफल के बराबर होता है: (A + B)' = A' . B'। दूसरा नियम (A . B)' = A' + B' है।"
    },
    {
      "id": 100,
      "questionNumber": 100,
      "section": "Computer Science",
      "topic": "Computer Science",
      "marks": 1,
      "negativeMarks": 0,
      "question": "___________ is basically a form of pictorial presentation.",
      "options": {
        "A": "Photography",
        "B": "Animations",
        "C": "Drawing",
        "D": "Creativity"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Animations**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "कंप्यूटर साइंस",
      "question_hi": "___________ मूलतः सचित्र प्रस्तुति का एक रूप है।",
      "options_hi": {
        "A": "Photography",
        "B": "एनिमेशन",
        "C": "चित्रकला",
        "D": "रचनात्मकता"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Animations?**\n\n**विषय अवधारणा (कंप्यूटर साइंस)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 101,
      "questionNumber": 101,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The main aim of classroom teaching is",
      "options": {
        "A": "to give information",
        "B": "help to pass examination",
        "C": "syllabus coverage",
        "D": "to develop personality"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) to develop personality**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (D) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "कक्षा शिक्षण का मुख्य उद्देश्य है",
      "options_hi": {
        "A": "जानकारी देने के लिए",
        "B": "परीक्षा पास करने में मदद करें",
        "C": "पाठ्यक्रम कवरेज",
        "D": "व्यक्तित्व का विकास करना"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) to develop personality?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 102,
      "questionNumber": 102,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "To ensure participation of students we use",
      "options": {
        "A": "demonstration",
        "B": "little man's lecture",
        "C": "discussion",
        "D": "illustration"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) discussion**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "छात्रों की भागीदारी सुनिश्चित करने के लिए हम इसका उपयोग करते हैं",
      "options_hi": {
        "A": "प्रदर्शन",
        "B": "छोटे आदमी का व्याख्यान",
        "C": "बहस",
        "D": "चित्रण"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) discussion?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 103,
      "questionNumber": 103,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "learning through independent effort is",
      "options": {
        "A": "autonomous learning",
        "B": "autocratic learning",
        "C": "democratic learning",
        "D": "all the above"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) autonomous learning**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "स्वतंत्र प्रयास से सीखना है",
      "options_hi": {
        "A": "स्वायत्त शिक्षा",
        "B": "निरंकुश शिक्षा",
        "C": "लोकतांत्रिक शिक्षा",
        "D": "उपरोक्त सभी"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) autonomous learning?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 104,
      "questionNumber": 104,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Aims",
      "options": {
        "A": "may include abstract concepts",
        "B": "difficult to measure",
        "C": "may include appreciation",
        "D": "All the above"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) All the above**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (D) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से Aims के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options_hi": {
        "A": "इसमें अमूर्त अवधारणाएँ शामिल हो सकती हैं",
        "B": "मापना कठिन",
        "C": "सराहना शामिल हो सकती है",
        "D": "उपरोक्त सभी"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) All the above?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 105,
      "questionNumber": 105,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "psychomotor domain relates to",
      "options": {
        "A": "map making",
        "B": "project making",
        "C": "playing",
        "D": "all the above"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) all the above**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (D) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "साइकोमोटर डोमेन से संबंधित है",
      "options_hi": {
        "A": "मानचित्र बनाना",
        "B": "प्रोजेक्ट बनाना",
        "C": "खेलना",
        "D": "उपरोक्त सभी"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) all the above?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 106,
      "questionNumber": 106,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Heuristic means",
      "options": {
        "A": "to invertigate",
        "B": "to show",
        "C": "to do",
        "D": "to act"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) to invertigate**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से Heuristic means के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options_hi": {
        "A": "पलटना",
        "B": "जाहिर करना",
        "C": "करने के लिए",
        "D": "कार्य करने के लिए"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) to invertigate?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 107,
      "questionNumber": 107,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Armstrong gifted teaching with",
      "options": {
        "A": "Project method",
        "B": "heuristic method",
        "C": "team teaching",
        "D": "blended method"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) heuristic method**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (B) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से Armstrong gifted teaching with के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options_hi": {
        "A": "प्रोजेक्ट विधि",
        "B": "अनुमानी पद्धति",
        "C": "टीम शिक्षण",
        "D": "मिश्रित विधि"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) अनुसंधान / ह्यूरिस्टिक विधि?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 108,
      "questionNumber": 108,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Set induction relates to",
      "options": {
        "A": "previous knowledge",
        "B": "new knowledge",
        "C": "specific objectives",
        "D": "statement of aim"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) previous knowledge**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से Set induction relates to के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options_hi": {
        "A": "पूर्व ज्ञान",
        "B": "नया ज्ञान",
        "C": "विशिष्ट उद्देश्य",
        "D": "उद्देश्य का कथन"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) previous knowledge?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 109,
      "questionNumber": 109,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Diadactic teaching materials was introduced by",
      "options": {
        "A": "Pestalozzi",
        "B": "froebel",
        "C": "Montessori",
        "D": "Dewey"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Montessori**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से Diadactic teaching materials was introduced by के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options_hi": {
        "A": "Pestalozzi",
        "B": "फ्रोबेल",
        "C": "Montessori",
        "D": "डेवी"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Montessori?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 110,
      "questionNumber": 110,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The centre point of a lesson plan is",
      "options": {
        "A": "principal",
        "B": "teacher",
        "C": "student",
        "D": "none of the above"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) student**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "पाठ योजना का केन्द्र बिन्दु है",
      "options_hi": {
        "A": "प्रधानाचार्य",
        "B": "अध्यापक",
        "C": "विद्यार्थी",
        "D": "उपरोक्त में से कोई नहीं"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) student?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 111,
      "questionNumber": 111,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "According to Howard Gardner, a philosopher has …………. Type of intelligence and a sculptor has more ………… type of intelligence.",
      "options": {
        "A": "interpersonal; linguistic",
        "B": "linguistic; interpersonal",
        "C": "spatial; intrapersonal",
        "D": "intrapersonal; spatial"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) intrapersonal; spatial**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (D) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "हॉवर्ड गार्डनर के अनुसार, एक दार्शनिक के पास …………. बुद्धि का प्रकार और एक मूर्तिकार के पास ………… प्रकार की बुद्धि अधिक होती है।",
      "options_hi": {
        "A": "पारस्परिक; भाषाई",
        "B": "भाषाई; पारस्परिक",
        "C": "स्थानिक; intrapersonal",
        "D": "अंतर्वैयक्तिक; स्थानिक"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) intrapersonal; spatial?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 112,
      "questionNumber": 112,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is an example of an internal attribution for failure?",
      "options": {
        "A": "I failed the test because my friends were distracting me.",
        "B": "I received a low grade because the teacher is a tough grader.",
        "C": "I failed the test because I didn't study enough.",
        "D": "I didn't get good marks because the teacher was biased."
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) I failed the test because I didn't study enough.**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से कौन सा विफलता के लिए आंतरिक आरोप का उदाहरण है?",
      "options_hi": {
        "A": "मैं परीक्षा में असफल हो गया क्योंकि मेरे दोस्त मेरा ध्यान भटका रहे थे।",
        "B": "मुझे निम्न ग्रेड प्राप्त हुआ क्योंकि शिक्षक एक कठिन ग्रेडर है।",
        "C": "मैं परीक्षा में असफल हो गया क्योंकि मैंने पर्याप्त अध्ययन नहीं किया।",
        "D": "मुझे अच्छे अंक नहीं मिले क्योंकि शिक्षक पक्षपाती थे।"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) I failed the test because I didn't study enough.**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 113,
      "questionNumber": 113,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is an example of a question that requires students to reflect on their own thinking?",
      "options": {
        "A": "how has your thinking about the use of verbs changed since the beginning of the class ?",
        "B": "what is the relationship between nouns and verbs in a sentence?",
        "C": "what is the definition of a verb?",
        "D": "how do you change a verb to the present tense?"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) how has your thinking about the use of verbs changed since the beginning of the class ?**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से कौन सा an example of a question that requires students to reflect on their own thinking है?",
      "options_hi": {
        "A": "कक्षा की शुरुआत से क्रियाओं के उपयोग के बारे में आपकी सोच कैसे बदल गई है?",
        "B": "एक वाक्य में संज्ञा और क्रिया के बीच क्या संबंध है?",
        "C": "क्रिया की परिभाषा क्या है?",
        "D": "आप क्रिया को वर्तमान काल में कैसे बदलते हैं?"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) how has your thinking about the use of verbs changed since the beginning of the class ?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 114,
      "questionNumber": 114,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which teaching method proceeds from specific concrete examples to general rules and universal principles?",
      "question_hi": "कौन सी शिक्षण विधि विशिष्ट मूर्त उदाहरणों से सामान्य नियमों और सार्वभौमिक सिद्धांतों की ओर बढ़ती है?",
      "options": {
        "A": "Inductive Method",
        "B": "Deductive Method",
        "C": "Lecture Method",
        "D": "Drill Method"
      },
      "options_hi": {
        "A": "आगमन विधि (Inductive Method)",
        "B": "निगमन विधि (Deductive Method)",
        "C": "व्याख्यान विधि",
        "D": "अभ्यास विधि"
      },
      "correctAnswer": "A",
      "explanation": "The Inductive Method leads learners from concrete observations and specific examples to general formulas, definitions, and rules. In contrast, the Deductive Method starts with established general rules and applies them to specific instances.",
      "explanation_hi": "आगमन विधि में छात्र पहले कई विशिष्ट उदाहरणों का अवलोकन करते हैं और फिर सामान्य नियम या सूत्र का निर्माण करते हैं (उदाहरण से नियम की ओर, मूर्त से अमूर्त की ओर)।"
    },
    {
      "id": 115,
      "questionNumber": 115,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following are the characteristics of a person with scientific attitude?",
      "options": {
        "A": "Brevity",
        "B": "Objectivity",
        "C": "Adventure",
        "D": "Sharp memory"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Objectivity**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (B) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "वैज्ञानिक दृष्टिकोण वाले व्यक्ति की निम्नलिखित में से कौन सी विशेषताएँ हैं?",
      "options_hi": {
        "A": "संक्षिप्तता",
        "B": "Objectivity",
        "C": "साहसिक काम",
        "D": "तीव्र स्मृति"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Objectivity?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 116,
      "questionNumber": 116,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Library man Provide",
      "options": {
        "A": "Physical mateial",
        "B": "Digital material",
        "C": "Both A & B",
        "D": "None of these"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Both A & B**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से Library man Provide के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options_hi": {
        "A": "भौतिक सामग्री",
        "B": "डिजिटल सामग्री",
        "C": "ए और बी दोनों",
        "D": "इनमें से कोई नहीं"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Both A & B?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 117,
      "questionNumber": 117,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following components are essential for library?",
      "options": {
        "A": "Learning",
        "B": "Walking",
        "C": "Playing",
        "D": "None of these"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Learning**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से कौन सा घटक पुस्तकालय के लिए आवश्यक है?",
      "options_hi": {
        "A": "सीखना",
        "B": "चलना",
        "C": "खेलना",
        "D": "इनमें से कोई नहीं"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Learning?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 118,
      "questionNumber": 118,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A teacher should ask-",
      "options": {
        "A": "meaningful question",
        "B": "maximum number of question in a fixed time",
        "C": "as many question as possible",
        "D": "None of these"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) meaningful question**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से A teacher should ask- के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options_hi": {
        "A": "सार्थक प्रश्न",
        "B": "एक निश्चित समय में प्रश्नों की अधिकतम संख्या",
        "C": "जितना संभव हो उतने प्रश्न",
        "D": "इनमें से कोई नहीं"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) meaningful question?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 119,
      "questionNumber": 119,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following important cause of failure for teacher?",
      "options": {
        "A": "interpersonal relationship",
        "B": "verbal ability",
        "C": "lack of command over the knowledge of subject",
        "D": "None of the above"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) lack of command over the knowledge of subject**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से शिक्षक की विफलता का कौन सा महत्वपूर्ण कारण है?",
      "options_hi": {
        "A": "पारस्परिक संबंध",
        "B": "मौखिक क्षमता",
        "C": "विषय के ज्ञान पर पकड़ का अभाव",
        "D": "उपरोक्त में से कोई नहीं"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) lack of command over the knowledge of subject?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 120,
      "questionNumber": 120,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Teacher should master during his teaching period",
      "options": {
        "A": "in one of the teaching method",
        "B": "equally acros all teaching method",
        "C": "Both A & B",
        "D": "None of these"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) equally acros all teaching method**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (B) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "शिक्षक को अपने शिक्षण काल ​​के दौरान महारत हासिल करनी चाहिए",
      "options_hi": {
        "A": "शिक्षण पद्धति में से एक में",
        "B": "सभी शिक्षण पद्धतियों में समान रूप से",
        "C": "ए और बी दोनों",
        "D": "इनमें से कोई नहीं"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) equally acros all teaching method?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 121,
      "questionNumber": 121,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Knowledge is-",
      "options": {
        "A": "Information",
        "B": "Application",
        "C": "Analysis",
        "D": "Understanding"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Information**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से Knowledge is- के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options_hi": {
        "A": "जानकारी",
        "B": "आवेदन",
        "C": "विश्लेषण",
        "D": "समझ"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Information?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 122,
      "questionNumber": 122,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Formative evaluation is conducted",
      "options": {
        "A": "After the teaching learning process",
        "B": "Before the teaching learning process",
        "C": "During the teaching learning process",
        "D": "All of the above"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) During the teaching learning process**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "रचनात्मक मूल्यांकन आयोजित किया जाता है",
      "options_hi": {
        "A": "शिक्षण सीखने की प्रक्रिया के बाद",
        "B": "शिक्षण-अधिगम प्रक्रिया से पहले",
        "C": "शिक्षण-अधिगम प्रक्रिया के दौरान",
        "D": "उपरोक्त सभी"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) During the teaching learning process?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 123,
      "questionNumber": 123,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which technique is used for evaluation of interest?",
      "options": {
        "A": "Observation technique",
        "B": "Check list",
        "C": "Rating scale",
        "D": "Projective Technique"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Rating scale**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (C) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "रुचि के मूल्यांकन के लिए किस तकनीक का उपयोग किया जाता है?",
      "options_hi": {
        "A": "अवलोकन तकनीक",
        "B": "सूची जांचें",
        "C": "दर्ज़ा पैमाने",
        "D": "प्रोजेक्टिव तकनीक"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Rating scale?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 124,
      "questionNumber": 124,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is not a type of curriculum design?",
      "options": {
        "A": "Subject-centered",
        "B": "Problem Centered",
        "C": "Learner-Centered",
        "D": "Teacher-Centered"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Teacher-Centered**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (D) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से कौन सा पाठ्यक्रम डिज़ाइन का एक प्रकार नहीं है?",
      "options_hi": {
        "A": "विषय केन्द्रित",
        "B": "समस्या केन्द्रित",
        "C": "शिक्षार्थी केंद्रित",
        "D": "शिक्षक-केन्द्रित"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Teacher-Centered?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 125,
      "questionNumber": 125,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following is not the nature of curriculum?",
      "options": {
        "A": "Critical",
        "B": "Creative",
        "C": "Conservative",
        "D": "Active"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Active**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (D) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से कौन सा the nature of curriculum नहीं है?",
      "options_hi": {
        "A": "गंभीर",
        "B": "रचनात्मक",
        "C": "रूढ़िवादी",
        "D": "सक्रिय"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Active?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 126,
      "questionNumber": 126,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "The biggest challenge before democracy is -",
      "options": {
        "A": "Fundamentalism",
        "B": "Castism",
        "C": "Regionalism",
        "D": "All the above"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Fundamentalism**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "लोकतंत्र के समक्ष सबसे बड़ी चुनौती है -",
      "options_hi": {
        "A": "कट्टरवाद",
        "B": "जातिवाद",
        "C": "क्षेत्रवाद",
        "D": "उपरोक्त सभी"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Fundamentalism?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 127,
      "questionNumber": 127,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A teacher shoul behave with all the student as -",
      "options": {
        "A": "as a friend",
        "B": "as a master",
        "C": "equally",
        "D": "personally"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) as a friend**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "एक शिक्षक को सभी विद्यार्थियों के साथ ऐसा व्यवहार करना चाहिए -",
      "options_hi": {
        "A": "एक दोस्त के रूप में",
        "B": "एक गुरु के रूप में",
        "C": "समान रूप से",
        "D": "व्यक्तिगत रूप से"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) as a friend?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 128,
      "questionNumber": 128,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Failure can be our best teacher if-",
      "options": {
        "A": "we work harder than before",
        "B": "we know the reasons of failure",
        "C": "we know the reasons of failure and then being encouraged we work harder than before",
        "D": "none of the above"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) we work harder than before**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "असफलता हमारी सबसे अच्छी शिक्षक हो सकती है यदि-",
      "options_hi": {
        "A": "हम पहले से ज्यादा मेहनत करते हैं",
        "B": "हम असफलता के कारणों को जानते हैं",
        "C": "हम असफलता के कारणों को जानते हैं और फिर प्रोत्साहित होकर पहले से अधिक मेहनत करते हैं",
        "D": "उपरोक्त में से कोई नहीं"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) we work harder than before?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 129,
      "questionNumber": 129,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Chal-Board is a kind of teaching aid-",
      "options": {
        "A": "Visual",
        "B": "Audio",
        "C": "Audio-Visual",
        "D": "All of the above"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Visual**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से Chal-Board is a kind of teaching aid- के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options_hi": {
        "A": "तस्वीर",
        "B": "ऑडियो",
        "C": "दृश्य-श्रव्य",
        "D": "उपरोक्त सभी"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Visual?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 130,
      "questionNumber": 130,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Television is",
      "options": {
        "A": "Visual aid",
        "B": "Audio-visual aid",
        "C": "Audio aid",
        "D": "None of the above"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Visual aid**\n\n**Key Pedagogical Concept**: In teacher training and instructional design, effective learning centers on active student engagement, clear behavioral objectives (Bloom's Taxonomy), and diagnostic/formative evaluation.\n- Option (A) represents the standard pedagogical principle established by Bihar STET and NCTE teaching frameworks.",
      "topic_hi": "शिक्षण कला (Pedagogy)",
      "question_hi": "निम्नलिखित में से Television is के संदर्भ में उपयुक्त विकल्प चुनें।",
      "options_hi": {
        "A": "दृश्य सहायता",
        "B": "श्रव्य-दृश्य सहायता",
        "C": "ऑडियो सहायता",
        "D": "उपरोक्त में से कोई नहीं"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Visual aid?**\n\n**विषय अवधारणा (शिक्षण कला (Pedagogy))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 131,
      "questionNumber": 131,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "There were widespread rises against the British in the 1820s. Which one of the following did not revolt in the 1820s?",
      "options": {
        "A": "Santhals",
        "B": "Ahoms",
        "C": "Pagal Panthis",
        "D": "Ramosi"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Santhals**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "सामान्य ज्ञान (GK)",
      "question_hi": "1820 के दशक में अंग्रेजों के खिलाफ व्यापक विद्रोह हुए। निम्नलिखित में से किसने 1820 के दशक में विद्रोह नहीं किया था?",
      "options_hi": {
        "A": "संथाल",
        "B": "अहोम",
        "C": "पागल पंथी",
        "D": "रामोसी"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Santhals?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 132,
      "questionNumber": 132,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "If the Sun rises at Tirap in Arunachal Pradesh at 5.00 am (IST), then when (IST) the Sun will rise in Kandla, Gujarat?",
      "options": {
        "A": "About 5.00 a.m.",
        "B": "About 6.20 a.m.",
        "C": "About 7.30 a.m.",
        "D": "About 7.00 a.m."
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) About 7.00 a.m.**\n\n**Concept Overview**: Option (D) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "सामान्य ज्ञान (GK)",
      "question_hi": "यदि अरुणाचल प्रदेश के तिराप में सूर्य सुबह 5.00 बजे (IST) उगता है, तो गुजरात के कांडला में सूर्य कब (IST) उगेगा?",
      "options_hi": {
        "A": "सुबह करीब 5.00 बजे",
        "B": "सुबह करीब 6.20 बजे",
        "C": "सुबह करीब साढ़े सात बजे",
        "D": "सुबह करीब सात बजे"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) About 7.00 a.m.**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 133,
      "questionNumber": 133,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the maximum investment by any single investor in an Indian company?",
      "options": {
        "A": "10%",
        "B": "15%",
        "C": "20%",
        "D": "25%"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) 10%**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "सामान्य ज्ञान (GK)",
      "question_hi": "कंप्यूटर साइंस अवधारणा: What is the maximum investment by any single investor in an Indian company के संबंध में सही कथन या मान क्या है?",
      "options_hi": {
        "A": "10%",
        "B": "15%",
        "C": "20%",
        "D": "25%"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) 10%?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 134,
      "questionNumber": 134,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Who among the following was not related to Champaran Satyagraha?",
      "options": {
        "A": "Dr. Rajendra Prasad",
        "B": "Anugrah Narayan Singh",
        "C": "JB Kriplani",
        "D": "Jai Prakash Narayan"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Jai Prakash Narayan**\n\n**Concept Overview**: Option (D) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "सामान्य ज्ञान (GK)",
      "question_hi": "निम्नलिखित में से कौन चंपारण सत्याग्रह से संबंधित नहीं था?",
      "options_hi": {
        "A": "डॉ. राजेंद्र प्रसाद",
        "B": "अनुग्रह नारायण सिंह",
        "C": "जेबी कृपलानी",
        "D": "जय प्रकाश नारायण"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Jai Prakash Narayan?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 135,
      "questionNumber": 135,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Visva-Bharati University, which was seen in the news recently, is located in which state?",
      "options": {
        "A": "Uttar Pradesh",
        "B": "Bihar",
        "C": "West Bengal",
        "D": "Odisha"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) West Bengal**\n\n**Concept Overview**: Option (C) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "सामान्य ज्ञान (GK)",
      "question_hi": "विश्वभारती विश्वविद्यालय, जो हाल ही में खबरों में था, किस राज्य में स्थित है?",
      "options_hi": {
        "A": "उतार प्रदेश।",
        "B": "बिहार",
        "C": "पश्चिम बंगाल",
        "D": "ओडिशा"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) West Bengal?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 136,
      "questionNumber": 136,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Rama plays cricket with his friends every evening. Which energy does he use to play cricket?",
      "options": {
        "A": "Sound energy",
        "B": "Light energy",
        "C": "Chemical energy",
        "D": "Muscular energy"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) Muscular energy**\n\n**Concept Overview**: Option (D) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "सामान्य ज्ञान (GK)",
      "question_hi": "राम हर शाम अपने दोस्तों के साथ क्रिकेट खेलता है। वह क्रिकेट खेलने के लिए किस ऊर्जा का उपयोग करता है?",
      "options_hi": {
        "A": "ध्वनि ऊर्जा",
        "B": "प्रकाश ऊर्जा",
        "C": "रसायन ऊर्जा",
        "D": "मांसपेशियों की ऊर्जा"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) Muscular energy?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 137,
      "questionNumber": 137,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which one of the following is 'sticky rice' and is a common variety of rice in Assam?",
      "options": {
        "A": "Ponni rice",
        "B": "Bora rice",
        "C": "Arborio rice",
        "D": "Bomba rice"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Bora rice**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "सामान्य ज्ञान (GK)",
      "question_hi": "कंप्यूटर साइंस अवधारणा: Which one of the following is 'sticky rice' and is a common variety of rice in Assam के संबंध में सही कथन या मान क्या है?",
      "options_hi": {
        "A": "पोन्नी चावल",
        "B": "बोरा चावल",
        "C": "अरबोरियो चावल",
        "D": "बोम्बा चावल"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Bora rice?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 138,
      "questionNumber": 138,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "When we burn fuels, we get :",
      "options": {
        "A": "Light and sound energy",
        "B": "Only light energy",
        "C": "Heat and light energy",
        "D": "Mechanical and Light energy"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) Heat and light energy**\n\n**Concept Overview**: Option (C) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "सामान्य ज्ञान (GK)",
      "question_hi": "जब हम ईंधन जलाते हैं, तो हमें मिलता है:",
      "options_hi": {
        "A": "प्रकाश एवं ध्वनि ऊर्जा",
        "B": "केवल प्रकाश ऊर्जा",
        "C": "ऊष्मा और प्रकाश ऊर्जा",
        "D": "यांत्रिक और प्रकाश ऊर्जा"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) Heat and light energy?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 139,
      "questionNumber": 139,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Consider the following statements about snakes and identify the Incorrect one from the following:",
      "options": {
        "A": "They chew up their prey",
        "B": "They swallow their food whole",
        "C": "Snakes have sharp teeth",
        "D": "Poisonous snakes have fangs."
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) They chew up their prey**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "सामान्य ज्ञान (GK)",
      "question_hi": "साँपों के बारे में निम्नलिखित कथनों पर विचार करें और निम्नलिखित में से गलत की पहचान करें:",
      "options_hi": {
        "A": "वे अपने शिकार को चबा जाते हैं",
        "B": "वे अपना भोजन पूरा निगल लेते हैं",
        "C": "साँपों के दाँत नुकीले होते हैं",
        "D": "Poisonous snakes have fangs."
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) They chew up their prey?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 140,
      "questionNumber": 140,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "marks": 1,
      "negativeMarks": 0,
      "question": "With respect to Gujarat, the locations of Uttar Pradesh and Andhra Pradesh, respectively, are:",
      "options": {
        "A": "North-West; Saouth-East",
        "B": "North-West; South-West",
        "C": "North-East; South-West",
        "D": "North-East; South-East"
      },
      "correctAnswer": "D",
      "explanation": "**Correct Answer: (D) North-East; South-East**\n\n**Reasoning Logic**: Analyzing the pattern, sequence progression, or syllogistic validity demonstrates that option (D) uniquely satisfies the given conditions.",
      "topic_hi": "तार्किक विचार",
      "question_hi": "गुजरात के संबंध में, उत्तर प्रदेश और आंध्र प्रदेश के स्थान क्रमशः हैं:",
      "options_hi": {
        "A": "उत्तर-पश्चिम; दक्षिण-पूर्व",
        "B": "उत्तर-पश्चिम; दक्षिण पश्चिम",
        "C": "ईशान कोण; दक्षिण पश्चिम",
        "D": "ईशान कोण; दक्षिण पूर्व"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (D) North-East; South-East?**\n\n**विषय अवधारणा (तार्किक विचार)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (D) सही है।"
    },
    {
      "id": 141,
      "questionNumber": 141,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which one of the following groups have all 3-dimensional shapes?",
      "options": {
        "A": "Cube, Cuboid, Sphere, Cylinder",
        "B": "Cube, Cuboid, Semi-Circle, Cone",
        "C": "Cube, Cuboid, Circle, Cone",
        "D": "Cube, Cuboid, Circle, Triangle"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Cube, Cuboid, Sphere, Cylinder**\n\n**Mathematical Principle**: Solve using standard mathematical formulas and proportional relationships.\n- The correct step-by-step simplification leads directly to option (A): **Cube, Cuboid, Sphere, Cylinder**.",
      "topic_hi": "गणितीय अभिरुचि",
      "question_hi": "निम्नलिखित में से किस समूह में सभी त्रि-आयामी आकृतियाँ हैं?",
      "options_hi": {
        "A": "घन, घनाभ, गोला, बेलन",
        "B": "घन, घनाभ, अर्धवृत्त, शंकु",
        "C": "घन, घनाभ, वृत्त, शंकु",
        "D": "Cube, Cuboid, Circle, Triangle"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Cube, Cuboid, Sphere, Cylinder?**\n\n**विषय अवधारणा (गणितीय अभिरुचि)**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 142,
      "questionNumber": 142,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the missing number in the sequence: 1, 6, 15, __, 45, 66, 91?",
      "options": {
        "A": "28",
        "B": "25",
        "C": "32",
        "D": "35"
      },
      "correctAnswer": "A",
      "explanation": "The differences between consecutive terms form an arithmetic progression increasing by 4: (6-1)=5, (15-6)=9, (28-15)=13, (45-28)=17, (66-45)=21, (91-66)=25. The missing number is 15 + 13 = 28.",
      "topic_hi": "तार्किक विचार",
      "question_hi": "दी गई संख्या श्रेणी में लुप्त संख्या क्या है: 1, 6, 15, __, 45, 66, 91?",
      "options_hi": {
        "A": "28",
        "B": "25",
        "C": "32",
        "D": "35"
      },
      "explanation_hi": "पदों के बीच का अंतर 4 की वृद्धि के साथ बढ़ रहा है: 5, 9, 13, 17, 21, 25। अतः 15 + 13 = 28 सही उत्तर है।"
    },
    {
      "id": 143,
      "questionNumber": 143,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A whole number is added to 100 and the same number is subtracted from 100. What is the sum of the two resulting numbers so obtained?",
      "options": {
        "A": "200",
        "B": "100",
        "C": "0",
        "D": "50"
      },
      "correctAnswer": "A",
      "explanation": "Let the whole number be x. The two resulting numbers are (100 + x) and (100 - x). Their sum is (100 + x) + (100 - x) = 200.",
      "topic_hi": "गणितीय अभिरुचि",
      "question_hi": "एक पूर्ण संख्या को 100 में जोड़ा जाता है और उसी संख्या को 100 में से घटाया जाता है। इस प्रकार प्राप्त दोनों परिणामी संख्याओं का योग क्या होगा?",
      "options_hi": {
        "A": "200",
        "B": "100",
        "C": "0",
        "D": "50"
      },
      "explanation_hi": "माना वह पूर्ण संख्या x है। परिणामी संख्याएं (100 + x) और (100 - x) होंगी। इनका योग = (100 + x) + (100 - x) = 200 होगा।"
    },
    {
      "id": 144,
      "questionNumber": 144,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the sum of the series 5 - 5 + 5 - 5 + 5 - 5 ... to an odd number of terms?",
      "options": {
        "A": "5",
        "B": "0",
        "C": "-5",
        "D": "15"
      },
      "correctAnswer": "A",
      "explanation": "In this alternating series, every adjacent pair (5 - 5) sums to 0. When there is an odd number of terms (2k + 1), k pairs cancel out to 0, leaving the single final term +5. Hence the sum is always 5.",
      "topic_hi": "गणितीय अभिरुचि",
      "question_hi": "श्रेणी 5 - 5 + 5 - 5 + 5 - 5 ... के विषम संख्या में पदों (Odd Number of Terms) का योग क्या होगा?",
      "options_hi": {
        "A": "5",
        "B": "0",
        "C": "-5",
        "D": "15"
      },
      "explanation_hi": "इस श्रेणी में प्रत्येक जोड़ा (5 - 5 = 0) शून्य हो जाता है। जब पदों की संख्या विषम (जैसे 1, 3, 5, ...) हो, तो जोड़े कटने के बाद अंत में +5 बचता है। अतः योग सदैव 5 होगा।"
    },
    {
      "id": 145,
      "questionNumber": 145,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following arrangements represents a descending order of numbers?",
      "options": {
        "A": "10.5, 1.50, 1.05, 1.055, 1.005, 0.",
        "B": "10.5, 1.50, 1.055, 1.05, 1.005, 0.",
        "C": "1.05, 1.005, 1.50, 1.055, 10.5, 0.",
        "D": "10.5, 1.05, 1.055, 1.50, 1.005, 0."
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) 10.5, 1.50, 1.055, 1.05, 1.005, 0.**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "सामान्य ज्ञान (GK)",
      "question_hi": "निम्नलिखित में से कौन सी व्यवस्था संख्याओं के घटते क्रम को दर्शाती है?",
      "options_hi": {
        "A": "10.5, 1.50, 1.05, 1.055, 1.005, 0.",
        "B": "10.5, 1.50, 1.055, 1.05, 1.005, 0.",
        "C": "1.05, 1.005, 1.50, 1.055, 10.5, 0.",
        "D": "10.5, 1.05, 1.055, 1.50, 1.005, 0."
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) 10.5, 1.50, 1.055, 1.05, 1.005, 0.**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 146,
      "questionNumber": 146,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Monday : April : : Friday : ?",
      "options": {
        "A": "July",
        "B": "Saturday",
        "C": "August",
        "D": "Tuesday"
      },
      "correctAnswer": "C",
      "explanation": "**Correct Answer: (C) August**\n\n**Concept Overview**: Option (C) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "सामान्य ज्ञान (GK)",
      "question_hi": "कंप्यूटर साइंस अवधारणा: Monday : April : : Friday :  के संबंध में सही कथन या मान क्या है?",
      "options_hi": {
        "A": "जुलाई",
        "B": "शनिवार",
        "C": "अगस्त",
        "D": "मंगलवार"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (C) August?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) सही है।"
    },
    {
      "id": 147,
      "questionNumber": 147,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Choose the word which is least like the other words in the group.",
      "options": {
        "A": "Kidney",
        "B": "Heart",
        "C": "Lung",
        "D": "Ear"
      },
      "correctAnswer": "B",
      "explanation": "**Correct Answer: (B) Heart**\n\n**Concept Overview**: Option (B) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "सामान्य ज्ञान (GK)",
      "question_hi": "वह शब्द चुनें जो समूह के अन्य शब्दों से कम से कम मेल खाता हो।",
      "options_hi": {
        "A": "किडनी",
        "B": "दिल",
        "C": "फेफड़ा",
        "D": "कान"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (B) Heart?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (B) सही है।"
    },
    {
      "id": 148,
      "questionNumber": 148,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Find the next number in the sequence: 60, 30, 120, 15, 240, __?",
      "options": {
        "A": "7.5",
        "B": "8",
        "C": "10",
        "D": "12"
      },
      "correctAnswer": "A",
      "explanation": "The series consists of two alternating patterns: Odd positions multiply by 2 (60 -> 120 -> 240), while Even positions divide by 2 (30 -> 15 -> 7.5). The 6th term is 15 / 2 = 7.5.",
      "topic_hi": "सामान्य ज्ञान (GK)",
      "question_hi": "दी गई संख्या श्रेणी में अगला पद क्या होगा: 60, 30, 120, 15, 240, __?",
      "options_hi": {
        "A": "7.5",
        "B": "8",
        "C": "10",
        "D": "12"
      },
      "explanation_hi": "यह दो एकांतर श्रेणियों का संयोजन है: विषम स्थान 2 से गुणा होते हैं (60 -> 120 -> 240) और सम स्थान 2 से विभाजित होते हैं (30 -> 15 -> 7.5)। अतः छठा पद 15 / 2 = 7.5 होगा।"
    },
    {
      "id": 149,
      "questionNumber": 149,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a certain code, if BAD is written as YZW and SAID is written as HZRW, then LIFE will be written as:",
      "options": {
        "A": "ORUV",
        "B": "OSUV",
        "C": "OQVU",
        "D": "ORVW"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) ORUV**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "सामान्य ज्ञान (GK)",
      "question_hi": "एक निश्चित कोड में, यदि BAD को YZW और SAID को HZRW के रूप में लिखा जाता है, तो LIFE को इस प्रकार लिखा जाएगा:",
      "options_hi": {
        "A": "ओआरयूवी",
        "B": "ओसुव",
        "C": "OQVU",
        "D": "ORVW"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) ORUV?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    },
    {
      "id": 150,
      "questionNumber": 150,
      "section": "Other Skills",
      "topic": "General Knowledge",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Pointing towards Sita, Nikhil said, \"I am the only son of her mother's son\". How is Sita related to Nikhil?",
      "options": {
        "A": "Aunt",
        "B": "Niece",
        "C": "Mother",
        "D": "Cousin"
      },
      "correctAnswer": "A",
      "explanation": "**Correct Answer: (A) Aunt**\n\n**Concept Overview**: Option (A) is the verified correct answer according to the official Bihar STET examination key.",
      "topic_hi": "सामान्य ज्ञान (GK)",
      "question_hi": "सीता की ओर इशारा करते हुए, निखिल ने कहा, \"मैं उसकी माँ के बेटे का इकलौता बेटा हूँ\"। सीता का निखिल से क्या संबंध है?",
      "options_hi": {
        "A": "चाची",
        "B": "भतीजी",
        "C": "माँ",
        "D": "चचेरा"
      },
      "explanation_hi": "**आधिकारिक सही उत्तर: (A) Aunt?**\n\n**विषय अवधारणा (सामान्य ज्ञान (GK))**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प (A) सही है।"
    }
  ]
};
