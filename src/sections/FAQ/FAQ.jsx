import React, { useEffect, useMemo, useState } from "react";
import { Section, Container } from "@/design-system/layout";
import { ChevronDown, Link as LinkIcon } from "lucide-react";

const FAQ_ITEMS = [
  { q: "How is Stayra different from traditional property management?",
    a: "Stayra removes the clutter of emails, paper receipts, and missed reminders. Instead, everything—rent payments, messaging, contracts, and updates—lives in one simple platform. It’s designed to save time for landlords, agencies, and tenants while reducing admin and human error." },
  { q: "Can I set up automatic rent payments, and when do landlords receive payouts?",
    a: "Yes. Tenants can enable secure automatic rent payments by card or bank. Landlords typically receive payouts within 1–2 business days, directly to their connected bank account." },
  { q: "How do tenants report repairs or maintenance issues through Stayra?",
    a: "Tenants can log issues directly in Stayra, attach notes or photos, and the landlord or agency is instantly notified. This keeps all communication tracked in one place and ensures faster resolution." },
  { q: "How does Stayra simplify property management for landlords and agencies?",
    a: "Stayra automates routine tasks like rent reminders, receipts, and document storage. It reduces back-and-forth by centralising communication, while agencies can manage multiple landlords and properties with fewer admin hours." },
  { q: "Can agencies manage multiple landlords and properties under one account?",
    a: "Yes. Agencies can oversee multiple landlords, properties, and tenants from a single dashboard. Permissions and roles can be assigned to team members for efficient collaboration." },
  { q: "Does Stayra provide reporting and analytics?",
    a: "Absolutely. Landlords and agencies get clear insights on rent collection, outstanding payments, occupancy, and property performance—all exportable for accounting or compliance needs." },
  { q: "Can I store tenancy agreements and contracts in Stayra, and does it support e-signatures?",
    a: "Yes. You can upload, store, and manage tenancy agreements securely. Stayra also supports e-signatures, so contracts can be signed and shared digitally without printing or scanning." },
  { q: "Is Stayra compliant with UK/EU rental laws, including GDPR and Right to Rent checks?",
    a: "Yes. Stayra is built with compliance in mind. We follow GDPR standards to protect personal data and support processes like UK “Right to Rent” checks—helping you stay compliant without extra paperwork." }
];

/**
 * Props:
 * - singleOpen (boolean): only one item open at a time (default true)
 */
export default function FAQ({ singleOpen = true }) {
  const [openIndex, setOpenIndex] = useState(null);
  const reduceMotion = useMemo(
    () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const isOpen = (idx) => openIndex === idx;
  const onToggle = (idx) => {
    const nextOpen = openIndex === idx ? null : idx;
    setOpenIndex(nextOpen);
    const hash = nextOpen !== null ? `#faq-q-${nextOpen}` : "#faq";
    if ("history" in window) history.replaceState(null, "", hash);
  };

  // Deep-link: open #faq-q-<index>
  useEffect(() => {
    const applyHash = () => {
      const m = (window.location.hash || "").match(/^#faq-q-(\d+)$/);
      if (!m) return;
      const idx = Number(m[1]);
      if (Number.isInteger(idx) && idx >= 0 && idx < FAQ_ITEMS.length) {
        setOpenIndex(idx);
        const el = document.getElementById(`faq-item-${idx}`);
        if (el) el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [reduceMotion]);

  return (
    <Section id="faq" className="relative py-20">
      <Container className="max-w-6xl">
        <div className="mx-auto max-w-4xl text-center space-y-3">
          <p className="text-sm uppercase tracking-wider text-teal-600">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Housing made simple — answers at a glance
          </h2>
          <p className="text-[var(--color-muted,#6b7280)]">
            Quick answers for tenants, landlords, and agencies. Tap a question to expand.
          </p>
        </div>

        {/* Single-column list */}
        <ul className="mt-10 mx-auto max-w-5xl rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur divide-y divide-black/5 dark:divide-white/10">
          {FAQ_ITEMS.map((item, idx) => {
            const open = isOpen(idx);
            const contentId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;
            const wrapperId = `faq-item-${idx}`;

            return (
              <li key={idx} id={wrapperId} className="bg-white/70 dark:bg-zinc-900/40">
                <button
                  id={buttonId}
                  aria-expanded={open}
                  aria-controls={contentId}
                  onClick={() => onToggle(idx)}
                  className="group w-full flex items-center justify-between gap-6 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                >
                  <span className="text-base md:text-lg font-medium leading-6">
                    {item.q}
                  </span>

                  {/* circle chevron + share link (desktop) */}
                  <span className="flex items-center gap-2">
                    <a
                      href={`#faq-q-${idx}`}
                      className="hidden md:inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-black/10 dark:ring-white/15 hover:bg-black/[.03] dark:hover:bg-white/[.06]"
                      aria-label="Link to this question"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LinkIcon className="h-4 w-4" />
                    </a>
                    <span
                      className={[
                        "grid h-9 w-9 place-items-center rounded-full ring-1 ring-black/10 dark:ring-white/15 transition-all duration-300",
                        "group-hover:ring-teal-500/50 group-hover:shadow-sm group-hover:shadow-teal-500/10",
                        open ? "rotate-180" : ""
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </span>
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={[
                    "px-6",
                    reduceMotion
                      ? (open ? "block pb-5" : "hidden")
                      : "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                    open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  ].join(" ")}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="text-[15px] leading-relaxed text-[var(--color-muted,#4b5563)] dark:text-zinc-300">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
