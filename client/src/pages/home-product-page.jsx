import React from "react";
import { BsMarkerTip } from "react-icons/bs";
import MarketNavbar from "../components/Marketpagecomponents/MarketNavbar/MarketNavbar";
import HerosectionCarausal from "../components/Marketpagecomponents/HerosectionCarausal/HerosectionCarausal";
import ProductCarausal from "../components/Product/ProductCarausal/ProductCarausal";

export default function HomeProduct() {
  return (
    <div className="h-auto">
      <div className="bg-gradient-to-b from-black via-indigo-900 to-black">
        <MarketNavbar />
        <HerosectionCarausal />
      </div>
      <div>
        <ProductCarausal title="Gaming" />
        <ProductCarausal title="Engineering" />
        <ProductCarausal title="Human Body" />
      </div>
    </div>
  );
}
