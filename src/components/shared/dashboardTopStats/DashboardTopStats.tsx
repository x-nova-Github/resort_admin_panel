import React, { useEffect, useState } from "react";
import SmallCard from "../smallCard/SmallCard";
import {
  CalendarDaysIcon,
  CalendarIcon,
  CogIcon,
  ComputerDesktopIcon,
  CurrencyRupeeIcon,
  ExclamationTriangleIcon,
  MapPinIcon,
  ShieldExclamationIcon,
  ShoppingBagIcon,
  SunIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const DashboardTopStats = () => {
  const [sales, setsales] = useState<any>();
  const [devices, setDevices] = useState<any>();

  const rows = [
    {
      title: "Total Bookings",
      count: 5,
      icon: ComputerDesktopIcon,
    },
    { title: "Total Income", count: "₹" + 5440, icon: MapPinIcon },
    {
      title: "This Year Bookings",
      count: 5,
      icon: CogIcon,
    },
    {
      title: "This Month Bookings",
      count: 3,
      icon: ExclamationTriangleIcon,
    },
  ];

  return (
    <>
      <div className="flex justify-between px-10 gap-5 mt-5">
        {rows.map((card, cardIndex) => (
          <SmallCard
            key={cardIndex}
            title={card.title}
            count={card.count}
            Icon={card.icon}
          />
        ))}
      </div>
    </>
  );
};

export default DashboardTopStats;
