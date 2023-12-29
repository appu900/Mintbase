import React from "react";
import HomeMidsection from "./HomeMidsection";
import Navbar from "../Navbar";
import backgroudVideo from "../../video/home.mp4";

const HeroSection = () => {
  return (
    <div className="w-full relative h-screen overflow-hidden ">
      <div className="absolute  opacity-20  ">
        <video autoPlay loop muted id="video">
            <source src={backgroudVideo} type="video/mp4" />
        </video>
      </div>

      <Navbar />
      <HomeMidsection  />
    </div>
  );
};

export default HeroSection;
