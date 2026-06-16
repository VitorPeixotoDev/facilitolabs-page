import { ECOSYSTEM_STEPS } from "@/components/landing/constants";
import { AtsGratuitoLink } from "@/components/ui/AtsGratuitoLink";
import { Icon } from "@/components/ui/Icon";

const ATS_STEP_TITLE = "ATS Gratuito";

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
          Do recrutamento à conformidade NR-1 sem quebra de processos.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Chega de usar uma ferramenta para contratar e planilhas isoladas para
          o teste de clima organizacional. No ecossistema Facilitô!, assim que o
          candidato atinge a etapa ideal no funil de{" "}
          <AtsGratuitoLink variant="inline">R&amp;S gratuito</AtsGratuitoLink>, o
          sistema dispara automaticamente os testes de integração ou pesquisas de
          clima do Labs. O resultado cai direto na ficha do colaborador,
          centralizando o histórico para auditorias de SST e conformidade
          ocupacional.
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 right-0 left-0 hidden h-px -translate-y-1/2 bg-linear-to-r from-transparent via-primary/30 to-transparent md:block" />

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {ECOSYSTEM_STEPS.map((step, index) => {
            const isAtsStep = step.title === ATS_STEP_TITLE;

            const cardContent = (
              <>
                <span className="absolute -top-3 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-primary-container font-label-sm text-label-sm font-bold text-on-primary-container">
                  {index + 1}
                </span>
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-container transition-colors group-hover:bg-primary/10">
                  <Icon
                    name={step.icon}
                    className="text-4xl text-primary"
                    filled
                  />
                </div>
                <h3 className="mb-3 font-headline-lg text-headline-lg">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {step.description}
                </p>
                {isAtsStep ? (
                  <p className="mt-4 inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-primary opacity-80 transition-opacity group-hover:opacity-100">
                    Acessar ATS Gratuito
                    <Icon name="open_in_new" className="text-sm" />
                  </p>
                ) : null}
              </>
            );

            if (isAtsStep) {
              return (
                <AtsGratuitoLink
                  key={step.title}
                  variant="card"
                  showExternalIcon={false}
                  className="glass-card relative border-primary/20 p-8 text-center ring-1 ring-primary/10"
                >
                  {cardContent}
                </AtsGratuitoLink>
              );
            }

            return (
              <div
                key={step.title}
                className="glass-card relative rounded-xl p-8 text-center"
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container">
              <Icon name="hub" className="text-2xl text-on-primary-container" />
            </div>
            <div>
              <AtsGratuitoLink
                variant="inline"
                className="mb-1 border-none bg-transparent px-0 py-0 font-label-md text-label-md uppercase tracking-wide"
                ariaLabel="Acessar ATS Gratuito"
              >
                ATS + Labs
              </AtsGratuitoLink>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Um único fluxo contínuo, do match ao diagnóstico ocupacional
              </p>
            </div>
          </div>
          <AtsGratuitoLink
            variant="button"
            className="rounded-full px-6 py-3 text-[13px] md:text-label-md"
          >
            Acessar ATS Gratuito
          </AtsGratuitoLink>
        </div>
      </div>
    </section>
  );
}
