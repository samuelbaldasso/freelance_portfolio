import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow" aria-hidden />
      <div className="bg-grid absolute inset-x-0 top-0 -z-10 h-[28rem]" aria-hidden />

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            {siteConfig.availableForWork && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-success" />
                </span>
                Available for new projects
              </span>
            )}

            <p className="mt-4 text-sm font-medium text-accent">{siteConfig.role}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">{siteConfig.tagline}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#contato"
                className="group flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Start a project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#projetos"
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                View projects
              </Link>
            </div>
          </div>

          <div className="relative shrink-0">
            <div
              className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-accent to-accent/30 opacity-60 blur-lg"
              aria-hidden
            />
            <Image
              src={siteConfig.avatarUrl}
              alt={siteConfig.name}
              width={160}
              height={160}
              priority
              className="relative size-32 rounded-full border-2 border-background object-cover sm:size-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
