import React from "react";
import clsx from "clsx";

export function Button({ 
  children, 
  href, 
  variant = "primary", 
  className, 
  ...props 
}) {
  const base = "px-4 py-2 rounded-lg font-medium transition-colors";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost: "text-gray-600 hover:bg-gray-100",
  };

  const Comp = href ? "a" : "button";

  return (
    <Comp
      href={href}
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
