import React from "react";
import Travellors from "../components/Hometabs/Travellors";
import StarRateIcon from "@mui/icons-material/StarRate";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PoolIcon from "@mui/icons-material/Pool";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RoomIcon from "@mui/icons-material/Room";
import FlightIcon from "@mui/icons-material/Flight";
import Slider from "react-slick";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import PeopleIcon from "@mui/icons-material/People";
import WavesIcon from "@mui/icons-material/Waves";
import BedIcon from "@mui/icons-material/Bed";
import StayDate from "../components/Hometabs/StayDate";
import PlaceIcon from "@mui/icons-material/Place";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import WorkIcon from "@mui/icons-material/Work";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import DeckIcon from "@mui/icons-material/Deck";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import SpaIcon from "@mui/icons-material/Spa";
import Baselayout from "../components/Layouts/Baselayout";
import { Link } from "react-router-dom";

export default function HotelSearchDetails() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Baselayout>
      <div className="bg-[#f7f7f7]">
        <div className="max-w-6xl m-auto lg:py-10 lg:px-0 p-5">
          <div className="flex flex-col lg:flex-row gap-2 items-start mb-5">
            <div className="w-1/2 h-[385px] rounded-lg overflow-hidden">
              <img
                className="rounded-lg h-[415px] object-cover w-full object-center"
                src="https://images.unsplash.com/photo-1531586024505-b040066c2d5b?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className=" w-3/12 h-[385px] overflow-hidden rounded-lg flex flex-col gap-2">
              <img
                className="rounded-lg"
                src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
                alt=""
              />
              <img
                className="rounded-lg"
                src="https://images.unsplash.com/photo-1554289086-f0dff92b3f8e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
                alt=""
              />
            </div>
            <div className=" w-3/12 h-[385px] overflow-hidden rounded-lg flex flex-col gap-2">
              <img
                className="rounded-lg"
                src="https://images.unsplash.com/photo-1635979238851-6ebe864aa0ec?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
                alt=""
              />
              <img
                className="rounded-lg"
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row items-start justify-between bg-white p-5 rounded-lg">
            <div className="lg:w-[70%]">
              <h2 className="text-primary font-semibold text-2xl">
                Rixos Premium Dubai JBR
              </h2>
              <div className="flex flex-row items-center">
                <StarRateIcon
                  available
                  className="text-secondary"
                  style={{ fontSize: 18 }}
                />
                <StarRateIcon
                  className="text-secondary"
                  style={{ fontSize: 18 }}
                />
                <StarRateIcon
                  className="text-secondary"
                  style={{ fontSize: 18 }}
                />
                <StarRateIcon
                  className="text-secondary"
                  style={{ fontSize: 18 }}
                />
                <StarRateIcon
                  className="text-secondary"
                  style={{ fontSize: 18 }}
                />
              </div>
              <p className="text-xs py-2">
                Hotel with private beach, full-service spa
              </p>
              <div className="flex flex-row items-center gap-2 pb-2">
                <p className="text-sm text-white bg-secondary py-1 px-2 rounded-lg font-semibold">
                  9.0
                </p>
                <h4 className="text-primary font-semibold text-lg">
                  9.0 Wonderful
                </h4>
              </div>
              <p className="text-sm font-medium">Guests liked:</p>
              <p className="text-sm pb-2">Friendly staff, property condition</p>
              <a
                className="text-secondary text-xs font-normal hover:underline"
                href="#"
              >
                See all reviews
              </a>
              <h3 className="text-primary font-semibold text-lg pt-3 pb-3">
                Popular amenities
              </h3>
              <div className="flex flex-row gap-28 pb-5">
                <div className="flex flex-col gap-3">
                  <div className="flex lg:flex-row gap-2 flex-col items-center">
                    <FreeBreakfastIcon style={{ fontSize: 25 }} />
                    <p className="text-sm">Breakfast available</p>
                  </div>
                  <div className="flex lg:flex-row gap-2 flex-col items-center">
                    <BeachAccessIcon style={{ fontSize: 25 }} />
                    <p className="text-sm">On private beach</p>
                  </div>
                  <div className="flex lg:flex-row gap-2 flex-col items-center">
                    <AcUnitIcon style={{ fontSize: 25 }} />
                    <p className="text-sm">Air conditioning</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex lg:flex-row gap-2 flex-col items-center">
                    <PoolIcon style={{ fontSize: 25 }} />
                    <p className="text-sm">Pool</p>
                  </div>
                  <div className="flex lg:flex-row gap-2 flex-col items-center">
                    <NetworkWifiIcon style={{ fontSize: 25 }} />
                    <p className="text-sm">Free WiFi</p>
                  </div>
                  <div className="flex lg:flex-row gap-2 flex-col items-center">
                    <FitnessCenterIcon style={{ fontSize: 25 }} />
                    <p className="text-sm">Gym</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[30%]">
              <div className="flex flex-col rounded-lg">
                <div>
                  <iframe
                    className="rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231280.41319232315!2d55.06268298600024!3d25.076242445106587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700431449112!5m2!1sen!2s"
                    width="100%"
                    height="150px"
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="py-2 text-left text-xs text-primary">
                  <p className="text-sm pb-1">
                    The Walk, Jumeirah Beach Residence, Dubai, 643660
                  </p>
                  <a
                    href="#"
                    className="text-secondary text-sm hover:underline"
                  >
                    View in a map
                  </a>
                </div>
              </div>
              <h4 className="text-primary text-xl font-semibold pt-5 pb-4">
                Explore the area
              </h4>
              <div className="flex flex-col lg:flex-row gap-2 items-center justify-between pb-3">
                <RoomIcon style={{ fontSize: 25 }} />
                <p className="text-sm">The Walk</p>
                <p className="text-sm">1 min walk</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 items-center justify-between pb-3">
                <RoomIcon style={{ fontSize: 25 }} />
                <p className="text-sm">Marina Beach</p>
                <p className="text-sm">3 min walk</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 items-center justify-between pb-3">
                <RoomIcon style={{ fontSize: 25 }} />
                <p className="text-sm">Dubai Marina Mall</p>
                <p className="text-sm">17 min walk</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 items-center justify-between pb-3">
                <FlightIcon style={{ fontSize: 25 }} />
                <p className="text-sm">Dubai (DXB-Dubai Intl.)</p>
                <p className="text-sm">36 min drive</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-primary font-semibold text-3xl">
              Choose your room
            </h2>
          </div>
          <div className=" flex flex-col lg:flex-row gap-2 py-3">
            <div className="w-full flex-1">
              <StayDate />
            </div>
            <div className="w-full flex-1">
              <Travellors />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="bg-white rounded-lg border w-fit overflow-hidden flex-1">
              <Slider {...settings} className="overflow-hidden">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
              </Slider>
              <div className="px-3 pt-3 pb-5">
                <h3 className="font-semibold text-primary">
                  Premium Room, 1 King Bed
                </h3>
                <p className="text-sm pb-2">8.8/10 Excellent</p>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <SquareFootIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">420 sq ft</p>
                </div>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <NetworkWifiIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">Free WiFi</p>
                </div>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <LocalParkingIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">Free self parking</p>
                </div>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <PeopleIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">Sleeps 3</p>
                </div>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <WavesIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">Partial sea view</p>
                </div>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <BedIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">1 King Bed</p>
                </div>
                <div className="py-2">
                  <hr></hr>
                </div>
                <h3 className="text-sm font-semibold text-primary pb-3">
                  Extras
                </h3>
                <div className="flex flex-row gap-2 justify-between items-center pb-2">
                  <div class="flex">
                    <input
                      type="radio"
                      name="hs-default-radio"
                      class="shrink-0 mt-0.5 border-gray-200 rounded-full text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
                      id="hs-default-radio"
                    />
                    <label
                      for="hs-default-radio"
                      class="text-sm text-primary ms-2 "
                    >
                      No extras
                    </label>
                  </div>
                  <p className="text-sm">+ $0</p>
                </div>
                <div className="flex flex-row gap-2 justify-between items-center pb-2">
                  <div class="flex">
                    <input
                      type="radio"
                      name="hs-default-radio"
                      class="shrink-0 mt-0.5 border-gray-200 rounded-full text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
                      id="hs-default-radio"
                    />
                    <label
                      for="hs-default-radio"
                      class="text-sm text-primary ms-2 "
                    >
                      Breakfast
                    </label>
                  </div>
                  <p className="text-sm">+ $41</p>
                </div>
                <div className="flex flex-row gap-2 justify-between items-center pb-2">
                  <div class="flex">
                    <input
                      type="radio"
                      name="hs-default-radio"
                      class="shrink-0 mt-0.5 border-gray-200 rounded-full text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
                      id="hs-default-radio"
                    />
                    <label
                      for="hs-default-radio"
                      class="text-sm text-primary ms-2 "
                    >
                      Half board
                    </label>
                  </div>
                  <p className="text-sm">+ $120</p>
                </div>
                <div className="flex flex-row  items-end justify-between gap-2">
                  <div>
                    <h4 className="text-primary font-semibold text-lg">$417</h4>
                    <p className="text-xs">$2,063 total</p>
                    <p className="text-xs">includes taxes & fees</p>
                  </div>
                  <div>
                    <Link to="/flights-search">
                      <span className="text-white bg-primary py-2 px-4 rounded-full">
                        Reserve
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border w-fit overflow-hidden flex-1">
              <Slider {...settings} className="overflow-hidden">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
              </Slider>
              <div className="px-3 pt-3 pb-5">
                <h3 className="font-semibold text-primary">
                  Premium Room, 1 King Bed
                </h3>
                <p className="text-sm pb-2">8.8/10 Excellent</p>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <SquareFootIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">420 sq ft</p>
                </div>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <NetworkWifiIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">Free WiFi</p>
                </div>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <LocalParkingIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">Free self parking</p>
                </div>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <PeopleIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">Sleeps 3</p>
                </div>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <WavesIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">Partial sea view</p>
                </div>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <BedIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">1 King Bed</p>
                </div>
                <div className="py-2">
                  <hr></hr>
                </div>
                <h3 className="text-sm font-semibold text-primary pb-3">
                  Extras
                </h3>
                <div className="flex flex-row gap-2 justify-between items-center pb-2">
                  <div class="flex">
                    <input
                      type="radio"
                      name="hs-default-radio"
                      class="shrink-0 mt-0.5 border-gray-200 rounded-full text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
                      id="hs-default-radio"
                    />
                    <label
                      for="hs-default-radio"
                      class="text-sm text-primary ms-2 "
                    >
                      No extras
                    </label>
                  </div>
                  <p className="text-sm">+ $0</p>
                </div>
                <div className="flex flex-row gap-2 justify-between items-center pb-2">
                  <div class="flex">
                    <input
                      type="radio"
                      name="hs-default-radio"
                      class="shrink-0 mt-0.5 border-gray-200 rounded-full text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
                      id="hs-default-radio"
                    />
                    <label
                      for="hs-default-radio"
                      class="text-sm text-primary ms-2 "
                    >
                      Breakfast
                    </label>
                  </div>
                  <p className="text-sm">+ $41</p>
                </div>
                <div className="flex flex-row gap-2 justify-between items-center pb-2">
                  <div class="flex">
                    <input
                      type="radio"
                      name="hs-default-radio"
                      class="shrink-0 mt-0.5 border-gray-200 rounded-full text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
                      id="hs-default-radio"
                    />
                    <label
                      for="hs-default-radio"
                      class="text-sm text-primary ms-2 "
                    >
                      Half board
                    </label>
                  </div>
                  <p className="text-sm">+ $120</p>
                </div>
                <div className="flex flex-row  items-end justify-between gap-2">
                  <div>
                    <h4 className="text-primary font-semibold text-lg">$417</h4>
                    <p className="text-xs">$2,063 total</p>
                    <p className="text-xs">includes taxes & fees</p>
                  </div>
                  <div>
                    <Link to="/flights-search">
                      <span className="text-white bg-primary py-2 px-4 rounded-full">
                        Reserve
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border w-fit overflow-hidden flex-1">
              <Slider {...settings} className="overflow-hidden">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
              </Slider>
              <div className="px-3 pt-3 pb-5">
                <h3 className="font-semibold text-primary">
                  Premium Room, 1 King Bed
                </h3>
                <p className="text-sm pb-2">8.8/10 Excellent</p>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <SquareFootIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">420 sq ft</p>
                </div>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <NetworkWifiIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">Free WiFi</p>
                </div>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <LocalParkingIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">Free self parking</p>
                </div>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <PeopleIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">Sleeps 3</p>
                </div>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <WavesIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">Partial sea view</p>
                </div>
                <div className="flex flex-grow items-center gap-2 pb-1">
                  <BedIcon style={{ fontSize: 20 }} />
                  <p className="text-sm">1 King Bed</p>
                </div>
                <div className="py-2">
                  <hr></hr>
                </div>
                <h3 className="text-sm font-semibold text-primary pb-3">
                  Extras
                </h3>
                <div className="flex flex-row gap-2 justify-between items-center pb-2">
                  <div class="flex">
                    <input
                      type="radio"
                      name="hs-default-radio"
                      class="shrink-0 mt-0.5 border-gray-200 rounded-full text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
                      id="hs-default-radio"
                    />
                    <label
                      for="hs-default-radio"
                      class="text-sm text-primary ms-2 "
                    >
                      No extras
                    </label>
                  </div>
                  <p className="text-sm">+ $0</p>
                </div>
                <div className="flex flex-row gap-2 justify-between items-center pb-2">
                  <div class="flex">
                    <input
                      type="radio"
                      name="hs-default-radio"
                      class="shrink-0 mt-0.5 border-gray-200 rounded-full text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
                      id="hs-default-radio"
                    />
                    <label
                      for="hs-default-radio"
                      class="text-sm text-primary ms-2 "
                    >
                      Breakfast
                    </label>
                  </div>
                  <p className="text-sm">+ $41</p>
                </div>
                <div className="flex flex-row gap-2 justify-between items-center pb-2">
                  <div class="flex">
                    <input
                      type="radio"
                      name="hs-default-radio"
                      class="shrink-0 mt-0.5 border-gray-200 rounded-full text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
                      id="hs-default-radio"
                    />
                    <label
                      for="hs-default-radio"
                      class="text-sm text-primary ms-2 "
                    >
                      Half board
                    </label>
                  </div>
                  <p className="text-sm">+ $120</p>
                </div>
                <div className="flex flex-row  items-end justify-between gap-2">
                  <div>
                    <h4 className="text-primary font-semibold text-lg">$417</h4>
                    <p className="text-xs">$2,063 total</p>
                    <p className="text-xs">includes taxes & fees</p>
                  </div>
                  <div>
                    <Link to="/flights-search">
                      <span className="text-white bg-primary py-2 px-4 rounded-full">
                        Reserve
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg mt-5">
            <div className="flex flex-col lg:flex-row gap-10 justify-between pb-5">
              <div className="lg:w-[30%]">
                <h3 className="text-primary font-semibold text-2xl pb-5">
                  About this area
                </h3>
                <h4 className="text-primary font-semibold text-xl">Dubai</h4>
                <p className="text-xs">
                  Located on a private beach, Rixos Premium Dubai JBR is in
                  Dubai Marina, a neighborhood in Dubai. Dubai Marina Mall and
                  Mall of the Emirates are worth checking out if shopping is on
                  the agenda, while those wishing to experience the area's
                  natural beauty can explore Marina Beach. Traveling with kids?
                  Consider Thrill Zone and Wild Wadi Water Park.
                </p>
              </div>
              <div className="lg:w-[70%]">
                <div className="flex flex-col rounded-lg border-2">
                  <div>
                    <iframe
                      className="rounded-lg"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231280.41319232315!2d55.06268298600024!3d25.076242445106587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700431449112!5m2!1sen!2s"
                      width="100%"
                      height="350px"
                      allowfullscreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="p-2 text-center text-xs text-primary">
                    <a href="#">View in a map</a>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-5 items-start justify-between pt-7">
                  <div>
                    <div className="flex flex-row gap-3">
                      <PlaceIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          What's nearby
                        </p>
                        <p className="text-xs pb-1">In Dubai Marina</p>
                        <p className="text-xs pb-1">The Walk - 1 min walk</p>
                        <p className="text-xs pb-1">
                          Marina Beach - 3 min walk
                        </p>
                        <p className="text-xs pb-1">
                          Dubai Marina Mall - 17 min walk
                        </p>
                        <p className="text-xs pb-1">
                          Skydive Dubai - 6 min drive
                        </p>
                        <p className="text-xs pb-1">
                          Ibn Battuta Mall - 6 min drive
                        </p>
                        <p className="text-xs pb-1">
                          Souk Madinat Jumeirah - 11 min drive
                        </p>
                        <p className="text-xs pb-1">
                          Wild Wadi Water Park - 11 min drive
                        </p>
                        <p className="text-xs pb-1">
                          Burj Al Arab - 12 min drive
                        </p>
                        <p className="text-xs pb-1">
                          Madinat Jumeirah - 12 min drive
                        </p>
                        <p className="text-xs pb-1">Ski Dubai - 11 min drive</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row gap-3">
                      <RestaurantMenuIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Restaurants
                        </p>
                        <p className="text-xs pb-1">Godiva Cafe - 1 min walk</p>
                        <p className="text-xs pb-1">
                          Il Caffe di Roma - 2 min walk
                        </p>
                        <p className="text-xs pb-1">ستاربكس - 2 min walk</p>
                        <p className="text-xs pb-1">
                          Lock, Stock & Barrel – JBR The Walk - 2 min walk
                        </p>
                        <p className="text-xs pb-1">
                          Black Tap Craft Burgers & Shakes - JBR - 1 min walk
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start gap-3 pt-7">
                  <DriveEtaIcon />
                  <div>
                    <p className="text-base font-semibold text-primary pb-2">
                      Getting around
                    </p>
                    <div className="flex flex-row items-center gap-3">
                      <DirectionsSubwayIcon />
                      <p className="text-xs">
                        Jumeirah Beach Residence 1 Tram Stop - 6 min walk
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                      <AirplanemodeActiveIcon />
                      <p className="text-xs">
                        Dubai Intl. Airport (DXB) - 36 min drive
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg mt-5">
            <div className="flex flex-col lg:flex-row gap-10 justify-between pb-5">
              <div className="lg:w-[30%]">
                <h3 className="text-primary font-semibold text-2xl pb-5">
                  About this property
                </h3>
              </div>
              <div className="lg:w-[70%]">
                <h4 className="text-primary font-semibold text-xl pb-2">
                  Rixos Premium Dubai JBR
                </h4>
                <p className="text-xs pb-3">
                  Luxury family-friendly hotel near Marina Beach
                </p>
                <p className="text-xs pb-3">
                  Rixos Premium Dubai JBR is located close to Dubai Marina Mall,
                  and provides a nightclub, a beach bar, and a poolside bar.
                  With amenities like a private beach and sun loungers, this
                  hotel is the perfect place to soak up the sun. Treat yourself
                  to a massage or a manicure/pedicure at Natureland Spa, the
                  onsite spa. Be sure to enjoy a meal at any of the 9 onsite
                  restaurants, which feature American cuisine and more. In
                  addition to a terrace and shopping on site, guests can connect
                  to free in-room WiFi.
                </p>
                <p className="text-xs pb-3">
                  You'll also enjoy the following perks during your stay:
                </p>
                <ul className="list-disc pl-3">
                  <li className="text-xs pb-2">
                    An outdoor pool and a children's pool, with sun loungers
                  </li>
                  <li className="text-xs pb-2">
                    Free self parking and valet parking
                  </li>
                  <li className="text-xs pb-2">
                    Buffet breakfast (surcharge), bike rentals, and a roundtrip
                    airport shuttle (surcharge)
                  </li>
                  <li className="text-xs pb-2">
                    Babysitting (surcharge), tour/ticket assistance, and meeting
                    rooms
                  </li>
                  <li className="text-xs pb-2">
                    Guest reviews speak highly of the helpful staff
                  </li>
                </ul>
                <p className="text-xs pb-2">Room features</p>
                <p className="text-xs pb-2">
                  All 414 rooms have comforts such as 24-hour room service and
                  premium bedding, in addition to perks like air conditioning
                  and bathrobes. Guest reviews speak positively of the clean
                  rooms at the property.
                </p>
                <p className="text-xs pb-2">More amenities include:</p>
                <ul className="list-disc pl-3">
                  <li className="text-xs pb-2">
                    Rollaway/extra beds (surcharge) and free cribs/infant beds
                  </li>
                  <li className="text-xs pb-2">
                    Bathrooms with designer toiletries and deep soaking tubs
                  </li>
                  <li className="text-xs pb-2">
                    48-inch flat-screen TVs with satellite channels
                  </li>
                  <li className="text-xs pb-2">
                    Refrigerators, daily housekeeping, and desks
                  </li>
                </ul>
                <h3 className="text-primary text-xl pt-8 font-semibold pb-1">
                  Languages
                </h3>
                <p className="text-xs">
                  Arabic, English, Filipino, French, Georgian, German, Hindi,
                  Italian, Lithuanian, Malay, Russian, Swahili, Turkish,
                  Ukrainian, Urdu, Vietnamese
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg mt-5">
            <div className="flex flex-col lg:flex-row gap-10 justify-between pb-5">
              <div className="lg:w-[30%]">
                <h3 className="text-primary font-semibold text-2xl pb-5">
                  Property amenities
                </h3>
              </div>
              <div className="lg:w-[70%]">
                <div className="flex lg:flex-row flex-col gap-5 items-start justify-between pt-3">
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <RestaurantMenuIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Food and drink
                        </p>
                        <p className="text-xs pb-1">
                          Daily buffet breakfast available for a fee: AED 160
                          for adults and AED 80 for children
                        </p>
                        <p className="text-xs pb-1">9 restaurants</p>
                        <p className="text-xs pb-1">A bar/lounge</p>
                        <p className="text-xs pb-1">A beach bar</p>
                        <p className="text-xs pb-1">A coffee shop/cafe</p>
                        <p className="text-xs pb-1">A poolside bar</p>
                        <p className="text-xs pb-1">Snack bar/deli</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <LocalConvenienceStoreIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Conveniences
                        </p>
                        <p className="text-xs pb-1">24-hour front desk</p>
                        <p className="text-xs pb-1">ATM</p>
                        <p className="text-xs pb-1">
                          ستاربكس - Free newspapers in lobby
                        </p>
                        <p className="text-xs pb-1">Hair salon</p>
                        <p className="text-xs pb-1">Laundry facilities</p>
                        <p className="text-xs pb-1">Luggage storage</p>
                        <p className="text-xs pb-1">Safe at front desk</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-5 items-start justify-between pt-3">
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <NetworkWifiIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Internet
                        </p>
                        <p className="text-xs pb-1">
                          Available in all rooms: Free WiFi
                        </p>
                        <p className="text-xs pb-1">
                          Available in some public areas: Free WiFi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <RoomServiceIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Concierge services
                        </p>
                        <p className="text-xs pb-1">Daily housekeeping</p>
                        <p className="text-xs pb-1">
                          Dry cleaning/laundry service
                        </p>
                        <p className="text-xs pb-1">Multilingual staff</p>
                        <p className="text-xs pb-1">
                          Tour and ticket assistance
                        </p>
                        <p className="text-xs pb-1">Turndown service</p>
                        <p className="text-xs pb-1">Wedding services</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-5 items-start justify-between pt-3">
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <LocalParkingIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Parking and transportation
                        </p>
                        <p className="text-xs pb-1">
                          24-hour roundtrip airport shuttle on request for a
                          surcharge
                        </p>
                        <p className="text-xs pb-1">
                          Free self parking on site
                        </p>
                        <p className="text-xs pb-1">
                          Free valet parking on site
                        </p>
                        <p className="text-xs pb-1">
                          Wheelchair-accessible parking available
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <WorkIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Business services
                        </p>
                        <p className="text-xs pb-1">24-hour business center</p>
                        <p className="text-xs pb-1">Meeting rooms</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-5 items-start justify-between pt-3">
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <LocalActivityIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Things to do
                        </p>
                        <p className="text-xs pb-1">Children's pool</p>
                        <p className="text-xs pb-1">Full-service spa</p>
                        <p className="text-xs pb-1">Health club</p>
                        <p className="text-xs pb-1">Nightclub</p>
                        <p className="text-xs pb-1">Outdoor pool</p>
                        <p className="text-xs pb-1">Playground</p>
                        <p className="text-xs pb-1">Sauna</p>
                        <p className="text-xs pb-1">Shopping</p>
                        <p className="text-xs pb-1">Steam room</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <DeckIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Outdoors
                        </p>
                        <p className="text-xs pb-1">Beach loungers</p>
                        <p className="text-xs pb-1">Beach towels</p>
                        <p className="text-xs pb-1">Beach umbrellas</p>
                        <p className="text-xs pb-1">Garden</p>
                        <p className="text-xs pb-1">On a private beach</p>
                        <p className="text-xs pb-1">On the waterfront</p>
                        <p className="text-xs pb-1">Pool loungers</p>
                        <p className="text-xs pb-1">Terrace</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-5 items-start justify-between pt-3">
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <FamilyRestroomIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Family friendly
                        </p>
                        <p className="text-xs pb-1">Babysitting (surcharge)</p>
                        <p className="text-xs pb-1">Children's pool</p>
                        <p className="text-xs pb-1">Free crib</p>
                        <p className="text-xs pb-1">In-room refrigerator</p>
                        <p className="text-xs pb-1">Laundry facilities</p>
                        <p className="text-xs pb-1">Outdoor pool</p>
                        <p className="text-xs pb-1">Playground</p>
                        <p className="text-xs pb-1">
                          Rollaway/extra bed (surcharge)
                        </p>
                        <p className="text-xs pb-1">Snack bar/deli</p>
                        <p className="text-xs pb-1">Soundproofed rooms</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <SpaIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Full-service spa
                        </p>
                        <p className="text-xs pb-1">9 treatment rooms</p>
                        <p className="text-xs pb-1">Manicures/pedicures</p>
                        <p className="text-xs pb-1">Massage</p>
                        <p className="text-xs pb-1">Mud bath</p>
                        <p className="text-xs pb-1">Sauna</p>
                        <p className="text-xs pb-1">Spa open daily</p>
                        <p className="text-xs pb-1">Spa tub</p>
                        <p className="text-xs pb-1">Turkish bath</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <hr></hr>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 justify-between pb-5">
              <div className="lg:w-[30%]">
                <h3 className="text-primary font-semibold text-2xl pb-5">
                  Featured restaurants on the property
                </h3>
              </div>
              <div className="lg:w-[70%]">
                <div className="flex lg:flex-row flex-col gap-5 items-start justify-between pt-3">
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <RestaurantMenuIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Luigia Ristorante
                        </p>
                        <p className="text-xs pb-1">
                          Open for lunch and dinner
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <RestaurantMenuIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Ammos
                        </p>
                        <p className="text-xs pb-1">Greek cuisine</p>
                        <p className="text-xs pb-1">
                          Open for lunch and dinner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-5 items-start justify-between pt-3">
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <RestaurantMenuIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          STK Restaurant
                        </p>
                        <p className="text-xs pb-1">American cuisine</p>
                        <p className="text-xs pb-1">Open for dinner</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3">
                      <RestaurantMenuIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Azure Beach
                        </p>
                        <p className="text-xs pb-1">Open for light fare</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <RestaurantMenuIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Turquoise Restaurant
                        </p>
                        <p className="text-xs pb-1">
                          Local and international cuisine
                        </p>
                        <p className="text-xs pb-1">
                          Open for breakfast, lunch, and dinner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <hr></hr>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 justify-between pb-5">
              <div className="lg:w-[30%]">
                <h3 className="text-primary font-semibold text-2xl pb-5">
                  Room amenities
                </h3>
              </div>
              <div className="lg:w-[70%]">
                <div className="flex lg:flex-row flex-col gap-5 items-start justify-between pt-3">
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <RestaurantMenuIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Bedroom
                        </p>
                        <p className="text-xs pb-1">Blackout drapes</p>
                        <p className="text-xs pb-1">Free crib</p>
                        <p className="text-xs pb-1">Premium bedding</p>
                        <p className="text-xs pb-1">
                          Rollaway/extra bed (surcharge)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <RestaurantMenuIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Flat-screen TV with satellite channels
                        </p>
                        <p className="text-xs pb-1">Greek cuisine</p>
                        <p className="text-xs pb-1">
                          Open for lunch and dinner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-5 items-start justify-between pt-3">
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <RestaurantMenuIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Bathroom
                        </p>
                        <p className="text-xs pb-1">Bathrobes</p>
                        <p className="text-xs pb-1">Bidet</p>
                        <p className="text-xs pb-1">Deep soaking bathtub</p>
                        <p className="text-xs pb-1">Designer toiletries</p>
                        <p className="text-xs pb-1">Hair dryer</p>
                        <p className="text-xs pb-1">Private bathroom</p>
                        <p className="text-xs pb-1">
                          Separate bathtub and shower
                        </p>
                        <p className="text-xs pb-1">Slippers</p>
                        <p className="text-xs pb-1">Towels</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <RestaurantMenuIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Food and drink
                        </p>
                        <p className="text-xs pb-1">24-hour room service</p>
                        <p className="text-xs pb-1">Free bottled water</p>
                        <p className="text-xs pb-1">
                          Free minibar (limited items)
                        </p>
                        <p className="text-xs pb-1">Refrigerator</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg mt-5">
            <div className="flex flex-col lg:flex-row gap-10 justify-between pb-5">
              <div className="lg:w-[30%]">
                <h3 className="text-primary font-semibold text-2xl pb-5">
                  Accessibility
                </h3>
                <p className="text-xs">
                  If you have requests for specific accessibility needs, please
                  contact the property using the information on the reservation
                  confirmation received after booking.
                </p>
              </div>
              <div className="lg:w-[70%]">
                <div className="flex lg:flex-row flex-col gap-5 items-start justify-between pt-3">
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <RestaurantMenuIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Common areas
                        </p>
                        <p className="text-xs pb-1">Elevator</p>
                        <p className="text-xs pb-1">
                          Wheelchair-accessible parking
                        </p>
                        <p className="text-xs pb-1">Premium bedding</p>
                        <p className="text-xs pb-1">
                          Wheelchair-accessible path of travel
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-row gap-3">
                      <RestaurantMenuIcon />
                      <div>
                        <p className="text-base font-semibold text-primary pb-2">
                          Rooms
                        </p>
                        <p className="text-xs pb-1">
                          Accessible bathroom available in select rooms
                        </p>
                        <p className="text-xs pb-1">
                          In-room accessibility available in select rooms
                        </p>
                        <p className="text-xs pb-1">
                          Roll-in shower available in select rooms
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg mt-5">
            <div className="flex flex-col lg:flex-row gap-10 justify-between pb-5">
              <div className="lg:w-[30%]">
                <h3 className="text-primary font-semibold text-2xl pb-5">
                  Policies
                </h3>
              </div>
              <div className="lg:w-[70%]">
                <div className="flex lg:flex-row flex-col gap-5 items-start justify-between pt-3 pb-5">
                  <div className="flex-1">
                    <h3 className=" text-xl text-primary font-semibold pb-2">
                      Check-in
                    </h3>
                    <p className="text-xs">
                      Check-in start time: 3 PM; Check-in end time: 4 AM
                    </p>
                    <p className="text-xs">Contactless check-in available</p>
                    <p className="text-xs">Minimum check-in age: 18</p>
                  </div>
                  <div className="flex-1">
                    <h3 className=" text-xl text-primary font-semibold pb-2">
                      Check-out
                    </h3>
                    <p className="text-xs">Check-out before noon</p>
                    <p className="text-xs">Contactless check-out available</p>
                  </div>
                </div>
                <h3 className="text-primary font-semibold text-xl pb-2">
                  Special check-in instructions
                </h3>
                <p className="text-xs pb-2">
                  This property offers transfers from the airport (surcharges
                  may apply); guests must contact the property with arrival
                  details before travel, using the contact information on the
                  booking confirmation
                </p>
                <p className="text-xs pb-2">
                  Front desk staff will greet guests on arrival
                </p>
                <p className="text-xs pb-2">
                  For more details, please contact the property using the
                  information on the booking confirmation
                </p>
                <h3 className="text-primary font-semibold text-xl pt-5 pb-2">
                  Access methods
                </h3>
                <p className="text-xs pb-2">Staffed front desk</p>
                <h3 className="text-primary font-semibold text-xl pt-5 pb-2">
                  Pets
                </h3>
                <p className="text-xs pb-2">Pets not allowed</p>
                <h3 className="text-primary font-semibold text-xl pt-5 pb-2">
                  Children and extra beds
                </h3>
                <p className="text-xs pb-2">Children are welcome</p>
                <p className="text-xs pb-2">
                  1 child, up to the age of 1, can stay for free if using
                  existing beds when occupying the parent or guardian's room
                </p>
                <p className="text-xs pb-2">
                  Rollaway/extra beds are available for AED 300.0 per day
                </p>
                <p className="text-xs pb-2">
                  Free cribs are available on request at the property
                </p>
                <h3 className="text-primary font-semibold text-xl pt-5 pb-2">
                  Property payment types
                </h3>
                <img
                  src="https://media.horusrc.com/wysiwyg/pay_by_cards.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg mt-5">
            <div className="flex flex-col lg:flex-row gap-10 justify-between pb-5">
              <div className="lg:w-[30%]">
                <h3 className="text-primary font-semibold text-2xl pb-5">
                  Important information
                </h3>
              </div>
              <div className="lg:w-[70%]">
                <h3 className="text-primary font-semibold text-xl pb-2">
                  Fees{" "}
                </h3>
                <p className="text-xs pb-2">
                  You'll be asked to pay the following charges at the property:
                </p>
                <ul className="list-disc pl-4 py-2">
                  <li className="text-xs">
                    A tax is imposed by the city: AED 20.00 per accommodation,
                    per night
                  </li>
                </ul>
                <p className="text-xs pb-2">
                  We have included all charges provided to us by the property.
                </p>
                <h3 className="text-primary font-semibold text-xl pt-5 pb-2">
                  Optional extras
                </h3>
                <ul className="list-disc pl-4 py-2">
                  <li className="text-xs pb-2">
                    Fee for buffet breakfast: approximately AED 160 for adults
                    and AED 80 for children
                  </li>
                  <li className="text-xs pb-2">
                    Airport shuttle fee: AED 240 per vehicle (one way)
                  </li>
                  <li className="text-xs pb-2">
                    Rollaway bed fee: AED 300.0 per day
                  </li>
                </ul>
                <p className="text-xs pb-2">
                  The above list may not be comprehensive. Fees and deposits may
                  not include tax and are subject to change.
                </p>
                <h3 className="text-primary font-semibold text-xl pt-5 pb-2">
                  You need to know
                </h3>
                <p className="text-xs pb-2">
                  Extra-person charges may apply and vary depending on property
                  policy
                </p>
                <p className="text-xs pb-2">
                  Government-issued photo identification and a credit card,
                  debit card, or cash deposit may be required at check-in for
                  incidental charges
                </p>
                <p className="text-xs pb-2">
                  Special requests are subject to availability upon check-in and
                  may incur additional charges; special requests cannot be
                  guaranteed
                </p>
                <p className="text-xs pb-2">
                  The name on the credit card used at check-in to pay for
                  incidentals must be the primary name on the guestroom
                  reservation
                </p>
                <p className="text-xs pb-2">
                  This property accepts credit cards, debit cards, and cash
                </p>
                <p className="text-xs pb-2">
                  Cashless transactions are available
                </p>
                <p className="text-xs pb-2">
                  Safety features at this property include a carbon monoxide
                  detector, a fire extinguisher, a smoke detector, a security
                  system, a first aid kit, and window guards
                </p>
                <p className="text-xs pb-2">
                  This property affirms that it follows the cleaning and
                  disinfection practices of ALLSAFE (Accor Hotels)
                </p>
                <p className="text-xs pb-2">
                  Please note that cultural norms and guest policies may differ
                  by country and by property; the policies listed are provided
                  by the property
                </p>
                <p className="text-xs pb-2">
                  This property requires identification for all guests at
                  check-in, regardless of age.
                </p>
                <p className="text-xs pb-2">
                  No unregistered guests are allowed in guestrooms.
                </p>
                <h3 className="text-primary font-semibold text-xl pt-5 pb-2">
                  We should mention
                </h3>
                <p className="text-xs pb-2">
                  Only registered guests are allowed in the guestrooms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Baselayout>
  );
}
