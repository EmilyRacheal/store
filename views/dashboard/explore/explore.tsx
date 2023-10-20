import React from "react";
import CategoresWrapper from "@/molecules/layout/categoriesWrapper/categoriesWrapper";
import Image from "next/image";
import { BiImages } from "react-icons/bi";
import ExploreCard from "@/atoms/cards/exploreCard";
import img from "@/assets/cardImage.png";
import SelectInputBox from "@/atoms/selectInput/selectInputBox";

const Explore = () => {
  return (
    <CategoresWrapper>
      <div className="flex sm:hidden items-center justify-between px-[5%] mb-[20px] ">
        <p className="text-[10px] font-[600]">
          99 <span className="font-[400]">Products found</span>
        </p>

        <div className="sm:w-[108px] w-[90px] md:w-[114.633px] bg-[#fff] ">
          <SelectInputBox />
        </div>
      </div>

      <div className="flex flex-wrap gap-x-[2%] sm:px-[4%] gap-y-[10px] sm:gap-y-[20px] w-full justify-between pb-[100px] ">
        {[...Array(15)].map(() => {
          return (
            <div className="w-[32%]">
              <ExploreCard />
            </div>
          );
        })}
      </div>
    </CategoresWrapper>
  );
};

export default Explore;
