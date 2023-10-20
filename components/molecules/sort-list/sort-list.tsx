import React from "react";
import { Divider } from "@mantine/core";

interface Prop {
  tag?: boolean;
  sortBy?: boolean;
}

const SortList = () => {
  const tags = ["All", "Local Prints", "Oxford Prints", "Sneakers designs"];
  const sort = ["Tags", "Lowest price", "Highest price", "A - Z", "Z - A"];

  return (
    <div className="w-full">
      <div className="w-full">
        <p className="text-[#155F5B] font-[600] text-[20px] mb-[15px] ">Tags</p>

        {tags.map((item: any) => {
          return (
            <div className="flex items-center gap-x-[10px] mt-[15px]">
              <input type="radio" name="" id="" className="customRadioInput" />
              <p className="">{item}</p>
            </div>
          );
        })}
      </div>

      <Divider my="sm" className="mt-[35px]" />

      <div className="w-full mt-[30px]">
        <p className="text-[#155F5B] font-[600] text-[20px] mb-[15px] ">
          Sort by
        </p>

        {sort.map((item: any) => {
          return (
            <div className="flex items-center gap-x-[10px] mt-[15px]">
              <input type="radio" name="" id="" className="customRadioInput" />
              <p className="">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SortList;
