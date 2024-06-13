import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import Header from "../Dashboard/Header";

export default function Dashboardlayout({ children }) {
  return (
    <body className="bg-gray-50 0">
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 ">
        <nav
          className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
          aria-label="Global"
        >
          <div className="me-5 lg:me-0 lg:hidden">
            <a
              className="flex-none text-xl font-semibold "
              href="#"
              aria-label="Brand"
            >
              Brand
            </a>
          </div>

          {/* Nav with Search and Login User */}
          <Header />
        </nav>
      </header>
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden">
        <div className="flex items-center py-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* <!-- Sidebar --> */}
      <Sidebar />

      <div className="w-full min-h-screen py-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        {children}
      </div>
    </body>
  );
}
