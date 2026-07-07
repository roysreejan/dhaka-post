import Link from "next/link";

/** Row of tag chips shown below the article body. */
export default function TagList({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;

  return (
    <ul className="mt-8 flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <li key={i}>
          <Link
            href="/"
            className="inline-block rounded bg-accent px-3 py-1.5 text-sm text-accent-foreground transition-colors hover:bg-line"
          >
            # {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
