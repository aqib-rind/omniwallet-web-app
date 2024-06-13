import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function Tags() {
  const settings = {
    dots: false,
    infinite: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-4xl m-auto">
      <Slider {...settings} className="w-full">
        <div className="p-1">
          <Link>
            <div className="bg-white py-3 px-3 w-full rounded-lg">
              <h3 className="text-primary text-sm font-medium">
                Tours & day trips
              </h3>
              <p className="text-xs pt-2">1097 things to do</p>
            </div>
          </Link>
        </div>
        <div className="p-1">
          <Link>
            <div className="bg-white py-3 px-3 w-full rounded-lg">
              <h3 className="text-primary text-sm font-medium">
                Tours & day trips
              </h3>
              <p className="text-xs pt-2">1097 things to do</p>
            </div>
          </Link>
        </div>
        <div className="p-1">
          <Link>
            <div className="bg-white py-3 px-3 w-full rounded-lg">
              <h3 className="text-primary text-sm font-medium">
                Tours & day trips
              </h3>
              <p className="text-xs pt-2">1097 things to do</p>
            </div>
          </Link>
        </div>
        <div className="p-1">
          <Link>
            <div className="bg-white py-3 px-3 w-full rounded-lg">
              <h3 className="text-primary text-sm font-medium">
                Tours & day trips
              </h3>
              <p className="text-xs pt-2">1097 things to do</p>
            </div>
          </Link>
        </div>
        <div className="p-1">
          <Link>
            <div className="bg-white py-3 px-3 w-full rounded-lg">
              <h3 className="text-primary text-sm font-medium">
                Tours & day trips
              </h3>
              <p className="text-xs pt-2">1097 things to do</p>
            </div>
          </Link>
        </div>
        <div className="p-1">
          <Link>
            <div className="bg-white py-3 px-3 w-full rounded-lg">
              <h3 className="text-primary text-sm font-medium">
                Tours & day trips
              </h3>
              <p className="text-xs pt-2">1097 things to do</p>
            </div>
          </Link>
        </div>
        <div className="p-1">
          <Link>
            <div className="bg-white py-3 px-3 w-full rounded-lg">
              <h3 className="text-primary text-sm font-medium">
                Tours & day trips
              </h3>
              <p className="text-xs pt-2">1097 things to do</p>
            </div>
          </Link>
        </div>
        <div className="p-1">
          <Link>
            <div className="bg-white py-3 px-3 w-full rounded-lg">
              <h3 className="text-primary text-sm font-medium">
                Tours & day trips
              </h3>
              <p className="text-xs pt-2">1097 things to do</p>
            </div>
          </Link>
        </div>
      </Slider>
    </div>
  );
}
