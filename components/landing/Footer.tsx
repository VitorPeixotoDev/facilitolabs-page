import Image from "next/image";
import { LOGO_SRC } from "@/components/landing/constants";

export function Footer() {
  return (
    <footer className="border-t border-surface-variant bg-surface-container-lowest py-12">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
              <Image
                src={LOGO_SRC}
                alt="Facilitô! Labs Logo"
                width={128}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-headline-lg text-headline-lg text-on-surface">
                Facilitô! Labs
              </span>
            </div>
            <p className="max-w-sm font-body-md text-body-md text-on-surface-variant">
              ATS Gratuito + Labs Analytics. © {new Date().getFullYear()}{" "}
              Facilitô! Labs.
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
