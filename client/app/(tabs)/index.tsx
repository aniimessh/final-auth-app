import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import Categories from "@/components/core/Categories";
import CarouselComponent from "@/components/core/Carousel";
import UserLocation from "@/components/core/Location";

const HomePage = () => {
  return (
    <SafeAreaView className="bg-white">
      <ScrollView>
        <View className="p-3">
          {/* Profile Container */}
          <View className="flex-row justify-between items-center">
            <View className="flex-row gap-x-2 items-start">
              <TouchableOpacity
                onPress={() => router.push("/(root)/accountpage")}
              >
                <Image
                  source={require("../../assets/images/d_avatar.jpg")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 99,
                  }}
                />
              </TouchableOpacity>
              <View>
                <Text style={{ fontFamily: "Outfit_300Light" }}>Hello,</Text>
                <Text style={{ fontFamily: "Outfit_500Medium" }}>
                  Let's shop!
                </Text>
              </View>
            </View>
            <View className="flex-row gap-4">
              <Ionicons name="heart" size={24} color="red" />
              <Ionicons name="cart-sharp" size={24} color="purple" />
            </View>
          </View>

          {/* Search Bar */}
          <View className="mt-4">
            <TouchableOpacity
              className="border-2 rounded-lg border-gray-400 p-2 flex-row items-center"
              activeOpacity={1}
              onPress={() => router.push("/(root)/search")}
            >
              <Ionicons name="search-outline" size={24} color="#9ca3af" />
              <Text className="text-gray-400 ml-2">Search by Keyword</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Area Name Display */}
        <View>
          <UserLocation />
        </View>
        {/* category section */}
        <View className="">
          <Categories />
        </View>
        {/* carousel section */}
        <View>
          <CarouselComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
