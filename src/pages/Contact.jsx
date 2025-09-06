import React, { useState } from "react";
import { Section } from "@/design-system/layout";
import { Button } from "@/design-system/button";
import SEO from "@/common/seo/SEO";

export default function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  return (
    <>
      <SEO title="Contact" description="Get in touch with Stayra." canonical="/contact" />
      <Section id="contact">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
          <p className="text-gray-600 mt-1">
            Drop us a message and we’ll get back to you. For now this sends via your email client.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const mailto = `mailto:hello@stayra.io?subject=${encodeURIComponent(
                `Stayra contact — ${state.name}`
              )}&body=${encodeURIComponent(`${state.message}\n\nFrom: ${state.name} <${state.email}>`)}`;
              window.location.href = mailto;
            }}
            className="mt-6 grid gap-4 bg-white border rounded-2xl p-6 shadow-sm"
          >
            <div>
              <label className="block text-sm text-gray-700 mb-1">Name</label>
              <input
                type="text"
                required
                value={state.name}
                onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={state.email}
                onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                required
                value={state.message}
                onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-center gap-3">
              <Button type="submit">Send message</Button>
              <a href="mailto:hello@stayra.io" className="text-sm text-gray-600 hover:text-gray-900">
                Or email us directly →
              </a>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
