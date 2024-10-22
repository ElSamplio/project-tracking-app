import { ScrollView, Image, View } from "react-native";
import styles from "./style";

interface ImageViewerProps {
  imagesUris: string[];
}

const ImageViewer: React.FC<ImageViewerProps> = ({ imagesUris }) => {
  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal>
        {imagesUris.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.imageTile} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default ImageViewer;
