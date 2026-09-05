"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function InsightsClient({ articles }: { articles: any[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto">
      <div className="flex flex-col">
        {articles.map((article, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <Link 
              href={`/insights/${article.slug}`}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-[var(--color-border)] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-cursor="view"
            >
              {/* Background Hover Reveal */}
              <motion.div 
                className="absolute inset-0 bg-[var(--color-bg-dark)] -z-10"
                initial={false}
                animate={{ scaleY: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ originY: 1 }}
              />

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 w-full z-10 px-0 group-hover:px-6 transition-all duration-500">
                <div className="w-48 text-sm uppercase tracking-widest text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-light)]/60 transition-colors">
                  {article.date}
                </div>
                
                <h2 className="text-3xl md:text-5xl font-display group-hover:text-[var(--color-text-light)] transition-colors max-w-4xl">
                  {article.title}
                </h2>
              </div>
              
              <div className="hidden md:flex shrink-0 items-center gap-8 z-10 pr-0 group-hover:pr-6 transition-all duration-500">
                <span className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-light)]/60 transition-colors">
                  {article.category}
                </span>
                <div className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center group-hover:border-white/20 group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
