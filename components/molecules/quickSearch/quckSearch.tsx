import React from "react";
import Image from "next/image";
import SearchInputBox from "@/atoms/searchInput/searchInputBox";
import SelectInputBox from "@/atoms/selectInput/selectInputBox";
import SecureIcon from "@/icons/secureIcon";

function TopNavBar() {
  return (
    <div className="py-[2%]  w-full">
      <div className="w-full h-[30px] border border-b-0 border-x-0 border-[#00000050] " />
      <div className="w-full mx-[auto] max-w-[1150px]">
        <div className="flex px-[4%] md:px-[3%] justify-between">
          <div className="flex justify-between md:w-full w-fit  max-w-[400px] bg-[#B1C1AC26] rounded-[5px] h-[33px] md:h-[39px] items-center px-[2%]">
            <div className="flex gap-x-3">
              <SecureIcon/>
              <p className="text-[#00000080] text-[10px] md:text-[14px]">
                Shop securely with kamel Escrow
              </p>
            </div>
            <p className="text-[#155F5B] text-[12px] underline hidden md:flex ">
              Learn More
            </p>
          </div>

          <div className="flex sm:gap-x-[20px] gap-x-[10px] items-center ">
            <div className="w-[162px] hidden md:flex ">
              <SearchInputBox />
            </div>

            <p className="text-[10px] md:text-[12px] font-medium">Sort by:</p>

            <div className="sm:w-[108px] w-[90px] md:w-[114.633px]">
              <SelectInputBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
