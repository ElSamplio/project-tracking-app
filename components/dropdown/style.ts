import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginLeft: Sizes.FULL_WIDTH_HORIZONTAL_GAP,
    marginRight: Sizes.FULL_WIDTH_HORIZONTAL_GAP,
  },
  dropdown: {
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: Sizes.TEXT_INPUT_BORDER_RADIUS,
    flexDirection: "row",
    height: Sizes.TEXT_INPUT_HEIGHT,
    paddingStart: Sizes.FULL_WIDTH_HORIZONTAL_GAP,
  },
  selectedText: {
    fontFamily: "Poppins",
    flex: 10,
    marginTop: Sizes.FULL_WIDTH_HORIZONTAL_GAP,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownList: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 4,
    maxHeight: Sizes.DROPDOWN_OPTIONS_MAX_HEIGHT,
    paddingTop: Sizes.DROPDOWN_ICON_VERTICAL_GAP,
  },
  item: {
    padding: Sizes.TEXT_INPUT_PLACEHOLDER_FONT,
    borderBottomWidth: 1,
    borderBottomColor: Colors.CLICKABLE_PRIMARY_BG,
  },
  itemText: {
    fontSize: Sizes.TEXT_INPUT_PLACEHOLDER_FONT,
    fontFamily: "Poppins",
  },
  iconWrapper: {
    position: 'relative',
    flex: 2,
    marginTop: Sizes.DROPDOWN_ICON_VERTICAL_GAP,
  },
  iconBackground: {
    position: 'absolute',
    alignContent: "center",
    justifyContent:"center",
    alignItems: "center"
  },
  iconForeground: {
    position: "absolute",
    left: 8,
    top: 9
  },
});

export default styles;
