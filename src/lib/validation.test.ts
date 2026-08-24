import { describe, expect, it } from "vitest";
import { contactFormSchema } from "./validation";

describe("contactFormSchema", () => {
  it("aceita dados válidos", () => {
    const result = contactFormSchema.safeParse({
      name: "Ana Silva",
      email: "ana@example.com",
      message: "Quero conversar sobre um projeto de e-commerce.",
    });

    expect(result.success).toBe(true);
  });

  it("rejeita nome muito curto", () => {
    const result = contactFormSchema.safeParse({
      name: "A",
      email: "ana@example.com",
      message: "Quero conversar sobre um projeto de e-commerce.",
    });

    expect(result.success).toBe(false);
  });

  it("rejeita e-mail inválido", () => {
    const result = contactFormSchema.safeParse({
      name: "Ana Silva",
      email: "não-é-email",
      message: "Quero conversar sobre um projeto de e-commerce.",
    });

    expect(result.success).toBe(false);
  });

  it("rejeita mensagem muito curta", () => {
    const result = contactFormSchema.safeParse({
      name: "Ana Silva",
      email: "ana@example.com",
      message: "oi",
    });

    expect(result.success).toBe(false);
  });

  it("remove espaços em branco nas bordas", () => {
    const result = contactFormSchema.safeParse({
      name: "  Ana Silva  ",
      email: "  ana@example.com  ",
      message: "  Quero conversar sobre um projeto de e-commerce.  ",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("Ana Silva");
    }
  });
});
