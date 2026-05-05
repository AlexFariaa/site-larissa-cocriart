import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Conheça os trabalhos da CoCriart: identidade visual, produção de conteúdo e gestão de redes com consciência e estética.",
  openGraph: {
    title: "Portfólio | CoCriart",
    description:
      "Conheça os trabalhos da CoCriart: identidade visual, produção de conteúdo e gestão de redes.",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
