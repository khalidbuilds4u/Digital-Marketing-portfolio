"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border)] text-[var(--color-text-primary)]"
          : `py-8 bg-transparent ${isHomePage ? "text-[var(--color-text-light)]" : "text-[var(--color-text-primary)]"}`
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
          {[
            { name: "Work", href: "/#work" },
            { name: "Capabilities", href: "/#capabilities" },
            { name: "About", href: "/#about" },
            { name: "Insights", href: "/insights" },
            { name: "Contact", href: "/#contact" }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium relative group"
            >
              {item.name}
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
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 w-full h-[100dvh] bg-[var(--color-bg-primary)] z-40 flex flex-col items-center justify-center p-8 gap-8 md:hidden"
            >
              {[
                { name: "Work", href: "/#work" },
                { name: "Capabilities", href: "/#capabilities" },
                { name: "About", href: "/#about" },
                { name: "Insights", href: "/insights" },
                { name: "Contact", href: "/#contact" }
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="font-display text-5xl md:text-6xl uppercase tracking-widest text-[var(--color-text-primary)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
