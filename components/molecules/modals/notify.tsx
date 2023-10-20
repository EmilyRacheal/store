import React from "react";
import { Accordion, Button, Spoiler, clsx } from "@mantine/core";
import { LuBell } from "react-icons/lu";
import { Add, Clock } from "iconsax-react";
import { AccordionControl } from "@mantine/core/lib/Accordion/AccordionControl/AccordionControl";
import { NotifyCard } from "./notify-card";

const notifyArr = [
  {
    is_read: true,
    heading: "New order!",
    text: "You just received a new order for a blue chelsea boot from Abel Damisa. Go to orders to fulfill and update status.",
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
export const Notify = () => {
  return (
    <div className=" flex flex-col px-[clamp(24px,3.3vw,48px)] gap-[22px] flex-1 overflow-auto custome-scroll custome-track custome-thumb custome-hover">
      {notifyArr.map((item, id) => (
        <NotifyCard key={id} {...item} />
      ))}
    </div>
  );
};
