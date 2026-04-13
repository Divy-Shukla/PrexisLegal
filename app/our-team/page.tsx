"use client";

import { motion } from "framer-motion";
import TeamCard from "@/components/TeamCard";

export default function OurTeamPage() {
  const team = [
    {
      name: "Arjun Varma",
      role: "Founding Partner",
      bio: "Specializing in Constitutional Law and Supreme Court advocacy with over 30 years of landmark judgments.",
      initials: "AV"
    },
    {
      name: "Sanya Kapoor",
      role: "Senior Partner",
      bio: "Focuses on Intellectual Property rights for multinational corporations and major technology companies.",
      initials: "SK"
    },
    {
      name: "Rohan Mehra",
      role: "Managing Associate",
      bio: "Expertise in Corporate Arbitration and International Trade Law, facilitating multi-jurisdictional settlements.",
      initials: "RM"
    },
    {
      name: "Meera Singh",
      role: "Senior Counsel",
      bio: "Renowned expert in Real Estate and Infrastructure law, having advised on India's largest commercial developments.",
      initials: "MS"
    },
    {
      name: "Vikram Desai",
      role: "Counsel",
      bio: "Specializing in high-stakes white-collar criminal defense and complex corporate compliance matters.",
      initials: "VD"
    },
    {
      name: "Ananya Patel",
      role: "Associate",
      bio: "Provides strategic counsel in Employment and Labour relations for Fortune 500 companies operating in India.",
      initials: "AP"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <span className="text-gold uppercase tracking-[0.15em] font-sans text-[11px] font-medium mb-6 block">Sovereign Authority</span>
        <h1 className="font-serif font-bold text-5xl md:text-[48px] text-white mb-8">
          Meet the Team
        </h1>
        <div className="h-px w-24 bg-gold mx-auto mb-8" />
        <p className="text-cream/80 text-lg leading-relaxed font-sans">
          Our partners bring decades of jurisdictional mastery and strategic foresight to every case, blending tradition with modern digital agility.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <TeamCard 
            key={member.name}
            name={member.name}
            role={member.role}
            bio={member.bio}
            initials={member.initials}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}
