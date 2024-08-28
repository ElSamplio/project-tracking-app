import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/constants/Common";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";
import { setToken } from "@/redux/slices/tokenSlice";
import { AppDispatch } from "@/redux/store/store";

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
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    userName,
    setUserName,
    password,
    setPassword,
    loading,
    error,
  };
};

export default useLogin;
