import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { getInsightData, getInsights } from "@/lib/mdx";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const articles = getInsights();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getInsightData(params.slug);

  if (!article) {
    notFound();
  }

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
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
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
