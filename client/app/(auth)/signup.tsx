import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SignupForm from "@/components/form/SignupForm";

const SignupPage = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{
        paddingHorizontal: 20
      }}>
        <View className="items-center mt-4">
          <Image source={require("../../assets/images/Logo.png")} />
          <Text
            className="text-3xl mt-5"
            style={{
              fontFamily: "Raleway_700Bold",
            }}
          >
            Create an account
          </Text>
          <Text
            className="text-gray-400 w-3/5 text-center text-xl leading-[22px] mt-2"
            style={{
              fontFamily: "Raleway_400Regular",
            }}
          >
            Please enter your details to start your journey
          </Text>
        </View>
        <SignupForm />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupPage;
