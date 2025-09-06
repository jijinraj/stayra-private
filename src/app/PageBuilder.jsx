import React from "react";
import { NavbarBase } from "@/common/layout";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import { features as featuresContent } from "@/content/home.content";

export default function PageBuilder() {
  return (
    <>
      <NavbarBase
        links={[
          { label: "Product", href: "#product" },
          { label: "Marketplace", href: "#marketplace" }, // Lodger.ai alignment
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
      </main>
    </>
  );
}
