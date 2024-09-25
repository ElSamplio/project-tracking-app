import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();
const BORDER_RADIUS = fontScale * 10;

const styles = StyleSheet.create({
  container: {
    borderRadius: fontScale * 40,
    justifyContent: "center",
    padding: fontScale * 15,
    backgroundColor: Colors.LIGHT_GRAY,
    margin: fontScale * 10,
    borderBottomEndRadius: BORDER_RADIUS,
    borderBottomStartRadius: BORDER_RADIUS,
    borderTopEndRadius: BORDER_RADIUS,
    borderTopStartRadius: BORDER_RADIUS,
  },
  title: {
    fontFamily: "RalewayBold",
    fontSize: fontScale * 14,
  },
  contentText: {
    fontFamily: "Nunito",
    fontSize: fontScale * 10,
    flex: 10,
    textAlign: "justify",
    marginRight: fontScale * 15,
    marginTop: fontScale * 5,
  },
  actionButton: { 
    flex: 2, 
    marginTop: fontScale * 20 
  },
});

export default styles;
