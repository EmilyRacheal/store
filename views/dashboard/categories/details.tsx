import React from "react";
import { Header } from "@/atoms/header";
import GoBack from "@/atoms/goBackBtn/goBack";
import SortList from "@/molecules/sort-list/sort-list";
import ProductCard from "@/atoms/cards/productCard";
import SelectInputBox from "@/atoms/selectInput/selectInputBox";
import { Breadcrumbs, Anchor } from "@mantine/core";

const CategoriesDetails = () => {
  const items = [
    { title: "Clothing", href: "#" },
    { title: "Men Ethnic Fashion", href: "#" },
    { title: "Kaftan", href: "#" },
  ].map((item, index) => (
    <Anchor
      href={item.href}
      key={index}
      className="text-[#00000060] text-[14px] sm:text-[16px]"
    >
      {item.title}
    </Anchor>
  ));

  return (
    <div className="w-full">
      <div className="w-full fixed top-0">
        <Header hasBorder={true} />
      </div>

      <div className="mt-[120px] px-[5%]">
        <div className="mt-[30px] gap-x-[50px] flex">
          <div className="w-[190px] fixed ">
            <GoBack />

            <div className="w-full mt-[30px] sm:block hidden ">
              <SortList />
            </div>
          </div>

          <div className="flex-1 sm:ml-[200px] mt-[50px] ">
            <div className="flex justify-between items-center">
              <div className="px-[4%]">
                <Breadcrumbs separator=">" mt="xs">
                  {items}
                </Breadcrumbs>
              </div>

              <div className=" items-center gap-x-[20px] md:flex hidden ">
                <p className="text-[10px] md:text-[12px] font-[700]">Sort by</p>

                <div className="sm:w-[108px] w-[90px] md:w-[114.633px]">
                  <SelectInputBox />
                </div>
              </div>
            </div>

            <div
              className={`  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-y-[35px] gap-x-[25px]  lg:gap-x-[5px] pr-[0%] lg:pr-[0px] px-[0%] md:px-[2%] mx-auto max-w-[1150px] mt-[40px] mb-[40px] `}
            >
              {[...Array(15)].map(() => {
                return (
                  <div className="">
                    <ProductCard />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesDetails;
