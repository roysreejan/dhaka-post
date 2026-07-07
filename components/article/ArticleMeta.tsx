import { UserRound, Calendar, Clock } from "lucide-react";
import { formatBengaliDateTime } from "@/lib/format";

type Props = {
  author: string;
  publishedAt: string;
  readTime: string;
};

export default function ArticleMeta({ author, publishedAt, readTime }: Props) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-y border-line py-4 text-sm text-black">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <span className="flex items-center gap-1.5">
          <UserRound className="size-4" aria-hidden="true" />
          {author}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="size-4" aria-hidden="true" />
          {formatBengaliDateTime(publishedAt)} মিনিট

        </span>
      </div>
      <span className="flex items-center gap-1.5">
        <Clock className="size-4" aria-hidden="true" />
        {readTime} পাঠ
      </span>
    </div>
  );
}
