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
        scrolled ? "bg-navy/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="font-serif text-gold text-3xl italic tracking-widest border border-gold/30 w-10 h-10 flex items-center justify-center rounded-sm">
            PL
          </div>
          <span className="font-serif text-2xl tracking-wide font-medium text-white">PrexisLegal</span>
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
              className="text-sm tracking-widest uppercase text-cream/70 hover:text-gold transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm tracking-widest uppercase text-cream/70 hover:text-gold transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/#book"
            className="bg-gold text-navy px-6 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold-2 transition-all"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gold"
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
            className="md:hidden absolute top-full left-0 w-full bg-navy/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 border-t border-gold/10"
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
                className="text-xl font-serif text-cream hover:text-gold transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#book"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-gold text-navy px-8 py-4 tracking-widest uppercase font-medium text-sm"
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
