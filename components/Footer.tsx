import Link from "next/link";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-black py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 text-sm text-muted lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground">
            Yaman Medya
          </p>
          <p>İçeriği parlatır, markayı büyütürüz.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline-hover text-muted hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Yaman Medya
        </p>
      </div>
    </footer>
  );
}
