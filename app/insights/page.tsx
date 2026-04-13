"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function InsightsPage() {
  const articles = [
    {
      title: "The New Era of Corporate Governance in India",
      date: "Nov 12, 2023",
      category: "Corporate Law",
      summary: "Navigating the latest SEBI regulations and boardroom obligations for listed entities in the upcoming fiscal year."
    },
    {
      title: "Arbitration Act Amendments: Strategic Implications",
      date: "Oct 28, 2023",
      category: "Arbitration",
      summary: "How the newly introduced amendments affect international commercial arbitration and enforcement of foreign awards in India."
    },
    {
      title: "Data Privacy & The Digital Personal Data Protection Act",
      date: "Sep 15, 2023",
      category: "Technology Law",
      summary: "A comprehensive guide to compliance, data fiduciaries, and the new penalties framework for multinational corporations."
    },
    {
      title: "Real Estate Regulatory Authority (RERA) Compliance Traps",
      date: "Aug 05, 2023",
      category: "Real Estate",
      summary: "Identifying hidden liabilities in high-value commercial real estate transactions under the current RERA guidelines."
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center max-w-4xl mx-auto"
      >
        <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">Legal Intelligence</span>
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-8">
          Strategic <span className="text-gold italic">Insights.</span>
        </h1>
        <div className="h-px w-24 bg-gold mx-auto mb-8" />
        <p className="text-cream/80 text-lg leading-relaxed">
          In-depth analysis and thought leadership from our partners on the evolving legal landscape in India and abroad.
        </p>
      </motion.div>

      {/* ARTICLES LIST */}
      <div className="space-y-8">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-navy-2 border border-gold/10 p-8 md:p-10 hover:border-gold/30 transition-all group flex flex-col md:flex-row gap-8 items-start md:items-center justify-between"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4 text-xs font-semibold uppercase tracking-widest">
                <span className="text-gold bg-navy border border-gold/20 px-3 py-1 rounded-sm">{article.category}</span>
                <span className="text-muted">{article.date}</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-white mb-4 group-hover:text-gold transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed max-w-3xl">
                {article.summary}
              </p>
            </div>
            
            <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gold/20 text-gold group-hover:bg-gold group-hover:text-navy transition-all shrink-0">
              <ArrowRight size={20} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
