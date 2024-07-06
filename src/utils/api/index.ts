import {getBookingStats} from "../api/dashboard/getBookingstats"
import { getAllActivity } from "./activity/getAllActivity";
import { getBookingList } from "./booking/getBookingList";

import { getBookingsChart, getRoomBookingsChart } from "./charts/charts";

export const api = {
  auth: {},
  activity:{
    getAllActivity
  },
  dashboard:{
    getBookingStats
  },
 
  charts:{
    getBookingsChart, 
    getRoomBookingsChart
  },
  bookings:{
    getBookingList
  }
};
