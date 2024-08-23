import { Dimensions, PixelRatio } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Sizes = {
  TEXT_INPUT_HEIGHT: PixelRatio.getFontScale() * 52,
  TEXT_INPUT_BORDER_RADIUS: PixelRatio.getFontScale() * 26,
  FULL_WIDTH_HORIZONTAL_GAP: windowWidth * 0.05,
  TEXT_INPUT_PLACEHOLDER_FONT: PixelRatio.getFontScale() * 14,
  TEXT_INPUT_PLACEHOLDER_GAP: PixelRatio.getFontScale() * 10,
  CLICKABLE_PRIMARY_HEIGHT: PixelRatio.getFontScale() * 61,
  CLICKABLE_PRIMARY_BORDER: PixelRatio.getFontScale() * 15,
  CLICKABLE_FONT: PixelRatio.getFontScale() * 22,
};

export default Sizes;
