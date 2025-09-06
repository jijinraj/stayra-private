import React from "react";
import clsx from "clsx";

export function Container({ className, children, as: Tag = "div" }) {
  return (
    <Tag className={clsx("mx-auto w-full max-w-6xl px-4", className)}>
      {children}
    </Tag>
  );
}
