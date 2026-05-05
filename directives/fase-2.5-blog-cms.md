# Diretiva — Fase 2.5: Blog + Integração A2 Creator CMS

## Objetivo
Implementar listagem de posts e página de post individual consumindo dados do A2 Creator CMS via API, com ISR e fallback gracioso.

## Pré-requisito
⚠️ Esta fase exige que as variáveis abaixo estejam preenchidas no `.env.local` e no Netlify antes de iniciar:
- `CMS_API_URL=https://a2-creator.netlify.app`
- `CMS_SITE_ID=` (ID do site no A2 Creator)
- `CMS_API_KEY=` (API key do site no A2 Creator)

## Endpoint da API

### Listagem de posts
```
GET https://a2-creator.netlify.app/api/posts?site_id={siteId}&api_key={apiKey}&page={n}
```
- Autenticação: `api_key` como query param (não Bearer token)
- Retorna apenas posts com `status = 'published'`, ordenados por `published_at` desc
- Paginação: 20 posts por página, parâmetro `?page=`

### Resposta da listagem
```json
{
  "data": [...],
  "total": 42,
  "page": 1,
  "per_page": 20,
  "has_more": true
}
```

### Objeto de cada post
```typescript
{
  id: string
  title: string
  slug: string
  seo_title: string | null
  seo_description: string | null
  cover_image_url: string | null
  thumb_image_url: string | null
  content: string        // HTML completo do artigo
  published_at: string   // ISO 8601
  created_at: string     // ISO 8601
}
```

**Não existe endpoint de post individual por slug** — buscar todos os posts e filtrar por slug no lado do Next.js, ou usar `generateStaticParams` com os slugs da listagem.

## Deliverables

### 1. `lib/cms.ts`
Funções com tipagem TypeScript completa:

```typescript
// Tipo base
interface Post {
  id: string
  title: string
  slug: string
  seo_title: string | null
  seo_description: string | null
  cover_image_url: string | null
  thumb_image_url: string | null
  content: string
  published_at: string
  created_at: string
}

interface PostsResponse {
  data: Post[]
  total: number
  page: number
  per_page: number
  has_more: boolean
}

// Funções a implementar:
getAllPosts(page?: number): Promise<Post[]>
// Busca todos os posts paginando automaticamente até has_more = false
// Máximo de 5 páginas para evitar timeout no build

getPostBySlug(slug: string): Promise<Post | null>
// Busca getAllPosts() e filtra por slug

getPostsPage(page: number): Promise<PostsResponse>
// Retorna uma página específica com metadados de paginação
```

Tratamento de erro em todas as funções:
- Try/catch em todos os fetches
- Retornar `[]` ou `null` em caso de falha (NUNCA lançar erro que quebre o build)
- Console.error com mensagem descritiva para debug

### 2. Atualizar `next.config.js`
Adicionar domínio do CMS no `remotePatterns`:
```javascript
{ protocol: 'https', hostname: 'a2-creator.netlify.app' }
```
E qualquer outro domínio que as imagens de cover possam vir.

### 3. `app/blog/page.tsx`
- Grid de PostCards: cover (thumb_image_url com fallback para cover_image_url), título, excerpt (primeiros 120 chars do content sem HTML), data formatada em pt-BR
- `export const revalidate = 60` (ISR — revalida a cada 60s)
- Fallback se CMS offline ou `data` vazio: seção estilizada "Novos artigos em breve" com ícone
- Metadata: title "Blog | CoCriart", description usando seo_description se disponível

### 4. `app/blog/[slug]/page.tsx`
- `generateStaticParams()` usando `getAllPosts()` para pre-render
- `export const revalidate = 60`
- Cover fullwidth com `next/image` (cover_image_url)
- Título em Joly Text
- Data formatada: `new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' })`
- Corpo do post via `PostBody` component (HTML sanitizado)
- CTA no rodapé: "Gostou deste conteúdo? Conheça nossos serviços" → /servicos
- Metadata dinâmica: usar `seo_title || title` e `seo_description` para meta tags e OG

### 5. `components/blog/PostCard.tsx`
- Imagem: `thumb_image_url` com fallback para `cover_image_url` com fallback para placeholder roxo com ícone
- Título, excerpt (truncado com `line-clamp-2`), data formatada, link para `/blog/[slug]`
- Hover: glow sutil + scale leve (consistente com PortfolioCard)

### 6. `components/blog/PostBody.tsx`
- Recebe `content: string` (HTML do A2 Creator)
- Sanitizar HTML com `isomorphic-dompurify` antes de renderizar
- Instalar: `npm install isomorphic-dompurify @types/dompurify`
- Renderizar com `dangerouslySetInnerHTML` APÓS sanitização
- Estilos tipográficos via classe `prose` customizada no globals.css:
  - `h2`, `h3`: Joly Text, branco
  - `p`: Quicksand, `text-white/80`
  - `a`: cor lilás (#d29ee1), hover branco
  - `blockquote`: borda esquerda laranja (#c56428), fundo #1a0829, padding
  - `img`: `rounded-lg`, `w-full`
  - `strong`: cor lilás
  - `code`: fundo #1a0829, padding, rounded

### 7. Atualizar `.env.example`
Adicionar as novas variáveis:
```
CMS_API_URL=https://a2-creator.netlify.app
CMS_SITE_ID=your_site_id_here
CMS_API_KEY=your_api_key_here
```

## Constraints
- NUNCA expor `CMS_API_KEY` no cliente — todas as chamadas à API do CMS são Server Components ou Server Actions (sem `NEXT_PUBLIC_` prefix)
- Sanitização com `isomorphic-dompurify` é obrigatória antes de qualquer `dangerouslySetInnerHTML`
- Imagens do CMS podem vir de qualquer domínio — usar `unoptimized` no next/image para covers do CMS ou adicionar o domínio correto no `remotePatterns`
- `getAllPosts` deve ter limite de páginas (max 5) para não travar o build

## Critério de Sucesso
Com CMS online: `/blog` lista os posts com cover e excerpt. `/blog/[slug]` renderiza o post completo com HTML estilizado. Meta OG correto por post. Com CMS offline: build não falha, exibe mensagem de fallback. `revalidate=60` configurado em ambas as páginas.

## Aprendizados
<!-- Preencher após execução -->