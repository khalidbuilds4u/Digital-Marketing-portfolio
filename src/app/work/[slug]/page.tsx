"use client";

import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// Placeholder data for case studies
const caseStudies = {
  "maison-noire": {
    title: "Maison Noire",
    category: "Fashion & Lifestyle",
    heroImage: "/assets/images/project-1-detail.jpg",
    challenge: "A heritage fashion house with loyal but aging customers needed to attract a younger audience without losing its identity.",
    solution: "Preserve the core. Reimagine the surface. We created a visual identity that respects the past but speaks the present. This involved a new visual identity, seasonal campaign, digital-first art direction, and a cohesive social content system.",
    metrics: [
      { label: "Increase in Online Sales", value: "+45%" },
      { label: "New Customer Acquisition", value: "+120%" },
      { label: "Social Engagement", value: "3x" }
    ],
    gallery: [
      "/assets/images/project-1.jpg",
      "/assets/images/project-2.jpg"
    ]
  }
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = caseStudies[slug as keyof typeof caseStudies] || caseStudies["maison-noire"]; // Fallback

  return (
    <main className="min-h-screen [@media(pointer:fine)]:cursor-none">
      <CustomCursor />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="flex flex-col gap-4">
            <span className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)]">{data.category}</span>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-display leading-none">{data.title}</h1>
          </div>
        </FadeIn>
      </section>

      {/* Hero Image */}
      <FadeIn delay={0.2} fullWidth>
        <div className="relative w-full h-[60vh] md:h-[80vh] bg-[var(--color-bg-dark)]">
          <Image 
            src={data.heroImage} 
            alt={data.title} 
            fill 
            className="object-cover opacity-80"
            priority
          />
        </div>
      </FadeIn>

      {/* Content & Metrics */}
      <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 flex flex-col gap-16">
            <FadeIn>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] mb-6">The Challenge</h3>
                <p className="text-2xl md:text-3xl font-light leading-relaxed">{data.challenge}</p>
              </div>
            </FadeIn>
            <FadeIn>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] mb-6">The Solution</h3>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-[var(--color-text-secondary)]">{data.solution}</p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-12 border-t lg:border-t-0 lg:border-l border-[var(--color-border)] pt-12 lg:pt-0 lg:pl-12">
            <FadeIn>
              <h3 className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] mb-8">The Impact</h3>
              <div className="flex flex-col gap-8">
                {data.metrics.map((metric, i) => (
                  <div key={i}>
                    <div className="text-4xl md:text-5xl font-display mb-2">{metric.value}</div>
                    <div className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)]">{metric.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="pb-32 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto flex flex-col gap-8">
        {data.gallery.map((img, i) => (
          <FadeIn key={i} fullWidth>
            <div className="relative w-full aspect-video bg-[var(--color-bg-dark)]">
              <Image src={img} alt={`${data.title} Gallery Image ${i + 1}`} fill className="object-cover" />
            </div>
          </FadeIn>
        ))}
      </section>

      {/* Next Project / Footer Callout */}
      <section className="py-32 bg-[var(--color-bg-dark)] text-center px-4">
        <FadeIn>
          <div className="text-[var(--color-text-light)]/60 text-sm uppercase tracking-widest mb-6">Next Project</div>
          <Link href="/" className="text-[clamp(3rem,8vw,5rem)] text-white font-display hover:text-[var(--color-accent)] transition-colors">
            Terra Food & Bev
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
