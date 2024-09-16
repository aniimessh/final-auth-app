import { View, Text, TextInput } from "react-native";
import React, { useState } from "react"; // Import tailwind-rn
import CTAButton from "@/ui/Button";
import { router } from "expo-router";
import OTPVerificationModal from "./otp-verification";


const LoginSignupModal = ({
  setIsAuth,
  isAuth,
}: {
  setIsAuth: (value: boolean) => void;
  isAuth: boolean;
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOtpVisible, setIsOtpVisible] = useState(false);

  const handleContinue = () => {
    console.log("Phone number:", phoneNumber);
    setIsOtpVisible(true);
  };

  const handleVerify = () => {
    console.log("OTP Verified!");
    setIsAuth(!isAuth);
    router.push("/(tabs)/");
  };
  return (
    <View className="absolute h-full w-full bottom-0 bg-black/30 justify-end">
      <View className="w-full h-64">
        <View className="bg-white h-full  p-4 rounded-t-3xl">
          <Text
            className="text-lg font-bold"
            style={{ fontFamily: "Outfit_700Bold" }}
          >
            Sign up to continue
          </Text>
          <View className="mt-4">
            <Text className="text-green">Phone Number</Text>
            <TextInput
              className="border-b-2 border-green   py-2 mt-2"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
            <CTAButton title="Continue" onPress={handleContinue} />
            <View className="my-3">
              <Text className="text-center">
                By Continuing you agree to{" "}
                <Text className="text-green">Term's & Condition</Text> and{" "}
                <Text className="text-green">Privacy Policy</Text>
              </Text>
            </View>
          </View>
        </View>
        {/* Render OTP Verification Modal */}
        {isOtpVisible && <OTPVerificationModal onVerify={handleVerify} />}
      </View>
    </View>
  );
};

export default LoginSignupModal;
