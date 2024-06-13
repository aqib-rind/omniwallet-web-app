import React from "react";

export default function Buildatrip() {
  return (
    <div className="flex items-center justify-start max-w-6xl m-auto relative h-[460px]">
      <img
        className="absolute top-0 w-full"
        src="omniwallet/images//image-bg-phone.png"
        alt=""
      />
      <div className="z-10 max-w-[540px] pl-36 flex gap-6 flex-col">
        <h2 className="font-bold text-5xl text-[#301D49]">
          Build a trip in minutes
        </h2>
        <p className="text-[#301D49] font-medium text-xl">
          Get a personalized itinerary just for you, guided by traveler tips and
          reviews.
        </p>
        <a
          href="#"
          className="flex rounded-full px-6 py-3 w-fit gap-1 bg-[#301D49] text-white"
        >
          <svg
            fill="white"
            viewBox="0 0 25 25"
            width="20px"
            height="20px"
            className="d Vb UmNoP"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.69 5.894a5.27 5.27 0 01-3.118-3.118c-.108-.294-.534-.294-.642 0a5.242 5.242 0 01-3.115 3.118c-.294.108-.294.534 0 .642a5.27 5.27 0 013.118 3.118c.108.294.534.294.642 0a5.27 5.27 0 013.118-3.118c.294-.108.294-.534 0-.642h-.003zm1.734-.418a.746.746 0 100 1.493c3.057 0 5.529 2.45 5.529 5.401 0 1.549-.806 3.253-2.05 4.953-1.095 1.494-2.405 2.827-3.469 3.882-1.07-1.055-2.398-2.402-3.502-3.911-1.235-1.69-2.034-3.382-2.034-4.924a.746.746 0 10-1.492 0c0 2.02 1.024 4.03 2.32 5.804 1.298 1.775 2.871 3.32 3.98 4.407l.04.04.16.16a.746.746 0 001.047.01l.151-.146a.915.915 0 00.02-.02l.053-.055.003-.003c1.102-1.089 2.645-2.613 3.926-4.362 1.307-1.785 2.34-3.808 2.34-5.835 0-3.802-3.169-6.894-7.022-6.894zm-1.019 5.244a1.266 1.266 0 011.647.666 1.218 1.218 0 01-.679 1.599 1.266 1.266 0 01-1.646-.666c-.26-.62.034-1.336.678-1.599zm-.566-1.389c1.397-.57 3.01.078 3.596 1.475a2.718 2.718 0 01-1.495 3.568c-1.397.57-3.011-.078-3.596-1.475a2.717 2.717 0 011.495-3.568zM5.715 7.948a3.765 3.765 0 002.227 2.228h.002c.21.077.21.38 0 .458a3.765 3.765 0 00-2.227 2.227c-.077.21-.381.21-.458 0a3.764 3.764 0 00-2.228-2.227c-.21-.077-.21-.381 0-.458a3.744 3.744 0 002.225-2.228c.077-.21.382-.21.459 0z"
            ></path>
          </svg>
          Start a trip with AI
        </a>
      </div>
    </div>
  );
}
