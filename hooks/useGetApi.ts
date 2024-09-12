import { RootState } from "@/redux/store/store";
import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_URL } from "@/constants/Common";
const useGetApi = () => {
  const token = useSelector((state: RootState) => state.token.token);

  // Create an Axios instance
  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return { api };
};

export default useGetApi;
