import React from "react";
import Navbar from "../components/Navbar";
import HomeMidsection from "../components/Homepagecomponent/HomeMidsection";
import HeroSection from "../components/Homepagecomponent/HeroSection";
import HomeSectionCard from "../components/Homepagecomponent/HomeSectionCard";
import { BsFillLightningChargeFill } from "react-icons/bs"
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlineSettingsAccessibility } from "react-icons/md"

const Home = () => {
  return (
    <div className="w-full h-auto  bg-[#0D0E1C]">
      <HeroSection />

      {/* category section */}
      <div className="w-full  mt-16 md:mt-5 sm:mt-28   h-[600px] md:px-16 py-5">
        {/* category slider */}
        <p className="text-left px-5 text-white text-xl md:hidden mb-5 font-semibold">
          Featured Contract
        </p>
        <div className="w-full flex items-center gap-1 overflow-x-scroll scrollbar-hide">
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
              <p className="text-[#85E6C5] md:text-white">{item}</p>
            </div>
          ))}
        </div>

        {/* card slider section */}

        <div className="w-full flex   mt-9 overflow-x-scroll md:overflow-x-scroll scrollbar-hide  ">
          {[1, 1, 1].map((item) => (
            <HomeSectionCard />
          ))}
        </div>
      </div>

      {/* About section #1 */}

      <div className="max-w-7xl  h-auto mx-auto text-white ">
        <p className="font-bold text-violet-600">CONTRACT FACTORY</p>
        <p className="text-3xl  font-semibold mt-2">
          Deploy your own Smart Contract with a few clicks
        </p>
        <p className="text-[18px] max-w-2xl mt-3 px-3 mx-auto text-gray-400">
          Launch and own your Smart Contract to manage your NFTs. Establish your
          rules without any technical knowledge
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 mt-16 md:px-0 px-5">

         {/* grid #1 */}
            <div className="space-y-12">
                <div className="capitalize">
                      
                   <div className="flex items-center
                    gap-3">
                      <BsFillLightningChargeFill className="text-2xl text-violet-600"/>
                      <p className="text-xl font-semibold">Create a NFT Collection</p>
                   </div>
                     <p className="   text-[16px] text-left max-w-2xl mt-3 px-9 mx-auto text-gray-400">
                     Easily Mint, Sell, Transfer and Burn NFTs on your contract</p>

                   
                </div>

                <div className="capitalize ">
                      
                   <div className="flex items-center
                    gap-3">
                      <MdOutlineSettingsAccessibility className="text-2xl text-violet-600"/>
                      <p className="text-xl font-semibold">Your Contract your Rules</p>
                   </div>
                     <p className="text-[16px] text-left max-w-xl mt-3  mx-auto text-gray-400">
                     Add minters and custom rules, like NFTs with rarities, to make your contract your own</p>

                   
                </div>

                <div className="capitalize">
                      
                   <div className="flex items-center
                    gap-3">
                      <AiFillSafetyCertificate className="text-2xl text-violet-600"/>
                      <p className="text-xl font-semibold">Safe and Audited</p>
                   </div>
                     <p className="text-[16px] text-left max-w-xl mt-3  mx-auto text-gray-400">
                     Enjoy the safety of your contracts with a stamp of approval from credible auditors</p>

                   
                </div>
            </div>

            {/* Grid #2 */}
            <div className="md:mt-0 mt-8">

                <form className="md:w-[600px] h-[350px] bg-[#1E2030] rounded px-5">

                    <div className="border-b border-gray-700 py-6">
                        <h1 className="font-semibold text-left">New Contract</h1>
                    </div>

                    <div>

                        <div className="flex flex-col  gap-3 mt-6 text-left">
                            <p className="text-white text-left ">Store name *</p>
                            <input type="text" placeholder="Enter Store Name" className="w-full h-[40px] bg-[#11121a] rounded px-3 outline-none" />
                        </div>

                        <div className="flex flex-col  gap-3 mt-6 text-left">
                            <p className="text-white text-left ">Symbol *</p>
                            <input type="text" placeholder="Enter symbol" className="w-full h-[40px] bg-[#11121a] rounded px-3 outline-none" />
                        </div>

                        <button className="px-4 py-2 bg-gray-600 mt-5 rounded"> Deploy Contract </button>

                    </div>
                    
                </form>

            </div>

        </div>
      </div>

      {/* about section 2 */}
    </div>
  );
};

export default Home;
