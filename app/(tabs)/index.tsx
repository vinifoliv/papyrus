import ScreenTitle from "@/components/ScreenTitle";
import { ThemedAreaView } from "@/components/ThemedAreaView";
import { useHistory } from "@/hooks/useHistory";
import { useSelectedFile } from "@/hooks/useSelectedFile";
import { File } from "@/interfaces/File";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

export default function Index() {
  const theme = useTheme();

  const { history } = useHistory();
  const { setSelectedFile } = useSelectedFile();

  const handleSelectFile = (file: File) => {
    setSelectedFile(file);
  };

  return (
    <ThemedAreaView>
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
              history.map((item, index) => (
                <TouchableOpacity
                  key={`${index}-${item.uri}`}
                  className="p-5 rounded-lg"
                  style={{ backgroundColor: theme.colors.surface }}
                  onPress={() => handleSelectFile(item)}
                >
                  <Text
                    variant="bodyLarge"
                    style={{ color: theme.colors.onSurface }}
                  >
                    {item.name.replace(".pdf", "")}
                  </Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text variant="bodyLarge">No documents in history.</Text>
            )}
          </ScrollView>
        </View>
      </View>
    </ThemedAreaView>
  );
}
