# ruff: noqa
# Copyright 2026 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""
Bihar STET Paper II (Computer Science) & BPSC TRE ADK Assistant Agent
Powered by Google Agent Development Kit (ADK) & Gemini 3.8.
"""

from google.adk.agents import Agent
from google.adk.apps import App
from google.adk.models import Gemini
from google.genai import types

MODEL = "gemini-3.8-flash"

SYLLABUS_UNITS = {
    "unit1": "Digital Logic & Number Systems: Boolean algebra, logic gates, K-maps, flip-flops, multiplexers, counters",
    "unit2": "Computer Organization & Architecture: CPU architecture, memory hierarchy, cache, pipelining, instruction cycles",
    "unit3": "Programming in C & C++: Control structures, pointers, functions, arrays, OOP, classes, inheritance, polymorphism",
    "unit4": "Data Structures: Arrays, stacks, queues, linked lists, trees, BST, heaps, graphs, hashing",
    "unit5": "Algorithms & Complexity: Asymptotic notations, divide & conquer, sorting, searching, greedy, dynamic programming",
    "unit6": "Operating Systems: Processes, threads, CPU scheduling, semaphores, deadlocks, paging, virtual memory, disk scheduling",
    "unit7": "Database Management Systems: ER modeling, relational model, SQL, normalization (1NF-BCNF), ACID, transaction management",
    "unit8": "Computer Networks: OSI & TCP/IP layers, IPv4/IPv6, routing protocols, TCP/UDP, DNS, HTTP, socket programming",
    "unit9": "Software Engineering: SDLC models (Waterfall, Agile), requirement engineering, testing, cohesion, coupling, UML",
    "unit10": "Web Technologies: HTML5, CSS3, JavaScript DOM, web standards, client-server architecture",
    "unit11": "Python Programming: Data structures, functions, OOP, exception handling, modules, standard libraries",
    "unit12": "Artificial Intelligence & ML Basics: Search algorithms, heuristic search, knowledge representation, neural networks basics",
    "unit13": "Cyber Security & Cryptography: Symmetric/asymmetric ciphers, RSA, hashing, firewalls, network security threats",
    "unit14": "Theory of Computation & Automata: DFA, NFA, regular expressions, context-free grammar, pushdown automata, Turing machines",
    "unit15": "Emerging Technologies & Cloud: Cloud computing (IaaS/PaaS/SaaS), virtualization, IoT, containers",
    "pedagogy": "Art of Teaching (30 Marks): Teaching maxims, lesson planning, micro-teaching, Bloom's taxonomy, diagnostic evaluation",
    "general": "General Skills (20 Marks): Bihar GK, environmental studies, mathematical aptitude, logical reasoning"
}


def search_exam_syllabus(query: str) -> str:
    """Search Bihar STET Computer Science syllabus units and topics.

    Args:
        query: Unit name or topic (e.g. 'Operating Systems', 'unit4', 'SQL', 'Pedagogy').

    Returns:
        Syllabus description, weightage, and key concepts for the query.
    """
    q = query.lower()
    matches = []
    for uid, desc in SYLLABUS_UNITS.items():
        if q in uid.lower() or q in desc.lower():
            matches.append(f"• [{uid.upper()}] {desc}")
    if matches:
        return "Syllabus Matches:\n" + "\n".join(matches)
    return f"No exact unit matched '{query}'. Available units: Unit 1 to 15, Pedagogy (Art of Teaching), General Skills."


def get_exam_pattern_info() -> str:
    """Returns official Bihar STET Paper II and BPSC TRE Computer Science pattern and cutoff benchmarks."""
    return (
        "📋 Bihar STET Paper II (Computer Science Code 226) Exam Pattern:\n"
        "• Total Questions: 150 Multiple Choice Questions (1 Mark each)\n"
        "• Total Duration: 150 Minutes (2 Hours 30 Minutes)\n"
        "• Negative Marking: None (Zero negative marking)\n"
        "• Section Breakdown:\n"
        "  - Specific Subject (Computer Science): 100 Questions (100 Marks)\n"
        "  - Art of Teaching (Pedagogy): 30 Questions (30 Marks)\n"
        "  - General Skills (GK, Math, Reasoning): 20 Questions (20 Marks)\n\n"
        "🎯 Official Qualifying Cutoffs (Normalized):\n"
        "• General (UR): 50% (75.0 Marks)\n"
        "• Backward Class (BC): 45.5% (68.25 Marks)\n"
        "• Extremely Backward Class (EBC): 42.5% (63.75 Marks)\n"
        "• SC / ST / Divyang / Women: 40% (60.0 Marks)"
    )


root_agent = Agent(
    name="bstet_qa_agent",
    model=Gemini(
        model=MODEL,
        retry_options=types.HttpRetryOptions(attempts=3),
    ),
    instruction=(
        "You are the official AI Study & QA Tutor for Bihar STET Paper II (Computer Science) "
        "and BPSC TRE Teacher Recruitment Examination. You assist candidates with conceptual "
        "clarification across all 15 syllabus units, Pedagogy (Art of Teaching), and general skills. "
        "Always provide structured, clear, and bilingual (English/Hindi) pedagogical explanations."
    ),
    tools=[search_exam_syllabus, get_exam_pattern_info],
)

app = App(
    root_agent=root_agent,
    name="app",
)
