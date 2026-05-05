import type { Metadata } from "next";
import Link from "next/link";
import { AboutHero } from "@/components/sections/AboutHero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Values } from "@/components/sections/Values";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a filosofia do Marketing Holístico da CoCriart — onde estratégia, criatividade e consciência se encontram.",
  openGraph: {
    title: "Sobre | CoCriart",
    description:
      "Conheça a filosofia do Marketing Holístico da CoCriart — onde estratégia, criatividade e consciência se encontram.",
    type: "website",
  },
};

export default function SobrePage() {
  return (
    <>
      <AboutHero />
      <Manifesto />
      <Values />

      {/* CTA Final */}
      <section className="bg-brand-bg py-20 px-6">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Pronto para despertar sua marca?
          </h2>
          <p className="text-white/60">
            Veja os trabalhos que já realizamos ou entre em contato para conversarmos sobre o seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-3 rounded-full font-semibold bg-[#c56428] text-white hover:bg-[#a0501f] transition-colors duration-200 text-center"
            >
              Ver Portfólio
            </Link>
            <Link
              href="/contato"
              className="px-8 py-3 rounded-full font-semibold border border-[#d29ee1] text-[#d29ee1] hover:bg-[#d29ee1]/10 transition-colors duration-200 text-center"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
