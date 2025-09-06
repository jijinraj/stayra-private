import React from "react";
import { NavbarBase } from "@/common/layout";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import Pricing from "@/sections/Pricing";
import { features as featuresContent } from "@/content/home.content";
import { plans as pricingPlans } from "@/content/pricing.content";

export default function PageBuilder() {
  return (
    <>
      <NavbarBase
        links={[
          { label: "Product", href: "#product" },
          { label: "Marketplace", href: "#marketplace" },
          { label: "Pricing", href: "#pricing" },
          { label: "Docs", href: "#docs" },
        ]}
        cta={{ href: "#get-started", label: "Get started" }}
      />

      <main id="main" className="pt-16">
        <Hero
          eyebrow="Homes, handled better — for all."
          title={
            <>
              Don’t just stay. <span className="text-indigo-600">Stayra.</span>
            </>
          }
          subtitle="Making homes simpler for all."
          ctaPrimary={{ href: "#get-started", label: "Get started" }}
          ctaSecondary={{ href: "#learn-more", label: "Learn more" }}
        />

        <Features items={featuresContent} />

        <Pricing items={pricingPlans} />
      </main>
    </>
  );
}
