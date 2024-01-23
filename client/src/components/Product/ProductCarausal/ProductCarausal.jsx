import React from "react";
import Productcard from "../ProductCard/Productcard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const ProductCarausal = ({ title, data }) => {
  return (
    <div className="w-full px-20">
      <h1 className="text-xl font-semibold uppercase text-black text-left m-4 ">
        {title}
      </h1>
      <div className="flex gap-6 overflow-x-scroll scrollbar-hide">
        {[1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <Productcard key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductCarausal;
