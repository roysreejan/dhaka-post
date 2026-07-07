export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-3xl animate-pulse px-4 py-8 sm:px-6 sm:py-10">
      <div className="h-6 w-20 rounded bg-line" />
      <div className="mt-4 h-10 w-full rounded bg-line" />
      <div className="mt-2 h-10 w-2/3 rounded bg-line" />
      <div className="mt-4 h-6 w-full rounded bg-line" />

      <div className="mt-6 flex justify-between border-y border-line py-4">
        <div className="h-4 w-40 rounded bg-line" />
        <div className="h-4 w-24 rounded bg-line" />
      </div>

      <div className="mt-6 aspect-photo w-full rounded bg-line" />

      <div className="mt-8 space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-5 w-full rounded bg-line" />
        ))}
        <div className="h-5 w-1/2 rounded bg-line" />
      </div>
    </main>
  );
}
