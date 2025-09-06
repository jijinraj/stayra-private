import React from "react";
import { CardBase } from "./CardBase";

export function FeatureCard({ title, description, icon }) {
  return (
    <CardBase className="flex flex-col items-center text-center gap-3">
      {icon && <div className="text-indigo-600">{icon}</div>}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardBase>
  );
}
