import React from "react";
import StayForm from "../components/Hometabs/Form1/StayForm";
import Leftsidebar from "../components/Leftsidebar";
import Topheading from "../components/Thingstodo/Topheading";
import Tags from "../components/Thingstodo/Tags";
import Topten from "../components/Thingstodo/Topten";
import Baselayout from "../components/Layouts/Baselayout";

export default function Thingstodo() {
  return (
    <Baselayout>
      <div className="bg-[#f7f7f7]">
        <form className="bg-secondary p-3">
          <div className="flex max-w-6xl m-auto flex-col items-center md:gap-0 sm:flex-row sm:gap-3">
            <div className="w-full">
              <StayForm />
            </div>
          </div>
        </form>
        <div className="max-w-6xl m-auto flex flex-col lg:flex-row gap-5 items-start lg:py-10 lg:px-0 p-5">
          <div className="">
            <Leftsidebar />
          </div>
          <div className="flex flex-col gap-2">
            <div className="">
              <Topheading />
              <Tags />
            </div>
            <div className="pt-5">
              <h2 className="text-lg font-semibold">Top 10 things to do</h2>
            </div>
            <div>
              <Topten />
            </div>
            <div className="pt-5">
              <h2 className="text-lg font-semibold">
                4WD, ATV & off-road tours
              </h2>
            </div>
            <div>
              <Topten />
              <Topten />
              <div className="text-center pt-5">
                <a
                  href="#"
                  className="bg-primary text-white px-5 py-2 rounded-full"
                >
                  See all activities
                </a>
              </div>
            </div>
            <div className="pt-5">
              <h2 className="text-lg font-semibold">Bus & minivan tours</h2>
            </div>
            <div>
              <Topten />
              <Topten />
              <div className="text-center pt-5">
                <a
                  href="#"
                  className="bg-primary text-white px-5 py-2 rounded-full"
                >
                  See all activities
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Baselayout>
  );
}
