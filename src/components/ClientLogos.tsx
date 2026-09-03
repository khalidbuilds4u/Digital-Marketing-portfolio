"use client";

import { motion } from "framer-motion";

const logos = [
  "Vogue", "LVMH", "Spotify", "Netflix", "Nike", "Polestar", "Acne Studios"
];

export default function ClientLogos() {
  // Duplicate the array to create a seamless loop
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="py-20 border-y border-[var(--color-border)] overflow-hidden bg-[var(--color-bg-primary)]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 mb-12 text-center md:text-left">
        <h4 className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] font-medium">Trusted By Industry Leaders</h4>
      </div>
      
      <div className="relative flex overflow-hidden">
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[var(--color-bg-primary)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[var(--color-bg-primary)] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
        >
          {marqueeLogos.map((logo, index) => (
            <div 
              key={index} 
              className="px-12 md:px-24 font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)] opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
