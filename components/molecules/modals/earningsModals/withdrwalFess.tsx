import React from "react";
import { GrFormClose } from "react-icons/gr";
import HorizontalRule from "@/atoms/horizontalRule/horizontalRule";

function WithdrwalFess() {
  return (
    <div className="w-[90vw] md:w-[720px] py-8 md:py-5 px-7">
      <div>
        <div className="flex w-full pb-7 justify-between items-center">
          <div>
            <h1 className="text-[#232323] text-[14px] md:text-[24px] font-semibold">
              Reselling Fees
            </h1>
            <p className="text-[12px] md:text-[18px] text-[#00000080]">
              Learn about the fees we charge resellers
            </p>
          </div>

          <GrFormClose
            color="#000000"
            className="bg-[#AEAEAE80] rounded-full md:w-[44px] md:h-[44px] w-[18.36px] h-[18.36px]"
          />
        </div>

        <div className="">
          <h1 className="text-[12px] md:text-[16px] text-[#4F4F4F] py-[5%]">
            Withdrawal charges
          </h1>
          <HorizontalRule />
          <div className="flex justify-between pb-[4%]">
            <p className="text-[12px] md:text-[20px] text-[#23232380] font-medium">
              Less than 10k
            </p>
            <p className="text-[#232323] text-[9.07px] md:text-[22.89px] font-medium">30%</p>
          </div>

          <HorizontalRule />
          <div className="w-full flex justify-center items-center">
            <p className="text-center text-[12px] md:text-[14px] text-[#00000080] max-w-[554.17px] flex justify-center items-center ">
              It is advised to accumulate your earnings to a reasonable amount
              before withdrawal to avoid too much charges 🤑
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithdrwalFess;
