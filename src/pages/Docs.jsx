import React from "react";
import { Section } from "@/design-system/layout";
import SEO from "@/common/seo/SEO";

export default function Docs() {
  return (
    <>
      <SEO
        title="Docs"
        description="Guides and API references for Stayra."
        canonical="/docs"
      />
    <Section id="docs">
      <div className="prose max-w-3xl mx-auto">
        <h1>Documentation</h1>
        <p>Starter docs shell. We’ll add a sidebar and MDX later.</p>
      </div>
    </Section>
    </>
  );
}
