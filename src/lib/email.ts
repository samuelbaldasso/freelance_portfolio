import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";
import type { ContactFormValues } from "@/lib/validation";

export class EmailConfigError extends Error {}

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new EmailConfigError("RESEND_API_KEY não configurada.");
  }

  return new Resend(apiKey);
}

export async function sendContactEmail(values: ContactFormValues): Promise<void> {
  const resend = getResendClient();

  const fromAddress = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";
  const toAddress = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;

  const { error } = await resend.emails.send({
    from: `Portfólio <${fromAddress}>`,
    to: toAddress,
    replyTo: values.email,
    subject: `Novo contato de ${values.name}`,
    text: `Nome: ${values.name}\nE-mail: ${values.email}\n\nMensagem:\n${values.message}`,
  });

  if (error) {
    throw new Error(error.message);
  }
}
