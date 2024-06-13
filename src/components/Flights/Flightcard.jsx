import React from "react";
import Flightpopup from "../Flightpopup";

export default function Flightcard() {
  return (
    <div>
      <div
        className="bg-white border p-4 rounded-lg flex flex-col lg:flex-row justify-between cursor-pointer"
        data-hs-overlay="#hs-modal-upgrade-to-pro"
      >
        <div>
          <h3 className="text-base font-semibold text-primary">
            8:35am - 6:10pm
          </h3>
          <p className="text-xs">Dubai (DXB) - New York (JFK)</p>
          <div className="flex flex-row items-center justify-start gap-1 py-2">
            <img
              className="w-6"
              src="https://1000logos.net/wp-content/uploads/2020/04/Turkish-Airlines-symbol.png"
              alt=""
            />
            <p className="text-xs">Turkish Airlines</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs">18h 35m (1 stop)</p>
          <p className="text-xs">2h 30m in Istanbul (IST)</p>
        </div>
        <div className="text-right">
          <h4 className="text-lg font-semibold text-primary">$915</h4>
          <p className="text-xs">Roundtrip per traveler</p>
        </div>
      </div>
      <Flightpopup />
    </div>
  );
}
