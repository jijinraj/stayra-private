import React, { useEffect, useRef, useState } from "react";
import { Section, Container } from "@/design-system/layout";
import { ArrowRight } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  motion,
  useReducedMotion,
  useAnimation,
  useInView,
} from "framer-motion";
import FeatureModal from "./FeatureModal";

const FEATURES = [
  {
    title: "Designed To Flow",
    href: "#",
    id: "purpose",
    lottie:
      "https://lottie.host/d6ef5640-8ea3-4a2e-95b5-1e701d3162a5/7R5hI2a7EV.lottie",
    blurb:
      "Purpose-built to keep your workflow smooth—plan, communicate, and ship without friction.",
  },
  {
    title: "Everything In Sight",
    href: "#",
    id: "sight",
    lottie:
      "https://lottie.host/1e1e285d-c21d-4d51-9284-16f9e0e1e574/35HiCH5nBj.lottie",
    blurb:
      "Stay on top of leases, payments, and messaging in one unified view.",
  },
  {
    title: "Beyond The Walls",
    href: "#",
    id: "wall",
    lottie:
      "https://lottie.host/f6b703ac-216e-4cfc-850c-5137438cc0e6/iniEJDTlQ5.lottie",
    blurb:
      "Automate the boring parts so you can focus on what actually matters.",
  },
];

export default function Features() {
  const reduce = useReducedMotion();

  // element animation
  const riseBlur = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      };

  // staggers
  const headerStagger = reduce
    ? {}
    : { show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } };
  const cardsStagger = reduce
    ? {}
    : { show: { transition: { staggerChildren: 0.12 } } };

  // chain header → cards
  const rootRef = useRef(null);
  const inView = useInView(rootRef, { once: true, amount: 0.3 });
  const headerCtrl = useAnimation();
  const cardsCtrl = useAnimation();

  useEffect(() => {
    if (!inView) return;
    (async () => {
      await headerCtrl.start("show");
      await new Promise((r) => setTimeout(r, 120));
      cardsCtrl.start("show");
    })();
  }, [inView, headerCtrl, cardsCtrl]);

  // modal state
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const openModal = (f) => {
    setActive(f);
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  return (
    <Section id="features" className="pt-24 pb-16">
      <Container className="mx-auto max-w-5xl">
        <div ref={rootRef}>
          {/* Header (plays first) */}
          <motion.div
            variants={headerStagger}
            initial="hidden"
            animate={headerCtrl}
            className="grid gap-10 md:grid-cols-2 md:items-start"
          >
            <div>
              <motion.h2
                variants={riseBlur}
                className="font-urbanist tracking-tight text-white text-4xl md:text-6xl"
              >
                Made For Human,
              </motion.h2>
              <motion.p
                variants={riseBlur}
                className="mt-3 font-urbanist text-2xl md:text-3xl text-white/60"
              >
                By Human
              </motion.p>
            </div>

            <motion.p
              variants={riseBlur}
              className="max-w-prose text-white/80 leading-relaxed"
            >
              At Stayra, we believe finding and managing a home should never be
              complicated or stressful. We’re building a people-first platform
              that reduces manual work through smart automation and unites
              payments, communication, and property management in one place.
            </motion.p>
          </motion.div>

          {/* Cards — mobile: horizontal scroller; desktop: grid */}
          {/* MOBILE (≤ md): horizontal scroll with snap */}
          <div className="md:hidden mt-10 relative -mx-4">
            {/* edge fades to hint scroll */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent" />

            <motion.div
              variants={cardsStagger}
              initial="hidden"
              animate={cardsCtrl}
              className="flex gap-4 overflow-x-auto scroll-smooth px-4 pb-3
                         snap-x snap-mandatory scrollbar-none"
            >
              {FEATURES.map((f) => (
                <Card
                  key={f.id}
                  title={f.title}
                  href={f.href}
                  riseBlur={riseBlur}
                  lottieSrc={f.lottie}
                  onClick={() => openModal(f)}
                  className="snap-center shrink-0 w-[85%] max-w-[22rem] min-w-[18rem]"
                />
              ))}
            </motion.div>
          </div>

          {/* DESKTOP (md+): original grid */}
          <motion.div
            variants={cardsStagger}
            initial="hidden"
            animate={cardsCtrl}
            className="hidden md:grid mt-14 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURES.map((f) => (
              <Card
                key={f.id}
                title={f.title}
                href={f.href}
                riseBlur={riseBlur}
                lottieSrc={f.lottie}
                onClick={() => openModal(f)}
              />
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Modal */}
      <FeatureModal open={open} onClose={closeModal} feature={active} />
    </Section>
  );
}

function Card({
  title,
  href = "#",
  riseBlur,
  className = "",
  lottieSrc,
  onClick,
}) {
  const reduce = useReducedMotion();
  return (
    <motion.button
      type="button"
      variants={riseBlur}
      onClick={onClick}
      className={`group relative block text-left overflow-hidden rounded-[1.75rem]
                 bg-zinc-900/60 border border-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.35)]
                 h-72 p-6 focus:outline-none focus:ring-2 focus:ring-teal-400/40 ${className}`}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.6 }}
    >
      {/* Optional Lottie illustration with subtle grid */}
      {lottieSrc && (
        <div
          className="mb-10 w-full rounded-2xl ring-1 ring-white/10 overflow-hidden
                     bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.020)_0_1px,transparent_1px_20px),repeating-linear-gradient(to_bottom,rgba(255,255,255,0.020)_0_1px,transparent_1px_20px)]
                     bg-[size:20px_20px] bg-center bg-[position:0.5px_0.5px]"
        >
          <DotLottieReact
            src={lottieSrc}
            loop
            autoplay={!reduce}
            className="w-full h-full"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}

      {/* Title (bottom-left) */}
      <div className="absolute left-6 bottom-6 right-16">
        <h3 className="font-urbanist text-2xl md:text-[28px] leading-tight text-white">
          {title}
        </h3>
      </div>

      {/* Round arrow (bottom-right) */}
      <span
        className="absolute right-6 bottom-6 inline-flex size-9 items-center justify-center rounded-full
                   bg-white/10 text-white/90 transition
                   group-hover:bg-white/20 group-hover:translate-x-0.5"
        aria-hidden="true"
      >
        <ArrowRight size={16} />
      </span>
    </motion.button>
  );
}
