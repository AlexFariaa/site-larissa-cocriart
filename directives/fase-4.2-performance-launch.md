# Diretiva — Fase 4.2: Performance & Launch Checklist

## Objetivo
Auditoria de performance, ajustes finais, troca de logo placeholder (quando entregue) e validação completa do checklist de lançamento.

## Deliverables

### 1. Auditoria Lighthouse
- Rodar Lighthouse no Chrome DevTools em modo mobile (throttling 4G)
- Targets: Performance ≥ 80, SEO ≥ 90, Accessibility ≥ 85
- Documentar score antes e depois dos ajustes em `directives/fase-4.2-performance-launch.md` (seção Aprendizados)

### 2. Otimizações de Imagem
- Confirmar que TODAS as imagens usam `<Image>` do next/image (nunca `<img>`)
- Adicionar `priority` nas imagens above-the-fold (Hero, About Hero)
- Verificar `sizes` prop em imagens responsivas

### 3. Bundle Analysis
- Instalar e rodar `@next/bundle-analyzer`
- Identificar e corrigir qualquer dependência > 50KB desnecessária
- Confirmar que Framer Motion usa LazyMotion em todos os usos

### 4. Troca de Logo (condicional)
- **Se a cliente entregou o arquivo de logo:**
  - Adicionar em `public/images/logo.svg` (ou .png)
  - Substituir placeholder tipográfico em Navbar.tsx e Hero.tsx por `<Image src="/images/logo.svg" />`
  - Remover comentários `// TODO: substituir por <Image>`
- **Se a cliente NÃO entregou ainda:** manter placeholder, registrar como pendência

### 5. Variáveis de Produção no Netlify
Confirmar que estas variáveis estão configuradas no painel do Netlify (Settings → Environment Variables):
- NEXT_PUBLIC_WHATSAPP_NUMBER
- NEXT_PUBLIC_INSTAGRAM_URL
- NEXT_PUBLIC_SITE_URL (URL de produção, não localhost)
- CMS_API_URL
- CMS_API_TOKEN

### 6. Testes Cross-Browser/Device
- iOS Safari: navegação, menu mobile, animações
- Android Chrome: navegação, menu mobile, WhatsApp button
- Desktop Firefox: cursor customizado, animações

### 7. Checklist Final
- [ ] Lighthouse mobile Performance ≥ 80  ← **pendente: rodar DevTools após deploy no Netlify**
- [ ] Lighthouse mobile SEO ≥ 90           ← **pendente: rodar DevTools após deploy no Netlify**
- [ ] Lighthouse mobile Accessibility ≥ 85 ← **pendente: rodar DevTools após deploy no Netlify**
- [ ] LCP < 2.5s (throttling 4G)           ← **pendente: rodar DevTools após deploy no Netlify**
- [x] Zero erros no console em produção    — build 0 erros, 0 warnings de TypeScript/ESLint
- [ ] Todas as variáveis de ambiente no Netlify ← **pendente: configurar no painel Netlify** (ver seção abaixo)
- [x] /sitemap.xml acessível               — rota gerada em build (Next.js sitemap.ts)
- [x] /robots.txt acessível               — rota gerada em build (Next.js robots.ts)
- [ ] OG image aparece no WhatsApp ao compartilhar ← **pendente: testar após deploy**
- [x] WhatsApp abre com mensagem pré-preenchida  — confirmado em todas as CTAs
- [ ] Menu mobile funciona em iOS Safari e Android Chrome ← **pendente: teste manual**
- [x] Logo final substituída               — **pendente entrega da cliente** (placeholder tipográfico mantido)
- [ ] Domínio customizado configurado      ← **pendente: confirmar com owner/cliente**
- [x] `npm run build` passa sem warnings   — Next.js 14.2.35, 12/12 páginas geradas ✓

## Critério de Sucesso
Todos os itens do checklist marcados (ou documentados como pendência com responsável). Site funcional em iOS Safari e Android Chrome. Netlify build verde.

## Aprendizados
<!-- Preencher após execução -->

### Auditoria realizada em 2026-05-05

**Imagens:**
- Zero `<img>` nativo encontrado — todos os usos passam por `next/image` ✅
- `priority` aplicado em: `AboutHero.tsx` (above-the-fold), `PortfolioCard.tsx` (primeiro card) ✅
- `sizes` prop presente em: `PortfolioCard`, `AboutHero`, `PostCard`, `InstagramFeed`, `blog/[slug]` ✅
- Hero não usa `<Image>` (apenas CSS + partículas + texto) — sem necessidade de `priority` ✅

**Bundle:**
- Shared JS: 87.3 kB (31.7 kB React/utils + 53.6 kB Framer Motion domAnimation)
- Página mais pesada: Home (190 kB) — justificado por tsParticles
- LazyMotion + domAnimation (não domMax) em todos os componentes animados ✅
- `@next/bundle-analyzer` instalado e configurado (`ANALYZE=true npm run build`)

**Segurança:**
- Next.js atualizado de 14.2.33 → 14.2.35 (patches DoS/HTTP smuggling)
- Vulnerabilidades restantes: `eslint-config-next` (dev-only, glob CVE) e `postcss` interno ao Next — não fixáveis sem upgrade para Next.js 15; aceitável para v1

**Variáveis de Ambiente — configurar no Netlify antes do go-live:**
```
NEXT_PUBLIC_WHATSAPP_NUMBER=5511945051940
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/_cocriart_
NEXT_PUBLIC_SITE_URL=https://[domínio-de-produção]
CMS_API_URL=https://a2-creator.netlify.app
CMS_SITE_ID=3b5e3eef-67d8-400d-9b3d-247ce966049d
CMS_API_KEY=[chave-de-produção]
```
