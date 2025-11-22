import ScreenTitle from "@/components/ScreenTitle";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Reader() {
  const theme = useTheme();

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: theme.colors.background }}
    >
      <ScreenTitle>Reader</ScreenTitle>
    </SafeAreaView>
  );
}
