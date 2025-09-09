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
    lottie: "https://lottie.host/d6ef5640-8ea3-4a2e-95b5-1e701d3162a5/7R5hI2a7EV.lottie",
blurb: [
  {
    subheading: "What it means",
    body: "Designed To Flow is our product principle: remove friction from renting and management by automating repetitive work and surfacing the right info at the right moment."
  },
  {
    subheading: "Why it matters",
    body: [
      "Today renting is fragmented across emails, chats, spreadsheets, and banking apps.",
      "Manual follow-ups, missed due dates, and version confusion waste time and cause stress.",
      "Automation and clear status reduce errors, save time, and build trust for everyone."
    ]
  },
  {
    subheading: "How it shows up in Stayra",
    body: [
      "Unified timeline that threads messages, payments, and document events per tenancy.",
      "Automated rent schedules with pre-due reminders, instant receipts, and late nudges.",
      "Smart documents with e-signing, versioned storage, expiry alerts, and audit trails.",
      "Contextual notifications in-app and email so you only see what matters now.",
      "Self-serve actions to raise issues, share files, update card/bank, and download statements.",
      "Zero-friction onboarding with CSV imports and guided checklists."
    ]
  },
  {
    subheading: "Signals that it’s working",
    body: [
      "Fewer manual reminders and back-and-forth per month.",
      "On-time payment rate trending up and fewer disputes.",
      "Issue resolution time trending down.",
      "Fewer “where is X?” messages thanks to a single source of truth."
    ]
  },
  {
    subheading: "Built-in guardrails",
    body: [
      "Roles and permissions keep data scoped to the right people.",
      "Full audit logs on tenancy, payment, and document actions.",
      "Status checks prevent duplicate reminders on already-paid invoices."
    ]
  },
  {
    subheading: "What’s next",
    body: [
      "Bank transfer auto-reconciliation via Open Banking.",
      "Late-fee rules, partial payments, and payment plans.",
      "Proactive insights: renewals due, rent review windows, and expiring compliance docs."
    ]
  }
]
  },
  {
    title: "Everything In Sight",
    href: "#",
    id: "sight",
    lottie:
      "https://lottie.host/1e1e285d-c21d-4d51-9284-16f9e0e1e574/35HiCH5nBj.lottie",
blurb: [
  {
    subheading: "What it means",
    body: "Everything In Sight is a single, clear view of your rentals where payments, messages, documents, and tasks live together with real-time status."
  },
  {
    subheading: "Why it matters",
    body: [
      "Information is scattered across email, chat, spreadsheets, and drives.",
      "Context switching creates delays, missed steps, and duplicate work.",
      "A single source of truth reduces effort and confusion for tenants, landlords, and agencies."
    ]
  },
  {
    subheading: "How it shows up in Stayra",
    body: [
      "Unified dashboard per property and tenancy with status chips for Due, Paid, Late, and Action Needed.",
      "Chronological timeline that threads payments, messages, documents, inspections, and notes.",
      "Global search across people, properties, invoices, and documents with fuzzy matching.",
      "Filters and saved views for Late payments, Expiring documents, Upcoming renewals, and Open issues.",
      "Inline quick actions: record payment, send reminder, request signature, share document, add note.",
      "Document drawer with versions, linked payments, signature status, and expiry alerts.",
      "Focused inbox that shows only relevant events with @mentions, read states, and snooze.",
      "Reports and exports including statements, rent roll, payout summaries, and audit-ready logs."
    ]
  },
  {
    subheading: "Signals that it's working",
    body: [
      "Less time spent hunting for information and fewer status pings.",
      "Higher first-contact resolution because context is visible.",
      "Fewer duplicate reminders and conflicting updates.",
      "More on-time actions because next steps are obvious."
    ]
  },
  {
    subheading: "Built-in guardrails",
    body: [
      "Role-based visibility so sensitive data is scoped to the right people.",
      "Field validation and state locks to prevent inconsistent records.",
      "Per-record activity log showing who did what and when."
    ]
  },
  {
    subheading: "What's next",
    body: [
      "Custom dashboards with drag-and-drop widgets and saved layouts.",
      "Cross-portfolio views for agencies and multi-landlords.",
      "Mobile push summaries for daily priorities and deadlines.",
      "Map and calendar views for inspections, viewings, and renewals."
    ]
  }
],
  },
  {
    title: "Beyond The Walls",
    href: "#",
    id: "wall",
    lottie:
      "https://lottie.host/f6b703ac-216e-4cfc-850c-5137438cc0e6/iniEJDTlQ5.lottie",
blurb: [
  {
    subheading: "What it means",
    body: "Beyond The Walls is Stayra's discoverability layer: optional public listings and profiles that help the right people find you."
  },
  {
    subheading: "Why it matters",
    body: [
      "Vacancy is expensive; more qualified eyes mean faster, better matches.",
      "Tenants want transparent, up-to-date listings with clear status and verified profiles.",
      "Agencies and landlords need reach without juggling multiple portals and ad spend."
    ]
  },
  {
    subheading: "How it shows up in Stayra",
    body: [
      "One-click toggle to publish a property to a public, SEO-friendly page.",
      "Structured data and sitemap entries to improve search visibility.",
      "Shareable short links and QR codes for viewings and social posts.",
      "Inquiry forms with pre-screening questions and application intake.",
      "Verification badges for landlords and properties where enabled.",
      "Live listing status: Available, Under Offer, Let Agreed, or Let.",
      "Spam-protected contact flow with in-app relay and email pass-through."
    ]
  },
  {
    subheading: "Signals that it's working",
    body: [
      "Days on market trending down across listings.",
      "Higher ratio of qualified inquiries to total leads.",
      "Reduced ad spend per let and fewer no-shows.",
      "Faster time to let from first publish to contract signed."
    ]
  },
  {
    subheading: "Built-in guardrails",
    body: [
      "Privacy controls to hide exact address until a viewing is confirmed.",
      "Contact details protected behind a communications relay.",
      "Consent-based publishing with per-field visibility options.",
      "Moderation, takedown tools, and automatic expiry for stale listings.",
      "CAPTCHA and rate limits to block bots and spam."
    ]
  },
  {
    subheading: "What's next",
    body: [
      "Syndication to partner portals and social channels.",
      "Recommendations and similar property suggestions for tenants.",
      "Boosted listings and featured placements for time-sensitive lets.",
      "Geo-targeted alerts and saved search notifications.",
      "Open API and webhooks for agencies to push inventory at scale."
    ]
  }
],
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
