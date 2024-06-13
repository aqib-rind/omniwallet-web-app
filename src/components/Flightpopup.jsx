import React from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import Slider from "react-slick";
import CheckIcon from "@mui/icons-material/Check";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Link } from "react-router-dom";

export default function Flightpopup() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div
      id="hs-modal-upgrade-to-pro"
      className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto flex flex-row items-center"
    >
      <div
        // id="hs-modal-upgrade-to-pro"
        className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-1 ease-out transition-all sm:max-w-[50%] sm:w-full sm:mx-auto"
      >
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm pointer-events-auto opacity-100 p-5">
          <h3 className="text-primary font-semibold text-xl">
            Select fare to New York
          </h3>
          <h4 className="text-primary font-semibold text-lg">
            11:00pm - 9:00am (19h, 1 stop)
          </h4>
          <div className="">
            <div className="md:col-span-3">
              <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
                <div
                  className="hs-accordion pt-2 pb-3"
                  id="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center gap-x-3 w-full  text-xs text-start text-secondary rounded-lg transition hover:text-primary dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  >
                    Show details
                    <svg
                      className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-secondary group-hover:text-primary dark:text-gray-400"
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
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-secondary group-hover:text-primary dark:text-gray-400"
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
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                  >
                    <div className="flex flex-row items-start gap-2">
                      <FlightTakeoffIcon style={{ fontSize: 20 }} />
                      <div>
                        <p className="text-xs">5:35am - Dubai</p>
                        <p className="text-xs">Dubai Intl. (DXB)</p>
                        <p className="text-xs py-3">1h 40m flight</p>
                        <p className="text-xs">Kuwait Airways 678</p>
                        <p className="text-xs">Economy/Coach (V)</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-start gap-2 pt-4">
                      <FlightLandIcon style={{ fontSize: 20 }} />
                      <div>
                        <p className="text-xs">6:15am - Kuwait City</p>
                        <p className="text-xs">Kuwait Intl. (KWI)</p>
                      </div>
                    </div>
                    <div className="py-2">
                      <hr></hr>
                    </div>
                    <p className="text-xs">Layover: 3h 15m in Kuwait City</p>
                    <div className="py-2">
                      <hr></hr>
                    </div>
                    <div className="flex flex-row items-start gap-2">
                      <FlightTakeoffIcon style={{ fontSize: 20 }} />
                      <div>
                        <p className="text-xs">9:30am - Kuwait City</p>
                        <p className="text-xs">Kuwait Intl. (KWI)</p>
                        <p className="text-xs py-3">13h 30m flight</p>
                        <p className="text-xs">Kuwait Airways 117</p>
                        <p className="text-xs">BOEING 777-300ER</p>{" "}
                        <p className="text-xs">Economy/Coach (V)</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-start gap-2 pt-4">
                      <FlightLandIcon style={{ fontSize: 20 }} />
                      <div>
                        <p className="text-xs">3:00pm - New York</p>
                        <p className="text-xs">John F. Kennedy Intl. (JFK)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Slider {...settings}>
              <div className="p-2">
                <div className="border rounded-xl p-3">
                  <h3 className="text-2xl font-semibold text-primary">$571</h3>
                  <p className="text-xs">$570.30 one way for 1 traveler</p>
                  <p className="text-sm py-2">Cabin: Economy</p>
                  <p className="text-lg font-semibold text-primary py-4">
                    Bags
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <CheckIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Carry-on bags included*</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">2 checked bags included**</p>
                  </div>
                  <p className="text-xs pt-2">
                    *Carry-on bag included for up to 15 lbs
                  </p>
                  <p className="text-xs">
                    **Checked bags can weigh up to 50 lbs each
                  </p>
                  <p className="text-lg font-semibold text-primary py-4">
                    Flexibility
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <MonetizationOnIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Cancellation fee applies</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <MonetizationOnIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Change fee applies</p>
                  </div>
                  <Link
                    to="/car-search"
                    onClick={() => {
                      window.location.href = "/omniwallet/car-search";
                    }}
                    data-hs-overlay="#hs-modal-upgrade-to-pro"
                  >
                    <button className="w-full py-2 px-3 bg-primary text-white rounded-full mt-5">
                      Select
                    </button>
                  </Link>
                </div>
              </div>
              <div className="p-2">
                <div className="border rounded-xl p-3">
                  <h3 className="text-2xl font-semibold text-primary">$571</h3>
                  <p className="text-xs">$570.30 one way for 1 traveler</p>
                  <p className="text-sm py-2">Cabin: Economy</p>
                  <p className="text-lg font-semibold text-primary py-4">
                    Bags
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <CheckIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Carry-on bags included*</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">2 checked bags included**</p>
                  </div>
                  <p className="text-xs pt-2">
                    *Carry-on bag included for up to 15 lbs
                  </p>
                  <p className="text-xs">
                    **Checked bags can weigh up to 50 lbs each
                  </p>
                  <p className="text-lg font-semibold text-primary py-4">
                    Flexibility
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <MonetizationOnIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Cancellation fee applies</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <MonetizationOnIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Change fee applies</p>
                  </div>
                  <Link
                    to="/car-search"
                    onClick={() => {
                      window.location.href = "/omniwallet/car-search";
                    }}
                    data-hs-overlay="#hs-modal-upgrade-to-pro"
                  >
                    <button className="w-full py-2 px-3 bg-primary text-white rounded-full mt-5">
                      Select
                    </button>
                  </Link>
                </div>
              </div>
              <div className="p-2">
                <div className="border rounded-xl p-3">
                  <h3 className="text-2xl font-semibold text-primary">$571</h3>
                  <p className="text-xs">$570.30 one way for 1 traveler</p>
                  <p className="text-sm py-2">Cabin: Economy</p>
                  <p className="text-lg font-semibold text-primary py-4">
                    Bags
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <CheckIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Carry-on bags included*</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">2 checked bags included**</p>
                  </div>
                  <p className="text-xs pt-2">
                    *Carry-on bag included for up to 15 lbs
                  </p>
                  <p className="text-xs">
                    **Checked bags can weigh up to 50 lbs each
                  </p>
                  <p className="text-lg font-semibold text-primary py-4">
                    Flexibility
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <MonetizationOnIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Cancellation fee applies</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <MonetizationOnIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Change fee applies</p>
                  </div>
                  <Link
                    to="/car-search"
                    onClick={() => {
                      window.location.href = "/omniwallet/car-search";
                    }}
                    data-hs-overlay="#hs-modal-upgrade-to-pro"
                  >
                    <button className="w-full py-2 px-3 bg-primary text-white rounded-full mt-5">
                      Select
                    </button>
                  </Link>
                </div>
              </div>
              <div className="p-2">
                <div className="border rounded-xl p-3">
                  <h3 className="text-2xl font-semibold text-primary">$571</h3>
                  <p className="text-xs">$570.30 one way for 1 traveler</p>
                  <p className="text-sm py-2">Cabin: Economy</p>
                  <p className="text-lg font-semibold text-primary py-4">
                    Bags
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <CheckIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Carry-on bags included*</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">2 checked bags included**</p>
                  </div>
                  <p className="text-xs pt-2">
                    *Carry-on bag included for up to 15 lbs
                  </p>
                  <p className="text-xs">
                    **Checked bags can weigh up to 50 lbs each
                  </p>
                  <p className="text-lg font-semibold text-primary py-4">
                    Flexibility
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <MonetizationOnIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Cancellation fee applies</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <MonetizationOnIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Change fee applies</p>
                  </div>
                  <Link
                    to="/car-search"
                    onClick={() => {
                      window.location.href = "/omniwallet/car-search";
                    }}
                    data-hs-overlay="#hs-modal-upgrade-to-pro"
                  >
                    <button className="w-full py-2 px-3 bg-primary text-white rounded-full mt-5">
                      Select
                    </button>
                  </Link>
                </div>
              </div>
              <div className="p-2">
                <div className="border rounded-xl p-3">
                  <h3 className="text-2xl font-semibold text-primary">$571</h3>
                  <p className="text-xs">$570.30 one way for 1 traveler</p>
                  <p className="text-sm py-2">Cabin: Economy</p>
                  <p className="text-lg font-semibold text-primary py-4">
                    Bags
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <CheckIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Carry-on bags included*</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CheckIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">2 checked bags included**</p>
                  </div>
                  <p className="text-xs pt-2">
                    *Carry-on bag included for up to 15 lbs
                  </p>
                  <p className="text-xs">
                    **Checked bags can weigh up to 50 lbs each
                  </p>
                  <p className="text-lg font-semibold text-primary py-4">
                    Flexibility
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <MonetizationOnIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Cancellation fee applies</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <MonetizationOnIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Change fee applies</p>
                  </div>
                  <Link
                    to="/car-search"
                    onClick={() => {
                      window.location.href = "/omniwallet/car-search";
                    }}
                    data-hs-overlay="#hs-modal-upgrade-to-pro"
                  >
                    <button className="w-full py-2 px-3 bg-primary text-white rounded-full mt-5">
                      Select
                    </button>
                  </Link>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
