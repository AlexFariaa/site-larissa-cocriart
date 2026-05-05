import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços da CoCriart: Gestão de Redes, Produção de Conteúdo, Identidade Visual e Consultoria de Marketing.",
  openGraph: {
    title: "Serviços | CoCriart",
    description:
      "Soluções estratégicas de marketing com consciência. Gestão de Redes, Produção de Conteúdo, Identidade Visual e Consultoria.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
