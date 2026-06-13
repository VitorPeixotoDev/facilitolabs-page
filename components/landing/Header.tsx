import Image from "next/image";
import { LOGO_SRC, NAV_LINKS } from "@/components/landing/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b border-white/10 bg-surface/60 px-margin-mobile backdrop-blur-xl md:px-margin-desktop">
      <div className="flex items-center gap-3 md:gap-4">
        <Image
          src={LOGO_SRC}
          alt="Facilitô! Labs Logo"
          width={160}
          height={40}
          className="h-8 w-auto md:h-10"
          priority
        />
        <span className="hidden font-headline-lg text-headline-lg font-bold tracking-tight text-on-surface sm:inline">
          Facilitô! Labs
        </span>
      </div>

      <div className="hidden gap-8 lg:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-label-md text-label-md text-on-surface-variant transition-colors duration-300 hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </div>

      <Button className="rounded-full px-4 py-2.5 text-[13px] md:px-6 md:text-label-md">
        Começar a Usar Gratuitamente
      </Button>
    </nav>
  );
}
