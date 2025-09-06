import React from "react";
import { Section } from "@/design-system/layout";
import { Button } from "@/design-system/button";

export default function Login() {
  return (
    <Section id="login">
      <div className="max-w-md mx-auto bg-white border rounded-2xl p-6 shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Sign in to Stayra</h1>
        <p className="text-gray-600 mt-1">We’ll wire OAuth later.</p>
        <div className="mt-6 grid gap-3">
          <Button variant="primary">Continue with Email</Button>
          <Button variant="outline">Continue with Google</Button>
        </div>
      </div>
    </Section>
  );
}
