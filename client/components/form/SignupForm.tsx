import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import CTAButton from "../shared/Button";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useForm, Controller, type FieldValues } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(data));
      console.log("User data saved successfully", data);
      router.replace("/(tabs)/");
    } catch (error) {
      console.error("Error saving user data", error);
    }
  };

  return (
    <View
      style={{
        marginTop: 40,
      }}
    >
      {/* name field */}
      <View>
        <Text
          style={{
            fontFamily: "Raleway_400Regular",
          }}
        >
          Name<Text>*</Text>
        </Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Enter your name"
              style={{
                borderWidth: 1,
                borderRadius: 8,
                paddingVertical: 5,
                paddingHorizontal: 6,
                marginTop: 3,
                borderColor: "#d0d5dd",
                fontFamily: "Raleway_400Regular",
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.name && <Text className="text-red-500">Name is required</Text>}
      </View>

      {/* mobile field */}
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
          Mobile<Text>*</Text>
        </Text>
        <Controller
          control={control}
          name="mobile" // Corrected to "mobile"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Enter your number"
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
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.mobile && (
          <Text className="text-red-500">Mobile number is required</Text>
        )}
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
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="***************"
                style={{
                  flex: 1,
                  paddingVertical: 5,
                  paddingHorizontal: 6,
                  fontFamily: "Raleway_400Regular",
                }}
                secureTextEntry={showPassword}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Ionicons
            name="eye-outline"
            size={18}
            color={showPassword ? "#000" : "#9ca3af"}
            style={{ padding: 8 }}
            onPress={() => setShowPassword((prev) => !prev)}
          />
        </View>
        {errors.password && (
          <Text className="text-red-500">Password is required</Text>
        )}
      </View>

      <View className="mt-6">
        <CTAButton title="Create account" onPress={handleSubmit(onSubmit)} />
      </View>
      <View className="mt-6">
        <Text
          style={{
            fontFamily: "Raleway_400Regular",
          }}
          className="text-center"
          onPress={() => router.push("/(auth)/signin")}
        >
          Already have an account?
          <Text className="text-green"> Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignupForm;
