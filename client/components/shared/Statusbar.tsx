import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const StatusBar = ({ title }: { title: string }) => {
  return (
    <View>
      <View className=" border-b border-black/30 p-3 flex-row items-center gap-x-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color="black" />
        </TouchableOpacity>
        <Text
          className="tracking-widest uppercase"
          style={{
            fontFamily: "Outfit_400Regular",
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default StatusBar;

const styles = StyleSheet.create({});
