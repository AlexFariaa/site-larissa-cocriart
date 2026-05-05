# Diretiva — Fase 1.1: Hero Section

## Objetivo
Criar o hero fullscreen da Home com partículas flutuantes, efeito parallax, slogan animado com entrada staggered e CTA principal. Esta é a primeira impressão da marca — deve ser impactante e imersiva.

## Contexto de Design
- Hero ocupa 100vh, fundo #2d0e44 com aurora radial animada
- Partículas flutuantes em roxo/lilás (#6d1f8d, #d29ee1) — sutis, não poluem
- Logo placeholder: "CoCRIart" — "CoCRI" em Joly Text branco + "art" em Kimberly lilás
- Slogan em duas linhas com entrada staggered (Framer Motion)
- CTA "Ver Trabalhos" scrolls suavemente para a seção PortfolioPreview

## Deliverables
1. `components/sections/Hero.tsx` — componente principal
2. Fundo com aurora animada (CSS keyframes) + noise overlay ativo
3. Logo placeholder tipográfico (sem imagem — cliente ainda não entregou)
4. Slogan animado: "Desperte" (Joly Text) + "& Cocrie." (Kimberly lilás) com stagger
5. Subtítulo com manifesto curto em Quicksand, opacity menor
6. CTA "Ver Trabalhos" — variante ghost do Button com scroll suave para `#portfolio-preview`
7. Seta animada de scroll (bounce CSS) no bottom center
8. Efeito parallax leve no scroll (Framer Motion useScroll + useTransform)

## Constraints
- Partículas: usar tsParticles (@tsparticles/react + @tsparticles/slim) OU canvas customizado — o que for mais leve
- Framer Motion: usar LazyMotion + domAnimation para reduzir bundle
- Sem autoplay de vídeo ou áudio
- Hero deve ser visível e funcional no mobile (texto legível, partículas reduzidas)
- Logo placeholder deve ter comentário: `{/* TODO: substituir por <Image> quando logo final for entregue */}`

## Critério de Sucesso
Hero ocupa 100vh. Partículas animam suavemente. Slogan aparece com stagger visível. CTA ao clicar scrolls para a próxima seção. Parallax sutil no scroll. Responsivo no mobile sem overflow horizontal.

## Aprendizados
<!-- Preencher após execução -->
