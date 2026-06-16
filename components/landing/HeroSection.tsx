import { AtsGratuitoLink } from "@/components/ui/AtsGratuitoLink";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-margin-mobile pb-24 pt-24 text-center hero-gradient md:px-margin-desktop md:pb-32 lg:pb-40">
      <div className="z-10 max-w-5xl">
        <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-label-sm text-label-sm uppercase tracking-widest text-primary">
          Teste de Clima Organizacional + Conformidade NR-1
        </span>

        <h1 className="mb-6 font-display-lg text-[2.25rem] leading-tight md:text-display-lg md:text-[56px] lg:text-[64px]">
          Testes de clima organizacional e{" "}
          <span className="text-primary">conformidade NR-1</span> para qualquer
          empresa.
        </h1>

        <p className="mx-auto mb-10 max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
          Adequação prática e definitiva às novas exigências da NR-1 sobre riscos
          psicossociais. Pesquisa de clima organizacional, diagnóstico setorial e{" "}
          <AtsGratuitoLink variant="inline">ATS gratuito</AtsGratuitoLink>{" "}
          integrado — do varejo à indústria, para empresas de todos os portes.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AtsGratuitoLink variant="button" className="w-full sm:w-auto">
            Começar a Usar Gratuitamente
          </AtsGratuitoLink>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8">
          <AtsGratuitoLink variant="stat" ariaLabel="Acessar ATS Gratuito — R$ 0">
            <span className="font-headline-lg text-headline-lg font-bold text-primary">
              R$ 0
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface">
              ATS gratuito
            </span>
          </AtsGratuitoLink>
          <div className="hidden h-6 w-px bg-white/10 sm:block" />
          <div className="flex items-center gap-2">
            <span className="font-headline-lg text-headline-lg font-bold text-primary">
              100%
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant">
              taxa de resposta
            </span>
          </div>
          <div className="hidden h-6 w-px bg-white/10 sm:block" />
          <div className="flex items-center gap-2">
            <span className="font-headline-lg text-headline-lg font-bold text-primary">
              NR-1
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant">
              conformidade jurídica
            </span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,102,204,0.12)_0%,transparent_70%)]" />
      </div>
    </section>
  );
}
