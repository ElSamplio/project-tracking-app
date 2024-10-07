import { TouchableOpacity, Text } from "react-native";
import styles from "./style";
import { useState } from "react";
import Colors from "@/constants/Colors";

interface PressableTagProps {
  tagKey: string | number;
  text: string;
  selected: boolean | undefined;
  onPress?: (key: string | number) => void;
}

const PressableTag: React.FC<PressableTagProps> = ({
  tagKey,
  text,
  selected,
  onPress,
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress(tagKey);
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.tagContainer,
        selected && { backgroundColor: Colors.CLICKABLE_PRIMARY_BG },
      ]}
      onPress={handlePress}
    >
      <Text style={[styles.tagText, selected && { color: "white" }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PressableTag;
