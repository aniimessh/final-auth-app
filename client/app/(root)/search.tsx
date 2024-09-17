import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const SearchPage = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="border-b">
        <View className="p-3">
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => router.back()}>
              <MaterialIcons name="arrow-back-ios" size={24} color="black" />
            </TouchableOpacity>
            <TextInput
              focusable
              className="border-2 flex-1 rounded-lg border-gray-400 p-2 flex-row items-center"
              placeholder="Search by Keyword"
              autoFocus
            />
          </View>
        </View>
      </View>
      <View>
        <View className="p-3">
          <Text
            className="text-xs text-black bg-black/10 p-1 rounded-md mb-2" 
            style={{
              fontFamily: "Outfit_300Light",
            }}
          >
            Comming Soon
          </Text>
          <View className="flex-row justify-between items-center">
            <Text
              style={{
                fontFamily: "Outfit_300Light",
              }}
              className="text-xs"
            >
              Upload product image to find similar products
            </Text>
            <TouchableOpacity className="bg-pink-600 p-1 rounded-md">
              <Text
                className="text-white "
                style={{
                  fontFamily: "Outfit_400Regular",
                }}
              >
                Search by Image
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchPage;
