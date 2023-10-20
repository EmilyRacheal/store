import React from "react";
import Image from "next/image";
import Button from "@/atoms/button/button";

const Navbar = () => {
  return (
    <div className="w-full px-[5%] flex justify-between py-[20px]">
      <Image
        alt=""
        width={100}
        className="h-[22px] w-auto "
        height={21}
        src={require("../../assets/logo.png")}
      />

      <div className=""></div>

      <div className="flex gap-x-[20px]">
        <div className="w-[93px]">
          <Button text="Sign Up" border="#155F5B" textColor="#155F5B" />
        </div>

        <div className="w-[93px]">
          <Button
            text="Login"
            border="#155F5B"
            textColor="#fff"
            bg="#155F5B"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
