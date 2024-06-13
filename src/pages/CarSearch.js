import React from "react";
import StayForm from "../components/Hometabs/Form1/StayForm";
import Leftsidebar from "../components/Leftsidebar";
import CarCard from "../components/CarCard";
import Baselayout from "../components/Layouts/Baselayout";

export default function CarSearch() {
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
          <div className="flex flex-col gap-2 w-full">
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </div>
        </div>
      </div>
    </Baselayout>
  );
}
