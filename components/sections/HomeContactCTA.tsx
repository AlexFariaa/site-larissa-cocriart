"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Button } from "@/components/ui/Button";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511945051940";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais.`;

const contentVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function HomeContactCTA() {
  return (
    <LazyMotion features={domAnimation} strict>
      <section
        className="relative overflow-hidden px-6 py-24 sm:py-32"
        style={{ background: "linear-gradient(135deg, #6d1f8d 0%, #2d0e44 100%)" }}
        aria-labelledby="home-contact-cta-heading"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{ background: "radial-gradient(circle at 20% 30%, #d29ee1 0%, transparent 40%)" }}
        />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <m.p
            className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            Contato
          </m.p>

          <m.h2
            id="home-contact-cta-heading"
            className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            Pronta para despertar a sua marca?
          </m.h2>

          <m.p
            className="mt-5 max-w-2xl font-body text-base leading-relaxed text-white/75 sm:text-lg"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            Vamos cocriart juntos. Entre em contato e peça seu orçamento.
          </m.p>

          <m.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <Button variant="whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Pedir Orçamento no WhatsApp
            </Button>
            <Button variant="ghost" href="/servicos">
              Ver Serviços
            </Button>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
