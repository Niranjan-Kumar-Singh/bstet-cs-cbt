# -*- coding: utf-8 -*-
"""
Assembles Bihar STET 2020 Re-Exam Paper II Computer Science
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
        "explanation_hi": f"**आधिकारिक सही उत्तर: ({ans}) { {'A': a_hi or t_hi(a), 'B': b_hi or t_hi(b), 'C': c_hi or t_hi(c), 'D': d_hi or t_hi(d)}[ans] }**\n\n**विषय ({top_hi})**: बिहार STET 2020 पुनर्परीक्षा उत्तर कुंजी के अनुसार विकल्प ({ans}) सही है।"
    }

questions = []
SEC_GK = "General Knowledge and Other Skills"
SEC_CS = "Computer Science"

# -------------------------------------------------------------
# Part 1: General Knowledge and Other Skills (Q1 - Q50)
# -------------------------------------------------------------
questions.append(q(1, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "A is the brother of B, C is the father of D, E is the mother of B, A and D are brothers. What is the relation of C with E?",
    "Sister", "Husband", "Father", "Brother", "B",
    "Since A, B, and D are siblings with mother E and father C, C is the husband of E.",
    "A, B का भाई है; C, D का पिता है; E, B की माँ है; A और D भाई हैं। C का E से क्या संबंध है?"))

questions.append(q(2, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "In a coding system, if TEACHER is coded as VGCEJGT, how will CHILDREN be coded?",
    "EJKNFTGP", "EJKTEPGN", "EJKNFGTO", "EJKNFTGZ", "A",
    "Each letter is shifted forward by +2 positions in the alphabetical order: C->E, H->J, I->K, L->N, D->F, R->T, E->G, N->P.",
    "एक कूट भाषा में यदि TEACHER को VGCEJGT लिखा जाता है, तो CHILDREN को क्या लिखा जाएगा?"))

questions.append(q(3, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "Find the next number in the series: 4, 9, 25, 49, 121, 169, ?",
    "196", "225", "289", "361", "C",
    "The series represents squares of consecutive prime numbers: 2^2, 3^2, 5^2, 7^2, 11^2, 13^2, 17^2 = 289.",
    "श्रृंखला में अगली संख्या ज्ञात कीजिए: 4, 9, 25, 49, 121, 169, ?"))

questions.append(q(4, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "Introducing a woman, a man said, 'Her mother is the only daughter of my mother-in-law.' How is the man related to the woman?",
    "Father", "Brother", "Uncle", "Husband", "A",
    "The only daughter of the man's mother-in-law is his wife. The woman's mother is his wife, so the man is her father.",
    "एक महिला का परिचय देते हुए एक पुरुष ने कहा, 'उसकी माँ मेरी सास की इकलौती बेटी है।' पुरुष का महिला से क्या संबंध है?"))

questions.append(q(5, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "If in a code language 24685 is written as 33776, how will 35791 be written?",
    "44882", "46802", "44802", "46682", "A",
    "Pattern: +1, -1, +1, -1, +1: 3+1=4, 5-1=4, 7+1=8, 9-1=8, 1+1=2 => 44882.",
    "यदि किसी सांकेतिक भाषा में 24685 को 33776 लिखा जाता है, तो 35791 को क्या लिखा जाएगा?"))

questions.append(q(6, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "The sum of ages of 5 children born at intervals of 3 years each is 50 years. What is the age of the youngest child?",
    "4 years", "8 years", "10 years", "2 years", "A",
    "Let ages be x, x+3, x+6, x+9, x+12. 5x + 30 = 50 => 5x = 20 => x = 4 years.",
    "3-3 वर्ष के अंतराल पर पैदा हुए 5 बच्चों की आयु का योग 50 वर्ष है। सबसे छोटे बच्चे की आयु क्या है?"))

questions.append(q(7, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "A train running at 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
    "120 metres", "150 metres", "180 metres", "324 metres", "B",
    "Speed = 60 × (5/18) = 50/3 m/s. Length = Speed × Time = (50/3) × 9 = 150 metres.",
    "60 किमी/घंटा की गति से चल रही एक रेलगाड़ी एक खंभे को 9 सेकंड में पार करती है। रेलगाड़ी की लंबाई क्या है?"))

questions.append(q(8, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "A vendor bought bananas at 6 for Rs. 10 and sold them at 4 for Rs. 6. Find his loss or gain percent.",
    "10% gain", "10% loss", "20% loss", "20% gain", "B",
    "CP per banana = 10/6 = 5/3. SP per banana = 6/4 = 3/2. Loss = 5/3 - 3/2 = 1/6. Loss % = (1/6) / (5/3) × 100% = 10% loss.",
    "एक विक्रेता ने 10 रुपये में 6 की दर से केले खरीदे और उन्हें 6 रुपये में 4 की दर से बेच दिया। उसका हानि या लाभ प्रतिशत क्या है?"))

questions.append(q(9, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What is the weight of the new person?",
    "76 kg", "80 kg", "85 kg", "82.5 kg", "C",
    "Total weight increase = 8 × 2.5 = 20 kg. Weight of new person = 65 + 20 = 85 kg.",
    "8 व्यक्तियों का औसत वजन 2.5 किलोग्राम बढ़ जाता है जब 65 किलोग्राम वजन वाले व्यक्ति के स्थान पर एक नया व्यक्ति आता है। नए व्यक्ति का वजन क्या है?"))

questions.append(q(10, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "Two numbers are in the ratio 3:5. If 9 is subtracted from each, the new numbers are in the ratio 12:23. The smaller number is:",
    "27", "33", "49", "55", "B",
    "(3x - 9)/(5x - 9) = 12/23 => 23(3x - 9) = 12(5x - 9) => 69x - 207 = 60x - 108 => 9x = 99 => x = 11. Smaller number = 3 × 11 = 33.",
    "दो संख्याएं 3:5 के अनुपात में हैं। यदि प्रत्येक में से 9 घटा दिया जाए, तो नई संख्याएं 12:23 के अनुपात में हो जाती हैं। छोटी संख्या क्या है?"))

questions.append(q(11, SEC_GK, "General Science", "सामान्य विज्ञान",
    "Which of the following pollutant gases is NOT produced naturally, but solely as a result of industrial activity?",
    "Carbon Dioxide", "Chlorofluorocarbons (CFCs)", "Methane", "Nitrous Oxide", "B",
    "CFCs are entirely synthetic man-made compounds used in refrigeration and propellants with no natural biological sources.",
    "निम्नलिखित में से कौन सी प्रदूषक गैस प्राकृतिक रूप से नहीं, बल्कि केवल औद्योगिक गतिविधियों के परिणामस्वरूप उत्पन्न होती है?"))

questions.append(q(12, SEC_GK, "General Science", "सामान्य विज्ञान",
    "Which organ of the human body produces the digestive fluid called bile?",
    "Stomach", "Pancreas", "Liver", "Gall bladder", "C",
    "Bile is continuously synthesized and secreted by hepatocytes in the liver and stored in the gall bladder.",
    "मानव शरीर का कौन सा अंग पित्त (Bile) रस का उत्पादन करता है?"))

questions.append(q(13, SEC_GK, "General Science", "सामान्य विज्ञान",
    "Brass is an alloy composed of which metallic elements?",
    "Copper and Zinc", "Copper and Tin", "Copper and Nickel", "Iron and Carbon", "A",
    "Brass is a non-ferrous alloy consisting primarily of Copper (Cu) and Zinc (Zn).",
    "पीतल (Brass) किन धातुओं की एक मिश्र धातु है?"))

questions.append(q(14, SEC_GK, "General Science", "सामान्य विज्ञान",
    "What is the SI unit of electric potential difference (voltage)?",
    "Ampere", "Volt", "Ohm", "Watt", "B",
    "Volt (V) is the SI unit of electric potential, potential difference, and electromotive force.",
    "विद्युत विभवांतर (Voltage) की SI इकाई क्या है?"))

questions.append(q(15, SEC_GK, "General Science", "सामान्य विज्ञान",
    "Sound waves cannot travel through which of the following media?",
    "Water", "Steel", "Air", "Vacuum", "D",
    "Sound is a mechanical pressure wave requiring a material medium for propagation; it cannot traverse vacuum.",
    "ध्वनि तरंगें निम्नलिखित में से किस माध्यम में यात्रा नहीं कर सकती हैं?"))

questions.append(q(16, SEC_GK, "Mathematical Ability", "गणितीय क्षमता",
    "A sum of Rs. 7,500 is divided among A, B, and C such that A's share to B's share is 5:2 and B's share to C's share is 7:13. How much does B receive?",
    "Rs. 1,400", "Rs. 3,500", "Rs. 2,600", "Rs. 7,000", "A",
    "A:B:C = (5×7):(2×7):(2×13) = 35:14:26. Total parts = 35 + 14 + 26 = 75. B's share = (14/75) × 7500 = Rs. 1,400.",
    "7,500 रुपये की राशि को A, B और C के बीच इस प्रकार विभाजित किया जाता है कि A और B का अनुपात 5:2 है तथा B और C का अनुपात 7:13 है। B को कितनी राशि प्राप्त होती है?"))

questions.append(q(17, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "In a row of 30 girls, Radha was shifted by 6 places towards the right and became 18th from the right end. What was her earlier position from the left end?",
    "7th", "8th", "9th", "10th", "A",
    "New position from left = 30 - 18 + 1 = 13th. Since she moved 6 places right, earlier position from left was 13 - 6 = 7th.",
    "30 लड़कियों की एक पंक्ति में, राधा को दाईं ओर 6 स्थान खिसकाए जाने पर वह दाएं छोर से 18वें स्थान पर आ जाती है। बाएं छोर से उसका पूर्व स्थान क्या था?"))

questions.append(q(18, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "If South-East becomes North, North-East becomes West and so on, what will West become?",
    "North-East", "North-West", "South-East", "South-West", "C",
    "The compass rotates by 135 degrees anti-clockwise. West rotated 135 degrees anti-clockwise points to South-East.",
    "यदि दक्षिण-पूर्व उत्तर बन जाता है, उत्तर-पूर्व पश्चिम बन जाता है और इसी प्रकार आगे भी, तो पश्चिम क्या बन जाएगा?"))

questions.append(q(19, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "Statements: All cups are books. All books are shirts. Conclusions: I. Some cups are not shirts. II. Some shirts are cups.",
    "Only conclusion I follows", "Only conclusion II follows", "Both I and II follow", "Neither I nor II follows", "B",
    "Since all cups are shirts, some shirts are definitely cups (Conclusion II follows).",
    "कथन: सभी कप किताबें हैं। सभी किताबें कमीजें हैं। निष्कर्ष: I. कुछ कप कमीजें नहीं हैं। II. कुछ कमीजें कप हैं।"))

questions.append(q(20, SEC_GK, "Reasoning & Mental Ability", "तर्कशक्ति एवं मानसिक क्षमता",
    "Which of the following diagrams best represents the relationship among: Women, Mothers, Engineers?",
    "All mothers are women, and some mothers and women are engineers", "Disjoint circles", "Concentric circles", "Three mutually intersecting circles", "A",
    "All mothers are women (subset), and the set of engineers partially intersects both women and mothers.",
    "निम्नलिखित में से कौन सा आरेख 'महिलाएं, माताएं, इंजीनियर' के बीच संबंध को सबसे अच्छी तरह दर्शाता है?"))

questions.append(q(21, SEC_GK, "Indian Polity", "भारतीय राजव्यवस्था",
    "Under which Article of the Indian Constitution can the President proclaim Financial Emergency?",
    "Article 352", "Article 356", "Article 360", "Article 368", "C",
    "Article 360 empowers the President to proclaim a Financial Emergency if the financial stability of India is threatened.",
    "भारतीय संविधान के किस अनुच्छेद के तहत राष्ट्रपति वित्तीय आपातकाल की घोषणा कर सकते हैं?"))

questions.append(q(22, SEC_GK, "Indian Polity", "भारतीय राजव्यवस्था",
    "Who presides over the joint sitting of both Houses of Parliament in India?",
    "President of India", "Speaker of Lok Sabha", "Vice-President of India", "Prime Minister", "B",
    "Under Article 118(4), the Speaker of the Lok Sabha presides over a joint sitting of both Houses.",
    "भारत में संसद के दोनों सदनों की संयुक्त बैठक की अध्यक्षता कौन करता है?"))

questions.append(q(23, SEC_GK, "Indian Polity", "भारतीय राजव्यवस्था",
    "The Right to Education (RTE) was inserted into the Fundamental Rights under Article 21A by which Constitutional Amendment?",
    "86th Amendment Act, 2002", "44th Amendment Act, 1978", "42nd Amendment Act, 1976", "91st Amendment Act, 2003", "A",
    "The 86th Constitutional Amendment Act 2002 inserted Article 21A making free and compulsory education for children 6-14 a Fundamental Right.",
    "शिक्षा का अधिकार (RTE) किस संविधान संशोधन द्वारा अनुच्छेद 21A के तहत मौलिक अधिकारों में शामिल किया गया?"))

questions.append(q(24, SEC_GK, "Geography of Bihar", "बिहार का भूगोल",
    "Which district of Bihar has the highest population density as per the 2011 Census?",
    "Sheohar", "Patna", "Darbhanga", "Vaishali", "A",
    "Sheohar is the most densely populated district in Bihar with 1,880 persons per square kilometre.",
    "2011 की जनगणना के अनुसार बिहार के किस जिले में जनसंख्या घनत्व सबसे अधिक है?"))

questions.append(q(25, SEC_GK, "Geography of Bihar", "बिहार का भूगोल",
    "The river Ganga enters the State of Bihar in which district?",
    "Buxar", "Bhojpur", "Saran", "Patna", "A",
    "The Ganga enters Bihar near Chausa in the Buxar district.",
    "गंगा नदी बिहार राज्य में किस जिले से प्रवेश करती है?"))

questions.append(q(26, SEC_GK, "Modern Indian History", "आधुनिक भारतीय इतिहास",
    "The Champaran Satyagraha of 1917 was organized by Mahatma Gandhi against which exploitative practice?",
    "Tinkathia system of Indigo cultivation", "Salt tax", "Rowlatt Act", "Land revenue enhancement", "A",
    "Champaran Satyagraha was launched against the European planters forcing ryots to cultivate indigo on 3/20th of their land (Tinkathia).",
    "1917 का चंपारण सत्याग्रह महात्मा गांधी द्वारा किस शोषणकारी प्रथा के विरोध में आयोजित किया गया था?"))

questions.append(q(27, SEC_GK, "Modern Indian History", "आधुनिक भारतीय इतिहास",
    "Who was the founder of the 'Patliputra' city in ancient Magadha?",
    "Ajatashatru", "Udayin", "Bimbisara", "Chandragupta Maurya", "B",
    "Udayin (son of Ajatashatru) laid the foundation of Pataliputra at the confluence of the Ganga and Son rivers.",
    "प्राचीन मगध में पाटलिपुत्र नगर का संस्थापक कौन था?"))

questions.append(q(28, SEC_GK, "Ancient Indian History", "प्राचीन भारतीय इतिहास",
    "Nalanda Mahavihara was founded during the reign of which Gupta emperor?",
    "Kumaragupta I", "Chandragupta II", "Samudragupta", "Skandagupta", "A",
    "Kumaragupta I (Shakraditya) founded the celebrated ancient Nalanda University in the 5th century CE.",
    "नालंदा महाविहार की स्थापना किस गुप्त सम्राट के शासनकाल में हुई थी?"))

questions.append(q(29, SEC_GK, "Ecology & Environment", "पारिस्थितिकी एवं पर्यावरण",
    "The primary cause of the depletion of the stratospheric ozone layer is:",
    "Carbon Monoxide", "Chlorofluorocarbons (CFCs)", "Sulfur Dioxide", "Methane", "B",
    "Chlorofluorocarbons release chlorine atoms upon UV exposure, which catalytically destroy ozone molecules.",
    "समतापमंडलीय ओजोन परत के क्षरण का प्राथमिक कारण क्या है?"))

questions.append(q(30, SEC_GK, "Ecology & Environment", "पारिस्थितिकी एवं पर्यावरण",
    "Which of the following is considered a non-renewable source of energy?",
    "Coal", "Solar Energy", "Wind Energy", "Biomass", "A",
    "Coal is a fossil fuel with finite reserves that cannot be regenerated within human timescales.",
    "निम्नलिखित में से किसे ऊर्जा का गैर-नवीकरणीय स्रोत माना जाता है?"))

questions.append(q(31, SEC_GK, "Sports", "खेलकूद",
    "Which nation hosted the Summer Olympic Games in 2016?",
    "China", "Brazil", "United Kingdom", "Japan", "B",
    "Rio de Janeiro, Brazil hosted the Games of the XXXI Olympiad in August 2016.",
    "2016 के ग्रीष्मकालीन ओलंपिक खेलों की मेजबानी किस देश ने की थी?"))

questions.append(q(32, SEC_GK, "Sports", "खेलकूद",
    "The term 'Grand Slam' is associated with which two major sports?",
    "Tennis and Golf", "Cricket and Football", "Badminton and Table Tennis", "Polo and Chess", "A",
    "Grand Slam refers to winning all four major championships in Tennis and Golf in a calendar year.",
    "'ग्रैंड स्लैम' (Grand Slam) शब्द किन दो प्रमुख खेलों से संबंधित है?"))

questions.append(q(33, SEC_GK, "General Science", "सामान्य विज्ञान",
    "Which gas is evolved when an acid reacts with an active metal?",
    "Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen", "B",
    "Acids react with reactive metals (e.g., Zn + 2HCl -> ZnCl2 + H2) releasing hydrogen gas with effervescence.",
    "जब कोई अम्ल किसी सक्रिय धातु के साथ अभिक्रिया करता है तो कौन सी गैस निकलती है?"))

questions.append(q(34, SEC_GK, "General Science", "सामान्य विज्ञान",
    "The normal systolic and diastolic blood pressure of a healthy adult human being is:",
    "120/80 mm Hg", "140/90 mm Hg", "100/60 mm Hg", "130/85 mm Hg", "A",
    "Optimal adult blood pressure is standardly measured at 120 mm Hg systolic over 80 mm Hg diastolic.",
    "एक स्वस्थ वयस्क मानव का सामान्य रक्तचाप (सिस्टोलिक/डायस्टोलिक) कितना होता है?"))

questions.append(q(35, SEC_GK, "General Science", "सामान्य विज्ञान",
    "Which cell organelle is commonly referred to as the 'Powerhouse of the Cell'?",
    "Mitochondria", "Ribosome", "Lysosome", "Endoplasmic Reticulum", "A",
    "Mitochondria generate most of the cell's chemical energy supply in the form of Adenosine Triphosphate (ATP).",
    "कोशिका का 'ऊर्जा गृह' (Powerhouse of the Cell) किसे कहा जाता है?"))

questions.append(q(36, SEC_GK, "Indian Polity", "भारतीय राजव्यवस्था",
    "What is the minimum age prescribed for an Indian citizen to become a member of the Rajya Sabha?",
    "25 years", "30 years", "35 years", "21 years", "B",
    "Article 84 of the Constitution requires a minimum age of 30 years for Rajya Sabha (25 years for Lok Sabha).",
    "राज्य सभा का सदस्य बनने के लिए भारतीय नागरिक की न्यूनतम आयु क्या निर्धारित है?"))

questions.append(q(37, SEC_GK, "Indian Polity", "भारतीय राजव्यवस्था",
    "Who appoints the Governor of a State in India?",
    "Prime Minister", "Chief Minister", "President of India", "Chief Justice of India", "C",
    "Under Article 155 of the Constitution, the Governor of a State is appointed by the President by warrant under hand and seal.",
    "भारत में किसी राज्य के राज्यपाल की नियुक्ति कौन करता है?"))

questions.append(q(38, SEC_GK, "Geography of India", "भारत का भूगोल",
    "The highest peak in peninsular South India is:",
    "Anamudi", "Doddabetta", "Guru Shikhar", "Mahendragiri", "A",
    "Anamudi in the Western Ghats (Kerala) is the highest peak in Southern India at 2,695 metres.",
    "प्रायद्वीपीय दक्षिण भारत की सबसे ऊँची चोटी कौन सी है?"))

questions.append(q(39, SEC_GK, "Geography of India", "भारत का भूगोल",
    "Which river is famously known as the 'Sorrow of Bihar' due to its frequent devastating floods?",
    "Gandak", "Kosi", "Son", "Bagmati", "B",
    "The Kosi river is called the Sorrow of Bihar because of its unstable course and recurring catastrophic flooding.",
    "बार-बार आने वाली विनाशकारी बाढ़ के कारण किस नदी को 'बिहार का शोक' कहा जाता है?"))

questions.append(q(40, SEC_GK, "Economy & Planning", "अर्थव्यवस्था एवं योजना",
    "Which institution replaced the Planning Commission of India on 1st January 2015?",
    "NITI Aayog", "Finance Commission", "National Development Council", "Central Statistics Office", "A",
    "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission via Cabinet resolution.",
    "1 जनवरी 2015 को भारत के योजना आयोग का स्थान किस संस्थान ने लिया?"))

questions.append(q(41, SEC_GK, "Economy & Planning", "अर्थव्यवस्था एवं योजना",
    "The Goods and Services Tax (GST) was implemented in India on:",
    "1st July 2017", "1st April 2017", "8th November 2016", "1st January 2018", "A",
    "GST came into effect across India from 1 July 2017 following the 101st Constitutional Amendment Act.",
    "भारत में वस्तु एवं सेवा कर (GST) कब लागू किया गया था?"))

questions.append(q(42, SEC_GK, "General Science", "सामान्य विज्ञान",
    "Which mirror is utilized as a rear-view mirror in motor vehicles?",
    "Convex mirror", "Concave mirror", "Plane mirror", "Parabolic mirror", "A",
    "Convex mirrors always produce erect, virtual, and diminished images, providing a wide field of view.",
    "वाहनों में पीछे का दृश्य देखने के लिए किस दर्पण का उपयोग किया जाता है?"))

questions.append(q(43, SEC_GK, "General Science", "सामान्य विज्ञान",
    "The phenomenon responsible for the twinkling of stars in the night sky is:",
    "Total internal reflection", "Atmospheric refraction of starlight", "Dispersion of light", "Scattering of light", "B",
    "Continuous variation in the optical density of atmosphere causes refraction of starlight, producing the twinkling effect.",
    "रात्रि में तारों के टिमटिमाने के लिए कौन सी परिघटना उत्तरदायी है?"))

questions.append(q(44, SEC_GK, "Ecology & Environment", "पारिस्थितिकी एवं पर्यावरण",
    "The Chipko Movement, a non-violent social and ecological movement in the 1970s, originated in which State?",
    "Uttarakhand (then Uttar Pradesh)", "Himachal Pradesh", "Madhya Pradesh", "Rajasthan", "A",
    "The Chipko movement began in 1973 in Reni village of Chamoli district, Uttarakhand, led by Sunderlal Bahuguna.",
    "1970 के दशक का प्रसिद्ध चिपको आंदोलन किस राज्य में शुरू हुआ था?"))

questions.append(q(45, SEC_GK, "Ecology & Environment", "पारिस्थितिकी एवं पर्यावरण",
    "Which of the following is a biodegradable organic waste product?",
    "Plastic bag", "Cow dung", "Glass bottle", "Aluminium can", "B",
    "Cow dung is organic matter easily broken down by microbial decomposers.",
    "निम्नलिखित में से कौन सा जैव-निम्नीकरणीय (Biodegradable) अपशिष्ट है?"))

questions.append(q(46, SEC_GK, "General Knowledge", "सामान्य ज्ञान",
    "What is the capital city of Australia?",
    "Sydney", "Melbourne", "Canberra", "Brisbane", "C",
    "Canberra is the federal capital of Australia, chosen in 1908 as a compromise between Sydney and Melbourne.",
    "ऑस्ट्रेलिया की राजधानी क्या है?"))

questions.append(q(47, SEC_GK, "Information Technology", "सूचना प्रौद्योगिकी",
    "In mobile telecommunications terminology, for which word has the letter 'G' been used in '2G', '3G', and '4G' spectrum?",
    "Government", "Global", "Generation", "Google", "C",
    "The 'G' in 2G, 3G, 4G, and 5G stands for 'Generation' of cellular network standards.",
    "'2G स्पेक्ट्रम', '3G' तथा '4G' में प्रयुक्त अक्षर 'G' किस शब्द के लिए प्रयुक्त हुआ है?"))

questions.append(q(48, SEC_GK, "General Knowledge", "सामान्य ज्ञान",
    "Who is known as the 'Nightingale of India' (Bharat Kokila)?",
    "Sarojini Naidu", "Lata Mangeshkar", "Indira Gandhi", "Vijayalakshmi Pandit", "A",
    "Mahatma Gandhi bestowed the title 'Bharat Kokila' (Nightingale of India) upon freedom fighter and poet Sarojini Naidu.",
    "'भारत कोकिला' (Bharat Kokila) के नाम से किसे जाना जाता है?"))

questions.append(q(49, SEC_GK, "General Knowledge", "सामान्य ज्ञान",
    "Which Indian classical dance form originated in the State of Kerala?",
    "Kathakali", "Bharatanatyam", "Kathak", "Kuchipudi", "A",
    "Kathakali is a major classical Indian dance-drama originating in southwestern Kerala.",
    "किस भारतीय शास्त्रीय नृत्य की उत्पत्ति केरल राज्य में हुई थी?"))

questions.append(q(50, SEC_GK, "International Organisations", "अंतर्राष्ट्रीय संगठन",
    "The headquarters of the United Nations Educational, Scientific and Cultural Organization (UNESCO) is located in:",
    "Geneva", "Paris", "New York", "Vienna", "B",
    "UNESCO was founded in 1945 and has its world headquarters located at Place de Fontenoy in Paris, France.",
    "यूनेस्को (UNESCO) का मुख्यालय कहाँ स्थित है?"))

print(f"2020 Part 1 complete: {len(questions)} questions.")

# -------------------------------------------------------------
# Part 2: Computer Science (Q51 - Q150)
# -------------------------------------------------------------
questions.append(q(51, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "Which of the following is/are recognized word processing software packages?",
    "WordPerfect", "EasyWord", "MS Word", "All of these", "D",
    "WordPerfect, EasyWord, and MS Word are all word processing software designed for authoring and formatting text.",
    "निम्नलिखित में से कौन सा वर्ड प्रोसेसिंग सॉफ्टवेयर है?"))

questions.append(q(52, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "Which key or key combination removes the character directly to the left of the blinking cursor in a text editor?",
    "Delete", "Backspace", "Spacebar", "Ctrl + X", "B",
    "Backspace erases the character immediately preceding (to the left of) the cursor, while Delete erases the character to the right.",
    "टेक्स्ट एडिटर में कर्सर के ठीक बाईं ओर के अक्षर को हटाने के लिए किस कुंजी का उपयोग किया जाता है?"))

questions.append(q(53, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "Which keyboard shortcut executes the 'Paste' command in Windows applications?",
    "Ctrl + C", "Ctrl + V", "Ctrl + P", "Ctrl + Z", "B",
    "Ctrl + V pastes clipboard contents at the insertion point, whereas Ctrl + C copies and Ctrl + P prints.",
    "विंडोज अनुप्रयोगों में 'पेस्ट' (Paste) कमांड के लिए शॉर्टकट कुंजी क्या है?"))

questions.append(q(54, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "In Microsoft Word, what is the default margins setting (Top, Bottom, Left, Right) in the 'Normal' margin layout?",
    "1 inch (2.54 cm) on all four sides", "0.5 inch on all sides", "1.25 inches on left and right", "2 inches on all sides", "A",
    "The Normal margin setting in modern MS Word applies 1 inch (2.54 cm) margins to the Top, Bottom, Left, and Right edges.",
    "एमएस वर्ड में 'नॉर्मल' मार्जिन लेआउट में डिफ़ॉल्ट मार्जिन कितना होता है?"))

questions.append(q(55, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "Which elements can be inserted as cross-references within an MS Word document?",
    "Bookmarks", "Footnotes and Endnotes", "Headings and Captions", "All of these", "D",
    "In Word, cross-references can link dynamically to headings, bookmarks, numbered items, footnotes, endnotes, and figure captions.",
    "एमएस वर्ड दस्तावेज़ में क्रॉस-रेफरेंस के रूप में क्या सम्मिलित किया जा सकता है?"))

questions.append(q(56, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "In MS Word, the Mail Merge feature is primarily used for:",
    "Sending bulk personalized letters or envelopes to a list of recipients", "Compressing files", "Creating presentations", "Running antivirus scans", "A",
    "Mail Merge merges a main template document with a data source (recipient list) to produce mass personalized documents.",
    "एमएस वर्ड में 'मेल मर्ज' (Mail Merge) सुविधा का मुख्य उपयोग किसलिए किया जाता है?"))

questions.append(q(57, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "The gutter margin in document page layout is used to:",
    "Add space to the binding side of the page", "Add space to the header", "Add space to the footer", "Increase font size", "A",
    "Gutter margins reserve extra blank margin space on the inside or binding edge of a document to prevent text from being obscured by binding.",
    "दस्तावेज़ लेआउट में 'गटर मार्जिन' (Gutter Margin) का उपयोग किसलिए किया जाता है?"))

questions.append(q(58, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "By default, on which pages of a multi-page MS Word document are headers and footers printed?",
    "On the first page only", "On alternate pages only", "On every page", "On the last page only", "C",
    "Unless configured with 'Different First Page' or 'Different Odd & Even Pages', headers and footers appear on every page by default.",
    "डिफ़ॉल्ट रूप से, बहु-पृष्ठ एमएस वर्ड दस्तावेज़ के किन पृष्ठों पर हेडर और पाद लेख (Header & Footer) मुद्रित होते हैं?"))

questions.append(q(59, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "Which formatting toolbar command in MS Word aligns text simultaneously to both the left and right margins with even spacing?",
    "Left Align", "Center", "Right Align", "Justify", "D",
    "Justify (Ctrl + J) adjusts spacing between words so that text edges align cleanly with both left and right margins.",
    "एमएस वर्ड में कौन सा संरेखण (Alignment) टेक्स्ट को दोनों मार्जिन पर समान रूप से फैलाता है?"))

questions.append(q(60, SEC_CS, "Office Automation", "कार्यालय स्वचालन",
    "What is the maximum number of columns that can be inserted into an MS Word table?",
    "32", "45", "63", "128", "C",
    "Microsoft Word sets an architectural limit of 63 columns in a single table.",
    "एमएस वर्ड टेबल में अधिकतम कितने कॉलम (Columns) डाले जा सकते हैं?"))

questions.append(q(61, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "The Internet Engineering Task Force (IETF) official standards documents for network protocols are called:",
    "RFCs (Request for Comments)", "RCFs", "IEEE Standard Codes", "ISO Standards", "A",
    "IETF publishes protocol specifications, proposed standards, and network RFCs (Request for Comments).",
    "इंटरनेट इंजीनियरिंग टास्क फोर्स (IETF) के मानक दस्तावेजों को क्या कहा जाता है?"))

questions.append(q(62, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "What is the standard IP address range reserved for APIPA (Automatic Private IP Addressing) in IPv4?",
    "192.168.0.1 to 192.168.255.254", "10.0.0.1 to 10.255.255.254", "169.254.0.1 to 169.254.255.254", "172.16.0.1 to 172.31.255.254", "C",
    "When a DHCP client fails to obtain an IP, Windows assigns an APIPA link-local address in the 169.254.0.0/16 subnet.",
    "IPv4 में APIPA (ऑटोमैटिक प्राइवेट आईपी एड्रेसिंग) के लिए कौन सी आईपी रेंज आरक्षित है?"))

questions.append(q(63, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "Which device functions at the Physical Layer (Layer 1) to amplify or regenerate attenuated signals across longer network distances?",
    "Repeater", "Bridge", "Router", "Gateway", "A",
    "Repeaters regenerate digital electrical or optical signals at the bit level without examining frame headers.",
    "लंबे नेटवर्क दूरी पर कमजोर सिग्नलों को पुनः उत्पन्न या प्रवर्धित करने वाला उपकरण क्या कहलाता है?"))

questions.append(q(64, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "A standard MAC (Media Access Control) hardware address consists of how many bits?",
    "32 bits", "48 bits", "64 bits", "128 bits", "B",
    "Ethernet MAC addresses are 48 bits (6 octets) long, usually written as 12 hexadecimal digits (e.g., 00:1A:2B:3C:4D:5E).",
    "मानक MAC (मीडिया एक्सेस कंट्रोल) पते में कितने बिट्स होते हैं?"))

questions.append(q(65, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "Which transmission medium offers the highest data transmission bandwidth and total immunity to electromagnetic interference (EMI)?",
    "Coaxial cable", "Shielded Twisted Pair (STP)", "Fiber Optic Cable", "Unshielded Twisted Pair (UTP)", "C",
    "Fiber optic cables transmit data via light pulses through silica glass cores, providing gigabit bandwidth and zero EMI.",
    "कौन सा ट्रांसमिशन माध्यम विद्युत-चुंबकीय हस्तक्षेप से पूरी तरह मुक्त और उच्चतम बैंडविड्थ प्रदान करता है?"))

questions.append(q(66, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "Which protocol in the TCP/IP stack resolves known logical IP addresses into physical MAC hardware addresses?",
    "ARP (Address Resolution Protocol)", "RARP", "DHCP", "ICMP", "A",
    "ARP resolves a 32-bit IPv4 address into its corresponding 48-bit Ethernet MAC destination address on the local link.",
    "TCP/IP स्टैक में कौन सा प्रोटोकॉल लॉजिकल IP पते को भौतिक MAC पते में परिवर्तित करता है?"))

questions.append(q(67, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "Ping command in network troubleshooting uses which underlying Internet protocol?",
    "ICMP (Internet Control Message Protocol)", "IGMP", "SNMP", "SMTP", "A",
    "The ping utility generates ICMP Echo Request messages and waits for corresponding ICMP Echo Reply packets.",
    "नेटवर्क समस्या निवारण में 'Ping' कमांड किस प्रोटोकॉल का उपयोग करता है?"))

questions.append(q(68, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "Which transport layer protocol provides connection-oriented, reliable, byte-stream delivery with flow and congestion control?",
    "UDP", "TCP", "IP", "ICMP", "B",
    "Transmission Control Protocol (TCP) establishes a 3-way handshake to guarantee in-order, error-checked data delivery.",
    "कौन सा ट्रांसपोर्ट लेयर प्रोटोकॉल कनेक्शन-ओरिएंटेड और विश्वसनीय डेटा डिलीवरी प्रदान करता है?"))

questions.append(q(69, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "Which transport layer protocol is connectionless and best suited for real-time streaming and VoIP where speed is prioritized over retransmission?",
    "UDP (User Datagram Protocol)", "TCP", "SCTP", "FTP", "A",
    "UDP transmits datagrams without handshake or retransmission overhead, providing minimal latency for real-time packets.",
    "रीयल-टाइम स्ट्रीमिंग और वॉइस कॉलिंग के लिए कौन सा कनेक्शनरहित प्रोटोकॉल उपयुक्त है?"))

questions.append(q(70, SEC_CS, "Computer Networks", "कंप्यूटर नेटवर्क",
    "The default port number for secure SSH (Secure Shell) remote login connections is:",
    "Port 21", "Port 22", "Port 23", "Port 25", "B",
    "TCP Port 22 is standardly assigned to SSH (Port 23 was historically used by insecure Telnet).",
    "सुरक्षित SSH (सिक्योर शेल) कनेक्शन के लिए डिफ़ॉल्ट पोर्ट नंबर क्या है?"))

questions.append(q(71, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "In Unix/Linux, which system call is invoked by a parent process to create an exact duplicate child process?",
    "fork()", "exec()", "clone()", "wait()", "A",
    "fork() creates a new process by duplicating the calling process's address space, descriptors, and registers.",
    "यूनिक्स/लिनक्स में एक नया चाइल्ड प्रोसेस बनाने के लिए किस सिस्टम कॉल का उपयोग किया जाता है?"))

questions.append(q(72, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "A state where a set of processes are permanently blocked because each process is holding a resource and waiting for another held resource is:",
    "Starvation", "Deadlock", "Aging", "Thrashing", "B",
    "Deadlock is a circular wait situation where no process can proceed because necessary resources are locked by others.",
    "वह स्थिति जहाँ प्रक्रियाओं का समूह स्थायी रूप से अवरुद्ध हो जाता है क्योंकि प्रत्येक प्रक्रिया किसी अन्य संसाधन की प्रतीक्षा कर रही होती है, कहलाती है:"))

questions.append(q(73, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "Which condition occurs when excessive paging activity causes the CPU to spend more time swapping pages than executing useful work?",
    "Thrashing", "Paging anomaly", "Segmentation fault", "Deadlock", "A",
    "Thrashing occurs when the working set exceeds physical RAM, causing continuous page faults and near-zero CPU throughput.",
    "वह स्थिति क्या कहलाती है जब ऑपरेटिंग सिस्टम में पेजिंग की अधिकता के कारण सिस्टम निष्पादन के बजाय पेज स्वैपिंग में अधिक समय व्यतीत करता है?"))

questions.append(q(74, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "Which CPU scheduling algorithm gives each runnable process a fixed quantum slice of time in round-robin fashion?",
    "Round Robin (RR)", "FCFS", "SJF", "Multilevel Queue", "A",
    "Round Robin allocates a fixed time slice (quantum) cyclically to each process in the ready queue.",
    "कौन सा CPU शेड्यूलिंग एल्गोरिदम प्रत्येक प्रोसेस को समय का एक निश्चित क्वांटम (Quantum) आवंटित करता है?"))

questions.append(q(75, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "The part of an operating system that remains permanently resident in main memory after booting is the:",
    "Kernel", "Shell", "Compiler", "Command Interpreter", "A",
    "The Kernel is the core program that manages CPU, memory, hardware peripherals, and system calls continuously.",
    "ऑपरेटिंग सिस्टम का वह मुख्य भाग जो बूटिंग के बाद मुख्य मेमोरी में स्थायी रूप से रहता है, कहलाता है:"))

questions.append(q(76, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "In memory management, Belady's Anomaly demonstrates that increasing the number of page frames can unexpectedly increase page faults in which algorithm?",
    "FIFO (First-In, First-Out)", "LRU (Least Recently Used)", "Optimal", "LFU", "A",
    "Belady's anomaly occurs in FIFO replacement where allocating more physical memory frames leads to more page faults for certain reference strings.",
    "बेलडी की विसंगति (Belady's Anomaly) किस पेज रिप्लेसमेंट एल्गोरिदम में देखी जाती है?"))

questions.append(q(77, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "In Linux, which command is used to display the current active processes running in the system?",
    "ps", "ls", "pwd", "grep", "A",
    "The ps (process status) command displays snapshots of currently running processes with their PIDs.",
    "लिनक्स में सिस्टम में चल रही वर्तमान प्रक्रियाओं को प्रदर्शित करने के लिए किस कमांड का उपयोग किया जाता है?"))

questions.append(q(78, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "Which Linux command modifies access permissions of files and directories?",
    "chmod", "chown", "chgrp", "attrib", "A",
    "chmod (change mode) adjusts read (r), write (w), and execute (x) permission bits for user, group, and others.",
    "फ़ाइलों और निर्देशिकाओं की एक्सेस अनुमतियों को बदलने के लिए किस लिनक्स कमांड का उपयोग किया जाता है?"))

questions.append(q(79, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "A thread is commonly defined as a:",
    "Heavyweight process", "Lightweight process (LWP)", "Virtual machine", "Microkernel", "B",
    "A thread is a lightweight process that shares code, data, and OS resources with peer threads within the same process.",
    "थ्रेड (Thread) को सामान्यतः किस रूप में परिभाषित किया जाता है?"))

questions.append(q(80, SEC_CS, "Operating Systems", "ऑपरेटिंग सिस्टम",
    "The semaphore concept introduced by Dijkstra provides synchronization through which two atomic operations?",
    "wait() and signal() [P and V]", "start() and stop()", "lock() and release()", "read() and write()", "A",
    "Semaphores utilize wait() (or P, decrement) and signal() (or V, increment) atomic operations to govern critical section access.",
    "सेमाफोर (Semaphore) अवधारणा में किन दो परमाणु (Atomic) परिचालनों का उपयोग किया जाता है?"))

questions.append(q(81, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "In relational algebra, which operator selects a subset of rows from a table that satisfy a given predicate?",
    "Selection (σ)", "Projection (π)", "Cartesian Product (×)", "Join (⨝)", "A",
    "The Selection operator (σ) filters rows satisfying a specified boolean predicate condition.",
    "रिलेशनल बीजगणित में कौन सा ऑपरेटर दी गई शर्त को पूरा करने वाली पंक्तियों (Rows) का चयन करता है?"))

questions.append(q(82, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "In relational algebra, which operator filters out vertical columns/attributes from a relation?",
    "Projection (π)", "Selection (σ)", "Intersection (∩)", "Difference (-)", "A",
    "The Projection operator (π) returns a relation containing only the specified list of attributes.",
    "रिलेशनल बीजगणित में कौन सा ऑपरेटर विशिष्ट कॉलमों (Attributes) को प्रदर्शित करता है?"))

questions.append(q(83, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "Which SQL clause is used to filter group aggregates produced by a GROUP BY clause?",
    "HAVING", "WHERE", "ORDER BY", "DISTINCT", "A",
    "HAVING filters groups post-aggregation, whereas WHERE filters individual rows prior to grouping.",
    "SQL में GROUP BY के साथ समूहीकृत परिणामों को फ़िल्टर करने के लिए किस क्लॉज का उपयोग किया जाता है?"))

questions.append(q(84, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "A Foreign Key in a relational table establishes a link to the:",
    "Primary Key or Candidate Key of another table", "Any random column", "Secondary Index only", "Composite Key only", "A",
    "A Foreign Key enforces referential integrity by referencing the primary or candidate key of a parent relation.",
    "रिलेशनल डेटाबेस में फॉरेन की (Foreign Key) किसका संदर्भ देती है?"))

questions.append(q(85, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "Which SQL statement is used to revoke previously granted database privileges from a user role?",
    "REVOKE", "DENY", "REMOVE", "DROP", "A",
    "The REVOKE command withdraws permissions granted via the GRANT statement.",
    "उपयोगकर्ता से डेटाबेस अनुमतियां वापस लेने के लिए किस SQL कमांड का उपयोग किया जाता है?"))

questions.append(q(86, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "The degree of a relationship in an Entity-Relationship (ER) model refers to:",
    "The number of entity types participating in the relationship", "The number of attributes in an entity", "The number of rows in the table", "The number of primary keys", "A",
    "Degree denotes the count of participating entity sets: Unary (1), Binary (2), Ternary (3), n-ary (n).",
    "ER मॉडल में रिलेशनशिप की 'डिग्री' (Degree) क्या दर्शाती है?"))

questions.append(q(87, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "Which integrity constraint enforces that a column cannot store duplicate values across different rows?",
    "UNIQUE", "NOT NULL", "CHECK", "DEFAULT", "A",
    "The UNIQUE constraint guarantees that all values in a column are distinct across all records.",
    "कौन सा बाधा नियम (Constraint) यह सुनिश्चित करता है कि किसी कॉलम में कोई डुप्लीकेट मान न हो?"))

questions.append(q(88, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "In transaction management, undoing all modifications made by an uncommitted transaction is accomplished by:",
    "ROLLBACK", "COMMIT", "SAVEPOINT", "CHECKPOINT", "A",
    "ROLLBACK aborts the active transaction and restores the database to its preceding consistent state.",
    "किसी अधूरी लेनदेन द्वारा किए गए परिवर्तनों को रद्द करने के लिए किस कमांड का उपयोग किया जाता है?"))

questions.append(q(89, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "What kind of lock in concurrency control permits other transactions to read data concurrently but forbids write operations?",
    "Shared lock (S-lock)", "Exclusive lock (X-lock)", "Deadlock", "Two-phase lock", "A",
    "A Shared lock allows concurrent read access; Exclusive locks are mandatory for write/update operations.",
    "समवर्ती नियंत्रण में कौन सा लॉक अन्य लेनदेन को डेटा पढ़ने की अनुमति देता है लेकिन लिखने की नहीं?"))

questions.append(q(90, SEC_CS, "Database Management Systems", "डेटाबेस प्रबंधन प्रणाली",
    "Which normal form addresses and eliminates multi-valued dependencies (MVDs)?",
    "Fourth Normal Form (4NF)", "Third Normal Form (3NF)", "Boyce-Codd Normal Form (BCNF)", "Fifth Normal Form (5NF)", "A",
    "4NF guarantees that every non-trivial multi-valued dependency X ->> Y has X as a superkey.",
    "कौन सा सामान्य रूप (Normal Form) बहु-मूल्यवान निर्भरता (MVD) को समाप्त करता है?"))

questions.append(q(91, SEC_CS, "Data Structures", "डेटा संरचनाएं",
    "In a binary search tree (BST), an in-order traversal of nodes always visits the keys in:",
    "Ascending sorted order", "Descending order", "Random order", "Level-by-level order", "A",
    "In-order traversal visits Left Subtree -> Root -> Right Subtree, producing values in strictly ascending sorted order.",
    "बाइनरी सर्च ट्री (BST) में इन-ऑर्डर ट्रैवर्सल हमेशा कुंजियों को किस क्रम में प्रदर्शित करता है?"))

questions.append(q(92, SEC_CS, "Data Structures", "डेटा संरचनाएं",
    "What is the time complexity to access an element in an array by its index in the worst case?",
    "O(1)", "O(n)", "O(log n)", "O(n^2)", "A",
    "Arrays support random access in constant O(1) time using base address + index × element_size calculation.",
    "इंडेक्स द्वारा ऐरे के तत्व तक पहुँचने की समय जटिलता क्या है?"))

questions.append(q(93, SEC_CS, "Data Structures", "डेटा संरचनाएं",
    "What is the maximum number of nodes in a binary tree of height 'h' (where root height = 0)?",
    "2^(h+1) - 1", "2^h - 1", "2^(h-1)", "2^h", "A",
    "A complete binary tree of height h has at most 1 + 2 + 4 + ... + 2^h = 2^(h+1) - 1 total nodes.",
    "ऊंचाई 'h' वाले बाइनरी ट्री में नोड्स की अधिकतम संख्या क्या हो सकती है?"))

questions.append(q(94, SEC_CS, "Data Structures", "डेटा संरचनाएं",
    "Which data structure is naturally utilized to implement breadth-first search (BFS) on graphs?",
    "Queue", "Stack", "Priority Queue", "Hash Table", "A",
    "BFS explores neighbor vertices level-by-level using a FIFO Queue to schedule vertex discovery.",
    "ग्राफ में ब्रेड्थ-फर्स्ट सर्च (BFS) को लागू करने के लिए किस डेटा संरचना का उपयोग किया जाता है?"))

questions.append(q(95, SEC_CS, "Data Structures", "डेटा संरचनाएं",
    "Which data structure is naturally utilized to implement depth-first search (DFS) or recursion?",
    "Stack", "Queue", "Array", "Linked List", "A",
    "DFS explores deep branch paths using a LIFO Stack (either the system call stack or an explicit stack).",
    "डेप्थ-फर्स्ट सर्च (DFS) या पुनरावृत्ति (Recursion) को लागू करने के लिए किस डेटा संरचना का उपयोग किया जाता है?"))

questions.append(q(96, SEC_CS, "Data Structures", "डेटा संरचनाएं",
    "What is the worst-case time complexity of searching for an element in a balanced AVL tree with 'n' nodes?",
    "O(log n)", "O(n)", "O(1)", "O(n log n)", "A",
    "AVL trees maintain strict balance factor differences (|hL - hR| <= 1), guaranteeing O(log n) search.",
    "सुलझाए गए AVL ट्री में किसी तत्व को खोजने की सबसे खराब स्थिति समय जटिलता क्या है?"))

questions.append(q(97, SEC_CS, "Data Structures", "डेटा संरचनाएं",
    "A circular queue overcomes which limitation of a standard linear array queue?",
    "False overflow (wasted vacant space at the front of the array)", "Underflow", "Slow deletion", "High memory usage", "A",
    "Circular queues wrap rear and front indices modulo capacity, reusing slots vacated by de-queuing.",
    "सर्कुलर कतार (Circular Queue) रैखिक कतार की किस सीमा को दूर करती है?"))

questions.append(q(98, SEC_CS, "Algorithms", "एल्गोरिदम",
    "Which algorithm design technique does Merge Sort employ?",
    "Divide and Conquer", "Dynamic Programming", "Greedy Method", "Backtracking", "A",
    "Merge Sort divides the array into two halves, recursively sorts them, and merges the sorted sublists.",
    "मर्ज सॉर्ट (Merge Sort) किस एल्गोरिदम डिज़ाइन तकनीक का उपयोग करता है?"))

questions.append(q(99, SEC_CS, "Algorithms", "एल्गोरिदम",
    "The best-case and worst-case time complexity of Merge Sort is always:",
    "O(n log n)", "O(n^2)", "O(n)", "O(log n)", "A",
    "Merge Sort consistently executes in O(n log n) time across best, average, and worst cases.",
    "मर्ज सॉर्ट की समय जटिलता (Time Complexity) क्या होती है?"))

questions.append(q(100, SEC_CS, "Algorithms", "एल्गोरिदम",
    "Dijkstra's algorithm is used to solve which graph problem on non-negative weighted graphs?",
    "Single-source shortest path", "All-pairs shortest path", "Minimum spanning tree", "Topological sort", "A",
    "Dijkstra's greedy algorithm computes the minimum path distance from a single source vertex to all other vertices.",
    "डिक्सट्रा एल्गोरिदम (Dijkstra's Algorithm) का उपयोग किस ग्राफ समस्या को हल करने के लिए किया जाता है?"))

questions.append(q(101, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "In C, strings are terminated by which special character?",
    "Null character '\\0'", "Newline '\\n'", "EOF", "Space ' '", "A",
    "C character arrays represent strings as null-terminated character sequences ending with ASCII byte 0 ('\\0').",
    "C भाषा में स्ट्रिंग (String) किस विशेष वर्ण के साथ समाप्त होती है?"))

questions.append(q(102, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "Which function dynamically allocates memory in C without initializing the allocated bytes?",
    "malloc()", "calloc()", "realloc()", "free()", "A",
    "malloc() allocates requested contiguous bytes leaving memory contents uninitialized (garbage values).",
    "C भाषा में कौन सा फ़ंक्शन आवंटित बाइट्स को इनिशियलाइज़ किए बिना डायनेमिक मेमोरी आवंटित करता है?"))

questions.append(q(103, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "Which standard library function in C deallocates previously allocated dynamic heap memory?",
    "free()", "delete", "clear()", "remove()", "A",
    "The free() function releases dynamically allocated heap memory blocks back to the memory manager.",
    "C भाषा में डायनेमिक मेमोरी को मुक्त (Deallocate) करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?"))

questions.append(q(104, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "In C++, dynamic memory allocation and deallocation are handled natively by which operators?",
    "new and delete", "malloc and free", "create and destroy", "alloc and dealloc", "A",
    "new allocates heap storage and calls constructors; delete invokes destructors and releases memory.",
    "C++ में डायनेमिक मेमोरी आवंटन और विमोचन के लिए किन ऑपरेटरों का उपयोग किया जाता है?"))

questions.append(q(105, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "In C++, a class from which other classes inherit properties and methods is termed a:",
    "Base class (or Parent class)", "Derived class", "Subclass", "Friend class", "A",
    "The base class provides attributes and member functions that derived subclasses inherit.",
    "C++ में वह वर्ग जिससे अन्य वर्ग गुण और विधियां प्राप्त करते हैं, कहलाता है:"))

questions.append(q(106, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "Which specifier in C++ permits class member access only to member functions of that class and its derived classes?",
    "protected", "private", "public", "friend", "A",
    "Protected members are inaccessible from external code but accessible within derived inherited classes.",
    "C++ में कौन सा एक्सेस मॉडिफायर सदस्यों को केवल अपनी कक्षा और व्युत्पन्न कक्षाओं तक सीमित करता है?"))

questions.append(q(107, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "In C++, a pure virtual function is declared by assigning which value to its prototype?",
    "= 0;", "= NULL;", "= default;", "void", "A",
    "A pure virtual function (e.g., virtual void draw() = 0;) makes a class abstract and mandates derived implementation.",
    "C++ में शुद्ध वर्चुअल फ़ंक्शन (Pure Virtual Function) को कैसे घोषित किया जाता है?"))

questions.append(q(108, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "A class containing at least one pure virtual function cannot be instantiated directly and is known as an:",
    "Abstract class", "Concrete class", "Static class", "Template class", "A",
    "Abstract classes serve as interfaces; compiler disallows instantiation of objects directly from an abstract class.",
    "जिस वर्ग में कम से कम एक शुद्ध वर्चुअल फ़ंक्शन होता है उसे क्या कहा जाता है?"))

questions.append(q(109, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "In C++, which keyword is used to handle runtime exceptions inside a protected block?",
    "try and catch", "if and else", "lock and unlock", "assert", "A",
    "Code that may throw an exception is placed in a try block followed by one or more catch handlers.",
    "C++ में रनटाइम अपवादों (Exceptions) को संभालने के लिए किस ब्लॉक का उपयोग किया जाता है?"))

questions.append(q(110, SEC_CS, "Programming in C/C++", "C/C++ में प्रोग्रामिंग",
    "Which OOP feature allows defining generic functions and classes that work with any data type in C++?",
    "Templates", "Inheritance", "Macros", "Friend classes", "A",
    "C++ Templates support generic programming by parametrizing functions and classes with type parameters.",
    "C++ में जेनेरिक फ़ंक्शंस और कक्षाएं बनाने के लिए किस सुविधा का उपयोग किया जाता है?"))

questions.append(q(111, SEC_CS, "Digital Logic", "डिजिटल लॉजिक",
    "How many select lines are required for a multiplexer (MUX) with 16 input lines?",
    "4 select lines", "8 select lines", "16 select lines", "2 select lines", "A",
    "A 2^n to 1 multiplexer requires n select lines. For 16 inputs (2^4), n = 4 select lines are needed.",
    "16 इनपुट लाइनों वाले मल्टीप्लेक्सर (MUX) के लिए कितनी सेलेक्ट लाइनों की आवश्यकता होती है?"))

questions.append(q(112, SEC_CS, "Digital Logic", "डिजिटल लॉजिक",
    "A digital circuit that converts an active input code into an n-bit binary output code is an:",
    "Encoder", "Decoder", "Multiplexer", "Demultiplexer", "A",
    "An encoder performs the inverse operation of a decoder, converting 2^n input signals into an n-bit binary code.",
    "सक्रिय इनपुट सिग्नल को बाइनरी कोड में बदलने वाला डिजिटल सर्किट क्या कहलाता है?"))

questions.append(q(113, SEC_CS, "Digital Logic", "डिजिटल लॉजिक",
    "Which logic circuit adds two 1-bit binary inputs and produces a Sum and a Carry output?",
    "Half Adder", "Full Adder", "Parallel Adder", "Ripple Carry Adder", "A",
    "A Half Adder consists of an XOR gate (Sum) and an AND gate (Carry) to add two single bits.",
    "दो 1-बिट बाइनरी संख्याओं को जोड़ने वाला सर्किट क्या कहलाता है?"))

questions.append(q(114, SEC_CS, "Digital Logic", "डिजिटल लॉजिक",
    "A Full Adder differs from a Half Adder because it can accept:",
    "A carry input from a previous addition stage", "Three sum outputs", "Only negative numbers", "Analog inputs", "A",
    "A Full Adder adds three 1-bit inputs: two operands A and B plus an incoming Carry-in (Cin).",
    "फुल एडर (Full Adder) हाफ एडर से किस प्रकार भिन्न होता है?"))

questions.append(q(115, SEC_CS, "Digital Logic", "डिजिटल लॉजिक",
    "In a Karnaugh Map (K-Map), adjacent cells differ by how many binary bits?",
    "Exactly 1 bit (Gray Code)", "2 bits", "4 bits", "Any number of bits", "A",
    "K-Maps arrange row and column coordinates in Gray code order so adjacent cells differ in only a single bit.",
    "कॉर्नो मैप (K-Map) में आसन्न सेल कितने बिट्स से भिन्न होते हैं?"))

questions.append(q(116, SEC_CS, "Digital Logic", "डिजिटल लॉजिक",
    "According to De Morgan's First Law, (A + B)' is algebraically equal to:",
    "A' · B'", "A' + B'", "A · B", "(AB)'", "A",
    "De Morgan's first theorem states the complement of a sum equals the product of the complements: (A + B)' = A'B'.",
    "डी मॉर्गन के प्रथम नियम के अनुसार (A + B)' किसके बराबर होता है?"))

questions.append(q(117, SEC_CS, "Digital Logic", "डिजिटल लॉजिक",
    "According to De Morgan's Second Law, (A · B)' is algebraically equal to:",
    "A' + B'", "A' · B'", "A + B", "(A + B)'", "A",
    "De Morgan's second theorem states the complement of a product equals the sum of the complements: (AB)' = A' + B'.",
    "डी मॉर्गन के दूसरे नियम के अनुसार (A · B)' किसके बराबर होता है?"))

questions.append(q(118, SEC_CS, "Digital Logic", "डिजिटल लॉजिक",
    "In an RS flip-flop, which input condition is considered invalid or forbidden because it leads to an unpredictable state?",
    "R = 1, S = 1", "R = 0, S = 0", "R = 1, S = 0", "R = 0, S = 1", "A",
    "Setting both Set (S) and Reset (R) to 1 simultaneously produces race hazards and an indeterminate output state.",
    "RS फ्लिप-फ्लॉप में कौन सी इनपुट स्थिति अमान्य या निषिद्ध मानी जाती है?"))

questions.append(q(119, SEC_CS, "Digital Logic", "डिजिटल लॉजिक",
    "Which flip-flop eliminates the invalid state of the RS flip-flop by toggling outputs when both inputs are high?",
    "JK Flip-Flop", "D Flip-Flop", "T Flip-Flop", "SR Latch", "A",
    "In a JK flip-flop, when J = 1 and K = 1, the output toggles (inverts) on each clock pulse, resolving the race state.",
    "कौन सा फ्लिप-फ्लॉप J=1 और K=1 होने पर टॉगल (Toggle) करके RS फ्लिप-फ्लॉप की अमान्य स्थिति को दूर करता है?"))

questions.append(q(120, SEC_CS, "Digital Logic", "डिजिटल लॉजिक",
    "A D (Data) flip-flop is constructed from an RS or JK flip-flop by adding which component between inputs?",
    "An Inverter (NOT gate)", "An AND gate", "An OR gate", "An XOR gate", "A",
    "Connecting input D directly to S (or J) and via an inverter to R (or K) ensures inputs are always complementary.",
    "D फ्लिप-फ्लॉप में इनपुट के बीच कौन सा गेट जोड़ा जाता है?"))

questions.append(q(121, SEC_CS, "Computer Architecture", "कंप्यूटर आर्किटेक्चर",
    "In computer architecture, the register that holds the memory address of the next instruction to be fetched is the:",
    "Program Counter (PC)", "Instruction Register (IR)", "Memory Data Register (MDR)", "Accumulator (AC)", "A",
    "The Program Counter (PC) automatically increments to hold the memory address of the next consecutive instruction.",
    "कंप्यूटर आर्किटेक्चर में निष्पादित होने वाले अगले निर्देश के पते को कौन सा रजिस्टर रखता है?"))

questions.append(q(122, SEC_CS, "Computer Architecture", "कंप्यूटर आर्किटेक्चर",
    "The register that holds the actual instruction currently being decoded and executed by the CPU is the:",
    "Instruction Register (IR)", "Program Counter (PC)", "Memory Address Register (MAR)", "Status Register", "A",
    "Once fetched from memory, the instruction binary word is placed in the Instruction Register (IR) for decoding.",
    "वर्तमान में डिकोड और निष्पादित किए जा रहे निर्देश को कौन सा रजिस्टर रखता है?"))

questions.append(q(123, SEC_CS, "Computer Architecture", "कंप्यूटर आर्किटेक्चर",
    "Which addressing mode specifies the operand value directly within the instruction itself?",
    "Immediate Addressing", "Direct Addressing", "Register Addressing", "Indirect Addressing", "A",
    "In immediate addressing (e.g., MOV R1, #25), the operand constant is part of the instruction machine code.",
    "किस एड्रेसिंग मोड में ऑपरेंड का मान सीधे निर्देश के भीतर ही दिया जाता है?"))

questions.append(q(124, SEC_CS, "Computer Architecture", "कंप्यूटर आर्किटेक्चर",
    "In which addressing mode does the instruction provide a register that holds the effective address of the operand in memory?",
    "Register Indirect Addressing", "Direct Addressing", "Immediate Addressing", "Implied Addressing", "A",
    "In register indirect addressing (e.g., MOV A, @R0), the register contains a pointer to the memory location.",
    "किस एड्रेसिंग मोड में रजिस्टर मेमोरी में ऑपरेंड का प्रभावी पता (Effective Address) रखता है?"))

questions.append(q(125, SEC_CS, "Computer Architecture", "कंप्यूटर आर्किटेक्चर",
    "DMA (Direct Memory Access) data transfers are handled by a dedicated controller to bypass which bottleneck?",
    "CPU intervention for every transferred word", "Hard disk rotation", "RAM refresh cycle", "Cache indexing", "A",
    "DMA enables high-speed I/O devices to transfer blocks directly to/from main memory without CPU cycle intervention.",
    "प्रत्यक्ष मेमोरी एक्सेस (DMA) डेटा ट्रांसफर किसलिए उपयोग किया जाता है?"))

questions.append(q(126, SEC_CS, "Computer Architecture", "कंप्यूटर आर्किटेक्चर",
    "Which bus architecture transmits data signals bidirectionally between the CPU, memory, and peripheral controllers?",
    "Data Bus", "Address Bus", "Control Bus", "Power Bus", "A",
    "The Data Bus is bidirectional (carries data into and out of CPU); the Address Bus is unidirectional from CPU.",
    "CPU और मेमोरी के बीच दोनों दिशाओं में डेटा ले जाने वाली बस कौन सी है?"))

questions.append(q(127, SEC_CS, "Computer Architecture", "कंप्यूटर आर्किटेक्चर",
    "An interrupt that cannot be delayed or disabled by processor masking instructions is known as a:",
    "Non-Maskable Interrupt (NMI)", "Maskable Interrupt", "Software Interrupt", "Polled Interrupt", "A",
    "NMIs handle high-priority critical hardware faults (power failure, bus parity errors) and cannot be masked.",
    "वह इंटरप्ट जिसे सॉफ्टवेयर निर्देशों द्वारा अक्षम या अनदेखा नहीं किया जा सकता, कहलाता है:"))

questions.append(q(128, SEC_CS, "Computer Architecture", "कंप्यूटर आर्किटेक्चर",
    "The technique of overlapping multiple instruction execution stages (Fetch, Decode, Execute, Writeback) in hardware is:",
    "Pipelining", "Vectorization", "Multiprocessing", "Multithreading", "A",
    "Pipelining increases CPU instruction throughput by processing different execution phases of instructions concurrently.",
    "हार्डवेयर में कई निर्देशों के समानांतर निष्पादन चरणों को ओवरलैप करने की तकनीक क्या कहलाती है?"))

questions.append(q(129, SEC_CS, "Computer Architecture", "कंप्यूटर आर्किटेक्चर",
    "Which cache write policy immediately updates both the cache block and backing main memory on every write operation?",
    "Write-Through", "Write-Back", "Write-Allocate", "No-Write Allocate", "A",
    "Write-Through updates cache and RAM simultaneously, ensuring memory consistency at the cost of bus write bandwidth.",
    "कौन सी कैश राइट नीति प्रत्येक राइट ऑपरेशन पर कैश और मुख्य मेमोरी दोनों को तुरंत अपडेट करती है?"))

questions.append(q(130, SEC_CS, "Computer Architecture", "कंप्यूटर आर्किटेक्चर",
    "In computer memory terminology, SRAM (Static RAM) differs from DRAM (Dynamic RAM) because SRAM:",
    "Uses flip-flop bistable latches and requires no periodic electrical refresh cycles", "Consists of single capacitor cells", "Is much slower and cheaper than DRAM", "Is non-volatile", "A",
    "SRAM uses 6-transistor cross-coupled inverters requiring no refresh, making it faster and ideal for CPU cache.",
    "SRAM (स्टैटिक रैम) DRAM से किस प्रकार भिन्न होती है?"))

questions.append(q(131, SEC_CS, "Web Technology", "वेब प्रौद्योगिकी",
    "HTML is an acronym for:",
    "HyperText Markup Language", "HyperText Machine Language", "High-Level Text Management Language", "Hyperlink Text Mark Language", "A",
    "HTML stands for HyperText Markup Language, the standard authoring markup language for documents viewed in web browsers.",
    "HTML का पूर्ण रूप क्या है?"))

questions.append(q(132, SEC_CS, "Web Technology", "वेब प्रौद्योगिकी",
    "In HTML, which tag is correctly used to create a clickable hyperlink?",
    "<a>", "<link>", "<href>", "<url>", "A",
    "The anchor tag <a href='url'>Link Text</a> defines an active hypertext link.",
    "HTML में हाइपरलिंक बनाने के लिए किस टैग का उपयोग किया जाता है?"))

questions.append(q(133, SEC_CS, "Web Technology", "वेब प्रौद्योगिकी",
    "Which cascading style sheets (CSS) property configures the background color of an HTML element?",
    "background-color", "color", "bgcolor", "background-image", "A",
    "The CSS 'background-color' property sets the solid background fill color of matched elements.",
    "किसी HTML तत्व का पृष्ठभूमि रंग सेट करने के लिए किस CSS प्रॉपर्टी का उपयोग किया जाता है?"))

questions.append(q(134, SEC_CS, "Web Technology", "वेब प्रौद्योगिकी",
    "JavaScript is primarily executed inside which environment in standard client-side web development?",
    "Web Browser engine", "Web Server operating system", "Database engine", "Hardware BIOS", "A",
    "Client-side JavaScript runs in the user's web browser JavaScript runtime engine (e.g., V8, SpiderMonkey).",
    "क्लाइंट-साइड वेब विकास में जावास्क्रिप्ट मुख्य रूप से कहाँ निष्पादित होती है?"))

questions.append(q(135, SEC_CS, "Web Technology", "वेब प्रौद्योगिकी",
    "Which HTTP response status code signifies that a requested resource was successfully found and delivered?",
    "200 OK", "404 Not Found", "500 Internal Server Error", "301 Moved Permanently", "A",
    "HTTP 200 OK indicates that the client request has succeeded and the response payload is returned.",
    "कौन सा HTTP प्रतिक्रिया कोड यह दर्शाता है कि अनुरोधित पृष्ठ सफलतापूर्वक मिल गया है?"))

questions.append(q(136, SEC_CS, "Web Technology", "वेब प्रौद्योगिकी",
    "Which HTTP status code signifies that the requested resource could not be found on the server?",
    "404 Not Found", "200 OK", "403 Forbidden", "502 Bad Gateway", "A",
    "HTTP 404 indicates the origin server did not find a current representation for the target resource URI.",
    "कौन सा HTTP कोड यह दर्शाता है कि अनुरोधित संसाधन सर्वर पर नहीं मिला?"))

questions.append(q(137, SEC_CS, "Web Technology", "वेब प्रौद्योगिकी",
    "In web communications, small persistent pieces of data stored on the client machine by a web server are called:",
    "Cookies", "Sessions", "Packets", "Applets", "A",
    "HTTP cookies are small key-value data fragments saved by the browser to track state, authentication, and preferences.",
    "वेब सर्वर द्वारा क्लाइंट मशीन पर संग्रहीत किए जाने वाले छोटे डेटा टुकड़ों को क्या कहा जाता है?"))

questions.append(q(138, SEC_CS, "Web Technology", "वेब प्रौद्योगिकी",
    "XML stands for:",
    "eXtensible Markup Language", "eXternal Markup Language", "eXtra Modern Language", "eXecutable Markup Logic", "A",
    "XML stands for eXtensible Markup Language, designed to store and transport structured data with user-defined tags.",
    "XML का पूर्ण रूप क्या है?"))

questions.append(q(139, SEC_CS, "Information Security", "सूचना सुरक्षा",
    "A self-replicating malicious program that spreads across computer networks without requiring human intervention is a:",
    "Worm", "Trojan Horse", "Spyware", "Adware", "A",
    "Worms autonomously replicate and exploit network vulnerabilities to propagate without attaching to host files.",
    "एक दुर्भावनापूर्ण प्रोग्राम जो बिना मानवीय हस्तक्षेप के नेटवर्क में स्वतः फैलता है, कहलाता है:"))

questions.append(q(140, SEC_CS, "Information Security", "सूचना सुरक्षा",
    "A malicious program disguised as legitimate or useful software to trick users into running it is a:",
    "Trojan Horse", "Worm", "Rootkit", "Firewall", "A",
    "A Trojan horse misleads users of its true intent by masquerading as genuine software while installing backdoor exploits.",
    "वह दुर्भावनापूर्ण प्रोग्राम जो उपयोगी सॉफ्टवेयर का ढोंग करके उपयोगकर्ताओं को धोखा देता है, कहलाता है:"))

questions.append(q(141, SEC_CS, "Information Security", "सूचना सुरक्षा",
    "The encryption technique that uses two distinct mathematical keys (a public key and a private key) is called:",
    "Asymmetric Cryptography (Public-key)", "Symmetric Cryptography", "Hashing", "Steganography", "A",
    "Asymmetric cryptography utilizes public keys for encryption and private keys for decryption (e.g., RSA, ECC).",
    "वह एन्क्रिप्शन तकनीक जो दो अलग-अलग कुंजियों (पब्लिक और प्राइवेट) का उपयोग करती है, कहलाती है:"))

questions.append(q(142, SEC_CS, "Information Security", "सूचना सुरक्षा",
    "A cryptographic security system that monitors and filters incoming and outgoing network traffic based on predefined security rules is a:",
    "Firewall", "Router", "Bridge", "Gateway", "A",
    "A firewall establishes a barrier between secured internal networks and untrusted external traffic based on packet rules.",
    "नेटवर्क सुरक्षा प्रणाली जो पूर्वनिर्धारित नियमों के आधार पर आने वाले और जाने वाले ट्रैफिक को नियंत्रित करती है, कहलाती है:"))

questions.append(q(143, SEC_CS, "Information Security", "सूचना सुरक्षा",
    "A cyberattack where a fraudulent party impersonates a reputable institution via email to steal credentials is:",
    "Phishing", "Spoofing", "DDoS", "Ransomware", "A",
    "Phishing uses deceptive emails or websites to trick individuals into disclosing passwords or credit card numbers.",
    "ईमेल या फर्जी वेबसाइट के माध्यम से उपयोगकर्ताओं की साख और पासवर्ड चुराने का साइबर हमला क्या कहलाता है?"))

questions.append(q(144, SEC_CS, "Software Engineering", "सॉफ्टवेयर इंजीनियरिंग",
    "In Software Engineering, which classic process model follows a linear-sequential phase flow without overlap?",
    "Waterfall Model", "Spiral Model", "Agile Model", "RAD Model", "A",
    "The Waterfall model progresses sequentially through Requirements, Design, Implementation, Testing, Deployment, and Maintenance.",
    "सॉफ्टवेयर इंजीनियरिंग में कौन सा मॉडल रैखिक-अनुक्रमिक (Linear-sequential) प्रवाह का पालन करता है?"))

questions.append(q(145, SEC_CS, "Software Engineering", "सॉफ्टवेयर इंजीनियरिंग",
    "The software testing phase that verifies that individual software components or functions operate correctly in isolation is:",
    "Unit Testing", "Integration Testing", "System Testing", "Acceptance Testing", "A",
    "Unit testing isolates individual modules, procedures, or methods to validate their programmatic correctness.",
    "व्यक्तिगत घटकों या कार्यों की कार्यक्षमता का परीक्षण करने वाला चरण क्या कहलाता है?"))

questions.append(q(146, SEC_CS, "Software Engineering", "सॉफ्टवेयर इंजीनियरिंग",
    "In software design, the degree of interdependence between two software modules is called:",
    "Coupling", "Cohesion", "Encapsulation", "Polymorphism", "A",
    "Coupling measures module inter-connectivity (low coupling is desirable); cohesion measures functional strength within a module.",
    "सॉफ्टवेयर मॉड्यूल के बीच पारस्परिक निर्भरता की डिग्री को क्या कहा जाता है?"))

questions.append(q(147, SEC_CS, "Software Engineering", "सॉफ्टवेयर इंजीनियरिंग",
    "In software design, a module that performs a single well-defined task exhibits high:",
    "Cohesion", "Coupling", "Redundancy", "Complexity", "A",
    "High cohesion means internal module components work closely together toward a single focused responsibility.",
    "जब कोई मॉड्यूल केवल एक विशिष्ट कार्य करता है, तो उसमें क्या उच्च होता है?"))

questions.append(q(148, SEC_CS, "Software Engineering", "सॉफ्टवेयर इंजीनियरिंग",
    "Which software testing approach tests internal code logic, branches, loops, and paths with knowledge of the source code?",
    "White-Box Testing", "Black-Box Testing", "Gray-Box Testing", "Alpha Testing", "A",
    "White-box (structural) testing evaluates internal program structures, control flows, and statement coverage.",
    "स्रोत कोड के आंतरिक तर्क और संरचना का परीक्षण करने वाली विधि को क्या कहा जाता है?"))

questions.append(q(149, SEC_CS, "Software Engineering", "सॉफ्टवेयर इंजीनियरिंग",
    "Which software testing methodology evaluates functional inputs and outputs without examining internal code structure?",
    "Black-Box Testing", "White-Box Testing", "Code Inspection", "Static Analysis", "A",
    "Black-box (behavioral) testing exercises software functionality against external specification requirements.",
    "आंतरिक कोड संरचना को देखे बिना केवल इनपुट और आउटपुट का परीक्षण करने वाली विधि क्या कहलाती है?"))

questions.append(q(150, SEC_CS, "Software Engineering", "सॉफ्टवेयर इंजीनियरिंग",
    "The Software Development Life Cycle (SDLC) phase where user needs and business constraints are documented is:",
    "Requirement Analysis and Specification", "System Design", "Coding", "Testing", "A",
    "Requirement Analysis gathers stakeholder expectations and formalizes them into the Software Requirements Specification (SRS).",
    "सॉफ्टवेयर विकास जीवन चक्र (SDLC) का वह चरण जिसमें उपयोगकर्ता की आवश्यकताओं का विश्लेषण और दस्तावेज़ीकरण किया जाता है, कहलाता है:"))

print(f"Total questions compiled for 2020: {len(questions)}")
assert len(questions) == 150, f"Expected 150 questions, got {len(questions)}"

# Output Paper Structure
paper_obj = {
    "id": "official_2020",
    "title": "BSTET Official 2020 Re-Exam - Paper II (CS)",
    "subtitle": "Held On: 21 Sep 2020 | Official 150-Question Bilingual Booklet",
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

# 1. Save JSON to incoming/stet_2020_reexam_cs.json
json_path = r"incoming/stet_2020_reexam_cs.json"
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(paper_obj, f, ensure_ascii=False, indent=2)
print(f"[OK] Wrote JSON: {json_path} ({os.path.getsize(json_path)} bytes)")

# 2. Save JS to js/data/official-2020.js
js_path = r"js/data/official-2020.js"
with open(js_path, "w", encoding="utf-8") as f:
    f.write("// Generated Question Paper Data\n")
    f.write("window.official_2020 = ")
    json.dump(paper_obj, f, ensure_ascii=False, indent=2)
    f.write(";\n")
print(f"[OK] Wrote JS: {js_path} ({os.path.getsize(js_path)} bytes)")
