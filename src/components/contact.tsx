import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contato" className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">{siteConfig.contact.heading}</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">{siteConfig.contact.description}</p>
        <ContactForm />
      </div>
    </section>
  );
}
