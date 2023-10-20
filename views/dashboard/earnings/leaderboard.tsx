import React from "react";
import DashboardWrapper from "@/molecules/layout/dashboardWrapper/dashboardWrapper";
import GoBack from "@/atoms/goBackBtn/goBack";
import Image from "next/image";
import { UseWidth } from "@/utils/useWidh";

const Leaderboard = () => {
  const { screenWidth } = UseWidth();
  return (
    <DashboardWrapper hasBorder={screenWidth <= 600 ? false : true}>
      <div>
        <div className="flex justify-between items-center px-[4%] pt-[40px] pb-[20px]">
          <GoBack />
          <div className="bg-[#F2EFEA] py-[0px] px-[10px] rounded-[5px]">
            <p className=" text-[12px] md:text-[18px] flex gap-x-[33px] items-center">
              Current Position:{" "}
              <span className="text-[#F2684A] font-semibold">1</span>
            </p>
          </div>
        </div>

        <div className="w-full h-[30px] hidden md:block border border-b-0 border-x-0 border-[#00000050]" />

        <div className="px-[4%]">
          <h1 className="font-semibold text-[18px] md:text-[24px] mt-[20px] md:mt-0 mb-[3%]">
            Leaderboard
          </h1>
          <div className="pb-[10px] mt-[20px] md:mt-0 grid grid-cols-4 gap-4 text-[12px] md:text-[16px] font-semibold text-[#00000080]">
            <p>Position</p>
            <p>Reseller</p>
            <p>Level</p>
            <p>Sales (#)</p>
          </div>

          <div className="w-full h-[30px] hidden md:block border border-b-0 border-x-0 border-[#00000050]" />

          {[...Array(6)].map((_: any) => {
            return (
              <div className="pb-[3%] mt-[10px] pt-[3%] items-center grid grid-cols-4 gap-4 text-[16px] md:border-0 border border-b-0 border-x-0 border-[#00000050] font-semibold  bg-[#fff] ">
                <p className="text-[10px] md:text-[20px] text-[#0B0E20] font-semibold">
                  #1
                </p>
                <div className="flex gap-x-2 items-center">
                  <Image
                    src={require("../../../assets/userimage.png")}
                    alt=""
                    className="rounded-full"
                  />{" "}
                  <p className="text-[10px] md:text-[16.07px] font-semibold">
                    Johndoe{" "}
                  </p>
                </div>

                <p className="text-[10px] md:text-[20px] font-medium">
                  “The Zenith”
                </p>
                <p className="text-[10px] md:text-[20px] font-medium">
                  NGN 50,000,000.00
                </p>
              </div>
            );
          })}

          <div className="w-full md:block hidden h-[30px] border border-b-0 border-x-0 border-[#00000050]" />
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Leaderboard;
