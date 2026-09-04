# Comprehensive Master Question Pool for Bihar STET Paper II Computer Science
# Covering all 15 Computer Science Syllabus Units, Art of Teaching, and General Skills.

CS_QUESTION_POOL = [
    # Unit 1: Digital Logic
    {
        "topic": "Digital Logic",
        "question": "What is the simplified expression for the Boolean function F(A, B, C) = Σm(1, 3, 5, 7) using Boolean algebra or K-Map?",
        "options": {"A": "A", "B": "B", "C": "C", "D": "A'B'"},
        "correctAnswer": "C",
        "explanation": "Minterms 1 (001), 3 (011), 5 (101), 7 (111) group into a 4-cell quad in a 3-variable K-Map. In these terms, A and B both vary (0 and 1), while C is constant at 1. Hence, the minimized SOP term is C."
    },
    {
        "topic": "Digital Logic",
        "question": "How many select lines are required for a 64-to-1 Multiplexer (MUX)?",
        "options": {"A": "4", "B": "5", "C": "6", "D": "8"},
        "correctAnswer": "C",
        "explanation": "For a 2ⁿ-to-1 multiplexer, exactly n select lines are required. Since 64 = 2⁶, n = 6 select lines are needed to address all 64 input lines."
    },
    {
        "topic": "Digital Logic",
        "question": "In a J-K flip flop, what condition produces the 'Toggle' output mode?",
        "options": {"A": "J = 0, K = 0", "B": "J = 0, K = 1", "C": "J = 1, K = 0", "D": "J = 1, K = 1"},
        "correctAnswer": "D",
        "explanation": "In a JK flip-flop: When J=0, K=0 -> No change (Memory); J=0, K=1 -> Reset (Q=0); J=1, K=0 -> Set (Q=1); J=1, K=1 -> Toggle (Q(t+1) = Q'(t))."
    },
    {
        "topic": "Digital Logic",
        "question": "Which of the following logic families exhibits the highest switching speed and lowest propagation delay?",
        "options": {"A": "TTL (Transistor-Transistor Logic)", "B": "ECL (Emitter-Coupled Logic)", "C": "CMOS", "D": "NMOS"},
        "correctAnswer": "B",
        "explanation": "ECL (Emitter-Coupled Logic) operates its transistors in the non-saturated active region rather than saturation, eliminating storage time delay and achieving propagation delays below 1 nanosecond (fastest among conventional families)."
    },
    {
        "topic": "Digital Logic",
        "question": "An 8-bit digital-to-analog converter (DAC) has a reference voltage of 5V. What is the approximate resolution (step size)?",
        "options": {"A": "19.5 mV", "B": "39.1 mV", "C": "9.8 mV", "D": "62.5 mV"},
        "correctAnswer": "A",
        "explanation": "Resolution = V_ref / (2ⁿ - 1) = 5V / (2⁸ - 1) = 5V / 255 ≈ 19.6 mV (or 5V / 256 ≈ 19.53 mV)."
    },
    {
        "topic": "Digital Logic",
        "question": "What is the canonical representation form that expresses a Boolean function as a product of sum terms called?",
        "options": {"A": "Minterm form", "B": "Maxterm / POS form", "C": "Dual form", "D": "Disjunctive Normal Form"},
        "correctAnswer": "B",
        "explanation": "Product of Sums (POS) expresses a logic function as the AND combination (product) of OR terms (sums/maxterms), denoted by ΠM."
    },
    {
        "topic": "Digital Logic",
        "question": "In a programmable logic array (PLA), which gate arrays are programmable?",
        "options": {"A": "AND array is fixed, OR array is programmable", "B": "Both AND array and OR array are programmable", "C": "AND array is programmable, OR array is fixed", "D": "Neither array is programmable"},
        "correctAnswer": "B",
        "explanation": "In a PLA, BOTH the AND array and the OR array are programmable. (In a PAL, the AND array is programmable while the OR array is fixed; in a PROM, the AND array is fixed while the OR array is programmable)."
    },

    # Unit 2: COA
    {
        "topic": "Computer Organization & Architecture",
        "question": "What is the maximum addressable memory capacity of a CPU with a 32-bit address bus and byte-addressable architecture?",
        "options": {"A": "1 GB", "B": "2 GB", "C": "4 GB", "D": "8 GB"},
        "correctAnswer": "C",
        "explanation": "A 32-bit address bus can generate 2³² unique addresses. With byte addressability (1 byte per address), total addressable space = 2³² bytes = 4,294,967,296 bytes = 4 GB."
    },
    {
        "topic": "Computer Organization & Architecture",
        "question": "In 8086 microprocessor architecture, which register holds the offset address of the instruction to be fetched from the code segment?",
        "options": {"A": "Stack Pointer (SP)", "B": "Instruction Pointer (IP)", "C": "Base Pointer (BP)", "D": "Source Index (SI)"},
        "correctAnswer": "B",
        "explanation": "The Instruction Pointer (IP) holds the 16-bit offset of the next instruction within the Code Segment (CS). Physical address = (CS × 16) + IP."
    },
    {
        "topic": "Computer Organization & Architecture",
        "question": "Which cache mapping technique allows a main memory block to be loaded into any available cache block line?",
        "options": {"A": "Direct Mapping", "B": "Fully Associative Mapping", "C": "Set-Associative Mapping", "D": "Sector Mapping"},
        "correctAnswer": "B",
        "explanation": "In Fully Associative Mapping, a memory block can be placed in any cache line. It offers the lowest conflict miss rate but requires an associative (content-addressable) comparison across all cache tags."
    },
    {
        "topic": "Computer Organization & Architecture",
        "question": "In Booth's multiplication algorithm, what action is performed when the two least significant multiplier bits (Q0, Q-1) are '10'?",
        "options": {"A": "Add multiplicand to accumulator and shift", "B": "Subtract multiplicand from accumulator and arithmetic shift right", "C": "Arithmetic shift right only", "D": "Rotate accumulator left"},
        "correctAnswer": "B",
        "explanation": "In Booth's algorithm: '00' or '11' -> Shift right only; '01' -> Add multiplicand and shift right; '10' -> Subtract multiplicand (add 2's complement) and shift right."
    },
    {
        "topic": "Computer Organization & Architecture",
        "question": "Which of the following is a non-volatile optical or semiconductor memory that can be erased electrically in flash blocks?",
        "options": {"A": "SRAM", "B": "DRAM", "C": "EEPROM / Flash Memory", "D": "Mask ROM"},
        "correctAnswer": "C",
        "explanation": "EEPROM (Electrically Erasable Programmable ROM) and Flash memory can be erased and reprogrammed electrically at the block or byte level without UV exposure."
    },
    {
        "topic": "Computer Organization & Architecture",
        "question": "What is the Excess-3 code representation of the decimal digit 7?",
        "options": {"A": "0111", "B": "1010", "C": "1001", "D": "0100"},
        "correctAnswer": "B",
        "explanation": "Excess-3 code is obtained by adding 3 (0011) to the decimal value: 7 + 3 = 10, which in 4-bit binary is 1010."
    },

    # Unit 3: Programming & Data Structures
    {
        "topic": "Programming & Data Structures",
        "question": "In a row-major 2D array A[1..M, 1..N] stored starting at base address B with element size S, what is the address formula for element A[i, j]?",
        "options": {"A": "B + [(i - 1) * N + (j - 1)] * S", "B": "B + [(j - 1) * M + (i - 1)] * S", "C": "B + [i * N + j] * S", "D": "B + [(i - 1) + (j - 1) * N] * S"},
        "correctAnswer": "A",
        "explanation": "In row-major order, rows are placed contiguously in memory. To reach row i, you skip (i - 1) complete rows of N elements each, and then move (j - 1) elements into row i. Hence: Address = Base + [((i - 1) * N) + (j - 1)] * S."
    },
    {
        "topic": "Programming & Data Structures",
        "question": "What is the equivalent postfix expression for the infix expression: A + B * C - D / E?",
        "options": {"A": "A B C * + D E / -", "B": "A B + C * D - E /", "C": "A B C * D E / - +", "D": "+ A * B C - / D E"},
        "correctAnswer": "A",
        "explanation": "Operator precedence: * and / have higher precedence than + and -. 1. (B * C) -> B C *; 2. A + (B C *) -> A B C * +; 3. (D / E) -> D E /; 4. (A B C * +) - (D E /) -> A B C * + D E / -."
    },
    {
        "topic": "Programming & Data Structures",
        "question": "What is the time complexity to search for a key in a balanced AVL tree with n nodes?",
        "options": {"A": "O(1)", "B": "O(log n)", "C": "O(n)", "D": "O(n log n)"},
        "correctAnswer": "B",
        "explanation": "An AVL tree is strictly balanced with maximum height bounded by 1.44 log₂(n). Therefore, search, insertion, and deletion operations all take guaranteed O(log n) time."
    },
    {
        "topic": "Programming & Data Structures",
        "question": "Which data structure is fundamentally used for the Breadth-First Search (BFS) graph traversal algorithm?",
        "options": {"A": "Stack", "B": "Queue", "C": "Priority Queue", "D": "Binary Tree"},
        "correctAnswer": "B",
        "explanation": "BFS visits vertices in order of their distance from the source level-by-level (FIFO), which is implemented using a Queue. (DFS uses a Stack)."
    },
    {
        "topic": "Programming & Data Structures",
        "question": "What is the number of edges in a tree with n vertices?",
        "options": {"A": "n", "B": "n - 1", "C": "n + 1", "D": "2n - 1"},
        "correctAnswer": "B",
        "explanation": "By mathematical definition, any connected acyclic graph (tree) with n vertices contains exactly (n - 1) edges."
    },
    {
        "topic": "Programming & Data Structures",
        "question": "In a hash table of size 10 using open addressing with linear probing and hash function h(k) = k mod 10, where will key 42 be placed if keys 12, 22, and 32 are already inserted?",
        "options": {"A": "Index 2", "B": "Index 3", "C": "Index 4", "D": "Index 5"},
        "correctAnswer": "D",
        "explanation": "h(12)=2 (stored at 2); h(22)=2 -> collision -> stored at 3; h(32)=2 -> collisions at 2, 3 -> stored at 4; h(42)=2 -> collisions at 2, 3, 4 -> stored at index 5."
    },

    # Unit 4: Algorithms
    {
        "topic": "Algorithms",
        "question": "What is the solution of the recurrence relation T(n) = 2T(n/2) + n by Master Theorem?",
        "options": {"A": "Θ(n)", "B": "Θ(n log n)", "C": "Θ(n²)", "D": "Θ(log n)"},
        "correctAnswer": "B",
        "explanation": "For T(n) = aT(n/b) + f(n): a = 2, b = 2, f(n) = n. Here n^(log_b(a)) = n^(log₂2) = n¹. Since f(n) = Θ(n^(log_b(a))), Case 2 of Master Theorem applies: T(n) = Θ(n log n) (Merge Sort recurrence)."
    },
    {
        "topic": "Algorithms",
        "question": "Which algorithm finds the shortest path between all pairs of vertices in a weighted graph in O(V³) time?",
        "options": {"A": "Dijkstra's Algorithm", "B": "Bellman-Ford Algorithm", "C": "Floyd-Warshall Algorithm", "D": "Kruskal's Algorithm"},
        "correctAnswer": "C",
        "explanation": "The Floyd-Warshall algorithm uses dynamic programming to compute the all-pairs shortest paths in a directed weighted graph with time complexity Θ(V³)."
    },
    {
        "topic": "Algorithms",
        "question": "What algorithmic paradigm is employed in solving the 8-Queens problem?",
        "options": {"A": "Greedy Method", "B": "Backtracking", "C": "Dynamic Programming", "D": "Divide and Conquer"},
        "correctAnswer": "B",
        "explanation": "The 8-Queens problem is solved using Backtracking: placing queens row by row and abandoning (backtracking from) non-viable partial solutions whenever a conflict arises."
    },
    {
        "topic": "Algorithms",
        "question": "Which of the following problems is known to be NP-Complete?",
        "options": {"A": "Shortest Path in Directed Acyclic Graph", "B": "Minimum Spanning Tree", "C": "Traveling Salesperson Decision Problem", "D": "Breadth First Search"},
        "correctAnswer": "C",
        "explanation": "The Traveling Salesperson decision problem (TSP), Boolean Satisfiability (SAT), and Vertex Cover are classic NP-Complete problems."
    },

    # Unit 5: Operating Systems
    {
        "topic": "Operating Systems",
        "question": "What is the state transition that occurs when a running process requires an I/O operation?",
        "options": {"A": "Running to Ready", "B": "Running to Waiting (Blocked)", "C": "Waiting to Ready", "D": "Ready to Running"},
        "correctAnswer": "B",
        "explanation": "When a process requests an I/O operation or an event, the CPU cannot continue executing it until the I/O completes. The OS transitions the process from Running to Waiting (Blocked) state."
    },
    {
        "topic": "Operating Systems",
        "question": "Banker's Algorithm is used in operating systems for:",
        "options": {"A": "Deadlock Prevention", "B": "Deadlock Avoidance", "C": "Deadlock Recovery", "D": "Mutual Exclusion"},
        "correctAnswer": "B",
        "explanation": "Dijkstra's Banker's Algorithm dynamically tests resource allocation requests to ensure the system will always remain in a 'Safe State', avoiding deadlocks."
    },
    {
        "topic": "Operating Systems",
        "question": "In paging memory management, where is the Translation Lookaside Buffer (TLB) located?",
        "options": {"A": "On the hard disk", "B": "In main memory RAM", "C": "Inside the CPU Memory Management Unit (MMU) hardware cache", "D": "In secondary optical storage"},
        "correctAnswer": "C",
        "explanation": "The TLB is a high-speed associative hardware cache located directly within or adjacent to the CPU's MMU to store recent virtual-to-physical page table translations."
    },
    {
        "topic": "Operating Systems",
        "question": "What is the phenomenon where adding more page frames to a process increases the number of page faults called?",
        "options": {"A": "Thrashing", "B": "Belady's Anomaly", "C": "Fragmentation", "D": "Starvation"},
        "correctAnswer": "B",
        "explanation": "Belady's Anomaly occurs primarily in FIFO page replacement, where increasing the number of allocated physical frames leads to an increased number of page faults for certain reference strings."
    },
    {
        "topic": "Operating Systems",
        "question": "Which Unix command is used to change the access permissions of a file?",
        "options": {"A": "chown", "B": "chmod", "C": "chgrp", "D": "grep"},
        "correctAnswer": "B",
        "explanation": "'chmod' (change mode) modifies the read, write, and execute permissions of files/directories in Unix/Linux. ('chown' changes file owner)."
    },

    # Unit 6: DBMS
    {
        "topic": "Database Management Systems",
        "question": "In relational database design, Boy-Codd Normal Form (BCNF) requires that for every non-trivial functional dependency X -> Y:",
        "options": {"A": "Y must be a prime attribute", "B": "X must be a Super Key", "C": "X and Y must be atomic", "D": "Y must not depend on X"},
        "correctAnswer": "B",
        "explanation": "BCNF is a stricter version of 3NF. It requires that for every non-trivial functional dependency X -> Y, the determinant X must be a Super Key of the relation."
    },
    {
        "topic": "Database Management Systems",
        "question": "Which SQL command belongs to the Data Control Language (DCL) category?",
        "options": {"A": "SELECT", "B": "GRANT", "C": "ALTER", "D": "UPDATE"},
        "correctAnswer": "B",
        "explanation": "DCL commands control privileges and access in the database. GRANT (gives user access) and REVOKE (withdraws access) are the primary DCL commands."
    },
    {
        "topic": "Database Management Systems",
        "question": "In the Two-Phase Locking (2PL) protocol, what happens during the 'Growing Phase'?",
        "options": {"A": "Locks are acquired and no locks can be released", "B": "Locks are released and no locks can be acquired", "C": "Transactions are committed", "D": "Data items are deleted"},
        "correctAnswer": "A",
        "explanation": "Under 2PL: Phase 1 (Growing Phase): A transaction may acquire locks, but cannot release any lock. Phase 2 (Shrinking Phase): A transaction may release locks, but cannot acquire any new locks."
    },
    {
        "topic": "Database Management Systems",
        "question": "What is the primary purpose of the Foreign Key in a relational table?",
        "options": {"A": "To ensure unique values in the current table", "B": "To establish referential integrity between two related tables", "C": "To prevent NULL values in a column", "D": "To speed up query sort orders"},
        "correctAnswer": "B",
        "explanation": "A Foreign Key points to the Primary Key of another table, ensuring Referential Integrity by restricting insertions or deletions that would create orphan records."
    },

    # Unit 7: Computer Networks
    {
        "topic": "Computer Networks",
        "question": "What is the maximum theoretical throughput efficiency of Pure ALOHA?",
        "options": {"A": "18.4%", "B": "36.8%", "C": "50%", "D": "100%"},
        "correctAnswer": "A",
        "explanation": "Pure ALOHA maximum efficiency = 1 / (2e) ≈ 18.4% (at G = 0.5). Slotted ALOHA doubles this efficiency to 1 / e ≈ 36.8% (at G = 1.0)."
    },
    {
        "topic": "Computer Networks",
        "question": "What is the CIDR prefix for a subnet with a subnet mask of 255.255.255.192?",
        "options": {"A": "/24", "B": "/25", "C": "/26", "D": "/27"},
        "correctAnswer": "C",
        "explanation": "255.255.255.192 in binary: 8 + 8 + 8 + 2 (11000000) = 26 contiguous network bits. Hence the CIDR prefix notation is /26."
    },
    {
        "topic": "Computer Networks",
        "question": "Which layer of the OSI reference model performs data encryption, decryption, compression, and character encoding conversions?",
        "options": {"A": "Application Layer", "B": "Presentation Layer", "C": "Session Layer", "D": "Data Link Layer"},
        "correctAnswer": "B",
        "explanation": "The Presentation Layer (Layer 6) formats and translates data syntax and semantics, handling encryption/decryption (SSL/TLS) and compression."
    },
    {
        "topic": "Computer Networks",
        "question": "Which of the following is a Distance Vector routing protocol that uses hop count as its sole metric with a maximum limit of 15 hops?",
        "options": {"A": "OSPF", "B": "RIP (Routing Information Protocol)", "C": "BGP", "D": "IS-IS"},
        "correctAnswer": "B",
        "explanation": "RIP is an interior gateway distance-vector protocol using hop count (1 to 15 hops; 16 signifies unreachable infinity) to prevent routing loops."
    },

    # Unit 8: Software Engineering
    {
        "topic": "Software Engineering",
        "question": "In software metrics, what does 'Function Point' (FP) primarily measure?",
        "options": {"A": "The physical lines of code compiled", "B": "The functional size and complexity of software from the user's perspective", "C": "The execution speed of the program in nanoseconds", "D": "The salary costs of programmers"},
        "correctAnswer": "B",
        "explanation": "Albrecht's Function Point (FP) metric quantifies software functionality based on 5 components: External Inputs, External Outputs, External Inquiries, Internal Logical Files, and External Interface Files."
    },
    {
        "topic": "Software Engineering",
        "question": "Which level of coupling is considered the MOST desirable (weakest/cleanest) in structured software design?",
        "options": {"A": "Content Coupling", "B": "Common Coupling", "C": "Control Coupling", "D": "Data Coupling"},
        "correctAnswer": "D",
        "explanation": "Good software engineering strives for Low Coupling and High Cohesion. Data Coupling (modules share only simple data parameters) is the cleanest, least dependent coupling."
    },
    {
        "topic": "Software Engineering",
        "question": "What type of testing tests whether recent code changes have caused unintended side effects in existing functionality?",
        "options": {"A": "Unit Testing", "B": "Regression Testing", "C": "Alpha Testing", "D": "Stress Testing"},
        "correctAnswer": "B",
        "explanation": "Regression testing reruns existing test suites after bug fixes or modifications to confirm that unchanged features continue to function properly."
    },

    # Unit 9: OOP
    {
        "topic": "Object Oriented Programming",
        "question": "In C++, which keyword is used to resolve the 'Diamond Problem' of duplicate base class instances in multiple inheritance?",
        "options": {"A": "abstract", "B": "friend", "C": "virtual", "D": "static"},
        "correctAnswer": "C",
        "explanation": "Declaring the intermediate base classes with 'virtual' inheritance (e.g., class B : virtual public A) ensures only one shared instance of class A is included in derived class D."
    },
    {
        "topic": "Object Oriented Programming",
        "question": "What is the output of the Python expression: [x**2 for x in range(5) if x % 2 == 0]?",
        "options": {"A": "[0, 1, 4, 9, 16]", "B": "[0, 4, 16]", "C": "[1, 9]", "D": "[4, 16]"},
        "correctAnswer": "B",
        "explanation": "range(5) produces 0, 1, 2, 3, 4. The filter 'x % 2 == 0' selects 0, 2, 4. The squares are 0²=0, 2²=4, 4²=16. The result is [0, 4, 16]."
    },
    {
        "topic": "Object Oriented Programming",
        "question": "Which of the following members cannot be inherited by a derived class in C++?",
        "options": {"A": "Protected variables", "B": "Public methods", "C": "Constructors and Destructors", "D": "Virtual functions"},
        "correctAnswer": "C",
        "explanation": "Constructors and Destructors are specific to the class they create and destroy; they are not inherited by derived classes, though base constructors are called during derived object initialization."
    },

    # Unit 10: Web Development
    {
        "topic": "Web Development",
        "question": "In CSS, what is the default value of the 'position' property of HTML elements?",
        "options": {"A": "relative", "B": "absolute", "C": "static", "D": "fixed"},
        "correctAnswer": "C",
        "explanation": "The default value of 'position' is 'static'. Static elements flow naturally in the normal document flow and ignore top, right, bottom, and left properties."
    },
    {
        "topic": "Web Development",
        "question": "Which PHP function is used to establish a connection to a MySQL database?",
        "options": {"A": "mysql_open()", "B": "mysqli_connect()", "C": "db_connect()", "D": "sql_link()"},
        "correctAnswer": "B",
        "explanation": "mysqli_connect(host, user, password, dbname) is standard PHP function used to open a connection to a MySQL database server."
    },
    {
        "topic": "Web Development",
        "question": "In XML, an XML document that conforms strictly to its associated DTD or XML Schema is said to be:",
        "options": {"A": "Well-Formed", "B": "Valid", "C": "Normalized", "D": "Parsed"},
        "correctAnswer": "B",
        "explanation": "An XML document with correct syntax is 'Well-Formed'. If it additionally conforms to the rules, elements, and attributes specified in its DTD or Schema, it is 'Valid'."
    },

    # Unit 11: TOC
    {
        "topic": "Theory of Computation",
        "question": "What is the language recognized by a Deterministic Finite Automaton (DFA) that accepts strings over {0, 1} ending with '00'?",
        "options": {"A": "Context Free Language", "B": "Regular Language", "C": "Recursively Enumerable only", "D": "Non-computable Language"},
        "correctAnswer": "B",
        "explanation": "Any language that can be recognized by a Finite Automaton (DFA or NFA) is by definition a Regular Language, represented by regular expression (0 + 1)*00."
    },
    {
        "topic": "Theory of Computation",
        "question": "Arden's Theorem states that if P and Q are regular expressions over Σ and P does not contain ε, then the equation R = Q + RP has a unique solution given by:",
        "options": {"A": "R = Q*P", "B": "R = QP*", "C": "R = P*Q*", "D": "R = Q+P*"},
        "correctAnswer": "B",
        "explanation": "Arden's Theorem specifies: R = Q + RP has the unique solution R = QP*."
    },
    {
        "topic": "Theory of Computation",
        "question": "Which of the following grammars is in Chomsky Normal Form (CNF)?",
        "options": {"A": "S -> aB | b", "B": "S -> AB | a", "C": "S -> ABC | a", "D": "S -> a | ε"},
        "correctAnswer": "B",
        "explanation": "In Chomsky Normal Form (CNF), all production rules must be of the form A -> BC (two non-terminals) or A -> a (single terminal). Hence, S -> AB | a is in CNF."
    },

    # Unit 12: IoT
    {
        "topic": "Internet of Things",
        "question": "Which lightweight application-layer publish/subscribe messaging protocol is widely used in IoT over TCP?",
        "options": {"A": "HTTP", "B": "MQTT", "C": "FTP", "D": "SNMP"},
        "correctAnswer": "B",
        "explanation": "MQTT (Message Queuing Telemetry Transport) is an extremely lightweight publish/subscribe network protocol designed for constrained IoT devices and low-bandwidth networks."
    },
    {
        "topic": "Internet of Things",
        "question": "In the Web of Things (WoT), smart physical devices are exposed and controlled using standard web technologies primarily via:",
        "options": {"A": "RESTful Web APIs and JSON", "B": "Raw binary serial ports", "C": "Assembly instructions", "D": "Modem dial-ups"},
        "correctAnswer": "A",
        "explanation": "The Web of Things (WoT) integrates smart devices directly into the World Wide Web by using REST APIs, HTTP, WebSockets, and structured JSON data."
    },

    # Unit 13: AI
    {
        "topic": "Artificial Intelligence",
        "question": "In First-Order Predicate Logic, which inference rule derives C from premises (A ∨ B) and (¬A ∨ C)?",
        "options": {"A": "Modus Ponens", "B": "Resolution", "C": "Universal Instantiation", "D": "Unification"},
        "correctAnswer": "B",
        "explanation": "Resolution refutation states: (A ∨ B) and (¬A ∨ C) yields the resolvent (B ∨ C). If B is false, it yields C."
    },
    {
        "topic": "Artificial Intelligence",
        "question": "Which type of search algorithm always expands the lowest cost leaf node first where cost is f(n) = g(n) + h(n)?",
        "options": {"A": "Greedy Best-First Search", "B": "A* Search", "C": "Depth First Search", "D": "Breadth First Search"},
        "correctAnswer": "B",
        "explanation": "A* search evaluates nodes by combining g(n) (cost from start to current node) and h(n) (estimated heuristic cost from current node to goal)."
    },

    # Unit 14: E-Commerce
    {
        "topic": "E-Commerce",
        "question": "Which of the following encryption protocols provides transport-layer security for credit card transactions over the web?",
        "options": {"A": "SSL / TLS", "B": "FTP", "C": "TELNET", "D": "TFTP"},
        "correctAnswer": "A",
        "explanation": "SSL (Secure Sockets Layer) and its modern successor TLS (Transport Layer Security) encrypt browser-server communications (HTTPS) to safeguard financial and personal data."
    },
    {
        "topic": "E-Commerce",
        "question": "The electronic document interchange standard developed by ANSI for business transactions is called:",
        "options": {"A": "ANSI X12", "B": "ISO 9001", "C": "IEEE 802.3", "D": "RFC 2822"},
        "correctAnswer": "A",
        "explanation": "ANSI ASC X12 is the official American National Standards Institute standard for Electronic Data Interchange (EDI) used across retail, finance, and transport."
    },

    # Unit 15: Multimedia
    {
        "topic": "Multimedia",
        "question": "According to the Nyquist-Shannon sampling theorem, to accurately reconstruct an audio signal with frequencies up to 20 kHz, what is the minimum required sampling rate?",
        "options": {"A": "10 kHz", "B": "20 kHz", "C": "40 kHz", "D": "80 kHz"},
        "correctAnswer": "C",
        "explanation": "Nyquist rate = 2 × f_max. To capture frequencies up to 20,000 Hz, the sampling frequency must be at least 2 × 20 kHz = 40 kHz (Compact Discs use 44.1 kHz)."
    },
    {
        "topic": "Multimedia",
        "question": "Which image compression standard utilizes Discrete Cosine Transform (DCT) and is lossy for digital photography?",
        "options": {"A": "PNG", "B": "JPEG", "C": "BMP", "D": "SVG"},
        "correctAnswer": "B",
        "explanation": "JPEG (Joint Photographic Experts Group) uses Discrete Cosine Transform (DCT) lossy compression to discard high-frequency color variations less noticeable to the human eye."
    }
]

PEDAGOGY_QUESTION_POOL = [
    {
        "question": "In Bloom's revised taxonomy (2001), which objective level is demonstrated when a student creates a novel computer algorithm or software design?",
        "options": {"A": "Remembering", "B": "Applying", "C": "Analyzing", "D": "Creating"},
        "correctAnswer": "D",
        "explanation": "'Creating' is the highest level of cognitive learning in Bloom's revised taxonomy, involving putting elements together to form a coherent whole or reorganizing into a new pattern."
    },
    {
        "question": "Which method of teaching was originated by H.E. Armstrong, encouraging students to act as independent discoverers of truth?",
        "options": {"A": "Lecture Method", "B": "Heuristic Method", "C": "Demonstration Method", "D": "Textbook Method"},
        "correctAnswer": "B",
        "explanation": "The Heuristic Method (from Greek 'heuriskein' meaning 'to find or discover') was propounded by Professor H.E. Armstrong, placing the learner in the position of an original discoverer."
    },
    {
        "question": "What is the recommended duration of the 'Teach' phase in a standard Indian microteaching cycle?",
        "options": {"A": "6 minutes", "B": "12 minutes", "C": "15 minutes", "D": "20 minutes"},
        "correctAnswer": "A",
        "explanation": "In the NCERT microteaching model: Teach = 6 min, Feedback = 6 min, Re-plan = 12 min, Re-teach = 6 min, Re-feedback = 6 min. Total = 36 minutes."
    },
    {
        "question": "Formative evaluation is primarily conducted to:",
        "options": {"A": "Award annual report card certificates", "B": "Rank students across the state", "C": "Provide continuous feedback to monitor learning progress during instruction", "D": "Select students for high school scholarships"},
        "correctAnswer": "C",
        "explanation": "Formative assessment ('assessment for learning') occurs ongoingly during the learning process to diagnose difficulties, provide timely feedback, and adapt instructional pace."
    },
    {
        "question": "According to the Herbartian model of lesson planning, what is the first formal step?",
        "options": {"A": "Presentation", "B": "Preparation (Introduction)", "C": "Generalization", "D": "Application"},
        "correctAnswer": "B",
        "explanation": "Herbart's 5 steps are: 1. Preparation (arousing interest and testing previous knowledge), 2. Presentation, 3. Association/Comparison, 4. Generalization, 5. Application."
    },
    {
        "question": "Which teaching aid is placed at the very base of Edgar Dale's 'Cone of Experience', providing the highest degree of direct learning?",
        "options": {"A": "Verbal Symbols", "B": "Direct Purposeful Experiences (Hands-on)", "C": "Motion Pictures", "D": "Visual Symbols"},
        "correctAnswer": "B",
        "explanation": "In Dale's Cone of Experience, 'Direct Purposeful Experiences' (real-life, direct hands-on sensory learning) lies at the foundation, giving the highest learning retention."
    },
    {
        "question": "Continuous and Comprehensive Evaluation (CCE) aims to assess:",
        "options": {"A": "Scholastic (academic) aspects only", "B": "Both Scholastic and Co-scholastic (holistic personal) aspects of student growth", "C": "Physical sports fitness only", "D": "Memorization of textbook terms"},
        "correctAnswer": "B",
        "explanation": "CCE covers both scholastic (cognitive/academic subjects) and co-scholastic domains (attitudes, values, creative arts, physical health, and social skills)."
    },
    {
        "question": "A teacher notices that a student is struggling with binary conversion due to weak fundamental division skills. The assessment used to locate this specific deficit is:",
        "options": {"A": "Placement Assessment", "B": "Diagnostic Assessment", "C": "Summative Assessment", "D": "Norm-Referenced Assessment"},
        "correctAnswer": "B",
        "explanation": "Diagnostic assessment pinpoints the specific root causes of persistent learning difficulties so teachers can administer appropriate remedial teaching."
    },
    {
        "question": "In teacher behavior, 'Positive Reinforcement' includes which of the following actions?",
        "options": {"A": "Praising a correct answer with 'Good' or an appreciative nod", "B": "Ridiculing student attempts", "C": "Ignoring students who ask questions", "D": "Assigning punitive homework"},
        "correctAnswer": "A",
        "explanation": "Positive reinforcement rewards desired behaviors (verbal praise, warm smile, encouraging gestures), strengthening student motivation and active classroom participation."
    },
    {
        "question": "Which model of curriculum construction focuses on the child's psychological needs, interests, abilities, and active learning rather than rigid rote content?",
        "options": {"A": "Subject-Centered Curriculum", "B": "Learner-Centered (Child-Centered) Curriculum", "C": "Teacher-Centered Curriculum", "D": "Exam-Oriented Curriculum"},
        "correctAnswer": "B",
        "explanation": "Learner-Centered curriculum design aligns learning activities with the child's developmental stages, curiosities, and personal growth, as endorsed by NEP 2020."
    }
]

GENERAL_QUESTION_POOL = [
    # GK
    {
        "topic": "General Knowledge",
        "question": "Which ancient university in Bihar was founded by King Dharmapala of the Pala dynasty in the 8th century CE?",
        "options": {"A": "Nalanda University", "B": "Vikramashila University", "C": "Odantapuri University", "D": "Taxila University"},
        "correctAnswer": "B",
        "explanation": "Vikramashila University was established by Pala Emperor Dharmapala at Antichak (Bhagalpur district, Bihar) as a premier Buddhist educational institution."
    },
    {
        "topic": "General Knowledge",
        "question": "Mahatma Gandhi's first civil disobedience movement in India, launched in 1917 to support indigo farmers, occurred in:",
        "options": {"A": "Kheda", "B": "Champaran, Bihar", "C": "Dandi", "D": "Bardoli"},
        "correctAnswer": "B",
        "explanation": "Champaran Satyagraha (1917) in Bihar was Gandhiji's first major satyagraha in India against the exploitative Tinkathia indigo cultivation system."
    },
    {
        "topic": "General Knowledge",
        "question": "Which Article of the Indian Constitution guarantees the 'Right to Equality before the Law'?",
        "options": {"A": "Article 14", "B": "Article 19", "C": "Article 21", "D": "Article 32"},
        "correctAnswer": "A",
        "explanation": "Article 14 states that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India."
    },

    # EVS
    {
        "topic": "Environmental Science",
        "question": "What is the primary cause of 'Eutrophication' in freshwater lakes and rivers?",
        "options": {"A": "Heavy oil spills from cargo ships", "B": "Excess runoff of agricultural fertilizers (nitrates and phosphates)", "C": "Ozone layer depletion", "D": "Acidic rain containing sulfuric acid"},
        "correctAnswer": "B",
        "explanation": "Eutrophication occurs when excess plant nutrients (nitrates and phosphates from fertilizers and sewage) stimulate massive algal blooms that deplete dissolved oxygen."
    },
    {
        "topic": "Environmental Science",
        "question": "According to Lindeman's Ten Percent Law in ecological energetics, how much energy is transferred from one trophic level to the next?",
        "options": {"A": "1%", "B": "10%", "C": "50%", "D": "90%"},
        "correctAnswer": "B",
        "explanation": "Lindeman's Efficiency Law states that only about 10% of the energy stored as organic matter at one trophic level is transferred to the next trophic level; the remaining 90% is lost as metabolic heat."
    },

    # Math
    {
        "topic": "Mathematical Aptitude",
        "question": "A shopkeeper buys an article for ₹500 and sells it for ₹650. What is his profit percentage?",
        "options": {"A": "20%", "B": "25%", "C": "30%", "D": "35%"},
        "correctAnswer": "C",
        "explanation": "Profit = Selling Price - Cost Price = 650 - 500 = ₹150. Profit Percentage = (Profit / CP) × 100 = (150 / 500) × 100 = 30%."
    },
    {
        "topic": "Mathematical Aptitude",
        "question": "If the ratio of two numbers is 3 : 5 and their sum is 120, what is the larger number?",
        "options": {"A": "45", "B": "65", "C": "75", "D": "80%"},
        "correctAnswer": "C",
        "explanation": "Total ratio units = 3 + 5 = 8 units. 1 unit = 120 / 8 = 15. The larger number = 5 × 15 = 75. (Smaller number is 3 × 15 = 45)."
    },

    # Reasoning
    {
        "topic": "Logical Reasoning",
        "question": "Complete the alphabetical series: B, D, G, K, P, ____?",
        "options": {"A": "T", "B": "U", "C": "V", "D": "W"},
        "correctAnswer": "C",
        "explanation": "Letter positions in alphabet: B(2) +2 -> D(4); D(4) +3 -> G(7); G(7) +4 -> K(11); K(11) +5 -> P(16); P(16) +6 -> V(22). The next letter is V."
    },
    {
        "topic": "Logical Reasoning",
        "question": "Statements: 1. Some pens are books. 2. All books are pencils. Conclusion: Some pens are pencils.",
        "options": {"A": "Definitely True", "B": "Definitely False", "C": "Probably True", "D": "Cannot be determined"},
        "correctAnswer": "A",
        "explanation": "The intersection of 'pens' and 'books' falls entirely within the set of 'pencils'. Thus, some pens must be pencils. The conclusion is Definitely True."
    }
]

print("Master Question Pool loaded successfully.")
