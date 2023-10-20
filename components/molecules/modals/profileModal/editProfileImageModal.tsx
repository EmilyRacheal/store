import HorizontalRule from "@/atoms/horizontalRule/horizontalRule";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import Image from "next/image";
import { CameraIcon } from "../../../icons/home/cameraIcon";
import ImageIcon from "../../../icons/home/imageIcon";

const EditProfileImageModal = () => {
  return (
    <div className="md:w-[497px] w-[303.7px] px-5 pt-5 flex justify-center items-center ">
      <div className="w-full  flex flex-col justify-center items-center pb-5">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-[#232323] text-[12.02px] md:text-[16px] font-semibold">
          Change profile picture
          </h1>
          <GrFormClose
            color="#000000"
            className="bg-[#AEAEAE80] md:w-[44px] md:h-[44px] rounded-full w-[18.36px] h-[18.36px]"
          />
        </div>
      
        <div className="w-[100%] pt-3">
            <HorizontalRule />
          </div>
      
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src={require("@/assets/userimage.png")}
            alt="user"
            className="w-[20px] md:w-[81.27px] rounded-full h-[20px] md:h-[81.27px]"
          />
          <div className="flex flex-col gap-y-5 mt-5 justify-center items-center">
            <div className="flex gap-x-3 items-center">
              <CameraIcon />
              <p className="text-[9.78px] md:text-[16px] font-medium">Take a photo</p>
            </div>
            <div className="flex items-center gap-x-3">
              <ImageIcon />
              <p className="text-[9.78px] md:text-[16px]  font-medium">Upload from device</p>
            </div>
          </div>

          <div className="w-[100%] mt-5 ">
            <HorizontalRule />
          </div>
          <p className="text-[#FF0000] md:text-[16px] text-[9.78px] font-medium">Cancel</p>
        </div>
      </div>
    </div>
  );
};

export default EditProfileImageModal;
