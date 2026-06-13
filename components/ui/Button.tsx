import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "inverse";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
  fullWidth?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary shadow-lg shadow-primary/20 hover:brightness-110",
  secondary:
    "border border-white/10 bg-surface-variant/20 text-on-surface hover:bg-surface-variant/40",
  inverse:
    "bg-on-surface text-surface shadow-2xl shadow-primary/10 hover:scale-105 active:scale-95",
};

export function Button({
  variant = "primary",
  children,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-lg px-8 py-4 font-label-md text-label-md font-bold transition-all ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
