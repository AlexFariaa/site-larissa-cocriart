"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Button } from "@/components/ui/Button";

const contentVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  },
};

const quoteVariants = {
  hidden:  { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  },
};

export function AboutTeaser() {
  return (
    <LazyMotion features={domAnimation} strict>
      {/*
       * Fundo #6d1f8d — contraste intencional com o #2d0e44 das demais seções.
       * Sem noise overlay conforme a diretiva.
       */}
      <section
        className="relative overflow-hidden px-6 py-24 sm:py-32"
        style={{ background: "#6d1f8d" }}
        aria-labelledby="about-teaser-heading"
      >
        {/* Decorative radial light */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse at center, #d29ee1 0%, transparent 65%)" }}
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
          {/* Eyebrow */}
          <m.p
            className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-white/60"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            Filosofia
          </m.p>

          {/* Main quote */}
          <m.blockquote
            variants={quoteVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <p
              id="about-teaser-heading"
              className="font-heading text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl"
            >
              &ldquo;Sem consciência, o marketing vai te levar mais rápido
              para o lugar errado.&rdquo;
            </p>
          </m.blockquote>

          {/* Divider */}
          <m.div
            className="h-[2px] w-12 rounded-full bg-brand-orange"
            aria-hidden
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          />

          {/* Subtitle */}
          <m.p
            className="font-body text-base leading-relaxed text-white/70 sm:text-lg"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            Conheça a filosofia por trás do Marketing Holístico.
          </m.p>

          {/* CTA */}
          <m.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <Button variant="primary" href="/sobre">
              Conheça a CoCriart
            </Button>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
