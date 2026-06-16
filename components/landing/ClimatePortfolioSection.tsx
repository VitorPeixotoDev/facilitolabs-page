import { CLIMATE_PRODUCTS } from "@/components/landing/constants";
import { Icon } from "@/components/ui/Icon";

export function ClimatePortfolioSection() {
  return (
    <section
      id="portfolio"
      className="bg-surface-container-lowest py-24 scroll-mt-24"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-label-sm text-label-sm uppercase tracking-widest text-primary">
            Testes de Clima Organizacional
          </span>
          <h2
            id="portfolio-heading"
            className="mx-auto mb-6 max-w-3xl font-headline-xl text-headline-lg md:text-headline-xl"
          >
            Pesquisa de clima organizacional modular para cada momento da sua
            empresa.
          </h2>
          <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            Ferramentas de diagnóstico organizacional e engajamento adaptáveis a
            qualquer setor — varejo, indústria, serviços, logística e
            administrativo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {CLIMATE_PRODUCTS.map((product, index) => (
            <article
              key={product.title}
              className={`glass-card group rounded-xl p-8 transition-all hover:border-primary/30 ${
                index === 0 ? "border-t-2 border-t-primary/40" : ""
              }`}
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-container transition-colors group-hover:bg-primary/10">
                <Icon
                  name={product.icon}
                  className="text-4xl text-primary transition-transform group-hover:scale-110"
                  filled
                />
              </div>
              <h3 className="mb-4 font-headline-lg text-headline-lg">
                {product.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
