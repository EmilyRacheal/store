import React from "react";
import { CloseIcon } from ".";
import { Button, Group, Radio } from "@mantine/core";

const headerArr = ["Categories", "Color", "Size"];
const radio1 = [
  "Adinkra T-shirts",
  "Kenta Patterns T-shirts",
  "American Tees",
  "Bermuda Tees",
  "Addis-Ababa Tees",
];

const radio2 = ["Red", "Blue", "Brown", "Green", "Black"];
const radio3 = ["Small", "Medium", "Large", "Extra large"];
export const Filter = () => {
  return (
    <main className="px-[clamp(16px,1.7vw,24px)] py-[clamp(11px,1.1vw,16px)] flex flex-col gap-[13px] w-[551px] max-[650px]:w-[90vw] ">
      <div className=" flex justify-between items-center bg-white border-b border-b-[rgba(0, 0, 0, 0.50)] pb-[13px]">
        <h4 className=" font-semibold text-xl text-[#000] ">Filter</h4>
        <div className=" cursor-pointer" onClick={close}>
          <CloseIcon />
        </div>
      </div>

      <section className="flex flex-col gap-[15px]">
        <section className="flex flex-col gap-[15px]">
          <section className="grid-cols-[2fr_1fr_1fr] grid gap-[15px]">
            <div className=" flex flex-col gap-[15px]">
              <h5 className=" text-kamel-green text-xs font-semibold">
                Categories
              </h5>

              <Radio.Group className="flex flex-col gap-[15px]">
                {radio1.map((item, id) => (
                  <Radio
                    key={id}
                    className=" text-[rgba(0,0,0,0.80)] text-[10px] font-normal w-full "
                    label={item}
                    value={item}
                  />
                ))}
              </Radio.Group>
            </div>

            <div className=" flex flex-col gap-[15px]">
              <h5 className=" text-kamel-green text-xs font-semibold">Color</h5>

              <Radio.Group className="flex flex-col gap-[15px]">
                {radio2.map((item, id) => (
                  <Radio
                    key={id}
                    className=" text-[rgba(0,0,0,0.80)] text-[10px] font-normal w-full "
                    label={item}
                    value={item}
                  />
                ))}
              </Radio.Group>
            </div>

            <div className=" flex flex-col gap-[15px]">
              <h5 className=" text-kamel-green text-xs font-semibold">Size</h5>

              <Radio.Group className="flex flex-col gap-[15px]">
                {radio3.map((item, id) => (
                  <Radio
                    key={id}
                    className=" text-[rgba(0,0,0,0.80)] text-[10px] font-normal w-full "
                    label={item}
                    value={item}
                  />
                ))}
              </Radio.Group>
            </div>
          </section>
        </section>

        <div className=" flex justify-between pt-[15px] shadow-[0px,0px,7.46032px,0px,rgba(0,0,0,0.10)] bg-white">
          <Button className=" bg-transparent hover:bg-transparent border-kamel-green text-kamel-green">
            Cancel
          </Button>
          <Button className=" bg-kamel-green hover:bg-kamel-green text-white">
            Apply
          </Button>
        </div>
      </section>
    </main>
  );
};
