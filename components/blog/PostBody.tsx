import DOMPurify from "isomorphic-dompurify";

interface PostBodyProps {
  content: string;
}

export function PostBody({ content }: PostBodyProps) {
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div
      className="prose prose-cocriart max-w-none"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}