
import SmallCard from "../smallCard/SmallCard";
import {
  
  CogIcon,
  ComputerDesktopIcon,

  ExclamationTriangleIcon,
  MapPinIcon,
 
} from "@heroicons/react/24/outline";

const DashboardTopStats = ({dashboardStats}:any) => {
  

  const rows = [
    {
      title: "Total Bookings",
    
    count: dashboardStats?.totalBookings,
      icon: ComputerDesktopIcon,
    },
    { title: "Total Income", count: "₹" + dashboardStats?.totalSumPrice, icon: MapPinIcon },
    {
      title: "This Year Bookings",
      count: dashboardStats?.totalBookingsThisYear,
      icon: CogIcon,
    },
    {
      title: "This Month Bookings",
      count: dashboardStats?.totalBookingsThisMonth,
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
