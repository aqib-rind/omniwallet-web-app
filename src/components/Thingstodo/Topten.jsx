import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Topten() {
  const settings = {
    dots: false,
    infinite: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-4xl m-auto">
      <Slider {...settings} className="w-full">
        <div className="p-1 rounded-lg">
          <Link to="/thingtodo/details">
            <div className="h-52 overflow-hidden">
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </Link>
          <div className="bg-white p-3 rounded-b-xl">
            <Link to="/thingtodo/details">
              <div className="min-h-[150px]">
                <h3 className="font-semibold text-sm">
                  1. Burj Khalifa 124th & 125th Floor Observation Deck Tickets
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
            <p className="text-red-600 text-xs">Free cancellation available</p>
            <h3 className="font-bold text-3xl text-primary">$49</h3>
            <p className="text-xs">per adult</p>
          </div>
        </div>
        <div className="p-1 rounded-lg">
          <Link to="/thingtodo/details">
            <div className="h-52 overflow-hidden">
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </Link>
          <div className="bg-white p-3 rounded-b-xl">
            <Link to="/thingtodo/details">
              <div className="min-h-[150px]">
                <h3 className="font-semibold text-sm">
                  1. Burj Khalifa 124th & 125th Floor Observation Deck Tickets
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
            <p className="text-red-600 text-xs">Free cancellation available</p>
            <h3 className="font-bold text-3xl text-primary">$49</h3>
            <p className="text-xs">per adult</p>
          </div>
        </div>
        <div className="p-1 rounded-lg">
          <Link to="/thingtodo/details">
            <div className="h-52 overflow-hidden">
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </Link>
          <div className="bg-white p-3 rounded-b-xl">
            <Link to="/thingtodo/details">
              <div className="min-h-[150px]">
                <h3 className="font-semibold text-sm">
                  1. Burj Khalifa 124th & 125th Floor Observation Deck Tickets
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
            <p className="text-red-600 text-xs">Free cancellation available</p>
            <h3 className="font-bold text-3xl text-primary">$49</h3>
            <p className="text-xs">per adult</p>
          </div>
        </div>
        <div className="p-1 rounded-lg">
          <Link to="/thingtodo/details">
            <div className="h-52 overflow-hidden">
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </Link>
          <div className="bg-white p-3 rounded-b-xl">
            <Link to="/thingtodo/details">
              <div className="min-h-[150px]">
                <h3 className="font-semibold text-sm">
                  1. Burj Khalifa 124th & 125th Floor Observation Deck Tickets
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
            <p className="text-red-600 text-xs">Free cancellation available</p>
            <h3 className="font-bold text-3xl text-primary">$49</h3>
            <p className="text-xs">per adult</p>
          </div>
        </div>
        <div className="p-1 rounded-lg">
          <Link to="/thingtodo/details">
            <div className="h-52 overflow-hidden">
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </Link>
          <div className="bg-white p-3 rounded-b-xl">
            <Link to="/thingtodo/details">
              <div className="min-h-[150px]">
                <h3 className="font-semibold text-sm">
                  1. Burj Khalifa 124th & 125th Floor Observation Deck Tickets
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
            <p className="text-red-600 text-xs">Free cancellation available</p>
            <h3 className="font-bold text-3xl text-primary">$49</h3>
            <p className="text-xs">per adult</p>
          </div>
        </div>
        <div className="p-1 rounded-lg">
          <Link to="/thingtodo/details">
            <div className="h-52 overflow-hidden">
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </Link>
          <div className="bg-white p-3 rounded-b-xl">
            <Link to="/thingtodo/details">
              <div className="min-h-[150px]">
                <h3 className="font-semibold text-sm">
                  1. Burj Khalifa 124th & 125th Floor Observation Deck Tickets
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
            <p className="text-red-600 text-xs">Free cancellation available</p>
            <h3 className="font-bold text-3xl text-primary">$49</h3>
            <p className="text-xs">per adult</p>
          </div>
        </div>
        <div className="p-1 rounded-lg">
          <Link to="/thingtodo/details">
            <div className="h-52 overflow-hidden">
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </Link>
          <div className="bg-white p-3 rounded-b-xl">
            <Link to="/thingtodo/details">
              <div className="min-h-[150px]">
                <h3 className="font-semibold text-sm">
                  1. Burj Khalifa 124th & 125th Floor Observation Deck Tickets
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
            <p className="text-red-600 text-xs">Free cancellation available</p>
            <h3 className="font-bold text-3xl text-primary">$49</h3>
            <p className="text-xs">per adult</p>
          </div>
        </div>
        <div className="p-1 rounded-lg">
          <Link to="/thingtodo/details">
            <div className="h-52 overflow-hidden">
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </Link>
          <div className="bg-white p-3 rounded-b-xl">
            <Link to="/thingtodo/details">
              <div className="min-h-[150px]">
                <h3 className="font-semibold text-sm">
                  1. Burj Khalifa 124th & 125th Floor Observation Deck Tickets
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
            <p className="text-red-600 text-xs">Free cancellation available</p>
            <h3 className="font-bold text-3xl text-primary">$49</h3>
            <p className="text-xs">per adult</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
