import * as ImageManipulator from "expo-image-manipulator";
import axios from "axios";
import { FileType } from "@/types/file-type";
import useGetApi from "./useGetApi";

const useSaveImages = () => {
  const { api } = useGetApi();
  const resizeImage = async (uri: string): Promise<string | undefined> => {
    try {
      const manipResult = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: 1024 } }],
        { compress: 0.9, format: ImageManipulator.SaveFormat.JPEG }
      );
      return manipResult.uri;
    } catch (err) {
      console.log("Error resizing: ", err);
      return undefined;
    }
  };

  // Function to upload the image to S3
  const uploadToS3 = async (folder: string, file: FileType): Promise<string | null> => {
    try {
      const bucketUrlResp = await api.get("/param");
      const results = bucketUrlResp.data.data;
      const bucketUrl = results[0].BUCKET_URL;
      const s3UploadUrl = `${bucketUrl}${folder}/${file.fileName}`;
      const resizedUri = await resizeImage(file.uri);
      if (!resizedUri) return null;

      const response = await fetch(resizedUri);
      const blob = await response.blob();

      const options = {
        headers: {
          "Content-Type": blob.type,
        },
        transformRequest: [
          (data: any, headers: any) => {
            return data;
          },
        ],
      };
      await axios.put(s3UploadUrl, blob, options);

      return s3UploadUrl;
    } catch (error) {
      console.error("S3 upload error:", JSON.stringify(error));
      return null;
    }
  };

  return {
    uploadToS3,
  };
};

export default useSaveImages;
