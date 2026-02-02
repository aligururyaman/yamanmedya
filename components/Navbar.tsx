"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import Button from "@/components/Button";
import { cn } from "@/lib/helpers";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="text-sm font-semibold tracking-[0.3em]">
          YAMAN MEDYA <span className="text-[#f97316]">•</span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs uppercase tracking-[0.2em] text-muted transition hover:text-accent",
                pathname === link.href && "text-accent"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <Button href="/iletisim" label="Teklif Al" />
        </div>
        <button
          type="button"
          className="flex items-center justify-center rounded-full border border-border p-2 text-foreground lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Menüyü aç"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <div className="h-0.5 w-full bg-[#f97316]" />

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/97 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex h-full flex-col justify-between px-6 py-8"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.3em]">
                  YAMAN MEDYA
                </span>
                <button
                  type="button"
                  className="rounded-full border border-border p-2"
                  onClick={() => setOpen(false)}
                  aria-label="Menüyü kapat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-10 flex flex-1 flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-lg font-semibold text-foreground transition hover:text-accent",
                      pathname === link.href && "text-accent"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/iletisim" label="Teklif Al" className="w-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
