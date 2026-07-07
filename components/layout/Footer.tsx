import Link from "next/link";
import Logo from "./Logo";
import { FOOTER_LINKS } from "./nav-links";

export default function Footer() {
  return (
    <footer className="mt-auto bg-footer">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6">
        <Logo className="text-2xl" />

        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-base text-body transition-colors hover:text-heading"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-muted">
          © ২০২৪ মেট্রো নিউজ | সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
}
