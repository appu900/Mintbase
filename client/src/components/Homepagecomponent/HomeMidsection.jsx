import React from "react";

export default function HomeMidsection() {
  return (
    <div className="max-w-7xl   text-white  mx-auto mt-[30px] md:mt-[100px] px-4">
      <h1 className="md:text-6xl  text-3xl font-bold tracking-wide text-[#E087FF]">
        The Digital Assets Factory
      </h1>
      <p className="text-xl md:text-2xl max-w-4xl mx-auto mt-10 font-semibold">
        An ownership and scarcity hub for creators and developers pioneering
        utility NFTs in AI, payments, rewards, tickets, art, memberships...
      </p>

      <div className="max-w-2xl  mx-auto mt-6 cursor-pointer md:px-32 px-20  grid grid-cols-1 md:grid-cols-2">
        {[
          "Creator Suite",
          "Developers",
          "Mint a Selfie",
          "Market",
          "Wallet",
          "AI"
          
        ].map((item) => (
          <div className="w-[200px] bg-opacity-50 backdrop-blur-lg  bg-black hover:bg-[#070C2B] mt-4 py-5 rounded">
            <p className="text-[#E087FF] text-[18px]">{item}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
}
