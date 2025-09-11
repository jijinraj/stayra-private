import React, { Suspense, useEffect, useRef } from "react";
import SEO from "@/common/seo/SEO";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import { SITE } from "@/common/seo/constants";

// ⤵️ Lazy-load the below-the-fold FAQ section
const FAQ = React.lazy(() => import("@/sections/FAQ"));

export default function Home() {
  // Prefetch the FAQ chunk ~600px before it scrolls into view
  const faqPrefetchRef = useRef(null);

  useEffect(() => {
    if (!faqPrefetchRef.current || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Warm the chunk before we render it
          import("@/sections/FAQ");
          io.disconnect();
        }
      },
      { rootMargin: "600px" }
    );

    io.observe(faqPrefetchRef.current);
    return () => io.disconnect();
  }, []);

  // Optional: idle-time prefetch (nice on fast devices)
  useEffect(() => {
    const idle = (cb) =>
      ("requestIdleCallback" in window
        ? window.requestIdleCallback(cb, { timeout: 1500 })
        : setTimeout(cb, 600));

    const cancel = idle(() => import("@/sections/FAQ"));
    return () => {
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(cancel);
      else clearTimeout(cancel);
    };
  }, []);

  // FAQPage structured data for richer search results
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is Stayra different from traditional property management?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Stayra centralises rent payments, messaging, contracts, and updates in one platform, reducing admin and human error compared to email- and paper-based workflows.",
        },
      },
      {
        "@type": "Question",
        name: "Can I set up automatic rent payments, and when do landlords receive payouts?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Tenants can enable secure automatic payments. Landlords typically receive payouts in 1–2 business days to their connected bank account.",
        },
      },
      {
        "@type": "Question",
        name: "How do tenants report repairs or maintenance issues through Stayra?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Tenants log issues with notes or photos; landlords/agencies are notified instantly and all communication is tracked for faster resolution.",
        },
      },
      {
        "@type": "Question",
        name: "How does Stayra simplify property management for landlords and agencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Automated rent reminders/receipts, document storage, and unified messaging cut back-and-forth and reduce admin hours across portfolios.",
        },
      },
      {
        "@type": "Question",
        name: "Can agencies manage multiple landlords and properties under one account?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Agencies manage multiple landlords, properties, and tenants from a single dashboard with roles and permissions for team members.",
        },
      },
      {
        "@type": "Question",
        name: "Does Stayra provide reporting and analytics?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Clear insights on rent collection, arrears, occupancy, and performance are available and exportable for accounting and compliance.",
        },
      },
      {
        "@type": "Question",
        name: "Can I store tenancy agreements and contracts in Stayra, and does it support e-signatures?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Upload, store, and manage agreements securely. E-signatures are supported so contracts can be signed and shared digitally.",
        },
      },
      {
        "@type": "Question",
        name: "Is Stayra compliant with UK/EU rental laws, including GDPR and Right to Rent checks?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Stayra follows GDPR standards for data protection and supports processes like UK Right to Rent checks to help you stay compliant.",
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="Don’t just stay. Stayra."
        description="Homes, handled better — for landlords, tenants, and agencies. Making homes simpler for all."
        canonical="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE.name,
            url: SITE.siteUrl,
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE.siteUrl}/search?q={query}`,
              "query-input": "required name=query",
            },
          },
          faqJsonLd, // ← add FAQPage structured data
        ]}
      />

      {/* Skip link improves keyboard nav */}
      <a href="#product" className="sr-only focus:not-sr-only">
        Skip to product
      </a>

      <Hero
        eyebrow="Homes, handled better — for all."
        title={
          <>
            Why Stay Stuck? <br />
            Just <span className="text-indigo-600">Stayra</span>!
          </>
        }
        subtitle="Homes made simpler, for everyone."
        ctaPrimary={{ href: "/login", label: "Get started" }}
        ctaSecondary={{ href: "/docs", label: "Learn more" }}
      />

      <div id="product" />
      <Features />

      {/* Prefetch sentinel sits before FAQ */}
      <div ref={faqPrefetchRef} aria-hidden className="h-px" />

      {/* Lazy-loaded FAQ (split chunk) */}
      <Suspense fallback={null}>
        <div id="faq" />
        <FAQ />
      </Suspense>
    </>
  );
}
