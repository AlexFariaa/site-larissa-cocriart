import { Hero } from "@/components/sections/Hero";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { HomeContactCTA } from "@/components/sections/HomeContactCTA";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cocriart.com.br";
const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/_cocriart_";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CoCriart",
  description: "Marketing Holístico que une estratégia digital com consciência e propósito.",
  url: SITE_URL,
  sameAs: [INSTAGRAM_URL],
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <PortfolioPreview />
      <ServicesPreview />
      <AboutTeaser />
      <InstagramFeed />
      <HomeContactCTA />
    </main>
  );
}

