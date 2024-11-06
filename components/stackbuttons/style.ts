import { StyleSheet } from "react-native";
import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  extraButtonsContainer: {
    flexDirection: "row",
    position: "absolute",
    right: fontScale * 75,
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
