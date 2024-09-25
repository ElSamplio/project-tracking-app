import { AppDispatch, RootState } from "@/redux/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGetApi from "./useGetApi";
import useGetCompany from "./useGetCompany";
import { clearMessage, setMessage } from "@/redux/slices/messageSlice";
const useSaveProject = () => {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();
  const company = useSelector((state: RootState) => state.company.company);
  const { api } = useGetApi();
  const { loadCompany } = useGetCompany();
  const dispatch: AppDispatch = useDispatch();

  const saveProject = async () => {
    try {
      setLoading(true);
      const body = {
        id: company?._id,
        data: {
          projects: [
            ...(company?.projects || []),
            {
              name,
              description,
            },
          ],
        },
      };
      const response = await api.patch("/company", body);
      if (response.data?.success) {
        await loadCompany();
        setName("");
        setDescription("");
        dispatch(setMessage('Proyecto creado'))
      }
    } catch (err) {
      setError(err);
      dispatch(clearMessage());
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    setName,
    description,
    setDescription,
    saveProject,
    loading,
    error,
  };
};
export default useSaveProject;
