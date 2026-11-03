# -*- coding: utf-8 -*-
"""
50 Specialized DBMS & SQL Mastery Questions for Bihar STET & BPSC TRE CS
"""

questions = [
    {
        "id": 1,
        "question": "What is the degree and cardinality of a table with 6 columns and 25 rows?",
        "question_hi": "6 कॉलम और 25 पंक्तियों वाली एक टेबल की डिग्री (Degree) और कार्डिनैलिटी (Cardinality) क्या होगी?",
        "options": {
            "A": "Degree = 25, Cardinality = 6",
            "B": "Degree = 6, Cardinality = 25",
            "C": "Degree = 6, Cardinality = 150",
            "D": "Degree = 31, Cardinality = 25"
        },
        "options_hi": {
            "A": "डिग्री = 25, कार्डिनैलिटी = 6",
            "B": "डिग्री = 6, कार्डिनैलिटी = 25",
            "C": "डिग्री = 6, कार्डिनैलिटी = 150",
            "D": "डिग्री = 31, कार्डिनैलिटी = 25"
        },
        "correctAnswer": "B",
        "explanation": "Degree of a relation refers to the number of attributes (columns = 6), while Cardinality refers to the number of tuples (rows = 25).",
        "explanation_hi": "रिलेशन की डिग्री कॉलम (एट्रिब्यूट) की संख्या (6) होती है, जबकि कार्डिनैलिटी पंक्तियों (ट्यूपल्स) की संख्या (25) होती है."
    },
    {
        "id": 2,
        "question": "Which normal form prohibits partial functional dependencies on a composite primary key?",
        "question_hi": "कौन सा सामान्य रूप (Normal Form) कंपोजिट प्राइमरी की पर आंशिक कार्यात्मक निर्भरता (Partial Dependency) को प्रतिबंधित करता है?",
        "options": {
            "A": "First Normal Form (1NF)",
            "B": "Second Normal Form (2NF)",
            "C": "Third Normal Form (3NF)",
            "D": "Boyce-Codd Normal Form (BCNF)"
        },
        "options_hi": {
            "A": "प्रथम सामान्य रूप (1NF)",
            "B": "द्वितीय सामान्य रूप (2NF)",
            "C": "तृतीय सामान्य रूप (3NF)",
            "D": "बॉयस-कॉड सामान्य रूप (BCNF)"
        },
        "correctAnswer": "B",
        "explanation": "2NF requires the relation to be in 1NF and have no non-prime attribute partially dependent on any candidate key.",
        "explanation_hi": "2NF में होने के लिए संबंध को 1NF में होना चाहिए तथा किसी भी गैर-प्राइम एट्रिब्यूट को कैंडिडेट की के किसी हिस्से पर आंशिक रूप से निर्भर नहीं होना चाहिए."
    },
    {
        "id": 3,
        "question": "Which normal form eliminates transitive functional dependencies?",
        "question_hi": "कौन सा सामान्य रूप सकर्मक कार्यात्मक निर्भरता (Transitive Dependency) को समाप्त करता है?",
        "options": {
            "A": "1NF",
            "B": "2NF",
            "C": "3NF",
            "D": "4NF"
        },
        "options_hi": {
            "A": "1NF",
            "B": "2NF",
            "C": "3NF",
            "D": "4NF"
        },
        "correctAnswer": "C",
        "explanation": "3NF eliminates transitive dependencies (X -> Y and Y -> Z where Z is non-prime and Y is not a superkey).",
        "explanation_hi": "3NF सकर्मक निर्भरता को दूर करता है, जहाँ कोई गैर-प्राइम एट्रिब्यूट किसी अन्य गैर-प्राइम एट्रिब्यूट के माध्यम से की पर निर्भर न हो."
    },
    {
        "id": 4,
        "question": "In relational algebra, which operator is equivalent to the SQL 'SELECT DISTINCT column_name' projection?",
        "question_hi": "रिलेशनल बीजगणित में कौन सा ऑपरेटर SQL के 'SELECT DISTINCT column_name' प्रोजेक्शन के समकक्ष है?",
        "options": {
            "A": "σ (Sigma)",
            "B": "π (Pi)",
            "C": "ρ (Rho)",
            "D": "⋈ (Bowtie)"
        },
        "options_hi": {
            "A": "σ (सिग्मा)",
            "B": "π (पाई)",
            "C": "ρ (रो)",
            "D": "⋈ (जॉइन)"
        },
        "correctAnswer": "B",
        "explanation": "The projection operator π (Pi) chooses specified columns and automatically eliminates duplicate tuples in pure relational algebra.",
        "explanation_hi": "प्रोजेक्शन ऑपरेटर π (Pi) विशिष्ट कॉलम का चयन करता है और रिलेशनल बीजगणित में स्वचालित रूप से डुप्लिकेट पंक्तियों को हटा देता है."
    },
    {
        "id": 5,
        "question": "Which relational algebra operator performs horizontal selection of rows matching a predicate condition?",
        "question_hi": "कौन सा रिलेशनल बीजगणित ऑपरेटर किसी शर्त से मेल खाने वाली पंक्तियों का क्षैतिज चयन (Horizontal Selection) करता है?",
        "options": {
            "A": "σ (Sigma)",
            "B": "π (Pi)",
            "C": "⋉ (Left Semijoin)",
            "D": "÷ (Division)"
        },
        "options_hi": {
            "A": "σ (सिग्मा)",
            "B": "π (पाई)",
            "C": "⋉ (लेफ्ट सेमीजॉइन)",
            "D": "÷ (डिवीजन)"
        },
        "correctAnswer": "A",
        "explanation": "The selection operator σ (Sigma) filters rows that satisfy a specified boolean predicate condition.",
        "explanation_hi": "सिग्मा σ ऑपरेटर उन पंक्तियों (Rows) का चयन करता है जो दी गई शर्त को संतुष्ट करती हैं (SQL के WHERE के समान)."
    },
    {
        "id": 6,
        "question": "Which SQL statement is classified as a Data Definition Language (DDL) command?",
        "question_hi": "निम्नलिखित में से कौन सा SQL कथन डेटा डेफिनिशन लैंग्वेज (DDL) कमांड के रूप में वर्गीकृत है?",
        "options": {
            "A": "INSERT",
            "B": "UPDATE",
            "C": "ALTER",
            "D": "SELECT"
        },
        "options_hi": {
            "A": "INSERT",
            "B": "UPDATE",
            "C": "ALTER",
            "D": "SELECT"
        },
        "correctAnswer": "C",
        "explanation": "ALTER modifies database schemas and table structures, making it a DDL command. (INSERT, UPDATE are DML).",
        "explanation_hi": "ALTER टेबल संरचना और स्कीमा में संशोधन करता है, अतः यह DDL (डेटा डेफिनिशन लैंग्वेज) कमांड है."
    },
    {
        "id": 7,
        "question": "What is the key difference between DROP and TRUNCATE in SQL?",
        "question_hi": "SQL में DROP और TRUNCATE के बीच मुख्य अंतर क्या है?",
        "options": {
            "A": "TRUNCATE deletes the table structure; DROP only deletes rows",
            "B": "DROP deletes both the table structure and its data; TRUNCATE deletes all rows while retaining table structure",
            "C": "Both commands are identical",
            "D": "DROP can be rolled back; TRUNCATE cannot"
        },
        "options_hi": {
            "A": "TRUNCATE टेबल संरचना हटाता है; DROP केवल पंक्तियों को हटाता है",
            "B": "DROP टेबल संरचना और डेटा दोनों को हटाता है; TRUNCATE संरचना बनाए रखते हुए केवल सभी पंक्तियों को हटाता है",
            "C": "दोनों कमांड बिल्कुल समान हैं",
            "D": "DROP को रोलबैक किया जा सकता है; TRUNCATE को नहीं"
        },
        "correctAnswer": "B",
        "explanation": "DROP TABLE completely eliminates the table schema from the data dictionary. TRUNCATE rapidly deallocates all data pages while keeping the empty table structure intact.",
        "explanation_hi": "DROP टेबल की स्कीमा और संरचना को पूरी तरह नष्ट कर देता है, जबकि TRUNCATE टेबल की संरचना बरकरार रखते हुए सारा डेटा तेजी से खाली कर देता है."
    },
    {
        "id": 8,
        "question": "Which SQL join returns all records from the left table, and the matched records from the right table, filling with NULL where no match exists?",
        "question_hi": "कौन सा SQL जॉइन बाईं टेबल के सभी रिकॉर्ड और दाईं टेबल के मेल खाने वाले रिकॉर्ड लौटाता है, और मेल न होने पर NULL भरता है?",
        "options": {
            "A": "INNER JOIN",
            "B": "LEFT OUTER JOIN",
            "C": "RIGHT OUTER JOIN",
            "D": "FULL OUTER JOIN"
        },
        "options_hi": {
            "A": "इनर जॉइन",
            "B": "लेफ्ट आउटर जॉइन (LEFT OUTER JOIN)",
            "C": "राइट आउटर जॉइन",
            "D": "फुल आउटर जॉइन"
        },
        "correctAnswer": "B",
        "explanation": "LEFT OUTER JOIN preserves every row from the left relation regardless of whether a matching tuple exists in the right relation.",
        "explanation_hi": "LEFT OUTER JOIN बाईं टेबल की सभी पंक्तियों को सुरक्षित रखता है और दाईं टेबल से मिलान न होने वाले स्थानों पर NULL दर्शाता है."
    },
    {
        "id": 9,
        "question": "What is a 'Correlated Subquery' in SQL?",
        "question_hi": "SQL में 'सहसंबद्ध उप-क्वेरी (Correlated Subquery)' क्या होती है?",
        "options": {
            "A": "A subquery that runs once before the outer query",
            "B": "A subquery that references columns from the outer query and executes repeatedly for each outer row",
            "C": "A subquery that cannot contain aggregate functions",
            "D": "A query stored in a permanent view"
        },
        "options_hi": {
            "A": "एक सबक्वेरी जो बाहरी क्वेरी से पहले केवल एक बार चलती है",
            "B": "एक सबक्वेरी जो बाहरी क्वेरी के कॉलमों को संदर्भित करती है और प्रत्येक बाहरी पंक्ति के लिए पुनः निष्पादित होती है",
            "C": "एक सबक्वेरी जिसमें एग्रीगेट फ़ंक्शन नहीं हो सकते",
            "D": "स्थायी दृश्य में संग्रहीत क्वेरी"
        },
        "correctAnswer": "B",
        "explanation": "A correlated subquery relies on values from the outer query for its evaluation and must be evaluated once for each row processed by the outer query.",
        "explanation_hi": "सहसंबद्ध उप-क्वेरी बाहरी क्वेरी के मानों पर निर्भर होती है और बाहरी क्वेरी की प्रत्येक पंक्ति के लिए बार-बार निष्पादित की जाती है."
    },
    {
        "id": 10,
        "question": "Which constraint ensures that no duplicate values can be entered into a specific column, while still allowing a single NULL value?",
        "question_hi": "कौन सी बाधा यह सुनिश्चित करती है कि किसी कॉलम में कोई डुप्लिकेट मान न आए, जबकि एक NULL मान की अनुमति देती है?",
        "options": {
            "A": "PRIMARY KEY",
            "B": "UNIQUE",
            "C": "CHECK",
            "D": "DEFAULT"
        },
        "options_hi": {
            "A": "PRIMARY KEY",
            "B": "UNIQUE (यूनिक)",
            "C": "CHECK",
            "D": "DEFAULT"
        },
        "correctAnswer": "B",
        "explanation": "A UNIQUE constraint enforces distinct non-null values, allowing at most one NULL entry (in standard SQL), whereas PRIMARY KEY strictly forbids any NULLs.",
        "explanation_hi": "UNIQUE बाधा डुप्लिकेट मानों को रोकती है किंतु (प्राइमरी की के विपरीत) एक NULL मान की अनुमति देती है."
    },
    {
        "id": 11,
        "question": "What is the effect of the 'ON DELETE CASCADE' referential action in SQL?",
        "question_hi": "SQL में 'ON DELETE CASCADE' संदर्भात्मक क्रिया का क्या प्रभाव होता है?",
        "options": {
            "A": "Prevents parent rows from being deleted",
            "B": "Automatically deletes matching child rows when a parent row is deleted",
            "C": "Sets child foreign keys to NULL",
            "D": "Prompts an administrator confirmation"
        },
        "options_hi": {
            "A": "पैरेंट पंक्तियों को हटाए जाने से रोकता है",
            "B": "पैरेंट पंक्ति को हटाए जाने पर संबंधित चाइल्ड पंक्तियों को भी स्वचालित रूप से हटा देता है",
            "C": "चाइल्ड फॉरेन की को NULL सेट करता है",
            "D": "व्यवस्थापक से पुष्टि मांगता है"
        },
        "correctAnswer": "B",
        "explanation": "ON DELETE CASCADE guarantees referential integrity by automatically propagating the deletion of a primary record to all dependent child records.",
        "explanation_hi": "ON DELETE CASCADE पैरेंट टेबल से रिकॉर्ड हटने पर चाइल्ड टेबल के सभी संबंधित रिकॉर्ड्स को स्वतः डिलीट कर देता है."
    },
    {
        "id": 12,
        "question": "In an Entity-Relationship (ER) model, how is a 'Weak Entity' visually represented?",
        "question_hi": "ई-आर (ER) मॉडल में, 'कमजोर इकाई (Weak Entity)' को दृश्य रूप से कैसे दर्शाया जाता है?",
        "options": {
            "A": "Single Rectangle",
            "B": "Double Rectangle",
            "C": "Dashed Ellipse",
            "D": "Double Diamond"
        },
        "options_hi": {
            "A": "एकल आयत",
            "B": "दोहरा आयत (Double Rectangle)",
            "C": "डैशयुक्त दीर्घवृत्त",
            "D": "दोहरा हीरा"
        },
        "correctAnswer": "B",
        "explanation": "A weak entity set (which does not have a primary key of its own and depends on an identifying entity) is represented by a double rectangle.",
        "explanation_hi": "कमजोर इकाई (जिसकी अपनी कोई प्राइमरी की नहीं होती) को ई-आर आरेख में दोहरे आयत (Double Rectangle) द्वारा दर्शाया जाता है."
    },
    {
        "id": 13,
        "question": "How is an identifying relationship for a weak entity represented in an ER diagram?",
        "question_hi": "ER आरेख में किसी कमजोर इकाई के पहचान संबंध (Identifying Relationship) को कैसे दर्शाया जाता है?",
        "options": {
            "A": "Single Diamond",
            "B": "Double Diamond",
            "C": "Circle",
            "D": "Dotted Line"
        },
        "options_hi": {
            "A": "एकल हीरा",
            "B": "दोहरा हीरा (Double Diamond)",
            "C": "वृत्त",
            "D": "बिंदीदार रेखा"
        },
        "correctAnswer": "B",
        "explanation": "The relationship linking a weak entity set to its identifying strong owner entity is denoted by a double diamond.",
        "explanation_hi": "कमजोर इकाई को उसके स्वामी इकाई से जोड़ने वाले पहचान संबंध को दोहरे हीरे (Double Diamond) द्वारा दर्शाया जाता है."
    },
    {
        "id": 14,
        "question": "What is the key difference between Strict Two-Phase Locking (Strict 2PL) and basic 2PL?",
        "question_hi": "सख्त टू-फेज लॉकिंग (Strict 2PL) और बेसिक 2PL के बीच मुख्य अंतर क्या है?",
        "options": {
            "A": "Strict 2PL allows locks to be released before commit",
            "B": "Strict 2PL holds all exclusive (X) locks until transaction commit or abort",
            "C": "Strict 2PL prevents deadlocks entirely",
            "D": "Strict 2PL does not use shared locks"
        },
        "options_hi": {
            "A": "Strict 2PL कमिट से पहले लॉक जारी करने की अनुमति देता है",
            "B": "Strict 2PL लेन-देन के कमिट या एबॉर्शन होने तक सभी विशेष (X) लॉक बनाए रखता है",
            "C": "Strict 2PL डेडलॉक को पूरी तरह रोकता है",
            "D": "Strict 2PL शेयर्ड लॉक का उपयोग नहीं करता"
        },
        "correctAnswer": "B",
        "explanation": "Strict 2PL requires that all exclusive write-locks acquired by a transaction be held until the transaction finishes (commits/aborts), preventing cascading rollbacks.",
        "explanation_hi": "Strict 2PL में सभी एक्सक्लूसिव (राइट) लॉक ट्रांजैक्शन के पूरा होने (कमिट या एबॉर्शन) तक रोके रखे जाते हैं, जिससे कैस्केडिंग रोलबैक नहीं होता."
    },
    {
        "id": 15,
        "question": "Which of the following schedules is ALWAYS guaranteed under Rigorous Two-Phase Locking (Rigorous 2PL)?",
        "question_hi": "रिगोरस टू-फेज लॉकिंग (Rigorous 2PL) के तहत निम्नलिखित में से किस शेड्यूल की हमेशा गारंटी होती है?",
        "options": {
            "A": "Deadlock-free only",
            "B": "Strict and Conflict Serializable schedule",
            "C": "Non-serializable schedule",
            "D": "Blind write schedule"
        },
        "options_hi": {
            "A": "केवल डेडलॉक-मुक्त",
            "B": "सख्त और संघर्ष-क्रमिक (Strict & Conflict Serializable) शेड्यूल",
            "C": "गैर-क्रमिक शेड्यूल",
            "D": "ब्लाइंड राइट शेड्यूल"
        },
        "correctAnswer": "B",
        "explanation": "Rigorous 2PL holds all shared and exclusive locks until commit/abort, guaranteeing that schedules are both conflict serializable and strict (cascadeless).",
        "explanation_hi": "Rigorous 2PL सभी शेयर्ड और एक्सक्लूसिव लॉक को अंत तक बनाए रखता है, जिससे शेड्यूल संघर्ष-क्रमिक और सख्त दोनों होता है."
    },
    {
        "id": 16,
        "question": "What is the purpose of the Checkpoint mechanism in database recovery systems?",
        "question_hi": "डेटाबेस रिकवरी सिस्टम में चेकपॉइंट (Checkpoint) तंत्र का उद्देश्य क्या है?",
        "options": {
            "A": "To create new user tables",
            "B": "To write all dirty buffer blocks to stable disk storage, reducing recovery log scan time",
            "C": "To encrypt disk partitions",
            "D": "To restart database server automatically"
        },
        "options_hi": {
            "A": "नई यूजर टेबल बनाना",
            "B": "सभी डर्टी बफ़र ब्लॉक को स्थिर डिस्क पर लिखना, जिससे रिकवरी के समय लॉग स्कैन का समय घट जाता है",
            "C": "डिस्क विभाजन को एन्क्रिप्ट करना",
            "D": "डेटाबेस सर्वर को स्वतः रीस्टार्ट करना"
        },
        "correctAnswer": "B",
        "explanation": "Checkpoints flush modified in-memory database blocks to disk and write a checkpoint record to the log, so recovery need not replay logs preceding the checkpoint.",
        "explanation_hi": "चेकपॉइंट मेमोरी के संशोधित डेटा को स्थायी डिस्क पर सुरक्षित कर देता है, जिससे सिस्टम क्रैश होने पर रिकवरी प्रक्रिया में लॉग को शुरू से पढ़ने की जरूरत नहीं होती."
    },
    {
        "id": 17,
        "question": "In database log-based recovery, what must be done for an active transaction that did NOT write a 'commit' record before the system crashed?",
        "question_hi": "डेटाबेस लॉग-आधारित रिकवरी में, उस सक्रिय लेन-देन के लिए क्या किया जाना चाहिए जिसने क्रैश से पहले 'कमिट' रिकॉर्ड नहीं लिखा था?",
        "options": {
            "A": "Redo the transaction",
            "B": "Undo (Rollback) the transaction",
            "C": "Commit the transaction forcibly",
            "D": "Ignore the transaction"
        },
        "options_hi": {
            "A": "लेन-देन को पुनः करना (Redo)",
            "B": "लेन-देन को पूर्ववत करना / रोलबैक करना (Undo)",
            "C": "लेन-देन को जबरन कमिट करना",
            "D": "लेन-देन की अनदेखी करना"
        },
        "correctAnswer": "B",
        "explanation": "If a transaction started but never committed before the failure, its partial updates must be undone (rolled back) to maintain atomicity.",
        "explanation_hi": "यदि किसी लेन-देन का 'कमिट' रिकॉर्ड लॉग में नहीं है, तो परमाणुता बनाए रखने के लिए उसके सभी परिवर्तनों को पूर्ववत (Undo/Rollback) किया जाता है."
    },
    {
        "id": 18,
        "question": "What is a 'View' in SQL?",
        "question_hi": "SQL में 'व्यू (View)' क्या है?",
        "options": {
            "A": "A physically stored permanent copy of a relation",
            "B": "A virtual table defined by a stored SQL query",
            "C": "An in-memory hardware cache",
            "D": "A database backup file"
        },
        "options_hi": {
            "A": "संबंध की भौतिक रूप से संग्रहीत स्थायी प्रति",
            "B": "एक संग्रहीत SQL क्वेरी द्वारा परिभाषित एक आभासी तालिका (Virtual Table)",
            "C": "एक हार्डवेयर कैश",
            "D": "डेटाबेस बैकअप फ़ाइल"
        },
        "correctAnswer": "B",
        "explanation": "A view is a virtual relation whose contents are dynamically computed from an underlying SELECT query without storing redundant data rows on disk.",
        "explanation_hi": "व्यू एक आभासी (वर्चुअल) टेबल होती है जिसका डेटा डिस्क पर भौतिक रूप से संग्रहीत नहीं होता बल्कि क्वेरी द्वारा गतिशील रूप से प्राप्त होता है."
    },
    {
        "id": 19,
        "question": "Which SQL statement is used to revoke privileges granted to a database user?",
        "question_hi": "डेटाबेस उपयोगकर्ता को दी गई अनुमतियों (Privileges) को वापस लेने के लिए किस SQL कथन का उपयोग किया जाता है?",
        "options": {
            "A": "REMOVE",
            "B": "REVOKE",
            "C": "DENY",
            "D": "DELETE PRIVILEGES"
        },
        "options_hi": {
            "A": "REMOVE",
            "B": "REVOKE (रिवोक)",
            "C": "DENY",
            "D": "DELETE PRIVILEGES"
        },
        "correctAnswer": "B",
        "explanation": "GRANT assigns database permissions, and REVOKE removes previously granted permissions from user roles or accounts.",
        "explanation_hi": "GRANT अनुमतियाँ प्रदान करता है और REVOKE कमांड पहले दी गई अनुमतियों को वापस लेता है."
    },
    {
        "id": 20,
        "question": "In a B-Tree of order m, what is the maximum number of children any internal node can have?",
        "question_hi": "ऑर्डर m के B-ट्री में, किसी भी आंतरिक नोड के अधिकतम कितने चाइल्ड नोड्स हो सकते हैं?",
        "options": {
            "A": "m - 1",
            "B": "m",
            "C": "2m",
            "D": "m / 2"
        },
        "options_hi": {
            "A": "m - 1",
            "B": "m",
            "C": "2m",
            "D": "m / 2"
        },
        "correctAnswer": "B",
        "explanation": "By definition, in a B-Tree of order m, every node can have at most m children and at most m - 1 keys.",
        "explanation_hi": "ऑर्डर m के B-ट्री की परिभाषा के अनुसार, प्रत्येक आंतरिक नोड में अधिकतम m चाइल्ड और अधिकतम m - 1 कुंजियाँ हो सकती हैं."
    },
    {
        "id": 21,
        "question": "What is the maximum number of keys in an internal node of a B-Tree of order m?",
        "question_hi": "ऑर्डर m के B-ट्री के आंतरिक नोड में कुंजियों (Keys) की अधिकतम संख्या क्या हो सकती है?",
        "options": {
            "A": "m - 1",
            "B": "m",
            "C": "m + 1",
            "D": "2m - 1"
        },
        "options_hi": {
            "A": "m - 1",
            "B": "m",
            "C": "m + 1",
            "D": "2m - 1"
        },
        "correctAnswer": "A",
        "explanation": "An internal node with k children contains exactly k - 1 keys. Thus, for maximum m children, the maximum keys is m - 1.",
        "explanation_hi": "k चाइल्ड वाले नोड में k - 1 कुंजियाँ होती हैं; अतः अधिकतम m बच्चों के लिए अधिकतम कुंजियों की संख्या m - 1 होती है."
    },
    {
        "id": 22,
        "question": "What is the minimum number of keys in a non-root node of a B-Tree of order m?",
        "question_hi": "ऑर्डर m के B-ट्री के गैर-रूट नोड में कुंजियों की न्यूनतम संख्या कितनी होनी चाहिए?",
        "options": {
            "A": "⌈m / 2⌉ - 1",
            "B": "m / 2",
            "C": "m - 1",
            "D": "1"
        },
        "options_hi": {
            "A": "⌈m / 2⌉ - 1",
            "B": "m / 2",
            "C": "m - 1",
            "D": "1"
        },
        "correctAnswer": "A",
        "explanation": "Every non-root node in a B-tree of order m must have at least ⌈m/2⌉ children, which corresponds to at least ⌈m/2⌉ - 1 keys.",
        "explanation_hi": "B-ट्री में गैर-रूट नोड्स में कम से कम ⌈m/2⌉ बच्चे होते हैं, जिससे न्यूनतम कुंजियों की संख्या ⌈m/2⌉ - 1 होती है."
    },
    {
        "id": 23,
        "question": "Which of the following functional dependencies is considered 'Trivial'?",
        "question_hi": "निम्नलिखित में से कौन सी कार्यात्मक निर्भरता 'तुच्छ (Trivial)' मानी जाती है?",
        "options": {
            "A": "A -> B where A ∩ B = ∅",
            "B": "X -> Y where Y ⊆ X",
            "C": "X -> Y where X ⊆ Y",
            "D": "A -> B and B -> A"
        },
        "options_hi": {
            "A": "A -> B जहाँ A ∩ B = ∅",
            "B": "X -> Y जहाँ Y ⊆ X",
            "C": "X -> Y जहाँ X ⊆ Y",
            "D": "A -> B और B -> A"
        },
        "correctAnswer": "B",
        "explanation": "A functional dependency X -> Y is trivial if and only if Y is a subset of X (e.g., {EmpID, Name} -> Name).",
        "explanation_hi": "कार्यात्मक निर्भरता X -> Y तुच्छ (Trivial) होती है यदि Y, X का एक उपसमुच्चय (Subset) हो."
    },
    {
        "id": 24,
        "question": "Armstrong's Axiom of Transitivity states that:",
        "question_hi": "आर्मस्ट्रांग का संक्रामकता (Transitivity) का स्वयंसिद्ध नियम क्या बताता है?",
        "options": {
            "A": "If X -> Y, then XZ -> YZ",
            "B": "If X -> Y and Y -> Z, then X -> Z",
            "C": "If X -> Y, then Y -> X",
            "D": "If XY -> Z, then X -> Z"
        },
        "options_hi": {
            "A": "यदि X -> Y, तो XZ -> YZ",
            "B": "यदि X -> Y और Y -> Z, तो X -> Z",
            "C": "यदि X -> Y, तो Y -> X",
            "D": "यदि XY -> Z, तो X -> Z"
        },
        "correctAnswer": "B",
        "explanation": "The Transitivity rule states that if X functionally determines Y and Y functionally determines Z, then X functionally determines Z.",
        "explanation_hi": "संक्रामकता नियम के अनुसार यदि X से Y और Y से Z निर्धारित होता है, तो X से सीधे Z निर्धारित होगा (X -> Z)."
    },
    {
        "id": 25,
        "question": "Which Armstrong's axiom states: 'If X -> Y, then XZ -> YZ'?",
        "question_hi": "आर्मस्ट्रांग का कौन सा नियम बताता है: 'यदि X -> Y, तो XZ -> YZ'?",
        "options": {
            "A": "Reflexivity Rule",
            "B": "Augmentation Rule",
            "C": "Decomposition Rule",
            "D": "Union Rule"
        },
        "options_hi": {
            "A": "प्रतिवर्ती नियम (Reflexivity)",
            "B": "संवर्धन नियम (Augmentation Rule)",
            "C": "अपघटन नियम (Decomposition)",
            "D": "संघ नियम (Union)"
        },
        "correctAnswer": "B",
        "explanation": "The Augmentation Rule states that adding the same set of attributes Z to both sides of a valid functional dependency preserves validity: XZ -> YZ.",
        "explanation_hi": "संवर्धन नियम (Augmentation Rule) के अनुसार दोनों पक्षों में समान एट्रिब्यूट Z जोड़ने पर निर्भरता वैध रहती है: XZ -> YZ."
    },
    {
        "id": 26,
        "question": "What is a 'Lossless-Join Decomposition'?",
        "question_hi": "'दोषरहित-जॉइन अपघटन (Lossless-Join Decomposition)' क्या है?",
        "options": {
            "A": "Decomposition where natural join of decomposed relations yields exactly the original relation without spurious tuples",
            "B": "Decomposition where all foreign keys are dropped",
            "C": "Decomposition where disk size is halved",
            "D": "Decomposition with loss of primary keys"
        },
        "options_hi": {
            "A": "ऐसा अपघटन जहाँ उप-संबंधों का नेचुरल जॉइन करने पर बिना किसी फर्जी (Spurious) ट्यूपल के ठीक मूल संबंध पुनः प्राप्त होता है",
            "B": "ऐसा अपघटन जहाँ सभी फॉरेन की हटा दी जाती हैं",
            "C": "ऐसा अपघटन जहाँ डिस्क का आकार आधा हो जाता है",
            "D": "प्राइमरी की के नुकसान के साथ अपघटन"
        },
        "correctAnswer": "A",
        "explanation": "Lossless join decomposition ensures R1 ⋈ R2 = R, meaning no information is lost and no extra spurious records are generated upon rejoining.",
        "explanation_hi": "दोषरहित जॉइन अपघटन यह सुनिश्चित करता है कि विभाजित टेबलों को वापस जोड़ने पर मूल टेबल बिना किसी गलत ट्यूपल के बिल्कुल सही प्राप्त हो."
    },
    {
        "id": 27,
        "question": "For a decomposition of R into R1 and R2 to be lossless, what must be true about (R1 ∩ R2)?",
        "question_hi": "R का R1 और R2 में अपघटन दोषरहित (Lossless) होने के लिए (R1 ∩ R2) के बारे में क्या सत्य होना चाहिए?",
        "options": {
            "A": "(R1 ∩ R2) must be empty",
            "B": "(R1 ∩ R2) must be a superkey for R1 or a superkey for R2",
            "C": "(R1 ∩ R2) must equal R",
            "D": "(R1 ∩ R2) must contain all non-prime attributes"
        },
        "options_hi": {
            "A": "(R1 ∩ R2) खाली होना चाहिए",
            "B": "(R1 ∩ R2) को R1 या R2 में से कम से कम किसी एक की सुपर की होना चाहिए",
            "C": "(R1 ∩ R2) को R के बराबर होना चाहिए",
            "D": "(R1 ∩ R2) में सभी गैर-प्राइम एट्रिब्यूट होने चाहिए"
        },
        "correctAnswer": "B",
        "explanation": "A decomposition of R into R1 and R2 is lossless if and only if the common attributes (R1 ∩ R2) form a superkey of at least one of the relations.",
        "explanation_hi": "अपघटन के दोषरहित होने की आवश्यक शर्त यह है कि दोनों का उभयनिष्ठ भाग (R1 ∩ R2) कम से कम R1 या R2 में से किसी एक की सुपर की अवश्य हो."
    },
    {
        "id": 28,
        "question": "In SQL, which aggregate function ignores NULL values?",
        "question_hi": "SQL में कौन सा एग्रीगेट फ़ंक्शन NULL मानों को अनदेखा करता है?",
        "options": {
            "A": "COUNT(*)",
            "B": "AVG(column_name)",
            "C": "NVL()",
            "D": "COALESCE()"
        },
        "options_hi": {
            "A": "COUNT(*)",
            "B": "AVG(column_name)",
            "C": "NVL()",
            "D": "COALESCE()"
        },
        "correctAnswer": "B",
        "explanation": "All aggregate functions (SUM, AVG, MIN, MAX, COUNT(col)) ignore NULL values, except COUNT(*) which counts all returned rows.",
        "explanation_hi": "AVG(column_name) सहित सभी एग्रीगेट फ़ंक्शंस NULL मानों को छोड़कर गणना करते हैं, केवल COUNT(*) सभी पंक्तियों को गिनता है."
    },
    {
        "id": 29,
        "question": "What is the output of `SELECT COALESCE(NULL, NULL, 'Bihar', 'STET');` in SQL?",
        "question_hi": "SQL में `SELECT COALESCE(NULL, NULL, 'Bihar', 'STET');` का आउटपुट क्या होगा?",
        "options": {
            "A": "NULL",
            "B": "Bihar",
            "C": "STET",
            "D": "Bihar STET"
        },
        "options_hi": {
            "A": "NULL",
            "B": "Bihar",
            "C": "STET",
            "D": "Bihar STET"
        },
        "correctAnswer": "B",
        "explanation": "COALESCE returns the very first non-NULL expression from its argument list. Here, the first non-NULL is 'Bihar'.",
        "explanation_hi": "COALESCE फ़ंक्शन अपनी सूची में से पहला गैर-NULL मान लौटाता है; यहाँ पहला गैर-NULL मान 'Bihar' है."
    },
    {
        "id": 30,
        "question": "Which SQL statement is used to remove an index named 'idx_emp_salary' from the database?",
        "question_hi": "डेटाबेस से 'idx_emp_salary' नामक इंडेक्स को हटाने के लिए किस SQL कथन का उपयोग किया जाता है?",
        "options": {
            "A": "DELETE INDEX idx_emp_salary;",
            "B": "REMOVE INDEX idx_emp_salary;",
            "C": "DROP INDEX idx_emp_salary;",
            "D": "ALTER TABLE DROP idx_emp_salary;"
        },
        "options_hi": {
            "A": "DELETE INDEX idx_emp_salary;",
            "B": "REMOVE INDEX idx_emp_salary;",
            "C": "DROP INDEX idx_emp_salary;",
            "D": "ALTER TABLE DROP idx_emp_salary;"
        },
        "correctAnswer": "C",
        "explanation": "DROP INDEX drops existing index structures from the database schema.",
        "explanation_hi": "इंडेक्स को हटाने के लिए 'DROP INDEX इंडेक्स_नाम;' कमांड का उपयोग किया जाता है."
    },
    {
        "id": 31,
        "question": "What is a 'Dense Index' in database file organization?",
        "question_hi": "डेटाबेस फ़ाइल संगठन में 'डेंस इंडेक्स (Dense Index)' क्या होता है?",
        "options": {
            "A": "An index record appears for every search-key value in the data file",
            "B": "An index record appears only for some search-key values (e.g. block anchors)",
            "C": "An index stored on optical discs",
            "D": "An index without pointers"
        },
        "options_hi": {
            "A": "डेटा फ़ाइल के प्रत्येक सर्च-की मान के लिए एक इंडेक्स रिकॉर्ड मौजूद होता है",
            "B": "केवल कुछ सर्च-की मानों के लिए इंडेक्स रिकॉर्ड होता है",
            "C": "ऑप्टिकल डिस्क पर संग्रहित इंडेक्स",
            "D": "बिना पॉइंटर वाला इंडेक्स"
        },
        "correctAnswer": "A",
        "explanation": "In a dense index, an index entry is present for every distinct search key value in the file.",
        "explanation_hi": "डेंस इंडेक्स में डेटा फ़ाइल के प्रत्येक सर्च-की मान के लिए एक अलग इंडेक्स प्रविष्टि होती है."
    },
    {
        "id": 32,
        "question": "What is a 'Sparse Index'?",
        "question_hi": "'स्पार्स इंडेक्स (Sparse Index)' क्या होता है?",
        "options": {
            "A": "An index entry exists for only some of the search keys (typically one per data block)",
            "B": "An index entry for every tuple",
            "C": "An index created only on NULL values",
            "D": "A corrupt index"
        },
        "options_hi": {
            "A": "केवल कुछ सर्च-कुंजियों के लिए इंडेक्स प्रविष्टि होती है (आमतौर पर प्रति डेटा ब्लॉक एक)",
            "B": "प्रत्येक ट्यूपल के लिए एक इंडेक्स प्रविष्टि",
            "C": "केवल NULL मानों पर बना इंडेक्स",
            "D": "दूषित इंडेक्स"
        },
        "correctAnswer": "A",
        "explanation": "In a sparse index, entries are created only for some records (e.g. first record of each block), consuming less memory.",
        "explanation_hi": "स्पार्स इंडेक्स में प्रत्येक ब्लॉक के केवल पहले रिकॉर्ड (एंकर) के लिए इंडेक्स एंट्री बनती है, जिससे मेमोरी की बचत होती है."
    },
    {
        "id": 33,
        "question": "Which of the following problems occurs when two transactions read the same data item and then update it concurrently based on the old value?",
        "question_hi": "जब दो लेन-देन एक ही डेटा आइटम को पढ़ते हैं और फिर पुराने मान के आधार पर एक साथ अपडेट करते हैं, तो कौन सी समस्या होती है?",
        "options": {
            "A": "Dirty Read Problem",
            "B": "Lost Update Problem",
            "C": "Unrepeatable Read Problem",
            "D": "Phantom Read Problem"
        },
        "options_hi": {
            "A": "डर्टी रीड समस्या",
            "B": "लॉस्ट अपडेट समस्या (Lost Update Problem)",
            "C": "अनरिपीटेबल रीड समस्या",
            "D": "फैंटम रीड समस्या"
        },
        "correctAnswer": "B",
        "explanation": "The Lost Update problem occurs when concurrent transactions overwrite each other's updates without knowing of intervening changes.",
        "explanation_hi": "लॉस्ट अपडेट समस्या में एक ट्रांजैक्शन द्वारा किया गया अपडेट दूसरे ट्रांजैक्शन के ओवरराइट करने से खो जाता है."
    },
    {
        "id": 34,
        "question": "What is a 'Dirty Read' in transaction processing?",
        "question_hi": "लेन-देन प्रसंस्करण में 'डर्टी रीड (Dirty Read)' क्या है?",
        "options": {
            "A": "Reading corrupted disk sectors",
            "B": "A transaction reading data updated by an uncommitted transaction that subsequently aborts",
            "C": "Reading the same value twice in a row",
            "D": "Reading an empty table"
        },
        "options_hi": {
            "A": "दूषित डिस्क सेक्टर को पढ़ना",
            "B": "किसी ऐसे लेन-देन द्वारा अपडेट किए गए डेटा को पढ़ना जो अभी कमिट नहीं हुआ है और बाद में रोलबैक हो जाता है",
            "C": "एक ही मान को लगातार दो बार पढ़ना",
            "D": "खाली टेबल पढ़ना"
        },
        "correctAnswer": "B",
        "explanation": "A dirty read occurs when transaction T2 reads an uncommitted modification made by T1. If T1 later aborts, T2 read invalid, non-existent data.",
        "explanation_hi": "डर्टी रीड तब होती है जब एक ट्रांजैक्शन किसी अन्य गैर-कमिटेड ट्रांजैक्शन के अस्थायी डेटा को पढ़ लेता है जो बाद में रद्द (Abort) हो जाता है."
    },
    {
        "id": 35,
        "question": "Which transaction isolation level in ANSI SQL prevents Dirty Reads, Non-repeatable Reads, AND Phantom Reads?",
        "question_hi": "ANSI SQL में कौन सा लेन-देन आइसोलेशन स्तर डर्टी रीड, नॉन-रिपीटेबल रीड और फैंटम रीड तीनों को रोकता है?",
        "options": {
            "A": "READ UNCOMMITTED",
            "B": "READ COMMITTED",
            "C": "REPEATABLE READ",
            "D": "SERIALIZABLE"
        },
        "options_hi": {
            "A": "READ UNCOMMITTED",
            "B": "READ COMMITTED",
            "C": "REPEATABLE READ",
            "D": "SERIALIZABLE (सीरियलाइजेबल)"
        },
        "correctAnswer": "D",
        "explanation": "The SERIALIZABLE isolation level offers complete isolation, preventing dirty reads, non-repeatable reads, and phantom row insertions.",
        "explanation_hi": "SERIALIZABLE उच्चतम स्तर का आइसोलेशन है जो डर्टी रीड, अनरिपीटेबल रीड और फैंटम पंक्तियों के सम्मिलित होने को पूरी तरह रोकता है."
    },
    {
        "id": 36,
        "question": "What is the primary difference between Clustered and Non-Clustered indexes?",
        "question_hi": "क्लस्टर्ड और नॉन-क्लस्टर्ड इंडेक्स के बीच प्राथमिक अंतर क्या है?",
        "options": {
            "A": "A table can have multiple clustered indexes, but only one non-clustered index",
            "B": "A clustered index determines the physical storage order of data rows in the table; only one clustered index can exist per table",
            "C": "Clustered indexes are slower than non-clustered indexes",
            "D": "Non-clustered indexes store table rows directly on leaf pages"
        },
        "options_hi": {
            "A": "एक टेबल में कई क्लस्टर्ड इंडेक्स हो सकते हैं",
            "B": "क्लस्टर्ड इंडेक्स टेबल में डेटा पंक्तियों के भौतिक भंडारण क्रम को निर्धारित करता है; प्रति टेबल केवल एक क्लस्टर्ड इंडेक्स हो सकता है",
            "C": "क्लस्टर्ड इंडेक्स धीमे होते हैं",
            "D": "नॉन-क्लस्टर्ड इंडेक्स टेबल पंक्तियों को सीधे लीफ पेज पर रखते हैं"
        },
        "correctAnswer": "B",
        "explanation": "Because physical disk rows can only be sorted in one order, there can be only ONE clustered index per table.",
        "explanation_hi": "भौतिक रूप से डेटा केवल एक ही क्रम में व्यवस्थित हो सकता है, इसलिए एक टेबल पर केवल एक क्लस्टर्ड इंडेक्स ही संभव है."
    },
    {
        "id": 37,
        "question": "In relational algebra, which operator can be expressed in terms of Cartesian product, difference, and projection?",
        "question_hi": "रिलेशनल बीजगणित में, किस ऑपरेटर को कार्तीय गुणन, अंतर और प्रोजेक्शन के पदों में व्यक्त किया जा सकता है?",
        "options": {
            "A": "Natural Join",
            "B": "Division operator (÷)",
            "C": "Selection",
            "D": "Union"
        },
        "options_hi": {
            "A": "नेचुरल जॉइन",
            "B": "डिवीजन ऑपरेटर (÷)",
            "C": "सिलेक्शन",
            "D": "यूनियन"
        },
        "correctAnswer": "B",
        "explanation": "The division operator R ÷ S is a derived operator defined as: π_X(R) - π_X((π_X(R) × S) - R).",
        "explanation_hi": "डिवीजन ऑपरेटर R ÷ S एक व्युत्पन्न ऑपरेटर है जिसे प्रोजेक्शन, कार्तीय गुणन और सेट अंतर के संयोजन द्वारा परिभाषित किया जाता है."
    },
    {
        "id": 38,
        "question": "Which of the following SQL constraints CANNOT be defined at the table level and must be defined at the column level?",
        "question_hi": "निम्नलिखित में से कौन सी SQL बाधा टेबल स्तर पर परिभाषित नहीं की जा सकती और इसे केवल कॉलम स्तर पर ही परिभाषित किया जाना चाहिए?",
        "options": {
            "A": "PRIMARY KEY",
            "B": "NOT NULL",
            "C": "UNIQUE",
            "D": "FOREIGN KEY"
        },
        "options_hi": {
            "A": "PRIMARY KEY",
            "B": "NOT NULL",
            "C": "UNIQUE",
            "D": "FOREIGN KEY"
        },
        "correctAnswer": "B",
        "explanation": "NOT NULL applies strictly to an individual column definition and cannot be declared as a separate standalone table-level constraint.",
        "explanation_hi": "NOT NULL बाधा केवल व्यक्तिगत कॉलम परिभाषा में ही लिखी जा सकती है, इसे टेबल-स्तरीय बाधा के रूप में अलग से नहीं लिखा जा सकता."
    },
    {
        "id": 39,
        "question": "What is the purpose of the SQL statement: `SAVEPOINT point1;`?",
        "question_hi": "SQL कथन `SAVEPOINT point1;` का उद्देश्य क्या है?",
        "options": {
            "A": "Permanently saves changes to the hard disk",
            "B": "Marks a checkpoint within a transaction to which the transaction can selectively roll back",
            "C": "Creates an index on primary keys",
            "D": "Terminates the active transaction"
        },
        "options_hi": {
            "A": "परिवर्तनों को स्थायी रूप से हार्ड डिस्क पर सहेजता है",
            "B": "लेन-देन के भीतर एक बिंदु चिह्नित करता है जहाँ तक लेन-देन को आंशिक रूप से रोलबैक किया जा सकता है",
            "C": "प्राइमरी की पर इंडेक्स बनाता है",
            "D": "सक्रिय लेन-देन को समाप्त करता है"
        },
        "correctAnswer": "B",
        "explanation": "SAVEPOINT sets an intermediate marker in a transaction, permitting partial rollback using `ROLLBACK TO point1;` without losing earlier work.",
        "explanation_hi": "SAVEPOINT लेन-देन में एक अस्थायी बिंदु तय करता है ताकि आवश्यकता पड़ने पर पूरे लेन-देन को रद्द किए बिना केवल उस बिंदु तक रोलबैक किया जा सके."
    },
    {
        "id": 40,
        "question": "In an ER diagram, an attribute composed of multiple sub-components (such as Name consisting of First_Name and Last_Name) is called a:",
        "question_hi": "ER आरेख में, कई उप-घटकों से बने एट्रिब्यूट (जैसे Name में First_Name और Last_Name होना) को क्या कहा जाता है?",
        "options": {
            "A": "Multivalued Attribute",
            "B": "Composite Attribute",
            "C": "Derived Attribute",
            "D": "Complex Attribute"
        },
        "options_hi": {
            "A": "बहु-मान्य एट्रिब्यूट",
            "B": "कंपोजिट एट्रिब्यूट (Composite Attribute)",
            "C": "व्युत्पन्न एट्रिब्यूट",
            "D": "जटिल एट्रिब्यूट"
        },
        "correctAnswer": "B",
        "explanation": "A composite attribute can be divided into smaller sub-parts that represent more basic attributes with independent meanings.",
        "explanation_hi": "कंपोजिट एट्रिब्यूट वह गुण है जिसे छोटे अर्थपूर्ण उप-भागों में विभाजित किया जा सकता है (जैसे नाम को प्रथम नाम और उपनाम में)."
    },
    {
        "id": 41,
        "question": "How is a 'Derived Attribute' (e.g., Age calculated from Date_of_Birth) represented in an ER diagram?",
        "question_hi": "ER आरेख में 'व्युत्पन्न एट्रिब्यूट (Derived Attribute)' (जैसे जन्मतिथि से आयु की गणना) को कैसे दर्शाया जाता है?",
        "options": {
            "A": "Double Ellipse",
            "B": "Dashed (Dotted) Ellipse",
            "C": "Double Rectangle",
            "D": "Diamond"
        },
        "options_hi": {
            "A": "दोहरा दीर्घवृत्त",
            "B": "डैशयुक्त (बिंदीदार) दीर्घवृत्त (Dashed Ellipse)",
            "C": "दोहरा आयत",
            "D": "हीरा"
        },
        "correctAnswer": "B",
        "explanation": "Derived attributes are represented using dashed/dotted ovals (ellipses) in standard ER diagrams.",
        "explanation_hi": "व्युत्पन्न एट्रिब्यूट (जिसका मान किसी अन्य एट्रिब्यूट से निकाला जाता है) को बिंदीदार दीर्घवृत्त (Dashed Ellipse) द्वारा दर्शाया जाता है."
    },
    {
        "id": 42,
        "question": "How is a 'Multivalued Attribute' (e.g., Phone_Number having multiple values) represented in an ER diagram?",
        "question_hi": "ER आरेख में 'बहु-मान्य एट्रिब्यूट (Multivalued Attribute)' (जैसे एक व्यक्ति के कई फोन नंबर होना) को कैसे दर्शाया जाता है?",
        "options": {
            "A": "Double Ellipse",
            "B": "Double Rectangle",
            "C": "Dashed Ellipse",
            "D": "Double Diamond"
        },
        "options_hi": {
            "A": "दोहरा दीर्घवृत्त (Double Ellipse)",
            "B": "दोहरा आयत",
            "C": "डैशयुक्त दीर्घवृत्त",
            "D": "दोहरा हीरा"
        },
        "correctAnswer": "A",
        "explanation": "Multivalued attributes that can hold a set of values for a single entity instance are represented with double concentric ellipses.",
        "explanation_hi": "बहु-मान्य एट्रिब्यूट (जिसमें एक से अधिक मान हो सकते हैं) को दोहरे दीर्घवृत्त (Double Ellipse) द्वारा दर्शाया जाता है."
    },
    {
        "id": 43,
        "question": "What is the result of applying the SQL LIKE pattern `'%_a%'`?",
        "question_hi": "SQL LIKE पैटर्न `'%_a%'` लागू करने का क्या परिणाम होता है?",
        "options": {
            "A": "Matches any string starting with 'a'",
            "B": "Matches any string that contains 'a' at least at the second character position or later",
            "C": "Matches strings of exactly 2 characters ending in 'a'",
            "D": "Matches only the letter 'a'"
        },
        "options_hi": {
            "A": "'a' से शुरू होने वाली कोई भी स्ट्रिंग",
            "B": "कोई भी स्ट्रिंग जिसमें कम से कम दूसरे स्थान पर या उसके बाद 'a' आता हो",
            "C": "ठीक 2 अक्षरों वाली स्ट्रिंग जो 'a' पर समाप्त होती है",
            "D": "केवल अक्षर 'a' से मेल खाता है"
        },
        "correctAnswer": "B",
        "explanation": "The underscore `_` matches exactly one character, and `%` matches zero or more. Thus `%_a%` requires at least one preceding character before 'a'.",
        "explanation_hi": "अंडरस्कोर `_` ठीक एक अक्षर दर्शाता है और `%` शून्य या अधिक। अतः `'%_a%'` का अर्थ है कि 'a' से पहले कम से कम एक अक्षर अवश्य होना चाहिए."
    },
    {
        "id": 44,
        "question": "Which of the following statements about Candidate Keys is FALSE?",
        "question_hi": "कैंडिडेट कीज़ (Candidate Keys) के संबंध में निम्नलिखित में से कौन सा कथन असत्य है?",
        "options": {
            "A": "A candidate key is a minimal superkey",
            "B": "A relation can have more than one candidate key",
            "C": "A candidate key attribute may accept duplicate values in the relation",
            "D": "One candidate key is chosen by the designer to be the Primary Key"
        },
        "options_hi": {
            "A": "कैंडिडेट की एक न्यूनतम सुपर की होती है",
            "B": "एक रिलेशन में एक से अधिक कैंडिडेट की हो सकती हैं",
            "C": "कैंडिडेट की एट्रिब्यूट संबंध में डुप्लिकेट मान स्वीकार कर सकता है",
            "D": "डिज़ाइनर द्वारा एक कैंडिडेट की को प्राइमरी की के रूप में चुना जाता है"
        },
        "correctAnswer": "C",
        "explanation": "Candidate keys must uniquely identify each tuple in a relation; they can never contain duplicate values.",
        "explanation_hi": "कैंडिडेट की प्रत्येक पंक्ति को विशिष्ट रूप से पहचानती है, इसलिए इसमें कभी भी डुप्लिकेट मान नहीं हो सकते."
    },
    {
        "id": 45,
        "question": "What is the Canonical Cover (Minimal Cover) of a set of functional dependencies?",
        "question_hi": "कार्यात्मक निर्भरताओं के एक सेट का विहित आवरण (Canonical Cover) क्या होता है?",
        "options": {
            "A": "A minimal equivalent set of FDs with no redundant FDs and no extraneous attributes",
            "B": "The set of all possible FDs derivable by Armstrong's axioms",
            "C": "A set with maximal candidate keys",
            "D": "The power set of table attributes"
        },
        "options_hi": {
            "A": "FDs का एक न्यूनतम समकक्ष सेट जिसमें कोई अनावश्यक निर्भरता और कोई अतिरिक्त एट्रिब्यूट नहीं होता",
            "B": "आर्मस्ट्रांग के नियमों द्वारा प्राप्त सभी संभावित FDs का सेट",
            "C": "अधिकतम कैंडिडेट की वाला सेट",
            "D": "टेबल एट्रिब्यूट का पावर सेट"
        },
        "correctAnswer": "A",
        "explanation": "A canonical cover Fc for F is a simplified set of FDs that is logically equivalent to F, contains no extraneous attributes, and has unique left-hand sides.",
        "explanation_hi": "विहित आवरण (कैनोनिकल कवर) निर्भरताओं का सबसे संक्षिप्त व न्यूनतम सेट है जो मूल सेट के समतुल्य होता है और जिसमें कोई अनावश्यक तत्व नहीं होता."
    },
    {
        "id": 46,
        "question": "Which SQL statement is used to rename a table named 'Old_Employees' to 'New_Employees'?",
        "question_hi": "'Old_Employees' नाम की टेबल का नाम बदलकर 'New_Employees' करने के लिए किस SQL कथन का उपयोग किया जाता है?",
        "options": {
            "A": "RENAME Old_Employees TO New_Employees;",
            "B": "UPDATE TABLE Old_Employees TO New_Employees;",
            "C": "MODIFY TABLE Old_Employees NAME New_Employees;",
            "D": "ALTER Old_Employees AS New_Employees;"
        },
        "options_hi": {
            "A": "RENAME Old_Employees TO New_Employees;",
            "B": "UPDATE TABLE Old_Employees TO New_Employees;",
            "C": "MODIFY TABLE Old_Employees NAME New_Employees;",
            "D": "ALTER Old_Employees AS New_Employees;"
        },
        "correctAnswer": "A",
        "explanation": "Standard SQL DDL syntax provides `RENAME old_table TO new_table;` (or `ALTER TABLE old_table RENAME TO new_table;`).",
        "explanation_hi": "टेबल का नाम बदलने के लिए मानक DDL सिंटैक्स `RENAME पुरानी_टेबल TO नई_टेबल;` होता है."
    },
    {
        "id": 47,
        "question": "What is an 'Equi-Join'?",
        "question_hi": "'इक्वि-जॉइन (Equi-Join)' क्या है?",
        "options": {
            "A": "A theta join where the join condition uses only the equality operator (=)",
            "B": "A join that produces equal number of rows from both tables",
            "C": "A join using inequality operators (<, >)",
            "D": "A join between identical tables"
        },
        "options_hi": {
            "A": "एक थीटा जॉइन जहाँ जॉइन शर्त में केवल समानता ऑपरेटर (=) का उपयोग किया जाता है",
            "B": "एक जॉइन जो दोनों तालिकाओं से समान संख्या में पंक्तियाँ उत्पन्न करता है",
            "C": "असमानता ऑपरेटरों का उपयोग करने वाला जॉइन",
            "D": "समान तालिकाओं के बीच जॉइन"
        },
        "correctAnswer": "A",
        "explanation": "An equi-join is a specialized theta-join where comparison operators are restricted strictly to equivalence (=).",
        "explanation_hi": "इक्वि-जॉइन में दोनों टेबलों के कॉलमों के बीच केवल बराबर (=) ऑपरेटर का उपयोग करके मिलान किया जाता है."
    },
    {
        "id": 48,
        "question": "What is the main function of the Database Query Optimizer?",
        "question_hi": "डेटाबेस क्वेरी ऑप्टिमाइज़र (Query Optimizer) का मुख्य कार्य क्या है?",
        "options": {
            "A": "Checking spelling of SQL keywords",
            "B": "Evaluating multiple relational execution plans and selecting the one with minimum estimated disk I/O and CPU cost",
            "C": "Backing up databases to cloud servers",
            "D": "Generating ER diagrams automatically"
        },
        "options_hi": {
            "A": "SQL कीवर्ड्स की वर्तनी जाँचना",
            "B": "कई निष्पादन योजनाओं (Execution Plans) का मूल्यांकन करना और न्यूनतम अनुमानित I/O और CPU लागत वाली योजना का चयन करना",
            "C": "डेटाबेस का बैकअप लेना",
            "D": "ER आरेख स्वतः बनाना"
        },
        "correctAnswer": "B",
        "explanation": "The Query Optimizer analyzes relational algebra trees, table statistics, and indices to select the lowest cost physical execution strategy.",
        "explanation_hi": "क्वेरी ऑप्टिमाइज़र क्वेरी चलाने के विभिन्न संभावित तरीकों का विश्लेषण करता है और सबसे कम समय व संसाधन खर्च करने वाले निष्पादन प्लान को चुनता है."
    },
    {
        "id": 49,
        "question": "What is a 'Phantom Tuple' problem in concurrency control?",
        "question_hi": "समवर्ती नियंत्रण में 'फैंटम ट्यूपल (Phantom Tuple)' समस्या क्या है?",
        "options": {
            "A": "A tuple that is corrupted by hardware failures",
            "B": "A transaction re-executes a range query and discovers new rows inserted by another committed transaction",
            "C": "A tuple with null values in all attributes",
            "D": "A tuple deleted twice"
        },
        "options_hi": {
            "A": "हार्डवेयर खराबी से दूषित ट्यूपल",
            "B": "जब कोई लेन-देन रेंज क्वेरी को दोहराता है और किसी अन्य कमिटेड लेन-देन द्वारा जोड़ी गई नई पंक्तियों को पाता है",
            "C": "सभी गुणों में NULL मान वाला ट्यूपल",
            "D": "दो बार डिलीट किया गया ट्यूपल"
        },
        "correctAnswer": "B",
        "explanation": "Phantom phenomena occur when a transaction queries a set of rows satisfying a predicate, and another transaction inserts a new row satisfying the predicate before the first finishes.",
        "explanation_hi": "फैंटम समस्या तब होती है जब एक ट्रांजैक्शन एक ही शर्त वाली क्वेरी दोबारा चलाता है और पाता है कि बीच में किसी अन्य ट्रांजैक्शन ने नई पंक्तियाँ जोड़ दी हैं."
    },
    {
        "id": 50,
        "question": "Which of the following database anomalies is directly caused by lack of database normalization?",
        "question_hi": "डेटाबेस सामान्यीकरण (Normalization) की कमी के कारण सीधे तौर पर निम्नलिखित में से कौन सी विसंगति होती है?",
        "options": {
            "A": "Insertion Anomaly, Deletion Anomaly, and Update Anomaly",
            "B": "CPU Overheating Anomaly",
            "C": "Network Latency Anomaly",
            "D": "Syntax Parse Anomaly"
        },
        "options_hi": {
            "A": "इंसर्शन विसंगति, डिलीशन विसंगति और अपडेट विसंगति (Anomalies)",
            "B": "CPU ओवरहीटिंग विसंगति",
            "C": "नेटवर्क विलंबता विसंगति",
            "D": "सिंटैक्स पार्स विसंगति"
        },
        "correctAnswer": "A",
        "explanation": "Unnormalized relations suffer from data redundancy, leading to insertion anomalies (cannot record data without nulls), deletion anomalies (accidental data loss), and update anomalies (inconsistent replicas).",
        "explanation_hi": "अनॉर्मलाइज़्ड टेबल में डेटा की पुनरावृत्ति के कारण डेटा जोड़ने, हटाने और अपडेट करने में विसंगतियाँ (Anomalies) उत्पन्न होती हैं."
    }
]

print("DBMS Mastery Drill: 50 questions loaded successfully.")

