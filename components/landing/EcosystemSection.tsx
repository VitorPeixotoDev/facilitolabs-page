import { ECOSYSTEM_STEPS } from "@/components/landing/constants";
import { Icon } from "@/components/ui/Icon";

export function EcosystemSection() {
  return (
    <section
      id="ecossistema"
      className="mx-auto max-w-container-max scroll-mt-24 px-margin-mobile py-24 md:px-margin-desktop"
    >
      <div className="mb-16 max-w-3xl">
        <span className="mb-4 inline-block font-label-sm text-label-sm uppercase tracking-widest text-primary">
          Ecossistema Integrado
        </span>
        <h2 className="mb-6 font-headline-xl text-headline-lg md:text-headline-xl">
          Do Recrutamento à Conformidade Ocupacional sem quebra de processos.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Chega de usar uma ferramenta para contratar e planilhas isoladas para
          treinar. No ecossistema Facilitô!, assim que o candidato atinge a etapa
          ideal no seu funil de R&amp;S gratuito, o sistema dispara de forma
          automatizada os testes de integração ou pesquisas do Labs. O resultado
          cai direto na ficha do colaborador, centralizando seu histórico para
          auditorias rápidas.
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 right-0 left-0 hidden h-px -translate-y-1/2 bg-linear-to-r from-transparent via-primary/30 to-transparent md:block" />

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {ECOSYSTEM_STEPS.map((step, index) => (
            <div
              key={step.title}
              className="glass-card relative rounded-xl p-8 text-center"
            >
              <span className="absolute -top-3 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-primary-container font-label-sm text-label-sm font-bold text-on-primary-container">
                {index + 1}
              </span>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-container">
                <Icon name={step.icon} className="text-4xl text-primary" filled />
              </div>
              <h3 className="mb-3 font-headline-lg text-headline-lg">
                {step.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container">
              <Icon name="hub" className="text-2xl text-on-primary-container" />
            </div>
            <div>
              <p className="font-label-md text-label-md font-bold text-primary">
                ATS + Labs
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Um único fluxo contínuo, do match ao diagnóstico ocupacional
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
            <Icon name="arrow_forward" className="text-primary" />
            <span>Sem fragmentação de processos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
