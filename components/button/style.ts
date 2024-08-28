import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";

const styles = StyleSheet.create({
  button:{
    backgroundColor: Colors.CLICKABLE_PRIMARY_BG,
    height: Sizes.CLICKABLE_PRIMARY_HEIGHT,
    marginLeft: Sizes.FULL_WIDTH_HORIZONTAL_GAP,
    marginRight: Sizes.FULL_WIDTH_HORIZONTAL_GAP,
    borderRadius: Sizes.CLICKABLE_PRIMARY_BORDER,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  disabledButton:{
    backgroundColor: Colors.CLICKABLE_DISABLED,
  },
  buttonText:{
    color: Colors.CLICKABLE_PRIMARY_TEXT,
    fontFamily: "Nunito",
    fontSize: Sizes.CLICKABLE_FONT,
  }
});

export default styles;