import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import InsightsClient from "./InsightsClient";
import { getInsights } from "@/lib/mdx";
import FadeIn from "@/components/FadeIn";

export default async function InsightsPage() {
  const articles = getInsights();

  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] [@media(pointer:fine)]:cursor-none">
      <CustomCursor />
      <Header />
      
      {/* Header Section */}
      <section className="pt-40 pb-20 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto border-b border-[var(--color-border)]">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-display leading-[0.9] tracking-tight">Insights</h1>
            <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-light max-w-md">
              Thoughts on strategy, creative, and digital performance.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Article List */}
      <InsightsClient articles={articles} />
    </main>
  );
}
