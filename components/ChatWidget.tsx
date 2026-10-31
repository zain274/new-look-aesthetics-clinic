"use client";
import { useEffect, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };
const START: Msg = { role: "assistant", content: "Hi! I am the New Look assistant. Ask me about treatments, the clinic, or booking." };
const CHIPS = ["What treatments do you offer?", "How do I book?", "Where is the clinic?"];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([START]);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const end = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => { end.current?.scrollIntoView({ block: "end" }); }, [msgs, busy, open]);
  useEffect(() => { if (open) input.current?.focus(); }, [open]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  async function send(t: string) {
    const content = t.trim();
    if (!content || busy) return;
    const next = [...msgs, { role: "user", content } as Msg];
    setMsgs(next); setText(""); setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      const data = await res.json();
      setMsgs([...next, { role: "assistant", content: data.reply || data.error || "Something went wrong." }]);
    } catch {
      setMsgs([...next, { role: "assistant", content: "Connection problem. Please try again or call us." }]);
    } finally { setBusy(false); }
  }

  return (
    <>
      <button className="chat-fab" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="chat-panel" aria-label={open ? "Close chat" : "Open chat assistant"}>
        {open ? <X size={26} aria-hidden /> : <Bot size={26} aria-hidden />}
      </button>
      {open && (
        <section id="chat-panel" className="chat" aria-label="Chat assistant">
          <header><Bot size={20} aria-hidden /> <b>New Look Assistant</b>
            <button onClick={() => setOpen(false)} aria-label="Close chat"><X size={20} aria-hidden /></button>
          </header>
          <div className="chat-log" role="log" aria-live="polite">
            {msgs.map((m, i) => <p key={i} className={`bub ${m.role}`}>{m.content}</p>)}
            {busy && <p className="bub assistant dots" aria-label="Typing"><i /><i /><i /></p>}
            {msgs.length === 1 && (
              <div className="chips">{CHIPS.map((c) => <button key={c} onClick={() => send(c)}>{c}</button>)}</div>
            )}
            <div ref={end} />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(text); }}>
            <input ref={input} value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your question" maxLength={400} aria-label="Your message" />
            <button type="submit" disabled={busy || !text.trim()} aria-label="Send"><Send size={18} aria-hidden /></button>
          </form>
        </section>
      )}
    </>
  );
}
