import IconButton from "@/components/iconbutton";
import PressableTag from "@/components/pressabletag";
import { FC, useEffect, useState, useMemo } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../style";
import { Tag } from "@/types/tag";
import Colors from "@/constants/Colors";
import ActionCard from "@/components/actioncard";
import { EntityType } from "@/enums/EntityType";

interface TagsBoardProps {
  title: string;
  tagType: EntityType;
  data: Tag[] | undefined;
  disableIconButton?: boolean;
  onIconButtonPress: () => void;
  onTagPress?: (tag: Tag) => void;
}

const TagsBoard: FC<TagsBoardProps> = ({
  title,
  tagType,
  data,
  disableIconButton,
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

  const emptySubtitle = useMemo(
    () =>
      tagType === EntityType.PROJECT
        ? `Aún no tienes proyectos en tu compañía, pulsa el botón para crear uno`
        : `Aún no tienes sitios para tu proyecto, selecciona un proyecto y pulsa el botón para crear uno`,
    [tagType]
  );

  return data && data?.length > 0 ? (
    <View>
      <View style={styles.sectionTitleContainer}>
        <View style={styles.sectionTitleTextContainer}>
          <Text style={styles.sectionTitleText}>{title}</Text>
        </View>
        <View style={styles.sectionTitleIconContainer}>
          <IconButton
            backgroundColor={
              !disableIconButton
                ? Colors.CLICKABLE_PRIMARY_BG
                : Colors.CLICKABLE_DISABLED
            }
            iconColor="white"
            iconName="add"
            iconSize={18}
            size={35}
            onPress={onIconButtonPress}
            disabled={disableIconButton}
          />
        </View>
      </View>
      <ScrollView style={styles.tagsScroll} persistentScrollbar={true}>
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
      </ScrollView>
    </View>
  ) : (
    <ActionCard
      title={`No hay ${title.toLowerCase()}`}
      content={emptySubtitle}
      action={{
        iconName: "arrow-forward",
        iconBackground: Colors.CLICKABLE_PRIMARY_BG,
        iconColor: "white",
        onActionPress: onIconButtonPress,
      }}
    />
  );
};

export default TagsBoard;
