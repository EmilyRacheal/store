import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import { UseWidth } from "@/utils/useWidh";

const reviewData = [
  {
    color: "bg-[#00FF47]",
    type: "Excellent",
    ratio: "w-[90%]",
  },
  {
    color: "bg-[#B2FB00]",
    type: "Good",
    ratio: "w-[70%]",
  },
  {
    color: "bg-[#FDE903]",
    type: "Average",
    ratio: "w-[60%]",
  },
  {
    color: "bg-[#FF6700]",
    type: "Below Average",
    ratio: "w-[40%]",
  },
  {
    color: "bg-[#FF0000]",
    type: "Poor",
    ratio: "w-[20%]",
  },
];

function CustomerReview({}) {
  const [toggle, setToggle] = useState(false);
  const { screenWidth } = UseWidth();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="py-[15px] w-full">
      <div className="w-full flex items-center justify-between gap-y-10 md:gap-x-10 flex-col md:flex-row">
        <div className=" w-full border border-[#C0C0C0]-[0.35px] rounded-[10px]">
          <div className="py-4 px-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <Image
                  src={require("@/assets/userProfile.png")}
                  alt="profile"
                />
                <div className="">
                  <h1 className="text-[8px] md:text-[14px] font-semibold">
                    John Deo
                  </h1>
                  <div className="flex gap-x-3">
                    <AiFillStar
                      color="#ECC046"
                      size={screenWidth <= 550 ? 12 : 20}
                    />
                    <AiFillStar
                      color="#ECC046"
                      size={screenWidth <= 550 ? 12 : 20}
                    />
                    <AiFillStar
                      color="#ECC046"
                      size={screenWidth <= 550 ? 12 : 20}
                    />
                    <AiFillStar
                      color="#ECC046"
                      size={screenWidth <= 550 ? 12 : 20}
                    />
                    <AiFillStar
                      color="#D9D9D9"
                      size={screenWidth <= 550 ? 12 : 20}
                    />
                    <p className="font-medium text-[8px] sm:text-[14px]">4.0</p>
                  </div>
                </div>
              </div>
              <p className="text-[#C4C4C4] text-[12px] font-medium">
                Yesterday
              </p>
            </div>

            <p
              className="text-[10px] md:text-[14px] font-[400] text-[#000000CC] pt-[10px] pb-[20px]"
              onClick={handleToggle}
            >
              This is the most interesting business i’ve had with an online
              vendor. I really do recommend this merchant.
              {/* This is the most
              interesting business i’ve had with an online vendor. I really do
              recommend this merchant. */}
            </p>

            {toggle && (
              <div className="w-full">
                <div className="flex gap-x-1">
                  <Image src={require("@/assets/userImg.png")} alt="user" />
                </div>
                <div className="flex gap-x-2 items-center pt-[15px] hover:cursor-pointer">
                  <Image src={require("@/assets/Twitter.png")} alt="logo" />

                  <p className="text-[11px] underline">
                    Verify this review on twitter
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;
