import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";

type IconName = keyof typeof Ionicons.glyphMap;

interface ActionCardAction {
  iconName: IconName;
  iconBackground: string;
  iconColor: string;
  onActionPress: () => void;
}

interface ActionCardProps {
  title: string;
  content: string;
  action?: ActionCardAction;
}

const ActionCard: FC<ActionCardProps> = ({ title, content, action }) => {
  return <View></View>;
};

export default ActionCard;
