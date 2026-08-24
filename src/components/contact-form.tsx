"use client";

import { useState, type FormEvent } from "react";
import { contactFormSchema } from "@/lib/validation";

type SubmitStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>({ state: "idle" });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFieldErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const parsed = contactFormSchema.safeParse(values);

    if (!parsed.success) {
      setFieldErrors(parsed.error.flatten().fieldErrors);
      return;
    }

    setStatus({ state: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? "Não foi possível enviar sua mensagem.");
      }

      setStatus({ state: "success" });
      form.reset();
    } catch (error) {
      setStatus({
        state: "error",
        message: error instanceof Error ? error.message : "Não foi possível enviar sua mensagem.",
      });
    }
  }

  const isSubmitting = status.state === "submitting";

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="mt-1.5 w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        {fieldErrors.name && <p className="mt-1.5 text-sm text-red-500">{fieldErrors.name[0]}</p>}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="mt-1.5 w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        {fieldErrors.email && <p className="mt-1.5 text-sm text-red-500">{fieldErrors.email[0]}</p>}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-1.5 w-full resize-none rounded-md border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        {fieldErrors.message && (
          <p className="mt-1.5 text-sm text-red-500">{fieldErrors.message[0]}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </button>

      {status.state === "success" && (
        <p className="text-sm text-emerald-600 dark:text-emerald-400">
          Mensagem enviada com sucesso. Retorno em breve.
        </p>
      )}
      {status.state === "error" && <p className="text-sm text-red-500">{status.message}</p>}
    </form>
  );
}
