import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarBase, Footer } from "@/common/layout";

export default function AppShell() {
  return (
    <>
      <NavbarBase
        links={[
          { label: "Product", href: "/#product" },      // stays anchor on home
          { label: "Marketplace", href: "/marketplace" },
          { label: "Pricing", href: "/#pricing" },      // anchor on home
          { label: "Docs", href: "/docs" },
        ]}
        cta={{ href: "/login", label: "Get started" }}
      />
      <main id="main" className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
