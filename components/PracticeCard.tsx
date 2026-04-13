import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PracticeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function PracticeCard({ title, description, icon, delay = 0 }: PracticeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="group relative bg-navy-2 border border-gold/10 p-8 hover:border-gold/50 transition-all duration-300 rounded-sm overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="text-gold mb-6 border border-gold/20 w-12 h-12 flex items-center justify-center rounded-full bg-navy flex-shrink-0">
          {icon}
        </div>
        
        <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-gold transition-colors">{title}</h3>
        
        <p className="text-sm text-muted leading-relaxed flex-grow">
          {description}
        </p>
        
        <Link 
          href={`/practice-areas#${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
          className="mt-8 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold/70 group-hover:text-gold transition-colors w-fit"
        >
          <span>Explore Expertise</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
