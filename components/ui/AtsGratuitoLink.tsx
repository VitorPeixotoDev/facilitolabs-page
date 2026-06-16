import type { ReactNode } from "react";
import { ATS_GRATUITO_URL } from "@/components/landing/constants";
import { Icon } from "@/components/ui/Icon";

type AtsGratuitoLinkVariant = "button" | "badge" | "inline" | "stat" | "card";

type AtsGratuitoLinkProps = {
  variant?: AtsGratuitoLinkVariant;
  children: ReactNode;
  className?: string;
  showExternalIcon?: boolean;
  ariaLabel?: string;
};

const variantStyles: Record<AtsGratuitoLinkVariant, string> = {
  button:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-label-md text-label-md font-bold text-on-primary shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  badge:
    "inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-label-sm text-label-sm font-semibold uppercase tracking-widest text-primary transition-all hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(170,199,255,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  inline:
    "inline-flex items-center gap-1 rounded-md border-b border-primary/40 bg-primary/5 px-1.5 py-0.5 font-semibold text-primary transition-colors hover:border-primary hover:bg-primary/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  stat:
    "group inline-flex cursor-pointer items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 transition-all hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_24px_rgba(170,199,255,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  card:
    "group block cursor-pointer rounded-xl transition-all hover:border-primary/40 hover:shadow-[0_0_32px_rgba(170,199,255,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
};

export function AtsGratuitoLink({
  variant = "inline",
  children,
  className = "",
  showExternalIcon = true,
  ariaLabel = "Acessar ATS Gratuito — abre em nova aba",
}: AtsGratuitoLinkProps) {
  const showIcon = showExternalIcon && variant !== "card";

  return (
    <a
      href={ATS_GRATUITO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`${variantStyles[variant]} ${className}`}
    >
      {children}
      {showIcon ? (
        <Icon
          name={variant === "button" ? "open_in_new" : "north_east"}
          className={
            variant === "button"
              ? "text-lg"
              : variant === "stat"
                ? "text-sm opacity-0 transition-opacity group-hover:opacity-100"
                : "text-[0.85em]"
          }
        />
      ) : null}
    </a>
  );
}
