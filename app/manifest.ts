import type { MetadataRoute } from "next";
import { SEO_DESCRIPTION, SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Teste de Clima Organizacional e NR-1`,
    short_name: SITE_NAME,
    description: SEO_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0e0e0e",
    theme_color: "#0066cc",
    lang: "pt-BR",
    orientation: "portrait-primary",
    categories: ["business", "productivity"],
  };
}
