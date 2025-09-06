import React from "react";
import { Section } from "@/design-system/layout";
import { Button } from "@/design-system/button";
import SEO from "@/common/seo/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="404" description="Page not found." noindex />
    <Section>
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-semibold">404 — Page not found</h1>
        <p className="text-gray-600">The page you’re looking for doesn’t exist.</p>
        <Button href="/">Go home</Button>
      </div>
    </Section>
    </>
  );
}
