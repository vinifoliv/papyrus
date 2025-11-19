import ScreenTitle from "@/components/ScreenTitle";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  const theme = useTheme();

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: theme.colors.background }}
    >
      <View className="flex-1 flex-col p-5">
        <ScreenTitle>Settings</ScreenTitle>
      </View>
    </SafeAreaView>
  );
}
