"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

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

        <div className="mt-4 flex flex-col items-center">
          <button 
            type="submit" 
            disabled={status !== "idle"}
            className="inline-flex items-center justify-center px-12 py-5 font-body font-medium text-[var(--color-bg-dark)] bg-white rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100 min-w-[200px]"
          >
            {status === "idle" && "Send Message"}
            {status === "submitting" && "Sending..."}
            {status === "success" && "Message Sent!"}
          </button>
        </div>
      </form>
    </div>
  );
}
