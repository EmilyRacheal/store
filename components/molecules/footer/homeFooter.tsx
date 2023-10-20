import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";

function HomeFooter() {
  return (
    <div className="bg-[#F2EFEA] w-full mt-[60px] relative  ">
      <div className="p-[15%] md:p-[5%] flex-col md:flex-row gap-y-[30px]  flex justify-between">
        <div className="flex flex-col gap-y-5">
          <div>
            <Image
              alt=""
              // width={100}
              className="h-[22px] w-auto "
              // height={21}
              src={require("@/assets/logo.png")}
            />
          </div>
          <div>
            <h1 className="text-[14px] font-semibold mt-[20px] md:mt-0">
              Address:
            </h1>
            <p className="text-[14px] font-[400] ">
              3500 South Dupont Highway, City of Dover, County of Kent, Delaware
              19901. USA
            </p>
            <p className="text-[14px] font-[400]">
              Suite 2006/7, GA 247 Plaza Plot 246, Ahmadu Bello Way Opp. Regent
              Academy Mabushi Abuja. Nigeria
            </p>
          </div>
          <div>
            <h1 className="text-[14px] mt-[20px] md:mt-0 font-semibold">
              Contact:
            </h1>
            <p className="text-[14px]">+2348142533870</p>
            <p className="text-[14px]">info@getkamel.com</p>
          </div>
          <div className="flex gap-x-3">
            <FaFacebookF size={20} />
            <BsInstagram size={20} />
            <GrTwitter size={20} />
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-[#155F5B] text-[16px] md:text-[20px] font-bold">
            Company
          </h1>
          <ul className="flex-col flex gap-y-3">
            <li className="text-[16px] font-[400]">About</li>
            <li className="text-[16px] font-[400]">FAQs</li>
            <li className="text-[16px] font-[400]">Terms of Service</li>
            <li className="text-[16px] font-[400]">Privacy Policy</li>
            <li className="text-[16px] font-[400]">Ambassador Program</li>
            <li className="text-[16px] font-[400]">Help Centre</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-[16px] md:text-[20px] text-[#155F5B] font-bold">
            Download the Kamel App
          </h1>
          <Image src={require("@/assets/appstorebtn.png")} alt="icon" />
          <Image src={require("@/assets/googlebtn.png")} alt="icon" />
        </div>
      </div>
      <div className="md:w-[90%] w-[70%] h-[30px] border border-b-0 border-x-0 border-[#00000050] mx-[15%] md:mx-[5%]" />

      <div className="flex flex-col gap-y-[20px] md:flex-row justify-between mx-[15%] md:mx-[5%] pb-[5%]">
        <h1 className="text-[14px]">2023 Kamel Inc. All right reserved.</h1>
        <div className="flex gap-x-3">
          <p className="text-[#00000050] text-[14px] underline">
            Privacy Policy
          </p>
          <p className="text-[#00000050] text-[14px] underline">
            Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
