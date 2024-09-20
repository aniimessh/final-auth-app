import React, { useEffect, useState } from "react";
import { View, Text, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { verifyOTP } from "@/redux/slices/authSlice";
import CTAButton from "@/ui/Button";
import { OtpInput } from "react-native-otp-entry";
import { router } from "expo-router";

const OTPVerificationModal = ({ email }: { email: string }) => {
  const [otp, setOtp] = useState("");
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const dispatch = useDispatch<any>();

  const handleVerify = () => {
    const payload = {
      email: email,
      otp: otp,
    };
    dispatch(verifyOTP(payload));
    Keyboard.dismiss();
  };

  return (
    <View className="absolute h-full w-full bottom-0 bg-black/30 justify-end z-50">
      <View className="w-full h-60">
        <View className="bg-white h-full p-4 rounded-t-3xl">
          <Text
            className="text-lg font-bold"
            style={{ fontFamily: "Outfit_700Bold" }}
          >
            Enter OTP
          </Text>
          <View className="mt-4">
            <OtpInput
              numberOfDigits={6}
              focusColor={"#0D7C9C"}
              type="numeric"
              onTextChange={(value) => setOtp(value)}
            />
            <CTAButton title="Verify" onPress={handleVerify} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default OTPVerificationModal;
