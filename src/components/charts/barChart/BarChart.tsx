import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { api } from "../../../utils/api";

const MonthlySalesBarChart = () => {
  const [chartData, setChartData] = useState<any>({
    type: "bar",
    height: 300,
    series: [{ name: "Bookings", data: [] }],
    options: {
      chart: {
        toolbar: { show: false },
      },
      title: { show: "" },
      dataLabels: { enabled: false },
      colors: ["#33ff77"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
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
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: { show: true },
        },
        padding: { top: 5, right: 20 },
      },
      fill: { opacity: 0.8 },
      tooltip: { theme: "dark" },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.charts.getBookingsChart();
        const monthlyBookings = response;

        const categories = monthlyBookings.map((data: any) => data.month);
        const bookings = monthlyBookings.map((data: any) => data.totalBookings);

        setChartData((prevState: any) => ({
          ...prevState,
          series: [{ name: "Bookings", data: bookings }],
          options: {
            ...prevState.options,
            xaxis: {
              ...prevState.options.xaxis,
              categories,
            },
          },
        }));
      } catch (error) {
        console.error("Error fetching booking stats:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="w-full md:w-1/2 mx-auto mb-10">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-gray-900 p-2 text-white">
          <ChartBarIcon className="h-6 w-6" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray">
            This Year Bookings
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart {...chartData} />
      </CardBody>
    </Card>
  );
};

export default MonthlySalesBarChart;
