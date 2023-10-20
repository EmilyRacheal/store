import React from "react";
import { AppStore, GooglePlay } from ".";

export const CaravanSlide = () => {
  return (
    <main className="flex px-[clamp(10px,5vw,72px)]   justify-between items-center bg-[#78C9C4] border-b-[0.5px] border-b-[rgba(0,0,0,0.50)] h-[196px] max-[552px]:h-[124px]">
      <div className="flex flex-col gap-[19px] max-[552px]:gap-0 w-[50%] ">
        <section className="flex flex-col gap-2 max-[552px]:gap-0">
          <p className=" text-[clamp(7px,2.2vw,20px)]  font-semibold  text-black  ">
            Join the <span className="text-white"> Caravan</span>
          </p>

          <p className=" text-[clamp(7px,2.2vw,20px)] font-medium text-[rgba(0,0,0,0.50)] ">
            Shop, Resell Products & Earn from Kamel
          </p>
        </section>
        <section className="gap-[10.7px] flex">
          <GooglePlay className="max-[552px]:w-[76px]" />
          <AppStore className="max-[552px]:w-[76px]" />
        </section>
      </div>
      <figure className=" flex-1 h-full ">
        <img
          className=" w-full h-full object-cover "
          src="/images/slider_google.svg"
        />
      </figure>
    </main>
  );
};
