import React, { children } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

export default function Baselayout({ children }) {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      {children}
      <Footer />
    </div>
  );
}
