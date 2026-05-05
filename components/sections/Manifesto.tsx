"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";

const MANIFESTO_PARAGRAPHS = [
  "Vivemos num mundo onde marcas gritam mais alto do que jamais ouviram. O feed transborda de conteúdo, a atenção é disputada por milissegundos — e no meio desse ruído, as marcas que realmente chegam às pessoas são as que têm algo verdadeiro a dizer.",
  "A CoCriart nasceu da convicção de que marketing sem consciência é uma corrida em direção errada. Que estética sem propósito é vaidade. Que estratégia sem alma é só barulho.",
  "Acreditamos que o marketing mais poderoso começa de dentro: no entendimento profundo de quem você é, do que você oferece ao mundo e para quem você foi criado para servir. Só daí — com clareza, intenção e beleza — é que a comunicação se torna irresistível.",
  "É por isso que não fazemos posts. Fazemos pontes. Não gerenciamos perfis. Despertamos marcas. Cada projeto é uma cocriação — porque o melhor resultado nasce quando a nossa visão estratégica encontra a sua essência única.",
];

export function Manifesto() {
  return (
    <LazyMotion features={domAnimation} strict>
      <section className="bg-brand-bg py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Título da seção */}
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          >
            Nosso Manifesto
          </m.h2>

          <div className="space-y-8">
            {MANIFESTO_PARAGRAPHS.map((para, i) => (
              <div key={i}>
                <m.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, delay: i * 0.12 }}
                  className="font-heading text-lg md:text-xl text-white/85 leading-relaxed"
                >
                  {para}
                </m.p>
                {/* Linha decorativa entre parágrafos, exceto o último */}
                {i < MANIFESTO_PARAGRAPHS.length - 1 && (
                  <m.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 + 0.1 }}
                    className="mt-8 h-px w-16"
                    style={{ background: "#c56428" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Frase em destaque */}
          <m.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="font-signature text-3xl md:text-4xl text-[#d29ee1] leading-snug">
              &ldquo;Sem consciência, o marketing vai te levar mais rápido para o lugar errado.&rdquo;
            </p>
          </m.blockquote>
        </div>
      </section>
    </LazyMotion>
  );
}
