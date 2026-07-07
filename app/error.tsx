"use client";

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center sm:px-6">
      <h1 className="font-serif-bn text-3xl font-bold text-heading">
        কিছু একটা সমস্যা হয়েছে
      </h1>
      <p className="text-lg text-body">
        সংবাদ লোড করা যায়নি। একটু পরে আবার চেষ্টা করুন।
      </p>
      <button
        type="button"
        onClick={() => unstable_retry()}
        className="mt-2 rounded-full bg-heading px-6 py-2.5 text-base font-medium text-surface transition-opacity hover:opacity-90"
      >
        আবার চেষ্টা করুন
      </button>
    </main>
  );
}
