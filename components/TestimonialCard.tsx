import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company?: string;
  delay?: number;
}

export default function TestimonialCard({ quote, author, company, delay = 0 }: TestimonialCardProps) {
  // Extract initials
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#0e1628] border border-white/10 p-10 relative group hover:border-[#c9a84c]/30 transition-all flex flex-col h-full"
    >
      <div className="w-[30px] h-[2px] bg-gold mb-6" />
      
      <div className="text-gold text-[10px] tracking-[0.2em] mb-4">
        ★★★★★
      </div>
      
      <p className="font-serif text-[18px] text-cream leading-relaxed mb-8 flex-grow font-normal">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-[36px] h-[36px] bg-[#0a0f1e] text-gold border border-gold/20 flex items-center justify-center font-sans text-[13px] font-semibold shrink-0">
          {getInitials(author)}
        </div>
        <div>
          <p className="font-sans text-[13px] font-bold tracking-wide text-white">
            {author}
          </p>
          {company && (
            <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-muted mt-1 font-medium">
              {company}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
