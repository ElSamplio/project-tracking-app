import Sizes from "@/constants/Sizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 0,
    paddingRight: Sizes.FULL_WIDTH_HORIZONTAL_GAP
  },
  input: {
    flex: 1,
    marginLeft: 0
  },
  iconContainer: {
    padding: 1,
  },
});

export default styles;
