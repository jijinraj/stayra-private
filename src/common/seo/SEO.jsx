import React from "react";
import { Helmet } from "react-helmet-async";  // ← not 'react-helmet'
import { SITE } from "./constants";

/**
 * <SEO /> – page-level SEO
 * props:
 *  - title, description
 *  - canonical (absolute or path)
 *  - image (absolute or path)
 *  - noindex (bool)
 *  - jsonLd (object) – optional JSON-LD schema
 */
export default function SEO({
  title,
  description = SITE.tagline,
  canonical,
  image,
  noindex = false,
  jsonLd,
}) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;

  const url =
    canonical
      ? canonical.startsWith("http")
        ? canonical
        : `${SITE.siteUrl.replace(/\/$/, "")}${canonical.startsWith("/") ? "" : "/"}${canonical}`
      : (typeof window !== "undefined" ? window.location.href : SITE.siteUrl);

  const img = image
    ? (image.startsWith("http") ? image : `${SITE.siteUrl}${image}`)
    : `${SITE.siteUrl}${SITE.defaultImage}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {SITE.twitter && <meta name="twitter:site" content={SITE.twitter} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {/* Optional JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
