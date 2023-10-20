import { clsx } from "@mantine/core";
import React from "react";
import { LuBell } from "react-icons/lu";
import { NotifyEmpty } from "./notify-empty";
import { Notify } from ".";

const notifyArr = [
  {
    is_read: true,
    heading: "New order!",
    text: "You just received a new order for ...",
    time: "Now",
  },
  {
    is_read: false,
    heading: "Received payment!",
    text: "You just received a new order for ...",
    time: "4 hrs ago",
  },
  {
    is_read: false,
    heading: "Received payment!",
    text: "You just received a new order for ...",
    time: "4 hrs ago",
  },
  {
    is_read: false,
    heading: "Received payment!",
    text: "You just received a new order for ...",
    time: "4 hrs ago",
  },
  {
    is_read: false,
    heading: "Received payment!",
    text: "You just received a new order for ...",
    time: "4 hrs ago",
  },
  {
    is_read: false,
    heading: "Received payment!",
    text: "You just received a new order for ...",
    time: "4 hrs ago",
  },
];

export const Notification = () => {
  return (
    <div className="flex flex-col gap-[26px] bg-kamel-ghostwhite py-[37px] overflow-auto w-[653px] h-[87.5vh] max-[739px]:w-[90vw] rounded-[12px]">
      <div className=" border-b  border-b-[rgba(0,0,0,0.50)] pb-[26px]">
        <h2 className="px-[47px] text-2xl font-semibold text-kamel-raisinblack  ">
          Notification
        </h2>
      </div>

      {notifyArr.length ? <Notify /> : <NotifyEmpty />}
    </div>
  );
};
