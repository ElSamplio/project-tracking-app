import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import styles from "./styles";
import IconButton from "../iconbutton";

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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.contentText}>{content}</Text>
        {action && (
          <View style={styles.actionButton}>
            <IconButton
              iconName={action.iconName}
              iconColor={action.iconColor}
              backgroundColor={action.iconBackground}
              iconSize={25}
              size={40}
              onPress={action.onActionPress}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default ActionCard;
