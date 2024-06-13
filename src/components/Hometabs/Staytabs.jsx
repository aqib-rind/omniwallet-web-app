import React from "react";
import WhereTo from "./WhereTo";
import StayForm from "./Form1/StayForm";

export default function Staytabs() {
  return (
    <form>
      <div className="flex flex-col items-center md:gap-0 sm:flex-row sm:gap-3">
        <div className="w-full">
          <StayForm />
        </div>
      </div>
    </form>
  );
}
