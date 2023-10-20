import React from "react";
import { CloseIcon } from ".";
import Image from "next/image";

const categoryList = [
  "clothing",
  "Accessories",
  "Shoes",
  "Electronics",
  "Personal Care",
  "Home & Kitchen",
  "Food & Drinks",
  "Toys & Games ",
  "School Supplies",
  "Mom & Baby ",
  "Pet Care",
  "Gym & Sport ",
  "Automobile",
  "Stationaries",
  "SME Supplies",
  "Books & Novelty",
];

export const Categories = () => {
  return (
    <div className="flex flex-col px-[50px] py-[38px] w-[1220px] overflow-auto">
      <div className=" flex justify-between border-b pb-7">
        <h2 className=" text-[32px] font-medium text-black ">Categories</h2>
        <div className=" cursor-pointer" onClick={close}>
          <CloseIcon />
        </div>
      </div>
      <div className=" grid-cols-[274px,1fr] grid overflow-auto flex-1 scroll-hidden  ">
        <div className="flex flex-col pt-12 gap-6 border-r border-r-[rgba(0,0,0,0.50] ">
          {categoryList.map((item, id) => (
            <li className="  list-none" key={id}>
              {item}
            </li>
          ))}
        </div>

        <div className=" flex flex-col gap-10">
          <div className="flex flex-col gap-[33px]">
            <h4>Shop by gender</h4>
            <div className="grid grid-cols-[repeat(5)]">
              <div className="flex flex-col">
                {/* <Image src=".images/Men" height={61} width={60} alt="men" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
