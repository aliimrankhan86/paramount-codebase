"use client";

import React from "react";
import Header from "./header";
import Support from "./support";
import Footer from "./footer";
// import Support from "./support/contactus";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      {children}

      <Support />
      <Footer />
    </>
  );
}
