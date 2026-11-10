// Generated Question Paper Data
window.predicted_set3 = {
  "id": "predicted_set3",
  "title": "2026 Predicted Full Mock 3",
  "subtitle": "High-Yield Core Systems: Operating Systems, Computer Networks & DBMS",
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
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the 8-bit two's complement representation of decimal integer -123?",
      "question_hi": "दशमलव संख्या -123 का 8-बिट 2's पूरक बाइनरी निरूपण क्या होगा?",
      "options": {
        "A": "10000101",
        "B": "10000100",
        "C": "10000111",
        "D": "01111011"
      },
      "options_hi": {
        "A": "10000101",
        "B": "10000100",
        "C": "10000111",
        "D": "01111011"
      },
      "correctAnswer": "A",
      "explanation": "Binary of +123 is 01111011. 1's complement is 10000100. Adding 1 gives 2's complement = 10000101.",
      "explanation_hi": "+123 का बाइनरी 01111011 है। 1's पूरक = 10000100। 1 जोड़ने पर 2's पूरक = 10000101।"
    },
    {
      "id": 2,
      "questionNumber": 2,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is 'Thrashing' in an operating system virtual memory subsystem?",
      "question_hi": "ऑपरेटिंग सिस्टम वर्चुअल मेमोरी सबसिस्टम में 'थ्रैशिंग' (Thrashing) क्या है?",
      "options": {
        "A": "A state where the CPU spends significantly more time swapping pages in and out of disk than executing instructions",
        "B": "A process writing garbage data to unallocated heap memory",
        "C": "Rapid context switching between kernel threads without user input",
        "D": "Corrupted sectors detected across mirrored RAID volumes"
      },
      "options_hi": {
        "A": "वह स्थिति जहाँ CPU निर्देशों को निष्पादित करने की तुलना में डिस्क से पेजों को अंदर-बाहर स्वैप करने में बहुत अधिक समय व्यतीत करता है",
        "B": "एक प्रक्रिया जो अनिर्धारित हीप मेमोरी में गलत डेटा लिखती है",
        "C": "उपयोगकर्ता इनपुट के बिना कर्नेल थ्रेड्स के बीच तीव्र कंटेक्स्ट स्विचिंग",
        "D": "मिरर किए गए RAID वॉल्यूम में दूषित सेक्टरों का पता लगाना"
      },
      "correctAnswer": "A",
      "explanation": "Thrashing occurs when the degree of multiprogramming is too high and processes do not have enough physical frames to satisfy their working sets, causing continuous page faults and near-zero CPU throughput.",
      "explanation_hi": "थ्रैशिंग वह गंभीर स्थिति है जिसमें मेमोरी में अत्यधिक प्रक्रियाएं होने के कारण पेज फॉल्ट की दर इतनी अधिक हो जाती है कि ऑपरेटिंग सिस्टम अधिकांश समय पेज स्वैपिंग में ही व्यतीत करता है और CPU उपयोगिता शून्य के करीब गिर जाती है।"
    },
    {
      "id": 3,
      "questionNumber": 3,
      "section": "Computer Science",
      "topic": "Operating Systems",
      "topic_hi": "ऑपरेटिंग सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Banker's Algorithm for deadlock avoidance, a state is classified as 'Safe' if:",
      "question_hi": "डेडलॉक रोकथाम के लिए बैंकर एल्गोरिदम (Banker's Algorithm) में, किसी अवस्था को 'सुरक्षित' (Safe) के रूप में वर्गीकृत किया जाता है यदि:",
      "options": {
        "A": "There exists at least one execution sequence of all processes that allows each to finish without causing a deadlock",
        "B": "No process has requested more than half of available resources",
        "C": "All mutual exclusion semaphores are initialized to zero",
        "D": "The number of processes equals the number of resource types"
      },
      "options_hi": {
        "A": "सभी प्रक्रियाओं का कम से कम एक ऐसा निष्पादन क्रम मौजूद है जो प्रत्येक को डेडलॉक के बिना समाप्त होने की अनुमति देता है",
        "B": "किसी भी प्रक्रिया ने उपलब्ध संसाधनों के आधे से अधिक का अनुरोध नहीं किया है",
        "C": "सभी म्युचुअल एक्सक्लूजन सेमाफोर शून्य पर आरंभ किए गए हैं",
        "D": "प्रक्रियाओं की संख्या संसाधन प्रकारों की संख्या के बराबर है"
      },
      "correctAnswer": "A",
      "explanation": "A state is safe if the system can allocate resources to each process (up to its declared maximum) in some sequence (safe sequence) such that every process can complete its task and release its resources without deadlock.",
      "explanation_hi": "एक प्रणाली सुरक्षित अवस्था (Safe State) में होती है यदि प्रक्रियाओं का कम से कम एक सुरक्षित क्रम (Safe Sequence) मौजूद हो जिससे प्रत्येक प्रक्रिया को उसके अधिकतम मांग तक संसाधन दिए जा सकें और वे डेडलॉक के बिना सफलतापूर्वक समाप्त हो सकें।"
    },
    {
      "id": 4,
      "questionNumber": 4,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the worst-case time complexity of the QuickSort algorithm, and when does it typically occur?",
      "question_hi": "क्विकसॉर्ट (QuickSort) एल्गोरिदम की सबसे खराब स्थिति (worst-case) समय जटिलता क्या है, और यह आमतौर पर कब होती है?",
      "options": {
        "A": "O(n^2), when the input array is already sorted and the pivot chosen is the first or last element",
        "B": "O(n log n), when the pivot divides the array into two equal halves",
        "C": "O(n), when all elements are identical",
        "D": "O(log n), when using randomized pivot selection"
      },
      "options_hi": {
        "A": "O(n^2), जब इनपुट एरे पहले से सॉर्टेड हो और पहले या अंतिम तत्व को पिवट चुना गया हो",
        "B": "O(n log n), जब पिवट एरे को दो बराबर हिस्सों में विभाजित करता है",
        "C": "O(n), जब सभी तत्व समान हों",
        "D": "O(log n), जब रैंडमाइज़्ड पिवट चयन का उपयोग किया जाता है"
      },
      "correctAnswer": "A",
      "explanation": "QuickSort's worst-case occurs when the partitioning continually creates unbalanced subarrays of sizes 0 and n-1 (e.g., already sorted array with extreme element as pivot), yielding recurrence T(n) = T(n-1) + O(n) = O(n^2).",
      "explanation_hi": "QuickSort की सबसे खराब जटिलता O(n^2) होती है। यह तब होती है जब पिवट सबसे छोटा या सबसे बड़ा तत्व बन जाए (जैसे पहले से सॉर्टेड सूची में पहला या अंतिम तत्व चुनना), जिससे पार्टीशन 0 और n-1 तत्वों में बंटता है।"
    },
    {
      "id": 5,
      "questionNumber": 5,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following shortest path algorithms can correctly handle graphs with negative edge weights as long as there are no negative weight cycles?",
      "question_hi": "निम्नलिखित में से कौन सा सबसे छोटा पथ एल्गोरिदम ऋणात्मक किनारे भार (negative edge weights) वाले ग्राफ को सही ढंग से संभाल सकता है, बशर्ते कोई ऋणात्मक भार चक्र न हो?",
      "options": {
        "A": "Bellman-Ford Algorithm",
        "B": "Dijkstra's Algorithm",
        "C": "Prim's Algorithm",
        "D": "Kruskal's Algorithm"
      },
      "options_hi": {
        "A": "बेलमैन-फोर्ड (Bellman-Ford) एल्गोरिदम",
        "B": "डिजक्स्ट्रा (Dijkstra) एल्गोरिदम",
        "C": "प्रिम (Prim) एल्गोरिदम",
        "D": "क्रुस्कल (Kruskal) एल्गोरिदम"
      },
      "correctAnswer": "A",
      "explanation": "Dijkstra's greedy algorithm assumes edge weights are non-negative and may fail with negative weights. Bellman-Ford relaxes all edges |V|-1 times, works with negative edges, and detects negative weight cycles in O(V * E) time.",
      "explanation_hi": "डिजक्स्ट्रा एल्गोरिदम ऋणात्मक भार वाले किनारों पर विफल हो सकता है। बेलमैन-फोर्ड एल्गोरिदम डायनामिक प्रोग्रामिंग का उपयोग करता है और O(V*E) समय में ऋणात्मक भार वाले किनारों को सही से संभालता है तथा ऋणात्मक चक्रों का पता लगाता है।"
    },
    {
      "id": 6,
      "questionNumber": 6,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "How many flip-flops are minimally required to construct a MOD-4 counter?",
      "question_hi": "एक MOD-4 काउंटर बनाने के लिए न्यूनतम कितने फ्लिप-फ्लॉप्स की आवश्यकता होती है?",
      "options": {
        "A": "2",
        "B": "3",
        "C": "1",
        "D": "2"
      },
      "options_hi": {
        "A": "2",
        "B": "3",
        "C": "1",
        "D": "2"
      },
      "correctAnswer": "A",
      "explanation": "For a MOD-N counter, 2ⁿ ≥ N. For N = 4, 2^2 ≥ 4. Thus, n = 2 flip-flops.",
      "explanation_hi": "MOD-N काउंटर के लिए 2ⁿ ≥ N होता है। N = 4 के लिए न्यूनतम 2 फ्लिप-फ्लॉप आवश्यक हैं।"
    },
    {
      "id": 7,
      "questionNumber": 7,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the defining balance property of an AVL tree that ensures O(log n) search time complexity?",
      "question_hi": "AVL ट्री की वह संतुलन विशेषता क्या है जो O(log n) खोज समय जटिलता सुनिश्चित करती है?",
      "options": {
        "A": "For every node, the difference in height between its left and right subtrees (Balance Factor) must be in {-1, 0, +1}",
        "B": "Every leaf node must be at the exact same depth",
        "C": "All red nodes must have black children",
        "D": "The number of nodes in the left subtree must equal the number in the right subtree"
      },
      "options_hi": {
        "A": "प्रत्येक नोड के लिए, उसके बाएं और दाएं सबट्री की ऊंचाई का अंतर (बैलेंस फैक्टर) {-1, 0, +1} में होना चाहिए",
        "B": "प्रत्येक लीफ नोड बिल्कुल समान गहराई पर होना चाहिए",
        "C": "सभी लाल नोड्स के बच्चे काले होने चाहिए",
        "D": "बाएं सबट्री में नोड्स की संख्या दाएं सबट्री में संख्या के बराबर होनी चाहिए"
      },
      "correctAnswer": "A",
      "explanation": "An AVL tree is a self-balancing binary search tree where the balance factor BF = Height(Left) - Height(Right) of every node must be -1, 0, or +1. If it deviates, tree rotations (LL, RR, LR, RL) restore balance.",
      "explanation_hi": "AVL ट्री एक स्व-संतुलित BST है जिसमें प्रत्येक नोड का बैलेंस फैक्टर (बाएं सबट्री की ऊंचाई - दाएं सबट्री की ऊंचाई) केवल -1, 0 या +1 हो सकता है। विचलन होने पर रोटेशन द्वारा संतुलन बहाल किया जाता है।"
    },
    {
      "id": 8,
      "questionNumber": 8,
      "section": "Computer Science",
      "topic": "Algorithms",
      "topic_hi": "एल्गोरिदम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What algorithmic paradigm is employed by Huffman Coding for lossless data compression?",
      "question_hi": "दोषरहित डेटा संपीड़न (lossless data compression) के लिए हफमैन कोडिंग (Huffman Coding) द्वारा कौन सी एल्गोरिदम तकनीक अपनाई जाती है?",
      "options": {
        "A": "Greedy Approach",
        "B": "Dynamic Programming",
        "C": "Divide and Conquer",
        "D": "Backtracking"
      },
      "options_hi": {
        "A": "लालची दृष्टिकोण (Greedy Approach)",
        "B": "डायनामिक प्रोग्रामिंग",
        "C": "डिवाइड एंड कॉन्कर (विभाजित करें और जीतें)",
        "D": "बैकट्रैकिंग"
      },
      "correctAnswer": "A",
      "explanation": "Huffman coding uses a greedy algorithm to build an optimal prefix-free binary tree by repeatedly combining the two least frequent characters/nodes from a priority queue (min-heap).",
      "explanation_hi": "हफमैन कोडिंग एक ग्रीडी (Greedy) एल्गोरिदम का उपयोग करती है। यह न्यूनतम हीप से बार-बार दो न्यूनतम आवृत्ति वाले तत्वों को मिलाकर एक इष्टतम प्रीफिक्स-फ्री बाइनरी ट्री बनाती है।"
    },
    {
      "id": 9,
      "questionNumber": 9,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "At which layer of the OSI reference model do routers primarily operate to forward packets based on logical IP addresses?",
      "question_hi": "राउटर मुख्य रूप से तार्किक आईपी पते (logical IP addresses) के आधार पर पैकेट अग्रेषित करने के लिए OSI संदर्भ मॉडल की किस परत पर कार्य करते हैं?",
      "options": {
        "A": "Network Layer (Layer 3)",
        "B": "Data Link Layer (Layer 2)",
        "C": "Transport Layer (Layer 4)",
        "D": "Session Layer (Layer 5)"
      },
      "options_hi": {
        "A": "नेटवर्क लेयर (Layer 3)",
        "B": "डेटा लिंक लेयर (Layer 2)",
        "C": "ट्रांसपोर्ट लेयर (Layer 4)",
        "D": "सेशन लेयर (Layer 5)"
      },
      "correctAnswer": "A",
      "explanation": "Routers operate at Layer 3 (Network Layer) of the OSI model, using routing tables and logical IP addresses to forward packets across interconnected networks. Switches operate at Layer 2 using MAC addresses.",
      "explanation_hi": "राउटर OSI मॉडल की लेयर 3 (नेटवर्क लेयर) पर कार्य करते हैं। वे लॉजिकल IP एड्रेस और रूटिंग प्रोटोकॉल के आधार पर पैकेटों को एक नेटवर्क से दूसरे नेटवर्क पर रूट करते हैं।"
    },
    {
      "id": 10,
      "questionNumber": 10,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary purpose of the Address Resolution Protocol (ARP) in IPv4 networking?",
      "question_hi": "IPv4 नेटवर्किंग में एड्रेस रिज़ॉल्यूशन प्रोटोकॉल (ARP) का प्राथमिक उद्देश्य क्या है?",
      "options": {
        "A": "To dynamically resolve a known 32-bit logical IPv4 address to its corresponding 48-bit physical MAC address",
        "B": "To translate private IP addresses into a public IP address",
        "C": "To map domain names to IP addresses",
        "D": "To allocate dynamic IP addresses to client hosts on boot"
      },
      "options_hi": {
        "A": "एक ज्ञात 32-बिट तार्किक IPv4 पते को उसके संबंधित 48-बिट भौतिक मैक पते (MAC address) में गतिशील रूप से हल करना",
        "B": "प्राइवेट आईपी पते को सार्वजनिक आईपी पते में अनुवादित करना",
        "C": "डोमेन नामों को आईपी पते में मैप करना",
        "D": "बूट होने पर क्लाइंट होस्ट को डायनामिक आईपी पते आवंटित करना"
      },
      "correctAnswer": "A",
      "explanation": "ARP resolves an IP address to a physical MAC address within a local broadcast domain. The sender broadcasts an ARP request ('Who has IP X?'), and the target responds with a unicast ARP reply containing its MAC address.",
      "explanation_hi": "ARP का मुख्य कार्य लोकल नेटवर्क (LAN) में किसी ज्ञात 32-बिट लॉजिकल IP पते के संबंधित 48-बिट हार्डवेयर MAC पते का पता लगाना है। यह ब्रॉडकास्ट रिक्वेस्ट और यूनीकास्ट रिप्लाई का उपयोग करता है।"
    },
    {
      "id": 11,
      "questionNumber": 11,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "How many usable host IP addresses are available in an IPv4 subnet configured with a /27 CIDR subnet mask?",
      "question_hi": "/27 CIDR सबनेट मास्क के साथ कॉन्फ़िगर किए गए IPv4 सबनेट में कितने प्रयोग करने योग्य होस्ट IP पते उपलब्ध होते हैं?",
      "options": {
        "A": "30",
        "B": "32",
        "C": "62",
        "D": "14"
      },
      "options_hi": {
        "A": "30",
        "B": "32",
        "C": "62",
        "D": "14"
      },
      "correctAnswer": "A",
      "explanation": "A /27 subnet mask leaves 32 - 27 = 5 bits for host addresses. Total addresses = 2^5 = 32. Subtracting 2 reserved addresses (one for network ID, one for broadcast address) yields exactly 32 - 2 = 30 usable host IP addresses.",
      "explanation_hi": "/27 सबनेट में होस्ट के लिए बिट्स = 32 - 27 = 5 बिट्स। कुल पते = 2^5 = 32। नेटवर्क आईडी और ब्रॉडकास्ट पते को घटाने पर: 32 - 2 = 30 प्रयोग करने योग्य होस्ट पते प्राप्त होते हैं।"
    },
    {
      "id": 12,
      "questionNumber": 12,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क्स",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which TCP mechanism handles flow control between sender and receiver to prevent a fast sender from overwhelming a slow receiver?",
      "question_hi": "तेज प्रेषक द्वारा धीमे रिसीवर को ओवरवेल्म (अतिभारित) होने से बचाने के लिए प्रेषक और रिसीवर के बीच कौन सा टीसीपी तंत्र फ्लो कंट्रोल (Flow Control) संभालता है?",
      "options": {
        "A": "Sliding Window Protocol with Receiver Advertised Window (rwnd)",
        "B": "Slow Start Threshold (ssthresh)",
        "C": "Three-way handshake (SYN, SYN-ACK, ACK)",
        "D": "Additive Increase Multiplicative Decrease (AIMD)"
      },
      "options_hi": {
        "A": "रिसीवर विज्ञापित विंडो (rwnd) के साथ स्लाइडिंग विंडो प्रोटोकॉल",
        "B": "धीमी शुरुआत सीमा (ssthresh)",
        "C": "थ्री-वे हैंडशेक (SYN, SYN-ACK, ACK)",
        "D": "योगात्मक वृद्धि गुणात्मक कमी (AIMD)"
      },
      "correctAnswer": "A",
      "explanation": "TCP flow control is achieved via a sliding window where the receiver advertises its available buffer space in the TCP header's 'Window Size' field (rwnd). The sender never sends more unacknowledged bytes than rwnd.",
      "explanation_hi": "TCP फ्लो कंट्रोल स्लाइडिंग विंडो मैकेनिज्म द्वारा किया जाता है जिसमें रिसीवर अपने हेडर में उपलब्ध बफर स्पेस (rwnd - रिसीवर विंडो) को विज्ञापित करता है, जिससे प्रेषक रिसीवर की क्षमता से अधिक डेटा नहीं भेज सकता।"
    },
    {
      "id": 13,
      "questionNumber": 13,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "A relational database table is in Third Normal Form (3NF) if and only if it is in 2NF and:",
      "question_hi": "एक रिलेशनल डेटाबेस टेबल थर्ड नॉर्मल फॉर्म (3NF) में होती है यदि और केवल यदि यह 2NF में हो और:",
      "options": {
        "A": "No non-prime attribute is transitively dependent on any candidate key",
        "B": "All multivalued dependencies are decomposed into independent relations",
        "C": "Every determinant is a candidate key",
        "D": "No attribute contains composite or multi-valued attributes"
      },
      "options_hi": {
        "A": "कोई भी गैर-प्राइम एट्रिब्यूट किसी उम्मीदवार कुंजी (candidate key) पर सकर्मक रूप से निर्भर (transitively dependent) नहीं है",
        "B": "सभी बहु-मूल्यवान निर्भरताओं को स्वतंत्र संबंधों में विघटित किया गया है",
        "C": "प्रत्येक निर्धारक (determinant) एक उम्मीदवार कुंजी है",
        "D": "किसी भी विशेषता में समग्र या बहु-मूल्यवान विशेषताएं नहीं हैं"
      },
      "correctAnswer": "A",
      "explanation": "3NF requires a relation to be in 2NF with no transitive functional dependencies of non-prime attributes on candidate keys (for every non-trivial X -> Y, X is a superkey or Y is a prime attribute).",
      "explanation_hi": "3NF में होने के लिए टेबल को 2NF में होना चाहिए और किसी भी गैर-प्राइम एट्रिब्यूट की कैंडिडेट की पर सकर्मक निर्भरता (Transitive Dependency: A -> B और B -> C) नहीं होनी चाहिए।"
    },
    {
      "id": 14,
      "questionNumber": 14,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What does the 'Isolation' property in the ACID transaction model guarantee?",
      "question_hi": "ACID ट्रांजेक्शन मॉडल में 'आइसोलेशन' (Isolation) विशेषता क्या गारंटी देती है?",
      "options": {
        "A": "Concurrently executing transactions execute without interfering with each other, as if running serially",
        "B": "All operations in a transaction either commit fully or rollback completely",
        "C": "Committed data survives system crashes and power failures",
        "D": "Database integrity constraints remain satisfied before and after execution"
      },
      "options_hi": {
        "A": "एक साथ निष्पादित होने वाले लेनदेन एक-दूसरे के संचालन में हस्तक्षेप किए बिना निष्पादित होते हैं, मानो वे क्रमिक रूप से चल रहे हों",
        "B": "लेनदेन के सभी ऑपरेशन या तो पूरी तरह से कमिट होते हैं या पूरी तरह से रोलबैक होते हैं",
        "C": "कमिट किया गया डेटा सिस्टम क्रैश और पावर फेल होने पर भी सुरक्षित रहता है",
        "D": "डेटाबेस सत्यनिष्ठा बाधाएं निष्पादन से पहले और बाद में संतुष्ट रहती हैं"
      },
      "correctAnswer": "A",
      "explanation": "Isolation ensures that concurrent execution of transactions results in a system state equivalent to serial execution, preventing anomalies like dirty reads, non-repeatable reads, and phantom reads.",
      "explanation_hi": "आइसोलेशन (Isolation) यह सुनिश्चित करता है कि समवर्ती (concurrent) रूप से चलने वाले कई लेन-देन एक-दूसरे को प्रभावित न करें और परिणाम ऐसा हो जैसे वे एक-एक करके क्रमिक रूप से चलाए गए हों।"
    },
    {
      "id": 15,
      "questionNumber": 15,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस मैनेजमेंट सिस्टम",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In SQL, which of the following commands belongs to the Data Definition Language (DDL)?",
      "question_hi": "SQL में निम्नलिखित में से कौन सा कमांड डेटा डेफिनिशन लैंग्वेज (DDL) से संबंधित है?",
      "options": {
        "A": "ALTER",
        "B": "UPDATE",
        "C": "DELETE",
        "D": "INSERT"
      },
      "options_hi": {
        "A": "ALTER",
        "B": "UPDATE",
        "C": "DELETE",
        "D": "INSERT"
      },
      "correctAnswer": "A",
      "explanation": "DDL commands define and modify database schema structures: CREATE, ALTER, DROP, TRUNCATE, and RENAME. In contrast, INSERT, UPDATE, and DELETE are Data Manipulation Language (DML) commands.",
      "explanation_hi": "ALTER एक DDL (डेटा डेफिनिशन लैंग्वेज) कमांड है जो मौजूदा टेबल संरचना को संशोधित करने के लिए उपयोग किया जाता है। UPDATE, DELETE और INSERT डेटा मैनिपुलेशन लैंग्वेज (DML) के अंतर्गत आते हैं।"
    },
    {
      "id": 16,
      "questionNumber": 16,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In C++, how is dynamic (run-time) polymorphism achieved?",
      "question_hi": "C++ में गतिशील (रन-टाइम) बहुरूपता (Polymorphism) कैसे प्राप्त की जाती है?",
      "options": {
        "A": "Using virtual functions in base classes accessed via base class pointers or references",
        "B": "Using function overloading and default arguments at compile time",
        "C": "Using inline friend functions",
        "D": "Using static member variables"
      },
      "options_hi": {
        "A": "बेस क्लास पॉइंटर्स या संदर्भों के माध्यम से एक्सेस किए गए बेस क्लास में वर्चुअल फ़ंक्शंस का उपयोग करके",
        "B": "कंपाइल समय पर फ़ंक्शन ओवरलोडिंग और डिफ़ॉल्ट तर्कों का उपयोग करके",
        "C": "इनलाइन फ्रेंड फ़ंक्शंस का उपयोग करके",
        "D": "स्टैटिक सदस्य चरों का उपयोग करके"
      },
      "correctAnswer": "A",
      "explanation": "Run-time polymorphism in C++ is implemented using virtual functions. When a virtual function is called through a base class pointer/reference pointing to a derived object, the call is dispatched at runtime using the vtable and vptr.",
      "explanation_hi": "C++ में रन-टाइम पॉलीमॉर्फिज्म बेस क्लास में virtual कीवर्ड के साथ फ़ंक्शन घोषित करके और उन्हें बेस क्लास पॉइंटर के माध्यम से कॉल करके प्राप्त किया जाता है (vtable और vptr के माध्यम से)।"
    },
    {
      "id": 17,
      "questionNumber": 17,
      "section": "Computer Science",
      "topic": "Object Oriented Programming",
      "topic_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What makes a C++ class an Abstract Base Class (ABC)?",
      "question_hi": "क्या विशेषता किसी C++ क्लास को एब्सट्रैक्ट बेस क्लास (Abstract Base Class) बनाती है?",
      "options": {
        "A": "Containing at least one pure virtual function (declared with '= 0')",
        "B": "Having all member variables declared as private",
        "C": "Declaring a friend class inside its definition",
        "D": "Preventing the creation of pointers of that class type"
      },
      "options_hi": {
        "A": "कम से कम एक शुद्ध वर्चुअल फ़ंक्शन (pure virtual function, '= 0' के साथ घोषित) होना",
        "B": "सभी सदस्य चरों को निजी (private) घोषित करना",
        "C": "इसकी परिभाषा के अंदर एक फ्रेंड क्लास घोषित करना",
        "D": "उस क्लास प्रकार के पॉइंटर्स के निर्माण को रोकना"
      },
      "correctAnswer": "A",
      "explanation": "A class containing at least one pure virtual function (e.g., `virtual void draw() = 0;`) is an abstract class. It cannot be directly instantiated and serves as an interface for derived classes.",
      "explanation_hi": "C++ में यदि किसी क्लास में कम से कम एक शुद्ध वर्चुअल फ़ंक्शन (Pure Virtual Function: virtual void fun() = 0;) होता है, तो वह एब्सट्रैक्ट क्लास बन जाती है और उसका सीधा ऑब्जेक्ट नहीं बनाया जा सकता।"
    },
    {
      "id": 18,
      "questionNumber": 18,
      "section": "Computer Science",
      "topic": "Software Engineering",
      "topic_hi": "सॉफ्टवेयर इंजीनियरिंग",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is McCabe's Cyclomatic Complexity metric used for in software testing?",
      "question_hi": "सॉफ्टवेयर परीक्षण में मैक्केब की साइक्लोमैटिक जटिलता (Cyclomatic Complexity) मीट्रिक का उपयोग किस लिए किया जाता है?",
      "options": {
        "A": "To measure the number of linearly independent paths through a program's source code",
        "B": "To estimate total project cost based on lines of code (KLOC)",
        "C": "To determine database normalization depth",
        "D": "To verify network packet retransmission timeouts"
      },
      "options_hi": {
        "A": "प्रोग्राम के स्रोत कोड के माध्यम से रैखिक रूप से स्वतंत्र पथों (linearly independent paths) की संख्या को मापने के लिए",
        "B": "कोड की पंक्तियों (KLOC) के आधार पर कुल परियोजना लागत का अनुमान लगाने के लिए",
        "C": "डेटाबेस नॉर्मलाइजेशन गहराई निर्धारित करने के लिए",
        "D": "नेटवर्क पैकेट पुनर्संचरण टाइमआउट को सत्यापित करने के लिए"
      },
      "correctAnswer": "A",
      "explanation": "Cyclomatic Complexity V(G) = E - N + 2P (where E = edges, N = nodes, P = connected components) defines the number of independent execution paths and gives the minimum number of test cases required for complete path coverage.",
      "explanation_hi": "मैक्केब की साइक्लोमैटिक जटिलता V(G) = E - N + 2P किसी प्रोग्राम के कंट्रोल फ्लो ग्राफ में स्वतंत्र निष्पादन पथों की संख्या मापती है, जिससे पथ कवरेज के लिए आवश्यक न्यूनतम टेस्ट केस की संख्या पता चलती है।"
    },
    {
      "id": 19,
      "questionNumber": 19,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the equivalent Gray code for the standard binary number 10110?",
      "question_hi": "मानक बाइनरी संख्या 10110 के लिए समतुल्य ग्रे कोड (Gray Code) क्या होगा?",
      "options": {
        "A": "11101",
        "B": "11011",
        "C": "10101",
        "D": "11111"
      },
      "options_hi": {
        "A": "11101",
        "B": "11011",
        "C": "10101",
        "D": "11111"
      },
      "correctAnswer": "A",
      "explanation": "Binary to Gray code conversion: G4 = B4 = 1; G3 = B4 ⊕ B3 = 1 ⊕ 0 = 1; G2 = B3 ⊕ B2 = 0 ⊕ 1 = 1; G1 = B2 ⊕ B1 = 1 ⊕ 1 = 0; G0 = B1 ⊕ B0 = 1 ⊕ 0 = 1. Result = 11101.",
      "explanation_hi": "बाइनरी से ग्रे कोड रूपांतरण: MSB समान रहता है (G4 = 1)। इसके बाद Gi = Bi+1 ⊕ Bi किया जाता है: G3 = 1⊕0 = 1; G2 = 0⊕1 = 1; G1 = 1⊕1 = 0; G0 = 1⊕0 = 1। अतः उत्तर 11101 है।"
    },
    {
      "id": 20,
      "questionNumber": 20,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "How many select lines are required for a 64-to-1 Multiplexer (MUX)?",
      "question_hi": "64-से-1 मल्टीप्लेक्सर (MUX) के लिए कितनी सेलेक्ट लाइनों (Select Lines) की आवश्यकता होती है?",
      "options": {
        "A": "6",
        "B": "5",
        "C": "7",
        "D": "8"
      },
      "options_hi": {
        "A": "6",
        "B": "5",
        "C": "7",
        "D": "8"
      },
      "correctAnswer": "A",
      "explanation": "A 2^n to 1 multiplexer requires n select lines. For a 64-to-1 MUX, 2^n = 64 = 2^6, which requires n = 6 select lines.",
      "explanation_hi": "2^n टू 1 मल्टीप्लेक्सर के लिए n सेलेक्ट लाइनों की आवश्यकता होती है। 64 टू 1 MUX के लिए: 2^n = 64 = 2^6, इसलिए n = 6 सेलेक्ट लाइनें आवश्यक हैं।"
    },
    {
      "id": 21,
      "questionNumber": 21,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary function of a 3-to-8 decoder with an active-low enable input when used as a demultiplexer?",
      "question_hi": "डिमल्टीप्लेक्सर के रूप में उपयोग किए जाने पर एक्टिव-लो इनेबल इनपुट वाले 3-से-8 डिकोडर का प्राथमिक कार्य क्या होता है?",
      "options": {
        "A": "The enable input acts as the single data input, and the 3 select inputs route it to one of the 8 outputs",
        "B": "It converts 8-bit parallel data into 3-bit serial data",
        "C": "It adds three single-bit binary numbers",
        "D": "It stores 8 bits of static data"
      },
      "options_hi": {
        "A": "इनेबल इनपुट एकल डेटा इनपुट के रूप में कार्य करता है, और 3 सेलेक्ट इनपुट इसे 8 आउटपुट में से एक पर रूट करते हैं",
        "B": "यह 8-बिट समानांतर डेटा को 3-बिट क्रमिक डेटा में परिवर्तित करता है",
        "C": "यह तीन सिंगल-बिट बाइनरी संख्याओं को जोड़ता है",
        "D": "यह 8 बिट्स स्थिर डेटा संग्रहीत करता है"
      },
      "correctAnswer": "A",
      "explanation": "A decoder with an enable line functions identically to a demultiplexer: the enable line acts as the single input data line, while the select lines determine which of the output lines receives the input signal.",
      "explanation_hi": "इनेबल इनपुट वाला डिकोडर डिमल्टीप्लेक्सर के समान होता है: इनेबल पिन डेटा इनपुट की तरह काम करती है, और एड्रेस लाइनें यह तय करती हैं कि वह डेटा किस आउटपुट पिन पर जाएगा।"
    },
    {
      "id": 22,
      "questionNumber": 22,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the characteristic equation of a JK flip-flop?",
      "question_hi": "जेके फ्लिप-फ्लॉप (JK Flip-Flop) का अभिलाक्षणिक समीकरण (Characteristic Equation) क्या है?",
      "options": {
        "A": "Q(next) = J . Q' + K' . Q",
        "B": "Q(next) = J . Q + K . Q'",
        "C": "Q(next) = J' . Q + K . Q'",
        "D": "Q(next) = J ⊕ K ⊕ Q"
      },
      "options_hi": {
        "A": "Q(next) = J . Q' + K' . Q",
        "B": "Q(next) = J . Q + K . Q'",
        "C": "Q(next) = J' . Q + K . Q'",
        "D": "Q(next) = J ⊕ K ⊕ Q"
      },
      "correctAnswer": "A",
      "explanation": "The characteristic equation derived from the JK excitation table is Q(t+1) = J . Q'(t) + K'(t) . Q(t). When J=1, K=0, Q=1 (set); J=0, K=1, Q=0 (reset); J=0, K=0, Q holds; J=1, K=1, Q toggles.",
      "explanation_hi": "JK फ्लिप-फ्लॉप का अभिलाक्षणिक समीकरण Q(next) = JQ' + K'Q होता है। यह दर्शाता है कि J=1 पर फ्लिप-फ्लॉप सेट होता है, K=1 पर रीसेट होता है, J=K=0 पर पूर्ववत रहता है, और J=K=1 पर टॉगल करता है।"
    },
    {
      "id": 23,
      "questionNumber": 23,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the range of signed integers that can be represented using an 8-bit 2's complement binary format?",
      "question_hi": "8-बिट 2's पूरक (2's complement) बाइनरी प्रारूप का उपयोग करके हस्ताक्षरित पूर्णांकों (signed integers) की किस सीमा को दर्शाया जा सकता है?",
      "options": {
        "A": "-128 to +127",
        "B": "-127 to +128",
        "C": "-256 to +255",
        "D": "0 to +255"
      },
      "options_hi": {
        "A": "-128 से +127",
        "B": "-127 से +128",
        "C": "-256 से +255",
        "D": "0 से +255"
      },
      "correctAnswer": "A",
      "explanation": "For an n-bit signed 2's complement system, the numerical range is -2^(n-1) to +(2^(n-1) - 1). For n = 8: -2^7 = -128 to +(2^7 - 1) = +127.",
      "explanation_hi": "n-बिट 2's पूरक प्रारूप में संख्याओं की सीमा -2^(n-1) से +(2^(n-1) - 1) होती है। 8-बिट के लिए: -2^7 = -128 से +127 तक।"
    },
    {
      "id": 24,
      "questionNumber": 24,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a digital circuit, what condition indicates arithmetic overflow when adding two n-bit signed numbers in 2's complement representation?",
      "question_hi": "डिजिटल परिपथ में, 2's पूरक निरूपण में दो n-बिट हस्ताक्षरित संख्याओं को जोड़ते समय कौन सी स्थिति अंकगणितीय ओवरफ्लो (Overflow) को इंगित करती है?",
      "options": {
        "A": "Carry-in into the most significant bit (MSB) does not equal Carry-out from the MSB (Cin ⊕ Cout = 1)",
        "B": "A carry-out is produced from the least significant bit (LSB)",
        "C": "Both numbers are positive and their sum is positive",
        "D": "Both numbers are negative and their sum is negative"
      },
      "options_hi": {
        "A": "सर्वाधिक महत्वपूर्ण बिट (MSB) में कैरी-इन, MSB से कैरी-आउट के बराबर नहीं है (Cin ⊕ Cout = 1)",
        "B": "न्यूनतम महत्वपूर्ण बिट (LSB) से एक कैरी-आउट उत्पन्न होता है",
        "C": "दोनों संख्याएं धनात्मक हैं और उनका योग धनात्मक है",
        "D": "दोनों संख्याएं ऋणात्मक हैं और उनका योग ऋणात्मक है"
      },
      "correctAnswer": "A",
      "explanation": "In 2's complement addition, overflow occurs when the sum of two positive numbers yields a negative result, or two negatives yield a positive result. This condition is detected in hardware by: Overflow = C_in(MSB) ⊕ C_out(MSB).",
      "explanation_hi": "2's पूरक जोड़ में ओवरफ्लो तब होता है जब दो समान चिह्न वाली संख्याओं को जोड़ने पर विपरीत चिह्न का परिणाम मिले। हार्डवेयर में इसे MSB में आने वाली कैरी और MSB से निकलने वाली कैरी के XOR (Cin ⊕ Cout) द्वारा पहचाना जाता है।"
    },
    {
      "id": 25,
      "questionNumber": 25,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Why is the Excess-3 BCD code referred to as a 'self-complementing' code?",
      "question_hi": "Excess-3 BCD कोड को 'सेल्फ-कॉम्प्लिमेंटिंग' (आत्म-पूरक) कोड क्यों कहा जाता है?",
      "options": {
        "A": "The 1's complement of an Excess-3 code word equals the Excess-3 code word of the 9's complement of the decimal digit",
        "B": "It contains an equal number of zeros and ones",
        "C": "It requires no parity bit for single-bit error detection",
        "D": "It can be decoded without using logic gates"
      },
      "options_hi": {
        "A": "Excess-3 कोड शब्द का 1's पूरक, दशमलव अंक के 9's पूरक के Excess-3 कोड शब्द के बराबर होता है",
        "B": "इसमें शून्य और एक की संख्या समान होती है",
        "C": "इसे सिंगल-बिट त्रुटि पहचान के लिए पैरिटी बिट की आवश्यकता नहीं होती",
        "D": "इसे लॉजिक गेट्स के बिना डिकोड किया जा सकता है"
      },
      "correctAnswer": "A",
      "explanation": "Excess-3 is self-complementing because inverting all bits (taking 1's complement) of the Excess-3 representation of a decimal digit d produces the Excess-3 representation of (9 - d), which is the 9's complement of d.",
      "explanation_hi": "Excess-3 कोड एक सेल्फ-कॉम्प्लिमेंटिंग कोड है क्योंकि किसी दशमलव अंक d के Excess-3 कोड के बिट्स को उलटने (1's complement लेने) पर (9 - d) का Excess-3 कोड स्वतः प्राप्त हो जाता है।"
    },
    {
      "id": 26,
      "questionNumber": 26,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a 2-to-1 data selector (multiplexer), how many selection lines are required?",
      "question_hi": "एक 2-टू-1 डेटा चयनकर्ता (मल्टीप्लेक्सर) में कितनी चयन लाइनों की आवश्यकता होती है?",
      "options": {
        "A": "1",
        "B": "2",
        "C": "0",
        "D": "0"
      },
      "options_hi": {
        "A": "1",
        "B": "2",
        "C": "0",
        "D": "0"
      },
      "correctAnswer": "A",
      "explanation": "2^m = 2 implies m = 1 select lines.",
      "explanation_hi": "2^m = 2 से m = 1 सेलेक्ट लाइनें प्राप्त होती हैं।"
    },
    {
      "id": 27,
      "questionNumber": 27,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a 4-to-1 data selector (multiplexer), how many selection lines are required?",
      "question_hi": "एक 4-टू-1 डेटा चयनकर्ता (मल्टीप्लेक्सर) में कितनी चयन लाइनों की आवश्यकता होती है?",
      "options": {
        "A": "2",
        "B": "3",
        "C": "1",
        "D": "1"
      },
      "options_hi": {
        "A": "2",
        "B": "3",
        "C": "1",
        "D": "1"
      },
      "correctAnswer": "A",
      "explanation": "2^m = 4 implies m = 2 select lines.",
      "explanation_hi": "2^m = 4 से m = 2 सेलेक्ट लाइनें प्राप्त होती हैं।"
    },
    {
      "id": 28,
      "questionNumber": 28,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a 8-to-1 data selector (multiplexer), how many selection lines are required?",
      "question_hi": "एक 8-टू-1 डेटा चयनकर्ता (मल्टीप्लेक्सर) में कितनी चयन लाइनों की आवश्यकता होती है?",
      "options": {
        "A": "3",
        "B": "4",
        "C": "2",
        "D": "2"
      },
      "options_hi": {
        "A": "3",
        "B": "4",
        "C": "2",
        "D": "2"
      },
      "correctAnswer": "A",
      "explanation": "2^m = 8 implies m = 3 select lines.",
      "explanation_hi": "2^m = 8 से m = 3 सेलेक्ट लाइनें प्राप्त होती हैं।"
    },
    {
      "id": 29,
      "questionNumber": 29,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a 16-to-1 data selector (multiplexer), how many selection lines are required?",
      "question_hi": "एक 16-टू-1 डेटा चयनकर्ता (मल्टीप्लेक्सर) में कितनी चयन लाइनों की आवश्यकता होती है?",
      "options": {
        "A": "4",
        "B": "5",
        "C": "3",
        "D": "4"
      },
      "options_hi": {
        "A": "4",
        "B": "5",
        "C": "3",
        "D": "4"
      },
      "correctAnswer": "A",
      "explanation": "2^m = 16 implies m = 4 select lines.",
      "explanation_hi": "2^m = 16 से m = 4 सेलेक्ट लाइनें प्राप्त होती हैं।"
    },
    {
      "id": 30,
      "questionNumber": 30,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a 32-to-1 data selector (multiplexer), how many selection lines are required?",
      "question_hi": "एक 32-टू-1 डेटा चयनकर्ता (मल्टीप्लेक्सर) में कितनी चयन लाइनों की आवश्यकता होती है?",
      "options": {
        "A": "5",
        "B": "6",
        "C": "4",
        "D": "8"
      },
      "options_hi": {
        "A": "5",
        "B": "6",
        "C": "4",
        "D": "8"
      },
      "correctAnswer": "A",
      "explanation": "2^m = 32 implies m = 5 select lines.",
      "explanation_hi": "2^m = 32 से m = 5 सेलेक्ट लाइनें प्राप्त होती हैं।"
    },
    {
      "id": 31,
      "questionNumber": 31,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a 64-to-1 data selector (multiplexer), how many selection lines are required?",
      "question_hi": "एक 64-टू-1 डेटा चयनकर्ता (मल्टीप्लेक्सर) में कितनी चयन लाइनों की आवश्यकता होती है?",
      "options": {
        "A": "6",
        "B": "7",
        "C": "5",
        "D": "16"
      },
      "options_hi": {
        "A": "6",
        "B": "7",
        "C": "5",
        "D": "16"
      },
      "correctAnswer": "A",
      "explanation": "2^m = 64 implies m = 6 select lines.",
      "explanation_hi": "2^m = 64 से m = 6 सेलेक्ट लाइनें प्राप्त होती हैं।"
    },
    {
      "id": 32,
      "questionNumber": 32,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a 128-to-1 data selector (multiplexer), how many selection lines are required?",
      "question_hi": "एक 128-टू-1 डेटा चयनकर्ता (मल्टीप्लेक्सर) में कितनी चयन लाइनों की आवश्यकता होती है?",
      "options": {
        "A": "7",
        "B": "8",
        "C": "6",
        "D": "32"
      },
      "options_hi": {
        "A": "7",
        "B": "8",
        "C": "6",
        "D": "32"
      },
      "correctAnswer": "A",
      "explanation": "2^m = 128 implies m = 7 select lines.",
      "explanation_hi": "2^m = 128 से m = 7 सेलेक्ट लाइनें प्राप्त होती हैं।"
    },
    {
      "id": 33,
      "questionNumber": 33,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a 256-to-1 data selector (multiplexer), how many selection lines are required?",
      "question_hi": "एक 256-टू-1 डेटा चयनकर्ता (मल्टीप्लेक्सर) में कितनी चयन लाइनों की आवश्यकता होती है?",
      "options": {
        "A": "8",
        "B": "9",
        "C": "7",
        "D": "64"
      },
      "options_hi": {
        "A": "8",
        "B": "9",
        "C": "7",
        "D": "64"
      },
      "correctAnswer": "A",
      "explanation": "2^m = 256 implies m = 8 select lines.",
      "explanation_hi": "2^m = 256 से m = 8 सेलेक्ट लाइनें प्राप्त होती हैं।"
    },
    {
      "id": 34,
      "questionNumber": 34,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a 512-to-1 data selector (multiplexer), how many selection lines are required?",
      "question_hi": "एक 512-टू-1 डेटा चयनकर्ता (मल्टीप्लेक्सर) में कितनी चयन लाइनों की आवश्यकता होती है?",
      "options": {
        "A": "9",
        "B": "10",
        "C": "8",
        "D": "128"
      },
      "options_hi": {
        "A": "9",
        "B": "10",
        "C": "8",
        "D": "128"
      },
      "correctAnswer": "A",
      "explanation": "2^m = 512 implies m = 9 select lines.",
      "explanation_hi": "2^m = 512 से m = 9 सेलेक्ट लाइनें प्राप्त होती हैं।"
    },
    {
      "id": 35,
      "questionNumber": 35,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In a 1024-to-1 data selector (multiplexer), how many selection lines are required?",
      "question_hi": "एक 1024-टू-1 डेटा चयनकर्ता (मल्टीप्लेक्सर) में कितनी चयन लाइनों की आवश्यकता होती है?",
      "options": {
        "A": "10",
        "B": "11",
        "C": "9",
        "D": "256"
      },
      "options_hi": {
        "A": "10",
        "B": "11",
        "C": "9",
        "D": "256"
      },
      "correctAnswer": "A",
      "explanation": "2^m = 1024 implies m = 10 select lines.",
      "explanation_hi": "2^m = 1024 से m = 10 सेलेक्ट लाइनें प्राप्त होती हैं।"
    },
    {
      "id": 36,
      "questionNumber": 36,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In relational database design case 31, what is the significance of the attribute closure (X+) in determining candidate keys?",
      "question_hi": "रिलेशनल डेटाबेस डिज़ाइन केस 31 में, उम्मीदवार कुंजी निर्धारित करने में विशेषता क्लोजर (X+) का क्या महत्व है?",
      "options": {
        "A": "If the attribute closure X+ contains all attributes of relation R, then X is a Superkey of R",
        "B": "X+ only calculates foreign keys",
        "C": "X+ indicates physical disk sector allocation",
        "D": "X+ eliminates duplicate rows in SQL queries"
      },
      "options_hi": {
        "A": "यदि विशेषता क्लोजर X+ में संबंध R की सभी विशेषताएं शामिल हैं, तो X संबंध R की एक सुपरकी (Superkey) है",
        "B": "X+ केवल विदेशी कुंजी निकालता है",
        "C": "X+ डिस्क सेक्टर दर्शाता है",
        "D": "X+ डुप्लिकेट हटाता है"
      },
      "correctAnswer": "A",
      "explanation": "Computing the closure of an attribute set X using Armstrong axioms determines if X can functionally determine all attributes in R. Case 31 demonstrates superkey verification.",
      "explanation_hi": "विशेषता क्लोजर (X+) द्वारा यह जांचा जाता है कि क्या X संबंध के सभी कॉलमों को निर्धारित कर सकता है। यदि हाँ, तो वह सुपरकी है।"
    },
    {
      "id": 37,
      "questionNumber": 37,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In relational database design case 32, what is the significance of the attribute closure (X+) in determining candidate keys?",
      "question_hi": "रिलेशनल डेटाबेस डिज़ाइन केस 32 में, उम्मीदवार कुंजी निर्धारित करने में विशेषता क्लोजर (X+) का क्या महत्व है?",
      "options": {
        "A": "If the attribute closure X+ contains all attributes of relation R, then X is a Superkey of R",
        "B": "X+ only calculates foreign keys",
        "C": "X+ indicates physical disk sector allocation",
        "D": "X+ eliminates duplicate rows in SQL queries"
      },
      "options_hi": {
        "A": "यदि विशेषता क्लोजर X+ में संबंध R की सभी विशेषताएं शामिल हैं, तो X संबंध R की एक सुपरकी (Superkey) है",
        "B": "X+ केवल विदेशी कुंजी निकालता है",
        "C": "X+ डिस्क सेक्टर दर्शाता है",
        "D": "X+ डुप्लिकेट हटाता है"
      },
      "correctAnswer": "A",
      "explanation": "Computing the closure of an attribute set X using Armstrong axioms determines if X can functionally determine all attributes in R. Case 32 demonstrates superkey verification.",
      "explanation_hi": "विशेषता क्लोजर (X+) द्वारा यह जांचा जाता है कि क्या X संबंध के सभी कॉलमों को निर्धारित कर सकता है। यदि हाँ, तो वह सुपरकी है।"
    },
    {
      "id": 38,
      "questionNumber": 38,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In relational database design case 33, what is the significance of the attribute closure (X+) in determining candidate keys?",
      "question_hi": "रिलेशनल डेटाबेस डिज़ाइन केस 33 में, उम्मीदवार कुंजी निर्धारित करने में विशेषता क्लोजर (X+) का क्या महत्व है?",
      "options": {
        "A": "If the attribute closure X+ contains all attributes of relation R, then X is a Superkey of R",
        "B": "X+ only calculates foreign keys",
        "C": "X+ indicates physical disk sector allocation",
        "D": "X+ eliminates duplicate rows in SQL queries"
      },
      "options_hi": {
        "A": "यदि विशेषता क्लोजर X+ में संबंध R की सभी विशेषताएं शामिल हैं, तो X संबंध R की एक सुपरकी (Superkey) है",
        "B": "X+ केवल विदेशी कुंजी निकालता है",
        "C": "X+ डिस्क सेक्टर दर्शाता है",
        "D": "X+ डुप्लिकेट हटाता है"
      },
      "correctAnswer": "A",
      "explanation": "Computing the closure of an attribute set X using Armstrong axioms determines if X can functionally determine all attributes in R. Case 33 demonstrates superkey verification.",
      "explanation_hi": "विशेषता क्लोजर (X+) द्वारा यह जांचा जाता है कि क्या X संबंध के सभी कॉलमों को निर्धारित कर सकता है। यदि हाँ, तो वह सुपरकी है।"
    },
    {
      "id": 39,
      "questionNumber": 39,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In relational database design case 34, what is the significance of the attribute closure (X+) in determining candidate keys?",
      "question_hi": "रिलेशनल डेटाबेस डिज़ाइन केस 34 में, उम्मीदवार कुंजी निर्धारित करने में विशेषता क्लोजर (X+) का क्या महत्व है?",
      "options": {
        "A": "If the attribute closure X+ contains all attributes of relation R, then X is a Superkey of R",
        "B": "X+ only calculates foreign keys",
        "C": "X+ indicates physical disk sector allocation",
        "D": "X+ eliminates duplicate rows in SQL queries"
      },
      "options_hi": {
        "A": "यदि विशेषता क्लोजर X+ में संबंध R की सभी विशेषताएं शामिल हैं, तो X संबंध R की एक सुपरकी (Superkey) है",
        "B": "X+ केवल विदेशी कुंजी निकालता है",
        "C": "X+ डिस्क सेक्टर दर्शाता है",
        "D": "X+ डुप्लिकेट हटाता है"
      },
      "correctAnswer": "A",
      "explanation": "Computing the closure of an attribute set X using Armstrong axioms determines if X can functionally determine all attributes in R. Case 34 demonstrates superkey verification.",
      "explanation_hi": "विशेषता क्लोजर (X+) द्वारा यह जांचा जाता है कि क्या X संबंध के सभी कॉलमों को निर्धारित कर सकता है। यदि हाँ, तो वह सुपरकी है।"
    },
    {
      "id": 40,
      "questionNumber": 40,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In relational database design case 35, what is the significance of the attribute closure (X+) in determining candidate keys?",
      "question_hi": "रिलेशनल डेटाबेस डिज़ाइन केस 35 में, उम्मीदवार कुंजी निर्धारित करने में विशेषता क्लोजर (X+) का क्या महत्व है?",
      "options": {
        "A": "If the attribute closure X+ contains all attributes of relation R, then X is a Superkey of R",
        "B": "X+ only calculates foreign keys",
        "C": "X+ indicates physical disk sector allocation",
        "D": "X+ eliminates duplicate rows in SQL queries"
      },
      "options_hi": {
        "A": "यदि विशेषता क्लोजर X+ में संबंध R की सभी विशेषताएं शामिल हैं, तो X संबंध R की एक सुपरकी (Superkey) है",
        "B": "X+ केवल विदेशी कुंजी निकालता है",
        "C": "X+ डिस्क सेक्टर दर्शाता है",
        "D": "X+ डुप्लिकेट हटाता है"
      },
      "correctAnswer": "A",
      "explanation": "Computing the closure of an attribute set X using Armstrong axioms determines if X can functionally determine all attributes in R. Case 35 demonstrates superkey verification.",
      "explanation_hi": "विशेषता क्लोजर (X+) द्वारा यह जांचा जाता है कि क्या X संबंध के सभी कॉलमों को निर्धारित कर सकता है। यदि हाँ, तो वह सुपरकी है।"
    },
    {
      "id": 41,
      "questionNumber": 41,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In relational database design case 36, what is the significance of the attribute closure (X+) in determining candidate keys?",
      "question_hi": "रिलेशनल डेटाबेस डिज़ाइन केस 36 में, उम्मीदवार कुंजी निर्धारित करने में विशेषता क्लोजर (X+) का क्या महत्व है?",
      "options": {
        "A": "If the attribute closure X+ contains all attributes of relation R, then X is a Superkey of R",
        "B": "X+ only calculates foreign keys",
        "C": "X+ indicates physical disk sector allocation",
        "D": "X+ eliminates duplicate rows in SQL queries"
      },
      "options_hi": {
        "A": "यदि विशेषता क्लोजर X+ में संबंध R की सभी विशेषताएं शामिल हैं, तो X संबंध R की एक सुपरकी (Superkey) है",
        "B": "X+ केवल विदेशी कुंजी निकालता है",
        "C": "X+ डिस्क सेक्टर दर्शाता है",
        "D": "X+ डुप्लिकेट हटाता है"
      },
      "correctAnswer": "A",
      "explanation": "Computing the closure of an attribute set X using Armstrong axioms determines if X can functionally determine all attributes in R. Case 36 demonstrates superkey verification.",
      "explanation_hi": "विशेषता क्लोजर (X+) द्वारा यह जांचा जाता है कि क्या X संबंध के सभी कॉलमों को निर्धारित कर सकता है। यदि हाँ, तो वह सुपरकी है।"
    },
    {
      "id": 42,
      "questionNumber": 42,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In relational database design case 37, what is the significance of the attribute closure (X+) in determining candidate keys?",
      "question_hi": "रिलेशनल डेटाबेस डिज़ाइन केस 37 में, उम्मीदवार कुंजी निर्धारित करने में विशेषता क्लोजर (X+) का क्या महत्व है?",
      "options": {
        "A": "If the attribute closure X+ contains all attributes of relation R, then X is a Superkey of R",
        "B": "X+ only calculates foreign keys",
        "C": "X+ indicates physical disk sector allocation",
        "D": "X+ eliminates duplicate rows in SQL queries"
      },
      "options_hi": {
        "A": "यदि विशेषता क्लोजर X+ में संबंध R की सभी विशेषताएं शामिल हैं, तो X संबंध R की एक सुपरकी (Superkey) है",
        "B": "X+ केवल विदेशी कुंजी निकालता है",
        "C": "X+ डिस्क सेक्टर दर्शाता है",
        "D": "X+ डुप्लिकेट हटाता है"
      },
      "correctAnswer": "A",
      "explanation": "Computing the closure of an attribute set X using Armstrong axioms determines if X can functionally determine all attributes in R. Case 37 demonstrates superkey verification.",
      "explanation_hi": "विशेषता क्लोजर (X+) द्वारा यह जांचा जाता है कि क्या X संबंध के सभी कॉलमों को निर्धारित कर सकता है। यदि हाँ, तो वह सुपरकी है।"
    },
    {
      "id": 43,
      "questionNumber": 43,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In relational database design case 38, what is the significance of the attribute closure (X+) in determining candidate keys?",
      "question_hi": "रिलेशनल डेटाबेस डिज़ाइन केस 38 में, उम्मीदवार कुंजी निर्धारित करने में विशेषता क्लोजर (X+) का क्या महत्व है?",
      "options": {
        "A": "If the attribute closure X+ contains all attributes of relation R, then X is a Superkey of R",
        "B": "X+ only calculates foreign keys",
        "C": "X+ indicates physical disk sector allocation",
        "D": "X+ eliminates duplicate rows in SQL queries"
      },
      "options_hi": {
        "A": "यदि विशेषता क्लोजर X+ में संबंध R की सभी विशेषताएं शामिल हैं, तो X संबंध R की एक सुपरकी (Superkey) है",
        "B": "X+ केवल विदेशी कुंजी निकालता है",
        "C": "X+ डिस्क सेक्टर दर्शाता है",
        "D": "X+ डुप्लिकेट हटाता है"
      },
      "correctAnswer": "A",
      "explanation": "Computing the closure of an attribute set X using Armstrong axioms determines if X can functionally determine all attributes in R. Case 38 demonstrates superkey verification.",
      "explanation_hi": "विशेषता क्लोजर (X+) द्वारा यह जांचा जाता है कि क्या X संबंध के सभी कॉलमों को निर्धारित कर सकता है। यदि हाँ, तो वह सुपरकी है।"
    },
    {
      "id": 44,
      "questionNumber": 44,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In relational database design case 39, what is the significance of the attribute closure (X+) in determining candidate keys?",
      "question_hi": "रिलेशनल डेटाबेस डिज़ाइन केस 39 में, उम्मीदवार कुंजी निर्धारित करने में विशेषता क्लोजर (X+) का क्या महत्व है?",
      "options": {
        "A": "If the attribute closure X+ contains all attributes of relation R, then X is a Superkey of R",
        "B": "X+ only calculates foreign keys",
        "C": "X+ indicates physical disk sector allocation",
        "D": "X+ eliminates duplicate rows in SQL queries"
      },
      "options_hi": {
        "A": "यदि विशेषता क्लोजर X+ में संबंध R की सभी विशेषताएं शामिल हैं, तो X संबंध R की एक सुपरकी (Superkey) है",
        "B": "X+ केवल विदेशी कुंजी निकालता है",
        "C": "X+ डिस्क सेक्टर दर्शाता है",
        "D": "X+ डुप्लिकेट हटाता है"
      },
      "correctAnswer": "A",
      "explanation": "Computing the closure of an attribute set X using Armstrong axioms determines if X can functionally determine all attributes in R. Case 39 demonstrates superkey verification.",
      "explanation_hi": "विशेषता क्लोजर (X+) द्वारा यह जांचा जाता है कि क्या X संबंध के सभी कॉलमों को निर्धारित कर सकता है। यदि हाँ, तो वह सुपरकी है।"
    },
    {
      "id": 45,
      "questionNumber": 45,
      "section": "Computer Science",
      "topic": "Database Management Systems",
      "topic_hi": "डेटाबेस प्रबंधन प्रणाली (DBMS)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In relational database design case 40, what is the significance of the attribute closure (X+) in determining candidate keys?",
      "question_hi": "रिलेशनल डेटाबेस डिज़ाइन केस 40 में, उम्मीदवार कुंजी निर्धारित करने में विशेषता क्लोजर (X+) का क्या महत्व है?",
      "options": {
        "A": "If the attribute closure X+ contains all attributes of relation R, then X is a Superkey of R",
        "B": "X+ only calculates foreign keys",
        "C": "X+ indicates physical disk sector allocation",
        "D": "X+ eliminates duplicate rows in SQL queries"
      },
      "options_hi": {
        "A": "यदि विशेषता क्लोजर X+ में संबंध R की सभी विशेषताएं शामिल हैं, तो X संबंध R की एक सुपरकी (Superkey) है",
        "B": "X+ केवल विदेशी कुंजी निकालता है",
        "C": "X+ डिस्क सेक्टर दर्शाता है",
        "D": "X+ डुप्लिकेट हटाता है"
      },
      "correctAnswer": "A",
      "explanation": "Computing the closure of an attribute set X using Armstrong axioms determines if X can functionally determine all attributes in R. Case 40 demonstrates superkey verification.",
      "explanation_hi": "विशेषता क्लोजर (X+) द्वारा यह जांचा जाता है कि क्या X संबंध के सभी कॉलमों को निर्धारित कर सकता है। यदि हाँ, तो वह सुपरकी है।"
    },
    {
      "id": 46,
      "questionNumber": 46,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which layer of the OSI Reference Model is responsible for End-to-End process communication, error recovery, and flow control?",
      "question_hi": "OSI संदर्भ मॉडल की कौन सी परत एंड-टू-एंड प्रोसेस संचार, त्रुटि पुनर्प्राप्ति और प्रवाह नियंत्रण के लिए जिम्मेदार है?",
      "options": {
        "A": "Transport Layer (Layer 4)",
        "B": "Network Layer (Layer 3)",
        "C": "Data Link Layer (Layer 2)",
        "D": "Session Layer (Layer 5)"
      },
      "options_hi": {
        "A": "ट्रांसपोर्ट लेयर - Transport Layer (परत 4)",
        "B": "नेटवर्क लेयर",
        "C": "डेटा लिंक लेयर",
        "D": "सेशन लेयर"
      },
      "correctAnswer": "A",
      "explanation": "The Transport layer provides end-to-end transparent transfer of data between host processes with port addressing, segmenting, and flow control.",
      "explanation_hi": "ट्रांसपोर्ट लेयर एंड-टू-एंड प्रोसेस संचार, पोर्ट एड्रेसिंग और फ्लो कंट्रोल प्रदान करती है।"
    },
    {
      "id": 47,
      "questionNumber": 47,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In the OSI model, which layer handles Data Encryption, Decryption, Compression, and Translation between abstract syntax and concrete syntax?",
      "question_hi": "OSI मॉडल में, कौन सी परत डेटा एन्क्रिप्शन, डिक्रिप्शन, कम्प्रेशन और सिंटैक्स अनुवाद को संभालती है?",
      "options": {
        "A": "Presentation Layer (Layer 6)",
        "B": "Application Layer (Layer 7)",
        "C": "Session Layer (Layer 5)",
        "D": "Data Link Layer (Layer 2)"
      },
      "options_hi": {
        "A": "प्रेजेंटेशन लेयर - Presentation Layer (परत 6)",
        "B": "एप्लिकेशन लेयर",
        "C": "सेशन लेयर",
        "D": "डेटा लिंक लेयर"
      },
      "correctAnswer": "A",
      "explanation": "The Presentation layer deals with data representation, ASN.1 syntax encoding, compression, and TLS/SSL encryption.",
      "explanation_hi": "प्रेजेंटेशन लेयर डेटा प्रारूप, कम्प्रेशन और एन्क्रिप्शन/डिक्रिप्शन संभालती है।"
    },
    {
      "id": 48,
      "questionNumber": 48,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the maximum data rate (channel capacity C) of a noiseless transmission channel of bandwidth B according to Nyquist's Theorem?",
      "question_hi": "नाइक्विस्ट प्रमेय के अनुसार बैंडविड्थ B वाले एक शोर-रहित (Noiseless) चैनल की अधिकतम डेटा दर (क्षमता C) क्या है?",
      "options": {
        "A": "C = 2 * B * log_2(M) bps (where M is number of discrete signal levels)",
        "B": "C = B * log_2(1 + S/N)",
        "C": "C = B * M",
        "D": "C = 2B / M"
      },
      "options_hi": {
        "A": "C = 2 * B * log_2(M) bps (जहाँ M सिग्नल स्तरों की संख्या है)",
        "B": "C = B * log_2(1 + S/N)",
        "C": "C = B * M",
        "D": "C = 2B / M"
      },
      "correctAnswer": "A",
      "explanation": "Nyquist's formula for noiseless channels is C = 2B log2(M) bits per second.",
      "explanation_hi": "नाइक्विस्ट फॉर्मूला: शोर-रहित चैनल के लिए C = 2 * B * log2(M) बिट प्रति सेकंड।"
    },
    {
      "id": 49,
      "questionNumber": 49,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "According to Shannon's Channel Capacity Theorem, what is the maximum theoretical bit rate of a noisy channel with bandwidth B and Signal-to-Noise Ratio (SNR)?",
      "question_hi": "शैनन चैनल क्षमता प्रमेय के अनुसार, बैंडविड्थ B और सिग्नल-टू-नॉइज़ अनुपात (SNR) वाले शोर चैनल की अधिकतम सैद्धांतिक बिट दर क्या है?",
      "options": {
        "A": "C = B * log_2(1 + S/N) bps",
        "B": "C = 2 * B * log_2(M)",
        "C": "C = B * (S/N)",
        "D": "C = log_2(B * SNR)"
      },
      "options_hi": {
        "A": "C = B * log_2(1 + S/N) bps",
        "B": "C = 2 * B * log_2(M)",
        "C": "C = B * (S/N)",
        "D": "C = log_2(B * SNR)"
      },
      "correctAnswer": "A",
      "explanation": "Shannon capacity C = B log2(1 + SNR) sets the fundamental upper limit on error-free transmission over Gaussian noisy channels.",
      "explanation_hi": "शैनन क्षमता सूत्र: C = B * log2(1 + S/N) बिट प्रति सेकंड।"
    },
    {
      "id": 50,
      "questionNumber": 50,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Go-Back-N ARQ protocol with an m-bit sequence number, what is the MAXIMUM allowable Sender Window Size?",
      "question_hi": "m-बिट अनुक्रम संख्या वाले गो-बैक-N ARQ प्रोटोकॉल में प्रेषक विंडो का अधिकतम अनुमेय आकार क्या है?",
      "options": {
        "A": "2^m - 1",
        "B": "2^m",
        "C": "2^(m - 1)",
        "D": "m - 1"
      },
      "options_hi": {
        "A": "2^m - 1",
        "B": "2^m",
        "C": "2^(m - 1)",
        "D": "m - 1"
      },
      "correctAnswer": "A",
      "explanation": "In Go-Back-N, the sender window cannot exceed 2^m - 1 to prevent ambiguity between new frames and retransmitted frames upon lost ACKs.",
      "explanation_hi": "गो-बैक-N में प्रेषक विंडो का अधिकतम आकार 2^m - 1 होता है ताकि नए और पुराने फ्रेम में भ्रम न हो।"
    },
    {
      "id": 51,
      "questionNumber": 51,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Selective Repeat ARQ protocol with an m-bit sequence number, what is the MAXIMUM allowable Sender and Receiver Window Size?",
      "question_hi": "m-बिट अनुक्रम संख्या वाले सेलेक्टिव रिपीट ARQ प्रोटोकॉल में प्रेषक और रिसीवर विंडो का अधिकतम अनुमेय आकार क्या होता है?",
      "options": {
        "A": "2^(m - 1)",
        "B": "2^m - 1",
        "C": "2^m",
        "D": "m / 2"
      },
      "options_hi": {
        "A": "2^(m - 1)",
        "B": "2^m - 1",
        "C": "2^m",
        "D": "m / 2"
      },
      "correctAnswer": "A",
      "explanation": "In Selective Repeat, W_sender + W_receiver <= 2^m; symmetric windows yield W = 2^(m-1).",
      "explanation_hi": "सेलेक्टिव रिपीट में भ्रम से बचने के लिए दोनों विंडो का आकार अधिकतम 2^(m - 1) हो सकता है।"
    },
    {
      "id": 52,
      "questionNumber": 52,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the maximum theoretical channel throughput efficiency of Pure ALOHA protocol?",
      "question_hi": "प्योर अलोहा (Pure ALOHA) प्रोटोकॉल की अधिकतम सैद्धांतिक थ्रूपुट दक्षता क्या है?",
      "options": {
        "A": "18.4% (1 / (2e))",
        "B": "36.8% (1 / e)",
        "C": "50.0%",
        "D": "100.0%"
      },
      "options_hi": {
        "A": "18.4% (1 / (2e))",
        "B": "36.8% (1 / e)",
        "C": "50.0%",
        "D": "100.0%"
      },
      "correctAnswer": "A",
      "explanation": "Pure ALOHA has a vulnerable period of 2 * T_fr, giving maximum throughput S = G * e^(-2G) = 1/(2e) = 0.184 (18.4%) at G = 0.5.",
      "explanation_hi": "प्योर अलोहा की अधिकतम दक्षता 18.4% (1/2e) होती है।"
    },
    {
      "id": 53,
      "questionNumber": 53,
      "section": "Computer Science",
      "topic": "Digital Logic",
      "topic_hi": "डिजिटल लॉजिक",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the speed-power product (SPP) of a digital logic family, and in what unit is it measured?",
      "question_hi": "डिजिटल लॉजिक परिवार का स्पीड-पावर उत्पाद (SPP) क्या है, और इसे किस इकाई में मापा जाता है?",
      "options": {
        "A": "The product of propagation delay and power dissipation, measured in Picojoules (pJ)",
        "B": "The ratio of clock speed to voltage, measured in MegaHertz per Volt",
        "C": "The product of gate area and capacitance, measured in Farads",
        "D": "The ratio of fan-in to fan-out, dimensionless"
      },
      "options_hi": {
        "A": "प्रोपेगेशन डिले और पावर अपव्यय का गुणनफल, जिसे पिकोजूल (pJ) में मापा जाता है",
        "B": "क्लॉक गति और वोल्टेज का अनुपात, जिसे मेगाहर्ट्ज़ प्रति वोल्ट में मापा जाता है",
        "C": "गेट क्षेत्रफल और धारिता का गुणनफल, जिसे फैराड में मापा जाता है",
        "D": "फैन-इन और फैन-आउट का अनुपात, विमाहीन"
      },
      "correctAnswer": "A",
      "explanation": "Speed-Power Product (SPP) = Propagation Delay (ns) × Power Dissipation (mW) = Energy in Picojoules (pJ). A lower SPP value signifies a superior, more energy-efficient logic family.",
      "explanation_hi": "स्पीड-पावर प्रोडक्ट (SPP) गेट के प्रोपेगेशन डिले और बिजली अपव्यय का गुणनफल होता है। इसकी इकाई जूल (आमतौर पर पिकोजूल pJ) होती है। कम SPP बेहतर दक्षता को दर्शाता है।"
    },
    {
      "id": 54,
      "questionNumber": 54,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Why does Ethernet (IEEE 802.3 CSMA/CD) mandate a MINIMUM frame size of 64 bytes (512 bits)?",
      "question_hi": "ईथरनेट (IEEE 802.3 CSMA/CD) न्यूनतम 64 बाइट (512 बिट्स) के फ्रेम आकार को अनिवार्य क्यों बनाता है?",
      "options": {
        "A": "To ensure transmission duration is at least twice the maximum round-trip propagation delay (T_trans >= 2 * T_prop), allowing reliable collision detection before transmission ends",
        "B": "To store large IP headers",
        "C": "To keep cables warm",
        "D": "To match ATM cell size"
      },
      "options_hi": {
        "A": "यह सुनिश्चित करने के लिए कि ट्रांसमिशन समय राउंड-ट्रिप प्रोपेगेशन डिले से कम से कम दोगुना हो (T_trans >= 2 * T_prop), जिससे टकराव का पता लगाया जा सके",
        "B": "बड़ा हेडर रखना",
        "C": "केबल गर्म रखना",
        "D": "ATM सेल"
      },
      "correctAnswer": "A",
      "explanation": "A station must still be transmitting when a collision signal returns; hence T_frame >= 2 * T_prop, setting the 64-byte minimum.",
      "explanation_hi": "फ्रेम भेजने से पहले टकराव का पता लगाने के लिए ट्रांसमिशन समय राउंड-ट्रिप डिले (2 * T_prop) से बड़ा होना चाहिए।"
    },
    {
      "id": 55,
      "questionNumber": 55,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What algorithm is used by CSMA/CD on Ethernet after a collision to determine how long a station must wait before retransmitting?",
      "question_hi": "ईथरनेट पर टकराव (Collision) के बाद CSMA/CD द्वारा पुनः प्रयास करने से पहले प्रतीक्षा समय निर्धारित करने के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
      "options": {
        "A": "Binary Exponential Backoff Algorithm",
        "B": "Dijkstra's Shortest Path",
        "C": "Token Passing",
        "D": "Leaky Bucket"
      },
      "options_hi": {
        "A": "बाइनरी एक्सपोनेंशियल बैकऑफ एल्गोरिदम (Binary Exponential Backoff)",
        "B": "डिजक्स्ट्रा",
        "C": "टोकन पासिंग",
        "D": "लीकी बकेट"
      },
      "correctAnswer": "A",
      "explanation": "After collision k (k <= 10), station chooses random wait time r in range [0, 2^k - 1] slot times.",
      "explanation_hi": "टकराव के बाद बैकऑफ एल्गोरिदम [0, 2^k - 1] स्लॉट्स के बीच रैंडम समय चुनता है।"
    },
    {
      "id": 56,
      "questionNumber": 56,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In IPv4 addressing, what is the default Subnet Mask for a Class C network?",
      "question_hi": "IPv4 एड्रेसिंग में, क्लास C नेटवर्क के लिए डिफ़ॉल्ट सबनेट मास्क क्या होता है?",
      "options": {
        "A": "255.255.255.0 (/24)",
        "B": "255.255.0.0 (/16)",
        "C": "255.0.0.0 (/8)",
        "D": "255.255.255.240 (/28)"
      },
      "options_hi": {
        "A": "255.255.255.0 (/24)",
        "B": "255.255.0.0 (/16)",
        "C": "255.0.0.0 (/8)",
        "D": "255.255.255.240 (/28)"
      },
      "correctAnswer": "A",
      "explanation": "Class C uses 24 network bits (110 prefix) and 8 host bits, yielding mask 255.255.255.0.",
      "explanation_hi": "क्लास C में 24 बिट नेटवर्क और 8 बिट होस्ट होते हैं, अतः मास्क 255.255.255.0 होता है।"
    },
    {
      "id": 57,
      "questionNumber": 57,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "How many usable host IP addresses are provided by a subnet with CIDR prefix /27?",
      "question_hi": "CIDR प्रीफ़िक्स /27 वाले सबनेट द्वारा कितने प्रयोग करने योग्य (Usable) होस्ट आईपी पते प्रदान किए जाते हैं?",
      "options": {
        "A": "30 usable hosts",
        "B": "32 usable hosts",
        "C": "62 usable hosts",
        "D": "28 usable hosts"
      },
      "options_hi": {
        "A": "30 प्रयोग करने योग्य होस्ट",
        "B": "32 होस्ट",
        "C": "62 होस्ट",
        "D": "28 होस्ट"
      },
      "correctAnswer": "A",
      "explanation": "Host bits h = 32 - 27 = 5. Total IPs = 2^5 = 32. Usable = 2^h - 2 = 32 - 2 = 30 (excluding network and broadcast IDs).",
      "explanation_hi": "होस्ट बिट = 32 - 27 = 5। कुल आईपी = 32। नेटवर्क और ब्रॉडकास्ट घटाने पर प्रयोग योग्य = 30।"
    },
    {
      "id": 58,
      "questionNumber": 58,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the function of the Address Resolution Protocol (ARP)?",
      "question_hi": "एड्रेस रिज़ॉल्यूशन प्रोटोकॉल (ARP) का क्या कार्य है?",
      "options": {
        "A": "Maps a known 32-bit IPv4 logical address to a 48-bit physical MAC address on a local network segment",
        "B": "Maps MAC to IP",
        "C": "Translates domain names to IP",
        "D": "Assigns dynamic IP addresses"
      },
      "options_hi": {
        "A": "स्थानीय नेटवर्क पर ज्ञात 32-बिट IPv4 तार्किक पते को 48-बिट भौतिक MAC पते में मैप करता है",
        "B": "MAC को IP में बदलना",
        "C": "DNS अनुवाद",
        "D": "डायनामिक IP देना"
      },
      "correctAnswer": "A",
      "explanation": "ARP broadcasts an ARP Request query to resolve the MAC hardware address corresponding to an IP address.",
      "explanation_hi": "ARP ज्ञात IP पते के अनुरूप भौतिक MAC पते को खोजने के लिए उपयोग किया जाता है।"
    },
    {
      "id": 59,
      "questionNumber": 59,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In distance-vector routing protocols (like RIP), what classic convergence pathology occurs when a link breaks?",
      "question_hi": "दूरी-वेक्टर रूटिंग प्रोटोकॉल (जैसे RIP) में लिंक टूटने पर कौन सी क्लासिक अभिसरण विकृति (Convergence Pathology) उत्पन्न होती है?",
      "options": {
        "A": "Count-to-Infinity Problem (Routing Loops)",
        "B": "Buffer Overflow",
        "C": "Starvation",
        "D": "Deadlock"
      },
      "options_hi": {
        "A": "काउंट-टू-इनफिनिटी समस्या / रूटिंग लूप (Count-to-Infinity Problem)",
        "B": "बफर ओवरफ्लो",
        "C": "भुखमरी",
        "D": "डेडलॉक"
      },
      "correctAnswer": "A",
      "explanation": "When a link goes down, neighbors slowly increment metric step-by-step towards infinity; mitigated by split horizon and poison reverse.",
      "explanation_hi": "लिंक टूटने पर राउटर धीरे-धीरे मीट्रिक बढ़ाते हुए 16 (अनंत) तक गिनते हैं जिसे काउंट-टू-इनफिनिटी कहते हैं।"
    },
    {
      "id": 60,
      "questionNumber": 60,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What algorithm does the Open Shortest Path First (OSPF) link-state routing protocol execute to calculate shortest paths?",
      "question_hi": "ओपन शॉर्टेस्ट पाथ फर्स्ट (OSPF) लिंक-स्टेट रूटिंग प्रोटोकॉल सबसे छोटे रास्तों की गणना के लिए किस एल्गोरिदम का उपयोग करता है?",
      "options": {
        "A": "Dijkstra's Shortest Path Algorithm",
        "B": "Bellman-Ford Algorithm",
        "C": "Floyd-Warshall Algorithm",
        "D": "Kruskal's Algorithm"
      },
      "options_hi": {
        "A": "डिजक्स्ट्रा का शॉर्टेस्ट पाथ एल्गोरिदम (Dijkstra's Algorithm)",
        "B": "बेलमैन-फोर्ड",
        "C": "फ्लॉयड-वॉर्शेल",
        "D": "क्रुस्कल"
      },
      "correctAnswer": "A",
      "explanation": "OSPF floods link state advertisements (LSAs) to build an identical topology database, then runs Dijkstra's algorithm to compute the shortest-path tree.",
      "explanation_hi": "OSPF प्रत्येक नोड पर लिंक-स्टेट टोपोलॉजी पर डिजक्स्ट्रा एल्गोरिदम चलाकर रूटिंग टेबल बनाता है।"
    },
    {
      "id": 61,
      "questionNumber": 61,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In TCP connection establishment, what is the sequence of the 3-Way Handshake?",
      "question_hi": "TCP कनेक्शन स्थापना में 3-वे हैंडशेक (3-Way Handshake) का क्रम क्या होता है?",
      "options": {
        "A": "SYN -> SYN-ACK -> ACK",
        "B": "SYN -> ACK -> DATA",
        "C": "ACK -> SYN -> SYN-ACK",
        "D": "HELLO -> READY -> CONNECT"
      },
      "options_hi": {
        "A": "SYN -> SYN-ACK -> ACK",
        "B": "SYN -> ACK -> DATA",
        "C": "ACK -> SYN -> SYN-ACK",
        "D": "HELLO -> READY -> CONNECT"
      },
      "correctAnswer": "A",
      "explanation": "Client sends SYN; Server responds with SYN-ACK; Client replies with ACK, establishing full-duplex synchronized sequence numbers.",
      "explanation_hi": "क्लाइंट SYN भेजता है, सर्वर SYN-ACK लौटाता है, और क्लाइंट ACK भेजकर कनेक्शन स्थापित करता है।"
    },
    {
      "id": 62,
      "questionNumber": 62,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In TCP Congestion Control, what phase immediately follows Slow Start once the Congestion Window (cwnd) reaches the Slow Start Threshold (ssthresh)?",
      "question_hi": "TCP कंजेशन कंट्रोल में, जैसे ही कंजेशन विंडो (cwnd) थ्रेशोल्ड (ssthresh) तक पहुँचती है, स्लो स्टार्ट के तुरंत बाद कौन सा चरण शुरू होता है?",
      "options": {
        "A": "Congestion Avoidance (Additive Increase: cwnd increases linearly by 1 MSS per RTT)",
        "B": "Fast Retransmit",
        "C": "Exponential Growth Phase",
        "D": "Connection Teardown"
      },
      "options_hi": {
        "A": "कंजेशन अवॉइडेंस (Congestion Avoidance - प्रति RTT 1 MSS की रैखिक वृद्धि)",
        "B": "फास्ट रिट्रांसमिट",
        "C": "घातीय वृद्धि",
        "D": "समाप्ति"
      },
      "correctAnswer": "A",
      "explanation": "Beyond ssthresh, TCP switches from exponential doubling (Slow Start) to linear probing (Congestion Avoidance / Additive Increase).",
      "explanation_hi": "थ्रेशोल्ड के बाद विंडो हर राउंड ट्रिप में केवल 1 MSS बढ़ती है (Additive Increase)।"
    },
    {
      "id": 63,
      "questionNumber": 63,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What transport layer protocol and default port does the Domain Name System (DNS) use for standard client name lookup queries?",
      "question_hi": "डोमेन नेम सिस्टम (DNS) मानक क्लाइंट नाम खोज प्रश्नों के लिए किस ट्रांसपोर्ट लेयर प्रोटोकॉल और पोर्ट का उपयोग करता है?",
      "options": {
        "A": "UDP Port 53",
        "B": "TCP Port 80",
        "C": "UDP Port 67",
        "D": "TCP Port 443"
      },
      "options_hi": {
        "A": "UDP पोर्ट 53",
        "B": "TCP पोर्ट 80",
        "C": "UDP पोर्ट 67",
        "D": "TCP पोर्ट 443"
      },
      "correctAnswer": "A",
      "explanation": "DNS standard queries use lightweight UDP on port 53 (TCP port 53 is reserved for zone transfers and responses > 512 bytes).",
      "explanation_hi": "मानक DNS लुकअप के लिए UDP पोर्ट 53 का उपयोग किया जाता है।"
    },
    {
      "id": 64,
      "questionNumber": 64,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In the Dynamic Host Configuration Protocol (DHCP), what is the correct 4-step message exchange sequence (DORA)?",
      "question_hi": "डायनामिक होस्ट कॉन्फ़िगरेशन प्रोटोकॉल (DHCP) में सही 4-चरणीय संदेश विनिमय क्रम (DORA) क्या है?",
      "options": {
        "A": "Discover -> Offer -> Request -> Acknowledgment",
        "B": "Discovery -> Open -> Read -> Acknowledge",
        "C": "Data -> Output -> Receive -> Accept",
        "D": "Dial -> Obtain -> Register -> Allocate"
      },
      "options_hi": {
        "A": "डिस्कवर -> ऑफर -> रिक्वेस्ट -> एक्नॉलेजमेंट (DORA)",
        "B": "डिस्कवरी -> ओपन -> रीड",
        "C": "डेटा -> आउटपुट",
        "D": "डायल -> रजिस्टर"
      },
      "correctAnswer": "A",
      "explanation": "DORA: Client broadcasts DHCP Discover; Server responds with DHCP Offer; Client broadcasts DHCP Request; Server finalizes with DHCP Ack.",
      "explanation_hi": "DHCP प्रक्रिया का क्रम DORA है: Discover, Offer, Request, Acknowledgment।"
    },
    {
      "id": 65,
      "questionNumber": 65,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary difference between File Transfer Protocol (FTP) and HTTP regarding connections?",
      "question_hi": "कनेक्शन के संबंध में फ़ाइल स्थानांतरण प्रोटोकॉल (FTP) और HTTP के बीच प्राथमिक अंतर क्या है?",
      "options": {
        "A": "FTP uses two parallel connections: a Control Connection on port 21 and a Data Connection on port 20 (out-of-band control)",
        "B": "FTP uses UDP exclusively",
        "C": "HTTP is stateful while FTP is stateless",
        "D": "FTP cannot transfer binary files"
      },
      "options_hi": {
        "A": "FTP दो समानांतर कनेक्शन का उपयोग करता है: पोर्ट 21 पर कंट्रोल कनेक्शन और पोर्ट 20 पर डेटा कनेक्शन (आउट-ऑफ-बैंड कंट्रोल)",
        "B": "FTP केवल UDP चलाता है",
        "C": "HTTP स्टेटफुल है",
        "D": "FTP बाइनरी फ़ाइल नहीं भेजता"
      },
      "correctAnswer": "A",
      "explanation": "FTP separates commands (port 21) from data transmission (port 20), whereas HTTP interleaves requests and responses over a single TCP connection.",
      "explanation_hi": "FTP दो कनेक्शन उपयोग करता है: कमांड के लिए पोर्ट 21 और डेटा भेजने के लिए पोर्ट 20।"
    },
    {
      "id": 66,
      "questionNumber": 66,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "At which OSI layer does a 'Repeater / Hub' operate, and what is its primary network function?",
      "question_hi": "एक 'रिपीटर / हब' किस OSI परत पर कार्य करता है और इसका प्राथमिक कार्य क्या है?",
      "options": {
        "A": "Operates at Physical Layer (Layer 1); Regenerates attenuated electrical or optical signals without inspecting packet headers or frames",
        "B": "Operates at Transport Layer; allocates port numbers",
        "C": "Operates at Physical Layer; runs DNS queries",
        "D": "Operates at Session Layer; encrypts packets"
      },
      "options_hi": {
        "A": "Physical Layer (Layer 1) पर कार्य करता है; Regenerates attenuated electrical or optical signals without inspecting packet headers or frames",
        "B": "ट्रांसपोर्ट लेयर",
        "C": "फिजिकल लेयर",
        "D": "सेशन लेयर"
      },
      "correctAnswer": "A",
      "explanation": "A Repeater / Hub operates at Physical Layer (Layer 1). Regenerates attenuated electrical or optical signals without inspecting packet headers or frames.",
      "explanation_hi": "रिपीटर / हब Physical Layer (Layer 1) पर कार्य करता है। Regenerates attenuated electrical or optical signals without inspecting packet headers or frames।"
    },
    {
      "id": 67,
      "questionNumber": 67,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "At which OSI layer does a 'Bridge / Layer 2 Switch' operate, and what is its primary network function?",
      "question_hi": "एक 'ब्रिज / लेयर 2 स्विच' किस OSI परत पर कार्य करता है और इसका प्राथमिक कार्य क्या है?",
      "options": {
        "A": "Operates at Data Link Layer (Layer 2); Filters and forwards frames based on MAC addresses, maintaining separate collision domains per port",
        "B": "Operates at Transport Layer; allocates port numbers",
        "C": "Operates at Physical Layer; runs DNS queries",
        "D": "Operates at Session Layer; encrypts packets"
      },
      "options_hi": {
        "A": "Data Link Layer (Layer 2) पर कार्य करता है; Filters and forwards frames based on MAC addresses, maintaining separate collision domains per port",
        "B": "ट्रांसपोर्ट लेयर",
        "C": "फिजिकल लेयर",
        "D": "सेशन लेयर"
      },
      "correctAnswer": "A",
      "explanation": "A Bridge / Layer 2 Switch operates at Data Link Layer (Layer 2). Filters and forwards frames based on MAC addresses, maintaining separate collision domains per port.",
      "explanation_hi": "ब्रिज / लेयर 2 स्विच Data Link Layer (Layer 2) पर कार्य करता है। Filters and forwards frames based on MAC addresses, maintaining separate collision domains per port।"
    },
    {
      "id": 68,
      "questionNumber": 68,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "At which OSI layer does a 'Router / Layer 3 Switch' operate, and what is its primary network function?",
      "question_hi": "एक 'राउटर / लेयर 3 स्विच' किस OSI परत पर कार्य करता है और इसका प्राथमिक कार्य क्या है?",
      "options": {
        "A": "Operates at Network Layer (Layer 3); Forwards packets across disparate subnets based on destination IP addresses and routing tables, dividing broadcast domains",
        "B": "Operates at Transport Layer; allocates port numbers",
        "C": "Operates at Physical Layer; runs DNS queries",
        "D": "Operates at Session Layer; encrypts packets"
      },
      "options_hi": {
        "A": "Network Layer (Layer 3) पर कार्य करता है; Forwards packets across disparate subnets based on destination IP addresses and routing tables, dividing broadcast domains",
        "B": "ट्रांसपोर्ट लेयर",
        "C": "फिजिकल लेयर",
        "D": "सेशन लेयर"
      },
      "correctAnswer": "A",
      "explanation": "A Router / Layer 3 Switch operates at Network Layer (Layer 3). Forwards packets across disparate subnets based on destination IP addresses and routing tables, dividing broadcast domains.",
      "explanation_hi": "राउटर / लेयर 3 स्विच Network Layer (Layer 3) पर कार्य करता है। Forwards packets across disparate subnets based on destination IP addresses and routing tables, dividing broadcast domains।"
    },
    {
      "id": 69,
      "questionNumber": 69,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "At which OSI layer does a 'Application Gateway / Proxy' operate, and what is its primary network function?",
      "question_hi": "एक 'एप्लिकेशन गेटवे / प्रॉक्सी' किस OSI परत पर कार्य करता है और इसका प्राथमिक कार्य क्या है?",
      "options": {
        "A": "Operates at Application Layer (Layer 7); Translates protocols between distinct network architectures and inspects application payload content",
        "B": "Operates at Transport Layer; allocates port numbers",
        "C": "Operates at Physical Layer; runs DNS queries",
        "D": "Operates at Session Layer; encrypts packets"
      },
      "options_hi": {
        "A": "Application Layer (Layer 7) पर कार्य करता है; Translates protocols between distinct network architectures and inspects application payload content",
        "B": "ट्रांसपोर्ट लेयर",
        "C": "फिजिकल लेयर",
        "D": "सेशन लेयर"
      },
      "correctAnswer": "A",
      "explanation": "A Application Gateway / Proxy operates at Application Layer (Layer 7). Translates protocols between distinct network architectures and inspects application payload content.",
      "explanation_hi": "एप्लिकेशन गेटवे / प्रॉक्सी Application Layer (Layer 7) पर कार्य करता है। Translates protocols between distinct network architectures and inspects application payload content।"
    },
    {
      "id": 70,
      "questionNumber": 70,
      "section": "Computer Science",
      "topic": "Computer Networks",
      "topic_hi": "कंप्यूटर नेटवर्क (Computer Networks)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In computer network communications case 1, what is the purpose of the 48-bit Media Access Control (MAC) address?",
      "question_hi": "कंप्यूटर नेटवर्क संचार केस 1 में, 48-बिट मीडिया एक्सेस कंट्रोल (MAC) पते का क्या उद्देश्य है?",
      "options": {
        "A": "Uniquely identifies a network interface card (NIC) hardware at the Data Link Layer on a local physical segment",
        "B": "Routes packets globally across the public Internet",
        "C": "Identifies the user email account",
        "D": "Encodes encryption private keys"
      },
      "options_hi": {
        "A": "स्थानीय भौतिक सेगमेंट पर डेटा लिंक लेयर पर नेटवर्क इंटरफेस कार्ड (NIC) हार्डवेयर को विशिष्ट रूप से पहचानता है",
        "B": "इंटरनेट पर पैकेट रूट करता है",
        "C": "ईमेल खाता पहचानता है",
        "D": "प्राइवेट कुंजी कोड करता है"
      },
      "correctAnswer": "A",
      "explanation": "MAC addresses are burned into network hardware (OUI + vendor serial), providing link-layer framing identity in local broadcast domains. Case 1 reinforces IEEE 802 MAC addressing.",
      "explanation_hi": "MAC पता 48 बिट का हार्डवेयर पता होता है जो स्थानीय लैन नेटवर्क में फ्रेम भेजने के लिए अनिवार्य है।"
    },
    {
      "id": 71,
      "questionNumber": 71,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 51, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 51 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 51 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 72,
      "questionNumber": 72,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 52, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 52 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 52 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 73,
      "questionNumber": 73,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 53, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 53 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 53 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 74,
      "questionNumber": 74,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 54, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 54 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 54 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 75,
      "questionNumber": 75,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 55, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 55 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 55 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 76,
      "questionNumber": 76,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 56, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 56 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 56 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 77,
      "questionNumber": 77,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 57, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 57 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 57 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 78,
      "questionNumber": 78,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 58, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 58 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 58 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 79,
      "questionNumber": 79,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 59, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 59 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 59 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 80,
      "questionNumber": 80,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 60, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 60 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 60 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 81,
      "questionNumber": 81,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 61, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 61 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 61 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 82,
      "questionNumber": 82,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 62, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 62 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 62 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 83,
      "questionNumber": 83,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 63, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 63 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 63 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 84,
      "questionNumber": 84,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 64, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 64 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 64 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 85,
      "questionNumber": 85,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 65, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 65 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 65 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 86,
      "questionNumber": 86,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 66, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 66 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 66 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 87,
      "questionNumber": 87,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 67, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 67 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 67 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 88,
      "questionNumber": 88,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 68, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 68 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 68 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 89,
      "questionNumber": 89,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 69, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 69 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 69 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 90,
      "questionNumber": 90,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 70, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 70 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 70 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 91,
      "questionNumber": 91,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 71, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 71 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 71 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 92,
      "questionNumber": 92,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 72, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 72 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 72 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 93,
      "questionNumber": 93,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 73, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 73 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 73 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 94,
      "questionNumber": 94,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 74, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 74 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 74 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 95,
      "questionNumber": 95,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 75, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 75 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 75 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 96,
      "questionNumber": 96,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 76, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 76 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 76 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 97,
      "questionNumber": 97,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 77, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 77 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 77 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 98,
      "questionNumber": 98,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 78, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 78 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 78 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 99,
      "questionNumber": 99,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 79, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 79 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 79 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 100,
      "questionNumber": 100,
      "section": "Computer Science",
      "topic": "Theory of Computation",
      "topic_hi": "कम्प्यूटेशन का सिद्धांत (TOC)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In formal language theory case 80, what is the language generated by the grammar S -> aSb | epsilon?",
      "question_hi": "औपचारिक भाषा सिद्धांत केस 80 में, व्याकरण S -> aSb | epsilon द्वारा उत्पन्न भाषा क्या है?",
      "options": {
        "A": "L = {a^n b^n | n >= 0} (a deterministic context-free language)",
        "B": "L = {a^n b^m | n != m}",
        "C": "All strings of a and b",
        "D": "Empty set"
      },
      "options_hi": {
        "A": "L = {a^n b^n | n >= 0} (एक नियतात्मक संदर्भ-मुक्त भाषा)",
        "B": "L = {a^n b^m | n != m}",
        "C": "सभी स्ट्रिंग्स",
        "D": "रिक्त सेट"
      },
      "correctAnswer": "A",
      "explanation": "S -> aSb generates equal numbers of matched 'a's and 'b's in order, producing the classic non-regular CFL L = {a^n b^n | n >= 0}. Case 80 validates CFG derivations.",
      "explanation_hi": "व्याकरण S -> aSb | epsilon समान संख्या में a और b बनाता है: {a^n b^n | n >= 0} जो एक संदर्भ-मुक्त भाषा (CFL) है।"
    },
    {
      "id": 101,
      "questionNumber": 101,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Instructional Objectives - Scenario 12), which instructional strategy best reflects this principle: 'Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound'?",
      "question_hi": "शिक्षण अभ्यास (अनुदेशात्मक उद्देश्य - परिदृश्य 12) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 12 exemplifies Instructional Objectives: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए।"
    },
    {
      "id": 102,
      "questionNumber": 102,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Instructional Objectives - Scenario 13), which instructional strategy best reflects this principle: 'Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound'?",
      "question_hi": "शिक्षण अभ्यास (अनुदेशात्मक उद्देश्य - परिदृश्य 13) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 13 exemplifies Instructional Objectives: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए।"
    },
    {
      "id": 103,
      "questionNumber": 103,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Instructional Objectives - Scenario 14), which instructional strategy best reflects this principle: 'Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound'?",
      "question_hi": "शिक्षण अभ्यास (अनुदेशात्मक उद्देश्य - परिदृश्य 14) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 14 exemplifies Instructional Objectives: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए।"
    },
    {
      "id": 104,
      "questionNumber": 104,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Instructional Objectives - Scenario 15), which instructional strategy best reflects this principle: 'Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound'?",
      "question_hi": "शिक्षण अभ्यास (अनुदेशात्मक उद्देश्य - परिदृश्य 15) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 15 exemplifies Instructional Objectives: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए।"
    },
    {
      "id": 105,
      "questionNumber": 105,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Instructional Objectives - Scenario 16), which instructional strategy best reflects this principle: 'Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound'?",
      "question_hi": "शिक्षण अभ्यास (अनुदेशात्मक उद्देश्य - परिदृश्य 16) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 16 exemplifies Instructional Objectives: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए।"
    },
    {
      "id": 106,
      "questionNumber": 106,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Instructional Objectives - Scenario 17), which instructional strategy best reflects this principle: 'Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound'?",
      "question_hi": "शिक्षण अभ्यास (अनुदेशात्मक उद्देश्य - परिदृश्य 17) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 17 exemplifies Instructional Objectives: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए।"
    },
    {
      "id": 107,
      "questionNumber": 107,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Instructional Objectives - Scenario 18), which instructional strategy best reflects this principle: 'Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound'?",
      "question_hi": "शिक्षण अभ्यास (अनुदेशात्मक उद्देश्य - परिदृश्य 18) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 18 exemplifies Instructional Objectives: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए।"
    },
    {
      "id": 108,
      "questionNumber": 108,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Instructional Objectives - Scenario 19), which instructional strategy best reflects this principle: 'Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound'?",
      "question_hi": "शिक्षण अभ्यास (अनुदेशात्मक उद्देश्य - परिदृश्य 19) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 19 exemplifies Instructional Objectives: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए।"
    },
    {
      "id": 109,
      "questionNumber": 109,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Instructional Objectives - Scenario 20), which instructional strategy best reflects this principle: 'Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound'?",
      "question_hi": "शिक्षण अभ्यास (अनुदेशात्मक उद्देश्य - परिदृश्य 20) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 20 exemplifies Instructional Objectives: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए।"
    },
    {
      "id": 110,
      "questionNumber": 110,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Instructional Objectives - Scenario 21), which instructional strategy best reflects this principle: 'Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound'?",
      "question_hi": "शिक्षण अभ्यास (अनुदेशात्मक उद्देश्य - परिदृश्य 21) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 21 exemplifies Instructional Objectives: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए।"
    },
    {
      "id": 111,
      "questionNumber": 111,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Instructional Objectives - Scenario 22), which instructional strategy best reflects this principle: 'Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound'?",
      "question_hi": "शिक्षण अभ्यास (अनुदेशात्मक उद्देश्य - परिदृश्य 22) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 22 exemplifies Instructional Objectives: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए।"
    },
    {
      "id": 112,
      "questionNumber": 112,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Instructional Objectives - Scenario 23), which instructional strategy best reflects this principle: 'Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound'?",
      "question_hi": "शिक्षण अभ्यास (अनुदेशात्मक उद्देश्य - परिदृश्य 23) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 23 exemplifies Instructional Objectives: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए।"
    },
    {
      "id": 113,
      "questionNumber": 113,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Instructional Objectives - Scenario 24), which instructional strategy best reflects this principle: 'Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound'?",
      "question_hi": "शिक्षण अभ्यास (अनुदेशात्मक उद्देश्य - परिदृश्य 24) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 24 exemplifies Instructional Objectives: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए।"
    },
    {
      "id": 114,
      "questionNumber": 114,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Instructional Objectives - Scenario 25), which instructional strategy best reflects this principle: 'Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound'?",
      "question_hi": "शिक्षण अभ्यास (अनुदेशात्मक उद्देश्य - परिदृश्य 25) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 25 exemplifies Instructional Objectives: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए।"
    },
    {
      "id": 115,
      "questionNumber": 115,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Instructional Objectives - Scenario 26), which instructional strategy best reflects this principle: 'Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound'?",
      "question_hi": "शिक्षण अभ्यास (अनुदेशात्मक उद्देश्य - परिदृश्य 26) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 26 exemplifies Instructional Objectives: Instructional objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: अनुदेशात्मक उद्देश्य विशिष्ट, मापने योग्य, प्राप्त करने योग्य और समयबद्ध होने चाहिए।"
    },
    {
      "id": 116,
      "questionNumber": 116,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला (Art of Teaching)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In pedagogical practice (Lecture-cum-Demonstration Method - Scenario 1), which instructional strategy best reflects this principle: 'Combines verbal explanation with concrete apparatus demonstrations, ideal for secondary science and computer teaching'?",
      "question_hi": "शिक्षण अभ्यास (व्याख्यान-सह-प्रदर्शन विधि - परिदृश्य 1) में, कौन सी शिक्षण रणनीति इस सिद्धांत को सर्वोत्तम रूप से दर्शाती है: 'विज्ञान और कंप्यूटर शिक्षण में मौखिक व्याख्या के साथ प्रायोगिक प्रदर्शन को जोड़ती है'?",
      "options": {
        "A": "Implementing student-centric active engagement aligned with: Combines verbal explanation with concrete apparatus demonstrations, ideal for secondary science and computer teaching",
        "B": "Enforcing rote repetition without conceptual understanding",
        "C": "Restricting classroom dialogue strictly to textbook reading",
        "D": "Administering punitive exams without constructive feedback"
      },
      "options_hi": {
        "A": "सिद्धांत के अनुसार छात्र-केन्द्रित सक्रिय शिक्षण लागू करना: विज्ञान और कंप्यूटर शिक्षण में मौखिक व्याख्या के साथ प्रायोगिक प्रदर्शन को जोड़ती है",
        "B": "बिना समझे रटना",
        "C": "केवल किताब पढ़ना",
        "D": "बिना फीडबैक के दंडनीय परीक्षा"
      },
      "correctAnswer": "A",
      "explanation": "Effective pedagogy in secondary education requires aligning instructional design with empirical learning principles. Scenario 1 exemplifies Lecture-cum-Demonstration Method: Combines verbal explanation with concrete apparatus demonstrations, ideal for secondary science and computer teaching.",
      "explanation_hi": "माध्यमिक शिक्षा में प्रभावी शिक्षण सिद्धांत: विज्ञान और कंप्यूटर शिक्षण में मौखिक व्याख्या के साथ प्रायोगिक प्रदर्शन को जोड़ती है।"
    },
    {
      "id": 117,
      "questionNumber": 117,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Lawrence Kohlberg's theory, what stage of moral reasoning is characterized by seeking approval from others by being a 'Good Boy' or 'Nice Girl'?",
      "question_hi": "कोहलबर्ग के नैतिक विकास के सिद्धांत में 'अच्छा लड़का/अच्छी लड़की' (Good Boy/Nice Girl) बनकर दूसरों से प्रशंसा पाने की विशेषता किस चरण की है?",
      "options": {
        "A": "Stage 3: Interpersonal Conformity Orientation",
        "B": "Stage 1: Punishment and Obedience Orientation",
        "C": "Stage 4: Law and Order Orientation",
        "D": "Stage 5: Social Contract Orientation"
      },
      "options_hi": {
        "A": "चरण 3: अंतर्वैयक्तिक अनुरूपता उन्मुखीकरण (अच्छा लड़का / अच्छी लड़की)",
        "B": "चरण 1: दंड एवं आज्ञाकारिता उन्मुखीकरण",
        "C": "चरण 4: कानून और व्यवस्था उन्मुखीकरण",
        "D": "चरण 5: सामाजिक अनुबंध उन्मुखीकरण"
      },
      "correctAnswer": "A",
      "explanation": "Stage 3 (Conventional Level) centers on interpersonal concordance: moral behavior is that which pleases, helps, or is approved of by family, teachers, and peers.",
      "explanation_hi": "चरण 3 (अच्छा लड़का-अच्छी लड़की अनुकूलन) में बच्चा ऐसा व्यवहार करता है जिससे उसे परिवार और समाज में दूसरों की स्वीकृति, प्रशंसा और स्नेह प्राप्त हो सके।"
    },
    {
      "id": 118,
      "questionNumber": 118,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary critique leveled by psychologist Carol Gilligan against Lawrence Kohlberg's moral development stages?",
      "question_hi": "मनोवैज्ञानिक कैरल गिलिगन द्वारा लॉरेंस कोहलबर्ग के नैतिक विकास चरणों के विरुद्ध क्या मुख्य आलोचना की गई थी?",
      "options": {
        "A": "Kohlberg's research was gender-biased (all-male sample) and favored an ethic of justice over female ethics of care and relationship",
        "B": "Kohlberg ignored the role of school examinations",
        "C": "Kohlberg's dilemmas did not involve adult problems",
        "D": "Kohlberg used quantitative statistics incorrectly"
      },
      "options_hi": {
        "A": "कोहलबर्ग का शोध लिंग-पक्षपाती था (केवल पुरुष प्रतिदर्श) और इसने देखभाल व संबंधों की नारीवादी नैतिकता की तुलना में न्याय की नैतिकता को प्राथमिकता दी",
        "B": "कोहलबर्ग ने स्कूल परीक्षाओं की भूमिका की अनदेखी की",
        "C": "कोहलबर्ग के दुविधाओं में वयस्कों की समस्याएं शामिल नहीं थीं",
        "D": "कोहलबर्ग ने मात्रात्मक आंकड़ों का गलत उपयोग किया"
      },
      "correctAnswer": "A",
      "explanation": "Carol Gilligan argued in 'In a Different Voice' that Kohlberg's model reflected male socialization based on abstract justice and rights, while undervaluing female moral reasoning centered on interpersonal care, responsibility, and empathy.",
      "explanation_hi": "कैरल गिलिगन ने तर्क दिया कि कोहलबर्ग का सिद्धांत पुरुष-प्रधान न्याय की नैतिकता (Ethics of Justice) पर आधारित था और उसने महिलाओं की देखभाल, सहानुभूति और रिश्तों पर आधारित नैतिकता (Ethics of Care) की उपेक्षा की।"
    },
    {
      "id": 119,
      "questionNumber": 119,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Erik Erikson's 8 Psychosocial Development Stages, what central crisis confronts adolescents aged 12 to 18 years?",
      "question_hi": "एरिक एरिक्सन के 8 मनोसामाजिक विकास चरणों में 12 से 18 वर्ष के किशोरों के सामने कौन सा मुख्य द्वंद्व (संकट) होता है?",
      "options": {
        "A": "Identity vs. Role Confusion",
        "B": "Industry vs. Inferiority",
        "C": "Initiative vs. Guilt",
        "D": "Intimacy vs. Isolation"
      },
      "options_hi": {
        "A": "पहचान बनाम भूमिका भ्रम (Identity vs. Role Confusion)",
        "B": "परिश्रम बनाम हीनता",
        "C": "पहल बनाम अपराधबोध",
        "D": "आत्मीयता बनाम अलगाव"
      },
      "correctAnswer": "A",
      "explanation": "During adolescence (Stage 5), teens grapple with 'Identity vs. Role Confusion', seeking to establish an integrated sense of self, occupational aspirations, and personal values.",
      "explanation_hi": "किशोरावस्था (12-18 वर्ष) में व्यक्ति अपनी स्वयं की पहचान, मूल्यों और भविष्य के लक्ष्यों को खोजने का प्रयास करता है। इसमें विफलता 'भूमिका भ्रम' (Role Confusion) को जन्म देती है।"
    },
    {
      "id": 120,
      "questionNumber": 120,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला",
      "marks": 1,
      "negativeMarks": 0,
      "question": "How many distinct forms of intelligence were originally proposed by Howard Gardner in his Multiple Intelligences Theory?",
      "question_hi": "हावर्ड गार्डनर ने अपने बहु-बुद्धि सिद्धांत (Multiple Intelligences Theory) में मूल रूप से कितनी विशिष्ट प्रकार की बुद्धिमत्ता प्रस्तावित की थी?",
      "options": {
        "A": "8 (originally 7, later expanded to 8 and 9)",
        "B": "2 (General and Specific)",
        "C": "3 (Analytical, Creative, Practical)",
        "D": "120 factors"
      },
      "options_hi": {
        "A": "8 (मूल रूप से 7, बाद में 8 और 9 तक विस्तारित / Howard Gardner 8 Intelligences)",
        "B": "2 (सामान्य और विशिष्ट)",
        "C": "3 (विश्लेषणात्मक, रचनात्मक, व्यावहारिक)",
        "D": "120 कारक"
      },
      "correctAnswer": "A",
      "explanation": "Gardner posited that human intelligence is pluralistic, consisting of 8 distinct modalities: Linguistic, Logical-Mathematical, Spatial, Musical, Bodily-Kinesthetic, Interpersonal, Intrapersonal, and Naturalist.",
      "explanation_hi": "हावर्ड गार्डनर ने बहु-बुद्धि सिद्धांत में माना कि बुद्धि एक कारक नहीं बल्कि बहु-आयामी होती है: भाषाई, तार्किक-गणितीय, स्थानिक, संगीतात्मक, शारीरिक-गतिक, अंतर्वैयक्तिक, अंतरावैयक्तिक और प्रकृतिवादी।"
    },
    {
      "id": 121,
      "questionNumber": 121,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What three sub-theories form Robert Sternberg's Triarchic Theory of Human Intelligence?",
      "question_hi": "रॉबर्ट स्टर्नबर्ग के मानव बुद्धि के त्रि-तत्व सिद्धांत (Triarchic Theory) में कौन से तीन घटक शामिल हैं?",
      "options": {
        "A": "Analytical (Componential), Creative (Experiential), and Practical (Contextual) Intelligence",
        "B": "Verbal, Mathematical, and Spatial Intelligence",
        "C": "Emotional, Social, and Physical Intelligence",
        "D": "Fluid, Crystallized, and Spatial Intelligence"
      },
      "options_hi": {
        "A": "विश्लेषणात्मक (घटकीय), रचनात्मक (अनुभवात्मक), और व्यावहारिक (संदर्भात्मक) बुद्धि",
        "B": "मौखिक, गणितीय और स्थानिक बुद्धि",
        "C": "भावनात्मक, सामाजिक और शारीरिक बुद्धि",
        "D": "तरल, क्रिस्टलीकृत और स्थानिक बुद्धि"
      },
      "correctAnswer": "A",
      "explanation": "Sternberg's Triarchic Theory defines intelligence across: 1) Analytical (problem-solving and abstract evaluation), 2) Creative (generating novel ideas), and 3) Practical (adapting to, shaping, and selecting real-world environments).",
      "explanation_hi": "स्टर्नबर्ग के त्रि-तत्व सिद्धांत में बुद्धि के तीन रूप हैं: 1. विश्लेषणात्मक (समस्या विश्लेषण), 2. रचनात्मक (नए विचारों का सृजन), और 3. व्यावहारिक (दैनिक जीवन और परिवेश में अनुकूलन)।"
    },
    {
      "id": 122,
      "questionNumber": 122,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the highest and final level in Abraham Maslow's Hierarchy of Human Needs?",
      "question_hi": "अब्राहम मैस्लो के मानवीय आवश्यकताओं के पदानुक्रम में सर्वोच्च और अंतिम स्तर कौन सा है?",
      "options": {
        "A": "Self-Actualization",
        "B": "Esteem Needs",
        "C": "Love and Belongingness Needs",
        "D": "Safety and Security Needs"
      },
      "options_hi": {
        "A": "आत्म-साक्षात्कार / आत्म-सिद्धि (Self-Actualization)",
        "B": "सम्मान की आवश्यकताएं",
        "C": "प्रेम और अपनेपन की आवश्यकताएं",
        "D": "सुरक्षा की आवश्यकताएं"
      },
      "correctAnswer": "A",
      "explanation": "Maslow's pyramid progresses from deficiency needs to growth needs: Physiological -> Safety -> Love/Belonging -> Esteem -> Self-Actualization (realizing one's highest personal potential).",
      "explanation_hi": "मैस्लो के आवश्यकता पदानुक्रम का शीर्ष स्तर 'आत्म-साक्षात्कार' (Self-Actualization) है, जिसका अर्थ है अपनी पूर्ण क्षमता और आंतरिक प्रतिभा को पहचानकर उसे चरितार्थ करना।"
    },
    {
      "id": 123,
      "questionNumber": 123,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In Gestalt psychology, what famous animal experiment was conducted by Wolfgang Kohler to demonstrate 'Insight Learning'?",
      "question_hi": "गेस्टाल्ट मनोविज्ञान में 'सूझ / अंतर्दृष्टि द्वारा सीखने' (Insight Learning) को प्रदर्शित करने के लिए वोल्फगैंग कोहलर ने किस प्रसिद्ध जानवर पर प्रयोग किया था?",
      "options": {
        "A": "Sultan the chimpanzee using boxes and sticks to reach hanging bananas",
        "B": "Pavlov's dog salivating to a metronome",
        "C": "Thorndike's cat in a puzzle box",
        "D": "Skinner's pigeon pecking at a light"
      },
      "options_hi": {
        "A": "सुल्तान नामक चिम्पांजी द्वारा लटके हुए केलों तक पहुँचने के लिए छड़ियों और बक्सों का उपयोग",
        "B": "पावलव का कुत्ता",
        "C": "थार्नडाइक की बिल्ली",
        "D": "स्किनर का कबूतर"
      },
      "correctAnswer": "A",
      "explanation": "Kohler placed Sultan the chimpanzee in a cage with bananas hung high. After trial, Sultan experienced an 'Aha! moment' (sudden cognitive insight), joining hollow bamboo sticks and stacking boxes to reach the fruit.",
      "explanation_hi": "कोहलर ने कैनरी द्वीप पर 'सुल्तान' नामक चिम्पांजी पर प्रयोग किया था। उसने देखा कि सीखना केवल प्रयास और त्रुटि से नहीं, बल्कि स्थिति का समग्र प्रत्यक्षीकरण करके अचानक आई 'सूझ' (Insight/Aha! moment) से होता है।"
    },
    {
      "id": 124,
      "questionNumber": 124,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What formula for calculating the Intelligence Quotient (IQ) was originally conceptualized by William Stern and standardized by Lewis Terman?",
      "question_hi": "बुद्धि लब्धि (IQ) की गणना करने के लिए विलियम स्टर्न द्वारा संकल्पित और लुईस टर्मन द्वारा मानकीकृत सूत्र क्या था?",
      "options": {
        "A": "IQ = (Mental Age / Chronological Age) * 100",
        "B": "IQ = (Chronological Age / Mental Age) * 100",
        "C": "IQ = (Mental Age + Chronological Age) / 2",
        "D": "IQ = Mental Age * 10"
      },
      "options_hi": {
        "A": "IQ = (मानसिक आयु / वास्तविक आयु) * 100 [MA/CA * 100]",
        "B": "IQ = (वास्तविक आयु / मानसिक आयु) * 100",
        "C": "IQ = (मानसिक आयु + वास्तविक आयु) / 2",
        "D": "IQ = मानसिक आयु * 10"
      },
      "correctAnswer": "A",
      "explanation": "William Stern proposed the ratio of Mental Age (MA) to Chronological Age (CA). Lewis Terman multiplied this ratio by 100 in the Stanford-Binet test to eliminate decimal fractions: IQ = (MA / CA) * 100.",
      "explanation_hi": "बुद्धि लब्धि (IQ) का सूत्र टर्मन द्वारा दिया गया: IQ = (मानसिक आयु / वास्तविक आयु) × 100। यदि किसी 10 वर्ष के बालक की मानसिक आयु 12 वर्ष है, तो उसका IQ = (12/10) × 100 = 120 होगा।"
    },
    {
      "id": 125,
      "questionNumber": 125,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary characteristic of the Dalton Plan (Laboratory Plan) of education developed by Helen Parkhurst?",
      "question_hi": "हेलेन पार्कहर्स्ट द्वारा विकसित शिक्षा की डाल्टन योजना (प्रयोगशाला योजना) की प्राथमिक विशेषता क्या है?",
      "options": {
        "A": "Students work independently on individualized monthly contract assignments at their own pace without fixed class timetables",
        "B": "Daily teacher-led lectures with mandatory homework checks",
        "C": "Outdoor military discipline drills",
        "D": "Computerized multiple-choice testing"
      },
      "options_hi": {
        "A": "छात्र बिना किसी निश्चित कक्षा समय सारिणी के अपनी गति से व्यक्तिगत मासिक अनुबंध असाइनमेंट पर स्वतंत्र रूप से कार्य करते हैं",
        "B": "अनिवार्य गृहकार्य जांच के साथ दैनिक शिक्षक-आधारित व्याख्यान",
        "C": "आउटडोर सैन्य अनुशासन अभ्यास",
        "D": "कम्प्यूटरीकृत बहुविकल्पीय परीक्षण"
      },
      "correctAnswer": "A",
      "explanation": "Helen Parkhurst's Dalton Plan (1920) abolished traditional rigid timetables, allowing students to contract for specific monthly assignments and learn independently in subject-specific laboratories with teacher guidance.",
      "explanation_hi": "डाल्टन योजना की शुरुआत हेलेन पार्कहर्स्ट ने की थी। इसमें पारंपरिक समय-सारिणी को समाप्त कर छात्रों को मासिक कार्य अनुबंध (Assignments) दिए जाते हैं, जिसे वे विषय प्रयोगशालाओं में अपनी गति से पूरा करते हैं।"
    },
    {
      "id": 126,
      "questionNumber": 126,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In classroom pedagogy, what does the skill of 'Stimulus Variation' involve during teaching?",
      "question_hi": "कक्षा शिक्षण में 'उद्दीपन परिवर्तन कौशल' (Skill of Stimulus Variation) में क्या शामिल है?",
      "options": {
        "A": "Deliberately changing teacher gestures, voice pitch, movement, and sensory focus to sustain student attention and prevent boredom",
        "B": "Administering surprise written tests every 10 minutes",
        "C": "Varying the subject syllabus each week",
        "D": "Rewarding students with physical gifts"
      },
      "options_hi": {
        "A": "छात्रों का ध्यान बनाए रखने और ऊब को रोकने के लिए शिक्षक के हाव-भाव, आवाज के स्वर, शारीरिक गति और दृश्य-श्रव्य केंद्र को जानबूझकर बदलना",
        "B": "हर 10 मिनट में अचानक लिखित परीक्षा आयोजित करना",
        "C": "प्रत्येक सप्ताह विषय के पाठ्यक्रम को बदलना",
        "D": "छात्रों को भौतिक उपहार देकर पुरस्कृत करना"
      },
      "correctAnswer": "A",
      "explanation": "Stimulus Variation is an essential micro-teaching skill where the teacher modulates vocal pitch, gestures, physical position, interaction styles, and pauses to secure high learner alertness.",
      "explanation_hi": "उद्दीपन परिवर्तन कौशल में शिक्षक कक्षा में एक जगह स्थिर खड़े रहने के बजाय घूमते हैं, आवाज में उतार-चढ़ाव लाते हैं, हाथों के हाव-भाव बदलते हैं ताकि छात्रों का ध्यान केंद्रित रहे और कक्षा नीरस न बने।"
    },
    {
      "id": 127,
      "questionNumber": 127,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary role of the 'Skill of Probing Questions' (अनुशीलन प्रश्न कौशल) in classroom instruction?",
      "question_hi": "कक्षा शिक्षण में 'अनुशीलन प्रश्न कौशल' (Skill of Probing Questions) की प्राथमिक भूमिका क्या है?",
      "options": {
        "A": "Prompting, seeking further information, refocussing, and increasing critical awareness when a student gives an incomplete or incorrect response",
        "B": "Asking simple factual recall questions that require one-word answers",
        "C": "Testing student speed in mental arithmetic",
        "D": "Dismissing incorrect student responses immediately without feedback"
      },
      "options_hi": {
        "A": "जब कोई छात्र अधूरा या गलत उत्तर देता है, तो संकेत देना, विस्तृत जानकारी मांगना, पुनः ध्यान केंद्रित करना और गहन समझ विकसित करना",
        "B": "सरल तथ्यात्मक प्रश्न पूछना जिनके लिए एक शब्द के उत्तर की आवश्यकता होती है",
        "C": "मानसिक अंकगणित में छात्र की गति का परीक्षण करना",
        "D": "बिना किसी प्रतिपुष्टि के गलत उत्तरों को तुरंत खारिज करना"
      },
      "correctAnswer": "A",
      "explanation": "Probing questions go beyond surface recall: components include Prompting, Seeking Further Information, Re-focusing, Redirection, and Increasing Critical Awareness.",
      "explanation_hi": "अनुशीलन प्रश्न कौशल (Probing Questions) में शिक्षक छात्र के अधूरे उत्तर से संतुष्ट न होकर उससे जुड़े उप-प्रश्न पूछकर उसे गहराई से सोचने और सही निष्कर्ष तक स्वयं पहुँचने के लिए प्रेरित करता है।"
    },
    {
      "id": 128,
      "questionNumber": 128,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What are the five steps of Morrison's Unit Method of Teaching in their correct pedagogical sequence?",
      "question_hi": "मॉरिसन की इकाई शिक्षण पद्धति (Unit Method of Teaching) के पांच चरण उनके सही शैक्षणिक क्रम में कौन से हैं?",
      "options": {
        "A": "Exploration -> Presentation -> Assimilation -> Organization -> Recitation",
        "B": "Preparation -> Presentation -> Association -> Generalization -> Application",
        "C": "Engage -> Explore -> Explain -> Elaborate -> Evaluate",
        "D": "Planning -> Teaching -> Testing -> Grading -> Remediation"
      },
      "options_hi": {
        "A": "अन्वेषण (Exploration) -> प्रस्तुतीकरण (Presentation) -> आत्मीकरण (Assimilation) -> व्यवस्थापन (Organization) -> वाचन/प्रस्तुति (Recitation)",
        "B": "प्रस्तावना -> प्रस्तुतीकरण -> तुलना -> सामान्यीकरण -> अनुप्रयोग",
        "C": "संलग्न होना -> अन्वेषण -> व्याख्या -> विस्तार -> मूल्यांकन",
        "D": "योजना -> शिक्षण -> परीक्षण -> ग्रेडिंग -> उपचार"
      },
      "correctAnswer": "A",
      "explanation": "H.C. Morrison's unit mastery approach follows: 1) Exploration (assessing prior knowledge), 2) Presentation (introducing unit concepts), 3) Assimilation (independent student study and laboratory work), 4) Organization (synthesizing content systematically), 5) Recitation (oral or written presentation of mastery).",
      "explanation_hi": "मॉरिसन का इकाई दृष्टिकोण (Unit Approach) बोध स्तर के शिक्षण के लिए है: 1. अन्वेषण (पूर्व ज्ञान जांचना), 2. प्रस्तुतीकरण, 3. आत्मीकरण (गहन स्वाध्याय), 4. व्यवस्थापन (क्रमबद्ध रूप देना), और 5. वाचन (सीखे हुए ज्ञान को अभिव्यक्त करना)।"
    },
    {
      "id": 129,
      "questionNumber": 129,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the primary instructional goal of the Jigsaw Cooperative Learning technique developed by Elliot Aronson?",
      "question_hi": "इलियट एरोनसन द्वारा विकसित जिगसॉ सहकारी शिक्षण तकनीक (Jigsaw Technique) का प्राथमिक शिक्षण लक्ष्य क्या है?",
      "options": {
        "A": "Each student in a home group becomes an 'expert' on one specific segment of learning material, consults with experts from other groups, and then returns to teach their home group members",
        "B": "Students solve physical wooden jigsaw puzzles to measure spatial intelligence",
        "C": "The teacher divides the class based on high and low examination grades",
        "D": "Students compete against each other for individual gold medals"
      },
      "options_hi": {
        "A": "मूल समूह का प्रत्येक छात्र सीखने की सामग्री के एक विशिष्ट खंड पर 'विशेषज्ञ' बनता है, अन्य समूहों के विशेषज्ञों से परामर्श करता है, और फिर अपने मूल समूह के सदस्यों को सिखाने के लिए लौटता है",
        "B": "स्थानिक बुद्धि मापने के लिए छात्र लकड़ी की पहेलियाँ हल करते हैं",
        "C": "शिक्षक परीक्षा अंकों के आधार पर कक्षा को विभाजित करता है",
        "D": "छात्र व्यक्तिगत स्वर्ण पदकों के लिए एक-दूसरे से प्रतिस्पर्धा करते हैं"
      },
      "correctAnswer": "A",
      "explanation": "The Jigsaw strategy structures positive interdependence: students are assigned to home groups and expert groups. Each member is essential to the collective success of the entire team, fostering cooperative accountability and reducing prejudice.",
      "explanation_hi": "जिगसॉ तकनीक (Jigsaw Technique) एक सहकारी शिक्षण रणनीति है जहाँ पाठ को अलग-अलग भागों में बाँटा जाता है। प्रत्येक छात्र अपने भाग का विशेषज्ञ बनकर अन्य समूहों के विशेषज्ञों से चर्चा करता है और फिर अपनी मूल टीम में सबको सिखाता है।"
    },
    {
      "id": 130,
      "questionNumber": 130,
      "section": "Art of Teaching",
      "topic": "Art of Teaching",
      "topic_hi": "शिक्षण कला",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which of the following describes the 'Spiral Curriculum' model proposed by cognitive psychologist Jerome Bruner?",
      "question_hi": "संज्ञानात्मक मनोवैज्ञानिक जेरोम ब्रूनर द्वारा प्रस्तावित 'सर्पिलाकार पाठ्यचर्या' (Spiral Curriculum) मॉडल का वर्णन कौन सा विकल्प करता है?",
      "options": {
        "A": "Revisiting foundational core concepts at continually increasing levels of depth, complexity, and abstraction over successive school grades",
        "B": "Teaching completely unrelated topics each academic term to prevent boredom",
        "C": "Focusing solely on memorizing mathematical formulas in early childhood",
        "D": "Eliminating all examinations until the end of high school"
      },
      "options_hi": {
        "A": "उत्तरोत्तर स्कूल ग्रेडों में गहराई, जटिलता और अमूर्तता के लगातार बढ़ते स्तरों पर मूलभूत अवधारणाओं पर बार-बार लौटना",
        "B": "ऊब को रोकने के लिए प्रत्येक शैक्षणिक सत्र में पूरी तरह से असंबंधित विषय पढ़ाना",
        "C": "बचपन में केवल गणितीय सूत्रों को याद करने पर ध्यान केंद्रित करना",
        "D": "हाई स्कूल के अंत तक सभी परीक्षाओं को समाप्त करना"
      },
      "correctAnswer": "A",
      "explanation": "Bruner's spiral curriculum asserts that any subject can be taught effectively in some intellectually honest form to any child at any stage of development. Key concepts are introduced simply at first and revisited periodically with higher cognitive rigor.",
      "explanation_hi": "ब्रूनर के अनुसार 'सर्पिलाकार पाठ्यचर्या' (Spiral Curriculum) में मुख्य संकल्पनाओं को प्राथमिक स्तर पर सरल रूप में सिखाया जाता है और उच्च कक्षाओं में उसी संकल्पना को अधिक गहराई, जटिलता और अमूर्त स्तर पर दोबारा पढ़ाया जाता है।"
    },
    {
      "id": 131,
      "questionNumber": 131,
      "section": "Other Skills",
      "topic": "General Knowledge & Bihar",
      "topic_hi": "सामान्य ज्ञान एवं बिहार",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which famous district of Bihar is geographically and historically recognized for: 'State capital, ancient Pataliputra founded by Ajatashatru and Udayin along the banks of the Ganges' (Context 1)?",
      "question_hi": "बिहार का कौन सा प्रसिद्ध जिला ऐतिहासिक और भौगोलिक रूप से इसके लिए जाना जाता है: 'State capital, ancient Pataliputra founded by Ajatashatru and Udayin along the banks of the Ganges' (संदर्भ 1)?",
      "options": {
        "A": "Patna",
        "B": "Buxar",
        "C": "Samastipur",
        "D": "Jehanabad"
      },
      "options_hi": {
        "A": "पटना",
        "B": "बक्सर",
        "C": "समस्तीपुर",
        "D": "जहानाबाद"
      },
      "correctAnswer": "A",
      "explanation": "Patna is renowned across Bihar for: State capital, ancient Pataliputra founded by Ajatashatru and Udayin along the banks of the Ganges.",
      "explanation_hi": "पटना का ऐतिहासिक व भौगोलिक महत्व: State capital, ancient Pataliputra founded by Ajatashatru and Udayin along the banks of the Ganges।"
    },
    {
      "id": 132,
      "questionNumber": 132,
      "section": "Other Skills",
      "topic": "Bihar General Knowledge",
      "topic_hi": "बिहार सामान्य ज्ञान",
      "marks": 1,
      "negativeMarks": 0,
      "question": "During the Quit India Movement of 1942, which national leader escaped from Hazaribagh Central Jail on Diwali night to organize the underground 'Azad Dasta' resistance?",
      "question_hi": "1942 के भारत छोड़ो आंदोलन के दौरान, किस राष्ट्रीय नेता ने दिवाली की रात हजारीबाग सेंट्रल जेल से भागकर भूमिगत 'आजाद दस्ता' का गठन किया था?",
      "options": {
        "A": "Jayaprakash Narayan",
        "B": "Ram Manohar Lohia",
        "C": "Acharya Narendra Deva",
        "D": "Yogendra Shukla"
      },
      "options_hi": {
        "A": "जयप्रकाश नारायण",
        "B": "राम मनोहर लोहिया",
        "C": "आचार्य नरेंद्र देव",
        "D": "योगेंद्र शुक्ला"
      },
      "correctAnswer": "A",
      "explanation": "Jayaprakash Narayan (Lok Nayak) escaped from Hazaribagh Central Jail on Diwali night in November 1942 and established the guerrilla resistance group 'Azad Dasta' in the jungles of Nepal.",
      "explanation_hi": "लोकनायक जयप्रकाश नारायण ने नवंबर 1942 में हजारीबाग जेल से फरार होकर नेपाल के तराई जंगलों में 'आजाद दस्ता' का गठन किया था ताकि छापामार संघर्ष चलाया जा सके।"
    },
    {
      "id": 133,
      "questionNumber": 133,
      "section": "Other Skills",
      "topic": "Bihar General Knowledge",
      "topic_hi": "बिहार सामान्य ज्ञान",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Who invited Mahatma Gandhi to Champaran in 1917 to inspect the plight of indigo tenant farmers under the oppressive Tinkathia system?",
      "question_hi": "दमनकारी तिनकठिया प्रथा के तहत नील की खेती करने वाले किसानों की दुर्दशा देखने के लिए 1917 में महात्मा गांधी को चंपारण आने का निमंत्रण किसने दिया था?",
      "options": {
        "A": "Raj Kumar Shukla",
        "B": "Brajkishore Prasad",
        "C": "Dr. Rajendra Prasad",
        "D": "J.B. Kripalani"
      },
      "options_hi": {
        "A": "राज कुमार शुक्ल",
        "B": "ब्रजकिशोर प्रसाद",
        "C": "डॉ. राजेंद्र प्रसाद",
        "D": "जे.बी. कृपलानी"
      },
      "correctAnswer": "A",
      "explanation": "Raj Kumar Shukla, a local farmer leader from Champaran, persistently followed Mahatma Gandhi to the 1916 Lucknow Congress session and persuaded him to visit Champaran, launching India's first civil disobedience movement.",
      "explanation_hi": "चंपारण के किसान नेता पंडित राज कुमार शुक्ल ने 1916 के लखनऊ कांग्रेस अधिवेशन में गांधीजी से मिलकर उन्हें चंपारण आने का आग्रह किया था, जिससे भारत में गांधीजी का पहला सत्याग्रह आरंभ हुआ।"
    },
    {
      "id": 134,
      "questionNumber": 134,
      "section": "Other Skills",
      "topic": "Bihar General Knowledge",
      "topic_hi": "बिहार सामान्य ज्ञान",
      "marks": 1,
      "negativeMarks": 0,
      "question": "According to Census 2011, which district of Bihar has recorded the HIGHEST literacy rate?",
      "question_hi": "2011 की जनगणना के अनुसार, बिहार के किस जिले में सर्वाधिक साक्षरता दर दर्ज की गई है?",
      "options": {
        "A": "Rohtas (73.37%)",
        "B": "Patna (70.68%)",
        "C": "Munger (70.46%)",
        "D": "Bhojpur (70.47%)"
      },
      "options_hi": {
        "A": "रोहतास (73.37%)",
        "B": "पटना (70.68%)",
        "C": "मुंगेर (70.46%)",
        "D": "भोजपुर (70.47%)"
      },
      "correctAnswer": "A",
      "explanation": "As per the 2011 Census, Rohtas district has the highest overall literacy rate in Bihar at 73.37% (Male: 82.88%, Female: 62.97%).",
      "explanation_hi": "2011 की जनगणना के अनुसार, रोहतास जिला बिहार में 73.37% के साथ सर्वाधिक साक्षर जिला है (पुरुष साक्षरता 82.88% और महिला साक्षरता 62.97%)।"
    },
    {
      "id": 135,
      "questionNumber": 135,
      "section": "Other Skills",
      "topic": "Bihar General Knowledge",
      "topic_hi": "बिहार सामान्य ज्ञान",
      "marks": 1,
      "negativeMarks": 0,
      "question": "According to Census 2011, which district of Bihar recorded the LOWEST overall literacy rate?",
      "question_hi": "2011 की जनगणना के अनुसार, बिहार के किस जिले में सबसे कम साक्षरता दर दर्ज की गई है?",
      "options": {
        "A": "Purnia (51.08%)",
        "B": "Saharasa",
        "C": "Katihar",
        "D": "Madhepura"
      },
      "options_hi": {
        "A": "पूर्णिया (51.08%)",
        "B": "सहरसा",
        "C": "कटिहार",
        "D": "मधेपुरा"
      },
      "correctAnswer": "A",
      "explanation": "Purnia has the lowest overall literacy rate in Bihar at 51.08%, while Saharsa has the lowest female literacy rate at 41.68%.",
      "explanation_hi": "2011 की जनगणना में पूर्णिया जिले की कुल साक्षरता दर बिहार में सबसे कम (51.08%) रही, जबकि सबसे कम महिला साक्षरता सहरसा में दर्ज की गई थी।"
    },
    {
      "id": 136,
      "questionNumber": 136,
      "section": "Other Skills",
      "topic": "Environmental Science & Ecology",
      "topic_hi": "पर्यावरण विज्ञान एवं पारिस्थितिकी",
      "marks": 1,
      "negativeMarks": 0,
      "question": "In environmental ecological science (Renewable Energy Sources - Case 1), which statement accurately reflects this principle: 'Solar, wind, hydro, and geothermal energy replenish naturally without emitting greenhouse combustion carbon'?",
      "question_hi": "पर्यावरण विज्ञान (नवीकरणीय ऊर्जा स्रोत - केस 1) में कौन सा कथन इस वैज्ञानिक सिद्धांत को दर्शाता है: 'Solar, wind, hydro, and geothermal energy replenish naturally without emitting greenhouse combustion carbon'?",
      "options": {
        "A": "Accurately validated by ecological principle: Solar, wind, hydro, and geothermal energy replenish naturally without emitting greenhouse combustion carbon",
        "B": "Ecosystems function without solar energy inputs",
        "C": "Pollution increases biodiversity stability",
        "D": "Energy cycles indefinitely within food chains"
      },
      "options_hi": {
        "A": "पारिस्थितिकी सिद्धांत के अनुसार सही: Solar, wind, hydro, and geothermal energy replenish naturally without emitting greenhouse combustion carbon",
        "B": "सौर ऊर्जा के बिना तंत्र चलता है",
        "C": "प्रदूषण से विविधता बढ़ती है",
        "D": "ऊर्जा कभी नष्ट नहीं होती"
      },
      "correctAnswer": "A",
      "explanation": "Environmental ecology principles: Solar, wind, hydro, and geothermal energy replenish naturally without emitting greenhouse combustion carbon.",
      "explanation_hi": "पर्यावरण विज्ञान का सिद्धांत: Solar, wind, hydro, and geothermal energy replenish naturally without emitting greenhouse combustion carbon।"
    },
    {
      "id": 137,
      "questionNumber": 137,
      "section": "Other Skills",
      "topic": "Bihar General Knowledge",
      "topic_hi": "बिहार सामान्य ज्ञान",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the population density of Bihar according to the 2011 Census, making it the most densely populated state in India?",
      "question_hi": "2011 की जनगणना के अनुसार बिहार का जनसंख्या घनत्व कितना है, जो इसे भारत का सबसे सघन आबादी वाला राज्य बनाता है?",
      "options": {
        "A": "1,106 persons per sq. km",
        "B": "1,028 persons per sq. km",
        "C": "860 persons per sq. km",
        "D": "1,250 persons per sq. km"
      },
      "options_hi": {
        "A": "1,106 व्यक्ति प्रति वर्ग किमी",
        "B": "1,028 व्यक्ति प्रति वर्ग किमी",
        "C": "860 व्यक्ति प्रति वर्ग किमी",
        "D": "1,250 व्यक्ति प्रति वर्ग किमी"
      },
      "correctAnswer": "A",
      "explanation": "With 1,106 persons per square kilometer, Bihar ranks first among Indian states in population density, surpassing West Bengal (1,028 per sq km).",
      "explanation_hi": "1,106 व्यक्ति प्रति वर्ग किलोमीटर के जनसंख्या घनत्व के साथ बिहार सभी भारतीय राज्यों में शीर्ष स्थान पर है (राष्ट्रीय औसत 382 व्यक्ति प्रति वर्ग किमी है)।"
    },
    {
      "id": 138,
      "questionNumber": 138,
      "section": "Other Skills",
      "topic": "Bihar General Knowledge",
      "topic_hi": "बिहार सामान्य ज्ञान",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Where is the ONLY National Park in the state of Bihar situated?",
      "question_hi": "बिहार राज्य का एकमात्र राष्ट्रीय उद्यान (National Park) कहाँ स्थित है?",
      "options": {
        "A": "Valmiki National Park, West Champaran",
        "B": "Bhimbandh Wildlife Sanctuary, Munger",
        "C": "Kaimur Wildlife Sanctuary, Rohtas",
        "D": "Gautam Buddha Wildlife Sanctuary, Gaya"
      },
      "options_hi": {
        "A": "वाल्मीकि राष्ट्रीय उद्यान, पश्चिम चंपारण",
        "B": "भीमबांध वन्यजीव अभयारण्य, मुंगेर",
        "C": "कैमूर वन्यजीव अभयारण्य, रोहतास",
        "D": "गौतम बुद्ध वन्यजीव अभयारण्य, गया"
      },
      "correctAnswer": "A",
      "explanation": "Valmiki National Park, located in West Champaran along the Indo-Nepal border, is Bihar's only National Park and Tiger Reserve.",
      "explanation_hi": "पश्चिम चंपारण जिले में स्थित वाल्मीकि राष्ट्रीय उद्यान एवं टाइगर रिजर्व बिहार का एकमात्र राष्ट्रीय उद्यान है, जो भारत-नेपाल सीमा पर गंडक नदी के किनारे फैला हुआ है।"
    },
    {
      "id": 139,
      "questionNumber": 139,
      "section": "Other Skills",
      "topic": "Bihar General Knowledge",
      "topic_hi": "बिहार सामान्य ज्ञान",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Which ancient university in Bihar was established by King Kumaragupta I of the Gupta dynasty in the 5th century CE?",
      "question_hi": "5वीं शताब्दी ईस्वी में गुप्त वंश के सम्राट कुमारगुप्त प्रथम द्वारा बिहार के किस प्राचीन विश्वविद्यालय की स्थापना की गई थी?",
      "options": {
        "A": "Nalanda Mahavihara",
        "B": "Vikramshila University",
        "C": "Odantapuri University",
        "D": "Telhara University"
      },
      "options_hi": {
        "A": "नालंदा महाविहार",
        "B": "विक्रमशिला विश्वविद्यालय",
        "C": "ओदंतपुरी विश्वविद्यालय",
        "D": "तेलहाड़ा विश्वविद्यालय"
      },
      "correctAnswer": "A",
      "explanation": "Nalanda Mahavihara was founded by Gupta Emperor Kumaragupta I (Shakraditya). It became a world-renowned center of Buddhist scholarship until destroyed by Bakhtiyar Khilji in 1193 CE.",
      "explanation_hi": "नालंदा महाविहार की स्थापना गुप्त शासक कुमारगुप्त प्रथम ने की थी। यह विश्व का सबसे प्रसिद्ध बौद्ध शिक्षा केंद्र था, जहां ह्वेनसांग ने अध्ययन और अध्यापन किया था।"
    },
    {
      "id": 140,
      "questionNumber": 140,
      "section": "Other Skills",
      "topic": "Bihar General Knowledge",
      "topic_hi": "बिहार सामान्य ज्ञान",
      "marks": 1,
      "negativeMarks": 0,
      "question": "Who founded the historic Vikramshila University near Kahalgaon in modern Bhagalpur district?",
      "question_hi": "आधुनिक भागलपुर जिले में कहलगांव के निकट ऐतिहासिक विक्रमशिला विश्वविद्यालय की स्थापना किसने की थी?",
      "options": {
        "A": "King Dharmapala of the Pala Dynasty",
        "B": "King Gopala",
        "C": "King Devapala",
        "D": "King Mahipala I"
      },
      "options_hi": {
        "A": "पाल वंश के राजा धर्मपाल",
        "B": "राजा गोपाल",
        "C": "राजा देवपाल",
        "D": "राजा महीपाल प्रथम"
      },
      "correctAnswer": "A",
      "explanation": "Vikramshila University was founded by the Pala Emperor Dharmapala in the late 8th or early 9th century CE. It was famous for Vajrayana Buddhism and Tantric studies.",
      "explanation_hi": "विक्रमशिला विश्वविद्यालय की स्थापना पाल वंशीय शासक धर्मपाल ने 8वीं शताब्दी के उत्तरार्ध में भागलपुर के पास की थी। यह वज्रयान बौद्ध धर्म और तंत्र विद्या का प्रमुख केंद्र था।"
    },
    {
      "id": 141,
      "questionNumber": 141,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय योग्यता (Math)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Simple Interest on a principal of Rs. 2,000 at 5% annual interest for 2 years (Problem 1)?",
      "question_hi": "2,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 1)?",
      "options": {
        "A": "Rs. 200",
        "B": "Rs. 250",
        "C": "Rs. 150",
        "D": "Rs. 300"
      },
      "options_hi": {
        "A": "200 रुपये",
        "B": "250 रुपये",
        "C": "150 रुपये",
        "D": "300 रुपये"
      },
      "correctAnswer": "A",
      "explanation": "SI = (P * R * T) / 100 = (2000 * 5 * 2) / 100 = Rs. 200.",
      "explanation_hi": "साधारण ब्याज = (2000 * 5 * 2) / 100 = 200 रुपये।"
    },
    {
      "id": 142,
      "questionNumber": 142,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय योग्यता (Math)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Simple Interest on a principal of Rs. 3,000 at 5% annual interest for 2 years (Problem 2)?",
      "question_hi": "3,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 2)?",
      "options": {
        "A": "Rs. 300",
        "B": "Rs. 350",
        "C": "Rs. 250",
        "D": "Rs. 400"
      },
      "options_hi": {
        "A": "300 रुपये",
        "B": "350 रुपये",
        "C": "250 रुपये",
        "D": "400 रुपये"
      },
      "correctAnswer": "A",
      "explanation": "SI = (P * R * T) / 100 = (3000 * 5 * 2) / 100 = Rs. 300.",
      "explanation_hi": "साधारण ब्याज = (3000 * 5 * 2) / 100 = 300 रुपये।"
    },
    {
      "id": 143,
      "questionNumber": 143,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय योग्यता (Math)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Simple Interest on a principal of Rs. 4,000 at 5% annual interest for 2 years (Problem 3)?",
      "question_hi": "4,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 3)?",
      "options": {
        "A": "Rs. 400",
        "B": "Rs. 450",
        "C": "Rs. 350",
        "D": "Rs. 500"
      },
      "options_hi": {
        "A": "400 रुपये",
        "B": "450 रुपये",
        "C": "350 रुपये",
        "D": "500 रुपये"
      },
      "correctAnswer": "A",
      "explanation": "SI = (P * R * T) / 100 = (4000 * 5 * 2) / 100 = Rs. 400.",
      "explanation_hi": "साधारण ब्याज = (4000 * 5 * 2) / 100 = 400 रुपये।"
    },
    {
      "id": 144,
      "questionNumber": 144,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय योग्यता (Math)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Simple Interest on a principal of Rs. 5,000 at 5% annual interest for 2 years (Problem 4)?",
      "question_hi": "5,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 4)?",
      "options": {
        "A": "Rs. 500",
        "B": "Rs. 550",
        "C": "Rs. 450",
        "D": "Rs. 600"
      },
      "options_hi": {
        "A": "500 रुपये",
        "B": "550 रुपये",
        "C": "450 रुपये",
        "D": "600 रुपये"
      },
      "correctAnswer": "A",
      "explanation": "SI = (P * R * T) / 100 = (5000 * 5 * 2) / 100 = Rs. 500.",
      "explanation_hi": "साधारण ब्याज = (5000 * 5 * 2) / 100 = 500 रुपये।"
    },
    {
      "id": 145,
      "questionNumber": 145,
      "section": "Other Skills",
      "topic": "Mathematical Aptitude",
      "topic_hi": "गणितीय योग्यता (Math)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the Simple Interest on a principal of Rs. 6,000 at 5% annual interest for 2 years (Problem 5)?",
      "question_hi": "6,000 रुपये के मूलधन पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज कितना होगा (प्रश्न 5)?",
      "options": {
        "A": "Rs. 600",
        "B": "Rs. 650",
        "C": "Rs. 550",
        "D": "Rs. 700"
      },
      "options_hi": {
        "A": "600 रुपये",
        "B": "650 रुपये",
        "C": "550 रुपये",
        "D": "700 रुपये"
      },
      "correctAnswer": "A",
      "explanation": "SI = (P * R * T) / 100 = (6000 * 5 * 2) / 100 = Rs. 600.",
      "explanation_hi": "साधारण ब्याज = (6000 * 5 * 2) / 100 = 600 रुपये।"
    },
    {
      "id": 146,
      "questionNumber": 146,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the next number in the arithmetic progression: 3, 6, 9, ? (Series 1)",
      "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 3, 6, 9, ? (श्रृंखला 1)",
      "options": {
        "A": "12",
        "B": "13",
        "C": "10",
        "D": "15"
      },
      "options_hi": {
        "A": "12",
        "B": "13",
        "C": "10",
        "D": "15"
      },
      "correctAnswer": "A",
      "explanation": "The terms increase by a common difference of +3: 9 + 3 = 12.",
      "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 9 + 3 = 12।"
    },
    {
      "id": 147,
      "questionNumber": 147,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the next number in the arithmetic progression: 6, 9, 12, ? (Series 2)",
      "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 6, 9, 12, ? (श्रृंखला 2)",
      "options": {
        "A": "15",
        "B": "16",
        "C": "13",
        "D": "18"
      },
      "options_hi": {
        "A": "15",
        "B": "16",
        "C": "13",
        "D": "18"
      },
      "correctAnswer": "A",
      "explanation": "The terms increase by a common difference of +3: 12 + 3 = 15.",
      "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 12 + 3 = 15।"
    },
    {
      "id": 148,
      "questionNumber": 148,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the next number in the arithmetic progression: 9, 12, 15, ? (Series 3)",
      "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 9, 12, 15, ? (श्रृंखला 3)",
      "options": {
        "A": "18",
        "B": "19",
        "C": "16",
        "D": "21"
      },
      "options_hi": {
        "A": "18",
        "B": "19",
        "C": "16",
        "D": "21"
      },
      "correctAnswer": "A",
      "explanation": "The terms increase by a common difference of +3: 15 + 3 = 18.",
      "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 15 + 3 = 18।"
    },
    {
      "id": 149,
      "questionNumber": 149,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the next number in the arithmetic progression: 12, 15, 18, ? (Series 4)",
      "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 12, 15, 18, ? (श्रृंखला 4)",
      "options": {
        "A": "21",
        "B": "22",
        "C": "19",
        "D": "24"
      },
      "options_hi": {
        "A": "21",
        "B": "22",
        "C": "19",
        "D": "24"
      },
      "correctAnswer": "A",
      "explanation": "The terms increase by a common difference of +3: 18 + 3 = 21.",
      "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 18 + 3 = 21।"
    },
    {
      "id": 150,
      "questionNumber": 150,
      "section": "Other Skills",
      "topic": "Logical Reasoning",
      "topic_hi": "तार्किक तर्कशक्ति (Reasoning)",
      "marks": 1,
      "negativeMarks": 0,
      "question": "What is the next number in the arithmetic progression: 15, 18, 21, ? (Series 5)",
      "question_hi": "समांतर श्रेणी में अगला पद क्या होगा: 15, 18, 21, ? (श्रृंखला 5)",
      "options": {
        "A": "24",
        "B": "25",
        "C": "22",
        "D": "27"
      },
      "options_hi": {
        "A": "24",
        "B": "25",
        "C": "22",
        "D": "27"
      },
      "correctAnswer": "A",
      "explanation": "The terms increase by a common difference of +3: 21 + 3 = 24.",
      "explanation_hi": "श्रेणी में प्रत्येक पद में +3 जोड़ा जा रहा है: 21 + 3 = 24।"
    }
  ]
};
