# Diretiva — Fase 2.2: Página Sobre

## Objetivo
Criar a página /sobre com manifesto da marca, missão, pilares de valor e como a espiritualidade se aplica ao marketing holístico.

## Deliverables
1. `app/sobre/page.tsx` com metadata única (title: "Sobre | CoCriart")
2. `components/sections/AboutHero.tsx`
   - Hero com título "A CoCriart" em Joly Text
   - Subtítulo "Marketing com Alma" em Kimberly lilás
   - Imagem de fundo: ilustração mística (Unsplash — cristais, luzes neon, câmera) com overlay #2d0e44/80%
3. `components/sections/Manifesto.tsx`
   - Texto completo do manifesto em Joly Text (tamanho maior, estilo editorial)
   - Frase em destaque: "Sem consciência, o marketing vai te levar mais rápido para o lugar errado." — em Kimberly, tamanho grande, cor lilás
   - Linha decorativa em laranja separando parágrafos
4. `components/sections/Values.tsx`
   - 4 pilares: Marketing Holístico | Consciência | Cocriação | Estética Profissional
   - Cada pilar: ícone SVG, título em Joly Text, descrição em Quicksand
   - Layout em grid 2x2 (desktop) / 1 coluna (mobile)
5. CTA final: "Ver Portfólio" (primary) + "Fale Conosco" (ghost)

## Constraints
- Manifesto copy: criar texto coerente com o tom da marca se não fornecido
- Imagens via next/image com alt descritivo
- Animações whileInView em todas as seções
- Meta description: "Conheça a filosofia do Marketing Holístico da CoCriart — onde estratégia, criatividade e consciência se encontram."

## Critério de Sucesso
/sobre carrega sem erro. Manifesto legível e estilizado. 4 pilares renderizam em grid. CTAs funcionam. Meta tags corretas no <head>.

## Aprendizados
<!-- Preencher após execução -->
