import React from "react";
import { ImWhatsapp } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FaThreads } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";
import { GrFlag } from "react-icons/gr";
import { MdOutlineCloudDownload } from "react-icons/md";
import { Divider } from "@mantine/core";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
import { Instagram } from "../../icons/home/instagram";

const socialsArr = [
  {
    title: "Whatsapp",
    socials: <ImWhatsapp size={27} color="#FFF" />,
    background: "#00E676",
  },
  {
    title: "Twitter",
    socials: <BsTwitter size={27} color="#FFF" />,
    background: "#55ACEE",
  },

  {
    title: "Facebook",
    socials: <RiFacebookFill size={27} color="#FFF" />,
    background: "#395185",
  },

  {
    title: "Instagram",
    socials: <Instagram />,
    background: "#FFF",
  },

  {
    title: "Tik tok",
    socials: <FaTiktok size={27} color="#000" />,
    background: "#FFFFFF",
  },

  {
    title: "Threads",
    socials: <FaThreads size={27} color="#000" />,
    background: "#FFFFFF",
  },
];

const socials2 = [
  {
    title: "Not interested",
    socials: <GrFlag size={19} color="#979797" />,
  },

  {
    title: "Not interested",
    socials: <CgUnavailable size={19} color="#979797" />,
  },

  {
    title: "Download",
    socials: <MdOutlineCloudDownload size={19} color="#979797" />,
  },

  {
    title: "More",
    socials: <BiDotsVerticalRounded size={19} color="#979797" />,
  },
];
export const SharePproduct = () => {
  return (
    <section className=" py-[18px] flex flex-col gap-[30px]">
      <h4 className=" border-b-[#C0C0C0] pb-[15px] border-b  pl-2 text-black text-sm font-semibold">
        Share product
      </h4>
      <section className="flex flex-col gap-4 ">
        <div className="grid grid-cols-[repeat(6,1fr)] gap-[14px]  px-[18px] ">
          {socialsArr.map((item, id) => (
            <div className="flex flex-col gap-[5px]">
              <div
                style={{ background: item.background }}
                key={id}
                className="flex items-center justify-center w-[51px] h-[51px] rounded-full p-[9px] border border-[#DEDEDE]"
              >
                {item.socials}
              </div>
              <p className="text-[8px] font-semibold leading-[13px] text-[rgba(0, 0, 0, 0.50)]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <Divider />

        <div className="grid grid-cols-[repeat(4,1fr)] gap-[14px]  px-[18px] ">
          {socials2.map((item, id) => (
            <div className="flex flex-col gap-[5px]">
              <div
                key={id}
                className="flex items-center justify-center w-[51px] h-[51px] rounded-full p-[9px] border border-[#C4C4C4] bg-[#F4F2EF]"
              >
                {item.socials}
              </div>
              <p className="text-[8px] font-semibold leading-[13px] text-[rgba(0, 0, 0, 0.50)]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* <section className="grid grid-cols-[repeat(6,1fr)] gap-[14px] border-t-[#C0C0C0] border-b pb-4 px-[18px] ">
        {socialsArr.map((item, id) => (
          <div key={id} className=" flex flex-col gap-[6px]">
            {item.socials}
            <p className="text-[8px] font-semibold leading-[13px] text-[rgba(0, 0, 0, 0.50)]">
              {item.title}
            </p>
          </div>
          //     <div style={{background: item.background}} className="flex items-center justify-center w-[51px] h-[51px] rounded-full p-[9px]">

          //   </div>
        ))}
      </section> */}
    </section>
  );
};
