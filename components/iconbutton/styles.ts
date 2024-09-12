import { StyleSheet } from "react-native";
import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();

const styles = StyleSheet.create({
  button: {
    borderRadius: fontScale * 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
