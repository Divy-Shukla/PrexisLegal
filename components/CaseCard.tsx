import { motion } from "framer-motion";

interface CaseCardProps {
  title: string;
  category: string;
  description: string;
  delay?: number;
}

export default function CaseCard({ title, category, description, delay = 0 }: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#0e1628] border-l-[3px] border-l-gold border-y border-y-white/10 border-r border-r-white/10 p-10 hover:bg-[#131d35] transition-colors group flex flex-col h-full"
    >
      <div className="mb-6">
        <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-white/50 border border-white/10 px-3 py-1 bg-[#0a0f1e]">
          {category}
        </span>
      </div>
      
      <h3 className="font-serif font-bold text-[22px] text-white mb-4 line-clamp-2">{title}</h3>
      
      <p className="font-sans text-[14px] text-muted leading-relaxed line-clamp-3">
        {description}
      </p>
    </motion.div>
  );
}
