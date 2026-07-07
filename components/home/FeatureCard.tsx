import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/lib/types";

export default function FeatureCard({ item }: { item: NewsItem }) {
  return (
    <article className="group">
      <Link href={`/news/${item.id}`} className="flex items-start gap-6">
        <div className="relative h-44 w-60 shrink-0 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div>
          <h3 className="font-serif-bn text-base font-medium leading-snug text-heading transition-colors group-hover:text-accent-foreground sm:text-2xl">
            {item.title}
          </h3>
          <p className="mt-2 leading-relaxed text-body">{item.summary}</p>
        </div>
      </Link>
    </article>
  );
}
