import React from "react";
import Image from "next/image";
import { BiImages } from "react-icons/bi";

const ExploreCard = () => {
  return (
    <div className="w-[100%] relative">
      <Image
        alt="card"
        src={require("@/assets/cardImage.png")}
        // width={100}
        // height={100}
        className="w-full h-fit object-cover"
      />

      <BiImages
        size={22}
        color="#fff"
        className="absolute top-[10px] right-[10px]"
      />
    </div>
  );
};

export default ExploreCard;
