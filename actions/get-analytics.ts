import {  } from "@/db_methods/methods";

export const getAnalytics = async (userId: string) => {
  try {

    return {
      data: []
    }
  } catch (error) {
    console.log("[GET_ANALYTICS]", error);
    return {
      data: []
    }
  }
}