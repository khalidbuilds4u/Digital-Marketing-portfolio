"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BookingModal from "./BookingModal";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 3000);
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
              name="name"
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
              name="email"
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
            name="message"
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
            {status === "error" && "Error Sending"}
          </button>
        </div>
      </form>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
