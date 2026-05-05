# Diretiva — Fase 0.2: Design Tokens & Globals

## Objetivo
Configurar todos os tokens de design da CoCriart no Tailwind e no CSS global, importar as fontes corretamente via next/font e criar o componente Button base com todas as variantes.

## Contexto de Design
- **Direção visual:** "Cosmos Místico Digital" — dark, profundo, com glow neon e textura de ruído
- **Paleta:** #2d0e44 (fundo), #6d1f8d (roxo), #d29ee1 (lilás), #c56428 (laranja), #4187af (azul)
- **Tipografia:** Joly Text (H1/H2 serifada), Kimberly (cursiva/script), Quicksand (body/UI)
- Esta fase não tem UI visível ainda — é a fundação que todas as fases seguintes dependem

## Deliverables
1. `tailwind.config.ts` com paleta, tipografia, sombras glow, gradientes e keyframes
2. `styles/globals.css` com CSS variables, reset, scrollbar customizada, noise overlay
3. `app/layout.tsx` com fontes via next/font e metadata completa
4. `components/ui/Button.tsx` com variantes: primary, ghost, whatsapp, link
5. `app/page.tsx` atualizado como página de validação visual (temporária)

## Constraints
- Fontes DEVEM ser carregadas via next/font (nunca @import CSS externo)
- Todos os tokens de cor no tailwind.config.ts E como CSS variables no globals.css
- Button sem elemento `<form>`, apenas `<button>` e `<a>`
- Noise overlay via CSS puro, sem biblioteca
- TypeScript estrito, sem `any`

## Critério de Sucesso
`localhost:3000` exibe: 3 fontes distintas renderizando, 3 botões com glow no hover, 5 swatches de cor, granulado sutil do noise overlay sobre o fundo #2d0e44.

## Aprendizados
<!-- Preencher após execução -->
