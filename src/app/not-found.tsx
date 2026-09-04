"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-dark)] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden [@media(pointer:fine)]:cursor-none">
      <CustomCursor />
      
      {/* Background Noise/Grid Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: "url('/assets/images/hero-1.jpg')", backgroundSize: "cover", filter: "grayscale(100%) blur(4px)" }} />
      
      <div className="relative z-10 flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(6rem,15vw,12rem)] font-display text-[var(--color-text-light)] leading-none tracking-tighter"
        >
          404
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-2xl md:text-3xl text-white/80 font-light tracking-wide uppercase">
            Looks like you lost the signal.
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            The page you're looking for doesn't exist, has been moved, or is temporarily unavailable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center px-10 py-5 font-body font-medium text-[var(--color-text-primary)] bg-[var(--color-text-light)] rounded-full transition-all duration-300 hover:scale-105"
          >
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
