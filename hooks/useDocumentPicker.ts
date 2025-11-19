import * as DocumentPicker from "expo-document-picker";
import { File } from "@/interfaces/File";

const selectFile = async (): Promise<File | null> => {
  const document = await DocumentPicker.getDocumentAsync({
    type: "application/pdf",
  });

  if (document.canceled) return null;

  const file = document.assets.at(0);
  if (!file) return null;

  return {
    uri: file.uri,
    name: file.name,
    byteSize: file.size!,
    lastModified: new Date(file.lastModified),
  };
};

export const useDocumentPicker = () => {
  return { selectFile };
};
