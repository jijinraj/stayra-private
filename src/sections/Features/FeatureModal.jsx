import React, { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function FeatureModal({ open, onClose, feature }) {
  const reduce = useReducedMotion();

  // lock scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            key="dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="feature-title"
            className="fixed inset-0 z-50 grid place-items-center p-4"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-full max-w-md sm:max-w-lg overflow-hidden rounded-2xl bg-zinc-950 ring-1 ring-white/10 shadow-2xl">
              {/* Top hero with grid + glow + Lottie */}
              <div
                className="
                  relative h-40 sm:h-52 isolate
                  [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
                  bg-[size:24px_24px]
                "
              >
                {/* vignette/glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]" />
                {/* Lottie */}
                {feature?.lottie && (
                  <DotLottieReact
                    src={feature.lottie}
                    loop
                    autoplay={!reduce}
                    className="absolute inset-0 w-full h-full"
                    style={{ objectFit: "contain" }}
                  />
                )}
                {/* Close */}
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="absolute right-3 top-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/15"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6">
                <h3
                  id="feature-title"
                  className="font-urbanist text-2xl sm:text-3xl text-white mb-2"
                >
                  {feature?.title}
                </h3>
                <p className="text-white/75 leading-relaxed">
                  {feature?.blurb ??
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere sapien vitae dictum varius. Vivamus efficitur, orci a bibendum laoreet, massa elit ultricies nulla, quis faucibus magna arcu non justo."}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
