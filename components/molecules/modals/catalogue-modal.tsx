import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineStore } from "react-icons/md";

const catalogueList = [
  {
    icon: <MdOutlineStore size={25} />,
    text: "Visit Vendor Store",
  },
  {
    icon: <MdOutlineStore size={25} />,
    text: "Visit Vendor Store",
  },
  {
    icon: <BsInfoCircle size={25} />,
    text: "View Vendor info",
  },
  {
    icon: <FiEdit3 size={25} />,
    text: "Edit",
  },
];

export const CatalogueModal = () => {
  return (
    <div className="flex pt-[45px] pb-[40px] flex-col max-[846px]:w-[90vw]">
      {catalogueList.map((item, id) => (
        <div
          key={id}
          className="flex gap-[34px] px-[47px]  pt-4 pb-10 border-b items-center"
        >
          {item.icon}
          <h4 className=" text-xl font-medium text-[#575757] ">{item.text}</h4>
        </div>
      ))}
    </div>
  );
};
