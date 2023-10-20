import React from "react";
import { BiSearch } from "react-icons/bi";
import { UseWidth } from "@/utils/useWidh";

interface Prop {
  placeholder?: string;
  height?: string;
  bg?: string;
}

const SearchInputBox: React.FC<Prop> = ({ placeholder, height, bg }) => {
  const { screenWidth } = UseWidth();

  return (
    <div
      className={`flex items-center border border-[#979797] justify-between gap-x-[10px] ${height} ${bg} w-full h-[35px] rounded-[2px] px-[10px]`}
    >
      <div className="">
        <BiSearch color="#4F4F4F" size={screenWidth <= 550 ? 12 : 20} className="" />
      </div>
      <input
        type="text"
        placeholder={placeholder || "Search products"}
        className="outline-none  flex flex-1 bg-transparent h-full text-[6px] sm:text-[13px] text-[#00000080]"
      />
    </div>
  );
};

export default SearchInputBox;
