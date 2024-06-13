import React from "react";

export default function Header() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-ful text-sm py-3 sm:py-0 md:py-8">
      <nav
        className="relative max-w-6xl w-full mx-auto md:justify-start flex items-center"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold text-black"
            href="#"
            aria-label="Brand"
          >
            <img src="omniwallet/images/omnilogo.png" alt="" />
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.5] font-medium text-white/[.5] shadow-sm align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        {/* <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 grow sm:block"
        >
          <div className="flex gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-center md:justify-center sm:gap-y-0 sm:gap-x-7 sm:mt-0">
            <a
              className="font-medium text-black sm:py-6"
              href="#"
              aria-current="page"
            >
              Personal
            </a>
            <a
              className="font-medium text-black/[.8] hover:text-white sm:py-6"
              href="#"
            >
              Business
            </a>
            <a
              className="font-medium text-black/[.8] hover:text-white sm:py-6"
              href="#"
            >
              Success Stories
            </a>
            <a
              className="font-medium text-black/[.8] hover:text-white sm:py-6"
              href="#"
            >
              Enterprise
            </a>
          </div>
        </div> */}
        <div className="flex gap-x-4">
          <a
            className="font-medium text-white bg-[#7A7ADD] px-6 py-2 rounded-full w-full"
            href="#"
            aria-current="page"
          >
            Sign up
          </a>
          <a
            className="font-medium text-white bg-[#7A7ADD] px-6 py-2 rounded-full w-full"
            href="#"
            aria-current="page"
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}
