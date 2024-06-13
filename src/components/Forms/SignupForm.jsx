import React, { useState } from "react";
import { useForm } from "react-hook-form";

function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-y-4">
        <div className="flex flex-row gap-2">
          <div className="flex-1">
            <label htmlFor="FirstName" className="block text-sm mb-2 ">
              First Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="FirstName"
                name="FirstName"
                className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary "
                aria-describedby="FirstName-error"
                {...register("firstName", {
                  required: "First Name is required",
                  minLength: 2,
                  maxLength: 15,
                })}
              />
              {errors.firstName?.type == "minLength" && (
                <p className="text-xs text-red-600 mt-2" role="alert">
                  At least 2 Characters
                </p>
              )}
              {errors.firstName?.type == "maxLength" && (
                <p className="text-xs text-red-600 mt-2" role="alert">
                  Max 15 Characters
                </p>
              )}
              <p className="text-xs text-red-600 mt-2" role="alert">
                {errors.firstName?.message}
              </p>
            </div>
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="block text-sm mb-2 ">
              Last Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary "
                aria-describedby="lastName-error"
                {...register("lastName", {
                  required: "Last Name is required",
                  minLength: 2,
                  maxLength: 15,
                })}
              />
              {errors.lastName?.type == "minLength" && (
                <p className="text-xs text-red-600 mt-2" role="alert">
                  At least 2 Characters
                </p>
              )}
              {errors.lastName?.type == "maxLength" && (
                <p className="text-xs text-red-600 mt-2" role="alert">
                  Max 15 Characters
                </p>
              )}
              <p className="text-xs text-red-600 mt-2" role="alert">
                {errors.lastName?.message}
              </p>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm mb-2 ">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary "
              aria-describedby="email-error"
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            <p className="text-xs text-red-600 mt-2" role="alert">
              {errors.email?.message}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex-1">
            <label htmlFor="password" className="block text-sm mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary  "
                aria-describedby="password-error"
                {...register("password", {
                  required: "password is required",
                  minLength: 8,
                  maxLength: 26,
                })}
              />
              {errors.password?.type == "minLength" && (
                <p className="text-xs text-red-600 mt-2" role="alert">
                  At least 8 Characters
                </p>
              )}
              {errors.password?.type == "maxLength" && (
                <p className="text-xs text-red-600 mt-2" role="alert">
                  Max 26 Characters
                </p>
              )}
              <p className="text-xs text-red-600 mt-2" role="alert">
                {errors.password?.message}
              </p>
            </div>
          </div>
          <div className="flex-1">
            <label htmlFor="password" className="block text-sm mb-2">
              Re-Enter Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary  "
                aria-describedby="password-error"
                {...register("password", {
                  required: "password is required",
                  minLength: 8,
                  maxLength: 26,
                })}
              />
              {errors.password?.type == "minLength" && (
                <p className="text-xs text-red-600 mt-2" role="alert">
                  At least 8 Characters
                </p>
              )}
              {errors.password?.type == "maxLength" && (
                <p className="text-xs text-red-600 mt-2" role="alert">
                  Max 26 Characters
                </p>
              )}
              <p className="text-xs text-red-600 mt-2" role="alert">
                {errors.password?.message}
              </p>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm mb-2 ">
            Street Address
          </label>
          <input
            type="text"
            id="streetaddress"
            name="streetaddress"
            className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex-1">
            <label htmlFor="text" className="block text-sm mb-2">
              Country
            </label>
            <div className="relative">
              <input
                type="text"
                id="country"
                name="country"
                className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary "
              />
            </div>
          </div>
          <div className="flex-1">
            <label htmlFor="text" className="block text-sm mb-2">
              State
            </label>
            <div className="relative">
              <input
                type="text"
                id="state"
                name="state"
                className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex-1">
            <label htmlFor="text" className="block text-sm mb-2">
              City
            </label>
            <div className="relative">
              <input
                type="text"
                id="city"
                name="city"
                className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary "
              />
            </div>
          </div>
          <div className="flex-1">
            <label htmlFor="text" className="block text-sm mb-2">
              ZIP Code
            </label>
            <div className="relative">
              <input
                type="number"
                id="zipcode"
                name="zipcode"
                className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary "
              />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm mb-2 ">
            Phone Number
          </label>
          <input
            type="tel"
            id="phonenumber"
            name="phonenumber"
            className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-normal bg-primary text-white hover:bg-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none focus:ring-offset-primary transition-all"
        >
          Create My Account
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
