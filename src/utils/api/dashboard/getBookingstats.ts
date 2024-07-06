import { request } from "../api";
import {headers}  from "../../../configs/apiconfig";
import { MESSAGE } from "../../../constants/api/message";
import { Payload } from "../../../@types/api/api.types";

const { get } = request;

const initialRoute = "dashboard";



export const getBookingStats = async () => {
    try {
      const endpoint = `${initialRoute}/get-bookingsStats`;
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
            data: {result},
          } = response;
          return result;
        }
      }
      throw new Error();
    } catch (error: unknown) {
      console.log(error);
      throw error;
    }
  };