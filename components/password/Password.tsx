import { FC, useState } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "@/constants/Colors";
import * as inputStyles from "../inputtext/style";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";

const Password: FC<TextInputProps> = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  return (
    <View style={[inputStyles.default.input, styles.container]}>
      <TextInput
        {...props}
        style={[inputStyles.default.input,styles.input]}
        secureTextEntry={!isPasswordVisible}
        placeholderTextColor={Colors.PLACEHOLDER}
      />
      <Text style={inputStyles.default.placeholder}>{props.placeholder}</Text>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
      >
        <Ionicons
          name={isPasswordVisible ? "eye-off" : "eye"}
          size={24}
          color="gray"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Password;
