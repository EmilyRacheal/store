import React, { useContext } from "react";
import { Header } from "@/atoms/header";
import {
  AiOutlinePlusCircle,
  AiOutlineShareAlt,
  AiFillStar,
} from "react-icons/ai";
import PrevRoute from "@/molecules/prevRoute/prevRoute";
import Image from "next/image";
import ExploreCard from "@/atoms/cards/exploreCard";
import { UseWidth } from "@/utils/useWidh";
import { IModalContext, ModalContext } from "@/providers";
import ViewProduct from "@/molecules/modals/view-product";

const ShopProfile = () => {
  const { setModalState } = useContext(ModalContext) as IModalContext;
  const { screenWidth } = UseWidth();

  return (
    <div className="w-full">
      <Header hasBorder={screenWidth <= 600 ? false : true} />

      <div className="w-full px-[4%] pt-[10px] sm:px-[6%] bg-[#F9F9F9] sm:bg-transparent">
        <PrevRoute
          searchText="Search shop"
          withSearch={true}
          noPadding={screenWidth <= 600 ? false : true}
        />

        <div className="w-full mt-[40px]">
          <div className="flex w-full justify-between gap-x-[15px] items-end border border-[#E0E0E0] border-x-0 border-t-0  pb-[30px]">
            <div className="flex items-end gap-x-[30px]">
              <div className="flex w-fit gap-x-[10px] sm:gap-x-[20px] items-center">
                <Image
                  alt="shop"
                  src={require("@/assets/shopLogo.png")}
                  className=" w-[32px] sm:w-[85px] h-[32px] sm:h-[85px] rounded-[50%]"
                />
                <div className="">
                  <p className="text-[10px] sm:text-[20px] flex items-center gap-x-[10px] font-[600] text-[#000] whitespace-nowrap ">
                    Nana’s Tshirt Store
                  </p>
                  <p className="text-[#000] text-[8px] sm:text-[20px] font-[600]">
                    10{" "}
                    <span className="text-[#4F4F4F] font-[400]">Followers</span>
                  </p>

                  <p className="text-[#2573E4] text-[6px] sm:text-[14px] font-[500]">
                    https://damisa.kamel.shop
                  </p>
                </div>
              </div>

              <div className="flex gap-x-[15px]">
                <div className="bg-[#EBEBEB] text-[#4F4F4F] border sm:border-[#BDBDBD] cursor-pointer w-[50px] sm:w-[131px] h-[16px] sm:h-[34px] rounded-[3px] sm:rounded-[9px] gap-x-[5px] sm:gap-x-[10px] flex justify-center items-center text-[6px] sm:text-[11px] font-[500] ">
                  <AiOutlinePlusCircle size={screenWidth <= 550 ? 8 : 16} />{" "}
                  Follow
                </div>

                <div className="bg-[#EBEBEB] text-[#4F4F4F] whitespace-nowrap  border sm:border-[#BDBDBD] cursor-pointer w-fit sm:w-[131px] h-[16px] sm:h-[34px] rounded-[3px] sm:rounded-[9px] gap-x-[5px] sm:gap-x-[10px] flex justify-center items-center text-[6px] sm:text-[11px] font-[500] ">
                  <AiOutlineShareAlt size={screenWidth <= 550 ? 8 : 16} /> Share
                  Profile
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex items-center gap-x-[5px] sm:gap-x-[10px]">
                <p className="text-[8px] sm:text-[20px] text-[#000]">4.0</p>
                <div className="flex gap-x-[3px] sm:gap-x-[5px]">
                  <AiFillStar
                    color="#FCB900"
                    size={screenWidth <= 550 ? 8 : 16}
                  />
                  <AiFillStar
                    color="#FCB900"
                    size={screenWidth <= 550 ? 8 : 16}
                  />
                  <AiFillStar
                    color="#FCB900"
                    size={screenWidth <= 550 ? 8 : 16}
                  />
                  <AiFillStar
                    color="#FCB900"
                    size={screenWidth <= 550 ? 8 : 16}
                  />
                  <AiFillStar
                    color="#D9D9D9"
                    size={screenWidth <= 550 ? 8 : 16}
                  />
                </div>
              </div>

              <p className="text-[#00000050] text-[5px] sm:text-[12px] ">
                23 reviews
              </p>
            </div>
          </div>

          <div className="w-full flex mt-[20px]">
            <div className="hidden md:block w-[250px]">
              <div className="w-full">
                <p className="text-[#155F5B] font-[600] text-[20px] mb-[15px] ">
                  Categories
                </p>

                <div className="flex gap-x-[10px] mt-[15px]">
                  <input type="radio" name="" id="" />
                  <p className="">All</p>
                </div>

                <div className="flex gap-x-[10px] mt-[15px]">
                  <input type="radio" name="" id="" />
                  <p className="">Local Prints</p>
                </div>

                <div className="flex gap-x-[10px] mt-[15px]">
                  <input type="radio" name="" id="" />
                  <p className="">Oxford Prints</p>
                </div>

                <div className="flex gap-x-[10px] mt-[15px]">
                  <input type="radio" name="" id="" />
                  <p className="">Sneakers designs</p>
                </div>
              </div>

              <div className="w-full mt-[30px]">
                <p className="text-[#155F5B] font-[600] text-[20px] mb-[15px] ">
                  Sort by
                </p>

                <div className="flex gap-x-[10px] mt-[15px]">
                  <input type="radio" name="" id="" />
                  <p className="">Categories</p>
                </div>

                <div className="flex gap-x-[10px] mt-[15px]">
                  <input type="radio" name="" id="" />
                  <p className="">Lowest price</p>
                </div>

                <div className="flex gap-x-[10px] mt-[15px]">
                  <input type="radio" name="" id="" />
                  <p className="">Highest price</p>
                </div>

                <div className="flex gap-x-[10px] mt-[15px]">
                  <input type="radio" name="" id="" />
                  <p className="">A - Z</p>
                </div>

                <div className="flex gap-x-[10px] mt-[15px]">
                  <input type="radio" name="" id="" />
                  <p className="">Z - AI</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="hidden sm:flex">
                <p className="">
                  99 <span>Matching Products </span>
                </p>
              </div>

              <div className="flex sm:hidden scroll-hidden overflow-auto gap-x-[15px]">
                <p className="h-[24px] text-[#fff] font-medium whitespace-nowrap flex items-center justify-center p-[15px] w-fit text-[11px] rounded-[22px] bg-[#000] border border[#4F4F4F]">
                  All
                </p>
                <p className="h-[24px] text-[#4F4F4F] font-medium whitespace-nowrap flex items-center justify-center p-[15px] w-fit text-[11px] rounded-[22px] bg-[#fff] border border[#4F4F4F]">
                  Adinkra Shirts
                </p>
                <p className="h-[24px] text-[#4F4F4F] font-medium whitespace-nowrap flex items-center justify-center p-[15px] w-fit text-[11px] rounded-[22px] bg-[#fff] border border[#4F4F4F]">
                  Sam Shirts
                </p>

                {/* <p className="h-[24px] whitespace-nowrap flex items-center justify-center p-[15px] w-fit text-[11px] rounded-[22px] bg-[#fff] border border[#4F4F4F]">
                  Bishop Shirts
                </p> */}
              </div>

              <div className="mt-[15px]">
                <div className="flex flex-wrap gap-x-[2%] gap-y-[12px] sm:gap-y-[20px] w-full justify-between">
                  {[...Array(15)].map(() => {
                    return (
                      <div
                        className="w-[32%]"
                        onClick={() =>
                          screenWidth <= 800 &&
                            setModalState({
                                component: <ViewProduct showReviews={false} />,
                                opened: true,
                              })
                        }
                      >
                        <ExploreCard />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProfile;
