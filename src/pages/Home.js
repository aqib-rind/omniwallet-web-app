import React from "react";
import Headingtopsection from "../components/Headingtopsection";
import Buildatrip from "../components/Buildatrip";
import Yellowsection from "../components/Yellowsection";
import Firstslider from "../components/Firstslider";
import Gotoguide from "../components/Gotoguide";
import Moreexplore from "../components/Moreexplore";
import Secondslider from "../components/Secondslider";
import Mobilesection from "../components/Mobilesection";
import Purplebg from "../components/Purplebg";
import Iconlist from "../components/Iconlist";
import Baselayout from "../components/Layouts/Baselayout";

function Home() {
  return (
    <>
      <Baselayout>
        <div className="h-[761px] custombg absolute top-0 w-full z-[-1]"></div>
        <div>
          <Headingtopsection />
          {/* Search Section */}
          {/* Icon list  */}
          <Iconlist />
          {/* Build A Trip */}
          <Buildatrip />
          {/* Yellow bg */}
          <Yellowsection />
          {/*  First Slider Section */}
          <Firstslider />
          {/* Go to Guide  */}
          <Gotoguide />
          {/* More Explore */}
          <Moreexplore />
          {/* Second Slider */}
          <Secondslider />
          {/* Mobile Section */}
          <Mobilesection />
          {/*  */}
          <Purplebg />
          {/*  */}
        </div>
      </Baselayout>
    </>
  );
}

export default Home;
