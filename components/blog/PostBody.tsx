interface PostBodyProps {
  content: string;
}

export function PostBody({ content }: PostBodyProps) {
  return (
    <div
      className="prose prose-cocriart max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}