export default function ArticleBody({ html }: { html: string }) {
  return (
    <div
      className="article-body mt-8"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
