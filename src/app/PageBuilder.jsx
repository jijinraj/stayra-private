import React from "react";
import { Section } from "@/design-system/layout";
import { Button } from "@/design-system/button";
import Hero from "@/sections/Hero";

export default function PageBuilder() {
  return (
    <>
      <Hero
        eyebrow="Homes, handled better — for all."
        title={<>Don’t just stay. <span className="text-indigo-600">Stayra.</span></>}
        subtitle="Making homes simpler for all."
        ctaPrimary={{ href: "#get-started", label: "Get started" }}
        ctaSecondary={{ href: "#learn-more", label: "Learn more" }}
        // imageSrc={heroImg} // optional: import an image and pass it
      />

      <Section id="features">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border p-6 bg-white">
            <h3 className="font-semibold">Fast onboarding</h3>
            <p className="text-gray-600 mt-1">Spin up your workspace in minutes.</p>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <h3 className="font-semibold">Built for teams</h3>
            <p className="text-gray-600 mt-1">Landlords, agents, and tenants in one platform.</p>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <h3 className="font-semibold">Modern stack</h3>
            <p className="text-gray-600 mt-1">React + Tailwind with a clean design system.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
