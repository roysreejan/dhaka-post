export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "বিশ্ব", href: "/" },
  { label: "ব্যবসা", href: "/" },
  { label: "প্রযুক্তি", href: "/" },
  { label: "রাজনীতি", href: "/" },
  { label: "সংস্কৃতি", href: "/" },
  { label: "মতামত", href: "/" },
];

/** Footer utility links. */
export const FOOTER_LINKS: NavLink[] = [
  { label: "আমাদের সম্পর্কে", href: "/" },
  { label: "যোগাযোগ", href: "/" },
  { label: "গোপনীয়তা নীতি", href: "/" },
  { label: "বিজ্ঞাপন", href: "/" },
];
