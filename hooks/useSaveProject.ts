import { AppDispatch, RootState } from "@/redux/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGetApi from "./useGetApi";
import useGetCompany from "./useGetCompany";
import { clearMessage, setMessage } from "@/redux/slices/messageSlice";
import { clearProject } from "@/redux/slices/projectSlice";
const useSaveProject = () => {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();
  const company = useSelector((state: RootState) => state.company.company);
  const project = useSelector((state: RootState) => state.project.project);
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
        dispatch(setMessage("Proyecto creado"));
      }
    } catch (err) {
      setError(err);
      dispatch(clearMessage());
    } finally {
      setLoading(false);
    }
  };

  const saveSite = async () => {
    try {
      setLoading(true);
      if (company && project && company.projects) {
        const projectsCopyJson = JSON.stringify(company.projects);
        const projectsCopy = JSON.parse(projectsCopyJson);
        projectsCopy.forEach((p: any) => {
          if (p._id === project?._id) {
            p.sites = [...(p.sites || []), { name, description }];
          }
        });
        const body = {
          id: company?._id,
          data: {
            projects: projectsCopy,
          },
        };
        const response = await api.patch("/company", body);
        if (response.data?.success) {
          await loadCompany();
          setName("");
          setDescription("");
          dispatch(setMessage("Sitio creado"));
          dispatch(clearProject())
        }
      }else{
        dispatch(setMessage('Debes seleccionar un proyecto para crear un sitio'))
      }
    } catch (err) {
      console.log({ err });
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
    saveSite,
    loading,
    error,
  };
};
export default useSaveProject;
