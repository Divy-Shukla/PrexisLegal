"use client";

import { motion } from "framer-motion";
import PracticeCard from "@/components/PracticeCard";
import { Scale, Shield, Landmark, Users, Briefcase, Building, FileText } from "lucide-react";

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      title: "Litigation & Dispute Resolution",
      description: "Representing sovereign interests and corporate entities in high-stakes commercial disputes, writ adjudicational challenges, and appellate advocacy before the Supreme Court of India.",
      icon: <Scale size={20} />
    },
    {
      title: "Criminal Law",
      description: "White-collar defense, compliance advisory, and sophisticated legal strategies for complex penal matters.",
      icon: <Shield size={20} />
    },
    {
      title: "Arbitration",
      description: "Neutral, efficient, and binding resolution of international and domestic commercial conflicts through strategic mediation.",
      icon: <Building size={20} />
    },
    {
      title: "Family & Personal Law",
      description: "Discreet counsel for sensitive matrimonial matters, wealth management, and complex estate succession planning.",
      icon: <Users size={20} />
    },
    {
      title: "Real Estate",
      description: "Advising on prime property acquisitions, structural financing, and regulatory clearances for landmark developments.",
      icon: <Landmark size={20} />
    },
    {
      title: "Employment & Labour",
      description: "Strategic advisory on executive compensation, corporate restructuring, and high-level human capital relations.",
      icon: <Briefcase size={20} />
    },
    {
      title: "Civil Matters",
      description: "Dedicated advocacy for personal rights, contractual enforcement, and broad-spectrum civil resolutions.",
      icon: <FileText size={20} />
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
        <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">Core Disciplines</span>
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-8">
          Our <span className="text-gold italic">Expertise.</span>
        </h1>
        <div className="h-px w-24 bg-gold mb-8" />
        <p className="text-cream/80 text-lg leading-relaxed max-w-2xl">
          Distinguished counsel across seven specialized disciplines, tailored for the complexities of modern jurisprudence.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {practiceAreas.map((area, index) => (
          <div key={area.title} id={area.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
             <PracticeCard 
               title={area.title}
               description={area.description}
               icon={area.icon}
               delay={index * 0.1}
             />
          </div>
        ))}
      </div>
    </div>
  );
}
