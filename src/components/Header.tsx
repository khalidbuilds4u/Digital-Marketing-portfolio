"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border)] text-[var(--color-text-primary)]"
          : "py-8 bg-transparent text-[var(--color-text-light)]"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <Link
          href="/"
          className="font-body font-semibold text-xl tracking-widest uppercase"
        >
          SIGNAL.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {["Work", "Capabilities", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-current origin-right scale-x-0 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden font-medium z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] flex flex-col p-8 gap-6 md:hidden shadow-xl"
            >
              {["Work", "Capabilities", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-2xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
