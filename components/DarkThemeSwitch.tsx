import { useThemeContext } from "@/hooks/useThemeContext";
import { Switch } from "react-native-paper";

export const DarkThemeSwitch = ({ className }: { className?: string }) => {
  const { useDarkMode, toggleTheme } = useThemeContext();

  return (
    <Switch
      className={className}
      value={useDarkMode}
      onValueChange={toggleTheme}
    />
  );
};
