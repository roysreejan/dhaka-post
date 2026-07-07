import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/lib/types";

export default function HeroCard({ item }: { item: NewsItem }) {
  return (
    <article className="group">
      <Link href={`/news/${item.id}`} className="block">
        <div className="relative aspect-photo w-full overflow-hidden lg:aspect-video">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
        <h2 className="mt-5 font-serif-bn text-2xl font-bold leading-snug text-heading transition-colors group-hover:text-accent-foreground sm:text-3xl">
          {item.title}
        </h2>
      </Link>
      <p className="mt-3 text-base leading-relaxed text-body">{item.summary}</p>
    </article>
  );
}
