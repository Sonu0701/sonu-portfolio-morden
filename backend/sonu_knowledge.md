# Sonu Kumar — Verified Portfolio Profile

This file is the factual source for the portfolio assistant. Do not infer facts
that are not stated here.

## Personal and contact information

- Full name: Sonu Kumar
- Professional title: AI/ML Engineer
- Specialization: LLM applications, grounded RAG, agentic workflows, multi-agent systems, and applied machine learning
- Location: Pune, Maharashtra, India
- Email: sonukumar848213@gmail.com
- Phone: +91-9155149634
- LinkedIn: https://linkedin.com/in/sonu-kumar-ai/
- GitHub: https://github.com/Sonu0701
- LeetCode: https://leetcode.com/u/sonu_kumar_123/
- Portfolio: https://sonu-portfolio-omega.vercel.app/

## Availability and roles

- Sonu completed his B.Tech in Computer Science in July 2026.
- He is available immediately with no notice period.
- He is open to full-time remote, hybrid, and on-site positions.
- He is open to relocation within India.
- Best-fit roles: AI Engineer, Agentic AI Engineer, Applied AI Engineer,
  Generative AI Engineer, and LLM Engineer.
- He is also open to MLOps-oriented roles when they involve AI/ML systems.
- Compensation questions should be directed to Sonu by email.

## Professional summary

Sonu builds end-to-end AI applications where language models work with verified
data, explicit rules, external tools, persistent state, and human oversight. His
portfolio includes agentic RAG, multi-agent orchestration, retrieval systems,
explainable machine learning, evaluation, testing, observability,
containerization, and live deployment.

Do not describe these portfolio applications as commercial production systems.
They are deployed, portfolio-ready engineering projects.

## Technical skills

- Languages: Python, SQL, C++
- Agentic AI: LangGraph, LangChain, state graphs, conditional routing,
  supervisor patterns, tool calling, structured outputs, interrupts,
  checkpointing, human-in-the-loop workflows
- Retrieval and LLMs: RAG, embeddings, semantic search, ChromaDB, Pinecone,
  Mistral AI, Groq, Hugging Face, prompt engineering
- Machine learning: Scikit-learn, XGBoost, PyTorch, PyTorch Geometric, SHAP,
  feature engineering, supervised and unsupervised learning
- Backend and UI: FastAPI, Flask, Streamlit, React
- Databases: PostgreSQL, SQLite, MongoDB
- Reliability and delivery: automated testing, pytest, LangSmith, MLflow,
  error handling, Docker, Docker Compose, Git, GitHub, Render, Vercel
- APIs and tools: MCP, Tavily, AviationStack, OpenWeather, Whisper, Sarvam AI

## Project ranking

When asked for Sonu's strongest or best project, recommend ResolveAI first.
For a short list of strongest projects, use this order:

1. ResolveAI
2. Multi-Agent Travel Planner
3. ResearchMind
4. AI-Powered Transaction Fraud Detection System
5. AI Meeting Assistant

Only provide the wider project list when asked for more or all projects.

## ResolveAI — Agentic Customer Support Resolution Copilot

- Status: Deployed portfolio project
- Live: https://resolveai-p3rr.onrender.com/
- GitHub: https://github.com/Sonu0701/resolveai
- Stack: Python, Streamlit, LangGraph, LangChain, Mistral AI, ChromaDB, SQLite,
  Pydantic, pytest, Docker, Render
- Purpose: Investigates synthetic e-commerce support tickets, verifies SQLite
  order facts, retrieves NovaCart policy evidence, compares non-binding
  historical cases, applies deterministic eligibility rules, drafts a safe
  response, and pauses high-risk cases for manager approval.
- Engineering details:
  - Explicit LangGraph nodes and conditional approval routing
  - Separate persistent Chroma collections for official policies and resolved cases
  - Binding Python rules for return windows, delivery states, refund handling,
    high-value approval, and exceptions
  - LangGraph interrupt and Command flows for approve, reject, and edit-and-approve
  - SQLite records for tickets, messages, drafts, approvals, audit logs, and state
  - PII masking, prompt-injection detection, policy citations, and draft-only actions
  - A 32-case synthetic evaluation set plus pytest regression coverage
  - Safe demo fallback when an API key or embedding index is unavailable
- All data is synthetic. ResolveAI does not connect to a real CRM or payment
  system and does not issue refunds or contact customers.

## Multi-Agent Travel Planner

- Status: Public and deployed
- Live: https://multi-agent-travel-planner-4x09.onrender.com/
- GitHub: https://github.com/Sonu0701/multi-agent-travel-planner
- Stack: Python, LangGraph, MCP, Groq, PostgreSQL, Streamlit, Tavily,
  AviationStack, OpenWeather
- Purpose: Converts a natural-language travel request into a structured
  itinerary through supervisor-routed specialist agents.
- Engineering details:
  - Input guardrail checks relevance and safety before external calls
  - Supervisor extracts constraints and invokes only necessary specialists
  - Flight, hotel, weather, and budget specialists share typed TravelState
  - Tavily plus custom AviationStack and OpenWeather MCP integrations
  - Human review through LangGraph interrupt
  - Feedback-driven revisions bounded by a configurable maximum
  - PostgreSQL checkpointing for resumable workflows
  - Graceful handling for external API and tool failures
- It creates travel plans; it does not make bookings.

## ResearchMind — Multi-Agent AI Research System

- Status: Deployed portfolio project
- Live: https://multi-agent-ai-research-system-zr25.onrender.com/
- GitHub: https://github.com/Sonu0701/multi-agent-ai-research-system
- Stack: Python, LangGraph, Mistral AI, Tavily, BeautifulSoup, Streamlit,
  LangSmith, SQLite, Docker
- Purpose: Automates web research using Search, Reader, Writer, and Critic nodes.
- Engineering details:
  - Critic scores generated reports from 1 to 10
  - Reports scoring below 7 return to the Writer with feedback
  - Refinement is capped at two retries
  - Includes web search, content extraction, streaming, checkpoints, and tracing

## AI-Powered Transaction Fraud Detection System

- Status: Deployed portfolio project
- Live: https://fraud-detection-app-actu.onrender.com/
- GitHub: https://github.com/Sonu0701/AI-Powered-Transaction-Fraud-Detection-System
- Stack: Python, XGBoost, Isolation Forest, PyTorch Geometric, SHAP, Flask, Docker
- Purpose: Detects fraudulent transactions using supervised, anomaly-detection,
  and graph-based approaches.
- Engineering details:
  - Uses the Kaggle Credit Card Fraud dataset with 284,807 transactions
  - XGBoost reached ROC-AUC 0.979
  - SHAP provides explanations for individual scores
  - Graph modeling explores transaction relationships
  - Includes statistical concept-drift checks

## AI Meeting Assistant

- Status: Deployed portfolio project
- Live: https://ai-meeting-assistant-2msw.onrender.com/
- GitHub: https://github.com/Sonu0701/ai-meeting-assistant
- Stack: Python, Streamlit, LangChain, ChromaDB, Mistral AI, Whisper, Sarvam AI
- Purpose: Converts a meeting recording or YouTube link into a transcript,
  summary, action items, decisions, questions, formal minutes, and a grounded
  transcript chatbot.
- Engineering details:
  - Local Whisper transcription for English
  - Sarvam AI for Hindi-English code switching
  - Rebuilds the vector store per meeting to avoid cross-meeting contamination
  - Supports PDF export

## Additional projects

### Agentic RAG Chatbot
- Live: https://agentic-rag-chatbot-cxi4.onrender.com/
- GitHub: https://github.com/Sonu0701/Agentic-RAG-Chatbot
- Routes questions across PDF RAG, web search, calculation, and stock-price tools
  through LangGraph conditional routing.

### Dynamic RAG Chatbot
- Live: https://dynamic-rag-chatbot-tgpt.onrender.com/
- GitHub: https://github.com/Sonu0701/dynamic-rag-chatbot
- Uses FastAPI, React, LangChain, Pinecone, Mistral AI, and Docker for
  source-cited PDF conversations with stale-index cleanup.

### Telco Customer Churn Prediction
- Live: https://telco-customer-churn-prediction-system.onrender.com/
- GitHub: https://github.com/Sonu0701/Telco-Customer-Churn-Prediction-System
- Uses XGBoost, Scikit-learn, MLflow, FastAPI, Streamlit, and Docker.
- Reported results: ROC-AUC 0.83 and recall 0.83.

### AI-Powered Resume Screening System
- Live: https://ai-powered-resume-screening-system-t5pi.onrender.com/
- Uses Gemini, Streamlit, and PDF extraction to compare resumes with job descriptions.

### AI-Powered Movie Recommendation System
- Live: https://movie-recommendation-glvk.onrender.com/
- Uses TF-IDF, cosine similarity, FastAPI, and React for content-based recommendations.

## Education

- Bachelor of Technology in Computer Science
- Shivalik College of Engineering, Dehradun
- August 2022 to July 2026
- Completed
- CGPA: 7.6 out of 10

## Achievements and certifications

- Top-three academic rank at Shivalik College of Engineering in 2024
- Solved more than 200 data structures and algorithms problems on LeetCode
- AI Foundations course completion, OpenAI Academy, 2026
- Artificial Intelligence and Machine Learning, Udemy, 2023
- Data Structures and Algorithms with C++, ExplorIn, 2023–2024

## Useful recruiter answers

- Strongest project: ResolveAI because it combines grounded retrieval,
  deterministic controls, human approval, durable state, testing, evaluation,
  security considerations, and deployment.
- LangGraph experience: ResolveAI uses conditional approval routing and
  interrupts; the Travel Planner uses supervisor routing and revision loops;
  ResearchMind uses a critic-to-writer refinement loop.
- RAG experience: ResolveAI uses separated policy and historical-case stores;
  the Meeting Assistant grounds answers in transcripts; the Dynamic and Agentic
  RAG chatbots use Pinecone or ChromaDB.
- Availability: Immediate, with no notice period.
- Contact: sonukumar848213@gmail.com