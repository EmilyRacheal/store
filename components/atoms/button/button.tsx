import React from "react";

interface ButtonProp {
  border?: string;
  bg?: string;
  textColor?: string;
  text?: string;
  height?: string;
}

const Button: React.FC<ButtonProp> = ({
  text,
  textColor,
  bg,
  border,
  height,
}) => {
  return (
    <button
      className={`outline-none border w-full  bg-[${bg || "#fff"}] border-[${
        border || "#155F5B"
      }] text-[${textColor || "#fff"}] h-[${height || "44px"}]  rounded-[5px]`}
    >
      {text}
    </button>
  );
};

export default Button;
