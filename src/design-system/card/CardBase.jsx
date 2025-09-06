import React from "react";
import clsx from "clsx";

export function CardBase({ children, className }) {
  return (
    <div
      className={clsx(
        "rounded-2xl shadow-sm border border-gray-200 bg-white p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
