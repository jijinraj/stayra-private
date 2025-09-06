import React from "react";
import clsx from "clsx";

export function Section({
  id,
  className,
  as: Tag = "section",
  container = true,
  children,
}) {
  return (
    <Tag id={id} className={clsx("py-16", className)}>
      {container ? <div className="mx-auto w-full max-w-6xl px-4">{children}</div> : children}
    </Tag>
  );
}
