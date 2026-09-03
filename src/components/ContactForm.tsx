"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BookingModal from "./BookingModal";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 text-left">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/60">Name</label>
            <input 
              type="text" 
              id="name" 
              required
              className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-none"
              placeholder="Jane Doe"
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/60">Email</label>
            <input 
              type="email" 
              id="email" 
              required
              className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-none"
              placeholder="jane@example.com"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/60">Tell us about your project</label>
          <textarea 
            id="message" 
            required
            rows={4}
            className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none rounded-none"
            placeholder="What are you building?"
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-10 py-5 font-body font-medium text-white bg-[var(--color-accent)] rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:scale-105 min-w-[200px]"
          >
            Book a Discovery Call
          </button>
          
          <span className="text-white/40 text-sm uppercase tracking-widest font-medium">Or</span>

          <button 
            type="submit" 
            disabled={status !== "idle"}
            className="inline-flex items-center justify-center px-10 py-5 font-body font-medium text-white bg-transparent border border-white/20 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100 min-w-[200px]"
          >
            {status === "idle" && "Send Message"}
            {status === "submitting" && "Sending..."}
            {status === "success" && "Message Sent!"}
          </button>
        </div>
      </form>

      {/* Social Footer */}
      <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white/40 text-sm font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} SIGNAL. All rights reserved.
        </div>
        <div className="flex gap-8">
          {["Instagram", "LinkedIn", "X", "TikTok", "Behance"].map((social) => (
            <a 
              key={social}
              href="#"
              className="text-white/60 hover:text-[var(--color-accent)] text-sm uppercase tracking-widest transition-colors"
            >
              {social}
            </a>
          ))}
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
