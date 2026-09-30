import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Bot, ExternalLink, MessageCircle, RotateCcw, Send, Sparkles, X } from 'lucide-react';

type Message = { role: 'user' | 'assistant'; content: string };
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const greeting: Message = { role: 'assistant', content: "Hi, I'm Sonu AI. I can answer recruiter-style questions about Sonu's projects, engineering skills and availability." };
const suggestions = ["What's Sonu's strongest project?", 'How has Sonu used LangGraph?', 'Why hire Sonu for an AI Engineer role?', 'Is Sonu available immediately?'];

function ChatBot() {
  const [open,setOpen]=useState(false),[messages,setMessages]=useState<Message[]>([greeting]),[input,setInput]=useState(''),[loading,setLoading]=useState(false),[error,setError]=useState('');
  const endRef=useRef<HTMLDivElement>(null),inputRef=useRef<HTMLInputElement>(null);
  useEffect(()=>{const f=()=>setOpen(true);window.addEventListener('open-sonu-chat',f);return()=>window.removeEventListener('open-sonu-chat',f)},[]);
  useEffect(()=>{if(open)window.setTimeout(()=>inputRef.current?.focus(),150)},[open]);
  useEffect(()=>{endRef.current?.scrollIntoView({behavior:'smooth'})},[messages,loading]);
  const conversation=useMemo(()=>messages.slice(1).slice(-8),[messages]);
  async function sendMessage(value:string){
    const clean=value.trim();if(!clean||loading)return;
    setMessages(c=>[...c,{role:'user',content:clean}]);setInput('');setError('');setLoading(true);
    try{
      const controller=new AbortController(),timeout=window.setTimeout(()=>controller.abort(),30000);
      const response=await fetch(`${API_URL}/chat`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:clean,history:conversation}),signal:controller.signal});
      window.clearTimeout(timeout);if(!response.ok)throw new Error('Request failed');const data=await response.json();
      setMessages(c=>[...c,{role:'assistant',content:data.response||'I could not generate an answer.'}]);
    }catch{setError('The assistant is temporarily unavailable. You can still reach Sonu by email.')}finally{setLoading(false)}
  }
  function submit(e:FormEvent){e.preventDefault();sendMessage(input)}
  function reset(){setMessages([greeting]);setInput('');setError('')}
  return <><button className={`chat-launcher ${open?'chat-launcher--hidden':''}`} onClick={()=>setOpen(true)} aria-label="Open Sonu AI assistant">
    <span><MessageCircle size={20}/></span><div><strong>Ask Sonu AI</strong><small>Projects, skills & availability</small></div><Sparkles size={15}/>
  </button>
  <aside className={`chat-window ${open?'chat-window--open':''}`} aria-hidden={!open}>
    <header><div className="chat-avatar"><Bot size={20}/></div><div><strong>Sonu AI</strong><span><i/> Portfolio assistant</span></div><button onClick={reset} aria-label="Reset conversation"><RotateCcw size={16}/></button><button onClick={()=>setOpen(false)} aria-label="Close assistant"><X size={18}/></button></header>
    <div className="chat-messages" aria-live="polite">
      {messages.map((m,i)=><div key={`${m.role}-${i}`} className={`chat-row chat-row--${m.role}`}>{m.role==='assistant'&&<span className="mini-avatar"><Bot size={13}/></span>}<div className="chat-bubble"><LinkedText text={m.content}/></div></div>)}
      {messages.length===1&&<div className="chat-suggestions"><small>Try asking</small>{suggestions.map(q=><button key={q} onClick={()=>sendMessage(q)}>{q}</button>)}</div>}
      {loading&&<div className="chat-row chat-row--assistant"><span className="mini-avatar"><Bot size={13}/></span><div className="typing"><i/><i/><i/></div></div>}
      {error&&<div className="chat-error">{error}<a href="mailto:sonukumar848213@gmail.com">Email Sonu <ExternalLink size={12}/></a></div>}<div ref={endRef}/>
    </div>
    <form onSubmit={submit}><input ref={inputRef} value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask about Sonu's work…" maxLength={600} disabled={loading} aria-label="Message Sonu AI"/><button disabled={!input.trim()||loading} aria-label="Send message"><Send size={17}/></button></form>
    <footer>Answers are grounded in Sonu’s verified portfolio profile.</footer>
  </aside></>
}
function LinkedText({text}:{text:string}){return <p>{text.split(/(https?:\/\/[^\s|]+)/g).map((part,i)=>part.startsWith('http')?<a key={i} href={part.replace(/[.,]$/,'')} target="_blank" rel="noreferrer">Open link <ExternalLink size={11}/></a>:<span key={i}>{part}</span>)}</p>}
export default ChatBot;