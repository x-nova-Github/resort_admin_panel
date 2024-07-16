import { request } from "../api";
import {headers}  from "../../../configs/apiconfig";
import { MESSAGE } from "../../../constants/api/message";
// import { Payload } from "../../../@types/api/api.types";

const { get } = request;

const initialRoute = "activity";



export const getAllActivity = async () => {
    try {
      const endpoint = `${initialRoute}/getAll-activity`;
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