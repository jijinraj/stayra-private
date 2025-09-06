# Card Components

Reusable card components for Stayra.

## Components

- **CardBase** – simple wrapper with padding, border, shadow.
- **FeatureCard** – for feature highlights (title, description, icon).
- **PricingCard** – for pricing plans with features + CTA button.

## Usage

```jsx
import { CardBase, FeatureCard, PricingCard } from "@/design-system/card";

<CardBase>Plain card</CardBase>

<FeatureCard 
  title="Fast onboarding" 
  description="Get started in minutes"
  icon="⚡" 
/>

<PricingCard
  title="Pro Plan"
  price="$29/mo"
  features={["Unlimited listings", "Priority support"]}
  cta={{ href: "/signup", label: "Choose Plan" }}
/>

---

## 3) test in `App.jsx`

```jsx
import React from "react";
import { FeatureCard, PricingCard } from "@/design-system/card";

export default function App() {
  return (
    <div className="p-10 grid gap-6 md:grid-cols-2 bg-gray-50 min-h-screen">
      <FeatureCard
        title="Fast onboarding"
        description="Get started in minutes with Stayra"
        icon="⚡"
      />
      <PricingCard
        title="Pro Plan"
        price="$29/mo"
        features={["Unlimited listings", "Priority support", "Analytics"]}
        cta={{ href: "#", label: "Get Started" }}
      />
    </div>
  );
}
