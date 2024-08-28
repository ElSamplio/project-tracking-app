import { StyleSheet } from "react-native";
import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  bubble: {
    position: "absolute",
  },
  bubble1: {
    top: fontScale * -50,
    left: fontScale * -30,
    width: fontScale * 210,
    height: fontScale * 230,
  },
  bubble2: {
    top: 0,
    left: 0,
    width: fontScale * 200,
    height: fontScale * 225,
    zIndex: -1000,
  },
  bubble3: {
    top: fontScale * 230,
    right: 0,
    width: fontScale * 50,
    height: fontScale * 100,
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: fontScale * 42,
    fontWeight: "bold",
    color: "#202020",
    fontFamily: "RalewayBold",
    alignSelf: "flex-start",
    marginTop: fontScale * 150,
    marginLeft: fontScale * 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    alignSelf: "flex-start",
    fontFamily: "Nunito",
    marginLeft: fontScale * 20,
  },
  inputText:{
    marginTop: fontScale * 10,
    marginBottom: fontScale * 10,
  },
  cancelText: {
    color: "#202020",
    fontSize: fontScale *16,
    marginTop: fontScale *10,
    fontFamily: "Nunito",
  },
});

export default styles;
