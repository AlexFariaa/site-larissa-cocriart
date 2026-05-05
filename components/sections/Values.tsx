"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";

const VALUES = [
  {
    title: "Marketing Holístico",
    description:
      "Integramos estratégia, estética e propósito para criar comunicações que funcionam de dentro para fora. Não buscamos apenas alcance — buscamos ressonância.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="18" stroke="#d29ee1" strokeWidth="1.8" />
        <circle cx="20" cy="20" r="10" stroke="#c56428" strokeWidth="1.4" />
        <circle cx="20" cy="20" r="3" fill="#d29ee1" />
        <line x1="20" y1="2" x2="20" y2="10" stroke="#d29ee1" strokeWidth="1.5" />
        <line x1="20" y1="30" x2="20" y2="38" stroke="#d29ee1" strokeWidth="1.5" />
        <line x1="2" y1="20" x2="10" y2="20" stroke="#d29ee1" strokeWidth="1.5" />
        <line x1="30" y1="20" x2="38" y2="20" stroke="#d29ee1" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Consciência",
    description:
      "Cada decisão estratégica começa com perguntas profundas: quem você é, onde quer chegar e para quem você serve. A clareza é o primeiro passo da criação.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 4C12.268 4 6 10.268 6 18c0 5.5 3.1 10.3 7.6 12.8V33a2 2 0 002 2h8.8a2 2 0 002-2v-2.2C30.9 28.3 34 23.5 34 18c0-7.732-6.268-14-14-14z"
          stroke="#d29ee1"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <line x1="20" y1="22" x2="20" y2="28" stroke="#c56428" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="18" r="2.5" fill="#d29ee1" />
      </svg>
    ),
  },
  {
    title: "Cocriação",
    description:
      "Os melhores resultados nascem da colaboração genuína. Não trabalhamos para você — trabalhamos com você. Sua essência guia nossa criatividade.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="14" cy="16" r="6" stroke="#d29ee1" strokeWidth="1.8" />
        <circle cx="26" cy="16" r="6" stroke="#c56428" strokeWidth="1.8" />
        <path d="M8 32c0-4.4 2.7-8 6-8h12c3.3 0 6 3.6 6 8" stroke="#d29ee1" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Estética Profissional",
    description:
      "Beleza não é superficial — é estratégica. Um visual forte comunica qualidade antes mesmo das palavras. Cuidamos de cada pixel com intenção e rigor.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="6" y="10" width="28" height="20" rx="3" stroke="#d29ee1" strokeWidth="1.8" />
        <circle cx="20" cy="20" r="6" stroke="#c56428" strokeWidth="1.4" />
        <circle cx="20" cy="20" r="2.5" fill="#d29ee1" />
        <rect x="28" y="12" width="4" height="3" rx="1" fill="#d29ee1" opacity="0.6" />
      </svg>
    ),
  },
];

export function Values() {
  return (
    <LazyMotion features={domAnimation} strict>
      <section className="bg-[#1a0829] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 text-center"
          >
            Nossos Pilares
          </m.h2>
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center text-white/60 mb-14 max-w-xl mx-auto"
          >
            Os princípios que guiam cada projeto, cada estratégia, cada entrega.
          </m.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((value, i) => (
              <m.div
                key={value.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative rounded-2xl p-8 flex flex-col gap-4 group"
                style={{
                  background: "rgba(109, 31, 141, 0.08)",
                  border: "1px solid rgba(210, 158, 225, 0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Glow no hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 40px rgba(109, 31, 141, 0.2)",
                  }}
                />

                <div>{value.icon}</div>
                <h3 className="font-heading text-xl font-bold text-white">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  {value.description}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
