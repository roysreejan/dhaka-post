"use client";

import { useState } from "react";
import { Share2, Bookmark, Printer } from "lucide-react";

export default function ShareBar({ title }: { title: string }) {
  const [bookmarked, setBookmarked] = useState(false);

  async function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user cancelled — no-op
      }
    } else {
      await navigator.clipboard.writeText(url);
    }
  }

  const buttonClass =
    "flex size-10 items-center justify-center rounded-full bg-surface text-heading transition-colors hover:bg-line";

  return (
    <div className="mt-8 flex items-center justify-between gap-4 rounded bg-accent px-5 py-4">
      <span className="font-semibold text-heading">নিবন্ধটি শেয়ার করুন:</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleShare}
          aria-label="শেয়ার করুন"
          className={buttonClass}
        >
          <Share2 className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => setBookmarked((v) => !v)}
          aria-label="বুকমার্ক করুন"
          aria-pressed={bookmarked}
          className={buttonClass}
        >
          <Bookmark
            className="size-5"
            aria-hidden="true"
            fill={bookmarked ? "currentColor" : "none"}
          />
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          aria-label="প্রিন্ট করুন"
          className={buttonClass}
        >
          <Printer className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
