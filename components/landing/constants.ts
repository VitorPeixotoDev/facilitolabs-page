export const LOGO_SRC = "/labs-logo_bg.png";

export const ATS_GRATUITO_URL = "https://rh.facilitovagas.com";

export const NAV_LINKS = [
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Testes de Clima", href: "#portfolio" },
  { label: "NR-1", href: "#nr1" },
  { label: "FAQ", href: "#faq" },
  { label: "Indicação", href: "#indicacao" },
] as const;

export const SECTOR_DATA = [
  { label: "Serviços Gerais/Limpeza", value: 14.9, color: "#0066cc" },
  { label: "Depósito/Estoque", value: 12.9, color: "#1a8cff" },
  { label: "Mercearia e Bebidas", value: 11.9, color: "#3399ff" },
  { label: "Perecíveis", value: 11.9, color: "#5cadff" },
  { label: "Administrativo/RH", value: 11.9, color: "#7dbfff" },
  { label: "Segurança Patrimonial", value: 10.9, color: "#99ccff" },
  { label: "Hortifrúti e Padaria", value: 9.9, color: "#b3d9ff" },
  { label: "Frente de Loja", value: 6.9, color: "#cce6ff" },
] as const;

export const CONFLICT_METRICS = [
  {
    icon: "warning",
    title: "Diagnóstico de Conflito",
    stat: "46,7%",
    sector: "Serviços Gerais",
    description:
      "Clima pesado identificado — postura defensiva e ironia com normas de respeito.",
  },
  {
    icon: "shield",
    title: "Diagnóstico de Conflito",
    stat: "63,6%",
    sector: "Segurança Patrimonial",
    description:
      "Time relatou postura defensiva ou ironia com normas de respeito.",
  },
  {
    icon: "psychology_alt",
    title: "Mapeamento de Ceticismo",
    stat: "75%",
    sector: "Perecíveis",
    description:
      "Colaboradores acreditam que o relatório será engavetado — desconfiança com CIPA e RH.",
  },
] as const;

export const CLIMATE_PRODUCTS = [
  {
    icon: "thermostat",
    title: "Termômetro de Clima",
    description:
      "Pesquisa de clima organizacional com pulsos rápidos e frequentes para acompanhar o engajamento do time em tempo real — ideal para transições, crescimento ou monitoramento contínuo.",
  },
  {
    icon: "supervisor_account",
    title: "Lente das Lideranças",
    description:
      "Diagnóstico organizacional focado na média gestão: mapeamento do alinhamento de lideranças e o impacto direto do comando no clima e na produtividade operacional.",
  },
  {
    icon: "analytics",
    title: "Diagnóstico de Engajamento e Cultura",
    description:
      "Teste de clima organizacional profundo e estruturado para grandes corporações consolidarem pilares institucionais, reterem talentos e cumprirem exigências de SST.",
  },
] as const;

export const ECOSYSTEM_STEPS = [
  {
    icon: "person_search",
    title: "ATS Gratuito",
    description: "Match inteligente sem PDFs ou e-mails perdidos",
  },
  {
    icon: "sync_alt",
    title: "Funil Automatizado",
    description: "Candidato avança e dispara testes do Labs",
  },
  {
    icon: "assignment_turned_in",
    title: "Ficha Centralizada",
    description: "Histórico completo para auditorias rápidas",
  },
] as const;
