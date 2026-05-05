# Diretiva — Fase 2.3: Página Portfólio

## Objetivo
Criar a página /portfolio com galeria filtrada por categoria, suporte a imagem (com lightbox) e embed de vídeo lazy.

## Categorias do Portfólio
As categorias refletem os serviços reais da CoCriart:

| Filtro | Descrição |
|---|---|
| Todos | Exibe todos os trabalhos |
| Identidade Visual | Logos, brandings, mini identidades, artes gráficas |
| Produção de Conteúdo | Fotos, reels, vídeos, edições |
| Gestão de Redes | Feeds, calendários, stories, resultados de gestão |

## Deliverables
1. `app/portfolio/page.tsx` com metadata única (title: "Portfólio | CoCriart")
2. Filtros por categoria: "Todos" | "Identidade Visual" | "Produção de Conteúdo" | "Gestão de Redes"
   - Botões de filtro estilizados com estado ativo (fundo laranja #c56428)
   - Filtro sem reload de página (estado React)
3. `components/ui/PortfolioCard.tsx` estendido com suporte a tipo:
   - `type: 'image'` → exibe next/image, clique abre lightbox
   - `type: 'video'` → exibe thumbnail + ícone play, clique exibe embed YouTube/Vimeo
4. Lightbox simples para imagens (sem biblioteca externa — modal com Framer Motion)
5. Embed de vídeo lazy: só carrega o iframe quando o usuário clica no card
6. Atualizar `lib/mock-portfolio.ts` (já criado na 1.2) com 10 items distribuídos:
   - 4 × Identidade Visual (type: image)
   - 3 × Produção de Conteúdo (2 image + 1 video)
   - 3 × Gestão de Redes (type: image)
7. Estado vazio estilizado: ícone + "Nenhum trabalho nesta categoria ainda." + link Instagram
8. Animação de filtro com `AnimatePresence` (Framer Motion) — cards saem/entram suavemente
9. Hero da página: título "Portfólio" + subtítulo "Trabalhos com consciência e estética"

## Constraints
- Categorias no código como enum/const: `'identidade-visual' | 'producao-de-conteudo' | 'gestao-de-redes'`
- Embeds de vídeo: NUNCA autoplay, NUNCA carregar iframe antes do clique do usuário
- Lightbox: fechar com ESC, clique fora, ou botão X — acessível (aria-modal, focus trap)
- AnimatePresence obrigatório para transição de filtro
- Imagens mock do Unsplash (já no remotePatterns do next.config.js)
- Os slugs das categorias devem ser consistentes com `lib/mock-services.ts`

## Critério de Sucesso
Filtros funcionam sem reload. Cards de vídeo só carregam embed após clique. Lightbox abre em imagens e fecha com ESC. Estado vazio aparece quando categoria não tem items. Animação de filtro suave.

## Aprendizados
<!-- Preencher após execução -->