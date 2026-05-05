# Diretiva — Fase 0.1: Project Setup & Deploy Pipeline

**Status:** Pendente  
**Critério de sucesso:** `npm run dev` roda sem erros + URL pública no Netlify acessível

---

## Objetivo

Inicializar o projeto Next.js 14 com todas as dependências, criar a estrutura de pastas completa, configurar Netlify e garantir o pipeline de deploy automático funcionando.

---

## Contexto

- Diretório de trabalho: raiz do repositório (onde estão `CLAUDE-cocriart.md` e `PRD-cocriart.md`)
- Repositório GitHub já existe (apenas adicionar os arquivos)
- Deploy target: Netlify com build automático no push para `main`
- Fontes definitivas (Joly Text, Kimberly) serão entregues futuramente — usar substitutos Google Fonts por ora

---

## Deliverables

### 1. Inicializar Next.js 14
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
```

### 2. Instalar dependências adicionais
```bash
npm install framer-motion @tsparticles/react @tsparticles/slim lucide-react clsx tailwind-merge
npm install -D @types/node
```

### 3. `next.config.js`
Configurar domains de imagens externas:
```js
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: 'i.ytimg.com' },
    { protocol: 'https', hostname: 'img.youtube.com' },
    { protocol: 'https', hostname: 'vumbnail.com' },
  ],
}
```

### 4. `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```
Instalar: `npm install -D @netlify/plugin-nextjs`

### 5. `.env.example`
```
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_SITE_URL=
CMS_API_URL=
CMS_API_TOKEN=
```

### 6. `.env.local`
Preencher com valores iniciais:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=5511945051940
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/_cocriart_
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CMS_API_URL=
CMS_API_TOKEN=
```

### 7. `.gitignore`
Garantir que `.env.local` está na lista (já vem por padrão no Next.js).

### 8. Estrutura de pastas
Criar manualmente os diretórios que o `create-next-app` não cria:
```
components/ui/
components/layout/
components/sections/
components/blog/
lib/
public/images/
public/fonts/
styles/
directives/     (já existe)
```

### 9. Arquivos placeholder
- `app/page.tsx` — página mínima com `<h1>CoCriart — Em breve</h1>` e fundo `#2d0e44`
- `app/layout.tsx` — layout raiz básico (sem Navbar ainda — entra na Fase 2.1)
- `styles/globals.css` — apenas reset básico e `background: #2d0e44; color: white`
- `lib/utils.ts` — exportar função `cn` (clsx + tailwind-merge)

### 10. `README.md`
Instruções de setup:
- Pré-requisitos (Node 18+)
- `npm install`
- Copiar `.env.example` → `.env.local` e preencher variáveis
- `npm run dev`
- Deploy: push para `main` aciona build no Netlify

---

## Constraints

- Stack: Next.js 14 App Router, TypeScript, Tailwind CSS
- Código em inglês, UI em português BR
- `.env.local` nunca no git
- Não implementar nenhuma seção visual ainda — apenas fundação

---

## Critério de Sucesso

1. `npm run dev` roda sem erros na porta 3000
2. `npm run build` completa sem erros
3. Push para `main` → Netlify faz build e URL pública está acessível
4. Página inicial exibe fundo roxo escuro com texto "CoCriart — Em breve"

---

## Aprendizados (preencher após execução)

_Vazio — aguardando execução._
