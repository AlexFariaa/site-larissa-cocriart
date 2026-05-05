"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SERVICES, type Service } from "@/lib/mock-services";

/* ── Brand SVG Icons (inline, identidade da marca) ─────── */

function IconSocialMedia() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Smartphone body */}
      <rect x="12" y="4" width="20" height="32" rx="4" stroke="#d29ee1" strokeWidth="1.8" />
      <rect x="18" y="33" width="8" height="1.5" rx="0.75" fill="#d29ee1" />
      {/* Signal waves */}
      <path d="M26 14c1.5 1 2.5 2.6 2.5 4.5S27.5 22 26 23" stroke="#c56428" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M28.5 11.5c2.8 1.8 4.5 4.8 4.5 8s-1.7 6.2-4.5 8" stroke="#c56428" strokeWidth="1.6" strokeLinecap="round" opacity=".55" />
      {/* Screen lines */}
      <line x1="16" y1="16" x2="24" y2="16" stroke="#d29ee1" strokeWidth="1.4" strokeLinecap="round" opacity=".6" />
      <line x1="16" y1="20" x2="21" y2="20" stroke="#d29ee1" strokeWidth="1.4" strokeLinecap="round" opacity=".4" />
    </svg>
  );
}

function IconContent() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Camera body */}
      <rect x="6" y="13" width="32" height="22" rx="4" stroke="#d29ee1" strokeWidth="1.8" />
      {/* Lens */}
      <circle cx="22" cy="24" r="7" stroke="#d29ee1" strokeWidth="1.8" />
      <circle cx="22" cy="24" r="3.5" fill="#6d1f8d" opacity=".6" />
      {/* Flash bump */}
      <path d="M18 13v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" stroke="#d29ee1" strokeWidth="1.6" />
      {/* Clapperboard stripe */}
      <line x1="7" y1="17" x2="37" y2="17" stroke="#c56428" strokeWidth="1.4" opacity=".55" />
      {/* Flash indicator */}
      <circle cx="33" cy="18.5" r="1.5" fill="#c56428" />
    </svg>
  );
}

function IconIdentity() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Palette */}
      <path
        d="M22 6c-8.8 0-16 7.2-16 16 0 4.8 2.1 9.1 5.5 12 1.2 1 2.8.4 3.2-.9.6-2.4 2.8-4.1 5.3-4.1 3.1 0 5.6 2.5 5.6 5.6 0 1.5 1.3 2.4 2.7 1.9C33.7 34.5 38 28.7 38 22c0-8.8-7.2-16-16-16z"
        stroke="#d29ee1"
        strokeWidth="1.8"
      />
      {/* Color dots */}
      <circle cx="14" cy="20" r="2.2" fill="#c56428" />
      <circle cx="18" cy="13" r="2.2" fill="#4187af" />
      <circle cx="26" cy="12" r="2.2" fill="#d29ee1" />
      <circle cx="31" cy="18" r="2.2" fill="#6d1f8d" />
      {/* Brush handle */}
      <line x1="30" y1="30" x2="38" y2="38" stroke="#c56428" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconConsulting() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Brain outline — two lobes */}
      <path
        d="M22 10c-1.5-3-5.5-4-8-1.5C11 11 11 15 13 17c-3 1-4 5-2 7 1 1.2 2.5 1.8 4 1.8V30h14v-4.2c1.5 0 3-.6 4-1.8 2-2 1-6-2-7 2-2 2-6-1-8.5C27.5 6 23.5 7 22 10z"
        stroke="#d29ee1"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Centre line */}
      <line x1="22" y1="11" x2="22" y2="30" stroke="#6d1f8d" strokeWidth="1.2" strokeDasharray="2 2" />
      {/* Bulb base */}
      <rect x="17" y="30" width="10" height="2.5" rx="1.25" fill="#d29ee1" opacity=".7" />
      <rect x="18.5" y="33" width="7" height="2" rx="1" fill="#d29ee1" opacity=".45" />
      {/* Filament spark */}
      <path d="M20 20l2-4 2 4" stroke="#c56428" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ICON_MAP: Record<Service["iconKey"], React.FC> = {
  "social-media": IconSocialMedia,
  content:        IconContent,
  identity:       IconIdentity,
  consulting:     IconConsulting,
};

/* ── Animation variants ─────────────────────────────────── */

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  },
};

const headingVariants = {
  hidden:  { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  },
};

/* ── Service Card ───────────────────────────────────────── */

function ServiceCard({ service }: { service: Service }) {
  const Icon = ICON_MAP[service.iconKey];
  return (
    <div
      className="group flex flex-col gap-5 rounded-2xl p-7 transition-shadow duration-300 hover:shadow-glow-purple"
      style={{
        background: "rgba(109,31,141,0.12)",
        border: "1px solid rgba(210,158,225,0.18)",
      }}
    >
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-bg/60">
        <Icon />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-lg font-semibold text-white group-hover:text-brand-lilac transition-colors duration-200">
          {service.title}
        </h3>
        <p className="font-body text-sm leading-relaxed text-brand-lilac/65">
          {service.description}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-2">
        <Button
          variant="ghost"
          href={`/servicos/${service.slug}`}
          className="text-xs px-4 py-2"
        >
          Saiba Mais
        </Button>
      </div>
    </div>
  );
}

/* ── Section Component ──────────────────────────────────── */

export function ServicesPreview() {
  return (
    <LazyMotion features={domAnimation} strict>
      <section
        className="relative overflow-hidden bg-brand-deeper px-6 py-24 sm:py-32"
        aria-labelledby="services-preview-heading"
      >
        {/* Subtle radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse at center, #4187af 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Heading */}
          <m.div
            className="mb-14 text-center"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
              Serviços
            </p>
            <h2
              id="services-preview-heading"
              className="font-heading text-4xl font-bold text-white sm:text-5xl"
            >
              Como Posso Ajudar
            </h2>
            <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-brand-orange" aria-hidden />
          </m.div>

          {/* Cards grid: 4 cols desktop / 2 tablet / 1 mobile */}
          <m.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {SERVICES.map((service) => (
              <m.div key={service.id} variants={cardVariants}>
                <ServiceCard service={service} />
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
