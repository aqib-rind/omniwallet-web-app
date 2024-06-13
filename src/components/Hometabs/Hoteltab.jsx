import React from "react";
import FlightForm from "./Form1/FlightForm";

export default function Hoteltab() {
  return (
    <form>
      <div className="flex flex-col items-center md:gap-0 sm:flex-row sm:gap-3">
        <div className="w-full">
          <FlightForm />
        </div>
      </div>
    </form>
  );
}
