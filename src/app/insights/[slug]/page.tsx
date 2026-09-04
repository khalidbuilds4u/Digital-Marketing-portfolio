"use client";

import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { useParams } from "next/navigation";

// Placeholder data for insights
const articles = {
  "why-most-brand-redesigns-fail": {
    title: "Why Most Brand Redesigns Fail Before They Start",
    date: "Sep 04, 2026",
    category: "Strategy",
    author: "Jane Doe",
    content: `
      <p>Most brand redesigns are doomed from the brief. Companies often approach a rebrand as a cosmetic exercise—a new logo, a fresh color palette, and maybe a slightly updated typographic system.</p>
      
      <p>But a brand is not just what it looks like. It is how it behaves, how it speaks, and fundamentally, what it stands for in the mind of the consumer. When you only change the surface without addressing the core strategy, you aren't rebranding. You are just repainting a house with a crumbling foundation.</p>
      
      <h3>The Strategy Gap</h3>
      <p>The most common reason for failure is the disconnect between business objectives and creative execution. A founder might say, "We want to look more premium," but what they actually need is a strategy to justify a 20% price increase.</p>
      
      <p>Before designing a single pixel, an agency must ask:</p>
      <ul>
        <li>Who are we actually trying to attract that we aren't currently?</li>
        <li>What is the cost of staying exactly the same?</li>
        <li>Does the product experience match the new brand promise?</li>
      </ul>
      
      <p>If you don't have clear, mathematically backed answers to these questions, put the design tools away. You need to do the hard strategic work first.</p>
    `
  }
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles[slug as keyof typeof articles] || articles["why-most-brand-redesigns-fail"];

  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] [@media(pointer:fine)]:cursor-none">
      <CustomCursor />
      <Header />
      
      <article className="pt-40 pb-32 px-4 md:px-8 lg:px-16 max-w-[1000px] mx-auto">
        {/* Back Link */}
        <FadeIn>
          <Link href="/insights" className="inline-flex items-center gap-4 text-sm uppercase tracking-widest hover:text-[var(--color-accent)] transition-colors mb-16">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Insights
          </Link>
        </FadeIn>

        {/* Article Header */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-8 mb-16 pb-16 border-b border-[var(--color-border)]">
            <div className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-widest text-[var(--color-text-secondary)]">
              <span>{article.category}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-secondary)]/30" />
              <span>{article.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-secondary)]/30" />
              <span>By {article.author}</span>
            </div>
            
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-display leading-tight">{article.title}</h1>
          </div>
        </FadeIn>

        {/* Article Content */}
        <FadeIn delay={0.2}>
          <div 
            className="prose prose-lg md:prose-xl max-w-none text-[var(--color-text-primary)] font-light leading-relaxed
                       prose-headings:font-display prose-headings:font-normal prose-headings:mt-16 prose-headings:mb-8
                       prose-p:mb-8 prose-ul:mb-8 prose-li:mb-4
                       prose-a:text-[var(--color-accent)] hover:prose-a:text-[var(--color-text-primary)]"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </FadeIn>

        {/* Article Footer */}
        <FadeIn delay={0.3}>
          <div className="mt-32 pt-16 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-xl md:text-2xl font-display">Ready to build something that lasts?</div>
            <Link href="/#contact" className="btn-primary shrink-0">
              Start a Conversation
            </Link>
          </div>
        </FadeIn>
      </article>
    </main>
  );
}
