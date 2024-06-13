import React, { useEffect } from "react";
import Datepicker from "flowbite-datepicker/Datepicker";

function StayDate() {
  useEffect(() => {
    const datepickerEl = document?.getElementById("datepickerId1");
    const datepickerEl2 = document?.getElementById("datepickerId2");
    // console.log(datepickerEl);
    new Datepicker(datepickerEl, {});
    new Datepicker(datepickerEl2, {});
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-secondary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input
            name="start"
            type="text"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
            placeholder="Select date start"
            id="datepickerId1"
          />
        </div>
        <span className="mx-4 text-primary">to</span>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-secondary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input
            name="start"
            type="text"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
            placeholder="Select date start"
            id="datepickerId2"
          />
        </div>
      </div>
    </div>
  );
}

export default StayDate;
