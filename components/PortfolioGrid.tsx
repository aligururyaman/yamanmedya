"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { portfolioItems } from "@/lib/data";

const filters = ["Video", "Sosyal Medya", "Web", "Kampanya"];

function TiltCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => setIsDesktop(media.matches);
    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateX(${(-y * 6).toFixed(
        2
      )}deg) rotateY(${(x * 6).toFixed(2)}deg)`,
    });
  };

  const reset = () => setStyle({});

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={style}
      className="transition-transform duration-200"
    >
      {children}
    </div>
  );
}

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("Video");
  const [selected, setSelected] = useState<(typeof portfolioItems)[number] | null>(
    null
  );
  const reduceMotion = useReducedMotion();

  const items = useMemo(
    () =>
      portfolioItems.filter((item) =>
        activeFilter ? item.category === activeFilter : true
      ),
    [activeFilter]
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
              activeFilter === filter
                ? "border-accent bg-accent text-black"
                : "border-border text-muted hover:border-accent hover:text-foreground"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <TiltCard key={item.title}>
            <motion.div
              className="group relative overflow-hidden rounded-3xl border border-border bg-zinc-950/40 p-6"
              whileHover={!reduceMotion ? { y: -6 } : undefined}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 border-2 border-accent/70" />
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-muted">
                  {item.category}
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  className="text-sm font-semibold text-accent"
                  onClick={() => setSelected(item)}
                >
                  Detay
                </button>
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="w-full max-w-lg rounded-3xl border border-border bg-zinc-950 p-6"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-muted">
                  {selected.category}
                </p>
                <h3 className="text-xl font-semibold text-foreground">
                  {selected.title}
                </h3>
                <p className="text-sm text-muted">{selected.detail}</p>
              </div>
              <button
                type="button"
                className="mt-6 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted"
                onClick={() => setSelected(null)}
              >
                Kapat
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
