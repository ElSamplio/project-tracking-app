import { StyleSheet } from "react-native";
import { PixelRatio } from "react-native";
import Colors from "@/constants/Colors";

const fontScale = PixelRatio.getFontScale();

const styles = StyleSheet.create({
  modalContent: {
    margin: fontScale * 10,
    borderRadius: fontScale * 10,
    alignItems: "center",
  },
  header: {
    backgroundColor: Colors.MODAL_HEADER,
    height: fontScale * 60,
    borderTopStartRadius: fontScale * 9,
    borderTopEndRadius: fontScale * 9,
    width: "100%",
    justifyContent: "center",
    padding: fontScale * 15,
    marginBottom: fontScale * 15,
  },
  headerText: {
    fontFamily: "RalewayBold",
    fontSize: fontScale * 18,
  },
  buttonsPanel: {
    flexDirection: "row",
    marginTop: fontScale * 15,
  },
  actionButtonStyle: {
    width: fontScale * 100,
    height: fontScale * 40,
  },
  closeButtonStyle: {
    width: fontScale * 100,
    height: fontScale * 40,
    borderColor: Colors.CLICKABLE_PRIMARY_BG,
    borderWidth: 2,
    backgroundColor: "white",
  },
  actionButtonTextStyle: {
    fontSize: fontScale * 14,
  },
  closeButtonTextStyle: {
    fontSize: fontScale * 14,
    color: Colors.CLICKABLE_PRIMARY_BG,
  },
});

export default styles;
