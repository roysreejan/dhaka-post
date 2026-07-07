import { getHomeNews } from "@/lib/api";
import HeroCard from "@/components/home/HeroCard";
import ListCard from "@/components/home/ListCard";
import FeatureCard from "@/components/home/FeatureCard";

export default async function Home() {
  const news = await getHomeNews();

  const [hero, ...rest] = news;
  const sidebar = rest.slice(0, 3);
  const features = rest.slice(3, 5);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
      {/* Hero + (desktop) sidebar list */}
      <section className="lg:grid lg:grid-cols-3">
        <div className="lg:col-span-2 lg:pr-10">
          {hero && <HeroCard item={hero} />}
        </div>

        {/* Desktop-only sidebar: items 2–4 */}
        <div className="hidden divide-y divide-line lg:block lg:border-l lg:border-line lg:pl-10">
          {sidebar.map((item) => (
            <div key={item.id} className="py-6 first:pt-0 last:pb-0">
              <ListCard item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Mobile-only: every item after the hero continues as one list */}
      <div className="mt-6 divide-y divide-line border-t border-line lg:hidden">
        {rest.map((item) => (
          <div key={item.id} className="py-7">
            <ListCard item={item} />
          </div>
        ))}
      </div>

      {/* Desktop-only: feature row (items 5–6) */}
      {features.length > 0 && (
        <div className="hidden lg:block">
          <hr className="my-8 border-line" />
          <section className="grid grid-cols-2 divide-x divide-line">
            {features.map((item, i) => (
              <div key={item.id} className={i === 0 ? "pr-8" : "pl-8"}>
                <FeatureCard item={item} />
              </div>
            ))}
          </section>
        </div>
      )}
    </main>
  );
}
