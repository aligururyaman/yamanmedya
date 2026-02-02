"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

const steps = [
  { title: "Brief", detail: "Hedef, tempo ve içerik formatlarını netleriz." },
  { title: "Çekim", detail: "Set planı, ışık ve kadrajla prodüksiyonu kurarız." },
  { title: "Kurgu", detail: "Montaj, renk, ses ve versiyonlama ile hızlanırız." },
  { title: "Yayın", detail: "Takvim, dağıtım ve raporlama ile performansı ölçeriz." },
];

export default function ProcessSticky() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current || reduceMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("[data-step]");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0.3, y: 24 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <div
      ref={containerRef}
      className="grid gap-10 lg:grid-cols-[1fr_1.1fr]"
    >
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">
          Süreç
        </p>
        <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Brief’ten yayına, tek akış.
        </h3>
        <p className="text-sm leading-7 text-muted">
          Adım adım ilerleyen süreç tasarımıyla üretimi kontrol altında tutar,
          her aşamada görünürlük sağlarız.
        </p>
      </div>
      <div className="space-y-6">
        {steps.map((step) => (
          <div
            key={step.title}
            data-step
            className="rounded-2xl border border-border bg-zinc-950/50 p-5"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              {step.title}
            </p>
            <p className="mt-2 text-sm text-muted">{step.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
