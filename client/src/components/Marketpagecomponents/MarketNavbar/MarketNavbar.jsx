import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import Button from "./Button";

const MarketNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-sm z-50">
      <div className="flex items-center font-medium justify-between px-6">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <p className="md:cursor-pointer h-9 md:text-2xl md:font-bold ">
            Mintbase
          </p>
          <div
            onClick={() => setOpen(!open)}
            className="text-indigo-500  text-3xl md:hidden"
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        <ul className="md:flex hidden capitalize items-center gap-8">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <Navlinks />
        </ul>
        <div className="bg-transparent rounded-xl px-5 items-center md:flex hidden border  ">
          <ion-icon name="search-outline"></ion-icon>
          <input
            type="text"
            className=" outline-none px-2 py-3 rounded-xl bg-transparent  font-normal"
            placeholder="search"
          />
        </div>
        <div className="md:block hidden">
          <Button />
        </div>

        {/* for mobile screen */}

        <ul
          className={`
          md:hidden bg-white text-black absolute w-full h-full bottom-0 py-24 z-20
          duration-300 ease-in-out transform transition-all
          ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <Navlinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default MarketNavbar;
