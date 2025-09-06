import React from "react";
import { Section } from "@/design-system/layout";
import { FeatureCard } from "@/design-system/card";

export default function Features({ items = [] }) {
  return (
    <Section id="features">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f, idx) => (
          <FeatureCard
            key={idx}
            title={f.title}
            description={f.description}
            icon={<span aria-hidden="true" className="text-2xl">{f.icon}</span>}
          />
        ))}
      </div>
    </Section>
  );
}
