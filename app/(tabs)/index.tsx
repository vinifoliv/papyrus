import ScreenTitle from "@/components/ScreenTitle";
import { useDocumentPicker } from "@/hooks/useDocumentPicker";
import { File } from "@/interfaces/File";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const theme = useTheme();
  const { selectFile } = useDocumentPicker();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [history, setHistory] = useState<File[]>([]);

  const handleSelectDocument = async () => {
    const file = await selectFile();
    if (file) {
      setSelectedFile(file);
      setHistory([...history, file]);
    }
  };

  return (
    <SafeAreaView
      className="flex-1 relative"
      style={{ backgroundColor: theme.colors.background }}
    >
      <View className="flex-1 flex-col p-5 gap-5">
        <ScreenTitle>Papyrus</ScreenTitle>

        <View className="flex-1 py-5 ">
          <Text
            className="mb-5"
            variant="headlineSmall"
            style={{ color: theme.colors.onBackground }}
          >
            History
          </Text>
          <ScrollView className="flex-1" contentContainerStyle={{ gap: 5 }}>
            {history.length > 0 ? (
              history.map((item) => (
                <View
                  key={item.uri}
                  className="p-5 rounded-lg"
                  style={{ backgroundColor: theme.colors.surface }}
                >
                  <Text
                    variant="bodyLarge"
                    style={{ color: theme.colors.onSurface }}
                  >
                    {item.name.replace(".pdf", "")}
                  </Text>
                </View>
              ))
            ) : (
              <Text variant="bodyLarge">No documents in history.</Text>
            )}
          </ScrollView>
        </View>

        <View className="w-full absolute bottom-0 flex items-center">
          <IconButton
            className="size-20 z-10 rounded-full"
            icon="file-document"
            iconColor={theme.colors.onPrimary}
            size={50}
            style={{ backgroundColor: theme.colors.primary }}
            onPress={async () => await handleSelectDocument()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
