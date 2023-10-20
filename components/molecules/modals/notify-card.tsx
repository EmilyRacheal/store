import { Button, Text, clsx } from "@mantine/core";
import { Add, Clock, Send2 } from "iconsax-react";
import { useEffect, useRef, useState } from "react";
import { LuBell } from "react-icons/lu";
import { MdOutlineSend } from "react-icons/md";

type IProps = Record<"is_read" | "text" | "time" | "heading", boolean | string>;

export const NotifyCard = (item: IProps) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className={clsx(
        " bg-white overflow-hidden duration-500 rounded-[15px] pt-7 pb-[31px] pl-[35px] pr-[33px] flex justify-between shadow-[0px 0px 14.89305px 0px rgba(0,0,0,0.10) w-full"
      )}
      style={{ minHeight: showMore ? "250px" : "120px" }}
    >
      <div className="flex gap-[13.4px] ">
        <div
          className={clsx(
            item.is_read ? " bg-kamel-orange" : " bg-kamel-lightsilver",
            " rounded-full w-[61px] h-[61px] pl-4 pb-4 pt-[14px] pr-[14px] items-center"
          )}
        >
          <LuBell size={30} color="#fff" />
        </div>
        <section className="flex flex-col gap-[31px]">
          <div className="flex flex-col gap-[15.2px]">
            <h1 className=" text-[20.85px] font-semibold text-kamel-raisinblack">
              {item.heading}
            </h1>
            {showMore ? (
              <p
                onClick={() => setShowMore(false)}
                className=" font-normal cursor-pointer text-[14.893px] text-kamel-raisinblack "
              >
                {item.text}
              </p>
            ) : (
              <Text
                component="p"
                className=" font-normal cursor-pointer text-[14.893px] text-kamel-raisinblack "
                onClick={() => setShowMore(true)}
                lineClamp={1}
              >
                {item.text}
              </Text>
            )}
          </div>
          <div className="flex gap-[23px]">
            <Button
              classNames={{
                root: "py-[6px] px-3",
                inner: "gap-[3px]",
              }}
              className=" bg-[rgba(78,203,113,0.64)] hover:bg-[rgba(78,203,113,0.64)] text-[#4F4F4F] border-[0.7px] border-[#4ECB71] rounded-[78px]"
              leftIcon={
                <MdOutlineSend
                  size="12.5"
                  variant="Linear"
                  color="#434343"
                  style={{ transform: "rotate(310deg)" }}
                />
              }
            >
              Fulfil now
            </Button>
            <Button
              classNames={{
                root: "py-[6px] px-3",
                inner: "gap-[3px]",
              }}
              className=" bg-transparent hover:bg-transparent text-[12.5px] font-medium border-[0.5px] border-[#C4C4C4] rounded-[78px] text-[#4F4F4F] "
              leftIcon={<Clock size="12.5" color="#434343" />}
            >
              Treat later
            </Button>
          </div>
        </section>
      </div>
      <p className=" font-normal text-[14.89px] text-[#4F4F4F] leading-[22px]">
        {item.time}
      </p>
    </div>
  );
};
