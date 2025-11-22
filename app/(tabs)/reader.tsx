import { useDocumentPicker } from "@/hooks/useDocumentPicker";
import { useHistory } from "@/hooks/useHistory";
import { useSelectedFile } from "@/hooks/useSelectedFile";
import { useEffect } from "react";
import { View } from "react-native";
import Pdf from "react-native-pdf";

export default function Reader() {
  const { addToHistory } = useHistory();
  const { selectFile } = useDocumentPicker();
  const { selectedFile, setSelectedFile } = useSelectedFile();

  const handleSelectFile = async () => {
    const file = await selectFile();
    if (file) setSelectedFile(file);
  };

  if (!selectedFile) (async () => await handleSelectFile())();

  useEffect(() => {
    if (selectedFile) addToHistory(selectedFile);
  }, [selectedFile, addToHistory]);

  return (
    <View className="flex-1">
      <Pdf style={{ flex: 1 }} source={{ uri: selectedFile?.uri }} />
    </View>
  );
}
