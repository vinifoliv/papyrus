import "../styles/global.css";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { ThemeProvider } from "@/hooks/useThemeContext";
import { HistoryProvider } from "@/hooks/useHistory";
import { SelectedFileProvider } from "@/hooks/useSelectedFile";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fonts] = useFonts({
    Poppins_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fonts) return;

  SplashScreen.hideAsync();

  return (
    <ThemeProvider>
      <HistoryProvider>
        <SelectedFileProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SelectedFileProvider>
      </HistoryProvider>
    </ThemeProvider>
  );
}
