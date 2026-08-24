import { siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">{siteConfig.about.heading}</h2>
      <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground">
        {siteConfig.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
