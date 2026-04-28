import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, User, Bot, Loader2, Sparkles } from 'lucide-react';
import { askRaeyoungAI } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const history = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }]
    }));

    const response = await askRaeyoungAI(userMessage, history);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="relative mt-8">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-6 py-3 border border-ink text-ink hover:bg-ink hover:text-surface transition-all duration-300 group"
      >
        {isOpen ? (
          <X className="w-4 h-4" />
        ) : (
          <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        )}
        <span className="text-[10px] font-bold uppercase tracking-widest">
          {isOpen ? 'Close AI Twin' : 'Talk to my AI Twin'}
        </span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            className="mt-4 w-full max-w-md bg-white editorial-border shadow-xl overflow-hidden"
          >
            <div className="p-4 border-b border-ink/10 bg-surface flex justify-between items-center">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <Bot className="w-3 h-3" />
                  Raeyoung AI
                </h3>
                <p className="text-[9px] text-stone-400 mt-0.5">Powered by Gemini 3 Flash</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-stone-300 hover:text-ink transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div 
              ref={scrollRef}
              className="h-64 overflow-y-auto p-4 space-y-4 font-sans selection:bg-ink selection:text-surface"
            >
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-xs text-stone-400 italic">
                    "Ask me about my research on Multi-Agent systems <br /> or my experience at Hyundai CRM team."
                  </p>
                </div>
              )}
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 text-[11px] leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-ink text-surface' 
                      : 'bg-surface border border-ink/5 text-ink italic'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-surface border border-ink/5 p-3">
                    <Loader2 className="w-3 h-3 animate-spin text-ink/40" />
                  </div>
                </div>
              )}
            </div>

            <form 
              onSubmit={handleSubmit}
              className="p-4 border-t border-ink/10 bg-white flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 text-[11px] bg-surface px-3 py-2 outline-none focus:ring-1 ring-ink/10 border-transparent border focus:border-ink/10 transition-all font-sans"
              />
              <button 
                disabled={isLoading || !input.trim()}
                className="p-2 bg-ink text-surface disabled:opacity-30 transition-opacity"
              >
                <Send className="w-3 h-3" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
