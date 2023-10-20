import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { VscCircleSlash } from "react-icons/vsc";
import { FiUserX } from "react-icons/fi";
import { LuFlag } from "react-icons/lu";

const infoArr = [
  {
    icon: <TbExternalLink size={29} />,
    text: "Visit website",
  },
  {
    icon: <VscCircleSlash size={29} />,
    text: "Not interested in this product",
  },

  {
    icon: <FiUserX size={29} />,
    text: "Unfollow @ emmyshoes",
  },
  {
    icon: <LuFlag size={29} />,
    text: "Report Ad",
  },
];

export const ProductInfo = () => {
  return (
    <div className="py-[clamp(15px,2vw,32px)] w-[353px] max-[846px]:w-[90vw]">
      {infoArr.map((item, id) => (
        <div className="flex flex-col px-[clamp(15px,2vw,32px)] py-[clamp(15px,1.6vw,18px)] border-b ">
          <div key={id} className="flex gap-[26.6px] ">
            {item.icon}
            <p className=" text-[15px] font-medium text-[rgba(0,0,0,0.50)] ">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
