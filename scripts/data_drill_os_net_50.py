# -*- coding: utf-8 -*-
"""
50 Specialized OS & Computer Networks Mastery Questions for Bihar STET & BPSC TRE CS
"""

questions = [
    # 1-25: Operating Systems Deep Mastery
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

    # 16-25: Linux / OS Synchronization Details
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

    # 21-35: Computer Networks Deep Mastery
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

print("OS & Networks Mastery Drill: 50 questions loaded successfully.")

