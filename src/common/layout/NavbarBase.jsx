import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Equal, X } from "lucide-react";
import { Button } from "@/design-system/button";
import { Container } from "@/design-system/layout";

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

  // Linear-esque link: subtle underline + light fill on hover, no wrapping
  const baseLink =
    "relative px-4 py-2 text-sm font-normal text-white/85 rounded-md border border-transparent " +
    "whitespace-nowrap transition hover:text-white hover:bg-white/5 hover:border-white/20 " +
    "after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:origin-left " +
    "after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-white/70 after:to-transparent " +
    "hover:after:scale-x-100 after:transition-transform";

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

      {/* BLACK-GLASS (blurred dark) + stronger shadow on scroll */}
      <header
        data-scrolled={scrolled}
        className={clsx(
          "fixed top-0 inset-x-0 z-50",
          "bg-black/55 backdrop-blur-xl supports-[backdrop-filter]:bg-black/50",
          "data-[scrolled=true]:shadow-md",
          className
        )}
        style={{ "--nav-h": "64px" }}
      >
        <Container className="h-16">
          {/* compact width on desktop */}
          <div className="mx-auto max-w-5xl h-full px-4 md:px-6 flex md:grid md:grid-cols-3 items-center">
            {/* left: brand (logo + text) */}
            <div className="justify-self-start">
              <Link to={logo.href} className="flex items-center gap-2 font-urbanist" aria-label="Stayra Home">
 <img src="/logo-mark.png" alt="Stayra logo" className="h-5 w-5 md:h-7 md:w-7 shrink-0" />
 <span className="text-lg md:text-2xl font-medium tracking-tight text-teal-300"> 
                  {logo.label}
                </span>
              </Link>
            </div>

            {/* center: nav */}
            <nav className="hidden md:flex justify-self-center items-center gap-6 font-urbanist" aria-label="Primary">
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
                  <Button onClick={onLogout} variant="outline" className="border-white/25 text-white hover:bg-white/10">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <NavLink href="/login" onClick={onLogin}>
                    Log in
                  </NavLink>
                  <Button to={cta.href} variant="white" size="sm" className="px-5 rounded-lg">
                    {cta.label}
                  </Button>
                </>
              )}
            </div>

            {/* mobile trigger, pinned to far right */}
{/* mobile actions + trigger (right side) */}
<div className="md:hidden ml-auto flex items-center gap-2 font-urbanist">
  {isAuthed ? (
    <Button
      onClick={onLogout}
      variant="outline"
      className="px-3 py-1.5 h-auto text-xs border-white/25 text-white hover:bg-white/10"
    >
      Logout
    </Button>
  ) : (
    <>
      {/* login = same visual language as desktop link, size down */}
      <SmartLink
        href="/login"
        onClick={onLogin}
        className="px-3 py-1.5 text-xs font-normal text-white/85 rounded-md border border-transparent whitespace-nowrap
                   hover:text-white hover:bg-white/10 hover:border-white/20 transition"
      >
        Log in
      </SmartLink>

      {/* signup = white pill, smaller text */}
      <Button to={cta.href} variant="white" size="sm" className="px-4 py-1.5 text-xs rounded-lg">
        {cta.label}
      </Button>
    </>
  )}

  {/* 2-line hamburger, NO border or background */}
  <button
    className="inline-flex items-center justify-center p-2 text-white"
    onClick={() => setOpen(true)}
    aria-label="Open menu"
  >
    <Equal size={22} strokeWidth={2} />
  </button>
</div>


          </div>
        </Container>

        {/* gradient hairline like Linear, limited to content width */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px">
          <div className="mx-auto max-w-5xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </header>

      {/* Mobile drawer (dark) */}
      <div className={clsx("md:hidden fixed inset-0 z-50", open ? "" : "pointer-events-none")}>
        <div
          className={clsx("absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity", open ? "opacity-100" : "opacity-0")}
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
            <Link to={logo.href} className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <img src="/logo-mark.png" alt="Stayra logo" className="h-6 w-6 shrink-0" />
              <span className="font-medium text-white">{logo.label}</span>
            </Link>
            <button
              className="p-2 rounded-md border border-white/25 bg-black text-white"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={2} />
            </button>
          </div>

          <nav className="p-4 grid gap-1">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* auth actions */}
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
