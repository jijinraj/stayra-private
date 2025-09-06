import React from "react";
import { CardBase } from "./CardBase";
import { Button } from "@/design-system/button";

export function PricingCard({ title, price, features = [], cta }) {
  return (
    <CardBase className="flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-3xl font-bold mt-1">{price}</p>
      </div>
      <ul className="flex-1 space-y-2 text-gray-600">
        {features.map((f, idx) => (
          <li key={idx}>• {f}</li>
        ))}
      </ul>
      {cta && (
        <Button href={cta.href} variant="primary" className="w-full">
          {cta.label}
        </Button>
      )}
    </CardBase>
  );
}
