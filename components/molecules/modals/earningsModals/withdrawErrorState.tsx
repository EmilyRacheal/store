import React from 'react'
import { GrFormClose } from "react-icons/gr";
import Image from 'next/image';

function WithdrawErrorState() {
  return (
    <div className="w-[90vw] md:w-[720px] py-8 px-7">
      <div>
        <div className="flex justify-end">
          <GrFormClose
            size={20}
            color="#000000"
            className="bg-[#AEAEAE80] rounded-full md:w-[44px] md:h-[44px] w-[18.36px] h-[18.36px]"
          />
        </div>
        
        <div className="flex flex-col justify-center items-center w-full ">
        <div className="flex flex-col justify-center items-center w-full gap-y-5 mb-[10%]">
          <Image src={require("@/assets/confusedimg.png")}  alt='' />
          <h1 className="text-[14px] md:text-[32px] font-semibold">Oops!</h1>
          <p className="w-[300px] md:w-[394px]  text-[12px] md:text-[14px] font-medium text-[#00000080] text-center">
          Briefly describe the type of error to the user so they know how to trouble shoot.
          </p>
        </div>

        <button className="h-[40px] w-full bg-[#155F5B] text-[14px] md:text-[18.82px] rounded-[3.92px] text-[#F2EFEA] flex justify-center items-center md:h-[56.24px] text-center">
            Got it
          </button>

        </div>

      </div>
    </div>
  )
}

export default WithdrawErrorState