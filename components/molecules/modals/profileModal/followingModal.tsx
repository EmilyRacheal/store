import React from "react";
import { GrFormClose } from "react-icons/gr";
import { Store } from "..";
import { UnfollowIcon } from "@/icons/home/unfollowIcon";

function FollowingModal() {
  return (
    <div className="w-[90vw] md:w-[751px] py-7 px-5 ">
      <div className="w-full ">
        <div className="flex w-full pb-7 justify-between items-center">
          <h1 className="text-[#232323] text-[12.02px] md:text-[24px] font-semibold">
            Following
          </h1>
          <GrFormClose
            color="#000000"
            className="bg-[#AEAEAE80] rounded-full md:w-[44px] md:h-[44px] w-[18.36px] h-[18.36px]"
          />
        </div>
        <div>
          <div className="w-full flex justify-between ">
            <div className="flex">
              <Store />
              <div className="ml-3">
                <h1 className="font-semibold text-[12px] md:text-[19.02px] md:font-semibold">Emmy Shoes</h1>
                <p className="text-[9.34px] text-[#4F4F4F] md:text-[15.85px]">Abuja, Nigeria</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2 border w-[86.49px] md:w-[172.76px] md:h-[53.89px] border-[#BDBDBD] rounded-[5px] justify-center h-[26.98px]">
             <UnfollowIcon />
             <p className="text-[#4F4F4F] text-[10px] md:text-[19.02px] font-medium">Unfollow</p>
              {/* <div className="absolute right-0 mt-2 py-2 w-fit bg-white border rounded-lg shadow-lg z-10"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowingModal;
