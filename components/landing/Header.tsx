import Image from "next/image";
import { LOGO_SRC, NAV_LINKS } from "@/components/landing/constants";
import { MobileMenu } from "@/components/landing/MobileMenu";
import { AtsGratuitoLink } from "@/components/ui/AtsGratuitoLink";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-surface/60 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop"
        aria-label="Navegação principal"
      >
        <a
          href="/"
          className="group relative flex shrink-0 items-center"
          aria-label="Facilitô! Labs — início"
        >
          <Image
            src={LOGO_SRC}
            alt="Facilitô! Labs"
            width={2816}
            height={1536}
            className="h-12 w-auto drop-shadow-[0_0_18px_rgba(170,199,255,0.25)] transition-transform duration-300 group-hover:scale-[1.03] md:h-14"
            priority
          />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label-md text-label-md text-on-surface-variant transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="font-label-md text-label-md text-on-surface-variant transition-colors duration-300 hover:text-primary"
          >
            Contato
          </a>
          <AtsGratuitoLink
            variant="button"
            className="rounded-full px-5 py-2.5 text-[13px] md:px-6 md:text-label-md"
          >
            ATS Gratuito
          </AtsGratuitoLink>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
