import React from "react";
import Image from "next/image";

const DeleteAccount = () => {
  return (
    <div className="md:w-[497px] h-[386.81px] w-[303.7px] flex flex-col items-center justify-center">
      <div className="w-full px-7 py-7 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src={require("@/assets/confusedimg.png")}
            alt=""
            className="w-[131.38px] h-[131.38px]"
          />
          <div className="gap-y-4 flex flex-col justify-center mt-[5px] items-center">
            <p className="text-[#0B0E20] text-center md:text-[22.87px] text-[13.98px] font-bold  ">
              Are you sure you want to delete your account ?
            </p>
            <p className="text-[#0B0E2080] md:text-[18px] text-[11px]">
              This process is not reversible
            </p>
          </div>
          <div className="flex justify-between w-full pt-9">
            <button className="w-full max-w-[78.33px] md:max-w-[127px] md:max-h-[52px] rounded-[6.11px] h-full py-3 flex items-center justify-center max-h-[31.67px] bg-[#00000033] text-[13.98px] text-[#F2EFEA] font-medium">
              Cancel
            </button>
            <button className="w-full max-w-[78.33px] md:max-w-[127px] md:max-h-[52px] rounded-[6.11px] h-full py-3 flex items-center justify-center max-h-[31.67px] bg-[#FF0000] text-[13.98px] text-[#F2EFEA] font-medium">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
