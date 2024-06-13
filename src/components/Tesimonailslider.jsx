import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Tesimonailslider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="max-w-6xl m-auto py-28">
        <Slider {...settings}>
          <div>
            <div className="bg-white p-12 m-3">
              <h3 className="text-center text-[#45197D] font-bold text-xl pb-5">
                Awesome Design!
              </h3>
              <p className="text-center text-sm">
                Etiam sapien sem at sagittis congue augue massa varius egestas
                magna suscipit magna tempus aliquet porta rutrum sodales auctor
                integer risus auctor rutrum
              </p>
            </div>
            <div className="text-center -mt-10">
              <img
                className="w-full max-w-[90px] m-auto pb-5"
                src="omniwallet/images/avatar.png"
                alt=""
              />
              <h4 className="font-bold text-black text-lg">Evelyn Martinez</h4>
              <p className="text-gray-700">Housewife</p>
              <div className="flex items-center justify-center pt-3">
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white p-12 m-3">
              <h3 className="text-center text-[#45197D] font-bold text-xl pb-5">
                Awesome Design!
              </h3>
              <p className="text-center text-sm">
                Etiam sapien sem at sagittis congue augue massa varius egestas
                magna suscipit magna tempus aliquet porta rutrum sodales auctor
                integer risus auctor rutrum
              </p>
            </div>
            <div className="text-center -mt-10">
              <img
                className="w-full max-w-[90px] m-auto pb-5"
                src="omniwallet/images/avatar.png"
                alt=""
              />
              <h4 className="font-bold text-black text-lg">Evelyn Martinez</h4>
              <p className="text-gray-700">Housewife</p>
              <div className="flex items-center justify-center pt-3">
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white p-12 m-3">
              <h3 className="text-center text-[#45197D] font-bold text-xl pb-5">
                Awesome Design!
              </h3>
              <p className="text-center text-sm">
                Etiam sapien sem at sagittis congue augue massa varius egestas
                magna suscipit magna tempus aliquet porta rutrum sodales auctor
                integer risus auctor rutrum
              </p>
            </div>
            <div className="text-center -mt-10">
              <img
                className="w-full max-w-[90px] m-auto pb-5"
                src="omniwallet/images/avatar.png"
                alt=""
              />
              <h4 className="font-bold text-black text-lg">Evelyn Martinez</h4>
              <p className="text-gray-700">Housewife</p>
              <div className="flex items-center justify-center pt-3">
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white p-12 m-3">
              <h3 className="text-center text-[#45197D] font-bold text-xl pb-5">
                Awesome Design!
              </h3>
              <p className="text-center text-sm">
                Etiam sapien sem at sagittis congue augue massa varius egestas
                magna suscipit magna tempus aliquet porta rutrum sodales auctor
                integer risus auctor rutrum
              </p>
            </div>
            <div className="text-center -mt-10">
              <img
                className="w-full max-w-[90px] m-auto pb-5"
                src="omniwallet/images/avatar.png"
                alt=""
              />
              <h4 className="font-bold text-black text-lg">Evelyn Martinez</h4>
              <p className="text-gray-700">Housewife</p>
              <div className="flex items-center justify-center pt-3">
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white p-12 m-3">
              <h3 className="text-center text-[#45197D] font-bold text-xl pb-5">
                Awesome Design!
              </h3>
              <p className="text-center text-sm">
                Etiam sapien sem at sagittis congue augue massa varius egestas
                magna suscipit magna tempus aliquet porta rutrum sodales auctor
                integer risus auctor rutrum
              </p>
            </div>
            <div className="text-center -mt-10">
              <img
                className="w-full max-w-[90px] m-auto pb-5"
                src="omniwallet/images/avatar.png"
                alt=""
              />
              <h4 className="font-bold text-black text-lg">Evelyn Martinez</h4>
              <p className="text-gray-700">Housewife</p>
              <div className="flex items-center justify-center pt-3">
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    fill="#FF8000"
                    width="13px"
                    height="13px"
                    viewBox="0 0 24 24"
                    id="star"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-color"
                  >
                    <path
                      id="primary"
                      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
