import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { FileType } from "@/types/file-type";
import useSaveImages from "@/hooks/useSaveImages";
import { Site } from "@/types/site";
import useSaveProject from "./useSaveProject";

const useImageBoard = (site: Site | null) => {
  const [images, setImages] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const { uploadToS3 } = useSaveImages();
  const { saveSite } = useSaveProject();

  const pickImages = async (): Promise<void> => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
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
      const uploadedImageUrls: string[] = [];
      for (const file of files) {
        try {
          const uploadedImageUrl = await uploadToS3(
            site?._id || "unknown",
            file
          );
          if (uploadedImageUrl) {
            uploadedImageUrls.push(uploadedImageUrl);
          }
        } catch (error) {
          console.log("ERROR UPLOADING: ", error);
        }
      }
      if (site) {
        const siteCopyJson = JSON.stringify(site);
        const siteCopy = JSON.parse(siteCopyJson);
        for (const imageUrl of uploadedImageUrls) {
          siteCopy.images.push(imageUrl);
        }
        console.log("TO SAVE SITE: ", { siteCopy });
        await saveSite(siteCopy);
      }
      setImageUrls(uploadedImageUrls);
    }
  };

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

      setImages([...images, asset.uri]);
      try {
        const uploadedImageUrl = await uploadToS3(site?._id || "unknown", file);
        if (uploadedImageUrl) {
          setImageUrls([uploadedImageUrl]);
        }
      } catch (error) {
        console.log("ERROR UPLOADING: ", error);
      }
    }
  };

  return {
    images,
    imageUrls,
    pickImages,
    takePhoto,
  };
};

export default useImageBoard;
