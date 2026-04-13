"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Scale, Shield, Landmark } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import { useState } from "react";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/80 to-navy" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-gold font-sans uppercase tracking-[0.3em] text-sm font-semibold mb-6"
          >
            Premier Law Firm · Lucknow
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1]"
          >
            Justice Delivered <br />
            <span className="text-gold italic">with Precision.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
          >
            A sovereign counsel for the modern era, navigating complex legal landscapes with unyielding resolve and commanding integrity.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto bg-gold text-navy px-10 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-gold-2 transition-colors"
            >
              Consult Our Partners
            </button>
            <Link 
              href="/about"
              className="w-full sm:w-auto border border-gold/30 text-gold px-10 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-gold/10 transition-colors"
            >
              Firm Overview
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 border-y border-gold/10 bg-navy-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gold/10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-8 md:py-0"
          >
            <h3 className="font-serif text-5xl text-gold mb-2">20+</h3>
            <p className="uppercase tracking-widest text-xs text-muted font-semibold">Years of Authority</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="px-4 py-8 md:py-0"
          >
            <h3 className="font-serif text-5xl text-gold mb-2">98%</h3>
            <p className="uppercase tracking-widest text-xs text-muted font-semibold">Favorable Verdicts</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="px-4 py-8 md:py-0"
          >
            <h3 className="font-serif text-5xl text-gold mb-2">15+</h3>
            <p className="uppercase tracking-widest text-xs text-muted font-semibold">Legal Experts</p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-navy-2 border border-gold/20 p-2 relative z-10">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1549646549-c12480aee8ef?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-gold/30 z-0" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">About the Firm</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
              Architects of Legal <br />
              <span className="text-gold italic">Strategic Superiority.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              PrexisLegal represents a legacy of unparalleled authority spanning two decades. Our practice is defined by the intersection of strategic vision and modern counsel. Our philosophy is rooted in the belief that true counsel is found in the space between the statutes.
            </p>
            <p className="text-muted leading-relaxed mb-10">
              We do not merely practice law; we craft the architectural framework for our clients' future successes.
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center gap-3 text-gold uppercase tracking-widest text-sm font-semibold hover:gap-5 transition-all"
            >
              Discover Our History <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PRACTICE AREAS PREVIEW */}
      <section className="py-32 px-6 lg:px-8 bg-black/30 border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">Our Expertise</span>
              <h2 className="font-serif text-4xl md:text-5xl text-white">
                Distinguished <span className="text-gold italic">Expertise</span>
              </h2>
            </motion.div>
            <Link 
              href="/practice-areas" 
              className="flex items-center gap-2 border-b border-gold text-gold uppercase tracking-widest text-xs font-semibold pb-1 hover:text-white hover:border-white transition-colors"
            >
              View All Practice Areas <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-navy border border-gold/10 p-10 hover:border-gold/30 transition-all group"
            >
              <Scale size={32} className="text-gold mb-8 stroke-1 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-2xl text-white mb-4">Corporate Law</h3>
              <p className="text-muted text-sm leading-relaxed mb-8">Comprehensive legal advisory for complex corporate structures and M&A.</p>
              <div className="h-px w-12 bg-gold/50 group-hover:w-full transition-all duration-500" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-navy border border-gold/10 p-10 hover:border-gold/30 transition-all group"
            >
              <Shield size={32} className="text-gold mb-8 stroke-1 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-2xl text-white mb-4">Litigation</h3>
              <p className="text-muted text-sm leading-relaxed mb-8">Representing sovereign interests and high-stakes commercial disputes.</p>
              <div className="h-px w-12 bg-gold/50 group-hover:w-full transition-all duration-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-navy border border-gold/10 p-10 hover:border-gold/30 transition-all group"
            >
              <Landmark size={32} className="text-gold mb-8 stroke-1 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-2xl text-white mb-4">Real Estate</h3>
              <p className="text-muted text-sm leading-relaxed mb-8">Advising on property acquisitions, financing, and regulatory clearances.</p>
              <div className="h-px w-12 bg-gold/50 group-hover:w-full transition-all duration-500" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
