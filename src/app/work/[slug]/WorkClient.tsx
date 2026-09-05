"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function WorkClient({ data }: { data: any }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] [@media(pointer:fine)]:cursor-none" ref={containerRef}>
      <CustomCursor />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="flex flex-col gap-8">
            <h1 className="text-[clamp(4rem,10vw,8rem)] font-display leading-[0.9] tracking-tight max-w-5xl">{data.title}</h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[var(--color-border)]">
              <div>
                <div className="text-xs uppercase tracking-widest text-[var(--color-text-secondary)] mb-2">Client</div>
                <div className="font-medium">{data.client}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[var(--color-text-secondary)] mb-2">Industry</div>
                <div className="font-medium">{data.category}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[var(--color-text-secondary)] mb-2">Timeline</div>
                <div className="font-medium">{data.timeline}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[var(--color-text-secondary)] mb-2">Services</div>
                <div className="font-medium">Identity, Digital, Campaign</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Hero Image with Parallax */}
      <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-[var(--color-bg-dark)]">
        <motion.div style={{ y: yHero }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <Image 
            src={data.heroImage} 
            alt={data.title} 
            fill 
            className="object-cover opacity-90"
            priority
            sizes="100vw"
          />
        </motion.div>
      </div>

      {/* Content & Metrics */}
      <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-8 flex flex-col gap-20">
            <FadeIn>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] mb-8">The Challenge</h3>
                <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.3] text-[var(--color-text-primary)]">{data.challenge}</p>
              </div>
            </FadeIn>
            <FadeIn>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] mb-8">The Solution</h3>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-[var(--color-text-secondary)]">{data.solution}</p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 flex flex-col gap-12 border-t lg:border-t-0 lg:border-l border-[var(--color-border)] pt-12 lg:pt-0 lg:pl-12">
              <FadeIn>
                <h3 className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] mb-10">The Impact</h3>
                <div className="flex flex-col gap-10">
                  {data.metrics?.map((metric: any, i: number) => (
                    <div key={i}>
                      <div className="text-5xl md:text-6xl font-display mb-3 text-[var(--color-accent)]">{metric.value}</div>
                      <div className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)]">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </section>

      {/* Asymmetric Gallery */}
      <section className="pb-32 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto flex flex-col gap-8 md:gap-16">
        {data.gallery && data.gallery[0] && (
          <FadeIn fullWidth>
            <div className="relative w-full aspect-video bg-gray-200">
              <Image src={data.gallery[0]} alt="Gallery 1" fill className="object-cover" sizes="100vw" />
            </div>
          </FadeIn>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {data.gallery && data.gallery[1] && (
            <FadeIn fullWidth>
              <div className="relative w-full aspect-[4/5] bg-gray-200">
                <Image src={data.gallery[1]} alt="Gallery 2" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </FadeIn>
          )}
          {data.gallery && data.gallery[2] && (
            <FadeIn fullWidth>
              <div className="relative w-full aspect-square md:mt-32 bg-gray-200">
                <Image src={data.gallery[2]} alt="Gallery 3" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Next Project Footer */}
      {data.nextProject && (
        <section className="relative h-[60vh] md:h-[80vh] bg-[var(--color-bg-dark)] flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 w-full h-full opacity-40 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-60">
            <Image src={data.nextProject.image} alt="Next Project" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
          
          <div className="relative z-10 text-center pointer-events-none">
            <FadeIn>
              <div className="text-white/80 text-sm uppercase tracking-widest mb-6 font-medium">Next Project</div>
              <Link 
                href={`/work/${data.nextProject.slug}`} 
                className="text-[clamp(4rem,10vw,8rem)] text-white font-display pointer-events-auto mix-blend-overlay hover:mix-blend-normal transition-all duration-500"
                data-cursor="view"
              >
                {data.nextProject.title}
              </Link>
            </FadeIn>
          </div>
        </section>
      )}
    </main>
  );
}
