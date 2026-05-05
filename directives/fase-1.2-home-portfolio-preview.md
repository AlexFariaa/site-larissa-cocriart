# Diretiva — Fase 1.2: Portfolio Preview Section

## Objetivo
Criar a seção de prévia do portfólio na Home com 6 cards em grid, efeito glassmorphism, hover glow e animação de entrada por scroll.

## Contexto de Design
- Seção com id="portfolio-preview" (alvo do CTA do Hero)
- Cards com fundo semitransparente (glassmorphism): backdrop-filter blur + border rgba branca
- Hover: glow roxo (#6d1f8d) + scale leve (1.03) + reveal de overlay com categoria
- Grid: 3 colunas desktop / 2 colunas tablet / 1 coluna mobile
- Dados: mock semântico com imagens do Unsplash (já permitido no next.config.js)

## Deliverables
1. `components/sections/PortfolioPreview.tsx` — seção completa
2. `components/ui/PortfolioCard.tsx` — card reutilizável (usado também na Fase 2.3)
3. 6 items mock com: id, title, category (Design | Vídeos/Reels | Gestão de Redes), imageUrl, href
4. Título da seção "Trabalhos Recentes" em Joly Text com linha decorativa em laranja (#c56428)
5. Animação de entrada com `whileInView` (Framer Motion) — stagger entre cards
6. Botão "Ver Portfólio Completo" → `/portfolio` (variante primary do Button)

## Constraints
- Imagens via next/image com sizes otimizados
- Cards devem ter aria-label descritivo para acessibilidade
- Glassmorphism: `background: rgba(109,31,141,0.15)`, `backdrop-filter: blur(12px)`, `border: 1px solid rgba(210,158,225,0.2)`
- Framer Motion: `LazyMotion` obrigatório
- Mock data em arquivo separado: `lib/mock-portfolio.ts`

## Critério de Sucesso
6 cards renderizam em grid correto. Hover glow visível. Animação de entrada com stagger ao scrollar. Imagens carregam com lazy loading. Botão navega para /portfolio.

## Aprendizados
<!-- Preencher após execução -->
