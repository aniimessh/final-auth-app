import { View, Text, TextInput } from "react-native";
import React, { useRef, useState } from "react"; // Import tailwind-rn
import CTAButton from "@/ui/Button";
import { OtpInput } from "react-native-otp-entry";

interface OTPVerificationModalProps {
  onVerify: () => void;
}

const OTPVerificationModal = ({ onVerify }: OTPVerificationModalProps) => {
  return (
    <View className="absolute h-full w-full bottom-0 justify-end">
      <View className="w-full h-60">
        <View className="bg-white h-full p-4 rounded-t-3xl">
          <Text
            className="text-lg font-bold"
            style={{ fontFamily: "Outfit_700Bold" }}
          >
            Enter OTP
          </Text>
          <View className="mt-4">
            {/* otp input */}
            <OtpInput
              numberOfDigits={6}
              focusColor={"#0D7C9C"}
              onTextChange={(text) => console.log(text)}
              type="numeric"
              onFilled={() => onVerify()}
            />
            <CTAButton title="Verify" onPress={onVerify} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default OTPVerificationModal;
