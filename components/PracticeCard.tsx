import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PracticeCardProps {
  title: string;
  description: string;
  numberCounter: string;
  delay?: number;
}

export default function PracticeCard({ title, description, numberCounter, delay = 0 }: PracticeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="group bg-[#0a0f1e] border border-white/10 p-10 hover:border-l-[3px] hover:border-l-gold hover:bg-[#0e1628] hover:border-y-white/10 hover:border-r-white/10 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-8">
        <span className="font-sans text-[11px] text-gold/50">{numberCounter}</span>
      </div>
      
      <h3 className="font-serif font-bold text-[20px] text-white mb-4">{title}</h3>
      
      <p className="font-sans text-[14px] text-muted leading-relaxed flex-grow">
        {description}
      </p>
      
      <Link 
        href={`/practice-areas#${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
        className="mt-8 flex items-center justify-between group-hover:text-gold transition-colors text-transparent"
      >
        <span className="text-white/0 group-hover:text-gold uppercase tracking-[0.1em] text-[11px] font-semibold transition-colors duration-300">
          Explore
        </span>
        <ArrowRight size={14} className="text-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </Link>
    </motion.div>
  );
}
