"use client";

import React from "react";
import Header from "./header";
import ContactUs from "./support";
import Footer from "./footer";


export default function Layout({ children }) {


  return (
    <>
      <Header />


      {children}

      <ContactUs />
      <Footer />
    </>
  );
}
