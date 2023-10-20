import React from "react";
import Navbar from "@/molecules/navbar/navbar";
import { Header } from "@/atoms/header";
import Footer from "@/molecules/footer/homeFooter";
import Image from "next/image";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { SideBar } from "..";
import { MobileNav } from "./mobile-nav";

interface Props {
  children?: React.ReactNode;
  withFooter?: boolean;
  hasBorder?: boolean;
}

const DashboardWrapper: React.FC<Props> = ({ children, withFooter, hasBorder }) => {
  return (
    <div className="w-full bg-[#F9F9F9] sm:bg-[#ffffff] ">
      <div className="w-full fixed bg-[#fff] z-10 ">
        <Header hasBorder={hasBorder} />
      </div>

      <div className="flex w-full ">
        <div className="w-fit hidden sm:block lg:w-[280px] bg-[#fff] z-0 px-[5%] pt-[70px] border fixed border-y-0 border-l-0 border-r-[#00000050]">
          <SideBar />
        </div>
        <div className="lg:ml-[280px] sm:ml-[120px] flex-1 w-full min-h-[89vh] pt-[70px]">{children}</div>
      </div>

      <div className="w-full bg-[#FBFBFB] sm:hidden block shadow fixed bottom-0 z-10 ">
        <MobileNav />
      </div>

      {withFooter && (
        <div className="w-full">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default DashboardWrapper;
