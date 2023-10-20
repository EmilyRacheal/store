import Image from "next/image";
import React from "react";

export const NotifyEmpty = () => {
  return (
    <div className="flex flex-col gap-[26px] bg-kamel-ghostwhite py-[37px] overflow-auto w-[653px] h-[87.5vh] max-[739px]:w-[90vw]">
      <div className=" border-b  border-b-[rgba(0,0,0,0.50)] pb-[26px]">
        <h2 className="px-[47px] text-2xl font-semibold text-kamel-raisinblack  ">
          Notification
        </h2>
      </div>

      <div className=" items-center justify-center flex flex-1">
        <div className="flex flex-col gap-6 ">
          <Image
            src="/images/empty5.svg"
            height={265}
            width={265}
            alt="empty-state"
          />
          <div className="flex flex-col gap-[7px] items-center">
            <h4 className=" text-sm font-semibold text-kamel-raisinblack ">
              No notifications!
            </h4>
            <p className=" font-normal text-xs text-[rgba(35,35,35,0.50)] leading-[21px]">
              You do not have any notification yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
