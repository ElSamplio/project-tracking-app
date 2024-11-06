import { ScrollView, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import React from "react";
import ImageViewer from "@/components/imageviewer";
import IconButton from "@/components/iconbutton";
import Colors from "@/constants/Colors";
import StackButtons from "@/components/stackbuttons";
import Sizes from "@/constants/Sizes";
import useImageBoard from "@/hooks/useImageBoard";
import styles from "./style";

const ImageBoard: React.FC = () => {
  const site = useSelector((state: RootState) => state.site.site);
  const { images, imageUrls, pickImages, takePhoto } = useImageBoard(site);

  const optionsButtons = [
    <View style={{ marginLeft: 5 }} key={1}>
      <IconButton
        size={Sizes.ROUND_BUTTON_SIZE}
        onPress={takePhoto}
        backgroundColor={Colors.CLICKABLE_PRIMARY_BG}
        iconColor={Colors.CLICKABLE_PRIMARY_TEXT}
        iconName="camera-outline"
        iconSize={Sizes.ROUND_BUTTON_ICON_SIZE}
      />
    </View>,
    <View style={{ marginLeft: 5 }} key={2}>
      <IconButton
        size={Sizes.ROUND_BUTTON_SIZE}
        onPress={pickImages}
        backgroundColor={Colors.CLICKABLE_PRIMARY_BG}
        iconColor={Colors.CLICKABLE_PRIMARY_TEXT}
        iconName="image-sharp"
        iconSize={Sizes.ROUND_BUTTON_ICON_SIZE}
      />
    </View>,
  ];

  return (
    <ScrollView style={{ marginTop: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.photosTitleText}>{`Fotos${
          site ? `- ${site.name}` : ``
        }`}</Text>
        <StackButtons
          mainButtonIcon="add"
          optionsButtons={optionsButtons}
          disabled={!site}
        />
      </View>
      <ImageViewer imagesUris={images} />
    </ScrollView>
  );
};

export default ImageBoard;
