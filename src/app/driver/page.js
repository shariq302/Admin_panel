"use client";
import React from "react";
import DashboardLayout from "../component/DashboardLayout/page";
import Driver_Table from "../component/driver_table1/page";
import {
  columns,
  users,
  statusOptions,
} from "../component/table_child_comp/data";

function page() {
  return (
    <div className="overflow-y-hidden">
      <DashboardLayout>
        <h1 className="text-2xl pl-1 pb-5 pt-2 font-inherit uppercase text-gray-500 ">
          drivers
        </h1>
        <div className="px-0 2lx:px-32 lx:px-32 lg:px-32 md:px-32 sm:px-32 bg-slate-50">
        <div className="border p-3 rounded-ss-xl rounded-se-xl bg-[#212529] w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-auto ">
          <p className="text-white capitalize text-inherit text-md">
            driver list
          </p>
        </div>
        <div className=" bg-white rounded-ee-xl rounded-es-xl border shadow-md p-4 w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-auto ">
          <Driver_Table
            // title="name"
            // title1="email"
            // title2="phone"
            // title3="status"
            // title4="actions"
            // columns={columns}
            // users={users}
            // statusOptions={statusOptions}
          />
        </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default page;
