import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardBody, CardHeader, Select } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { PresentationChartLineIcon } from "@heroicons/react/24/outline";
import { api } from "../../../utils/api";

const MonthlySalesBarChart = () => {
  const [chartData, setChartData] = useState<any>({
    type: "area",
    height: 300,
    series: [],
    options: {
      chart: {
        toolbar: { show: false },
      },
      title: { show: "" },
      dataLabels: { enabled: false },
      colors: ["#ffff00", "#66ff66", "#0066ff"],
      plotOptions: {
        bar: {
          columnWidth: "80%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: { show: false },
        axisBorder: { show: false },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#d9d9d9",
        strokeDashArray: 1,
        xaxis: {
          lines: { show: true },
        },
        padding: { top: 5, right: 20 },
      },
      fill: { opacity: 0.8 },
      tooltip: { theme: "light" },
    },
  });

  const [selectedOption, setSelectedOption] = useState("Monthly");

  useEffect(() => {
    fetchMonthlyRoomBookings();
  }, []); // Fetch data on component mount

  const fetchMonthlyRoomBookings = async () => {
    try {
      const result = await api.charts.getRoomBookingsChart();

      // Prepare series data for each room type
      const roomNames = Array.from(
        new Set(result.map((item: any) => item.roomName))
      );

      const updatedSeries = roomNames.map((roomName: any) => {
        const data = result
          .filter((item: any) => item.roomName === roomName)
          .map((item: any) => item.monthlyBookings);
        return { name: roomName, data };
      });

      // Extract months from result and remove duplicates
      const categories = Array.from(
        new Set(result.map((item: any) => item.month))
      );

      setChartData((prevState: any) => ({
        ...prevState,
        series: updatedSeries,
        options: {
          ...prevState.options,
          xaxis: {
            ...prevState.options.xaxis,
            categories,
          },
        },
      }));
    } catch (error) {
      console.error("Error fetching monthly room bookings:", error);
    }
  };

  return (
    <Card className="w-full md:w-1/2 mx-auto mb-10">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-gray-900 p-2 text-white">
          <PresentationChartLineIcon className="h-6 w-6" />
        </div>
        <div>
          <select
            value={selectedOption}
            onChange={(e: any) => setSelectedOption(e.target.value)}
            className=""
          >
            <option value="Monthly">Hetalbon Eco Resort</option>
            {/* Add more options if needed */}
          </select>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart {...chartData} />
      </CardBody>
    </Card>
  );
};

export default MonthlySalesBarChart;
