import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";

const fonts = {
  ...MD3LightTheme.fonts,
  bodyLarge: {
    ...MD3LightTheme.fonts.bodyLarge,
    fontFamily: "Roboto_400Regular",
  },
  bodyMedium: {
    ...MD3LightTheme.fonts.bodyMedium,
    fontFamily: "Roboto_400Regular",
  },
  bodySmall: {
    ...MD3LightTheme.fonts.bodySmall,
    fontFamily: "Roboto_400Regular",
  },
  titleLarge: {
    ...MD3LightTheme.fonts.titleLarge,
    fontFamily: "Poppins_700Bold",
  },
  titleMedium: {
    ...MD3LightTheme.fonts.titleMedium,
    fontFamily: "Poppins_700Bold",
  },
  titleSmall: {
    ...MD3LightTheme.fonts.titleSmall,
    fontFamily: "Poppins_400Regular",
  },
};

export const lightTheme = {
  ...MD3LightTheme,
  fonts,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#C9A875",
    primaryContainer: "#E8D3B4",
    onPrimary: "#FFFFFF",

    background: "#F5EEDC",
    onBackground: "#4A4032",

    surface: "#FAF7EF",
    onSurface: "#4E4639",

    surfaceVariant: "#E1D9C7",
    onSurfaceVariant: "#4A4032",

    outline: "#9A8C74",

    tertiary: "#B7C49E",
    onTertiary: "#2E3325",
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  fonts,
  colors: {
    primary: "#D8C088",
    primaryContainer: "#5E4A2E",
    onPrimary: "#3B2E1B",

    background: "#1B1510",
    onBackground: "#EADFC9",

    surface: "#221C16",
    onSurface: "#E6DCC8",

    surfaceVariant: "#4A3F31",
    onSurfaceVariant: "#D8CBB5",

    outline: "#8D7E68",
    outlineVariant: "#4F4537",

    tertiary: "#C2D0A8",
    onTertiary: "#2E3825",
  },
};
