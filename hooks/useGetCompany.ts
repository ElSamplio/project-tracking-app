import { useState } from "react";
import useGetApi from "./useGetApi";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/store";
import { setCompany } from "@/redux/slices/companySlice";
import { Company } from "@/types/company";

const useGetCompany = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();
  const { api } = useGetApi();
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch: AppDispatch = useDispatch();

  const loadCompany = async () => {
    const companyId = user?.company;
    const url = `/company/${companyId}`;
    try {
      const response = await api.get(url);
      const responseData = response?.data;
      const company: Company = responseData?.data;
      dispatch(setCompany(company));
      console.log(new Date().getTime(), '  >  ',{company})
    } catch (err: any) {
      setError(err.response?.data || err);
    } finally {
      setLoading(false);
    }
  };
  return { loadCompany, loading, error };
};

export default useGetCompany;
