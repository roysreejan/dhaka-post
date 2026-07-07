/** Shape of the news JSON API (news-json.vercel.app). */

/** A single news item as returned in the home listing. */
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  image: string;
  source: string;
  category: string;
  published_at: string;
  details_url: string;
}

/** Response body of `/home.json`. */
export interface HomeResponse {
  status: boolean;
  updated_at: string;
  total: number;
  news: NewsItem[];
}

/** A full article as returned by `/details/{id}.json`. */
export interface Article {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  source: string;
  author: string;
  category: string;
  published_at: string;
  read_time: string;
  /** Pre-rendered HTML string (paragraphs, headings, lists, blockquotes). */
  content: string;
  tags: string[];
  original_url: string;
}

/** Response body of `/details/{id}.json`. */
export interface ArticleResponse {
  status: boolean;
  article: Article;
}
