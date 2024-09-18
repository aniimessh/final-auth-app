import { Text, TouchableOpacity } from "react-native";
import type React from "react";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  svg?: React.SVGAttributes<SVGElement>;
  status?: string;
};

const CTAButton = ({ title, onPress, svg, status }: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`py-4 mt-3 rounded-lg bg-green w-full ${
        status === "loading" && "opacity-50"
      }`}
      onPress={onPress}
      disabled={status === "loading"}
    >
      <Text
        className="text-center text-white text-xl mr-2 tracking-widest"
        style={{
          fontFamily: "Outfit_400Regular",
        }}
      >
        {status === "loading" ? <Text>Sending OTP</Text> : title}
      </Text>
    </TouchableOpacity>
  );
};

export default CTAButton;
