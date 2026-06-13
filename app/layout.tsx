import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Facilitô! Labs — ATS Gratuito + Conformidade NR-1",
  description:
    "Zere o custo do seu software de R&S e blinde sua empresa contra passivos da NR-1. ATS gratuito com match inteligente integrado aos testes de clima e conformidade do Facilitô! Labs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Hanken+Grotesk:wght@600;700&family=Geist:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-on-background selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
