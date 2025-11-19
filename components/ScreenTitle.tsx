import { ReactNode } from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

export default function ScreenTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const theme = useTheme();
  return (
    <View className={"py-5" + className}>
      <Text variant="displaySmall" style={{ color: theme.colors.primary }}>
        {children}
      </Text>
    </View>
  );
}
