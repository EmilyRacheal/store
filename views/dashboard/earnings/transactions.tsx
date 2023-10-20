import React, { useContext, useState } from "react";
import DashboardWrapper from "@/molecules/layout/dashboardWrapper/dashboardWrapper";
import { FiDownload } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import { FiArrowDownLeft } from "react-icons/fi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import GoBack from "@/atoms/goBackBtn/goBack";
import HorizontalRule from "@/atoms/horizontalRule/horizontalRule";
import { IModalContext, ModalContext } from "@/providers";
import AddBankAccount from "@/molecules/modals/earningsModals/addBankAccount";
import WithdrawFunds from "@/molecules/modals/earningsModals/withdrawFunds";
import EnterPin from "@/molecules/modals/earningsModals/enterPin";
import WithdrawSuccess from "@/molecules/modals/earningsModals/withdrawSuccess";
import WithdrawErrorState from "@/molecules/modals/earningsModals/withdrawErrorState";
import WithdrwalFess from "@/molecules/modals/earningsModals/withdrwalFess";
import { UseWidth } from "@/utils/useWidh";

const Transactions = () => {
  const { setModalState } = useContext(ModalContext) as IModalContext;
  const [openModal, setOpenModal] = useState(false);
  const [type, setType] = useState<string>("");
  const { screenWidth } = UseWidth();

  const linkData = [
    {
      name: "Withdraw funds",
      id: 1,
      icon: <FiDownload color="#ffffff" />,
      modal: <WithdrawFunds />,
    },
    {
      name: "Add bank account",
      id: 2,
      icon: <MdAdd color="#ffffff" />,
      modal: <AddBankAccount />,
    },
  ];

  const data = [
    { name: "Current Available Balance", id: 1, amount: "₦ 90,000" },
    { name: "Promoted Listings", id: 2, amount: "NGN 0.00" },
  ];

  const recentTransaction = [
    {
      name: "Money In",
      status: "Completed",
      amount: "+ NGN 90,000.00",
      icon: <FiArrowDownLeft color="#fff" size={20} />,
      id: 1,
      bgColor: "#4ECB7157",
      borderColor: "#4ECB71",
      rule: <HorizontalRule />,
    },
    {
      name: "Money Out",
      status: "Completed",
      amount: "+ NGN 90,000.00",
      icon: <FiArrowDownLeft color="#fff" size={20} />,
      id: 2,
      bgColor: "#D8272757",
      borderColor: "#D82727",
      rule: <HorizontalRule />,
    },
  ];

  return (
    <DashboardWrapper hasBorder={screenWidth <= 600 ? false : true}>
      <div className="flex justify-between w-full items-center px-[4%] py-[30px]">
        <GoBack />

        <div className="hidden md:flex gap-x-[20px]">
          {linkData.map((item) => {
            return (
              <div
                className="flex gap-x-2 items-center cursor-pointer"
                key={item.id}
                onClick={() =>
                  setModalState({
                    component: item.modal,
                    opened: true,
                  })
                }
              >
                <div className="bg-[#155F5B26] w-[55.28px] h-[55.28px] rounded-full flex justify-center items-center">
                  <div className="bg-[#155F5B] w-[42.28px] h-[42.28px] rounded-full flex justify-center items-center">
                    {item.icon}
                  </div>
                </div>

                <p className="text-[16px] text-[#4F4F4F] font-medium">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[30px] hidden md:block border border-b-0 border-x-0 border-[#00000050]" />

      <div className="px-[3%]  max-w-[1100px] mx-auto w-full">
        <h1 className="hidden md:block text-[24px] font-semibold pb-4">
          Earnings
        </h1>
        <div className="hidden md:flex justify-between w-full">
          {data.map((item) => {
            return (
              <div className="w-[47%] border-[#C4C4C4] border h-[193px] rounded-[11.58px] ">
                <div className="flex flex-col gap-y-10 px-5 pt-10">
                  <p className="text-[21.82px] text-[#323232]">{item.name}</p>

                  <h1 className="text-[25px] font-semibold text-[#000000]">
                    {item.amount}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-[10px] block md:hidden bg-[#fff] rounded-[11px] px-[3%]">
          <div className="flex w-full">
            <div className="w-[50%] border-[#C4C4C4] border-l-0 border border-y-0 py-[20px] ">
              <div className=" px-[20px]">
                <p className="text-[10px] text-[#323232]">
                  Current Available Balance
                </p>

                <h1 className="text-[18px] mt-[10px] font-semibold text-[#000000]">
                  NGN 90,000
                </h1>
              </div>
            </div>

            <div className="w-[50%] py-[20px] rounded-[11.58px] ">
              <div className=" px-[20px]">
                <p className="text-[10px] text-[#323232]">
                  Current Available Balance
                </p>

                <h1 className="text-[18px] mt-[10px] font-semibold text-[#000000]">
                  NGN 90,000
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:hidden gap-x-[20px] mt-[30px] ">
          {linkData.map((item) => {
            return (
              <div
                className="flex gap-x-2 flex-col justify-center w-[50%] items-center cursor-pointer"
                key={item.id}
                onClick={() =>
                  setModalState({
                    component: item.modal,
                    opened: true,
                  })
                }
              >
                <div className="bg-[#155F5B26] w-[45px] md:w-[55.28px] h-[45px] md:h-[55.28px] rounded-full flex justify-center items-center">
                  <div className="bg-[#155F5B] w-[35px] md:w-[42.28px] h-[35px] md:h-[42.28px] rounded-full flex justify-center items-center">
                    {item.icon}
                  </div>
                </div>

                <p className="text-[10px] md:text-[16px] text-[#4F4F4F] font-medium">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>

        <div className=" max-w-[1100px] mx-auto w-full bg-[#B1C1AC1A] mt-[4%] rounded-[10px] border">
          <div className="flex gap-x-3 w-full items-center p-[3%] md:p-[2%]">
            <div className="bg-[#B1C1AC] w-[20px] md:w-[39.29px] h-[20px] md:h-[39.29px] rounded-full flex justify-center items-center">
              <RiErrorWarningLine
                color="#fff"
                size={screenWidth <= 600 ? 16 : 25}
              />
            </div>
            <p className="text-[#4F4F4F80] text-[7px] md:text-[12px] font-medium w-full max-w-[816px]">
              You can make withdrawals at any time. A 15% service charge will be
              debited on each withdrawal. To avoid charges, you can accumulate
              earnings and withdraw on the 28th day of every month at no cost.
            </p>
          </div>
        </div>

        <div className=" max-w-[1100px] mx-auto w-full">
          <h1 className="text-[#232323] font-semibold text-[12px] sm:text-[24px] pb-5 pt-[30px] md:pt-[3%]">
            Recent transactions
          </h1>
          <div className="w-full h-[10px] md:h-[30px] border border-b-0 border-x-0 border-[#00000020] md:border-[#00000050]" />

          {recentTransaction.map((item, index) => {
            return (
              <div className="pb-[10px] md:pb-0 pt-[20px] rounded-[10px] md:pt-0 shadow-sm bg-[#fff] mt-[15px] ">
                <div className="flex justify-between w-full px-[3%] pb-[3%]">
                  <div className="flex gap-x-2 items-center">
                    <div
                      key={index}
                      style={{
                        backgroundColor: item.bgColor,
                        borderColor: item.borderColor,
                      }}
                      className="border-2  w-[35px] md:w-[46.47px] h-[35px] md:h-[46.47px] rounded-full flex justify-center items-center"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h1 className="text-[#4F4F4F] text-[14px] md:text-[20px] font-semibold">
                        {item.name}
                      </h1>
                      <p className="text-[10px] md:text-[16px]">
                        {item.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-7">
                    <h1 className="font-bold text-[10px] md:text-[20px] text-[#4F4F4F]">
                      {item.amount}
                    </h1>
                    {type === item?.name ? null : (
                      <MdOutlineKeyboardArrowDown
                        color="#323232"
                        size={25}
                        onClick={() => {
                          setType(item?.name);
                          setOpenModal(true);
                        }}
                      />
                    )}

                    {type === item?.name && (
                      <MdOutlineKeyboardArrowUp
                        color="#323232"
                        size={25}
                        onClick={() => {
                          setType(item?.name);
                          setOpenModal(false);
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="w-full hidden md:block ">{item.rule}</div>
                {type === item?.name && openModal && <TransactionsDetails />}
              </div>
            );
          })}

          {/* <div className="w-full flex flex-wrap items-center justify-between px-[7%] ">
            <div className="w-full md:w-[40%] flex mt-[20px]">
              <p className="w-[70%] text-[12px] md:text-[15px] font-semibold">
                Date
              </p>
              <p className="text-[12px] md:text-[15px] font-medium text-[#4F4F4F]">
                16 Jun, 2022
              </p>
            </div>

            <div className="w-full md:w-[40%] flex mt-[20px]">
              <p className="w-[70%] text-[12px] md:text-[15px] font-semibold">
                Time
              </p>
              <p className="text-[12px] md:text-[15px] font-medium text-[#4F4F4F]">
                07:40:34
              </p>
            </div>

            <div className="w-full md:w-[40%] flex mt-[20px]">
              <p className="w-[70%] text-[12px] md:text-[15px] font-semibold">
                Reference
              </p>
              <p className="text-[12px] md:text-[15px] font-medium text-[#4F4F4F]">
                123455_7889
              </p>
            </div>

            <div className="w-full md:w-[40%] flex mt-[20px]">
              <p className="w-[70%] text-[12px] md:text-[15px] font-semibold">
                Type
              </p>
              <p className="text-[12px] md:text-[15px] font-medium text-[#4F4F4F]">
                Money In
              </p>
            </div>

            <div className="w-full md:w-[40%] flex mt-[20px]">
              <p className="w-[70%] text-[12px] md:text-[15px] font-semibold">
                Status
              </p>
              <p className="text-[12px] md:text-[15px] font-medium text-[#4F4F4F]">
                Completed
              </p>
            </div>

            <div className="w-full md:w-[40%] flex mt-[20px]">
              <p className="w-[70%] text-[12px] md:text-[15px] font-semibold">
                Purpose
              </p>
              <p className="text-[12px] md:text-[15px] font-medium text-[#4F4F4F]">
                Commission
              </p>
            </div>

            <div className="w-full md:w-[40%] flex mt-[20px]">
              <p className="w-[70%] text-[12px] md:text-[15px] font-semibold">
                Details
              </p>
              <p className="text-[12px] md:text-[15px] font-medium text-[#4F4F4F]">
                Withdrawal to UBA Account (0123456786) Hashim Aminu Ibrahim
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Transactions;

const TransactionsDetails = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-between px-[7%] ">
      <div className="w-full md:w-[40%] flex mt-[20px]">
        <p className="w-[70%] text-[12px] md:text-[15px] font-semibold">Date</p>
        <p className="text-[12px] md:text-[15px] font-medium text-[#4F4F4F]">
          16 Jun, 2022
        </p>
      </div>

      <div className="w-full md:w-[40%] flex mt-[20px]">
        <p className="w-[70%] text-[12px] md:text-[15px] font-semibold">Time</p>
        <p className="text-[12px] md:text-[15px] font-medium text-[#4F4F4F]">
          07:40:34
        </p>
      </div>

      <div className="w-full md:w-[40%] flex mt-[20px]">
        <p className="w-[70%] text-[12px] md:text-[15px] font-semibold">
          Reference
        </p>
        <p className="text-[12px] md:text-[15px] font-medium text-[#4F4F4F]">
          123455_7889
        </p>
      </div>

      <div className="w-full md:w-[40%] flex mt-[20px]">
        <p className="w-[70%] text-[12px] md:text-[15px] font-semibold">Type</p>
        <p className="text-[12px] md:text-[15px] font-medium text-[#4F4F4F]">
          Money In
        </p>
      </div>

      <div className="w-full md:w-[40%] flex mt-[20px]">
        <p className="w-[70%] text-[12px] md:text-[15px] font-semibold">
          Status
        </p>
        <p className="text-[12px] md:text-[15px] font-medium text-[#4F4F4F]">
          Completed
        </p>
      </div>

      <div className="w-full md:w-[40%] flex mt-[20px]">
        <p className="w-[70%] text-[12px] md:text-[15px] font-semibold">
          Purpose
        </p>
        <p className="text-[12px] md:text-[15px] font-medium text-[#4F4F4F]">
          Commission
        </p>
      </div>

      <div className="w-full md:w-[40%] flex mt-[20px]">
        <p className="w-[70%] text-[12px] md:text-[15px] font-semibold">
          Details
        </p>
        <p className="text-[12px] md:text-[15px] font-medium text-[#4F4F4F]">
          Withdrawal to UBA Account (0123456786) Hashim Aminu Ibrahim
        </p>
      </div>
    </div>
  );
};
