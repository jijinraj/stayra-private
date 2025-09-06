import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarBase, Footer } from "@/common/layout";
import { NAV_LINKS } from "@/config/nav";


export default function AppShell() {
  return (
    <>
      <NavbarBase links={NAV_LINKS} cta={{ href: "/login", label: "Get started" }} />
      <main id="main" className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
