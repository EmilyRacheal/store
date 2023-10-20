import React, { useEffect, useState } from "react";
import DashboardWrapper from "../dashboardWrapper/dashboardWrapper";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

interface Prop {
  children?: React.ReactNode;
}

const CategoresWrapper: React.FC<Prop> = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState<any>(null);
  const router = useRouter();

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
    <DashboardWrapper hasBorder={screenWidth <= 600 ? false : true}>
      <div className=" sm:px-[4%] pt-[25px] sm:pt-[35px] bg-[#fff] ">
        {/* <div className="w-full bg-[#fff] sm:bg-transparent "> */}

        <div className="w-full px-[4%] sm:px-0">
          <div className="flex border-[0.3px] gap-x-[20px] border-[#00000050]  rounded-[5px] h-[40px] sm:h-[50px] px-[3%] items-center">
            <FiSearch size={screenWidth <= 600 ? 17 : 24} />

            <input
              type="text"
              className="flex-1 outline-none bg-transparent text-[9px] sm:text-[14px]"
              placeholder="What do you want to sell today?"
            />
          </div>
        </div>

        <div className="flex justify-between mt-[30px] sm:mt-[40px] border border-x-0 border-t-0 border-b-[#00000050]">
          <div
            className={`w-[50%] text-[14px] sm:text-[16px] flex justify-center pb-[10px] sm:pb-[20px]  ${
              router.pathname !== "/explore" && "text-[#23232350]"
            } border border-x-0 border-t-0 ${
              router.pathname === "/explore" &&
              "border-b-[#155F5B] font-[700] text-[#232323]"
            } border-b-2 cursor-pointer `}
          >
            <Link href="/explore">Products</Link>
          </div>

          <div
            className={`w-[50%] text-[14px] sm:text-[16px] flex justify-center pb-[10px] sm:pb-[20px] ${
              router.pathname !== "/shops" && "text-[#23232350]"
            } border border-x-0 border-t-0 ${
              router.pathname === "/shops" &&
              "border-b-[#155F5B] font-[700] text-[#232323]"
            } border-b-2 cursor-pointer`}
          >
            <Link href="/shops">Shops</Link>
          </div>
        </div>
      </div>

      <div className="w-full mt-[20px]">{children}</div>
      {/* </div> */}
    </DashboardWrapper>
  );
};

export default CategoresWrapper;
