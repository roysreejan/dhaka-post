import { cache } from "react";
import type { ArticleResponse, HomeResponse, NewsItem, Article } from "./types";

const BASE_URL = "https://news-json.vercel.app";

/**
 * Fetch the home listing. Revalidated periodically so the homepage stays
 * fresh without refetching on every request.
 */
export async function getHomeNews(): Promise<NewsItem[]> {
  const res = await fetch(`${BASE_URL}/home.json`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`Failed to load home news (${res.status})`);
  }

  const data: HomeResponse = await res.json();
  return data.news;
}

/**
 * Fetch a single article by id.
 *
 * Wrapped in React `cache()` so that calling it from both `generateMetadata`
 * and the page component during the same request results in **one** fetch.
 * Returns `null` on 404 so the page can trigger `notFound()`.
 */
export const getArticle = cache(async (id: string): Promise<Article | null> => {
  const res = await fetch(`${BASE_URL}/details/${id}.json`, {
    next: { revalidate: 300 },
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`Failed to load article ${id} (${res.status})`);
  }

  const data: ArticleResponse = await res.json();
  return data.article;
});
