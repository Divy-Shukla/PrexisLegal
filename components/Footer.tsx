import Link from "next/link";
import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] text-cream/70 border-t border-gold/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="font-serif text-2xl tracking-wide font-bold text-gold">PrexisLegal</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Elite legal counsel for a complex world, providing unparalleled strategic depth across seven core practice areas.
            </p>
            <div className="flex items-center gap-2 mt-4 text-gold">
              <Scale size={20} />
              <span className="text-xs uppercase tracking-widest font-medium">Regulated by the Bar Council of India</span>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-serif text-white text-xl mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/practice-areas" className="hover:text-gold transition-colors">Practice Areas</Link></li>
              <li><Link href="/our-team" className="hover:text-gold transition-colors">Our Experts</Link></li>
              <li><Link href="/case-results" className="hover:text-gold transition-colors">Case Results</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-serif text-white text-xl mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/testimonials" className="hover:text-gold transition-colors">Testimonials</Link></li>
              <li><Link href="/insights" className="hover:text-gold transition-colors">Legal Insights</Link></li>
              <li><Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-serif text-white text-xl mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-gold">▪</span>
                <span>10 Point Law Tower, Connaught Place, New Delhi, India 110001</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">▪</span>
                <span>counsel@prexislegal.com</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold">▪</span>
                <span>+91 90000 00000</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gold/10 pt-8 mt-12 text-center text-xs text-cream/50 max-w-4xl mx-auto space-y-4">
          <p>
            DISCLAIMER: The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner. By clicking on "I AGREE" or continuing to use this website, the user acknowledges that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-left inline-block">
             <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;</li>
             <li>The user wishes to gain more information about us for their own information and use;</li>
             <li>The information about us is provided to the user only on their specific request and any information obtained or materials downloaded from this website is completely at the user's volition.</li>
          </ul>
          <p className="mt-4">
            © {new Date().getFullYear()} PREXISLEGAL. ALL RIGHTS RESERVED. THIS WEBSITE IS FOR INFORMATIONAL PURPOSES ONLY.
          </p>
        </div>
      </div>
    </footer>
  );
}
