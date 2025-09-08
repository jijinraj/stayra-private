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

  // Desktop hover 3D tilt
  const frameHover = reduce ? {} : { whileHover: { rotateX: 6, rotateY: -8 } };

  return (
    <Section id="hero" className="relative overflow-hidden pt-28 pb-12">
      {/* top aura glow (neutral gray) */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-24 h-[280px]
                   [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]
                   [mask-image:linear-gradient(to_bottom,black,transparent)]"
      >
        <div className="mx-auto max-w-5xl relative">
          <div
            className="absolute left-1/2 -translate-x-1/2 w-[1200px] h-[280px] rounded-[999px]
                       bg-[radial-gradient(55%_100%_at_50%_0%,rgba(156,163,175,0.45),rgba(156,163,175,0.12)_45%,transparent_70%)]
                       blur-3xl opacity-70"
          />
        </div>
      </div>

      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-10%,rgba(255,255,255,0.06),transparent_80%)]" />

      <Container className="relative mx-auto max-w-5xl">
        {/* Headline + Subheading */}
        <div className="mx-auto w-fit space-y-7">
          <motion.div
            {...riseBlur}
            transition={{ ...riseBlur.transition, delay: 0.5 }}
            className="space-y-7"
          >
            <h1 className="font-urbanist tracking-tight text-white leading-[1.05] text-center text-[36px] md:text-6xl lg:text-7xl">
              <span>Why Stay Stuck</span>{" "}
              <span className="align-baseline inline-block font-extrabold text-red-500 text-[1.2em] md:text-[1.25em]">!</span>
            </h1>

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

          {/* Tagline */}
          <motion.p
            {...riseBlur}
            transition={{ ...riseBlur.transition, delay: 1.3 }}
            className="text-left text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            Housing made simple — for landlords,<br />
            tenants, agencies and everyone.
          </motion.p>

          {/* CTAs */}
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

        {/* Screenshot block */}
        <div className="mt-14 md:mt-20">
          <div className="relative mx-auto max-w-6xl">
            {/* MOBILE: full-bleed diagonal with blended fades */}
            <div className="md:hidden relative w-screen left-1/2 -ml-[50vw]">
              <div className="relative h-[520px] overflow-hidden">
<motion.div
  initial={reduce ? {} : { rotateX: 6, rotateY: -4 }}
  style={{ transformPerspective: 1200 }}
  className="
    absolute -left-[-25vw] top-24      /* push image below CTAs */
    w-[160vw] -rotate-[13deg] scale-[0.85] origin-left
    [transform-style:preserve-3d] z-0
  "
>  
                  <div
                    className="
                      relative overflow-hidden rounded-[1.5rem] bg-zinc-900/60
                      shadow-[0_20px_80px_rgba(0,0,0,0.6)]
                      before:content-[''] before:absolute before:inset-0 before:rounded-[1.5rem]
                      before:border before:border-white/10 before:pointer-events-none
                    "
                  >
                    <img
                      src="/hero-shot.png"
                      alt="Stayra interface preview"
                      className="block w-full h-auto [backface-visibility:hidden]"
                      loading="eager"
                      fetchpriority="high"
                    />
                  </div>
                </motion.div>

                {/* blend layers */}
                <div className="pointer-events-none absolute inset-0 z-10">
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black via-black/95 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute -inset-10 bg-[radial-gradient(120%_70%_at_50%_10%,rgba(0,0,0,0.65),transparent_60%)]" />
                </div>
              </div>
            </div>

            {/* DESKTOP: original hover 3D tilt */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-60 blur-2xl" />
                <motion.div
                  {...frameHover}
                  transition={{ type: "spring", stiffness: 140, damping: 16, mass: 0.6 }}
                  style={{ transformPerspective: 1200 }}
                  className="
                    relative overflow-hidden rounded-[1.5rem] bg-zinc-900/60
                    shadow-[0_20px_80px_rgba(0,0,0,0.6)]
                    [transform-style:preserve-3d] will-change-transform
                    before:content-[''] before:absolute before:inset-0 before:rounded-[1.5rem]
                    before:border before:border-gray-400/40 before:pointer-events-none
                  "
                >
                  <img
                    src="/hero-shot.png"
                    alt="Stayra interface preview"
                    className="block w-full h-auto [backface-visibility:hidden]"
                    loading="eager"
                    fetchpriority="high"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/* END Screenshot block */}
      </Container>
    </Section>
  );
}
