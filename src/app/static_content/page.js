"use client";
import React, { useState } from "react";
import DashboardLayout from "../component/DashboardLayout/page";
import Card_form from "../component/card_form/page";
import { Select, SelectItem } from "@nextui-org/react";
import Static_Content_Table from "../component/static_content_table/page";

function page() {
  const [selected, setSelected] = useState(1);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption.target.value);
    console.log(`Option selected:`, selectedOption.target.value);
  };
  return (
    <DashboardLayout>
      <div className="bg-slate-50">
        <h1 className="text-2xl pl-1 pb-5 pt-2 font-inherit uppercase text-gray-500">
          STATIC CONTENT
        </h1>
        <div className="px-0 2lx:px-32 lx:px-32 lg:px-32 md:px-32 sm:px-32 bg-slate-50">
          <span
            aria-label="Select Content Type"
            className=" text-slate-950 font-semibold"
          >
            Select Content Type
          </span>
          <Select
            placeholder="Privacy Policy"
            className="max-w-full mb-3 mt-1 pl-3 rounded-sm  bg-white text-slate-950"
            radius="none"
            aria-label="Select Content Type"
            variant="underlined"
            onChange={handleChange}
          >
            <SelectItem
              key="1"
              name="Term and Condition"
              value="Term_and_Condition"
            >
              Term and Condition
            </SelectItem>
             <SelectItem
              key="2"
              name="Privacy Policy"
              value="Privacy_Policy"
              Select
            >
              Privacy Policy
            </SelectItem>
       
           
          </Select>
          <Card_form card_head={selected} />

          <div className="mt-4 border p-3 rounded-ss-xl rounded-se-xl bg-[#212529] w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-auto ">
            <p className="text-white capitalize text-inherit text-md">
              content list
            </p>
          </div>
          <div className="rounded-ee-xl bg-white rounded-es-xl border shadow-md p-4 w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-auto ">
            <Static_Content_Table />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default page;
