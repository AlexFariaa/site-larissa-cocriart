import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contato | CoCriart",
  description:
    "Fale com a CoCriart pelo WhatsApp, Instagram ou e-mail. Solicite seu orçamento e descubra como o Marketing Holístico pode transformar sua marca.",
  openGraph: {
    title: "Contato | CoCriart",
    description:
      "Fale com a CoCriart pelo WhatsApp, Instagram ou e-mail. Solicite seu orçamento e descubra como o Marketing Holístico pode transformar sua marca.",
    type: "website",
  },
};

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511945051940";
const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/_cocriart_";

const WHATSAPP_GENERAL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Olá! Vim pelo site e quero saber mais sobre os serviços da CoCriart."
)}`;
const WHATSAPP_ORCAMENTO = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Olá! Vim pelo site e gostaria de solicitar um orçamento para a CoCriart."
)}`;

/* ─── Ícones SVG ───────────────────────────────────────── */

function WhatsappIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.1" fill="currentColor" strokeWidth="3" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function ServicesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M12 12v9" />
      <path d="m12 12 8-4.5" />
      <path d="m12 12-8-4.5" />
    </svg>
  );
}

function BlogIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16v4H4z" />
      <path d="M4 12h10" />
      <path d="M4 16h7" />
      <rect x="2" y="2" width="20" height="20" rx="3" />
    </svg>
  );
}

/* ─── Componentes de Card ──────────────────────────────── */

function ContactCard({
  icon,
  label,
  detail,
  cta,
  href,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  detail: string;
  cta: string;
  href: string;
  accent: string;
}) {
  return (
    <div
      className="flex flex-col gap-5 rounded-[28px] border border-[#d29ee1]/20 bg-[#1a0829]/80 p-8 text-center transition-shadow duration-300 hover:shadow-[0_0_28px_0_rgba(109,31,141,0.25)]"
    >
      <div
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
        style={{ background: accent, boxShadow: `0 0 14px 2px ${accent}55` }}
      >
        <span className="text-white">{icon}</span>
      </div>
      <div>
        <p className="font-heading text-xl font-bold text-white">{label}</p>
        <p className="mt-1 font-body text-sm text-white/60">{detail}</p>
      </div>
      <Button variant="ghost" href={href} target="_blank" className="mt-auto w-full justify-center border-white/25 text-white hover:bg-white/10">
        {cta}
      </Button>
    </div>
  );
}

function QuickLink({
  href,
  icon,
  label,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}) {
  const sharedClass =
    "group flex items-center gap-3 rounded-2xl border border-[#d29ee1]/20 bg-[#1a0829]/70 px-5 py-4 text-white/85 font-body font-medium transition-all duration-250 hover:border-[#d29ee1]/45 hover:bg-[#6d1f8d]/20 hover:text-white";

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={sharedClass}>
      <span className="text-[#d29ee1]">{icon}</span>
      {label}
    </a>
  ) : (
    <Link href={href} className={sharedClass}>
      <span className="text-[#d29ee1]">{icon}</span>
      {label}
    </Link>
  );
}

/* ─── Page ─────────────────────────────────────────────── */

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#2d0e44] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Hero compacto */}
        <div className="mb-16 text-center">
          <p className="mb-4 font-signature text-2xl text-[#d29ee1]">entre em contato</p>
          <h1 className="font-heading text-5xl font-bold text-white md:text-6xl">
            Vamos <span className="text-[#c56428]">Cocriart?</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-body text-lg leading-8 text-white/70">
            Escolha o canal mais prático para você. Estamos prontos para construir algo extraordinário juntos.
          </p>
        </div>

        {/* Cards de contato */}
        <section className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-3" aria-label="Canais de contato">
          <ContactCard
            icon={<WhatsappIcon />}
            label="WhatsApp"
            detail="+55 (11) 94505-1940"
            cta="Iniciar Conversa"
            href={WHATSAPP_GENERAL}
            accent="#25D366"
          />
          <ContactCard
            icon={<InstagramIcon />}
            label="Instagram"
            detail="@_cocriart_"
            cta="Ver Perfil"
            href={instagramUrl}
            accent="#6d1f8d"
          />
          <ContactCard
            icon={<EmailIcon />}
            label="E-mail"
            detail="contato@cocriart.com.br"
            cta="Enviar E-mail"
            href="mailto:contato@cocriart.com.br"
            accent="#4187af"
          />
        </section>

        {/* Seção Links Rápidos / Link-in-Bio */}
        <section className="mb-14 rounded-[32px] border border-[#d29ee1]/20 bg-[#1a0829]/60 px-8 py-10 shadow-[0_0_32px_0_rgba(45,14,68,0.45)]" aria-label="Links rápidos">
          <h2 className="mb-6 font-heading text-3xl font-bold text-white text-center">
            Links <span className="text-[#d29ee1]">rápidos</span>
          </h2>

          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <QuickLink href="/portfolio" icon={<PortfolioIcon />} label="Ver Portfólio" />
            <QuickLink href="/servicos" icon={<ServicesIcon />} label="Conhecer Serviços" />
            <QuickLink href="/blog" icon={<BlogIcon />} label="Ler o Blog" />
          </div>

          {/* CTA principal */}
          <div className="flex justify-center">
            <Button
              variant="primary"
              href={WHATSAPP_ORCAMENTO}
              target="_blank"
              className="px-10 py-4 text-base"
            >
              Pedir Orçamento
            </Button>
          </div>
        </section>

        {/* Assinatura final */}
        <div className="text-center">
          <p className="font-signature text-3xl text-[#d29ee1] md:text-4xl">
            Desperte &amp; Cocrie.
          </p>
        </div>

      </div>
    </main>
  );
}
