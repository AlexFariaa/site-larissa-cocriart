"use client";

import Link from "next/link";
import { NAV_LINKS, FOOTER_SERVICE_LINKS } from "@/lib/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const pageLinks = NAV_LINKS.filter(({ href }) => href !== "/");

  return (
    <footer className="relative bg-[#1a0829] text-white/80">
      {/* Linha decorativa superior: gradiente roxo → laranja */}
      <div
        className="h-0.5 w-full"
        style={{
          background: "linear-gradient(to right, #6d1f8d, #c56428)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-baseline gap-0.5 mb-3">
              <span className="font-heading text-2xl font-bold text-white tracking-tight">
                CoCRI
              </span>
              <span className="font-signature text-2xl text-[#d29ee1] leading-none">
                art
              </span>
            </Link>
            <p className="text-sm text-white/60 mb-5 max-w-xs">
              Marketing Holístico que une estratégia digital, criatividade e consciência para despertar marcas.
            </p>
            {/* Redes Sociais */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/_cocriart_"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram CoCriart"
                className="text-white/60 hover:text-[#d29ee1] transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511945051940"}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp CoCriart"
                className="text-white/60 hover:text-[#25D366] transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Páginas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Páginas
            </h3>
            <ul className="space-y-2.5">
              {pageLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-[#d29ee1] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Serviços
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_SERVICE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-[#d29ee1] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            © {currentYear} CoCriart. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
