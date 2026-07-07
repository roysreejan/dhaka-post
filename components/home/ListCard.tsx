import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/lib/types";

export default function ListCard({ item }: { item: NewsItem }) {
  return (
    <article className="group">
      <Link href={`/news/${item.id}`} className="flex items-start gap-4">
        <div className="relative h-32 w-40 shrink-0 overflow-hidden lg:aspect-square lg:h-auto lg:w-36">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="font-serif-bn text-base font-semibold leading-snug text-heading transition-colors group-hover:text-accent-foreground sm:text-lg">
          {item.title}
        </h3>
      </Link>
    </article>
  );
}
