import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();

const styles = StyleSheet.create({
  tagContainer: {
    backgroundColor: Colors.TAG_BACKGROUND,
    borderRadius: fontScale * 5,
    alignItems: "center",
    justifyContent: "center",
    margin: fontScale * 5,
    padding: fontScale * 5
  },
  tagText: {
    fontFamily: "RalewayRegular"
  },
});

export default styles;
