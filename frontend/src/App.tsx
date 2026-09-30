import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight, Bot, BrainCircuit, CheckCircle2, ChevronRight, Code2, Download,
  ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Network,
  ShieldCheck, Sparkles, TestTube2, X, Zap,
} from 'lucide-react';
import ChatBot from './components/ChatBot';

const links = {
  github: 'https://github.com/Sonu0701',
  linkedin: 'https://linkedin.com/in/sonu-kumar-ai/',
  email: 'mailto:sonukumar848213@gmail.com',
  resume: '/Sonu_Kumar_Resume.pdf',
};

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const projects = [
  {
    number: '01', title: 'ResolveAI', eyebrow: 'Agentic support resolution',
    description: 'A grounded, policy-aware support copilot that verifies order facts, retrieves evidence, applies deterministic eligibility rules, and pauses risky cases for manager approval.',
    impact: ['Human approval for high-risk cases', 'Deterministic policy engine', '32-case evaluation harness'],
    stack: ['LangGraph', 'RAG', 'Mistral', 'ChromaDB', 'SQLite', 'Docker'],
    github: 'https://github.com/Sonu0701/resolveai', live: 'https://resolveai-p3rr.onrender.com/',
    accent: 'cyan', featured: true,
  },
  {
    number: '02', title: 'Multi-Agent Travel Planner', eyebrow: 'Supervisor-routed agents',
    description: 'A travel planning system that dynamically selects flight, hotel, weather, and budget specialists, then pauses the workflow for human review and revision.',
    impact: ['Custom MCP integrations', 'PostgreSQL checkpoints', 'Controlled revision workflow'],
    stack: ['LangGraph', 'MCP', 'Groq', 'PostgreSQL', 'Streamlit'],
    github: 'https://github.com/Sonu0701/multi-agent-travel-planner', live: 'https://multi-agent-travel-planner-4x09.onrender.com/',
    accent: 'violet', featured: true,
  },
  {
    number: '03', title: 'ResearchMind', eyebrow: 'Self-refining research workflow',
    description: 'A multi-agent research system where a critic scores every report and conditionally returns weak drafts to the writer with actionable feedback.',
    impact: ['Critic-to-writer loop', 'Token-level streaming', 'LangSmith observability'],
    stack: ['LangGraph', 'Mistral', 'Tavily', 'LangSmith', 'Docker'],
    github: 'https://github.com/Sonu0701/multi-agent-ai-research-system', live: 'https://multi-agent-ai-research-system-zr25.onrender.com/',
    accent: 'blue', featured: false,
  },
  {
    number: '04', title: 'Fraud Detection System', eyebrow: 'Explainable machine learning',
    description: 'A real-time fraud detection system combining XGBoost, Isolation Forest, and graph-based modeling with SHAP explanations for individual predictions.',
    impact: ['0.979 XGBoost ROC-AUC', 'SHAP explanations', 'Concept-drift monitoring'],
    stack: ['XGBoost', 'PyTorch', 'SHAP', 'Flask', 'Docker'],
    github: 'https://github.com/Sonu0701/AI-Powered-Transaction-Fraud-Detection-System', live: 'https://fraud-detection-app-actu.onrender.com/',
    accent: 'emerald', featured: false,
  },
];

const additionalProjects = [
  { title: 'AI Meeting Assistant', detail: 'Dual-engine transcription, meeting intelligence, and transcript-grounded RAG.', github: 'https://github.com/Sonu0701/ai-meeting-assistant', live: 'https://ai-meeting-assistant-2msw.onrender.com/' },
  { title: 'Agentic RAG Chatbot', detail: 'Conditional routing across PDF RAG, web search, calculation, and stock tools.', github: 'https://github.com/Sonu0701/Agentic-RAG-Chatbot', live: 'https://agentic-rag-chatbot-cxi4.onrender.com/' },
  { title: 'Dynamic RAG Chatbot', detail: 'FastAPI and React PDF assistant with Pinecone retrieval and source citations.', github: 'https://github.com/Sonu0701/dynamic-rag-chatbot', live: 'https://dynamic-rag-chatbot-tgpt.onrender.com/' },
  { title: 'Telco Churn Prediction', detail: 'End-to-end XGBoost pipeline with MLflow tracking and real-time scoring.', github: 'https://github.com/Sonu0701/Telco-Customer-Churn-Prediction-System', live: 'https://telco-customer-churn-prediction-system.onrender.com/' },
];

const capabilities = [
  { icon: Network, label: 'Agentic workflows', text: 'Typed state, conditional routing, supervisor patterns, tool use, interrupts, and resumable execution.' },
  { icon: BrainCircuit, label: 'Grounded RAG', text: 'Purpose-built retrieval pipelines with source attribution, semantic search, and isolation between knowledge domains.' },
  { icon: ShieldCheck, label: 'Reliability & safety', text: 'Deterministic controls, guardrails, human approval, PII handling, fallbacks, and bounded workflow loops.' },
  { icon: TestTube2, label: 'Evaluation & delivery', text: 'Regression tests, local evaluation sets, tracing, containerization, and deployment-focused engineering.' },
];

const skillGroups = [
  { title: 'Agentic AI', skills: ['LangGraph', 'LangChain', 'MCP', 'Tool Calling', 'Human-in-the-Loop', 'Structured Output'] },
  { title: 'Retrieval & Models', skills: ['RAG', 'Mistral AI', 'Groq', 'ChromaDB', 'Pinecone', 'Embeddings'] },
  { title: 'ML Engineering', skills: ['Python', 'XGBoost', 'PyTorch', 'Scikit-learn', 'SHAP', 'MLflow'] },
  { title: 'Systems', skills: ['FastAPI', 'PostgreSQL', 'SQLite', 'Docker', 'GitHub', 'Render'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const reveal = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: reduceMotion ? 0 : 0.6, ease: 'easeOut' as const },
  };

  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="shell flex h-20 items-center justify-between">
          <a href="#top" className="brand" aria-label="Sonu Kumar home">
            <span className="brand-mark">SK</span>
            <span className="hidden sm:block"><strong>Sonu Kumar</strong><small>AI/ML Engineer</small></span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item.href} className="nav-link" href={item.href}>{item.label}</a>)}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <span className="availability"><i /> Available now</span>
            <a className="button button-small button-ghost" href={links.resume} download>Resume <Download size={15} /></a>
          </div>
          <button className="icon-button md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav md:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ChevronRight size={17} /></a>)}
            <a href={links.resume} download>Download resume <Download size={17} /></a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero shell">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .7 }}>
            <div className="eyebrow"><Sparkles size={14} /> AI systems, engineered for trust</div>
            <h1>I build AI products that<span className="gradient-text"> reason, retrieve and act safely.</span></h1>
            <p className="hero-lead">AI/ML Engineer focused on grounded RAG, agentic workflows and reliable machine learning systems—from prototype to deployed product.</p>
            <div className="hero-actions">
              <a href="#work" className="button button-primary">Explore my work <ArrowRight size={17} /></a>
              <button className="button button-ghost" onClick={() => window.dispatchEvent(new Event('open-sonu-chat'))}>Ask my AI <Bot size={17} /></button>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Pune, India</span>
              <span><CheckCircle2 size={15} /> Available immediately</span>
              <span><GraduationCap size={16} /> B.Tech CSE, 2026</span>
            </div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: reduceMotion ? 1 : .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduceMotion ? 0 : .8, delay: .1 }} aria-label="A visual map of Sonu's AI engineering workflow">
            <div className="visual-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="core-card"><div className="core-icon"><BrainCircuit size={28} /></div><span>Agentic core</span><strong>Grounded decisions</strong></div>
            <div className="signal-card signal-a"><DatabaseGlyph /> Verified data</div>
            <div className="signal-card signal-b"><ShieldCheck size={16} /> Human approval</div>
            <div className="signal-card signal-c"><Zap size={16} /> Tool execution</div>
            <div className="visual-status"><i /> workflow healthy</div>
          </motion.div>
        </section>

        <section className="trust-strip" aria-label="Core technology stack">
          <div className="shell trust-list">{['Python', 'LangGraph', 'RAG', 'MCP', 'FastAPI', 'PostgreSQL', 'Docker'].map((item) => <span key={item}>{item}</span>)}</div>
        </section>

        <section id="work" className="section shell">
          <motion.div {...reveal} className="section-heading">
            <div><span className="kicker">Selected work</span><h2>Systems with real engineering behind the demo.</h2></div>
            <p>Projects designed around clear constraints, inspectable workflows, measured behavior and safe failure modes.</p>
          </motion.div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article {...reveal} transition={{ ...reveal.transition, delay: index * .06 }} key={project.title} className={`project-card project-card--${project.accent} ${project.featured ? 'project-card--featured' : ''}`}>
                <div className="project-topline"><span>{project.number}</span>{project.featured && <em>Flagship</em>}</div>
                <p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-impact">{project.impact.map((item) => <li key={item}><CheckCircle2 size={15} /> {item}</li>)}</ul>
                <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15} /></a>
                  <a href={project.github} target="_blank" rel="noreferrer">Source <Github size={15} /></a>
                </div>
              </motion.article>
            ))}
          </div>
          <motion.div {...reveal} className="more-work">
            <div className="more-work-heading">
              <div><span className="kicker">More shipped work</span><h3>Additional AI and ML systems</h3></div>
              <a href={`${links.github}?tab=repositories`} target="_blank" rel="noreferrer">All repositories <ArrowRight size={16} /></a>
            </div>
            <div className="more-work-grid">
              {additionalProjects.map((project) => (
                <article key={project.title}>
                  <div><Code2 size={18} /><h4>{project.title}</h4></div><p>{project.detail}</p>
                  <span><a href={project.live} target="_blank" rel="noreferrer">Demo <ExternalLink size={14} /></a><a href={project.github} target="_blank" rel="noreferrer">Code <Github size={14} /></a></span>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="capabilities" className="section section-tinted"><div className="shell">
          <motion.div {...reveal} className="section-heading">
            <div><span className="kicker">Capabilities</span><h2>From model output to dependable workflow.</h2></div>
            <p>I focus on the engineering around the model: context, control, persistence, evaluation and user trust.</p>
          </motion.div>
          <div className="capability-grid">{capabilities.map((item, index) => { const Icon = item.icon; return (
            <motion.article {...reveal} transition={{ ...reveal.transition, delay: index * .06 }} key={item.label} className="capability-card">
              <div><Icon size={21} /></div><h3>{item.label}</h3><p>{item.text}</p>
            </motion.article>
          ); })}</div>
          <motion.div {...reveal} className="skills-panel">
            <div className="skills-intro"><span className="kicker">Working stack</span><h3>Tools selected for the problem—not the trend.</h3><p>Comfortable across AI orchestration, retrieval, ML, APIs, data stores and deployment.</p></div>
            <div className="skills-groups">{skillGroups.map((group) => <div key={group.title}><strong>{group.title}</strong><p>{group.skills.join(' · ')}</p></div>)}</div>
          </motion.div>
        </div></section>

        <section id="about" className="section shell"><div className="about-grid">
          <motion.div {...reveal}><span className="kicker">About me</span><h2>Curious about models. Serious about systems.</h2></motion.div>
          <motion.div {...reveal} className="about-copy">
            <p className="about-lead">I’m Sonu Kumar, a Computer Science graduate and AI/ML Engineer based in Pune. I build end-to-end applications where LLMs work with verified data, explicit rules, tools and human oversight.</p>
            <p>My work spans agentic RAG, multi-agent orchestration, classical machine learning and deployment. I care about whether a workflow can explain its output, recover from tool failure and behave predictably beyond the happy path.</p>
            <div className="about-facts"><div><strong>7.6</strong><span>CGPA / 10</span></div><div><strong>200+</strong><span>DSA problems</span></div><div><strong>Immediate</strong><span>Availability</span></div></div>
            <div className="education-note"><GraduationCap size={20} /><div><strong>B.Tech in Computer Science</strong><span>Shivalik College of Engineering · 2022–2026</span></div></div>
          </motion.div>
        </div></section>

        <section className="assistant-cta shell"><motion.div {...reveal} className="assistant-panel">
          <div className="assistant-icon"><Bot size={28} /></div>
          <div><span className="kicker">Interactive profile</span><h2>Have a recruiter-style question?</h2><p>Ask my AI assistant about my projects, technical decisions, skills, availability or contact details.</p></div>
          <button className="button button-primary" onClick={() => window.dispatchEvent(new Event('open-sonu-chat'))}>Start a conversation <ArrowRight size={17} /></button>
        </motion.div></section>

        <section id="contact" className="section shell"><motion.div {...reveal} className="contact-panel">
          <span className="kicker">Let’s work together</span><h2>Building a useful AI product?</h2>
          <p>I’m available immediately for AI Engineer, Applied AI and Generative AI opportunities.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={links.email}><Mail size={17} /> Email me</a>
            <a className="button button-ghost" href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            <a className="button button-ghost" href={links.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          </div>
        </motion.div></section>
      </main>
      <footer><div className="shell footer-inner"><div><strong>Sonu Kumar</strong><span>AI/ML Engineer · Pune, India</span></div><p>Designed and engineered with clarity, restraint and curiosity.</p></div></footer>
      <ChatBot />
    </div>
  );
}

function DatabaseGlyph() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><ellipse cx="12" cy="5" rx="7.5" ry="3" stroke="currentColor" strokeWidth="1.8" /><path d="M4.5 5v7c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V5" stroke="currentColor" strokeWidth="1.8" /><path d="M4.5 12v7c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-7" stroke="currentColor" strokeWidth="1.8" /></svg>;
}

export default App;