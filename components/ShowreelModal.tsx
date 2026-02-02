"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Play, X } from "lucide-react";

type ShowreelModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ShowreelModal({ open, onClose }: ShowreelModalProps) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-black"
            initial={reduceMotion ? { opacity: 1 } : { y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { y: 24, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-border p-2 text-muted"
              onClick={onClose}
              aria-label="Showreel kapat"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex aspect-video items-center justify-center bg-zinc-950 text-muted">
              <div className="flex flex-col items-center gap-3">
                <Play className="h-10 w-10 text-accent" />
                <p className="text-xs uppercase tracking-[0.2em]">
                  Showreel placeholder
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
