"use client";

import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "PrexisLegal didn't just understand the law; they understood our business. Their strategic foresight saved us from a potentially devastating regulatory penalty.",
      author: "Rajeev Menon",
      company: "CEO, TransGlobal Logistics"
    },
    {
      quote: "The level of precision and intellectual rigor they brought to our M&A negotiations was staggering. We wouldn't trust any other firm with our acquisitions.",
      author: "Priya Sharma",
      company: "Managing Director, Nexus Ventures"
    },
    {
      quote: "In a deeply complex and sensitive family dispute, PrexisLegal provided not just impeccable legal counsel, but absolute discretion and grace.",
      author: "A.N. Gupta",
      company: "Private Client"
    },
    {
      quote: "When the stakes were highest in the Supreme Court, their advocacy was relentless and masterful. They command the courtroom like no other.",
      author: "Dr. Vikram Seth",
      company: "Chairman, Helix Pharmaceuticals"
    },
    {
      quote: "Their employment advisory team helped us navigate a massive restructuring with zero compliance issues. Proactive, clear, and immensely knowledgeable.",
      author: "Neha Reddy",
      company: "VP Operations, OmniCorp"
    },
    {
      quote: "A true powerhouse. They architected a financing structure for our real estate project that no other firm thought was legally viable.",
      author: "Siddharth Khanna",
      company: "Founder, Apex Developers"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <span className="text-gold uppercase tracking-[0.15em] font-sans text-[11px] font-medium mb-6 block">Client Perspectives</span>
        <h1 className="font-serif font-bold text-5xl md:text-[48px] text-white mb-8">
          Client Testimonials
        </h1>
        <div className="h-px w-24 bg-gold mx-auto mb-8" />
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, index) => (
          <TestimonialCard 
            key={index}
            quote={t.quote}
            author={t.author}
            company={t.company}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}
