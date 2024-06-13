import React, { useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BoltIcon from "@mui/icons-material/Bolt";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import GroupIcon from "@mui/icons-material/Group";
import HistoryIcon from "@mui/icons-material/History";
import Travellors from "../components/Hometabs/Travellors";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Baselayout from "../components/Layouts/Baselayout";
export default function Thingstododetails() {
  const settings = {
    dots: false,
    infinite: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Baselayout>
      <div className="bg-[#f7f7f7]">
        <div className="max-w-6xl m-auto lg:py-10 lg:px-0 p-5">
          <div className="flex flex-col lg:flex-row gap-2 items-center mb-5">
            <div className="w-1/2 h-[430px] rounded-lg overflow-hidden">
              <img
                className="rounded-lg h-[430px] object-cover w-full object-center"
                src="https://images.unsplash.com/photo-1635857161777-2383f2e4a82d?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className=" w-3/12 h-[430px] overflow-hidden rounded-lg flex flex-col gap-2">
              <img
                className="rounded-lg"
                src="https://plus.unsplash.com/premium_photo-1694475634077-e6e4b623b574?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
                alt=""
              />
              <img
                className="rounded-lg"
                src="https://plus.unsplash.com/premium_photo-1694475634077-e6e4b623b574?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
                alt=""
              />
            </div>
            <div className=" w-3/12 h-[430px] overflow-hidden rounded-lg flex flex-col gap-2">
              <img
                className="rounded-lg"
                src="https://plus.unsplash.com/premium_photo-1694475634077-e6e4b623b574?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
                alt=""
              />
              <img
                className="rounded-lg"
                src="https://plus.unsplash.com/premium_photo-1694475634077-e6e4b623b574?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row items-start justify-between bg-white p-5 rounded-lg">
            <div className="flex-1">
              <h2 className="text-primary font-semibold text-2xl">
                Burj Khalifa 124th & 125th Floor Observation Deck Tickets
              </h2>
              <p className="text-xs py-2">By Voyage Tours</p>
              <p className="text-lg text-primary font-semibold">
                4.3/5
                <span className="text-secondary pl-2 text-xs font-normal hover:underline">
                  <a href="#">3,764 verified reviews</a>
                </span>
              </p>
              <a
                className="text-secondary text-xs font-normal hover:underline"
                href="#"
              >
                See all reviews
              </a>
              <p className="text-xs pt-7 text-secondary">
                Free cancellation available
              </p>
              <h3 className="text-2xl text-primary font-semibold">$49</h3>
              <p className="text-xs pb-6">per adult</p>
              <button className="bg-primary text-white py-2 px-4 text-xs rounded-full">
                Find tickets
              </button>
            </div>
            <div className="flex-1">
              <h3 className="text-lg text-primary font-semibold pb-5">
                Features
              </h3>
              <div className="flex flex-row gap-5 pb-5">
                <div className="flex flex-col gap-3">
                  <div className="flex lg:flex-row gap-2 flex-col">
                    <CheckIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Free cancellation available</p>
                  </div>
                  <div className="flex lg:flex-row gap-2 flex-col">
                    <LocalPrintshopIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Printed Voucher</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex lg:flex-row gap-2 flex-col">
                    <AccessTimeIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">1h 30m</p>
                  </div>
                  <div className="flex lg:flex-row gap-2 flex-col">
                    <BoltIcon style={{ fontSize: 15 }} />
                    <p className="text-xs">Instant confirmation</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg text-primary font-semibold pb-2">
                Overview
              </h3>
              <ul className="list-disc pl-4">
                <li className="text-xs mb-2">
                  Breathtaking views from 1,496 feet (456 m) above Dubai
                </li>
                <li className="text-xs mb-2">
                  Incredible engineering of the world's tallest skyscraper
                </li>
                <li className="text-xs mb-2">
                  Have a free time on two observation deck 124th -125th floor
                </li>
                <li className="text-xs mb-2">
                  Multimedia displays & special virtual reality telescopes
                </li>
                <li className="text-xs mb-2">
                  Views of dancing fountains, Downtown Dubai & the Gulf
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="flex flex-col rounded-lg border-2">
                <div>
                  <iframe
                    className="rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231280.41319232315!2d55.06268298600024!3d25.076242445106587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700431449112!5m2!1sen!2s"
                    width="100%"
                    height="120px"
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="p-2 text-center text-xs text-primary">
                  <a href="#">View in a map</a>
                </div>
              </div>
              <h4 className="text-primary font-semibold pt-5 pb-2">
                Activity location
              </h4>
              <div className="flex flex-col lg:flex-row gap-2 items-start pb-3">
                <ConfirmationNumberIcon style={{ fontSize: 15 }} />
                <div>
                  <p className="text-xs">Burj Khalifa</p>
                  <p className="text-xs">
                    1 Sheikh Mohammed bin Rashid Boulevard Dubai, Dubai, United
                    Arab Emirates
                  </p>
                </div>
              </div>
              <h4 className="text-primary font-semibold pt-5 pb-2">
                Meeting/Redemption Point
              </h4>
              <div className="flex flex-col lg:flex-row gap-2 items-start">
                <GroupIcon style={{ fontSize: 15 }} />
                <div>
                  <p className="text-xs">Burj Khalifa</p>
                  <p className="text-xs">
                    1 Sheikh Mohammed bin Rashid Boulevard Dubai, Dubai, United
                    Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg mt-5">
            <h3 className="text-primary font-semibold text-3xl">Tickets</h3>
            <div className="py-5">
              <hr></hr>
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-5 justify-between border p-5 rounded-lg mt-3">
              <div className="flex-1">
                <h3 className="text-primary font-semibold text-xl pb-5">
                  Burj Khalifa (09:00 AM - 2:30 PM)
                </h3>
                <div className="flex flex-row items-center gap-2 mb-2">
                  <HistoryIcon style={{ fontSize: 15 }} />
                  <p className="text-xs">1h 30m</p>
                </div>
                <div className="flex flex-row items-center gap-2 mb-2">
                  <CheckIcon style={{ fontSize: 15 }} />
                  <p className="text-xs">Opening hours: Fri 10:00am-11:00pm</p>
                </div>
                <p className="text-xs">
                  Select this option to visit the Burj Khalifa between 09:00 AM
                  and 3:30 PM. You will receive confirmation of your exact
                  timed-ticket entry time after your booking is confirmed.
                </p>
              </div>
              <div className="flex-1">
                <Travellors />
              </div>
              <div className="flex-1">
                <p className="text-sm pb-3 font-semibold">Price details</p>
                <div className="flex flex-row items-center justify-between gap-2 ">
                  <p className="text-xs">$49.00 x 1 Adult $</p>
                  <p className="text-xs">$49.00</p>
                </div>
                <div className="py-3">
                  <hr></hr>
                </div>
                <div className="flex flex-row items-center justify-between gap-2">
                  <p className="text-xs">Total</p>
                  <h3 className="text-3xl font-semibold text-primary">
                    $49.00
                  </h3>
                </div>
                <p className="text-xs py-3 text-right">Until Wed, Dec 6</p>
                <Link to="/cart">
                  <button className="text-white bg-primary px-6 font-semibold text-sm rounded-full py-2 float-right">
                    Book
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-5 justify-between border p-5 rounded-lg mt-3">
              <div className="flex-1">
                <h3 className="text-primary font-semibold text-xl pb-5">
                  Burj Khalifa (09:00 AM - 2:30 PM)
                </h3>
                <div className="flex flex-row items-center gap-2 mb-2">
                  <HistoryIcon style={{ fontSize: 15 }} />
                  <p className="text-xs">1h 30m</p>
                </div>
                <div className="flex flex-row items-center gap-2 mb-2">
                  <CheckIcon style={{ fontSize: 15 }} />
                  <p className="text-xs">Opening hours: Fri 10:00am-11:00pm</p>
                </div>
                <p className="text-xs">
                  Select this option to visit the Burj Khalifa between 09:00 AM
                  and 3:30 PM. You will receive confirmation of your exact
                  timed-ticket entry time after your booking is confirmed.
                </p>
              </div>
              <div className="flex-1">
                <Travellors />
              </div>
              <div className="flex-1">
                <p className="text-sm pb-3 font-semibold">Price details</p>
                <div className="flex flex-row items-center justify-between gap-2 ">
                  <p className="text-xs">$49.00 x 1 Adult $</p>
                  <p className="text-xs">$49.00</p>
                </div>
                <div className="py-3">
                  <hr></hr>
                </div>
                <div className="flex flex-row items-center justify-between gap-2">
                  <p className="text-xs">Total</p>
                  <h3 className="text-3xl font-semibold text-primary">
                    $49.00
                  </h3>
                </div>
                <p className="text-xs py-3 text-right">Until Wed, Dec 6</p>
                <Link to="/cart">
                  <button className="text-white bg-primary px-6 font-semibold text-sm rounded-full py-2 float-right">
                    Book
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-5 justify-between border p-5 rounded-lg mt-3">
              <div className="flex-1">
                <h3 className="text-primary font-semibold text-xl pb-5">
                  Burj Khalifa (09:00 AM - 2:30 PM)
                </h3>
                <div className="flex flex-row items-center gap-2 mb-2">
                  <HistoryIcon style={{ fontSize: 15 }} />
                  <p className="text-xs">1h 30m</p>
                </div>
                <div className="flex flex-row items-center gap-2 mb-2">
                  <CheckIcon style={{ fontSize: 15 }} />
                  <p className="text-xs">Opening hours: Fri 10:00am-11:00pm</p>
                </div>
                <p className="text-xs">
                  Select this option to visit the Burj Khalifa between 09:00 AM
                  and 3:30 PM. You will receive confirmation of your exact
                  timed-ticket entry time after your booking is confirmed.
                </p>
              </div>
              <div className="flex-1">
                <Travellors />
              </div>
              <div className="flex-1">
                <p className="text-sm pb-3 font-semibold">Price details</p>
                <div className="flex flex-row items-center justify-between gap-2 ">
                  <p className="text-xs">$49.00 x 1 Adult $</p>
                  <p className="text-xs">$49.00</p>
                </div>
                <div className="py-3">
                  <hr></hr>
                </div>
                <div className="flex flex-row items-center justify-between gap-2">
                  <p className="text-xs">Total</p>
                  <h3 className="text-3xl font-semibold text-primary">
                    $49.00
                  </h3>
                </div>
                <p className="text-xs py-3 text-right">Until Wed, Dec 6</p>
                <Link to="/cart">
                  <button className="text-white bg-primary px-6 font-semibold text-sm rounded-full py-2 float-right">
                    Book
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg mt-5">
            <div className="flex flex-col lg:flex-row gap-2 justify-between pb-5">
              <div className="flex-1">
                <h3 className="text-primary font-semibold text-2xl">
                  What's included, what's not
                </h3>
              </div>
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row items-center gap-2 pb-2">
                  <CheckIcon style={{ fontSize: 15 }} />
                  <p className="text-xs">
                    Admission to the At The Top 124th-floor observation deck at
                    Burj Khalifa
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-2 pb-2">
                  <CloseIcon style={{ fontSize: 15 }} />
                  <p className="text-xs">Transfer</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-2 pb-2">
                  <CloseIcon style={{ fontSize: 15 }} />
                  <p className="text-xs">Souvenirs and photographs</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 justify-between pb-5">
              <div className="flex-1">
                <h3 className="text-primary font-semibold text-2xl">
                  Know before you book
                </h3>
              </div>
              <div className="flex-1">
                <ul className="list-disc pl-3">
                  <li className="text-xs mb-1">
                    Children 4 and younger are complimentary.
                  </li>
                  <li className="text-xs mb-1">
                    You will receive an electronic copy of your tickets to print
                    along with your exact timed-entry time after your booking is
                    confirmed.
                  </li>
                  <li className="text-xs mb-1">
                    Check-in is 30 minutes prior to the booked tour start time.
                  </li>
                  <li className="text-xs mb-1">
                    Entry time is subject to availability (time slot is every 30
                    minutes)
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 justify-between pb-5">
              <div className="flex-1">
                <h3 className="text-primary font-semibold text-2xl">
                  What you can expect
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-xs pb-3">
                  Look out over the sparkling lights and desert landscapes of
                  Dubai from the 124th floor of the tallest skyscraper on earth.
                  Marvel at the engineering and construction of the elegant Burj
                  Khalifa, a pillar of concrete, glass, and steel that rises up
                  from the heart of downtown.
                </p>
                <p className="text-xs pb-3">
                  Choose between a daytime, evening, or after-dark ticket and
                  make your way to the Burj Khalifa to get a whole new
                  perspective on the desert metropolis of Dubai. Step into a
                  spacious elevator and wait for your ears to pop as you're
                  whisked upward at a stomach-dropping speed of 32 feet (10 m)
                  per second. Once you arrive at the 124th floor observation
                  deck, expansive, bird's-eye views of the city through floor-to
                  ceiling windows open up before you.
                </p>
                <p className="text-xs pb-3">
                  Gaze down at the surrounding towers and skyscrapers, admire
                  the luminous fountains and canals around the base of the
                  building, and check out interactive multimedia displays that
                  teach you about the city's landmarks and history. Special
                  telescopes help you travel through time as you take in images
                  of Dubai past and present, and from 1,496 feet (456 m) high,
                  you really do feel like you're on top of the world. As you
                  leave, be sure to stop to watch the fountain show, which
                  erupts with lights, music, and dancing water features every 30
                  minutes.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 justify-between pb-5">
              <div className="flex-1">
                <h3 className="text-primary font-semibold text-2xl">
                  Location
                </h3>
              </div>
              <div className="flex-1">
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
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-primary font-semibold text-2xl">
              Other recommended activities
            </h3>
            <div className="m-auto">
              <Slider {...settings} className="w-full">
                <div className="p-1 rounded-lg">
                  <Link>
                    <div className="h-52 overflow-hidden">
                      <img
                        className="rounded-2xl"
                        src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                  </Link>
                  <div className="bg-white p-3 rounded-b-xl">
                    <Link>
                      <div className="min-h-[150px]">
                        <h3 className="font-semibold text-sm">
                          1. Burj Khalifa 124th & 125th Floor Observation Deck
                          Tickets
                        </h3>
                        <div className="flex flex-row items-start justify-start gap-2 py-2">
                          <AccessTimeIcon style={{ fontSize: 15 }} />
                          <p className="font-light text-xs">1h 30m</p>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-2">
                          <p className="font-semibold text-sm">4.3/5</p>
                          <p className="font-light text-sm">(3,763)</p>
                        </div>
                      </div>
                    </Link>
                    <p className="text-red-600 text-xs">
                      Free cancellation available
                    </p>
                    <h3 className="font-bold text-3xl text-primary">$49</h3>
                    <p className="text-xs">per adult</p>
                  </div>
                </div>
                <div className="p-1 rounded-lg">
                  <Link>
                    <div className="h-52 overflow-hidden">
                      <img
                        className="rounded-2xl"
                        src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                  </Link>
                  <div className="bg-white p-3 rounded-b-xl">
                    <Link>
                      <div className="min-h-[150px]">
                        <h3 className="font-semibold text-sm">
                          1. Burj Khalifa 124th & 125th Floor Observation Deck
                          Tickets
                        </h3>
                        <div className="flex flex-row items-start justify-start gap-2 py-2">
                          <AccessTimeIcon style={{ fontSize: 15 }} />
                          <p className="font-light text-xs">1h 30m</p>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-2">
                          <p className="font-semibold text-sm">4.3/5</p>
                          <p className="font-light text-sm">(3,763)</p>
                        </div>
                      </div>
                    </Link>
                    <p className="text-red-600 text-xs">
                      Free cancellation available
                    </p>
                    <h3 className="font-bold text-3xl text-primary">$49</h3>
                    <p className="text-xs">per adult</p>
                  </div>
                </div>
                <div className="p-1 rounded-lg">
                  <Link>
                    <div className="h-52 overflow-hidden">
                      <img
                        className="rounded-2xl"
                        src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                  </Link>
                  <div className="bg-white p-3 rounded-b-xl">
                    <Link>
                      <div className="min-h-[150px]">
                        <h3 className="font-semibold text-sm">
                          1. Burj Khalifa 124th & 125th Floor Observation Deck
                          Tickets
                        </h3>
                        <div className="flex flex-row items-start justify-start gap-2 py-2">
                          <AccessTimeIcon style={{ fontSize: 15 }} />
                          <p className="font-light text-xs">1h 30m</p>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-2">
                          <p className="font-semibold text-sm">4.3/5</p>
                          <p className="font-light text-sm">(3,763)</p>
                        </div>
                      </div>
                    </Link>
                    <p className="text-red-600 text-xs">
                      Free cancellation available
                    </p>
                    <h3 className="font-bold text-3xl text-primary">$49</h3>
                    <p className="text-xs">per adult</p>
                  </div>
                </div>
                <div className="p-1 rounded-lg">
                  <Link>
                    <div className="h-52 overflow-hidden">
                      <img
                        className="rounded-2xl"
                        src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                  </Link>
                  <div className="bg-white p-3 rounded-b-xl">
                    <Link>
                      <div className="min-h-[150px]">
                        <h3 className="font-semibold text-sm">
                          1. Burj Khalifa 124th & 125th Floor Observation Deck
                          Tickets
                        </h3>
                        <div className="flex flex-row items-start justify-start gap-2 py-2">
                          <AccessTimeIcon style={{ fontSize: 15 }} />
                          <p className="font-light text-xs">1h 30m</p>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-2">
                          <p className="font-semibold text-sm">4.3/5</p>
                          <p className="font-light text-sm">(3,763)</p>
                        </div>
                      </div>
                    </Link>
                    <p className="text-red-600 text-xs">
                      Free cancellation available
                    </p>
                    <h3 className="font-bold text-3xl text-primary">$49</h3>
                    <p className="text-xs">per adult</p>
                  </div>
                </div>
                <div className="p-1 rounded-lg">
                  <Link>
                    <div className="h-52 overflow-hidden">
                      <img
                        className="rounded-2xl"
                        src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                  </Link>
                  <div className="bg-white p-3 rounded-b-xl">
                    <Link>
                      <div className="min-h-[150px]">
                        <h3 className="font-semibold text-sm">
                          1. Burj Khalifa 124th & 125th Floor Observation Deck
                          Tickets
                        </h3>
                        <div className="flex flex-row items-start justify-start gap-2 py-2">
                          <AccessTimeIcon style={{ fontSize: 15 }} />
                          <p className="font-light text-xs">1h 30m</p>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-2">
                          <p className="font-semibold text-sm">4.3/5</p>
                          <p className="font-light text-sm">(3,763)</p>
                        </div>
                      </div>
                    </Link>
                    <p className="text-red-600 text-xs">
                      Free cancellation available
                    </p>
                    <h3 className="font-bold text-3xl text-primary">$49</h3>
                    <p className="text-xs">per adult</p>
                  </div>
                </div>
                <div className="p-1 rounded-lg">
                  <Link>
                    <div className="h-52 overflow-hidden">
                      <img
                        className="rounded-2xl"
                        src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                  </Link>
                  <div className="bg-white p-3 rounded-b-xl">
                    <Link>
                      <div className="min-h-[150px]">
                        <h3 className="font-semibold text-sm">
                          1. Burj Khalifa 124th & 125th Floor Observation Deck
                          Tickets
                        </h3>
                        <div className="flex flex-row items-start justify-start gap-2 py-2">
                          <AccessTimeIcon style={{ fontSize: 15 }} />
                          <p className="font-light text-xs">1h 30m</p>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-2">
                          <p className="font-semibold text-sm">4.3/5</p>
                          <p className="font-light text-sm">(3,763)</p>
                        </div>
                      </div>
                    </Link>
                    <p className="text-red-600 text-xs">
                      Free cancellation available
                    </p>
                    <h3 className="font-bold text-3xl text-primary">$49</h3>
                    <p className="text-xs">per adult</p>
                  </div>
                </div>
                <div className="p-1 rounded-lg">
                  <Link>
                    <div className="h-52 overflow-hidden">
                      <img
                        className="rounded-2xl"
                        src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                  </Link>
                  <div className="bg-white p-3 rounded-b-xl">
                    <Link>
                      <div className="min-h-[150px]">
                        <h3 className="font-semibold text-sm">
                          1. Burj Khalifa 124th & 125th Floor Observation Deck
                          Tickets
                        </h3>
                        <div className="flex flex-row items-start justify-start gap-2 py-2">
                          <AccessTimeIcon style={{ fontSize: 15 }} />
                          <p className="font-light text-xs">1h 30m</p>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-2">
                          <p className="font-semibold text-sm">4.3/5</p>
                          <p className="font-light text-sm">(3,763)</p>
                        </div>
                      </div>
                    </Link>
                    <p className="text-red-600 text-xs">
                      Free cancellation available
                    </p>
                    <h3 className="font-bold text-3xl text-primary">$49</h3>
                    <p className="text-xs">per adult</p>
                  </div>
                </div>
                <div className="p-1 rounded-lg">
                  <Link>
                    <div className="h-52 overflow-hidden">
                      <img
                        className="rounded-2xl"
                        src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                  </Link>
                  <div className="bg-white p-3 rounded-b-xl">
                    <Link>
                      <div className="min-h-[150px]">
                        <h3 className="font-semibold text-sm">
                          1. Burj Khalifa 124th & 125th Floor Observation Deck
                          Tickets
                        </h3>
                        <div className="flex flex-row items-start justify-start gap-2 py-2">
                          <AccessTimeIcon style={{ fontSize: 15 }} />
                          <p className="font-light text-xs">1h 30m</p>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-2">
                          <p className="font-semibold text-sm">4.3/5</p>
                          <p className="font-light text-sm">(3,763)</p>
                        </div>
                      </div>
                    </Link>
                    <p className="text-red-600 text-xs">
                      Free cancellation available
                    </p>
                    <h3 className="font-bold text-3xl text-primary">$49</h3>
                    <p className="text-xs">per adult</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Baselayout>
  );
}
