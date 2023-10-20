import React from "react";
import { AppStore, GooglePlay } from ".";

export const ResellerSlide = () => {
  return (
    <main className="flex px-[clamp(10px,5vw,72px)] justify-between items-center bg-[#F2684A] border-b-[0.5px] border-b-[rgba(0,0,0,0.50)] h-[196px] max-[552px]:h-[124px]">
      <div className="flex flex-col gap-[19px] max-[552px]:gap-0 w-[50%]">
        <section className="flex flex-col gap-2 max-[552px]:gap-0">
          <p className=" text-[clamp(7px,2.2vw,20px)] font-semibold  text-black   ">
            Become a <span className="text-white">Reseller</span>
          </p>

          <p className=" text-[clamp(7px,2.2vw,20px)] font-medium  text-[rgba(0,0,0,0.50)]">
            Start selling online with Zero Upfront Investment
          </p>
        </section>
        <section className="gap-[10.7px] flex">
          <GooglePlay className="max-[552px]:w-[76px]" />
          <AppStore className="max-[552px]:w-[76px]" />
        </section>
      </div>
      <figure className="flex-1 h-full">
        <img
          className="w-full h-full object-cover"
          src="/images/reseller-slide-img.svg"
        />
      </figure>
    </main>
  );
};
