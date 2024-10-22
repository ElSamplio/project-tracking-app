import { StyleSheet } from "react-native";
import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();

const styles = StyleSheet.create({
  container: {
    height: fontScale * 850,
  },
  imageTile: {
    width: fontScale * 120,
    height: fontScale * 240,
    margin: fontScale * 5,
    marginTop: fontScale * 15,
    borderRadius: fontScale * 20,
  },
});

export default styles;
