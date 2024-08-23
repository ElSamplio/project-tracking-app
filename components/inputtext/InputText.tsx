import { FC } from "react";
import { TextInput, TextInputProps, Text } from "react-native";
import styles from "./style";
import Colors from "@/constants/Colors";

const InputText: FC<TextInputProps> = (props: TextInputProps) => {
  return (
    <>
      <TextInput {...props} style={styles.input} placeholderTextColor={Colors.PLACEHOLDER}/>
      <Text style={styles.placeholder}>{props.placeholder}</Text>
    </>
  );
};

export default InputText;
