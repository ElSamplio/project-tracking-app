import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

interface PressableTagProps {
  tagKey: string | number;
  text: string;
  onPress?: (key: string | number) => void;
}

const PressableTag: React.FC<PressableTagProps> = ({
  tagKey,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.tagContainer}
      onPress={() => (onPress ? onPress(tagKey) : () => {})}
    >
      <Text style={styles.tagText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PressableTag;
