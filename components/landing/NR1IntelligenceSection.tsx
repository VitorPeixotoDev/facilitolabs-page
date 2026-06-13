import { CONFLICT_METRICS } from "@/components/landing/constants";
import { DonutChart } from "@/components/ui/DonutChart";
import { Icon } from "@/components/ui/Icon";

export function NR1IntelligenceSection() {
  return (
    <section
      id="nr1"
      className="mx-auto max-w-container-max scroll-mt-24 px-margin-mobile py-24 md:px-margin-desktop"
    >
      <div className="mb-16 max-w-4xl">
        <span className="mb-4 inline-block font-label-sm text-label-sm uppercase tracking-widest text-primary">
          Inteligência em NR-1
        </span>
        <h2 className="mb-6 font-headline-xl text-headline-lg md:text-headline-xl">
          Dados estratégicos que apontam exatamente onde o seu RH deve intervir.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Esqueça relatórios que vão para a gaveta. Nossa metodologia de
          diagnóstico da NR-1 (inspirada no case real de sucesso da{" "}
          <strong className="text-on-surface">
            Nefe Capital Supermercados — Lente da CIPA Ocupacional
          </strong>
          ) garante até 100% de taxa de resposta utilizando coletas dinâmicas via
          mobile ou mural.
        </p>
      </div>

      <div className="mb-16 rounded-2xl border border-white/10 bg-surface-container-low p-6 md:p-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="mb-2 font-headline-lg text-headline-lg">
              Visão Setorial Exata
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Quebra automática de dados mapeando a percepção por departamento
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <Icon name="smartphone" className="text-primary" />
            <span className="font-label-md text-label-md text-on-surface-variant">
              Coleta via mobile ou mural
            </span>
          </div>
        </div>
        <DonutChart />
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        {CONFLICT_METRICS.map((metric) => (
          <article
            key={`${metric.sector}-${metric.stat}`}
            className="glass-card rounded-xl border-l-2 border-l-error/60 p-8"
          >
            <div className="mb-4 flex items-start justify-between">
              <Icon name={metric.icon} className="text-3xl text-error" />
              <span className="font-display-lg text-[2.5rem] leading-none font-bold text-error">
                {metric.stat}
              </span>
            </div>
            <p className="mb-2 font-label-sm text-label-sm uppercase tracking-widest text-primary">
              {metric.title}
            </p>
            <h4 className="mb-3 font-headline-lg text-headline-lg">
              {metric.sector}
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {metric.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
