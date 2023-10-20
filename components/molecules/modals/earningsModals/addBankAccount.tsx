import React from "react";
import { GrFormClose } from "react-icons/gr";
import HorizontalRule from "@/atoms/horizontalRule/horizontalRule";
import Input from "@/atoms/Input/input";
import SelectInputBox from "@/atoms/selectInput/selectInputBox";
import { banks } from "@/utils/banksData";

const AddBankAccount = () => {
  return (
    <div className="w-[90vw] md:w-[564.62px] py-8 md:py-5 px-7">
      <div>
        <div className="flex w-full justify-between items-center">
          <h1 className="text-[#232323] text-[14px] md:text-[16px] font-semibold">
            Add bank account{" "}
          </h1>
          <GrFormClose
            color="#000000"
            className="bg-[#AEAEAE80] md:w-[34.5px] md:h-[34.5px] rounded-full w-[18.36px] h-[18.36px]"
          />
        </div>

        <div className="w-[100%] pt-3">
          <HorizontalRule />
        </div>

        <div>
          <div className="w-full ">
            <SelectInputBox
              labelSize="text-[12px] md:text-[17.57px]"
              height="h-[31.71px] md:h-[50px]"
              hasLabel
              label="Bank Account"
              data={banks}
              textSize="text-[10px] md:text-[14px]"
            />
          </div>
          <div className="mt-[15px]">
            <Input
              labelSize="text-[12px] md:text-[17.57px]"
              label="Account Number"
              height="h-[31.71px] md:h-[50px]"
              placeholder="0944567700"
              textSize="text-[10px] md:text-[14px]"
            />
          </div>
          <div className="mt-[15px] ">
            <Input label="Full Name" 
             labelSize="text-[12px] md:text-[17.57px]"
             height="h-[31.71px] md:h-[50px]"
             textSize="text-[10px] md:text-[14px]"/>
          </div>

          <div className="mt-[7%]">
            <button className="h-[40px] w-full bg-[#155F5B] text-[14px] md:text-[18.82px] rounded-[3.92px] text-[#F2EFEA] flex justify-center items-center md:h-[56.24px] text-center">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBankAccount;
