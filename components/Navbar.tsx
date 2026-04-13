"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 border-b border-white/5 py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="font-serif text-gold text-lg border border-gold w-[32px] h-[32px] flex items-center justify-center bg-transparent shrink-0 font-bold">
            PL
          </div>
          <span className="font-serif text-xl font-bold text-white tracking-wide">PrexisLegal</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "About Us", path: "/about" },
            { name: "Practice Areas", path: "/practice-areas" },
            { name: "Our Team", path: "/our-team" },
            { name: "Insights", path: "/insights" }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="font-sans text-[12px] font-medium tracking-[0.1em] uppercase text-white hover:border-b-2 hover:border-gold pb-1 border-b-2 border-transparent transition-all"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-sans text-[12px] font-medium tracking-[0.1em] uppercase text-white hover:border-b-2 hover:border-gold pb-1 border-b-2 border-transparent transition-all"
          >
            CONTACT
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/#book"
            className="bg-gold text-navy px-6 py-[10px] rounded-[2px] text-[11px] font-sans font-semibold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-navy border-t border-white/10 flex flex-col items-center justify-center gap-8"
          >
            {[
              { name: "About Us", path: "/about" },
              { name: "Practice Areas", path: "/practice-areas" },
              { name: "Our Team", path: "/our-team" },
              { name: "Insights", path: "/insights" },
              { name: "Contact", path: "/contact" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-[14px] font-medium tracking-[0.1em] uppercase text-white hover:text-gold transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#book"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-gold text-navy rounded-[2px] px-8 py-[12px] text-[12px] font-sans font-semibold uppercase tracking-widest"
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
