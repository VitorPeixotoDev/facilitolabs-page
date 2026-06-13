"use client";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function FinalCtaSection() {
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
            <span className="mb-4 inline-block font-label-sm text-label-sm uppercase tracking-widest text-primary">
              ATS Gratuito + Labs Analytics
            </span>
            <h2 className="mb-6 font-display-lg text-[2rem] leading-tight md:text-display-lg">
              Chega de gastar milhares de reais com sistemas fragmentados.{" "}
              <span className="text-primary">Proteja sua operação.</span>
            </h2>
            <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
              Plataforma integrada para tomadores de decisão de RH e Diretoria.
              Zero custo no ATS, inteligência analítica no Labs.
            </p>
            <Button
              variant="inverse"
              className="rounded-full px-10 py-5 font-headline-lg text-headline-lg"
            >
              Falar com um Especialista
            </Button>
          </div>

          <form
            className="glass-card rounded-2xl p-6 md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="mb-6 font-headline-lg text-headline-lg">
              Solicite uma demonstração
            </h3>
            <div className="space-y-4">
              <label className="block">
                <span className="mb-1.5 block font-label-md text-label-md text-on-surface-variant">
                  Nome completo
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-white/10 bg-surface-container px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary/50 focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-label-md text-label-md text-on-surface-variant">
                  E-mail corporativo
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="voce@empresa.com.br"
                  className="w-full rounded-lg border border-white/10 bg-surface-container px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary/50 focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-label-md text-label-md text-on-surface-variant">
                  Empresa
                </span>
                <input
                  type="text"
                  name="company"
                  placeholder="Nome da empresa"
                  className="w-full rounded-lg border border-white/10 bg-surface-container px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary/50 focus:outline-none"
                />
              </label>
              <Button fullWidth className="mt-2">
                Falar com um Especialista
              </Button>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
              <Icon name="lock" className="text-sm text-primary" />
              Seus dados estão protegidos. Sem spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
