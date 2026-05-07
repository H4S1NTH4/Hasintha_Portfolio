"use client";

import { Bot, Send, X } from "lucide-react";
import { FormEvent, useState } from "react";

type Message = {
  role: "assistant" | "user";
  text: string;
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi, I can answer questions about Hasintha's engineering work, IoT projects, AI agent experience, education, and certificates.",
    },
  ]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = input.trim();

    if (!question || loading) {
      return;
    }

    setInput("");
    setLoading(true);
    setMessages((current) => [...current, { role: "user", text: question }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });
      const data = await response.json();
      setMessages((current) => [
        ...current,
        { role: "assistant", text: data.reply ?? data.error ?? "I could not answer that right now." },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        { role: "assistant", text: "The chat service is unavailable right now. Please try again after configuration." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="no-print fixed bottom-24 right-4 z-50 md:bottom-6 md:right-6">
      {open ? (
        <section className="glass-panel flex h-[520px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-lg">
          <header className="flex items-center justify-between border-b border-white/10 p-4">
            <div className="flex items-center gap-2">
              <Bot className="text-cyanwire" size={20} />
              <p className="font-bold text-white">Chat with Hasintha</p>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="rounded-md p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>
          </header>
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-lg px-3 py-2 text-sm leading-6 ${
                  message.role === "user"
                    ? "ml-8 bg-cyanwire text-graphite"
                    : "mr-8 border border-white/10 bg-white/5 text-slate-200"
                }`}
              >
                {message.text}
              </div>
            ))}
            {loading ? <p className="text-sm text-cyanwire">Thinking through the portfolio data...</p> : null}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about projects..."
              className="min-w-0 flex-1 rounded-md border border-white/10 bg-black/30 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyanwire"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="rounded-md bg-cyanwire p-3 text-graphite transition hover:bg-signal"
            >
              <Send size={18} />
            </button>
          </form>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex min-h-12 items-center gap-2 rounded-md border border-cyanwire/35 bg-cyanwire/15 px-4 font-semibold text-cyanwire shadow-glow backdrop-blur-xl transition hover:bg-cyanwire hover:text-graphite"
        >
          <Bot size={19} />
          Chat with Hasintha
        </button>
      )}
    </div>
  );
}
