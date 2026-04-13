"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";

export default function CallbackWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-24 right-6 z-40"
      >
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 bg-navy-2 border border-gold/30 text-gold rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:border-gold hover:bg-gold/10 transition-all duration-300"
        >
          <Phone size={24} />
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-40 right-6 z-50 bg-navy-2 border border-gold/10 p-6 rounded-sm shadow-2xl w-80"
          >
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-serif text-xl text-white">Request Callback</h4>
              <button onClick={() => setOpen(false)} className="text-muted hover:text-white">
                <X size={20} />
              </button>
            </div>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-navy border border-gold/20 p-3 text-sm text-cream focus:border-gold outline-none" 
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-navy border border-gold/20 p-3 text-sm text-cream focus:border-gold outline-none" 
              />
              <button 
                type="button" 
                onClick={() => setOpen(false)}
                className="w-full bg-gold text-navy font-semibold uppercase tracking-widest text-xs py-3 mt-2 hover:bg-gold-2 transition-colors"
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
