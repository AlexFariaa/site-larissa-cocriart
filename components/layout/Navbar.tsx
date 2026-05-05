"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha menu ao navegar
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <LazyMotion features={domAnimation} strict>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                backgroundColor: "rgba(29, 8, 41, 0.85)",
                borderBottom: "1px solid rgba(210, 158, 225, 0.2)",
              }
            : {
                backgroundColor: "transparent",
              }
        }
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-baseline gap-0.5 select-none">
            <span className="font-heading text-2xl font-bold text-white tracking-tight">
              CoCRI
            </span>
            <span className="font-signature text-2xl text-[#d29ee1] leading-none">
              art
            </span>
          </Link>

          {/* Links Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-[#c56428] ${
                      isActive
                        ? "text-[#c56428]"
                        : "text-white/80"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contato"
              className="px-5 py-2 rounded-full text-sm font-semibold bg-[#c56428] text-white hover:bg-[#a0501f] transition-colors duration-200"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Hamburger Mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <m.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-0.5 bg-white rounded origin-center"
            />
            <m.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-6 h-0.5 bg-white rounded"
            />
            <m.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-0.5 bg-white rounded origin-center"
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <m.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                backgroundColor: "rgba(29, 8, 41, 0.95)",
                borderBottom: "1px solid rgba(210, 158, 225, 0.2)",
              }}
            >
              <ul className="flex flex-col px-6 py-4 gap-4">
                {NAV_LINKS.map(({ href, label }) => {
                  const isActive =
                    href === "/" ? pathname === "/" : pathname.startsWith(href);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`block text-base font-medium py-1 transition-colors duration-200 hover:text-[#c56428] ${
                          isActive ? "text-[#c56428]" : "text-white/90"
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-2 border-t border-white/10">
                  <Link
                    href="/contato"
                    className="block w-full text-center px-5 py-2.5 rounded-full text-sm font-semibold bg-[#c56428] text-white hover:bg-[#a0501f] transition-colors duration-200"
                  >
                    Fale Conosco
                  </Link>
                </li>
              </ul>
            </m.div>
          )}
        </AnimatePresence>
      </header>
    </LazyMotion>
  );
}
