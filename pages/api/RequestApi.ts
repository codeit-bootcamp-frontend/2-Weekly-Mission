import API_BASE_URL from "../../constants";
import axiosInstance from "./axios";

const requestApi = async (url: string) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await axiosInstance.get(`${API_BASE_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (!(response.status === 200)) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.log("An error occurred:", error);
    throw error;
  }
};

export default requestApi;
