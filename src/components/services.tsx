import { Code2, Globe, Layers, Plug, Server } from "lucide-react";
import type { ComponentType } from "react";
import { siteConfig } from "@/lib/site-config";

const icons: ComponentType<{ className?: string }>[] = [Globe, Server, Layers, Plug, Code2];

export function Services() {
  return (
    <section id="servicos" className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Services</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {siteConfig.services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-medium">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
