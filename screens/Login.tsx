import { View, Image, Text, ActivityIndicator } from "react-native";
import styles from "./style";
import InputText from "@/components/inputtext";
import Password from "@/components/password";
import Button from "@/components/button";
import useLogin from "@/hooks/useLogin";
import Toast from "@/components/toast";

const LoginScreen = () => {
  const { login, userName, setUserName, password, setPassword, loading } =
    useLogin();
  const handleLogin = async () => {
    if (userName && password) {
      await login();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/bubble1.png")}
        style={[styles.bubble, styles.bubble1]}
      />
      <Image
        source={require("../assets/images/bubble2.png")}
        style={[styles.bubble, styles.bubble2]}
      />
      <Image
        source={require("../assets/images/bubble3.png")}
        style={[styles.bubble, styles.bubble3]}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Inicie sesión en el sistema</Text>
        <InputText
          placeholder="Nombre de usuario"
          style={styles.inputText}
          value={userName}
          onChangeText={setUserName}
          editable={!loading}
        />
        <Password
          placeholder="Contraseña"
          style={styles.inputText}
          value={password}
          onChangeText={setPassword}
          editable={!loading}
        />
        <Button
          label="Ingresar"
          onPress={handleLogin}
          disabled={!userName || !password || loading}
        />
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        <Toast />
      </View>
    </View>
  );
};

export default LoginScreen;
