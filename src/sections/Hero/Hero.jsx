import React from "react";
import { Section, Container } from "@/design-system/layout";
import { Button } from "@/design-system/button";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();

  const riseBlur = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 28, scale: 0.985, filter: "blur(16px)" },
        animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <Section id="hero" className="relative overflow-hidden pt-28 pb-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-10%,rgba(255,255,255,0.06),transparent_80%)]" />

      <Container className="relative mx-auto max-w-5xl">
        {/* whole block centered */}
        <div className="mx-auto w-fit space-y-7">
          {/* GROUP 1 — Headline + Subheading (first) */}
          <motion.div
            {...riseBlur}
            transition={{ ...riseBlur.transition, delay: 0.5 }}
            className="space-y-7"
          >
            {/* Headline (centered) */}
            <h1 className="font-urbanist tracking-tight text-white leading-[1.05] text-center text-[36px] md:text-6xl lg:text-7xl">
              <span>Why Stay Stuck</span>{" "}
              <span className="align-baseline inline-block font-extrabold text-red-500 text-[1.2em] md:text-[1.25em]">
                !
              </span>
            </h1>

            {/* Subheading — exact placement you liked */}
            <div className="w-fit mx-auto md:translate-x-12 lg:translate-x-24 mb-8 md:mb-10">
              <p className="font-urbanist text-white/90 text-3xl md:text-4xl">
                Just{" "}
                <span className="relative inline-block font-semibold text-teal-400">
                  Stayra
                  <span className="absolute left-0 right-0 -bottom-2 h-1.5 rounded-full bg-teal-400/90"></span>
                </span>{" "}
                <span role="img" aria-label="white heart">🤍</span>
              </p>
            </div>
          </motion.div>

          {/* GROUP 2 — Tagline (second) */}
          <motion.p
            {...riseBlur}
            transition={{ ...riseBlur.transition, delay: 1.3 }}
            className="text-left text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            Housing made simple — for landlords,<br />
            tenants, agencies and everyone.
          </motion.p>

          {/* GROUP 3 — CTAs (third) */}
          <motion.div
            {...riseBlur}
            transition={{ ...riseBlur.transition, delay: 1.7 }}
            className="flex justify-start flex-wrap items-center gap-4 pt-2"
          >
            <Button to="/login" variant="white" className="px-5 py-2 rounded-lg">
              Get Started
            </Button>

            <a
              href="#product"
              className="group inline-flex items-center gap-2 text-white/90 hover:text-white text-sm md:text-base"
            >
              Learn More
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Screenshot block (unchanged) */}
        <div className="mt-14 md:mt-20">
          <div className="relative mx-auto max-w-6xl">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-60 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] bg-zinc-900/60 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
              <img
                src="/hero-shot.png"
                alt="Stayra interface preview"
                className="block w-full h-auto"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
