import React, { useEffect, useRef } from "react";
import { Section, Container } from "@/design-system/layout";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useAnimation,
  useInView,
} from "framer-motion";

const FEATURES = [
  { title: "Built With Purpose", href: "#", id: "purpose" },
  { title: "Something Cool", href: "#", id: "cool" },
  { title: "Again smthn Cool", href: "#", id: "again-cool" },
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
              A simple property management system made by humans, for humans.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sagittis massa non dapibus aliquet. Curabitur imperdiet dignissim
              lorem ut venenatis. Integer posuere, sapien vitae dictum varius,
              arcu nunc viverra velit.
            </motion.p>
          </motion.div>

          {/* Cards (start AFTER header completes) */}
          <motion.div
            variants={cardsStagger}
            initial="hidden"
            animate={cardsCtrl}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURES.map((f) => (
              <Card key={f.id} title={f.title} href={f.href} riseBlur={riseBlur} />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

function Card({ title, href = "#", riseBlur }) {
  return (
    <motion.a
      variants={riseBlur}
      href={href}
      className="group relative block overflow-hidden rounded-[1.75rem]
                 bg-zinc-900/60 border border-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.35)]
                 h-72 p-6 focus:outline-none focus:ring-2 focus:ring-teal-400/40"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.6 }}
    >
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
    </motion.a>
  );
}
