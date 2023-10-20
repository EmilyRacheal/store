import React from "react";
import DashboardWrapper from "@/molecules/layout/dashboardWrapper/dashboardWrapper";
import dynamic from "next/dynamic";
import { BadgeIcon } from "@/icons/badgeIcon";
import { WalletIcon } from "@/icons/walletIcon";
import { ExchangeIcon } from "@/icons/exchangeIcon";
import Link from "next/link";
import { UseWidth } from "@/utils/useWidh";
// import Chart from "react-apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false, // Set ssr option to false to prevent server-side rendering
});

const Earnings = () => {
  const { screenWidth } = UseWidth();
  const data = [
    { name: "Completed Orders", amount: "NGN 0.00", icon: <WalletIcon /> },
    { name: "Promoted Listings", amount: "NGN 0.00", icon: <ExchangeIcon /> },
  ];

  const yaxis = [
    "0",
    "2000",
    "3000",
    "4000",
    "3000",
    "4000",
    "1000",
    "3000",
    "2000",
    "1000",
    "500",
    "200",
  ];
  const xaxis = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const series = [
    {
      name: "Earnings", // Give it a name
      data: yaxis.map((value, index) => ({
        x: xaxis[index],
        y: parseFloat(value),
      })),
    },
  ];

  const options = {
    //data on the x-axis
    chart: { type: "area", height: 400 },

    stroke: {
      curve: "smooth",
    },

    xaxis: {
      categories: xaxis,
    },
  };

  return (
    <DashboardWrapper hasBorder={screenWidth <= 600 ? false : true}>
      <div className="">
        <div className="flex justify-between max-w-[1100px] mx-auto w-full items-center px-[4%] pb-[20px] pt-[25px] md:pt-[40px]">
          <div className="flex items-center gap-x-2">
            <BadgeIcon />
            <div>
              <p className=" text-[12px] md:text-[18.92px] font-medium text-[#4F4F4F9E]">
                Hustle level
              </p>
              <p className="text-[16px] md:text-[25.22px] text-[#4F4F4F] font-bold">
                The Grind
              </p>
            </div>
          </div>
          <p className="text-[11px] md:text-[15.76px] font-medium text-[#155F5B] underline cursor-pointer">
            <Link href="/earnings/leaderboard">View leaderboard</Link>
          </p>
        </div>
        <div className=" hidden md:block w-full h-[30px] border border-b-0 border-x-0 border-[#00000050]" />

        <div className="px-[4%] mt-[30px] md:mt-0 max-w-[1100px] w-full mx-auto">
          <h1 className="text-[16px] md:text-[23px] font-semibold pb-[30px]">
            Overview
          </h1>
          <div className=" flex justify-between w-full">
            {data.map((item) => {
              return (
                <div className="w-[48%] bg-[#fff] md:w-[47%]  border-[#C4C4C4] border h-fit md:h-[193px] rounded-[11.58px] ">
                  <div className="flex flex-col gap-y-5 px-[14px] md:px-5 pb-[20px] md:pb-0 pt-5">
                    <div className="flex items-center gap-x-3">
                      <div className="bg-[#155F5B] w-[30px] md:w-[43.1px] h-[30px] md:h-[43.1px] rounded-full flex justify-center items-center">
                        {item.icon}
                      </div>
                      <p className="text-[12px] md:text-[21.82px] text-[#323232]">
                        {item.name}
                      </p>
                    </div>

                    <h1 className="text-[16px] md:text-[25px] font-semibold text-[#000000]">
                      {item.amount}
                    </h1>
                    <p className="text-[10px] md:text-[14px] underline text-[#155F5B80]">
                      View Wallet
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center w-full mt-[50px]">
            <p className="text-[16px] md:text-[23px]  font-semibold ">
              <Link href="/earnings/transactions">Earnings</Link>
            </p>

            <p className="text-[11px] md:text-[15.76px] font-medium text-[#155F5B] underline cursor-pointer">
              <Link href="/earnings/transactions"> View Wallet</Link>
            </p>
          </div>

          <div className="w-full bg-[#fff] mt-[40px]">
            <Chart options={options} series={series} type="area" width="100%" />
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Earnings;
