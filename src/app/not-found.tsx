import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] [@media(pointer:fine)]:cursor-none flex flex-col">
      <CustomCursor />
      <Header />

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[clamp(8rem,20vw,16rem)] font-display leading-none tracking-tight text-[var(--color-border)] select-none">
            404
          </div>

          <h1 className="text-3xl md:text-5xl font-display mt-4 mb-6">
            This page doesn't exist.
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] font-light mb-12 max-w-md mx-auto">
            Looks like you've wandered off the grid. Let's get you back to somewhere useful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/#contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
