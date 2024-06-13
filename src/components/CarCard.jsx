import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import SpeedIcon from "@mui/icons-material/Speed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

export default function CarCard() {
  return (
    <Link to="/car-search/details">
      <div className="w-full rounded-xl bg-white">
        <div className="group sm:flex w-full rounded-xl" href="#">
          <div className="flex-shrink-0 relative overflow-hidden w-full h-[180px] sm:w-[250px] sm:h-[250px]">
            <img
              className="w-full h-full absolute rounded-xl top-0 start-0 object-contain"
              src="https://img.freepik.com/free-photo/child-perspective-motorcar-generic-race_1232-3545.jpg?w=1380&t=st=1700511797~exp=1700512397~hmac=0cc297fc2ac7c252feda75ff95012f326ce631c24a3351b3c5fd2ec33a379ed2"
              alt="Image Description"
            />
          </div>

          <div className="w-full">
            <div className="p-4 flex flex-col h-full sm:p-6 w-full">
              <h3 className="text-lg sm:text-2xl font-semibold text-primary ">
                Economy
              </h3>

              <p className="mt-2 text-gray-600  text-xs">
                Nissan Micra, Kia Picanto, automatic or similar
              </p>
              <div className="flex flex-row py-2 items-center justify-start gap-2">
                <div className="flex flex-row gap-2">
                  <PersonIcon style={{ fontSize: 15 }} />
                  <div className="">
                    <p className="text-xs">5 Seats</p>
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <MiscellaneousServicesIcon style={{ fontSize: 15 }} />
                  <div className="">
                    <p className="text-xs">Automatic</p>
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <SpeedIcon style={{ fontSize: 15 }} />
                  <div className="">
                    <p className="text-xs">Unlimited mileage</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-end justify-between gap-5">
                <div className="flex-1">
                  <div className="flex flex-row items-start gap-2 mb-5">
                    <LocationOnIcon style={{ fontSize: 15 }} />
                    <div className="">
                      <p className="font-semibold text-xs">Pick-Up</p>
                      <a className="text-primary text-xs" href="#">
                        Dubai Airport
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <div>
                      <div className="w-16 rounded">
                        <img
                          className="rounded"
                          src="https://cdn2.rcstatic.com/sp/images/suppliers/17_logo_200.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-2">
                      <div className="bg-secondary px-2 py-1 rounded">
                        <p className="font-bold text-white text-xs">9.2</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-xs text-primary">
                          Wonderful
                        </h5>
                        <p className="text-xs text-primary">730 reviews</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-secondary py-1 px-2 rounded">
                    <p className="text-white text-xs">
                      We have 5 left at 40% off at
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-end">
                    <p className="flex flex-row gap-1">
                      <del className="text-sm">$1,144</del>
                      <p className="font-semibold text-lg">$686</p>
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-end">
                    <p className="text-xs text-left">$1,692 total</p>
                    <button className="bg-primary hover:bg-secondary py-2 px-3 text-white rounded-xl mt-4">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
