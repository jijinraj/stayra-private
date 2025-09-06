import React from "react";
import { Section } from "@/design-system/layout";
import SEO from "@/common/seo/SEO";

export default function Marketplace() {
  return (
    <>
      <SEO
        title="Marketplace"
        description="Discover property listings on Stayra’s public marketplace."
        canonical="/marketplace"
      />

    <Section id="marketplace">
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Marketplace</h1>
        <p className="text-gray-600">A public listings hub for properties (coming soon).</p>
      </div>
    </Section>
    </>
  );
}
