import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();

const styles = StyleSheet.create({
  tagContainer: {
    backgroundColor: Colors.TAG_BACKGROUND,
    borderRadius: fontScale * 18,
    minHeight:fontScale * 30,
    alignItems: "center",
    justifyContent: "center",
    margin: fontScale * 5,
    paddingLeft: fontScale * 10,
    paddingRight: fontScale * 10,
  },
  tagText: {
    fontFamily: "RalewayRegular",
    color: Colors.TAG_TEXT_COLOR,
  },
});

export default styles;
