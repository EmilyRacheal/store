import React from "react";

interface Prop {
  rounded?: string;
  height?: string;
  hasLabel?: boolean;
  label?: string;
  textSize?: string;
  textColor?: string;
  labelSize?: string;
  labelColor?: string;
  data?: string[];
}

const SelectInputBox: React.FC<Prop> = ({
  rounded,
  height,
  label,
  hasLabel,
  textSize,
  textColor,
  labelSize,
  labelColor,
  data,
}) => {
  return (
    <div className="">
      {hasLabel && (
        <label
          htmlFor=""
          className={`text-[14px] ${labelSize || "text-[16px]"} ${
            labelColor || "text-[#4F4F4F]"
          }`}
        >
          {label}
        </label>
      )}

      <div
        className={`border w-full ${rounded} ${
          hasLabel && "mt-[10px]"
        }  border-[#1C0F1340]  ${
          height || "h-[30px] md:h-[35px]"
        } px-[10px] rounded-[5px] flex items-center`}
      >
        <select
          name=""
          id=""
          className={` outline-none w-full bg-transparent ${
            textColor || "text-[#4F4F4F]"
          } ${
            textSize || "text-[15px]"
          } rounded-[5px] text-[10px] sm:text-[14px] `}
        >
          {!data ? (
            <option value="">Select</option>
          ) : (
            data.map((item) => {
              return <option value="">{item}</option>;
            })
          )}
        </select>
      </div>
    </div>
  );
};

export default SelectInputBox;
