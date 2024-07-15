import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";

import LineChartComponent from "../../charts/lineChart/LineChart";
import DashboardTopStats from "../../shared/dashboardTopStats/DashboardTopStats";
import BarChart from "../../charts/barChart/BarChart";
import { api } from "../../../utils/api";

const DashBoard = () => {

  const [bookingStats,setbookingStats]=useState<any>()
  

  const handleBookingStats=async()=>{
    try {

      const response=await api.dashboard.getBookingStats()
      // console.log("this is response==>",response);
      setbookingStats(response)
      // console.log("bookingstats===>",bookingStats);
      
      
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    handleBookingStats()
  },[])
  return (
    <Layout>
      <div className=" hide_scroll">
        <DashboardTopStats dashboardStats={bookingStats} />
        <div className="flex justify-between gap-10 px-5 my-10">
          <BarChart />
          <LineChartComponent />
        </div>
      </div>
    </Layout>
  );
};

export default DashBoard;
