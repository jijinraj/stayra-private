import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

function isExternalHref(href = "") {
  return /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function Button({
  children,
  to,            // SPA route (preferred for internal)
  href,          // external or hash links
  variant = "primary",
  className,
  target,
  rel,
  type = "button",
  ...props
}) {
  const base = "inline-flex items-center justify-center px-3 py-1 font-medium transition-colors";
  const variants = {
    primary: "rounded-md bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost:   "rounded-md text-gray-600 hover:bg-gray-100",
    invert:  "bg-[#e6e6e6] border-[#e6e6e6] text-[var(--color-bg-primary)] shadow-[var(--shadow-stack-low)] hover:bg-black hover:border-black hover:text-white",
    white:   "bg-white text-black hover:bg-white/90 border-white", // <-- use this for the CTA
  };

  // Decide component: Link (SPA), anchor, or button
  let Comp = "button";
  const compProps = { className: clsx(base, variants[variant], className), ...props };

  if (to) {
    Comp = Link;
    compProps.to = to;
  } else if (href) {
    if (!target && isExternalHref(href)) {
      // external link defaults
      target = "_blank";
      rel = rel ? rel : "noopener noreferrer";
    }
    Comp = "a";
    compProps.href = href;
    if (target) compProps.target = target;
    if (rel) compProps.rel = rel;
  } else {
    // real button
    compProps.type = type;
  }

  return <Comp {...compProps}>{children}</Comp>;
}
