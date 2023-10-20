import React, { useContext, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { AddIcon } from "../../../icons/home/addIcon";
import Link from "next/link";
import EnterPin from "./enterPin";
import PhoneInput from "react-phone-input-2";
import { CountrySelect } from "@/atoms/country-select/country-select";
import Input from "@/atoms/Input/input";
import { UseWidth } from "@/utils/useWidh";

const WithdrawFunds = () => {
  const [phone, setPhone] = useState("");
  const { screenWidth } = UseWidth();

  return (
    <div className="w-[90vw] md:w-[720px] px-[7%] py-7">
      <div>
        <div className="flex w-full pb-7 justify-between items-center">
          <div>
            <h1 className="text-[#232323] text-[14px] md:text-[24px] font-semibold">
              Withdraw funds
            </h1>
            <p className="text-[12px] md:text-[18px] text-[#00000080]">
              Cash-out into your bank account
            </p>
          </div>

          <GrFormClose
            size={20}
            color="#000000"
            className="bg-[#AEAEAE80] rounded-full md:w-[44px] md:h-[44px] w-[18.36px] h-[18.36px]"
          />
        </div>
        <div className="">
          <div className="w-full">
            <label htmlFor="" className="text-[14px]">
              Enter Amount
            </label>

            {/* <PhoneInput
              autoFormat={true}
              country={"ng"}
              value={phone}
              onChange={(tel) => {
                setPhone(tel);
              }}
              containerStyle={{ width: "100%", marginTop: "10px" }}
              containerClass="w-full mt-[8px] h-[50px] rounding-[10px]"
              inputClass="w-full h-full"
              inputProps={{ maxLength: "18" }}
              inputStyle={{ width: "100%", height: "100%" }}
            /> */}

            <input
              type="text"
              className="w-full bg-[#fff] border border-[#1C0F1340] rounded-[5px] h-[50px] mt-[10px] px-[5%] outline-none"
            />
          </div>
          <p className="text-[#155F5BBD] md:text-[19.29px] text-[12px] font-medium flex justify-end">
            Available balance - NGN 90,000
          </p>
        </div>

        <div className="flex w-full pt-7 justify-between items-center">
          <h1 className="text-[#4F4F4F] text-[12px] md:text-[22.5px] font-semibold">
            Select Account
          </h1>
          <div className="flex items-center gap-x-2">
            <AddIcon size={screenWidth <= 600 ? "20" : "40"} />
            <p className="text-[#4F4F4F] text-[12px] md:text-[19.29px] font-medium">
              Add account
            </p>
          </div>
        </div>

        <div className="flex w-full mt-6 mb-[10%] justify-between items-center shadow-[0px_0px_16.07442px_0px_rgba(0,0,0,0.3)] rounded-[5px]">
          <div className="px-5 w-full flex justify-between py-3 md:py-5">
            <div>
              <h1 className="text-[#323232] text-[12px] md:text-[22.5px] font-medium">
                Damisa Gianluca
              </h1>
              <div className="flex items-center gap-x-3">
                <p className="text-[12px] md:text-[19.29px] text-[#979797]">
                  090089884809
                </p>
                <div className="w-[5.73px] h-[5.73px] md:w-[14.47px] rounded-full md:h-[14.47px] bg-[#155F5B]" />
                <p className="text-[12px] md:text-[19.29px] text-[#979797]">
                  Access Bank
                </p>
              </div>
            </div>

            <input
              type="radio"
              className="w-[12.74px] h-[15px] md:w-[32.15px] md:h-[15px]"
            />
          </div>
        </div>

        {/* <Link href="/EnterPin"> */}
        <button className="h-[40px] w-full bg-[#155F5B] text-[12px] rounded-[3.92px] md:text-[24px] text-[#F2EFEA] md:h-[56.24px] text-center">
          Next
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default WithdrawFunds;
