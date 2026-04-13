"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <span className="text-gold uppercase tracking-[0.15em] font-sans text-[11px] font-medium mb-6 block">Engage Counsel</span>
        <h1 className="font-serif font-bold text-5xl md:text-[48px] text-white mb-8">
          Contact Us
        </h1>
        <div className="h-px w-24 bg-gold mx-auto mb-8" />
        <p className="text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto font-sans">
          For discreet inquiries, strategic consultations, and immediate legal exigencies. We maintain strict confidentiality from the first communication.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* INFO MAP */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-10 mb-12">
            <div className="flex items-start gap-4">
              <div className="bg-[#0e1628] p-3 border border-white/10 rounded-[2px]">
                <MapPin className="text-gold stroke-[1.5]" size={24} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white mb-2">Chambers</h3>
                <p className="text-muted text-sm leading-relaxed font-sans">
                  70 Point Law Tower, <br />
                  Connaught Place, <br />
                  New Delhi, India 110001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#0e1628] p-3 border border-white/10 rounded-[2px]">
                <Phone className="text-gold stroke-[1.5]" size={24} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white mb-2">Direct Line</h3>
                <p className="text-muted text-sm leading-relaxed font-sans">+91 90000 00000</p>
                <p className="text-muted text-sm leading-relaxed font-sans">+91 90000 00001 (Emergency)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#0e1628] p-3 border border-white/10 rounded-[2px]">
                <Mail className="text-gold stroke-[1.5]" size={24} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white mb-2">Electronic Mail</h3>
                <p className="text-muted text-sm leading-relaxed font-sans">counsel@prexislegal.com</p>
                <p className="text-muted text-sm leading-relaxed font-sans">press@prexislegal.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#0e1628] p-3 border border-white/10 rounded-[2px]">
                <Clock className="text-gold stroke-[1.5]" size={24} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white mb-2">Operating Hours</h3>
                <p className="text-muted text-sm leading-relaxed font-sans">Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p className="text-muted text-sm leading-relaxed font-sans">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-muted text-sm leading-relaxed font-sans">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="bg-[#0e1628] border border-white/10 p-10 relative"
        >
          {submitted ? (
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0e1628] text-center p-10 z-10 border border-gold">
               <h3 className="font-serif font-bold text-3xl text-gold mb-4">Inquiry Received</h3>
               <p className="text-cream text-sm leading-relaxed mb-8 font-sans">
                 Your communication has been securely transmitted to our administrative staff. A representative will contact you within one business day.
               </p>
               <button 
                 onClick={() => setSubmitted(false)}
                 className="text-gold uppercase tracking-widest text-[11px] font-sans font-semibold border-b border-gold pb-1"
               >
                 Send Another Message
               </button>
             </div>
          ) : (
            <>
              <h2 className="font-serif font-bold text-3xl text-white mb-8">Secure Communication</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    className="w-full bg-[#0a0f1e] border border-white/10 rounded-[2px] p-4 text-[13px] text-cream font-sans focus:border-gold outline-none transition-colors" 
                  />
                  <input 
                    type="text" 
                    placeholder="Organization (Optional)" 
                    className="w-full bg-[#0a0f1e] border border-white/10 rounded-[2px] p-4 text-[13px] text-cream font-sans focus:border-gold outline-none transition-colors" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    className="w-full bg-[#0a0f1e] border border-white/10 rounded-[2px] p-4 text-[13px] text-cream font-sans focus:border-gold outline-none transition-colors" 
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="w-full bg-[#0a0f1e] border border-white/10 rounded-[2px] p-4 text-[13px] text-cream font-sans focus:border-gold outline-none transition-colors" 
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Subject Matter" 
                  required 
                  className="w-full bg-[#0a0f1e] border border-white/10 rounded-[2px] p-4 text-[13px] text-cream font-sans focus:border-gold outline-none transition-colors" 
                />
                <textarea 
                  placeholder="Brief description of the legal issue. Do not include highly confidential information until a formal attorney-client relationship is established." 
                  required 
                  rows={6}
                  className="w-full bg-[#0a0f1e] border border-white/10 rounded-[2px] p-4 text-[13px] text-cream font-sans focus:border-gold outline-none resize-none transition-colors" 
                />
                
                <button 
                  type="submit"
                  className="w-full bg-gold text-[#0a0f1e] px-8 py-4 tracking-[0.1em] uppercase font-sans font-bold text-[12px] hover:bg-white transition-all rounded-[2px]"
                >
                  Transmit Message
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
