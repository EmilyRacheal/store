import React from "react";

interface Prop {
  label?: string;
  placeholder?: string;
  onClick?: any;
  onChange?: any;
  height?: string;
  type?: string;
  value?: string;
  name?: string;
  hideLabel?: boolean;
  textSize?: string;
  textColor?: string;
  labelSize?: string;
  labelColor?: string;
}

const Input: React.FC<Prop> = ({
  label,
  placeholder,
  onChange,
  onClick,
  height,
  type,
  value,
  name,
  hideLabel,
  textSize,
  textColor,
  labelSize,
  labelColor,
}) => {
  return (
    <div className="w-full">
      {hideLabel ? (
        ""
      ) : (
        <label htmlFor="" className={` ${labelSize || "text-[16px]"} ${labelColor || "text-[#4F4F4F]"} text-[14px]`}>
          {label}
        </label>
      )}

      <input
        type={type || "text"}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        value={value}
        name={name}
        className={`w-full bg-[#fff] placeholder:text-[#4F4F4F]  border border-[#1C0F1340] ${textColor || "text-[#4F4F4F]"} ${textSize || "text-[15px]"} rounded-[5px] ${
          height || "h-[50px]"
        } mt-[10px] px-[15px] outline-none`}
      />
    </div>
  );
};

export default Input;
