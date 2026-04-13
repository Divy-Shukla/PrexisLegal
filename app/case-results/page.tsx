"use client";

import { motion } from "framer-motion";
import CaseCard from "@/components/CaseCard";

export default function CaseResultsPage() {
  const cases = [
    {
      title: "State vs. Multi-National Energy Corp",
      category: "Litigation",
      description: "Successfully defended against ₹500 Crore environmental litigation, leading to a landmark judgment redefining corporate liability thresholds in high-risk zones."
    },
    {
      title: "TechCo acquisition of FinServ Ltd",
      category: "Corporate M&A",
      description: "Navigated complex cross-border regulatory approvals for a $1.2 Billion merger, ensuring seamless transition with zero compliance breaches."
    },
    {
      title: "Estate of R.K. Singhania",
      category: "Family Law",
      description: "Arbitrated a contentious multi-generational estate dispute involving assets spanning three continents, securing an equitable settlement without public trial."
    },
    {
      title: "Union of India vs. Associated Builders",
      category: "Arbitration",
      description: "Prevailed in a ₹150 Crore infrastructure dispute, overturning a previously flawed arbitral award based on newly discovered evidentiary technicalities."
    },
    {
      title: "VentureTech IP Infringement",
      category: "Intellectual Property",
      description: "Secured a pan-India injunction against counterfeiting rings, protecting the client's core software IP and awarding unprecedented punitive damages."
    },
    {
      title: "Global Retails Employee Action",
      category: "Employment",
      description: "Defended a multinational retail chain against a class-action labor dispute, structuring a revised severance policy that became the industry standard."
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <span className="text-gold uppercase tracking-[0.15em] font-sans text-[11px] font-medium mb-6 block">Proof of Authority</span>
        <h1 className="font-serif font-bold text-5xl md:text-[48px] text-white mb-8">
          Case Results
        </h1>
        <div className="h-px w-24 bg-gold mb-8" />
        <p className="text-cream/80 text-lg leading-relaxed max-w-2xl font-sans">
          We speak through our victories. A curated selection of matters where our strategic intervention redefined the legal landscape.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((c, index) => (
          <CaseCard 
            key={c.title}
            title={c.title}
            category={c.category}
            description={c.description}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}
