import { StyleSheet } from "react-native";
import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sectionTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontFamily: "RalewayRegular",
    fontSize: fontScale * 18,
    marginBottom: fontScale * 10,
  },
});

export default styles;
