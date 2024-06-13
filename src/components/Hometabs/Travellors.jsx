import React from "react";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import { useState } from "react";
function Travellors() {
  const [isOpen, setisOpen] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const handleDecrementAdult = () => {
    if (adultCount > 0) {
      setAdultCount((count) => count - 1);
    }
  };

  const handleIncrementAdult = () => {
    setAdultCount((count) => count + 1);
  };

  const handleDecrementChildren = () => {
    if (childrenCount > 0) {
      setChildrenCount((count) => count - 1);
    }
  };

  const handleIncrementChildren = () => {
    setChildrenCount((count) => count + 1);
  };
  return (
    <div>
      <div className="">
        <div className="relative">
          <div
            className="relative"
            onClick={(e) => {
              if (isOpen) {
                setisOpen(false);
              } else {
                setisOpen(true);
              }
            }}
          >
            <span className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 cursor-pointer">
              {" "}
              Travellors
            </span>

            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FamilyRestroomIcon className="text-secondary" />
            </div>
          </div>
          <div
            className={`absolute z-40 p-5 bg-white py-2 px-3  border border-gray-200 rounded-lg w-80 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="py-2 w-full flex justify-between items-center gap-x-3">
              <div>
                <span className="block font-medium text-sm text-gray-800 ">
                  Adults
                </span>
              </div>
              <div className="flex items-center gap-x-1.5">
                <button
                  type="button"
                  className={`w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 ${
                    adultCount === 0
                      ? "disabled:opacity-50 disabled:pointer-events-none"
                      : ""
                  }`}
                  onClick={handleDecrementAdult}
                >
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <input
                  className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 "
                  type="text"
                  value={adultCount}
                />
                <button
                  type="button"
                  className=" w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                  onClick={handleIncrementAdult}
                >
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="py-2 w-full flex justify-between items-center gap-x-3">
              <div>
                <span className="block font-medium text-sm text-gray-800 ">
                  Children
                </span>
                <span className="block text-xs text-gray-500 ">
                  Ages 0 - 17
                </span>
              </div>
              <div className="flex items-center gap-x-1.5">
                <button
                  type="button"
                  className={`w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 ${
                    childrenCount === 0
                      ? "disabled:opacity-50 disabled:pointer-events-none"
                      : ""
                  }`}
                  onClick={handleDecrementChildren}
                >
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <input
                  className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 "
                  type="text"
                  value={childrenCount}
                />
                <button
                  type="button"
                  className=" w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                  onClick={handleIncrementChildren}
                >
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travellors;
