// src/sections/Features/FeatureModal.jsx
import React, { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

/** Renders string | string[] | { subheading, body }[] */
function renderBlurbContent(blurb) {
  if (!blurb) return null;

  if (typeof blurb === "string") {
    return <p className="text-white/75 leading-relaxed">{blurb}</p>;
  }

  if (Array.isArray(blurb) && blurb.every((b) => typeof b === "string")) {
    return blurb.map((para, i) => (
      <p key={i} className="text-white/75 leading-relaxed mt-4 first:mt-0">
        {para}
      </p>
    ));
  }

  if (
    Array.isArray(blurb) &&
    blurb.every(
      (b) =>
        typeof b === "object" &&
        b !== null &&
        typeof b.subheading === "string" &&
        (typeof b.body === "string" ||
          (Array.isArray(b.body) && b.body.every((x) => typeof x === "string")))
    )
  ) {
    return blurb.map((sec, i) => (
      <section key={i} className="mt-6 first:mt-0">
        <h4 className="font-urbanist text-lg sm:text-xl text-white mb-2">
          {sec.subheading}
        </h4>
        {Array.isArray(sec.body) ? (
          sec.body.map((p, j) => (
            <p key={j} className="text-white/75 leading-relaxed mt-3 first:mt-0">
              {p}
            </p>
          ))
        ) : (
          <p className="text-white/75 leading-relaxed">{sec.body}</p>
        )}
      </section>
    ));
  }

  return (
    <pre className="text-white/70 text-sm bg-white/5 rounded-lg p-3 overflow-x-auto">
      {JSON.stringify(blurb, null, 2)}
    </pre>
  );
}

export default function FeatureModal({ open, onClose, feature }) {
  const reduce = useReducedMotion();

  // Lock page scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

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

          {/* Dialog wrapper:
              - Mobile: centered
              - Desktop: bottom-centered, no bottom padding so it touches the bottom */}
          <motion.div
            key="dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="feature-title"
            className="fixed inset-0 z-50 grid justify-center items-center md:items-end px-4 pt-4 pb-0"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="
                relative w-full
                max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl
                max-h-[92vh] md:max-h-[92vh]
                flex flex-col overflow-hidden
                rounded-2xl md:rounded-t-2xl md:rounded-b-none
                bg-zinc-950 ring-1 ring-white/10 shadow-2xl
              "
            >
              {/* Header (fixed) */}
              <div
                className="
                  relative h-40 sm:h-52 md:h-56 isolate shrink-0
                  [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
                  bg-[size:24px_24px]
                "
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]" />
                {feature?.lottie && (
                  <DotLottieReact
                    src={feature.lottie}
                    loop
                    autoplay={!reduce}
                    className="absolute inset-0 w-full h-full"
                    style={{ objectFit: "contain" }}
                  />
                )}
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="absolute right-3 top-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/15"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body (scrollable) */}
              <div
                className="
                  p-5 sm:p-6 overflow-y-auto flex-1 overscroll-contain
                  pr-5 sm:pr-6 -mr-2 modal-scroll
                "
              >
                <h3
                  id="feature-title"
                  className="font-urbanist text-2xl sm:text-3xl text-white mb-2"
                >
                  {feature?.title}
                </h3>

                <div>{renderBlurbContent(feature?.blurb)}</div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
