import { DarkThemeSwitch } from "@/components/DarkThemeSwitch";
import ScreenTitle from "@/components/ScreenTitle";
import { View } from "react-native";
import { List, useTheme } from "react-native-paper";
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
        <View className="flex-1 py-5">
          <List.Item
            title="Dark mode"
            left={() => <List.Icon icon="theme-light-dark" />}
            right={() => <DarkThemeSwitch />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
