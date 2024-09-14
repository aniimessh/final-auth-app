import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const App = () => {
  return (
    <ImageBackground source={require("../assets/images/background.png")}>
      <View className="h-full w-full bg-white/70">
        <SafeAreaView className="bg-[url('../assets/images/background.png')] h-full p-5">
          <View className="h-full">
            <Image source={require("../assets/images/Logo.png")} />
            <Text
              className="text-6xl mt-10"
              style={{
                fontFamily: "Raleway_700Bold",
              }}
            >
              <Text
                style={{
                  fontFamily: "Raleway_700Bold_Italic",
                }}
                className="text-green"
              >
                Radiate
              </Text>{" "}
              Confidence Your Beauty, Your Way
            </Text>
          </View>
          <View className="absolute bottom-10 w-screen p-3 ">
            <TouchableOpacity
              className="py-4 rounded-lg border-green border"
              onPress={() => router.push("/(auth)/signup")}
            >
              <Text
                className="text-center text-green text-lg"
                style={{
                  fontFamily: "Raleway_500Medium",
                }}
              >
                Create an account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="py-4 mt-3 rounded-lg bg-green"
              onPress={() => router.push("/(auth)/signin")}
            >
              <Text
                className="text-center text-white text-xl mr-2"
                style={{
                  fontFamily: "Raleway_300Light",
                }}
              >
                Existing user
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({});
