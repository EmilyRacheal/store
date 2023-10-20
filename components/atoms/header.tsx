import { Avatar, Button, Indicator } from "@mantine/core";
import { GrLocation } from "react-icons/gr";
import { LogoIcon } from "..";
import { ArrowDown2 } from "iconsax-react";
import { FaRegBell } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Prop {
  hasBorder?: boolean;
}

export const Header: React.FC<Prop> = ({ hasBorder }) => {
  // const screenWidth = window && window.screen.availWidth;

  const isLogedIn = true;
  return (
    <div
      className={`px-[clamp(26px,3.6vw,52px)] py-[22px] bg-[#fff] flex justify-between items-center ${
        hasBorder && "border"
      } border-x-0 border-t-0 border-b-[#999494]`}
    >
      <LogoIcon className="max-[552px]:w-[76px]" />

      <button className=" text-[#999494] font-normal w-fit h-[22px] md:w-[176px] sm:h-[44px] text-[8px] sm:text-[14px] flex gap-[12px] py-[10px] sm:py-[6px] border-[0.1px]  border-[#999494] bg-[#F4F4F4] hover:bg-[#F4F4F4] items-center rounded-[5px] px-[clamp(5px,2.7vw,39px)] whitespace-nowrap">
        <GrLocation size={13} />
        All Nigeria
      </button>

      <>
        {!isLogedIn ? (
          <div className="flex gap-[19px] ">
            <Button className="hidden md:block h-[44px] text-kamel-green  text-4 bg-transparent hover:bg-transparent font-medium rounded-[5px] w-[93px]  ">
              <Link href="/signup">Sign up</Link>
            </Button>
            <Button className="hidden md:block h-[44px] bg-kamel-green hover:bg-kamel-green text-white  rounded-[5px] border-[0.6px] w-[93px]">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        ) : (
          <section className="flex max-[432px]:gap-3 gap-x-[20px] items-center">
            <Indicator
              position="top-end"
              color="#E59500"
              // size={18}
              styles={{
                common: {
                  top: 4,
                  right: 8,
                },
              }}
            >
              <FaRegBell size={16} color="#4F4F4F" />
            </Indicator>

            <div className="flex gap-3 max-[786px]:hidden max-[432px]:gap-[6px] ">
              <Button className="h-[44px] text-kamel-green border-[1px] border-kamel-green text-4 bg-transparent hover:bg-transparent font-medium rounded-[5px]">
                Switch to Vendor
              </Button>
            </div>

            {/* <Avatar
              src="./images/user.svg"
              alt="user"
              // size={42}
              radius="100%"
              className="w-[42px] h-[42px] max-[552px]:max-w-[24px] max-[552px]:max-h-[24px]"
            /> */}

            <figure className=" w-[42px] max-[431px]:w-[30px] ">
              <Image
                src={require("@/assets/userimage.png")}
                alt="user"
                className="w-[20px] md:w-[35px] rounded-full h-[20px] md:h-[35px]"
              />
              {/* <img
                src="./images/user.svg"
                alt="user"
                className="w-full object-cover"
              /> */}
            </figure>

            <ArrowDown2 size={20} color="#000" />
          </section>
        )}
      </>
    </div>
  );
};
