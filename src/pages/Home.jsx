import React from "react";
import SEO from "@/common/seo/SEO";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import Pricing from "@/sections/Pricing";
import { features as featuresContent } from "@/content/home.content";
import { plans as pricingPlans } from "@/content/pricing.content";
import { SITE } from "@/common/seo/constants";


export default function Home() {
  return (
    <>
      <SEO
        title="Don’t just stay. Stayra."
        description="Homes, handled better — for landlords, tenants, and agencies. Making homes simpler for all."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE.name,
          url: SITE.siteUrl,
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE.siteUrl}/search?q={query}`,
            "query-input": "required name=query"
          }
        }}
      />
      <Hero
        eyebrow="Homes, handled better — for all."
        title={<>Why Stay Stuck? <br/>Just <span className="text-indigo-600">Stayra</span>!</>}
        subtitle="Homes made simpler, for everyone."
        ctaPrimary={{ href: "/login", label: "Get started" }}
        ctaSecondary={{ href: "/docs", label: "Learn more" }}
      />
      <div id="product" />
      <Features />
      <div id="pricing" />
      <Pricing items={pricingPlans} />
    </>
  );
}
