import React from "react";

export default function HomeSectionAboutCard() {
  return (
    <div className="bg-[#1E2030] px-5 py-6 ml-5 rounded md:min-w-[500px] md:h-[330px] h-[350px] min-w-[340px] ">
      <div className="flex items-center gap-4">
        <img
          src="https://picsum.photos/200/300"
          alt=""
          className="h-20 w-20 rounded"
        />
        <p className="text-xl font-semibold tracking-wide">
          citykey.Mintbase.she
        </p>
      </div>

      <p className="text-left text-sm font-semibold mt-5">
        Experience cities and curated adventures through dynamic access, guided
        by Mayors and their teams.
      </p>
      <div>
        <div className="flex items-center gap-3 mt-4">
          <img
            src="https://picsum.photos/200/300"
            alt=""
            className="md:h-32 md:w-32 h-[100px] w-[100px]  rounded-md object-cover"
          />
          <img
            src="https://picsum.photos/400/300"
            alt=""
            className="md:h-32 md:w-32 h-[100px] w-[100px]  rounded-md object-cover"
          />
          <img
            src="https://picsum.photos/600/300"
            alt=""
            className="md:h-32 md:w-32 h-[100px] w-[100px]  rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
