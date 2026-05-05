"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { getRecentPortfolioItems } from "@/lib/mock-portfolio";

/* ── Animation variants ─────────────────────────────────── */

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

const headingVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

/* ── Component ──────────────────────────────────────────── */

export function PortfolioPreview() {
  return (
    <LazyMotion features={domAnimation} strict>
      <section
        id="portfolio-preview"
        className="relative overflow-hidden bg-brand-bg px-6 py-24 sm:py-32"
        aria-labelledby="portfolio-preview-heading"
      >
        {/* Subtle radial glow behind grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/4 rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse at center, #6d1f8d 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-6xl">
          {/* ── Section heading ───────────────────── */}
          <m.div
            className="mb-14 text-center"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
              Portfólio
            </p>
            <h2
              id="portfolio-preview-heading"
              className="font-heading text-4xl font-bold text-white sm:text-5xl"
            >
              Trabalhos Recentes
            </h2>
            {/* Decorative orange line */}
            <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-brand-orange" aria-hidden />
          </m.div>

          {/* ── Cards grid ────────────────────────── */}
          <m.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {getRecentPortfolioItems(6).map((item) => (
              <m.div key={item.id} variants={cardVariants}>
                <PortfolioCard item={item} />
              </m.div>
            ))}
          </m.div>

          {/* ── CTA ───────────────────────────────── */}
          <m.div
            className="mt-14 flex justify-center"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <Button variant="primary" href="/portfolio">
              Ver Portfólio Completo
            </Button>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
