import { FC } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

import styles from "./style";
import React from "react";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.buttonStyle]}>
      <Text style={[styles.buttonText, props.textStyle]}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
