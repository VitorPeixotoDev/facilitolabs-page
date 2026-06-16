import { FAQ_ITEMS } from "@/lib/seo";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="mx-auto max-w-container-max scroll-mt-24 px-margin-mobile py-24 md:px-margin-desktop"
      aria-labelledby="faq-heading"
    >
      <div className="mb-16 max-w-3xl">
        <span className="mb-4 inline-block font-label-sm text-label-sm uppercase tracking-widest text-primary">
          Perguntas Frequentes
        </span>
        <h2
          id="faq-heading"
          className="mb-6 font-headline-xl text-headline-lg md:text-headline-xl"
        >
          Tudo sobre teste de clima organizacional e conformidade NR-1
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Respostas diretas para quem busca adequar a empresa às novas exigências
          da NR-1 e implementar pesquisas de clima organizacional de forma
          prática e definitiva.
        </p>
      </div>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.question}
            className="glass-card group rounded-xl border border-white/5 open:border-primary/20"
          >
            <summary className="cursor-pointer list-none p-6 font-headline-lg text-headline-lg [&::-webkit-details-marker]:hidden">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-left">{item.question}</h3>
                <span
                  className="mt-1 shrink-0 text-primary transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </div>
            </summary>
            <div className="border-t border-white/5 px-6 pb-6 pt-4">
              <p className="font-body-md text-body-md text-on-surface-variant">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
