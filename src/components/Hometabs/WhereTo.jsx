import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";



const WhereTo = () => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setCountries([
  {
    "name": "Afghanistan",
    "independent": false
  },
  {
    "name": "Åland Islands",
    "independent": false
  },
  {
    "name": "Albania",
    "independent": false
  },
  {
    "name": "Algeria",
    "independent": false
  },
  {
    "name": "American Samoa",
    "independent": false
  },
  {
    "name": "Andorra",
    "independent": false
  },
  {
    "name": "Angola",
    "independent": false
  },
  {
    "name": "Anguilla",
    "independent": false
  },
  {
    "name": "Antarctica",
    "independent": false
  },
  {
    "name": "Antigua and Barbuda",
    "independent": false
  },
  {
    "name": "Argentina",
    "independent": false
  },
  {
    "name": "Armenia",
    "independent": false
  }])
  }, []);
  return (
    <div className="w-full font-medium ">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 border-[1px] border-gray-300 flex items-center justify-between rounded cursor-pointer ${
          !selected && "text-gray-700"
        }`}
      >
        {selected ? (
          selected?.length > 25 ? (
            selected?.substring(0, 25) + "..."
          ) : (
            selected
          )
        ) : (
          <span className="flex flex-row items-center gap-x-2 ">
            <LocationOnIcon className="text-secondary" />
            <span className="text-gray-400 text-sm">Going to?</span>
          </span>
        )}

        {/* <BiChevronDown size={20} className={`${open && "rotate-180"}`} /> */}
      </div>
      <div className="relative">
        <ul
          className={`bg-white overflow-y-auto rounded-md cursor-pointer ${
            open
              ? "max-h-60 absolute top-0 z-50 w-full transition-all ease-linear mt-2"
              : "max-h-0"
          } `}
        >
          <div className="flex items-center sticky top-0 ">
            {/* <AiOutlineSearch size={18} className="text-gray-700" /> */}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Going To?"
              className="placeholder:text-gray-700 p-2 border-b-[1px] border-gray-200 w-full outline-none font-normal"
            />
          </div>
          {countries?.map((country) => (
            <li
              key={country?.name}
              className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
              onClick={() => {
                if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(country?.name);
                  setOpen(false);
                  setInputValue("");
                }
              }}
            >
              {country?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhereTo;
