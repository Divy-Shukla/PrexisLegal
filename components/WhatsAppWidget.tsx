"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

export default function WhatsAppWidget() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919000000000";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative group block"
      >
        <motion.div 
          animate={{ boxShadow: ["0px 0px 0px rgba(74, 222, 128, 0)", "0px 0px 20px rgba(74, 222, 128, 0.4)", "0px 0px 0px rgba(74, 222, 128, 0)"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-green-500/20"
        />
        <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
          <MessageSquare size={24} />
        </div>
      </Link>
    </motion.div>
  );
}
