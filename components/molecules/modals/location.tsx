import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { BiSearchAlt2 } from "react-icons/bi";
import { CloseIcon } from ".";
import { Button, Checkbox, Radio, TextInput } from "@mantine/core";

export const Location = () => {
  const locationList = [
    "Abuja(FCT)",
    "Lagos State",
    "Ogun State",
    "Oyo State",
    "Rivers State",
    "Abia State",
    "Adamawa State",
    "Akwa Ibom State",
  ];
  return (
    <div className=" flex overflow-auto scroll-hidden flex-col  w-[551px] max-[650px]:w-[90vw]">
      <div className=" py-[clamp(12px,1.6px,24px)] px-[clamp(25px,3.5vw,50px)] flex justify-between items-center bg-white ">
        <h4 className=" font-semibold text-xl text-[#000] ">Change Location</h4>
        <div className=" cursor-pointer" onClick={close}>
          <CloseIcon />
        </div>
      </div>

      <div className=" py-[25px] overflow-auto scroll-hidden px-[clamp(25px,3.5vw,50px)] flex flex-col gap-[56px] bg-kamel-ghostwhite">
        <div className="grid flex-1 overflow-auto grid-rows-[auto_1fr] gap-4">
          <TextInput
            icon={<BiSearchAlt2 color="#4F4F4F" size={20} />}
            placeholder="Find state or city"
            classNames={{
              input:
                "placeholder:font-medium  placeholder:text-kamel-grey border-none bg-kamel-ghostwhite  ",
            }}
          />

          <div className=" bg-white overflow-auto scroll-hidden">
            {locationList.map((item, id) => (
              <div
                key={id}
                className="flex justify-between border-b-2 border-kamel-chinesewhite py-[21px] pl-[29.3px] pr-[31px]  "
              >
                <div className="flex gap-[10.5px] items-center  ">
                  <h3 className=" text-base font-medium text-[#000]">{item}</h3>
                  <GoDotFill color="#155F5B" size={16} />
                  <p className="text-[14px] font-normal text-kamel-spanishgray">
                    123390 Products
                  </p>
                </div>
                <Radio
                  classNames={{
                    radio: "border-[#323232] border-2  ",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Button className=" bg-kamel-green hover:bg-kamel-green text-white rounded-[5px] text-xl font-medium h-[50px]  ">
            Apply
          </Button>
          <div className=" text-center">
            <Link
              href="/"
              className=" underline text-kamel-red text-[14px] font-medium"
            >
              Clear filter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
