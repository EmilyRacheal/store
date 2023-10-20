import React, { useEffect, useState } from "react";
import { Header as Navbar } from "@/components/header";
import styles from "./orderDetails.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import Head from "next/head";
import { Button } from "@mantine/core";

const OrderDetails = () => {
  const router = useRouter();

  return (
    <div>
      <Head></Head>

      <Navbar hasBorder />

      <div className="flex justify-center items-center w-full  bg-[#F9F9F9] md:bg-[#fff] ">
        <div className="w-[93%] max-w-[1500px] md:mt-[30px] mb-[20px]">
          <div
            className="flex items-center cursor-pointer gap-x-3 mt-7 "
            onClick={() => router.back()}
          >
            <AiOutlineArrowLeft />
            <p>Go back</p>
          </div>

          <div
            className={`${styles.contentBox} px-[5%] md:py-[40px] md:mt-[30px]`}
          >
            <div className="w-full flex justify-center ">
              <div className="md:w-[235px] w-[90%] mt-[30px]">
                {/* <OutlineButton
                  onClick={() => {
                    setShowConfirmedModal(true);
                    setBtnLabel(true);
                    handleConfirmOrder();
                  }}
                >
                  <p className="w-full gap-x-2 items-center justify-center flex ">
                    <Image src={key} className={`${styles.image}`} />
                    <span className={`${styles.text}`}>
                      Release Escrow Lock
                    </span>
                  </p>
                </OutlineButton> */}
              </div>

              <div className="md:w-[200px] w-[90%] mt-[30px]">
                {/* <OutlineButton>Leave Review</OutlineButton> */}
              </div>
            </div>

            <div className="md:mt-[80px] mx-auto max-w-[800px] flex justify-between">
              <div className="">
                <p className="text-[#979797] text-[9px] sm:text-[17px] font-[500]">
                  ORDER NUMBER
                </p>
                <p className="text-[11px] sm:text-[17px] font-[500] mt-[8px]">
                  #ORD1234!
                </p>
              </div>

              <div className="">
                <p className="text-[#979797] text-[9px] sm:text-[17px] font-[500]">
                  ORDER STATUS
                </p>
                <p className="text-[11px] sm:text-[17px] font-[500] mt-[8px]">
                  Completed
                </p>
              </div>

              <div className="">
                <p className="text-[#979797] text-[9px] sm:text-[17px] font-[500]">
                  ORDER DATE
                </p>
                <p className="text-[11px] sm:text-[17px] font-[500] mt-[8 px]">
                  MARCH 10, 2023
                </p>
              </div>
            </div>

            <div className="hidden md:flex justify-center max-w-[493px] mt-[40px] w-full mx-auto items-center ">
              <Button
                variant="outline"
                color="#155F5B"
                fullWidth
                style={{
                  color: "#155F5B",
                  border: "1px solid #155F5B",
                  height: "63px",
                  borderRadius: "12px",
                }}
              >
                Leave a Review
              </Button>
            </div>

            <p className="hidden md:block text-center mt-[15px] text-[#999]">
              Click the button below to leave a review{" "}
            </p>

            <div className="w-full pb-[15px] thin-bottom-line mt-[50px] md:mt-[100px] ">
              <h3 className="font-semibold text-[14px] md:text-[18px] w-full">
                ORDER SUMMARY
              </h3>

              <div className="flex w-full justify-between bg-[#fff] items-center mt-[15px]">
                <div className="flex items-center gap-x-[10px] md:gap-x-[15px]">
                  <Image
                    src={require("@/assets/shoe.png")}
                    className="object-contain md:w-fit md:h-fit"
                    width={100}
                    height={100}
                    alt=""
                  />

                  <div className="">
                    <p className="text-[#4F4F4F] text-[9px] md:text-[14px]">
                      Shoes
                    </p>
                    <p className="text-[14px] md:text-[25px] font-semibold my-[5px] md:my-[6px]">
                      Chelsea Boot
                    </p>
                    <p className="text-[10px] md:text-[16px]">
                      Qty: <span className="ml-[5px] md:ml-[10px]">1</span>
                    </p>

                    <div className="flex mt-[5px] md:mt-[15px] gap-x-[20px]">
                      <div className="flex gap-x-[15px] items-center">
                        <p className="text-[10px] md:text-[16px]">Color: </p>
                        <span className="w-[15px] h-[15px] rounded-[50%] bg-[#BB6A32]"></span>
                      </div>

                      <p className="text-[10px] md:text-[16px]">
                        Size: <span className="ml-[5px] md:ml-[10px]">40</span>
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-[14px] md:text-[30px]">NGN 150.00</p>
              </div>

              <div className="flex pb-7 mt-0 md:mt-[55px] bg-[#fff] flex-col items-end  justify-end gap-x-5">
                <div className="flex w-full md:max-w-[460px] md:w-[40%] justify-between mt-[20px] pb-[15px]">
                  <p className="text-[11px] md:text-[17px] sm:w-[65%] text-[#000] font-[600]">
                    SUBTOTAL
                  </p>
                  <p className="text-[11px] md:text-[17px] ml-[10px] sm:ml-0 text-[#000] font-[400]">
                    NGN 150.00
                  </p>
                </div>

                <div className="flex w-full md:max-w-[460px] md:w-[40%] justify-between mt-[20px] pb-[15px]">
                  <p className="text-[11px] md:text-[17px] sm:w-[65%] text-[#000] font-[600]">
                    SALES TAX
                  </p>
                  <p className="text-[11px] md:text-[17px] ml-[10px] sm:ml-0 text-[#000] font-[400]">
                    NGN 5.00
                  </p>
                </div>

                <div className="flex w-full md:max-w-[460px] md:w-[40%] justify-between mt-[20px] border-[0.4px] border-t-0 border-x-0 border-[#1C0F13] pb-[20px]">
                  <p className="text-[11px] md:text-[17px] sm:w-[65%] text-[#000] font-[600]">
                    SHIPPING
                  </p>
                  <p className="text-[11px] md:text-[17px] ml-[10px] sm:ml-0 text-[#000] font-[400]">
                    NGN 9..00
                  </p>
                </div>

                <div className="flex w-full md:max-w-[460px] md:w-[40%] justify-between mt-[20px]">
                  <p className="text-[11px] md:text-[17px] sm:w-[65%] text-[#000] font-[600]">
                    TOTAL
                  </p>
                  <p className="text-[11px] md:text-[17px] ml-[10px] sm:ml-0 text-[#000] font-[400]">
                    NGN 164.00
                  </p>
                </div>
              </div>

              <div className="mt-[50px]">
                <h3 className="font-semibold text-[14px] md:text-[17px] pb-[25px] border-[0.4px] border-t-0 border-x-0 border-[#1C0F13] w-full">
                  ORDER DETAILS
                </h3>

                <div className="grid lg:grid-cols-4 md:grid-col-3 grid-cols-2 w-full gap-x-[5%]  mt-[10px]">
                  <div className="mt-[25px] w-full">
                    <p className="text-[12px] md:text-[17px] font-[600]">
                      CUSTOMER NAME
                    </p>
                    <p className="text-[#4F4F4F]  text-[12px] md:text-[17px] font-[500] mt-[10px]">
                      Aminu Hashim
                    </p>
                  </div>

                  <div className="mt-[25px] w-full">
                    <p className="text-[12px] md:text-[17px] font-[600]">
                      DELIVERY ADDRESS
                    </p>
                    <p className="text-[#4F4F4F]  text-[12px] md:text-[17px] font-[500] mt-[10px]">
                      No 39, 6th Avenue FHA Gwarinpa Abuja
                    </p>
                  </div>

                  <div className="mt-[25px] w-full">
                    <p className="text-[12px] md:text-[17px] font-[600]">
                      DELIVERY LOCATION
                    </p>
                    <p className="text-[#4F4F4F]  text-[12px] md:text-[17px] font-[500] mt-[10px]">
                      Abuja
                    </p>
                  </div>

                  <div className="mt-[25px] w-full">
                    <p className="text-[12px] md:text-[17px] font-[600]">
                      STATUS
                    </p>
                    <p className="text-[#4F4F4F]  text-[12px] md:text-[17px] font-[500] mt-[10px]">
                      Pending
                    </p>
                  </div>

                  <div className="mt-[25px] w-full">
                    <p className="text-[12px] md:text-[17px] font-[600]">
                      PHONE NUMBER
                    </p>
                    <p className="text-[#4F4F4F]  text-[12px] md:text-[17px] font-[500] mt-[10px]">
                      +2348129527140
                    </p>
                  </div>

                  <div className="mt-[25px] w-full">
                    <p className="text-[12px] md:text-[17px] font-[600]">
                      Email
                    </p>
                    <p className="text-[#4F4F4F]  text-[12px] md:text-[17px] font-[500] mt-[10px]">
                      johndeo@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-[50px] md:mt-[80px]">
                <h3 className="font-semibold text-[14px] md:text-[17px] pb-[25px] border-[0.4px] border-t-0 border-x-0 border-[#1C0F13] w-full">
                  SELLER DETAILS
                </h3>

                <div className="flex w-full justify-between mt-[20px]">
                  <p className="text-[11px] md:text-[17px] sm:w-[65%] text-[#4F4F4F] font-[600]">
                    SHOP NAME
                  </p>
                  <p className="text-[11px] md:text-[17px] ml-[10px] sm:ml-0 text-[#4F4F4F] font-[400]">
                    EMMY SHOES
                  </p>
                </div>

                <div className="flex w-full justify-between mt-[20px]">
                  <p className="text-[11px] md:text-[17px] sm:w-[65%] text-[#4F4F4F] font-[600]">
                    PHONE NUMBER
                  </p>
                  <p className="text-[11px] md:text-[17px] ml-[10px] sm:ml-0 text-[#4F4F4F] font-[400]">
                    +234 867 567 7789
                  </p>
                </div>

                <div className="flex w-full justify-between mt-[20px]">
                  <p className="text-[11px] md:text-[17px] sm:w-[65%] text-[#4F4F4F] font-[600]">
                    LOCATION
                  </p>
                  <p className="text-[11px]  md:text-[17px] ml-[10px] sm:ml-0 text-[#4F4F4F] font-[400]">
                    ABUJA
                  </p>
                </div>

                <div className="flex w-full justify-between mt-[20px]">
                  <p className="text-[11px] md:text-[17px] sm:w-[65%] text-[#4F4F4F] font-[600]">
                    ADDRESS
                  </p>
                  <p className="text-[11px] ml-[10px] sm:ml-0 md:text-[17px] text-[#4F4F4F] font-[400]">
                    NO 45 6TH AVENUE GWARIMPA, ABUJA
                  </p>
                </div>

                <div className="flex w-full justify-between mt-[20px]">
                  <p className="text-[11px] md:text-[17px] sm:w-[65%] text-[#4F4F4F] font-[600]">
                    WEBSITE
                  </p>
                  <p className="text-[11px] md:text-[17px] ml-[10px] sm:ml-0 text-[#4F4F4F] font-[400]">
                    emmyshoes.kamel.shop
                  </p>
                </div>
              </div>

              <div className="mt-[80px] w-full ">
                <h3 className="font-semibold text-[14px] md:text-[17px] pb-[25px] border-[0.4px] border-t-0 border-x-0 border-[#1C0F13] w-full">
                  PAYMENT
                </h3>

                <div className="flex w-full mt-[20px]">
                  <p className="text-[11px] md:text-[17px] sm:w-[65%] text-[#4F4F4F] font-[600]">
                    INVOICE NO
                  </p>
                  <p className="text-[11px] md:text-[17px] ml-[10px] sm:ml-0 text-[#4F4F4F] font-[400]">
                    INV-123HDX
                  </p>
                </div>

                <div className="flex w-full mt-[20px]">
                  <p className="text-[11px] md:text-[17px] sm:w-[65%] text-[#4F4F4F] font-[600]">
                    INVOICE STATUS:
                  </p>
                  <p className="text-[11px] md:text-[17px] ml-[10px] sm:ml-0 text-[#4F4F4F] font-[400]">
                    Paid
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[50px] sm:mt-[80px]">
              <h3 className="font-semibold text-[14px] md:text-[17px] pb-[15px] border-[0.4px] border-t-0 border-x-0 border-[#1C0F13] w-full">
                NOTES
              </h3>

              <p className="text-[14px] sm:text-[17px] mt-[20px] text-[#4F4F4F] font-[400]">
                I prefer to have the the hight top boot with pure leather skin
                to match.
              </p>
            </div>

            <div className="mt-[50px] sm:mt-[100px]">
              <div className="w-full mt-[20px]">
                <Button
                  fullWidth
                  className="bg-[#155F5B] hover:bg-[#155F5B] h-[50px]"
                >
                  CONTACT VENDOR
                </Button>
              </div>

              <div className="w-full mt-[30px]">
                <Button variant="default" fullWidth className="h-[50px]">
                  <IoLogoWhatsapp
                    color="#1FAF38"
                    size={20}
                    className="mr-[10px]"
                  />{" "}
                  Message BUYER
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
