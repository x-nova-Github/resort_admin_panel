import { request } from "../api";
import { MESSAGE } from "../../../constants/api/message";
import { headers } from "../../../configs/apiconfig";

const { get } = request;

const initialRoute = "/dashboard";

export const getBookingsChart = async () => {
  try {
    const endpoint = `${initialRoute}/get-bookingsChart`;
    const response = await get(endpoint, {
      ...headers,
    });
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.get.succ) {
        const {
          data: { monthlyBookings },
        } = response;
        return monthlyBookings;
      }
    }
    throw new Error();
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export const getRoomBookingsChart = async () => {
  try {
    const endpoint = `${initialRoute}/get-roombookingsChart`;
    const response = await get(endpoint, {
      ...headers,
    });
    if (response) {
      const {
        data: { message },
      } = response;
      if (message === MESSAGE.get.succ) {
        const {
          data: { result },
        } = response;
        return result;
      }
    }
    throw new Error();
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};
