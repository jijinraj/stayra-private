// src/common/layout/Footer.jsx
import React from "react";
import { Container } from "@/design-system/layout";
import { Button } from "@/design-system/button";

export default function Footer() {
  return (
    <footer className="mt-20 bg-neutral-950 text-neutral-300">
      {/* CTA strip (solid, no gradients) */}
      <div className="border-y border-white/10">
        <Container className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Ready to move beyond “stay”?
            </h3>
            <p className="text-sm text-neutral-400">
              Don’t just stay. <span className="font-medium text-white">Stayra.</span>
            </p>
          </div>

          {/* CTA buttons */}
          <div className="shrink-0 flex items-center gap-3">
            {/* Primary: white with forced black text */}
            <Button
              href="#get-started"
              className="bg-white !text-black hover:bg-neutral-200 transition"
            >
              Get started
            </Button>

            {/* Outline: subtle border, inverts on hover */}
            <Button
              href="#contact-sales"
              className="bg-transparent border border-white/20 text-white hover:bg-white hover:!text-neutral-950 transition"
            >
              Contact sales
            </Button>
          </div>
        </Container>
      </div>

      {/* Links grid */}
      <div>
        <div className="h-px bg-white/10" />
        <Container className="py-12">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="text-xs font-semibold tracking-wide text-neutral-200 uppercase">
                Product
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#product" className="hover:text-white transition">Overview</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="#status" className="hover:text-white transition">Status</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold tracking-wide text-neutral-200 uppercase">
                Resources
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#docs" className="hover:text-white transition">Docs</a></li>
                <li><a href="#guides" className="hover:text-white transition">Guides</a></li>
                <li><a href="#api" className="hover:text-white transition">API (beta)</a></li>
                <li><a href="#changelog" className="hover:text-white transition">Changelog</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold tracking-wide text-neutral-200 uppercase">
                Company
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="#press" className="hover:text-white transition">Press</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold tracking-wide text-neutral-200 uppercase">
                Legal
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#privacy" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#terms" className="hover:text-white transition">Terms</a></li>
                <li><a href="#cookies" className="hover:text-white transition">Cookies</a></li>
                <li><a href="#gdpr" className="hover:text-white transition">GDPR (UK/EU)</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              {/* logo from /public */}
              <img
                src="/logo-mark.png"
                alt="Stayra logo"
                className="h-6 w-auto select-none pointer-events-none"
                loading="lazy"
              />
              <span className="text-xs text-neutral-400">
                © {new Date().getFullYear()} Stayra.
              </span>
              <span className="text-xs text-neutral-500">Lodger.ai ready.</span>
            </div>

            <div className="flex items-center gap-4">
              <a href="#x" className="text-neutral-400 hover:text-white transition" aria-label="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4l16 16M20 4L4 20" strokeWidth="1.7" />
                </svg>
              </a>
              <a href="#github" className="text-neutral-400 hover:text-white transition" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.27.82-.6v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.83 1.32 3.52 1 .11-.8.42-1.32.76-1.63-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.37 1.24-3.2-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.22a11.4 11.4 0 016 0c2.3-1.54 3.31-1.22 3.31-1.22.66 1.66.24 2.88.12 3.18.77.83 1.24 1.89 1.24 3.2 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.09.81 2.2v3.26c0 .33.22.71.83.6A12 12 0 0012 .5z"/>
                </svg>
              </a>
              <a href="#email" className="text-neutral-400 hover:text-white transition" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
