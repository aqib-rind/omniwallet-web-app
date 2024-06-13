import React from "react";
import Dashboardlayout from "../../components/Layouts/Dashboardlayout";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import KingBedIcon from "@mui/icons-material/KingBed";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
export default function Dashboard() {
  return (
    <div>
      <Dashboardlayout>
        <div className=" flex lg:flex-row flex-col items-center gap-8">
          <img src="omniwallet/images/cardomni.png" alt="" />
        </div>
        <div className="py-10">
          <hr></hr>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-8">
          <div className="bg-primary p-5 flex flex-row items-center gap-4 rounded-lg">
            <FlightTakeoffIcon
              className="text-white"
              style={{ fontSize: 50 }}
            />
            <h3 className="text-white font-normal text-2xl">Flight Booking</h3>
          </div>
          <div className="bg-primary p-5 flex flex-row items-center gap-4 rounded-lg">
            <KingBedIcon className="text-white" style={{ fontSize: 50 }} />
            <h3 className="text-white font-normal text-2xl">Hotels Booking</h3>
          </div>
          <div className="bg-primary p-5 flex flex-row items-center gap-4 rounded-lg">
            <DirectionsCarIcon
              className="text-white"
              style={{ fontSize: 50 }}
            />
            <h3 className="text-white font-normal text-2xl">Car Booking</h3>
          </div>
          <div className="bg-primary p-5 flex flex-row items-center gap-4 rounded-lg">
            <LocalActivityIcon
              className="text-white"
              style={{ fontSize: 50 }}
            />
            <h3 className="text-white font-normal text-2xl">
              Activity Booking
            </h3>
          </div>
        </div>
        <div className="py-10">
          <hr></hr>
        </div>
        <h3 className="text-primary font-semibold text-2xl pb-10">
          Transactions
        </h3>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between p-3 bg-primary rounded-xl">
            <p className="text-white text-lg">Netflix</p>
            <p className="text-white text-lg">$11.99</p>
          </div>
          <div className="flex flex-row justify-between p-3 bg-primary rounded-xl">
            <p className="text-white text-lg">Netflix</p>
            <p className="text-white text-lg">$11.99</p>
          </div>
          <div className="flex flex-row justify-between p-3 bg-primary rounded-xl">
            <p className="text-white text-lg">Netflix</p>
            <p className="text-white text-lg">$11.99</p>
          </div>
          <div className="flex flex-row justify-between p-3 bg-primary rounded-xl">
            <p className="text-white text-lg">Netflix</p>
            <p className="text-white text-lg">$11.99</p>
          </div>
          <div className="flex flex-row justify-between p-3 bg-primary rounded-xl">
            <p className="text-white text-lg">Netflix</p>
            <p className="text-white text-lg">$11.99</p>
          </div>
          <div className="flex flex-row justify-between p-3 bg-primary rounded-xl">
            <p className="text-white text-lg">Netflix</p>
            <p className="text-white text-lg">$11.99</p>
          </div>
          <div className="flex flex-row justify-between p-3 bg-primary rounded-xl">
            <p className="text-white text-lg">Netflix</p>
            <p className="text-white text-lg">$11.99</p>
          </div>
          <div className="flex flex-row justify-between p-3 bg-primary rounded-xl">
            <p className="text-white text-lg">Netflix</p>
            <p className="text-white text-lg">$11.99</p>
          </div>
        </div>
      </Dashboardlayout>
    </div>
  );
}
