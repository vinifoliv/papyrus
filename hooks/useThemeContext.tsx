import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { lightTheme, darkTheme } from "@/styles/theme";

interface ThemeContextProps {
  useDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemColorscheme = useColorScheme();

  const [useDarkMode, setUseDarkMode] = useState(systemColorscheme === "dark");

  const toggleTheme = () => {
    setUseDarkMode((previous) => !previous);
  };

  const context = useMemo(() => ({ useDarkMode, toggleTheme }), [useDarkMode]);
  const paperTheme = useMemo(
    () => (useDarkMode ? darkTheme : lightTheme),
    [useDarkMode]
  );

  return (
    <ThemeContext.Provider value={context}>
      <PaperProvider theme={paperTheme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "You should not consume useThemeContext outside of the ThemeProvider."
    );
  }

  return context;
};
