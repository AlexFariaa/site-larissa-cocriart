"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Button } from "@/components/ui/Button";

const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/_cocriart_";

const INSTAGRAM_PLACEHOLDERS = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=900&q=80",
    alt: "Pessoa analisando métricas de marketing no notebook",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1552581234-26160f608093?w=900&q=80",
    alt: "Reunião criativa com equipe de conteúdo",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=900&q=80",
    alt: "Tela de redes sociais em smartphone",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    alt: "Dashboard de analytics e performance digital",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&q=80",
    alt: "Mesa de trabalho com câmera e materiais de criação",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80",
    alt: "Brainstorm de estratégia para conteúdo de marca",
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function InstagramFeed() {
  return (
    <LazyMotion features={domAnimation} strict>
      <section className="relative overflow-hidden bg-brand-deeper px-6 py-24 sm:py-32" aria-labelledby="instagram-feed-heading">
        {/* TODO: substituir por embed SnapWidget quando tiver acesso à conta do Instagram. */}
        <div className="mx-auto max-w-6xl">
          <m.div
            className="mb-12 text-center"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
              Comunidade
            </p>
            <h2 id="instagram-feed-heading" className="font-heading text-4xl font-bold text-white sm:text-5xl">
              No Instagram
            </h2>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-body text-sm text-brand-lilac/80 transition-colors hover:text-brand-lilac"
            >
              @_cocriart_
            </a>
            <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-brand-orange" aria-hidden />
          </m.div>

          <m.div
            className="grid grid-cols-2 gap-4 sm:grid-cols-3"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {INSTAGRAM_PLACEHOLDERS.map((item) => (
              <m.a
                key={item.id}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl border border-brand-lilac/20 bg-brand-purple/10"
                variants={cardVariants}
                aria-label="Abrir perfil da CoCriart no Instagram"
              >
                <div className="relative aspect-square">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "linear-gradient(to top, rgba(45,14,68,0.6), transparent)" }}
                  />
                </div>
              </m.a>
            ))}
          </m.div>

          <m.div
            className="mt-10 flex justify-center"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <Button variant="ghost" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Ver mais no Instagram @_cocriart_
            </Button>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
