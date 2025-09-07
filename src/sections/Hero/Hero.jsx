import React from "react";
import { Section } from "@/design-system/layout";
import { Button } from "@/design-system/button";

export default function Hero({
  eyebrow,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  imageSrc,               // optional
  imageAlt = "Hero illustration",
}) {
  return (
    <Section id="hero" className="py-20 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left: copy */}
        <div className="space-y-6">
          {eyebrow && (
            <p className="text-sm text-gray-500">{eyebrow}</p>
          )}
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-600">{subtitle}</p>
          )}
          <div className="flex items-center gap-3">
            {ctaPrimary && (
              <Button href={ctaPrimary.href}>{ctaPrimary.label}</Button>
            )}
            {ctaSecondary && (
              <Button href={ctaSecondary.href} variant="outline">
                {ctaSecondary.label}
              </Button>
            )}
          </div>
        </div>

        {/* Right: image (or placeholder) */}
        <div className="relative">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto rounded-2xl shadow-sm border border-gray-200"
            />
          ) : (
            <div className="aspect-video rounded-2xl border border-dashed border-gray-300 grid place-items-center text-gray-500">
              Add a hero image
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
