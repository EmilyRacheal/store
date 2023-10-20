import React, { useState } from "react";
import DashboardWrapper from "@/molecules/layout/dashboardWrapper/dashboardWrapper";
import { productData } from "@/utils/categoriesData";
import { useRouter } from "next/router";

const Categories = () => {
  const [menu, setMenu] = useState<string>("Clothing");
  const router = useRouter();

  const categoriesData = [
    "Clothing",
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

  return (
    <DashboardWrapper hasBorder={true} >
      <div className="flex w-full max-w-[1200px] mx-auto  pt-7">
        <div className="max-w-fit sm:max-w-[230px] bg-[#fff] fixed overflow-auto z-10 sm:bg-transparent gap-y-[10px] sm:gap-y-[18px] flex flex-col pt-[0px] sm:pt-[45px] w-full pl-[0px] sm:pl-[15px] sm:pr-[25px] pr-0 ">
          {categoriesData.map((item) => {
            return (
              <p
                className={`sm:text-[18px] text-[10px] font-[200] pr-[10px] sm:pr-0  hover:bg-[#9FEAE645] hover:border border-y-0 border-r-0 hover:border-l-[#155F5B] py-[8px] sm:py-[3px] hover:border-l-4 pl-[10px] cursor-pointer ${
                  item === menu &&
                  "border border-y-0 border-r-0 border-l-[#155F5B] py-[3px] border-l-4 bg-[#9FEAE645]"
                } `}
                onClick={() => setMenu(item)}
              >
                {item}
              </p>
            );
          })}
        </div>

        <div className="flex flex-col gap-y-[40px]"></div>
        <div className="bg-[#F4F4F480] flex-1 px-[5%] py-[10px] flex flex-col gap-y-[40px] pt-0 sm:pt-[50px]  ml-[100px] sm:ml-[230px] sm:py-[15px] ">
          {productData.map((item) => {
            return (
              <div className="w-full ">
                <p className="font-[700] text-[14px] text-[#000] ">
                  {item.category}
                </p>

                <div className="w-full mt-[20px] gap-x-5 grid grid-cols-3 gap-y-[15px] lg:grid-cols-5 ">
                  {item.items.map((item) => {
                    return (
                      <div className="flex justify-start">
                        <div
                          className="flex flex-col justify-start items-center cursor-pointer"
                          onClick={() => router.push("/categories/details")}
                        >
                          {item.icon}
                          <p className="md:text-[14px] text-[8px] font-[500] mt-[7px] text-[#000]">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Categories;
