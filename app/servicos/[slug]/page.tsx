import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/mock-services";
import ServicePageContent from "./content";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Serviço não encontrado",
      description: "Este serviço não existe.",
    };
  }

  const metaTitles: Record<string, string> = {
    "gestao-de-redes": "Gestão de Redes Sociais | CoCriart",
    "producao-de-conteudo": "Produção de Conteúdo | CoCriart",
    "identidade-visual": "Identidade Visual | CoCriart",
    consultoria: "Consultoria de Marketing | CoCriart",
  };

  const metaDescriptions: Record<string, string> = {
    "gestao-de-redes":
      "Terceirize sua presença no Instagram com estratégia, calendário editorial e gestão de comunidade. Gestão de Redes com consciência pela CoCriart.",
    "producao-de-conteudo":
      "Produção audiovisual profissional: foto, vídeo e edição com qualidade cinéfila. Conteúdo estratégico para sua marca.",
    "identidade-visual":
      "Identidade visual completa: logo, paleta, tipografia e manual de marca. Sua marca nasce com propósito e beleza.",
    consultoria:
      "Consultoria estratégica de marketing: diagnóstico, planejamento e orientação. Estratégia alinhada ao propósito do seu negócio.",
  };

  return {
    title: metaTitles[service.slug] || `${service.title} | CoCriart`,
    description:
      metaDescriptions[service.slug] ||
      `${service.title}. Conheça mais sobre este serviço da CoCriart.`,
    openGraph: {
      title: metaTitles[service.slug] || `${service.title} | CoCriart`,
      description:
        metaDescriptions[service.slug] ||
        `${service.title}. Conheça mais sobre este serviço da CoCriart.`,
      type: "website",
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-[#2d0e44] flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl font-heading mb-4">Serviço não encontrado</h1>
          <a href="/servicos" className="text-[#d29ee1] underline">
            Voltar para Serviços
          </a>
        </div>
      </main>
    );
  }

  return <ServicePageContent service={service} />;
}
