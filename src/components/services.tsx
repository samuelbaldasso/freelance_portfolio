import { siteConfig } from "@/lib/site-config";

export function Services() {
  return (
    <section id="servicos" className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Serviços</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {siteConfig.services.map((service) => (
            <div key={service.title} className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-medium">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
