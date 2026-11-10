# -*- coding: utf-8 -*-
"""
Authentic Mathematical Aptitude and Logical Reasoning questions for Bihar STET & BPSC TRE.
Covers: Percentages, Profit & Loss, SI/CI, Time & Work, Time-Speed-Distance, Trains,
LCM/HCF, Averages, Number series, Coding-Decoding, Blood relations, Direction tests,
Syllogisms, and Ranking.
"""

MATH_REASONING_QUESTIONS = [
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "If the price of sugar increases by 25%, by what percentage must a household reduce its consumption so that the total expenditure on sugar remains unchanged?",
        "question_hi": "यदि चीनी के मूल्य में 25% की वृद्धि होती है, तो एक परिवार को चीनी की खपत में कितने प्रतिशत की कमी करनी चाहिए ताकि कुल खर्च अपरिवर्तित रहे?",
        "options": [
            "20%",
            "25%",
            "16.67%",
            "30%"
        ],
        "options_hi": [
            "20%",
            "25%",
            "16.67%",
            "30%"
        ],
        "correctAnswer": "A",
        "explanation": "Formula: Reduction % = [r / (100 + r)] * 100. Here r = 25%. So [25 / (100 + 25)] * 100 = (25 / 125) * 100 = (1/5) * 100 = 20%.",
        "explanation_hi": "सूत्र: खपत में % कमी = [वृद्धि % / (100 + वृद्धि %)] * 100 = [25 / 125] * 100 = 20%।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "A shopkeeper sells an article for ₹960 and earns a profit of 20%. What was the cost price (CP) of the article?",
        "question_hi": "एक दुकानदार एक वस्तु को ₹960 में बेचकर 20% का लाभ कमाता है। उस वस्तु का क्रय मूल्य (Cost Price) क्या था?",
        "options": [
            "₹800",
            "₹768",
            "₹820",
            "₹750"
        ],
        "options_hi": [
            "₹800",
            "₹768",
            "₹820",
            "₹750"
        ],
        "correctAnswer": "A",
        "explanation": "SP = CP * 1.20 => 960 = CP * 1.2 => CP = 960 / 1.2 = ₹800.",
        "explanation_hi": "क्रय मूल्य = विक्रय मूल्य * 100 / (100 + लाभ %) = 960 * 100 / 120 = ₹800।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "A sum of ₹10,000 is invested at 10% per annum compound interest compounded annually. What is the total compound interest earned after 2 years?",
        "question_hi": "₹10,000 की धनराशि 10% वार्षिक चक्रवृद्धि ब्याज की दर से निवेश की जाती है। 2 वर्ष बाद कुल कितना चक्रवृद्धि ब्याज प्राप्त होगा?",
        "options": [
            "₹2,100",
            "₹2,000",
            "₹1,210",
            "₹2,200"
        ],
        "options_hi": [
            "₹2,100",
            "₹2,000",
            "₹1,210",
            "₹2,200"
        ],
        "correctAnswer": "A",
        "explanation": "Amount A = P(1 + r/100)^n = 10000 * (1.10)^2 = 10000 * 1.21 = ₹12,100. CI = Amount - Principal = 12100 - 10000 = ₹2,100.",
        "explanation_hi": "मिश्रधन = 10000 * (1 + 10/100)^2 = 10000 * 1.21 = ₹12,100। चक्रवृद्धि ब्याज = 12100 - 10000 = ₹2,100।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "What is the difference between Compound Interest and Simple Interest on a principal sum of ₹5,000 for 2 years at an annual interest rate of 8%?",
        "question_hi": "₹5,000 के मूलधन पर 8% वार्षिक ब्याज दर से 2 वर्ष के लिए चक्रवृद्धि ब्याज और साधारण ब्याज के बीच क्या अंतर होगा?",
        "options": [
            "₹32",
            "₹40",
            "₹25",
            "₹64"
        ],
        "options_hi": [
            "₹32",
            "₹40",
            "₹25",
            "₹64"
        ],
        "correctAnswer": "A",
        "explanation": "For 2 years, Difference D = P * (R / 100)^2 = 5000 * (8 / 100)^2 = 5000 * (64 / 10000) = 5000 * 0.0064 = ₹32.",
        "explanation_hi": "2 वर्ष के लिए CI और SI का अंतर = P * (R/100)^2 = 5000 * (8/100)^2 = 5000 * (64/10000) = ₹32।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "A can complete a piece of work alone in 12 days, and B can complete the same work alone in 18 days. If they work together, in how many days will the work be completed?",
        "question_hi": "A अकेला किसी कार्य को 12 दिनों में पूरा कर सकता है और B अकेला उसी कार्य को 18 दिनों में पूरा कर सकता है। यदि वे दोनों एक साथ कार्य करें, तो कार्य कितने दिनों में पूरा होगा?",
        "options": [
            "7.2 days (36/5 days)",
            "6 days",
            "8 days",
            "7.5 days"
        ],
        "options_hi": [
            "7.2 दिन (36/5 दिन)",
            "6 दिन",
            "8 दिन",
            "7.5 दिन"
        ],
        "correctAnswer": "A",
        "explanation": "Total work = LCM(12, 18) = 36 units. Efficiency of A = 3 units/day, efficiency of B = 2 units/day. Combined efficiency = 3 + 2 = 5 units/day. Days taken = 36 / 5 = 7.2 days.",
        "explanation_hi": "कुल कार्य = LCM(12, 18) = 36 इकाई। A की कार्यक्षमता = 3, B की कार्यक्षमता = 2। दोनों मिलकर = 3 + 2 = 5 इकाई/दिन। कुल समय = 36 / 5 = 7.2 दिन।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "Two pipes A and B can fill an empty cistern in 20 minutes and 30 minutes respectively. If both pipes are opened simultaneously, how long will it take to fill the cistern completely?",
        "question_hi": "दो नल A और B एक खाली टंकी को क्रमशः 20 मिनट और 30 मिनट में भर सकते हैं। यदि दोनों नलों को एक साथ खोल दिया जाए, तो टंकी पूरी तरह भरने में कितना समय लगेगा?",
        "options": [
            "12 minutes",
            "15 minutes",
            "10 minutes",
            "25 minutes"
        ],
        "options_hi": [
            "12 मिनट",
            "15 मिनट",
            "10 मिनट",
            "25 मिनट"
        ],
        "correctAnswer": "A",
        "explanation": "Total tank capacity = LCM(20, 30) = 60 units. Rate of A = 3 units/min, Rate of B = 2 units/min. Combined rate = 3 + 2 = 5 units/min. Time required = 60 / 5 = 12 minutes.",
        "explanation_hi": "कुल क्षमता = 60 इकाई। नल A की गति = 3 इकाई/मिनट, नल B की गति = 2 इकाई/मिनट। दोनों की संयुक्त गति = 5 इकाई/मिनट। समय = 60 / 5 = 12 मिनट।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "A train 300 meters long is traveling at a constant speed of 72 km/h. How many seconds will it take to completely pass an electric pole standing beside the track?",
        "question_hi": "300 मीटर लंबी एक रेलगाड़ी 72 किमी/घंटा की नियत गति से चल रही है। ट्रैक के किनारे खड़े एक बिजली के खंभे को पूरी तरह पार करने में इसे कितने सेकंड का समय लगेगा?",
        "options": [
            "15 seconds",
            "20 seconds",
            "12 seconds",
            "18 seconds"
        ],
        "options_hi": [
            "15 सेकंड",
            "20 सेकंड",
            "12 सेकंड",
            "18 सेकंड"
        ],
        "correctAnswer": "A",
        "explanation": "Speed in m/s = 72 * (5/18) = 20 m/s. Distance to cross a point object (pole) = length of train = 300 m. Time = Distance / Speed = 300 / 20 = 15 seconds.",
        "explanation_hi": "चाल (मी/से में) = 72 * 5/18 = 20 मी/से। खंभे को पार करने में तय दूरी = गाड़ी की लंबाई = 300 मीटर। समय = 300 / 20 = 15 सेकंड।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "A train 240 meters long crosses a 360-meter long platform in 30 seconds. What is the speed of the train in km/h?",
        "question_hi": "240 मीटर लंबी एक रेलगाड़ी 360 मीटर लंबे प्लेटफॉर्म को 30 सेकंड में पार करती है। रेलगाड़ी की गति किमी/घंटा में क्या है?",
        "options": [
            "72 km/h",
            "60 km/h",
            "54 km/h",
            "80 km/h"
        ],
        "options_hi": [
            "72 किमी/घंटा",
            "60 किमी/घंटा",
            "54 किमी/घंटा",
            "80 किमी/घंटा"
        ],
        "correctAnswer": "A",
        "explanation": "Total distance = Train length + Platform length = 240 + 360 = 600 meters. Speed in m/s = 600 / 30 = 20 m/s. Speed in km/h = 20 * (18/5) = 72 km/h.",
        "explanation_hi": "कुल दूरी = 240 + 360 = 600 मीटर। चाल (मी/से) = 600 / 30 = 20 मी/से। चाल (किमी/घंटा) = 20 * 18/5 = 72 किमी/घंटा।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "The ratio of ages of two friends P and Q is currently 4 : 5. After 6 years, the ratio of their ages becomes 5 : 6. What is the present age of P?",
        "question_hi": "दो मित्रों P और Q की वर्तमान आयु का अनुपात 4 : 5 है। 6 वर्ष बाद, उनकी आयु का अनुपात 5 : 6 हो जाता है। P की वर्तमान आयु क्या है?",
        "options": [
            "24 years",
            "30 years",
            "20 years",
            "28 years"
        ],
        "options_hi": [
            "24 वर्ष",
            "30 वर्ष",
            "20 वर्ष",
            "28 वर्ष"
        ],
        "correctAnswer": "A",
        "explanation": "Let ages be 4x and 5x. Then (4x + 6) / (5x + 6) = 5/6 => 6(4x + 6) = 5(5x + 6) => 24x + 36 = 25x + 30 => x = 6. Present age of P = 4x = 4 * 6 = 24 years.",
        "explanation_hi": "माना आयु 4x और 5x है। (4x + 6) / (5x + 6) = 5/6 => 24x + 36 = 25x + 30 => x = 6। P की वर्तमान आयु = 4 * 6 = 24 वर्ष।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "The HCF and LCM of two numbers are 16 and 480 respectively. If one of the numbers is 80, what is the other number?",
        "question_hi": "दो संख्याओं का महत्तम समापवर्तक (HCF) 16 और लघुत्तम समापवर्त्य (LCM) 480 है। यदि उनमें से एक संख्या 80 है, तो दूसरी संख्या क्या है?",
        "options": [
            "96",
            "112",
            "84",
            "120"
        ],
        "options_hi": [
            "96",
            "112",
            "84",
            "120"
        ],
        "correctAnswer": "A",
        "explanation": "Formula: Product of two numbers = HCF * LCM => Number * 80 = 16 * 480 => Number = (16 * 480) / 80 = 16 * 6 = 96.",
        "explanation_hi": "सूत्र: पहली संख्या * दूसरी संख्या = HCF * LCM => दूसरी संख्या = (16 * 480) / 80 = 96।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "The average of 5 consecutive odd numbers is 27. What is the product of the smallest and largest numbers among them?",
        "question_hi": "5 क्रमागत विषम संख्याओं का औसत 27 है। उनमें से सबसे छोटी और सबसे बड़ी संख्या का गुणनफल क्या है?",
        "options": [
            "713",
            "675",
            "725",
            "697"
        ],
        "options_hi": [
            "713",
            "675",
            "725",
            "697"
        ],
        "correctAnswer": "A",
        "explanation": "The average of an arithmetic sequence of consecutive odd numbers is the middle number = 27. The 5 numbers are 23, 25, 27, 29, 31. Smallest = 23, Largest = 31. Product = 23 * 31 = 713.",
        "explanation_hi": "5 क्रमागत विषम संख्याओं का औसत उनका मध्य पद होता है = 27। अतः संख्याएं हैं: 23, 25, 27, 29, 31। सबसे छोटी = 23, सबसे बड़ी = 31। गुणनफल = 23 * 31 = 713।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "What is the single equivalent discount for two successive discounts of 20% and 10%?",
        "question_hi": "20% और 10% की दो क्रमिक छूटों (Successive Discounts) के लिए एकल समतुल्य छूट क्या है?",
        "options": [
            "28%",
            "30%",
            "25%",
            "27%"
        ],
        "options_hi": [
            "28%",
            "30%",
            "25%",
            "27%"
        ],
        "correctAnswer": "A",
        "explanation": "Equivalent discount = [d1 + d2 - (d1 * d2 / 100)]% = [20 + 10 - (20 * 10 / 100)]% = [30 - 2]% = 28%.",
        "explanation_hi": "समतुल्य छूट = (a + b - ab/100)% = 20 + 10 - (200/100) = 30 - 2 = 28%।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "Find the missing number in the sequence: 4, 9, 19, 39, 79, ?",
        "question_hi": "शृंखला में लुप्त संख्या ज्ञात कीजिए: 4, 9, 19, 39, 79, ?",
        "options": [
            "159",
            "149",
            "169",
            "158"
        ],
        "options_hi": [
            "159",
            "149",
            "169",
            "158"
        ],
        "correctAnswer": "A",
        "explanation": "Pattern: Each term is multiplied by 2 and then 1 is added: (4*2)+1 = 9; (9*2)+1 = 19; (19*2)+1 = 39; (39*2)+1 = 79; (79*2)+1 = 158 + 1 = 159.",
        "explanation_hi": "पैटर्न: (पिछला पद * 2) + 1। अतः (79 * 2) + 1 = 158 + 1 = 159।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "In a certain code language, 'TEACHER' is coded as 'VGCEJGT'. In the same code language, how will 'STUDENT' be written?",
        "question_hi": "एक निश्चित कूट भाषा में 'TEACHER' को 'VGCEJGT' लिखा जाता है। उसी कूट भाषा में 'STUDENT' को किस प्रकार लिखा जाएगा?",
        "options": [
            "UVWFGPV",
            "UVWGGQV",
            "TVWFGPU",
            "UWWFGPV"
        ],
        "options_hi": [
            "UVWFGPV",
            "UVWGGQV",
            "TVWFGPU",
            "UWWFGPV"
        ],
        "correctAnswer": "A",
        "explanation": "Pattern: Every letter is shifted forward by +2 positions in the alphabetical order: S(+2)->U, T(+2)->V, U(+2)->W, D(+2)->F, E(+2)->G, N(+2)->P, T(+2)->V = UVWFGPV.",
        "explanation_hi": "नियम: प्रत्येक अक्षर में +2 जोड़ा गया है: S+2=U, T+2=V, U+2=W, D+2=F, E+2=G, N+2=P, T+2=V। सही कोड 'UVWFGPV' है।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "Pointing to a man in a photograph, a woman says: 'He is the only son of my mother's only daughter.' How is the man in the photograph related to the woman?",
        "question_hi": "एक तस्वीर में एक व्यक्ति की ओर इशारा करते हुए एक महिला कहती है: 'वह मेरी माँ की इकलौती बेटी का इकलौता बेटा है।' तस्वीर वाला व्यक्ति उस महिला से किस प्रकार संबंधित है?",
        "options": [
            "Her Son",
            "Her Brother",
            "Her Nephew",
            "Her Father"
        ],
        "options_hi": [
            "उसका पुत्र (बेटा)",
            "उसका भाई",
            "उसका भतीजा / भांजा",
            "उसका पिता"
        ],
        "correctAnswer": "A",
        "explanation": "'My mother's only daughter' is the woman herself. The 'only son of herself' is therefore her own son.",
        "explanation_hi": "'मेरी माँ की इकलौती बेटी' स्वयं वह महिला है। अतः उसका इकलौता बेटा उसका अपना 'पुत्र' है।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "A person walks 10 meters towards the North, then turns right and walks 15 meters. He then turns right again and walks 10 meters. How far and in which direction is he now from his starting point?",
        "question_hi": "एक व्यक्ति उत्तर की ओर 10 मीटर चलता है, फिर दाएं मुड़कर 15 मीटर चलता है। इसके बाद वह फिर से दाएं मुड़ता है और 10 मीटर चलता है। वह अपने प्रारंभिक बिंदु से कितनी दूरी पर और किस दिशा में है?",
        "options": [
            "15 meters, East",
            "10 meters, West",
            "15 meters, South",
            "25 meters, North"
        ],
        "options_hi": [
            "15 मीटर, पूर्व दिशा",
            "10 मीटर, पश्चिम दिशा",
            "15 मीटर, दक्षिण दिशा",
            "25 मीटर, उत्तर दिशा"
        ],
        "correctAnswer": "A",
        "explanation": "North 10m (+Y). Turn right -> East 15m (+X). Turn right -> South 10m (-Y). Net displacement: Y coordinates cancel (10 - 10 = 0), leaving 15m along the positive X-axis (East).",
        "explanation_hi": "उत्तर में 10 मीटर जाकर दो बार दाएं मुड़ने पर वह 10 मीटर दक्षिण आकर प्रारंभिक रेखा पर आ जाता है। अब वह आरंभिक बिंदु से ठीक 15 मीटर पूर्व (East) में है।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "In a class of 45 students, Rohan ranks 16th from the top. What is his rank from the bottom of the class?",
        "question_hi": "45 छात्रों की एक कक्षा में रोहन का स्थान ऊपर से 16वां है। कक्षा में नीचे से उसका स्थान क्या होगा?",
        "options": [
            "30th",
            "29th",
            "31st",
            "28th"
        ],
        "options_hi": [
            "30वां",
            "29वां",
            "31वां",
            "28वां"
        ],
        "correctAnswer": "A",
        "explanation": "Formula: Rank from bottom = Total - Rank from top + 1 = 45 - 16 + 1 = 29 + 1 = 30th.",
        "explanation_hi": "सूत्र: नीचे से स्थान = कुल छात्र - ऊपर से स्थान + 1 = 45 - 16 + 1 = 30वां।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "Statements: (1) All books are papers. (2) Some papers are pens. Conclusions: I. Some pens are books. II. Some papers are books. Which conclusion logically follows?",
        "question_hi": "कथन: (1) सभी पुस्तकें कागज हैं। (2) कुछ कागज पेन हैं। निष्कर्ष: I. कुछ पेन पुस्तकें हैं। II. कुछ कागज पुस्तकें हैं। कौन सा निष्कर्ष तार्किक रूप से निकलता है?",
        "options": [
            "Only conclusion II follows",
            "Only conclusion I follows",
            "Both conclusion I and II follow",
            "Neither conclusion I nor II follows"
        ],
        "options_hi": [
            "केवल निष्कर्ष II निकलता है",
            "केवल निष्कर्ष I निकलता है",
            "निष्कर्ष I और II दोनों निकलते हैं",
            "न तो निष्कर्ष I और न ही II निकलता है"
        ],
        "correctAnswer": "A",
        "explanation": "Since all books are papers (A is subset of B), the converse 'some papers are books' is immediately valid (Conclusion II). There is no guaranteed overlap between pens and books, so Conclusion I does not necessarily follow.",
        "explanation_hi": "चूंकि सभी पुस्तकें कागज हैं, अतः कुछ कागज निश्चित रूप से पुस्तकें होंगे (निष्कर्ष II सत्य है)। पेन और पुस्तक के बीच कोई सीधा संबंध नहीं दिया गया है।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "Find the odd one out among the following numbers: 27, 64, 125, 144, 216",
        "question_hi": "निम्नलिखित संख्याओं में से विषम (असंगत) संख्या चुनिए: 27, 64, 125, 144, 216",
        "options": [
            "144 (it is not a cube, while others are perfect cubes)",
            "64",
            "125",
            "27"
        ],
        "options_hi": [
            "144 (यह पूर्ण घन नहीं है, जबकि अन्य सभी पूर्ण घन हैं)",
            "64",
            "125",
            "27"
        ],
        "correctAnswer": "A",
        "explanation": "27 = 3^3, 64 = 4^3, 125 = 5^3, 216 = 6^3 are all perfect cubes. 144 is 12^2 (a square, but not a cube).",
        "explanation_hi": "27 (3³), 64 (4³), 125 (5³), 216 (6³) पूर्ण घन हैं। केवल 144 किसी का घन नहीं है (यह 12 का वर्ग है)।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "What is the angle between the hour hand and the minute hand of a clock at exactly 3:30?",
        "question_hi": "ठीक 3:30 बजे घड़ी की घंटे की सुई और मिनट की सुई के बीच कितने डिग्री का कोण बनेगा?",
        "options": [
            "75 degrees",
            "90 degrees",
            "80 degrees",
            "70 degrees"
        ],
        "options_hi": [
            "75 डिग्री",
            "90 डिग्री",
            "80 डिग्री",
            "70 डिग्री"
        ],
        "correctAnswer": "A",
        "explanation": "Formula: Angle = |30*H - (11/2)*M| = |30*3 - (11/2)*30| = |90 - 165| = |-75| = 75 degrees.",
        "explanation_hi": "सूत्र: कोण = |30*H - (11/2)*M| = |30*3 - (11/2)*30| = |90 - 165| = 75 डिग्री।"
    }
]


MATH_REASONING_PART2 = [
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "If 15 men can complete a project in 20 days working 8 hours a day, how many days will 20 men take to complete the same project working 6 hours a day?",
        "question_hi": "यदि 15 व्यक्ति प्रतिदिन 8 घंटे कार्य करके किसी कार्य को 20 दिनों में पूरा कर सकते हैं, तो 20 व्यक्ति प्रतिदिन 6 घंटे कार्य करके उसी कार्य को कितने दिनों में पूरा करेंगे?",
        "options": [
            "20 days",
            "18 days",
            "24 days",
            "15 days"
        ],
        "options_hi": [
            "20 दिन",
            "18 दिन",
            "24 दिन",
            "15 दिन"
        ],
        "correctAnswer": "A",
        "explanation": "Formula: M1 * D1 * H1 = M2 * D2 * H2 => 15 * 20 * 8 = 20 * D2 * 6 => 2400 = 120 * D2 => D2 = 2400 / 120 = 20 days.",
        "explanation_hi": "सूत्र: M1 * D1 * H1 = M2 * D2 * H2 => 15 * 20 * 8 = 20 * D2 * 6 => D2 = 2400 / 120 = 20 दिन।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "A shopkeeper professes to sell his goods at cost price, but uses a false weight of 900 grams instead of a true kilogram (1,000 grams). What is his actual gain percentage?",
        "question_hi": "एक बेईमान दुकानदार अपनी वस्तुओं को क्रय मूल्य पर बेचने का दावा करता है, लेकिन 1 किलोग्राम (1,000 ग्राम) के स्थान पर 900 ग्राम के गलत बाट का उपयोग करता है। उसका वास्तविक लाभ प्रतिशत क्या है?",
        "options": [
            "11.11% (100/9 %)",
            "10%",
            "12.5%",
            "9.09%"
        ],
        "options_hi": [
            "11.11% (100/9 %)",
            "10%",
            "12.5%",
            "9.09%"
        ],
        "correctAnswer": "A",
        "explanation": "Gain % = [Error / (True weight - Error)] * 100 = [100 / 900] * 100 = 100 / 9 = 11.11%.",
        "explanation_hi": "लाभ % = [त्रुटि / (सत्य बाट - त्रुटि)] * 100 = [100 / 900] * 100 = 11.11%।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "The perimeter of a rectangle is 80 cm and its length is 24 cm. What is the area of the rectangle?",
        "question_hi": "एक आयत का परिमाप 80 सेमी है और इसकी लंबाई 24 सेमी है। उस आयत का क्षेत्रफल क्या होगा?",
        "options": [
            "384 sq. cm",
            "400 sq. cm",
            "360 sq. cm",
            "420 sq. cm"
        ],
        "options_hi": [
            "384 वर्ग सेमी",
            "400 वर्ग सेमी",
            "360 वर्ग सेमी",
            "420 वर्ग सेमी"
        ],
        "correctAnswer": "A",
        "explanation": "Perimeter = 2*(L + B) => 80 = 2*(24 + B) => 24 + B = 40 => B = 16 cm. Area = L * B = 24 * 16 = 384 sq. cm.",
        "explanation_hi": "परिमाप = 2(लंबाई + चौड़ाई) => 80 = 2(24 + B) => चौड़ाई = 16 सेमी। क्षेत्रफल = लंबाई * चौड़ाई = 24 * 16 = 384 वर्ग सेमी।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "If the radius of a circle is increased by 50%, by what percentage does the area of the circle increase?",
        "question_hi": "यदि किसी वृत्त की त्रिज्या में 50% की वृद्धि कर दी जाए, तो उस वृत्त के क्षेत्रफल में कितने प्रतिशत की वृद्धि होगी?",
        "options": [
            "125%",
            "100%",
            "150%",
            "75%"
        ],
        "options_hi": [
            "125%",
            "100%",
            "150%",
            "75%"
        ],
        "correctAnswer": "A",
        "explanation": "Net area change formula: (2r + r^2/100)% = 2(50) + (2500/100) = 100 + 25 = 125%.",
        "explanation_hi": "क्षेत्रफल में % परिवर्तन = (2a + a²/100)% = 2(50) + 2500/100 = 100 + 25 = 125%।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "A boat can travel at a speed of 12 km/h in still water. If the speed of the river current is 3 km/h, what is the time taken by the boat to travel 45 km downstream?",
        "question_hi": "शांत जल में एक नाव की गति 12 किमी/घंटा है। यदि नदी की धारा की गति 3 किमी/घंटा है, तो नाव को धारा के अनुकूल (Downstream) 45 किमी जाने में कितना समय लगेगा?",
        "options": [
            "3 hours",
            "4 hours",
            "3.5 hours",
            "5 hours"
        ],
        "options_hi": [
            "3 घंटे",
            "4 घंटे",
            "3.5 घंटे",
            "5 घंटे"
        ],
        "correctAnswer": "A",
        "explanation": "Downstream speed = Speed of boat + Speed of current = 12 + 3 = 15 km/h. Time = Distance / Speed = 45 / 15 = 3 hours.",
        "explanation_hi": "धारा के अनुकूल चाल = नाव की चाल + धारा की चाल = 12 + 3 = 15 किमी/घंटा। समय = दूरी / चाल = 45 / 15 = 3 घंटे।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "What is the unit digit of the exponential expression (7)^95?",
        "question_hi": "घातांकीय व्यंजक (7)^95 का इकाई अंक (Unit Digit) क्या होगा?",
        "options": [
            "3",
            "1",
            "7",
            "9"
        ],
        "options_hi": [
            "3",
            "1",
            "7",
            "9"
        ],
        "correctAnswer": "A",
        "explanation": "Cyclicity of powers of 7 is 4 (7^1=7, 7^2=9, 7^3=3, 7^4=1). Remainder of 95 divided by 4: 95 = 4 * 23 + 3. So the unit digit is the same as 7^3 = 343 => unit digit is 3.",
        "explanation_hi": "7 की घात की चक्रीयता 4 होती है (7, 9, 3, 1)। 95 को 4 से भाग देने पर शेषफल 3 बचता है। अतः इकाई अंक 7³ का इकाई अंक होगा = 3।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "If a number 5432*7 is divisible by 9, what digit must replace the asterisk (*) symbol?",
        "question_hi": "यदि संख्या 5432*7, 9 से पूर्णतः विभाज्य है, तो स्टार (*) के स्थान पर कौन सा अंक आएगा?",
        "options": [
            "6",
            "5",
            "4",
            "7"
        ],
        "options_hi": [
            "6",
            "5",
            "4",
            "7"
        ],
        "correctAnswer": "A",
        "explanation": "Divisibility rule for 9: Sum of digits must be divisible by 9. Sum = 5 + 4 + 3 + 2 + * + 7 = 21 + *. The next multiple of 9 after 21 is 27. So * = 27 - 21 = 6.",
        "explanation_hi": "9 से विभाज्यता का नियम: अंकों का योग 9 से कटना चाहिए। 5 + 4 + 3 + 2 + * + 7 = 21 + *। 21 के बाद 9 का गुणज 27 है, अतः * = 6।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "A sum of money doubles itself in 5 years at simple interest. In how many years will it become 4 times itself at the same rate?",
        "question_hi": "साधारण ब्याज की दर से कोई धनराशि 5 वर्ष में दोगुनी हो जाती है। उसी ब्याज दर से यह कितने वर्षों में स्वयं की 4 गुनी हो जाएगी?",
        "options": [
            "15 years",
            "20 years",
            "10 years",
            "12 years"
        ],
        "options_hi": [
            "15 वर्ष",
            "20 वर्ष",
            "10 वर्ष",
            "12 वर्ष"
        ],
        "correctAnswer": "A",
        "explanation": "Formula: (T2 / T1) = (N2 - 1) / (N1 - 1) => (T2 / 5) = (4 - 1) / (2 - 1) = 3 / 1 => T2 = 5 * 3 = 15 years.",
        "explanation_hi": "सूत्र: (N1 - 1)/T1 = (N2 - 1)/T2 => (2 - 1)/5 = (4 - 1)/T2 => 1/5 = 3/T2 => T2 = 15 वर्ष।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "A and B invest in a business in the ratio 3 : 5. If their total annual profit is ₹40,000, what is the profit share of A?",
        "question_hi": "A और B एक व्यवसाय में 3 : 5 के अनुपात में निवेश करते हैं। यदि वर्ष के अंत में कुल लाभ ₹40,000 होता है, तो A का लाभांश क्या होगा?",
        "options": [
            "₹15,000",
            "₹25,000",
            "₹18,000",
            "₹12,000"
        ],
        "options_hi": [
            "₹15,000",
            "₹25,000",
            "₹18,000",
            "₹12,000"
        ],
        "correctAnswer": "A",
        "explanation": "Profit share of A = [3 / (3 + 5)] * 40,000 = (3/8) * 40,000 = 3 * 5,000 = ₹15,000.",
        "explanation_hi": "A का हिस्सा = (3 / 8) * 40,000 = ₹15,000।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "Find the next term in the letter series: B, E, I, N, T, ?",
        "question_hi": "अक्षर शृंखला में अगला पद ज्ञात कीजिए: B, E, I, N, T, ?",
        "options": [
            "A",
            "Z",
            "Y",
            "B"
        ],
        "options_hi": [
            "A",
            "Z",
            "Y",
            "B"
        ],
        "correctAnswer": "A",
        "explanation": "Alphabet positions: B(2) +3 -> E(5) +4 -> I(9) +5 -> N(14) +6 -> T(20) +7 -> 27. Wrapping 27 mod 26 gives position 1 = 'A'.",
        "explanation_hi": "अक्षरों का अंतर: B(+3) -> E(+4) -> I(+5) -> N(+6) -> T(+7) -> 20+7 = 27 = 'A'।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "If 'DELHI' is coded as '73541' and 'CALCUTTA' is coded as '82589662', how will 'CALICUT' be coded?",
        "question_hi": "यदि 'DELHI' को '73541' और 'CALCUTTA' को '82589662' के रूप में कोडित किया जाता है, तो 'CALICUT' को कैसे कोडित किया जाएगा?",
        "options": [
            "8251896",
            "8251869",
            "8251986",
            "8521896"
        ],
        "options_hi": [
            "8251896",
            "8251869",
            "8251986",
            "8521896"
        ],
        "correctAnswer": "A",
        "explanation": "Direct letter mapping: C=8, A=2, L=5, I=1, C=8, U=9, T=6 => CALICUT = 8251896.",
        "explanation_hi": "प्रत्यक्ष कोडिंग: C=8, A=2, L=5, I=1, C=8, U=9, T=6 => CALICUT = 8251896।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "A is the brother of B. C is the mother of A. D is the father of C. How is B's child related to D?",
        "question_hi": "A, B का भाई है। C, A की माँ है। D, C का पिता है। B की संतान D से किस प्रकार संबंधित होगी?",
        "options": [
            "Great-grandchild (प्रपौत्र / प्रपौत्री)",
            "Grandchild",
            "Child",
            "Nephew"
        ],
        "options_hi": [
            "प्रपौत्र / प्रपौत्री (Great-grandchild)",
            "पौत्र / नाती",
            "संतान",
            "भतीजा"
        ],
        "correctAnswer": "A",
        "explanation": "C is the mother of A and B. D is the father of C (maternal grandfather of A and B). Therefore, B's child is the great-grandchild of D.",
        "explanation_hi": "C, B की माँ है और D, C का पिता (नाना) है। अतः B की संतान D की प्रपौत्र/प्रदौहित्र (Great-grandchild) होगी।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "If South-East becomes North, North-East becomes West, and so on, what will West become?",
        "question_hi": "यदि दक्षिण-पूर्व, उत्तर बन जाता है; उत्तर-पूर्व, पश्चिम बन जाता है और इसी प्रकार आगे भी, तो पश्चिम क्या बन जाएगा?",
        "options": [
            "South-East",
            "North-West",
            "South-West",
            "North-East"
        ],
        "options_hi": [
            "दक्षिण-पूर्व (South-East)",
            "उत्तर-पश्चिम",
            "दक्षिण-पश्चिम",
            "उत्तर-पूर्व"
        ],
        "correctAnswer": "A",
        "explanation": "South-East (135°) becomes North (0°/360°), which represents a rotation of 135° anti-clockwise. Applying a 135° anti-clockwise rotation to West (270°) lands on 135°, which is South-East.",
        "explanation_hi": "प्रत्येक दिशा 135° वामावर्त (Anti-clockwise) घूम रही है। अतः पश्चिम (West) 135° वामावर्त घूमने पर 'दक्षिण-पूर्व' (South-East) बन जाएगा।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "Find the missing number in the series: 2, 6, 12, 20, 30, 42, ?",
        "question_hi": "शृंखला में लुप्त संख्या ज्ञात कीजिए: 2, 6, 12, 20, 30, 42, ?",
        "options": [
            "56",
            "54",
            "60",
            "48"
        ],
        "options_hi": [
            "56",
            "54",
            "60",
            "48"
        ],
        "correctAnswer": "A",
        "explanation": "Pattern: n*(n+1) or differences of +4, +6, +8, +10, +12, +14. 42 + 14 = 56 (or 7 * 8 = 56).",
        "explanation_hi": "पैटर्न: क्रमागत अंतर +4, +6, +8, +10, +12, +14 है। 42 + 14 = 56 (या 7 * 8 = 56)।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "Which diagram best represents the relationship among: 'Engineers', 'Human Beings', and 'Doctors'?",
        "question_hi": "'इंजीनियर', 'मानव' और 'डॉक्टर' के बीच संबंध को कौन सा वेन आरेख सबसे अच्छी तरह दर्शाता है?",
        "options": [
            "A large circle containing two separate non-overlapping circles inside it",
            "Three intersecting concentric circles",
            "Three completely detached separate circles",
            "Two overlapping circles inside a square"
        ],
        "options_hi": [
            "एक बड़ा वृत्त (मानव) जिसके अंदर दो अलग-अलग गैर-अतिव्यापी वृत्त (इंजीनियर और डॉक्टर) स्थित हैं",
            "तीन परस्पर जुड़े हुए वृत्त",
            "तीन पूरी तरह से अलग-अलग वृत्त",
            "एक वर्ग के अंदर दो परस्पर जुड़े वृत्त"
        ],
        "correctAnswer": "A",
        "explanation": "Both Engineers and Doctors are distinct professions belonging entirely within the set of Human Beings, with no typical professional overlap in this standard categorical classification.",
        "explanation_hi": "सभी इंजीनियर और सभी डॉक्टर 'मानव' होते हैं, और सामान्यतः कोई व्यक्ति एक साथ दोनों मुख्य पेशों में नहीं होता, इसलिए बड़े वृत्त के अंदर दो अलग वृत्त होंगे।"
    }
]


MATH_REASONING_PART3 = [
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "A car covers a distance of 180 km at a speed of 60 km/h and returns the same distance at a speed of 90 km/h. What is the average speed of the car for the entire round trip?",
        "question_hi": "एक कार 60 किमी/घंटा की गति से 180 किमी की दूरी तय करती है और 90 किमी/घंटा की गति से उसी दूरी पर वापस आती है। पूरी यात्रा के लिए कार की औसत गति क्या है?",
        "options": [
            "72 km/h",
            "75 km/h",
            "70 km/h",
            "80 km/h"
        ],
        "options_hi": [
            "72 किमी/घंटा",
            "75 किमी/घंटा",
            "70 किमी/घंटा",
            "80 किमी/घंटा"
        ],
        "correctAnswer": "A",
        "explanation": "Formula: Average speed for equal distance = 2*x*y / (x + y) = (2 * 60 * 90) / (60 + 90) = 10,800 / 150 = 72 km/h.",
        "explanation_hi": "समान दूरी के लिए औसत चाल = 2xy / (x + y) = (2 * 60 * 90) / 150 = 72 किमी/घंटा।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "The diagonal of a square is 10√2 cm. What is the perimeter of this square?",
        "question_hi": "एक वर्ग का विकर्ण 10√2 सेमी है। इस वर्ग का परिमाप क्या होगा?",
        "options": [
            "40 cm",
            "50 cm",
            "35 cm",
            "45 cm"
        ],
        "options_hi": [
            "40 सेमी",
            "50 सेमी",
            "35 सेमी",
            "45 सेमी"
        ],
        "correctAnswer": "A",
        "explanation": "Diagonal of square d = a√2 => 10√2 = a√2 => side a = 10 cm. Perimeter = 4 * a = 4 * 10 = 40 cm.",
        "explanation_hi": "विकर्ण = भुजा * √2 => 10√2 = a√2 => भुजा = 10 सेमी। परिमाप = 4 * भुजा = 40 सेमी।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "What is the smallest number which when divided by 12, 15, 20, and 54 leaves in each case a remainder of 4?",
        "question_hi": "वह सबसे छोटी संख्या कौन सी है जिसे 12, 15, 20 और 54 से भाग देने पर प्रत्येक स्थिति में शेषफल 4 बचता है?",
        "options": [
            "544",
            "540",
            "536",
            "548"
        ],
        "options_hi": [
            "544",
            "540",
            "536",
            "548"
        ],
        "correctAnswer": "A",
        "explanation": "LCM(12, 15, 20, 54) = 540. Required number = LCM + remainder = 540 + 4 = 544.",
        "explanation_hi": "12, 15, 20 और 54 का लघुत्तम समापवर्त्य (LCM) = 540। अभीष्ट संख्या = 540 + 4 = 544।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "In how many different ways can the letters of the word 'LEADER' be arranged?",
        "question_hi": "शब्द 'LEADER' के अक्षरों को कितने विभिन्न तरीकों से व्यवस्थित किया जा सकता है?",
        "options": [
            "360 ways",
            "720 ways",
            "120 ways",
            "180 ways"
        ],
        "options_hi": [
            "360 तरीके",
            "720 तरीके",
            "120 तरीके",
            "180 तरीके"
        ],
        "correctAnswer": "A",
        "explanation": "The word LEADER contains 6 letters with 'E' repeating 2 times. Total permutations = 6! / 2! = 720 / 2 = 360 ways.",
        "explanation_hi": "LEADER में 6 अक्षर हैं जिनमें 'E' 2 बार आया है। कुल विन्यास = 6! / 2! = 720 / 2 = 360।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "Two numbers are in the ratio 3 : 4. If their LCM is 84, what is the greater of the two numbers?",
        "question_hi": "दो संख्याएं 3 : 4 के अनुपात में हैं। यदि उनका LCM 84 है, तो दोनों में से बड़ी संख्या क्या है?",
        "options": [
            "28",
            "21",
            "32",
            "24"
        ],
        "options_hi": [
            "28",
            "21",
            "32",
            "24"
        ],
        "correctAnswer": "A",
        "explanation": "Let numbers be 3x and 4x. LCM = 12x = 84 => x = 7. Greater number = 4x = 4 * 7 = 28.",
        "explanation_hi": "माना संख्याएं 3x और 4x हैं। LCM = 12x = 84 => x = 7। बड़ी संख्या = 4 * 7 = 28।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "A tap can fill an empty pool in 8 hours. Due to a leak in the bottom, it takes 10 hours to fill the pool. In how many hours will the leak alone empty a full pool?",
        "question_hi": "एक नल किसी खाली हौज को 8 घंटे में भर सकता है। तली में रिसाव (छेद) होने के कारण इसे भरने में 10 घंटे लगते हैं। पूरा भरा हौज रिसाव द्वारा अकेले कितने घंटे में खाली हो जाएगा?",
        "options": [
            "40 hours",
            "30 hours",
            "50 hours",
            "45 hours"
        ],
        "options_hi": [
            "40 घंटे",
            "30 घंटे",
            "50 घंटे",
            "45 घंटे"
        ],
        "correctAnswer": "A",
        "explanation": "Pool capacity = LCM(8, 10) = 40 units. Tap rate = 5 units/hr. Net rate with leak = 4 units/hr. Leak emptying rate = 5 - 4 = 1 unit/hr. Time to empty = 40 / 1 = 40 hours.",
        "explanation_hi": "कुल क्षमता = 40 इकाई। नल की गति = 5 इकाई/घंटा। नल + रिसाव = 4 इकाई/घंटा। रिसाव की खाली करने की दर = 1 इकाई/घंटा। खाली होने का समय = 40 घंटे।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "If 1st January 2024 was a Monday, what day of the week was 31st December 2024 (knowing 2024 is a leap year)?",
        "question_hi": "यदि 1 जनवरी 2024 को सोमवार था, तो 31 दिसंबर 2024 को सप्ताह का कौन सा दिन होगा (यह जानते हुए कि 2024 एक लीप वर्ष है)?",
        "options": [
            "Tuesday",
            "Monday",
            "Wednesday",
            "Sunday"
        ],
        "options_hi": [
            "मंगलवार",
            "सोमवार",
            "बुधवार",
            "रविवार"
        ],
        "correctAnswer": "A",
        "explanation": "In an ordinary year (365 days), the first and last days of the year are the same. In a leap year (366 days, 2 odd days), the year ends on the day AFTER it started. Since it started on Monday, it ends on Tuesday.",
        "explanation_hi": "एक लीप वर्ष (366 दिन) जिस दिन शुरू होता है, उससे अगले दिन समाप्त होता है। 1 जनवरी को सोमवार था, अतः 31 दिसंबर को मंगलवार होगा।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "Complete the analogy: Doctor : Stethoscope :: Sculptor : ?",
        "question_hi": "सादृश्यता पूर्ण कीजिए: चिकित्सक : स्टेथोस्कोप :: मूर्तिकार : ?",
        "options": [
            "Chisel (छेनी)",
            "Pen",
            "Anvil",
            "Telescope"
        ],
        "options_hi": [
            "छेनी (Chisel)",
            "कलम",
            "निहाई",
            "दूरबीन"
        ],
        "correctAnswer": "A",
        "explanation": "A stethoscope is the primary diagnostic instrument of a doctor; a chisel is the primary sculpting tool of a sculptor.",
        "explanation_hi": "स्टेथोस्कोप डॉक्टर का प्रमुख उपकरण है, उसी प्रकार छेनी (Chisel) मूर्तिकार का प्रमुख औजार है।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "In a row of boys facing North, A is 13th from the left and B is 17th from the right. If they interchange their positions, A becomes 21st from the left. How many boys are there in the row?",
        "question_hi": "उत्तर की ओर उन्मुख लड़कों की एक पंक्ति में, A बाएं से 13वां और B दाएं से 17वां है। यदि वे अपना स्थान आपस में बदल लेते हैं, तो A बाएं से 21वां हो जाता है। पंक्ति में कुल कितने लड़के हैं?",
        "options": [
            "37",
            "36",
            "38",
            "39"
        ],
        "options_hi": [
            "37",
            "36",
            "38",
            "39"
        ],
        "correctAnswer": "A",
        "explanation": "A takes B's spot, which was 17th from the right. Now A is also 21st from the left. Total boys = (Left + Right - 1) = (21 + 17 - 1) = 37.",
        "explanation_hi": "स्थान परिवर्तन के बाद A, B के स्थान पर आता है जो दाएं से 17वां था। अब A बाएं से 21वां है। कुल लड़के = 21 + 17 - 1 = 37।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "Find the odd one out from the following pair of words: (A) Sword : Warrior, (B) Scalpel : Surgeon, (C) Chisel : Carpenter, (D) Author : Library",
        "question_hi": "निम्नलिखित शब्द-युग्मों में से असंगत का चयन कीजिए: (A) तलवार : योद्धा, (B) स्केलपेल : सर्जन, (C) छेनी : बढ़ई, (D) लेखक : पुस्तकालय",
        "options": [
            "Author : Library (all others are Tool : Professional relations)",
            "Sword : Warrior",
            "Scalpel : Surgeon",
            "Chisel : Carpenter"
        ],
        "options_hi": [
            "लेखक : पुस्तकालय (अन्य सभी उपकरण : पेशेवर का संबंध दर्शाते हैं)",
            "तलवार : योद्धा",
            "स्केलपेल : सर्जन",
            "छेनी : बढ़ई"
        ],
        "correctAnswer": "A",
        "explanation": "Sword, scalpel, and chisel are working tools used by warrior, surgeon, and carpenter respectively. A library is a place where books reside, not a physical hand-tool used by an author.",
        "explanation_hi": "तलवार, स्केलपेल और छेनी क्रमशः योद्धा, सर्जन और बढ़ई के औजार हैं। पुस्तकालय लेखक का औजार नहीं, बल्कि एक स्थान है।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "If '+' means multiply, '-' means divide, '×' means add, and '÷' means subtract, what is the value of: 20 + 5 - 10 × 4 ÷ 2?",
        "question_hi": "यदि '+' का अर्थ गुणा, '-' का अर्थ भाग, '×' का अर्थ जोड़ और '÷' का अर्थ घटाव है, तो व्यंजक: 20 + 5 - 10 × 4 ÷ 2 का मान क्या होगा?",
        "options": [
            "12",
            "10",
            "14",
            "8"
        ],
        "options_hi": [
            "12",
            "10",
            "14",
            "8"
        ],
        "correctAnswer": "A",
        "explanation": "Substitute operators: 20 * 5 / 10 + 4 - 2. Following BODMAS: 20 * 5 = 100; 100 / 10 = 10; 10 + 4 = 14; 14 - 2 = 12.",
        "explanation_hi": "चिह्नों को बदलने पर: 20 * 5 / 10 + 4 - 2 = 100 / 10 + 4 - 2 = 10 + 4 - 2 = 12।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "A clock gains 5 seconds every 3 minutes. It was set right at 7:00 AM. What time will it show at 7:00 PM on the same day?",
        "question_hi": "एक घड़ी प्रत्येक 3 मिनट में 5 सेकंड तेज हो जाती है। इसे सुबह 7:00 बजे सही समय पर सेट किया गया था। उसी दिन शाम 7:00 बजे यह क्या समय दिखाएगी?",
        "options": [
            "7:20 PM",
            "7:15 PM",
            "7:25 PM",
            "7:10 PM"
        ],
        "options_hi": [
            "शाम 7:20 बजे",
            "शाम 7:15 बजे",
            "शाम 7:25 बजे",
            "शाम 7:10 बजे"
        ],
        "correctAnswer": "A",
        "explanation": "From 7 AM to 7 PM is 12 hours = 720 minutes. Number of 3-minute intervals = 720 / 3 = 240 intervals. Seconds gained = 240 * 5 = 1200 seconds = 20 minutes. Time shown = 7:20 PM.",
        "explanation_hi": "सुबह 7 से शाम 7 तक = 12 घंटे = 720 मिनट। 3 मिनट के अंतराल = 720/3 = 240। बढ़ा हुआ समय = 240 * 5 = 1200 सेकंड = 20 मिनट। घड़ी दिखाएगी = 7:20 PM।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "If WATER is coded as 12345 and SHIRT is coded as 67859, how is TEARS coded?",
        "question_hi": "यदि WATER को 12345 और SHIRT को 67859 के रूप में लिखा जाता है, तो TEARS को कैसे लिखा जाएगा?",
        "options": [
            "94256",
            "94258",
            "54256",
            "92456"
        ],
        "options_hi": [
            "94256",
            "94258",
            "54256",
            "92456"
        ],
        "correctAnswer": "A",
        "explanation": "From WATER: W=1, A=2, T=3/9? Notice: In SHIRT: T=9, R=5. In WATER: E=4, R=5, A=2. So T=9, E=4, A=2, R=5, S=6. TEARS = 94256.",
        "explanation_hi": "दिए गए कूट से: T=9, E=4, A=2, R=5, S=6। अतः TEARS का कूट '94256' होगा।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "Statements: All cats are animals. All animals are mammals. Which conclusion logically follows?",
        "question_hi": "कथन: सभी बिल्लियां जानवर हैं। सभी जानवर स्तनधारी हैं। कौन सा निष्कर्ष तार्किक रूप से निकलता है?",
        "options": [
            "All cats are mammals",
            "All mammals are cats",
            "No mammal is an animal",
            "Some cats are not mammals"
        ],
        "options_hi": [
            "सभी बिल्लियां स्तनधारी हैं",
            "सभी स्तनधारी बिल्लियां हैं",
            "कोई स्तनधारी जानवर नहीं है",
            "कुछ बिल्लियां स्तनधारी नहीं हैं"
        ],
        "correctAnswer": "A",
        "explanation": "Universal affirmative syllogism: Cats ⊆ Animals and Animals ⊆ Mammals. Transitivity guarantees Cats ⊆ Mammals ('All cats are mammals').",
        "explanation_hi": "पारगमन (Transitivity) नियम: बिल्लियां ⊆ जानवर और जानवर ⊆ स्तनधारी। अतः 'सभी बिल्लियां स्तनधारी हैं' निश्चित रूप से सत्य है।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "Find the missing number in the series: 1, 8, 27, 64, 125, ?",
        "question_hi": "शृंखला में लुप्त संख्या ज्ञात कीजिए: 1, 8, 27, 64, 125, ?",
        "options": [
            "216",
            "256",
            "343",
            "196"
        ],
        "options_hi": [
            "216",
            "256",
            "343",
            "196"
        ],
        "correctAnswer": "A",
        "explanation": "The terms are cubes of consecutive natural numbers: 1^3=1, 2^3=8, 3^3=27, 4^3=64, 5^3=125, 6^3=216.",
        "explanation_hi": "क्रमागत संख्याओं के घन: 1³, 2³, 3³, 4³, 5³, अगला पद 6³ = 216 है।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "A sum of ₹1,600 gives a simple interest of ₹252 in 2 years and 4 months. What is the annual rate of interest?",
        "question_hi": "₹1,600 की धनराशि पर 2 वर्ष और 4 महीने में ₹252 का साधारण ब्याज प्राप्त होता है। वार्षिक ब्याज दर क्या है?",
        "options": [
            "6.75%",
            "6%",
            "7%",
            "7.5%"
        ],
        "options_hi": [
            "6.75%",
            "6%",
            "7%",
            "7.5%"
        ],
        "correctAnswer": "A",
        "explanation": "Time T = 2 years + 4/12 years = 2 + 1/3 = 7/3 years. Formula: R = (SI * 100) / (P * T) = (252 * 100) / (1600 * 7/3) = 25200 / (11200 / 3) = 25200 * 3 / 11200 = 756 / 112 = 6.75%.",
        "explanation_hi": "समय = 2 वर्ष + 4/12 वर्ष = 7/3 वर्ष। दर = (ब्याज * 100) / (मूलधन * समय) = (252 * 100) / (1600 * 7/3) = 6.75%।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "If 20% of (A + B) = 50% of (A - B), then what is the ratio of A : B?",
        "question_hi": "यदि (A + B) का 20% = (A - B) का 50% है, तो A : B का अनुपात क्या होगा?",
        "options": [
            "7 : 3",
            "3 : 7",
            "5 : 2",
            "2 : 5"
        ],
        "options_hi": [
            "7 : 3",
            "3 : 7",
            "5 : 2",
            "2 : 5"
        ],
        "correctAnswer": "A",
        "explanation": "20*(A + B) = 50*(A - B) => 2A + 2B = 5A - 5B => 2B + 5B = 5A - 2A => 7B = 3A => A/B = 7/3 => A : B = 7 : 3.",
        "explanation_hi": "2(A + B) = 5(A - B) => 2A + 2B = 5A - 5B => 7B = 3A => A : B = 7 : 3।"
    },
    {
        "section": "Other Skills",
        "topic": "Mathematical Aptitude",
        "topic_hi": "गणितीय योग्यता",
        "question": "The average weight of 8 persons increases by 2.5 kg when a new person replaces one of them weighing 65 kg. What is the weight of the new person?",
        "question_hi": "8 व्यक्तियों का औसत वजन 2.5 किग्रा बढ़ जाता है जब 65 किग्रा वजन वाले एक व्यक्ति के स्थान पर एक नया व्यक्ति आ जाता है। नए व्यक्ति का वजन क्या है?",
        "options": [
            "85 kg",
            "80 kg",
            "75 kg",
            "90 kg"
        ],
        "options_hi": [
            "85 किग्रा",
            "80 किग्रा",
            "75 किग्रा",
            "90 किग्रा"
        ],
        "correctAnswer": "A",
        "explanation": "Total increase in weight = 8 * 2.5 = 20 kg. Weight of new person = Replaced weight + Total increase = 65 + 20 = 85 kg.",
        "explanation_hi": "कुल वजन में वृद्धि = 8 * 2.5 = 20 किग्रा। नए व्यक्ति का वजन = 65 + 20 = 85 किग्रा।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "Which of the following years was a Leap Year?",
        "question_hi": "निम्नलिखित में से कौन सा वर्ष एक लीप वर्ष (अधिवर्ष) था?",
        "options": [
            "2000 (divisible by 400 for century years)",
            "1900",
            "1800",
            "2100"
        ],
        "options_hi": [
            "2000 (शताब्दी वर्ष 400 से विभाज्य)",
            "1900",
            "1800",
            "2100"
        ],
        "correctAnswer": "A",
        "explanation": "A century year is a leap year ONLY if it is divisible by 400. 2000 / 400 = 5 (leap year). 1900, 1800, and 2100 are not divisible by 400.",
        "explanation_hi": "शताब्दी वर्ष तभी लीप वर्ष होता है जब वह 400 से पूर्णतः विभाज्य हो। 2000, 400 से विभाज्य है, जबकि 1900, 1800 और 2100 नहीं।"
    },
    {
        "section": "Other Skills",
        "topic": "Logical Reasoning",
        "topic_hi": "तार्किक क्षमता",
        "question": "Introducing a boy, a girl said: 'He is the son of the daughter of the father of my uncle.' How is the boy related to the girl?",
        "question_hi": "एक लड़के का परिचय कराते हुए एक लड़की ने कहा: 'वह मेरे चाचा के पिता की बेटी का बेटा है।' वह लड़का उस लड़की से किस प्रकार संबंधित है?",
        "options": [
            "Cousin (फुफेरा भाई)",
            "Brother",
            "Nephew",
            "Uncle"
        ],
        "options_hi": [
            "कजिन (फुफेरा भाई / ममेरा भाई)",
            "सगा भाई",
            "भतीजा",
            "चाचा"
        ],
        "correctAnswer": "A",
        "explanation": "'Father of my uncle' = Grandfather. 'Daughter of grandfather' = Aunt (Bua) or Mother. 'Son of aunt' = Cousin.",
        "explanation_hi": "लड़की के चाचा के पिता = लड़की के दादाजी। दादाजी की बेटी = लड़की की बुआ। बुआ का बेटा = फुफेरा भाई (Cousin)।"
    }
]
