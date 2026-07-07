export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
      {children}
    </span>
  );
}
