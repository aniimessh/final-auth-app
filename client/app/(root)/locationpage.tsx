import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBar from "@/components/shared/Statusbar";

const LocationPage = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar title="Location" />
      <View>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

export default LocationPage;
