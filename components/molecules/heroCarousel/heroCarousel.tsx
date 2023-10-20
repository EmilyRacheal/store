import React from "react";
import Image from "next/image";
import woman from "@/assets/woman.png";

const HeroCarousel: React.FC = () => {
  return (
    <div className="w-full mb-[30px]">
      <div className="w-full relative flex justify-between bg-[#78C9C4] pl-[5%] py-[30px] ">
        <div className="">
          <h3 className=" text-[32px]">
            Join the <span className="text-[#fff]">Caravan</span>
          </h3>
          <p className="text-[20px] text-[#00000050]">
            Shop, Resale Products & Earn from Kamel
          </p>
          <div className="flex gap-x-[15px] mt-[15px]">
            <Image
              src={require("../../assets/appstorebtn.png")}
              alt="icon"
              className="h-[45px]"
            />
            <Image
              src={require("../../assets/googlebtn.png")}
              alt="icon"
              className="h-[45px]"
            />
          </div>
        </div>

        <div className="absolute top-0 right-0">
          <Image
            src={require("@/assets/woman.png")}
            alt="woman"
            className=" right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
