import React from "react";
import { Section } from "@/design-system/layout";
import { Button } from "@/design-system/button";

export default function PageBuilder() {
  return (
    <>
      <Section id="hero" className="text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Don’t just stay. <span className="text-indigo-600">Stayra.</span>
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Making homes simpler for all.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button variant="primary" href="#get-started">Get started</Button>
          <Button variant="outline" href="#learn-more">Learn more</Button>
        </div>
      </Section>

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
