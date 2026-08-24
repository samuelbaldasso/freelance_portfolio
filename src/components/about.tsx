import { siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">{siteConfig.about.heading}</h2>

      <div className="mt-8 grid gap-10 sm:grid-cols-[1fr_auto]">
        <div className="max-w-2xl space-y-4 text-muted-foreground">
          {siteConfig.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-card p-6 sm:w-64">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {siteConfig.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
