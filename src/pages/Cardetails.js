import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import PersonIcon from "@mui/icons-material/Person";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SpeedIcon from "@mui/icons-material/Speed";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Baselayout from "../components/Layouts/Baselayout";
import { Link } from "react-router-dom";

export default function Cardetails() {
  return (
    <Baselayout>
      <div className="bg-[#f7f7f7]">
        <div className="max-w-6xl m-auto flex flex-col lg:flex-row gap-5 items-start lg:py-10 lg:px-0 p-5">
          <div className="flex-1">
            <div className="flex gap-5 flex-col">
              <div className="flex flex-row bg-white p-3 rounded-lg items-center gap-2">
                <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center">
                  <DoneIcon className="text-white" />
                </div>
                <p>Congratulations! You’ve unlocked a new offer.</p>
              </div>
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
                <p className="text-sm font-semibold py-3">Pick-up & Drop-off</p>
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
                  Rental policies
                </h3>
                <ul className="list-disc pl-5 py-2">
                  <li className="text-xs">
                    You will not be charged anything for the rental since the
                    booking was risk-free.
                  </li>
                  <li className="text-xs">
                    Drivers under 25 or over 70 years of age may need to pay an
                    extra fee.
                  </li>
                </ul>
                <h4 className="font-semibold text-base pt-5">
                  What's included
                </h4>
                <p className="text-xs">
                  These are included in the total price of the car rental.
                </p>
                <h4 className="text-sm pt-5">
                  Minimal contact with option to check-in online
                </h4>
                <ul className="list-disc pl-5 py-2">
                  <li className="text-xs">
                    You will receive an email/a message from Avis to check-in
                    online after the car has been reserved
                  </li>
                  <li className="text-xs">
                    No paper-work required during pick-up
                  </li>
                  <li className="text-xs">
                    Minimize contact and save time at the pick-up counter
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-white p-5 rounded-lg">
              <h3 className="text-primary font-semibold text-3xl">
                $41 <span className="text-xs">per day</span>
              </h3>
              <p className="text-secondary text-xs py-1">Free cancellation</p>
              <p className="text-primary text-xs py-1">Pay at pick-up</p>
              <p className="text-primary text-xs py-1">
                Reserve without a credit card
              </p>
              <div className="py-3">
                <hr></hr>
              </div>
              <p className="text-primary font-semibold text-sm py-2">
                Additional benefits with this car rental
              </p>
              <div className="flex flex-row items-center gap-2 py-1">
                <DoneIcon className="text-xs" style={{ fontSize: 15 }} />
                <p className="text-xs">Online check-in</p>
              </div>
              <div className="flex flex-row items-center gap-2 py-1">
                <DoneIcon className="text-xs" style={{ fontSize: 15 }} />
                <p className="text-xs">Free upgrade included</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg">
              <h3 className="text-primary font-semibold text-xl">
                Price details
              </h3>
              <p className=" text-xs py-1 font-semibold">Pay at pick-up</p>
              <div className="flex flex-row items-center justify-between gap-2 pt-2">
                <p className="text-xs">Car rental fee x 1 day</p>
                <p className="text-xs">$41.26</p>
              </div>
              <p className="text-xs">$41.26 per day</p>
              <div className="flex flex-row items-center justify-between gap-2 pt-2">
                <a href="" className="text-xs hover:underline">
                  Taxes and fees
                </a>
                <p className="text-xs">$17.78</p>
              </div>
              <div className="py-3">
                <hr></hr>
              </div>
              <div className="flex flex-row items-center justify-between gap-2 pt-2">
                <p className="text-sm font-semibold">Total</p>
                <p className="text-sm font-semibold">$17.78</p>
              </div>
              <div className="flex flex-row items-center justify-between gap-2 pt-2">
                <p className="text-xs">Pay at pick-up</p>
                <p className="text-xs">$59.04</p>
              </div>
              <div className="flex flex-row items-center justify-between gap-2 pt-2 pb-8">
                <p className="text-xs">Pay now</p>
                <p className="text-xs">$0.00</p>
              </div>
              <Link to="/thingtodo">
                <button className="text-white bg-primary rounded-full py-3 px-5 w-full">
                  Reserve
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Baselayout>
  );
}
