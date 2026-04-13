"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";

export default function CallbackWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed bottom-[72px] right-6 z-40"
      >
        <button
          onClick={() => setOpen(true)}
          className="bg-[#0e1628] border border-white/15 text-white font-sans font-medium text-[12px] px-[18px] py-[10px] rounded-[4px] shadow-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
        >
          <Phone size={14} className="stroke-[2.5]" />
          <span>Request Callback</span>
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-[120px] right-6 z-50 bg-[#0e1628] border border-white/10 p-6 rounded-[4px] shadow-2xl w-80"
          >
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-serif font-bold text-xl text-white">Request Callback</h4>
              <button onClick={() => setOpen(false)} className="text-muted hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-[#0a0f1e] border border-white/10 rounded-[2px] p-3 text-[13px] text-cream font-sans focus:border-gold outline-none transition-colors" 
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-[#0a0f1e] border border-white/10 rounded-[2px] p-3 text-[13px] text-cream font-sans focus:border-gold outline-none transition-colors" 
              />
              <button 
                type="button" 
                onClick={() => setOpen(false)}
                className="w-full bg-gold text-[#0a0f1e] font-sans font-semibold uppercase tracking-widest text-[11px] py-[12px] rounded-[2px] mt-2 hover:bg-white transition-colors"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
