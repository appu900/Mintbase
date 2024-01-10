import React from "react";

const ProductCard = ({ url, name }) => {
  return (
    <div className="w-[360px] md:w-[340px] z-10 h-[240px] border cursor-pointer rounded-lg relative shadow-lg">
      <img
        src={url}
        alt=""
        className="w-full h-full object-cover overflow-hidden"
      />

      <div className="mt-2 flex items-center px-2 justify-between">
        <div className="flex items-center gap-2">
          <img src="https://cdn.dribbble.com/userupload/12365532/file/original-372da3557993f661643f56ecc6b00a38.png?resize=400x300&vertical=center" alt="" className="w-6 h-6 rounded-full"/>  
          <h1 className="font-semibold text-sm text-black">designer alex</h1>
        </div>
        <h1 className="font-semibold text-xs text-gray-500">product name</h1>
      </div>
    </div>
  );
};

export default ProductCard;
