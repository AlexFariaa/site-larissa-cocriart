# PRD — Site Portfólio + Blog CoCriart
**Versão:** 1.0  
**Data:** 2025-07-01  
**Status:** Em revisão  
**Owner:** Desenvolvedor (Agência A2)  
**Cliente:** CoCriart — Marketing Holístico

---

## Índice

- [0. Contexto Operacional (para agentes IA)](#0-contexto-operacional)
- [1. Executive One-Pager](#1-executive-one-pager)
- [2. Visão Geral e Contexto](#2-visão-geral-e-contexto)
- [3. Insights do Cliente e Evidências](#3-insights-do-cliente-e-evidências)
- [4. Objetivos e Não-Objetivos](#4-objetivos-e-não-objetivos)
- [5. Alternativas Consideradas](#5-alternativas-consideradas)
- [6. Personas e Casos de Uso](#6-personas-e-casos-de-uso)
- [7. Requisitos](#7-requisitos)
- [8. UX e Design](#8-ux-e-design)
- [9. Notas Técnicas](#9-notas-técnicas)
- [10. Métricas e Critérios de Sucesso](#10-métricas-e-critérios-de-sucesso)
- [11. Riscos e Mitigações](#11-riscos-e-mitigações)
- [12. Plano de Rollout](#12-plano-de-rollout)
- [13. Log de Decisões](#13-log-de-decisões)
- [14. Narrativa de Sucesso](#14-narrativa-de-sucesso)
- [15. Questões Abertas e Suposições](#15-questões-abertas-e-suposições)
- [16. Glossário](#16-glossário)

---

## 0. Contexto Operacional

### Ambiente de Desenvolvimento
- **OS:** A definir (Windows/Mac/Linux — owner confirma)
- **IDE:** VS Code com GitHub Copilot Agent Mode
- **Framework:** Next.js 14+ (App Router)
- **Deploy:** Netlify (repo GitHub já criado)
- **Branches:** `main` (produção) → `develop` (staging) → `feature/*`

### Estado Atual do Projeto
- Repositório GitHub criado, sem código ainda
- Logo da cliente pendente (placeholder a ser trocado)
- CMS a ser definido e conectado (owner é responsável pela manutenção de conteúdo)
- Instagram feed: embed simples na v1, API oficial na v2

### Como Usar Este PRD
1. Leia a Seção 12 (Rollout) para identificar a subfase atual
2. Abra a diretiva correspondente em `directives/`
3. Copie o prompt formatado para o GitHub Copilot Agent Mode
4. Valide o critério de sucesso antes de avançar
5. Nunca pule subfases — cada uma é pré-requisito da próxima

### Arquitetura de Diretivas
```
directives/
  fase-0.1-project-setup.md
  fase-0.2-design-tokens.md
  fase-1.1-home-hero.md
  fase-1.2-home-portfolio-preview.md
  fase-1.3-home-services-preview.md
  fase-1.4-home-instagram-embed.md
  fase-2.1-about-page.md
  fase-2.2-portfolio-page.md
  fase-2.3-services-pages.md
  fase-2.4-blog-integration.md
  fase-3.1-contact-page.md
  fase-3.2-animations-polish.md
  fase-4.1-seo-optimization.md
  fase-4.2-performance-audit.md
```

---

## 1. Executive One-Pager

| Campo | Detalhe |
|---|---|
| **Problema** | CoCriart não possui presença web própria. Potenciais clientes que chegam pelo Instagram não têm onde ver o portfólio completo, entender os serviços ou se converter em leads qualificados. |
| **Objetivo** | Lançar site portfólio + blog em 5 dias, dark & místico, que exiba trabalhos, descreva serviços e capture leads via WhatsApp. |
| **Escopo v1** | Home, Sobre, Portfólio, Serviços (listagem + páginas individuais), Blog (integrado ao CMS), Contato/Link-in-Bio |
| **Métrica-chave** | Clique em "Pedir Orçamento" / sessão ≥ 15%; Tempo na página Portfólio ≥ 2min |
| **Data de lançamento** | D+5 a partir do início do desenvolvimento |
| **Stack** | Next.js 14, Tailwind CSS, CMS headless (owner), Netlify |

---

## 2. Visão Geral e Contexto

### Problema
A CoCriart opera ativamente no Instagram (`_cocriart_`) e atrai seguidores com seu posicionamento único de "Marketing Holístico". Entretanto:
- Não há destino adequado para quem quer ver cases completos
- O link da bio não converte — apenas redireciona para perfis
- Não há canal de conteúdo longo (blog) para SEO e autoridade

### Fluxo Atual (com pontos de fricção)
```
Instagram → Link na Bio → ??? → Sem conversão estruturada
```

### Fluxo Alvo
```
Instagram → Site (Home) → Portfólio / Blog → Serviços → CTA WhatsApp → Lead qualificado
```

### Alinhamento Estratégico
O site é o hub central da marca. Ele:
1. Valida autoridade via portfólio visual
2. Educa via blog (SEO de longo prazo)
3. Converte via CTAs estratégicos de WhatsApp
4. Reflete a identidade visual mística e premium da marca

---

## 3. Insights do Cliente e Evidências

### Dores Mapeadas
- Sem portfólio centralizado para enviar para potenciais clientes
- Dependência total do Instagram, plataforma de terceiros
- Sem canal de SEO orgânico
- Identidade visual rica (já existe) sem veículo digital próprio

### O Que Já Funciona (Preservar)
- Identidade visual consolidada: paleta, tipografia, símbolos (cérebro-lâmpada, coruja)
- Tom de voz definido: místico + profissional + desafiador
- Instagram ativo com conteúdo visual de qualidade
- Slogan forte: "Desperte & Cocrie"

---

## 4. Objetivos e Não-Objetivos

### Objetivos (v1)
- ✅ Site funcional publicado em 5 dias
- ✅ Home com hero impactante e prévia do portfólio
- ✅ Página de Portfólio com galeria filtrada por categoria
- ✅ Serviços com página individual por serviço (SEO)
- ✅ Blog integrado ao CMS do owner
- ✅ Página de Contato com links diretos (WhatsApp, email, Instagram)
- ✅ Animações elaboradas: partículas, parallax, glow místico
- ✅ Performance: LCP < 2.5s, sem travamento em vídeos
- ✅ Responsivo mobile-first

### Não-Objetivos (v1)
- ❌ Sistema de agendamento de calls (v2)
- ❌ Área de login para cliente gerenciar portfólio (owner faz deployments)
- ❌ Integração com API oficial do Instagram (v2)
- ❌ E-commerce ou venda de produtos
- ❌ Multilíngue
- ❌ Chat ao vivo (apenas WhatsApp externo)

---

## 5. Alternativas Consideradas

| Alternativa | Motivo da Rejeição |
|---|---|
| Webflow | Custo mensal, menos controle de SEO técnico, dificulta blog customizado |
| WordPress | Pesado, desalinhado com stack do owner, problemas de performance |
| Framer | Excelente para design mas blog/CMS headless menos flexível |
| Linktree como "Link in Bio" isolado | Não resolve portfólio, SEO ou blog — seria gambiarra |
| **Next.js + CMS headless** | ✅ Escolhido: performance, SEO, flexibilidade, stack familiar |

---

## 6. Personas e Casos de Uso

### Personas

**P1 — Empreendedor Consciente**
- Pequeno/médio empresário, 28–45 anos
- Busca diferencial: não quer só "post bonito", quer estratégia com propósito
- Chega pelo Instagram ou indicação
- Avalia portfólio antes de qualquer contato

**P2 — Criativo/Startup**
- Fundador ou gestor de marca nova
- Quer produção audiovisual + gestão de redes
- Avalia pelo estética do próprio site da agência

**P3 — Leitor do Blog**
- Profissional de marketing curioso
- Encontra via busca orgânica (Google)
- Consome conteúdo, descobre a marca, pode se tornar cliente

### Casos de Uso

| ID | Descrição |
|---|---|
| UC-01 | P1 acessa o site pelo link da bio do Instagram e vê o portfólio completo |
| UC-02 | P1 navega pelos serviços, entende as diferenças e clica em "Pedir Orçamento" |
| UC-03 | P2 filtra portfólio por categoria "Vídeos/Reels" e assiste aos embeds |
| UC-04 | P3 lê um artigo do blog e descobre os serviços via CTA no rodapé do post |
| UC-05 | Qualquer visitante acessa a página de Contato e inicia conversa no WhatsApp |
| UC-06 | P1 visualiza o site no celular (vindo direto do Instagram) sem problemas de layout |

---

## 7. Requisitos

### Requisitos Funcionais

**RF-01** — Home deve exibir hero fullscreen com slogan animado "Desperte & Cocrie"  
**RF-02** — Home deve exibir prévia de 3–6 trabalhos do portfólio com link para página completa  
**RF-03** — Home deve exibir prévia dos serviços com CTA por serviço  
**RF-04** — Home deve exibir embed do Instagram (feed simples, v1)  
**RF-05** — Página Portfólio deve ter filtros por categoria: Design, Vídeos/Reels, Gestão de Redes  
**RF-06** — Portfólio deve suportar embed de vídeo (YouTube/Vimeo) com lazy loading  
**RF-07** — Cada serviço deve ter página própria com URL semântica (ex: `/servicos/social-media`)  
**RF-08** — Blog deve consumir dados do CMS headless do owner via API  
**RF-09** — Posts do blog devem ter: título, cover, data, categoria, corpo rico, CTA no rodapé  
**RF-10** — Página de Contato deve ter: link WhatsApp direto, link Instagram, formulário de e-mail (opcional v1), botão "Pedir Orçamento"  
**RF-11** — Botão flutuante de WhatsApp presente em todas as páginas  
**RF-12** — Logo placeholder funcional até entrega da logo final pela cliente  
**RF-13** — Navbar responsiva com menu hambúrguer no mobile  
**RF-14** — Footer com links rápidos, redes sociais e copyright

### Requisitos Não-Funcionais

**RNF-01** — LCP (Largest Contentful Paint) < 2.5s em conexão 4G  
**RNF-02** — Imagens: formato WebP com fallback, lazy loading em todas  
**RNF-03** — Vídeos: embed externo apenas (YouTube/Vimeo), nunca upload direto no servidor  
**RNF-04** — SEO: meta tags dinâmicas por página, Open Graph completo, sitemap.xml gerado  
**RNF-05** — Acessibilidade: alt text em todas as imagens, contraste WCAG AA nas cores primárias  
**RNF-06** — Mobile-first: breakpoints sm/md/lg/xl com Tailwind  
**RNF-07** — Deploy automático: push para `main` aciona build no Netlify  
**RNF-08** — Sem erros no console em produção  
**RNF-09** — Fontes carregadas via `next/font` (sem FOUT)

### Critérios de Aceite (Gherkin)

```gherkin
Feature: Portfólio com Filtros
  Scenario: Visitante filtra por categoria
    Given estou na página /portfolio
    When clico no filtro "Vídeos/Reels"
    Then apenas os cards de vídeo são exibidos
    And os demais ficam ocultos sem recarregar a página

Feature: CTA WhatsApp
  Scenario: Visitante clica em "Pedir Orçamento"
    Given estou em qualquer página do site
    When clico em "Pedir Orçamento"
    Then sou redirecionado para o WhatsApp com mensagem pré-preenchida
    And a abertura ocorre em nova aba

Feature: Blog via CMS
  Scenario: Novo post publicado no CMS
    Given publiquei um post no CMS headless
    When acesso /blog no site
    Then o novo post aparece listado com título, cover e data
```

---

## 8. UX e Design

### Direção Visual: "Cosmos Místico Digital"
O site deve evocar um universo escuro onde energia e criatividade coexistem. Não é um portfólio genérico — é uma experiência de imersão na marca.

**Princípios visuais:**
- Fundo primário: `#2d0e44` (roxo profundo)
- Glow e auras em `#6d1f8d` e `#d29ee1`
- CTAs e destaques: `#c56428` (laranja terracota)
- Elementos técnicos/digitais: `#4187af` (azul aço)
- Partículas flutuantes no hero (canvas ou biblioteca leve)
- Parallax em seções chave (hero e sobre)
- Glassmorphism nos cards de portfólio
- Efeito "glow" neon nos hovers de botões
- Textura de ruído sutil sobre o fundo (`noise overlay`)

### Tipografia
```
H1, H2         → Joly Text (serifada, autoridade)
Assinaturas    → Kimberly (cursiva, toque humano)
Body, Nav, UI  → Quicksand (geométrica, legível)
```

### Navegação
```
/ (Home)
├── /sobre
├── /portfolio
├── /servicos
│   ├── /servicos/social-media
│   ├── /servicos/consultoria
│   └── /servicos/audiovisual
├── /blog
│   └── /blog/[slug]
└── /contato
```

### Fluxos-Chave

**Hero → Portfólio:**
```
[Hero Animado] → CTA "Ver Trabalhos" → [Scroll suave para Preview] → "Ver tudo" → /portfolio
```

**Serviço → Orçamento:**
```
[Card de Serviço] → "Saiba Mais" → /servicos/[slug] → "Pedir Orçamento" → WhatsApp
```

**Blog → Serviço:**
```
[Post Completo] → [CTA no rodapé do post] → /servicos
```

### Edge Cases
- Logo não entregue: usar logotipo em texto estilizado "CoCRIart" com Joly Text + Kimberly
- Portfólio vazio: exibir estado vazio estilizado com CTA para Instagram
- CMS offline: blog exibe fallback "Em breve" sem quebrar o build
- Vídeo embed com falha: exibir thumbnail com link externo

---

## 9. Notas Técnicas

### Stack

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework | Next.js (App Router) | 14+ |
| Estilização | Tailwind CSS | 3.4+ |
| Animações | Framer Motion | 11+ |
| Partículas | tsParticles ou custom Canvas | latest |
| CMS | Headless (owner — a confirmar endpoint) | — |
| Deploy | Netlify | — |
| Repositório | GitHub | já criado |
| Fontes | Google Fonts / next/font | — |
| Vídeo | Embed YouTube/Vimeo (lite-youtube-embed) | — |
| SEO | next-seo ou next/metadata nativo | — |

### Estrutura de Diretórios (Next.js App Router)

```
cocriart-site/
├── app/
│   ├── layout.tsx           # Layout raiz (navbar, footer, whatsapp btn)
│   ├── page.tsx             # Home
│   ├── sobre/page.tsx
│   ├── portfolio/page.tsx
│   ├── servicos/
│   │   ├── page.tsx         # Listagem
│   │   └── [slug]/page.tsx  # Página individual
│   ├── blog/
│   │   ├── page.tsx         # Listagem
│   │   └── [slug]/page.tsx  # Post individual
│   └── contato/page.tsx
├── components/
│   ├── ui/                  # Atoms: Button, Card, Badge
│   ├── layout/              # Navbar, Footer, WhatsAppButton
│   ├── sections/            # Hero, PortfolioPreview, ServicesPreview
│   └── blog/                # PostCard, PostBody
├── lib/
│   ├── cms.ts               # Funções de fetch do CMS
│   └── utils.ts
├── public/
│   ├── images/
│   └── fonts/               # Joly Text, Kimberly (se não no Google Fonts)
├── styles/
│   └── globals.css
├── directives/              # SOPs por subfase (ver seção 0)
├── .env.local               # Variáveis de ambiente
└── next.config.js
```

### Variáveis de Ambiente

| Variável | Descrição | Fase |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número com DDI (ex: 5511...) | Fase 3.1 |
| `CMS_API_URL` | URL base da API do CMS | Fase 2.4 |
| `CMS_API_TOKEN` | Token de leitura do CMS | Fase 2.4 |
| `NEXT_PUBLIC_INSTAGRAM_URL` | URL do perfil Instagram | Fase 1.4 |
| `NEXT_PUBLIC_SITE_URL` | URL de produção (para SEO/OG) | Fase 4.1 |

### Dependências Externas

- `framer-motion` — animações de scroll, entrada e hover
- `@tsparticles/react` ou custom canvas — partículas no hero
- `lite-youtube-embed` — embed leve de YouTube
- `next-seo` (ou metadata API nativa do Next 14)
- CMS headless do owner (endpoint a confirmar)

---

## 10. Métricas e Critérios de Sucesso

| KPI | Meta v1 (30 dias pós-lançamento) |
|---|---|
| Taxa de clique em "Pedir Orçamento" | ≥ 15% das sessões |
| Tempo médio na página Portfólio | ≥ 2 minutos |
| Bounce Rate (Home) | ≤ 60% |
| Artigos de blog publicados | ≥ 2 no primeiro mês |
| PageSpeed (Mobile) | ≥ 80 |
| LCP | < 2.5s |
| Erros de console em produção | 0 |

---

## 11. Riscos e Mitigações

| Risco | Severidade | Mitigação |
|---|---|---|
| Logo não entregue no prazo | Alta | Usar placeholder tipográfico estilizado. Trocar com 1 push quando vier. |
| Endpoint do CMS não documentado | Alta | Owner confirma e documenta antes da Fase 2.4. Fallback: dados mock no build. |
| Prazo de 5 dias muito apertado | Alta | Animações mais elaboradas entram em Fase 3.2 (pode ir para v1.1 se necessário). |
| Framer Motion aumentar bundle | Média | Usar dynamic imports e `LazyMotion` para reduzir bundle. |
| Fontes Joly Text / Kimberly não no Google Fonts | Média | Confirmar licença. Se pagas, usar via `next/font/local` com arquivos no `/public/fonts/`. |
| Instagram embed quebrar | Baixa | v1 usa screenshot/imagem estática com link. API oficial entra na v2. |
| Vídeos travando mobile | Média | Apenas embeds externos (YouTube/Vimeo), nunca autoplay, lazy loading obrigatório. |

---

## 12. Plano de Rollout

> **Convenção:** cada subfase = 1 diretiva = 1 prompt para GitHub Copilot Agent Mode.  
> **Prazo total:** 5 dias.

---

### 🔧 FASE 0 — Fundação
**Objetivo da fase:** Projeto configurado, design tokens aplicados, estrutura de pastas criada. Ao final, `npm run dev` roda localmente e o deploy no Netlify está ativo (mesmo que vazio).

#### Fase 0.1 — Project Setup & Deploy Pipeline
**Diretiva:** `directives/fase-0.1-project-setup.md`

**Objetivo:** Inicializar o projeto Next.js 14 com todas as dependências, configurar Netlify e garantir o pipeline de deploy automático.

**Deliverables:**
- `package.json` com todas as dependências listadas na Seção 9
- `next.config.js` com configurações de imagem (domains externos)
- `netlify.toml` configurado para Next.js
- `.env.local` criado a partir do `.env.example`
- `.gitignore` adequado
- `README.md` com instruções de setup

**Critério de sucesso:** `npm run dev` roda sem erros. Push para `main` aciona build no Netlify e URL pública está acessível (mesmo que vazia).

---

#### Fase 0.2 — Design Tokens & Globals
**Diretiva:** `directives/fase-0.2-design-tokens.md`

**Objetivo:** Configurar todos os tokens de design (cores, tipografia, espaçamentos) no Tailwind e no CSS global, além de importar as fontes.

**Deliverables:**
- `tailwind.config.ts` com paleta CoCriart completa (todas as 5 cores como variáveis)
- `styles/globals.css` com CSS variables, font-face declarations, reset
- Fontes Joly Text, Kimberly, Quicksand configuradas via `next/font`
- Componente `Button` base com variantes: `primary` (laranja), `ghost` (outline roxo), `whatsapp` (verde)

**Critério de sucesso:** Uma página de teste exibe as 5 cores, as 3 fontes e os 3 botões corretamente renderizados no browser.

---

### 🏠 FASE 1 — Home
**Objetivo da fase:** Página Home completa com todas as seções. Ao final, a Home é a vitrine da marca — impactante, animada e com todos os CTAs funcionando.

#### Fase 1.1 — Hero Section
**Diretiva:** `directives/fase-1.1-home-hero.md`

**Objetivo:** Criar o hero fullscreen com partículas, parallax, slogan animado e CTA principal.

**Deliverables:**
- `components/sections/Hero.tsx`
- Fundo `#2d0e44` com partículas flutuantes (tsParticles ou canvas customizado)
- Logo placeholder (tipográfico: "CoCRIart" em Joly Text + Kimberly para o "art")
- Slogan "Desperte & Cocrie" com animação de entrada staggered (Framer Motion)
- Subtítulo com o manifesto da marca
- CTA "Ver Trabalhos" (scroll suave para seção de portfólio)
- Efeito parallax no scroll

**Critério de sucesso:** Hero ocupa 100vh, partículas animam, slogan aparece com animação staggered, CTA scroll funciona, responsivo no mobile.

---

#### Fase 1.2 — Portfolio Preview Section
**Diretiva:** `directives/fase-1.2-home-portfolio-preview.md`

**Objetivo:** Seção com grid de 3–6 cards de portfólio usando dados mock, com efeito glassmorphism e hover glow.

**Deliverables:**
- `components/sections/PortfolioPreview.tsx`
- `components/ui/PortfolioCard.tsx` com glassmorphism e hover glow em `#6d1f8d`
- 6 cards mock com imagem, título, categoria e link
- Animação de entrada com scroll trigger (Framer Motion `whileInView`)
- Botão "Ver Portfólio Completo" → `/portfolio`

**Critério de sucesso:** Cards renderizam em grid 3 colunas (desktop) / 1 coluna (mobile), hover glow funciona, link para /portfolio navega corretamente.

---

#### Fase 1.3 — Services Preview & About Teaser
**Diretiva:** `directives/fase-1.3-home-services-preview.md`

**Objetivo:** Seção de serviços em cards com ícone, título, descrição curta e CTA individual. Teaser da seção Sobre logo abaixo.

**Deliverables:**
- `components/sections/ServicesPreview.tsx`
- 3 cards: Social Media, Consultoria, Audiovisual — com ícone SVG (coruja/cérebro-lâmpada)
- CTA por card: "Saiba Mais" → `/servicos/[slug]`
- `components/sections/AboutTeaser.tsx` com frase do manifesto + CTA "Conheça a CoCriart"
- Animações de entrada com scroll trigger

**Critério de sucesso:** 3 cards de serviço renderizam, CTAs navegam para as rotas corretas, About Teaser exibe frase do manifesto.

---

#### Fase 1.4 — Instagram Embed & Footer Preview
**Diretiva:** `directives/fase-1.4-home-instagram-embed.md`

**Objetivo:** Seção de Instagram com embed simples (iframe ou widget) e seção de rodapé da Home com CTA de contato.

**Deliverables:**
- `components/sections/InstagramFeed.tsx` com embed simples (SnapWidget ou similar, sem API)
- Fallback: grid de imagens estáticas com link para o Instagram se embed falhar
- `components/sections/HomeContactCTA.tsx` — seção com fundo `#6d1f8d`, frase de impacto e botão WhatsApp

**Critério de sucesso:** Seção Instagram exibe ao menos um placeholder/embed. Seção CTA de contato renderiza com botão WhatsApp funcional (abre em nova aba).

---

### 📄 FASE 2 — Páginas Internas
**Objetivo da fase:** Todas as páginas além da Home implementadas com conteúdo real (ou mock semântico). Ao final, a navegação completa funciona.

#### Fase 2.1 — Navbar & Footer Globais
**Diretiva:** `directives/fase-2.1-navbar-footer.md`

**Objetivo:** Navbar responsiva com menu mobile e footer global com links, redes e copyright.

**Deliverables:**
- `components/layout/Navbar.tsx` com logo, links de navegação, menu hambúrguer mobile
- Navbar com efeito de scroll (transparente → glassmorphism ao scrollar)
- `components/layout/Footer.tsx` com links rápidos, ícones de redes sociais, copyright
- `components/layout/WhatsAppButton.tsx` — botão flutuante presente em todas as páginas
- Integrados no `app/layout.tsx`

**Critério de sucesso:** Navbar e Footer aparecem em todas as páginas. Menu mobile abre/fecha. Botão WhatsApp flutuante visível em todas as telas.

---

#### Fase 2.2 — Página Sobre
**Diretiva:** `directives/fase-2.2-about-page.md`

**Objetivo:** Página `/sobre` com manifesto da marca, missão, valores e como a espiritualidade se aplica ao marketing.

**Deliverables:**
- `app/sobre/page.tsx`
- `components/sections/AboutHero.tsx` — hero com foto/ilustração + título
- `components/sections/Manifesto.tsx` — texto do manifesto com tipografia Joly Text
- `components/sections/Values.tsx` — 3–4 pilares da marca em cards
- CTA no final: "Ver Portfólio" e "Fale Conosco"
- Meta tags dinâmicas (title, description, OG)

**Critério de sucesso:** Página /sobre carrega sem erro, exibe manifesto e pilares, CTAs funcionam, meta tags corretas no `<head>`.

---

#### Fase 2.3 — Página Portfólio
**Diretiva:** `directives/fase-2.3-portfolio-page.md`

**Objetivo:** Galeria de portfólio com filtros por categoria, suporte a imagem e embed de vídeo.

**Deliverables:**
- `app/portfolio/page.tsx`
- Filtros: "Todos", "Design", "Vídeos/Reels", "Gestão de Redes"
- `components/ui/PortfolioCard.tsx` (reutilizado da Fase 1.2, estendido)
- Suporte a dois tipos de card: imagem (com lightbox simples) e vídeo (embed YouTube/Vimeo lazy)
- 8–10 itens mock com categorias variadas
- Estado vazio estilizado para categoria sem items
- Animação de filtro (Framer Motion `AnimatePresence`)

**Critério de sucesso:** Filtros funcionam sem reload. Cards de vídeo exibem embed lazy. Estado vazio aparece quando categoria não tem itens. Lightbox abre em imagens.

---

#### Fase 2.4 — Páginas de Serviços
**Diretiva:** `directives/fase-2.4-services-pages.md`

**Objetivo:** Página de listagem `/servicos` e 3 páginas individuais com conteúdo completo, focadas em SEO.

**Deliverables:**
- `app/servicos/page.tsx` — listagem com 3 cards e links
- `app/servicos/social-media/page.tsx`
- `app/servicos/consultoria/page.tsx`
- `app/servicos/audiovisual/page.tsx`
- Cada página: hero, descrição detalhada, benefícios, processo de trabalho, CTA WhatsApp
- Meta tags únicas por página (title, description, OG) para SEO
- Schema markup (JSON-LD Service) em cada página de serviço

**Critério de sucesso:** As 3 URLs de serviço carregam sem erro, cada uma com meta title único. CTA WhatsApp com mensagem pré-preenchida específica por serviço. JSON-LD válido (testado no Rich Results Test do Google).

---

#### Fase 2.5 — Blog: Integração com CMS
**Diretiva:** `directives/fase-2.5-blog-cms.md`

**Objetivo:** Listagem de posts e página de post individual consumindo dados do CMS headless do owner.

**Deliverables:**
- `lib/cms.ts` — funções: `getAllPosts()`, `getPostBySlug(slug)`, `getPostsByCategory(cat)`
- `app/blog/page.tsx` — grid de posts com cover, título, data, categoria
- `app/blog/[slug]/page.tsx` — post completo com corpo rico, autor, data, CTA no rodapé
- `components/blog/PostCard.tsx`
- `components/blog/PostBody.tsx` (renderiza HTML/Markdown do CMS)
- Fallback gracioso se CMS offline (sem quebrar o build)
- Revalidação: `revalidate = 60` (ISR — atualiza a cada 60s)
- Meta tags dinâmicas por post (OG, Twitter Card)

**Critério de sucesso:** Com CMS online: posts aparecem na listagem e post individual renderiza. Com CMS offline: build não falha, exibe mensagem "Em breve". Meta OG correto por post (testado com og:debugger).

---

### 📬 FASE 3 — Contato & Polish
**Objetivo da fase:** Página de contato funcional e animações finais aplicadas. Site completo e visualmente polido.

#### Fase 3.1 — Página de Contato / Link-in-Bio
**Diretiva:** `directives/fase-3.1-contact-page.md`

**Objetivo:** Página `/contato` com links diretos (WhatsApp, Instagram, e-mail) e botão principal de orçamento.

**Deliverables:**
- `app/contato/page.tsx`
- Hero com frase de chamada + ícone
- Card de WhatsApp: número, mensagem pré-preenchida "Olá! Vim pelo site e quero saber mais sobre [Serviço]"
- Card de Instagram: link para `_cocriart_`
- Card de E-mail (link `mailto:`)
- Botão principal: "Pedir Orçamento" → WhatsApp com mensagem específica
- Meta tags da página

**Critério de sucesso:** Todos os links abrem corretamente. WhatsApp abre com mensagem pré-preenchida. Página funciona como "Link in Bio" standalone.

---

#### Fase 3.2 — Animações Avançadas & Polish
**Diretiva:** `directives/fase-3.2-animations-polish.md`

**Objetivo:** Aplicar animações elaboradas que reforçam a identidade mística: glow, parallax refinado, transições de página e micro-interações.

**Deliverables:**
- Transições de página suaves (Framer Motion `AnimatePresence` no layout)
- Cursor customizado com glow `#d29ee1` em desktop
- Efeito "aurora" animado no hero (gradiente animado via CSS)
- Hover nos cards: glow neon + leve scale
- Scroll progress indicator no topo (barra `#c56428`)
- `noise-overlay` via CSS pseudo-elemento em todas as seções
- Revisão de responsividade em todas as páginas

**Critério de sucesso:** Transições de página suaves visíveis. Cursor customizado aparece no desktop. Aurora anima no hero. Nenhuma animação causa jank (testado no DevTools Performance).

---

### 🚀 FASE 4 — SEO, Performance & Lançamento
**Objetivo da fase:** Site pronto para produção com SEO técnico, performance otimizada e conteúdo final.

#### Fase 4.1 — SEO Técnico
**Diretiva:** `directives/fase-4.1-seo.md`

**Objetivo:** Implementar SEO técnico completo: sitemap, robots, meta tags globais, OG padrão.

**Deliverables:**
- `app/sitemap.ts` — sitemap dinâmico incluindo posts do blog
- `app/robots.ts` — robots.txt
- `app/opengraph-image.tsx` — OG image padrão do site
- Meta tags globais no `app/layout.tsx` (title template, description padrão)
- Verificação: todas as páginas têm `<title>` único e `<meta description>` relevante
- Structured data: `Organization` JSON-LD na Home

**Critério de sucesso:** `sitemap.xml` acessível em `/sitemap.xml`. `robots.txt` acessível. OG image aparece no og:debugger. Nenhuma página com title duplicado.

---

#### Fase 4.2 — Performance & Launch Checklist
**Diretiva:** `directives/fase-4.2-performance-launch.md`

**Objetivo:** Auditoria de performance, troca da logo placeholder pela final (quando entregue) e checklist de lançamento.

**Deliverables:**
- Auditoria Lighthouse: score ≥ 80 mobile em Performance, SEO e Acessibilidade
- Todas as imagens em WebP com `next/image`
- `next/font` sem FOUT confirmado
- Variáveis de ambiente de produção configuradas no Netlify
- Domínio customizado configurado (se disponível)
- Troca da logo placeholder (quando cliente entregar)
- Teste em iOS Safari e Android Chrome

**Critério de sucesso:** Lighthouse mobile ≥ 80. LCP < 2.5s. Zero erros de console. Site funcional em iOS Safari e Android Chrome.

---

## 13. Log de Decisões

| Data | Decisão | Justificativa |
|---|---|---|
| 2025-07-01 | Next.js 14 App Router | SEO nativo, ISR para blog, stack familiar do owner |
| 2025-07-01 | YouTube/Vimeo embed para vídeos | Performance: evitar upload de vídeo no servidor |
| 2025-07-01 | CMS do owner (não Sanity/Contentful) | Owner já tem infraestrutura; reduz custo e dependências |
| 2025-07-01 | WhatsApp direto (sem formulário complexo) | Conversão mais rápida; alinhado com fluxo atual da cliente |
| 2025-07-01 | Framer Motion para animações | Melhor DX no ecossistema React/Next; suporte a AnimatePresence |
| 2025-07-01 | Owner mantém portfólio (não cliente) | Simplifica v1; elimina necessidade de CMS para portfólio |
| 2025-07-01 | Instagram v1 = embed simples | API oficial tem complexidade de OAuth; v2 implementa corretamente |

---

## 14. Narrativa de Sucesso

É segunda-feira, 10 dias após o lançamento. Juliana, fundadora de uma startup de bem-estar, está no Instagram e vê um Reel da CoCriart sobre "arquétipos de marca". Toca no link da bio. O site carrega em menos de 2 segundos — ela vê um universo roxo profundo, partículas flutuando, e o slogan **"Desperte & Cocrie"** aparecendo letra por letra.

Ela rola a página, encantada pela estética, e clica em "Ver Portfólio". Filtra por "Vídeos/Reels" e assiste a dois reels produzidos para outros clientes. Convincida, vai para "Serviços", lê a página de Social Media e clica em **"Pedir Orçamento"**. O WhatsApp abre com a mensagem: *"Olá! Vim pelo site e tenho interesse em Social Media."*

A CoCriart responde em 20 minutos. Na semana seguinte, Juliana é nova cliente.

---

## 15. Questões Abertas e Suposições

### Questões Abertas
| ID | Questão | Responsável | Prazo |
|---|---|---|---|
| Q-01 | Qual é o endpoint e documentação do CMS headless do owner? | Owner | Antes da Fase 2.5 |
| Q-02 | Logo final da cliente — quando será entregue? | Cliente | Antes da Fase 4.2 |
| Q-03 | Fontes Joly Text e Kimberly têm licença para web? | Owner | Antes da Fase 0.2 |
| Q-04 | Número de WhatsApp e mensagens pré-preenchidas por serviço | Owner | Antes da Fase 3.1 |
| Q-05 | Domínio customizado já comprado? | Owner/Cliente | Antes da Fase 4.2 |
| Q-06 | Conteúdo real dos serviços (copy) quem escreve? | Owner/Cliente | Antes da Fase 2.4 |

### Suposições Explícitas
- A1: O CMS headless retorna dados em JSON com campos padrão (title, slug, cover, body, date, category)
- A2: O owner é o único responsável por publicar conteúdo no blog e atualizar o portfólio
- A3: A cliente aprovará o design baseado na identidade visual já existente (sem iterações extensas de UI)
- A4: YouTube/Vimeo (conta gratuita) é suficiente para o volume de vídeos do portfólio na v1
- A5: O prazo de 5 dias assume dedicação integral do desenvolvedor

---

## 16. Glossário

| Termo | Definição |
|---|---|
| **Subfase** | Unidade mínima de trabalho no Rollout Plan. Pequena o suficiente para ser implementada em uma sessão de Copilot (30–90min). |
| **Diretiva** | Arquivo Markdown em `directives/` que contém o SOP detalhado de uma subfase. Entrada para o Copilot Agent Mode. |
| **CMS headless** | Sistema de gerenciamento de conteúdo que expõe dados via API (sem frontend acoplado). |
| **ISR** | Incremental Static Regeneration — funcionalidade do Next.js que revalida páginas estáticas em background. |
| **LCP** | Largest Contentful Paint — métrica de performance que mede o tempo até o maior elemento visual carregar. |
| **CTA** | Call to Action — elemento que convida o usuário a tomar uma ação (botão, link). |
| **Glassmorphism** | Estilo visual com fundo translúcido, blur e borda sutil. Efeito "vidro fosco". |
| **Glow neon** | Efeito de brilho colorido ao redor de elementos, usando `box-shadow` ou `filter: drop-shadow`. |
| **Noise overlay** | Textura de ruído granulado aplicada via CSS pseudo-elemento para dar profundidade ao fundo. |
| **OG / Open Graph** | Protocolo de meta tags que controla como o site aparece ao ser compartilhado no WhatsApp, Instagram, etc. |
| **FOUT** | Flash of Unstyled Text — efeito de troca de fonte visível durante o carregamento. |
| **Marketing Holístico** | Abordagem da CoCriart que une estratégia digital com consciência, propósito e espiritualidade. |
| **Cocriação** | Pilar da marca: processo colaborativo entre agência e cliente para construir identidade e estratégia. |
