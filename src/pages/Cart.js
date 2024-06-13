import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SpeedIcon from "@mui/icons-material/Speed";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";
import Baselayout from "../components/Layouts/Baselayout";

export default function Cart() {
  return (
    <Baselayout>
      <div className="bg-[#f7f7f7]">
        <div className="max-w-6xl m-auto lg:py-10 lg:px-0 p-5">
          <div className="flex lg:flex-row flex-col gap-5 items-start">
            <div className="lg:w-[70%]">
              <div className="flex gap-5 flex-col bg-white rounded-lg">
                <div className="p-5 bg-white rounded-lg">
                  <h3 className="text-2xl text-primary font-semibold">
                    Midsize SUV
                  </h3>
                  <p className="text-xs pb-5">?Nissan X-Trail or similar</p>
                  <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div>
                      <div className="flex flex-row gap-2 items-center py-1">
                        <PersonIcon />
                        <p className="text-xs">5 Passengers</p>
                      </div>
                      <div className="flex flex-row gap-2 items-center py-1">
                        <AcUnitIcon />
                        <p className="text-xs">Air Conditioning</p>
                      </div>
                      <div className="flex flex-row gap-2 items-center py-1">
                        <SpeedIcon />
                        <p className="text-xs">Unlimited mileage</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-row gap-2 items-center py-1">
                        <DirectionsCarIcon />
                        <p className="text-xs">5 Doors</p>
                      </div>
                      <div className="flex flex-row gap-2 items-center py-1">
                        <MiscellaneousServicesIcon />
                        <p className="text-xs">Automatic</p>
                      </div>
                      <div className="flex flex-row gap-2 items-center py-1">
                        <LocalGasStationIcon />
                        <p className="text-xs">Fuel: full to full</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex-shrink-0 relative overflow-hidden w-full h-[180px] sm:w-[150px] sm:h-[150px]">
                        <img
                          className="w-full h-full absolute rounded-xl top-0 start-0 object-contain"
                          src="omniwallet/images/carimage.png"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <hr></hr>
                  </div>
                  <div className="pb-2">
                    <h4 className="text-primary font-semibold">
                      Traveler ratings
                    </h4>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div>
                      <p className="text-xs">66% positive ratings</p>
                      <p className="text-xs">
                        Vehicle condition and price as expected
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="w-full max-w-[35px] m-auto mr-0">
                        <img
                          className="rounded"
                          src="https://cdn2.rcstatic.com/sp/images/suppliers/17_logo_200.png"
                          alt=""
                        />
                      </div>
                      <a
                        href="#"
                        className="text-secondary text-xs hover:underline"
                      >
                        111 ratings
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h3 className="text-primary font-semibold text-xl">
                    Car rental location
                  </h3>
                  <p className="text-sm font-semibold py-3">
                    Pick-up & Drop-off
                  </p>
                  <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex gap-3 flex-col">
                      <div className="flex flex-row gap-2 items-start">
                        <CalendarMonthIcon style={{ fontSize: 15 }} />
                        <p className="text-xs">
                          Thu, Dec 7, 10:30am - Fri, Dec 8, 10:30am
                        </p>
                      </div>
                      <div className="flex flex-row gap-2 items-start">
                        <CalendarMonthIcon style={{ fontSize: 15 }} />
                        <div>
                          <p className="text-xs">DXB Airport</p>
                          <p className="text-xs">
                            Dubai International Airport Arrivals Terminal 1,
                            Dubai, ARE XX
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 flex-col">
                      <div className="flex flex-row gap-2 items-start">
                        <QueryBuilderIcon style={{ fontSize: 15 }} />
                        <div>
                          <p className="text-xs">Hours of operation</p>
                          <p className="text-xs">Thu 12:01am - 11:59pm</p>
                          <p className="text-xs">Fri 12:01am - 11:59pm</p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-start">
                        <DirectionsCarIcon style={{ fontSize: 15 }} />
                        <div>
                          <p className="text-xs">Counter and car in terminal</p>
                          <p className="text-xs">
                            Rental car counter and car in the airport.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h3 className="text-primary font-semibold text-xl">
                    $75 per day
                  </h3>
                  <p className="text-sm font-semibold py-2 text-secondary">
                    Free cancellation
                  </p>
                  <p className="text-xs py-1">Pay at pick-up</p>
                  <p className="text-xs py-1">Reserve without a credit card</p>
                  <h4 className="text-primary font-semibold text-xl pt-3">
                    Price details
                  </h4>
                  <p className="text-sm font-semibold">Pay at pick-up</p>
                  <div className="flex lg:flex-row flex-col gap-5 items-start justify-between pt-4">
                    <div className="">
                      <p className="text-xs">Car rental fee x 1 day</p>
                      <p className="text-xs">$74.60 per day</p>
                    </div>
                    <p className="text-sm">$74.60</p>
                  </div>
                  <div className="flex lg:flex-row flex-col gap-5 items-start justify-between pt-4">
                    <p className="text-xs">Taxes and fees</p>
                    <p className="text-sm">included</p>
                  </div>
                  <div className="py-3">
                    <hr></hr>
                  </div>
                  <div className="flex lg:flex-row flex-col gap-5 items-start justify-between ">
                    <p className="text-lg font-semibold">Total</p>
                    <p className="text-sm">$74.60</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg mt-5 p-3">
                <h3 className="text-primary font-semibold text-2xl">
                  Dubai to New York
                </h3>
                <p className="text-xs">10:30pm - 9:00am (19h 30m, 1 stop)</p>
                <div className="flex flex-row items-center justify-start gap-1 py-2">
                  <img
                    className="w-6"
                    src="https://1000logos.net/wp-content/uploads/2020/04/Turkish-Airlines-symbol.png"
                    alt=""
                  />
                  <p className="text-xs">Turkish Airlines</p>
                  <p className="text-xs">• Mon, Dec 11</p>
                </div>
                <p className="bg-primary p-2 text-white w-fit text-xs rounded-lg">
                  Above average CO2
                </p>
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
                <div className="py-2">
                  <hr></hr>
                </div>
                <p>
                  <p className="text-sm font-semibold text-primary pb-2">
                    Estimated bag fees
                  </p>
                </p>
                <div className="flex flex-row items-center justify-between pb-1">
                  <p className="text-xs">Carry-on:</p>
                  <p className="text-xs">Included up to 15 lb</p>
                </div>
                <div className="flex flex-row items-center justify-between pb-1">
                  <p className="text-xs">1st checked bag:</p>
                  <p className="text-xs">Included up to 50 lb</p>
                </div>
                <div className="flex flex-row items-center justify-between pb-1">
                  <p className="text-xs">2nd checked bag:</p>
                  <p className="text-xs">Included up to 50 lb</p>
                </div>
                <p className="text-xs pt-2">
                  Baggage fees reflect the airline's standard fees based on the
                  selected fare class. Fees may vary based on size and weight
                  restrictions as well as loyalty programs and other promotions.
                  For more information, check with Kuwait Airways
                </p>
                <p className="text-xs pt-2">
                  You can purchase checked bags from Kuwait Airways or through
                  the link in your confirmation or check-in emails.
                </p>
                <p className="text-sm font-semibold text-primary pt-2">
                  Estimated bag fees
                </p>
                <div className="flex flex-row items-center justify-between py-2">
                  <p className="text-sm">Cancellations:</p>
                  <p className="text-sm">$55</p>
                </div>
                <div className="py-2">
                  <hr></hr>
                </div>
                <h3 className="text-primary text-xl font-semibold">
                  Price summary
                </h3>
                <div className="flex flex-row items-center justify-between py-2">
                  <p className="text-sm font-semibold">Traveler 1: Adult</p>
                  <p className="text-sm font-semibold">$1,016.60</p>
                </div>
                <div className="flex flex-row items-center justify-between py-2">
                  <p className="text-sm">Flight</p>
                  <p className="text-sm">$771.00</p>
                </div>
                <div className="flex flex-row items-center justify-between py-2">
                  <p className="text-sm">Taxes and fees</p>
                  <p className="text-sm">$245.60</p>
                </div>
                <div className="py-2">
                  <hr></hr>
                </div>
                <div className="flex flex-row items-center justify-between py-2">
                  <p className="text-lg font-semibold">Trip total</p>
                  <p className="text-lg font-semibold">$1,016.60</p>
                </div>
              </div>
              <div className="bg-white rounded-lg mt-5 p-3">
                <h3 className=" text-2xl font-semibold text-primary">
                  Rixos Premium Dubai JBR
                </h3>
                <p className="text-sm py-1">9/10 Wonderful (599 reviews)</p>
                <p className="text-sm py-1">
                  <span className="font-semibold">1 Room:</span> Deluxe Room, 1
                  King Bed
                </p>
                <a className="text-sm py-1" href="#">
                  Non-refundable
                </a>
                <p className="text-sm py-1">Check-in: Sat, Dec 9</p>
                <p className="text-sm py-1">Check-out: Wed, Dec 13</p>
                <p className="text-xs py-1">4-night stay</p>
                <h3 className="text-2xl font-semibold text-primary pt-3">
                  Price details
                </h3>
                <div className="py-2">
                  <hr></hr>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <p className="text-sm">1 room x 4 nights</p>
                    <p className="text-xs">$337.91 average per night</p>
                  </div>
                  <p className="text-sm">$1,351.64</p>
                </div>
                <div className="flex flex-row items-center justify-between py-3">
                  <div>
                    <a className="text-sm" href="#">
                      Taxes and fees
                    </a>
                  </div>
                  <p className="text-sm">$1,351.64</p>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <p className="text-sm">Local tax</p>
                    <p className="text-xs">Payable at property</p>
                  </div>
                  <p className="text-sm">$21.78</p>
                </div>
                <div className="py-3">
                  <hr></hr>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <p className="text-base font-semibold">Total</p>
                  </div>
                  <p className="text-base font-semibold">$1,351.64</p>
                </div>
              </div>
              <div className="bg-white rounded-lg mt-5 p-3">
                <h3 className="text-primary font-semibold text-2xl">
                  Burj Khalifa 124th & 125th Floor Observation Deck Tickets
                </h3>
                <p className="font-semibold text-xs py-1">Dubai</p>
                <p className="text-xs py-1">Mon, Dec 11</p>
                <p className="text-xs py-1">1 Adult</p>
                <p className="text-xs py-1">
                  Burj Khalifa (09:00 AM - 2:30 PM)
                </p>
                <div className="flex flex-row items-center gap-2">
                  <AccessTimeIcon style={{ fontSize: 15 }} />
                  <p className="text-xs py-1">Duration 1 hour 30 minutes</p>
                </div>
                <p className="text-xs py-1">Activity location</p>
                <p className="text-xs py-1">Burj Khalifa</p>
                <div className=" py-3">
                  <hr></hr>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-lg font-semibold">Total</p>
                  <p className="text-lg font-semibold">$49.00</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[30%] p-5 bg-white rounded-lg">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-lg font-semibold text-primary">Items</h3>
                <h3 className="text-lg font-semibold text-primary">Total</h3>
              </div>
              <div className="py-2">
                <hr></hr>
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-sm">Car Booking</p>
                <p className="text-sm">$74.60</p>
              </div>
              <div className="py-2">
                <hr></hr>
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-sm">Flight Booking</p>
                <p className="text-sm">$1,016.60</p>
              </div>
              <div className="py-2">
                <hr></hr>
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-sm">Hotel Booking</p>
                <p className="text-sm">$1,351.64</p>
              </div>
              <div className="py-2">
                <hr></hr>
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-sm">Activity Booking</p>
                <p className="text-sm">$49.00</p>
              </div>
              <div className="py-4">
                <hr></hr>
              </div>
              <p className="text-lg font-semibold text-primary text-right">
                2,491.84
              </p>
              <div className="w-full pt-5">
                <Link to="/checkout">
                  <button className="text-white bg-primary py-2 px-3 w-full rounded-full">
                    Check Out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Baselayout>
  );
}
