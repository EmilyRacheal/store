import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";

function GoBack() {
  const router = useRouter();
  return (
    <div>
      <div
        className="flex gap-x-4 sm:gap-x-6 items-center cursor-pointer"
        onClick={() => router.back()}
      >
        <BiArrowBack />

        <p className="sm:text-[18px] text-[12px] text-[#232323] font-medium">
          Go back
        </p>
      </div>
    </div>
  );
}

export default GoBack;
