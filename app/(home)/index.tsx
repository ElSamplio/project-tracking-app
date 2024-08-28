import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "@/screens/Login";

const Index = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  return <LoginScreen />;
};

export default Index;
