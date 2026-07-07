/** Skeleton mirroring the home layout while news loads. */
export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-6xl animate-pulse px-4 py-8 sm:px-6 sm:py-10">
      <section className="grid gap-8 lg:grid-cols-3">
        {/* Hero skeleton */}
        <div className="lg:col-span-2">
          <div className="aspect-photo w-full rounded bg-line" />
          <div className="mt-5 h-9 w-11/12 rounded bg-line" />
          <div className="mt-3 h-5 w-full rounded bg-line" />
          <div className="mt-2 h-5 w-2/3 rounded bg-line" />
        </div>

        {/* Sidebar skeleton */}
        <div className="divide-y divide-line border-t border-line pt-6 lg:border-t-0 lg:pt-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
              <div className="aspect-photo w-28 shrink-0 rounded bg-line sm:w-32" />
              <div className="flex-1 space-y-2 pt-1">
                <div className="h-4 w-full rounded bg-line" />
                <div className="h-4 w-3/4 rounded bg-line" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-8 border-line" />

      <section className="grid gap-8 sm:grid-cols-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex items-start gap-5">
            <div className="aspect-photo w-32 shrink-0 rounded bg-line sm:w-44" />
            <div className="flex-1 space-y-2 pt-1">
              <div className="h-5 w-full rounded bg-line" />
              <div className="h-4 w-full rounded bg-line" />
              <div className="h-4 w-2/3 rounded bg-line" />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
