import React from "react";
import Image from "next/image";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import i from "@/assets/home.png";
import Link from "next/link";
import { HomeIcon, HomeIconActive } from "@/icons/homeIcon";
import { EarningIcon, EarningIconActive } from "@/icons/earningIcon";
import { ProfileIcon, ProfileIconActive } from "@/icons/profileIcon";
import { OrderIcon, OrderIconActice } from "@/icons/orderIcon";
import { CategoryIcon, CategoryIconActive } from "@/icons/categoryIcon";
import { ExploreIcon, ExploreIconActive } from "@/icons/explore";
import { useRouter } from "next/router";

export const MobileNav = () => {
  const router = useRouter();

  const linksData = [
    {
      id: 1,
      name: "Home",
      icon: <HomeIcon />,
      link: "/",
      inactive: <HomeIconActive />,
    },
    {
      id: 2,
      name: "Explore",
      icon: <ExploreIcon />,
      link: "/explore",
      inactive: <ExploreIconActive />,
    },
    {
      id: 3,
      name: "Categories",
      icon: <CategoryIcon />,
      link: "/categories",
      inactive: <CategoryIconActive />,
    },
    {
      id: 4,
      name: "Orders",
      icon: <OrderIcon />,
      link: "/orders",
      inactive: <OrderIconActice />,
    },
    {
      id: 5,
      name: "Earnings",
      icon: <EarningIcon />,
      link: "/earnings",
      inactive: <EarningIconActive />,
    },
    {
      id: 6,
      name: "Profile",
      icon: <ProfileIcon />,
      link: "/profile",
      inactive: <ProfileIconActive />,
    },
  ];

  return (
    <ul className=" w-full flex items-center px-[5%] justify-between py-[20px]">
      {linksData.map((item) => {
        return (
          <Link href={item?.link}>
            <li
              className="flex flex-col gap-x-[15px] w-full items-center "
              key={item.id}
            >
              {router.pathname === item.link ? item.inactive : item.icon}
              {/* {router.pathname === item.link
                ? item.inactive
                : router.pathname.includes(item?.link.substring(1))
                ? item.inactive
                : item.icon} */}
              <p className="text-[10px] text-[#000] mt-[10px]">{item.name}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
