import React from "react";
import Navbar from "../components/Navbar";
import HomeMidsection from "../components/Homepagecomponent/HomeMidsection";
import HeroSection from "../components/Homepagecomponent/HeroSection";
import HomeSectionCard from "../components/Homepagecomponent/HomeSectionCard";

const Home = () => {
  return (
    <div className="w-full h-auto  bg-[#0D0E1C]">
      <HeroSection />

      {/* category section */}
      <div className="w-full  mt-4   h-[600px] md:px-16 py-5">
        {/* category slider */}
        <p className="text-left px-5 text-white text-xl md:hidden mb-5 font-semibold">Featured Contract</p>
        <div className="w-full flex items-center gap-8 overflow-x-scroll scrollbar-hide">

        
        {[
          "AI",
          "Art",
          "DAOs",
          "Gaming",
          "Music",
          "NFTs",
          "Social",
          "Sports",
          "Tickets",
          "Utility",
        ].map((item) => (
          <div className=" hover:bg-slate-800 z-50 cursor-pointer ml-3 px-4 py-2 rounded">
            <p className="text-white">{item}</p>
          </div>
        ))}
        </div>

        {/* card slider section */}

        <div className="w-full flex  mt-9 overflow-x-scroll md:overflow-x-scroll scrollbar-hide  ">
            {
               [1,1,1].map((item) => <HomeSectionCard/>)
            }
         
        </div>
      </div>
    </div>
  );
};

export default Home;
