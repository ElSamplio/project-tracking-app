import * as ImagePicker from "expo-image-picker";
import { Button, Image, ScrollView, View, Text } from "react-native";
import React, { useState } from "react";
import { FileType } from "@/types/file-type";
import useSaveImages from "@/hooks/useSaveImages";

// Main component
const ImageBoard: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const { uploadToS3 } = useSaveImages();

  // Image Picker function (for multiple images)
  const pickImages = async (): Promise<void> => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true, // Allow selecting multiple images
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const selectedImages = result.assets.map((asset: any) => asset.uri);
      setImages(selectedImages);

      const files: FileType[] = result.assets.map((asset: any) => ({
        uri: asset.uri,
        type: asset.type || "image/jpeg",
        fileName: asset.uri.split("/").pop() || "image.jpg",
      }));

      // Upload each image to S3
      const uploadedImageUrls: string[] = [];
      for (const file of files) {
        try {
          const uploadedImageUrl = await uploadToS3(file);
          if (uploadedImageUrl) {
            uploadedImageUrls.push(uploadedImageUrl);
          }
        } catch (error) {
          console.log("ERROR UPLOADING: ", error);
        }
      }
      setImageUrls(uploadedImageUrls);
    }
  };

  // Camera Picker function
  const takePhoto = async (): Promise<void> => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access the camera is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const asset = result.assets[0];
      const file: FileType = {
        uri: asset.uri,
        type: asset.type || "image/jpeg",
        fileName: asset.uri.split("/").pop() || "image.jpg",
      };

      setImages([asset.uri]);

      // Upload to S3
      try {
        const uploadedImageUrl = await uploadToS3(file);
        if (uploadedImageUrl) {
          setImageUrls([uploadedImageUrl]);
        }
      } catch (error) {
        console.log("ERROR UPLOADING: ", error);
      }
    }
  };

  return (
    <View>
      <Button title="Pick Images" onPress={pickImages} />
      <Button title="Take a Photo" onPress={takePhoto} />
      <ScrollView horizontal>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ width: 100, height: 100, margin: 5 }}
          />
        ))}
      </ScrollView>
      {imageUrls.length > 0 && (
        <View>
          {imageUrls.map((imageUrl, index) => (
            <View key={index}>
              <Text>Uploaded Image URL: {imageUrl}</Text>
              <Image
                source={{ uri: imageUrl }}
                style={{ width: 100, height: 100, margin: 5 }}
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default ImageBoard;
