import React from "react";
import DashboardWrapper from "@/molecules/layout/dashboardWrapper/dashboardWrapper";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { Tabs } from "@mantine/core";
import { Table } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import Link from "next/link";
import SelectInputBox from "@/atoms/selectInput/selectInputBox";

const Orders = () => {
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];

  return (
    <DashboardWrapper hasBorder={true}>
      <div className="bg-[#F9F9F9] md:bg-[#fff] ">
        <div className="px-[3%] flex w-full justify-between items-center py-5">
          <div className="w-full max-w-[50%]">
            <h1 className="text-[#0B0E20] text-[14px] md:text-[32px] font-semibold">
              Order Summary
            </h1>
          </div>
          <div className="w-full max-w-[25%] hidden md:block ">
            <div className="flex items-center border-[#00000080] border-b-2 border-x-0 border-t-0 justify-between gap-x-[15px] w-full h-[35px] rounded-[5px] px-[10px] ">
              <div className="">
                <BiSearch color="#4F4F4F" size={20} className="" />
              </div>
              <input
                type="text"
                placeholder="Search my history"
                className="outline-none  flex flex-1 bg-transparent h-full text-[14px] text-[#0B0E2080] font-medium"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[30px] border border-b-0 border-x-0 md:border-[#00000050]" />

        <div className="px-[3%] w-full flex gap-x-[5%] justify-between overflow-auto scroll-hidden">
          <div className="w-fit sm:w-full bg-[#fff]  max-w-[320px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.10)] rounded-[10px] md:rounded-none h-[142px] md:h-[200px] ">
            <div className="flex flex-col gap-y-5 px-5 pt-5">
              <div className="bg-[#4ECB71] w-[25px] md:w-[60px] h-[25px] md:h-[60px] rounded-full flex justify-center items-center">
                <Image
                  src={require("../../../assets/money.png")}
                  alt=""
                  className="w-[15px] md:w-[30px] h-[15px] md:h-[30px] rounded-full"
                />
              </div>
              <h1 className="text-[12px] md:text-[25px] whitespace-nowrap font-semibold text-[#0B0E20]">
                NGN 1000,000,000.00
              </h1>
              <p className="text-[12px] md:text-[16px] whitespace-nowrap font-medium text-[#0B0E2080]">
                Total Order value
              </p>
            </div>
          </div>

          <div className="w-fit sm:w-full  max-w-[320px] bg-[#fff] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.10)] rounded-[10px] md:rounded-none h-[142px] md:h-[200px] ">
            <div className="flex flex-col gap-y-5 px-5 pt-5">
              <div className="bg-[#4ECB71] w-[25px] md:w-[60px] h-[25px] md:h-[60px] rounded-full flex justify-center items-center">
                <Image
                  src={require("../../../assets/money.png")}
                  alt=""
                  className="w-[15px] md:w-[30px] h-[15px] md:h-[30px] rounded-full"
                />
              </div>
              <h1 className="text-[12px] md:text-[25px] whitespace-nowrap font-semibold text-[#0B0E20]">
                NGN 1000,000,000.00
              </h1>
              <p className="text-[12px] md:text-[16px]  whitespace-nowrap font-medium text-[#0B0E2080]">
                Profit earned
              </p>
            </div>
          </div>

          <div className="w-fit sm:w-full  max-w-[320px] bg-[#fff] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.10)] rounded-[10px] md:rounded-none h-[142px] md:h-[200px] ">
            <div className="flex flex-col gap-y-5 px-5 pt-5">
              <div className="bg-[#4ECB71] w-[25px] md:w-[60px] h-[25px] md:h-[60px] rounded-full flex justify-center items-center">
                <Image
                  src={require("../../../assets/money.png")}
                  alt=""
                  className="w-[15px] md:w-[30px] h-[15px] md:h-[30px] rounded-full"
                />
              </div>
              <h1 className="text-[12px] md:text-[25px] whitespace-nowrap font-semibold text-[#0B0E20]">
                NGN 1000,000,000.00
              </h1>
              <p className="text-[12px] md:text-[16px]  whitespace-nowrap font-medium text-[#0B0E2080]">
                Profit pending
              </p>
            </div>
          </div>
        </div>

        <div className="flex px-[5%] mt-[30px] sm:hidden scroll-hidden overflow-auto gap-x-[15px]">
          <p className="h-[24px] text-[#fff] font-medium whitespace-nowrap flex items-center justify-center p-[15px] w-fit text-[11px] rounded-[22px] bg-[#000] border border[#4F4F4F]">
            All
          </p>
          <p className="h-[24px] text-[#4F4F4F] font-medium whitespace-nowrap flex items-center justify-center p-[15px] w-fit text-[11px] rounded-[22px] bg-[#fff] border border[#4F4F4F]">
            Pending
          </p>
          <p className="h-[24px] text-[#4F4F4F] font-medium whitespace-nowrap flex items-center justify-center p-[15px] w-fit text-[11px] rounded-[22px] bg-[#fff] border border[#4F4F4F]">
            Confirmed
          </p>

          <p className="h-[24px] whitespace-nowrap flex items-center justify-center p-[15px] w-fit text-[11px] rounded-[22px] bg-[#fff] border border[#4F4F4F]">
            Completed
          </p>

          <p className="h-[24px] whitespace-nowrap flex items-center justify-center p-[15px] w-fit text-[11px] rounded-[22px] bg-[#fff] border border[#4F4F4F]">
            Cancelled
          </p>
        </div>

        <div className="w-full px-[5%] block md:hidden ">
          <div className="w-full flex justify-between mt-[30px] ">
            <p className="text-[14px] text-[#000] ">Mon, 13 Sep, 2022</p>

            <div className="w-[83px]">
              <SelectInputBox rounded="rounded-full" />
            </div>
          </div>

          <div className="w-full mt-[20px]">
            {[...Array(6)].map((item) => {
              return (
                <div className="w-full border border-[#C0C0C0] mt-[20px] rounded-[10px] bg-[#fff] p-[15px] ">
                  <div className="flex justify-between ">
                    <p className="text-[10px] text-[#000]">Today</p>

                    <p className="text-[12px] text-[#979797]">ORD-123SA</p>
                  </div>

                  <p className="text-[21px] text-[#000] font-[600] my-[10px] ">
                    ₦750
                  </p>

                  <div className="flex justify-between ">
                    <p className="text-[10px] text-[#000]">Today</p>

                    <div className="bg-[#0C6EFD] rounded-[20px] text-[10px] px-[20px] py-[5px] flex justify-center items-center text-[#fff] ">
                      Pending
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full px-[3%] hidden md:block py-[3%]">
          <Tabs defaultValue="all">
            <Tabs.List>
              <Tabs.Tab value="all">All</Tabs.Tab>
              <Tabs.Tab value="completed">Completed</Tabs.Tab>
              <Tabs.Tab value="pending">Pending</Tabs.Tab>
              <Tabs.Tab value="cancelled">Cancelled</Tabs.Tab>
            </Tabs.List>
          </Tabs>

          <div className="w-full mt-[2px]">
            {/* <Table>
              <Table>
                <Table>
                  <td>Element position</td>
                  <td>Element name</td>
                  <td>Symbol</td>
                  <td>Atomic mass</td>
                </Table>
              </Table>
              <Table>{rows}</Table>
            </Table> */}

            <DataTable
              withBorder={false}
              borderRadius="sm"
              withColumnBorders={false}
              striped={false}
              highlightOnHover={false}
              // provide data
              records={[
                {
                  orderCode: "ORD-ABCCXS",
                  customerName: "Aminu Hashim",
                  profit: "NGN 450.00",
                  orderStatus: "Pending",
                  orderDate: "15 July",
                  icon: (
                    <Link href="/orders/order-details">
                      <IoIosArrowForward />
                    </Link>
                  ),
                },
                // more records...
              ]}
              // define columns
              columns={[
                {
                  accessor: "orderCode",
                  title: "Order Code",
                  textAlignment: "left",
                },
                {
                  accessor: "customerName",
                  title: "Customer Name",
                  textAlignment: "left",
                },
                {
                  accessor: "profit",
                  title: "Profit",
                  textAlignment: "left",
                },
                {
                  accessor: "orderStatus",
                  title: "Order Status",
                  textAlignment: "left",
                },
                {
                  accessor: "orderDate",
                  title: "Order Date",
                  textAlignment: "left",
                },
                {
                  accessor: "icon",
                  title: "",
                  textAlignment: "right",
                },
              ]}

              // pagination logic
              // totalRecords={employees.length}
              // recordsPerPage={PAGE_SIZE}
              // page={page}
            />
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Orders;
