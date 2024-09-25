import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Provider } from "react-redux";
import "react-native-reanimated";
import store from "@/redux/store/store";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Medium.ttf"),
    Nunito: require("../assets/fonts/NunitoSans_10pt-Light.ttf"),
    RalewayBold: require("../assets/fonts/Raleway-Bold.ttf"),
    RalewayRegular: require("../assets/fonts/Raleway-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
