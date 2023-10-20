import { AdsSlider } from "@/molecules/ads-slider";
import { CaravanSlide } from "@/molecules/ads-slider/caravan-slide";
import { ProductsSlide } from "@/molecules/ads-slider/products-slide";
import { ResellerSlide } from "@/molecules/ads-slider/reseller-slide";
import { VendorSlide } from "@/molecules/ads-slider/vendor-slide";
import React from "react";

function Slider() {
  return (
    <div className="flex flex-col gap-4 mt-20">
      <AdsSlider />
    </div>
  );
}

export default Slider;
