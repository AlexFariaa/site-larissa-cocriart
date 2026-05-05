export type PortfolioCategory =
  | "identidade-visual"
  | "producao-de-conteudo"
  | "gestao-de-redes";

export const CATEGORY_LABELS: Record<PortfolioCategory, string> = {
  "identidade-visual": "Identidade Visual",
  "producao-de-conteudo": "Produção de Conteúdo",
  "gestao-de-redes": "Gestão de Redes",
};

export type PortfolioItemType = "image" | "video";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  type: PortfolioItemType;
  imageUrl: string;
  /** URL completo do YouTube/Vimeo — apenas para type: 'video' */
  videoUrl?: string;
  /** Data de criação (ISO 8601) — para ordenar por recentes */
  createdAt: string;
}

/**
 * Mock data — substituir por fetch do CMS na Fase 2.5.
 * 4 × identidade-visual (image)
 * 3 × producao-de-conteudo (2 image + 1 video)
 * 3 × gestao-de-redes (image)
 * 
 * Ordenados por data de criação (mais antigos primeiro).
 */
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // ── Identidade Visual (4 × image) ────────────────────────────────────────
  {
    id: "1",
    title: "Identidade Visual — Aura Studio",
    category: "identidade-visual",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    createdAt: "2026-04-24T10:00:00Z",
  },
  {
    id: "2",
    title: "Branding — Despertar Consultoria",
    category: "identidade-visual",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    createdAt: "2026-04-25T10:00:00Z",
  },
  {
    id: "3",
    title: "Logo & Paleta — Raízes Orgânicos",
    category: "identidade-visual",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80",
    createdAt: "2026-04-26T10:00:00Z",
  },
  {
    id: "4",
    title: "Mini Identidade — Florescer Studio",
    category: "identidade-visual",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    createdAt: "2026-04-27T10:00:00Z",
  },

  // ── Produção de Conteúdo (2 × image, 1 × video) ──────────────────────────
  {
    id: "5",
    title: "Ensaio de Produto — Marca Consciente",
    category: "producao-de-conteudo",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    createdAt: "2026-04-28T10:00:00Z",
  },
  {
    id: "6",
    title: "Edição de Foto — Espaço Zen",
    category: "producao-de-conteudo",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    createdAt: "2026-04-29T10:00:00Z",
  },
  {
    id: "7",
    title: "Reel Institucional — CoCriart",
    category: "producao-de-conteudo",
    type: "video",
    imageUrl: "https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    createdAt: "2026-04-30T10:00:00Z",
  },

  // ── Gestão de Redes (3 × image) ───────────────────────────────────────────
  {
    id: "8",
    title: "Gestão de Redes — Espaço Holístico",
    category: "gestao-de-redes",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    createdAt: "2026-05-01T10:00:00Z",
  },
  {
    id: "9",
    title: "Social Media — Luz Terapias",
    category: "gestao-de-redes",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    createdAt: "2026-05-02T10:00:00Z",
  },
  {
    id: "10",
    title: "Feed & Stories — Caminho do Ser",
    category: "gestao-de-redes",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    createdAt: "2026-05-03T10:00:00Z",
  },
];

/** Retorna os N trabalhos mais recentes (ordenados por data decrescente) */
export function getRecentPortfolioItems(limit: number = 6): PortfolioItem[] {
  return [...PORTFOLIO_ITEMS]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}
