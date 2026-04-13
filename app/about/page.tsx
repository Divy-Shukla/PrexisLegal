"use client";

import { motion } from "framer-motion";
import { Scale, Shield, Landmark, BookOpen } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-24 mt-12"
      >
        <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">Firm History</span>
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-8">
          The Sovereign <span className="text-gold italic">Counsel.</span>
        </h1>
        <div className="h-px w-24 bg-gold mx-auto mb-8" />
        <p className="text-cream/80 text-lg leading-relaxed">
          PrexisLegal represents a legacy of unparalleled authority. Our practice is defined by the intersection of strategic vision and modern counsel, currently serving as the trusted architects of legal stability for India's premier enterprises.
        </p>
      </motion.div>

      {/* STORY SECTION */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            A Modern Legacy defined by Strategy.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed text-sm">
            <p>
              In the quiet corners of our chambers, decisions are made that shape the commercial landscape of the nation. We do not merely practice law; we engineer solutions that safeguard the future of those we represent.
            </p>
            <p>
              Our philosophy is rooted in the belief that true counsel is found in the space between the statutes. It requires an understanding not just of the law, but of the intricate web of business, politics, and human nature that the law seeks to govern.
            </p>
            <p>
              From complex cross-border litigation to high-stakes arbitration, PrexisLegal stands as a bulwark against legal uncertainty, ensuring that our clients can operate with confidence and clarity.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] border border-gold/20 p-2"
        >
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale brightness-75" />
          <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
        </motion.div>
      </div>

      {/* PILLARS SECTION */}
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-widest text-xs font-semibold mb-4 block">Core Foundations</span>
        <h2 className="font-serif text-4xl text-white">The Four Pillars</h2>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy-2 border border-gold/10 p-8 text-center hover:border-gold/30 transition-all"
        >
          <Scale size={32} className="text-gold mb-6 mx-auto" />
          <h3 className="font-serif text-xl text-white mb-4">Integrity</h3>
          <p className="text-xs text-muted leading-relaxed">An unyielding commitment to the ethical core of the legal profession. Our reputation is our most valuable asset.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-navy-2 border border-gold/10 p-8 text-center hover:border-gold/30 transition-all"
        >
          <Shield size={32} className="text-gold mb-6 mx-auto" />
          <h3 className="font-serif text-xl text-white mb-4">Precision</h3>
          <p className="text-xs text-muted leading-relaxed">A deep comprehension of the minutiae that dictate the outcome of complex matters. We leave nothing to chance.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-navy-2 border border-gold/10 p-8 text-center hover:border-gold/30 transition-all"
        >
          <Landmark size={32} className="text-gold mb-6 mx-auto" />
          <h3 className="font-serif text-xl text-white mb-4">Advocacy</h3>
          <p className="text-xs text-muted leading-relaxed">Relentless representation in the halls of justice. We champion our clients' interests with fierce authority.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-navy-2 border border-gold/10 p-8 text-center hover:border-gold/30 transition-all"
        >
          <BookOpen size={32} className="text-gold mb-6 mx-auto" />
          <h3 className="font-serif text-xl text-white mb-4">Accessibility</h3>
          <p className="text-xs text-muted leading-relaxed">Complex counsel demystified. We prioritize clear communication and absolute transparency.</p>
        </motion.div>
      </div>
    </div>
  );
}
