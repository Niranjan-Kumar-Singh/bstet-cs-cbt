/**
 * Bihar STET Paper II & BPSC TRE Computer Science
 * High-Yield Quick-Revision Cheatsheets & Formula Cards Data
 * Comprehensive review cards across all 7 core examination domains.
 */

window.CHEATSHEETS_DATA = [
  {
    id: "dsa_formulas",
    category: "dsa",
    categoryName: "Data Structures & Algorithms",
    categoryHindi: "डेटा संरचना एवं एल्गोरिदम",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>`,
    title: "Sorting, Searching & Tree Complexities",
    titleHindi: "सॉर्टिंग, सर्चिंग और बाइनरी ट्री सूत्र",
    summary: "Asymptotic time and space bounds, tree node count formulas, and traversal rules frequently asked in STET and BPSC.",
    tables: [
      {
        title: "Sorting Algorithms Complexity Matrix",
        headers: ["Algorithm", "Best Time", "Average Time", "Worst Time", "Worst Space", "Stable?"],
        rows: [
          ["Quick Sort", "O(n log n)", "O(n log n)", "O(n²)", "O(log n)", "No"],
          ["Merge Sort", "O(n log n)", "O(n log n)", "O(n log n)", "O(n)", "Yes"],
          ["Heap Sort", "O(n log n)", "O(n log n)", "O(n log n)", "O(1)", "No"],
          ["Insertion Sort", "O(n)", "O(n²)", "O(n²)", "O(1)", "Yes"],
          ["Selection Sort", "O(n²)", "O(n²)", "O(n²)", "O(1)", "No"],
          ["Bubble Sort", "O(n)", "O(n²)", "O(n²)", "O(1)", "Yes"]
        ]
      },
      {
        title: "Binary Tree Mathematical Formulas",
        headers: ["Property", "Formula", "Description"],
        rows: [
          ["Max nodes at Level i", "2^i", "Level of root is assumed as 0 (Level 0: 1 node, Level 1: 2 nodes)"],
          ["Max nodes in Tree of height h", "2^(h+1) - 1", "For tree with root height = 0. If root height = 1, formula is 2^h - 1"],
          ["Min height with n nodes", "⌈log₂(n + 1)⌉ - 1", "Occurs in complete/strictly balanced binary tree"],
          ["Max height with n nodes", "n - 1", "Occurs in skewed/degenerate binary tree"],
          ["Full Binary Tree Leaves vs Internal", "L = I + 1", "Number of leaf nodes (L) is always 1 greater than nodes with 2 children (I)"],
          ["Array Heap: Parent of index i", "⌊(i - 1) / 2⌋", "For 0-based indexing. Left child: 2i + 1, Right child: 2i + 2"]
        ]
      }
    ],
    tips: [
      "Inorder Traversal of a Binary Search Tree (BST) ALWAYS yields keys in strictly ascending sorted order.",
      "Merge Sort is preferred for Linked Lists (O(1) extra space without random access), whereas Quick Sort is preferred for Arrays (in-place cache locality).",
      "Postfix expression evaluation uses a STACK: operands pushed, operators pop 2 operands and push result back."
    ]
  },
  {
    id: "dbms_sql_rules",
    category: "dbms",
    categoryName: "DBMS & SQL",
    categoryHindi: "डेटाबेस प्रबंधन एवं SQL",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    title: "SQL Execution Order & Normalization Hierarchy",
    titleHindi: "SQL क्लॉज निष्पादन क्रम और सामान्यीकरण (Normal Forms)",
    summary: "Logical SQL clause processing order, 1NF to BCNF rules, and ACID transaction properties.",
    tables: [
      {
        title: "Logical SQL Query Execution Order (Crucial for BPSC/STET)",
        headers: ["Step", "SQL Clause", "Internal Operation"],
        rows: [
          ["1", "FROM / JOIN", "Determines table sources, computes Cartesian products and join filters"],
          ["2", "WHERE", "Filters individual rows BEFORE grouping (Cannot use aggregate functions)"],
          ["3", "GROUP BY", "Aggregates remaining rows into summary buckets based on common keys"],
          ["4", "HAVING", "Filters aggregate groups AFTER grouping (Can use COUNT, SUM, AVG)"],
          ["5", "SELECT", "Computes expressions, aliases, and extracts target columns"],
          ["6", "DISTINCT", "Eliminates duplicate projection rows"],
          ["7", "ORDER BY", "Sorts the final result set in ASC or DESC order"],
          ["8", "LIMIT / OFFSET", "Restricts row count returned to client"]
        ]
      },
      {
        title: "Relational Database Normalization Summary",
        headers: ["Normal Form", "Mandatory Requirement", "Anomaly Eliminated"],
        rows: [
          ["1NF (First)", "All column values must be atomic (No multi-valued or composite attributes)", "Repeating groups"],
          ["2NF (Second)", "Must be in 1NF AND no Partial Dependency (Non-prime attribute dependent on subset of candidate key)", "Partial key redundancy"],
          ["3NF (Third)", "Must be in 2NF AND no Transitive Dependency (For X → Y, either X is Superkey or Y is Prime)", "Transitive anomaly"],
          ["BCNF (Boyce-Codd)", "Strict 3NF: For EVERY functional dependency X → Y, X MUST be a Superkey", "Anomalies from overlapping composite keys"]
        ]
      }
    ],
    tips: [
      "WHERE clause cannot contain aggregate functions like WHERE MAX(salary) > 5000; use HAVING instead.",
      "PRIMARY KEY = UNIQUE + NOT NULL constraint combined. A table can have multiple Candidate Keys, but only ONE Primary Key.",
      "ACID: Atomicity (All or None), Consistency (Valid state to valid state), Isolation (Serial execution view), Durability (Committed changes survive system crash)."
    ]
  },
  {
    id: "networking_osi",
    category: "networks",
    categoryName: "Computer Networks",
    categoryHindi: "कंप्यूटर नेटवर्क्स एवं इंटरनेट",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    title: "OSI 7 Layers, Common Ports & IPv4 Subnetting",
    titleHindi: "OSI 7 लेयर्स, पोर्ट नंबर्स और IPv4 एड्रेसिंग",
    summary: "Layer-by-layer PDUs, protocols, hardware devices, port numbers, and IPv4 addressing classes.",
    tables: [
      {
        title: "OSI 7-Layer Protocol Reference Model",
        headers: ["Layer #", "Layer Name", "Protocol Data Unit (PDU)", "Key Protocols", "Hardware / Device"],
        rows: [
          ["7", "Application", "Data", "HTTP, HTTPS, FTP, SMTP, DNS, DHCP, Telnet", "Gateway"],
          ["6", "Presentation", "Data", "SSL/TLS, ASCII, JPEG, MPEG (Encryption, Compression)", "Gateway"],
          ["5", "Session", "Data", "RPC, NetBIOS, PPTP (Dialog Control, Token Management)", "Gateway"],
          ["4", "Transport", "Segment", "TCP (Reliable, Connection-oriented), UDP (Fast, Connectionless)", "Gateway / Layer 4 Switch"],
          ["3", "Network", "Packet", "IP (IPv4/IPv6), ICMP, ARP, RARP, OSPF, BGP", "Router, Layer 3 Switch"],
          ["2", "Data Link", "Frame", "Ethernet (IEEE 802.3), Wi-Fi (802.11), PPP, HDLC", "Bridge, Switch, NIC"],
          ["1", "Physical", "Bit", "RS-232, RJ-45, DSL, 100BASE-T (Signals, Encoding)", "Hub, Repeater, Cables"]
        ]
      },
      {
        title: "Frequently Asked Official Port Numbers",
        headers: ["Protocol", "Port", "Transport", "Purpose"],
        rows: [
          ["FTP (Data / Control)", "20 / 21", "TCP", "File Transfer Protocol"],
          ["SSH", "22", "TCP", "Secure Shell encrypted remote login"],
          ["Telnet", "23", "TCP", "Unencrypted remote terminal communication"],
          ["SMTP", "25", "TCP", "Simple Mail Transfer Protocol (Sending mail)"],
          ["DNS", "53", "UDP / TCP", "Domain Name System resolution"],
          ["DHCP (Server / Client)", "67 / 68", "UDP", "Dynamic Host Configuration Protocol"],
          ["HTTP", "80", "TCP", "Hypertext Transfer Protocol (Web pages)"],
          ["POP3", "110", "TCP", "Post Office Protocol (Retrieving mail)"],
          ["IMAP", "143", "TCP", "Internet Message Access Protocol"],
          ["SNMP", "161", "UDP", "Simple Network Management Protocol"],
          ["HTTPS", "443", "TCP", "Secure HTTP with SSL/TLS encryption"],
          ["MySQL", "3306", "TCP", "Default MySQL database connection"]
        ]
      },
      {
        title: "IPv4 Class Architecture & Private Ranges",
        headers: ["Class", "First Octet Range", "Default Subnet Mask", "Network / Host Bits", "Private IP Range"],
        rows: [
          ["Class A", "1 – 126", "255.0.0.0 (/8)", "8 Net / 24 Host", "10.0.0.0 – 10.255.255.255"],
          ["Class B", "128 – 191", "255.255.0.0 (/16)", "16 Net / 16 Host", "172.16.0.0 – 172.31.255.255"],
          ["Class C", "192 – 223", "255.255.255.0 (/24)", "24 Net / 8 Host", "192.168.0.0 – 192.168.255.255"],
          ["Class D", "224 – 239", "N/A", "Reserved for Multicasting", "N/A"],
          ["Class E", "240 – 255", "N/A", "Experimental & Research", "N/A"]
        ]
      }
    ],
    tips: [
      "IP address 127.0.0.1 (127.x.x.x) is strictly reserved as the Loopback address for localhost diagnostics.",
      "Number of usable hosts in a /n subnet is always 2^(32 - n) - 2 (Subtract 2 for Network ID and Broadcast ID).",
      "Full Mesh topology requires n(n - 1) / 2 duplex physical transmission links for n nodes."
    ]
  },
  {
    id: "os_formulas",
    category: "os",
    categoryName: "Operating Systems",
    categoryHindi: "ऑपरेटिंग सिस्टम्स",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z"/><circle cx="12" cy="12" r="3"/></svg>`,
    title: "CPU Scheduling, Deadlock & Memory Management",
    titleHindi: "CPU शेड्यूलिंग, डेडलॉक 4 शर्तें और मेमोरी प्रबंधन",
    summary: "Turnaround formulas, Coffman deadlock conditions, page replacement anomalies, and EMAT equations.",
    tables: [
      {
        title: "CPU Scheduling Metrics & Algorithms",
        headers: ["Algorithm", "Preemptive?", "Criterion", "Key Characteristic / Hazard"],
        rows: [
          ["FCFS (First Come First Serve)", "No", "Arrival Time", "Convoy Effect (Short processes wait behind long ones)"],
          ["SJF (Shortest Job First)", "No", "Burst Time", "Provably optimal minimum average waiting time; Starvation for long jobs"],
          ["SRTF (Shortest Remaining Time)", "Yes", "Remaining Burst", "Preemptive SJF; Frequent context switching overhead"],
          ["Round Robin (RR)", "Yes", "Time Quantum", "Fair share scheduling; degenerate to FCFS if quantum is very large"],
          ["Priority Scheduling", "Both", "Assigned Priority", "High priority runs first; Starvation resolved via AGING (gradual priority boost)"]
        ]
      },
      {
        title: "Deadlock: 4 Necessary Coffman Conditions",
        headers: ["Condition", "Meaning in OS", "Prevention Strategy"],
        rows: [
          ["1. Mutual Exclusion", "At least one resource must be held in a non-shareable mode", "Make resources shareable (e.g. read-only files)"],
          ["2. Hold and Wait", "Process holds resources while requesting additional locked resources", "Request all required resources before execution starts"],
          ["3. No Preemption", "Resources cannot be forcibly confiscated from a process", "Preempt resources if process requests unavailable ones"],
          ["4. Circular Wait", "Chain of processes P0 → P1 → P2... where each waits for next", "Impose strict linear ordering on all resource types"]
        ]
      }
    ],
    tips: [
      "Turnaround Time (TAT) = Completion Time - Arrival Time.",
      "Waiting Time (WT) = Turnaround Time - Burst Time.",
      "Belady's Anomaly occurs in FIFO Page Replacement: Increasing page frames may paradoxically INCREASE page fault count.",
      "Banker's Algorithm: Need Matrix = Max Matrix - Allocation Matrix. Safe state ensures zero deadlock."
    ]
  },
  {
    id: "digital_logic_boolean",
    category: "digital",
    categoryName: "Digital Logic & Boolean Algebra",
    categoryHindi: "डिजिटल लॉजिक एवं बूलियन बीजगणित",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    title: "Boolean Laws, Universal Gates & Complement Arithmetic",
    titleHindi: "बूलियन नियम, यूनिवर्सल गेट्स (NAND/NOR) और 2's पूरक",
    summary: "De Morgan's theorem, gate count for universal logic realization, and binary complement rules.",
    tables: [
      {
        title: "Fundamental Boolean Algebra Postulates",
        headers: ["Law Name", "AND Form (Dual)", "OR Form", "Explanation"],
        rows: [
          ["De Morgan's First Law", "(A + B)' = A' · B'", "(A · B)' = A' + B'", "Negation of sum equals product of negations"],
          ["Involution Law", "(A')' = A", "(A')' = A", "Double negation returns original variable"],
          ["Idempotent Law", "A · A = A", "A + A = A", "Repeated application has no effect"],
          ["Distributive Law", "A · (B + C) = A·B + A·C", "A + (B · C) = (A + B)·(A + C)", "Crucial: OR distributes over AND in Boolean logic!"],
          ["Absorption Law", "A · (A + B) = A", "A + (A · B) = A", "Absorbs secondary term entirely"],
          ["Dominance Law", "A · 0 = 0", "A + 1 = 1", "Dominant null element"],
          ["Identity Law", "A · 1 = A", "A + 0 = A", "Neutral identity element"]
        ]
      },
      {
        title: "Minimum Universal Gates Count Required",
        headers: ["Target Logic Function", "Min NAND Gates Required", "Min NOR Gates Required"],
        rows: [
          ["NOT Gate", "1", "1"],
          ["AND Gate", "2", "3"],
          ["OR Gate", "3", "2"],
          ["XOR Gate", "4", "5"],
          ["XNOR Gate", "5", "4"]
        ]
      }
    ],
    tips: [
      "To obtain the Dual of a Boolean expression: Swap AND (·) with OR (+) and swap 0 with 1, leaving variable complements UNCHANGED.",
      "2's Complement of a binary number = 1's Complement + 1. Shortcut: Traverse from right to left, copy bits as-is up to first '1', then flip all remaining bits.",
      "Range of n-bit 2's complement signed integer is -2^(n - 1) to +(2^(n - 1) - 1). For 8 bits: -128 to +127."
    ]
  },
  {
    id: "programming_oops_python",
    category: "programming",
    categoryName: "Programming (C++ & Python)",
    categoryHindi: "प्रोग्रामिंग (C++ एवं पाइथन)",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    title: "OOPs Concepts, C++ Virtual Functions & Python Mutability",
    titleHindi: "OOPs सिद्धांत, C++ वर्चुअल फंक्शन्स और पाइथन डेटा प्रकार",
    summary: "Object-oriented pillars, polymorphism mechanisms in C++, and Python mutable vs immutable types.",
    tables: [
      {
        title: "Object-Oriented Programming (OOP) Pillars",
        headers: ["Concept", "Definition", "Implementation Mechanism"],
        rows: [
          ["Encapsulation", "Binding code and data into a single unit; hiding internal state", "Classes with private / protected access specifiers"],
          ["Abstraction", "Displaying only essential features while hiding background details", "Abstract base classes, Pure virtual functions (`= 0`)"],
          ["Inheritance", "Deriving new classes from existing classes for code reusability", "Single, Multiple, Multilevel, Hierarchical, Hybrid inheritance"],
          ["Polymorphism", "Ability of a message/call to be displayed in multiple forms", "Compile-time (Overloading) vs Run-time (Virtual functions)"]
        ]
      },
      {
        title: "Python Built-in Data Types: Mutability Cheat Sheet",
        headers: ["Data Type", "Mutability", "Syntax / Constructor", "Hashable (Dictionary Key?)"],
        rows: [
          ["int / float / bool", "Immutable", "42, 3.14, True", "Yes"],
          ["str (String)", "Immutable", "'Bihar STET', \"CS\"", "Yes"],
          ["tuple", "Immutable", "(1, 2, 'STET')", "Yes (if all elements hashable)"],
          ["frozenset", "Immutable", "frozenset([1, 2, 3])", "Yes"],
          ["list", "Mutable", "[1, 'DSA', 3.14]", "No"],
          ["dict", "Mutable", "{'code': 226, 'subject': 'CS'}", "No"],
          ["set", "Mutable", "{1, 2, 3, 4}", "No"]
        ]
      }
    ],
    tips: [
      "In C++, a class containing at least one Pure Virtual Function (`virtual void solve() = 0;`) is an ABSTRACT CLASS and cannot be directly instantiated.",
      "In Python, negative slicing indices count backwards from end: `s[-1]` is the last character, `s[::-1]` reverses string.",
      "Default constructor is automatically synthesized by C++ compiler ONLY if NO user-defined constructor is declared."
    ]
  },
  {
    id: "art_of_teaching_pedagogy",
    category: "pedagogy",
    categoryName: "Art of Teaching & Pedagogy",
    categoryHindi: "शिक्षण कला एवं शिक्षाशास्त्र (30 अंक अनिवार्य)",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>`,
    title: "Bloom's Taxonomy, Piaget, Vygotsky & NEP 2020",
    titleHindi: "ब्लूम टैक्सोनॉमी, पियाजे, वायगोत्स्की और NEP 2020",
    summary: "Compulsory 30-mark section breakdown: cognitive levels, developmental stages, and educational policies.",
    tables: [
      {
        title: "Bloom's Revised Taxonomy (Anderson & Krathwohl 2001)",
        headers: ["Level #", "Cognitive Dimension", "Action Verbs", "Classroom Outcome"],
        rows: [
          ["1 (Lowest)", "Remembering", "Define, Recall, List, Identify, Name", "Retrieving relevant knowledge from long-term memory"],
          ["2", "Understanding", "Explain, Summarize, Classify, Translate", "Constructing meaning from instructional messages"],
          ["3", "Applying", "Execute, Implement, Solve, Demonstrate", "Using procedures to solve a given problem"],
          ["4", "Analyzing", "Differentiate, Organize, Deconstruct, Relate", "Breaking material into parts and identifying relationships"],
          ["5", "Evaluating", "Critique, Judge, Justify, Defend, Assess", "Making judgments based on internal/external criteria"],
          ["6 (Highest)", "Creating", "Design, Construct, Formulate, Author, Plan", "Reorganizing elements into a novel coherent structure"]
        ]
      },
      {
        title: "Jean Piaget: 4 Stages of Cognitive Development",
        headers: ["Stage", "Age Group", "Hallmark Milestone", "Typical Behavior"],
        rows: [
          ["Sensorimotor", "0 – 2 Years", "Object Permanence", "Learning through sensory observation and physical reflexes"],
          ["Preoperational", "2 – 7 Years", "Egocentrism & Symbolic Play", "Animism; lack of conservation ability (Centration)"],
          ["Concrete Operational", "7 – 11 Years", "Conservation & Reversibility", "Logical thinking about physical objects; classification"],
          ["Formal Operational", "11+ Years (Adolescence)", "Abstract & Hypothetical Reasoning", "Deductive reasoning, metacognition, propositional logic"]
        ]
      },
      {
        title: "National Education Policy (NEP 2020) 5+3+3+4 Curricular Structure",
        headers: ["Pedagogical Stage", "Age Range", "School Classes", "Curricular Focus"],
        rows: [
          ["Foundational Stage (5 Yrs)", "Ages 3 – 8", "3 Yrs Anganwadi/Pre-school + Classes 1 & 2", "Play-based, flexible, multilevel activity learning (FLN)"],
          ["Preparatory Stage (3 Yrs)", "Ages 8 – 11", "Classes 3, 4 & 5", "Discovery learning, reading, writing, numbers, art, science"],
          ["Middle Stage (3 Yrs)", "Ages 11 – 14", "Classes 6, 7 & 8", "Experiential learning in sciences, math, arts, coding introduced"],
          ["Secondary Stage (4 Yrs)", "Ages 14 – 18", "Classes 9, 10, 11 & 12", "Multidisciplinary study, critical thinking, flexibility, choice"]
        ]
      }
    ],
    tips: [
      "Vygotsky's ZPD (Zone of Proximal Development) is the gap between what a learner can do independently and what they can achieve with guidance (Scaffolding) from a More Knowledgeable Other (MKO).",
      "Formative Assessment is assessment FOR learning (continuous, diagnostic, ongoing feedback); Summative Assessment is assessment OF learning (term-end evaluation, grading).",
      "Micro-teaching cycle (Allen & Ryan): Plan → Teach (6 min) → Feedback (6 min) → Re-plan (12 min) → Re-teach (6 min) → Re-feedback (6 min) = Total 36 Minutes in Indian standard."
    ]
  }
];
