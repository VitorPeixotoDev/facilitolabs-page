import type { Metadata } from "next";

export const SITE_URL = "https://www.facilitolabs.com.br";

export const SITE_NAME = "Facilitô! Labs";

export const LOGO_URL = `${SITE_URL}/labs-logo_bg.png`;

export const SEO_TITLE =
  "Teste de Clima Organizacional e Conformidade NR-1 | Facilitô! Labs";

export const SEO_DESCRIPTION =
  "Plataforma de testes de clima organizacional para qualquer empresa. Adequação prática e definitiva à NR-1 com diagnóstico de riscos psicossociais, pesquisa de engajamento e ATS gratuito integrado.";

export const SEO_KEYWORDS = [
  "teste de clima organizacional",
  "pesquisa de clima organizacional",
  "clima organizacional",
  "conformidade NR-1",
  "adequação NR-1",
  "NR-1 riscos psicossociais",
  "gestão de riscos psicossociais",
  "diagnóstico organizacional",
  "software clima organizacional",
  "ferramenta clima organizacional",
  "pesquisa de engajamento",
  "teste NR-1",
  "conformidade ocupacional",
  "CIPA",
  "SST",
  "desenvolvimento organizacional",
  "ATS gratuito",
  "Facilitô Labs",
] as const;

export const FAQ_ITEMS = [
  {
    question: "O que é um teste de clima organizacional?",
    answer:
      "O teste de clima organizacional é uma pesquisa estruturada que mede a percepção dos colaboradores sobre engajamento, liderança, comunicação e cultura da empresa. No Facilitô! Labs, os testes são modulares — do pulso rápido (Termômetro de Clima) ao diagnóstico profundo de engajamento — e funcionam para empresas de qualquer porte ou setor.",
  },
  {
    question: "Como a NR-1 exige a gestão de riscos psicossociais?",
    answer:
      "A NR-1 (Disposições Gerais e Gerenciamento de Riscos Ocupacionais) passou a exigir que empresas identifiquem, avaliem e controlem riscos psicossociais no ambiente de trabalho — como assédio, sobrecarga, conflitos e falta de autonomia. O Facilitô! Labs automatiza esse diagnóstico com coleta via mobile ou mural e relatórios setoriais prontos para auditoria.",
  },
  {
    question: "O Facilitô! Labs serve para qualquer tipo de empresa?",
    answer:
      "Sim. A plataforma foi projetada para varejo, indústria, serviços, logística, administrativo e demais setores. Os testes de clima organizacional se adaptam ao tamanho e ao momento de cada operação — desde PMEs até grandes corporações — com quebra automática de dados por departamento.",
  },
  {
    question: "Como funciona a adequação à NR-1 de forma prática?",
    answer:
      "Em vez de relatórios que vão para a gaveta, o Facilitô! Labs entrega diagnóstico setorial com até 100% de taxa de resposta, mapeamento de conflitos e ceticismo, e indicação de profissionais qualificados (SST, CIPA, DO) para implementar as melhorias. Do diagnóstico à ação — conformidade definitiva, não apenas documental.",
  },
  {
    question: "Qual a diferença entre pesquisa de clima e conformidade NR-1?",
    answer:
      "A pesquisa de clima organizacional mede engajamento e cultura; a conformidade NR-1 foca em riscos psicossociais exigidos por lei. No ecossistema Facilitô!, ambas são integradas: o ATS gratuito conecta recrutamento aos testes do Labs, centralizando o histórico do colaborador para auditorias rápidas de SST e RH.",
  },
  {
    question: "Quanto custa usar os testes de clima organizacional?",
    answer:
      "O ATS (Applicant Tracking System) do Facilitô! Labs é 100% gratuito, com match inteligente e funil automatizado. Os módulos de teste de clima organizacional e diagnóstico NR-1 do Labs Analytics são contratados conforme a necessidade da empresa. Solicite uma demonstração para conhecer o plano ideal.",
  },
] as const;

export function buildMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SEO_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: SEO_DESCRIPTION,
    keywords: [...SEO_KEYWORDS],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "technology",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: SITE_URL,
      siteName: SITE_NAME,
      title: SEO_TITLE,
      description: SEO_DESCRIPTION,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Facilitô! Labs — Teste de Clima Organizacional e Conformidade NR-1",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SEO_TITLE,
      description: SEO_DESCRIPTION,
      images: ["/opengraph-image"],
    },
    other: {
      "geo.region": "BR",
      "geo.placename": "Brasil",
      "content-language": "pt-BR",
    },
  };
}

export function buildJsonLd() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: LOGO_URL,
        },
        description: SEO_DESCRIPTION,
        areaServed: {
          "@type": "Country",
          name: "Brasil",
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        description: SEO_DESCRIPTION,
        inLanguage: "pt-BR",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: SEO_TITLE,
        description: SEO_DESCRIPTION,
        isPartOf: { "@id": websiteId },
        about: {
          "@type": "Thing",
          name: "Teste de Clima Organizacional e Conformidade NR-1",
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "SoftwareApplication",
        name: SITE_NAME,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: SITE_URL,
        description: SEO_DESCRIPTION,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BRL",
          description: "ATS gratuito com testes de clima organizacional integrados",
        },
        provider: { "@id": organizationId },
        featureList: [
          "Teste de clima organizacional",
          "Conformidade NR-1",
          "Diagnóstico de riscos psicossociais",
          "Pesquisa de engajamento",
          "ATS gratuito",
          "Coleta via celular do colaborador",
        ],
      },
      {
        "@type": "Service",
        name: "Testes de Clima Organizacional e Conformidade NR-1",
        description: SEO_DESCRIPTION,
        provider: { "@id": organizationId },
        areaServed: {
          "@type": "Country",
          name: "Brasil",
        },
        serviceType: "Diagnóstico organizacional e conformidade ocupacional",
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Empresas de todos os portes e setores",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Módulos de Clima Organizacional",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Termômetro de Clima",
                description:
                  "Pulsos rápidos para acompanhar engajamento em tempo real",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Lente das Lideranças",
                description:
                  "Mapeamento do alinhamento da média gestão e impacto operacional",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diagnóstico de Engajamento e Cultura",
                description:
                  "Pesquisas profundas para consolidar pilares institucionais",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diagnóstico NR-1 — Riscos Psicossociais",
                description:
                  "Conformidade com a NR-1 e mapeamento setorial de riscos psicossociais",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
