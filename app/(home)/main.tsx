import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

const Main = () => {
  
  const user = useSelector((state: RootState) => state.user.user);
  const token = useSelector((state: RootState) => state.token.token);
  return (
    <View>
      <Text>User: {JSON.stringify(user)}</Text>
      <Text>Token: {token}</Text>
    </View>
  );
};

export default Main;
