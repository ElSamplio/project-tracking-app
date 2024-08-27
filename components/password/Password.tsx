import { FC, useState } from "react";
import { TextInputProps } from "react-native";
import { InputWithIcon } from "../common";

const Password: FC<TextInputProps> = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  return (
    <InputWithIcon
      iconName={isPasswordVisible ? "eye-off" : "eye"}
      iconColor="gray"
      onIconPress={() => setIsPasswordVisible(!isPasswordVisible)}
      secureTextEntry={!isPasswordVisible}
      {...props}
    />
  );
};

export default Password;
