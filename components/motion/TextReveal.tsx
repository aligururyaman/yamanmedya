"use client";

import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { cn } from "@/lib/helpers";

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "p";
  className?: string;
};

export default function TextReveal({
  text,
  as: Component = "h1",
  className,
}: TextRevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLHeadingElement | null>(null);
  const words = useMemo(() => text.split(" "), [text]);

  useEffect(() => {
    if (!ref.current || reduceMotion) return;
    const ctx = gsap.context(() => {
      const targets = ref.current?.querySelectorAll("[data-word]");
      if (!targets) return;
      gsap.fromTo(
        targets,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <Component ref={ref} className={cn("font-display", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex flex-wrap gap-x-2">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} data-word className="inline-block">
            {word}
          </span>
        ))}
      </span>
    </Component>
  );
}
