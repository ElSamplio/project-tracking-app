import { View, Text } from "react-native";
import { Link } from "expo-router";
import InputText from "@/components/inputtext";
import Button from "@/components/button";

const Login = () => {
  return (
    <View style={{ backgroundColor: "white", height: 300 }}>
      <Text style={{fontFamily: "Poppins"}}>This is gonna be the login</Text>
      <InputText placeholder="Test"/>
      <Link href="/main">View details</Link>
      <Button label="Login" />
    </View>
  );
};

export default Login;
