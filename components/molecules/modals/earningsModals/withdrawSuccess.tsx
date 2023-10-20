import React from "react";
import { GrFormClose } from "react-icons/gr";
import { Success } from "@/components/icons/success";

function WithdrawSuccess() {
  return (
    <div className="w-[90vw] md:w-[720px] py-8 md:py-5 px-7">
      <div>
        <div className="flex justify-end">
          <GrFormClose
            size={20}
            color="#000000"
            className="bg-[#AEAEAE80] rounded-full md:w-[44px] md:h-[44px] w-[18.36px] h-[18.36px]"
          />
        </div>
        
        <div className="flex flex-col justify-center items-center w-full ">
        <div className="flex flex-col justify-center items-center w-full gap-y-5 md:gap-y-2 md:mb[3%] mb-[6%]">
          <Success />
          <h1 className="text-[15px] md:text-[32px] font-semibold">Done</h1>
          <p className="w-[300px] md:w-[394px]  text-[12px] md:text-[14px] font-medium text-[#00000080] text-center">
            Your payout of NGN 10,000 to TESLIM FOLARIN has been initiated
            successfully. Your bank account will be credited accordingly!
          </p>
        </div>

        <button className="h-[40px] w-full bg-[#155F5B] text-[14px] md:text-[18.82px] rounded-[3.92px] text-[#F2EFEA] flex justify-center items-center md:h-[56.24px] text-center">
            Got it
          </button>

        </div>

      </div>
    </div>
  );
}

export default WithdrawSuccess;
