import { motion } from "framer-motion";
import { Scale } from "lucide-react";

interface CaseCardProps {
  title: string;
  category: string;
  description: string;
  delay?: number;
}

export default function CaseCard({ title, category, description, delay = 0 }: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="bg-navy-3 border border-gold/10 p-8 hover:border-gold/30 transition-all group"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs uppercase tracking-widest text-gold bg-navy-2 px-3 py-1 rounded-sm border border-gold/20">
          {category}
        </span>
        <Scale size={20} className="text-gold/50 group-hover:text-gold transition-colors" />
      </div>
      
      <h3 className="font-serif text-2xl text-white mb-4 line-clamp-2">{title}</h3>
      
      <div className="h-px w-12 bg-gold/50 mb-4 group-hover:w-24 transition-all duration-300" />
      
      <p className="text-sm text-muted leading-relaxed line-clamp-3">
        {description}
      </p>
    </motion.div>
  );
}
