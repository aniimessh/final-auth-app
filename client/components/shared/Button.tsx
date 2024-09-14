import { View, Text, TouchableOpacity } from "react-native";
import type React from "react";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  svg?: React.SVGAttributes<SVGElement>;
};

const CTAButton = ({ title, onPress, svg }: ButtonProps) => {
  return (
    <TouchableOpacity
      className="py-4 mt-3 rounded-lg bg-green w-full"
      onPress={onPress}
    >
      <Text
        className="text-center text-white text-xl mr-2"
        style={{
          fontFamily: "Raleway_300Light",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CTAButton;
