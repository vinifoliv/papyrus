import { ThemedAreaView } from "@/components/ThemedAreaView";
import { useDocumentPicker } from "@/hooks/useDocumentPicker";
import { useHistory } from "@/hooks/useHistory";
import { useSelectedFile } from "@/hooks/useSelectedFile";
import { useEffect } from "react";
import { Dimensions } from "react-native";
import Pdf from "react-native-pdf";

const { width, height } = Dimensions.get("screen");

export default function Reader() {
  const { addToHistory } = useHistory();
  const { selectFile } = useDocumentPicker();
  const { selectedFile, setSelectedFile } = useSelectedFile();

  const handleSelectDocument = async () => {
    const file = await selectFile();
    if (file) setSelectedFile(file);
  };

  if (!selectedFile) (async () => await handleSelectDocument())();

  useEffect(() => {
    if (selectedFile) addToHistory(selectedFile);
  }, [selectedFile, addToHistory]);

  return (
    <ThemedAreaView>
      <Pdf
        style={{ flex: 1, width, height }}
        source={{ uri: selectedFile?.uri }}
      />
    </ThemedAreaView>
  );
}
