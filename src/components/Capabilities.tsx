"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    id: "strategy",
    title: "Strategy",
    services: [
      "Brand Strategy",
      "Market Positioning",
      "Audience Research",
      "Competitive Analysis",
    ],
    image: "/assets/images/cap-strategy.jpg", 
  },
  {
    id: "creative",
    title: "Creative",
    services: [
      "Campaign Concepts",
      "Brand Identity Systems",
      "Art Direction",
      "Visual Storytelling",
    ],
    image: "/assets/images/cap-creative.jpg",
  },
  {
    id: "content",
    title: "Content",
    services: [
      "Social Media Content",
      "Video Production",
      "Photography Direction",
      "Copywriting",
    ],
    image: "/assets/images/cap-content.jpg",
  },
  {
    id: "digital",
    title: "Digital",
    services: [
      "Websites & Landing Pages",
      "Digital Experiences",
      "UI/UX Design",
      "Motion & Interaction",
    ],
    image: "/assets/images/cap-digital.jpg",
  },
];

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24" id="capabilities">
      <div className="px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto mb-16 flex justify-between items-end">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">Capabilities</h2>
        <Link href="#contact" className="link-arrow text-sm uppercase tracking-widest hidden sm:inline-flex">
          Work with us
        </Link>
      </div>

      <div className="w-full flex flex-col border-b border-[var(--color-border)]">
        {capabilities.map((cap, index) => {
          const isActive = activeIndex === index;
          const isDimmed = activeIndex !== null && !isActive;

          return (
            <motion.div
              key={cap.id}
              className="relative w-full border-t border-[var(--color-border)] overflow-hidden cursor-pointer group"
              onMouseEnter={() => {
                if (typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                  setActiveIndex(index);
                }
              }}
              onMouseLeave={() => {
                if (typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                  setActiveIndex(null);
                }
              }}
              onClick={() => {
                if (typeof window !== "undefined" && window.matchMedia("(hover: none), (pointer: coarse)").matches) {
                  setActiveIndex(activeIndex === index ? null : index);
                }
              }}
              initial={false}
              animate={{ 
                height: isActive ? "60vh" : "15vh",
                minHeight: isActive ? "400px" : "120px" 
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Cinematic Background Image */}
              <div className="absolute inset-0 z-0 w-full h-full">
                <Image 
                  src={cap.image} 
                  alt={cap.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="100vw"
                />
                {/* Gradient overlay: Darker on the right where the sub-services text sits */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-black/80" />
              </div>
              
              {/* Dim overlay when NOT active to make the active one pop more */}
              <motion.div 
                className="absolute inset-0 z-10 bg-black"
                initial={false}
                animate={{ opacity: isActive ? 0 : 0.4 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />

              {/* Content Container */}
              <div className="relative z-20 w-full h-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between py-6">
                
                <div className="flex items-center gap-6 h-full">
                  <motion.span 
                    className="text-sm font-mono mt-2"
                    initial={false}
                    animate={{ 
                      color: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)",
                      opacity: isDimmed ? 0.3 : 1
                    }}
                  >
                    0{index + 1}
                  </motion.span>
                  <motion.h3 
                    layout="position"
                    className="text-[clamp(3rem,8vw,6rem)] font-display leading-none m-0 drop-shadow-lg"
                    initial={false}
                    animate={{ 
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.7)",
                      opacity: isDimmed ? 0.3 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {cap.title}
                  </motion.h3>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                      className="mt-6 md:mt-0"
                    >
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 text-lg text-white font-medium drop-shadow-md">
                        {cap.services.map((service, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                            className="flex items-center gap-3 whitespace-nowrap"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                            {service}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
                
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
