import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center sm:px-6">
      <h1 className="font-serif-bn text-3xl font-bold text-heading">
        সংবাদটি পাওয়া যায়নি
      </h1>
      <p className="text-lg text-body">
        আপনি যে সংবাদটি খুঁজছেন তা সরিয়ে ফেলা হয়েছে বা কখনো ছিল না।
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-heading px-6 py-2.5 text-base font-medium text-surface transition-opacity hover:opacity-90"
      >
        হোমপেজে ফিরে যান
      </Link>
    </main>
  );
}
