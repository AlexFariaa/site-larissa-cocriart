import type { Metadata } from "next";
import { PostCard } from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/cms";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getAllPosts();
  const description = posts.find((post) => post.seo_description)?.seo_description
    || "Insights, estratégia e conteúdo da CoCriart para marcas que querem comunicar com propósito.";

  return {
    title: "Blog | CoCriart",
    description,
    openGraph: {
      title: "Blog | CoCriart",
      description,
      type: "website",
    },
  };
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-[#2d0e44] pt-28 pb-24">
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 font-signature text-2xl text-[#d29ee1]">Blog CoCriart</p>
            <h1 className="font-heading text-5xl font-bold text-white md:text-6xl">
              Conteúdo para marcas que querem <span className="text-[#c56428]">despertar presença</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Estratégia, marketing consciente e reflexões práticas para fortalecer a presença digital da sua marca.
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <section className="mx-auto max-w-3xl rounded-[32px] border border-[#d29ee1]/20 bg-[#1a0829]/80 px-8 py-14 text-center shadow-[0_0_32px_0_rgba(45,14,68,0.45)]">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#6d1f8d]/25">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d29ee1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h2 className="font-heading text-4xl font-bold text-white">Novos artigos em breve</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/70">
                O blog da CoCriart está sendo preparado. Assim que novos conteúdos forem publicados no CMS, eles aparecerão aqui automaticamente.
              </p>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}