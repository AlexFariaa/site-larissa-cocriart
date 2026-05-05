"use client";

import Image from "next/image";
import { m, LazyMotion, domAnimation } from "framer-motion";

export function AboutHero() {
  return (
    <LazyMotion features={domAnimation} strict>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Imagem de fundo */}
        <Image
          src="https://images.unsplash.com/photo-1518893883800-45cd0954574b?w=1600&q=80"
          alt="Cristais e luzes neon — atmosfera mística CoCriart"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay escuro */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(45, 14, 68, 0.82)" }}
        />

        {/* Conteúdo */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading text-5xl md:text-7xl font-bold text-white mb-4"
          >
            A CoCriart
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="font-signature text-3xl md:text-4xl text-[#d29ee1]"
          >
            Marketing com Alma
          </m.p>
        </div>

        {/* Degradê para a próxima seção */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background: "linear-gradient(to bottom, transparent, #2d0e44)",
          }}
        />
      </section>
    </LazyMotion>
  );
}
