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
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-40 right-6 z-40"
      >
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 bg-gold border border-gold/30 text-navy rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-gold-2 transition-all duration-300"
        >
          <Scale size={24} />
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-56 right-6 z-50 bg-navy-2 border border-gold/10 rounded-sm shadow-2xl w-80 h-96 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-navy p-4 flex justify-between items-center border-b border-gold/10">
              <div className="flex items-center gap-2">
                <Scale size={18} className="text-gold" />
                <h4 className="font-serif text-lg text-white">Prexis AI Legal Assistant</h4>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted hover:text-white">
                <X size={20} />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.isBot ? "justify-start" : "justify-end"}`}>
                  <div className={`p-3 max-w-[80%] rounded ${m.isBot ? "bg-navy border border-gold/10 text-cream" : "bg-gold/20 text-white"}`}>
                    <p className="text-sm">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input */}
            <div className="p-4 bg-navy border-t border-gold/10 relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..." 
                className="w-full bg-navy-2 border border-gold/20 p-3 pr-10 text-sm text-cream focus:border-gold outline-none" 
              />
              <button 
                onClick={handleSend}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-gold hover:text-gold-2"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
