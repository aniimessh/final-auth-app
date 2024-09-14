import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import CTAButton from "../shared/Button";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const SigninForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  return (
    <View
      style={{
        marginTop: 40,
      }}
    >
      {/* mobile field */}
      <View>
        <Text
          style={{
            fontFamily: "Raleway_400Regular",
          }}
        >
          Phone number
        </Text>
        <TextInput
          placeholder="93569 27829"
          style={{
            borderWidth: 1,
            borderRadius: 8,
            paddingVertical: 5,
            paddingHorizontal: 6,
            marginTop: 3,
            borderColor: "#d0d5dd",
            fontFamily: "Raleway_400Regular",
          }}
          keyboardType="numeric"
        />
      </View>

      {/* password field */}
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "Raleway_400Regular",
          }}
        >
          Password
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "#d0d5dd",
            marginTop: 3,
          }}
        >
          <TextInput
            placeholder="***************"
            style={{
              flex: 1,
              paddingVertical: 5,
              paddingHorizontal: 6,
              fontFamily: "Raleway_400Regular",
            }}
            secureTextEntry={showPassword}
          />
          <Ionicons
            name="eye-outline"
            size={18}
            color={showPassword ? "#000" : "#9ca3af"}
            style={{ padding: 8 }}
            onPress={() => setShowPassword((prev) => !prev)}
          />
        </View>
      </View>

      <View className="mt-6">
        <CTAButton title="Sign in now" />
      </View>
      <View className="mt-6">
        <Text
          style={{
            fontFamily: "Raleway_400Regular",
          }}
          className="text-center"
          onPress={() => router.push("/(auth)/signup")}
        >
          Don't have an account
          <Text className="text-green"> Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

export default SigninForm;
