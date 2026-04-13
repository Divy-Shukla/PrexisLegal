"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import { useState } from "react";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden px-6 lg:px-8 bg-navy">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        <div className="absolute bottom-0 left-0 w-[60%] h-px bg-gold/20" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-[2px] h-[60px] bg-gold flex-shrink-0" />
            <p className="text-gold font-sans uppercase tracking-[0.2em] text-[11px] font-medium">
              ADVOCATES & SOLICITORS — LUCKNOW, U.P.
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1] tracking-tight max-w-4xl"
          >
            Trusted Advocates. <br />
            Proven Results.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-cream/80 text-lg md:text-xl max-w-2xl mb-12 font-sans"
          >
            A sovereign counsel for the modern era, navigating complex legal landscapes with unyielding resolve and commanding integrity.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start gap-6"
          >
            <button 
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto bg-gold text-navy px-10 py-4 font-sans font-semibold uppercase tracking-[0.1em] text-[11px] hover:bg-white transition-colors rounded-[2px]"
            >
              Book Consultation
            </button>
            <Link 
              href="/about"
              className="w-full sm:w-auto border border-white/10 text-white px-10 py-4 font-sans font-semibold uppercase tracking-[0.1em] text-[11px] hover:bg-white/5 transition-colors rounded-[2px]"
            >
              Firm Overview
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CREDENTIAL BAR (STATS) */}
      <section className="bg-[#0e1628] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-6 py-8 flex items-center gap-4"
          >
            <h3 className="font-serif font-bold text-5xl text-gold">20+</h3>
            <p className="uppercase tracking-[0.15em] text-[11px] text-muted font-sans font-medium leading-relaxed">Years of<br/>Authority</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="px-6 py-8 flex items-center gap-4"
          >
            <h3 className="font-serif font-bold text-5xl text-gold">98%</h3>
            <p className="uppercase tracking-[0.15em] text-[11px] text-muted font-sans font-medium leading-relaxed">Favorable<br/>Verdicts</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="px-6 py-8 flex items-center gap-4"
          >
            <h3 className="font-serif font-bold text-5xl text-gold">15+</h3>
            <p className="uppercase tracking-[0.15em] text-[11px] text-muted font-sans font-medium leading-relaxed">Legal<br/>Experts</p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[#0e1628] border border-white/10 relative z-10 flex items-center justify-center">
              <span className="font-sans text-[12px] text-white/30 text-center">Advocate Photography<br/>— Coming Soon</span>
            </div>
            {/* Trust Signal Box */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-[#0a0f1e] p-6 z-20 shadow-xl rounded-[2px] min-w-[200px]">
               <p className="font-serif font-bold text-4xl mb-1">500+</p>
               <p className="font-sans uppercase tracking-[0.15em] text-[11px] font-semibold">Cases Won</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-sans uppercase tracking-[0.15em] text-[11px] font-medium mb-4 block">About PrexisLegal</span>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-8 leading-tight">
              About PrexisLegal
            </h2>
            <p className="text-muted font-sans leading-relaxed mb-8">
              PrexisLegal represents a legacy of unparalleled authority spanning two decades. Our practice is defined by the intersection of strategic vision and modern counsel. Our philosophy is rooted in the belief that true counsel is found in the space between the statutes.
            </p>
            <p className="text-muted font-sans leading-relaxed mb-10">
              We do not merely practice law; we craft the architectural framework for our clients' future successes.
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center gap-3 text-white uppercase tracking-[0.1em] text-[11px] font-semibold hover:text-gold transition-colors"
            >
              Discover Our History <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PRACTICE AREAS PREVIEW */}
      <section className="py-32 px-6 lg:px-8 bg-[#0a0f1e] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-sans uppercase tracking-[0.15em] text-[11px] font-medium mb-4 block">Core Expertise</span>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-white">
                Our Practice Areas
              </h2>
            </motion.div>
            <Link 
              href="/practice-areas" 
              className="flex items-center gap-2 border-b border-gold text-gold uppercase tracking-[0.1em] text-[11px] font-semibold pb-1 hover:text-white hover:border-white transition-colors"
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
              className="bg-[#0a0f1e] border border-white/10 p-10 group hover:border-l-[3px] hover:border-l-gold hover:bg-[#0e1628] hover:border-y-white/10 hover:border-r-white/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="font-sans text-[11px] text-gold/50">01</span>
                <ArrowRight size={14} className="text-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <h3 className="font-serif font-bold text-[20px] text-white mb-4">Corporate Law</h3>
              <p className="text-muted font-sans text-[14px] leading-relaxed">Comprehensive legal advisory for complex corporate structures and M&A.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0a0f1e] border border-white/10 p-10 group hover:border-l-[3px] hover:border-l-gold hover:bg-[#0e1628] hover:border-y-white/10 hover:border-r-white/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="font-sans text-[11px] text-gold/50">02</span>
                <ArrowRight size={14} className="text-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <h3 className="font-serif font-bold text-[20px] text-white mb-4">Litigation</h3>
              <p className="text-muted font-sans text-[14px] leading-relaxed">Representing sovereign interests and high-stakes commercial disputes.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#0a0f1e] border border-white/10 p-10 group hover:border-l-[3px] hover:border-l-gold hover:bg-[#0e1628] hover:border-y-white/10 hover:border-r-white/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="font-sans text-[11px] text-gold/50">03</span>
                <ArrowRight size={14} className="text-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <h3 className="font-serif font-bold text-[20px] text-white mb-4">Real Estate</h3>
              <p className="text-muted font-sans text-[14px] leading-relaxed">Advising on property acquisitions, financing, and regulatory clearances.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
