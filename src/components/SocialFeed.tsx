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
    <section className="py-20 md:py-32 max-w-[935px] mx-auto px-0 sm:px-4">
      <FadeIn>
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12 px-4 sm:px-0">
          {/* Profile Picture */}
          <div className="w-24 h-24 sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden shrink-0 border border-[var(--color-border)] relative bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] p-[3px]">
            <div className="w-full h-full rounded-full border-2 border-white overflow-hidden relative bg-[var(--color-bg-primary)]">
               <div className="absolute inset-0 flex items-center justify-center font-display text-4xl text-[var(--color-bg-dark)]">S.</div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 w-full sm:w-auto flex flex-col gap-5 sm:mt-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-[var(--color-text-primary)]">SignalAgency</h2>
              <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-5 py-1.5 rounded-lg font-medium text-sm transition-colors hover:bg-blue-600 w-full sm:w-auto">Follow</button>
                <button className="bg-gray-200 text-black px-5 py-1.5 rounded-lg font-medium text-sm transition-colors hover:bg-gray-300 w-full sm:w-auto">Message</button>
              </div>
            </div>

            {/* Metrics */}
            <div className="flex gap-8 border-y sm:border-none border-gray-200 py-3 sm:py-0 justify-center sm:justify-start w-full text-[var(--color-text-primary)]">
              <div className="text-center sm:text-left text-sm md:text-base"><span className="font-semibold">428</span> posts</div>
              <div className="text-center sm:text-left text-sm md:text-base"><span className="font-semibold">124K</span> followers</div>
              <div className="text-center sm:text-left text-sm md:text-base"><span className="font-semibold">32</span> following</div>
            </div>

            {/* Bio */}
            <div className="text-sm text-[var(--color-text-primary)]">
              <div className="font-semibold mb-1">SIGNAL.</div>
              <div className="text-gray-600">Digital marketing that refuses to be ignored.</div>
              <div className="text-gray-600 mb-1">Strategy • Creative • Content</div>
              <a href="#" className="text-blue-900 font-medium hover:underline">linktr.ee/signalagency</a>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center border-t border-gray-200 mb-1">
          <div className="flex gap-12 sm:gap-16">
            <div className="flex items-center gap-2 py-4 border-t-[1px] border-black -mt-[1px] cursor-pointer">
              <svg aria-label="Posts" fill="currentColor" height="12" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
              <span className="text-xs font-semibold tracking-widest text-black">POSTS</span>
            </div>
            <div className="flex items-center gap-2 py-4 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
              <svg aria-label="Reels" fill="currentColor" height="12" viewBox="0 0 24 24" width="12"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.935" x2="10.011" y1="5.719" y2="2.688"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.977" x2="15.053" y1="5.719" y2="2.688"></line><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="17.002" y2="17.002"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.935" x2="10.011" y1="21.312" y2="18.281"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.977" x2="15.053" y1="21.312" y2="18.281"></line><rect fill="none" height="18" rx="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect></svg>
              <span className="text-xs font-semibold tracking-widest">REELS</span>
            </div>
          </div>
        </div>

        {/* Grid - Tight spacing like IG */}
        <div className="grid grid-cols-3 gap-1">
          {posts.map((post, index) => (
            <motion.div 
              key={post.id} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-square group overflow-hidden bg-gray-200 cursor-pointer"
            >
              <Image 
                src={post.image} 
                alt={`Social Post ${post.id}`} 
                fill 
                className="object-cover"
              />
              
              {/* Type Icon (Video/Carousel Indicator) */}
              <div className="absolute top-2 right-2 z-10 text-white drop-shadow-md opacity-90">
                {post.type === "video" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.888 2.502l14.26 9.176a.375.375 0 010 .644L5.888 21.498A.375.375 0 015.33 21.176V2.824a.375.375 0 01.558-.322z"/>
                  </svg>
                )}
                {post.type === "carousel" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                  </svg>
                )}
              </div>

              {/* Hover Overlay with Metrics */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-4 sm:gap-6 text-white z-20">
                <div className="flex items-center gap-1.5 font-semibold">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"/>
                  </svg>
                  <span>{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
