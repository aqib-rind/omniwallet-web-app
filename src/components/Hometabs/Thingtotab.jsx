import React from "react";
import Thingtodoseacrch from "./Form1/Thingtodoseacrch";

export default function Thingtotab() {
  return (
    <form>
      <div className="flex flex-col items-center md:gap-0 sm:flex-row sm:gap-3">
        <div className="w-full">
          <Thingtodoseacrch />
        </div>
      </div>
    </form>
  );
}
