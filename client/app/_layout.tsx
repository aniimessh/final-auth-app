import React, { useState } from "react";
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
import LoginSignupModal from "@/components/modals/login-signup";
import { StyleSheet, View } from "react-native";

const RootLayout = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);

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
    <>
      <View style={[styles.container]}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </View>
      {isAuth && <LoginSignupModal setIsAuth={setIsAuth} isAuth={isAuth} />}
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up full space
  },
});
