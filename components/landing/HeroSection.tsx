import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-margin-mobile pt-24 text-center hero-gradient md:px-margin-desktop">
      <div className="z-10 max-w-5xl">
        <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-label-sm text-label-sm uppercase tracking-widest text-primary">
          Facilitô! Labs &amp; ATS Integrado
        </span>

        <h1 className="mb-6 font-display-lg text-[2.25rem] leading-tight md:text-display-lg md:text-[56px] lg:text-[64px]">
          Zere o custo do seu software de R&amp;S e{" "}
          <span className="text-primary">blinde sua empresa</span> contra passivos
          da NR-1.
        </h1>

        <p className="mx-auto mb-10 max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
          Use nosso ATS com match inteligente para atrair talentos de forma 100%
          gratuita, eliminando de vez os currículos em PDF e a bagunça nos
          e-mails. Conecte nativamente os testes do Facilitô! Labs para auditar o
          clima e garantir conformidade jurídica desde o primeiro dia.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="w-full sm:w-auto">
            Começar a Usar Gratuitamente
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8">
          <div className="flex items-center gap-2">
            <span className="font-headline-lg text-headline-lg font-bold text-primary">
              R$ 0
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant">
              ATS gratuito
            </span>
          </div>
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
