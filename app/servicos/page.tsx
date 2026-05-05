"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import Link from "next/link";
import { SERVICES } from "@/lib/mock-services";

export default function ServicesPage() {
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
            Serviços
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="font-signature text-2xl md:text-3xl text-[#d29ee1]"
          >
            Soluções estratégicas com consciência
          </m.p>
        </section>

        {/* Grid de Serviços */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => (
              <m.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/servicos/${service.slug}`}>
                  <m.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-2xl h-full cursor-pointer"
                    style={{
                      background: "rgba(109,31,141,0.15)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(210,158,225,0.2)",
                    }}
                  >
                    {/* Ícone */}
                    <div className="h-32 w-full flex items-center justify-center bg-gradient-to-b from-[#6d1f8d]/20 to-transparent">
                      <ServiceIcon iconKey={service.iconKey} />
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6">
                      <h2 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-[#d29ee1] transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-white/70 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-[#c56428] text-sm font-semibold">
                        Saiba Mais
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className="group-hover:translate-x-1 transition-transform"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </div>

                    {/* Glow border */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ boxShadow: "0 0 24px 4px #6d1f8d80" }}
                      aria-hidden
                    />
                  </m.div>
                </Link>
              </m.div>
            ))}
          </div>
        </section>
      </main>
    </LazyMotion>
  );
}

interface ServiceIconProps {
  iconKey: "social-media" | "content" | "identity" | "consulting";
}

function ServiceIcon({ iconKey }: ServiceIconProps) {
  const iconProps = {
    width: "56",
    height: "56",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#d29ee1",
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (iconKey) {
    case "social-media":
      return (
        <svg {...iconProps} aria-label="Gestão de Redes">
          <circle cx="12" cy="12" r="1" fill="#d29ee1" />
          <circle cx="19" cy="12" r="1" fill="#d29ee1" />
          <circle cx="5" cy="12" r="1" fill="#d29ee1" />
          <path d="M12 1v22" />
          <path d="M1 12h22" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
    case "content":
      return (
        <svg {...iconProps} aria-label="Produção de Conteúdo">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 3v18" />
          <circle cx="15" cy="15" r="2" fill="#d29ee1" />
        </svg>
      );
    case "identity":
      return (
        <svg {...iconProps} aria-label="Identidade Visual">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      );
    case "consulting":
      return (
        <svg {...iconProps} aria-label="Consultoria">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      );
    default:
      return null;
  }
}
