import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/design-system/button";
import { Container } from "@/design-system/layout";
import logoMark from "/logo-mark.png";

export default function NavbarBase({
  className,
  logo = { label: "Stayra.io", href: "/" },
  links = [],
  isAuthed = false,
  user = null,
  onLogin,
  onLogout,
  cta = { label: "Sign up", href: "/login" },
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // SPA-friendly link + smooth-scroll for hashes
  function SmartLink({ href, className, children, onClick }) {
    const isHash = href?.includes("#");
    if (isHash) {
      return (
        <a
          href={href}
          className={className}
          onClick={(e) => {
            e.preventDefault();
            const [path, hash] = href.split("#");
            if (path && path !== "" && path !== location.pathname) {
              navigate(path);
              setTimeout(() => {
                const el = document.getElementById(hash);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 0);
            } else {
              const el = document.getElementById(hash);
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              window.history.replaceState({}, "", `#${hash}`);
            }
            onClick?.(e);
          }}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // dark theme link: white text, light fill + border on hover
  const baseLink =
    "px-4 py-2 text-sm text-white/85 border border-transparent rounded-md transition " +
    "hover:text-white hover:bg-white/10 hover:border-white/40";
  const isActive = (href) => href && !href.includes("#") && href === location.pathname;

  const NavLink = ({ href, children, onClick }) => (
    <SmartLink
      href={href}
      onClick={onClick}
      className={clsx(baseLink, isActive(href) && "text-white")}
    >
      {children}
    </SmartLink>
  );

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>

      {/* BLACK-BASED GLASS: translucent black + blur, hairline + stronger shadow on scroll */}
      <header
        data-scrolled={scrolled}
        className={clsx(
          "fixed top-0 inset-x-0 z-50",
          "bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/55",
          "border-b border-white/10",             // subtle hairline
          "data-[scrolled=true]:shadow-md",       // stronger on scroll
          className
        )}
        style={{ "--nav-h": "64px" }}
      >
        {/* 3-column layout: brand / centered nav / right actions */}
        <Container className="h-16 grid grid-cols-3 items-center font-urbanist">
          {/* left: brand */}
          <div className="justify-self-start">

<Link
  to={logo.href}
  className="flex items-center gap-2"
  aria-label="Stayra Home"
>
  <img
    src="/logo-mark.png"
    alt="Stayra logo"
    className="h-6 w-6 shrink-0"
  />
  <span className="text-2xl font-medium tracking-tight text-teal-300">
    {logo.label}
  </span>
</Link>

          </div>

          {/* center: nav */}
          <nav className="hidden md:flex justify-self-center items-center gap-8" aria-label="Primary">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* right: actions */}
          <div className="hidden md:flex justify-self-end items-center gap-3">
            {isAuthed ? (
              <>
                <span className="text-sm text-white/70">Hi{user?.name ? `, ${user.name}` : ""}</span>
                <Button
                  onClick={onLogout}
                  variant="outline"
                  className="border-white/25 text-white hover:bg-white/10"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <NavLink href="/login" onClick={onLogin}>
                  Log in
                </NavLink>
                {/* white pill with black text */}
                <Button to={cta.href} variant="white" size="sm" className="px-5 rounded-lg">
                  {cta.label}
                </Button>
              </>
            )}
          </div>

          {/* mobile trigger */}
          <button
            className="md:hidden justify-self-end inline-flex items-center justify-center p-2 rounded-md border border-white/25 text-white bg-black/60"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </Container>
      </header>

      {/* Mobile drawer — dark to match header */}
      <div className={clsx("md:hidden fixed inset-0 z-50", open ? "" : "pointer-events-none")}>
        <div
          className={clsx(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={clsx(
            "absolute top-0 right-0 h-full w-80 bg-black text-white shadow-xl ring-1 ring-white/10 transition-transform",
            open ? "translate-x-0" : "translate-x-full"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
<Link
  to={logo.href}
  className="flex items-center gap-2"
  onClick={() => setOpen(false)}
>
  <img
    src="/logo-mark.png"
    alt="Stayra logo"
    className="h-4 w-4 shrink-0"
  />
  <span className="font-medium text-white">
    {logo.label}
  </span>
</Link>

            <button
              className="p-2 rounded-md border border-white/25 bg-black text-white"
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
              <NavLink
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="p-4 mt-auto grid gap-2">
            <NavLink href="/login" onClick={() => { setOpen(false); onLogin?.(); }}>
              Log in
            </NavLink>
            <Button to={cta.href} variant="white" size="sm" className="w-full" onClick={() => setOpen(false)}>
              {cta.label}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
