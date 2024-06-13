import React from "react";

export default function Leftsidebar() {
  return (
    <div className="w-full">
      {/*  */}
      <div className="flex flex-col rounded-lg border-2">
        <div>
          <iframe
            className="rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231280.41319232315!2d55.06268298600024!3d25.076242445106587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700431449112!5m2!1sen!2s"
            width="100%"
            height="120px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="p-2 text-center text-xs text-primary">
          <a href="#">View in a map</a>
        </div>
      </div>
      {/*  */}
      <div className="mt-4">
        <div className="relative">
          <select
            className="peer p-4 pe-9 block w-full border-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
  focus:pt-6
  focus:pb-2
  [&:not(:placeholder-shown)]:pt-6
  [&:not(:placeholder-shown)]:pb-2
  autofill:pt-6
  autofill:pb-2"
          >
            <option>Recommended</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
            <option>Reviews + lowest price</option>
            <option>Star rating</option>
          </select>
          <label
            className="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
    peer-focus:text-xs
    peer-focus:-translate-y-1.5
    peer-focus:text-primary
    peer-[:not(:placeholder-shown)]:text-xs
    peer-[:not(:placeholder-shown)]:-translate-y-1.5
    peer-[:not(:placeholder-shown)]:text-primary"
          >
            Sort by
          </label>
        </div>
      </div>
      {/*  */}
      <div className="pt-4 border-t-2 mt-3">
        <h3 className="font-semibold text-primary text-lg mb-3">
          Search by property name
        </h3>

        <div>
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-primary "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:primary focus:border-primary "
                placeholder="e.g. Marriott"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {/*  */}
      <div className="pt-4 border-t-2 mt-3">
        <h3 className="font-semibold text-primary text-lg mb-3">Filter by</h3>
        <div>
          <h4 className="text-sm font-semibold text-gray-600 pb-2">
            Popular filters
          </h4>
          <div className="flex pb-1">
            <input
              type="checkbox"
              className="shrink-0 mt-0.5 border-gray-600 rounded text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
              id="hs-default-checkbox"
            />
            <label
              htmlFor="hs-default-checkbox"
              className="text-sm text-primary ms-3 "
            >
              Jumeirah Lake Towers
            </label>
          </div>
          <div className="flex pb-1">
            <input
              type="checkbox"
              className="shrink-0 mt-0.5 border-gray-600 rounded text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
              id="hs-default-checkbox"
            />
            <label
              htmlFor="hs-default-checkbox"
              className="text-sm text-primary ms-3 "
            >
              Pet friendly
            </label>
          </div>
          <div className="flex pb-1">
            <input
              type="checkbox"
              className="shrink-0 mt-0.5 border-gray-600 rounded text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
              id="hs-default-checkbox"
            />
            <label
              htmlFor="hs-default-checkbox"
              className="text-sm text-primary ms-3 "
            >
              Pool
            </label>
          </div>
          <div className="flex pb-1">
            <input
              type="checkbox"
              className="shrink-0 mt-0.5 border-gray-600 rounded text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
              id="hs-default-checkbox"
            />
            <label
              htmlFor="hs-default-checkbox"
              className="text-sm text-primary ms-3 "
            >
              Breakfast included
            </label>
          </div>
          <div className="flex pb-1">
            <input
              type="checkbox"
              className="shrink-0 mt-0.5 border-gray-600 rounded text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
              id="hs-default-checkbox"
            />
            <label
              htmlFor="hs-default-checkbox"
              className="text-sm text-primary ms-3 "
            >
              Hotel resort
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
