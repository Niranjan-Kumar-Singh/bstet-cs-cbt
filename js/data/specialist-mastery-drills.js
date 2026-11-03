// Specialist Mastery Drills for Bihar STET Paper II CS (Code 226) & BPSC TRE
window.drill_dbms_sql_50 = {
  "id": "drill_dbms_sql_50",
  "title": "DBMS & SQL Deep Mastery Drill",
  "subtitle": "Normalization (1NF-BCNF), Relational Algebra, SQL Queries, ACID & Concurrency",
  "totalQuestions": 50,
  "totalMarks": 50,
  "durationMinutes": 60,
  "sections": [
    {
      "id": "dbms",
      "name": "DBMS & SQL Specialist",
      "startQ": 1,
      "endQ": 50,
      "total": 50
    }
  ],
  "questions": [
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
};

window.drill_os_networks_master_50 = {
  "id": "drill_os_networks_master_50",
  "title": "OS & Computer Networks Mastery Drill",
  "subtitle": "Scheduling, Synchronization, Deadlocks, Paging, OSI/TCP, Subnetting & Security",
  "totalQuestions": 50,
  "totalMarks": 50,
  "durationMinutes": 60,
  "sections": [
    {
      "id": "os_net",
      "name": "OS & Networks Specialist",
      "startQ": 1,
      "endQ": 50,
      "total": 50
    }
  ],
  "questions": [
    {
      "id": 1,
      "question": "If a CPU scheduling algorithm has an average waiting time of 12ms and average burst time of 8ms, what is the average turnaround time?",
      "question_hi": "यदि किसी CPU शेड्यूलिंग एल्गोरिदम का औसत प्रतीक्षा समय 12ms और औसत बर्स्ट समय 8ms है, तो औसत टर्नअराउंड समय क्या होगा?",
      "options": {
        "A": "4 ms",
        "B": "12 ms",
        "C": "20 ms",
        "D": "96 ms"
      },
      "options_hi": {
        "A": "4 ms",
        "B": "12 ms",
        "C": "20 ms",
        "D": "96 ms"
      },
      "correctAnswer": "C",
      "explanation": "Turnaround Time = Waiting Time + Burst Time. Hence, 12 ms + 8 ms = 20 ms.",
      "explanation_hi": "टर्नअराउंड समय = प्रतीक्षा समय + बर्स्ट समय। अतः 12 ms + 8 ms = 20 ms होगा."
    },
    {
      "id": 2,
      "question": "What is 'Priority Inversion' in real-time operating systems?",
      "question_hi": "रीयल-टाइम ऑपरेटिंग सिस्टम में 'प्रायोरिटी इन्वर्शन (Priority Inversion)' क्या है?",
      "options": {
        "A": "A lower-priority process preempts a higher-priority process directly",
        "B": "A high-priority process is blocked waiting for a shared resource held by a low-priority process, which is in turn preempted by a medium-priority process",
        "C": "Changing process priority from negative to positive",
        "D": "CPU clock reversing its ticks"
      },
      "options_hi": {
        "A": "कम प्राथमिकता वाली प्रक्रिया सीधे उच्च प्राथमिकता वाली प्रक्रिया को रोक देती है",
        "B": "एक उच्च-प्राथमिकता प्रक्रिया कम-प्राथमिकता वाली प्रक्रिया द्वारा रोके गए संसाधन की प्रतीक्षा करती है, जबकि कम-प्राथमिकता वाली प्रक्रिया को मध्यम-प्राथमिकता प्रक्रिया द्वारा रोक दिया जाता है",
        "C": "प्रक्रिया की प्राथमिकता को ऋणात्मक से धनात्मक में बदलना",
        "D": "CPU क्लॉक का उल्टा चलना"
      },
      "correctAnswer": "B",
      "explanation": "Priority inversion happens when a high-priority task is indirectly preempted by a lower-priority task through shared lock contention, solved by Priority Inheritance.",
      "explanation_hi": "प्रायोरिटी इन्वर्शन तब होता है जब एक उच्च प्राथमिकता वाली प्रोसेस को साझा संसाधन पर लॉक के कारण कम प्राथमिकता वाली प्रोसेस की प्रतीक्षा करनी पड़ती है; इसका समाधान प्रायोरिटी इनहेरिटेंस द्वारा किया जाता है."
    },
    {
      "id": 3,
      "question": "Which of the following conditions is NOT required for a solution to the Critical Section Problem?",
      "question_hi": "क्रिटिकल सेक्शन समस्या के समाधान के लिए निम्नलिखित में से कौन सी शर्त आवश्यक नहीं है?",
      "options": {
        "A": "Mutual Exclusion",
        "B": "Progress",
        "C": "Bounded Waiting",
        "D": "Strict Synchronization of CPU speeds"
      },
      "options_hi": {
        "A": "म्युचुअल एक्सक्लूजन (पारस्परिक अपवर्जन)",
        "B": "प्रोग्रेस (प्रगति)",
        "C": "बाउंडेड वेटिंग (सीमित प्रतीक्षा)",
        "D": "CPU गति का सख्त तुल्यकालन"
      },
      "correctAnswer": "D",
      "explanation": "The three classical criteria are Mutual Exclusion, Progress, and Bounded Waiting. No assumptions are made regarding relative CPU execution speeds.",
      "explanation_hi": "क्रिटिकल सेक्शन के लिए आवश्यक 3 शर्तें हैं: म्युचुअल एक्सक्लूजन, प्रोग्रेस और बाउंडेड वेटिंग। प्रोसेस या CPU की सापेक्ष गति पर कोई प्रतिबंध नहीं होता."
    },
    {
      "id": 4,
      "question": "In Peterson's Solution for two processes (P0 and P1), which variable indicates whose turn it is to enter the critical section?",
      "question_hi": "दो प्रक्रियाओं (P0 और P1) के लिए पीटरसन के समाधान में, कौन सा वेरिएबल इंगित करता है कि क्रिटिकल सेक्शन में प्रवेश करने की किसकी बारी है?",
      "options": {
        "A": "turn",
        "B": "flag[2]",
        "C": "mutex",
        "D": "sem"
      },
      "options_hi": {
        "A": "turn",
        "B": "flag[2]",
        "C": "mutex",
        "D": "sem"
      },
      "correctAnswer": "A",
      "explanation": "In Peterson's algorithm, the integer variable 'turn' designates which process has permission to enter the critical section.",
      "explanation_hi": "पीटरसन के एल्गोरिदम में 'turn' वेरिएबल यह तय करता है कि क्रिटिकल सेक्शन में जाने की किस प्रोसेस की बारी है."
    },
    {
      "id": 5,
      "question": "A system has 4 processes and 12 tape drives. What is the maximum number of tape drives each process can claim such that deadlock can NEVER occur?",
      "question_hi": "एक प्रणाली में 4 प्रक्रियाएं और 12 टेप ड्राइव हैं। प्रत्येक प्रक्रिया अधिकतम कितने टेप ड्राइव का दावा कर सकती है जिससे डेडलॉक कभी न हो?",
      "options": {
        "A": "2",
        "B": "3",
        "C": "4",
        "D": "5"
      },
      "options_hi": {
        "A": "2",
        "B": "3",
        "C": "4",
        "D": "5"
      },
      "correctAnswer": "B",
      "explanation": "Formula for deadlock prevention: Total Resources >= P * (MaxDemand - 1) + 1. 12 >= 4 * (m - 1) + 1 => 11 >= 4m - 4 => 15 >= 4m => m <= 3.75. Max integer is 3.",
      "explanation_hi": "डेडलॉक से बचाव का सूत्र: कुल संसाधन >= n*(m-1) + 1। यहाँ 12 >= 4*(m-1) + 1 हल करने पर m <= 3.75 आता है, अतः अधिकतम सुरक्षित मांग 3 होगी."
    },
    {
      "id": 6,
      "question": "If TLB hit ratio is 80%, TLB access time is 20ns, and main memory access time is 100ns, what is the Effective Memory Access Time (EMAT) with single-level paging?",
      "question_hi": "यदि TLB हिट अनुपात 80%, TLB एक्सेस समय 20ns और मुख्य मेमोरी एक्सेस समय 100ns है, तो सिंगल-लेवल पेजिंग में प्रभावी मेमोरी एक्सेस समय (EMAT) क्या होगा?",
      "options": {
        "A": "100 ns",
        "B": "120 ns",
        "C": "140 ns",
        "D": "220 ns"
      },
      "options_hi": {
        "A": "100 ns",
        "B": "120 ns",
        "C": "140 ns",
        "D": "220 ns"
      },
      "correctAnswer": "C",
      "explanation": "EMAT = Hit_Ratio * (TLB + Mem) + Miss_Ratio * (TLB + 2*Mem) = 0.8 * (20 + 100) + 0.2 * (20 + 200) = 0.8 * 120 + 0.2 * 220 = 96 + 44 = 140 ns.",
      "explanation_hi": "EMAT = 0.8 * (20 + 100) + 0.2 * (20 + 200) = 96 + 44 = 140 ns होगा."
    },
    {
      "id": 7,
      "question": "What is the primary purpose of Translation Lookaside Buffer (TLB)?",
      "question_hi": "ट्रांसलेशन लुकअसाइड बफ़र (TLB) का प्राथमिक उद्देश्य क्या है?",
      "options": {
        "A": "To store compiled binary executables",
        "B": "A high-speed associative hardware cache for recent virtual-to-physical page translations",
        "C": "To store hard disk sector maps",
        "D": "To monitor network throughput"
      },
      "options_hi": {
        "A": "कंपाइल किए गए बाइनरी प्रोग्राम स्टोर करना",
        "B": "हालिया वर्चुअल-से-फिजिकल पेज रूपांतरणों के लिए एक उच्च-गति एसोसिएटिव हार्डवेयर कैश",
        "C": "हार्ड डिस्क सेक्टर मैप स्टोर करना",
        "D": "नेटवर्क थ्रूपुट की निगरानी करना"
      },
      "correctAnswer": "B",
      "explanation": "TLB is an on-chip associative cache that stores recently accessed page table entries to avoid an extra memory lookup for every address translation.",
      "explanation_hi": "TLB एक उच्च गति वाला हार्डवेयर कैश है जो हाल के पेज ट्रांसलेशन को स्टोर करता है ताकि हर मेमोरी एक्सेस पर मुख्य मेमोरी की पेज टेबल को न पढ़ना पड़े."
    },
    {
      "id": 8,
      "question": "In virtual memory systems, what is the 'Working Set Model' based on?",
      "question_hi": "वर्चुअल मेमोरी सिस्टम में, 'वर्किंग सेट मॉडल' किस पर आधारित है?",
      "options": {
        "A": "Principle of Locality of Reference",
        "B": "FIFO scheduling",
        "C": "Random page replacement",
        "D": "Magnetic tape speeds"
      },
      "options_hi": {
        "A": "संदर्भ की स्थानीयता का सिद्धांत (Locality of Reference)",
        "B": "FIFO शेड्यूलिंग",
        "C": "रैंडम पेज रिप्लेसमेंट",
        "D": "चुंबकीय टेप गति"
      },
      "correctAnswer": "A",
      "explanation": "Peter Denning's Working Set Model relies on temporal and spatial locality of reference to approximate the set of pages an active process requires.",
      "explanation_hi": "पीटर डेनिंग का वर्किंग सेट मॉडल संदर्भ की स्थानीयता (Locality of Reference) पर आधारित है, जो किसी प्रोसेस द्वारा हाल ही में उपयोग किए गए पेजों का समूह ट्रैक करता है."
    },
    {
      "id": 9,
      "question": "Which of the following disk scheduling algorithms does NOT suffer from starvation of far-away requests?",
      "question_hi": "निम्नलिखित में से कौन सा डिस्क शेड्यूलिंग एल्गोरिदम दूर के अनुरोधों की भुखमरी (Starvation) से ग्रस्त नहीं होता है?",
      "options": {
        "A": "SSTF (Shortest Seek Time First)",
        "B": "SCAN",
        "C": "FCFS",
        "D": "Both SCAN and FCFS"
      },
      "options_hi": {
        "A": "SSTF",
        "B": "SCAN",
        "C": "FCFS",
        "D": "SCAN और FCFS दोनों"
      },
      "correctAnswer": "D",
      "explanation": "FCFS services strictly in arrival order (no starvation), and SCAN continuously sweeps across all cylinders in order, guaranteeing service without starvation.",
      "explanation_hi": "FCFS और SCAN दोनों में अनुरोधों को सेवा की गारंटी मिलती है और कोई भी सिलेंडर स्थायी रूप से उपेक्षित (Starvation) नहीं रहता (जबकि SSTF में भुखमरी हो सकती है)."
    },
    {
      "id": 10,
      "question": "What is an 'inode' in a UNIX file system?",
      "question_hi": "UNIX फ़ाइल सिस्टम में 'इनोड (inode)' क्या है?",
      "options": {
        "A": "A special internet node on the network",
        "B": "A data structure storing file metadata (permissions, ownership, size, disk block pointers) except filename",
        "C": "A command to format disk drives",
        "D": "A process control block in Linux"
      },
      "options_hi": {
        "A": "नेटवर्क पर एक विशेष इंटरनेट नोड",
        "B": "फ़ाइल नाम को छोड़कर फ़ाइल का मेटाडेटा (अनुमतियाँ, स्वामित्व, आकार, डिस्क ब्लॉक पॉइंटर्स) संग्रहीत करने वाली डेटा संरचना",
        "C": "डिस्क ड्राइव फॉर्मेट करने का कमांड",
        "D": "लिनक्स में एक प्रोसेस कंट्रोल ब्लॉक"
      },
      "correctAnswer": "B",
      "explanation": "An inode (index node) stores all filesystem metadata about a file (attributes and block addresses), while the filename is maintained in directory entries.",
      "explanation_hi": "इनोड (inode) फ़ाइल की सभी विशेषताओं (आकार, अनुमतियाँ, डिस्क ब्लॉक के पते) को संग्रहीत करता है, जबकि फ़ाइल का नाम डायरेक्टरी में रहता है."
    },
    {
      "id": 11,
      "question": "What is the difference between a Hard Link and a Soft (Symbolic) Link in Linux?",
      "question_hi": "लिनक्स में हार्ड लिंक (Hard Link) और सॉफ्ट (सिम्बोलिक) लिंक में क्या अंतर है?",
      "options": {
        "A": "Hard link points directly to the file's inode; Soft link points to the pathname of the file",
        "B": "Soft link cannot cross file system boundaries",
        "C": "Hard link is a shortcut file",
        "D": "Deleting the original file breaks hard links"
      },
      "options_hi": {
        "A": "हार्ड लिंक सीधे फ़ाइल के इनोड (inode) की ओर इशारा करता है; सॉफ्ट लिंक फ़ाइल के पथ (Pathname) की ओर इशारा करता है",
        "B": "सॉफ्ट लिंक फ़ाइल सिस्टम की सीमाओं को पार नहीं कर सकता",
        "C": "हार्ड लिंक केवल एक शॉर्टकट फ़ाइल है",
        "D": "मूल फ़ाइल हटाने पर हार्ड लिंक टूट जाते हैं"
      },
      "correctAnswer": "A",
      "explanation": "A hard link is an alternate directory entry sharing the identical inode number, so deleting the original name does not destroy data. A symbolic link references the target file's path string.",
      "explanation_hi": "हार्ड लिंक उसी इनोड नंबर को साझा करता है (मूल फाइल हटाने पर भी डेटा रहता है), जबकि सिम्बोलिक लिंक केवल फ़ाइल पाथ का संदर्भ होता है."
    },
    {
      "id": 12,
      "question": "What is an 'Orphan Process' in Linux?",
      "question_hi": "लिनक्स में 'अनाथ प्रक्रिया (Orphan Process)' क्या होती है?",
      "options": {
        "A": "A process whose parent has terminated while it continues executing",
        "B": "A process that has completed execution but still has an entry in the process table",
        "C": "A process with high CPU usage",
        "D": "A system daemon created at startup"
      },
      "options_hi": {
        "A": "एक प्रक्रिया जिसका मूल (Parent) प्रोसेस समाप्त हो चुका है जबकि वह स्वयं चलती रहती है",
        "B": "एक प्रक्रिया जो पूरी हो चुकी है लेकिन अभी भी प्रोसेस टेबल में प्रविष्टि रखती है",
        "C": "उच्च CPU उपयोग वाली प्रक्रिया",
        "D": "स्टार्टअप पर बनाया गया सिस्टम डेमॉन"
      },
      "correctAnswer": "A",
      "explanation": "An orphan process continues executing after its parent exits. In UNIX/Linux, orphans are adopted by `systemd` or `init` (PID 1).",
      "explanation_hi": "जब किसी चाइल्ड प्रोसेस का पैरेंट प्रोसेस पहले ही समाप्त हो जाता है, तो वह अनाथ (Orphan) कहलाती है और इसे 'init' (PID 1) द्वारा गोद ले लिया जाता है."
    },
    {
      "id": 13,
      "question": "What is a 'Zombie Process' in Linux?",
      "question_hi": "लिनक्स में 'ज़ोंबी प्रक्रिया (Zombie Process)' क्या होती है?",
      "options": {
        "A": "A process that has finished execution but remains in the process table until its parent reads its exit status via wait()",
        "B": "A process infected with a virus",
        "C": "A process running in kernel mode indefinitely",
        "D": "A process waiting for disk I/O"
      },
      "options_hi": {
        "A": "एक प्रक्रिया जो निष्पादन पूरा कर चुकी है परंतु प्रोसेस टेबल में तब तक बनी रहती है जब तक पैरेंट wait() द्वारा उसका एग्जिट स्टेटस न पढ़ ले",
        "B": "वायरस से संक्रमित प्रक्रिया",
        "C": "कर्नेल मोड में अनिश्चित काल तक चलने वाली प्रक्रिया",
        "D": "डिस्क I/O की प्रतीक्षा कर रही प्रक्रिया"
      },
      "correctAnswer": "A",
      "explanation": "A zombie (defunct process) has terminated its code execution, but its exit status remains in the process table until collected by the parent via wait().",
      "explanation_hi": "ज़ोंबी प्रोसेस अपना काम समाप्त कर चुकी होती है लेकिन प्रोसेस टेबल में उसका रिकॉर्ड तब तक रहता है जब तक पैरेंट wait() कॉल द्वारा स्टेटस नहीं लेता."
    },
    {
      "id": 14,
      "question": "Which memory allocation placement policy searches the entire list of free holes and selects the smallest hole that is big enough?",
      "question_hi": "कौन सी मेमोरी आवंटन नीति खाली छेदों (Free Holes) की पूरी सूची खोजती है और सबसे छोटे पर्याप्त छेद का चयन करती है?",
      "options": {
        "A": "First-Fit",
        "B": "Best-Fit",
        "C": "Worst-Fit",
        "D": "Next-Fit"
      },
      "options_hi": {
        "A": "फर्स्ट-फिट",
        "B": "बेस्ट-फिट (Best-Fit)",
        "C": "वर्स्ट-फिट",
        "D": "नेक्स्ट-फिट"
      },
      "correctAnswer": "B",
      "explanation": "Best-Fit allocates the smallest available free partition that can accommodate the request, minimizing leftover wasted fragment space in that hole.",
      "explanation_hi": "बेस्ट-फिट मेमोरी आवंटन में उपलब्ध खाली स्थानों में से सबसे छोटे पर्याप्त स्थान का चयन किया जाता है ताकि उस ब्लॉक में कम से कम स्थान बर्बाद हो."
    },
    {
      "id": 15,
      "question": "What is 'Internal Fragmentation'?",
      "question_hi": "'आंतरिक विखंडन (Internal Fragmentation)' क्या है?",
      "options": {
        "A": "Total free memory is sufficient but not contiguous",
        "B": "Allocated memory block is slightly larger than requested memory, leaving unused space inside the assigned partition",
        "C": "Corrupted sectors inside a hard disk",
        "D": "Cache misses in L1 cache"
      },
      "options_hi": {
        "A": "कुल खाली मेमोरी पर्याप्त है लेकिन निरंतर (कंटीगुअस) नहीं है",
        "B": "आवंटित मेमोरी ब्लॉक मांगी गई मेमोरी से थोड़ा बड़ा होता है, जिससे ब्लॉक के अंदर ही स्थान व्यर्थ रह जाता है",
        "C": "हार्ड डिस्क के अंदर खराब सेक्टर",
        "D": "L1 कैश में कैश मिस"
      },
      "correctAnswer": "B",
      "explanation": "Internal fragmentation occurs when fixed-sized memory blocks (like pages or fixed partitions) are assigned and the process does not use the entire allocated block.",
      "explanation_hi": "आंतरिक विखंडन तब होता है जब आवंटित पार्टीशन या पेज का आकार प्रोसेस द्वारा मांगी गई मेमोरी से बड़ा होता है, जिससे उस ब्लॉक के भीतर खाली जगह बर्बाद होती है."
    },
    {
      "id": 16,
      "question": "Which of the following is an atomic hardware instruction used to implement mutual exclusion locks?",
      "question_hi": "पारस्परिक अपवर्जन लॉक लागू करने के लिए उपयोग किया जाने वाला परमाणु हार्डवेयर निर्देश कौन सा है?",
      "options": {
        "A": "Test-and-Set",
        "B": "Compare-and-Swap (CAS)",
        "C": "Exchange (XCHG)",
        "D": "All of the above"
      },
      "options_hi": {
        "A": "टेस्ट-एंड-सेट",
        "B": "कम्पेयर-एंड-स्वैप (CAS)",
        "C": "एक्सचेंज (XCHG)",
        "D": "उपरोक्त सभी (All of the above)"
      },
      "correctAnswer": "D",
      "explanation": "Modern CPUs provide atomic read-modify-write instructions (Test-and-Set, Compare-and-Swap, and XCHG) to construct low-overhead spinlocks and semaphores.",
      "explanation_hi": "हार्डवेयर स्तर पर Test-and-Set, Compare-and-Swap और XCHG सभी अनविभाज्य निर्देश हैं जिनका उपयोग म्युचुअल एक्सक्लूजन लॉक बनाने के लिए किया जाता है."
    },
    {
      "id": 17,
      "question": "What is a 'Spinlock' in operating systems?",
      "question_hi": "ऑपरेटिंग सिस्टम में 'स्पिनलॉक (Spinlock)' क्या है?",
      "options": {
        "A": "A lock where a thread waits in a busy-wait loop continuously checking lock availability",
        "B": "A lock that rotates between hard disk platters",
        "C": "A cryptographic hashing lock",
        "D": "A lock that permanently puts threads to sleep"
      },
      "options_hi": {
        "A": "एक लॉक जहाँ थ्रेड बिजी-वेटिंग लूप में लॉक मिलने की प्रतीक्षा करता रहता है",
        "B": "हार्ड डिस्क प्लैटर्स के बीच घूमने वाला लॉक",
        "C": "क्रिप्टोग्राफिक हैशिंग लॉक",
        "D": "थ्रेड को स्थायी रूप से सुलाने वाला लॉक"
      },
      "correctAnswer": "A",
      "explanation": "Spinlocks use busy waiting where the waiting thread repeatedly loops ('spins') testing the lock variable. They are ideal for multiprocessor short critical sections.",
      "explanation_hi": "स्पिनलॉक एक बिजी-वेटिंग लॉक है जहाँ थ्रेड बिना सोए लगातार CPU चक्र खर्च करते हुए लॉक खाली होने की प्रतीक्षा करता है (कम समय के लिए उपयोगी)."
    },
    {
      "id": 18,
      "question": "Which classical synchronization problem involves a fixed-capacity buffer accessed by producer and consumer threads?",
      "question_hi": "किस शास्त्रीय तुल्यकालन समस्या में निर्माता और उपभोक्ता थ्रेड्स द्वारा एक सीमित क्षमता वाले बफर का उपयोग किया जाता है?",
      "options": {
        "A": "Bounded-Buffer (Producer-Consumer) Problem",
        "B": "Dining Philosophers Problem",
        "C": "Readers-Writers Problem",
        "D": "Sleeping Barber Problem"
      },
      "options_hi": {
        "A": "बाउंडेड-बफ़र (निर्माता-उपभोक्ता) समस्या",
        "B": "भोजन करते दार्शनिकों की समस्या",
        "C": "पाठक-लेखक समस्या",
        "D": "सोता हुआ नाई समस्या"
      },
      "correctAnswer": "A",
      "explanation": "The Bounded-Buffer problem synchronizes producers placing items into a finite buffer and consumers removing items without overflow or underflow.",
      "explanation_hi": "बाउंडेड-बफ़र (Producer-Consumer) समस्या में सीमित आकार के बफ़र में डेटा लिखने और पढ़ने का समन्वय सेमाफोर द्वारा किया जाता है."
    },
    {
      "id": 19,
      "question": "In the Dining Philosophers Problem with 5 philosophers, what is the maximum number of philosophers who can eat simultaneously without conflict?",
      "question_hi": "5 दार्शनिकों की डाइनिंग फिलॉसफर्स समस्या में, बिना किसी टकराव के अधिकतम कितने दार्शनिक एक साथ भोजन कर सकते हैं?",
      "options": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4"
      },
      "options_hi": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4"
      },
      "correctAnswer": "B",
      "explanation": "Each eating philosopher requires 2 adjacent chopsticks. With 5 philosophers arranged in a circle, at most 2 non-adjacent philosophers can hold 2 chopsticks simultaneously.",
      "explanation_hi": "प्रत्येक दार्शनिक को खाने के लिए 2 कांटे (Chopsticks) चाहिए। गोल मेज पर 5 में से अधिकतम 2 गैर-निकटवर्ती दार्शनिक ही एक साथ खा सकते हैं."
    },
    {
      "id": 20,
      "question": "Which command in Linux changes file access permissions?",
      "question_hi": "लिनक्स में फ़ाइल एक्सेस अनुमतियों को बदलने के लिए कौन सा कमांड उपयोग किया जाता है?",
      "options": {
        "A": "chown",
        "B": "chmod",
        "C": "chgrp",
        "D": "perm"
      },
      "options_hi": {
        "A": "chown",
        "B": "chmod (चेंज मोड)",
        "C": "chgrp",
        "D": "perm"
      },
      "correctAnswer": "B",
      "explanation": "The `chmod` command (change mode) modifies file read, write, and execute permissions (e.g., chmod 755 file.sh).",
      "explanation_hi": "`chmod` कमांड का उपयोग फाइलों और निर्देशिकाओं के पढ़ने (r), लिखने (w) और चलाने (x) की अनुमतियों को बदलने के लिए किया जाता है."
    },
    {
      "id": 21,
      "question": "What is the minimum Hamming distance required between valid codewords to detect up to 'd' bit errors in transmission?",
      "question_hi": "ट्रांसमिशन में 'd' बिट त्रुटियों का पता लगाने के लिए वैध कोडवर्ड के बीच न्यूनतम हैमिंग दूरी (Hamming Distance) कितनी होनी चाहिए?",
      "options": {
        "A": "d",
        "B": "d + 1",
        "C": "2d + 1",
        "D": "2d"
      },
      "options_hi": {
        "A": "d",
        "B": "d + 1",
        "C": "2d + 1",
        "D": "2d"
      },
      "correctAnswer": "B",
      "explanation": "To detect d errors, minimum Hamming distance must be d + 1. (To correct t errors, minimum distance must be 2t + 1).",
      "explanation_hi": "d बिट त्रुटियों का पता लगाने (Detect) के लिए न्यूनतम दूरी d + 1 होनी चाहिए; जबकि t त्रुटियों को ठीक (Correct) करने के लिए 2t + 1 होनी चाहिए."
    },
    {
      "id": 22,
      "question": "What is the minimum frame size in standard 10 Mbps Ethernet (802.3) with slot time 51.2 microseconds?",
      "question_hi": "51.2 माइक्रोसेकंड स्लॉट समय वाले मानक 10 Mbps ईथरनेट (802.3) में न्यूनतम फ्रेम आकार क्या है?",
      "options": {
        "A": "32 bytes",
        "B": "64 bytes (512 bits)",
        "C": "128 bytes",
        "D": "1500 bytes"
      },
      "options_hi": {
        "A": "32 बाइट्स",
        "B": "64 बाइट्स (512 बिट्स)",
        "C": "128 बाइट्स",
        "D": "1500 बाइट्स"
      },
      "correctAnswer": "B",
      "explanation": "Minimum frame size = Bandwidth * Round Trip Time = 10 Mbps * 51.2 µs = 512 bits = 64 bytes, required for collision detection via CSMA/CD.",
      "explanation_hi": "ईथरनेट में टकराव का पता लगाने के लिए न्यूनतम फ्रेम आकार 64 बाइट्स (512 बिट्स) होना अनिवार्य है."
    },
    {
      "id": 23,
      "question": "Which multiple access protocol uses Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA)?",
      "question_hi": "कौन सा एकाधिक एक्सेस प्रोटोकॉल CSMA/CA (टकराव से बचाव) का उपयोग करता है?",
      "options": {
        "A": "Standard Wired Ethernet (IEEE 802.3)",
        "B": "Wireless LAN / Wi-Fi (IEEE 802.11)",
        "C": "Token Ring (IEEE 802.5)",
        "D": "Fiber Distributed Data Interface (FDDI)"
      },
      "options_hi": {
        "A": "मानक वायर्ड ईथरनेट (IEEE 802.3)",
        "B": "वायरलेस लैन / वाई-फाई (IEEE 802.11)",
        "C": "टोकन रिंग (IEEE 802.5)",
        "D": "FDDI"
      },
      "correctAnswer": "B",
      "explanation": "Wi-Fi (IEEE 802.11) uses CSMA/CA because wireless transceivers cannot transmit and listen simultaneously to detect collisions reliably.",
      "explanation_hi": "वाई-फाई (802.11) वायरलेस माध्यम में टकराव का पता लगाना असंभव होने के कारण CSMA/CA (Collision Avoidance) का उपयोग करता है."
    },
    {
      "id": 24,
      "question": "In Classless Inter-Domain Routing (CIDR), what is the network address for the host IP 192.168.10.138/26?",
      "question_hi": "क्लासलेस इंटर-डोमेन रूटिंग (CIDR) में, होस्ट IP 192.168.10.138/26 के लिए नेटवर्क पता क्या होगा?",
      "options": {
        "A": "192.168.10.0",
        "B": "192.168.10.128",
        "C": "192.168.10.64",
        "D": "192.168.10.192"
      },
      "options_hi": {
        "A": "192.168.10.0",
        "B": "192.168.10.128",
        "C": "192.168.10.64",
        "D": "192.168.10.192"
      },
      "correctAnswer": "B",
      "explanation": "/26 has subnet mask 255.255.255.192 (block size = 256 - 192 = 64). Subnets are 0, 64, 128, 192. Since 138 lies between 128 and 191, the network ID is 192.168.10.128.",
      "explanation_hi": "सबनेट मास्क /26 में ब्लॉक साइज 64 है (सबनेट: 0, 64, 128, 192)। 138 सबनेट 128 का हिस्सा है, अतः नेटवर्क पता 192.168.10.128 होगा."
    },
    {
      "id": 25,
      "question": "What is the broadcast address for the subnet 192.168.10.128/26?",
      "question_hi": "सबनेट 192.168.10.128/26 के लिए ब्रॉडकास्ट पता क्या होगा?",
      "options": {
        "A": "192.168.10.191",
        "B": "192.168.10.192",
        "C": "192.168.10.255",
        "D": "192.168.10.129"
      },
      "options_hi": {
        "A": "192.168.10.191",
        "B": "192.168.10.192",
        "C": "192.168.10.255",
        "D": "192.168.10.129"
      },
      "correctAnswer": "A",
      "explanation": "With block size 64 starting at 128, the range is 128 to 191. The last address in the block (191) is the directed broadcast address: 192.168.10.191.",
      "explanation_hi": "ब्लॉक साइज 64 होने पर 128 से शुरू होने वाला सबनेट 191 पर समाप्त होता है। इस सबनेट का ब्रॉडकास्ट पता 192.168.10.191 होगा."
    },
    {
      "id": 26,
      "question": "Which of the following routing algorithms uses Dijkstra's algorithm to compute the shortest path tree at each router?",
      "question_hi": "निम्नलिखित में से कौन सा रूटिंग एल्गोरिदम प्रत्येक राउटर पर सबसे छोटा पथ ट्री बनाने के लिए डिज्क्स्ट्रा एल्गोरिदम का उपयोग करता है?",
      "options": {
        "A": "Distance Vector Routing (e.g. RIP)",
        "B": "Link State Routing (e.g. OSPF)",
        "C": "Path Vector Routing (e.g. BGP)",
        "D": "Flooding"
      },
      "options_hi": {
        "A": "डिस्टेंस वेक्टर रूटिंग (जैसे RIP)",
        "B": "लिंक स्टेट रूटिंग (जैसे OSPF)",
        "C": "पाथ वेक्टर रूटिंग (जैसे BGP)",
        "D": "फ्लडिंग"
      },
      "correctAnswer": "B",
      "explanation": "In link-state routing (such as OSPF), each router floods link states to build a complete topology map and runs Dijkstra's algorithm to calculate shortest paths.",
      "explanation_hi": "लिंक स्टेट रूटिंग (OSPF) में प्रत्येक राउटर पूरे नेटवर्क का टोपोलॉजी मैप बनाकर डिज्क्स्ट्रा एल्गोरिदम द्वारा सबसे छोटे रास्ते की गणना करता है."
    },
    {
      "id": 27,
      "question": "What is the maximum hop count allowed in Routing Information Protocol (RIP) before a destination is declared unreachable?",
      "question_hi": "रूटिंग सूचना प्रोटोकॉल (RIP) में किसी गंतव्य को अगम्य घोषित किए जाने से पहले अधिकतम कितने हॉप (Hop count) की अनुमति है?",
      "options": {
        "A": "10",
        "B": "15",
        "C": "16",
        "D": "255"
      },
      "options_hi": {
        "A": "10",
        "B": "15",
        "C": "16",
        "D": "255"
      },
      "correctAnswer": "B",
      "explanation": "RIP allows a maximum hop count of 15; a hop count of 16 is defined as infinity (unreachable) to mitigate routing loops.",
      "explanation_hi": "RIP में अधिकतम वैध हॉप काउंट 15 होता है; 16 हॉप्स को अनंत (अगंतव्य/अनरीचेबल) माना जाता है."
    },
    {
      "id": 28,
      "question": "Which protocol is the primary inter-autonomous system exterior routing protocol used across the global Internet?",
      "question_hi": "वैश्विक इंटरनेट पर उपयोग किया जाने वाला प्राथमिक ऑटोनॉमस सिस्टम बाहरी रूटिंग प्रोटोकॉल कौन सा है?",
      "options": {
        "A": "OSPF",
        "B": "RIP",
        "C": "BGP (Border Gateway Protocol)",
        "D": "IS-IS"
      },
      "options_hi": {
        "A": "OSPF",
        "B": "RIP",
        "C": "BGP (बॉर्डर गेटवे प्रोटोकॉल)",
        "D": "IS-IS"
      },
      "correctAnswer": "C",
      "explanation": "BGP (Border Gateway Protocol) is the de facto Path Vector exterior gateway protocol interconnecting different Autonomous Systems (AS) on the Internet.",
      "explanation_hi": "BGP वैश्विक इंटरनेट पर विभिन्न ऑटोनॉमस सिस्टम्स (AS) और ISPs के बीच रूटिंग जानकारी के आदान-प्रदान का मानक प्रोटोकॉल है."
    },
    {
      "id": 29,
      "question": "What are the three control packets exchanged in order during a standard TCP Three-Way Handshake?",
      "question_hi": "मानक TCP थ्री-वे हैंडशेक के दौरान क्रम में आदान-प्रदान किए जाने वाले तीन पैकेट कौन से हैं?",
      "options": {
        "A": "SYN -> SYN-ACK -> ACK",
        "B": "ACK -> SYN -> FIN",
        "C": "SYN -> ACK -> DATA",
        "D": "RST -> SYN -> ACK"
      },
      "options_hi": {
        "A": "SYN -> SYN-ACK -> ACK",
        "B": "ACK -> SYN -> FIN",
        "C": "SYN -> ACK -> DATA",
        "D": "RST -> SYN -> ACK"
      },
      "correctAnswer": "A",
      "explanation": "The client sends SYN, the server responds with SYN-ACK, and the client confirms with ACK, establishing a reliable bidirectional connection.",
      "explanation_hi": "TCP कनेक्शन स्थापित करने का क्रम है: क्लाइंट से SYN -> सर्वर से SYN-ACK -> क्लाइंट से ACK."
    },
    {
      "id": 30,
      "question": "What is the purpose of the 'Silently Drop' (Drop without RST) in network firewalls?",
      "question_hi": "नेटवर्क फ़ायरवॉल में 'साइलेंट ड्रॉप' (बिना RST के पैकेट छोड़ना) का उद्देश्य क्या है?",
      "options": {
        "A": "To accelerate file download speeds",
        "B": "To prevent reconnaissance port scanners from distinguishing between filtered ports and active machines",
        "C": "To bypass proxy caches",
        "D": "To restart router interfaces"
      },
      "options_hi": {
        "A": "फ़ाइल डाउनलोड गति बढ़ाना",
        "B": "पोर्ट स्कैनर हमलावरों को यह जानने से रोकना कि पोर्ट बंद है या फ़ायरवॉल द्वारा अवरुद्ध है",
        "C": "प्रॉक्सी कैश को बायपास करना",
        "D": "राउटर इंटरफेस को रीस्टार्ट करना"
      },
      "correctAnswer": "B",
      "explanation": "Dropping filtered packets silently (without sending an ICMP port unreachable or TCP RST) slows down port scanners and conceals network topology.",
      "explanation_hi": "पैकेट को बिना किसी अस्वीकृति संदेश के चुपचाप छोड़ देने से हमलावर पोर्ट स्कैनर को नेटवर्क की वास्तविक स्थिति का पता नहीं चलता."
    },
    {
      "id": 31,
      "question": "Which of the following protocols operates over UDP and assigns dynamic IP configurations to client machines?",
      "question_hi": "निम्नलिखित में से कौन सा प्रोटोकॉल UDP पर चलता है और क्लाइंट मशीनों को गतिशील IP कॉन्फ़िगरेशन प्रदान करता है?",
      "options": {
        "A": "DHCP (Dynamic Host Configuration Protocol)",
        "B": "HTTP",
        "C": "FTP",
        "D": "SMTP"
      },
      "options_hi": {
        "A": "DHCP (डायनामिक होस्ट कॉन्फ़िगरेशन प्रोटोकॉल)",
        "B": "HTTP",
        "C": "FTP",
        "D": "SMTP"
      },
      "correctAnswer": "A",
      "explanation": "DHCP uses UDP ports 67 (server) and 68 (client) through the DORA process (Discover, Offer, Request, Acknowledge) to dynamically lease IP addresses.",
      "explanation_hi": "DHCP प्रोटोकॉल UDP पोर्ट 67 और 68 का उपयोग करके DORA प्रक्रिया के माध्यम से क्लाइंट को स्वचालित IP पता आवंटित करता है."
    },
    {
      "id": 32,
      "question": "What is the four-step exchange used by DHCP to allocate an IP address?",
      "question_hi": "IP पता आवंटित करने के लिए DHCP द्वारा उपयोग किया जाने वाला चार-चरणीय आदान-प्रदान (DORA) क्या है?",
      "options": {
        "A": "Discover, Offer, Request, Acknowledge",
        "B": "Dial, Open, Read, Accept",
        "C": "Detect, Operate, Route, Assign",
        "D": "Direct, Order, Receive, Attach"
      },
      "options_hi": {
        "A": "डिस्कवर, ऑफर, रिक्वेस्ट, एकनॉलेज (DORA)",
        "B": "डायल, ओपन, रीड, एक्सेप्ट",
        "C": "डिटेक्ट, ऑपरेट, रूट, असाइन",
        "D": "डायरेक्ट, ऑर्डर, रिसीव, अटैच"
      },
      "correctAnswer": "A",
      "explanation": "DHCP handshake is DORA: DHCPDISCOVER (broadcast by client), DHCPOFFER (from server), DHCPREQUEST (client selection), and DHCPACK (final confirmation).",
      "explanation_hi": "DHCP का DORA क्रम है: Discover (खोज) -> Offer (प्रस्ताव) -> Request (अनुरोध) -> Acknowledge (पुष्टि)."
    },
    {
      "id": 33,
      "question": "Which DNS record type maps a domain name directly to an IPv4 address?",
      "question_hi": "कौन सा DNS रिकॉर्ड प्रकार किसी डोमेन नाम को सीधे IPv4 पते पर मैप करता है?",
      "options": {
        "A": "A Record",
        "B": "AAAA Record",
        "C": "CNAME Record",
        "D": "MX Record"
      },
      "options_hi": {
        "A": "A रिकॉर्ड (A Record)",
        "B": "AAAA रिकॉर्ड",
        "C": "CNAME रिकॉर्ड",
        "D": "MX रिकॉर्ड"
      },
      "correctAnswer": "A",
      "explanation": "An 'A' record points a domain name to a 32-bit IPv4 address. (An 'AAAA' record maps to a 128-bit IPv6 address).",
      "explanation_hi": "'A' रिकॉर्ड डोमेन नाम को IPv4 एड्रेस से जोड़ता है; जबकि 'AAAA' रिकॉर्ड IPv6 एड्रेस के लिए उपयोग होता है."
    },
    {
      "id": 34,
      "question": "Which DNS record specifies the mail exchange server responsible for accepting emails on behalf of a domain?",
      "question_hi": "कौन सा DNS रिकॉर्ड उस मेल सर्वर को निर्दिष्ट करता है जो किसी डोमेन की ओर से ईमेल प्राप्त करने के लिए उत्तरदायी है?",
      "options": {
        "A": "PTR Record",
        "B": "MX Record",
        "C": "TXT Record",
        "D": "NS Record"
      },
      "options_hi": {
        "A": "PTR रिकॉर्ड",
        "B": "MX रिकॉर्ड (Mail Exchange Record)",
        "C": "TXT रिकॉर्ड",
        "D": "NS रिकॉर्ड"
      },
      "correctAnswer": "B",
      "explanation": "MX (Mail Exchanger) records route emails sent to a domain to the appropriate receiving SMTP mail server.",
      "explanation_hi": "MX (मेल एक्सचेंजर) रिकॉर्ड यह निर्धारित करता है कि डोमेन के ईमेल किस मेल सर्वर पर भेजे जाने चाहिए."
    },
    {
      "id": 35,
      "question": "What is the standard port number used by SMTP for secure email submission with STARTTLS?",
      "question_hi": "STARTTLS के साथ सुरक्षित ईमेल भेजने के लिए SMTP द्वारा उपयोग किया जाने वाला मानक सबमिशन पोर्ट नंबर क्या है?",
      "options": {
        "A": "21",
        "B": "25",
        "C": "587",
        "D": "993"
      },
      "options_hi": {
        "A": "21",
        "B": "25",
        "C": "587",
        "D": "993"
      },
      "correctAnswer": "C",
      "explanation": "Port 587 is the standardized modern submission port for authenticated SMTP clients using TLS. (Port 25 is for relaying between MTAs).",
      "explanation_hi": "पोर्ट 587 आधुनिक सुरक्षित ईमेल सबमिशन (SMTP over STARTTLS) का मानक पोर्ट है."
    },
    {
      "id": 36,
      "question": "Which of the following protocols allows email clients to leave messages on the mail server and synchronize mailbox folders across multiple devices?",
      "question_hi": "निम्नलिखित में से कौन सा प्रोटोकॉल ईमेल क्लाइंट को सर्वर पर संदेश छोड़ने और कई उपकरणों पर मेलबॉक्स फ़ोल्डरों को सिंक करने की अनुमति देता है?",
      "options": {
        "A": "POP3",
        "B": "IMAP4",
        "C": "SMTP",
        "D": "SNMP"
      },
      "options_hi": {
        "A": "POP3",
        "B": "IMAP4 (इंटरनेट मैसेज एक्सेस प्रोटोकॉल)",
        "C": "SMTP",
        "D": "SNMP"
      },
      "correctAnswer": "B",
      "explanation": "IMAP (Internet Message Access Protocol) stores emails on the central server and synchronizes folder states across multiple clients.",
      "explanation_hi": "IMAP4 सर्वर पर ईमेल सुरक्षित रखता है और मोबाइल व कंप्यूटर दोनों पर मेलबॉक्स फ़ोल्डर्स को एक समान सिंक रखता है (POP3 केवल डाउनलोड करता है)."
    },
    {
      "id": 37,
      "question": "What is the function of the Congestion Window (cwnd) in TCP?",
      "question_hi": "TCP में कंजेशन विंडो (cwnd) का कार्य क्या है?",
      "options": {
        "A": "Enforces receiver buffer limits",
        "B": "Dynamically limits the number of unacknowledged bytes the sender can transmit based on network capacity",
        "C": "Encrypts TCP headers",
        "D": "Allocates local port numbers"
      },
      "options_hi": {
        "A": "रिसीवर बफर सीमाओं को लागू करता है",
        "B": "नेटवर्क क्षमता के आधार पर प्रेषक द्वारा भेजे जाने वाले अनकन्फर्म डेटा बाइट्स की संख्या को गतिशील रूप से नियंत्रित करता है",
        "C": "TCP हेडर को एन्क्रिप्ट करता है",
        "D": "स्थानीय पोर्ट नंबर आवंटित करता है"
      },
      "correctAnswer": "B",
      "explanation": "The congestion window (cwnd) prevents the sender from overwhelming the intermediate network routers with traffic beyond path capacity.",
      "explanation_hi": "कंजेशन विंडो (cwnd) नेटवर्क में जाम (कंजेशन) को रोकने के लिए सेंडर की डेटा भेजने की दर को नियंत्रित करती है."
    },
    {
      "id": 38,
      "question": "In TCP congestion control, how does the Congestion Window (cwnd) grow during the 'Slow Start' phase?",
      "question_hi": "TCP कंजेशन नियंत्रण में, 'स्लो स्टार्ट' चरण के दौरान कंजेशन विंडो (cwnd) कैसे बढ़ती है?",
      "options": {
        "A": "Linearly (adds 1 MSS per RTT)",
        "B": "Exponentially (doubles every round-trip time RTT)",
        "C": "Remains constant",
        "D": "Decreases by half"
      },
      "options_hi": {
        "A": "रैखिक रूप से (प्रति RTT 1 MSS जुड़ता है)",
        "B": "घातांकीय रूप से (प्रत्येक RTT में दोगुनी हो जाती है)",
        "C": "स्थिर रहती है",
        "D": "आधी हो जाती है"
      },
      "correctAnswer": "B",
      "explanation": "During Slow Start, cwnd increments by 1 MSS for every received ACK, effectively doubling the congestion window every Round Trip Time (RTT).",
      "explanation_hi": "स्लो स्टार्ट में प्रत्येक स्वीकृत ACK पर विंडो बढ़ती है, जिससे प्रत्येक राउंड ट्रिप समय (RTT) में विंडो आकार दोगुना (घातांकीय) होता जाता है."
    },
    {
      "id": 39,
      "question": "What event triggers TCP to exit Slow Start and enter the Congestion Avoidance phase?",
      "question_hi": "कौन सी घटना TCP को स्लो स्टार्ट से बाहर निकालकर 'कंजेशन अवॉइडेंस' चरण में प्रवेश कराती है?",
      "options": {
        "A": "Receiving a FIN packet",
        "B": "cwnd reaching the slow start threshold (ssthresh)",
        "C": "Closing the browser window",
        "D": "Transmitting 100 packets"
      },
      "options_hi": {
        "A": "FIN पैकेट प्राप्त होना",
        "B": "cwnd का स्लो स्टार्ट थ्रेशोल्ड (ssthresh) तक पहुँचना",
        "C": "ब्राउज़र विंडो बंद करना",
        "D": "100 पैकेट भेजना"
      },
      "correctAnswer": "B",
      "explanation": "When cwnd reaches ssthresh, TCP switches from exponential growth (slow start) to linear additive increase (congestion avoidance).",
      "explanation_hi": "जब कंजेशन विंडो (cwnd) स्लो स्टार्ट थ्रेशोल्ड (ssthresh) के बराबर हो जाती है, तो TCP रैखिक वृद्धि (कंजेशन अवॉइडेंस) में चला जाता है."
    },
    {
      "id": 40,
      "question": "Which of the following is an example of an Interior Gateway Protocol (IGP) based on the Distance Vector algorithm?",
      "question_hi": "डिस्टेंस वेक्टर एल्गोरिदम पर आधारित इंटीरियर गेटवे प्रोटोकॉल (IGP) का उदाहरण कौन सा है?",
      "options": {
        "A": "OSPF",
        "B": "RIP",
        "C": "BGP",
        "D": "IS-IS"
      },
      "options_hi": {
        "A": "OSPF",
        "B": "RIP (रूटिंग इंफॉर्मेशन प्रोटोकॉल)",
        "C": "BGP",
        "D": "IS-IS"
      },
      "correctAnswer": "B",
      "explanation": "RIP is a classical Interior Gateway Protocol (IGP) that implements the Bellman-Ford Distance Vector routing algorithm.",
      "explanation_hi": "RIP एक डिस्टेंस वेक्टर आधारित आंतरिक रूटिंग प्रोटोकॉल है जो बेलमैन-फोर्ड एल्गोरिदम पर काम करता है."
    },
    {
      "id": 41,
      "question": "What is the primary function of Network Address Translation (NAT)?",
      "question_hi": "नेटवर्क एड्रेस ट्रांसलेशन (NAT) का प्राथमिक कार्य क्या है?",
      "options": {
        "A": "Encrypting web pages",
        "B": "Mapping multiple private local IP addresses to a single public IP address",
        "C": "Formatting hard disks over a network",
        "D": "Synchronizing computer clocks"
      },
      "options_hi": {
        "A": "वेब पेजों को एन्क्रिप्ट करना",
        "B": "कई निजी (प्राइवेट) स्थानीय IP पतों को एक सार्वजनिक (पब्लिक) IP पते में मैप करना",
        "C": "नेटवर्क पर डिस्क फॉर्मेट करना",
        "D": "कंप्यूटर घड़ियों को सिंक करना"
      },
      "correctAnswer": "B",
      "explanation": "NAT conserves globally routable IPv4 addresses by allowing an entire private LAN to share one or a small pool of public IP addresses.",
      "explanation_hi": "NAT एक निजी नेटवर्क के कई कंप्यूटरों को एकल सार्वजनिक IP पते के माध्यम से इंटरनेट से कनेक्ट करने की सुविधा देता है."
    },
    {
      "id": 42,
      "question": "Which of the following IP address ranges is reserved for Private Class A networks under RFC 1918?",
      "question_hi": "RFC 1918 के तहत प्राइवेट क्लास A नेटवर्क के लिए कौन सी IP एड्रेस रेंज आरक्षित है?",
      "options": {
        "A": "10.0.0.0 to 10.255.255.255",
        "B": "172.16.0.0 to 172.31.255.255",
        "C": "192.168.0.0 to 192.168.255.255",
        "D": "127.0.0.0 to 127.255.255.255"
      },
      "options_hi": {
        "A": "10.0.0.0 से 10.255.255.255",
        "B": "172.16.0.0 से 172.31.255.255",
        "C": "192.168.0.0 से 192.168.255.255",
        "D": "127.0.0.0 से 127.255.255.255"
      },
      "correctAnswer": "A",
      "explanation": "RFC 1918 private ranges: Class A is 10.0.0.0/8; Class B is 172.16.0.0/12; Class C is 192.168.0.0/16.",
      "explanation_hi": "प्राइवेट क्लास A नेटवर्क के लिए 10.0.0.0 से 10.255.255.255 (10.0.0.0/8) की रेंज आरक्षित की गई है."
    },
    {
      "id": 43,
      "question": "What is the purpose of the Loopback IP address 127.0.0.1?",
      "question_hi": "लूपबैक IP पते 127.0.0.1 का उद्देश्य क्या है?",
      "options": {
        "A": "To test local network interface card and TCP/IP stack without sending traffic over physical wires",
        "B": "To broadcast to all devices on the local subnet",
        "C": "To contact the default gateway router",
        "D": "To resolve external domain names"
      },
      "options_hi": {
        "A": "भौतिक तारों पर ट्रैफिक भेजे बिना स्थानीय नेटवर्क कार्ड और TCP/IP स्टैक का परीक्षण करना",
        "B": "सबनेट के सभी उपकरणों को संदेश भेजना",
        "C": "डिफ़ॉल्ट गेटवे से संपर्क करना",
        "D": "बाहरी डोमेन नामों को हल करना"
      },
      "correctAnswer": "A",
      "explanation": "The loopback address (localhost / 127.0.0.1) routes packets back to the host itself internally without accessing any physical network interface.",
      "explanation_hi": "127.0.0.1 (लोकलहोस्ट) का उपयोग स्थानीय मशीन के आंतरिक TCP/IP स्टैक और सेवाओं के परीक्षण के लिए किया जाता है."
    },
    {
      "id": 44,
      "question": "In asymmetric cryptography, a Digital Signature provides which two essential security assurances?",
      "question_hi": "असममित क्रिप्टोग्राफी में, एक डिजिटल हस्ताक्षर (Digital Signature) कौन से दो आवश्यक सुरक्षा आश्वासन प्रदान करता है?",
      "options": {
        "A": "Sender Authentication and Non-repudiation (Integrity)",
        "B": "Symmetric key compression and file caching",
        "C": "Hardware overclocking and voltage protection",
        "D": "Data deduplication and bandwidth doubling"
      },
      "options_hi": {
        "A": "प्रेषक प्रमाणीकरण और गैर-अस्वीकृति (अखंडता / Non-repudiation)",
        "B": "सममित कुंजी संपीड़न और फाइल कैशिंग",
        "C": "हार्डवेयर ओवरक्लॉकिंग",
        "D": "डेटा डुप्लीकेशन"
      },
      "correctAnswer": "A",
      "explanation": "A digital signature is created with the sender's private key, guaranteeing who sent the message (authentication) and that they cannot deny sending it (non-repudiation).",
      "explanation_hi": "डिजिटल हस्ताक्षर प्रेषक की प्राइवेट की से बनता है, जो प्रेषक की प्रामाणिकता और गैर-अस्वीकृति (Non-repudiation) सिद्ध करता है."
    },
    {
      "id": 45,
      "question": "What type of attack involves overwhelming a web server with traffic originating from thousands of distributed compromised zombie machines (botnet)?",
      "question_hi": "हजारों संक्रमित ज़ोंबी मशीनों (बॉटनेट) से आने वाले भारी ट्रैफिक से किसी वेब सर्वर को ठप कर देने वाला हमला कौन सा है?",
      "options": {
        "A": "Man-in-the-Middle Attack",
        "B": "DDoS (Distributed Denial of Service) Attack",
        "C": "SQL Injection",
        "D": "Cross-Site Scripting"
      },
      "options_hi": {
        "A": "मैन-इन-द-मिडिल हमला",
        "B": "DDoS (डिस्ट्रीब्यूटेड डिनायल ऑफ सर्विस) हमला",
        "C": "SQL इंजेक्शन",
        "D": "क्रॉस-साइट स्क्रिप्टिंग"
      },
      "correctAnswer": "B",
      "explanation": "DDoS uses a distributed network of hijacked computers (botnet) to flood target servers with illegitimate requests, exhausting bandwidth and system resources.",
      "explanation_hi": "DDoS हमले में बॉटनेट की मदद से सर्वर पर अत्यधिक नकली ट्रैफिक भेजा जाता है ताकि वास्तविक उपयोगकर्ताओं के लिए सेवा बाधित हो जाए."
    },
    {
      "id": 46,
      "question": "Which layer of the TCP/IP model corresponds directly to the OSI Transport layer?",
      "question_hi": "TCP/IP मॉडल की कौन सी परत सीधे OSI ट्रांसपोर्ट परत से मेल खाती है?",
      "options": {
        "A": "Application Layer",
        "B": "Transport (Host-to-Host) Layer",
        "C": "Internet Layer",
        "D": "Network Access Layer"
      },
      "options_hi": {
        "A": "एप्लिकेशन परत",
        "B": "परिवहन (होस्ट-टू-होस्ट) परत",
        "C": "इंटरनेट परत",
        "D": "नेटवर्क एक्सेस परत"
      },
      "correctAnswer": "B",
      "explanation": "The Transport Layer in both OSI and TCP/IP models manages end-to-end process-to-process communication and flow/error control.",
      "explanation_hi": "TCP/IP की ट्रांसपोर्ट (होस्ट-टू-होस्ट) लेयर सीधे OSI मॉडल की ट्रांसपोर्ट लेयर के समान कार्य करती है."
    },
    {
      "id": 47,
      "question": "What is the primary role of the Address Resolution Protocol (ARP) cache?",
      "question_hi": "एड्रेस रिज़ॉल्यूशन प्रोटोकॉल (ARP) कैश की प्राथमिक भूमिका क्या है?",
      "options": {
        "A": "To temporarily store recently resolved IP-to-MAC address mappings to reduce network broadcasts",
        "B": "To cache web pages for faster browsing",
        "C": "To store DNS domain names",
        "D": "To log firewall rejections"
      },
      "options_hi": {
        "A": "नेटवर्क ब्रॉडकास्ट कम करने के लिए हाल ही में प्राप्त IP-से-MAC मैपिंग को अस्थायी रूप से संग्रहीत करना",
        "B": "तेज़ ब्राउज़िंग के लिए वेब पेज कैश करना",
        "C": "DNS डोमेन नाम स्टोर करना",
        "D": "फ़ायरवॉल लॉग रखना"
      },
      "correctAnswer": "A",
      "explanation": "The ARP cache stores recent IP-to-MAC address translations locally so the host does not have to broadcast an ARP request for every packet sent.",
      "explanation_hi": "ARP कैश स्थानीय मेमोरी में IP और MAC एड्रेस के संबंधों को सहेजता है ताकि बार-बार नेटवर्क पर ब्रॉडकास्ट न भेजना पड़े."
    },
    {
      "id": 48,
      "question": "Which of the following is a secure, encrypted replacement for the insecure Telnet protocol?",
      "question_hi": "निम्नलिखित में से कौन सा असुरक्षित टेलनेट (Telnet) प्रोटोकॉल का सुरक्षित और एन्क्रिप्टेड विकल्प है?",
      "options": {
        "A": "FTP",
        "B": "SSH (Secure Shell)",
        "C": "TFTP",
        "D": "SNMP"
      },
      "options_hi": {
        "A": "FTP",
        "B": "SSH (सिक्योर शेल)",
        "C": "TFTP",
        "D": "SNMP"
      },
      "correctAnswer": "B",
      "explanation": "SSH (port 22) provides strongly encrypted remote terminal sessions, replacing plain-text Telnet (port 23).",
      "explanation_hi": "SSH (पोर्ट 22) रिमोट टर्मिनल लॉगिन के लिए मजबूत एन्क्रिप्शन प्रदान करता है और असुरक्षित टेलनेट का आधुनिक विकल्प है."
    },
    {
      "id": 49,
      "question": "What is the maximum data rate of a standard T1 carrier line in North America and Japan?",
      "question_hi": "उत्तरी अमेरिका और जापान में मानक T1 कैरियर लाइन की अधिकतम डेटा दर क्या है?",
      "options": {
        "A": "64 kbps",
        "B": "1.544 Mbps",
        "C": "2.048 Mbps",
        "D": "10 Mbps"
      },
      "options_hi": {
        "A": "64 kbps",
        "B": "1.544 Mbps",
        "C": "2.048 Mbps",
        "D": "10 Mbps"
      },
      "correctAnswer": "B",
      "explanation": "A T1 line carries 24 multiplexed voice channels of 64 kbps plus framing, yielding an aggregate data rate of 1.544 Mbps. (E1 carries 2.048 Mbps in Europe).",
      "explanation_hi": "T1 डिजिटल लाइन 24 वॉयस चैनलों को मिलाकर कुल 1.544 Mbps की गति प्रदान करती है (यूरोप में E1 लाइन 2.048 Mbps होती है)."
    },
    {
      "id": 50,
      "question": "Which wireless security standard introduced the AES-based CCMP encryption protocol, replacing vulnerable WEP and WPA?",
      "question_hi": "किस वायरलेस सुरक्षा मानक ने कमजोर WEP और WPA की जगह AES-आधारित CCMP एन्क्रिप्शन प्रोटोकॉल पेश किया?",
      "options": {
        "A": "WPA2 (IEEE 802.11i)",
        "B": "WPS",
        "C": "WEP 64-bit",
        "D": "SSID Broadcast"
      },
      "options_hi": {
        "A": "WPA2 (IEEE 802.11i)",
        "B": "WPS",
        "C": "WEP 64-बिट",
        "D": "SSID ब्रॉडकास्ट"
      },
      "correctAnswer": "A",
      "explanation": "WPA2 implemented the full IEEE 802.11i standard, mandating government-grade AES encryption using the Counter Mode CBC-MAC Protocol (CCMP).",
      "explanation_hi": "WPA2 (802.11i) ने सुरक्षित AES और CCMP एन्क्रिप्शन लागू किया, जिससे वाई-फाई सुरक्षा अत्यधिक मजबूत हो गई."
    }
  ]
};

window.drill_pedagogy_nep_50 = {
  "id": "drill_pedagogy_nep_50",
  "title": "Art of Teaching & NEP 2020 High-Yield Drill",
  "subtitle": "Bloom's Taxonomy, Piaget, Vygotsky, Kohlberg, CCE, Inclusive Education & NEP 2020",
  "totalQuestions": 50,
  "totalMarks": 50,
  "durationMinutes": 60,
  "sections": [
    {
      "id": "pedagogy",
      "name": "Art of Teaching & NEP 2020",
      "startQ": 1,
      "endQ": 50,
      "total": 50
    }
  ],
  "questions": [
    {
      "id": 1,
      "question": "In Pavlov's classical conditioning experiments with dogs, what was the meat powder before conditioning took place?",
      "question_hi": "कुत्तों पर पावलव के शास्त्रीय अनुकूलन प्रयोगों में, अनुकूलन से पहले मांस का चूर्ण क्या था?",
      "options": {
        "A": "Conditioned Stimulus (CS)",
        "B": "Unconditioned Stimulus (UCS)",
        "C": "Conditioned Response (CR)",
        "D": "Neutral Stimulus (NS)"
      },
      "options_hi": {
        "A": "अनुकूलित उद्दीपक (CS)",
        "B": "अननुकूलित (स्वाभाविक) उद्दीपक (UCS)",
        "C": "अनुकूलित अनुक्रिया (CR)",
        "D": "तटस्थ उद्दीपक (NS)"
      },
      "correctAnswer": "B",
      "explanation": "Meat powder naturally triggers salivation without any prior training, making it an Unconditioned Stimulus (UCS).",
      "explanation_hi": "मांस का चूर्ण बिना किसी पूर्व प्रशिक्षण के स्वाभाविक लार उत्पन्न करता है, इसलिए यह एक अननुकूलित (स्वाभाविक) उद्दीपक (UCS) है."
    },
    {
      "id": 2,
      "question": "In B. F. Skinner's Operant Conditioning, what is 'Negative Reinforcement'?",
      "question_hi": "बी. एफ. स्किनर के क्रिया प्रसूत अनुकूलन (Operant Conditioning) में, 'ऋणात्मक पुनर्बलन (Negative Reinforcement)' क्या है?",
      "options": {
        "A": "Applying an unpleasant physical punishment to weaken a behavior",
        "B": "Removing or avoiding an unpleasant (aversive) stimulus to strengthen a desirable behavior",
        "C": "Withholding all rewards permanently",
        "D": "Ignoring the child completely"
      },
      "options_hi": {
        "A": "किसी व्यवहार को कमजोर करने के लिए अप्रिय शारीरिक दंड देना",
        "B": "वांछनीय व्यवहार को मजबूत करने के लिए किसी अप्रिय/कष्टप्रद उद्दीपक को हटाना या उससे बचाना",
        "C": "सभी पुरस्कारों को स्थायी रूप से रोक लेना",
        "D": "बच्चे की पूरी तरह से अनदेखी करना"
      },
      "correctAnswer": "B",
      "explanation": "Reinforcement always increases behavior. Negative reinforcement strengthens behavior by terminating or eliminating an aversive stimulus (e.g., buckling seatbelt stops annoying alarm).",
      "explanation_hi": "पुनर्बलन हमेशा व्यवहार को बढ़ाता है। ऋणात्मक पुनर्बलन में किसी कष्टप्रद उद्दीपक (जैसे सीटबेल्ट बीप) को हटाकर सही व्यवहार को बढ़ावा दिया जाता है."
    },
    {
      "id": 3,
      "question": "Which psychologist formulated the 'Theory of Multiple Intelligences' proposing at least eight distinct modalities?",
      "question_hi": "कम से कम आठ विशिष्ट प्रकार की बुद्धि का प्रस्ताव करते हुए 'बहुबुद्धि सिद्धांत (Theory of Multiple Intelligences)' का प्रतिपादन किस मनोवैज्ञानिक ने किया?",
      "options": {
        "A": "Charles Spearman",
        "B": "Howard Gardner",
        "C": "Alfred Binet",
        "D": "Robert Sternberg"
      },
      "options_hi": {
        "A": "चार्ल्स स्पीयरमैन",
        "B": "हावर्ड गार्डनर (Howard Gardner)",
        "C": "अल्फ्रेड बिने",
        "D": "रॉबर्ट स्टर्नबर्ग"
      },
      "correctAnswer": "B",
      "explanation": "Howard Gardner in his 1983 book 'Frames of Mind' identified multiple distinct intelligences (linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, naturalistic).",
      "explanation_hi": "हावर्ड गार्डनर ने 1983 में बहुबुद्धि सिद्धांत दिया जिसमें भाषाई, तार्किक, स्थानिक, संगीतात्मक, शारीरिक, अंतर्वैयक्तिक आदि बुद्धिमत्ता शामिल हैं."
    },
    {
      "id": 4,
      "question": "According to Jean Piaget, the process of modifying existing mental schemas to incorporate novel information is known as:",
      "question_hi": "जीन पियाजे के अनुसार, नई जानकारी को शामिल करने के लिए मौजूदा मानसिक स्कीमा में संशोधन करने की प्रक्रिया क्या कहलाती है?",
      "options": {
        "A": "Assimilation",
        "B": "Accommodation",
        "C": "Equilibration",
        "D": "Object Permanence"
      },
      "options_hi": {
        "A": "आत्मसातीकरण (Assimilation)",
        "B": "समायोजन / समंजन (Accommodation)",
        "C": "संतुलन (Equilibration)",
        "D": "वस्तु स्थायित्व"
      },
      "correctAnswer": "B",
      "explanation": "Accommodation involves altering existing cognitive schemas or creating new ones in response to new environmental information that does not fit existing frameworks.",
      "explanation_hi": "समायोजन (Accommodation) में नई जानकारी और अनुभवों के आधार पर पुरानी मानसिक संरचना (स्कीमा) में बदलाव और संशोधन किया जाता है."
    },
    {
      "id": 5,
      "question": "At what stage of Piaget's cognitive development does a child typically achieve 'Object Permanence'?",
      "question_hi": "पियाजे के संज्ञानात्मक विकास के किस चरण में बच्चा आमतौर पर 'वस्तु स्थायित्व (Object Permanence)' की समझ प्राप्त करता है?",
      "options": {
        "A": "Sensorimotor Stage (0 - 2 years)",
        "B": "Pre-operational Stage (2 - 7 years)",
        "C": "Concrete Operational Stage (7 - 11 years)",
        "D": "Formal Operational Stage (11+ years)"
      },
      "options_hi": {
        "A": "संवेदी-गामक अवस्था (0 से 2 वर्ष)",
        "B": "पूर्व-संक्रियात्मक अवस्था (2 से 7 वर्ष)",
        "C": "मूर्त संक्रियात्मक अवस्था (7 से 11 वर्ष)",
        "D": "औपचारिक संक्रियात्मक अवस्था (11+ वर्ष)"
      },
      "correctAnswer": "A",
      "explanation": "Object permanence (knowing that objects continue to exist even when unseen) develops toward the end of the Sensorimotor stage (around 8-12 months).",
      "explanation_hi": "वस्तु स्थायित्व (यह जानना कि वस्तुएँ सामने न होने पर भी मौजूद रहती हैं) संवेदी-गामक अवस्था (लगभग 8-12 महीने) में विकसित होता है."
    },
    {
      "id": 6,
      "question": "According to Jerome Bruner, which mode of cognitive representation relies on tangible hands-on manipulation and motor actions?",
      "question_hi": "जेरोम ब्रूनर के अनुसार, संज्ञानात्मक निरूपण का कौन सा तरीका प्रत्यक्ष क्रियाओं और क्रियात्मक हेरफेर पर निर्भर करता है?",
      "options": {
        "A": "Enactive representation",
        "B": "Iconic representation",
        "C": "Symbolic representation",
        "D": "Formal representation"
      },
      "options_hi": {
        "A": "क्रियात्मक निरूपण (Enactive Representation)",
        "B": "प्रतिबिंबात्मक निरूपण (Iconic Representation)",
        "C": "प्रतीकात्मक निरूपण (Symbolic Representation)",
        "D": "औपचारिक निरूपण"
      },
      "correctAnswer": "A",
      "explanation": "Bruner's stages are: Enactive (action-based / hands-on), Iconic (image-based), and Symbolic (language and abstract symbols).",
      "explanation_hi": "ब्रूनर के अनुसार क्रियात्मक (Enactive) स्तर पर बच्चा क्रियाओं और शारीरिक गतिविधियों द्वारा सीखता है (जैसे साइकिल चलाना सीखना)."
    },
    {
      "id": 7,
      "question": "What is 'Private Speech' according to Lev Vygotsky?",
      "question_hi": "लेव वायगोत्स्की के अनुसार 'निजी भाषण (Private Speech / आत्म-संभाषण)' क्या है?",
      "options": {
        "A": "Egocentric speech demonstrating emotional immaturity",
        "B": "Self-directed verbalization used by children to plan, guide, and regulate their own thinking and actions",
        "C": "Whispering in school examinations",
        "D": "Speech defects requiring clinical therapy"
      },
      "options_hi": {
        "A": "अहंकेंद्रित भाषण जो भावनात्मक अपरिपक्वता दर्शाता है",
        "B": "बच्चों द्वारा अपने स्वयं के विचारों और कार्यों की योजना बनाने, मार्गदर्शन और नियंत्रण के लिए किया जाने वाला स्व-निर्देशित संभाषण",
        "C": "परीक्षा में फुसफुसाना",
        "D": "वाणी दोष जिसके लिए थेरेपी की आवश्यकता हो"
      },
      "correctAnswer": "B",
      "explanation": "Vygotsky viewed private speech as a critical tool for self-regulation and cognitive development, transitioning later into internal silent thought.",
      "explanation_hi": "वायगोत्स्की के अनुसार निजी भाषण (स्वयं से बात करना) बच्चे के संज्ञानात्मक विकास और व्यवहार के आत्म-नियमन (Self-regulation) का एक महत्वपूर्ण साधन है."
    },
    {
      "id": 8,
      "question": "Which of the following is the first level in Maslow's original Hierarchy of Needs?",
      "question_hi": "मास्लो के मूल आवश्यकता पदानुक्रम (Hierarchy of Needs) में सबसे पहला (निचला) स्तर कौन सा है?",
      "options": {
        "A": "Safety Needs",
        "B": "Physiological Needs",
        "C": "Love and Belongingness Needs",
        "D": "Self-Actualization Needs"
      },
      "options_hi": {
        "A": "सुरक्षा आवश्यकताएँ",
        "B": "शारीरिक/दैहिक आवश्यकताएँ (Physiological Needs)",
        "C": "संबंध और प्रेम की आवश्यकताएँ",
        "D": "आत्म-साक्षात्कार की आवश्यकताएँ"
      },
      "correctAnswer": "B",
      "explanation": "Maslow's pyramid begins with fundamental Physiological needs (food, water, warmth, sleep), followed by Safety, Belonging, Esteem, and Self-Actualization.",
      "explanation_hi": "मास्लो के पदानुक्रम में सबसे बुनियादी आधार शारीरिक (Physiological) आवश्यकताएं (भोजन, पानी, नींद) हैं, जिनके पूरा होने पर ही उच्च स्तर की आवश्यकताएं जागती हैं."
    },
    {
      "id": 9,
      "question": "What is the primary characteristic of the 'Inductive Method' of teaching?",
      "question_hi": "शिक्षण की 'आगमन विधि (Inductive Method)' की प्राथमिक विशेषता क्या है?",
      "options": {
        "A": "Proceeding from General Rule to Specific Examples",
        "B": "Proceeding from Specific concrete examples to General principles and rules",
        "C": "Direct memorization of algebraic formulas without proof",
        "D": "Passive listening to recorded lectures"
      },
      "options_hi": {
        "A": "सामान्य नियम से विशिष्ट उदाहरणों की ओर बढ़ना",
        "B": "विशिष्ट मूर्त उदाहरणों से सामान्य नियमों/सिद्धांतों की ओर बढ़ना (उदाहरण से नियम)",
        "C": "बिना प्रमाण के सूत्रों को सीधे रटना",
        "D": "रिकॉर्ड किए गए व्याख्यानों को केवल सुनना"
      },
      "correctAnswer": "B",
      "explanation": "The Inductive approach moves from the specific to general, concrete to abstract, and examples to rules, enabling students to formulate generalizations.",
      "explanation_hi": "आगमन विधि में पहले कई विशिष्ट उदाहरण प्रस्तुत किए जाते हैं और छात्र स्वयं उनका विश्लेषण करके सामान्य नियम निकालते हैं (विशिष्ट से सामान्य की ओर)."
    },
    {
      "id": 10,
      "question": "In test design, what does the 'Reliability' of an assessment tool measure?",
      "question_hi": "परीक्षण निर्माण में, किसी मूल्यांकन उपकरण की 'विश्वसनीयता (Reliability)' क्या मापती है?",
      "options": {
        "A": "Whether the test measures what it claims to measure",
        "B": "The consistency and repeatability of test scores under identical conditions",
        "C": "The physical durability of question papers",
        "D": "The ease of scoring by computer scanners"
      },
      "options_hi": {
        "A": "क्या परीक्षण वास्तव में वही मापता है जिसे मापने का वह दावा करता है",
        "B": "समान परिस्थितियों में परीक्षण अंकों की निरंतरता और संगति (Consistency)",
        "C": "प्रश्नपत्रों का भौतिक स्थायित्व",
        "D": "कंप्यूटर स्कैनर द्वारा अंक देने में आसानी"
      },
      "correctAnswer": "B",
      "explanation": "Reliability refers to consistency and stability of measurement results over repeated trials. (Measuring what it intends to measure is Validity).",
      "explanation_hi": "विश्वसनीयता का तात्पर्य परीक्षण परिणामों की संगति और स्थिरता (Consistency) से है, ताकि बार-बार परीक्षण करने पर भी अंक समान आएं."
    },
    {
      "id": 11,
      "question": "What is the 'Validity' of an educational test?",
      "question_hi": "शैक्षिक परीक्षण की 'वैधता (Validity)' क्या होती है?",
      "options": {
        "A": "The degree to which a test accurately measures what it intends to measure",
        "B": "The total number of questions included in the test",
        "C": "The font size used in question printing",
        "D": "The percentage of passing students"
      },
      "options_hi": {
        "A": "वह सीमा जहाँ तक कोई परीक्षण सटीक रूप से वही मापता है जिसके लिए उसे बनाया गया है",
        "B": "परीक्षण में शामिल प्रश्नों की कुल संख्या",
        "C": "प्रश्न छपाई में उपयोग किया गया फ़ॉन्ट आकार",
        "D": "उत्तीर्ण होने वाले छात्रों का प्रतिशत"
      },
      "correctAnswer": "A",
      "explanation": "Validity measures the degree to which an instrument truly assesses the specific construct or learning objective it was intended to assess.",
      "explanation_hi": "वैधता से तात्पर्य है कि परीक्षण वास्तव में उसी योग्यता या उद्देश्य का सही मापन करता है जिसके लिए उसका निर्माण किया गया है."
    },
    {
      "id": 12,
      "question": "What is the primary difference between a Norm-Referenced Test (NRT) and a Criterion-Referenced Test (CRT)?",
      "question_hi": "मानक-संदर्भित परीक्षण (NRT) और निकष-संदर्भित परीक्षण (CRT) के बीच प्राथमिक अंतर क्या है?",
      "options": {
        "A": "NRT compares a student's performance against peers (percentiles); CRT measures performance against predetermined learning mastery standards",
        "B": "NRT is for primary classes; CRT is for PhD level",
        "C": "CRT does not use objective questions",
        "D": "Both are completely identical"
      },
      "options_hi": {
        "A": "NRT छात्र के प्रदर्शन की तुलना सहपाठियों से करता है (रैंक/पर्सेंटाइल); CRT पूर्व-निर्धारित अधिगम दक्षताओं के विरुद्ध प्रदर्शन मापता है",
        "B": "NRT प्राथमिक कक्षाओं के लिए है; CRT केवल PhD स्तर के लिए है",
        "C": "CRT में वस्तुनिष्ठ प्रश्न नहीं होते",
        "D": "दोनों पूरी तरह समान हैं"
      },
      "correctAnswer": "A",
      "explanation": "NRT (e.g. competitive ranks/percentiles) compares candidates against a cohort, while CRT assesses whether a candidate has mastered specified benchmark skills.",
      "explanation_hi": "मानक-संदर्भित (NRT) में छात्र की तुलना समूह के अन्य छात्रों से होती है (रैंक), जबकि निकष-संदर्भित (CRT) में यह देखा जाता है कि छात्र ने निर्धारित दक्षता हासिल की या नहीं."
    },
    {
      "id": 13,
      "question": "Under the RTE Act 2009, how many minimum instructional hours per academic year are prescribed for an upper primary teacher (Classes 6-8)?",
      "question_hi": "RTE अधिनियम 2009 के तहत, उच्च प्राथमिक शिक्षकों (कक्षा 6-8) के लिए प्रति शैक्षणिक वर्ष न्यूनतम कितने शिक्षण घंटे निर्धारित हैं?",
      "options": {
        "A": "800 hours",
        "B": "1000 hours",
        "C": "1200 hours",
        "D": "1500 hours"
      },
      "options_hi": {
        "A": "800 घंटे",
        "B": "1000 घंटे (1000 Hours)",
        "C": "1200 घंटे",
        "D": "1500 घंटे"
      },
      "correctAnswer": "B",
      "explanation": "RTE Act 2009 prescribes 800 instructional hours (200 working days) for primary, and 1000 instructional hours (220 working days) for upper primary per academic year.",
      "explanation_hi": "RTE 2009 के अनुसार प्राथमिक स्तर पर 800 घंटे (200 कार्य दिवस) और उच्च प्राथमिक स्तर पर न्यूनतम 1000 शिक्षण घंटे (220 कार्य दिवस) अनिवार्य हैं."
    },
    {
      "id": 14,
      "question": "What is the mandatory minimum number of working hours per week for a teacher under the RTE Act 2009, including preparation hours?",
      "question_hi": "RTE अधिनियम 2009 के तहत तैयारी के घंटों सहित एक शिक्षक के लिए प्रति सप्ताह न्यूनतम कितने कार्य घंटे अनिवार्य हैं?",
      "options": {
        "A": "35 hours",
        "B": "40 hours",
        "C": "45 hours",
        "D": "50 hours"
      },
      "options_hi": {
        "A": "35 घंटे",
        "B": "40 घंटे",
        "C": "45 घंटे (45 Hours per week)",
        "D": "50 घंटे"
      },
      "correctAnswer": "C",
      "explanation": "Section 19 and Schedule of RTE Act 2009 mandates a minimum of 45 working hours per week for teachers, including preparation hours.",
      "explanation_hi": "RTE अधिनियम 2009 के अनुसार एक शिक्षक के लिए पाठ तैयारी के घंटों सहित प्रति सप्ताह न्यूनतम 45 कार्य घंटे निर्धारित हैं."
    },
    {
      "id": 15,
      "question": "Under NEP 2020, what is the target year by which universal Foundational Literacy and Numeracy (FLN) is to be achieved in primary schools?",
      "question_hi": "NEP 2020 के तहत, प्राथमिक विद्यालयों में सार्वभौमिक बुनियादी साक्षरता और संख्याज्ञान (FLN) प्राप्त करने का लक्ष्य वर्ष क्या निर्धारित किया गया है?",
      "options": {
        "A": "2025 (extended under NIPUN Bharat to 2026-27)",
        "B": "2030",
        "C": "2035",
        "D": "2040"
      },
      "options_hi": {
        "A": "2025 (निपुण भारत के तहत 2026-27 तक)",
        "B": "2030",
        "C": "2035",
        "D": "2040"
      },
      "correctAnswer": "A",
      "explanation": "NEP 2020 accorded highest priority to achieving foundational literacy and numeracy (Grade 3 level) by 2025, implemented via Mission NIPUN Bharat targeting 2026-27.",
      "explanation_hi": "NEP 2020 में कक्षा 3 तक के सभी बच्चों के लिए बुनियादी साक्षरता और संख्याज्ञान (FLN) प्राप्त करने का राष्ट्रीय लक्ष्य तय किया गया है (निपुण भारत मिशन के तहत 2026-27)."
    },
    {
      "id": 16,
      "question": "What is the full form of 'NIPUN Bharat' launched by the Ministry of Education?",
      "question_hi": "शिक्षा मंत्रालय द्वारा शुरू किए गए 'निपुण भारत (NIPUN Bharat)' का पूर्ण रूप क्या है?",
      "options": {
        "A": "National Initiative for Proficiency in Reading with Understanding and Numeracy",
        "B": "National Institute for Primary Universal Numeracy",
        "C": "New Indian Program for Universal Network",
        "D": "National Infrastructure Project for Unified Nation"
      },
      "options_hi": {
        "A": "नेशनल इनिशिएटिव फॉर प्रोफिशिएंसी इन रीडिंग विद अंडरस्टैंडिंग एंड न्यूमरेसी (NIPUN)",
        "B": "नेशनल इंस्टीट्यूट फॉर प्राइमरी यूनिवर्सल न्यूमरेसी",
        "C": "न्यू इंडियन प्रोग्राम फॉर यूनिवर्सल नेटवर्क",
        "D": "नेशनल इन्फ्रास्ट्रक्चर प्रोजेक्ट"
      },
      "correctAnswer": "A",
      "explanation": "NIPUN Bharat stands for 'National Initiative for Proficiency in Reading with Understanding and Numeracy', ensuring every child achieves FLN by Grade 3.",
      "explanation_hi": "NIPUN का पूर्ण रूप 'National Initiative for Proficiency in Reading with Understanding and Numeracy' (समझ के साथ पढ़ने और संख्यागणना में प्रवीणता के लिए राष्ट्रीय पहल) है."
    },
    {
      "id": 17,
      "question": "In Robert Gagne's Nine Events of Instruction, what is the very FIRST event?",
      "question_hi": "रॉबर्ट गैग्ने के शिक्षण के नौ सोपानों (Nine Events of Instruction) में सबसे पहला सोपान कौन सा है?",
      "options": {
        "A": "Informing learners of objectives",
        "B": "Gaining attention of learners",
        "C": "Stimulating recall of prior learning",
        "D": "Presenting instructional stimulus"
      },
      "options_hi": {
        "A": "शिक्षार्थियों को उद्देश्यों से अवगत कराना",
        "B": "शिक्षार्थियों का ध्यान आकर्षित करना (Gaining Attention)",
        "C": "पूर्व अधिगम को याद दिलाना",
        "D": "शिक्षण सामग्री प्रस्तुत करना"
      },
      "correctAnswer": "B",
      "explanation": "Gagne's 9 events begin with: 1. Gaining Attention (reception), followed by 2. Informing learners of objectives, and 3. Stimulating recall of prerequisite learning.",
      "explanation_hi": "गैग्ने के 9 सोपानों में पहला कदम छात्रों का ध्यान आकर्षित करना (Gaining Attention) है, जिससे वे सीखने के लिए मानसिक रूप से तैयार हो सकें."
    },
    {
      "id": 18,
      "question": "What is 'Microteaching' fundamentally classified as?",
      "question_hi": "सूक्ष्म शिक्षण (Microteaching) को मौलिक रूप से किस रूप में वर्गीकृत किया गया है?",
      "options": {
        "A": "A method of individual student examination",
        "B": "A teacher training technique that scales down classroom complexities (small group, short duration, single skill)",
        "C": "A disciplinary protocol for delinquent teachers",
        "D": "A distance education broadcast"
      },
      "options_hi": {
        "A": "व्यक्तिगत छात्र परीक्षा की एक विधि",
        "B": "शिक्षक प्रशिक्षण तकनीक जो कक्षा की जटिलताओं को कम करती है (छोटा समूह, कम समय, एक शिक्षण कौशल)",
        "C": "अनुशासनहीन शिक्षकों के लिए एक प्रशासनिक प्रक्रिया",
        "D": "दूरस्थ शिक्षा प्रसारण"
      },
      "correctAnswer": "B",
      "explanation": "Dwight Allen developed microteaching as a scaled-down teaching encounter where a teacher practices one specific pedagogical skill with 5-10 pupils for 5-10 minutes.",
      "explanation_hi": "ड्वाइट एलन द्वारा विकसित सूक्ष्म शिक्षण एक शिक्षक-प्रशिक्षण तकनीक है जिसमें कक्षा के आकार, समय और विषय-वस्तु को छोटा करके एक समय में एक शिक्षण कौशल का अभ्यास कराया जाता है."
    },
    {
      "id": 19,
      "question": "What is the primary feature of Flanders Interaction Analysis Categories System (FIACS)?",
      "question_hi": "फ्लैंडर्स इंटरेक्शन एनालिसिस कैटेगरी सिस्टम (FIACS) की प्राथमिक विशेषता क्या है?",
      "options": {
        "A": "Observing and coding classroom verbal interaction between teacher and pupils into 10 categories",
        "B": "Grading written essay examination sheets",
        "C": "Measuring school building architecture",
        "D": "Evaluating laboratory computer software"
      },
      "options_hi": {
        "A": "शिक्षक और छात्रों के बीच कक्षा के मौखिक व्यवहार को 10 श्रेणियों में बांटकर विश्लेषण करना",
        "B": "निबंधात्मक उत्तर पुस्तिकाओं का मूल्यांकन करना",
        "C": "स्कूल भवन के बुनियादी ढांचे को मापना",
        "D": "कंप्यूटर सॉफ्टवेयर का परीक्षण करना"
      },
      "correctAnswer": "A",
      "explanation": "Ned Flanders designed FIACS with 10 observation categories (7 teacher talk, 2 student talk, 1 silence/confusion) to objectively analyze classroom verbal dynamics.",
      "explanation_hi": "नेड फ्लैंडर्स की अंतःक्रिया विश्लेषण प्रणाली (FIACS) कक्षा में शिक्षक और छात्रों के बीच होने वाले मौखिक व्यवहार को 10 श्रेणियों में रिकॉर्ड और विश्लेषित करती है."
    },
    {
      "id": 20,
      "question": "Which of the following is considered an authentic formative assessment tool?",
      "question_hi": "निम्नलिखित में से किसे एक प्रामाणिक रचनात्मक मूल्यांकन उपकरण माना जाता है?",
      "options": {
        "A": "Student learning portfolio showcasing drafts and progress reflections",
        "B": "End-of-term sealed standardized test",
        "C": "Annual school rank card",
        "D": "Board roll number list"
      },
      "options_hi": {
        "A": "छात्र अधिगम पोर्टफोलियो (Portfolio) जिसमें प्रगति और चिंतन का संग्रह हो",
        "B": "सत्र के अंत की सीलबंद मानकीकृत परीक्षा",
        "C": "वार्षिक स्कूल रैंक कार्ड",
        "D": "बोर्ड रोल नंबर सूची"
      },
      "correctAnswer": "A",
      "explanation": "A portfolio collects representative student work over time, documenting reflective progress, self-assessment, and conceptual growth.",
      "explanation_hi": "पोर्टफोलियो छात्र के कार्यों, असाइनमेंट्स और प्रगति का एक व्यवस्थित संग्रह है जो निरंतर सीखने और आत्म-मूल्यांकन को दर्शाता है."
    },
    {
      "id": 21,
      "question": "What is the term for a curriculum that includes unspoken, informal lessons, values, and social norms transmitted implicitly in school?",
      "question_hi": "उस पाठ्यचर्या को क्या कहा जाता है जिसमें स्कूल में अनकहे, अनौपचारिक दृष्टिकोण, मूल्य और सामाजिक मानदंड अप्रत्यक्ष रूप से सिखाए जाते हैं?",
      "options": {
        "A": "Explicit Curriculum",
        "B": "Hidden Curriculum",
        "C": "Null Curriculum",
        "D": "Overt Curriculum"
      },
      "options_hi": {
        "A": "प्रत्यक्ष पाठ्यचर्या",
        "B": "प्रच्छन्न / अप्रत्यक्ष पाठ्यचर्या (Hidden Curriculum)",
        "C": "शून्य पाठ्यचर्या",
        "D": "स्पष्ट पाठ्यचर्या"
      },
      "correctAnswer": "B",
      "explanation": "The 'Hidden Curriculum' refers to unwritten, unintended social and cultural values, attitudes, and behaviors learned by students through the school climate.",
      "explanation_hi": "प्रच्छन्न (Hidden) पाठ्यचर्या वह अनकहा और अनौपचारिक पाठ्यक्रम है जो छात्र स्कूल के वातावरण, शिक्षक के आचरण और नियमों से स्वतः सीखते हैं."
    },
    {
      "id": 22,
      "question": "What does 'Null Curriculum' mean in educational theory?",
      "question_hi": "शैक्षिक सिद्धांत में 'शून्य पाठ्यचर्या (Null Curriculum)' का क्या अर्थ है?",
      "options": {
        "A": "Curriculum with zero printing cost",
        "B": "Topics and perspectives that are intentionally or unintentionally omitted and NOT taught in schools",
        "C": "Computer programming lessons",
        "D": "Sports education"
      },
      "options_hi": {
        "A": "शून्य छपाई लागत वाला पाठ्यक्रम",
        "B": "वे विषय, दृष्टिकोण और ज्ञान जिन्हें जानबूझकर या अनजाने में छोड़ दिया गया है और स्कूलों में नहीं पढ़ाया जाता",
        "C": "कंप्यूटर कोडिंग कक्षाएं",
        "D": "शारीरिक शिक्षा"
      },
      "correctAnswer": "B",
      "explanation": "Elliot Eisner coined 'Null Curriculum' to describe that which schools do not teach, sending a silent message about what is deemed unimportant.",
      "explanation_hi": "इलियट आइजनर के अनुसार शून्य पाठ्यचर्या (Null Curriculum) वह ज्ञान और विषय हैं जिन्हें पाठ्यक्रम से बाहर रखा गया है और नहीं पढ़ाया जाता."
    },
    {
      "id": 23,
      "question": "According to Erik Erikson's Psychosocial Stages, which core conflict dominates adolescence (ages 12-18)?",
      "question_hi": "एरिक एरिक्सन के मनोसामाजिक विकास के अनुसार, किशोरावस्था (12-18 वर्ष) में कौन सा मुख्य द्वंद्व हावी रहता है?",
      "options": {
        "A": "Trust vs. Mistrust",
        "B": "Autonomy vs. Shame",
        "C": "Identity vs. Role Confusion",
        "D": "Generativity vs. Stagnation"
      },
      "options_hi": {
        "A": "विश्वास बनाम अविश्वास",
        "B": "स्वायत्तता बनाम शर्म",
        "C": "पहचान बनाम भूमिका भ्रम (Identity vs. Role Confusion)",
        "D": "उत्पादकता बनाम स्थिरता"
      },
      "correctAnswer": "C",
      "explanation": "Adolescents grapple with Identity vs. Role Confusion, striving to determine their personal identity, career aspirations, and societal role.",
      "explanation_hi": "किशोरावस्था में व्यक्ति अपनी स्वयं की पहचान, मूल्यों और भविष्य की भूमिका को लेकर 'पहचान बनाम भूमिका भ्रम' के द्वंद्व से जूझता है."
    },
    {
      "id": 24,
      "question": "What is the key characteristic of an 'Inclusive Education' policy under Section 12(1)(c) of the RTE Act 2009?",
      "question_hi": "RTE अधिनियम 2009 की धारा 12(1)(c) के तहत समावेशी शिक्षा नीति की प्रमुख विशेषता क्या है?",
      "options": {
        "A": "Mandatory 25% admission quota in entry-level classes of private unaided schools for disadvantaged and weaker sections",
        "B": "100% free laptops for teachers",
        "C": "Segregated special schools in each district",
        "D": "Abolition of mathematics curriculum"
      },
      "options_hi": {
        "A": "निजी गैर-सहायता प्राप्त स्कूलों की प्रारंभिक कक्षाओं में वंचित और कमजोर वर्गों के बच्चों के लिए अनिवार्य 25% आरक्षण",
        "B": "शिक्षकों के लिए मुफ्त लैपटॉप",
        "C": "प्रत्येक जिले में अलग विशेष स्कूल",
        "D": "गणित विषय को समाप्त करना"
      },
      "correctAnswer": "A",
      "explanation": "Section 12(1)(c) of the RTE Act mandates that private unaided schools reserve at least 25% of entry-level seats for children from economically disadvantaged backgrounds.",
      "explanation_hi": "RTE अधिनियम की धारा 12(1)(c) के तहत निजी गैर-सहायता प्राप्त स्कूलों में कमजोर व वंचित वर्ग के बच्चों के लिए कम से कम 25% सीटें आरक्षित रखना अनिवार्य है."
    },
    {
      "id": 25,
      "question": "Under NEP 2020, what is the 'Academic Bank of Credits' (ABC)?",
      "question_hi": "NEP 2020 के तहत 'एकेडमिक बैंक ऑफ क्रेडिट्स (ABC)' क्या है?",
      "options": {
        "A": "A monetary loan service for student tuitions",
        "B": "A digital repository that securely stores academic credits earned by students from various recognized higher education institutions, facilitating multiple entries and exits",
        "C": "A commercial banking subsidiary of SBI",
        "D": "A scholarship scheme for sports champions"
      },
      "options_hi": {
        "A": "छात्रों के लिए बैंक ऋण सेवा",
        "B": "एक डिजिटल भंडार जो विभिन्न मान्यता प्राप्त संस्थानों से छात्रों द्वारा अर्जित अकादमिक क्रेडिट्स को सहेजता है ताकि बहु-प्रवेश और निकास संभव हो सके",
        "C": "SBI की एक वाणिज्यिक शाखा",
        "D": "खिलाड़ियों के लिए छात्रवृत्ति योजना"
      },
      "correctAnswer": "B",
      "explanation": "ABC is a digital platform that stores credits earned by students across courses, allowing flexible multidisciplinary mobility and degree completion.",
      "explanation_hi": "ABC एक डिजिटल क्रेडिट बैंक है जो छात्रों द्वारा विभिन्न विश्वविद्यालयों से अर्जित क्रेडिट को डिजिटल रूप से सुरक्षित रखता है, जिससे पढ़ाई में रुकावट आने पर भी क्रेडिट नहीं खोते."
    },
    {
      "id": 26,
      "question": "What is the recommended student assessment shift emphasized in NEP 2020?",
      "question_hi": "NEP 2020 में छात्र मूल्यांकन में किस महत्वपूर्ण बदलाव पर जोर दिया गया है?",
      "options": {
        "A": "Shift from continuous evaluation to single high-stakes end-of-year memorization tests",
        "B": "Shift from summative rote-memorization testing to formative, competency-based, and regular assessment for learning",
        "C": "Complete elimination of teacher feedback",
        "D": "Using only true/false machine test sheets"
      },
      "options_hi": {
        "A": "सतत मूल्यांकन को समाप्त कर केवल रटने वाली वार्षिक परीक्षा लेना",
        "B": "रटंत-आधारित योगात्मक परीक्षा से दक्षता-आधारित (Competency-based), नियमित और रचनात्मक मूल्यांकन की ओर बदलाव",
        "C": "शिक्षक प्रतिक्रिया को पूरी तरह हटाना",
        "D": "केवल सत्य/असत्य प्रश्नों का उपयोग"
      },
      "correctAnswer": "B",
      "explanation": "NEP 2020 explicitly shifts the paradigm from summative rote-memory testing to regular, competency-based formative assessments evaluating higher-order thinking.",
      "explanation_hi": "NEP 2020 रटने वाली सत्रांत परीक्षाओं के स्थान पर कौशल-आधारित (Competency-based), रचनात्मक और सर्वांगीण मूल्यांकन पर बल देती है."
    },
    {
      "id": 27,
      "question": "In psychological measurement, what is the 'Hawthorne Effect'?",
      "question_hi": "मनोवैज्ञानिक मापन में 'हॉथोर्न प्रभाव (Hawthorne Effect)' क्या है?",
      "options": {
        "A": "Participants altering their behavior simply because they are aware of being observed or evaluated",
        "B": "Memory loss caused by physical exhaustion",
        "C": "Increased speed of learning during nighttime",
        "D": "Bias in grading essay answers"
      },
      "options_hi": {
        "A": "प्रतिभागियों द्वारा केवल इसलिए अपने व्यवहार में सुधार करना क्योंकि वे जानते हैं कि उनका निरीक्षण या मूल्यांकन किया जा रहा है",
        "B": "शारीरिक थकावट से स्मृति लोप",
        "C": "रात में सीखने की गति बढ़ना",
        "D": "निबंधात्मक उत्तरों में पक्षपात"
      },
      "correctAnswer": "A",
      "explanation": "The Hawthorne effect refers to subjects temporarily improving performance or altering habits as a conscious reaction to being observed.",
      "explanation_hi": "हॉथोर्न प्रभाव वह स्थिति है जहाँ व्यक्ति केवल इस जागरूकता के कारण अपने प्रदर्शन में सुधार कर लेता है कि उस पर निगरानी रखी जा रही है."
    },
    {
      "id": 28,
      "question": "What is the 'Halo Effect' in student grading?",
      "question_hi": "छात्रों के मूल्यांकन में 'हेलो प्रभाव (Halo Effect)' क्या है?",
      "options": {
        "A": "A teacher's overall positive impression of a student favorably biasing the evaluation of their specific academic performance",
        "B": "Using colored ink in grading",
        "C": "Cheating in examinations",
        "D": "Grading answers strictly on length"
      },
      "options_hi": {
        "A": "किसी छात्र के प्रति शिक्षक की समग्र सकारात्मक धारणा के कारण उसके विशिष्ट अकादमिक कार्यों का भी पक्षपातपूर्ण उच्च मूल्यांकन होना",
        "B": "मूल्यांकन में रंगीन स्याही का उपयोग",
        "C": "परीक्षा में नकल करना",
        "D": "उत्तर की लंबाई पर अंक देना"
      },
      "correctAnswer": "A",
      "explanation": "The Halo effect is a cognitive bias where an evaluator's general positive perception of an individual unconsciously inflates scores across unrelated specific traits.",
      "explanation_hi": "हेलो प्रभाव में शिक्षक की किसी छात्र के प्रति सामान्य अच्छी राय उसके अन्य सभी उत्तरों और कार्यों के मूल्यांकन को अचेतन रूप से प्रभावित करती है."
    },
    {
      "id": 29,
      "question": "Which of the following is a key feature of 'Continuous and Comprehensive Evaluation' (CCE)?",
      "question_hi": "'सतत और व्यापक मूल्यांकन (CCE)' की प्रमुख विशेषता कौन सी है?",
      "options": {
        "A": "Assessment limited exclusively to scholastic cognitive subjects",
        "B": "Holistic assessment covering both scholastic and co-scholastic domains throughout the entire academic year",
        "C": "Conducting surprise tests every morning",
        "D": "Evaluating only physical sports prowess"
      },
      "options_hi": {
        "A": "केवल किताबी/संज्ञानात्मक विषयों तक सीमित मूल्यांकन",
        "B": "पूरे शैक्षणिक सत्र के दौरान शैक्षिक और सह-शैक्षिक दोनों पक्षों का समग्र एवं निरंतर मूल्यांकन",
        "C": "प्रतिदिन सुबह अचानक परीक्षा लेना",
        "D": "केवल खेलकूद का मूल्यांकन"
      },
      "correctAnswer": "B",
      "explanation": "CCE evaluates cognitive, emotional, and psychomotor dimensions through ongoing formative and summative checks across scholastic and co-scholastic activities.",
      "explanation_hi": "CCE का अर्थ है कि मूल्यांकन केवल वार्षिक परीक्षा न होकर पूरे वर्ष चले और इसमें पढ़ाई के साथ-साथ कला, खेल, जीवन कौशल और नैतिक मूल्यों का भी समग्र मूल्यांकन हो."
    },
    {
      "id": 30,
      "question": "According to the National Curriculum Framework (NCF) 2005, which of the following is a Guiding Principle?",
      "question_hi": "राष्ट्रीय पाठ्यचर्या की रूपरेखा (NCF) 2005 के अनुसार, निम्नलिखित में से कौन सा एक मार्गदर्शक सिद्धांत है?",
      "options": {
        "A": "Connecting knowledge to life outside the school",
        "B": "Ensuring learning shifts away from rote methods",
        "C": "Enriching curriculum so that it goes beyond textbooks",
        "D": "All of the above"
      },
      "options_hi": {
        "A": "ज्ञान को स्कूल के बाहरी जीवन से जोड़ना",
        "B": "यह सुनिश्चित करना कि पढ़ाई रटंत प्रणाली से मुक्त हो",
        "C": "पाठ्यचर्या को पाठ्यपुस्तकों से आगे समृद्ध बनाना",
        "D": "उपरोक्त सभी (All of the above)"
      },
      "correctAnswer": "D",
      "explanation": "NCF 2005 outlines five guiding principles: connecting knowledge outside school, shifting from rote learning, enriching beyond textbooks, flexible examinations, and nurturing democratic identity.",
      "explanation_hi": "NCF 2005 के 5 प्रमुख सिद्धांतों में ज्ञान को बाहरी जीवन से जोड़ना, रटने से मुक्ति, किताबों से परे ले जाना और लचीली परीक्षा प्रणाली शामिल हैं."
    },
    {
      "id": 31,
      "question": "Who introduced the concept of 'Mental Age' and developed the first practical Intelligence Test in 1905?",
      "question_hi": "'मानसिक आयु (Mental Age)' की अवधारणा किसने पेश की और 1905 में पहला व्यावहारिक बुद्धि परीक्षण विकसित किया?",
      "options": {
        "A": "Alfred Binet and Théodore Simon",
        "B": "Lewis Terman",
        "C": "William Stern",
        "D": "David Wechsler"
      },
      "options_hi": {
        "A": "अल्फ्रेड बिने और थियोडोर साइमन",
        "B": "लुईस टर्मन",
        "C": "विलियम स्टर्न",
        "D": "डेविड वेक्सलर"
      },
      "correctAnswer": "A",
      "explanation": "Alfred Binet, alongside Théodore Simon, developed the Binet-Simon scale in 1905 to identify school children requiring special educational assistance.",
      "explanation_hi": "अल्फ्रेड बिने ने थियोडोर साइमन के साथ मिलकर 1905 में पहला बुद्धि परीक्षण बनाया और मानसिक आयु का विचार प्रस्तुत किया."
    },
    {
      "id": 32,
      "question": "Who devised the Intelligence Quotient (IQ) formula: IQ = (Mental Age / Chronological Age) * 100?",
      "question_hi": "बुद्धि लब्धि (IQ) का सूत्र IQ = (मानसिक आयु / वास्तविक आयु) * 100 किसने प्रतिपादित किया था?",
      "options": {
        "A": "William Stern (modified by Lewis Terman in Stanford-Binet)",
        "B": "Jean Piaget",
        "C": "Noam Chomsky",
        "D": "Edward Thorndike"
      },
      "options_hi": {
        "A": "विलियम स्टर्न (स्टैनफोर्ड-बिने में लुईस टर्मन द्वारा संशोधित)",
        "B": "जीन पियाजे",
        "C": "नोआम चॉम्स्की",
        "D": "एडवर्ड थार्नडाइक"
      },
      "correctAnswer": "A",
      "explanation": "William Stern proposed the ratio MA/CA in 1912, and Lewis Terman popularized it by multiplying by 100 in the Stanford-Binet intelligence scale (1916).",
      "explanation_hi": "विलियम स्टर्न ने मानसिक व वास्तविक आयु के अनुपात का सुझाव दिया, जिसे 1916 में लुईस टर्मन ने 100 से गुणा कर IQ सूत्र के रूप में लोकप्रिय बनाया."
    },
    {
      "id": 33,
      "question": "What is the primary role of a 'Diagnostic Test' before administering 'Remedial Teaching'?",
      "question_hi": "'उपचारात्मक शिक्षण' देने से पहले 'निदानात्मक परीक्षण' की प्राथमिक भूमिका क्या होती है?",
      "options": {
        "A": "To fail weak students early",
        "B": "To locate exact conceptual gaps, specific errors, and root causes of learning difficulties",
        "C": "To award school prizes",
        "D": "To verify student attendance"
      },
      "options_hi": {
        "A": "कमजोर छात्रों को पहले ही फेल करना",
        "B": "सटीक वैचारिक अंतरालों, विशिष्ट त्रुटियों और सीखने की कठिनाइयों के मूल कारणों की पहचान करना",
        "C": "स्कूल पुरस्कार प्रदान करना",
        "D": "छात्र उपस्थिति सत्यापित करना"
      },
      "correctAnswer": "B",
      "explanation": "Just as a physician diagnoses an illness before prescribing treatment, a teacher conducts a diagnostic test to identify precise learning gaps before tailoring remediation.",
      "explanation_hi": "जिस प्रकार डॉक्टर इलाज से पहले रोग का निदान करता है, उसी प्रकार शिक्षक उपचारात्मक शिक्षण से पूर्व छात्र की सटीक कमजोरियों का पता लगाने के लिए निदानात्मक परीक्षण करता है."
    },
    {
      "id": 34,
      "question": "In classroom pedagogy, what does 'Differentiated Instruction' mean?",
      "question_hi": "कक्षा शिक्षण में 'विभेदित निर्देश (Differentiated Instruction)' का क्या अर्थ है?",
      "options": {
        "A": "Delivering identical lectures at identical pace to every single student",
        "B": "Tailoring teaching methods, content, and assessments to accommodate varying student readiness levels, interests, and learning styles",
        "C": "Teaching only one student at a time in the school",
        "D": "Assigning homework only to gifted students"
      },
      "options_hi": {
        "A": "प्रत्येक छात्र को एक समान गति से एक जैसा व्याख्यान देना",
        "B": "छात्रों की अलग-अलग क्षमताओं, रुचियों और सीखने की शैलियों के अनुसार शिक्षण विधियों और सामग्री को अनुकूलित करना",
        "C": "स्कूल में एक समय में केवल एक छात्र को पढ़ाना",
        "D": "केवल मेधावी छात्रों को गृहकार्य देना"
      },
      "correctAnswer": "B",
      "explanation": "Differentiated instruction adapts content, process, and products to meet the heterogeneous learning profiles of diverse students in a mixed-ability classroom.",
      "explanation_hi": "विभेदित निर्देश में शिक्षक कक्षा की विविधता को स्वीकार करते हुए प्रत्येक छात्र की गति, रुचि और क्षमता के अनुसार अलग-अलग रणनीतियों से पढ़ाता है."
    },
    {
      "id": 35,
      "question": "What is the primary objective of 'Action Research' conducted by school teachers?",
      "question_hi": "विद्यालय शिक्षकों द्वारा किए जाने वाले 'क्रियात्मक अनुसंधान (Action Research)' का प्राथमिक उद्देश्य क्या है?",
      "options": {
        "A": "Publishing theoretical papers in international academic journals",
        "B": "Solving immediate, practical classroom and school-level problems to improve educational practice",
        "C": "Developing nuclear physics theorems",
        "D": "Securing national patent rights"
      },
      "options_hi": {
        "A": "अंतर्राष्ट्रीय पत्रिकाओं में सैद्धांतिक शोध पत्र प्रकाशित करना",
        "B": "शैक्षणिक अभ्यास में सुधार के लिए कक्षा और स्कूल स्तर की तात्कालिक व्यावहारिक समस्याओं का समाधान करना",
        "C": "परमाणु भौतिकी के सिद्धांतों को खोजना",
        "D": "पेटेंट प्राप्त करना"
      },
      "correctAnswer": "B",
      "explanation": "Action research (Stephen Corey / Kurt Lewin) is practical research conducted by practitioners (teachers) to address immediate local classroom challenges.",
      "explanation_hi": "क्रियात्मक अनुसंधान का उद्देश्य शिक्षक द्वारा अपनी कक्षा की तात्कालिक समस्याओं (जैसे वर्तनी की अशुद्धियाँ, अनुशासन) का त्वरित और व्यावहारिक समाधान खोजना है."
    },
    {
      "id": 36,
      "question": "Which of the following is considered the most democratic teaching strategy?",
      "question_hi": "निम्नलिखित में से किसे सबसे लोकतांत्रिक शिक्षण रणनीति माना जाता है?",
      "options": {
        "A": "Authoritarian Lecture Method",
        "B": "Group Discussion and Brainstorming",
        "C": "Imposed Silent Reading",
        "D": "Dictation of textbook answers"
      },
      "options_hi": {
        "A": "सत्तावादी व्याख्यान विधि",
        "B": "समूह चर्चा और विचार-मंथन (Group Discussion & Brainstorming)",
        "C": "अनिवार्य मौन पठन",
        "D": "उत्तरों का श्रुतलेख लिखवाना"
      },
      "correctAnswer": "B",
      "explanation": "Group discussions foster egalitarian participation, mutual respect, critical dialogue, and student agency, reflecting democratic values.",
      "explanation_hi": "समूह चर्चा और विचार-मंथन में सभी छात्रों को अपने विचार व्यक्त करने, प्रश्न पूछने और परस्पर संवाद करने का समान अवसर मिलता है, जो लोकतांत्रिक है."
    },
    {
      "id": 37,
      "question": "In Bloom's Cognitive Taxonomy, which action verb is typically associated with the 'Analysis' level?",
      "question_hi": "ब्लूम के संज्ञानात्मक वर्गीकरण में, कौन सी क्रिया आमतौर पर 'विश्लेषण (Analysis)' स्तर से जुड़ी होती है?",
      "options": {
        "A": "List",
        "B": "Differentiate / Deconstruct",
        "C": "Recall",
        "D": "Define"
      },
      "options_hi": {
        "A": "सूचीबद्ध करना",
        "B": "विभेद करना / विघटित करना (Differentiate / Breakdown)",
        "C": "याद करना",
        "D": "परिभाषित करना"
      },
      "correctAnswer": "B",
      "explanation": "Analysis involves breaking information into parts, distinguishing relationships, and differentiating components. Verbs include analyze, differentiate, deconstruct.",
      "explanation_hi": "विश्लेषण स्तर पर छात्र जटिल सूचनाओं को छोटे-छोटे भागों में तोड़कर उनके संबंधों का परीक्षण करते हैं (जैसे अंतर करना, तुलना करना, विखंडन करना)."
    },
    {
      "id": 38,
      "question": "What is the primary function of an 'Anecdotal Record' maintained by a school teacher?",
      "question_hi": "स्कूल शिक्षक द्वारा बनाए जाने वाले 'उपाख्यानात्मक अभिलेख (Anecdotal Record)' का प्राथमिक कार्य क्या है?",
      "options": {
        "A": "Recording exact financial tuition receipts",
        "B": "Recording objective, factual narrative descriptions of significant student behaviors and events observed over time",
        "C": "Logging library book checkouts",
        "D": "Storing cafeteria meal counts"
      },
      "options_hi": {
        "A": "ट्यूशन शुल्क रसीदों का हिसाब रखना",
        "B": "समय के साथ देखे गए छात्र के महत्वपूर्ण व्यवहारों और घटनाओं का वस्तुनिष्ठ तथ्यात्मक विवरण दर्ज करना",
        "C": "लाइब्रेरी पुस्तकों की प्रविष्टि",
        "D": "भोजन की गिनती करना"
      },
      "correctAnswer": "B",
      "explanation": "An anecdotal record is a brief narrative recording of an observed incident regarding a student's social, emotional, or academic development.",
      "explanation_hi": "उपाख्यानात्मक अभिलेख (Anecdotal Record) किसी छात्र के जीवन की किसी विशिष्ट घटना, संकट या व्यवहार का संक्षिप्त तथ्यात्मक विवरण होता है."
    },
    {
      "id": 39,
      "question": "According to Kohlberg's Theory of Moral Development, what is the 'Heinz Dilemma' used to assess?",
      "question_hi": "कोहलबर्ग के नैतिक विकास के सिद्धांत में, 'हाइन्ज़ दुविधा (Heinz Dilemma)' का उपयोग किस बात का मूल्यांकन करने के लिए किया जाता है?",
      "options": {
        "A": "Memory retention capacity",
        "B": "Moral reasoning and ethical justification behind decision-making",
        "C": "Physical stamina",
        "D": "Vocabulary comprehension"
      },
      "options_hi": {
        "A": "स्मृति धारण क्षमता",
        "B": "निर्णय लेने के पीछे का नैतिक तर्क (Moral Reasoning) और औचित्य",
        "C": "शारीरिक सहनशक्ति",
        "D": "शब्दावली समझ"
      },
      "correctAnswer": "B",
      "explanation": "Kohlberg presented moral dilemmas like Heinz's theft of medicine to examine how people reason about rules, human life, and justice.",
      "explanation_hi": "हाइन्ज़ दुविधा का उपयोग यह जानने के लिए किया जाता है कि कोई व्यक्ति किसी कठिन नैतिक संकट में क्या फैसला लेता है और उसके पीछे क्या तर्क देता है."
    },
    {
      "id": 40,
      "question": "What is the significance of 'Equilibration' in Jean Piaget's theory?",
      "question_hi": "जीन पियाजे के सिद्धांत में 'साम्यीकरण / संतुलन (Equilibration)' का क्या महत्व है?",
      "options": {
        "A": "The drive towards mental equilibrium between existing schemas and new environmental experiences",
        "B": "Balancing physical weight on gym equipment",
        "C": "Dividing school periods equally",
        "D": "Maintaining identical test scores across subjects"
      },
      "options_hi": {
        "A": "मौजूदा स्कीमा और नए पर्यावरणीय अनुभवों के बीच मानसिक संतुलन प्राप्त करने की आंतरिक प्रेरणा",
        "B": "जिम में शारीरिक संतुलन बनाना",
        "C": "स्कूल पीरियड को बराबर बांटना",
        "D": "सभी विषयों में एक समान अंक रखना"
      },
      "correctAnswer": "A",
      "explanation": "Equilibration is the self-regulatory process that drives cognitive growth by reconciling disequilibrium when new experiences challenge current schemas.",
      "explanation_hi": "साम्यीकरण वह मानसिक प्रक्रिया है जिसके द्वारा बच्चा आत्मसातीकरण और समायोजन के बीच संतुलन स्थापित करके अपने ज्ञान को विकसित करता है."
    },
    {
      "id": 41,
      "question": "Which of the following is NOT one of the 5 Es in the 5E Instructional Model?",
      "question_hi": "5E शिक्षण मॉडल में निम्नलिखित में से कौन सा 5 Es का हिस्सा नहीं है?",
      "options": {
        "A": "Engage",
        "B": "Explore",
        "C": "Enforce",
        "D": "Elaborate"
      },
      "options_hi": {
        "A": "Engage (संलग्न होना)",
        "B": "Explore (अन्वेषण करना)",
        "C": "Enforce (लागू करना/मजबूर करना)",
        "D": "Elaborate (विस्तार करना)"
      },
      "correctAnswer": "C",
      "explanation": "The 5Es are: Engage, Explore, Explain, Elaborate, and Evaluate. 'Enforce' is not part of the model.",
      "explanation_hi": "5E मॉडल के 5 चरण हैं: Engage, Explore, Explain, Elaborate, और Evaluate। 'Enforce' इसका भाग नहीं है."
    },
    {
      "id": 42,
      "question": "What is the primary focus of 'Microteaching Feedback' in the Indian adaptation by NCERT?",
      "question_hi": "NCERT के भारतीय रूपांतरण में 'सूक्ष्म शिक्षण प्रतिपुष्टि (Feedback)' का प्राथमिक ध्यान किस पर होता है?",
      "options": {
        "A": "Critiquing the personal attire of the teacher",
        "B": "Providing constructive, specific evidence on the mastery of the targeted teaching skill",
        "C": "Assigning letter grades for college marksheet",
        "D": "Disqualifying candidate teachers immediately"
      },
      "options_hi": {
        "A": "शिक्षक की व्यक्तिगत वेशभूषा की आलोचना करना",
        "B": "अभ्यास किए जा रहे विशिष्ट शिक्षण कौशल पर रचनात्मक और साक्ष्य-आधारित प्रतिक्रिया देना",
        "C": "कॉलेज की मार्कशीट के लिए ग्रेड देना",
        "D": "प्रशिक्षु शिक्षकों को तुरंत अयोग्य घोषित करना"
      },
      "correctAnswer": "B",
      "explanation": "Microteaching feedback provides immediate, targeted behavioral feedback on how well the specific pedagogical skill was executed.",
      "explanation_hi": "सूक्ष्म शिक्षण में प्रतिपुष्टि (Feedback) का उद्देश्य छात्र-अध्यापक को यह बताना है कि उसने निर्धारित शिक्षण कौशल का प्रयोग कितनी कुशलता से किया."
    },
    {
      "id": 43,
      "question": "Under RTE Act 2009, corporal punishment and mental harassment of children are:",
      "question_hi": "RTE अधिनियम 2009 के तहत बच्चों को शारीरिक दंड और मानसिक प्रताड़ना देना:",
      "options": {
        "A": "Permitted with parental permission",
        "B": "Completely prohibited and punishable under Section 17",
        "C": "Allowed during examination months",
        "D": "Left to the discretion of the headmaster"
      },
      "options_hi": {
        "A": "अभिभावक की अनुमति से स्वीकार्य है",
        "B": "पूरी तरह से प्रतिबंधित और धारा 17 के तहत दंडनीय अपराध है",
        "C": "परीक्षा के महीनों में अनुमति है",
        "D": "प्रधानाध्यापक के विवेक पर निर्भर है"
      },
      "correctAnswer": "B",
      "explanation": "Section 17 of the RTE Act explicitly bans physical punishment and mental harassment, making violators liable to disciplinary action.",
      "explanation_hi": "RTE अधिनियम की धारा 17 किसी भी बच्चे को शारीरिक दंड या मानसिक उत्पीड़न देने पर पूर्ण प्रतिबंध लगाती है."
    },
    {
      "id": 44,
      "question": "What does 'Foundational Literacy and Numeracy' (FLN) specifically target according to NEP 2020?",
      "question_hi": "NEP 2020 के अनुसार 'बुनियादी साक्षरता और संख्याज्ञान (FLN)' का विशेष लक्ष्य क्या है?",
      "options": {
        "A": "Every child learning to read basic text with comprehension and perform basic arithmetic by the end of Grade 3",
        "B": "High school algebra and calculus mastery",
        "C": "Fluent English conversational speaking by age 3",
        "D": "Computer programming in Python for infants"
      },
      "options_hi": {
        "A": "कक्षा 3 के अंत तक प्रत्येक बच्चे द्वारा समझ के साथ बुनियादी पाठ पढ़ना और सरल जोड़-घटाव करना सीखना",
        "B": "हाई स्कूल बीजगणित और कलन में दक्षता",
        "C": "3 वर्ष की आयु तक धाराप्रवाह अंग्रेजी बोलना",
        "D": "शिशुओं के लिए कंप्यूटर प्रोग्रामिंग"
      },
      "correctAnswer": "A",
      "explanation": "FLN ensures that by Grade 3, every child attains the foundational ability to read basic text with comprehension and execute fundamental addition/subtraction.",
      "explanation_hi": "FLN का उद्देश्य यह सुनिश्चित करना है कि कक्षा 3 तक सभी बच्चे मातृभाषा में समझ के साथ पढ़ना और बुनियादी अंकगणितीय संक्रियाएं करना सीख लें."
    },
    {
      "id": 45,
      "question": "Which of the following is considered an 'Affective Domain' objective?",
      "question_hi": "निम्नलिखित में से किसे 'भावात्मक डोमेन (Affective Domain)' का उद्देश्य माना जाता है?",
      "options": {
        "A": "Solving a differential equation",
        "B": "Demonstrating respect for cultural diversity and environmental conservation",
        "C": "Typing 60 words per minute on a keyboard",
        "D": "Memorizing atomic numbers of chemical elements"
      },
      "options_hi": {
        "A": "अवकल समीकरण हल करना",
        "B": "सांस्कृतिक विविधता और पर्यावरण संरक्षण के प्रति सम्मान प्रदर्शित करना",
        "C": "कीबोर्ड पर प्रति मिनट 60 शब्द टाइप करना",
        "D": "तत्वों के परमाणु क्रमांक याद करना"
      },
      "correctAnswer": "B",
      "explanation": "Respecting diversity and caring for nature are emotional attitudes, values, and ethical dispositions, which belong strictly to the Affective Domain.",
      "explanation_hi": "पर्यावरण और समाज के प्रति संवेदनशीलता और सम्मान दिखाना दृष्टिकोण और मूल्यों से जुड़ा है, जो भावात्मक डोमेन का हिस्सा है."
    },
    {
      "id": 46,
      "question": "What is the primary role of an 'Item Analysis' in standardized test creation?",
      "question_hi": "मानकीकृत परीक्षण निर्माण में 'पद विश्लेषण (Item Analysis)' की प्राथमिक भूमिका क्या है?",
      "options": {
        "A": "Assessing item difficulty index and discrimination power to select optimal test questions",
        "B": "Checking printer ink quality",
        "C": "Counting total paper pages",
        "D": "Checking candidate identity cards"
      },
      "options_hi": {
        "A": "सर्वोत्तम प्रश्नों के चयन हेतु प्रश्नों के कठिनाई स्तर और विभेदन क्षमता (Discrimination Power) का मूल्यांकन करना",
        "B": "प्रिंटर स्याही की गुणवत्ता जाँचना",
        "C": "कागज के पृष्ठों की गिनती",
        "D": "प्रवेश पत्रों की जाँच"
      },
      "correctAnswer": "A",
      "explanation": "Item analysis evaluates Difficulty Index (p-value) and Discrimination Index (D-value) to discard flawed or ambiguous questions.",
      "explanation_hi": "पद विश्लेषण (Item Analysis) यह जांचता है कि कोई प्रश्न कितना कठिन है और क्या वह मेधावी तथा कमजोर छात्रों में सही विभेद कर पाता है."
    },
    {
      "id": 47,
      "question": "What is the purpose of a 'Table of Specifications' (Blueprint) in preparing an achievement test?",
      "question_hi": "उपलब्धि परीक्षण तैयार करते समय 'ब्लूप्रिंट (Table of Specifications)' का उद्देश्य क्या है?",
      "options": {
        "A": "To specify seating arrangements in the examination hall",
        "B": "To ensure balanced weighting across curriculum content areas and cognitive objectives (knowledge, understanding, application)",
        "C": "To print answer keys",
        "D": "To calculate teacher invigilation allowances"
      },
      "options_hi": {
        "A": "परीक्षा हॉल में बैठने की व्यवस्था तय करना",
        "B": "पाठ्यक्रम की विभिन्न इकाइयों और संज्ञानात्मक उद्देश्यों (ज्ञान, बोध, अनुप्रयोग) में संतुलित अंक वितरण सुनिश्चित करना",
        "C": "उत्तर कुंजी छापना",
        "D": "शिक्षक भत्ते की गणना करना"
      },
      "correctAnswer": "B",
      "explanation": "A test blueprint aligns instructional goals with test items, guaranteeing proportional representation of content units and cognitive levels.",
      "explanation_hi": "ब्लूप्रिंट प्रश्नपत्र का ऐसा नक्शा है जो यह सुनिश्चित करता है कि पाठ्यक्रम के सभी अध्यायों और विभिन्न संज्ञानात्मक स्तरों को उचित भार मिला है."
    },
    {
      "id": 48,
      "question": "What is 'Formative Assessment' primarily used for?",
      "question_hi": "'रचनात्मक मूल्यांकन (Formative Assessment)' का मुख्य उपयोग किसके लिए किया जाता है?",
      "options": {
        "A": "Certifying completion of the degree at the final graduation convocation",
        "B": "Providing ongoing diagnostic feedback during instruction to enhance learning and modify teaching strategies",
        "C": "Selecting students for Olympic sports quotas",
        "D": "Ranking schools by performance for funding cuts"
      },
      "options_hi": {
        "A": "दीक्षांत समारोह में डिग्री पूर्णता को प्रमाणित करना",
        "B": "सीखने में सुधार और शिक्षण रणनीतियों में बदलाव के लिए शिक्षण के दौरान निरंतर प्रतिक्रिया प्रदान करना",
        "C": "खेल कोटे के लिए छात्रों का चयन",
        "D": "फंडिंग कटौती के लिए स्कूलों की रैंकिंग"
      },
      "correctAnswer": "B",
      "explanation": "Formative assessment is low-stakes and instructional, providing continuous actionable feedback to students and teachers alike.",
      "explanation_hi": "रचनात्मक मूल्यांकन शिक्षण-अधिगम प्रक्रिया के दौरान निरंतर चलता है ताकि छात्रों की कमियों को समय रहते दूर किया जा सके."
    },
    {
      "id": 49,
      "question": "According to Howard Gardner, an architect or cartographer typically exhibits high levels of which intelligence?",
      "question_hi": "हावर्ड गार्डनर के अनुसार, एक वास्तुकार (Architect) या मानचित्रकार आमतौर पर किस प्रकार की बुद्धि का उच्च स्तर प्रदर्शित करता है?",
      "options": {
        "A": "Bodily-Kinesthetic Intelligence",
        "B": "Spatial (Visual-Spatial) Intelligence",
        "C": "Intrapersonal Intelligence",
        "D": "Musical Intelligence"
      },
      "options_hi": {
        "A": "शारीरिक-गतिक बुद्धि",
        "B": "स्थानिक (Spatial) बुद्धि",
        "C": "अंतःवैयक्तिक बुद्धि",
        "D": "संगीतात्मक बुद्धि"
      },
      "correctAnswer": "B",
      "explanation": "Spatial intelligence involves mental visualization, mental rotation, spatial awareness, and navigation, vital for architects and navigators.",
      "explanation_hi": "स्थानिक बुद्धि (Spatial Intelligence) में स्थानों, आकृतियों और 3D विज़ुअलाइज़ेशन की उत्कृष्ट क्षमता होती है, जो वास्तुकारों और मानचित्रकारों में पाई जाती है."
    },
    {
      "id": 50,
      "question": "What is the overarching vision of NEP 2020 regarding school education?",
      "question_hi": "स्कूली शिक्षा के संबंध में NEP 2020 का सर्वोपरि दृष्टिकोण (Vision) क्या है?",
      "options": {
        "A": "Producing identical rote-learning factory workers",
        "B": "Developing good, thoughtful, well-rounded, and creative human beings equipped with 21st-century skills and constitutional values",
        "C": "Privatizing all government schools",
        "D": "Restricting higher education to elite urban centers"
      },
      "options_hi": {
        "A": "रटने वाले कारखाने के मजदूर तैयार करना",
        "B": "21वीं सदी के कौशलों और संवैधानिक मूल्यों से युक्त विचारशील, समग्र, सर्वांगीण और रचनात्मक नागरिकों का विकास करना",
        "C": "सभी सरकारी स्कूलों का निजीकरण करना",
        "D": "उच्च शिक्षा को केवल शहरी अभिजात वर्ग तक सीमित करना"
      },
      "correctAnswer": "B",
      "explanation": "NEP 2020 aims to transform India into an equitable and vibrant knowledge society by fostering holistic, multidisciplinary, critical thinking citizens.",
      "explanation_hi": "NEP 2020 का लक्ष्य भारत को एक वैश्विक ज्ञान महाशक्ति बनाना और ऐसे समग्र नागरिकों का निर्माण करना है जो 21वीं सदी के कौशलों और मानवीय मूल्यों से युक्त हों."
    }
  ]
};
