export const LOGO_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAQO1vAn8cS-zp_nKl6KuR_GPN-RYw983Nn_DoYUCZWMi4oU7oYYmAVkgxHDrDSx9Kwi8xkTgM2PjAlRqBO2HqmYPCS_E0-D75XJGlL6E2W4ZrR-ZiD2uOidYh9QZP9KOsy2B0QNqrNU9I6fRYnfDEgjfRg2jMzDmA_qwoRGNDJH0jk5bk4OInhBNo9aq50eE4ADH-5qzqnltRDuOvUlGzKsVm7zuiCJ2rb5q9_NtRan90tXq9wNJt0Jgxkq_2UTpjMsZMCwhpdC0JC";

export const NAV_LINKS = [
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Testes de Clima", href: "#portfolio" },
  { label: "NR-1", href: "#nr1" },
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
      "Pulsos rápidos e frequentes para acompanhar o engajamento do time em tempo real durante períodos de transição ou crescimento.",
  },
  {
    icon: "supervisor_account",
    title: "Lente das Lideranças",
    description:
      "Mapeamento do alinhamento da média gestão e o impacto direto do comando no dia a dia operacional.",
  },
  {
    icon: "analytics",
    title: "Diagnóstico de Engajamento e Cultura",
    description:
      "Pesquisas profundas e estruturadas para grandes corporações consolidarem seus pilares institucionais e reterem talentos.",
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
