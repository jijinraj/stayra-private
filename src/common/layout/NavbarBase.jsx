import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Button } from "@/design-system/button";
import { Container } from "@/design-system/layout";

export default function NavbarBase({
  className,
  logo = { label: "Stayra", href: "/" },
  links = [
    { label: "Product", href: "#product" },
    { label: "Marketplace", href: "#marketplace" },
    { label: "Pricing", href: "#pricing" },
    { label: "Docs", href: "#docs" },
  ],
  isAuthed = false,
  user = null,
  onLogin,
  onLogout,
  cta = { label: "Get started", href: "#get-started" },
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll → strengthen elevation
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100/70 transition rounded-md"
    >
      {children}
    </a>
  );

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:px-3 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>

      {/* Full-width, glassy bar; no radius */}
      <header
        data-scrolled={scrolled}
        className={clsx(
          // full-bleed background
          "fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60",
          // baseline hairline shadow (always on)
          "shadow-[0_1px_0_0_rgba(0,0,0,0.04)]",
          // strengthen shadow when scrolled
          "data-[scrolled=true]:shadow-sm",
          className
        )}
        style={{ "--nav-h": "64px" }}
      >
        <Container className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a
            href={logo.href}
            className="text-sm font-semibold tracking-tight text-gray-900"
            aria-label="Stayra Home"
          >
            {logo.label}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            {isAuthed ? (
              <>
                <span className="text-sm text-gray-600">
                  Hi{user?.name ? `, ${user.name}` : ""}
                </span>
                <Button onClick={onLogout} variant="outline">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <a
                  href="#login"
                  onClick={onLogin}
                  className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100/70 transition rounded-md"
                >
                  Log in
                </a>
                <Button href={cta.href} className="rounded-md">
                  {cta.label}
                </Button>
              </>
            )}
          </div>

          {/* Mobile trigger */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200 text-gray-700 bg-white/80"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </Container>
      </header>

      {/* Mobile drawer */}
      <div className={clsx("md:hidden fixed inset-0 z-50", open ? "" : "pointer-events-none")}>
        <div
          className={clsx(
            "absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={clsx(
            "absolute top-0 right-0 h-full w-80 bg-white shadow-xl ring-1 ring-black/5 transition-transform",
            open ? "translate-x-0" : "translate-x-full"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-100">
            <a href={logo.href} className="font-semibold">
              {logo.label}
            </a>
            <button
              className="p-2 rounded-md border border-gray-200 bg-white"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="p-4 grid gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-md text-gray-800 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="p-4 mt-auto">
            {isAuthed ? (
              <Button
                onClick={() => {
                  setOpen(false);
                  onLogout?.();
                }}
                variant="outline"
                className="w-full"
              >
                Logout
              </Button>
            ) : (
              <>
                <a
                  href="#login"
                  onClick={() => {
                    setOpen(false);
                    onLogin?.();
                  }}
                  className="block px-3 py-2 text-gray-700"
                >
                  Log in
                </a>
                <Button href={cta.href} className="w-full mt-2">
                  {cta.label}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
