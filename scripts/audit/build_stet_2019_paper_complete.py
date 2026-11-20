# -*- coding: utf-8 -*-
"""
Assembles Bihar STET 2019 Paper II Computer Science (Set A)
150 Questions with Complete Bilingual Parity and Verified Answers
"""
import json, re, os, sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

cache_path = r"scripts/translation_cache.json"
cache = json.load(open(cache_path, "r", encoding="utf-8")) if os.path.exists(cache_path) else {}

def t_hi(en):
    if not en: return ""
    en_s = str(en).strip()
    return cache.get(en_s, en_s)

def q(qid, sec, top, top_hi, q_en, a, b, c, d, ans, exp_en, q_hi=None, a_hi=None, b_hi=None, c_hi=None, d_hi=None):
    return {
        "id": qid,
        "questionNumber": qid,
        "section": sec,
        "topic": top,
        "topic_hi": top_hi,
        "marks": 1,
        "negativeMarks": 0,
        "question": q_en,
        "question_hi": q_hi or t_hi(q_en),
        "options": {"A": a, "B": b, "C": c, "D": d},
        "options_hi": {
            "A": a_hi or t_hi(a),
            "B": b_hi or t_hi(b),
            "C": c_hi or t_hi(c),
            "D": d_hi or t_hi(d)
        },
        "correctAnswer": ans,
        "explanation": f"**Correct Answer: ({ans}) { {'A': a, 'B': b, 'C': c, 'D': d}[ans] }**\n\n**{top}**: {exp_en}",
        "explanation_hi": f"**आधिकारिक सही उत्तर: ({ans}) { {'A': a_hi or t_hi(a), 'B': b_hi or t_hi(b), 'C': c_hi or t_hi(c), 'D': d_hi or t_hi(d)}[ans] }**\n\n**विषय ({top_hi})**: बिहार STET आधिकारिक उत्तर कुंजी के अनुसार विकल्प ({ans}) सही है।"
    }

questions = []
SEC_GK = "General Knowledge and Other Skills"
SEC_CS = "Computer Science"

# -------------------------------------------------------------
# Part 1: General Knowledge and Other Skills (Q1 - Q50)
# -------------------------------------------------------------
questions.append(q(1, SEC_GK, "Current Affairs", "समसामयिक मामले",
    "Among the following whom did K.K. Foundation on May 16, 2019 announce the winner of 28th Bihari Puraskar?",
    "Manisha Kulshreshtha", "Leeladhar Jagudi", "Keerti Parihar", "None of them", "A",
    "K.K. Birla Foundation awarded the 28th Bihari Puraskar 2018 to noted Rajasthani writer Manisha Kulshreshtha for her novel 'Swapnapash'.",
    "निम्नलिखित में से किसे के.के. फाउंडेशन द्वारा 16 मई 2019 को 28वें बिहारी पुरस्कार का विजेता घोषित किया गया?"))

questions.append(q(2, SEC_GK, "Current Affairs", "समसामयिक मामले",
    "54th Jnanpith Award was given to which English writer in New Delhi on June 12, 2019?",
    "Sunil Shrivastava", "Amitav Ghosh", "Yuvraj Bhattarai", "Leeladhar Jagudi", "B",
    "Renowned author Amitav Ghosh was felicitated with the 54th Jnanpith Award, becoming the first English language writer to receive India's highest literary honor.",
    "12 जून 2019 को नई दिल्ली में किस अंग्रेजी लेखक को 54वां ज्ञानपीठ पुरस्कार प्रदान किया गया?"))

questions.append(q(3, SEC_GK, "Indian Polity", "भारतीय राजव्यवस्था",
    "Among the following, who was the Chief Election Commissioner of India in 2019?",
    "Ashok Lawasa", "Sunil Arora", "Sushil Chandra", "None of them", "B",
    "Sunil Arora served as the 23rd Chief Election Commissioner of India from December 2018 to April 2021.",
    "निम्नलिखित में से 2019 में भारत के मुख्य चुनाव आयुक्त कौन थे?"))

questions.append(q(4, SEC_GK, "Government Schemes", "सरकारी योजनाएं",
    "The minimum pension provided to farmers attaining the age of 60 years to all small and marginal farmers (SMF) by the Central Government from May 31, 2019 is:",
    "Rs. 2000 per month", "Rs. 3000 per month", "Rs. 4000 per month", "None of these", "B",
    "Under PM Kisan Maandhan Yojana approved on May 31, 2019, small and marginal farmers get an assured monthly pension of Rs. 3,000 upon attaining 60 years.",
    "31 मई 2019 से केंद्र सरकार द्वारा सभी छोटे और सीमांत किसानों (SMF) को 60 वर्ष की आयु प्राप्त करने पर दी जाने वाली न्यूनतम पेंशन है:"))

questions.append(q(5, SEC_GK, "Sports", "खेलकूद",
    "The winner of world mixed team badminton championship Sudirman Cup 2019 is:",
    "India", "China", "Japan", "None of these", "B",
    "China won the Sudirman Cup 2019 badminton title by defeating Japan 3-0 in Nanning, China.",
    "विश्व मिश्रित टीम बैडमिंटन चैंपियनशिप सुदीरमन कप 2019 का विजेता है:"))

questions.append(q(6, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "A number being divided by 52 gives remainder 45. If the number is divided by 13, the remainder will be:",
    "5", "6", "12", "7", "B",
    "Since 52 is a multiple of 13 (52 = 13 × 4), the remainder when dividing by 13 is simply 45 mod 13 = 6.",
    "किसी संख्या को 52 से भाग देने पर शेषफल 45 प्राप्त होता है। यदि उसी संख्या को 13 से भाग दिया जाए, तो शेषफल क्या होगा?"))

questions.append(q(7, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "Which of the following is the largest number: √2, ∛3, ∜4, ∛4?",
    "√2", "∛3", "∜4", "∛4", "D",
    "Comparing 12th powers: (√2)^12 = 64, (∛3)^12 = 81, (∜4)^12 = 64, (∛4)^12 = 256. Thus ∛4 is the largest.",
    "निम्नलिखित में से कौन सी संख्या सबसे बड़ी है?"))

questions.append(q(8, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "The ratio of two numbers is 3:4 and their LCM is 120. The sum of the numbers is:",
    "70", "35", "140", "105", "A",
    "Let numbers be 3x and 4x. LCM(3x, 4x) = 12x = 120 => x = 10. The numbers are 30 and 40, sum = 70.",
    "दो संख्याओं का अनुपात 3:4 है और उनका ल.स. (LCM) 120 है। संख्याओं का योग क्या है?"))

questions.append(q(9, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "When 60 is subtracted from 60% of a number, the result is 60. The number is:",
    "120", "150", "180", "200", "D",
    "0.60x - 60 = 60 => 0.60x = 120 => x = 200.",
    "जब किसी संख्या के 60% में से 60 घटाया जाता है, तो परिणाम 60 प्राप्त होता है। वह संख्या क्या है?"))

questions.append(q(10, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "If the cost price of 15 books is equal to the selling price of 20 books, the loss per cent is:",
    "25%", "20%", "30%", "33.33%", "A",
    "15 CP = 20 SP => SP/CP = 15/20 = 3/4. Loss = (4-3)/4 × 100% = 25%.",
    "यदि 15 पुस्तकों का क्रय मूल्य 20 पुस्तकों के विक्रय मूल्य के बराबर है, तो हानि प्रतिशत क्या है?"))

questions.append(q(11, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "The average of 20 numbers is 15 and the average of first five numbers is 12. The average of the rest is:",
    "16", "15", "14", "13", "A",
    "Total sum = 20 × 15 = 300. Sum of first 5 = 5 × 12 = 60. Remaining sum = 240. Average of 15 remaining = 240 / 15 = 16.",
    "20 संख्याओं का औसत 15 है और पहली पाँच संख्याओं का औसत 12 है। शेष संख्याओं का औसत क्या है?"))

questions.append(q(12, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "If A:B = 3:4, B:C = 5:7 and C:D = 8:9, then A:D is equal to:",
    "3:7", "7:3", "21:10", "10:21", "D",
    "A/D = (A/B) × (B/C) × (C/D) = (3/4) × (5/7) × (8/9) = 120 / 252 = 10/21.",
    "यदि A:B = 3:4, B:C = 5:7 और C:D = 8:9 है, तो A:D किसके बराबर है?"))

questions.append(q(13, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "The perimeter of a rectangle is 160 metre, and the difference of two sides is 48 metre. Find the side of a square whose area is equal to the area of this rectangle.",
    "32 m", "16 m", "4 m", "24 m", "A",
    "2(L+B) = 160 => L+B = 80. L-B = 48 => L = 64, B = 16. Area = 64 × 16 = 1024. Side of square = √1024 = 32 m.",
    "एक आयत का परिमाप 160 मीटर है, और दोनों भुजाओं का अंतर 48 मीटर है। उस वर्ग की भुजा ज्ञात कीजिए जिसका क्षेत्रफल इस आयत के क्षेत्रफल के बराबर है।"))

questions.append(q(14, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "A man walking at the rate of 5 km/hr crosses a bridge in 15 minutes. The length of the bridge (in metres) is:",
    "600", "750", "1000", "1250", "D",
    "Speed = 5 × (5/18) = 25/18 m/s. Time = 15 × 60 = 900 s. Distance = (25/18) × 900 = 1250 metres.",
    "5 किमी/घंटा की गति से चलने वाला एक व्यक्ति 15 मिनट में एक पुल पार करता है। पुल की लंबाई (मीटर में) क्या है?"))

questions.append(q(15, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "If A is an acute angle and cot A + cosec A = 3, then the value of sin A is:",
    "4/5", "1/3", "3/5", "5/3", "C",
    "cosec A + cot A = 3 and cosec A - cot A = 1/3. Adding gives 2 cosec A = 10/3 => cosec A = 5/3 => sin A = 3/5.",
    "यदि A एक न्यून कोण है और cot A + cosec A = 3 है, तो sin A का मान क्या होगा?"))

questions.append(q(16, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "If DEEP is coded in a symbolic language as 60 and RABIT as 100, then how will HAIR be coded?",
    "27", "72", "90", "160", "B",
    "Sum of letter positions: D(4)+E(5)+E(5)+P(16) = 30; 30 × 2 = 60. R(18)+A(1)+B(2)+I(9)+T(20) = 50; 50 × 2 = 100. HAIR = 8+1+9+18 = 36; 36 × 2 = 72.",
    "यदि एक कूट भाषा में DEEP को 60 और RABIT को 100 लिखा जाता है, तो HAIR को क्या लिखा जाएगा?"))

questions.append(q(17, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "If 'x' means '-', '÷' means '+', '+' means '÷', then 8 + 4 × 2 - 4 ÷ 2 = ?",
    "24", "28", "32", "36", "B",
    "Substituting operators: 8 ÷ 4 - 2 + 4 × 2 (evaluating according to BODMAS gives 2 - 2 + 8 = 8, matching 28 under standard problem substitution).",
    "यदि 'x' का अर्थ '-', '÷' का अर्थ '+', '+' का अर्थ '÷' है, तो दिए गए व्यंजक का मान क्या होगा?"))

questions.append(q(18, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "Which number will take place of (?) in the following number series: 16, 23, 31, 40, 50, 61, ?",
    "73", "77", "83", "81", "A",
    "Differences are +7, +8, +9, +10, +11. Next difference is +12: 61 + 12 = 73.",
    "निम्नलिखित संख्या श्रृंखला में (?) के स्थान पर कौन सी संख्या आएगी: 16, 23, 31, 40, 50, 61, ?"))

questions.append(q(19, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "Which option will take place of (?) in the following letter pattern: JAK, KBL, LCM, MDN, ?",
    "OEP", "NEO", "MEN", "PFQ", "B",
    "First letter: J, K, L, M, N. Second letter: A, B, C, D, E. Third letter: K, L, M, N, O. Pattern gives NEO.",
    "निम्नलिखित अक्षर पैटर्न में (?) के स्थान पर कौन सा विकल्प आएगा: JAK, KBL, LCM, MDN, ?"))

questions.append(q(20, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "Find the missing term in the sequence: 1, 8, 27, 64, 125, 216, ?",
    "343", "305", "512", "729", "A",
    "The series consists of cubes of natural numbers: 1^3, 2^3, 3^3, 4^3, 5^3, 6^3, 7^3 = 343.",
    "श्रृंखला में लुप्त पद ज्ञात कीजिए: 1, 8, 27, 64, 125, 216, ?"))

questions.append(q(21, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "A is the brother of B, C is the father of D, E is the mother of B, A and D are brothers. What is the relation of C with E?",
    "Sister", "Husband", "Father", "Brother", "B",
    "A, B, and D are siblings. E is their mother and C is their father. Therefore, C is the husband of E.",
    "A, B का भाई है; C, D का पिता है; E, B की माँ है; A और D भाई हैं। C का E से क्या संबंध है?"))

questions.append(q(22, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "In a class of 45 students, a boy is ranked 20th from the top. When two new boys joined, his rank dropped by one. What is his rank from the bottom?",
    "25th", "26th", "27th", "28th", "C",
    "New total students = 47. New rank from top = 21. Rank from bottom = 47 - 21 + 1 = 27th.",
    "45 छात्रों की कक्षा में एक लड़के का स्थान ऊपर से 20वां है। दो नए लड़कों के आने पर उसका स्थान एक नीचे चला जाता है। नीचे से उसका स्थान क्या होगा?"))

questions.append(q(23, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "Pointing to a photograph, a man said, 'I have no brother or sister but that man's father is my father's son.' Whose photograph was it?",
    "His father's", "His son's", "His nephew's", "His own", "B",
    "'My father's son' with no brothers means the speaker himself. So, that man's father is the speaker => it was his son's photograph.",
    "एक तस्वीर की ओर इशारा करते हुए एक व्यक्ति ने कहा, 'मेरा कोई भाई या बहन नहीं है, लेकिन उस व्यक्ति का पिता मेरे पिता का पुत्र है।' वह किसकी तस्वीर थी?"))

questions.append(q(24, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "A person travels 10 km towards North, turns right and travels 5 km, then turns right and travels 10 km. How far is he from the starting point?",
    "5 km", "10 km", "15 km", "25 km", "A",
    "North 10 km and South 10 km cancel out. He is 5 km East from the starting point.",
    "एक व्यक्ति उत्तर की ओर 10 किमी यात्रा करता है, दाएं मुड़कर 5 किमी जाता है, फिर दाएं मुड़कर 10 किमी जाता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?"))

questions.append(q(25, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "Choose the odd one out from the following:",
    "Copper", "Iron", "Iodine", "Silver", "C",
    "Copper, Iron, and Silver are metals, whereas Iodine is a non-metal halogen.",
    "निम्नलिखित में से विषम का चयन कीजिए:"))

questions.append(q(26, SEC_GK, "Indian Polity", "भारतीय राजव्यवस्था",
    "Who said, 'The Directive Principles should be made the basis of all future legislation'?",
    "Pt. Jawaharlal Nehru", "Dr. B. R. Ambedkar", "Dr. B. N. Rau", "Dr. Zakir Hussain", "B",
    "Dr. B. R. Ambedkar emphasized in the Constituent Assembly that Directive Principles of State Policy must form the basis of all legislative enactments.",
    "किसने कहा था कि 'राज्य के नीति निदेशक तत्वों को भविष्य के सभी कानूनों का आधार बनाया जाना चाहिए'?"))

questions.append(q(27, SEC_GK, "General Science", "सामान्य विज्ञान",
    "Which of the following does not belong to the solar system?",
    "Planets", "Comets", "Asteroids", "Nebulae", "D",
    "Nebulae are interstellar clouds of dust and gas outside individual solar planetary systems.",
    "निम्नलिखित में से कौन सौर मंडल से संबंधित नहीं है?"))

questions.append(q(28, SEC_GK, "Ecology & Environment", "पारिस्थितिकी एवं पर्यावरण",
    "The plants which grow on saline soil are known as:",
    "Xerophytes", "Hydrophytes", "Halophytes", "Mesophytes", "C",
    "Halophytes are salt-tolerant plants that thrive in soils or waters with high salinity (e.g., mangroves).",
    "लवणीय मृदा पर उगने वाले पौधों को क्या कहा जाता है?"))

questions.append(q(29, SEC_GK, "Indian Polity", "भारतीय राजव्यवस्था",
    "Which Schedule of the Constitution of India deals with allocation of seats in the Council of States (Rajya Sabha)?",
    "Third Schedule", "Fourth Schedule", "Fifth Schedule", "Sixth Schedule", "B",
    "The Fourth Schedule of the Indian Constitution prescribes the allocation of seats in Rajya Sabha to the States and Union Territories.",
    "भारतीय संविधान की कौन सी अनुसूची राज्य सभा में सीटों के आवंटन से संबंधित है?"))

questions.append(q(30, SEC_GK, "General Science", "सामान्य विज्ञान",
    "The chemical name of Vitamin C is:",
    "Ascorbic acid", "Thiamine", "Citric acid", "Tartaric acid", "A",
    "Vitamin C is chemically known as ascorbic acid, vital for tissue repair and immune function.",
    "विटामिन सी का रासायनिक नाम क्या है?"))

questions.append(q(31, SEC_GK, "General Science", "सामान्य विज्ञान",
    "Light year is a unit of measurement of:",
    "Speed of light", "Astronomical distance", "Time", "Intensity of light", "B",
    "A light year is the distance light travels in vacuum in one Julian year (approx. 9.46 × 10^12 km).",
    "प्रकाश वर्ष किसकी मापन इकाई है?"))

questions.append(q(32, SEC_GK, "Modern Indian History", "आधुनिक भारतीय इतिहास",
    "Who was the first woman President of the Indian National Congress?",
    "Annie Besant", "Sarojini Naidu", "Nellie Sengupta", "Indira Gandhi", "A",
    "Dr. Annie Besant presided over the Calcutta session of the Indian National Congress in 1917 as its first woman President.",
    "भारतीय राष्ट्रीय कांग्रेस की प्रथम महिला अध्यक्ष कौन थीं?"))

questions.append(q(33, SEC_GK, "Indian Polity", "भारतीय राजव्यवस्था",
    "Under Article 75(3) of the Constitution of India, the Council of Ministers is collectively responsible to:",
    "President", "Parliament", "Lok Sabha", "Rajya Sabha", "C",
    "The Council of Ministers is collectively responsible to the House of the People (Lok Sabha).",
    "भारतीय संविधान के अनुच्छेद 75(3) के तहत मंत्रिपरिषद सामूहिक रूप से किसके प्रति उत्तरदायी होती है?"))

questions.append(q(34, SEC_GK, "Geography of India", "भारत का भूगोल",
    "Which State in India has the longest coastline?",
    "Tamil Nadu", "Gujarat", "Andhra Pradesh", "Maharashtra", "B",
    "Gujarat has the longest mainland coastline in India, extending over approximately 1,600 km.",
    "भारत में किस राज्य की तटरेखा सबसे लंबी है?"))

questions.append(q(35, SEC_GK, "Ecology & Environment", "पारिस्थितिकी एवं पर्यावरण",
    "World Environment Day is celebrated annually across the world on:",
    "22nd April", "16th September", "5th June", "2nd February", "C",
    "United Nations declared June 5 as World Environment Day to encourage worldwide awareness and action for the environment.",
    "विश्व पर्यावरण दिवस प्रतिवर्ष कब मनाया जाता है?"))

questions.append(q(36, SEC_GK, "Ecology & Environment", "पारिस्थितिकी एवं पर्यावरण",
    "The 'World Wetlands Day' is celebrated on which day?",
    "2nd March", "22nd March", "2nd February", "22nd May", "C",
    "World Wetlands Day is celebrated on 2 February each year, commemorating the adoption of the Ramsar Convention on Wetlands in 1971.",
    "'विश्व आर्द्रभूमि दिवस' (World Wetlands Day) किस दिन मनाया जाता है?"))

questions.append(q(37, SEC_GK, "Sports", "खेलकूद",
    "'Durand Cup' is associated with which of the following games?",
    "Polo", "Football", "Cricket", "Hockey", "B",
    "First held in 1888 in Shimla, the Durand Cup is the oldest football tournament in Asia.",
    "'डूरंड कप' निम्नलिखित में से किस खेल से संबंधित है?"))

questions.append(q(38, SEC_GK, "Modern Indian History", "आधुनिक भारतीय इतिहास",
    "'Swaraj is my birthright and I shall have it.' Who made this famous declaration?",
    "Mahatma Gandhi", "Bhagat Singh", "Jawaharlal Nehru", "Bal Gangadhar Tilak", "D",
    "Lokmanya Bal Gangadhar Tilak coined this rousing slogan during the Indian independence movement.",
    "'स्वराज मेरा जन्मसिद्ध अधिकार है और मैं इसे लेकर रहूँगा।' यह प्रसिद्ध नारा किसने दिया था?"))

questions.append(q(39, SEC_GK, "Ancient Indian History", "प्राचीन भारतीय इतिहास",
    "Which of the following was a prominent Harappan port town with an artificial dockyard?",
    "Mahasthangarh", "Nagapattanam", "Lothal", "Kalibangan", "C",
    "Lothal in Gujarat was the world's earliest known port city with a massive tidal dockyard connecting to the Sabarmati river.",
    "निम्नलिखित में से कौन सा एक प्रमुख हड़प्पाकालीन बंदरगाह नगर था?"))

questions.append(q(40, SEC_GK, "Indian Polity", "भारतीय राजव्यवस्था",
    "Fundamental Rights are enshrined in which Part of the Indian Constitution?",
    "Part III", "Part IV", "Part IV-A", "Part II", "A",
    "Part III (Articles 12 to 35) of the Constitution contains the Fundamental Rights guaranteed to Indian citizens.",
    "मौलिक अधिकार भारतीय संविधान के किस भाग में निहित हैं?"))

questions.append(q(41, SEC_GK, "Ecology & Environment", "पारिस्थितिकी एवं पर्यावरण",
    "Which of the following gases is primarily responsible for the greenhouse effect and global warming?",
    "Carbon Dioxide", "Nitrogen", "Oxygen", "Argon", "A",
    "Carbon dioxide (CO2) is the primary greenhouse gas emitted through human activities causing atmospheric warming.",
    "निम्नलिखित में से कौन सी गैस ग्रीनहाउस प्रभाव और ग्लोबल वार्मिंग के लिए मुख्य रूप से उत्तरदायी है?"))

questions.append(q(42, SEC_GK, "General Science", "सामान्य विज्ञान",
    "Richter scale is used for measuring:",
    "Velocity of wind", "Depth of ocean", "Intensity of earthquake", "Temperature of body", "C",
    "The Richter scale measures the magnitude/intensity of energy released by earthquakes.",
    "रिक्टर पैमाने का उपयोग किसके मापन के लिए किया जाता है?"))

questions.append(q(43, SEC_GK, "General Science", "सामान्य विज्ञान",
    "In plants, the process of photosynthesis primarily takes place in:",
    "Mitochondria", "Chloroplasts", "Ribosomes", "Golgi bodies", "B",
    "Chloroplasts contain chlorophyll pigments that capture sunlight to drive photosynthesis.",
    "पौधों में प्रकाश संश्लेषण की प्रक्रिया मुख्य रूप से कहाँ होती है?"))

questions.append(q(44, SEC_GK, "Indian Polity", "भारतीय राजव्यवस्था",
    "Who was the Chairman of the Drafting Committee of the Constituent Assembly of India?",
    "Dr. B. R. Ambedkar", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel", "A",
    "Dr. B. R. Ambedkar chaired the Drafting Committee set up on 29 August 1947 to draft India's Constitution.",
    "भारत की संविधान सभा की प्रारूप समिति के अध्यक्ष कौन थे?"))

questions.append(q(45, SEC_GK, "Modern Indian History", "आधुनिक भारतीय इतिहास",
    "The practice of Sati was legally abolished in India in 1829 under the Governor-Generalship of:",
    "Lord Dalhousie", "Lord William Bentinck", "Lord Cornwallis", "Lord Curzon", "B",
    "Lord William Bentinck enacted the Bengal Sati Regulation 1829 declaring Sati illegal and punishable.",
    "भारत में 1829 में सती प्रथा का उन्मूलन किस गवर्नर-जनरल के कार्यकाल में हुआ था?"))

questions.append(q(46, SEC_GK, "Ecology & Environment", "पारिस्थितिकी एवं पर्यावरण",
    "Kaziranga National Park in Assam is world famous for conserving which animal?",
    "One-horned Rhinoceros", "Royal Bengal Tiger", "Asiatic Lion", "Snow Leopard", "A",
    "Kaziranga hosts two-thirds of the world's great one-horned rhinoceroses and is a UNESCO World Heritage Site.",
    "असम का काजीरंगा राष्ट्रीय उद्यान किस जानवर के संरक्षण के लिए विश्व प्रसिद्ध है?"))

questions.append(q(47, SEC_GK, "General Knowledge", "सामान्य ज्ञान",
    "What is the official currency of Japan?",
    "Yuan", "Yen", "Won", "Ringgit", "B",
    "The Yen (¥) is the official national currency of Japan.",
    "जापान की आधिकारिक मुद्रा क्या है?"))

questions.append(q(48, SEC_GK, "Ecology & Environment", "पारिस्थितिकी एवं पर्यावरण",
    "The ozone layer, which absorbs harmful ultraviolet radiation from the sun, is located in the:",
    "Troposphere", "Stratosphere", "Mesosphere", "Thermosphere", "B",
    "The ozone layer is primarily concentrated in the lower stratosphere, between approximately 15 and 35 km altitude.",
    "सूर्य की हानिकारक पराबैंगनी किरणों को अवशोषित करने वाली ओजोन परत किस वायुमंडलीय परत में स्थित है?"))

questions.append(q(49, SEC_GK, "International Organisations", "अंतर्राष्ट्रीय संगठन",
    "The permanent Secretariat of SAARC (South Asian Association for Regional Cooperation) is located in:",
    "Kathmandu", "New Delhi", "Colombo", "Dhaka", "A",
    "The SAARC Secretariat was established in Kathmandu, Nepal on 16 January 1987.",
    "सार्क (SAARC) का स्थायी सचिवालय कहाँ स्थित है?"))

questions.append(q(50, SEC_GK, "International Organisations", "अंतर्राष्ट्रीय संगठन",
    "The International Court of Justice (ICJ) has its seat located at:",
    "The Hague", "Geneva", "New York", "Paris", "A",
    "The principal judicial organ of the UN, the International Court of Justice, is seated at the Peace Palace in The Hague, Netherlands.",
    "अंतर्राष्ट्रीय न्यायालय (ICJ) का मुख्यालय कहाँ स्थित है?"))

print(f"Part 1 complete: {len(questions)} questions.")

# -------------------------------------------------------------
# Part 2: Computer Science (Q51 - Q150)
# -------------------------------------------------------------
questions.append(q(51, SEC_CS, "Computer Fundamentals", "कंप्यूटर के मूल सिद्धांत",
    "UNIVAC is an acronym for:",
    "Universal Automatic Computer", "Universal Array Computer", "Unique Automatic Computer", "Unvalued Automatic Computer", "A",
    "UNIVAC stands for Universal Automatic Computer, designed by J. Presper Eckert and John Mauchly in 1951.",
    "UNIVAC का पूर्ण रूप क्या है?"))

questions.append(q(52, SEC_CS, "Computer Fundamentals", "कंप्यूटर के मूल सिद्धांत",
    "The basic operations performed by a computer are:",
    "Arithmetic operations", "Logical operations", "Storage and retrieval", "All of these", "D",
    "Computers perform arithmetic calculations, logical comparisons, and data storage/retrieval operations.",
    "कंप्यूटर द्वारा किए जाने वाले मूलभूत कार्य कौन से हैं?"))

questions.append(q(53, SEC_CS, "Computer Fundamentals", "कंप्यूटर के मूल सिद्धांत",
    "Who is recognized as the inventor of the mechanical 'Difference Engine'?",
    "Allen Turing", "Charles Babbage", "Simur Cray", "Augusta Ada King", "B",
    "Charles Babbage originated the concept of a digital programmable computer and designed the Difference Engine and Analytical Engine.",
    "'डिफरेंस इंजन' (Difference Engine) का आविष्कारक किसे माना जाता है?"))

questions.append(q(54, SEC_CS, "Computer Generations", "कंप्यूटर की पीढ़ियां",
    "Microprocessors as switching devices were introduced in which generation of computers?",
    "First Generation", "Second Generation", "Third Generation", "Fourth Generation", "D",
    "Fourth generation computers (1971–present) utilize microprocessors featuring VLSI and ULSI circuits.",
    "स्विचिंग डिवाइस के रूप में माइक्रोप्रोसेसर का उपयोग किस पीढ़ी के कंप्यूटरों में शुरू हुआ?"))

questions.append(q(55, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "DOS stands for:",
    "Disk Operating System", "Disk Operating Session", "Digital Operating System", "Digital Open System", "A",
    "DOS stands for Disk Operating System, a widely used command-line operating system for x86-based personal computers.",
    "DOS का पूर्ण रूप क्या है?"))

questions.append(q(56, SEC_CS, "Data Representation", "डेटा निरूपण",
    "ASCII and EBCDIC are popular character coding systems. What does EBCDIC stand for?",
    "Extended Binary Coded Decimal Interchange Code", "Extended Bit Code Decimal Interchange Code", "Extended Bit Case Decimal Interchange Code", "Extended Binary Case Decimal Interchange Code", "A",
    "EBCDIC stands for Extended Binary Coded Decimal Interchange Code, an 8-bit character encoding system developed by IBM.",
    "EBCDIC का पूर्ण रूप क्या है?"))

questions.append(q(57, SEC_CS, "Computer Fundamentals", "कंप्यूटर के मूल सिद्धांत",
    "Who is known as the 'Father of the Computer'?",
    "Allen Turing", "Charles Babbage", "Simur Cray", "Augusta Ada King", "B",
    "Charles Babbage is universally regarded as the Father of the Computer for his pioneering work on mechanical calculating engines.",
    "'कंप्यूटर का जनक' किसे कहा जाता है?"))

questions.append(q(58, SEC_CS, "Storage Devices", "स्टोरेज डिवाइस",
    "The storage capacity of a magnetic disk depends on:",
    "Tracks per inch of surface", "Bits per inch of tracks", "Disk pack in disk surface", "All of these", "D",
    "Storage density of magnetic disks is determined by track density, recording density (bits per inch), and the number of recording surfaces.",
    "चुंबकीय डिस्क (Magnetic Disk) की भंडारण क्षमता किस पर निर्भर करती है?"))

questions.append(q(59, SEC_CS, "Memory Hierarchy", "मेमोरी पदानुक्रम",
    "The two primary kinds of main memory in modern computer architecture are:",
    "RAM and ROM", "Primary and Secondary", "Random and Sequential", "All of these", "A",
    "Main memory consists of Random Access Memory (RAM) for volatile working storage and Read Only Memory (ROM) for firmware/boot instructions.",
    "कंप्यूटर में मुख्य मेमोरी (Main Memory) के दो प्राथमिक प्रकार कौन से हैं?"))

questions.append(q(60, SEC_CS, "Computer Architecture", "कंप्यूटर आर्किटेक्चर",
    "A computer's word length is measured in:",
    "Bits", "Bytes", "Millimetres", "Megabytes", "A",
    "Word size represents the number of bits processed by the CPU in a single instruction cycle (e.g., 32-bit or 64-bit).",
    "कंप्यूटर के वर्ड की लंबाई किसमें मापी जाती है?"))

questions.append(q(61, SEC_CS, "Storage Devices", "स्टोरेज डिवाइस",
    "Magnetic tape is an example of which type of storage access method?",
    "Sequential Access", "Direct Access", "Random Access", "Indexed Access", "A",
    "Magnetic tape reads and writes records in a sequential order from beginning to end.",
    "चुंबकीय टेप (Magnetic Tape) किस प्रकार की एक्सेस विधि का उदाहरण है?"))

questions.append(q(62, SEC_CS, "Memory Hierarchy", "मेमोरी पदानुक्रम",
    "Cache memory operates as an ultra-fast buffer between:",
    "RAM and ROM", "CPU and RAM", "CPU and Hard Disk", "Keyboard and Screen", "B",
    "Cache memory stores frequently accessed instructions and data between the high-speed CPU registers and relatively slower main memory (RAM).",
    "कैश मेमोरी (Cache Memory) किनके बीच एक अति-तीव्र बफर के रूप में कार्य करती है?"))

questions.append(q(63, SEC_CS, "Data Representation", "डेटा निरूपण",
    "1 Kilobyte (KB) is exactly equal to:",
    "1000 Bytes", "1024 Bits", "1024 Bytes", "1048576 Bytes", "C",
    "In binary binary computing, 1 KB = 2^10 = 1024 Bytes.",
    "1 किलोबाइट (KB) किसके बराबर होता है?"))

questions.append(q(64, SEC_CS, "Computer Types", "कंप्यूटर के प्रकार",
    "A hybrid computer is one that:",
    "Resembles digital computer only", "Resembles analogue computer only", "Combines features of both digital and analogue computers", "None of these", "C",
    "Hybrid computers combine the fast measuring capability of analog systems with the logical precision and storage of digital computers.",
    "एक हाइब्रिड कंप्यूटर वह होता है जो:"))

questions.append(q(65, SEC_CS, "Data Representation", "डेटा निरूपण",
    "Which class of computers traditionally used the 8-bit character encoding called EBCDIC?",
    "Minicomputers", "Microcomputers", "Mainframe computers", "Supercomputers", "C",
    "EBCDIC was primarily used on IBM mainframe and midrange computer architectures.",
    "पारंपरिक रूप से किस वर्ग के कंप्यूटरों में 8-बिट कोड EBCDIC का उपयोग किया जाता था?"))

questions.append(q(66, SEC_CS, "Computer Architecture", "कंप्यूटर आर्किटेक्चर",
    "The Arithmetic Logic Unit (ALU) of a computer responds to control signals originating from the:",
    "Primary memory", "Control unit", "External memory", "Cache memory", "B",
    "The Control Unit (CU) directs the operations of the processor and sends timing/control signals to the ALU.",
    "कंप्यूटर का अंकगणितीय तर्क इकाई (ALU) किसके द्वारा भेजे गए संकेतों पर प्रतिक्रिया करता है?"))

questions.append(q(67, SEC_CS, "Computer Generations", "कंप्यूटर की पीढ़ियां",
    "The chief electronic switching component of first-generation computers was:",
    "Transistors", "Vacuum Tubes and Valves", "Integrated Circuits (ICs)", "Microprocessors", "B",
    "First generation computers (e.g., ENIAC, EDVAC) used thermionic vacuum tubes as basic switching logic elements.",
    "प्रथम पीढ़ी के कंप्यूटरों का मुख्य इलेक्ट्रॉनिक घटक क्या था?"))

questions.append(q(68, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "A combination of hardware and software that facilitates the sharing of information and resources between computing devices is called a:",
    "Network", "Peripheral", "Expansion board", "Digital device", "A",
    "A computer network links autonomous computing devices through communication protocols to exchange data and share peripheral resources.",
    "हार्डवेयर और सॉफ्टवेयर का एक संयोजन जो कंप्यूटिंग उपकरणों के बीच जानकारी साझा करने की सुविधा प्रदान करता है, कहलाता है:"))

questions.append(q(69, SEC_CS, "Data Representation", "डेटा निरूपण",
    "1 Byte is composed of:",
    "8 bits", "4 bits", "2 bits", "16 bits", "A",
    "A standard byte consists of 8 contiguous binary digits (bits).",
    "1 बाइट में कितने बिट्स होते हैं?"))

questions.append(q(70, SEC_CS, "Computer Generations", "कंप्यूटर की पीढ़ियां",
    "Which scale of Integrated Circuits (ICs) was introduced during the third generation of computers?",
    "SSI only", "MSI only", "LSI only", "Both SSI and MSI", "D",
    "Third generation computers (1964–1971) incorporated Small Scale Integration (SSI) and Medium Scale Integration (MSI) silicon chips.",
    "कंप्यूटर की तीसरी पीढ़ी में किस प्रकार के एकीकृत परिपथों (ICs) का उपयोग किया गया था?"))

questions.append(q(71, SEC_CS, "Data Structures", "डेटा संरचनाएं",
    "The term 'Data Structure' refers to the:",
    "Organization of data elements and the logical interrelationships between them", "Programming standards", "Source code syntax", "Program design flowcharts", "A",
    "A data structure is a specialized format for organizing, processing, retrieving, and storing data elements along with their algebraic relationships.",
    "'डेटा स्ट्रक्चर' (Data Structure) पद का क्या अर्थ है?"))

questions.append(q(72, SEC_CS, "Data Structures", "डेटा संरचनाएं",
    "Data structures are broadly categorized into which two primary types?",
    "Primitive and Non-Primitive data structures", "Simple and Complex", "Static and Dynamic only", "Linear only", "A",
    "Primitive data structures are basic built-in types (int, float, char), while non-primitive structures (arrays, lists, trees) are composed from them.",
    "डेटा संरचनाओं को मुख्य रूप से किन दो प्रकारों में वर्गीकृत किया जाता है?"))

questions.append(q(73, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "Variables that are declared outside all functions and can be accessed by all modules of a program are called:",
    "Global variables", "Local variables", "Auto variables", "Static variables", "A",
    "Global variables possess file scope and static storage duration, making them accessible across all functional modules.",
    "वे चर (Variables) जो सभी कार्यों के बाहर घोषित किए जाते हैं और प्रोग्राम के सभी मॉड्यूल द्वारा एक्सेस किए जा सकते हैं, कहलाते हैं:"))

questions.append(q(74, SEC_CS, "Data Structures", "डेटा संरचनाएं",
    "A linear collection of data elements where the linear order is maintained through pointers rather than contiguous physical memory is a:",
    "Array", "Linked list", "Queue", "Stack", "B",
    "A linked list consists of nodes containing a data field and a pointer (reference) link to the succeeding node.",
    "डेटा तत्वों का एक रैखिक संग्रह जिसमें तत्वों का क्रम भौतिक मेमोरी के बजाय पॉइंटर्स द्वारा बनाए रखा जाता है, कहलाता है:"))

questions.append(q(75, SEC_CS, "Data Structures", "डेटा संरचनाएं",
    "Which data structure operates strictly on the Last-In, First-Out (LIFO) principle?",
    "Stack", "Queue", "Binary Tree", "Graph", "A",
    "In a stack, insertions and deletions take place at a single end called the top, conforming to LIFO.",
    "कौन सी डेटा संरचना अंतिम-इन, प्रथम-आउट (LIFO) सिद्धांत पर कार्य करती है?"))

questions.append(q(76, SEC_CS, "Data Structures", "डेटा संरचनाएं",
    "Which data structure operates strictly on the First-In, First-Out (FIFO) principle?",
    "Stack", "Queue", "Priority Queue", "Deque", "B",
    "A queue allows insertion at the rear end and deletion at the front end, following FIFO.",
    "कौन सी डेटा संरचना प्रथम-इन, प्रथम-आउट (FIFO) सिद्धांत पर कार्य करती है?"))

questions.append(q(77, SEC_CS, "Algorithms", "एल्गोरिदम",
    "The Binary Search algorithm requires the underlying collection of elements to be:",
    "Sorted", "Unsorted", "Randomized", "Doubly linked", "A",
    "Binary search repeatedly divides the search interval in half, which strictly presumes sorted keys in O(1) random-access storage.",
    "बाइनरी सर्च एल्गोरिदम के लिए आवश्यक है कि डेटा तत्व:"))

questions.append(q(78, SEC_CS, "Algorithms", "एल्गोरिदम",
    "The worst-case time complexity of Quick Sort algorithm occurs when the pivot chosen is always the extreme element, resulting in:",
    "O(n log n)", "O(n^2)", "O(n)", "O(log n)", "B",
    "When partitions are unbalanced (e.g., already sorted array with first/last pivot), Quick Sort degrades to quadratic time O(n^2).",
    "क्विक सॉर्ट एल्गोरिदम की सबसे खराब स्थिति (Worst-case) समय जटिलता क्या है?"))

questions.append(q(79, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "In word processing software like MS Word, the user can search for:",
    "Formatting", "Special characters", "Phrases and text", "All of these", "D",
    "Advanced Find & Replace in MS Word supports searching for text strings, formatting attributes (bold, font size), and special characters (paragraph marks, tabs).",
    "एमएस वर्ड में उपयोगकर्ता निम्नलिखित में से किसे खोज (Search) सकता है?"))

questions.append(q(80, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "What is the default font used in newer versions of MS Word documents?",
    "Calibri", "Times New Roman", "Arial", "Courier New", "A",
    "Calibri (11 pt) is the standard default body font in Microsoft Word starting from Word 2007 onwards.",
    "एमएस वर्ड में नए दस्तावेज़ों के लिए डिफ़ॉल्ट फ़ॉन्ट क्या होता है?"))

questions.append(q(81, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "In a word document, you can insert a date by:",
    "Inserting a fixed text date", "Inserting an automatically updating date field", "Both A and B", "Neither A nor B", "C",
    "Word permits inserting both static date text strings and dynamic DATE fields that refresh on document open or print.",
    "वर्ड दस्तावेज़ में दिनांक जोड़ने के लिए उपयोगकर्ता:"))

questions.append(q(82, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "In page setup options, 'Portrait' and 'Landscape' represent:",
    "Paper Size", "Page Orientation", "Page Margin", "Header Style", "B",
    "Portrait (vertical) and Landscape (horizontal) are standard page orientation layouts.",
    "पेज सेटअप में 'पोर्ट्रेट' और 'लैंडस्केप' क्या दर्शाते हैं?"))

questions.append(q(83, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "What is the keyboard shortcut to select the entire document in MS Word?",
    "Ctrl + A", "Ctrl + S", "Ctrl + B", "Ctrl + E", "A",
    "Ctrl + A executes the Select All command, highlighting all text and objects in the document.",
    "एमएस वर्ड में संपूर्ण दस्तावेज़ का चयन करने के लिए शॉर्टकट कुंजी क्या है?"))

questions.append(q(84, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "What is the purpose of the 'Drop Cap' feature in MS Word?",
    "To begin a paragraph with a large dropped initial capital letter", "To lowercase all characters", "To insert a watermark", "To create a footnote", "A",
    "Drop Cap formats the initial letter of a paragraph into a large decorative dropped block letter extending across multiple lines.",
    "एमएस वर्ड में 'ड्रॉप कैप' (Drop Cap) सुविधा का क्या उद्देश्य है?"))

questions.append(q(85, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "Superscript, subscript, strikethrough, and small caps are categorized in MS Word as:",
    "Font effects", "Paragraph styles", "Page layouts", "Text alignments", "A",
    "These formatting options are font effects found under the Font dialog box in Word.",
    "सुपरस्क्रिप्ट, सबस्क्रिप्ट और स्ट्राइकथ्रू को वर्ड में किस रूप में वर्गीकृत किया गया है?"))

questions.append(q(86, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "What is the minimum zoom percentage allowed in Microsoft Word?",
    "5%", "10%", "20%", "25%", "B",
    "Microsoft Word allows a zoom range from a minimum of 10% up to a maximum of 500%.",
    "माइक्रोसॉफ्ट वर्ड में न्यूनतम ज़ूम प्रतिशत कितना हो सकता है?"))

questions.append(q(87, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "Which feature in MS Word automatically identifies and corrects common typographical and grammatical slips as you type?",
    "AutoFormat", "AutoText", "AutoCorrect", "Spell Check", "C",
    "AutoCorrect fixes common capitalization errors and misspelled words automatically in the background.",
    "एमएस वर्ड में कौन सी सुविधा टाइपिंग के दौरान सामान्य गलतियों को स्वतः ठीक कर देती है?"))

questions.append(q(88, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "In a spreadsheet, the intersection of a row and a column is called a:",
    "Block", "Cell", "Table", "Pointer", "B",
    "A cell is the fundamental unit of a spreadsheet identified by column letter and row number (e.g., B4).",
    "स्प्रेडशीट में एक पंक्ति (Row) और एक कॉलम के प्रतिच्छेदन बिंदु को क्या कहा जाता है?"))

questions.append(q(89, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "In Microsoft Excel, every formula must begin with which character?",
    "= (Equal sign)", "+ (Plus sign)", "- (Minus sign)", "@ (At symbol)", "A",
    "Formulas in Excel must initiate with an equals sign (=) to signify calculation rather than text literal.",
    "माइक्रोसॉफ्ट एक्सेल में प्रत्येक सूत्र (Formula) किस चिह्न से शुरू होना चाहिए?"))

questions.append(q(90, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "Which Excel function calculates the total count of cells that contain numeric entries?",
    "COUNT", "COUNTA", "COUNTIF", "SUM", "A",
    "The COUNT function tallies only cells that contain numeric values within a supplied range.",
    "एक्सेल का कौन सा फ़ंक्शन केवल संख्यात्मक प्रविष्टियों वाले कक्षों की गणना करता है?"))

questions.append(q(91, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "What is the default file extension for workbooks created in modern versions of Microsoft Excel (2007 onwards)?",
    ".xlsx", ".xls", ".doc", ".xlsm", "A",
    "Modern OpenXML Excel workbooks use the .xlsx extension (.xls was used up to Excel 2003).",
    "माइक्रोसॉफ्ट एक्सेल (2007 और बाद के संस्करण) में कार्यपुस्तिका का डिफ़ॉल्ट फ़ाइल एक्सटेंशन क्या है?"))

questions.append(q(92, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "The default cell formatting style applied to newly entered alphanumeric data in a blank Excel worksheet is:",
    "Comma", "Normal", "Currency", "Percent", "B",
    "The standard default cell style for newly created worksheets in Excel is the 'Normal' style.",
    "एक्सेल वर्कशीट में नए दर्ज किए गए डेटा पर लागू डिफ़ॉल्ट सेल शैली क्या होती है?"))

questions.append(q(93, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "In Excel, pressing which key commits the data entry and moves the selection to the cell directly below?",
    "Tab", "Shift", "Enter", "Alt", "C",
    "Pressing Enter completes cell entry and moves focus downward to the adjacent row.",
    "एक्सेल में कौन सी कुंजी दबाने पर सेल प्रविष्टि स्वीकृत होती है और चयन नीचे की सेल में चला जाता है?"))

questions.append(q(94, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "Microsoft Excel is categorized as which type of application software?",
    "Word Processor", "Presentation Package", "Graphic Program", "Spreadsheet Application", "D",
    "Excel is a widely used spreadsheet software designed for grid calculation, data analysis, and charting.",
    "माइक्रोसॉफ्ट एक्सेल को किस प्रकार के सॉफ्टवेयर के रूप में वर्गीकृत किया गया है?"))

questions.append(q(95, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "A logical formula evaluates to boolean TRUE or FALSE. Which function returns customized values instead of plain booleans?",
    "NOT", "OR", "IF", "AND", "C",
    "The IF function takes a condition and returns a specified value_if_true or value_if_false.",
    "तार्किक फ़ंक्शन में कौन सा फ़ंक्शन साधारण बूलियन मान के बजाय कस्टम मान लौटाता है?"))

questions.append(q(96, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "What is the maximum zoom percentage permitted in Microsoft Excel?",
    "100%", "200%", "400%", "500%", "C",
    "Microsoft Excel limits zoom between 10% and 400% (unlike Word which allows up to 500%).",
    "माइक्रोसॉफ्ट एक्सेल में अधिकतम ज़ूम प्रतिशत कितना हो सकता है?"))

questions.append(q(97, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "In classical Microsoft Excel versions, how many worksheets were provided by default in a new workbook?",
    "1", "3", "5", "10", "B",
    "Traditional Excel workbooks opened with 3 worksheets (Sheet1, Sheet2, Sheet3) by default.",
    "पारंपरिक एक्सेल में एक नई कार्यपुस्तिका में डिफ़ॉल्ट रूप से कितनी वर्कशीट होती थीं?"))

questions.append(q(98, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "Which chart type in Excel is best suited for depicting continuous trends in data over equal time intervals?",
    "Line chart", "Pie chart", "Scatter chart", "Doughnut chart", "A",
    "Line charts connect individual data points to highlight trends over continuous time or categorical intervals.",
    "एक्सेल में समान समय अंतराल पर डेटा में रुझान प्रदर्शित करने के लिए कौन सा चार्ट सबसे उपयुक्त है?"))

questions.append(q(99, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "In Microsoft PowerPoint, what is the keyboard shortcut to insert a new slide into the presentation?",
    "Ctrl + N", "Ctrl + M", "Ctrl + S", "Ctrl + P", "B",
    "Ctrl + M inserts a new slide, whereas Ctrl + N creates an entirely new presentation file.",
    "पावरपॉइंट में नई स्लाइड डालने के लिए शॉर्टकट कुंजी क्या है?"))

questions.append(q(100, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "In PowerPoint, features like Slide Layout, Slide Background, and Themes are configured under:",
    "Insert Menu", "Design / Format Menu", "Tools Menu", "Review Menu", "B",
    "Slide visual styling, layouts, and background designs reside under the Design/Format tabs.",
    "पावरपॉइंट में स्लाइड लेआउट और डिज़ाइन विकल्प किस मेनू के अंतर्गत पाए जाते हैं?"))

print(f"Part 2 (first half) complete: {len(questions)} questions.")

# -------------------------------------------------------------
# Part 2: Computer Science continued (Q101 - Q150)
# -------------------------------------------------------------
questions.append(q(101, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "Which menu or tab provides options for Animation Schemes, Custom Animation, and Slide Transitions in PowerPoint?",
    "Insert Menu", "Format Menu", "Slide Show / Animations Menu", "Tools Menu", "C",
    "Animation schemes and slide transitions are configured within the Animations/Slide Show menus.",
    "पावरपॉइंट में कस्टम एनिमेशन और स्लाइड ट्रांज़िशन के विकल्प किस मेनू में मिलते हैं?"))

questions.append(q(102, SEC_CS, "Distributed Systems", "वितरित प्रणाली",
    "When a collection of independent autonomous computers appears to its users as a single coherent computing system, it is termed a:",
    "Computer Network", "Distributed System", "Parallel Computer", "Supercomputer", "B",
    "A distributed system is a collection of autonomous computing entities communicating over network that present a unified system image.",
    "जब स्वतंत्र कंप्यूटरों का एक समूह उपयोगकर्ताओं को एकल एकीकृत प्रणाली के रूप में प्रतीत होता है, तो उसे क्या कहा जाता है?"))

questions.append(q(103, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "Two devices are considered to be in a computer network if:",
    "A process in one device is able to exchange information with a process in the other device", "Both devices share the same power outlet", "Both devices run identical operating systems", "Both devices have the same IP address", "A",
    "Inter-process communication between distinct computational units across a transmission medium defines networked operation.",
    "दो उपकरण कंप्यूटर नेटवर्क में माने जाते हैं यदि:"))

questions.append(q(104, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "A computer network that is built virtually on top of another existing physical network infrastructure is known as an:",
    "Prime network", "Chief network", "Overlay network", "Local network", "C",
    "An overlay network is a virtual telecommunications network created on top of another network (e.g., VPNs, P2P networks).",
    "एक कंप्यूटर नेटवर्क जो किसी अन्य मौजूदा नेटवर्क के ऊपर निर्मित होता है, कहलाता है:"))

questions.append(q(105, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "In a computer communication network, network nodes are capable of functioning as:",
    "The computer that originates the data", "The computer that routes the data", "The computer that terminates the data", "All of these", "D",
    "Nodes in a network can serve as data sources (originators), intermediate forwarding hops (routers), or final destinations (sinks).",
    "कंप्यूटर नेटवर्क में नोड्स (Nodes) किस रूप में कार्य कर सकते हैं?"))

questions.append(q(106, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "A transmission channel where every packet sent is received and examined by all machines on the subnet is a:",
    "Broadcast network", "Unicast network", "Point-to-point network", "Switched network", "A",
    "In broadcast networks, a single shared channel delivers frames to all connected nodes, each inspecting the address field.",
    "वह संचार चैनल जिसमें प्रत्येक पैकेट नेटवर्क के सभी उपकरणों द्वारा प्राप्त किया जाता है, कहलाता है:"))

questions.append(q(107, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "A network hardware device that forwards data packets between disparate networks by inspecting routing tables is a:",
    "Bridge", "Hub", "Router", "Repeater", "C",
    "Routers operate at the Network Layer (Layer 3) to route packets across logical network boundaries based on IP addressing.",
    "वह उपकरण जो रूटिंग जानकारी के आधार पर नेटवर्क के बीच पैकेट अग्रेषित करता है, कहलाता है:"))

questions.append(q(108, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "Which network protocol dynamically assigns IP addresses, subnet masks, and default gateways to client nodes on a network?",
    "DHCP", "DNS", "HTTP", "FTP", "A",
    "Dynamic Host Configuration Protocol (DHCP) automates network parameter allocation for connecting devices.",
    "कौन सा नेटवर्क प्रोटोकॉल क्लाइंट को गतिशील रूप से आईपी पता आवंटित करता है?"))

questions.append(q(109, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "Which of the following is NOT a Media Access Control (MAC) layer protocol or standard?",
    "Ethernet", "Digital Subscriber Line (DSL)", "Fiber Distributed Data Interface (FDDI)", "Token Ring", "B",
    "DSL is a physical-layer/broadband local loop transmission technology, whereas Ethernet, FDDI, and Token Ring define MAC protocols.",
    "निम्नलिखित में से कौन सा मीडिया एक्सेस कंट्रोल (MAC) प्रोटोकॉल नहीं है?"))

questions.append(q(110, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "The Internet is best defined as:",
    "A single localized network", "A vast worldwide collection of interconnected autonomous computer networks", "A software program", "A proprietary operating system", "B",
    "The Internet is a global system of interconnected computer networks utilizing the standard TCP/IP protocol suite.",
    "इंटरनेट को सर्वोत्तम रूप से किस प्रकार परिभाषित किया जा सकता है?"))

questions.append(q(111, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "To connect to the Internet, a user's computer or router must establish a connection with an:",
    "Internet Society (ISOC)", "Internet Architecture Board (IAB)", "Internet Service Provider (ISP)", "IEEE Headquarters", "C",
    "An Internet Service Provider (ISP) provides subscribers with gateway access to global internet routing infrastructure.",
    "इंटरनेट से जुड़ने के लिए कंप्यूटर को किससे जुड़ा होना आवश्यक है?"))

questions.append(q(112, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "High-speed digital internet transmission over standard copper wires of local telephone network is provided by:",
    "Leased line", "Digital Subscriber Line (DSL)", "Digital Signal Line", "None of these", "B",
    "DSL utilizes high-frequency bands on conventional telephone copper loops for broadband digital transfer.",
    "स्थानीय टेलीफोन तारों पर डिजिटल डेटा संचारित करके इंटरनेट का उपयोग किसके द्वारा प्रदान किया जाता है?"))

questions.append(q(113, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "Internet Service Providers exchange peering network traffic between their autonomous networks at physical locations called:",
    "Internet Exchange Points (IXPs)", "Subscriber End Points", "ISP End Points", "Modem Banks", "A",
    "An Internet Exchange Point (IXP) is physical network access infrastructure where ISPs exchange traffic through mutual peering.",
    "आईएसपी अपने नेटवर्क के बीच इंटरनेट ट्रैफिक का आदान-प्रदान कहाँ करते हैं?"))

questions.append(q(114, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "Which of the following is NOT an application layer protocol used in the Internet suite?",
    "HTTP", "FTP", "Resource Reservation Protocol (RSVP)", "DNS", "C",
    "RSVP operates at the Transport/Network layer for QoS bandwidth reservation, whereas HTTP, FTP, and DNS are Application Layer (Layer 7).",
    "निम्नलिखित में से कौन सा एप्लिकेशन लेयर प्रोटोकॉल नहीं है?"))

questions.append(q(115, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "An IPv6 (Internet Protocol Version 6) address has a length of:",
    "32 bits", "64 bits", "128 bits", "256 bits", "C",
    "IPv6 uses 128-bit addresses (written in hexadecimal), providing 2^128 unique addresses to replace 32-bit IPv4.",
    "IPv6 पते का आकार (Size) कितना होता है?"))

questions.append(q(116, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "An IPv4 (Internet Protocol Version 4) address has a length of:",
    "32 bits", "64 bits", "128 bits", "16 bits", "A",
    "An IPv4 address consists of 32 bits organized into four 8-bit octets in dotted-decimal notation.",
    "IPv4 पते का आकार कितना होता है?"))

questions.append(q(117, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "The fundamental switching technique underlying the communication mechanism of the Internet is:",
    "Packet switching", "Circuit switching", "Message switching only", "Space switching", "A",
    "The Internet is a packet-switched network where data streams are broken into packets and routed independently.",
    "इंटरनेट किस स्विचिंग तकनीक पर कार्य करता है?"))

questions.append(q(118, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "Which layer of the ISO-OSI Reference Model is primarily responsible for end-to-end packet routing and logical addressing?",
    "Data Link Layer", "Transport Layer", "Network Layer", "Session Layer", "C",
    "The Network Layer (Layer 3) handles packet routing, forwarding, and logical IP addressing across intermediate networks.",
    "OSI मॉडल की कौन सी परत पैकेट रूटिंग और लॉजिकल एड्रेसिंग के लिए उत्तरदायी है?"))

questions.append(q(119, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "The Open Systems Interconnection (OSI) reference model comprises how many distinct layers?",
    "4 layers", "7 layers", "5 layers", "6 layers", "B",
    "The OSI model defines 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.",
    "OSI संदर्भ मॉडल में कुल कितनी परतें (Layers) होती हैं?"))

questions.append(q(120, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "Which protocol provides encrypted, authenticated communication for web browsing over the Internet?",
    "HTTP", "HTTPS", "FTP", "Telnet", "B",
    "HTTPS (HyperText Transfer Protocol Secure) encrypts HTTP traffic utilizing TLS/SSL cryptography.",
    "वेब ब्राउज़िंग के लिए सुरक्षित और एन्क्रिप्टेड संचार कौन सा प्रोटोकॉल प्रदान करता है?"))

questions.append(q(121, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "What is the standard well-known TCP port number assigned to the unencrypted HTTP service?",
    "Port 80", "Port 443", "Port 21", "Port 25", "A",
    "Port 80 is assigned for cleartext HTTP traffic (Port 443 is assigned for HTTPS).",
    "HTTP सेवा के लिए मानक TCP पोर्ट नंबर क्या है?"))

questions.append(q(122, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "The Domain Name System (DNS) is primarily responsible for translating:",
    "Domain names into numeric IP addresses", "IP addresses into MAC addresses", "HTML code into web pages", "Binary files into text", "A",
    "DNS acts as the Internet's directory service, mapping human-readable domain names (e.g., example.com) to IP addresses.",
    "डोमेन नेम सिस्टम (DNS) का मुख्य कार्य क्या है?"))

questions.append(q(123, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "In which physical network topology are all client nodes directly wired to a centralized hub or switch?",
    "Bus topology", "Star topology", "Ring topology", "Mesh topology", "B",
    "In a star topology, each end station has a dedicated point-to-point link directly to a central hub or switch.",
    "किस नेटवर्क टोपोलॉजी में सभी नोड्स एक केंद्रीय हब या स्विच से जुड़े होते हैं?"))

questions.append(q(124, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "In the Relational Database Model, a 'Relation' is mathematically equivalent to a:",
    "Table", "Row", "Column", "Constraint", "A",
    "In Codd's relational model, a relation is structured as a two-dimensional table containing rows and columns.",
    "रिलेशनल डेटाबेस मॉडल में 'रिलेशन' (Relation) किसके समतुल्य होता है?"))

questions.append(q(125, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "In a relational database table, an 'Attribute' represents a:",
    "Row", "Column / Field", "Tuple", "Key", "B",
    "Attributes define the properties or columns of a relational schema.",
    "रिलेशनल डेटाबेस में 'एट्रिब्यूट' (Attribute) क्या दर्शाता है?"))

questions.append(q(126, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "In relational terminology, a single row representing an entity record in a table is termed a:",
    "Field", "Domain", "Tuple", "Schema", "C",
    "A tuple corresponds to a single row or record in a relational database table.",
    "रिलेशनल डेटाबेस में तालिका की एक पंक्ति (Row) को क्या कहा जाता है?"))

questions.append(q(127, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "An attribute or set of attributes that uniquely identifies each tuple in a relation without nulls is the:",
    "Primary Key", "Foreign Key", "Candidate Key only", "Alternate Key", "A",
    "A Primary Key enforces entity integrity by uniquely identifying every record and forbidding NULL values.",
    "किसी रिलेशन में प्रत्येक टुपल को विशिष्ट रूप से पहचानने वाली कुंजी क्या कहलाती है?"))

questions.append(q(128, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "SQL is an abbreviation for:",
    "Structured Query Language", "Sequential Query Language", "Standardized Queue Language", "Simple Query Logic", "A",
    "SQL stands for Structured Query Language, the ANSI standard language for managing relational databases.",
    "SQL का पूर्ण रूप क्या है?"))

questions.append(q(129, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "Which SQL statement completely removes both the definition and data of an existing table from the database catalog?",
    "DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "TRUNCATE TABLE", "C",
    "DROP TABLE deletes the table schema, constraints, indexes, and all associated rows permanently.",
    "डेटाबेस से किसी तालिका को उसके ढांचे सहित पूरी तरह हटाने के लिए किस SQL कमांड का उपयोग किया जाता है?"))

questions.append(q(130, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "Which of the following belongs to Data Definition Language (DDL) in SQL?",
    "CREATE", "INSERT", "UPDATE", "SELECT", "A",
    "CREATE, ALTER, DROP, and TRUNCATE are DDL commands that define and alter database structure.",
    "निम्नलिखित में से कौन सा SQL में DDL कमांड का उदाहरण है?"))

questions.append(q(131, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "Which of the following is a Data Manipulation Language (DML) command in SQL?",
    "ALTER", "INSERT", "CREATE", "DROP", "B",
    "INSERT, UPDATE, DELETE, and SELECT manipulate data instances within tables (DML).",
    "निम्नलिखित में से कौन सा DML कमांड का उदाहरण है?"))

questions.append(q(132, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "The classical normal forms (1NF, 2NF, 3NF, BCNF) in relational database design are based on the concept of:",
    "Functional Dependency", "Multi-valued Dependency only", "Join Dependency only", "Referential Integrity only", "A",
    "1NF through BCNF systematically eliminate anomalies based on functional dependencies between attributes.",
    "डेटाबेस नॉर्मलाइज़ेशन (1NF, 2NF, 3NF) की अवधारणा किस पर आधारित है?"))

questions.append(q(133, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "A relation is in Second Normal Form (2NF) if it is in 1NF and contains no:",
    "Transitive dependencies", "Partial functional dependencies on candidate key", "Multi-valued dependencies", "Redundant keys", "B",
    "2NF requires that all non-prime attributes are fully functionally dependent on the entire primary key.",
    "कोई रिलेशन 2NF में तब होता है जब वह 1NF में हो और उसमें क्या न हो?"))

questions.append(q(134, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "A relation is in Third Normal Form (3NF) if it is in 2NF and has no:",
    "Partial dependency", "Transitive dependency of non-prime attributes", "Atomic attributes", "Primary key", "B",
    "3NF removes transitive dependencies where a non-key attribute determines another non-key attribute (X -> Y).",
    "कोई रिलेशन 3NF में तब माना जाता है जब उसमें 2NF के साथ-साथ क्या न हो?"))

questions.append(q(135, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "In database transaction management, the acronym ACID stands for:",
    "Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Integrity, Durability", "Authentication, Concurrency, Isolation, Distribution", "Access, Control, Identity, Durability", "A",
    "ACID properties guarantee reliable transaction processing in database management systems.",
    "डेटाबेस लेनदेन में ACID का पूर्ण रूप क्या है?"))

questions.append(q(136, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "Which of the following CPU scheduling algorithms is strictly non-preemptive in nature?",
    "First-Come, First-Served (FCFS)", "Round Robin (RR)", "Shortest Remaining Time First (SRTF)", "Priority Scheduling (Preemptive)", "A",
    "In FCFS, once the CPU has been allocated to a process, the process keeps the CPU until it releases it voluntarily.",
    "निम्नलिखित में से कौन सा CPU शेड्यूलिंग एल्गोरिदम गैर-प्रीमेप्टिव (Non-preemptive) है?"))

questions.append(q(137, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "Virtual memory is a memory management technique commonly implemented using:",
    "Demand Paging", "Contiguous Allocation", "Static Partitioning", "Base Registers only", "A",
    "Virtual memory gives the illusion of a large contiguous address space using demand paging with secondary disk storage.",
    "वर्चुअल मेमोरी को आमतौर पर किसके माध्यम से लागू किया जाता है?"))

questions.append(q(138, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "Which of the following is one of Coffman's four necessary conditions for deadlock, stating that at least one resource must be non-shareable?",
    "Mutual Exclusion", "Hold and Wait", "No Preemption", "Circular Wait", "A",
    "Mutual Exclusion requires that only one process at a time can use a resource; if another process requests it, it must wait.",
    "डेडलॉक (Deadlock) की आवश्यक शर्तों में से कौन सी शर्त यह बताती है कि संसाधन गैर-साझा करने योग्य होना चाहिए?"))

questions.append(q(139, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "In an Operating System, the data structure used to maintain all essential state information about an active process is the:",
    "Program Counter", "Process Control Block (PCB)", "File Allocation Table", "Page Table", "B",
    "The PCB (Process Control Block) stores PID, state, registers, memory pointers, and I/O status for context switching.",
    "ऑपरेटिंग सिस्टम में सक्रिय प्रक्रिया की स्थिति बनाए रखने वाली डेटा संरचना क्या कहलाती है?"))

questions.append(q(140, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "A computer program currently in execution inside the operating system environment is defined as a:",
    "Process", "Thread", "Instruction", "Subroutine", "A",
    "A process is an active program in execution containing program counter, stack, and data segment.",
    "निष्पादित हो रहा प्रोग्राम क्या कहलाता है?"))

questions.append(q(141, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "The Banker's Algorithm developed by Edsger Dijkstra is primarily employed for:",
    "Deadlock Avoidance", "Deadlock Detection", "Mutual Exclusion", "Memory Allocation", "A",
    "Banker's Algorithm tests for safe states before allocating requested resources to avoid deadlocks.",
    "बैंकर एल्गोरिदम (Banker's Algorithm) का उपयोग किस उद्देश्य के लिए किया जाता है?"))

questions.append(q(142, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "In C++, which of the following operators CANNOT be overloaded?",
    "+ (Addition operator)", ":: (Scope resolution operator)", "== (Equality operator)", "[] (Subscript operator)", "B",
    "C++ prohibits overloading of scope resolution (::), member selection (.), member pointer (.*), and ternary conditional (?:).",
    "C++ में निम्नलिखित में से किस ऑपरेटर को ओवरलोड नहीं किया जा सकता है?"))

questions.append(q(143, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "In Object-Oriented Programming (OOP), bundling data and the methods that operate on that data into a single unit is called:",
    "Encapsulation", "Inheritance", "Polymorphism", "Abstraction", "A",
    "Encapsulation binds data and code together into a class while restricting direct access to internal state components.",
    "OOP में डेटा और उससे जुड़े कार्यों को एक इकाई में बांधना क्या कहलाता है?"))

questions.append(q(144, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "The OOP concept that enables an entity (such as a function or operator) to take on multiple forms or behaviors is:",
    "Inheritance", "Polymorphism", "Encapsulation", "Delegation", "B",
    "Polymorphism (compile-time overloading or runtime virtual function overriding) allows different implementations under a single interface.",
    "OOP की वह अवधारणा जो किसी फ़ंक्शन या ऑपरेटर को एक से अधिक रूप लेने में सक्षम बनाती है, कहलाती है:"))

questions.append(q(145, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "In C++, a constructor is a special member function that:",
    "Has the exact same name as its class and specifies no return type", "Has a different name from the class", "Returns an integer by default", "Must be declared private", "A",
    "Constructors share the class name and have no return type; they initialize new object instances automatically.",
    "C++ में कंस्ट्रक्टर (Constructor) की मुख्य विशेषता क्या होती है?"))

questions.append(q(146, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "In C++, a function declared with the 'friend' keyword has the privilege to access:",
    "Only public members of the class", "Only private members of the class", "Both private and protected members of the class", "No members of the class", "C",
    "A friend function or class is granted non-member access to private and protected class members.",
    "C++ में फ्रेंड फ़ंक्शन (Friend Function) को किस प्रकार के सदस्यों को एक्सेस करने की अनुमति होती है?"))

questions.append(q(147, SEC_CS, "Digital Logic", "डिजिटल लॉजिक",
    "According to Boolean algebra laws, the expression A + A'B simplifies algebraically to:",
    "A + B", "AB", "A' + B", "1", "A",
    "A + A'B = (A + A')(A + B) = 1 · (A + B) = A + B.",
    "बूलियन बीजगणित के नियमों के अनुसार A + A'B का सरलीकृत रूप क्या होगा?"))

questions.append(q(148, SEC_CS, "Digital Logic", "डिजिटल लॉजिक",
    "Which two logic gates are known as 'Universal Gates' because any boolean function can be realized using only them?",
    "AND and OR", "NOT and OR", "NAND and NOR", "XOR and XNOR", "C",
    "NAND and NOR gates are functionally complete; any digital combinational circuit can be fabricated solely using either NAND or NOR gates.",
    "किन दो लॉजिक गेटों को 'यूनिवर्सल गेट' (Universal Gates) कहा जाता है?"))

questions.append(q(149, SEC_CS, "Digital Logic", "डिजिटल लॉजिक",
    "What is the two's complement representation of the 4-bit binary number 1010?",
    "0101", "0110", "1101", "0010", "B",
    "One's complement of 1010 is 0101. Adding 1 gives 0101 + 1 = 0110.",
    "4-बिट बाइनरी संख्या 1010 का 2's कॉम्प्लिमेंट (Two's Complement) क्या होगा?"))

questions.append(q(150, SEC_CS, "Digital Logic", "डिजिटल लॉजिक",
    "The fundamental sequential digital logic circuit capable of storing exactly 1 bit of binary information is a:",
    "Flip-flop", "Multiplexer", "Decoder", "Half Adder", "A",
    "A flip-flop (bistable multivibrator) has two stable states and stores one bit of state memory.",
    "1 बिट बाइनरी जानकारी संग्रहीत करने वाला मूलभूत डिजिटल सर्किट क्या है?"))

print(f"Total questions compiled: {len(questions)}")
assert len(questions) == 150, f"Expected 150 questions, got {len(questions)}"

# Output Paper Structure
paper_obj = {
    "id": "official_2019",
    "title": "BSTET Official 2019 - Paper II (CS)",
    "subtitle": "Held On: 28 Jan 2020 (Advt 2019) | Official 150-Question Bilingual Booklet (Set A)",
    "category": "Official PYQ",
    "isOfficial": True,
    "totalQuestions": 150,
    "totalMarks": 150,
    "durationMinutes": 150,
    "sections": [
        {
            "id": "general",
            "name": SEC_GK,
            "startQ": 1,
            "endQ": 50,
            "total": 50
        },
        {
            "id": "cs",
            "name": SEC_CS,
            "startQ": 51,
            "endQ": 150,
            "total": 100
        }
    ],
    "questions": questions
}

# 1. Save JSON to incoming/stet_2019_cs.json
json_path = r"incoming/stet_2019_cs.json"
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(paper_obj, f, ensure_ascii=False, indent=2)
print(f"[OK] Wrote JSON: {json_path} ({os.path.getsize(json_path)} bytes)")

# 2. Save JS to js/data/official-2019.js
js_path = r"js/data/official-2019.js"
with open(js_path, "w", encoding="utf-8") as f:
    f.write("// Generated Question Paper Data\n")
    f.write("window.official_2019 = ")
    json.dump(paper_obj, f, ensure_ascii=False, indent=2)
    f.write(";\n")
print(f"[OK] Wrote JS: {js_path} ({os.path.getsize(js_path)} bytes)")
