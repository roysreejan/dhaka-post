import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getArticle } from "@/lib/api";
import Badge from "@/components/ui/Badge";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleBody from "@/components/article/ArticleBody";
import TagList from "@/components/article/TagList";
import ShareBar from "@/components/article/ShareBar";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticle(id); // cached — no duplicate fetch with the page

  if (!article) {
    return { title: "সংবাদ পাওয়া যায়নি" };
  }

  return {
    title: article.title,
    description: article.subtitle,
    openGraph: {
      title: article.title,
      description: article.subtitle,
      type: "article",
      url: `/news/${article.id}`,
      siteName: "ঢাকা পোস্ট",
      images: [{ url: article.image, alt: article.title }],
      publishedTime: article.published_at,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.subtitle,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const article = await getArticle(id); // same cached call as generateMetadata

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <article>
        <Badge>{article.category}</Badge>

        <h1 className="mt-4 font-serif-bn text-3xl font-bold leading-snug text-heading sm:text-5xl">
          {article.title}
        </h1>

        <p className="mt-4 border-l-4 border-line pl-4 text-base leading-relaxed font-medium text-body">
          {article.subtitle}
        </p>

        <ArticleMeta
          author={article.author}
          publishedAt={article.published_at}
          readTime={article.read_time}
        />

        <figure className="mt-6">
          <div className="relative aspect-photo w-full overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <figcaption className="mt-3 text-center text-sm italic text-muted">
            ছবি: {article.source}
          </figcaption>
        </figure>

        <ArticleBody html={article.content} />

        <TagList tags={article.tags} />

        <ShareBar title={article.title} />
      </article>
    </main>
  );
}
