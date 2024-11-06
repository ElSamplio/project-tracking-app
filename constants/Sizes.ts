import { Dimensions, PixelRatio } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Sizes = {
  TEXT_INPUT_HEIGHT: PixelRatio.getFontScale() * 52,
  TEXT_INPUT_BORDER_RADIUS: PixelRatio.getFontScale() * 26,
  TEXT_INPUT_MARGIN_VERTICAL: PixelRatio.getFontScale() * 5,
  FULL_WIDTH_HORIZONTAL_GAP: windowWidth * 0.05,
  TEXT_INPUT_PLACEHOLDER_FONT: PixelRatio.getFontScale() * 14,
  TEXT_INPUT_PLACEHOLDER_GAP: PixelRatio.getFontScale() * 10,
  CLICKABLE_PRIMARY_HEIGHT: PixelRatio.getFontScale() * 61,
  CLICKABLE_PRIMARY_BORDER: PixelRatio.getFontScale() * 15,
  CLICKABLE_FONT: PixelRatio.getFontScale() * 22,
  INPUT_ICON_SIZE: PixelRatio.getFontScale() * 24,
  DROPDOWN_ICON_VERTICAL_GAP:  PixelRatio.getFontScale() * 10,
  DROPDOWN_OPTIONS_MAX_HEIGHT:  windowHeight * 0.5,
  DROPDOWN_ICON_BG_SIZE:  PixelRatio.getFontScale() * 40,
  DROPDOWN_ICON_SIZE:  PixelRatio.getFontScale() * 15,
  ROUND_BUTTON_SIZE: PixelRatio.getFontScale() * 30,
  ROUND_BUTTON_ICON_SIZE: PixelRatio.getFontScale() * 15,
};

export default Sizes;
