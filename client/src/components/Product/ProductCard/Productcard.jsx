import React from "react";

export default function Productcard() {
  return (
    <div
      className="text-black md:min-w-72 h-72 border rounded-xl 
    overflow-hidden cursor-pointer "
    >
      <div className="h-60 w-full">
        <iframe
          src="https://sketchfab.com/models/b8d6d16c5e6643ecba5ba3a724fe27e2/embed"
          frameborder="0"
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="bg-white w-full h-12 flex justify-between px-4 py-2">
        <p className="text-gray-900 text-[17px] font-bold uppercase">
          Engineering scale
        </p>
        <p className="font-semibold text-black">0.12ETH</p>
      </div>
    </div>
  );
}
