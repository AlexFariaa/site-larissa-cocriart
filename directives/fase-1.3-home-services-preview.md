# Diretiva — Fase 1.3: Services Preview + About Teaser

## Objetivo
Criar a seção de serviços na Home com 4 cards e CTAs individuais, seguida de um teaser da seção Sobre com frase do manifesto.

## Contexto de Design
- Seção de serviços: fundo levemente mais claro que o deep (#2d0e44) — usar gradiente sutil
- Cards de serviço: ícone SVG no topo, título, descrição curta, CTA
- About Teaser: fundo #6d1f8d com frase de impacto do manifesto e CTA secundário

## Deliverables
1. `components/sections/ServicesPreview.tsx`
2. 4 cards de serviço com ícone SVG inline, título, descrição curta e CTA:

   | Serviço | Slug | Ícone (referência) |
   |---|---|---|
   | Gestão de Redes | `/servicos/gestao-de-redes` | smartphone com ondas/conexão |
   | Produção de Conteúdo | `/servicos/producao-de-conteudo` | câmera / claquete |
   | Identidade Visual | `/servicos/identidade-visual` | pincel / paleta |
   | Consultoria | `/servicos/consultoria` | cérebro-lâmpada |

3. Descrições curtas para cada card:
   - **Gestão de Redes:** "Calendário editorial, stories, postagem e acompanhamento estratégico do seu Instagram."
   - **Produção de Conteúdo:** "Captação de foto e vídeo, edição e criação de conteúdo com intenção e estética."
   - **Identidade Visual:** "Da mini identidade ao branding completo — presença visual que comunica quem você é."
   - **Consultoria:** "Estratégia com consciência. Diagnóstico, planejamento e orientação para marcas que querem despertar."

4. CTA por card: "Saiba Mais" variante ghost → `/servicos/[slug]`
5. `components/sections/AboutTeaser.tsx` com:
   - Frase: "Sem consciência, o marketing vai te levar mais rápido para o lugar errado."
   - Subtítulo: "Conheça a filosofia por trás do Marketing Holístico."
   - CTA: "Conheça a CoCriart" → `/sobre`
6. Animações de entrada `whileInView` em ambas as seções

## Constraints
- Ícones SVG devem ser desenhados inline (não usar lucide-react para estes — identidade da marca)
- Cards de serviço: SEM preço, SEM tabela — apenas descrição e CTA
- AboutTeaser: fundo #6d1f8d com texto branco, sem noise overlay (contraste intencional)
- Mock data dos serviços em `lib/mock-services.ts` com os 4 slugs corretos
- Grid: 4 colunas desktop / 2 colunas tablet / 1 coluna mobile

## Critério de Sucesso
4 cards renderizam com ícones visíveis. CTAs navegam para as rotas corretas. AboutTeaser exibe frase do manifesto. Animações de entrada funcionam no scroll.

## Aprendizados
<!-- Preencher após execução -->