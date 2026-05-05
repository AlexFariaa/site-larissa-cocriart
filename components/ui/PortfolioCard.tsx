"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import type { PortfolioItem } from "@/lib/mock-portfolio";
import { CATEGORY_LABELS } from "@/lib/mock-portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
  onOpenLightbox?: (item: PortfolioItem) => void;
}

export function PortfolioCard({ item, onOpenLightbox }: PortfolioCardProps) {
  const [videoOpen, setVideoOpen] = useState(false);
  const label = CATEGORY_LABELS[item.category];

  const handleClick = () => {
    if (item.type === "image") {
      onOpenLightbox?.(item);
    } else {
      setVideoOpen(true);
    }
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-2xl cursor-pointer"
        style={{
          background: "rgba(109,31,141,0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(210,158,225,0.2)",
        }}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        aria-label={`Ver projeto: ${item.title}`}
      >
        {/* Imagem / Thumbnail */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {videoOpen && item.videoUrl ? (
            <iframe
              src={`${item.videoUrl}?autoplay=1`}
              title={item.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay hover */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "rgba(45,14,68,0.65)" }}
                aria-hidden
              >
                {item.type === "video" ? (
                  /* Ícone play */
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c56428]/90">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                ) : (
                  /* Ícone lupa */
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 border border-white/30">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-widest text-[#c56428]">
            {label}
          </p>
          <h3 className="font-heading text-base font-semibold leading-snug text-white transition-colors duration-200 group-hover:text-[#d29ee1]">
            {item.title}
          </h3>
        </div>

        {/* Glow border */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: "0 0 24px 4px #6d1f8d80" }}
          aria-hidden
        />
      </m.div>
    </LazyMotion>
  );
}

/* ─────────────────────────────────────────────────────────
   Lightbox — modal acessível para imagens
───────────────────────────────────────────────────────── */
interface LightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export function Lightbox({ item, onClose }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!item) return;
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [item, handleKey]);

  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence>
        {item && (
          <m.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            style={{ backgroundColor: "rgba(10,2,20,0.92)" }}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
          >
            {/* Botão fechar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Fechar"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Imagem */}
            <m.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={1200}
                height={900}
                className="h-auto w-full object-contain"
                priority
              />
              <div className="bg-[#1a0829]/90 p-4">
                <p className="text-xs text-[#c56428] uppercase tracking-widest mb-1">
                  {CATEGORY_LABELS[item.category]}
                </p>
                <p className="font-heading text-white text-lg">{item.title}</p>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

