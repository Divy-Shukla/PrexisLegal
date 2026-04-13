import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company?: string;
  delay?: number;
}

export default function TestimonialCard({ quote, author, company, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-navy-2 border border-gold/10 p-10 relative group hover:border-gold/30 transition-all"
    >
      <Quote size={40} className="text-gold/20 absolute top-6 left-6 group-hover:text-gold/40 transition-colors" />
      
      <div className="relative z-10 pt-4">
        <p className="font-serif text-xl italic text-cream leading-relaxed mb-8">
          "{quote}"
        </p>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-gold/50" />
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-wider text-white">
              {author}
            </p>
            {company && (
              <p className="font-sans text-xs uppercase tracking-widest text-muted mt-1">
                {company}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
