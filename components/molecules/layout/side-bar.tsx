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

export const SideBar = () => {
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
    <ul className="flex flex-col gap-y-10 pt-[55px] min-h-[95vh] ">
      {linksData.map((item) => {
        return (
          <Link href={item?.link}>
            <li className="flex gap-x-[15px] w-fit items-center " key={item.id}>
              {router.pathname === item.link ? item.inactive : item.icon}
              {/* {router.pathname === item.link
                ? item.inactive
                : router.pathname.includes(item?.link.substring(1))
                ? item.inactive
                : item.icon} */}
              <p
                className={`text-[20px] hidden lg:flex ${
                  router.pathname === item.link ? "text-[#000]" : "text-[#0B0E2080]"
                } `}
              >
                {item.name}
              </p>
            </li>
          </Link>
        );
      })}

      {/* <li className="flex gap-x-[17px] text-[20px] w-full text-[#0B0E2080] items-center">
        <BiSearch size={26} color="#4F4F4F" /> Search
      </li>
      <li className="flex gap-x-[17px] text-[20px] w-full text-[#0B0E2080] items-center">
        <Image
          alt="home icon"
          className="w-[24px] h-[24px]"
          src={require("../../assets/caticon.png")}
        />
        Categories
      </li>
      <li className="flex gap-x-[17px] text-[20px] w-full text-[#0B0E2080] items-center">
        <Image
          alt="home icon"
          className="w-[24px] h-[24px]"
          src={require("../../assets/cart.png")}
        />
        Orders
      </li>
      <li className="flex gap-x-[17px] text-[20px] w-full text-[#0B0E2080] items-center">
        <Image
          alt="home icon"
          className="w-[24px] h-[24px]"
          src={require("../../assets/earnicon.png")}
        />
        Earnings
      </li>
      <li className="flex gap-x-[17px] text-[20px] w-full text-[#0B0E2080] items-center">
        <BiUserCircle size={26} color="#4F4F4F" /> Profile
      </li> */}
    </ul>
  );
};
