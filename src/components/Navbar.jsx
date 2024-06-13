import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  console.log("currentUser >>", currentUser);
  return (
    <header className="flex flex-wrap sm:justify-between sm:flex-nowrap z-50 w-ful text-sm py-3 sm:py-0 md:py-8">
      <nav
        className="relative max-w-6xl w-full mx-auto md:justify-between flex items-center"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link to="/">
            <span
              className="flex-none text-xl font-semibold text-black"
              aria-label="Brand"
            >
              <img
                src="/omniwallet/images/omnilogo.png"
                className="w-full h-full"
                alt=""
              />
            </span>
          </Link>
          {/* <div className="sm:hidden">
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
          </div> */}
        </div>
        {/* <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 grow sm:block"
        >
          <div className="flex gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-center md:justify-center sm:gap-y-0 sm:gap-x-7 sm:mt-0">
            <Link to="#">
              <span
                className="font-medium hover:text-[#7A7ADD] text-black sm:py-6"
                aria-current="page"
              >
                Personal
              </span>
            </Link>
            <Link to="#">
              <span className="font-medium text-black/[.8] hover:text-[#7A7ADD] sm:py-6">
                Business
              </span>
            </Link>
            <Link to="#">
              <span className="font-medium text-black/[.8] hover:text-[#7A7ADD] sm:py-6">
                Success Stories
              </span>
            </Link>

            <Link to="#">
              <span className="font-medium text-black/[.8] hover:text-[#7A7ADD] sm:py-6">
                Enterprise
              </span>
            </Link>
          </div>
        </div> */}

        {currentUser ? (
          <div class="flex flex-row items-center justify-end gap-2">
            <div
              class="hs-dropdown relative inline-flex"
              data-hs-dropdown-placement="bottom-right"
            >
              <button
                id="hs-dropdown-with-header"
                type="button"
                class="hs-dropdown-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <img
                  class="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
              </button>

              <div
                class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100  hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 z-[9999]"
                aria-labelledby="hs-dropdown-with-header"
              >
                <div class="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Signed in as
                  </p>
                  <p class="text-sm font-medium text-gray-800 dark:text-gray-300">
                    james@site.com
                  </p>
                </div>
                <div class="mt-2 py-2 first:pt-0 last:pb-0">
                  <Link to="#">
                    <span
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      <svg
                        class="flex-shrink-0 w-4 h-4"
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      Dashboard
                    </span>
                  </Link>
                  <Link to="#">
                    <span
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      <svg
                        class="flex-shrink-0 w-4 h-4"
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      Logout
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-x-4">
            <Link to="/login">
              <span
                className="font-medium text-white bg-[#7A7ADD] px-6 py-2 rounded-full w-[110px] text-center"
                aria-current="page"
              >
                Sign In
              </span>
            </Link>
            <Link to="/signup">
              <span
                className="font-medium text-white bg-[#7A7ADD] px-6 py-2 rounded-full w-[110px] text-center"
                aria-current="page"
              >
                Sign Up
              </span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
