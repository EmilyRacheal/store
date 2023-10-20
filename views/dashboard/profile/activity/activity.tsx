import React from "react";
import ProfileWrapper from "@/molecules/layout/profileWrapper/profileWrapper";
import Image from "next/image";

const Activity = () => {
  return (
    <ProfileWrapper>
      <div className="pb-[10px] px-[4%] md:px-0 grid grid-cols-4 gap-4 text-[16px] font-semibold text-[#00000080]">
        <p className="text-[12px] md:text-[16px] font-[600] text-[#000]">
          Product(s)
        </p>
        <p className="text-[12px] pl-[0%] md:pl-0 md:text-[16px] font-[600] text-[#000]">
          No. of Clicks
        </p>
        <p className="text-[12px] md:text-[16px] font-[600] text-[#000]">
          Sales{" "}
        </p>
        <p className="text-[12px] md:text-[16px] font-[600] text-[#000]">
          Earnings
        </p>
      </div>

      <div className="w-full h-[30px] border border-b-0 border-x-0 md:border-[#00000050]" />

      {[...Array(7)].map((item) => {
        return (
          <>
            <div className="pb-[3%] px-[4%] md:px-0 items-center grid grid-cols-4 gap-4 text-[16px] font-semibold">
              <div className="flex gap-x-2 items-center">
                <Image
                  src={require("@/assets/userimage.png")}
                  alt=""
                  className="rounded-full"
                />{" "}
                <p className="text-[10px] md:text-[16.07px] font-semibold">
                  Chelsea Boot{" "}
                </p>
              </div>

              <p className="text-[10px] pl-[10%] md:pl-0 md:text-[20px] text-[#0B0E20] font-semibold">
                1000
              </p>

              <p className="text-[10px] md:text-[20px] font-medium">500</p>
              <p className="text-[10px] md:text-[20px] font-medium">
                NGN 100,000
              </p>
            </div>

            <div className="w-full h-[30px] border border-b-0 border-x-0 md:border-[#00000050]" />
          </>
        );
      })}
    </ProfileWrapper>
  );
};

export default Activity;
