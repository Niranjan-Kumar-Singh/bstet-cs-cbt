# -*- coding: utf-8 -*-
"""
100 High-Yield Computer Science Questions for Bihar STET Paper II (Predicted Set 14)
Complete bilingual coverage (English & Hindi) with authentic explanations.
"""

questions = [
    # 1-10: Digital Logic & Computer Organization
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

    # 11-25: C++ and Object-Oriented Programming
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

    # 21-35: Data Structures & Algorithms
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

    # 31-45: Database Management Systems & SQL
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

    # 41-55: Operating Systems
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

    # 51-65: Computer Networks & Security
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

    # 61-75: Python Programming & Web Technologies
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

    # 71-85: Software Engineering & Cloud Computing
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

    # 76-85: Emerging Tech & Computer Fundamentals
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
    }
]

print("CS Set 14 data loaded: " + str(len(questions)) + " questions.")

