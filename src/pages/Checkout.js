import React from "react";
import Baselayout from "../components/Layouts/Baselayout";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <Baselayout>
      <div className="bg-[#f7f7f7]">
        <div className="max-w-6xl m-auto lg:py-10 lg:px-0 p-5">
          <div className="flex lg:flex-row flex-col gap-5 items-start">
            <div className="lg:w-[70%]">
              <div className="bg-white p-3 rounded-xl">
                <div className="sm:p-7 ">
                  <form>
                    <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
                      <div className="mt-2 space-y-3">
                        <div className="flex lg:flex-row flex-col items-center justify-between gap-6">
                          <input
                            id="af-payment-billing-contact"
                            type="text"
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
                            placeholder="First Name"
                          />
                          <input
                            type="text"
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
                            placeholder="Last Name"
                          />
                        </div>
                        <div className="flex lg:flex-row flex-col items-center justify-between gap-6">
                          <input
                            type="email"
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
                            placeholder="Email Address"
                          />
                          <input
                            type="text"
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
                      <div className="mt-2 space-y-3">
                        <input
                          id="af-payment-billing-address"
                          type="text"
                          className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none"
                          placeholder="Street Address"
                        />
                        <input
                          type="text"
                          className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none"
                          placeholder="Apt, Syuite, Building (Optional)"
                        />
                        <div className="grid sm:flex gap-3">
                          <input
                            type="text"
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="Zip Code"
                          />
                          <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none">
                            <option selected>City</option>
                            <option>City 1</option>
                            <option>City 2</option>
                            <option>City 3</option>
                          </select>
                          <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none ">
                            <option selected>State</option>
                            <option>State 1</option>
                            <option>State 2</option>
                            <option>State 3</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
                      <div className="mt-2 space-y-3">
                        <input
                          id="af-payment-payment-method"
                          type="text"
                          className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none"
                          placeholder="Name on Card"
                        />
                        <input
                          type="text"
                          className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none"
                          placeholder="Card Number"
                        />
                        <div className="grid sm:flex gap-3">
                          <input
                            type="text"
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="Expiration Date"
                          />
                          <input
                            type="text"
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="CVV Code"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="pt-5">
                    <Link  to="/dashboard">
                      <button
                        type="button"
                        className="py-2 px-3 w-full bg-primary rounded-full text-white"
                      >
                        Pay Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[30%] p-5 bg-white rounded-lg">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-lg font-semibold text-primary">Items</h3>
                <h3 className="text-lg font-semibold text-primary">Total</h3>
              </div>
              <div className="py-2">
                <hr></hr>
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-sm">Car Booking</p>
                <p className="text-sm">$74.60</p>
              </div>
              <div className="py-2">
                <hr></hr>
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-sm">Flight Booking</p>
                <p className="text-sm">$1,016.60</p>
              </div>
              <div className="py-2">
                <hr></hr>
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-sm">Hotel Booking</p>
                <p className="text-sm">$1,351.64</p>
              </div>
              <div className="py-2">
                <hr></hr>
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-sm">Activity Booking</p>
                <p className="text-sm">$49.00</p>
              </div>
              <div className="py-4">
                <hr></hr>
              </div>
              <p className="text-lg font-semibold text-primary text-right">
                2,491.84
              </p>
            </div>
          </div>
        </div>
      </div>
    </Baselayout>
  );
}
