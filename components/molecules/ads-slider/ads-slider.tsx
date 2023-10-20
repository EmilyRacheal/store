import React from "react";
import { Carousel } from "@mantine/carousel";
import { ProductsSlide } from "./products-slide";
import { ResellerSlide } from "./reseller-slide";
import { CaravanSlide } from "./caravan-slide";
import { VendorSlide } from "./vendor-slide";

const slideArr = [
  <CaravanSlide />,
  <ResellerSlide />,
  <VendorSlide />,
  <ProductsSlide />,
];
export const AdsSlider = () => {
  return (
    <Carousel
    className="max-[810px]:max-w-full"
    maw={1153}
    mx="auto"
      // height={198}
      classNames={{
        controls: "max-[552px]:top-[calc(50%-1.625rem/2)]",
        control:
          "bg-white max-[552px]:bg-transparent py-2 px-[10px] rounded-full text-[#979797] max-[552px]:px-0 max-[552px]:py-0",
        indicators: "hidden",
      }}
    >
      {slideArr.map((item, id) => (
        <Carousel.Slide key={id}>{item}</Carousel.Slide>
      ))}
    </Carousel>
  );
};
