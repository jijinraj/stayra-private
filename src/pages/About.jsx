import React from "react";
import { Section } from "@/design-system/layout";
import SEO from "@/common/seo/SEO";

export default function About() {
  return (
    <>
      <SEO title="About" description="Stayra — making homes simpler for all." canonical="/about" />
      <Section id="about">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">About Stayra</h1>
          <p className="text-gray-700">
            We’re building a simpler, friendlier way to manage homes — for landlords, tenants, and agencies.
          </p>
          <p className="text-gray-600">
            Our public site shares what’s coming next and how to get started. Product access and listings will live in a separate app.
          </p>
        </div>
      </Section>
    </>
  );
}
