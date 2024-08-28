import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.LIGHT_GRAY,
    height: Sizes.TEXT_INPUT_HEIGHT,
    borderRadius: Sizes.TEXT_INPUT_BORDER_RADIUS,
    paddingLeft: Sizes.FULL_WIDTH_HORIZONTAL_GAP,
    paddingRight: Sizes.FULL_WIDTH_HORIZONTAL_GAP,
    fontFamily: "Poppins",
    width: "90%",
    marginVertical: Sizes.TEXT_INPUT_MARGIN_VERTICAL,
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
