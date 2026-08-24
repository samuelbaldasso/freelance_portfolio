import { NextResponse } from "next/server";
import { EmailConfigError, sendContactEmail } from "@/lib/email";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo da requisição inválido." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof EmailConfigError) {
      console.error("Contato indisponível:", error.message);
      return NextResponse.json(
        { error: "Envio de e-mail indisponível no momento." },
        { status: 503 },
      );
    }

    console.error("Falha ao enviar e-mail de contato:", error);
    return NextResponse.json({ error: "Não foi possível enviar sua mensagem." }, { status: 500 });
  }
}
