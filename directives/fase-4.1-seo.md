# Diretiva — Fase 4.1: SEO Técnico

## Objetivo
Implementar SEO técnico completo: sitemap dinâmico, robots.txt, OG image padrão, structured data e auditoria de meta tags em todas as páginas.

## Deliverables

### 1. `app/sitemap.ts`
Sitemap dinâmico incluindo:
- Páginas estáticas: /, /sobre, /portfolio, /servicos, /servicos/social-media, /servicos/consultoria, /servicos/audiovisual, /contato
- Posts do blog: buscar slugs via `getAllPosts()` do lib/cms.ts
- Prioridades: Home 1.0, Serviços 0.9, Portfólio 0.8, Blog posts 0.7, Sobre/Contato 0.6
- changeFrequency: Home/Blog 'weekly', demais 'monthly'

### 2. `app/robots.ts`
```
User-agent: *
Allow: /
Sitemap: ${NEXT_PUBLIC_SITE_URL}/sitemap.xml
```

### 3. `app/opengraph-image.tsx`
- OG image padrão gerada via Next.js ImageResponse
- Fundo #2d0e44, logo tipográfico CoCriart, tagline "Marketing Holístico"
- Dimensões: 1200x630px

### 4. Metadata global no `app/layout.tsx`
- title: { template: '%s | CoCriart', default: 'CoCriart — Marketing Holístico' }
- description padrão: "CoCriart: Marketing Holístico que une estratégia digital com consciência e propósito. Desperte & Cocrie."
- openGraph: type 'website', locale 'pt_BR', siteName 'CoCriart'
- twitter: card 'summary_large_image'
- metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL)

### 5. JSON-LD Organization na Home
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CoCriart",
  "description": "Marketing Holístico",
  "url": "[SITE_URL]",
  "sameAs": ["https://instagram.com/_cocriart_"]
}
```

### 6. Auditoria de meta tags
Verificar que TODAS as páginas têm:
- `<title>` único (não duplicado)
- `<meta name="description">` com 150-160 chars
- OG title, OG description, OG image

## Constraints
- metadataBase obrigatório para OG images absolutas
- Sitemap deve funcionar mesmo com CMS offline (try/catch nos posts)
- JSON-LD em `<script type="application/ld+json">` no `<head>`

## Critério de Sucesso
/sitemap.xml acessível e válido. /robots.txt acessível. OG image aparece ao compartilhar URL no WhatsApp. Nenhuma página com title duplicado. JSON-LD válido no Rich Results Test.

## Aprendizados
<!-- Preencher após execução -->
