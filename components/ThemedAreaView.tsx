import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export const ThemedAreaView = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const theme = useTheme();
  return (
    <SafeAreaView
      className={`flex-1 ${className}`}
      style={{ backgroundColor: theme.colors.background }}
    >
      {children}
    </SafeAreaView>
  );
};
