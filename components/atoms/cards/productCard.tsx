import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import { BsSuitHeartFill } from "react-icons/bs";
import { MdBookmark } from "react-icons/md";
import { PiArrowSquareUpRightFill } from "react-icons/pi";
import { FiShoppingCart } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { AiOutlineExport } from "react-icons/ai";
import { IModalContext, ModalContext } from "@/providers";
import ViewProduct from "@/molecules/modals/view-product";
import { ProductInfo } from "@/molecules/modals/product-info";
import { useRouter } from "next/router";
import { Store } from "@/molecules/modals";


function ProductCard() {
  const { setModalState } = useContext(ModalContext) as IModalContext;
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState<any>(null);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <div className="sm:mx-[5%] mx-0  w-full flex flex-col justify-center items-center max-w-full sm:max-w-[335.25px] gap-y-3">
      <div className="w-full  flex justify-between ">
        <div className="flex">
          <Store />
          <div className="ml-3">
            <h1 className="font-semibold text-[12px]">Emmy Shoes</h1>
            <p className="text-[9.34px] text-[#4F4F4F]">Abuja, Nigeria</p>
          </div>
        </div>
        <div
          className="relative group"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <HiDotsVertical color="#979797" />

          {isOpen && (
            <div className="absolute right-0 mt-2 py-2 w-fit bg-white border rounded-lg shadow-lg z-10">
              <ProductInfo />
            </div>
          )}
        </div>
      </div>

      <div className="w-full">
        <Image
          src={require("@/assets/cardImage.png")}
          alt="cardimage"
          className="w-full h-auto cursor-pointer "
          onClick={() =>
            router.pathname !== "/"
              ? null
              : screenWidth <= 800
              ? router.push("/view-product")
              : setModalState({
                  component: <ViewProduct showReviews={true} />,
                  opened: true,
                })
          }
        />
      </div>

      <div className="flex justify-between w-full px-2">
        <div className="flex items-center gap-x-1">
          <BsSuitHeartFill color="#CE0120" />
          <p className="text-[#979797] text-[10.19px]">3k</p>
        </div>
        <div className="flex items-center gap-x-1">
          <MdBookmark color="#4F4F4F" />
          <p className="text-[10.19px] text-[#979797]">Add Profit</p>
        </div>
        <div>
          <p className="text-[8.86px] font-bold text-[#4F4F4F]">
            Profit: <span className="text-[#979797] text-[10.19]">₦500</span>
          </p>
        </div>
      </div>

      <div className="flex justify-between w-full">
        <div className="w-full">
          <p className="text-[14.86px] text-[#333333] font-semibold">
            Nike Shoes
          </p>
          <h1 className="text-[#333333] text-[14.01px]">
            <span className="text-[#323232] font-bold mr-[4px]">₦</span>
            15,000.00
          </h1>
          <div className="flex items-center gap-x-1">
            <PiArrowSquareUpRightFill color="#E59500" size={15} />
            <p className="text-[#4F4F4F] text-[8.94px] flex items-center gap-x mt-[3px]">
              {" "}
              Promoted Listing
            </p>
          </div>
        </div>

        <div className="flex gap-x-2 w-full items-end">
          <div className="border border-[#155F5B] flex justify-center w-[83px] h-[39px] sm:h-[34.36px] rounded-[3.1px]">
            <button className="text-[12.01px]  text-[#155F5B] flex items-center gap-x-3">
              <FiShoppingCart /> Buy{" "}
            </button>
          </div>
          <div className="bg-[#155F5B] w-[83px] flex justify-center sm:h-[34.36px] h-[39px] rounded-[3.1px]">
            <button className="text-[11.73px] text-[#FFFFFF] flex items-center gap-x-3">
              <BsSend /> Resell{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
