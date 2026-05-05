export interface Post {
  id: string;
  title: string;
  slug: string;
  seo_title: string | null;
  seo_description: string | null;
  cover_image_url: string | null;
  thumb_image_url: string | null;
  content: string;
  published_at: string;
  created_at: string;
}

export interface PostsResponse {
  data: Post[];
  total: number;
  page: number;
  per_page: number;
  has_more: boolean;
}

const EMPTY_POSTS_RESPONSE: PostsResponse = {
  data: [],
  total: 0,
  page: 1,
  per_page: 20,
  has_more: false,
};

const CMS_REVALIDATE_SECONDS = 60;
const MAX_PAGES = 5;

function getCmsConfig() {
  const apiUrl = process.env.CMS_API_URL;
  const siteId = process.env.CMS_SITE_ID;
  const apiKey = process.env.CMS_API_KEY;

  if (!apiUrl || !siteId || !apiKey) {
    console.error("[cms] Missing CMS_API_URL, CMS_SITE_ID, or CMS_API_KEY environment variables.");
    return null;
  }

  return { apiUrl, siteId, apiKey };
}

function createPostsUrl(page: number) {
  const config = getCmsConfig();

  if (!config) {
    return null;
  }

  const url = new URL("/api/posts", config.apiUrl);
  url.searchParams.set("site_id", config.siteId);
  url.searchParams.set("api_key", config.apiKey);
  url.searchParams.set("page", String(page));
  return url;
}

export function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function getPostExcerpt(content: string, maxLength: number = 120) {
  const plainText = stripHtml(content);

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return `${plainText.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
  }).format(new Date(date));
}

export async function getPostsPage(page: number): Promise<PostsResponse> {
  const url = createPostsUrl(page);

  if (!url) {
    return {
      ...EMPTY_POSTS_RESPONSE,
      page,
    };
  }

  try {
    const response = await fetch(url, {
      next: { revalidate: CMS_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      console.error(`[cms] Failed to fetch posts page ${page}: ${response.status} ${response.statusText}`);
      return {
        ...EMPTY_POSTS_RESPONSE,
        page,
      };
    }

    const payload = (await response.json()) as Partial<PostsResponse>;

    return {
      data: Array.isArray(payload.data) ? payload.data : [],
      total: typeof payload.total === "number" ? payload.total : 0,
      page: typeof payload.page === "number" ? payload.page : page,
      per_page: typeof payload.per_page === "number" ? payload.per_page : 20,
      has_more: Boolean(payload.has_more),
    };
  } catch (error) {
    console.error(`[cms] Error fetching posts page ${page}:`, error);
    return {
      ...EMPTY_POSTS_RESPONSE,
      page,
    };
  }
}

export async function getAllPosts(page: number = 1): Promise<Post[]> {
  const posts: Post[] = [];
  let currentPage = page;
  let fetchedPages = 0;
  let hasMore = true;

  while (hasMore && fetchedPages < MAX_PAGES) {
    const result = await getPostsPage(currentPage);

    posts.push(...result.data);
    hasMore = result.has_more;
    currentPage += 1;
    fetchedPages += 1;
  }

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const posts = await getAllPosts();
    return posts.find((post) => post.slug === slug) ?? null;
  } catch (error) {
    console.error(`[cms] Error finding post by slug \"${slug}\":`, error);
    return null;
  }
}