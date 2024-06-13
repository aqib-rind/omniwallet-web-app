import React from "react";
import PoolIcon from "@mui/icons-material/Pool";
import GradeIcon from "@mui/icons-material/Grade";
import { Link } from "react-router-dom";

export default function HotelCard() {
  return (
    <Link to="/hotel-search/details">
      <div className="w-full rounded-xl bg-white">
        <div className="group sm:flex w-full rounded-xl" href="#">
          <div className="flex-shrink-0 relative overflow-hidden w-full h-[180px] sm:w-[250px] sm:h-[330px]">
            <img
              className="w-full h-full absolute rounded-xl top-0 start-0 object-cover"
              src="https://images.unsplash.com/photo-1531586024505-b040066c2d5b?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image Description"
            />
          </div>

          <div className="grow ">
            <div className="p-4 flex flex-col h-full sm:p-6">
              <Link to="/">
                <h3 className="text-lg sm:text-2xl font-semibold text-primary group-hover:text-secondary">
                  Rixos Premium Dubai JBR
                </h3>
              </Link>
              <div className="">
                <GradeIcon style={{ color: "#FFB700", fontSize: 15 }} />
                <GradeIcon style={{ color: "#FFB700", fontSize: 15 }} />
                <GradeIcon style={{ color: "#FFB700", fontSize: 15 }} />
                <GradeIcon style={{ color: "#FFB700", fontSize: 15 }} />
                <GradeIcon style={{ color: "#FFB700", fontSize: 15 }} />
              </div>
              <p className="mt-2 text-gray-600  text-xs">
                Jumeirah Beach Residence
              </p>
              <div className="flex flex-row py-2 items-center justify-start gap-2">
                <PoolIcon style={{ fontSize: 15 }} />
                <div>
                  <p className="text-xs">Pool</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-end justify-between gap-5">
                <div className="flex-1">
                  <h4 className=" font-semibold text-xs">
                    Winter Specials, Stay 3 Pay Less
                  </h4>
                  <p className="text-xs">
                    A Michelin Star restaurant and refined luxury in the worlds
                    tallest building. Stay 3 or 4 nights in October for big
                    savings.
                  </p>
                  <div className="py-3">
                    <p className="text-xs text-secondary">Fully refundable</p>
                    <p className="text-xs text-secondary">
                      Reserve now, pay later
                    </p>
                    <p className="text-xs text-secondary">
                      Earn $27.44 in OneKeyCash
                    </p>
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
                    <p className="text-xs text-left">includes taxes & fees</p>
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
