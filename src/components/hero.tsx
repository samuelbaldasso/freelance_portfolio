import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <div className="flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-muted-foreground">{siteConfig.role}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">{siteConfig.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#contato"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Iniciar um projeto
            </Link>
            <Link
              href="#projetos"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Ver projetos
            </Link>
          </div>
        </div>

        <Image
          src={siteConfig.avatarUrl}
          alt={siteConfig.name}
          width={160}
          height={160}
          priority
          className="size-32 shrink-0 rounded-full border border-border object-cover sm:size-40"
        />
      </div>
    </section>
  );
}
