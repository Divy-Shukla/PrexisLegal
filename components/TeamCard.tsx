import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
  delay?: number;
}

export default function TeamCard({ name, role, bio, initials, delay = 0 }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#0e1628] border border-white/10 hover:border-[#c9a84c]/30 transition-all p-10 flex flex-col items-center text-center group"
    >
      <div className="w-20 h-20 bg-[#0a0f1e] border border-gold/30 flex items-center justify-center mb-8 shrink-0 relative overflow-hidden">
        <span className="font-serif font-bold text-2xl text-gold">{initials}</span>
        {/* Subtle hover overlay to simulate image hover logic */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors" />
      </div>
      
      <h3 className="font-serif font-bold text-[24px] text-white mb-2">{name}</h3>
      <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-gold mb-6 font-semibold">{role}</p>
      
      <p className="font-sans text-[13px] text-muted leading-relaxed">
        {bio}
      </p>
    </motion.div>
  );
}
