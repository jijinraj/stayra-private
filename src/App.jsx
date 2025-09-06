import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "@/app/AppShell";
import Home from "@/pages/Home";
import Marketplace from "@/pages/Marketplace";
import Docs from "@/pages/Docs";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
