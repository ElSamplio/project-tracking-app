import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.LIGHT_GRAY,
    height: Sizes.TEXT_INPUT_HEIGHT,
    borderRadius: Sizes.TEXT_INPUT_BORDER_RADIUS,
    marginLeft: Sizes.FULL_WIDTH_HORIZONTAL_GAP,
    marginRight: Sizes.FULL_WIDTH_HORIZONTAL_GAP,
    paddingLeft: Sizes.FULL_WIDTH_HORIZONTAL_GAP,
    paddingRight: Sizes.FULL_WIDTH_HORIZONTAL_GAP,
    fontFamily: "Poppins",
  },
  placeholder: {
    position: "absolute",
    left: Sizes.TEXT_INPUT_PLACEHOLDER_GAP,
    top: Sizes.TEXT_INPUT_PLACEHOLDER_GAP,
    fontSize: Sizes.TEXT_INPUT_PLACEHOLDER_FONT,
    fontFamily: "Poppins", 
    opacity: 0,
  },
});

export default styles;
