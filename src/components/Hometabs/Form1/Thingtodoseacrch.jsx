import React from "react";
import WhereTo from "../WhereTo";
import StayDate from "../StayDate";
import Travellors from "../Travellors";
import { Link } from "react-router-dom";

export default function Thingtodoseacrch() {
  return (
    <div className="flex flex-col lg:flex-row p-2 rounded-md bg-white justify-between gap-5 items-center">
      <div className="flex-1">
        <WhereTo />
      </div>
      <div className="flex-2">
        <StayDate />
      </div>
      <div className="flex-1">
        <Travellors />
      </div>
      <div className="">
        <Link to="/thingtodo">
          <button
            type="button"
            className=" py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent hover:bg-primary text-white bg-secondary disabled:opacity-50 disabled:pointer-events-none transition-all ease-in-out"
          >
            Search Now
          </button>
        </Link>
      </div>
    </div>
  );
}
