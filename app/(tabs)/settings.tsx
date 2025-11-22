import { DarkThemeSwitch } from "@/components/DarkThemeSwitch";
import ScreenTitle from "@/components/ScreenTitle";
import { ThemedAreaView } from "@/components/ThemedAreaView";
import { View } from "react-native";
import { List } from "react-native-paper";

export default function Settings() {
  return (
    <ThemedAreaView>
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
    </ThemedAreaView>
  );
}
