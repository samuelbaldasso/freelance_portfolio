import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

const links = [
  {
    label: "GitHub",
    value: `github.com/${siteConfig.githubUsername}`,
    href: siteConfig.social.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/samuel-baldasso",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
  },
];

export function Contact() {
  return (
    <section id="contato" className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">{siteConfig.contact.heading}</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">{siteConfig.contact.description}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-[1.4fr_1fr]">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex flex-col justify-between rounded-xl border border-border bg-gradient-to-br from-accent to-accent/80 p-6 text-accent-foreground transition-transform hover:scale-[1.01]"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-lg bg-white/15">
                <Mail className="size-5" />
              </span>
              <ArrowUpRight className="size-5 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="mt-6">
              <p className="text-sm opacity-80">Send a direct email</p>
              <p className="mt-1 text-lg font-medium break-all">{siteConfig.email}</p>
            </div>
          </a>

          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
              >
                <span className="flex items-center gap-3">
                  <link.icon className="size-4 text-muted-foreground" />
                  <span>
                    <span className="block text-sm font-medium">{link.label}</span>
                    <span className="block text-xs text-muted-foreground">{link.value}</span>
                  </span>
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          {siteConfig.location}
        </p>
      </div>
    </section>
  );
}
