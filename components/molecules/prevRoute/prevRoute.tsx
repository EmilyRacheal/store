import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import SearchInputBox from "@/atoms/searchInput/searchInputBox";
import { useRouter } from "next/router";

interface Prop {
  withSearch?: boolean;
  searchText?: string;
  noPadding?: boolean;
}

const PrevRoute: React.FC<Prop> = ({ withSearch, searchText, noPadding }) => {
  const router = useRouter();

  return (
    <div className={`w-full flex justify-between mt-[20px] items-center ${noPadding && ""} `}>
      <div
        className="flex items-center gap-x-[10px] sm:gap-x-[20px] text-[#232323] text-[12px] sm:text-[18px] cursor-pointer "
        onClick={() => router.back()}
      >
        <BsArrowLeft />
        Go back
      </div>

      {withSearch && (
        <div className="w-[156.17px] sm:w-[250px] md:w-[390px] bg-[#fff] sm:bg-transparent">
          <SearchInputBox
            placeholder={searchText}
            height="h-[20.02px] sm:h-[50px]"
          />
        </div>
      )}
    </div>
  );
};

export default PrevRoute;
