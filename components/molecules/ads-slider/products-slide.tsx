import React from "react";
import { AppStore, GooglePlay } from ".";

export const ProductsSlide = () => {
  return (
    <section
      className=" px-[clamp(10px,5vw,72px)] py-5 justify-center  bg-cover bg-no-repeat bg-center flex flex-col border-b-[0.5px] border-b-[rgba(0,0,0,0.50)] h-[196px] max-[552px]:h-[124px]  "
      style={{ backgroundImage: "url('/images/products-slide-img.jpeg')" }}
    >
      <div className=" flex justify-between items-center max-[530px]:flex-col ">
        <h2 className=" text-[clamp(7px,2.2vw,20px)] max-w-[366px]  font-semibold text-black">
          Shop, Resell Products and Earn from{" "}
          <span className="text-[#F2684A]">Kamel</span>
        </h2>

        <section className="gap-[10.7px] flex  ">
          <GooglePlay className="max-[552px]:w-[76px]" />
          <AppStore className="max-[552px]:w-[76px]" />
        </section>
      </div>
    </section>
  );
};
