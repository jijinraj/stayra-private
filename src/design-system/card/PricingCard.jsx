// add clsx
import React from "react";
import clsx from "clsx";
import { CardBase } from "./CardBase";
import { Button } from "@/design-system/button";

export function PricingCard({ title, price, features = [], cta, className }) {
  return (
    <CardBase className={clsx("flex flex-col gap-4 h-full", className)}>
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
