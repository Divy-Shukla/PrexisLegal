import { motion } from "framer-motion";
import Image from "next/image";

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
      className="bg-navy-2 border border-gold/10 hover:border-gold/30 transition-all p-8 flex flex-col items-center text-center group"
    >
      <div className="w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
        <span className="font-serif text-3xl text-gold">{initials}</span>
      </div>
      
      <h3 className="font-serif text-2xl text-white mb-2">{name}</h3>
      <p className="text-xs uppercase tracking-widest text-gold mb-6 font-semibold">{role}</p>
      
      <p className="text-sm text-muted leading-relaxed">
        {bio}
      </p>
    </motion.div>
  );
}
