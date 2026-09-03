"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "./FadeIn";

const posts = [
  { id: 1, image: "/assets/images/project-1.jpg", likes: "12.4k", comments: "342", type: "video" },
  { id: 2, image: "/assets/images/project-2.jpg", likes: "8.9k", comments: "156", type: "carousel" },
  { id: 3, image: "/assets/images/project-3.jpg", likes: "45.2k", comments: "1.2k", type: "image" },
  { id: 4, image: "/assets/images/cap-strategy.jpg", likes: "5.6k", comments: "89", type: "image" },
  { id: 5, image: "/assets/images/cap-creative.jpg", likes: "18.1k", comments: "420", type: "video" },
  { id: 6, image: "/assets/images/cap-digital.jpg", likes: "11.2k", comments: "215", type: "image" },
];

export default function SocialFeed() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto border-t border-[var(--color-border)]">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-display leading-none mb-4">We Live on the Feed</h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-xl font-light">
              We don't just create pretty pictures. We engineer content that stops the scroll, sparks conversation, and drives culture.
            </p>
          </div>
          <a href="#" className="btn-primary shrink-0">
            Follow @SignalAgency
          </a>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
        {posts.map((post, index) => (
          <FadeIn key={post.id} delay={index * 0.1}>
            <div className="relative aspect-square group overflow-hidden bg-[var(--color-bg-dark)] cursor-pointer">
              <Image 
                src={post.image} 
                alt={`Social Post ${post.id}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Type Icon (Video/Carousel Indicator) */}
              <div className="absolute top-4 right-4 z-10 opacity-80 mix-blend-difference text-white drop-shadow-md">
                {post.type === "video" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z" />
                    <rect x="3" y="6" width="12" height="12" rx="2" />
                  </svg>
                )}
                {post.type === "carousel" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="14" height="14" rx="2" />
                    <path d="M7 21h14a2 2 0 002-2V7" />
                  </svg>
                )}
              </div>

              {/* Hover Overlay with Metrics */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 md:gap-8 text-white z-20">
                <div className="flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="font-medium text-base md:text-lg">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"/>
                  </svg>
                  <span className="font-medium text-base md:text-lg">{post.comments}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
