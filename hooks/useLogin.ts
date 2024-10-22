import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/constants/Common";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "@/redux/slices/userSlice";
import { clearToken, setToken } from "@/redux/slices/tokenSlice";
import { AppDispatch } from "@/redux/store/store";
import { clearMessage, setMessage } from "@/redux/slices/messageSlice";
import { clearProject } from "@/redux/slices/projectSlice";
import { clearSite } from "@/redux/slices/siteSlice";

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation();
  const dispatch: AppDispatch = useDispatch();

  const login = async () => {
    const params = { userName, password };
    const loginURL = `${BASE_URL}/user/login`;
    setLoading(true);
    setError(null);
    dispatch(clearMessage());
    try {
      const loginResp = await axios.get(loginURL, { params });
      const { data } = loginResp;
      const loginData = data?.data;
      const { token, user } = loginData;
      dispatch(setUser(user));
      dispatch(setToken(token));
      // @ts-expect-error: Ignoring type error intentionally
      navigation.navigate("main");
    } catch (err: any) {
      setError(err.response?.data || err);
      if (err.response.status === 401) {
        dispatch(setMessage("Usuario o contraseña incorrectos"));
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    try {
      dispatch(clearMessage());
      dispatch(clearProject());
      dispatch(clearSite());
      dispatch(clearUser());
      dispatch(clearToken());
      // @ts-expect-error: Ignoring type error intentionally
      navigation.navigate("index");
    } catch (err) {}
  };

  return {
    login,
    userName,
    setUserName,
    password,
    setPassword,
    loading,
    error,
    logout,
  };
};

export default useLogin;
