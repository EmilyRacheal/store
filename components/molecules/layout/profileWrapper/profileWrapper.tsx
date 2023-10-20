import React, { useContext } from "react";
import DashboardWrapper from "../dashboardWrapper/dashboardWrapper";
import Link from "next/link";
import Image from "next/image";
import { AiOutlinePlusCircle, AiOutlineShareAlt } from "react-icons/ai";
import { useRouter } from "next/router";
import FollowingModal from "@/molecules/modals/profileModal/followingModal";
import { IModalContext, ModalContext } from "@/providers";

interface Prop {
  children?: React.ReactNode;
}

const ProfileWrapper: React.FC<Prop> = ({ children }) => {
  const { setModalState } = useContext(ModalContext) as IModalContext;
  const router = useRouter();

  return (
    <DashboardWrapper hasBorder={true}>
      <div className="md:px-[4%] py-[20px] mt-[20px] w-full max-w-[1200px] mx-auto ">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-x-[30px]">
          <div className="flex flex-col justify-center md:flex-row gap-y-[10px] md:gap-y-0 gap-x-[20px] items-center">
            <Image
              alt="shop"
              src={require("@/assets/userimage.png")}
              className="md:w-[85px] w-[73px] md:h-[85px] h-[73px] rounded-[50%]"
            />
            <div className="">
              <p className="text-[16px] md:text-[20px] text-center flex items-center gap-x-[10px] font-[600] text-[#000]">
                Damisa Gianluci
              </p>
              <p className="text-[#000] text-center my-[5px] md:my-0 md:text-left text-[12px] md:text-[20px] font-[600]">
                10{" "}
                <span
                  className="text-[#4F4F4F] font-[400] cursor-pointer"
                  onClick={() =>
                    setModalState({
                      component: <FollowingModal />,
                      opened: true,
                    })
                  }
                >
                  Followers
                </span>
              </p>

              <p className="text-[#2573E4] text-[10px] md:text-[14px] font-[500]">
                https://damisa.kamel.shop
              </p>
            </div>
          </div>

          <div className="flex gap-x-[15px] mt-[20px] md:mt-0 ">
            <div className="bg-[#EBEBEB] border border-[#BDBDBD] cursor-pointer w-[131px] h-[34px] rounded-[9px] gap-x-[10px] flex justify-center items-center text-[11px] font-[500] ">
              <AiOutlinePlusCircle size={16} /> Follow
            </div>

            <div
              className="bg-[#EBEBEB] border border-[#BDBDBD] cursor-pointer w-[131px] h-[34px] rounded-[9px] gap-x-[10px] flex justify-center items-center text-[11px] font-[500] "
              onClick={() => router.push("/profile/edit-profile")}
            >
              <AiOutlineShareAlt size={16} /> Edit Profile
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-[40px] border border-x-0 border-t-0 border-b-[#00000050]">
          <div
            className={`w-[50%] flex justify-center pb-[20px]  ${
              router.pathname !== "/profile" && "text-[#23232350]"
            } border border-x-0 border-t-0 ${
              router.pathname === "/profile" &&
              "border-b-[#155F5B] font-[700] text-[#232323]"
            } border-b-2 cursor-pointer `}
          >
            <Link href="/profile">Catalog</Link>
          </div>

          <div
            className={`w-[50%] flex justify-center pb-[20px] ${
              router.pathname !== "/profile/activity" && "text-[#23232350]"
            } border border-x-0 border-t-0 ${
              router.pathname === "/profile/activity" &&
              "border-b-[#155F5B] font-[700] text-[#232323]"
            } border-b-2 cursor-pointer`}
          >
            <Link href="/profile/activity">Activity</Link>
          </div>
        </div>

        <div className="w-full mt-[20px]">{children}</div>
      </div>
    </DashboardWrapper>
  );
};

export default ProfileWrapper;
