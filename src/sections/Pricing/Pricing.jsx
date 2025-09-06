import React from "react";
import { Section } from "@/design-system/layout";
import { PricingCard } from "@/design-system/card";

export default function Pricing({ items = [] }) {
  return (
    <Section id="pricing">
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
        <p className="text-sm uppercase tracking-wider text-gray-500">Pricing</p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Simple, transparent plans
        </h2>
        <p className="text-gray-600">
          No lock-in. Upgrade or cancel any time. Lodger.ai-ready when you are.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((plan, idx) => (
          <div
            key={idx}
            className={
              plan.mostPopular
                ? "ring-2 ring-indigo-500 rounded-2xl"
                : "rounded-2xl"
            }
          >
            <PricingCard
              title={
                <div className="flex items-center justify-between">
                  <span>{plan.title}</span>
                  {plan.mostPopular && (
                    <span className="text-xs font-medium text-indigo-700 bg-indigo-50 px-2 py-1 rounded-md">
                      Most popular
                    </span>
                  )}
                </div>
              }
              price={plan.price}
              features={plan.features}
              cta={plan.cta}
            />
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        Prices exclude taxes. Payments via Stripe. Contact us for annual billing.
      </p>
    </Section>
  );
}
