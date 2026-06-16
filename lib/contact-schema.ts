import { z } from "zod";

export const WHATSAPP_NUMBER = "5524988221359";
export const WHATSAPP_CONTACT_NAME = "Vítor Peixoto";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo"),
  email: z
    .string()
    .trim()
    .min(1, "Informe seu e-mail corporativo")
    .email("Informe um e-mail corporativo válido"),
  company: z
    .string()
    .trim()
    .min(2, "Informe o nome da empresa"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type ContactFormField = keyof ContactFormData;

export function buildWhatsAppUrl(data: ContactFormData): string {
  const message = [
    `Olá, ${WHATSAPP_CONTACT_NAME}!`,
    "",
    `Meu nome é ${data.name}, trabalho na ${data.company} (${data.email}).`,
    "",
    "Gostaria de solicitar uma demonstração do Facilitô! Labs — testes de clima organizacional e conformidade NR-1.",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
