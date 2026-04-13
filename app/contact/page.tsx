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
        <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">Engage Counsel</span>
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-8">
          Establish <span className="text-gold italic">Contact.</span>
        </h1>
        <div className="h-px w-24 bg-gold mx-auto mb-8" />
        <p className="text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto">
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
              <div className="bg-navy-2 p-3 border border-gold/20 rounded-sm">
                <MapPin className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-white mb-2">Chambers</h3>
                <p className="text-muted text-sm leading-relaxed">
                  70 Point Law Tower, <br />
                  Connaught Place, <br />
                  New Delhi, India 110001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-navy-2 p-3 border border-gold/20 rounded-sm">
                <Phone className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-white mb-2">Direct Line</h3>
                <p className="text-muted text-sm leading-relaxed">+91 90000 00000</p>
                <p className="text-muted text-sm leading-relaxed">+91 90000 00001 (Emergency)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-navy-2 p-3 border border-gold/20 rounded-sm">
                <Mail className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-white mb-2">Electronic Mail</h3>
                <p className="text-muted text-sm leading-relaxed">counsel@prexislegal.com</p>
                <p className="text-muted text-sm leading-relaxed">press@prexislegal.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-navy-2 p-3 border border-gold/20 rounded-sm">
                <Clock className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-white mb-2">Operating Hours</h3>
                <p className="text-muted text-sm leading-relaxed">Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p className="text-muted text-sm leading-relaxed">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-muted text-sm leading-relaxed">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="bg-navy-2 border border-gold/10 p-10 relative"
        >
          {submitted ? (
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-2/95 text-center p-10 z-10 border border-gold">
               <h3 className="font-serif text-3xl text-gold mb-4">Inquiry Received</h3>
               <p className="text-cream text-sm leading-relaxed mb-8">
                 Your communication has been securely transmitted to our administrative staff. A representative will contact you within one business day.
               </p>
               <button 
                 onClick={() => setSubmitted(false)}
                 className="text-gold uppercase tracking-widest text-xs font-semibold border-b border-gold pb-1"
               >
                 Send Another Message
               </button>
             </div>
          ) : (
            <>
              <h2 className="font-serif text-3xl text-white mb-8">Secure Communication</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    className="w-full bg-navy border border-gold/20 p-4 text-sm text-cream focus:border-gold outline-none" 
                  />
                  <input 
                    type="text" 
                    placeholder="Organization (Optional)" 
                    className="w-full bg-navy border border-gold/20 p-4 text-sm text-cream focus:border-gold outline-none" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    className="w-full bg-navy border border-gold/20 p-4 text-sm text-cream focus:border-gold outline-none" 
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="w-full bg-navy border border-gold/20 p-4 text-sm text-cream focus:border-gold outline-none" 
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Subject Matter" 
                  required 
                  className="w-full bg-navy border border-gold/20 p-4 text-sm text-cream focus:border-gold outline-none" 
                />
                <textarea 
                  placeholder="Brief description of the legal issue. Do not include highly confidential information until a formal attorney-client relationship is established." 
                  required 
                  rows={6}
                  className="w-full bg-navy border border-gold/20 p-4 text-sm text-cream focus:border-gold outline-none resize-none" 
                />
                
                <button 
                  type="submit"
                  className="w-full bg-gold text-navy px-8 py-4 tracking-widest uppercase font-bold text-sm hover:bg-gold-2 transition-all"
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
