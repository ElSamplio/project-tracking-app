import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import HomeScreen from "@/screens/Home";

const Main = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <HomeScreen />
  );
};

export default Main;
