import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-serif-bn font-bold tracking-tight text-heading ${className}`}
    >
      ঢাকা পোস্ট
    </Link>
  );
}
