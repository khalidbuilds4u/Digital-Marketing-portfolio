"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // In a real production app, uncomment this to only show once per session
    /*
    if (sessionStorage.getItem("hasLoaded")) {
      setIsLoading(false);
      return;
    }
    */

    document.body.style.overflow = "hidden";
    
    const duration = 2000;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min((currentStep / steps) * 100, 100);
      
      // Easing function for progress counter
      const easeOutQuart = 1 - Math.pow(1 - currentProgress / 100, 4);
      setProgress(Math.floor(easeOutQuart * 100));

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          // sessionStorage.setItem("hasLoaded", "true");
          document.body.style.overflow = "auto";
        }, 500); // Brief pause at 100%
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[var(--color-bg-dark)] text-white"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute top-8 left-8 text-xs md:text-sm uppercase font-mono tracking-widest text-white/50">
            Initializing Environment
          </div>
          
          <div className="flex flex-col items-center overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="text-[clamp(4rem,15vw,12rem)] font-display leading-none tracking-tight"
            >
              SIGNAL.
            </motion.div>
          </div>

          <div className="absolute bottom-8 right-8 text-[clamp(2rem,6vw,4rem)] font-display font-light">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
