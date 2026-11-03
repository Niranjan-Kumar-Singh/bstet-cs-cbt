window.predicted_set14 = {
  "id": "predicted_set14",
  "title": "Predicted Mock Paper - Set 14",
  "subtitle": "Bihar STET Paper II (Code 226) • High-Yield Revision Full Mock",
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
      "question": "Which of the following logic gates is known as an 'Equivalence' gate?",
      "question_hi": "निम्नलिखित में से किस लॉजिक गेट को 'इक्विवैलेंस (Equivalence)' गेट के रूप में जाना जाता है?",
      "options": {
        "A": "NAND gate",
        "B": "NOR gate",
        "C": "XNOR gate",
        "D": "XOR gate"
      },
      "options_hi": {
        "A": "NAND गेट",
        "B": "NOR गेट",
        "C": "XNOR गेट",
        "D": "XOR गेट"
      },
      "correctAnswer": "C",
      "explanation": "The XNOR gate outputs 1 (True) when both inputs are identical (both 0 or both 1). Hence, it is commonly called the Equivalence gate.",
      "explanation_hi": "XNOR गेट तब 1 (सत्य) आउटपुट देता है जब दोनों इनपुट समान होते हैं (दोनों 0 या दोनों 1)। इसलिए इसे समतुल्यता (Equivalence) गेट भी कहा जाता है."
    },
    {
      "id": 2,
      "question": "What is the binary representation of the decimal fraction (0.625)₁₀?",
      "question_hi": "दशमलव भिन्न (0.625)₁₀ का बाइनरी निरूपण क्या होगा?",
      "options": {
        "A": "0.101",
        "B": "0.110",
        "C": "0.011",
        "D": "0.100"
      },
      "options_hi": {
        "A": "0.101",
        "B": "0.110",
        "C": "0.011",
        "D": "0.100"
      },
      "correctAnswer": "A",
      "explanation": "0.625 * 2 = 1.25 (integer 1); 0.25 * 2 = 0.50 (integer 0); 0.50 * 2 = 1.00 (integer 1). Reading the integer parts top to bottom gives (0.101)₂.",
      "explanation_hi": "0.625 * 2 = 1.25 (पूर्णांक 1); 0.25 * 2 = 0.50 (पूर्णांक 0); 0.50 * 2 = 1.00 (पूर्णांक 1)। ऊपर से नीचे पढ़ने पर परिणाम (0.101)₂ प्राप्त होता है."
    },
    {
      "id": 3,
      "question": "How many selection lines are required in a 32-to-1 multiplexer?",
      "question_hi": "32-टू-1 मल्टीप्लेक्सर (Multiplexer) में कितनी चयन रेखाओं (Selection lines) की आवश्यकता होती है?",
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
      "correctAnswer": "B",
      "explanation": "For an n-to-1 multiplexer, the number of selection lines 'm' satisfies 2^m = n. Here, 2^m = 32 = 2^5, so m = 5.",
      "explanation_hi": "n-टू-1 मल्टीप्लेक्सर के लिए चयन रेखाओं 'm' की संख्या सूत्र 2^m = n को संतुष्ट करती है। यहाँ 2^m = 32 = 2^5, अतः m = 5 होगा."
    },
    {
      "id": 4,
      "question": "In 2's complement representation, what is the range of integers that can be represented using 8 bits?",
      "question_hi": "2's कॉम्प्लिमेंट निरूपण में, 8 बिट्स का उपयोग करके पूर्णांकों की किस सीमा (Range) को दर्शाया जा सकता है?",
      "options": {
        "A": "-128 to +127",
        "B": "-127 to +128",
        "C": "-256 to +255",
        "D": "0 to 255"
      },
      "options_hi": {
        "A": "-128 से +127",
        "B": "-127 से +128",
        "C": "-256 से +255",
        "D": "0 से 255"
      },
      "correctAnswer": "A",
      "explanation": "The range for n bits in 2's complement is -2^(n-1) to +(2^(n-1) - 1). For n=8, this is -2^7 to +(2^7 - 1), which is -128 to +127.",
      "explanation_hi": "2's कॉम्प्लिमेंट में n बिट्स की सीमा -2^(n-1) से +(2^(n-1) - 1) होती है। n=8 के लिए यह -2^7 से +(2^7 - 1), अर्थात -128 से +127 है."
    },
    {
      "id": 5,
      "question": "Which flip-flop is inherently free from the 'race-around condition'?",
      "question_hi": "निम्नलिखित में से कौन सा फ्लिप-फ्लॉप 'रेस-अराउंड स्थिति (Race-around condition)' से मुक्त होता है?",
      "options": {
        "A": "Basic SR Flip-Flop",
        "B": "Simple Level-triggered JK Flip-Flop",
        "C": "Master-Slave JK Flip-Flop",
        "D": "Unclocked Latch"
      },
      "options_hi": {
        "A": "बेसिक SR फ्लिप-फ्लॉप",
        "B": "सरल लेवल-ट्रिगर्ड JK फ्लिप-फ्लॉप",
        "C": "मास्टर-स्लेव JK फ्लिप-फ्लॉप",
        "D": "अनक्लॉक्ड लैच"
      },
      "correctAnswer": "C",
      "explanation": "The Master-Slave JK flip-flop eliminates race-around condition by isolating master and slave across opposite clock edges.",
      "explanation_hi": "मास्टर-स्लेव JK फ्लिप-फ्लॉप विपरीत क्लॉक किनारों (एक क्लॉक हाई पर, दूसरा क्लॉक लो पर) पर मास्टर और स्लेव को अलग करके रेस-अराउंड समस्या को समाप्त करता है."
    },
    {
      "id": 6,
      "question": "Which addressing mode is used in instructions like 'MOV A, #25H' where operand data is explicitly supplied in the instruction?",
      "question_hi": "'MOV A, #25H' जैसे निर्देशों में कौन सा एड्रेसिंग मोड उपयोग किया जाता है जहाँ ऑपरेंड डेटा सीधे निर्देश में ही दिया होता है?",
      "options": {
        "A": "Direct Addressing Mode",
        "B": "Immediate Addressing Mode",
        "C": "Register Addressing Mode",
        "D": "Indexed Addressing Mode"
      },
      "options_hi": {
        "A": "डायरेक्ट एड्रेसिंग मोड",
        "B": "इमीडिएट एड्रेसिंग मोड",
        "C": "रजिस्टर एड्रेसिंग मोड",
        "D": "इंडेक्स एड्रेसिंग मोड"
      },
      "correctAnswer": "B",
      "explanation": "In immediate addressing mode, the actual data value (operand) is directly specified within the instruction itself (e.g., #25H).",
      "explanation_hi": "इमीडिएट एड्रेसिंग मोड में वास्तविक डेटा मान (ऑपरेंड) सीधे निर्देश के अंदर ही दिया जाता है (जैसे #25H)।"
    },
    {
      "id": 7,
      "question": "A pipeline has 5 stages with execution times 10ns, 12ns, 11ns, 15ns, and 10ns. What is the clock cycle time of this pipeline?",
      "question_hi": "एक पाइपलाइन में 5 चरण हैं जिनके निष्पादन समय 10ns, 12ns, 11ns, 15ns और 10ns हैं। इस पाइपलाइन का क्लॉक साइकिल समय क्या होगा?",
      "options": {
        "A": "10 ns",
        "B": "11.6 ns",
        "C": "15 ns",
        "D": "58 ns"
      },
      "options_hi": {
        "A": "10 ns",
        "B": "11.6 ns",
        "C": "15 ns",
        "D": "58 ns"
      },
      "correctAnswer": "C",
      "explanation": "The clock cycle time of a pipeline is determined by the slowest stage (bottleneck stage). The maximum stage delay here is 15 ns, so clock cycle time is 15 ns.",
      "explanation_hi": "पाइपलाइन का क्लॉक साइकिल समय उसके सबसे धीमे चरण (अड़चन चरण) के समय से तय होता है। यहाँ अधिकतम समय 15 ns है, अतः क्लॉक चक्र समय 15 ns होगा."
    },
    {
      "id": 8,
      "question": "Which cache mapping technique allows a memory block to be placed into any cache line?",
      "question_hi": "कौन सी कैश मैपिंग तकनीक मेमोरी ब्लॉक को कैश की किसी भी लाइन में रखे जाने की अनुमति देती है?",
      "options": {
        "A": "Direct Mapping",
        "B": "Fully Associative Mapping",
        "C": "Set-Associative Mapping",
        "D": "Sector Mapping"
      },
      "options_hi": {
        "A": "डायरेक्ट मैपिंग",
        "B": "फुल्ली एसोसिएटिव मैपिंग",
        "C": "सेट-एसोसिएटिव मैपिंग",
        "D": "सेक्टर मैपिंग"
      },
      "correctAnswer": "B",
      "explanation": "In fully associative mapping, any block of main memory can be mapped to any line in the cache, offering maximum flexibility and lowest conflict misses.",
      "explanation_hi": "फुल्ली एसोसिएटिव मैपिंग में मुख्य मेमोरी का कोई भी ब्लॉक कैश की किसी भी खाली लाइन में लोड हो सकता है, जिससे टकराव (Conflict misses) न्यूनतम होता है."
    },
    {
      "id": 9,
      "question": "What is the primary advantage of a Carry Lookahead Adder (CLA) over a Ripple Carry Adder (RCA)?",
      "question_hi": "रिपल कैरी एडर (RCA) की तुलना में कैरी लुकअहेड एडर (CLA) का मुख्य लाभ क्या है?",
      "options": {
        "A": "Reduced hardware complexity",
        "B": "Significantly higher operational speed due to parallel carry calculation",
        "C": "Lower power consumption",
        "D": "Smaller silicon chip area"
      },
      "options_hi": {
        "A": "हार्डवेयर जटिलता में कमी",
        "B": "समानांतर कैरी गणना के कारण अत्यधिक उच्च परिचालन गति",
        "C": "कम बिजली की खपत",
        "D": "सिलिकॉन चिप का छोटा आकार"
      },
      "correctAnswer": "B",
      "explanation": "CLA computes carry bits simultaneously using generate (G) and propagate (P) logic, eliminating the ripple propagation delay of RCA.",
      "explanation_hi": "CLA जनरेट (G) और प्रोपेगेट (P) लॉजिक का उपयोग करके समानांतर में कैरी बिट्स की गणना करता है, जिससे RCA में होने वाला देरी (Propagation Delay) समाप्त हो जाता है."
    },
    {
      "id": 10,
      "question": "Which of the following registers holds the memory address of the next instruction to be fetched?",
      "question_hi": "निम्नलिखित में से कौन सा रजिस्टर निष्पादित होने वाले अगले निर्देश के मेमोरी पते (Address) को रखता है?",
      "options": {
        "A": "Instruction Register (IR)",
        "B": "Memory Data Register (MDR)",
        "C": "Program Counter (PC)",
        "D": "Accumulator (AC)"
      },
      "options_hi": {
        "A": "इंस्ट्रक्शन रजिस्टर (IR)",
        "B": "मेमोरी डेटा रजिस्टर (MDR)",
        "C": "प्रोग्राम काउंटर (PC)",
        "D": "एक्युमुलेटर (AC)"
      },
      "correctAnswer": "C",
      "explanation": "The Program Counter (PC) automatically tracks and stores the memory address of the next instruction scheduled for execution.",
      "explanation_hi": "प्रोग्राम काउंटर (PC) निष्पादन के लिए निर्धारित अगले निर्देश के मेमोरी पते को ट्रैक और संग्रहीत करता है."
    },
    {
      "id": 11,
      "question": "In C++, which keyword is used to prevent an inherited virtual method from being further overridden in derived classes?",
      "question_hi": "C++ में, व्युत्पन्न वर्गों में किसी वर्चुअल विधि को आगे ओवरराइड होने से रोकने के लिए किस कीवर्ड का उपयोग किया जाता है?",
      "options": {
        "A": "const",
        "B": "static",
        "C": "final",
        "D": "sealed"
      },
      "options_hi": {
        "A": "const",
        "B": "static",
        "C": "final",
        "D": "sealed"
      },
      "correctAnswer": "C",
      "explanation": "C++11 introduced the 'final' specifier to specify that a virtual function cannot be overridden in any further derived class.",
      "explanation_hi": "C++11 में 'final' विनिर्देशक जोड़ा गया ताकि किसी वर्चुअल फ़ंक्शन को आगे के व्युत्पन्न वर्ग में पुनः ओवरराइड न किया जा सके."
    },
    {
      "id": 12,
      "question": "What is the order of destruction when an object of a derived class is deleted in C++?",
      "question_hi": "C++ में जब किसी व्युत्पन्न (Derived) वर्ग के ऑब्जेक्ट को नष्ट (delete) किया जाता है, तो डिस्ट्रक्टर के चलने का क्रम क्या होता है?",
      "options": {
        "A": "Base class destructor first, then Derived class destructor",
        "B": "Derived class destructor first, then Base class destructor",
        "C": "Both run simultaneously",
        "D": "Only the Base class destructor runs"
      },
      "options_hi": {
        "A": "पहले बेस क्लास डिस्ट्रक्टर, फिर डिराइव्ड क्लास डिस्ट्रक्टर",
        "B": "पहले डिराइव्ड क्लास डिस्ट्रक्टर, फिर बेस क्लास डिस्ट्रक्टर",
        "C": "दोनों एक साथ चलते हैं",
        "D": "केवल बेस क्लास डिस्ट्रक्टर चलता है"
      },
      "correctAnswer": "B",
      "explanation": "In C++, constructors execute base-to-derived, while destructors execute in reverse order: derived-to-base.",
      "explanation_hi": "C++ में कंस्ट्रक्टर बेस से डिराइव्ड क्रम में चलते हैं, जबकि डिस्ट्रक्टर ठीक विपरीत क्रम यानी पहले डिराइव्ड और फिर बेस क्लास का चलता है."
    },
    {
      "id": 13,
      "question": "Which of the following operators CANNOT be overloaded in C++?",
      "question_hi": "C++ में निम्नलिखित में से किस ऑपरेटर को ओवरलोड नहीं किया जा सकता है?",
      "options": {
        "A": "+ (Addition)",
        "B": "[] (Subscript)",
        "C": ":: (Scope Resolution)",
        "D": "-> (Member Access)"
      },
      "options_hi": {
        "A": "+ (जोड़)",
        "B": "[] (सबस्क्रिप्ट)",
        "C": ":: (स्कोप रिज़ॉल्यूशन)",
        "D": "-> (मेम्बर एक्सेस)"
      },
      "correctAnswer": "C",
      "explanation": "Operators that cannot be overloaded in C++ are: :: (Scope resolution), . (Member access), .* (Pointer-to-member), and ?: (Ternary conditional).",
      "explanation_hi": "C++ में ओवरलोड न किए जा सकने वाले ऑपरेटर हैं: :: (स्कोप रिज़ॉल्यूशन), . (डॉट मेम्बर), .* (पॉइंटर-टू-मेम्बर), और ?: (टर्नरी ऑपरेटर)।"
    },
    {
      "id": 14,
      "question": "Why should a base class have a virtual destructor when deleting derived objects through a base pointer?",
      "question_hi": "बेस पॉइंटर के माध्यम से डिराइव्ड ऑब्जेक्ट्स को डिलीट करते समय बेस क्लास में वर्चुअल डिस्ट्रक्टर क्यों होना चाहिए?",
      "options": {
        "A": "To allow the class to have pure virtual functions",
        "B": "To ensure both derived and base class destructors are called, preventing memory leaks",
        "C": "To prevent derived classes from inheriting the base class",
        "D": "To speed up compilation time"
      },
      "options_hi": {
        "A": "क्लास में प्योर वर्चुअल फ़ंक्शंस की अनुमति देने के लिए",
        "B": "डिराइव्ड और बेस दोनों डिस्ट्रक्टर्स का सही आह्वान सुनिश्चित करने और मेमोरी लीक रोकने के लिए",
        "C": "डिराइव्ड क्लास को बेस क्लास इनहेरिट करने से रोकने के लिए",
        "D": "कंपाइलेशन गति बढ़ाने के लिए"
      },
      "correctAnswer": "B",
      "explanation": "If the base destructor is not virtual, deleting via a base pointer causes undefined behavior where only the base destructor runs, leaking resources allocated by the derived class.",
      "explanation_hi": "यदि बेस डिस्ट्रक्टर वर्चुअल नहीं है, तो बेस पॉइंटर द्वारा डिलीट करने पर केवल बेस डिस्ट्रक्टर चलेगा जिससे डिराइव्ड क्लास के संसाधन नष्ट नहीं होंगे और मेमोरी लीक हो जाएगी."
    },
    {
      "id": 15,
      "question": "In C++, a class containing at least one pure virtual function is called:",
      "question_hi": "C++ में, कम से कम एक शुद्ध आभासी फलन (Pure Virtual Function) वाले वर्ग को क्या कहा जाता है?",
      "options": {
        "A": "Concrete Class",
        "B": "Abstract Class",
        "C": "Static Class",
        "D": "Sealed Class"
      },
      "options_hi": {
        "A": "कंक्रीट क्लास",
        "B": "एब्सट्रैक्ट क्लास (Abstract Class)",
        "C": "स्टैटिक क्लास",
        "D": "सील्ड क्लास"
      },
      "correctAnswer": "B",
      "explanation": "An abstract class is a class with at least one pure virtual function (= 0). It cannot be instantiated directly and serves as a base interface.",
      "explanation_hi": "एब्सट्रैक्ट क्लास वह क्लास होती है जिसमें कम से कम एक प्योर वर्चुअल फंक्शन (= 0) होता है। इसका सीधे ऑब्जेक्ट नहीं बनाया जा सकता है."
    },
    {
      "id": 16,
      "question": "What is the correct syntax for declaring a pure virtual function in C++?",
      "question_hi": "C++ में प्योर वर्चुअल फ़ंक्शन घोषित करने का सही सिंटैक्स क्या है?",
      "options": {
        "A": "virtual void display() = null;",
        "B": "virtual void display() = 0;",
        "C": "void virtual display() = default;",
        "D": "pure virtual void display();"
      },
      "options_hi": {
        "A": "virtual void display() = null;",
        "B": "virtual void display() = 0;",
        "C": "void virtual display() = default;",
        "D": "pure virtual void display();"
      },
      "correctAnswer": "B",
      "explanation": "A pure virtual function is declared using the keyword 'virtual' followed by '= 0;' at the end of the prototype.",
      "explanation_hi": "प्योर वर्चुअल फ़ंक्शन को 'virtual' कीवर्ड और प्रोटोटाइप के अंत में '= 0;' लगाकर घोषित किया जाता है."
    },
    {
      "id": 17,
      "question": "What problem in multiple inheritance does the 'virtual base class' resolve in C++?",
      "question_hi": "C++ में 'वर्चुअल बेस क्लास' बहु-वारिसता (Multiple Inheritance) में किस समस्या का समाधान करती है?",
      "options": {
        "A": "Dangling pointer problem",
        "B": "Diamond problem (duplicate copies of base class subobjects)",
        "C": "Circular reference in smart pointers",
        "D": "Stack overflow in recursive templates"
      },
      "options_hi": {
        "A": "डैंगलिंग पॉइंटर समस्या",
        "B": "डायमंड समस्या (बेस क्लास सब-ऑब्जेक्ट्स की डुप्लिकेट प्रतियाँ)",
        "C": "स्मार्ट पॉइंटर्स में सर्कुलर रेफरेंस",
        "D": "रिकर्सिव टेम्प्लेट्स में स्टैक ओवरफ्लो"
      },
      "correctAnswer": "B",
      "explanation": "When two intermediate classes inherit from a common base and a final class inherits from both, the Diamond Problem causes multiple base copies. Declaring the inheritance 'virtual' ensures only one shared base copy exists.",
      "explanation_hi": "डायमंड समस्या में सामान्य बेस क्लास की दो प्रतियां डिराइव्ड क्लास में पहुंच जाती हैं। वर्चुअल बेस क्लास यह सुनिश्चित करती है कि केवल एक ही साझा प्रतिलिपि विरासत में मिले."
    },
    {
      "id": 18,
      "question": "Which of the following is true regarding 'friend functions' in C++?",
      "question_hi": "C++ में 'फ्रेंड फंक्शंस (Friend Functions)' के संबंध में कौन सा कथन सत्य है?",
      "options": {
        "A": "They are members of the class they are declared in",
        "B": "Friendship is mutually inherited automatically",
        "C": "They can access private and protected members of the class granting friendship",
        "D": "Friendship is transitive by default"
      },
      "options_hi": {
        "A": "वे उस क्लास के मेम्बर होते हैं जिसमें वे घोषित होते हैं",
        "B": "फ्रेंडशिप स्वचालित रूप से इनहेरिट हो जाती है",
        "C": "वे उस क्लास के प्राइवेट और प्रोटेक्टेड मेंबर्स तक पहुंच सकते हैं जिसने उन्हें फ्रेंड घोषित किया है",
        "D": "फ्रेंडशिप डिफ़ॉल्ट रूप से ट्रांजिटिव होती है"
      },
      "correctAnswer": "C",
      "explanation": "Friend functions are non-member functions granted access to private and protected members of a class. Friendship is neither inherited nor transitive.",
      "explanation_hi": "फ्रेंड फ़ंक्शंस गैर-सदस्य फ़ंक्शन होते हैं जिन्हें क्लास के प्राइवेट और प्रोटेक्टेड डेटा तक पहुँचने की अनुमति होती है। फ्रेंडशिप न तो इनहेरिट होती है और न ही ट्रांजिटिव."
    },
    {
      "id": 19,
      "question": "What type of error is caught by the compiler during syntax validation in C++?",
      "question_hi": "C++ में सिंटैक्स सत्यापन के दौरान कंपाइलर द्वारा किस प्रकार की त्रुटि पकड़ी जाती है?",
      "options": {
        "A": "Compile-time error",
        "B": "Run-time error",
        "C": "Logical error",
        "D": "Segmentation fault"
      },
      "options_hi": {
        "A": "कंपाइल-टाइम त्रुटि (Compile-time error)",
        "B": "रन-टाइम त्रुटि (Run-time error)",
        "C": "तार्किक त्रुटि (Logical error)",
        "D": "सेगमेंटेशन फॉल्ट"
      },
      "correctAnswer": "A",
      "explanation": "Syntax and semantic violations violate language grammar and are identified during compilation as compile-time errors.",
      "explanation_hi": "व्याकरण और सिंटैक्स के नियमों का उल्लंघन कंपाइलेशन के दौरान ही कंपाइल-टाइम त्रुटियों के रूप में पकड़ा जाता है."
    },
    {
      "id": 20,
      "question": "Which header file is required to use 'std::setprecision' and 'std::setw' manipulators in C++?",
      "question_hi": "C++ में 'std::setprecision' और 'std::setw' मैनिपुलेटर्स का उपयोग करने के लिए किस हेडर फाइल की आवश्यकता होती है?",
      "options": {
        "A": "<iostream>",
        "B": "<iomanip>",
        "C": "<stdlib.h>",
        "D": "<fstream>"
      },
      "options_hi": {
        "A": "<iostream>",
        "B": "<iomanip>",
        "C": "<stdlib.h>",
        "D": "<fstream>"
      },
      "correctAnswer": "B",
      "explanation": "Parameterized I/O stream manipulators like setw and setprecision reside in the <iomanip> header file.",
      "explanation_hi": "पैरामीटरयुक्त I/O मैनिपुलेटर्स जैसे setw और setprecision हेडर फाइल <iomanip> में परिभाषित हैं."
    },
    {
      "id": 21,
      "question": "What is the worst-case time complexity of finding an element in a binary search tree (BST) of n keys?",
      "question_hi": "n कुंजियों वाले बाइनरी सर्च ट्री (BST) में किसी तत्व को खोजने की सबसे खराब स्थिति (Worst-case) में समय जटिलता क्या है?",
      "options": {
        "A": "O(1)",
        "B": "O(log n)",
        "C": "O(n)",
        "D": "O(n log n)"
      },
      "options_hi": {
        "A": "O(1)",
        "B": "O(log n)",
        "C": "O(n)",
        "D": "O(n log n)"
      },
      "correctAnswer": "C",
      "explanation": "If the BST is completely skewed (like a sorted linked list), the search degrades to linear traversal taking O(n) time.",
      "explanation_hi": "यदि BST एकतरफा तिरछा (Skewed) हो जाता है, तो खोज प्रक्रिया लिंक्ड लिस्ट की तरह रेखीय हो जाती है और O(n) समय लेती है."
    },
    {
      "id": 22,
      "question": "Which data structure is fundamentally used to implement Breadth-First Search (BFS) in a graph?",
      "question_hi": "ग्राफ में ब्रेड्थ-फर्स्ट सर्च (BFS) को लागू करने के लिए मौलिक रूप से किस डेटा संरचना का उपयोग किया जाता है?",
      "options": {
        "A": "Stack",
        "B": "Queue",
        "C": "Priority Queue",
        "D": "Binary Search Tree"
      },
      "options_hi": {
        "A": "स्टैक (Stack)",
        "B": "कतार (Queue)",
        "C": "प्राथमिकता कतार (Priority Queue)",
        "D": "बाइनरी सर्च ट्री"
      },
      "correctAnswer": "B",
      "explanation": "BFS explores nodes level by level (FIFO order), which is natively implemented using a Queue. (DFS uses a Stack).",
      "explanation_hi": "BFS स्तर दर स्तर (FIFO क्रम) में नोड्स की खोज करता है, जिसके लिए कतार (Queue) का उपयोग किया जाता है। (DFS में स्टैक का उपयोग होता है)."
    },
    {
      "id": 23,
      "question": "In a max-heap of n elements, what is the time complexity to extract the maximum element and restore heap property?",
      "question_hi": "n तत्वों के मैक्स-हीप में, अधिकतम तत्व निकालने और हीप गुण को पुनर्स्थापित करने की समय जटिलता क्या है?",
      "options": {
        "A": "O(1)",
        "B": "O(log n)",
        "C": "O(n)",
        "D": "O(n log n)"
      },
      "options_hi": {
        "A": "O(1)",
        "B": "O(log n)",
        "C": "O(n)",
        "D": "O(n log n)"
      },
      "correctAnswer": "B",
      "explanation": "Extracting the root takes O(1), but swapping the last leaf and performing heapify-down through tree height h takes O(log n) time.",
      "explanation_hi": "रूट निकालना O(1) है, लेकिन अंतिम तत्व को रूट पर रखकर हीप गुण पुनर्स्थापित करने (Heapify) में ट्री की ऊंचाई के बराबर O(log n) समय लगता है."
    },
    {
      "id": 24,
      "question": "What is the condition for a circular queue of capacity N (using an array of size N) to be full, assuming one slot is left empty?",
      "question_hi": "N आकार के ऐरे का उपयोग करके सर्कुलर कतार (Circular Queue) के पूर्ण (Full) होने की स्थिति क्या है, यदि एक स्लॉट खाली रखा जाता है?",
      "options": {
        "A": "front == rear",
        "B": "(rear + 1) % N == front",
        "C": "rear == N - 1",
        "D": "front == (rear + 1)"
      },
      "options_hi": {
        "A": "front == rear",
        "B": "(rear + 1) % N == front",
        "C": "rear == N - 1",
        "D": "front == (rear + 1)"
      },
      "correctAnswer": "B",
      "explanation": "When one slot is left unoccupied to differentiate full from empty, the queue is full when the next position of rear wraps around to front: (rear + 1) % N == front.",
      "explanation_hi": "पूर्ण और खाली में भेद करने के लिए जब एक स्लॉट खाली रखा जाता है, तो कतार पूर्ण तब होती है जब (rear + 1) % N == front होता है."
    },
    {
      "id": 25,
      "question": "Which of the following sorting algorithms is inherently stable and has O(n log n) worst-case time complexity?",
      "question_hi": "निम्नलिखित में से कौन सा सॉर्टिंग एल्गोरिदम स्वाभाविक रूप से स्थिर (Stable) है और सबसे खराब स्थिति में O(n log n) समय जटिलता रखता है?",
      "options": {
        "A": "Quick Sort",
        "B": "Heap Sort",
        "C": "Merge Sort",
        "D": "Selection Sort"
      },
      "options_hi": {
        "A": "क्विक सॉर्ट",
        "B": "हीप सॉर्ट",
        "C": "मर्ज सॉर्ट",
        "D": "सिलेक्शन सॉर्ट"
      },
      "correctAnswer": "C",
      "explanation": "Merge Sort guarantees O(n log n) time in all cases (best, average, worst) and preserves relative order of equal keys (stable).",
      "explanation_hi": "मर्ज सॉर्ट सभी स्थितियों (सर्वश्रेष्ठ, औसत, सबसे खराब) में O(n log n) समय की गारंटी देता है और समान कुंजियों के सापेक्ष क्रम को सुरक्षित रखता है (स्थिर)."
    },
    {
      "id": 26,
      "question": "What is the post-order traversal of a binary tree whose pre-order is 'A B D E C' and in-order is 'D B E A C'?",
      "question_hi": "एक बाइनरी ट्री का पोस्ट-ऑर्डर ट्रैवर्सल क्या होगा जिसका प्री-ऑर्डर 'A B D E C' और इन-ऑर्डर 'D B E A C' है?",
      "options": {
        "A": "D E B C A",
        "B": "D B E C A",
        "C": "E D B C A",
        "D": "C E D B A"
      },
      "options_hi": {
        "A": "D E B C A",
        "B": "D B E C A",
        "C": "E D B C A",
        "D": "C E D B A"
      },
      "correctAnswer": "A",
      "explanation": "Root is A. Left subtree in-order: D B E (with root B, left child D, right child E). Right subtree in-order: C. Post-order is Left-Right-Root: D E B C A.",
      "explanation_hi": "रूट A है। बायाँ सबट्री इन-ऑर्डर में D B E है (रूट B, बायाँ D, दायाँ E)। दायाँ सबट्री C है। पोस्ट-ऑर्डर (बायाँ-दायाँ-रूट) क्रम: D E B C A होगा."
    },
    {
      "id": 27,
      "question": "In open addressing hashing, what is the phenomenon where keys cluster into contiguous runs of occupied slots called?",
      "question_hi": "ओपन एड्रेसिंग हैशिंग में, उस घटना को क्या कहा जाता है जहाँ कुंजियाँ भरे हुए स्लॉटों के आस-पास समूह (Cluster) बना लेती हैं?",
      "options": {
        "A": "Secondary Clustering",
        "B": "Primary Clustering",
        "C": "Thrashing",
        "D": "Overhead"
      },
      "options_hi": {
        "A": "द्वितीयक क्लस्टरिंग",
        "B": "प्राथमिक क्लस्टरिंग (Primary Clustering)",
        "C": "थ्रैशिंग",
        "D": "ओवरहेड"
      },
      "correctAnswer": "B",
      "explanation": "Linear probing suffers from primary clustering, where long runs of occupied slots build up, drastically increasing average search and insertion times.",
      "explanation_hi": "लीनियर प्रोबिंग में प्राथमिक क्लस्टरिंग (Primary Clustering) की समस्या होती है, जिसमें भरे हुए स्लॉट्स की लंबी कतारें बन जाती हैं जिससे खोज का समय बढ़ जाता है."
    },
    {
      "id": 28,
      "question": "What is the balance factor of an AVL tree node defined as?",
      "question_hi": "AVL ट्री नोड का बैलेंस फैक्टर (Balance Factor) किस प्रकार परिभाषित किया जाता है?",
      "options": {
        "A": "Height of right subtree - Height of left subtree (or vice-versa)",
        "B": "Number of left children / Number of right children",
        "C": "Depth of node * Height of node",
        "D": "Degree of node - 1"
      },
      "options_hi": {
        "A": "बाएं सबट्री की ऊंचाई - दाएं सबट्री की ऊंचाई (या इसके विपरीत)",
        "B": "बाएं बच्चों की संख्या / दाएं बच्चों की संख्या",
        "C": "नोड की गहराई * नोड की ऊंचाई",
        "D": "नोड की डिग्री - 1"
      },
      "correctAnswer": "A",
      "explanation": "Balance Factor = Height(Left Subtree) - Height(Right Subtree). In an AVL tree, this factor must strictly be -1, 0, or +1 for every node.",
      "explanation_hi": "बैलेंस फैक्टर = बाएं सबट्री की ऊंचाई - दाएं सबट्री की ऊंचाई। AVL ट्री के प्रत्येक नोड के लिए यह मान अनिवार्य रूप से -1, 0, या +1 होना चाहिए."
    },
    {
      "id": 29,
      "question": "Which algorithm is optimal for finding the shortest paths from a single source vertex to all other vertices in a graph with non-negative edge weights?",
      "question_hi": "गैर-ऋणात्मक किनारा भार (Non-negative edge weights) वाले ग्राफ में सिंगल सोर्स से सभी शीर्षों के सबसे छोटे पथ खोजने के लिए कौन सा एल्गोरिदम इष्टतम है?",
      "options": {
        "A": "Bellman-Ford Algorithm",
        "B": "Dijkstra's Algorithm",
        "C": "Floyd-Warshall Algorithm",
        "D": "Kruskal's Algorithm"
      },
      "options_hi": {
        "A": "बेलमैन-फोर्ड एल्गोरिदम",
        "B": "डिज्क्स्ट्रा एल्गोरिदम (Dijkstra's Algorithm)",
        "C": "फ्लोयड-मार्शल एल्गोरिदम",
        "D": "क्रुस्कल एल्गोरिदम"
      },
      "correctAnswer": "B",
      "explanation": "Dijkstra's greedy algorithm solves single-source shortest paths in O((V + E) log V) time when edges have non-negative weights.",
      "explanation_hi": "डिज्क्स्ट्रा एल्गोरिदम गैर-ऋणात्मक भार वाले किनारों के लिए सिंगल-सोर्स शॉर्टेस्ट पाथ O((V + E) log V) समय में कुशलतापूर्वक खोजता है."
    },
    {
      "id": 30,
      "question": "What algorithm uses a slow pointer and a fast pointer to detect a cycle in a singly linked list?",
      "question_hi": "सिंगली लिंक्ड लिस्ट में लूप (चक्र) का पता लगाने के लिए कौन सा एल्गोरिदम एक धीमे और एक तेज़ पॉइंटर का उपयोग करता है?",
      "options": {
        "A": "Prim's Algorithm",
        "B": "Floyd's Cycle-Finding Algorithm (Tortoise and Hare)",
        "C": "Tarjan's Algorithm",
        "D": "Kadane's Algorithm"
      },
      "options_hi": {
        "A": "प्रिम एल्गोरिदम",
        "B": "फ्लोयड का साइकिल-फाइंडिंग एल्गोरिदम (कछुआ और खरगोश)",
        "C": "तर्जन एल्गोरिदम",
        "D": "कदाने एल्गोरिदम"
      },
      "correctAnswer": "B",
      "explanation": "Floyd's algorithm advances the slow pointer by 1 step and fast pointer by 2 steps. If a cycle exists, they are guaranteed to meet in O(n) time and O(1) space.",
      "explanation_hi": "फ्लोयड का साइकिल-डिटेक्शन एल्गोरिदम धीमे पॉइंटर को 1 कदम और तेज़ को 2 कदम आगे बढ़ाता है; लूप होने पर दोनों पॉइंटर्स O(n) समय में आपस में मिलते हैं."
    },
    {
      "id": 31,
      "question": "In relational database design, Boyce-Codd Normal Form (BCNF) requires that for every non-trivial functional dependency X -> Y:",
      "question_hi": "रिलेशनल डेटाबेस डिज़ाइन में, बॉयस-कॉड नॉर्मल फॉर्म (BCNF) के अनुसार प्रत्येक गैर-तुच्छ कार्यात्मक निर्भरता X -> Y के लिए क्या आवश्यक है?",
      "options": {
        "A": "Y must be a prime attribute",
        "B": "X must be a super key",
        "C": "X must be a foreign key",
        "D": "Y must not depend on X"
      },
      "options_hi": {
        "A": "Y एक प्राइम एट्रिब्यूट होना चाहिए",
        "B": "X एक सुपर की (Super Key) होना चाहिए",
        "C": "X एक फॉरेन की होना चाहिए",
        "D": "Y को X पर निर्भर नहीं होना चाहिए"
      },
      "correctAnswer": "B",
      "explanation": "BCNF is a stricter version of 3NF. In BCNF, the determinant X must strictly be a superkey for every non-trivial functional dependency X -> Y.",
      "explanation_hi": "BCNF, 3NF का सख्त रूप है। BCNF में प्रत्येक गैर-तुच्छ निर्भरता X -> Y में बाईं ओर का निर्धारक X अनिवार्य रूप से एक सुपर की होना चाहिए."
    },
    {
      "id": 32,
      "question": "Which relational algebra operation finds tuples that are in relation R but NOT in relation S?",
      "question_hi": "कौन सा रिलेशनल बीजगणित ऑपरेशन उन ट्यूपल्स को खोजता है जो रिलेशन R में हैं लेकिन रिलेशन S में नहीं हैं?",
      "options": {
        "A": "Cartesian Product",
        "B": "Set Difference (R - S)",
        "C": "Intersection (R ∩ S)",
        "D": "Natural Join (R ⋈ S)"
      },
      "options_hi": {
        "A": "कार्तीय गुणन (Cartesian Product)",
        "B": "सेट अंतर (Set Difference, R - S)",
        "C": "प्रतिच्छेदन (Intersection, R ∩ S)",
        "D": "नेचुरल जॉइन (Natural Join, R ⋈ S)"
      },
      "correctAnswer": "B",
      "explanation": "Set difference (R - S) outputs tuples that exist in R but do not exist in S, provided R and S are union-compatible.",
      "explanation_hi": "सेट अंतर (R - S) उन ट्यूपल्स को लौटाता है जो R में उपस्थित हैं लेकिन S में नहीं हैं, बशर्ते R और S यूनियन-कम्पैटिबल हों."
    },
    {
      "id": 33,
      "question": "Consider relation R(A, B, C, D) with FDs: {A -> B, B -> C, C -> D}. What is the candidate key of R?",
      "question_hi": "रिलेशन R(A, B, C, D) पर विचार करें जिसमें FDs हैं: {A -> B, B -> C, C -> D}। R की कैंडिडेट की (Candidate Key) क्या है?",
      "options": {
        "A": "D",
        "B": "C",
        "C": "B",
        "D": "A"
      },
      "options_hi": {
        "A": "D",
        "B": "C",
        "C": "B",
        "D": "A"
      },
      "correctAnswer": "D",
      "explanation": "Computing attribute closure of A: A+ = {A, B, C, D}, which contains all attributes of R. No proper subset of A can derive all attributes, so A is the candidate key.",
      "explanation_hi": "A का क्लोज़र A+ = {A, B, C, D} है, जिसमें संबंध R के सभी गुण शामिल हैं। अतः A ही एकमात्र कैंडिडेट की है."
    },
    {
      "id": 34,
      "question": "Which SQL clause is used to filter the output of grouped records produced by GROUP BY?",
      "question_hi": "GROUP BY द्वारा निर्मित समूहीकृत रिकॉर्ड्स के आउटपुट को फ़िल्टर करने के लिए किस SQL क्लॉज का उपयोग किया जाता है?",
      "options": {
        "A": "WHERE",
        "B": "HAVING",
        "C": "ORDER BY",
        "D": "LIMIT"
      },
      "options_hi": {
        "A": "WHERE",
        "B": "HAVING",
        "C": "ORDER BY",
        "D": "LIMIT"
      },
      "correctAnswer": "B",
      "explanation": "The HAVING clause applies condition filtering on aggregate groups, whereas WHERE filters individual rows before grouping occurs.",
      "explanation_hi": "HAVING क्लॉज समूहीकृत रिकॉर्ड्स (Aggregate groups) पर शर्तें लागू करता है, जबकि WHERE ग्रुपिंग से पहले एकल पंक्तियों को फ़िल्टर करता है."
    },
    {
      "id": 35,
      "question": "Which of the ACID properties ensures that concurrent execution of transactions leaves the database in the same state as if they were executed sequentially?",
      "question_hi": "ACID गुणों में से कौन सा यह सुनिश्चित करता है कि लेन-देन का समवर्ती निष्पादन डेटाबेस को उसी स्थिति में छोड़ता है मानो उन्हें क्रमिक रूप से निष्पादित किया गया हो?",
      "options": {
        "A": "Atomicity",
        "B": "Consistency",
        "C": "Isolation",
        "D": "Durability"
      },
      "options_hi": {
        "A": "परमाणुता (Atomicity)",
        "B": "संगति (Consistency)",
        "C": "पृथक्करण (Isolation)",
        "D": "स्थायित्व (Durability)"
      },
      "correctAnswer": "C",
      "explanation": "Isolation ensures that concurrent transactions execute independently without interference, achieving serializability.",
      "explanation_hi": "आइसोलेशन (अलगाव) यह सुनिश्चित करता है कि एक साथ चल रहे लेन-देन एक-दूसरे के मध्यवर्ती परिणामों से प्रभावित न हों (क्रमिकता हासिल हो)."
    },
    {
      "id": 36,
      "question": "In SQL, what is the effect of the statement 'DELETE FROM Employee;' without a WHERE clause?",
      "question_hi": "SQL में बिना WHERE क्लॉज के 'DELETE FROM Employee;' कथन का क्या प्रभाव होता है?",
      "options": {
        "A": "Deletes the Employee table structure from the database",
        "B": "Deletes all rows from the Employee table while preserving table structure",
        "C": "Throws a syntax error",
        "D": "Deletes only the primary key constraint"
      },
      "options_hi": {
        "A": "डेटाबेस से Employee टेबल संरचना को हटा देता है",
        "B": "टेबल संरचना को बनाए रखते हुए Employee टेबल की सभी पंक्तियों को हटा देता है",
        "C": "सिंटैक्स त्रुटि देता है",
        "D": "केवल प्राइमरी की बाधा को हटाता है"
      },
      "correctAnswer": "B",
      "explanation": "DELETE FROM table removes all row tuples but retains the schema definition and column definitions. (DROP TABLE removes structure as well).",
      "explanation_hi": "बिना WHERE के DELETE सभी पंक्तियों (डेटा) को हटाता है परंतु टेबल की संरचना और स्कीमा बरकरार रहता है। (DROP टेबल संरचना को भी नष्ट कर देता है)."
    },
    {
      "id": 37,
      "question": "Why are B+ Trees preferred over B Trees for indexing in relational database systems?",
      "question_hi": "रिलेशनल डेटाबेस सिस्टम में इंडेक्सिंग के लिए B ट्री की तुलना में B+ ट्री को प्राथमिकता क्यों दी जाती है?",
      "options": {
        "A": "B+ Trees have fewer nodes",
        "B": "All leaf nodes are linked sequentially, enabling very efficient range queries",
        "C": "B+ Trees do not require balanced height",
        "D": "B+ Trees store duplicate keys at the root"
      },
      "options_hi": {
        "A": "B+ ट्री में कम नोड्स होते हैं",
        "B": "सभी लीफ नोड्स एक लिंक्ड लिस्ट द्वारा जुड़े होते हैं, जिससे रेंज क्वेरीज़ अत्यंत तीव्र होती हैं",
        "C": "B+ ट्री को संतुलित ऊंचाई की आवश्यकता नहीं होती",
        "D": "B+ ट्री रूट पर डुप्लिकेट कुंजियों को संग्रहीत करता है"
      },
      "correctAnswer": "B",
      "explanation": "In B+ Trees, all records/pointers reside in leaf nodes, which are linked together in a sequential linked list, making range scans (BETWEEN, >=, <=) extremely fast.",
      "explanation_hi": "B+ ट्री में सभी डेटा पॉइंटर लीफ स्तर पर होते हैं और लीफ नोड्स आपस में लिंक्ड लिस्ट से जुड़े होते हैं, जिससे रेंज क्वेरी (Range Scans) बेहद कुशल हो जाती हैं."
    },
    {
      "id": 38,
      "question": "A schedule is conflict serializable if its precedence (serialization) graph contains:",
      "question_hi": "एक शेड्यूल संघर्ष क्रमिक (Conflict Serializable) होता है यदि उसके पूर्वता (Precedence) ग्राफ में:",
      "options": {
        "A": "At least one cycle",
        "B": "No cycles (Acyclic)",
        "C": "Only bidirectional edges",
        "D": "More edges than vertices"
      },
      "options_hi": {
        "A": "कम से कम एक चक्र हो",
        "B": "कोई चक्र न हो (अचक्रीय / Acyclic)",
        "C": "केवल द्विदिशीय किनारे हों",
        "D": "शीर्षों से अधिक किनारे हों"
      },
      "correctAnswer": "B",
      "explanation": "By the Serialization Theorem, a schedule S is conflict serializable if and only if its precedence graph has no directed cycles.",
      "explanation_hi": "सीरियलाइज़ेशन प्रमेय के अनुसार, एक शेड्यूल संघर्ष-क्रमिक तभी होता है जब उसके पूर्वता ग्राफ में कोई निर्देशित चक्र (No Cycles) न हो."
    },
    {
      "id": 39,
      "question": "What is the primary purpose of a Foreign Key constraint in SQL?",
      "question_hi": "SQL में फॉरेन की (Foreign Key) बाधा का प्राथमिक उद्देश्य क्या है?",
      "options": {
        "A": "To ensure unique values in a single column",
        "B": "To enforce referential integrity between two related tables",
        "C": "To automatically sort queries",
        "D": "To encrypt sensitive user passwords"
      },
      "options_hi": {
        "A": "एक कॉलम में अद्वितीय मान सुनिश्चित करना",
        "B": "दो संबंधित तालिकाओं के बीच संदर्भात्मक अखंडता (Referential Integrity) लागू करना",
        "C": "क्वेरी परिणामों को स्वचालित रूप से क्रमबद्ध करना",
        "D": "संवेदनशील पासवर्ड एन्क्रिप्ट करना"
      },
      "correctAnswer": "B",
      "explanation": "A foreign key matches the primary key of another table, ensuring references point to valid, existing parent rows (referential integrity).",
      "explanation_hi": "फॉरेन की किसी अन्य टेबल की प्राइमरी की को संदर्भित करती है, जिससे दोनों टेबल्स के बीच संदर्भात्मक अखंडता (Referential Integrity) बनी रहती है."
    },
    {
      "id": 40,
      "question": "Which phase of Two-Phase Locking (2PL) allows acquiring locks but forbids releasing locks?",
      "question_hi": "टू-फेज लॉकिंग (2PL) का कौन सा चरण लॉक प्राप्त करने की अनुमति देता है लेकिन लॉक छोड़ने की मनाही करता है?",
      "options": {
        "A": "Growing Phase",
        "B": "Shrinking Phase",
        "C": "Commit Phase",
        "D": "Aborting Phase"
      },
      "options_hi": {
        "A": "ग्रोइंग चरण (Growing Phase)",
        "B": "श्रिंकिंग चरण (Shrinking Phase)",
        "C": "कमिट चरण",
        "D": "एबॉर्शन चरण"
      },
      "correctAnswer": "A",
      "explanation": "In the Growing Phase of 2PL, a transaction may obtain locks but may not release any lock. Once the first lock is released, it enters the Shrinking Phase.",
      "explanation_hi": "2PL के ग्रोइंग चरण में लेन-देन नए लॉक हासिल कर सकता है किंतु किसी भी लॉक को छोड़ नहीं सकता। पहला लॉक छोड़ते ही श्रिंकिंग चरण शुरू होता है."
    },
    {
      "id": 41,
      "question": "Which of the following is NOT part of a Process Control Block (PCB)?",
      "question_hi": "निम्नलिखित में से क्या प्रोसेस कंट्रोल ब्लॉक (PCB) का हिस्सा नहीं है?",
      "options": {
        "A": "Process State",
        "B": "Program Counter",
        "C": "Bootstrap Loader Code",
        "D": "CPU Registers"
      },
      "options_hi": {
        "A": "प्रोसेस की स्थिति (Process State)",
        "B": "प्रोग्राम काउंटर",
        "C": "बूटस्ट्रैप लोडर कोड",
        "D": "CPU रजिस्टर्स"
      },
      "correctAnswer": "C",
      "explanation": "PCB maintains per-process context (state, PC, CPU registers, memory limits). The bootstrap loader resides in ROM BIOS, not in process control blocks.",
      "explanation_hi": "PCB में प्रोसेस की जानकारी (अवस्था, PC, रजिस्टर्स, मेमोरी सीमाएं) होती है। बूटस्ट्रैप लोडर ROM BIOS में स्थायी फर्मवेयर होता है, PCB में नहीं."
    },
    {
      "id": 42,
      "question": "Which CPU scheduling algorithm is mathematically proven to give the minimum average waiting time for a set of stationary processes?",
      "question_hi": "स्थैतिक प्रक्रियाओं के एक समूह के लिए न्यूनतम औसत प्रतीक्षा समय देने के लिए कौन सा CPU शेड्यूलिंग एल्गोरिदम गणितीय रूप से सिद्ध है?",
      "options": {
        "A": "First Come First Served (FCFS)",
        "B": "Shortest Job First (SJF)",
        "C": "Round Robin (RR)",
        "D": "Priority Scheduling"
      },
      "options_hi": {
        "A": "फर्स्ट कम फर्स्ट सर्व्ड (FCFS)",
        "B": "शॉर्टेस्ट जॉब फर्स्ट (SJF)",
        "C": "राउंड रॉबिन (RR)",
        "D": "प्राथमिकता शेड्यूलिंग"
      },
      "correctAnswer": "B",
      "explanation": "Non-preemptive Shortest Job First (SJF) is mathematically optimal because scheduling shorter jobs first minimizes overall waiting time for subsequent jobs.",
      "explanation_hi": "शॉर्टेस्ट जॉब फर्स्ट (SJF) गणितीय रूप से इष्टतम सिद्ध है क्योंकि छोटे कार्यों को पहले निष्पादित करने से शेष कार्यों का प्रतीक्षा समय न्यूनतम हो जाता है."
    },
    {
      "id": 43,
      "question": "Which of the following is NOT one of the four Coffman conditions necessary for deadlock to occur?",
      "question_hi": "डेडलॉक होने के लिए आवश्यक चार कॉफमैन स्थितियों में से कौन सी एक नहीं है?",
      "options": {
        "A": "Mutual Exclusion",
        "B": "Hold and Wait",
        "C": "Preemption Allowed",
        "D": "Circular Wait"
      },
      "options_hi": {
        "A": "म्युचुअल एक्सक्लूजन (पारस्परिक अपवर्जन)",
        "B": "होल्ड एंड वेट",
        "C": "प्रीएम्पशन की अनुमति (Preemption Allowed)",
        "D": "सर्कुलर वेट (चक्रीय प्रतीक्षा)"
      },
      "correctAnswer": "C",
      "explanation": "The condition is 'No Preemption' (resources cannot be forcibly taken). If preemption is allowed, deadlock cannot persist.",
      "explanation_hi": "डेडलॉक की आवश्यक शर्त 'नो प्रीएम्पशन' (कोई जब्ती नहीं) है। यदि प्रीएम्पशन की अनुमति दे दी जाए, तो डेडलॉग की स्थिति पैदा ही नहीं हो सकती."
    },
    {
      "id": 44,
      "question": "What is 'Thrashing' in an operating system?",
      "question_hi": "ऑपरेटिंग सिस्टम में 'थ्रैशिंग (Thrashing)' क्या है?",
      "options": {
        "A": "CPU spending excessive time paging in and out rather than executing instructions",
        "B": "High fragmentation in dynamic disk allocation",
        "C": "A deadlock condition between parent and child processes",
        "D": "Rapid corruption of file system inodes"
      },
      "options_hi": {
        "A": "निर्देशों को निष्पादित करने के बजाय CPU द्वारा पेजिंग (स्वैपिंग) में अत्यधिक समय बिताना",
        "B": "डायनामिक डिस्क आवंटन में उच्च विखंडन",
        "C": "मूल और बाल प्रक्रियाओं के बीच डेडलॉक की स्थिति",
        "D": "फाइल सिस्टम इनोड्स का तेजी से दूषित होना"
      },
      "correctAnswer": "A",
      "explanation": "Thrashing occurs when memory is overcommitted, causing continuous page faults where the OS spends almost 100% of its time swapping pages instead of real computation.",
      "explanation_hi": "थ्रैशिंग तब होती है जब मुख्य मेमोरी कम पड़ जाती है और OS वास्तविक काम करने के बजाय सारा समय पेजों को अंदर-बाहर स्वैप करने (पेजिंग) में बर्बाद करता है."
    },
    {
      "id": 45,
      "question": "Belady's Anomaly (where increasing the number of page frames leads to MORE page faults) is exhibited by which page replacement algorithm?",
      "question_hi": "बेलाडी की विसंगति (Belady's Anomaly - जहाँ पेज फ्रेम बढ़ाने पर पेज फॉल्ट की संख्या बढ़ जाती है) किस पेज रिप्लेसमेंट एल्गोरिदम में देखी जाती है?",
      "options": {
        "A": "Optimal (OPT)",
        "B": "Least Recently Used (LRU)",
        "C": "First-In-First-Out (FIFO)",
        "D": "Least Frequently Used (LFU)"
      },
      "options_hi": {
        "A": "ऑप्टिमल (OPT)",
        "B": "लीस्ट रिसेंटली यूज्ड (LRU)",
        "C": "फर्स्ट-इन-फर्स्ट-आउट (FIFO)",
        "D": "लीस्ट फ्रीक्वेंटली यूज्ड (LFU)"
      },
      "correctAnswer": "C",
      "explanation": "FIFO page replacement can exhibit Belady's Anomaly because it does not satisfy the stack property (unlike LRU or Optimal).",
      "explanation_hi": "FIFO पेज रिप्लेसमेंट स्टैक प्रॉपर्टी का पालन नहीं करता, इसलिए इसमें पेज फ्रेम बढ़ाने पर भी पेज फॉल्ट की संख्या बढ़ने की विसंगति (Belady's Anomaly) हो सकती है."
    },
    {
      "id": 46,
      "question": "What are the two atomic operations provided by Dijkstra's Counting Semaphore?",
      "question_hi": "डिज्क्स्ट्रा के काउंटिंग सेमाफोर द्वारा प्रदान किए जाने वाले दो परमाणु (Atomic) ऑपरेशन कौन से हैं?",
      "options": {
        "A": "start() and stop()",
        "B": "wait() and signal() [also called P() and V()]",
        "C": "lock() and unlock()",
        "D": "read() and write()"
      },
      "options_hi": {
        "A": "start() और stop()",
        "B": "wait() और signal() [जिन्हें P() और V() भी कहा जाता है]",
        "C": "lock() और unlock()",
        "D": "read() और write()"
      },
      "correctAnswer": "B",
      "explanation": "Semaphores provide two atomic primitives: wait() (or P, which decrements the count) and signal() (or V, which increments the count).",
      "explanation_hi": "सेमाफोर दो अनविभाज्य ऑपरेशन्स प्रदान करता है: wait() (या P, जो मान घटाता है) और signal() (या V, जो मान बढ़ाता है)."
    },
    {
      "id": 47,
      "question": "In Banker's Algorithm, what state is the system in if there exists at least one sequence of process allocations that prevents deadlock?",
      "question_hi": "बैंकर एल्गोरिदम में, यदि प्रोसेस आवंटन का कम से कम एक ऐसा क्रम मौजूद है जो डेडलॉक को रोकता है, तो सिस्टम किस स्थिति में होता है?",
      "options": {
        "A": "Safe State",
        "B": "Unsafe State",
        "C": "Deadlocked State",
        "D": "Starvation State"
      },
      "options_hi": {
        "A": "सुरक्षित स्थिति (Safe State)",
        "B": "असुरक्षित स्थिति (Unsafe State)",
        "C": "डेडलॉक्ड स्थिति",
        "D": "भुखमरी (Starvation) स्थिति"
      },
      "correctAnswer": "A",
      "explanation": "A state is 'safe' if the system can allocate resources to each process (up to its maximum) in some order without encountering a deadlock.",
      "explanation_hi": "एक स्थिति को 'सुरक्षित' (Safe State) कहा जाता है यदि कम से कम एक सुरक्षित क्रम मौजूद हो जिसमें सभी प्रक्रियाओं को उनकी अधिकतम आवश्यकता तक संसाधन दिए जा सकें."
    },
    {
      "id": 48,
      "question": "Which disk scheduling algorithm services requests by moving the head in one direction until it hits the end, then reverses direction (like an elevator)?",
      "question_hi": "कौन सा डिस्क शेड्यूलिंग एल्गोरिदम हेड को एक दिशा में अंत तक ले जाकर अनुरोधों को पूरा करता है, फिर दिशा उलट देता है (लिफ्ट की तरह)?",
      "options": {
        "A": "FCFS",
        "B": "SSTF",
        "C": "SCAN (Elevator Algorithm)",
        "D": "C-SCAN"
      },
      "options_hi": {
        "A": "FCFS",
        "B": "SSTF",
        "C": "SCAN (एलिवेटर एल्गोरिदम)",
        "D": "C-SCAN"
      },
      "correctAnswer": "C",
      "explanation": "The SCAN algorithm sweeps disk tracks back and forth like an elevator, servicing pending I/O requests along its current direction.",
      "explanation_hi": "SCAN एल्गोरिदम लिफ्ट की तरह डिस्क हेड को एक सिरे से दूसरे सिरे तक ले जाता है और रास्ते में आने वाले सभी अनुरोधों को पूरा करता है."
    },
    {
      "id": 49,
      "question": "What is an Inverted Page Table?",
      "question_hi": "इन्वर्टेड पेज टेबल (Inverted Page Table) क्या है?",
      "options": {
        "A": "A page table indexed by virtual page number per process",
        "B": "A global page table indexed by physical frame number containing (process_id, page_number)",
        "C": "A table stored in disk swap space",
        "D": "A page table that maps addresses in reverse order"
      },
      "options_hi": {
        "A": "प्रति प्रोसेस वर्चुअल पेज नंबर द्वारा अनुक्रमित पेज टेबल",
        "B": "भौतिक फ्रेम नंबर द्वारा अनुक्रमित एक वैश्विक टेबल जिसमें (process_id, page_number) होता है",
        "C": "डिस्क स्वैप स्पेस में संग्रहीत एक टेबल",
        "D": "पतों को उल्टे क्रम में मैप करने वाली पेज टेबल"
      },
      "correctAnswer": "B",
      "explanation": "An inverted page table has one entry for each real page (frame) of physical memory, significantly reducing memory overhead for 64-bit systems.",
      "explanation_hi": "इन्वर्टेड पेज टेबल में भौतिक मेमोरी के प्रत्येक वास्तविक फ्रेम के लिए केवल एक प्रविष्टि होती है, जिससे बड़ी वर्चुअल एड्रेस स्पेस में मेमोरी की भारी बचत होती है."
    },
    {
      "id": 50,
      "question": "Which system call in UNIX creates a new process by duplicating the calling process?",
      "question_hi": "UNIX में कौन सा सिस्टम कॉल कॉलिंग प्रोसेस की प्रतिलिपि बनाकर एक नई प्रोसेस बनाता है?",
      "options": {
        "A": "exec()",
        "B": "fork()",
        "C": "wait()",
        "D": "clone_vm()"
      },
      "options_hi": {
        "A": "exec()",
        "B": "fork()",
        "C": "wait()",
        "D": "clone_vm()"
      },
      "correctAnswer": "B",
      "explanation": "The fork() system call creates an exact duplicate child process sharing open file descriptors and copying memory via Copy-On-Write (COW).",
      "explanation_hi": "fork() सिस्टम कॉल मूल (Parent) प्रोसेस की प्रतिलिपि बनाकर एक नई चाइल्ड प्रोसेस बनाता है."
    },
    {
      "id": 51,
      "question": "How many usable host IP addresses are available in a subnet with prefix /28?",
      "question_hi": "उपसर्ग (Prefix) /28 वाले सबनेट में कितने प्रयोग करने योग्य होस्ट IP पते उपलब्ध होते हैं?",
      "options": {
        "A": "16",
        "B": "14",
        "C": "30",
        "D": "32"
      },
      "options_hi": {
        "A": "16",
        "B": "14",
        "C": "30",
        "D": "32"
      },
      "correctAnswer": "B",
      "explanation": "In /28, remaining host bits = 32 - 28 = 4. Total IPs = 2^4 = 16. Usable host IPs = 2^4 - 2 (network ID & broadcast) = 14.",
      "explanation_hi": "उपसर्ग /28 में होस्ट बिट्स = 32 - 28 = 4 हैं। कुल IP = 2^4 = 16। उपयोग योग्य होस्ट IP = 16 - 2 (नेटवर्क और ब्रॉडकास्ट पता घटाकर) = 14."
    },
    {
      "id": 52,
      "question": "Which field in the IPv4 header prevents packets from endlessly circulating in loops?",
      "question_hi": "IPv4 हेडर में कौन सा फ़ील्ड पैकेट को लूप में अंतहीन रूप से घूमने से रोकता है?",
      "options": {
        "A": "Checksum",
        "B": "Identification",
        "C": "Time to Live (TTL)",
        "D": "Fragment Offset"
      },
      "options_hi": {
        "A": "चेकसम",
        "B": "आइडेंटिफिकेशन",
        "C": "टाइम टू लिव (TTL)",
        "D": "फ्रेगमेंट ऑफसेट"
      },
      "correctAnswer": "C",
      "explanation": "TTL is decremented by 1 at each router. When TTL reaches 0, the packet is discarded and an ICMP Time Exceeded message is returned.",
      "explanation_hi": "प्रत्येक राउटर पर TTL का मान 1 घट जाता है। 0 होते ही पैकेट नष्ट कर दिया जाता है, जिससे रूटिंग लूप्स समाप्त होते हैं."
    },
    {
      "id": 53,
      "question": "Which protocol resolves a known IP address to its corresponding MAC (hardware) address on a local area network?",
      "question_hi": "लोकल एरिया नेटवर्क पर ज्ञात IP पते को उसके संगत MAC (हार्डवेयर) पते में कौन सा प्रोटोकॉल परिवर्तित करता है?",
      "options": {
        "A": "DNS",
        "B": "DHCP",
        "C": "ARP (Address Resolution Protocol)",
        "D": "RARP"
      },
      "options_hi": {
        "A": "DNS",
        "B": "DHCP",
        "C": "ARP (एड्रेस रिज़ॉल्यूशन प्रोटोकॉल)",
        "D": "RARP"
      },
      "correctAnswer": "C",
      "explanation": "ARP broadcasts an ARP Request with the target IP; the host with that IP replies with its 48-bit MAC address.",
      "explanation_hi": "ARP नेटवर्क पर ब्रॉडकास्ट भेजकर दिए गए IP पते से संबंधित फिजिकल/MAC एड्रेस प्राप्त करता है."
    },
    {
      "id": 54,
      "question": "What is the standard port number for HTTPS (Hypertext Transfer Protocol Secure)?",
      "question_hi": "HTTPS (हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल सिक्योर) का मानक पोर्ट नंबर क्या है?",
      "options": {
        "A": "80",
        "B": "443",
        "C": "8080",
        "D": "25"
      },
      "options_hi": {
        "A": "80",
        "B": "443",
        "C": "8080",
        "D": "25"
      },
      "correctAnswer": "B",
      "explanation": "HTTP operates on port 80, while encrypted HTTPS over TLS operates on well-known port 443.",
      "explanation_hi": "सामान्य HTTP पोर्ट 80 का उपयोग करता है, जबकि सुरक्षित और एन्क्रिप्टेड HTTPS पोर्ट 443 का उपयोग करता है."
    },
    {
      "id": 55,
      "question": "Which flow control protocol uses a sliding window where the receiver accepts only in-order frames and discards all out-of-order frames?",
      "question_hi": "कौन सा फ्लो कंट्रोल प्रोटोकॉल एक स्लाइडिंग विंडो का उपयोग करता है जहाँ रिसीवर केवल क्रमबद्ध फ्रेम स्वीकार करता है और आउट-ऑफ-ऑर्डर फ्रेम को त्याग देता है?",
      "options": {
        "A": "Stop-and-Wait ARQ",
        "B": "Go-Back-N ARQ",
        "C": "Selective Repeat ARQ",
        "D": "Slotted ALOHA"
      },
      "options_hi": {
        "A": "स्टॉप-एंड-वेट ARQ",
        "B": "गो-बैक-एन (Go-Back-N) ARQ",
        "C": "सिलेक्टिव रिपीट ARQ",
        "D": "स्लॉटेड अलोहा"
      },
      "correctAnswer": "B",
      "explanation": "In Go-Back-N, receiver window size is 1. If an error occurs, the receiver discards all subsequent out-of-order frames, forcing the sender to retransmit the entire window.",
      "explanation_hi": "Go-Back-N में रिसीवर की विंडो का आकार 1 होता है, इसलिए किसी फ्रेम में त्रुटि होने पर वह उसके बाद के सभी फ्रेम त्याग देता है और सेंडर को पूरी विंडो दोबारा भेजनी पड़ती है."
    },
    {
      "id": 56,
      "question": "In asymmetric cryptography (Public Key Cryptography), if Alice wants to send an encrypted message that ONLY Bob can read, which key must she use to encrypt?",
      "question_hi": "असममित क्रिप्टोग्राफी (पब्लिक की क्रिप्टोग्राफी) में, यदि एलिस एक एन्क्रिप्टेड संदेश भेजना चाहती है जिसे केवल बॉब पढ़ सके, तो उसे एन्क्रिप्ट करने के लिए किस कुंजी का उपयोग करना चाहिए?",
      "options": {
        "A": "Alice's Private Key",
        "B": "Alice's Public Key",
        "C": "Bob's Public Key",
        "D": "Bob's Private Key"
      },
      "options_hi": {
        "A": "एलिस की प्राइवेट की",
        "B": "एलिस की पब्लिक की",
        "C": "बॉब की पब्लिक की (Bob's Public Key)",
        "D": "बॉब की प्राइवेट की"
      },
      "correctAnswer": "C",
      "explanation": "To ensure confidentiality, the sender encrypts using the recipient's public key. Only the recipient's matching private key can decrypt it.",
      "explanation_hi": "गोपनीयता सुनिश्चित करने के लिए संदेश को प्राप्तकर्ता (बॉब) की पब्लिक की से एन्क्रिप्ट किया जाता है, जिसे केवल बॉब अपनी प्राइवेट की से डिक्रिप्ट कर सकता है."
    },
    {
      "id": 57,
      "question": "What mathematical hard problem forms the basis of security in the RSA algorithm?",
      "question_hi": "RSA एल्गोरिदम में सुरक्षा का आधार कौन सी गणितीय कठिन समस्या है?",
      "options": {
        "A": "Integer Factorization of large prime products",
        "B": "Discrete Logarithm problem on elliptic curves",
        "C": "Knapsack subset sum problem",
        "D": "Traveling Salesperson Problem"
      },
      "options_hi": {
        "A": "दो बड़े अभाज्य संख्याओं के गुणनफल का पूर्णांक गुणनखंडन (Integer Factorization)",
        "B": "अण्डाकार वक्रों पर असतत लघुगणक समस्या",
        "C": "नैपसैक सबसेट योग समस्या",
        "D": "ट्रैवलिंग सेल्सपर्सन समस्या"
      },
      "correctAnswer": "A",
      "explanation": "RSA's security relies on the computational difficulty of factoring a large composite number n into its two large prime factors p and q.",
      "explanation_hi": "RSA एल्गोरिदम की सुरक्षा दो बड़ी अभाज्य संख्याओं (p और q) के गुणनफल n का गुणनखंड करने की व्यावहारिक असंभवता पर आधारित है."
    },
    {
      "id": 58,
      "question": "Which of the following attacks is prevented by using Parameterized Queries (Prepared Statements)?",
      "question_hi": "पैरामीटरयुक्त क्वेरीज़ (Prepared Statements) का उपयोग करके निम्नलिखित में से किस साइबर हमले को रोका जाता है?",
      "options": {
        "A": "Cross-Site Scripting (XSS)",
        "B": "SQL Injection (SQLi)",
        "C": "Denial of Service (DoS)",
        "D": "Man-in-the-Middle (MitM)"
      },
      "options_hi": {
        "A": "क्रॉस-साइट स्क्रिप्टिंग (XSS)",
        "B": "SQL इंजेक्शन (SQL Injection)",
        "C": "डिनायल ऑफ सर्विस (DoS)",
        "D": "मैन-इन-द-मिडिल (MitM)"
      },
      "correctAnswer": "B",
      "explanation": "Prepared statements treat user input strictly as data parameters rather than executable SQL code, completely neutralizing SQL Injection attacks.",
      "explanation_hi": "प्रिपेयर्ड स्टेटमेंट्स यूजर इनपुट को निष्पादन योग्य कोड के रूप में नहीं बल्कि विशुद्ध डेटा के रूप में व्याख्यायित करते हैं, जिससे SQL इंजेक्शन का खतरा खत्म हो जाता है."
    },
    {
      "id": 59,
      "question": "Which layer of the OSI model handles data compression, syntax conversion, and encryption?",
      "question_hi": "OSI मॉडल की कौन सी परत डेटा संपीड़न (Compression), सिंटैक्स रूपांतरण और एन्क्रिप्शन का प्रबंधन करती है?",
      "options": {
        "A": "Session Layer",
        "B": "Presentation Layer",
        "C": "Application Layer",
        "D": "Transport Layer"
      },
      "options_hi": {
        "A": "सत्र परत (Session Layer)",
        "B": "प्रस्तुति परत (Presentation Layer)",
        "C": "अनुप्रयोग परत (Application Layer)",
        "D": "परिवहन परत (Transport Layer)"
      },
      "correctAnswer": "B",
      "explanation": "The Presentation Layer (Layer 6) is responsible for data translation, MIME types, data compression, and encryption/decryption.",
      "explanation_hi": "प्रेजेंटेशन लेयर (लेयर 6) डेटा ट्रांसलेशन, सिंटैक्स प्रारूपण, कंप्रेशन तथा एन्क्रिप्शन/डिक्रिप्शन के लिए उत्तरदायी है."
    },
    {
      "id": 60,
      "question": "Which section of the Indian Information Technology (IT) Act, 2000 prescribes punishment for computer-related hacking and dishonestly damaging systems?",
      "question_hi": "भारतीय सूचना प्रौद्योगिकी (IT) अधिनियम, 2000 की कौन सी धारा कंप्यूटर हैकिंग और सिस्टम को बेईमानी से नुकसान पहुंचाने के लिए दंड निर्धारित करती है?",
      "options": {
        "A": "Section 43",
        "B": "Section 66",
        "C": "Section 72",
        "D": "Section 75"
      },
      "options_hi": {
        "A": "धारा 43",
        "B": "धारा 66",
        "C": "धारा 72",
        "D": "धारा 75"
      },
      "correctAnswer": "B",
      "explanation": "Section 66 of the IT Act 2000 covers computer-related offenses (hacking) with punishment of imprisonment up to 3 years or fine up to 5 lakh rupees or both.",
      "explanation_hi": "IT अधिनियम 2000 की धारा 66 कंप्यूटर से संबंधित अपराधों (हैकिंग) के लिए 3 वर्ष तक की कैद या 5 लाख रुपये तक के जुर्माने का प्रावधान करती है."
    },
    {
      "id": 61,
      "question": "Which of the following data types in Python is IMMUTABLE?",
      "question_hi": "पायथन में निम्नलिखित में से कौन सा डेटा प्रकार अपरिवर्तनीय (Immutable) है?",
      "options": {
        "A": "list",
        "B": "dict",
        "C": "set",
        "D": "tuple"
      },
      "options_hi": {
        "A": "list (सूची)",
        "B": "dict (शब्दकोश)",
        "C": "set (समुच्चय)",
        "D": "tuple (टपल)"
      },
      "correctAnswer": "D",
      "explanation": "Tuples, strings, numbers, and frozensets are immutable in Python; their elements cannot be modified in-place after creation.",
      "explanation_hi": "टपल (Tuple), स्ट्रिंग और संख्याएं पायथन में इम्यूटेबल होती हैं; एक बार बनने के बाद उनके तत्वों को बदला नहीं जा सकता."
    },
    {
      "id": 62,
      "question": "What is the output of the Python expression: [x**2 for x in range(5) if x % 2 != 0]?",
      "question_hi": "पायथन एक्सप्रेशन [x**2 for x in range(5) if x % 2 != 0] का आउटपुट क्या होगा?",
      "options": {
        "A": "[0, 4, 16]",
        "B": "[1, 9]",
        "C": "[1, 4, 9]",
        "D": "[0, 1, 4, 9, 16]"
      },
      "options_hi": {
        "A": "[0, 4, 16]",
        "B": "[1, 9]",
        "C": "[1, 4, 9]",
        "D": "[0, 1, 4, 9, 16]"
      },
      "correctAnswer": "B",
      "explanation": "range(5) yields 0, 1, 2, 3, 4. The odd numbers are 1 and 3. Squaring them produces 1**2 = 1 and 3**2 = 9. Output is [1, 9].",
      "explanation_hi": "range(5) में 0 से 4 तक संख्याएं हैं। विषम संख्याएं 1 और 3 हैं। इनका वर्ग 1**2 = 1 और 3**2 = 9 है, अतः परिणाम [1, 9] होगा."
    },
    {
      "id": 63,
      "question": "What keyword is used in a Python function to turn it into a generator that yields values lazily?",
      "question_hi": "पायथन फ़ंक्शन को जनरेटर (Generator) बनाने के लिए किस कीवर्ड का उपयोग किया जाता है जो मानों को आलसी (Lazy) रूप से प्रस्तुत करता है?",
      "options": {
        "A": "return",
        "B": "yield",
        "C": "produce",
        "D": "generate"
      },
      "options_hi": {
        "A": "return",
        "B": "yield",
        "C": "produce",
        "D": "generate"
      },
      "correctAnswer": "B",
      "explanation": "The 'yield' statement suspends function execution and returns a value to the caller, resuming state upon the next iteration.",
      "explanation_hi": "'yield' कीवर्ड का उपयोग करने से फ़ंक्शन एक जनरेटर बन जाता है जो स्मृति कुशल तरीके से एक-एक करके मान लौटाता है."
    },
    {
      "id": 64,
      "question": "What will be the output of `print(type({}) is dict)` in Python 3?",
      "question_hi": "पायथन 3 में `print(type({}) is dict)` का आउटपुट क्या होगा?",
      "options": {
        "A": "True",
        "B": "False",
        "C": "set",
        "D": "SyntaxError"
      },
      "options_hi": {
        "A": "True",
        "B": "False",
        "C": "set",
        "D": "SyntaxError"
      },
      "correctAnswer": "A",
      "explanation": "An empty pair of curly braces `{}` initializes an empty dictionary `dict` in Python, not a set. (An empty set is created via `set()`).",
      "explanation_hi": "पायथन में खाली कर्ली ब्रेसेस `{}` डिक्शनरी बनाता है, सेट नहीं। अतः `type({}) is dict` का मान True होगा."
    },
    {
      "id": 65,
      "question": "Which HTML5 semantic element is designed to contain introductory content, logos, or navigational aids for its parent section?",
      "question_hi": "कौन सा HTML5 सिमेंटिक तत्व अपने जनक अनुभाग के लिए परिचयात्मक सामग्री, लोगो या नेविगेशन लिंक रखने के लिए डिज़ाइन किया गया है?",
      "options": {
        "A": "<nav>",
        "B": "<header>",
        "C": "<section>",
        "D": "<aside>"
      },
      "options_hi": {
        "A": "<nav>",
        "B": "<header>",
        "C": "<section>",
        "D": "<aside>"
      },
      "correctAnswer": "B",
      "explanation": "The <header> element represents a container for introductory content or a set of navigational links for an article or webpage.",
      "explanation_hi": "<header> टैग का उपयोग किसी वेबपेज या आर्टिकल के परिचयात्मक भाग, शीर्षलेख अथवा नेविगेशन लिंक्स को रखने के लिए किया जाता है."
    },
    {
      "id": 66,
      "question": "In CSS Box Model, which layer represents the space immediately between the element's content and its border?",
      "question_hi": "CSS बॉक्स मॉडल में, कौन सा भाग तत्व की सामग्री (Content) और उसकी सीमा (Border) के ठीक बीच का स्थान दर्शाता है?",
      "options": {
        "A": "Margin",
        "B": "Padding",
        "C": "Outline",
        "D": "Spacing"
      },
      "options_hi": {
        "A": "मार्जिन (Margin)",
        "B": "पैडिंग (Padding)",
        "C": "आउटलाइन (Outline)",
        "D": "स्पेसिंग"
      },
      "correctAnswer": "B",
      "explanation": "From inside out: Content -> Padding -> Border -> Margin. Padding is the clear area between content and border.",
      "explanation_hi": "अंदर से बाहर का क्रम है: कंटेंट -> पैडिंग -> बॉर्डर -> मार्जिन। कंटेंट और बॉर्डर के बीच की जगह को पैडिंग कहते हैं."
    },
    {
      "id": 67,
      "question": "What is the phenomenon in JavaScript where an event triggered on a child element propagates upward through all its ancestors in the DOM tree?",
      "question_hi": "जावास्क्रिप्ट में वह घटना क्या कहलाती है जहाँ चाइल्ड एलिमेंट पर ट्रिगर हुआ इवेंट DOM ट्री में अपने सभी पूर्वजों तक ऊपर फैलता है?",
      "options": {
        "A": "Event Capturing",
        "B": "Event Bubbling",
        "C": "Event Hoisting",
        "D": "Event Throttling"
      },
      "options_hi": {
        "A": "इवेंट कैप्चरिंग",
        "B": "इवेंट बबलिंग (Event Bubbling)",
        "C": "इवेंट होइस्टिंग",
        "D": "इवेंट थ्रॉटलिंग"
      },
      "correctAnswer": "B",
      "explanation": "Event Bubbling starts at the innermost target element and bubbles upward through parent elements until it reaches the root document.",
      "explanation_hi": "इवेंट बबलिंग में इवेंट सबसे आंतरिक टारगेट नोड से शुरू होकर ऊपर की ओर पैरेंट और डॉक्यूमेंट नोड तक प्रसारित होता है."
    },
    {
      "id": 68,
      "question": "Which JavaScript method is used to attach an event handler to an element without overwriting existing handlers?",
      "question_hi": "मौजूदा हैंडलर्स को ओवरराइट किए बिना किसी तत्व पर इवेंट हैंडलर जोड़ने के लिए किस जावास्क्रिप्ट विधि का उपयोग किया जाता है?",
      "options": {
        "A": "element.attachHandler()",
        "B": "element.addEventListener()",
        "C": "element.onEvent()",
        "D": "element.bindListener()"
      },
      "options_hi": {
        "A": "element.attachHandler()",
        "B": "element.addEventListener()",
        "C": "element.onEvent()",
        "D": "element.bindListener()"
      },
      "correctAnswer": "B",
      "explanation": "addEventListener() can attach multiple distinct listeners to a single event on an element without overriding previously registered handlers.",
      "explanation_hi": "addEventListener() विधि किसी एलिमेंट पर एक से अधिक इवेंट लिसनर्स को बिना किसी रुकावट या ओवरराइट किए जोड़ने की अनुमति देती है."
    },
    {
      "id": 69,
      "question": "What does CSS 'box-sizing: border-box;' do?",
      "question_hi": "CSS में 'box-sizing: border-box;' क्या करता है?",
      "options": {
        "A": "Adds an extra border outside the margin",
        "B": "Includes padding and border within the element's total specified width and height",
        "C": "Excludes padding from height calculation",
        "D": "Forces borders to be solid black"
      },
      "options_hi": {
        "A": "मार्जिन के बाहर एक अतिरिक्त बॉर्डर जोड़ता है",
        "B": "तत्व की कुल निर्दिष्ट चौड़ाई और ऊंचाई में पैडिंग और बॉर्डर को शामिल करता है",
        "C": "ऊंचाई की गणना से पैडिंग को बाहर करता है",
        "D": "बॉर्डर्स को हमेशा ठोस काला बनाता है"
      },
      "correctAnswer": "B",
      "explanation": "With border-box, the declared width and height include the content, padding, and border, making responsive layout calculations predictable.",
      "explanation_hi": "border-box लागू करने पर एलिमेंट की कुल चौड़ाई और ऊंचाई में पैडिंग और बॉर्डर समाहित हो जाते हैं, जिससे लेआउट की गणना सरल हो जाती है."
    },
    {
      "id": 70,
      "question": "Which of the following creates a deep copy of an object or array in modern JavaScript?",
      "question_hi": "आधुनिक जावास्क्रिप्ट में निम्नलिखित में से कौन किसी ऑब्जेक्ट या ऐरे की डीप कॉपी (Deep Copy) बनाता है?",
      "options": {
        "A": "Object.assign({}, obj)",
        "B": "{ ...obj }",
        "C": "structuredClone(obj)",
        "D": "obj.clone()"
      },
      "options_hi": {
        "A": "Object.assign({}, obj)",
        "B": "{ ...obj }",
        "C": "structuredClone(obj)",
        "D": "obj.clone()"
      },
      "correctAnswer": "C",
      "explanation": "structuredClone() is the built-in modern web standard method for creating deep clones of nested objects, while spread and Object.assign are shallow copies.",
      "explanation_hi": "structuredClone() नेस्टेड ऑब्जेक्ट्स और ऐरे की पूर्ण डीप कॉपी बनाने की मानक इन-बिल्ट जावास्क्रिप्ट विधि है, जबकि स्प्रेड (...) केवल शैलो कॉपी बनाता है."
    },
    {
      "id": 71,
      "question": "In the Spiral model of software development, what is the primary focus of each iteration?",
      "question_hi": "सॉफ्टवेयर विकास के स्पाइरल (सर्पिल) मॉडल में प्रत्येक पुनरावृत्ति (Iteration) का प्राथमिक ध्यान किस पर होता है?",
      "options": {
        "A": "Writing source code first",
        "B": "Rigorous risk analysis and mitigation",
        "C": "Customer billing and accounting",
        "D": "Avoiding customer reviews"
      },
      "options_hi": {
        "A": "पहले सोर्स कोड लिखना",
        "B": "सटीक जोखिम विश्लेषण और शमन (Risk Analysis)",
        "C": "ग्राहक बिलिंग और लेखांकन",
        "D": "ग्राहक समीक्षाओं से बचना"
      },
      "correctAnswer": "B",
      "explanation": "Boehm's Spiral model is fundamentally a risk-driven process model where risk assessment and reduction guide every single cycle.",
      "explanation_hi": "स्पाइरल मॉडल एक जोखिम-संचालित (Risk-driven) मॉडल है जिसमें प्रत्येक चक्र में संभावित जोखिमों का विश्लेषण और समाधान सबसे महत्वपूर्ण होता है."
    },
    {
      "id": 72,
      "question": "What is McCabe's Cyclomatic Complexity formula for a program control flow graph with E edges, N nodes, and P connected components?",
      "question_hi": "E किनारों, N नोड्स और P जुड़े घटकों वाले प्रोग्राम कंट्रोल फ्लो ग्राफ के लिए मैककेब का साइक्लोमैटिक जटिलता सूत्र क्या है?",
      "options": {
        "A": "V(G) = E - N + 2P",
        "B": "V(G) = E + N - P",
        "C": "V(G) = N - E + 2",
        "D": "V(G) = E * N / P"
      },
      "options_hi": {
        "A": "V(G) = E - N + 2P",
        "B": "V(G) = E + N - P",
        "C": "V(G) = N - E + 2",
        "D": "V(G) = E * N / P"
      },
      "correctAnswer": "A",
      "explanation": "McCabe's Cyclomatic Complexity V(G) = E - N + 2P measures the number of linearly independent paths through the program control flow graph.",
      "explanation_hi": "मैककेब का साइक्लोमैटिक जटिलता सूत्र V(G) = E - N + 2P होता है, जो प्रोग्राम में रैखिक रूप से स्वतंत्र पथों की संख्या मापता है."
    },
    {
      "id": 73,
      "question": "Which software testing technique evaluates internal code logic, branches, loops, and statement coverage?",
      "question_hi": "कौन सी सॉफ्टवेयर परीक्षण तकनीक आंतरिक कोड लॉजिक, ब्रांच, लूप और स्टेटमेंट कवरेज का मूल्यांकन करती है?",
      "options": {
        "A": "Black-Box Testing",
        "B": "White-Box (Structural) Testing",
        "C": "User Acceptance Testing",
        "D": "Monkey Testing"
      },
      "options_hi": {
        "A": "ब्लैक-बॉक्स परीक्षण",
        "B": "व्हाइट-बॉक्स (संरचनात्मक) परीक्षण",
        "C": "उपयोगकर्ता स्वीकृति परीक्षण",
        "D": "मंकी टेस्टिंग"
      },
      "correctAnswer": "B",
      "explanation": "White-box testing explicitly tests the inner workings, internal structures, conditional branches, and statements of the software application.",
      "explanation_hi": "व्हाइट-बॉक्स टेस्टिंग में परीक्षक आंतरिक कोड संरचना, लॉजिक, कंडीशनल ब्रांचेज और लूप्स के आधार पर टेस्ट केस तैयार करता है."
    },
    {
      "id": 74,
      "question": "Which cloud computing deployment model provides virtual machines, raw storage, and virtual networking infrastructure as a service?",
      "question_hi": "कौन सा क्लाउड कंप्यूटिंग सेवा मॉडल एक सेवा के रूप में वर्चुअल मशीनें, कच्चा भंडारण और वर्चुअल नेटवर्किंग अवसंरचना प्रदान करता है?",
      "options": {
        "A": "SaaS (Software as a Service)",
        "B": "PaaS (Platform as a Service)",
        "C": "IaaS (Infrastructure as a Service)",
        "D": "FaaS (Function as a Service)"
      },
      "options_hi": {
        "A": "SaaS (सॉफ्टवेयर एज अ सर्विस)",
        "B": "PaaS (प्लेटफॉर्म एज अ सर्विस)",
        "C": "IaaS (इन्फ्रास्ट्रक्चर एज अ सर्विस)",
        "D": "FaaS (फंक्शन एज अ सर्विस)"
      },
      "correctAnswer": "C",
      "explanation": "IaaS (e.g., AWS EC2, Google Compute Engine) provisions fundamental computing resources like virtual servers, network switches, and raw block storage.",
      "explanation_hi": "IaaS ग्राहकों को वर्चुअल मशीन, स्टोरेज और नेटवर्किंग जैसी बुनियादी कंप्यूटिंग अवसंरचनाएं किराए पर प्रदान करता है."
    },
    {
      "id": 75,
      "question": "In agile Scrum methodology, what is the maximum recommended duration for the daily standup meeting?",
      "question_hi": "एजाइल स्क्रम (Agile Scrum) पद्धति में, दैनिक स्टैंडअप (Daily Standup) बैठक के लिए अधिकतम अनुशंसित समय क्या है?",
      "options": {
        "A": "15 minutes",
        "B": "30 minutes",
        "C": "45 minutes",
        "D": "60 minutes"
      },
      "options_hi": {
        "A": "15 मिनट",
        "B": "30 मिनट",
        "C": "45 मिनट",
        "D": "60 मिनट"
      },
      "correctAnswer": "A",
      "explanation": "The Daily Scrum is strictly time-boxed to a maximum of 15 minutes to keep team updates focused and concise.",
      "explanation_hi": "दैनिक स्क्रम स्टैंडअप मीटिंग को टीम के त्वरित समन्वय के लिए कड़ाई से अधिकतम 15 मिनट के समय में सीमित रखा जाता है."
    },
    {
      "id": 76,
      "question": "Which artificial intelligence search algorithm uses both path cost g(n) and heuristic estimate h(n) such that f(n) = g(n) + h(n)?",
      "question_hi": "कौन सा AI खोज एल्गोरिदम पथ लागत g(n) और अनुमानित लागत h(n) दोनों का उपयोग करता है ताकि f(n) = g(n) + h(n) हो सके?",
      "options": {
        "A": "Breadth-First Search",
        "B": "Depth-First Search",
        "C": "A* Search Algorithm",
        "D": "Hill Climbing"
      },
      "options_hi": {
        "A": "ब्रेड्थ-फर्स्ट सर्च",
        "B": "डेप्थ-फर्स्ट सर्च",
        "C": "A* सर्च एल्गोरिदम",
        "D": "हिल क्लाइंबिंग"
      },
      "correctAnswer": "C",
      "explanation": "A* algorithm evaluates f(n) = g(n) + h(n), where g(n) is actual cost to reach node n and h(n) is the admissible heuristic cost to the goal.",
      "explanation_hi": "A* एल्गोरिदम f(n) = g(n) + h(n) का मूल्यांकन करता है, जहाँ g(n) वास्तविक लागत और h(n) लक्ष्य तक की अनुमानित लागत है."
    },
    {
      "id": 77,
      "question": "In relational databases, what does the 'D' in CRUD operations stand for?",
      "question_hi": "रिलेशनल डेटाबेस में, CRUD ऑपरेशन्स में 'D' का क्या अर्थ है?",
      "options": {
        "A": "Data",
        "B": "Delete",
        "C": "Define",
        "D": "Drop"
      },
      "options_hi": {
        "A": "Data",
        "B": "Delete (डिलीट)",
        "C": "Define",
        "D": "Drop"
      },
      "correctAnswer": "B",
      "explanation": "CRUD stands for Create, Read, Update, and Delete — the four basic persistent data management operations.",
      "explanation_hi": "CRUD का पूर्ण रूप Create (निर्माण), Read (पठन), Update (अपडेट), और Delete (विलोपन) होता है."
    },
    {
      "id": 78,
      "question": "What is the primary function of the Memory Management Unit (MMU)?",
      "question_hi": "मेमोरी मैनेजमेंट यूनिट (MMU) का प्राथमिक कार्य क्या है?",
      "options": {
        "A": "Translating CPU virtual addresses into physical memory addresses",
        "B": "Executing arithmetic operations on floating point numbers",
        "C": "Controlling the speed of the CPU cooling fan",
        "D": "Formatting hard disk partitions"
      },
      "options_hi": {
        "A": "CPU के वर्चुअल पतों को भौतिक मेमोरी पतों में परिवर्तित करना",
        "B": "फ्लोटिंग पॉइंट संख्याओं पर अंकगणितीय गणना करना",
        "C": "CPU कूलिंग फैन की गति नियंत्रित करना",
        "D": "हार्ड डिस्क विभाजन को फॉर्मेट करना"
      },
      "correctAnswer": "A",
      "explanation": "The hardware MMU translates logical/virtual memory addresses issued by the CPU into physical RAM addresses using page tables and TLB.",
      "explanation_hi": "हार्डवेयर MMU पेज टेबल और TLB की मदद से CPU द्वारा उत्पन्न वर्चुअल (तार्किक) पतों को वास्तविक भौतिक RAM पतों में अनुवादित करता है."
    },
    {
      "id": 79,
      "question": "Which of the following is an example of an asynchronous sequential circuit?",
      "question_hi": "निम्नलिखित में से कौन सा एक एसिंक्रोनस (अतुल्यकालिक) अनुक्रमिक सर्किट का उदाहरण है?",
      "options": {
        "A": "Ripple Counter",
        "B": "Synchronous Up-Down Counter",
        "C": "Ring Counter",
        "D": "Johnson Counter"
      },
      "options_hi": {
        "A": "रिपल काउंटर (Ripple Counter)",
        "B": "सिंक्रोनस अप-डाउन काउंटर",
        "C": "रिंग काउंटर",
        "D": "जॉनसन काउंटर"
      },
      "correctAnswer": "A",
      "explanation": "In a ripple counter, flip-flops are not clocked simultaneously; the output of one flip-flop serves as the clock trigger for the next.",
      "explanation_hi": "रिपल काउंटर में सभी फ्लिप-फ्लॉप्स को एक साथ क्लॉक नहीं दी जाती; पहले का आउटपुट अगले की क्लॉक बनता है, इसलिए यह एसिंक्रोनस सर्किट है."
    },
    {
      "id": 80,
      "question": "What is the minimum number of 2-input NAND gates required to implement a 2-input XOR gate?",
      "question_hi": "2-इनपुट XOR गेट को लागू करने के लिए आवश्यक 2-इनपुट NAND गेटों की न्यूनतम संख्या कितनी है?",
      "options": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "6"
      },
      "options_hi": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "6"
      },
      "correctAnswer": "B",
      "explanation": "Exactly 4 two-input NAND gates are needed to construct a standard XOR gate (A ⊕ B).",
      "explanation_hi": "2-इनपुट XOR गेट (A ⊕ B) बनाने के लिए ठीक 4 दो-इनपुट NAND गेटों की आवश्यकता होती है."
    },
    {
      "id": 81,
      "question": "Which of the following sorting algorithms has the best average-case performance with O(n) space?",
      "question_hi": "निम्नलिखित में से किस सॉर्टिंग एल्गोरिदम का औसत प्रदर्शन O(n log n) और O(n) अतिरिक्त स्थान की आवश्यकता होती है?",
      "options": {
        "A": "Bubble Sort",
        "B": "Merge Sort",
        "C": "Insertion Sort",
        "D": "Selection Sort"
      },
      "options_hi": {
        "A": "बबल सॉर्ट",
        "B": "मर्ज सॉर्ट",
        "C": "इंसर्शन सॉर्ट",
        "D": "सिलेक्शन सॉर्ट"
      },
      "correctAnswer": "B",
      "explanation": "Merge sort requires O(n) auxiliary array space during the merge phase and runs in guaranteed O(n log n) time.",
      "explanation_hi": "मर्ज सॉर्ट को मर्जिंग चरण के दौरान O(n) अतिरिक्त स्थान की आवश्यकता होती है और यह O(n log n) समय में निष्पादित होता है."
    },
    {
      "id": 82,
      "question": "What does RAID 1 stand for in data storage architectures?",
      "question_hi": "डेटा स्टोरेज आर्किटेक्चर में RAID 1 का क्या अर्थ है?",
      "options": {
        "A": "Disk Striping without parity",
        "B": "Disk Mirroring (exact replica of data on two drives)",
        "C": "Bit-level striping with Hamming code",
        "D": "Block-level striping with distributed parity"
      },
      "options_hi": {
        "A": "बिना पैरिटी के डिस्क स्ट्रिपिंग",
        "B": "डिस्क मिररिंग (दो ड्राइव पर डेटा की सटीक नकल)",
        "C": "हैमिंग कोड के साथ बिट-स्तरीय स्ट्रिपिंग",
        "D": "वितरित पैरिटी के साथ ब्लॉक-स्तरीय स्ट्रिपिंग"
      },
      "correctAnswer": "B",
      "explanation": "RAID 1 mirrors data across two identical disks for fault tolerance and high reliability.",
      "explanation_hi": "RAID 1 में दो समान डिस्क पर डेटा को हूबहू कॉपी (मिरर) किया जाता है ताकि एक डिस्क खराब होने पर भी डेटा सुरक्षित रहे."
    },
    {
      "id": 83,
      "question": "In Python, which built-in function returns both the index and value during loop iteration?",
      "question_hi": "पायथन में, लूप पुनरावृत्ति के दौरान कौन सा इन-बिल्ट फ़ंक्शन इंडेक्स और वैल्यू दोनों लौटाता है?",
      "options": {
        "A": "range()",
        "B": "enumerate()",
        "C": "zip()",
        "D": "map()"
      },
      "options_hi": {
        "A": "range()",
        "B": "enumerate()",
        "C": "zip()",
        "D": "map()"
      },
      "correctAnswer": "B",
      "explanation": "The enumerate() function adds a counter to an iterable and returns it as an enumerate object of (index, item) pairs.",
      "explanation_hi": "enumerate() फ़ंक्शन किसी पुनरावृत्त (Iterable) में काउंटर जोड़ता है और (इंडेक्स, आइटम) का टपल लौटाता है."
    },
    {
      "id": 84,
      "question": "What will be the result of integer division `17 // 4` in Python 3?",
      "question_hi": "पायथन 3 में पूर्णांक विभाजन `17 // 4` का परिणाम क्या होगा?",
      "options": {
        "A": "4.25",
        "B": "4",
        "C": "5",
        "D": "1"
      },
      "options_hi": {
        "A": "4.25",
        "B": "4",
        "C": "5",
        "D": "1"
      },
      "correctAnswer": "B",
      "explanation": "The `//` operator performs floor division, truncating fractional parts and returning the integer quotient 4.",
      "explanation_hi": "`//` ऑपरेटर फ्लोर डिवीजन करता है, जो दशमलव भाग को हटाकर निकटतम निचला पूर्णांक 4 लौटाता है."
    },
    {
      "id": 85,
      "question": "Which of the following HTTP status codes indicates 'Unauthorized' access?",
      "question_hi": "निम्नलिखित में से कौन सा HTTP स्थिति कोड 'अनऑथराइज्ड (Unauthorized)' पहुंच को दर्शाता है?",
      "options": {
        "A": "200",
        "B": "401",
        "C": "403",
        "D": "404"
      },
      "options_hi": {
        "A": "200",
        "B": "401",
        "C": "403",
        "D": "404"
      },
      "correctAnswer": "B",
      "explanation": "HTTP 401 indicates that authentication is required and has failed or has not been provided yet.",
      "explanation_hi": "HTTP 401 अनधिकृत (Unauthorized) स्थिति को दर्शाता है, जिसका अर्थ है कि वैध प्रमाणीकरण आवश्यक है."
    },
    {
      "id": 86,
      "question": "What is the maximum number of nodes in a binary tree of height h (where root is at height 1)?",
      "question_hi": "ऊंचाई h वाले बाइनरी ट्री में नोड्स की अधिकतम संख्या क्या होती है (जहाँ रूट की ऊंचाई 1 है)?",
      "options": {
        "A": "2^h - 1",
        "B": "2^(h-1)",
        "C": "2^(h+1) - 1",
        "D": "2*h"
      },
      "options_hi": {
        "A": "2^h - 1",
        "B": "2^(h-1)",
        "C": "2^(h+1) - 1",
        "D": "2*h"
      },
      "correctAnswer": "A",
      "explanation": "For height h starting at 1, maximum nodes = 1 + 2 + 4 + ... + 2^(h-1) = 2^h - 1.",
      "explanation_hi": "ऊंचाई 1 से शुरू होने पर बाइनरी ट्री में नोड्स की अधिकतम संख्या 2^h - 1 होती है."
    },
    {
      "id": 87,
      "question": "Which data structure is best suited to implement an Undo/Redo feature in a text editor?",
      "question_hi": "टेक्स्ट एडिटर में Undo/Redo सुविधा को लागू करने के लिए कौन सी डेटा संरचना सबसे उपयुक्त है?",
      "options": {
        "A": "Queue",
        "B": "Two Stacks",
        "C": "Binary Search Tree",
        "D": "Hash Table"
      },
      "options_hi": {
        "A": "कतार (Queue)",
        "B": "दो स्टैक (Two Stacks)",
        "C": "बाइनरी सर्च ट्री",
        "D": "हैश टेबल"
      },
      "correctAnswer": "B",
      "explanation": "An Undo stack holds previous states, and popping from Undo pushes into a Redo stack, allowing bidirectional reversal.",
      "explanation_hi": "Undo और Redo ऑपरेशन्स को दो अलग-अलग स्टैक्स (LIFO) का उपयोग करके सबसे कुशलतापूर्वक प्रबंधित किया जाता है."
    },
    {
      "id": 88,
      "question": "In SQL, which aggregate function returns the total number of non-NULL values in a specified column?",
      "question_hi": "SQL में कौन सा एग्रीगेट फ़ंक्शन किसी निर्दिष्ट कॉलम में गैर-NULL मानों की कुल संख्या लौटाता है?",
      "options": {
        "A": "SUM()",
        "B": "COUNT(column_name)",
        "C": "AVG()",
        "D": "TOTAL()"
      },
      "options_hi": {
        "A": "SUM()",
        "B": "COUNT(column_name)",
        "C": "AVG()",
        "D": "TOTAL()"
      },
      "correctAnswer": "B",
      "explanation": "COUNT(column) counts only rows where that specific column is not NULL. (COUNT(*) counts all rows including NULLs).",
      "explanation_hi": "COUNT(column_name) केवल उन पंक्तियों की गिनती करता है जहाँ कॉलम का मान NULL नहीं है."
    },
    {
      "id": 89,
      "question": "Which scheduling algorithm is non-preemptive and selects the process that arrived earliest in the ready queue?",
      "question_hi": "कौन सा शेड्यूलिंग एल्गोरिदम गैर-प्रीमेप्टिव है और रेडी कतार में सबसे पहले आने वाली प्रोसेस का चयन करता है?",
      "options": {
        "A": "Round Robin",
        "B": "FCFS (First Come First Served)",
        "C": "Shortest Remaining Time First",
        "D": "Priority Preemptive"
      },
      "options_hi": {
        "A": "राउंड रॉबिन",
        "B": "FCFS (फर्स्ट कम फर्स्ट सर्व्ड)",
        "C": "शॉर्टेस्ट रिमेनिंग टाइम फर्स्ट",
        "D": "प्रायोरिटी प्रीमेप्टिव"
      },
      "correctAnswer": "B",
      "explanation": "FCFS schedules processes in strict FIFO arrival order without preemption.",
      "explanation_hi": "FCFS पहले आओ पहले पाओ के आधार पर बिना किसी प्रीएम्पशन के कतारबद्ध प्रक्रियाओं को CPU प्रदान करता है."
    },
    {
      "id": 90,
      "question": "What is the size of an IPv6 address in bits?",
      "question_hi": "बिट्स में IPv6 पते का आकार क्या होता है?",
      "options": {
        "A": "32 bits",
        "B": "64 bits",
        "C": "128 bits",
        "D": "256 bits"
      },
      "options_hi": {
        "A": "32 बिट्स",
        "B": "64 बिट्स",
        "C": "128 बिट्स",
        "D": "256 बिट्स"
      },
      "correctAnswer": "C",
      "explanation": "IPv4 addresses are 32 bits long, while IPv6 addresses are 128 bits long (represented as 8 hexadecimal groups).",
      "explanation_hi": "IPv4 का आकार 32 बिट्स होता है जबकि IPv6 एड्रेस 128 बिट्स लंबा होता है (8 हेक्साडेसिमल ब्लॉक में लिखा जाता है)."
    },
    {
      "id": 91,
      "question": "What is the worst-case time complexity of QuickSort when bad pivots (e.g. smallest or largest element) are consistently selected?",
      "question_hi": "क्विकसॉर्ट की सबसे खराब स्थिति (Worst-case) में समय जटिलता क्या होती है जब लगातार खराब पिवट चुने जाते हैं?",
      "options": {
        "A": "O(n)",
        "B": "O(n log n)",
        "C": "O(n²)",
        "D": "O(2ⁿ)"
      },
      "options_hi": {
        "A": "O(n)",
        "B": "O(n log n)",
        "C": "O(n²)",
        "D": "O(2ⁿ)"
      },
      "correctAnswer": "C",
      "explanation": "When pivots divide the array into subproblems of size 0 and n-1 each time, recurrence T(n) = T(n-1) + O(n) yields O(n²).",
      "explanation_hi": "असंतुलित विभाजन के कारण क्विकसॉर्ट की सबसे खराब स्थिति में जटिलता O(n²) हो जाती है."
    },
    {
      "id": 92,
      "question": "Which of the following is an example of an unguided transmission medium?",
      "question_hi": "निम्नलिखित में से कौन सा अनगाइडेड (वायरलेस) ट्रांसमिशन माध्यम का एक उदाहरण है?",
      "options": {
        "A": "Twisted Pair Cable",
        "B": "Coaxial Cable",
        "C": "Optical Fiber",
        "D": "Microwave Radio Waves"
      },
      "options_hi": {
        "A": "ट्विस्टेड पेयर केबल",
        "B": "समाक्षीय (Coaxial) केबल",
        "C": "ऑप्टिकल फाइबर",
        "D": "माइक्रोवेव रेडियो तरंगें"
      },
      "correctAnswer": "D",
      "explanation": "Unguided media transmit electromagnetic waves without a physical conductor (e.g., radio, microwave, infrared).",
      "explanation_hi": "माइक्रोवेव रेडियो तरंगें बिना भौतिक तार के अंतरिक्ष में यात्रा करती हैं, इसलिए ये अनगाइडेड (Unguided) माध्यम हैं."
    },
    {
      "id": 93,
      "question": "In C++, which stream object is tied to standard error unbuffered output?",
      "question_hi": "C++ में कौन सा स्ट्रीम ऑब्जेक्ट अनबफ़र्ड मानक त्रुटि (Standard Error) आउटपुट से जुड़ा होता है?",
      "options": {
        "A": "cout",
        "B": "cerr",
        "C": "clog",
        "D": "cin"
      },
      "options_hi": {
        "A": "cout",
        "B": "cerr",
        "C": "clog",
        "D": "cin"
      },
      "correctAnswer": "B",
      "explanation": "std::cerr writes to standard error without buffering, ensuring immediate display of critical errors. (std::clog is buffered).",
      "explanation_hi": "std::cerr अनबफ़र्ड होता है जिससे त्रुटि संदेश तुरंत स्क्रीन पर बिना किसी विलंब के प्रदर्शित होते हैं."
    },
    {
      "id": 94,
      "question": "What is the primary purpose of the 'GROUP BY' clause in SQL?",
      "question_hi": "SQL में 'GROUP BY' क्लॉज का प्राथमिक उद्देश्य क्या है?",
      "options": {
        "A": "To join two foreign tables",
        "B": "To arrange identical data into groups for applying aggregate functions",
        "C": "To sort the query result alphabetically",
        "D": "To delete redundant duplicate rows"
      },
      "options_hi": {
        "A": "दो विदेशी तालिकाओं को जोड़ना",
        "B": "समान डेटा को समूहों में व्यवस्थित करना ताकि एग्रीगेट फ़ंक्शंस लागू किए जा सकें",
        "C": "क्वेरी परिणाम को वर्णानुक्रम में क्रमबद्ध करना",
        "D": "अनावश्यक डुप्लिकेट पंक्तियों को हटाना"
      },
      "correctAnswer": "B",
      "explanation": "GROUP BY aggregates summary rows sharing identical values across specified columns (e.g., finding total salary per department).",
      "explanation_hi": "GROUP BY समान मान वाली पंक्तियों को सारांश समूहों में एकत्रित करता है ताकि SUM, AVG जैसे एग्रीगेट फंक्शन लागू हो सकें."
    },
    {
      "id": 95,
      "question": "Which of the following is a symmetric key cipher standard widely used today?",
      "question_hi": "निम्नलिखित में से कौन सा सममित कुंजी सिफर (Symmetric Key Cipher) मानक आज व्यापक रूप से उपयोग किया जाता है?",
      "options": {
        "A": "RSA",
        "B": "AES (Advanced Encryption Standard)",
        "C": "Diffie-Hellman",
        "D": "ECC"
      },
      "options_hi": {
        "A": "RSA",
        "B": "AES (उन्नत एन्क्रिप्शन मानक)",
        "C": "डिफी-हेलमैन",
        "D": "ECC"
      },
      "correctAnswer": "B",
      "explanation": "AES is the worldwide standard symmetric block cipher supporting 128, 192, and 256-bit key lengths.",
      "explanation_hi": "AES एक सममित ब्लॉक सिफर मानक है जिसका उपयोग वैश्विक स्तर पर डेटा एन्क्रिप्शन के लिए किया जाता है."
    },
    {
      "id": 96,
      "question": "What does a Foreign Key reference in another table?",
      "question_hi": "दूसरी तालिका में एक फॉरेन की (Foreign Key) किसे संदर्भित करती है?",
      "options": {
        "A": "Any column of type VARCHAR",
        "B": "A Primary Key or Unique Candidate Key",
        "C": "An auto-incrementing identity only",
        "D": "A default value constraint"
      },
      "options_hi": {
        "A": "VARCHAR प्रकार का कोई भी कॉलम",
        "B": "एक प्राइमरी की (Primary Key) या अद्वितीय कैंडिडेट की",
        "C": "केवल एक ऑटो-इंक्रीमेंट पहचान",
        "D": "एक डिफ़ॉल्ट मान बाधा"
      },
      "correctAnswer": "B",
      "explanation": "A foreign key must reference a candidate key (typically the Primary Key or UNIQUE column) in the referenced table.",
      "explanation_hi": "फॉरेन की हमेशा संदर्भित पैरेंट टेबल की प्राइमरी की या कैंडिडेट की (Unique Key) को ही संदर्भित करती है."
    },
    {
      "id": 97,
      "question": "Which traversal of a Binary Search Tree (BST) visits nodes in strictly ascending sorted order?",
      "question_hi": "बाइनरी सर्च ट्री (BST) का कौन सा ट्रैवर्सल नोड्स को कड़ाई से बढ़ते (आरोही) क्रम में संसाधित करता है?",
      "options": {
        "A": "Pre-order",
        "B": "In-order",
        "C": "Post-order",
        "D": "Level-order"
      },
      "options_hi": {
        "A": "प्री-ऑर्डर",
        "B": "इन-ऑर्डर (In-order)",
        "C": "पोस्ट-ऑर्डर",
        "D": "लेवल-ऑर्डर"
      },
      "correctAnswer": "B",
      "explanation": "In-order traversal (Left -> Root -> Right) of a BST outputs elements in monotonically increasing sorted order.",
      "explanation_hi": "BST का इन-ऑर्डर ट्रैवर्सल (बायाँ -> रूट -> दायाँ) तत्वों को हमेशा आरोही क्रम में आउटपुट देता है."
    },
    {
      "id": 98,
      "question": "What is the default subnet mask for an IPv4 Class C network address?",
      "question_hi": "IPv4 क्लास C नेटवर्क पते के लिए डिफ़ॉल्ट सबनेट मास्क क्या होता है?",
      "options": {
        "A": "255.0.0.0",
        "B": "255.255.0.0",
        "C": "255.255.255.0",
        "D": "255.255.255.255"
      },
      "options_hi": {
        "A": "255.0.0.0",
        "B": "255.255.0.0",
        "C": "255.255.255.0",
        "D": "255.255.255.255"
      },
      "correctAnswer": "C",
      "explanation": "Class C uses 24 network bits and 8 host bits, corresponding to default mask 255.255.255.0 (/24).",
      "explanation_hi": "क्लास C में 24 बिट्स नेटवर्क के लिए और 8 बिट्स होस्ट के लिए होते हैं, अतः डिफ़ॉल्ट मास्क 255.255.255.0 होता है."
    },
    {
      "id": 99,
      "question": "Which of the following commands in Linux displays currently active processes and dynamic CPU resource usage in real-time?",
      "question_hi": "लिनक्स में निम्नलिखित में से कौन सा कमांड वर्तमान में सक्रिय प्रक्रियाओं और वास्तविक समय के CPU उपयोग को प्रदर्शित करता है?",
      "options": {
        "A": "ls -l",
        "B": "top",
        "C": "grep",
        "D": "cat"
      },
      "options_hi": {
        "A": "ls -l",
        "B": "top",
        "C": "grep",
        "D": "cat"
      },
      "correctAnswer": "B",
      "explanation": "The 'top' utility provides an interactive, real-time dynamic view of running system processes, CPU, and RAM allocation.",
      "explanation_hi": "'top' कमांड लिनक्स में सभी सक्रिय प्रक्रियाओं, CPU और मेमोरी उपयोग को रीयल-टाइम में मॉनिटर करने के लिए उपयोग किया जाता है."
    },
    {
      "id": 100,
      "question": "What is the main advantage of dynamic memory allocation using pointers over static arrays?",
      "question_hi": "स्टैटिक ऐरे की तुलना में पॉइंटर्स का उपयोग करके डायनामिक मेमोरी आवंटन का मुख्य लाभ क्या है?",
      "options": {
        "A": "Compile time memory binding",
        "B": "Flexible memory allocation at runtime based on actual program demand",
        "C": "Automatic prevention of memory leaks",
        "D": "Elimination of heap memory overhead"
      },
      "options_hi": {
        "A": "कंपाइल टाइम मेमोरी बाइंडिंग",
        "B": "वास्तविक प्रोग्राम आवश्यकता के अनुसार रनटाइम पर लचीला मेमोरी आवंटन",
        "C": "मेमोरी लीक से स्वतः बचाव",
        "D": "हीप मेमोरी ओवरहेड का खात्मा"
      },
      "correctAnswer": "B",
      "explanation": "Dynamic memory allocation (via malloc/new) allows sizing data structures at runtime, avoiding fixed buffer waste.",
      "explanation_hi": "डायनामिक मेमोरी आवंटन रनटाइम पर मांग के अनुसार हीप से मेमोरी आवंटित और मुक्त करने की सुविधा देता है."
    },
    {
      "id": 101,
      "question": "According to Bloom's Revised Taxonomy (Anderson & Krathwohl), which of the following represents the highest cognitive level?",
      "question_hi": "ब्लूम के संशोधित वर्गीकरण (एंडर्सन और क्रैथवोहल) के अनुसार, निम्नलिखित में से कौन सा उच्चतम संज्ञानात्मक स्तर दर्शाता है?",
      "options": {
        "A": "Evaluating",
        "B": "Analyzing",
        "C": "Creating",
        "D": "Applying"
      },
      "options_hi": {
        "A": "मूल्यांकन करना (Evaluating)",
        "B": "विश्लेषण करना (Analyzing)",
        "C": "सृजन करना (Creating)",
        "D": "लागू करना (Applying)"
      },
      "correctAnswer": "C",
      "explanation": "In Bloom's Revised Taxonomy (2001), the cognitive hierarchy from lowest to highest is: Remembering, Understanding, Applying, Analyzing, Evaluating, and Creating.",
      "explanation_hi": "ब्लूम के संशोधित टैक्सोनॉमी (2001) में संज्ञानात्मक स्तरों का आरोही क्रम है: याद रखना, समझना, अनुप्रयोग, विश्लेषण, मूल्यांकन, और सर्वोच्च स्तर सृजन (Creating) है."
    },
    {
      "id": 102,
      "question": "Who introduced the 'Heuristic Method' of teaching where the learner acts as an independent discoverer?",
      "question_hi": "शिक्षण की 'ह्यूरिस्टिक (खोज) विधि' का प्रतिपादन किसने किया था जिसमें शिक्षार्थी एक स्वतंत्र खोजकर्ता की भूमिका निभाता है?",
      "options": {
        "A": "H. E. Armstrong",
        "B": "John Dewey",
        "C": "William Heard Kilpatrick",
        "D": "B. F. Skinner"
      },
      "options_hi": {
        "A": "एच. ई. आर्मस्ट्रांग",
        "B": "जॉन डेवी",
        "C": "विलियम हर्ड किलपैट्रिक",
        "D": "बी. एफ. स्किनर"
      },
      "correctAnswer": "A",
      "explanation": "Professor H. E. Armstrong developed the Heuristic method (from Greek 'heurisko' meaning 'I discover'), placing pupils in the attitude of an original investigator.",
      "explanation_hi": "प्रोफेसर एच. ई. आर्मस्ट्रांग ने ह्यूरिस्टिक विधि विकसित की, जिसमें विद्यार्थी स्वयं तथ्यों की खोज और समस्याओं का समाधान करते हैं."
    },
    {
      "id": 103,
      "question": "What is the correct pedagogical sequence of Herbart's formal five steps of lesson planning?",
      "question_hi": "हरबर्ट की पाठ योजना के पाँच औपचारिक पदों का सही शैक्षणिक क्रम क्या है?",
      "options": {
        "A": "Preparation, Presentation, Comparison/Association, Generalization, Application",
        "B": "Presentation, Preparation, Application, Generalization, Comparison",
        "C": "Generalization, Preparation, Presentation, Comparison, Application",
        "D": "Preparation, Application, Presentation, Comparison, Generalization"
      },
      "options_hi": {
        "A": "प्रस्तावना (तैयारी), प्रस्तुतीकरण, तुलना/संबंधन, सामान्यीकरण, प्रयोग (अनुप्रयोग)",
        "B": "प्रस्तुतीकरण, तैयारी, अनुप्रयोग, सामान्यीकरण, तुलना",
        "C": "सामान्यीकरण, तैयारी, प्रस्तुतीकरण, तुलना, अनुप्रयोग",
        "D": "तैयारी, अनुप्रयोग, प्रस्तुतीकरण, तुलना, सामान्यीकरण"
      },
      "correctAnswer": "A",
      "explanation": "Herbart's Five Steps are: 1. Preparation (Introduction), 2. Presentation, 3. Association/Comparison, 4. Generalization, and 5. Application.",
      "explanation_hi": "हरबर्ट की पंचपदीय प्रणाली का सही क्रम है: 1. प्रस्तावना (Preparation), 2. प्रस्तुतीकरण (Presentation), 3. तुलना (Association), 4. सामान्यीकरण (Generalization), 5. अनुप्रयोग (Application)."
    },
    {
      "id": 104,
      "question": "In the 5E Constructivist Instructional Model, which phase immediately precedes 'Explain'?",
      "question_hi": "5E रचनात्मक शिक्षण मॉडल में, 'Explain (व्याख्या)' चरण से ठीक पहले कौन सा चरण आता है?",
      "options": {
        "A": "Engage",
        "B": "Explore",
        "C": "Elaborate",
        "D": "Evaluate"
      },
      "options_hi": {
        "A": "Engage (संलग्न करना)",
        "B": "Explore (अन्वेषण करना)",
        "C": "Elaborate (विस्तार करना)",
        "D": "Evaluate (मूल्यांकन करना)"
      },
      "correctAnswer": "B",
      "explanation": "The sequence of the 5E Model is: Engage -> Explore -> Explain -> Elaborate -> Evaluate. Hence, Explore precedes Explain.",
      "explanation_hi": "5E मॉडल का क्रम है: Engage (संलग्न), Explore (खोज/अन्वेषण), Explain (व्याख्या), Elaborate (विस्तार), और Evaluate (मूल्यांकन)। अतः Explore व्याख्या से पहले आता है."
    },
    {
      "id": 105,
      "question": "According to Lev Vygotsky, the gap between what a child can do independently and what they can achieve with guidance is called:",
      "question_hi": "लेव वायगोत्स्की के अनुसार, बच्चा स्वतंत्र रूप से क्या कर सकता है और मार्गदर्शन के साथ क्या प्राप्त कर सकता है, इसके बीच के अंतर को क्या कहा जाता है?",
      "options": {
        "A": "Equilibration",
        "B": "Zone of Proximal Development (ZPD)",
        "C": "Schema Accommodation",
        "D": "Moral Equilibrium"
      },
      "options_hi": {
        "A": "साम्यीकरण (Equilibration)",
        "B": "समीपस्थ विकास का क्षेत्र (ZPD)",
        "C": "स्कीमा समायोजन",
        "D": "नैतिक संतुलन"
      },
      "correctAnswer": "B",
      "explanation": "Vygotsky defined the Zone of Proximal Development (ZPD) as the difference between actual developmental level and potential developmental level under adult guidance or peer collaboration.",
      "explanation_hi": "वायगोत्स्की ने बालक के वास्तविक विकास स्तर और किसी सक्षम व्यक्ति की सहायता से प्राप्त संभावित स्तर के अंतर को ZPD (Zone of Proximal Development) कहा है."
    },
    {
      "id": 106,
      "question": "What is the primary pedagogical objective of 'Diagnostic Evaluation' in the classroom?",
      "question_hi": "कक्षा में 'निदानात्मक मूल्यांकन (Diagnostic Evaluation)' का प्राथमिक शैक्षणिक उद्देश्य क्या है?",
      "options": {
        "A": "Assigning terminal letter grades and ranks",
        "B": "Identifying specific learning difficulties, gaps, and misconceptions of students",
        "C": "Promoting students to the next higher academic standard",
        "D": "Evaluating teacher salary increments"
      },
      "options_hi": {
        "A": "सत्र के अंत में ग्रेड और रैंक प्रदान करना",
        "B": "छात्रों की विशिष्ट अधिगम कठिनाइयों, अंतरालों और भ्रांतियों की पहचान करना",
        "C": "छात्रों को अगली उच्च कक्षा में पदोन्नत करना",
        "D": "शिक्षक वेतन वृद्धि का मूल्यांकन करना"
      },
      "correctAnswer": "B",
      "explanation": "Diagnostic evaluation pinpoints persistent learning deficiencies and underlying misconceptions so that tailored remedial teaching can be delivered.",
      "explanation_hi": "निदानात्मक मूल्यांकन का उद्देश्य छात्रों के सीखने में आने वाली विशिष्ट कमजोरियों, कठिनाइयों और भ्रांतियों के कारणों का पता लगाना है ताकि उपचारात्मक शिक्षण दिया जा सके."
    },
    {
      "id": 107,
      "question": "Which of Thorndike's Primary Laws of Learning states that learning connections are strengthened through repetition and practice?",
      "question_hi": "थार्नडाइक का कौन सा प्राथमिक अधिगम नियम बताता है कि अभ्यास और दोहराव से सीखने के संबंध सुदृढ़ होते हैं?",
      "options": {
        "A": "Law of Readiness",
        "B": "Law of Effect",
        "C": "Law of Exercise",
        "D": "Law of Associative Shifting"
      },
      "options_hi": {
        "A": "तत्परता का नियम (Law of Readiness)",
        "B": "प्रभाव का नियम (Law of Effect)",
        "C": "अभ्यास का नियम (Law of Exercise)",
        "D": "साहचर्य परिवर्तन का नियम"
      },
      "correctAnswer": "C",
      "explanation": "The Law of Exercise (comprising Law of Use and Law of Disuse) posits that repetition strengthens stimulus-response bonds, while lack of practice weakens them.",
      "explanation_hi": "थार्नडाइक का अभ्यास का नियम (Law of Exercise) बताता है कि किसी कार्य का बार-बार अभ्यास करने से उद्दीपक-अनुक्रिया संबंध मजबूत होता है."
    },
    {
      "id": 108,
      "question": "Under the National Education Policy (NEP) 2020, what is the new pedagogical and curricular structure replacing the 10+2 system?",
      "question_hi": "राष्ट्रीय शिक्षा नीति (NEP) 2020 के तहत, पुरानी 10+2 प्रणाली के स्थान पर कौन सा नया शैक्षणिक और पाठ्यचर्या ढांचा लागू किया गया है?",
      "options": {
        "A": "5 + 3 + 3 + 4",
        "B": "5 + 3 + 4 + 2",
        "C": "3 + 5 + 3 + 4",
        "D": "4 + 4 + 3 + 3"
      },
      "options_hi": {
        "A": "5 + 3 + 3 + 4",
        "B": "5 + 3 + 4 + 2",
        "C": "3 + 5 + 3 + 4",
        "D": "4 + 4 + 3 + 3"
      },
      "correctAnswer": "A",
      "explanation": "NEP 2020 restructures school education into 5 (Foundational) + 3 (Preparatory) + 3 (Middle) + 4 (Secondary) stages covering ages 3 to 18.",
      "explanation_hi": "NEP 2020 में 10+2 के स्थान पर 5+3+3+4 ढांचा लाया गया है: 5 वर्ष बुनियादी (फाउंडेशनल), 3 वर्ष तैयारी (प्रिपरेटरी), 3 वर्ष माध्यमिक (मिडिल), और 4 वर्ष उच्च माध्यमिक (सेकेंडरी)."
    },
    {
      "id": 109,
      "question": "What is the standard duration of a single microteaching cycle according to Indian standard norms (developed by NCERT)?",
      "question_hi": "NCERT द्वारा विकसित भारतीय मानक मानदंडों के अनुसार सूक्ष्म शिक्षण (Microteaching) के एक पूर्ण चक्र की मानक अवधि क्या है?",
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
      "explanation": "NCERT microteaching cycle is 36 minutes: Teach (6m) -> Feedback (6m) -> Re-plan (12m) -> Re-teach (6m) -> Re-feedback (6m).",
      "explanation_hi": "NCERT के अनुसार सूक्ष्म शिक्षण चक्र कुल 36 मिनट का होता है: शिक्षण (6 मि.) -> प्रतिपुष्टि (6 मि.) -> पुनः योजना (12 मि.) -> पुनः शिक्षण (6 मि.) -> पुनः प्रतिपुष्टि (6 मि.)."
    },
    {
      "id": 110,
      "question": "Which of the following is considered an intrinsic motivator for a secondary school learner?",
      "question_hi": "माध्यमिक विद्यालय के शिक्षार्थी के लिए निम्नलिखित में से किसे आंतरिक अभिप्रेरक (Intrinsic Motivator) माना जाता है?",
      "options": {
        "A": "Cash reward from the school",
        "B": "Personal curiosity and joy of mastery",
        "C": "Fear of public reprimand by parents",
        "D": "Trophies and merit medals"
      },
      "options_hi": {
        "A": "विद्यालय से नकद पुरस्कार",
        "B": "व्यक्तिगत जिज्ञासा और विषय पर अधिकार पाने का आंतरिक आनंद",
        "C": "माता-पिता की डांट का डर",
        "D": "ट्रॉफी और पदक"
      },
      "correctAnswer": "B",
      "explanation": "Intrinsic motivation arises from within the individual (curiosity, enjoyment, personal growth), whereas awards and fear of punishment are extrinsic.",
      "explanation_hi": "आंतरिक प्रेरणा स्वयं के भीतर से उत्पन्न होती है (जैसे जिज्ञासा, ज्ञान प्राप्ति की इच्छा), जबकि पुरस्कार या दंड बाहरी (Extrinsic) प्रेरणा के उदाहरण हैं."
    },
    {
      "id": 111,
      "question": "At which of Piaget's cognitive stages can a student systematically formulate hypotheses and perform abstract deductive reasoning?",
      "question_hi": "पियाजे के किस संज्ञानात्मक चरण में एक छात्र व्यवस्थित रूप से परिकल्पना तैयार कर सकता है और अमूर्त निगमनात्मक तर्क कर सकता है?",
      "options": {
        "A": "Sensorimotor Stage",
        "B": "Pre-operational Stage",
        "C": "Concrete Operational Stage",
        "D": "Formal Operational Stage"
      },
      "options_hi": {
        "A": "संवेदी-गामक अवस्था (Sensorimotor)",
        "B": "पूर्व-संक्रियात्मक अवस्था (Pre-operational)",
        "C": "मूर्त संक्रियात्मक अवस्था (Concrete Operational)",
        "D": "औपचारिक संक्रियात्मक अवस्था (Formal Operational Stage)"
      },
      "correctAnswer": "D",
      "explanation": "In Piaget's Formal Operational Stage (typically 11+ years), adolescents develop hypothetico-deductive reasoning and abstract thought capability.",
      "explanation_hi": "औपचारिक (अमूर्त) संक्रियात्मक अवस्था (11 वर्ष से ऊपर) में किशोर परिकल्पनात्मक और अमूर्त तार्किक चिंतन करने में पूरी तरह सक्षम हो जाते हैं."
    },
    {
      "id": 112,
      "question": "What is the primary role of a teacher in a modern constructivist classroom?",
      "question_hi": "आधुनिक रचनावादी (Constructivist) कक्षा में शिक्षक की प्राथमिक भूमिका क्या होती है?",
      "options": {
        "A": "An authoritative source of all factual knowledge",
        "B": "A facilitator who scaffolds and creates an inquiry-rich environment",
        "C": "A strict disciplinarian focused on silent rote memorization",
        "D": "A passive bystander who observes without intervening"
      },
      "options_hi": {
        "A": "सभी तथ्यात्मक ज्ञान का एकमात्र आधिकारिक स्रोत",
        "B": "एक सुगमकर्ता (Facilitator) जो सीखने के अवसर प्रदान करता है और सहयोग करता है",
        "C": "एक कठोर अनुशासनकर्ता जो रटने पर ध्यान केंद्रित करता है",
        "D": "एक मूक दर्शक जो कभी हस्तक्षेप नहीं करता"
      },
      "correctAnswer": "B",
      "explanation": "In constructivism (NCF 2005 & NEP 2020), the teacher acts as a facilitator, scaffolding students as they actively build their own conceptual understanding.",
      "explanation_hi": "रचनावाद के अनुसार शिक्षक ज्ञान का दाता नहीं बल्कि एक सुगमकर्ता (Facilitator) है जो छात्रों को स्वयं ज्ञान का निर्माण करने के लिए अनुकूल वातावरण प्रदान करता है."
    },
    {
      "id": 113,
      "question": "Which of the following is an effective technique to foster higher-order divergent thinking in students?",
      "question_hi": "छात्रों में उच्च-स्तरीय अपसारी चिंतन (Divergent Thinking) को बढ़ावा देने के लिए कौन सी तकनीक सबसे प्रभावी है?",
      "options": {
        "A": "Asking open-ended brainstorming questions with multiple plausible answers",
        "B": "Restricting tests to single-word true/false questions",
        "C": "Encouraging verbatim memorization of textbook paragraphs",
        "D": "Penalizing students whenever they offer novel viewpoints"
      },
      "options_hi": {
        "A": "विविध संभावित उत्तरों वाले खुले अंत वाले (Open-ended) विचारोत्तेजक प्रश्न पूछना",
        "B": "परीक्षणों को केवल एकल-शब्द सत्य/असत्य प्रश्नों तक सीमित रखना",
        "C": "पाठ्यपुस्तक के पैराग्राफों को अक्षरशः रटने के लिए प्रोत्साहित करना",
        "D": "छात्रों द्वारा नए दृष्टिकोण प्रस्तुत करने पर उन्हें दंडित करना"
      },
      "correctAnswer": "A",
      "explanation": "Divergent thinking is cultivated through open-ended problems, creative brainstorming, and questions that allow multiple diverse solutions.",
      "explanation_hi": "अपसारी (सृजनात्मक) चिंतन को खुले अंत वाले प्रश्नों (Open-ended questions) और विचार-मंथन द्वारा बढ़ावा दिया जाता है, जहाँ एक से अधिक उत्तर संभव होते हैं."
    },
    {
      "id": 114,
      "question": "What is the primary distinction between 'Assessment FOR Learning' and 'Assessment OF Learning'?",
      "question_hi": "'अधिगम के लिए आकलन (Assessment FOR Learning)' और 'अधिगम का आकलन (Assessment OF Learning)' में प्राथमिक अंतर क्या है?",
      "options": {
        "A": "Assessment FOR learning is formative and ongoing to improve instruction; Assessment OF learning is summative to certify achievement",
        "B": "Assessment FOR learning is conducted only at year-end; Assessment OF learning happens daily",
        "C": "Both are identical administrative protocols",
        "D": "Assessment OF learning is ungraded and informal"
      },
      "options_hi": {
        "A": "'अधिगम के लिए आकलन' निर्देशात्मक सुधार हेतु निरंतर/रचनात्मक होता है; 'अधिगम का आकलन' उपलब्धि प्रमाणित करने हेतु योगात्मक होता है",
        "B": "'अधिगम के लिए आकलन' केवल वर्ष के अंत में होता है",
        "C": "दोनों पूरी तरह से समान प्रशासनिक प्रक्रियाएं हैं",
        "D": "'अधिगम का आकलन' अनौपचारिक और ग्रेड-रहित होता है"
      },
      "correctAnswer": "A",
      "explanation": "Assessment FOR learning is continuous formative feedback to adapt teaching; Assessment OF learning is summative evaluation measuring final achievement.",
      "explanation_hi": "'अधिगम के लिए आकलन' शिक्षण प्रक्रिया के दौरान सुधार के लिए किया जाने वाला रचनात्मक आकलन है, जबकि 'अधिगम का आकलन' अंत में परिणाम जांचने के लिए योगात्मक होता है."
    },
    {
      "id": 115,
      "question": "Under the Right to Education (RTE) Act 2009, what is the mandated Pupil-Teacher Ratio (PTR) for primary schools up to 200 students?",
      "question_hi": "शिक्षा का अधिकार (RTE) अधिनियम 2009 के तहत, 200 छात्रों तक के प्राथमिक विद्यालयों के लिए अनिवार्य छात्र-शिक्षक अनुपात (PTR) क्या है?",
      "options": {
        "A": "25:1",
        "B": "30:1",
        "C": "35:1",
        "D": "40:1"
      },
      "options_hi": {
        "A": "25:1",
        "B": "30:1",
        "C": "35:1",
        "D": "40:1"
      },
      "correctAnswer": "B",
      "explanation": "RTE Act 2009 mandates a Pupil-Teacher Ratio of 30:1 for primary schools (Classes 1-5) and 35:1 for upper primary schools (Classes 6-8).",
      "explanation_hi": "RTE अधिनियम 2009 के अनुसार प्राथमिक स्तर (कक्षा 1-5) पर छात्र-शिक्षक अनुपात 30:1 और उच्च प्राथमिक स्तर पर 35:1 निर्धारित है."
    },
    {
      "id": 116,
      "question": "What is 'Scaffolding' in the context of educational psychology?",
      "question_hi": "शैक्षिक मनोविज्ञान के संदर्भ में 'मचान / पाड़ (Scaffolding)' क्या है?",
      "options": {
        "A": "Physical construction of laboratory equipment",
        "B": "Temporary supportive framework provided by an adult or peer until the learner achieves independence",
        "C": "Strict disciplinary punishment for disruptive students",
        "D": "Permanent dependency on teacher solutions"
      },
      "options_hi": {
        "A": "प्रयोगशाला उपकरणों का भौतिक निर्माण",
        "B": "वयस्क या सहपाठी द्वारा दी जाने वाली अस्थायी सहायता जब तक कि शिक्षार्थी स्वायत्तता प्राप्त न कर ले",
        "C": "अनुशासनहीन छात्रों के लिए कठोर दंड",
        "D": "शिक्षक के समाधानों पर स्थायी निर्भरता"
      },
      "correctAnswer": "B",
      "explanation": "Scaffolding (Jerome Bruner / Vygotsky) refers to temporary tailored support given during the learning process, gradually withdrawn as competence grows.",
      "explanation_hi": "स्कैफोल्डिंग (मचान) वह अस्थायी सहयोग है जो शिक्षक या अधिक जानकार व्यक्ति द्वारा छात्र को सीखने के दौरान तब तक दिया जाता है जब तक वह स्वयं सक्षम न हो जाए."
    },
    {
      "id": 117,
      "question": "Which of the following describes an 'Inclusive Classroom'?",
      "question_hi": "निम्नलिखित में से कौन सा एक 'समावेशी कक्षा (Inclusive Classroom)' का सबसे सटीक वर्णन करता है?",
      "options": {
        "A": "Separating special-needs children into a segregated isolated school",
        "B": "Educating all children together in the same general classroom, regardless of differences in abilities or background",
        "C": "Admitting only high-IQ gifted students",
        "D": "Teaching boys and girls in completely different shifts"
      },
      "options_hi": {
        "A": "विशेष आवश्यकता वाले बच्चों को एक अलग स्कूल में भेजना",
        "B": "सभी बच्चों को उनकी क्षमताओं या पृष्ठभूमि के भेदभाव के बिना एक ही सामान्य कक्षा में एक साथ शिक्षित करना",
        "C": "केवल उच्च IQ वाले प्रतिभाशाली छात्रों को प्रवेश देना",
        "D": "लड़कों और लड़कियों को अलग-अलग शिफ्ट में पढ़ाना"
      },
      "correctAnswer": "B",
      "explanation": "Inclusive education ensures that all students, regardless of physical, intellectual, social, or emotional challenges, learn together in regular classrooms.",
      "explanation_hi": "समावेशी शिक्षा का तात्पर्य सभी बच्चों (दिव्यांग, सामान्य, वंचित वर्ग) को बिना किसी भेदभाव के नियमित विद्यालय की एक ही कक्षा में समान अवसर प्रदान करना है."
    },
    {
      "id": 118,
      "question": "What is the primary purpose of a 'Rubric' in educational assessment?",
      "question_hi": "शैक्षिक मूल्यांकन में 'रूब्रिक (Rubric)' का प्राथमिक उद्देश्य क्या है?",
      "options": {
        "A": "A decorative school certificate",
        "B": "A scoring guide detailing specific performance criteria and levels of mastery",
        "C": "A disciplinary record book",
        "D": "A timetable for school bell rings"
      },
      "options_hi": {
        "A": "एक सजावटी स्कूल प्रमाण पत्र",
        "B": "विशिष्ट प्रदर्शन मानदंडों और प्रवीणता स्तरों का विवरण देने वाला स्कोरिंग गाइड",
        "C": "एक अनुशासनात्मक रिकॉर्ड बुक",
        "D": "स्कूल की घंटी बजाने की समय सारिणी"
      },
      "correctAnswer": "B",
      "explanation": "A rubric is an explicit scoring tool that outlines performance expectations across varying achievement levels, promoting fair and objective grading.",
      "explanation_hi": "रूब्रिक एक मानक स्कोरिंग गाइड है जो असाइनमेंट या प्रोजेक्ट के मूल्यांकन हेतु स्पष्ट मानदंड और प्रदर्शन के स्तर निर्धारित करता है."
    },
    {
      "id": 119,
      "question": "Which domain in Bloom's taxonomy addresses attitudes, values, emotional states, and appreciation?",
      "question_hi": "ब्लूम के वर्गीकरण में कौन सा डोमेन दृष्टिकोण, मूल्यों, भावनात्मक अवस्थाओं और प्रशंसा से संबंधित है?",
      "options": {
        "A": "Cognitive Domain",
        "B": "Affective Domain",
        "C": "Psychomotor Domain",
        "D": "Somatic Domain"
      },
      "options_hi": {
        "A": "संज्ञानात्मक डोमेन (Cognitive)",
        "B": "भावात्मक डोमेन (Affective Domain)",
        "C": "क्रियात्मक/मनोगात्मक डोमेन (Psychomotor)",
        "D": "दैहिक डोमेन"
      },
      "correctAnswer": "B",
      "explanation": "The Affective Domain (Krathwohl, Bloom, Masia) deals with emotions, feelings, values, appreciation, motivations, and attitudes.",
      "explanation_hi": "भावात्मक डोमेन (Affective Domain) छात्रों की भावनाओं, दृष्टिकोणों, मूल्यों, प्रशंसा और अभिप्रेरणा से संबंधित होता है."
    },
    {
      "id": 120,
      "question": "What is 'Metacognition'?",
      "question_hi": "'मेटाकॉग्निशन (परासंज्ञान / अधिसंज्ञान)' क्या है?",
      "options": {
        "A": "Mechanical memorization of dictionary definitions",
        "B": "Awareness and active regulation of one's own thinking and learning processes",
        "C": "Inability to solve mathematical problems",
        "D": "Physical endurance in athletics"
      },
      "options_hi": {
        "A": "शब्दकोश की परिभाषाओं को यांत्रिक रूप से याद करना",
        "B": "अपनी स्वयं की सोच और सीखने की प्रक्रियाओं के बारे में जागरूकता और नियंत्रण (Thinking about thinking)",
        "C": "गणितीय समस्याओं को हल करने में असमर्थता",
        "D": "खेलकूद में शारीरिक सहनशक्ति"
      },
      "correctAnswer": "B",
      "explanation": "Metacognition (John Flavell) is 'thinking about thinking' — the ability to plan, monitor, evaluate, and regulate one's own cognitive strategies.",
      "explanation_hi": "मेटाकॉग्निशन (अधिसंज्ञान) का अर्थ है 'अपनी सोच के बारे में सोचना' — अपनी सीखने की रणनीतियों की योजना बनाना, निगरानी करना और उनका मूल्यांकन करना."
    },
    {
      "id": 121,
      "question": "Who developed the 'Project Method' based on John Dewey's pragmatic philosophy?",
      "question_hi": "जॉन डेवी के प्रयोजनवादी दर्शन के आधार पर शिक्षण की 'प्रोजेक्ट विधि (Project Method)' का विकास किसने किया?",
      "options": {
        "A": "William Heard Kilpatrick",
        "B": "Froebel",
        "C": "Maria Montessori",
        "D": "Jean Piaget"
      },
      "options_hi": {
        "A": "विलियम हर्ड किलपैट्रिक",
        "B": "फ्रोबेल",
        "C": "मारिया मोंटेसरी",
        "D": "जीन पियाजे"
      },
      "correctAnswer": "A",
      "explanation": "William Heard Kilpatrick formulated the Project Method as a purposeful act carried to completion in a natural, real-life setting.",
      "explanation_hi": "विलियम हर्ड किलपैट्रिक ने प्रोजेक्ट विधि का विकास किया, जिसमें विद्यार्थी वास्तविक जीवन की समस्याओं को योजनाबद्ध तरीके से हल करते हैं."
    },
    {
      "id": 122,
      "question": "In classroom management, what does Kounin's concept of 'Withitness' mean?",
      "question_hi": "कक्षा प्रबंधन में, जैकब कॉनिन की 'विथइटनेस (Withitness)' की अवधारणा का क्या अर्थ है?",
      "options": {
        "A": "Teacher's keen awareness of everything happening in the classroom at all times",
        "B": "Using high-tech computer tablets in every period",
        "C": "Ignoring misbehavior until the end of the term",
        "D": "Strict physical punishment"
      },
      "options_hi": {
        "A": "कक्षा में हर समय जो कुछ भी हो रहा है, उसके प्रति शिक्षक की सजगता और निरंतर जागरूकता",
        "B": "प्रत्येक पीरियड में हाई-टेक कंप्यूटर टैबलेट का उपयोग करना",
        "C": "सत्र के अंत तक दुर्व्यवहार की अनदेखी करना",
        "D": "कठोर शारीरिक दंड"
      },
      "correctAnswer": "A",
      "explanation": "Kounin defined 'withitness' as a teacher's constant awareness of student behaviors across all areas of the classroom, nipping disruptions early.",
      "explanation_hi": "जैकब कॉनिन के अनुसार 'विथइटनेस' शिक्षक की वह क्षमता है जिससे वह कक्षा के प्रत्येक कोने में चल रही गतिविधियों से हर पल भली-भांति अवगत रहता है."
    },
    {
      "id": 123,
      "question": "What is the primary benefit of peer tutoring in secondary education?",
      "question_hi": "माध्यमिक शिक्षा में सहपाठी शिक्षण (Peer Tutoring) का प्राथमिक लाभ क्या है?",
      "options": {
        "A": "Completely relieving the teacher from coming to school",
        "B": "Simultaneous cognitive reinforcement for both the tutor and tutee",
        "C": "Allowing students to assign final semester grades",
        "D": "Promoting toxic competition"
      },
      "options_hi": {
        "A": "शिक्षक को स्कूल आने से पूरी तरह मुक्त कर देना",
        "B": "पढ़ाने वाले (ट्यूटर) और सीखने वाले दोनों छात्रों के ज्ञान और समझ का सुदृढ़ीकरण",
        "C": "छात्रों को अंतिम सेमेस्टर ग्रेड देने की अनुमति देना",
        "D": "हानिकारक प्रतिस्पर्धा को बढ़ावा देना"
      },
      "correctAnswer": "B",
      "explanation": "Peer tutoring reinforces knowledge for the student teaching (tutor) while offering an approachable, relatable explanation for the learner (tutee).",
      "explanation_hi": "सहपाठी शिक्षण में सिखाने वाले छात्र की अपनी अवधारणाएं मजबूत होती हैं और सीखने वाले छात्र को अपनी ही भाषा में समझने का अवसर मिलता है."
    },
    {
      "id": 124,
      "question": "According to Kohlberg's Theory of Moral Development, in which stage does an individual judge actions based on adherence to social rules and laws to maintain social order?",
      "question_hi": "कोहलबर्ग के नैतिक विकास के सिद्धांत के अनुसार, किस स्तर पर एक व्यक्ति सामाजिक व्यवस्था बनाए रखने के लिए नियमों और कानूनों के पालन के आधार पर कार्यों का मूल्यांकन करता है?",
      "options": {
        "A": "Pre-conventional Level",
        "B": "Conventional Level (Stage 4: Law and Order)",
        "C": "Post-conventional Level",
        "D": "Sensorimotor Level"
      },
      "options_hi": {
        "A": "पूर्व-परंपरागत स्तर",
        "B": "परंपरागत स्तर (चरण 4: कानून और व्यवस्था अभिविन्यास)",
        "C": "उत्तर-परंपरागत स्तर",
        "D": "संवेदी स्तर"
      },
      "correctAnswer": "B",
      "explanation": "At the Conventional Level (Stage 4), morality is defined by obeying societal laws, performing one's duty, and preserving social stability.",
      "explanation_hi": "कोहलबर्ग के परंपरागत स्तर के चौथे चरण में व्यक्ति सामाजिक व्यवस्था, कानून और नियमों के पालन को अपना नैतिक कर्तव्य मानता है."
    },
    {
      "id": 125,
      "question": "What is the core recommendation of NEP 2020 regarding the medium of instruction up to at least Grade 5?",
      "question_hi": "कम से कम कक्षा 5 तक शिक्षा के माध्यम के संबंध में NEP 2020 की प्रमुख सिफारिश क्या है?",
      "options": {
        "A": "Strictly Foreign Language instruction only",
        "B": "Home language, mother tongue, or local regional language",
        "C": "English medium only for all subjects",
        "D": "Sanskrit as the exclusive compulsory medium"
      },
      "options_hi": {
        "A": "केवल विदेशी भाषा में शिक्षण",
        "B": "गृह भाषा, मातृभाषा या स्थानीय क्षेत्रीय भाषा में शिक्षण",
        "C": "सभी विषयों के लिए अनिवार्य अंग्रेजी माध्यम",
        "D": "संस्कृत को एकमात्र अनिवार्य माध्यम बनाना"
      },
      "correctAnswer": "B",
      "explanation": "NEP 2020 strongly recommends mother tongue/home language/regional language as medium of instruction up to Grade 5 (preferably Grade 8).",
      "explanation_hi": "NEP 2020 में स्पष्ट रूप से सिफारिश की गई है कि कम से कम कक्षा 5 तक शिक्षा का माध्यम बच्चे की मातृभाषा, स्थानीय भाषा या क्षेत्रीय भाषा होना चाहिए."
    },
    {
      "id": 126,
      "question": "Which of the following assessments is typically administered at the very beginning of an academic year or course to determine student entry-level readiness?",
      "question_hi": "छात्रों की प्रवेश-स्तरीय तैयारी और पूर्व ज्ञान को निर्धारित करने के लिए आमतौर पर शैक्षणिक सत्र की शुरुआत में कौन सा मूल्यांकन किया जाता है?",
      "options": {
        "A": "Placement (Readiness) Assessment",
        "B": "Summative Terminal Examination",
        "C": "Competitive Exit Exam",
        "D": "Standardized Board Certification"
      },
      "options_hi": {
        "A": "स्थानन / प्रवेश (तैयारी) मूल्यांकन (Placement Assessment)",
        "B": "योगात्मक सत्रांत परीक्षा",
        "C": "प्रतियोगी निकास परीक्षा",
        "D": "बोर्ड प्रमाणन परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Placement evaluation checks prior knowledge, prerequisite foundational skills, and student readiness prior to starting instruction.",
      "explanation_hi": "स्थानन (प्रवेश) मूल्यांकन का उपयोग पाठ्यक्रम शुरू करने से पहले छात्रों के पूर्व ज्ञान और तैयारी के स्तर का पता लगाने के लिए किया जाता है."
    },
    {
      "id": 127,
      "question": "In educational psychology, what does 'Transfer of Learning' mean?",
      "question_hi": "शैक्षिक मनोविज्ञान में 'अधिगम का स्थानांतरण (Transfer of Learning)' क्या है?",
      "options": {
        "A": "Transferring a student from one school to another",
        "B": "The application of knowledge or skills learned in one situation to a new situation",
        "C": "Photocopying study materials",
        "D": "Translating questions from English to Hindi"
      },
      "options_hi": {
        "A": "छात्र का एक स्कूल से दूसरे स्कूल में स्थानांतरण",
        "B": "एक परिस्थिति में सीखे गए ज्ञान या कौशल का किसी नई परिस्थिति में अनुप्रयोग",
        "C": "अध्ययन सामग्री की फोटोकॉपी कराना",
        "D": "प्रश्नों का अंग्रेजी से हिंदी में अनुवाद करना"
      },
      "correctAnswer": "B",
      "explanation": "Transfer of learning happens when past learning influences the performance or acquisition of new knowledge in a different context (positive, negative, or zero).",
      "explanation_hi": "जब एक परिस्थिति में अर्जित ज्ञान, कौशल या अनुभव किसी दूसरी नई परिस्थिति में कार्य निष्पादन को प्रभावित करता है, तो इसे अधिगम का स्थानांतरण कहते हैं."
    },
    {
      "id": 128,
      "question": "Which of the following is an example of 'Formative Assessment'?",
      "question_hi": "निम्नलिखित में से कौन सा 'रचनात्मक मूल्यांकन (Formative Assessment)' का एक उदाहरण है?",
      "options": {
        "A": "Classroom exit ticket and quick concept checks during the lesson",
        "B": "Annual board examination at the end of Class 12",
        "C": "National level university entrance test",
        "D": "Final graduation degree examination"
      },
      "options_hi": {
        "A": "पाठ के दौरान त्वरित कॉन्सेप्ट चेक और एग्जिट टिकट",
        "B": "कक्षा 12 के अंत में वार्षिक बोर्ड परीक्षा",
        "C": "राष्ट्रीय स्तर की विश्वविद्यालय प्रवेश परीक्षा",
        "D": "अंतिम स्नातक डिग्री परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Formative assessments occur during instruction (e.g. exit tickets, polls, quizzes) to provide immediate feedback for teaching adjustments.",
      "explanation_hi": "पाठ पढ़ाने के दौरान लिए जाने वाले छोटे क्विज, एग्जिट टिकट और कॉन्सेप्ट प्रश्न रचनात्मक मूल्यांकन के उदाहरण हैं जो तुरंत फीडबैक देते हैं."
    },
    {
      "id": 129,
      "question": "What is the primary role of a 'Remedial Teaching' program?",
      "question_hi": "'उपचारात्मक शिक्षण (Remedial Teaching)' कार्यक्रम की प्राथमिक भूमिका क्या है?",
      "options": {
        "A": "Accelerating curriculum for already advanced students",
        "B": "Providing targeted individualized support to bridge learning gaps for struggling students",
        "C": "Organizing sports competitions",
        "D": "Conducting teacher recruitment interviews"
      },
      "options_hi": {
        "A": "पहले से मेधावी छात्रों के लिए पाठ्यक्रम को तेज करना",
        "B": "सीखने में पिछड़ रहे छात्रों के अधिगम अंतरालों को पाटने के लिए लक्षित व्यक्तिगत सहायता प्रदान करना",
        "C": "खेल प्रतियोगिताओं का आयोजन करना",
        "D": "शिक्षक भर्ती साक्षात्कार आयोजित करना"
      },
      "correctAnswer": "B",
      "explanation": "Remedial teaching offers targeted instruction designed to correct deficiencies identified by diagnostic assessments.",
      "explanation_hi": "उपचारात्मक शिक्षण का उद्देश्य निदानात्मक परीक्षण द्वारा पहचानी गई विशिष्ट कमजोरियों और अधिगम अंतरालों को दूर करने के लिए विशेष सहायता देना है."
    },
    {
      "id": 130,
      "question": "Under NEP 2020, what is PARAKH?",
      "question_hi": "NEP 2020 के तहत 'PARAKH' क्या है?",
      "options": {
        "A": "A new satellite launch vehicle for schools",
        "B": "A National Assessment Centre set up to establish standardized student assessment norms and criteria",
        "C": "A digital payment gateway for mid-day meals",
        "D": "A sports curriculum framework"
      },
      "options_hi": {
        "A": "स्कूलों के लिए एक नया उपग्रह प्रक्षेपण यान",
        "B": "मानकीकृत छात्र मूल्यांकन मानदंड और दिशा-निर्देश स्थापित करने के लिए स्थापित राष्ट्रीय मूल्यांकन केंद्र",
        "C": "मिड-डे मील के लिए एक डिजिटल भुगतान पोर्टल",
        "D": "एक खेल पाठ्यचर्या रूपरेखा"
      },
      "correctAnswer": "B",
      "explanation": "PARAKH (Performance Assessment, Review, and Analysis of Knowledge for Holistic Development) is the National Assessment Centre established under NEP 2020.",
      "explanation_hi": "PARAKH (समग्र विकास के लिए ज्ञान का प्रदर्शन मूल्यांकन, समीक्षा और विश्लेषण) NEP 2020 के तहत स्थापित राष्ट्रीय मूल्यांकन केंद्र है जो बोर्डों के बीच समानता लाता है."
    },
    {
      "id": 131,
      "question": "Who was the legendary leader from Jagdishpur, Bihar who spearheaded the Revolt of 1857 in Bihar?",
      "question_hi": "जगदीशपुर (बिहार) के वह महान नेता कौन थे जिन्होंने बिहार में 1857 के प्रथम स्वतंत्रता संग्राम का नेतृत्व किया था?",
      "options": {
        "A": "Veer Kunwar Singh",
        "B": "Pir Ali Khan",
        "C": "Dr. Rajendra Prasad",
        "D": "Babu Amar Singh"
      },
      "options_hi": {
        "A": "वीर कुंवर सिंह",
        "B": "पीर अली खान",
        "C": "डॉ. राजेंद्र प्रसाद",
        "D": "बाबू अमर सिंह"
      },
      "correctAnswer": "A",
      "explanation": "Veer Kunwar Singh of Jagdishpur (Bhojpur district) was the valiant leader who led the 1857 uprising in Bihar even at the age of nearly 80.",
      "explanation_hi": "जगदीशपुर (भोजपुर) के बाबू वीर कुंवर सिंह ने लगभग 80 वर्ष की उम्र में 1857 के स्वतंत्रता संग्राम में अंग्रेजों के विरुद्ध बिहार का ऐतिहासिक नेतृत्व किया था."
    },
    {
      "id": 132,
      "question": "In which district of Bihar is the only National Park of the state, 'Valmiki National Park', situated?",
      "question_hi": "बिहार का एकमात्र राष्ट्रीय उद्यान, 'वाल्मीकि राष्ट्रीय उद्यान', बिहार के किस जिले में स्थित है?",
      "options": {
        "A": "Gaya",
        "B": "West Champaran",
        "C": "Rohtas",
        "D": "Kaimur"
      },
      "options_hi": {
        "A": "गया",
        "B": "पश्चिम चंपारण (West Champaran)",
        "C": "रोहतास",
        "D": "कैमूर"
      },
      "correctAnswer": "B",
      "explanation": "Valmiki National Park and Tiger Reserve is located in the West Champaran district of Bihar along the India-Nepal border.",
      "explanation_hi": "वाल्मीकि राष्ट्रीय उद्यान और टाइगर रिजर्व बिहार के पश्चिम चंपारण जिले में भारत-नेपाल सीमा पर स्थित बिहार का एकमात्र राष्ट्रीय उद्यान है."
    },
    {
      "id": 133,
      "question": "Which ancient university in Bihar was founded during the Gupta Empire by Emperor Kumaragupta I?",
      "question_hi": "गुप्त साम्राज्य के सम्राट कुमारगुप्त प्रथम द्वारा बिहार के किस प्राचीन विश्वविद्यालय की स्थापना की गई थी?",
      "options": {
        "A": "Vikramashila University",
        "B": "Nalanda University",
        "C": "Odantapuri University",
        "D": "Takshashila University"
      },
      "options_hi": {
        "A": "विक्रमशिला विश्वविद्यालय",
        "B": "नालंदा विश्वविद्यालय (Nalanda University)",
        "C": "ओदंतपुरी विश्वविद्यालय",
        "D": "तक्षशिला विश्वविद्यालय"
      },
      "correctAnswer": "B",
      "explanation": "Nalanda Mahavihara was established in the 5th century CE by Gupta Emperor Kumaragupta I (Shakraditya). (Vikramashila was founded later by Dharmapala).",
      "explanation_hi": "नालंदा विश्वविद्यालय की स्थापना 5वीं शताब्दी में गुप्त शासक कुमारगुप्त प्रथम ने की थी। यह बौद्ध अध्ययन का विश्व प्रसिद्ध केंद्र था."
    },
    {
      "id": 134,
      "question": "Where is 'Kanwar Lake' (Kabartal), Bihar's first declared Ramsar Wetland site, located?",
      "question_hi": "बिहार का पहला घोषित रामसर आर्द्रभूमि स्थल 'कांवर झील' (काबरताल) किस जिले में स्थित है?",
      "options": {
        "A": "Begusarai",
        "B": "Darbhanga",
        "C": "Bhagalpur",
        "D": "Saharsa"
      },
      "options_hi": {
        "A": "बेगूसराय (Begusarai)",
        "B": "दरभंगा",
        "C": "भागलपुर",
        "D": "सहरसा"
      },
      "correctAnswer": "A",
      "explanation": "Kanwar Lake (Kabartal) in Begusarai district is Asia's largest freshwater oxbow lake and was designated as Bihar's first Ramsar site in 2020.",
      "explanation_hi": "बेगूसराय जिले में स्थित कांवर झील (काबरताल) एशिया की सबसे बड़ी मीठे पानी की गोखुर (Oxbow) झील है और 2020 में बिहार का पहला रामसर स्थल बनी."
    },
    {
      "id": 135,
      "question": "Which historic movement led by Mahatma Gandhi in 1917 took place in Bihar against the oppressive Tinkathia system?",
      "question_hi": "1917 में महात्मा गांधी के नेतृत्व में बिहार में दमनकारी 'तीनकठिया प्रणाली' के विरोध में कौन सा ऐतिहासिक आंदोलन हुआ था?",
      "options": {
        "A": "Kheda Satyagraha",
        "B": "Champaran Satyagraha",
        "C": "Bardoli Satyagraha",
        "D": "Non-Cooperation Movement"
      },
      "options_hi": {
        "A": "खेड़ा सत्याग्रह",
        "B": "चंपारण सत्याग्रह (Champaran Satyagraha)",
        "C": "बारडोली सत्याग्रह",
        "D": "असहयोग आंदोलन"
      },
      "correctAnswer": "B",
      "explanation": "Mahatma Gandhi launched his first Satyagraha in India at Champaran, Bihar in 1917 upon the invitation of Rajkumar Shukla to fight forced indigo cultivation under the Tinkathia system.",
      "explanation_hi": "गांधीजी ने भारत में अपना पहला सत्याग्रह 1917 में बिहार के चंपारण में राजकुमार शुक्ल के बुलावे पर तीनकठिया (नील) खेती के विरोध में शुरू किया था."
    },
    {
      "id": 136,
      "question": "According to Lindeman's Ten Percent Law of ecological energy transfer, what fraction of energy is transferred to the next higher trophic level?",
      "question_hi": "पारिस्थितिक ऊर्जा स्थानांतरण के लिंडमैन के 10% नियम के अनुसार, अगले उच्च पोषण स्तर (Trophic Level) में ऊर्जा का कितना प्रतिशत स्थानांतरित होता है?",
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
      "explanation": "Lindeman's efficiency law states that approximately 10% of chemical energy from food is transformed into biomass at the next trophic level; 90% is lost as metabolic heat.",
      "explanation_hi": "रेमंड लिंडमैन के नियम के अनुसार प्रत्येक स्तर से अगले पोषण स्तर तक केवल लगभग 10% ऊर्जा ही स्थानांतरित होती है, जबकि 90% ऊर्जा श्वसन व ऊष्मा में नष्ट हो जाती है."
    },
    {
      "id": 137,
      "question": "In which atmospheric layer is the protective ozone layer (O₃) primarily concentrated?",
      "question_hi": "सुरक्षात्मक ओजोन परत (O₃) मुख्य रूप से वायुमंडल की किस परत में केंद्रित है?",
      "options": {
        "A": "Troposphere",
        "B": "Stratosphere",
        "C": "Mesosphere",
        "D": "Thermosphere"
      },
      "options_hi": {
        "A": "क्षोभमंडल (Troposphere)",
        "B": "समताप मंडल (Stratosphere)",
        "C": "मध्यमंडल (Mesosphere)",
        "D": "तापमंडल (Thermosphere)"
      },
      "correctAnswer": "B",
      "explanation": "Over 90% of atmospheric ozone resides in the Stratosphere (15 to 35 km altitude), shielding Earth from harmful solar ultraviolet (UV-B) rays.",
      "explanation_hi": "ओजोन परत मुख्य रूप से समताप मंडल (Stratosphere) में पाई जाती है जो सूर्य से आने वाली हानिकारक पराबैंगनी (UV) किरणों को अवशोषित करती है."
    },
    {
      "id": 138,
      "question": "Which international treaty adopted in 1987 specifically aims to protect the ozone layer by phasing out CFCs and other ODS?",
      "question_hi": "1987 में अपनाया गया कौन सा अंतर्राष्ट्रीय समझौता CFCs और ओजोन क्षयकारी पदार्थों को समाप्त करके ओजोन परत की रक्षा करने के उद्देश्य से बनाया गया था?",
      "options": {
        "A": "Kyoto Protocol",
        "B": "Montreal Protocol",
        "C": "Paris Agreement",
        "D": "Ramsar Convention"
      },
      "options_hi": {
        "A": "क्योटो प्रोटोकॉल",
        "B": "मॉन्ट्रियल प्रोटोकॉल (Montreal Protocol)",
        "C": "पेरिस समझौता",
        "D": "रामसर सम्मेलन"
      },
      "correctAnswer": "B",
      "explanation": "The Montreal Protocol on Substances that Deplete the Ozone Layer was signed in 1987 to phase out chlorofluorocarbons (CFCs) and halons.",
      "explanation_hi": "मॉन्ट्रियल प्रोटोकॉल (1987) ओजोन परत को नुकसान पहुँचाने वाले क्लोरोफ्लोरोकार्बन (CFCs) जैसे रसायनों के उत्पादन को रोकने के लिए हस्ताक्षरित हुआ था."
    },
    {
      "id": 139,
      "question": "Which atmospheric gases are the primary precursors of 'Acid Rain'?",
      "question_hi": "'अम्ल वर्षा (Acid Rain)' के लिए मुख्य रूप से कौन सी वायुमंडलीय गैसें उत्तरदायी होती हैं?",
      "options": {
        "A": "Oxygen and Nitrogen",
        "B": "Sulfur Dioxide (SO₂) and Nitrogen Oxides (NOₓ)",
        "C": "Methane and Carbon Monoxide",
        "D": "Argon and Helium"
      },
      "options_hi": {
        "A": "ऑक्सीजन और नाइट्रोजन",
        "B": "सल्फर डाइऑक्साइड (SO₂) और नाइट्रोजन ऑक्साइड (NOₓ)",
        "C": "मीथेन और कार्बन मोनोऑक्साइड",
        "D": "आर्गन और हीलियम"
      },
      "correctAnswer": "B",
      "explanation": "SO₂ and NOₓ react with atmospheric water vapor, oxygen, and other chemicals to form sulfuric acid (H₂SO₄) and nitric acid (HNO₃), causing acid rain.",
      "explanation_hi": "सल्फर डाइऑक्साइड (SO₂) और नाइट्रोजन के ऑक्साइड्स (NOx) वायुमंडलीय जलवाष्प से क्रिया करके सल्फ्यूरिक और नाइट्रिक एसिड बनाते हैं, जिससे अम्ल वर्षा होती है."
    },
    {
      "id": 140,
      "question": "What is 'Eutrophication' in freshwater lakes and ponds?",
      "question_hi": "मीठे पानी की झीलों और तालाबों में 'सुपोषण (Eutrophication)' क्या है?",
      "options": {
        "A": "Depletion of all minerals",
        "B": "Excessive nutrient enrichment (phosphates/nitrates) leading to dense algal blooms and oxygen depletion",
        "C": "Freezing of the lake surface in winter",
        "D": "Increase in water salinity"
      },
      "options_hi": {
        "A": "सभी खनिजों की पूर्ण कमी",
        "B": "पोषक तत्वों (फॉस्फेट/नाइट्रेट) का अत्यधिक जमाव जिससे शैवाल तेजी से पनपते हैं और ऑक्सीजन की कमी हो जाती है",
        "C": "सर्दियों में झील की सतह का जमना",
        "D": "पानी के खारेपन में वृद्धि"
      },
      "correctAnswer": "B",
      "explanation": "Eutrophication occurs when excess agricultural runoff or sewage enriches water with nutrients, causing explosive algal blooms and hypoxia (fish kills).",
      "explanation_hi": "उर्वरकों या सीवेज से अत्यधिक पोषक तत्वों (नाइट्रेट/फॉस्फेट) के मिलने से शैवाल प्रस्फुटन होता है जिससे पानी में घुलित ऑक्सीजन समाप्त हो जाती है."
    },
    {
      "id": 141,
      "question": "A shopkeeper marks an article at ₹1,200 and gives a 20% discount. If he still gains 20% profit, what was the cost price of the article?",
      "question_hi": "एक दुकानदार एक वस्तु पर ₹1,200 अंकित करता है और 20% की छूट देता है। यदि वह फिर भी 20% का लाभ अर्जित करता है, तो वस्तु का क्रय मूल्य क्या था?",
      "options": {
        "A": "₹750",
        "B": "₹800",
        "C": "₹850",
        "D": "₹900"
      },
      "options_hi": {
        "A": "₹750",
        "B": "₹800",
        "C": "₹850",
        "D": "₹900"
      },
      "correctAnswer": "B",
      "explanation": "Selling Price = 1200 - (20% of 1200) = 1200 - 240 = ₹960. With 20% profit: CP = SP / 1.20 = 960 / 1.20 = ₹800.",
      "explanation_hi": "विक्रय मूल्य (SP) = 1200 का 80% = ₹960। 20% लाभ पर क्रय मूल्य (CP) = 960 / 1.20 = ₹800."
    },
    {
      "id": 142,
      "question": "A can complete a piece of work in 12 days and B can complete the same work in 24 days. Working together, in how many days can they complete the work?",
      "question_hi": "A किसी कार्य को 12 दिनों में और B उसी कार्य को 24 दिनों में पूरा कर सकता है। एक साथ मिलकर कार्य करते हुए वे उस कार्य को कितने दिनों में पूरा करेंगे?",
      "options": {
        "A": "6 days",
        "B": "8 days",
        "C": "9 days",
        "D": "10 days"
      },
      "options_hi": {
        "A": "6 दिन",
        "B": "8 दिन",
        "C": "9 दिन",
        "D": "10 दिन"
      },
      "correctAnswer": "B",
      "explanation": "Combined 1-day rate = (1/12) + (1/24) = (2 + 1)/24 = 3/24 = 1/8. Total days = 8 days.",
      "explanation_hi": "1 दिन का संयुक्त कार्य = 1/12 + 1/24 = 3/24 = 1/8 भाग। अतः पूरा काम समाप्त करने में कुल 8 दिन लगेंगे."
    },
    {
      "id": 143,
      "question": "A train 150 meters long is running at a speed of 54 km/h. How much time will it take to pass an electric pole?",
      "question_hi": "150 मीटर लंबी एक रेलगाड़ी 54 किमी/घंटा की गति से चल रही है। एक बिजली के खंभे को पार करने में उसे कितना समय लगेगा?",
      "options": {
        "A": "8 seconds",
        "B": "10 seconds",
        "C": "12 seconds",
        "D": "15 seconds"
      },
      "options_hi": {
        "A": "8 सेकंड",
        "B": "10 सेकंड",
        "C": "12 सेकंड",
        "D": "15 सेकंड"
      },
      "correctAnswer": "B",
      "explanation": "Speed in m/s = 54 * (5/18) = 15 m/s. Time = Distance / Speed = 150 m / 15 m/s = 10 seconds.",
      "explanation_hi": "चाल = 54 * (5/18) = 15 मीटर/सेकंड। खंभे को पार करने में समय = दूरी / चाल = 150 / 15 = 10 सेकंड."
    },
    {
      "id": 144,
      "question": "The ratio of two numbers is 3:4 and their Least Common Multiple (LCM) is 180. What is the smaller number?",
      "question_hi": "दो संख्याओं का अनुपात 3:4 है और उनका लघुत्तम समापवर्त्य (LCM) 180 है। छोटी संख्या क्या है?",
      "options": {
        "A": "30",
        "B": "45",
        "C": "60",
        "D": "75"
      },
      "options_hi": {
        "A": "30",
        "B": "45",
        "C": "60",
        "D": "75"
      },
      "correctAnswer": "B",
      "explanation": "Let numbers be 3x and 4x. Since 3 and 4 are coprime, LCM = 3 * 4 * x = 12x. 12x = 180 => x = 15. Smaller number = 3 * 15 = 45.",
      "explanation_hi": "माना संख्याएं 3x और 4x हैं। LCM = 12x = 180 => x = 15। अतः छोटी संख्या = 3 * 15 = 45 होगी."
    },
    {
      "id": 145,
      "question": "What is the Simple Interest on a principal of ₹5,000 at 8% per annum for 3 years?",
      "question_hi": "₹5,000 के मूलधन पर 8% वार्षिक दर से 3 वर्ष का साधारण ब्याज कितना होगा?",
      "options": {
        "A": "₹1,000",
        "B": "₹1,200",
        "C": "₹1,250",
        "D": "₹1,400"
      },
      "options_hi": {
        "A": "₹1,000",
        "B": "₹1,200",
        "C": "₹1,250",
        "D": "₹1,400"
      },
      "correctAnswer": "B",
      "explanation": "SI = (P * R * T) / 100 = (5000 * 8 * 3) / 100 = 120,000 / 100 = ₹1,200.",
      "explanation_hi": "साधारण ब्याज = (मूलधन * दर * समय) / 100 = (5000 * 8 * 3) / 100 = ₹1,200."
    },
    {
      "id": 146,
      "question": "Find the missing number in the sequence: 4, 9, 19, 39, 79, ?",
      "question_hi": "निम्नलिखित श्रृंखला में लुप्त संख्या ज्ञात कीजिए: 4, 9, 19, 39, 79, ?",
      "options": {
        "A": "119",
        "B": "139",
        "C": "159",
        "D": "169"
      },
      "options_hi": {
        "A": "119",
        "B": "139",
        "C": "159",
        "D": "169"
      },
      "correctAnswer": "C",
      "explanation": "Pattern: Each term is multiplied by 2 and then add 1. 4*2+1=9; 9*2+1=19; 19*2+1=39; 39*2+1=79; 79*2+1 = 159.",
      "explanation_hi": "पैटर्न: प्रत्येक पद में 2 से गुणा करके 1 जोड़ा गया है: 4*2+1=9; 9*2+1=19; 19*2+1=39; 39*2+1=79; 79*2+1 = 159."
    },
    {
      "id": 147,
      "question": "In a certain code language, 'TEACHER' is written as 'VGCEJGT'. How will 'STUDENT' be written in that same code?",
      "question_hi": "एक निश्चित कूट भाषा में 'TEACHER' को 'VGCEJGT' लिखा जाता है। उसी कूट भाषा में 'STUDENT' को कैसे लिखा जाएगा?",
      "options": {
        "A": "UVWFGPV",
        "B": "UVWFGPV",
        "C": "UVWFGPV",
        "D": "UVWFGPT"
      },
      "options_hi": {
        "A": "UVWFGPV",
        "B": "UVWFGPV",
        "C": "UVWFGPV",
        "D": "UVWFGPT"
      },
      "correctAnswer": "A",
      "explanation": "Each letter is shifted forward by +2 positions in the English alphabet: S(+2)->U, T(+2)->V, U(+2)->W, D(+2)->F, E(+2)->G, N(+2)->P, T(+2)->V. Result: UVWFGPV.",
      "explanation_hi": "प्रत्येक अक्षर में +2 जोड़ा गया है: S(+2)=U, T(+2)=V, U(+2)=W, D(+2)=F, E(+2)=G, N(+2)=P, T(+2)=V। अतः कूट UVWFGPV होगा."
    },
    {
      "id": 148,
      "question": "Pointing to a photograph of a woman, Rajesh said: 'She is the only daughter of my mother's father.' How is the woman related to Rajesh?",
      "question_hi": "एक महिला की तस्वीर की ओर इशारा करते हुए राजेश ने कहा: 'वह मेरी माँ के पिता की इकलौती बेटी है।' वह महिला राजेश से किस प्रकार संबंधित है?",
      "options": {
        "A": "Sister",
        "B": "Aunt",
        "C": "Mother",
        "D": "Grandmother"
      },
      "options_hi": {
        "A": "बहन",
        "B": "मौसी",
        "C": "माँ (Mother)",
        "D": "नानी"
      },
      "correctAnswer": "C",
      "explanation": "Rajesh's mother's father is his maternal grandfather. The grandfather's only daughter is Rajesh's mother herself.",
      "explanation_hi": "राजेश की माँ के पिता अर्थात उसके नाना। नाना की इकलौती बेटी राजेश की स्वयं की माँ होगी."
    },
    {
      "id": 149,
      "question": "Rohan walks 10 meters North, turns right and walks 15 meters, then turns right again and walks 10 meters. In which direction and at what distance is he from his starting point?",
      "question_hi": "रोहन 10 मीटर उत्तर की ओर चलता है, दायें मुड़ता है और 15 मीटर चलता है, फिर दायें मुड़ता है और 10 मीटर चलता है। वह अपने प्रारंभिक बिंदु से किस दिशा में और कितनी दूरी पर है?",
      "options": {
        "A": "15 meters East",
        "B": "15 meters West",
        "C": "10 meters North",
        "D": "25 meters South"
      },
      "options_hi": {
        "A": "15 मीटर पूर्व (East)",
        "B": "15 मीटर पश्चिम",
        "C": "10 मीटर उत्तर",
        "D": "25 मीटर दक्षिण"
      },
      "correctAnswer": "A",
      "explanation": "Moving +10y, then +15x (East), then -10y (South) brings the y-coordinate back to 0. Net displacement is 15 meters due East.",
      "explanation_hi": "10 मीटर उत्तर जाकर 15 मीटर पूर्व और फिर 10 मीटर दक्षिण आने पर उत्तर-दक्षिण दूरी शून्य हो जाती है। वह आरंभिक बिंदु से ठीक 15 मीटर पूर्व में है."
    },
    {
      "id": 150,
      "question": "Statements: 1. All trees are plants. 2. Some plants are medicinal.\nConclusions: I. Some medicinal items are plants. II. All trees are medicinal.",
      "question_hi": "कथन: 1. सभी पेड़ पौधे हैं। 2. कुछ पौधे औषधीय हैं।\nनिष्कर्ष: I. कुछ औषधीय पौधे हैं। II. सभी पेड़ औषधीय हैं।",
      "options": {
        "A": "Only Conclusion I follows",
        "B": "Only Conclusion II follows",
        "C": "Both I and II follow",
        "D": "Neither I nor II follows"
      },
      "options_hi": {
        "A": "केवल निष्कर्ष I अनुसरण करता है",
        "B": "केवल निष्कर्ष II अनुसरण करता है",
        "C": "दोनों I और II अनुसरण करते हैं",
        "D": "न तो I और न ही II अनुसरण करता है"
      },
      "correctAnswer": "A",
      "explanation": "From statement 2, 'Some plants are medicinal' directly converts to 'Some medicinal items are plants' (Conclusion I holds). Statement 1 does not guarantee all trees are medicinal (Conclusion II fails).",
      "explanation_hi": "कथन 2 के अनुसार 'कुछ पौधे औषधीय हैं' का सीधा परिवर्तन 'कुछ औषधीय पौधे हैं' (निष्कर्ष I सत्य) है। पेड़ों का औषधीय होना अनिवार्य नहीं है (निष्कर्ष II गलत)."
    }
  ]
};
