"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform,
} from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

/* ── Particles config ───────────────────────────────────── */

function makeParticlesOptions(mobile: boolean) {
  return {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      number: { value: mobile ? 22 : 55, density: { enable: true } },
      color: { value: ["#6d1f8d", "#d29ee1", "#4187af"] as string[] },
      opacity: {
        value: { min: 0.08, max: 0.45 },
        animation: { enable: true, speed: 0.6, sync: false },
      },
      size: { value: { min: 1, max: 2.5 } },
      move: {
        enable: true,
        speed: 0.5,
        random: true,
        direction: "none" as const,
        outModes: { default: "out" as const },
      },
      links: { enable: false },
    },
    detectRetina: true,
  };
}

/* ── Animation variants ─────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 30 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

/* ── Component ──────────────────────────────────────────── */

export function Hero() {
  const [engineReady, setEngineReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const particlesOptions = useMemo(() => makeParticlesOptions(isMobile), [isMobile]);

  /* Parallax */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY   = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  /* Init tsParticles engine once */
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  /* Detect mobile for reduced particle count */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const scrollToPortfolio = useCallback(() => {
    document.getElementById("portfolio-preview")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <section
        ref={sectionRef}
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-brand-bg"
        aria-label="Hero — CoCriart"
      >
        {/* ── Aurora — 3 independent radial layers ─ */}
        <div aria-hidden className="aurora-layer-1 pointer-events-none absolute inset-0" />
        <div aria-hidden className="aurora-layer-2 pointer-events-none absolute inset-0" />
        <div aria-hidden className="aurora-layer-3 pointer-events-none absolute inset-0" />

        {/* ── Radial vignette (keeps text readable) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 45%, transparent 0%, #2d0e44 75%)",
          }}
        />

        {/* ── Particles ─────────────────────────── */}
        {engineReady && (
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <Particles
              id="hero-particles"
              className="h-full w-full"
              options={particlesOptions}
            />
          </div>
        )}

        {/* ── Main content (parallax) ───────────── */}
        <m.div
          className="relative z-10 flex flex-col items-center gap-7 px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          {/* Logo placeholder ────────────────────
              TODO: substituir por <Image> quando logo final for entregue */}
          <m.div variants={itemVariants}>
            <p className="mb-1 font-body text-xs uppercase tracking-[0.3em] text-brand-lilac/50">
              Marketing Holístico
            </p>
            <div className="leading-none">
              <span className="font-heading text-5xl font-bold text-white sm:text-6xl">
                CoCRI
              </span>
              <span className="font-signature text-5xl text-brand-lilac sm:text-6xl">
                art
              </span>
            </div>
          </m.div>

          {/* Slogan — staggered ──────────────────── */}
          <m.h1
            variants={itemVariants}
            className="flex flex-col items-center gap-2 leading-none"
          >
            <span className="font-heading text-5xl font-bold text-white drop-shadow-[0_0_18px_#6d1f8d] sm:text-7xl lg:text-[5.5rem]">
              Desperte
            </span>
            <span className="font-signature text-5xl text-brand-lilac sm:text-7xl lg:text-[5.5rem]">
              &amp; Cocrie.
            </span>
          </m.h1>

          {/* Subtitle ────────────────────────────── */}
          <m.p
            variants={itemVariants}
            className="max-w-md font-body text-base leading-relaxed text-brand-lilac/65 sm:text-lg"
          >
            Unimos estratégia digital, criatividade e consciência para despertar
            marcas que inspiram e transformam.
          </m.p>

          {/* CTA ─────────────────────────────────── */}
          <m.div variants={itemVariants}>
            <Button variant="ghost" onClick={scrollToPortfolio}>
              Ver Trabalhos
            </Button>
          </m.div>
        </m.div>

        {/* ── Scroll arrow (CSS bounce) ─────────── */}
        <button
          onClick={scrollToPortfolio}
          aria-label="Rolar para ver os trabalhos"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-lilac/50 transition-colors duration-200 hover:text-brand-lilac animate-bounce"
        >
          <ChevronDown size={30} strokeWidth={1.5} />
        </button>
      </section>
    </LazyMotion>
  );
}
