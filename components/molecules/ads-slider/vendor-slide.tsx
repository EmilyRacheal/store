import React from "react";
import { AppStore, GooglePlay } from ".";

export const VendorSlide = () => {
  return (
    <section
      className="px-[clamp(10px,5vw,72px)] py-5 bg-cover bg-no-repeat bg-[top_center] flex border-b-[0.5px] border-b-[rgba(0,0,0,0.50)] h-[196px] max-[552px]:h-[124px]"
      style={{ backgroundImage: "url('/images/vendor-slide-img.svg')" }}
    >
      <div className="flex flex-col gap-[19px]max-[552px]:gap-0 w-[50%]  ">
        <section className="flex flex-col gap-2  max-[552px]:gap-0">
          <p className="font-semibold text-white text-[clamp(7px,2.2vw,20px)]">
            Are you a{" "}
            <span className="text-[#F5A623]">
              Vendor <span className=" text-[#FBFBFB]">?</span>
            </span>
          </p>

          <p className="text-[clamp(7px,2.2vw,20px)] font-medium  text-[#FBFBFB]">
            Promote Your Products Through Thousands of Resellers
          </p>
        </section>
        <section className="gap-[10.7px] flex">
          <GooglePlay className="max-[552px]:w-[76px]" />
          <AppStore className="max-[552px]:w-[76px]" />
        </section>
      </div>
    </section>
  );
};
