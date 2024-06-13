import React from "react";
import CarForm from "./Form1/CarForm";

export default function Cartab() {
  return (
    <form>
      <div className="flex flex-col items-center md:gap-0 sm:flex-row sm:gap-3">
        <div className="w-full">
          <CarForm />
        </div>
      </div>
    </form>
  );
}
