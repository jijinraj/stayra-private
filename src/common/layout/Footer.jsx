import React from "react";
import { Container } from "@/design-system/layout";
import { Button } from "@/design-system/button";

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* CTA strip */}
      <div className="bg-gradient-to-r from-teal-800 to-teal-600 text-white">
        <Container className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Ready to move beyond “stay”?
            </h3>
            <p className="text-indigo-100">
              Don’t just stay. <span className="font-medium">Stayra.</span>
            </p>
          </div>
          <div className="shrink-0">
            <Button href="#get-started" className="bg-indigo-700 text-indigo-700 hover:bg-indigo-50">
              Get started
            </Button>
          </div>
        </Container>
      </div>

      {/* Links grid */}
      <div className="bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        {/* subtle top hairline (no heavy border) */}
        <div className="h-px bg-black/5" />

        <Container className="py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="text-sm font-semibold tracking-tight text-gray-900">Product</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#product" className="hover:text-gray-900">Overview</a></li>
                <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
                <li><a href="#marketplace" className="hover:text-gray-900">Marketplace</a></li>
                <li><a href="#status" className="hover:text-gray-900">Status</a></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold tracking-tight text-gray-900">Resources</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#docs" className="hover:text-gray-900">Docs</a></li>
                <li><a href="#guides" className="hover:text-gray-900">Guides</a></li>
                <li><a href="#api" className="hover:text-gray-900">API (beta)</a></li>
                <li><a href="#changelog" className="hover:text-gray-900">Changelog</a></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold tracking-tight text-gray-900">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#about" className="hover:text-gray-900">About</a></li>
                <li><a href="#careers" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#press" className="hover:text-gray-900">Press</a></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold tracking-tight text-gray-900">Legal</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#privacy" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#terms" className="hover:text-gray-900">Terms</a></li>
                <li><a href="#cookies" className="hover:text-gray-900">Cookies</a></li>
                <li><a href="#gdpr" className="hover:text-gray-900">GDPR (UK/EU)</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Stayra. Lodger.ai ready.
            </p>
            <div className="flex items-center gap-4">
              <a href="#x" className="text-gray-500 hover:text-gray-900" aria-label="Twitter / X">
                {/* X icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4l16 16M20 4L4 20" strokeWidth="1.7" />
                </svg>
              </a>
              <a href="#github" className="text-gray-500 hover:text-gray-900" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.27.82-.6v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.83 1.32 3.52 1 .11-.8.42-1.32.76-1.63-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.37 1.24-3.2-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.22a11.4 11.4 0 016 0c2.3-1.54 3.31-1.22 3.31-1.22.66 1.66.24 2.88.12 3.18.77.83 1.24 1.89 1.24 3.2 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.09.81 2.2v3.26c0 .33.22.71.83.6A12 12 0 0012 .5z"/>
                </svg>
              </a>
              <a href="#email" className="text-gray-500 hover:text-gray-900" aria-label="Email">
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
