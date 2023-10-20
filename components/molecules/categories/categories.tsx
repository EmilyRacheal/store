import React, { useState } from "react";
import { Icon1 } from "@/components/icons/categories/icon1";
import { Icon2 } from "@/components/icons/categories/icon2";
import { Icon3 } from "@/components/icons/categories/icon3";
import { Icon4 } from "@/components/icons/categories/icon4";
import { Icon5 } from "@/components/icons/categories/icon5";
import { Icon6 } from "@/components/icons/categories/icon6";
import SearchInputBox from "@/atoms/searchInput/searchInputBox";

interface listImgprop {
  name?: string;
  icon?: React.ReactNode;
  isFixed?: boolean;
}

const Categories: React.FC<listImgprop> = ({ isFixed }) => {
  const [category, setCategory] = useState<string>("Promoted");

  const listData: listImgprop[] = [
    // { name: "For You", icon: <Icon1 /> },
    {
      name: "Promoted",
      icon: (
        <Icon2
          color={category === "Promoted" ? "#fff" : "#155F5B"}
          color2={category === "Promoted" ? "#155F5B" : "#fff"}
        />
      ),
    },
    {
      name: "New Listings",
      icon: (
        <Icon3
          color={category === "New Listings" ? "#fff" : "#155F5B"}
          color2={category === "New Listings" ? "#155F5B" : "#fff"}
        />
      ),
    },
    {
      name: "Best Sellers",
      icon: (
        <Icon4
          color={category === "Best Sellers" ? "#fff" : "#155F5B"}
          color2={category === "Best Sellers" ? "#155F5B" : "#fff"}
        />
      ),
    },
    {
      name: "Discounted",
      icon: (
        <Icon5
          color={category === "Discounted" ? "#fff" : "#155F5B"}
          color2={category === "Discounted" ? "#155F5B" : "#fff"}
        />
      ),
    },
    {
      name: "Low On Stock",
      icon: (
        <Icon6
          color={category === "Low On Stock" ? "#fff" : "#155F5B"}
          color2={category === "Low On Stock" ? "#155F5B" : "#fff"}
        />
      ),
    },
    {
      name: "Clothing",
      icon: (
        <Icon2
          color={category === "Clothing" ? "#fff" : "#155F5B"}
          color2={category === "Clothing" ? "#155F5B" : "#fff"}
        />
      ),
    },
    {
      name: "Accessories",
      icon: (
        <Icon3
          color={category === "Accessories" ? "#fff" : "#155F5B"}
          color2={category === "Accessories" ? "#155F5B" : "#fff"}
        />
      ),
    },
    {
      name: "Shoes",
      icon: (
        <Icon4
          color={category === "Shoes" ? "#fff" : "#155F5B"}
          color2={category === "Shoes" ? "#155F5B" : "#fff"}
        />
      ),
    },
    {
      name: " Electronics",
      icon: (
        <Icon5
          color={category === "Electronics" ? "#fff" : "#155F5B"}
          color2={category === "Electronics" ? "#155F5B" : "#fff"}
        />
      ),
    },
    {
      name: "Personal care",
      icon: (
        <Icon6
          color={category === "Personal care" ? "#fff" : "#155F5B"}
          color2={category === "Personal care" ? "#155F5B" : "#fff"}
        />
      ),
    },
    {
      name: "Home  & Kitchen",
      icon: (
        <Icon6
          color={category === "Home  & Kitchen" ? "#fff" : "#155F5B"}
          color2={category === "Home  & Kitchen" ? "#155F5B" : "#fff"}
        />
      ),
    },
    {
      name: "Shoes",
      icon: (
        <Icon4
          color={category === "Shoe" ? "#fff" : "#155F5B"}
          color2={category === "Shoe" ? "#155F5B" : "#fff"}
        />
      ),
    },
    {
      name: "Electronics",
      icon: (
        <Icon5
          color={category === "Electronics" ? "#fff" : "#155F5B"}
          color2={category === "Electronics" ? "#155F5B" : "#fff"}
        />
      ),
    },
    {
      name: "Personal care",
      icon: (
        <Icon6
          color={category === "Personal care" ? "#fff" : "#155F5B"}
          color2={category === "Personal care" ? "#155F5B" : "#fff"}
        />
      ),
    },
    {
      name: "Home  & Kitchen",
      icon: (
        <Icon6
          color={category === "Home  & Kitchen" ? "#fff" : "#155F5B"}
          color2={category === "Home  & Kitchen" ? "#155F5B" : "#fff"}
        />
      ),
    },
  ];

  return (
    <>
      <div
        className={`w-full px-[4%] mt-[30px] block sm:hidden ${
          isFixed === true ? "hidden" : "block"
        } `}
      >
        <SearchInputBox
          placeholder="What do you want to sell today?"
          bg="bg-[#fff]"
          height="h-[41px]"
        />
      </div>

      <div
        className={`w-full ${
          isFixed ? "mt-0" : " mt-[20px]"
        } bg-[#fff] py-[20px] md:py-[0px] mx-auto max-w-[1150px]`}
      >
        <div className="w-full flex px-[4%] md:px-[3%] gap-x-5 overflow-x-auto no-scrollbar category scroll-hidden ">
          {listData.map((item: any) => {
            return (
              <div
                className="flex cursor-pointer justify-center items-center flex-col"
                onClick={() => setCategory(item.name)}
              >
                <div className="flex justify-center items-center rounded-[50%] ">
                  {item.icon}
                </div>
                <p className="text-[11.98px] mt-[8px] whitespace-nowrap ">
                  {item?.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
