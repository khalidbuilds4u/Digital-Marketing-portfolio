"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote: "SIGNAL didn't just redesign our brand. They architected a funnel that increased our ROAS by 150% in the first quarter. They are a revenue partner, not just a creative agency.",
    author: "Jane Doe",
    title: "CEO, Terra",
  },
  {
    quote: "Most agencies give you pretty pictures. SIGNAL gives you scalable growth. Their understanding of paid social and conversion rate optimization is unmatched.",
    author: "John Smith",
    title: "CMO, Maison Noire",
  },
  {
    quote: "We were struggling to connect with a younger demographic. SIGNAL's social-first strategy completely revived our engagement and drove a 42% decrease in our CAC.",
    author: "Sarah Jenkins",
    title: "Founder, Onward",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto overflow-hidden">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] mb-4">Client Feedback</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">Don't just take our word for it.</h2>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-bg-dark)] hover:text-[var(--color-text-light)] transition-colors"
              aria-label="Previous Testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-bg-dark)] hover:text-[var(--color-text-light)] transition-colors"
              aria-label="Next Testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </FadeIn>

      <div className="relative min-h-[400px] md:min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-10 max-w-5xl text-[var(--color-text-primary)]">
              "{testimonials[currentIndex].quote}"
            </p>
            <div>
              <div className="font-semibold text-lg">{testimonials[currentIndex].author}</div>
              <div className="text-[var(--color-text-secondary)]">{testimonials[currentIndex].title}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
