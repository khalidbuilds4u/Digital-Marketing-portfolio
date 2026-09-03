"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl h-[80vh] md:h-[700px] bg-[var(--color-bg-primary)] rounded-2xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            <div className="flex justify-between items-center p-6 border-b border-[var(--color-border)]">
              <h3 className="font-display text-3xl text-[var(--color-text-primary)]">Book a Discovery Call</h3>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[var(--color-border)] transition-colors text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <div className="flex-1 w-full bg-[var(--color-bg-primary)] flex items-center justify-center p-8">
              {/* Placeholder for Calendly/SavvyCal iframe */}
              <div className="w-full h-full border-2 border-dashed border-[var(--color-border)] rounded-xl flex flex-col items-center justify-center text-[var(--color-text-secondary)] gap-4 bg-white/30">
                <div className="w-16 h-16 rounded-full bg-[var(--color-border)] flex items-center justify-center text-[var(--color-text-primary)]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xl font-medium text-[var(--color-text-primary)]">Calendar Integration Placeholder</p>
                <p className="text-base text-center max-w-md">Drop your Calendly or SavvyCal embed code here.</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
