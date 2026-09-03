import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ClientLogos from "@/components/ClientLogos";
import Capabilities from "@/components/Capabilities";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen [@media(pointer:fine)]:cursor-none">
      <Preloader />
      <CustomCursor />
      <Header />
      <Hero />
      <ClientLogos />

      {/* 03. SELECTED WORK */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto" id="work">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-16">Selected Work</h2>
        </FadeIn>
        
        <div className="flex flex-col gap-12 md:gap-24">
          {/* Project 01 (Full width) */}
          <ProjectCard 
            title="Maison Noire"
            category="Fashion & Lifestyle"
            service="Brand Identity"
            image="/assets/images/project-1.jpg"
            href="/work/maison-noire"
            aspectRatio="21/9"
            priority={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Project 02 */}
            <ProjectCard 
              title="Terra"
              category="Food & Beverage"
              service="Brand Launch"
              image="/assets/images/project-2.jpg"
              href="#"
              aspectRatio="1/1"
            />

            {/* Project 03 */}
            <div className="md:mt-32">
              <ProjectCard 
                title="Onward"
                category="Fintech"
                service="Digital Experience"
                image="/assets/images/project-3.jpg"
                href="#"
                aspectRatio="4/5"
              />
            </div>
          </div>

          {/* Project 04 (Full width) */}
          <ProjectCard 
            title="CultureHouse"
            category="Arts & Culture"
            service="Event Campaign"
            image="/assets/images/project-4.jpg"
            href="#"
            aspectRatio="16/9"
          />
        </div>
      </section>

      {/* 04. MANIFESTO */}
      <section className="py-20 md:py-32 bg-[var(--color-bg-dark)] text-[var(--color-text-light)] flex items-center min-h-[70vh]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 text-center w-full">
          <FadeIn>
            <h2 className="text-[clamp(2rem,5vw,4rem)] max-w-4xl mx-auto leading-[1.2]">
              <span className="block mb-4 text-white/70">Every brand is fighting for</span>
              <span className="block mb-4 text-white/70">the same thing — attention.</span>
              
              <span className="block mb-4 text-[var(--color-accent)]">Most fight louder.</span>
              <span className="block mb-8 text-[var(--color-accent)]">We fight sharper.</span>
              
              <span className="block mb-4 text-white">We don't add noise.</span>
              <span className="block text-white">We create signal.</span>
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* 05. CAPABILITIES */}
      <Capabilities />

      {/* 06. FEATURED CASE STUDY */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] mb-4">Featured Case Study</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-16">Maison Noire</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 flex flex-col gap-8">
            <FadeIn delay={0.1}>
              <div className="border-t border-[var(--color-border)] pt-6">
                <h4 className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] mb-2">The Challenge</h4>
                <p className="text-lg">A heritage fashion house with loyal but aging customers needed to attract a younger audience without losing its identity.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="border-t border-[var(--color-border)] pt-6">
                <h4 className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] mb-2">The Strategy</h4>
                <p className="text-lg">Preserve the core. Reimagine the surface. Create a visual identity that respects the past but speaks the present.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="border-t border-[var(--color-border)] pt-6">
                <h4 className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] mb-2">The Creative</h4>
                <p className="text-lg">New visual identity, seasonal campaign, digital-first art direction, and a cohesive social content system.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="pt-4">
                <Link href="/work/maison-noire" className="btn-secondary">Read Full Case Study</Link>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.2} fullWidth>
            <div className="order-1 lg:order-2 relative aspect-[4/3] w-full bg-gray-200">
              <Image src="/assets/images/project-1-detail.jpg" alt="Maison Noire Details" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 07. ABOUT */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto" id="about">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-16">About Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col justify-center gap-8 text-xl md:text-2xl leading-relaxed">
            <p>SIGNAL. is a creative agency built on a simple belief: brands that communicate with clarity, creativity, and intention don't need to shout.</p>
            <p>We work with founders, marketing teams, and brand leaders who understand that great creative isn't a luxury — it's a competitive advantage.</p>
            <p>From strategy to execution, we build brands that people notice, remember, and choose.</p>
            
            <div className="mt-8 pt-8 border-t border-[var(--color-border)] text-sm uppercase tracking-widest text-[var(--color-text-secondary)]">
              Founded 2021 · Based in New York · Remote-first
            </div>
          </div>
          
          <div className="relative aspect-[4/5] w-full bg-gray-200">
            <Image src="/assets/images/about.jpg" alt="SIGNAL Team" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* 08. CONTACT & FOOTER */}
      <footer className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)]" id="contact">
        <div className="py-20 md:py-32 flex flex-col items-center text-center px-4 w-full">
          <FadeIn>
            <h2 className="text-[clamp(3rem,8vw,5rem)] max-w-4xl mx-auto mb-4 leading-tight">
              Have a brand that deserves better?
            </h2>
            <p className="text-white/60 text-lg mb-12">Leave your details below and we'll get back to you within 24 hours.</p>
          </FadeIn>
          
          <FadeIn delay={0.2} fullWidth>
            <ContactForm />
          </FadeIn>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-white/10 pt-12 gap-8 md:gap-0">
            <div className="font-body font-semibold text-xl tracking-widest uppercase">
              SIGNAL.
            </div>
            
            <nav className="flex flex-wrap gap-8 text-sm uppercase tracking-widest">
              <Link href="#work" className="hover:text-[var(--color-accent)] transition-colors">Work</Link>
              <Link href="#capabilities" className="hover:text-[var(--color-accent)] transition-colors">Capabilities</Link>
              <Link href="#about" className="hover:text-[var(--color-accent)] transition-colors">About</Link>
              <Link href="#contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between text-xs text-white/50 mt-16 gap-4 md:gap-0">
            <div>&copy; 2026 SIGNAL. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
