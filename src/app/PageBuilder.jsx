import React from "react";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import { features as featuresContent } from "@/content/home.content";

export default function PageBuilder() {
  return (
    <>
      <Hero
        eyebrow="Homes, handled better — for all."
        title={<>Don’t just stay. <span className="text-indigo-600">Stayra.</span></>}
        subtitle="Making homes simpler for all."
        ctaPrimary={{ href: "#get-started", label: "Get started" }}
        ctaSecondary={{ href: "#learn-more", label: "Learn more" }}
      />

      <Features items={featuresContent} />
    </>
  );
}
