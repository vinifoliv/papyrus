import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

export default function SettingsScreen() {
  const theme = useTheme();

  return (
    <View
      className="flex-1 flex-col p-20"
      style={{ backgroundColor: theme.colors.background }}
    >
      <Text variant="titleLarge" style={{ color: theme.colors.primary }}>
        Settings
      </Text>
    </View>
  );
}
