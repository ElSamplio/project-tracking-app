import React, { useState, useRef, useEffect } from "react";
import { View, Animated } from "react-native";
import IconButton from "../iconbutton";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Sizes from "@/constants/Sizes";
import styles from "./style";

type IconName = keyof typeof Ionicons.glyphMap;

interface StackButtonsProps {
  mainButtonIcon: IconName;
  optionsButtons: React.ReactNode[];
  disabled?: boolean;
}

const StackButtons: React.FC<StackButtonsProps> = ({
  mainButtonIcon,
  optionsButtons,
  disabled,
}) => {
  const [showExtraButtons, setShowExtraButtons] = useState(false);
  const slideAnim = useRef(new Animated.Value(30)).current;

  const toggleButtons = () => {
    setShowExtraButtons((prev) => !prev);
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: showExtraButtons ? 0 : 30,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [showExtraButtons]);

  return (
    <View style={styles.container}>
      <IconButton
        disabled={disabled}
        size={Sizes.ROUND_BUTTON_SIZE}
        onPress={toggleButtons}
        backgroundColor={
          !disabled ? Colors.CLICKABLE_PRIMARY_BG : Colors.CLICKABLE_DISABLED
        }
        iconColor={Colors.CLICKABLE_PRIMARY_TEXT}
        iconName={mainButtonIcon}
        iconSize={Sizes.ROUND_BUTTON_ICON_SIZE}
      />
      {showExtraButtons && (
        <Animated.View
          style={[
            styles.extraButtonsContainer,
            { transform: [{ translateX: slideAnim }] },
          ]}
        >
          {optionsButtons}
        </Animated.View>
      )}
    </View>
  );
};
export default StackButtons;
