import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PostBody } from "@/components/blog/PostBody";
import { Button } from "@/components/ui/Button";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/cms";

export const revalidate = 60;

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog | CoCriart",
      description: "Conteúdos da CoCriart sobre marketing, posicionamento e presença digital.",
    };
  }

  const description = post.seo_description || "Conteúdos da CoCriart sobre marketing, posicionamento e presença digital.";

  return {
    title: post.seo_title || post.title,
    description,
    openGraph: {
      title: post.seo_title || post.title,
      description,
      type: "article",
      publishedTime: post.published_at,
      images: post.cover_image_url ? [{ url: post.cover_image_url }] : undefined,
    },
    twitter: {
      card: post.cover_image_url ? "summary_large_image" : "summary",
      title: post.seo_title || post.title,
      description,
      images: post.cover_image_url ? [post.cover_image_url] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#2d0e44] pt-28 pb-24">
      <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[#d29ee1]/80">
            {formatPostDate(post.published_at)}
          </p>
          <h1 className="mx-auto max-w-4xl font-heading text-5xl font-bold leading-tight text-white md:text-6xl">
            {post.title}
          </h1>
        </header>

        {post.cover_image_url ? (
          <div className="relative mb-12 aspect-[16/8] overflow-hidden rounded-[32px] border border-[#d29ee1]/15 bg-[#1a0829] shadow-[0_0_36px_0_rgba(45,14,68,0.35)]">
            <Image
              src={post.cover_image_url}
              alt={post.title}
              fill
              unoptimized
              className="object-cover"
              sizes="(min-width: 1280px) 1200px, 100vw"
            />
          </div>
        ) : null}

        <div className="rounded-[32px] border border-[#d29ee1]/15 bg-[#1a0829]/75 px-6 py-10 shadow-[0_0_36px_0_rgba(45,14,68,0.35)] sm:px-10 md:px-14">
          <PostBody content={post.content} />
        </div>

        <section className="mt-14 rounded-[32px] border border-[#d29ee1]/20 bg-gradient-to-br from-[#6d1f8d]/90 to-[#2d0e44] px-8 py-12 text-center shadow-[0_0_40px_0_rgba(109,31,141,0.25)]">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Gostou deste conteúdo? <span className="text-[#d29ee1]">Conheça nossos serviços</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/75">
            Se a sua marca precisa transformar estratégia em presença digital consistente, a CoCriart pode construir esse caminho com você.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="ghost" href="/servicos" className="border-white/35 px-8 py-4 text-base text-white hover:bg-white/10">
              Ver serviços
            </Button>
          </div>
        </section>
      </article>
    </main>
  );
}