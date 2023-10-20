import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { VscCircleSlash } from "react-icons/vsc";
import { FiUserX } from "react-icons/fi";
import { LuFlag } from "react-icons/lu";
import { GoodTick, Store } from ".";

const searchArr = ["T-shirt", "Rebel Tshirt", "Business Tshirt"];
const storeList = [
  {
    store_name: "Nana’s Tshirt Store",
    location: "Abuja, Nigeria",
  },

  {
    store_name: "Hajjo’s Tshirt Store",
    location: "Lagos, Nigeria",
  },
];

export const SearchDropdown = () => {
  return (
    <div className="pb-[clamp(16px,1.6vw,20px)] pt-[clamp(7px,0.7vw,10px)] w-[653px] max-[846px]:w-[90vw] px-[24px]">
      {searchArr.map((item, id) => (
        <div className="flex flex-col  py-[clamp(13px,1.4vw,21px)] border-b ">
          <p className=" text-[clamp(13px,1.1vw,16px)]  font-medium text-black ">
            {item}
          </p>
        </div>
      ))}

      {storeList.map((item) => (
        <div className="flex flex-col  py-[clamp(13px,1.4vw,21px)] border-b ">
          <section className="flex gap-2">
            <Store />
            <section className=" flex flex-col gap-1">
              <div className=" flex gap-2  items-center">
                <h4 className=" text-black text-[clamp(16px,1.4vw,20px)] font-semibold">
                  {item.store_name}
                </h4>
                <GoodTick />
              </div>

              <p className="text-[clamp(13px,1.1vw,16px)] font-normal text-[#4F4F4F]">
                {item.location}
              </p>
            </section>
          </section>
        </div>
      ))}
    </div>
  );
};
