import React, { useContext, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Button, TextInput } from "@mantine/core";
import Image from "next/image";
import DashboardWrapper from "@/molecules/layout/dashboardWrapper/dashboardWrapper";
import { IModalContext, ModalContext } from "@/providers";
import EditProfileImageModal from "@/molecules/modals/profileModal/editProfileImageModal"
import DeleteAccount from "@/molecules/modals/profileModal/deleteAccount";
import PhoneInput from "react-phone-input-2";
import { CountrySelect } from "@/atoms/country-select/country-select";
import Input from "@/atoms/Input/input";

const EditProfile = () => {
  const { setModalState } = useContext(ModalContext) as IModalContext;
  const [phone, setPhone] = useState("");

  return (
    <DashboardWrapper hasBorder>
      <div className="full px-[5%] md:px-[6%] mt-[30px] sm:mt-[50px] pb-[20px] border-t-0 border md:border-[#00000050] ">
        <div className="flex gap-x-[10px] text-[#232323] item-center text-[12px] sm:text-[16px]">
          <BiArrowBack /> Edit Profile
        </div>
      </div>

      <div className="w-full px-[5%] mx-auto max-w-[800px] mt-[20px] md:mt-[40px]">
        <div className="flex justify-center items-center md:items-start md:justify-between flex-col sm:flex-row ">
          <div className="relative w-fit">
            <Image
              alt="shop"
              src={require("@/assets/userimage.png")}
              className="md:w-[85px] w-[133px] md:h-[85px] h-[133px] rounded-[50%]"
            />

            <div
              onClick={() =>
                setModalState({
                  component: <EditProfileImageModal />,
                  opened: true,
                })
              }
              className="w-[36px] h-[36px] rounded-full border-[#fff] border-2 flex justify-center items-center bg-[#9FEAE6] absolute right-[-10px] bottom-[5px] "
            >
              <MdOutlineModeEditOutline />
            </div>
          </div>

          <div className="md:flex items-center gap-x-[10px] hidden ">
            <Button
              className="bg-[#00000020] hover:bg-[#00000020] text-[#fff]"
              onClick={() =>
                setModalState({
                  component: <DeleteAccount />,
                  opened: true,
                })
              }
            >
              Delete account
            </Button>
            <p className="text-[#FF0000] text-[14px] cursor-pointer">
              Clear Data
            </p>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-between mt-[50px] gap-y-[20px] sm:gap-y-[40px] ">
          <div className="w-full sm:w-[47%]">
            <Input label="Full Name" />
          </div>

          <div className="w-full sm:w-[47%]">
            <Input label="Nickname" />
          </div>

          <div className="w-full sm:w-[47%]">
            <label htmlFor="" className="text-[14px]">
              Enter Phone Number
            </label>

            <PhoneInput
              autoFormat={true}
              country={"ng"}
              value={phone}
              onChange={(tel) => {
                setPhone(tel);
              }}
              containerStyle={{ width: "100%", marginTop: "10px" }}
              containerClass="w-full mt-[8px] h-[50px] rounding-[10px]"
              inputClass="w-full h-full"
              inputProps={{ maxLength: "18" }}
              inputStyle={{ width: "100%", height: "100%" }}
            />

            {/* <input
              type="text"
              className="w-full bg-[#fff] border border-[#1C0F1340] rounded-[5px] h-[50px] mt-[10px] px-[5%] outline-none"
            /> */}
          </div>

          <div className="w-full sm:w-[47%]">
            <Input label="Email" type="email" />
          </div>

          <div className="w-full sm:w-[47%]">
            <label htmlFor="" className="text-[14px]">
              Country
            </label>

            <CountrySelect />
          </div>

          <div className="w-full sm:w-[47%]">
            <Input label="State" />
          </div>

          <div className="w-full sm:w-[47%]">
            <Input label="Delivery Address" />

            <p className="text-[12px] font-[400] text-[#23232380] mt-[10px] ">
              Orders placed by customers who select pickup on your online store
              will be delivered by vendors to you using this address.
            </p>
          </div>

          <div className="w-full sm:w-[47%]">
            <Input label="Password" type="password" />
          </div>

          <div className="flex md:hidden w-full gap-y-[20px] justify-center flex-col items-center gap-x-[10px] mt-[20px]">
            <Button className="bg-[#00000020] hover:bg-[#00000020] text-[#fff] ">
              Delete account
            </Button>
            <p className="text-[#FF0000] text-[14px] cursor-pointer underline ">
              Clear Data
            </p>
          </div>

          <div className="w-full mb-[100px] ">
            <Button className="bg-[#00000020] w-full h-[50px] mt-[40px] hover:bg-[#00000020] text-[#fff] ">
              Save
            </Button>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default EditProfile;
