import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { router, Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RootLayout = () => {
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        if (userData !== null) {
          router.push("/(tabs)/");
        } else {
          router.push("/home");
        }
      } catch (error) {
        console.error("Error retrieving user data", error);
        router.push("/home");
      }
    };
    getUserData();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default RootLayout;
