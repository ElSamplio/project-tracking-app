import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

type IconName = keyof typeof Ionicons.glyphMap;

interface IconButtonProps {
  iconName: IconName;
  iconSize: number;
  iconColor: string;
  backgroundColor: string;
  size?: number;
  disabled?: boolean;
  onPress?: () => void;
}

const IconButton: FC<IconButtonProps> = ({
  iconName,
  iconSize,
  iconColor,
  backgroundColor,
  size,
  disabled,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor, width: size, height: size }]}
      disabled={disabled}
    >
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

export default IconButton;
