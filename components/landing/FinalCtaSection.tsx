"use client";

import Image from "next/image";
import { useState } from "react";
import { AtsGratuitoLink } from "@/components/ui/AtsGratuitoLink";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import {
  WHATSAPP_CONTACT_NAME,
  buildWhatsAppUrl,
  contactFormSchema,
  type ContactFormData,
  type ContactFormField,
} from "@/lib/contact-schema";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  company: "",
};

const INPUT_CLASS =
  "w-full rounded-lg border bg-surface-container px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none";

function fieldClass(hasError: boolean) {
  return `${INPUT_CLASS} ${
    hasError
      ? "border-error/60 focus:border-error"
      : "border-white/10 focus:border-primary/50"
  }`;
}

export function FinalCtaSection() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<ContactFormField, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: ContactFormField, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    const result = contactFormSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<ContactFormField, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as ContactFormField;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    window.open(buildWhatsAppUrl(result.data), "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden py-24 scroll-mt-24 md:py-32"
    >
      <div className="absolute top-1/2 left-1/4 h-64 w-64 -translate-y-1/2 bg-primary/20 blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 h-64 w-64 -translate-y-1/2 bg-surface-tint/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <AtsGratuitoLink variant="badge">ATS Gratuito</AtsGratuitoLink>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                + Labs Analytics
              </span>
            </div>
            <h2 className="mb-6 font-display-lg text-[2rem] leading-tight md:text-display-lg">
              Teste de clima organizacional e conformidade NR-1 sem sistemas
              fragmentados.{" "}
              <span className="text-primary">Proteja sua operação.</span>
            </h2>
            <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
              Plataforma integrada para RH e Diretoria de qualquer empresa.
              Pesquisa de clima organizacional, adequação NR-1 e{" "}
              <AtsGratuitoLink variant="inline">ATS gratuito</AtsGratuitoLink> —
              tudo em um único fluxo.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Fale diretamente com{" "}
              <strong className="text-on-surface">{WHATSAPP_CONTACT_NAME}</strong>{" "}
              no WhatsApp e agende sua demonstração em poucos minutos.
            </p>
          </div>

          <div className="glass-card overflow-hidden rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 bg-[#075E54] px-5 py-4">
              <Image
                src="/vitor.jpg"
                alt={WHATSAPP_CONTACT_NAME}
                width={44}
                height={44}
                className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-white/20"
              />
              <div className="min-w-0">
                <p className="truncate font-headline-lg text-headline-lg text-white">
                  {WHATSAPP_CONTACT_NAME}
                </p>
                <p className="flex items-center gap-1.5 font-label-sm text-label-sm text-white/80">
                  <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                  Facilitô! Labs · online agora
                </p>
              </div>
              <Icon name="more_vert" className="ml-auto text-white/70" />
            </div>

            <div className="bg-[#0b141a]/80 px-5 py-6">
              <div className="mb-6 max-w-[85%] rounded-2xl rounded-tl-sm bg-[#1f2c34] px-4 py-3">
                <p className="font-body-md text-body-md text-on-surface">
                  Olá! Sou o {WHATSAPP_CONTACT_NAME}, responsável pelo Facilitô!
                  Labs. Preencha seus dados abaixo para iniciarmos uma conversa
                  sobre demonstração e conformidade NR-1.
                </p>
                <p className="mt-2 text-right font-label-sm text-label-sm text-on-surface-variant">
                  agora
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <label className="block">
                  <span className="mb-1.5 block font-label-md text-label-md text-on-surface-variant">
                    Nome completo *
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Seu nome"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={fieldClass(Boolean(errors.name))}
                  />
                  {errors.name ? (
                    <p
                      id="name-error"
                      className="mt-1.5 font-label-sm text-label-sm text-error"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  ) : null}
                </label>

                <label className="block">
                  <span className="mb-1.5 block font-label-md text-label-md text-on-surface-variant">
                    E-mail corporativo *
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="voce@empresa.com.br"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={fieldClass(Boolean(errors.email))}
                  />
                  {errors.email ? (
                    <p
                      id="email-error"
                      className="mt-1.5 font-label-sm text-label-sm text-error"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  ) : null}
                </label>

                <label className="block">
                  <span className="mb-1.5 block font-label-md text-label-md text-on-surface-variant">
                    Empresa *
                  </span>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={(e) => updateField("company", e.target.value)}
                    placeholder="Nome da empresa"
                    autoComplete="organization"
                    aria-invalid={Boolean(errors.company)}
                    aria-describedby={
                      errors.company ? "company-error" : undefined
                    }
                    className={fieldClass(Boolean(errors.company))}
                  />
                  {errors.company ? (
                    <p
                      id="company-error"
                      className="mt-1.5 font-label-sm text-label-sm text-error"
                      role="alert"
                    >
                      {errors.company}
                    </p>
                  ) : null}
                </label>

                {submitted && Object.keys(errors).length > 0 ? (
                  <p
                    className="rounded-lg border border-error/30 bg-error/10 px-4 py-3 font-label-sm text-label-sm text-error"
                    role="alert"
                  >
                    Preencha todos os campos corretamente para iniciar a conversa.
                  </p>
                ) : null}

                <Button
                  type="submit"
                  fullWidth
                  className="mt-2 flex items-center justify-center gap-2 bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 hover:brightness-110"
                >
                  <Icon name="chat" className="text-xl" />
                  Iniciar conversa no WhatsApp
                </Button>
              </form>
            </div>

            <p className="flex items-center justify-center gap-2 border-t border-white/5 bg-surface-container/40 px-5 py-3 font-label-sm text-label-sm text-on-surface-variant">
              <Icon name="lock" className="text-sm text-primary" />
              Seus dados são usados apenas para iniciar o contato. Sem spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
