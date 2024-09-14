import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SigninForm from "@/components/form/SigninForm";

const SignInPage = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      >
        <View className="items-center mt-4">
          <Image source={require("../../assets/images/Logo.png")} />
          <Text
            className="text-3xl mt-5"
            style={{
              fontFamily: "Raleway_700Bold",
            }}
          >
            Log in to your account
          </Text>
          <Text
            className="text-gray-400 text-center text-xl leading-[22px] mt-2"
            style={{
              fontFamily: "Raleway_400Regular",
            }}
          >
            Welcome back! Please enter your details
          </Text>
        </View>
        <SigninForm />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInPage;
