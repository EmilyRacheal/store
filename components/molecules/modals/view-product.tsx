import React from "react";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import { BsSuitHeartFill } from "react-icons/bs";
import { MdBookmark } from "react-icons/md";
import { Button } from "@mantine/core";
import Reviews from "./reviews";
import CustomerReview from "@/molecules/CustomerReview/customerReview";
import ImageCarousel from "@/atoms/image-carousel/imageCarousel";
import { IoLogoWhatsapp } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi";
import slider from "@/assets/prod.png";
import slider1 from "@/assets/prod1.png";
import slider2 from "@/assets/prod2.png";
import slider3 from "@/assets/prod3.png";

interface Prop {
  showReviews?: boolean;
}

const ViewProduct: React.FC<Prop> = ({ showReviews }) => {
  const imageList = [slider, slider1, slider2, slider3];
  

  return (
    <div className="mx-auto md:w-[1200px] w-full max-h-[660px] scroll-hidden rounded-[10px] flex flex-col md:flex md:flex-row ">
      <div className=" w-full md:w-[55%]">
        <ImageCarousel imgList={imageList} />
      </div>
      <div className="md:w-[45%] w-full p-[25px]">
        <div className="w-full  flex justify-between ">
          <div className="flex">
            <Image
              src={require("@/assets/shopIcon.png")}
              className="rounde-[50%] object-cover h-[55px] w-[55px] "
              alt="icon"
            />
            <div className="ml-3">
              <h1 className="font-semibold text-[18px]">Emmy Shoes</h1>
              <p className="text-[14px] text-[#4F4F4F]">Abuja, Nigeria</p>
            </div>
          </div>
          <HiDotsVertical color="#979797" />
        </div>

        <div className="flex justify-between items-center mt-[15px]">
          <p className="text-[10px] md:text-[20px] text-[#323232] font-[600]">
            Oraimo Headsets
          </p>
          <p className="text-[#979797] text-[6px] md:text-[12px]">
            PRD: BRW-CB
          </p>
        </div>

        <div className="flex justify-between items-center mt-[10px]">
          <p className="text-[10px] md:text-[18px] text-[#323232] font-[600]">
            ₦15,000.00
          </p>
          <p className="text-[#4F4F4F] text-[6px] md:text-[12px]">
            Promoted listing
          </p>
        </div>

        <p className="text-[#00000050] text-[10px] md:text-[13px] font-[400] mt-[20px]">
          Apple’s innovative design approach finds a home in this latest watch
          design. Unparalleled in the ability to help any one find, follow and
          achieve their personal legends.{" "}
        </p>

        <div className="md:flex justify-between w-full px-2 mt-[15px] hidden">
          <div className="flex items-center gap-x-1">
            <BsSuitHeartFill size={20} color="#CE0120" />
            <p className="text-[#979797] text-[10.19px]">3k</p>
          </div>

          <div className="flex items-center gap-x-1">
            <MdBookmark size={20} color="#4F4F4F" />
            <p className="text-[10.19px] text-[#979797]">Add Profit</p>
          </div>

          <div>
            <p className="text-[8.86px] font-bold text-[#4F4F4F]">
              Profit:{" "}
              <span className="text-[#979797] text-[10.19]">
                Profit of ₦500
              </span>
            </p>
          </div>
        </div>

        {showReviews && (
          <div className="flex justify-between items-center mt-[10px]">
            <p className="text-[16px] text-[#000] font-[600]">Reviews (0)</p>
            <p className="text-[#155F5B] text-[12px]">See more</p>
          </div>
        )}

        <CustomerReview />

        <div className="px-[3%] sm:px-[30px] py-[20px] shadow-sm mt-[0px]">
          <Button variant="default" fullWidth>
            <IoLogoWhatsapp color="#1FAF38" size={20} className="mr-[10px]" />{" "}
            Message Seller
          </Button>

          <div className="flex justify-between h-[41px] mt-[20px]">
            <div className="w-[45%]">
              <Button
                fullWidth
                className="bg-[#155F5B] hover:bg-[#155F5B] h-[41px]"
              >
                <LuSend color="#FFF" size={18} className="mr-[10px]" /> Resell
              </Button>
            </div>

            <div className="w-[45%]">
              <Button
                fullWidth
                className="bg-[#155F5B] hover:bg-[#155F5B] h-[41px]"
              >
                <HiOutlineShoppingCart
                  color="#FFF"
                  size={18}
                  className="mr-[10px]"
                />{" "}
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
