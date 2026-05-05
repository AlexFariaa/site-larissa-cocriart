import Image from "next/image";
import Link from "next/link";
import { Post, formatPostDate, getPostExcerpt } from "@/lib/cms";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const imageUrl = post.thumb_image_url || post.cover_image_url;
  const excerpt = getPostExcerpt(post.content, 120);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-[28px] border border-[#d29ee1]/20 bg-[#1a0829]/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#d29ee1]/40 hover:shadow-[0_0_24px_0_rgba(109,31,141,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#6d1f8d]/80 via-[#2d0e44] to-[#1a0829]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d29ee1" strokeWidth="1.6" aria-hidden="true">
              <rect x="4" y="5" width="16" height="14" rx="2.5" />
              <path d="M8 10h8" />
              <path d="M8 14h5" />
            </svg>
          </div>
        )}
      </div>

      <div className="space-y-4 p-6">
        <p className="text-sm uppercase tracking-[0.18em] text-[#d29ee1]/80">
          {formatPostDate(post.published_at)}
        </p>
        <h2 className="font-heading text-2xl font-bold text-white transition-colors group-hover:text-[#d29ee1]">
          {post.title}
        </h2>
        <p className="line-clamp-2 text-sm leading-7 text-white/72">{excerpt}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#c56428] transition-colors group-hover:text-white">
          Ler artigo
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}