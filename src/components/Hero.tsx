"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Mouse tracking parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize values between -1 and 1
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Smooth the mouse values
  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transform subtle movement (moving opposite to mouse gives a 3D window effect)
  const xMove = useTransform(smoothX, [-1, 1], ["2%", "-2%"]);
  const yMove = useTransform(smoothY, [-1, 1], ["2%", "-2%"]);

  const titleLines = ["Cut Through", "The Noise."];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[600px] sm:min-h-[800px] flex items-center justify-center overflow-hidden bg-[var(--color-bg-dark)]"
    >
      {/* Background Image with Parallax & Mouse Tracking */}
      <motion.div
        className="absolute inset-0 w-full h-full scale-105" // Scaled slightly to prevent edges showing on move
        style={{ y: yImage, scale: scaleImage }}
      >
        <motion.div 
          className="relative w-full h-full bg-[var(--color-bg-dark)]"
          style={{ x: xMove, y: yMove }}
        >
          {/* Base Dark/Desaturated Image */}
          <Image
            src="/assets/images/hero-1.jpg"
            alt="Signal Agency Hero Dark"
            fill
            priority
            className="object-cover opacity-40 sm:opacity-20 sm:grayscale" 
            sizes="100vw"
          />
        </motion.div>
        {/* Gradient overlays for better text readability at top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark)] via-transparent to-transparent opacity-60 h-[30%]" />
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--color-text-light)]/80 text-sm md:text-base uppercase tracking-widest mb-6 font-medium"
        >
          Creative Agency
        </motion.div>

        <div ref={textRef} className="relative mb-8 text-[clamp(4rem,10vw,9rem)] leading-[0.9] font-display">
          {/* Base Text Layer */}
          <motion.h1
            style={{ opacity: opacityText }}
            className="text-[var(--color-text-light)] drop-shadow-2xl"
          >
            {titleLines.map((line, index) => (
              <span key={index} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "120%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.3 + index * 0.15,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>

        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-[var(--color-text-light)] text-lg md:text-xl max-w-2xl font-light mb-12 drop-shadow-md"
        >
          Strategy, creativity, and digital craft for brands that refuse to be
          ignored.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link
            href="#work"
            className="inline-flex items-center justify-center px-10 py-5 font-body font-medium text-[var(--color-text-primary)] bg-[var(--color-text-light)] rounded-full transition-all duration-300 hover:scale-105"
          >
            View Our Work
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-5 font-body font-medium text-[var(--color-text-light)] bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            Start A Project
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-light)]/60"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-current to-transparent"
        />
      </motion.div>
    </section>
  );
}
