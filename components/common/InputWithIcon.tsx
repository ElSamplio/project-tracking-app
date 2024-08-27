import { FC } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import Colors from "@/constants/Colors";
import * as inputStyles from "../inputtext/style";
import styles from "@/components/common/inputWithIconStyle";
import { Ionicons } from "@expo/vector-icons";
import Sizes from "@/constants/Sizes";

type IconName = keyof typeof Ionicons.glyphMap;

interface InputWithIconProps extends TextInputProps {
  iconName: IconName;
  iconColor?: string;
  onIconPress?: () => void;
}

const InputWithIcon: FC<InputWithIconProps> = ({
  iconName,
  iconColor="black",
  onIconPress,
  ...props
}) => {
  return (
    <View style={[inputStyles.default.input, styles.container]}>
      <TextInput
        {...props}
        style={[inputStyles.default.input, styles.input]}
        placeholderTextColor={Colors.PLACEHOLDER}
      />
      <Text style={inputStyles.default.placeholder}>{props.placeholder}</Text>
      <Ionicons
        style={styles.iconContainer}
        name={iconName}
        size={Sizes.INPUT_ICON_SIZE}
        color={iconColor}
        onPress={onIconPress}
      />
    </View>
  );
};

export default InputWithIcon;
