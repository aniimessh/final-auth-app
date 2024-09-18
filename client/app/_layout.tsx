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
import { Provider } from "react-redux";
import store from "../redux/store";

const RootLayout = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

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
      <Provider store={store}>
        <View style={[styles.container]}>
          <Stack screenOptions={{ headerShown: false, statusBarStyle: "dark" }}>
            <Stack.Screen name="(tabs)" />
          </Stack>
        </View>
        <LoginSignupModal  />
        {/* {isAuth && <LoginSignupModal setIsAuth={setIsAuth} isAuth={isAuth} />} */}
      </Provider>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up full space
  },
});
