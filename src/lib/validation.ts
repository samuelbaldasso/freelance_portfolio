import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(120),
  email: z.string().trim().email("Informe um e-mail válido."),
  message: z.string().trim().min(10, "Conte um pouco mais sobre o projeto.").max(5000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
