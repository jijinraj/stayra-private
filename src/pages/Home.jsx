import React from "react";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import Pricing from "@/sections/Pricing";
import { features as featuresContent } from "@/content/home.content";
import { plans as pricingPlans } from "@/content/pricing.content";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Homes, handled better — for all."
        title={<>Don’t just stay. <span className="text-indigo-600">Stayra.</span></>}
        subtitle="Making homes simpler for all."
        ctaPrimary={{ href: "/login", label: "Get started" }}
        ctaSecondary={{ href: "/docs", label: "Learn more" }}
      />
      {/* product anchor target */}
      <div id="product" />
      <Features items={featuresContent} />
      {/* pricing anchor target */}
      <div id="pricing" />
      <Pricing items={pricingPlans} />
    </>
  );
}
