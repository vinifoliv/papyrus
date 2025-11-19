import ScreenTitle from "@/components/ScreenTitle";
import { View } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const theme = useTheme();

  return (
    <SafeAreaView
      className="flex-1 relative"
      style={{ backgroundColor: theme.colors.background }}
    >
      <View className="flex-1 flex-col p-5 gap-5">
        <ScreenTitle>Papyrus</ScreenTitle>

        <View className="flex-1 py-5">
          <Text
            variant="headlineSmall"
            style={{ color: theme.colors.onBackground }}
          >
            History
          </Text>
        </View>

        <View className="w-full absolute bottom-0 flex items-center">
          <IconButton
            className="size-20 z-10 rounded-full"
            icon="file-document"
            iconColor={theme.colors.onPrimary}
            size={50}
            style={{ backgroundColor: theme.colors.primary }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
