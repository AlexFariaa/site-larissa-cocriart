"use client";

import { useState } from "react";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { PORTFOLIO_ITEMS, CATEGORY_LABELS } from "@/lib/mock-portfolio";
import type { PortfolioCategory, PortfolioItem } from "@/lib/mock-portfolio";
import { PortfolioCard, Lightbox } from "@/components/ui/PortfolioCard";

// Note: metadata must be in a server component — see app/portfolio/metadata.ts
// This page is client for filter state. We export metadata separately.

type FilterKey = "all" | PortfolioCategory;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "identidade-visual", label: CATEGORY_LABELS["identidade-visual"] },
  { key: "producao-de-conteudo", label: CATEGORY_LABELS["producao-de-conteudo"] },
  { key: "gestao-de-redes", label: CATEGORY_LABELS["gestao-de-redes"] },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  const filtered =
    activeFilter === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <LazyMotion features={domAnimation} strict>
      <main className="min-h-screen bg-[#2d0e44]">
        {/* Hero */}
        <section className="pt-32 pb-12 px-6 text-center">
          <m.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="font-heading text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Portfólio
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="font-signature text-2xl md:text-3xl text-[#d29ee1]"
          >
            Trabalhos com consciência e estética
          </m.p>
        </section>

        {/* Filtros */}
        <section className="px-6 pb-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map(({ key, label }) => {
            const isActive = activeFilter === key;
            return (
              <m.button
                key={key}
                onClick={() => setActiveFilter(key)}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? "bg-[#c56428] border-[#c56428] text-white"
                    : "bg-transparent border-[#d29ee1]/40 text-white/70 hover:border-[#d29ee1] hover:text-white"
                }`}
              >
                {label}
              </m.button>
            );
          })}
        </section>

        {/* Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              /* Estado vazio */
              <m.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d29ee1"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  className="mb-6 opacity-50"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                <p className="text-white/60 text-lg mb-4">
                  Nenhum trabalho nesta categoria ainda.
                </p>
                <a
                  href={process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/_cocriart_"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d29ee1] underline underline-offset-4 hover:text-white transition-colors"
                >
                  Ver mais no Instagram
                </a>
              </m.div>
            ) : (
              <m.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((item, i) => (
                  <m.div
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                  >
                    <PortfolioCard
                      item={item}
                      onOpenLightbox={setLightboxItem}
                    />
                  </m.div>
                ))}
              </m.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* Lightbox */}
      <Lightbox
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />
    </LazyMotion>
  );
}
