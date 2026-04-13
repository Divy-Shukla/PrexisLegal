"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar as CalendarIcon, Clock } from "lucide-react";
import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const dates = ["Nov 15", "Nov 16", "Nov 17", "Nov 18", "Nov 19"];
  const times = ["10:00 AM", "11:30 AM", "2:00 PM", "4:00 PM"];

  const handleNext = () => {
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="relative bg-navy border border-gold/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-navy/95 border-b border-gold/10 p-6 flex justify-between items-center z-10">
              <h2 className="font-serif text-3xl text-gold">Schedule Consultation</h2>
              <button onClick={onClose} className="text-muted hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-8">
              {step === 1 ? (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-white flex items-center gap-2 mb-4 font-serif text-xl">
                      <CalendarIcon size={20} className="text-gold" /> Select Date
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {dates.map((date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`p-3 border text-sm font-semibold transition-all ${
                            selectedDate === date
                              ? "bg-gold text-navy border-gold"
                              : "border-gold/20 text-cream hover:border-gold hover:text-gold"
                          }`}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white flex items-center gap-2 mb-4 font-serif text-xl">
                      <Clock size={20} className="text-gold" /> Select Time
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {times.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 border text-sm font-semibold transition-all ${
                            selectedTime === time
                              ? "bg-gold text-navy border-gold"
                              : "border-gold/20 text-cream hover:border-gold hover:text-gold"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gold/10 flex justify-end">
                    <button
                      onClick={handleNext}
                      disabled={!selectedDate || !selectedTime}
                      className="bg-gold text-navy px-8 py-3 text-sm tracking-widest uppercase font-bold disabled:opacity-50 hover:bg-gold-2 transition-all"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-navy-2 p-4 border border-gold/10 flex justify-between items-center text-sm">
                    <div>
                      <p className="text-gold uppercase tracking-widest font-semibold mb-1">Appointment Details</p>
                      <p className="text-cream">{selectedDate} at {selectedTime}</p>
                    </div>
                    <button onClick={() => setStep(1)} className="text-muted hover:text-white underline uppercase tracking-widest text-xs">
                      Change
                    </button>
                  </div>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" placeholder="First Name" className="w-full bg-navy border border-gold/20 p-4 text-cream focus:border-gold outline-none" required />
                      <input type="text" placeholder="Last Name" className="w-full bg-navy border border-gold/20 p-4 text-cream focus:border-gold outline-none" required />
                    </div>
                    <input type="email" placeholder="Email Address" className="w-full bg-navy border border-gold/20 p-4 text-cream focus:border-gold outline-none" required />
                    <input type="tel" placeholder="Phone Number" className="w-full bg-navy border border-gold/20 p-4 text-cream focus:border-gold outline-none" required />
                    <textarea placeholder="Briefly describe your legal matter" rows={4} className="w-full bg-navy border border-gold/20 p-4 text-cream focus:border-gold outline-none resize-none" required />
                    
                    <div className="pt-6 flex gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          alert("Consultation requested!");
                          onClose();
                          setStep(1);
                        }}
                        className="flex-1 bg-gold text-navy px-8 py-4 tracking-widest uppercase font-bold hover:bg-gold-2 transition-all"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
