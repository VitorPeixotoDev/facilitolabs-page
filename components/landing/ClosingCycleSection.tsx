import { Icon } from "@/components/ui/Icon";

const PROFESSIONAL_TYPES = [
  { icon: "school", label: "Consultores em DO" },
  { icon: "health_and_safety", label: "Técnicos de Segurança" },
  { icon: "groups", label: "Especialistas em CIPA" },
  { icon: "psychology", label: "Treinamento de Liderança" },
] as const;

export function ClosingCycleSection() {
  return (
    <section
      id="indicacao"
      className="bg-surface-container-low py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Fechamento do Ciclo
            </span>
            <h2 className="mb-6 font-headline-xl text-headline-lg leading-tight md:text-headline-xl">
              Diagnosticou o gargalo? Nós indicamos quem resolve.
            </h2>
            <p className="mb-10 font-body-lg text-body-lg text-on-surface-variant">
              O Facilitô! Labs não entrega apenas o problema. Se o diagnóstico
              setorial apontar a necessidade de um treinamento de liderança, uma
              reciclagem em SST ou a reativação de uma CIPA, nossa plataforma
              fecha o ciclo. Através do RH Facilitô!, indicamos profissionais
              qualificados, técnicos de segurança e consultores em Desenvolvimento
              Organizacional cadastrados na nossa base para implementar as
              melhorias na prática.
            </p>

            <ul className="space-y-4">
              {PROFESSIONAL_TYPES.map((type) => (
                <li key={type.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name={type.icon} className="text-primary" />
                  </span>
                  <span className="font-body-md text-body-md">{type.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-primary to-surface-tint opacity-20 blur" />
            <div className="glass-card relative rounded-2xl p-8 md:p-10">
              <div className="mb-8 flex items-center gap-4 border-b border-white/10 pb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-container">
                  <Icon
                    name="handshake"
                    className="text-3xl text-on-primary-container"
                    filled
                  />
                </div>
                <div>
                  <p className="font-label-md text-label-md font-bold text-primary">
                    Rede Facilitô!
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Profissionais verificados na base
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-xl bg-surface-container p-4">
                  <Icon name="search" className="text-primary" />
                  <div className="flex-1">
                    <p className="font-body-md text-body-md font-medium">
                      Diagnóstico identifica gap
                    </p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Ex: 75% ceticismo em Perecíveis
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Icon name="arrow_downward" className="text-primary/60" />
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <Icon name="verified" className="text-primary" />
                  <div className="flex-1">
                    <p className="font-body-md text-body-md font-medium">
                      Indicação automática de especialista
                    </p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Implementação prática, não relatório de gaveta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
