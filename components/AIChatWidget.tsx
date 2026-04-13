"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, X, Send } from "lucide-react";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Welcome to PrexisLegal. I'm the AI Assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, isBot: false }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thank you for reaching out. A representative will review your inquiry and get back to you shortly.", 
        isBot: true 
      }]);
    }, 1000);
  };

  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <button
          onClick={() => setOpen(true)}
          className="bg-gold text-[#0a0f1e] font-sans font-semibold text-[12px] px-[18px] py-[10px] rounded-[4px] shadow-lg flex items-center justify-center gap-2 hover:bg-white transition-colors border border-transparent"
        >
          <Scale size={14} className="stroke-[2.5]" />
          <span>Legal Assistant</span>
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 bg-[#0e1628] border border-white/10 rounded-[4px] shadow-2xl w-80 h-96 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0a0f1e] p-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-2">
                <Scale size={16} className="text-gold stroke-[2]" />
                <h4 className="font-serif font-bold text-lg text-white">Prexis AI Assistant</h4>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.isBot ? "justify-start" : "justify-end"}`}>
                  <div className={`p-3 max-w-[85%] rounded-[4px] font-sans ${m.isBot ? "bg-[#0a0f1e] border border-white/5 text-cream" : "bg-gold text-[#0a0f1e]"}`}>
                    <p className="text-[13px]">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input */}
            <div className="p-4 bg-[#0a0f1e] border-t border-white/10 relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..." 
                className="w-full bg-[#0e1628] border border-white/10 rounded-[2px] p-3 pr-10 text-[13px] text-cream font-sans focus:border-gold outline-none transition-colors" 
              />
              <button 
                onClick={handleSend}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-gold hover:text-white transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
