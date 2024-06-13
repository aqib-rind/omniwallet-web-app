import React from "react";
import { Link } from "react-router-dom";
import Baselayout from "../components/Layouts/Baselayout";

function NoPage() {
  return (
    <Baselayout>
      <div class="text-center py-48 px-4 sm:px-6 lg:px-8">
        <h1 class="block text-7xl font-bold text-primary sm:text-9xl ">404</h1>

        <p class="mt-3 text-gray-600 ">Oops, something went wrong.</p>
        <p class="text-gray-600 ">Sorry, we couldn't find your page.</p>
        <div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
          <Link to="/">
            <span class="bg-primary text-white py-2 px-4 rounded-full">
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </Baselayout>
  );
}

export default NoPage;
