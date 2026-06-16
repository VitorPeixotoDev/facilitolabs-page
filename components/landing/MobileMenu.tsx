"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { LOGO_SRC, NAV_LINKS } from "@/components/landing/constants";
import { AtsGratuitoLink } from "@/components/ui/AtsGratuitoLink";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const NAV_ICONS: Record<string, string> = {
  "#ecossistema": "hub",
  "#portfolio": "thermostat",
  "#nr1": "health_and_safety",
  "#faq": "help",
  "#indicacao": "handshake",
  "#contato": "chat",
};

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuId = useId();

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenu();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  const allLinks = [
    ...NAV_LINKS,
    { label: "Contato", href: "#contato" as const },
  ];

  const drawer = (
    <>
      <div
        className={`fixed inset-0 z-70 bg-[#050505]/90 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden={!isOpen}
      />

      <div
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 z-75 flex w-full flex-col bg-surface-container-lowest shadow-[-12px_0_48px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-out sm:w-[min(100vw,380px)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          height: "100dvh",
          maxHeight: "100dvh",
          paddingTop: "env(safe-area-inset-top, 0px)",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
        inert={!isOpen ? true : undefined}
      >
        <div className="shrink-0 border-b border-white/10 bg-surface-container-low px-5 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <Image
                src={LOGO_SRC}
                alt=""
                width={2816}
                height={1536}
                aria-hidden
                className="h-9 w-auto shrink-0"
              />
              <div className="min-w-0">
                <p className="truncate font-headline-lg text-headline-lg text-on-surface">
                  Facilitô! Labs
                </p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Navegação
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Fechar menu"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-surface-container text-on-surface-variant transition-colors hover:border-primary/30 hover:text-primary"
            >
              <Icon name="close" className="text-xl" />
            </button>
          </div>
        </div>

        <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
          <nav
            aria-label="Seções da página"
            className="flex-1 overflow-y-auto overscroll-y-contain px-4 py-4 [-webkit-overflow-scrolling:touch]"
          >
            <p className="mb-3 px-2 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              Explorar
            </p>
            <ul className="space-y-2 pb-2">
              {allLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="flex min-h-14 items-center gap-4 rounded-xl border border-white/10 bg-surface-container px-4 py-3 transition-colors active:bg-primary/15 hover:border-primary/25 hover:bg-surface-container-high"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon
                        name={NAV_ICONS[link.href] ?? "arrow_forward"}
                        className="text-xl"
                        filled
                      />
                    </span>
                    <span className="flex-1 font-headline-lg text-headline-lg text-on-surface">
                      {link.label}
                    </span>
                    <Icon
                      name="chevron_right"
                      className="shrink-0 text-on-surface-variant"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-surface-container-lowest to-transparent"
          />
        </div>

        <div className="shrink-0 space-y-3 border-t border-white/10 bg-surface-container-low px-4 py-4">
          <AtsGratuitoLink variant="button" className="w-full rounded-full py-4">
            ATS Gratuito
          </AtsGratuitoLink>
          <Button
            fullWidth
            className="rounded-full py-4"
            onClick={() => {
              closeMenu();
              document.querySelector("#contato")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Solicitar demonstração
          </Button>
          <p className="mt-3 text-center font-label-sm text-label-sm text-on-surface-variant">
            Converse com nosso time pelo WhatsApp
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        className="relative z-80 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-surface-container text-on-surface shadow-lg transition-colors hover:border-primary/40 hover:text-primary"
      >
        <Icon name={isOpen ? "close" : "menu"} className="text-2xl" />
      </button>

      {mounted ? createPortal(drawer, document.body) : null}
    </div>
  );
}
