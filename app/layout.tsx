import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script, Quicksand } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CustomCursor } from "@/components/layout/CustomCursor";

/*
 * Font configuration via next/font (no external @import — prevents FOUT).
 *
 * Substitutes (definitivas serão swap. via next/font/local quando entregues):
 *   Joly Text    → Playfair Display  (serifada, autoridade)
 *   Kimberly     → Dancing Script    (cursiva, toque humano)
 *   Quicksand    → Quicksand         (geométrica, legível — mesmo nome)
 */
const heading = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-heading-var",
});

const signature = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-signature-var",
});

const body = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body-var",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cocriart.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CoCriart — Marketing Holístico",
    template: "%s | CoCriart",
  },
  description:
    "CoCriart: Marketing Holístico que une estratégia digital com consciência e propósito. Desperte & Cocrie.",
  keywords: ["marketing holístico", "social media", "audiovisual", "design", "CoCriart"],
  authors: [{ name: "CoCriart" }],
  openGraph: {
    siteName: "CoCriart",
    locale: "pt_BR",
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    site: "@cocriart",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${heading.variable} ${signature.variable} ${body.variable}`}
    >
      <body className="font-body">
        <ScrollProgress />
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
        <CustomCursor />
      </body>
    </html>
  );
}
