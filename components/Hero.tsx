"use client";

import { useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import TextReveal from "@/components/motion/TextReveal";
import Button from "@/components/Button";
import ShowreelModal from "@/components/ShowreelModal";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const posX = (event.clientX - rect.left) / rect.width - 0.5;
    const posY = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(posX * 12);
    y.set(posY * 12);
  };

  return (
    <section
      className="relative overflow-hidden rounded-[32px] border border-border bg-zinc-950/70 px-6 py-16 shadow-glow-soft sm:px-10 lg:px-16"
      onMouseMove={handleMove}
    >
      <div className="grain" />
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{ x, y }}
        aria-hidden="true"
      >
        <div className="h-full w-full bg-radial-glow" />
      </motion.div>

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f97316]/60 bg-[#f97316]/15 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-[#f97316]">
            Ajans
          </div>
          <TextReveal
            text="Video, Sosyal Medya ve Web Tasarımda Net Sonuç."
            className="text-3xl font-semibold text-foreground sm:text-5xl"
          />
          <div className="h-px w-24 bg-gradient-to-r from-[#f97316] to-transparent" />
          <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
            Yaman Medya; çekimden kurguya, içerik stratejisinden web sitesine
            kadar markanı tek bir çizgide büyütür.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/portfoy" label="Portföyü Gör" />
            <Button href="/iletisim" label="Hemen İletişime Geç" variant="secondary" />
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-black">
            <div className="relative aspect-video bg-zinc-950">
              <video
                className="h-full w-full object-cover"
                src="/main.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="h-10 w-10 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShowreelModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
