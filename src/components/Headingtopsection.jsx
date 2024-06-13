import React from "react";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import FlightIcon from "@mui/icons-material/Flight";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import Staytabs from "./Hometabs/Staytabs";
import Flighttab from "./Hometabs/Flighttab";
import Thingtotab from "./Hometabs/Thingtotab";
import Cartab from "./Hometabs/Cartab";

export default function Headingtopsection() {
  return (
    <div className="z-10">
      <div className="flex items-center justify-center pt-5">
        <h1 className="font-bold text-5xl z-50">Where to?</h1>
      </div>
      {/* Tabs Head */}
      <div className="">
        <nav
          className="flex gap-5 items-center justify-center pt-10 pb-5"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className="py-4 px-1 inline-flex items-center gap-x-2 text-sm whitespace-nowrap text-primary focus:outline-none focus:text-secondary disabled:opacity-50 disabled:pointer-events-none active"
            id="basic-tabs-item-1"
            data-hs-tab="#basic-tabs-1"
            aria-controls="basic-tabs-1"
            role="tab"
          >
            <span
              className="flex items-center justify-center gap-2 z-10"
              href="#"
            >
              <SingleBedIcon />
              <p className="text-md font-bold">Hotels</p>
            </span>
          </button>
          <button
            type="button"
            className="py-4 px-1 inline-flex items-center gap-x-2 text-sm whitespace-nowrap text-primary  focus:outline-none focus:text-secondary disabled:opacity-50 disabled:pointer-events-none "
            id="basic-tabs-item-2"
            data-hs-tab="#basic-tabs-2"
            aria-controls="basic-tabs-2"
            role="tab"
          >
            <span
              className="flex items-center justify-center gap-2 z-10"
              href="#"
            >
              <FlightIcon />
              <p className="text-md font-bold">Flights</p>
            </span>
          </button>
          <button
            type="button"
            className="py-4 px-1 inline-flex items-center gap-x-2 text-sm whitespace-nowrap text-primary  focus:outline-none focus:text-secondary disabled:opacity-50 disabled:pointer-events-none "
            id="basic-tabs-item-3"
            data-hs-tab="#basic-tabs-3"
            aria-controls="basic-tabs-4"
            role="tab"
          >
            <span
              className="flex items-center justify-center gap-2 z-10"
              href="#"
            >
              <DirectionsCarIcon />
              <p className="text-md font-bold">Cars</p>
            </span>
          </button>
          <button
            type="button"
            className="py-4 px-1 inline-flex items-center gap-x-2 text-sm whitespace-nowrap text-primary  focus:outline-none focus:text-secondary disabled:opacity-50 disabled:pointer-events-none "
            id="basic-tabs-item-1"
            data-hs-tab="#basic-tabs-5"
            aria-controls="basic-tabs-5"
            role="tab"
          >
            <span
              className="flex items-center justify-center gap-2 z-10"
              href="#"
            >
              <LocalActivityIcon />
              <p className="text-md font-bold">Things to do</p>
            </span>
          </button>
        </nav>
      </div>

      {/* Tabs Area */}
      <div className=" max-w-6xl w-full mx-auto">
        <div
          id="basic-tabs-1"
          role="tabpanel"
          aria-labelledby="basic-tabs-item-1"
        >
          <Staytabs />
        </div>
        <div
          id="basic-tabs-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="basic-tabs-item-2"
        >
          <Flighttab />
        </div>
        <div
          id="basic-tabs-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="basic-tabs-item-3"
        >
          <Cartab />
        </div>
        <div
          id="basic-tabs-5"
          className="hidden"
          role="tabpanel"
          aria-labelledby="basic-tabs-item-5"
        >
          <Thingtotab />
        </div>
      </div>
    </div>
  );
}
