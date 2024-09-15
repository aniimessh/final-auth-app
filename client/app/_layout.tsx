/**
 * A root layout component that loads Google Outfit fonts and renders a stack of screens.
 *
 * @return {JSX.Element|null} The root layout component, or null if fonts are not loaded.
 */

import React from "react";
import { Stack } from "expo-router";
import {
  Outfit_100Thin,
  Outfit_200ExtraLight,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_800ExtraBold,
  Outfit_900Black,
  useFonts,
} from "@expo-google-fonts/outfit";

const RootLayout = () => {
  const [fonts] = useFonts({
    Outfit_100Thin,
    Outfit_200ExtraLight,
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
    Outfit_800ExtraBold,
    Outfit_900Black,
  });

  if (!fonts) {
    return null;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default RootLayout;
