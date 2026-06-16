import Image from "next/image";
import { LOGO_SRC } from "@/components/landing/constants";

export function Footer() {
  return (
    <footer className="border-t border-surface-variant bg-surface-container-lowest py-12">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <Image
                src={LOGO_SRC}
                alt="Facilitô! Labs"
                width={2816}
                height={1536}
                className="h-8 w-auto"
              />
            </div>
            <p className="max-w-sm font-body-md text-body-md text-on-surface-variant">
              Teste de clima organizacional e conformidade NR-1 para qualquer
              empresa. © {new Date().getFullYear()} Facilitô! Labs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <a
              href="#ecossistema"
              className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary"
            >
              Ecossistema
            </a>
            <a
              href="#portfolio"
              className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary"
            >
              Testes de Clima
            </a>
            <a
              href="#nr1"
              className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary"
            >
              NR-1
            </a>
            <a
              href="#faq"
              className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary"
            >
              FAQ
            </a>
            <a
              href="#contato"
              className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
