import ScreenTitle from "@/components/ScreenTitle";
import { ThemedAreaView } from "@/components/ThemedAreaView";
import { useDocumentPicker } from "@/hooks/useDocumentPicker";
import { File } from "@/interfaces/File";
import { useState } from "react";
import { Dimensions, View } from "react-native";
import { ActivityIndicator, useTheme, Text } from "react-native-paper";
import Pdf from "react-native-pdf";

const { width, height } = Dimensions.get("window");

export default function Reader() {
  const theme = useTheme();
  const { selectFile } = useDocumentPicker();

  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(0);

  const [selectedFile, setSelectedFile] = useState<File | null>();

  const handleSelectDocument = async () => {
    const file = await selectFile();
    if (file) setSelectedFile(file);
  };

  if (!selectedFile) (async () => await handleSelectDocument())();

  return (
    <ThemedAreaView>
      <View className="flex-1 p-5">
        <ScreenTitle>Reader</ScreenTitle>
        {loading && (
          <View>
            <ActivityIndicator size="large" color={theme.colors.primary} />
            <Text variant="bodyMedium" style={{ marginTop: 10 }}>
              Carregando PDF...
            </Text>
          </View>
        )}
        <Pdf style={{ flex: 1, width }} source={{ uri: selectedFile?.uri }} />
      </View>
    </ThemedAreaView>
  );
}
