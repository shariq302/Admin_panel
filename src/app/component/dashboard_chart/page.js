
'use client'

import React from "react";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const page = () => {

  const state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["","District of Colombia", "Kentucky", "Idaho", "Arizona", "California", "Delaware", "Alabama", "Louisiana","Indiana"]
      }
    },
    series: [
      {
        name: "series-1",
        data: [8,2,2,1,1,1,1,1]
      }
    ]
  }
  

    return (
      <div className="rounded-xl border shadow-md p-5">
        <div className="row">
          <div className="mixed-chart">
          
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="98%"
              height="400"
            />
    
          </div>
        </div>
      </div>
    );
}

export default page;