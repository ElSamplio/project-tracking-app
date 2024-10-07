import IconButton from "@/components/iconbutton";
import PressableTag from "@/components/pressabletag";
import { FC, useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "../style";
import { Tag } from "@/types/tag";
import Colors from "@/constants/Colors";

interface TagsBoardProps {
  title: string;
  data: Tag[] | undefined;
  onIconButtonPress: () => void;
  onTagPress?: (tag: Tag) => void;
}

const TagsBoard: FC<TagsBoardProps> = ({
  title,
  data,
  onIconButtonPress,
  onTagPress,
}) => {
  const [tagsData, setTagsData] = useState<Tag[]>();

  useEffect(() => {
    if (data) {
      setTagsData([...data]);
    } else {
      setTagsData([]);
    }
  }, [data]);

  const handlePress = (id: string) => {
    if (tagsData) {
      const currentData = [...tagsData];
      currentData.forEach((elem) => {
        if (elem.id === id) {
          elem.selected = !elem.selected;
        } else {
          elem.selected = false;
        }
      });
      setTagsData([...currentData]);
      if (onTagPress) {
        onTagPress(currentData.filter((elem) => elem.id === id)[0]);
      }
    }
  };

  return (
    <View>
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <IconButton
          backgroundColor={Colors.CLICKABLE_PRIMARY_BG}
          iconColor="white"
          iconName="add"
          iconSize={18}
          size={35}
          onPress={onIconButtonPress}
        />
      </View>
      <View style={styles.tagsContainer}>
        {tagsData?.map((elem) => (
          <PressableTag
            key={elem.id}
            tagKey={elem.id}
            text={elem.label}
            selected={elem.selected}
            onPress={() => handlePress(elem.id)}
          />
        ))}
      </View>
    </View>
  );
};

export default TagsBoard;