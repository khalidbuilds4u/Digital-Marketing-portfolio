"use client";

import { motion } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 
        This div creates a "curtain" wipe effect. 
        Because it's in template.tsx, it remounts on every route change.
        When a user clicks a link, the new page instantly renders this curtain at scaleY: 1 (fully covering the screen),
        and then it smoothly scales down to 0, revealing the new page.
      */}
      <motion.div
        className="fixed inset-0 w-full h-[100svh] bg-[var(--color-bg-dark)] z-[9999] origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      
      {/* 
        We also apply a subtle fade/slide up to the actual page content 
        so it doesn't just sit static while the curtain reveals it.
      */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
