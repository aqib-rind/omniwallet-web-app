import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white pt-16">
      <div className="flex flex-row max-w-6xl m-auto items-end pb-16">
        <div className="flex flex-col gap-10 w-[63%]">
          <img className="w-fit" src="/omniwallet/images/omnilogo.png" alt="" />
          <p className="text-sm leading-loose max-w-xl">
            Omni, the all-in-one mobile wallet app that redefines the way you
            manage your money, plan your trips, and make payments. With Omni,
            your smartphone becomes your passport to a world of convenience and
            possibilities.
          </p>
          <div className="flex flex-row items-center justify-between max-w-lg">
            <p className="font-bold text-[#0C0C3A] text-base">
              Email: support@omniapp.com
            </p>
            <p className="font-bold text-[#0C0C3A] text-base">
              Phone: +1 800 555-OMNI
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5  w-[16%]">
          <img className="w-full" src="omniwallet/images/appstore-2.png" alt="" />
          <img className="w-full" src="omniwallet/images/google-play2.png" alt="" />
        </div>
        <div className="flex flex-col gap-5 items-end w-[21%]">
          <a className="font-bold text-[#0C0C3A] text-base" href="#">
            Facebook
          </a>
          <a className="font-bold text-[#0C0C3A] text-base" href="#">
            Twitter
          </a>
          <a className="font-bold text-[#0C0C3A] text-base" href="#">
            Instagram
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-between max-w-6xl m-auto pb-7">
        <div className="flex flex-row">
          <a href="#">Privacy Policy</a>
          <span className="px-2">|</span>
          <a href="#">Terms of Service</a>
          <span className="px-2">|</span>
          <a href="#">Security</a>
        </div>
        <div className="">
          <p>© 2023 Omni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
