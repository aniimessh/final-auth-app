import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CTAButton from "@/ui/Button";
import { router } from "expo-router";
import OTPVerificationModal from "./otp-verification";
import { useDispatch, useSelector } from "react-redux";
import { sendOTP, skip } from "@/redux/slices/authSlice";

const LoginSignupModal = () => {
  const { isVerified, otpsent, status, message, skipFornow } = useSelector(
    (state: {
      auth: {
        isVerified: boolean;
        otpsent: boolean;
        status: string;
        message: string;
        skipFornow: boolean
      };
    }) => state.auth
  );
  if (status === "success") {
    ToastAndroid.show(message, ToastAndroid.BOTTOM);
  }

  const [email, setEmail] = useState("");
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const dispatch = useDispatch<any>();

  // Email validation function
  const isValidEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleContinue = async () => {
    if (!email) {
      ToastAndroid.show("Enter an email", ToastAndroid.BOTTOM);
      return;
    }
    if (!isValidEmail(email)) {
      ToastAndroid.show("Enter a valid email address", ToastAndroid.BOTTOM);
      return;
    }
    dispatch(sendOTP(email));
  };

  return (
    <View
      className={`absolute h-full w-full bottom-0 bg-black/30 justify-end z-50 ${
        isVerified ? "hidden" : ""
      }`}
    >
      <View className="w-full h-72">
        <View className="bg-white h-full p-4 rounded-t-3xl">
          <Text
            className="text-2xl"
            style={{ fontFamily: "Outfit_600SemiBold" }}
          >
            Sign up to continue
          </Text>
          <View className="mt-4">
            <Text
              className="text-green"
              style={{ fontFamily: "Outfit_400Regular" }}
            >
              Email
            </Text>
            <TextInput
              textContentType="emailAddress"
              className="border-b-2 border-green py-1"
              value={email}
              keyboardType="email-address"
              onChangeText={setEmail}
              style={{ fontFamily: "Outfit_400Regular" }}
            />
            <CTAButton
              title="Continue"
              onPress={handleContinue}
              status={status}
            />
            <TouchableOpacity>
              <Text
                className="text-center mt-4"
                onPress={() => {router.push("/"); dispatch(skip())}}
              >
                Skip for now
              </Text>
            </TouchableOpacity>
            <View className="my-3">
              <Text
                className="text-center"
                style={{ fontFamily: "Outfit_400Regular" }}
              >
                By Continuing you agree to{" "}
                <Text className="text-green">Term's & Condition</Text> and{" "}
                <Text className="text-green">Privacy Policy</Text>
              </Text>
            </View>
          </View>
        </View>
        {/* Render OTP Verification Modal */}
        {otpsent && <OTPVerificationModal email={email} />}
      </View>
    </View>
  );
};

export default LoginSignupModal;
