import Link from "next/link";
import { Search, UserRound } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS } from "./nav-links";

/** Site header: logo, primary nav, and utility icons. */
export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-surface">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-6">
        <Logo className="text-4xl sm:text-5xl text-indigo-950" />

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-lg font-normal text-body transition-colors hover:text-heading"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-7 text-heading sm:gap-9">
          <button type="button" aria-label="খুঁজুন" className="flex items-center">
            <Search className="size-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="অ্যাকাউন্ট"
            className="flex items-center"
          >
            <UserRound className="size-6" aria-hidden="true" />
          </button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
