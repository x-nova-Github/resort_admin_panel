import { request } from "../api";
import {headers}  from "../../../configs/apiconfig";
import { MESSAGE } from "../../../constants/api/message";

const { get } = request;

const initialRoute = "bookings";



export const getBookingList = async () => {
    try {
      const endpoint = `${initialRoute}/getAll-bookings`;
      const response = await get(endpoint,{
        ...headers,
      },
      );
      if (response) {
        const {
          data: {message},
        } = response;
        if (message === MESSAGE.get.succ) {
          const {
            data: {results},
          } = response;
          return results;
        }
      }
      throw new Error();
    } catch (error: unknown) {
      console.log(error);
      throw error;
    }
  };