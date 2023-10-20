import React from "react";
import CategoresWrapper from "@/molecules/layout/categoriesWrapper/categoriesWrapper";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { UseWidth } from "@/utils/useWidh";

const Shops = () => {
  const { screenWidth } = UseWidth();

  return (
    <CategoresWrapper>
      <div className="w-full sm:px-[4%] pb-[30px] ">
        {[...Array(15)].map((item) => {
          return (
            <div className="w-full flex items-center justify-between bg-[#fff] px-[4%] sm:px-0 sm:bg-transparent border border-x-0 border-t-0 mt-[20px] sm:mt-[30px] sm:border-b-[#00000050] pt-[15px] sm:pt-0 pb-[15px] ">
              <div className="flex gap-x-[20px] items-center">
                <Image
                  alt="shop"
                  src={require("@/assets/shopLogo.png")}
                  className="w-[36px] h-[36px] sm:w-[65px] sm:h-[65px] rounded-[50%]"
                />
                <div className="">
                  <p className=" text-[12.5px] sm:text-[20px] flex items-center gap-x-[10px] font-[600] text-[#000]">
                    Nana’s Tshirt Store <MdVerified color="#155F5B" size={21} />
                  </p>
                  <p className="text-[#4F4F4F] text-[10px] sm:text-[20px] font-[400]">
                    Abuja, Nigeria
                  </p>
                </div>
              </div>

              <Link href="/shops/123456678">
                <GoArrowUpRight
                  size={screenWidth <= 600 ? 16 : 30}
                  color="#4F4F4F"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </CategoresWrapper>
  );
};

export default Shops;
