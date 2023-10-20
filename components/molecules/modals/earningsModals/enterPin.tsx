// import React from "react";
import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import OtpInput from "react-otp-input";

function EnterPin() {
  const [otp, setOtp] = useState("");

  return (
    <div className="w-[90vw] md:w-[564.62px] py-5 px-7">
      <div>
        <div className="flex justify-end">
          <GrFormClose
            size={20}
            color="#000000"
            className="bg-[#AEAEAE80] rounded-full md:w-[44px] md:h-[44px] w-[18.36px] h-[18.36px]"
          />
        </div>
        <div>
          <h1 className="text-[12px] md:text-[18.82px] font-semibold">
            Enter PIN
          </h1>
          <p className="text-[12px] md:text-[14.12px] text-[#00000080]">
            Please enter your transaction PIN to confirm withdrawal
          </p>
        </div>
        <div className="py-5">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              border: "1px solid #1C0F1380",
              width: "35px",
              height: "35px",
            }}
          />
        </div>
        <p className="text-[12px] md:text-[12.55px] font-semibold text-[#155F5B] underline ">
          Forgot PIN?
        </p>

        <div className="w-full py-3 md:py-5 max-w-[#155F5B] border border-[#98A886] mb-[10%] mt-[5%] rounded-[3.92px]">
          <div className="px-6 flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-2">
              <p className="text-[12px] md:text-[15.68px] text-[#4F4F4F80]">
                Withdrawal fee:
              </p>
              <p className="text-[12px] md:text-[18.82px] font-medium">
                NGN 1500.00
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-[12px] md:ext-[15.68px] text-[#4F4F4F80]">
                You will be credited
              </p>
              <p className="text-[12px]  md:text-[18.82px] font-medium">
                NGN 8500.00
              </p>
            </div>
          </div>
        </div>

        <button className="h-[40px] w-full bg-[#155F5B] text-[14px] md:text-[18.82px] rounded-[3.92px] text-[#F2EFEA] md:h-[56.24px] text-center">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default EnterPin;
