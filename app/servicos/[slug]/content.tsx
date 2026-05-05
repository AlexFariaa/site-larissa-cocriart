"use client";

import { useState } from "react";
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Service } from "@/lib/mock-services";

interface ServicePageContentProps {
  service: Service;
}

export default function ServicePageContent({
  service,
}: ServicePageContentProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(service.faqs[0]?.id ?? null);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511945051940";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`;

  // JSON-LD Schema para Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.descriptionLong || service.description,
    provider: {
      "@type": "Organization",
      name: "CoCriart",
    },
    areaServed: "BR",
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <main className="min-h-screen bg-[#2d0e44]">
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Hero */}
        <section className="pt-32 pb-24 px-6 text-center relative overflow-hidden bg-[#2d0e44]">
          {/* Fundo decorativo */}
          <div
            className="absolute inset-0 -z-10 opacity-20"
            style={{
              background: `linear-gradient(135deg, #6d1f8d 0%, #d29ee1 100%)`,
            }}
          />

          <m.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="font-heading text-5xl md:text-6xl font-bold text-white mb-2"
          >
            {service.title}
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-signature text-2xl md:text-3xl text-[#d29ee1] mb-6"
          >
            {service.subtitle}
          </m.p>
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            {service.descriptionLong || service.description}
          </m.p>
        </section>

        {/* 2. O que é */}
        <section className="bg-[#1a0829] py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="font-heading text-4xl font-bold text-white mb-8">
                O que é <span className="text-[#d29ee1]">{service.title}</span>
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  {service.descriptionLong || service.description}
                </p>
                <p className="text-white/70 text-base leading-relaxed">
                  Na CoCriart, entendemos que todo serviço de marketing deve estar
                  alinhado ao propósito da sua marca. Por isso, trabalhamos com
                  consciência, escuta ativa e cocriação constante com nossos
                  clientes.
                </p>
              </div>
            </m.div>
          </div>
        </section>

        {/* 3. Para quem é */}
        <section className="bg-[#2d0e44] py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.4 }}
              className="font-heading text-4xl font-bold text-white mb-12 text-center"
            >
              Para quem <span className="text-[#d29ee1]">é</span>
            </m.h2>

            <div className="max-w-2xl mx-auto flex flex-col gap-6">
              {service.idealFor.map((profile, index) => (
                <m.div
                  key={profile.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="flex items-start gap-5"
                >
                  {/* Ícone check */}
                  <div
                    className="flex-shrink-0 mt-1 flex h-8 w-8 items-center justify-center rounded-full"
                    style={{
                      background: "#6d1f8d",
                      boxShadow: "0 0 10px 2px #6d1f8d60",
                    }}
                    aria-hidden
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {/* Texto */}
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-1">{profile.title}</h3>
                    <p className="font-body text-white/70 leading-relaxed text-sm">{profile.description}</p>
                  </div>
                </m.div>
              ))}
            </div>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="mt-10 flex justify-center"
            >
              <Button variant="whatsapp" href={whatsappUrl} target="_blank" className="px-8 py-4 text-base">
                Falar com especialista
              </Button>
            </m.div>
          </div>
        </section>

        {/* 4. O que você recebe */}
        <section className="bg-[#1a0829] py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="font-heading text-4xl font-bold text-white mb-12 text-center"
            >
              O que você <span className="text-[#c56428]">recebe</span>
            </m.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.whatYouGet.map((item, i) => (
                <m.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="group"
                >
                  <div
                    className="h-full rounded-2xl p-6 transition-all duration-300 group-hover:shadow-lg"
                    style={{
                      background: "rgba(109,31,141,0.1)",
                      border: "1px solid rgba(210,158,225,0.2)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#6d1f8d]/30 flex items-center justify-center mb-4 group-hover:bg-[#c56428]/30 transition-colors">
                      <span className="text-[#d29ee1] font-bold text-lg">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-[#d29ee1] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CTA intermediário */}
        <section className="bg-[#6d1f8d] py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-center"
            >
              <p className="font-heading text-3xl text-white leading-snug mb-8">
                {service.ctaMidline}
              </p>
              <Button variant="whatsapp" href={whatsappUrl} target="_blank" className="px-8 py-4 text-base">
                Pedir Orçamento no WhatsApp
              </Button>
            </m.div>
          </div>
        </section>

        {/* 6. Como funciona */}
        <section className="bg-[#2d0e44] py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="font-heading text-4xl font-bold text-white mb-12 text-center"
            >
              Como <span className="text-[#6d1f8d]">funciona</span>
            </m.h2>

            <div className="relative">
              {/* Linha vertical — visível apenas no mobile */}
              <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6d1f8d] to-[#c56428] opacity-50" />

              {/* Steps */}
              <div className="space-y-8 md:space-y-12">
                {service.process.map((step, i) => (
                  <m.div
                    key={step.number}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-start gap-6 md:gap-8"
                  >
                    {/* Bolinha */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg"
                        style={{
                          background: `linear-gradient(135deg, #6d1f8d, #c56428)`,
                        }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 pt-1">
                      <h3 className="font-heading text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </m.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Resultados esperados */}
        <section className="bg-[#1a0829] py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.4 }}
              className="font-heading text-4xl font-bold text-white mb-12 text-center"
            >
              Resultados <span className="text-[#c56428]">esperados</span>
            </m.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.expectedResults.map((result, index) => (
                <m.div
                  key={result.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(45,14,68,0.42)",
                    border: "1px solid rgba(210,158,225,0.2)",
                  }}
                >
                  <div className="mb-4 inline-flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c56428]/25 text-[#d29ee1] font-semibold">
                      {index + 1}
                    </span>
                    <ResultIcon icon={result.icon} />
                  </div>
                  <h3 className="font-heading text-xl text-white mb-2">{result.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{result.description}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="bg-[#2d0e44] py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.4 }}
              className="font-heading text-4xl font-bold text-white mb-12 text-center"
            >
              Perguntas <span className="text-[#d29ee1]">frequentes</span>
            </m.h2>

            <div className="space-y-4">
              {service.faqs.map((faq, index) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <m.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="rounded-2xl border border-[#d29ee1]/25 bg-[#1a0829]/60 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading text-white text-xl">{faq.question}</span>
                      <span className="text-[#d29ee1] text-xl">{isOpen ? "−" : "+"}</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <m.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-6 text-white/75 leading-relaxed">{faq.answer}</div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 9. CTA final */}
        <section className="py-24 px-4 bg-gradient-to-br from-[#6d1f8d] to-[#2d0e44]">
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-2xl mx-auto text-center"
            style={{
              background: "rgba(45,14,68,0.55)",
              border: "1px solid rgba(210,158,225,0.3)",
              borderRadius: "24px",
              padding: "56px 24px",
            }}
          >
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Pronta para <span className="text-[#d29ee1]">dar o próximo passo</span>?
            </h2>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              {service.ctaFinalLine}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="whatsapp" href={whatsappUrl} target="_blank" className="px-10 py-4 text-base w-full sm:w-auto">
                Pedir Orçamento no WhatsApp
              </Button>
              <Button variant="ghost" href="/servicos" className="px-8 py-4 text-base w-full sm:w-auto border-white/40 text-white hover:bg-white/10">
                Ver outros serviços
              </Button>
            </div>
          </m.div>
        </section>
      </main>
    </LazyMotion>
  );
}

function ResultIcon({ icon }: { icon: "growth" | "clarity" | "consistency" }) {
  if (icon === "growth") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c56428" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 16l5-5 4 4 7-7" />
        <path d="M20 8v5h-5" />
      </svg>
    );
  }

  if (icon === "clarity") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c56428" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M12 7v10" />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c56428" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 12h8" />
      <path d="M8 8h8" />
      <path d="M8 16h8" />
    </svg>
  );
}
