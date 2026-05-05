# CLAUDE.md — CoCriart Site

> Agente responsável por orquestrar a implementação do site portfólio + blog da CoCriart, subfase por subfase, usando GitHub Copilot Agent Mode como executor.

---

## 1. Arquitetura de 3 Camadas (CoCriart)

### Camada 1 — Diretiva (O que fazer)
- **Localização:** `directives/fase-X.Y-[slug].md`
- **Convenção de nome:** `fase-0.1-project-setup.md`, `fase-1.1-home-hero.md`, etc.
- **Conteúdo:** Objetivo da subfase, deliverables, contexto de design, constraints, critério de sucesso
- **Regra:** Nunca sobrescrever uma diretiva sem permissão do owner. Diretivas são SOPs vivos.

### Camada 2 — Orquestração (Você — Claude)
- Ler a diretiva da subfase atual
- Propor o prompt formatado para o Copilot
- Aguardar validação do owner
- Registrar aprendizados na diretiva (self-anneal)
- Avançar para a próxima subfase

### Camada 3 — Execução (GitHub Copilot Agent Mode)
- Recebe o prompt gerado pela Camada 2
- Implementa os deliverables no repositório
- Executa `npm run dev` para validar localmente
- Push para `main` aciona build automático no Netlify

---

## 2. Loop de Execução por Subfase

```
1. Apresentar: "Vamos implementar a Fase X.Y — [Nome]"
2. Mostrar objetivo da subfase
3. Aguardar: "Confirma?" → owner responde "sim" ou ajusta
4. Gerar prompt Copilot (formato abaixo)
5. Apresentar critério de sucesso: "Você saberá que funcionou quando..."
6. Aguardar validação do owner
7. Se aprovado: "Pronto para a Fase X.(Y+1)?"
8. Se falhou: self-anneal (corrigir + atualizar diretiva)
```

---

## 3. Mapa de Subfases

| Fase | Nome | Critério de Sucesso |
|---|---|---|
| 0.1 | Project Setup & Deploy | `npm run dev` ok + Netlify URL pública |
| 0.2 | Design Tokens & Globals | 5 cores, 3 fontes e 3 botões renderizados |
| 1.1 | Hero Section | Hero 100vh, partículas animam, CTA scroll funciona |
| 1.2 | Portfolio Preview | Cards glassmorphism com hover glow, link /portfolio |
| 1.3 | Services Preview + About Teaser | 3 cards de serviço, CTAs navegam corretamente |
| 1.4 | Instagram Embed + Home CTA | Embed visível, botão WhatsApp abre em nova aba |
| 2.1 | Navbar & Footer Globais | Navbar em todas as páginas, menu mobile funciona |
| 2.2 | Página Sobre | /sobre carrega, manifesto exibido, meta tags ok |
| 2.3 | Página Portfólio | Filtros funcionam, vídeo embed lazy, lightbox imagens |
| 2.4 | Páginas de Serviços | 3 URLs únicas, meta title único, CTA WhatsApp por serviço |
| 2.5 | Blog + CMS | Posts listados, post individual renderiza, fallback gracioso |
| 3.1 | Página de Contato | Todos os links funcionam, WhatsApp com msg pré-preenchida |
| 3.2 | Animações & Polish | Transições suaves, cursor customizado, zero jank |
| 4.1 | SEO Técnico | sitemap.xml, robots.txt, OG image, JSON-LD válidos |
| 4.2 | Performance & Launch | Lighthouse ≥ 80 mobile, LCP < 2.5s, zero erros console |

---

## 4. Template de Prompt para Copilot

```
Leia o PRD.md (Seção 12 — Fase X.Y) e a diretiva em directives/fase-X.Y-[slug].md antes de começar.

**Objetivo:** [objetivo da subfase]

**Implemente os seguintes deliverables:**
- [deliverable 1]
- [deliverable 2]
- [deliverable N]

**Constraints obrigatórios:**
- Stack: Next.js 14 App Router, Tailwind CSS, Framer Motion
- Paleta: #2d0e44 (fundo), #6d1f8d (roxo), #d29ee1 (lilás), #c56428 (laranja), #4187af (azul)
- Tipografia: Joly Text (H1/H2), Kimberly (detalhes), Quicksand (body/UI)
- Mobile-first: breakpoints Tailwind sm/md/lg/xl
- Código em inglês, UI em português BR
- Sem `<form>` HTML nativo — usar eventos React (onClick, onChange)

**Critério de sucesso:** [critério concreto]
```

---

## 5. Princípios de Operação (CoCriart-específicos)

### Segurança & Qualidade
- Middleware e variáveis de ambiente sempre na Fase 0 — nunca depois
- Nunca hardcodar número de WhatsApp, tokens ou URLs no código — sempre via `.env`
- Validar `npm run build` antes de qualquer push para `main`

### Dados
- Fases 1.x e 2.x (exceto 2.5): usar dados mock semânticos e realistas
- Fase 2.5 em diante: dados reais do CMS via variáveis de ambiente
- Portfólio: owner publica via deploy (sem CMS para portfólio na v1)

### Linguagem
- Código, variáveis, comentários: **inglês**
- UI, textos, CTAs, mensagens de erro: **português BR**
- Commits: `feat:`, `fix:`, `chore:`, `style:` — conventional commits

### Self-Annealing
- Qualquer erro de build ou runtime → diagnosticar → corrigir → testar → atualizar diretiva
- Se erro envolver API paga (CMS, analytics): consultar owner antes de tentar novo request
- Registrar limitações descobertas na diretiva da subfase (campo "Aprendizados")

### Design
- Identidade visual é imutável: paleta, tipografia e símbolos conforme PRD Seção 8
- Logo: usar placeholder tipográfico até owner entregar o arquivo final
- Animações: sempre `LazyMotion` + dynamic imports para não inflar bundle

---

## 6. Estrutura de Arquivos

```
cocriart-site/
├── app/
│   ├── layout.tsx              # Root layout: Navbar, Footer, WhatsAppButton
│   ├── page.tsx                # Home
│   ├── sobre/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   ├── servicos/
│   │   ├── page.tsx            # Listagem
│   │   ├── social-media/page.tsx
│   │   ├── consultoria/page.tsx
│   │   └── audiovisual/page.tsx
│   ├── blog/
│   │   ├── page.tsx            # Listagem
│   │   └── [slug]/page.tsx     # Post individual
│   ├── contato/
│   │   └── page.tsx
│   ├── sitemap.ts              # Sitemap dinâmico (Fase 4.1)
│   └── robots.ts               # Robots.txt (Fase 4.1)
│
├── components/
│   ├── ui/                     # Atoms reutilizáveis
│   │   ├── Button.tsx
│   │   ├── PortfolioCard.tsx
│   │   └── Badge.tsx
│   ├── layout/                 # Estrutura global
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── sections/               # Seções de página
│   │   ├── Hero.tsx
│   │   ├── PortfolioPreview.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── AboutTeaser.tsx
│   │   ├── InstagramFeed.tsx
│   │   ├── HomeContactCTA.tsx
│   │   ├── AboutHero.tsx
│   │   ├── Manifesto.tsx
│   │   └── Values.tsx
│   └── blog/
│       ├── PostCard.tsx
│       └── PostBody.tsx
│
├── lib/
│   ├── cms.ts                  # Funções de fetch do CMS
│   └── utils.ts                # Helpers gerais
│
├── public/
│   ├── images/                 # Assets estáticos
│   └── fonts/                  # Joly Text, Kimberly (se locais)
│
├── styles/
│   └── globals.css             # CSS variables, reset, font-face
│
├── directives/                 # SOPs por subfase
│   ├── fase-0.1-project-setup.md
│   ├── fase-0.2-design-tokens.md
│   └── ...
│
├── .env.local                  # Variáveis locais (no .gitignore)
├── .env.example                # Template de variáveis
├── tailwind.config.ts
├── next.config.js
├── netlify.toml
└── CLAUDE.md                   # Este arquivo
```

---

## 7. Variáveis de Ambiente por Fase

| Variável | Fase de Uso | Descrição |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | 3.1 | Número com DDI: `5511999999999` |
| `CMS_API_URL` | 2.5 | URL base da API do CMS |
| `CMS_API_TOKEN` | 2.5 | Token de leitura (secret) |
| `NEXT_PUBLIC_INSTAGRAM_URL` | 1.4 | `https://instagram.com/_cocriart_` |
| `NEXT_PUBLIC_SITE_URL` | 4.1 | URL de produção para OG/sitemap |

---

## 8. Checklist de Lançamento (Fase 4.2)

- [ ] Lighthouse mobile Performance ≥ 80
- [ ] Lighthouse mobile SEO ≥ 90
- [ ] Lighthouse mobile Accessibility ≥ 85
- [ ] LCP < 2.5s (testado com throttling 4G)
- [ ] Zero erros no console em produção
- [ ] Todas as variáveis de ambiente configuradas no Netlify
- [ ] sitemap.xml acessível
- [ ] robots.txt acessível
- [ ] OG image aparece no WhatsApp ao compartilhar URL
- [ ] WhatsApp abre com mensagem pré-preenchida
- [ ] Menu mobile funciona em iOS Safari e Android Chrome
- [ ] Logo final substituída (se entregue pela cliente)
- [ ] Domínio customizado configurado (se disponível)
- [ ] Redirect `www` → sem www (ou vice-versa) configurado
