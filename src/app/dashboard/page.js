"use client";

import React from "react";
import DashboardLayout from "../component/DashboardLayout/page";
import Dashboard_Card from "../component/dashboard_cards/page";
import Dashboard_Chart from "../component/dashboard_chart/page";

function page() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl pl-1 pb-5 pt-2 font-inherit uppercase text-gray-500">
        dashboard
      </h1>
      <div>
        <Dashboard_Card />
      </div>
      <div className="mt-10">
        <Dashboard_Chart />
      </div>
    </DashboardLayout>
  );
}

export default page;
