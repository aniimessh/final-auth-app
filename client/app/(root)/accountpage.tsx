import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import StatusBar from "@/components/shared/Statusbar";
import { router } from "expo-router";

const AccountPage = () => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const dispatch = useDispatch<any>();
  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar title="Account" />
      <View>
        <View className="p-3 flex-row items-center justify-between">
          <TouchableOpacity
            className="flex-row items-center gap-x-3"
            onPress={() => router.push("/(root)\\updateAccount")}
          >
            <View className="relative">
              <Image
                source={require("../../assets/images/d_avatar.jpg")}
                className="h-[80px] w-[80px] rounded-full "
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
                className="bg-white rounded-full p-1 border"
              >
                <Ionicons
                  name="camera-reverse-outline"
                  size={24}
                  color="black"
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => router.push("/(root)\\updateAccount")}
            >
              <Text className="font-semibold uppercase tracking-wider">
                Update Your Details
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(root)\\updateAccount")}
          >
            <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {/* my activity */}
      <View className="">
        <View className="px-3">
          <Text
            className="font-medium  tracking-widest text-sm"
            style={{
              fontFamily: "Outfit_500Medium",
            }}
          >
            My Activity
          </Text>
        </View>
        <View>
          <View className="px-3">
            <View className="flex-row items-center  border-black/30 border-b py-2">
              <Ionicons name="heart" size={24} color="red" />
              <Text
                style={{
                  fontFamily: "Outfit_400Regular",
                }}
                className="tracking-wide ml-3"
              >
                Wishlist Products
              </Text>
            </View>
            <View className="flex-row items-center  border-black/30 border-b py-2">
              <Ionicons name="cart-sharp" size={24} color="purple" />
              <Text
                style={{
                  fontFamily: "Outfit_400Regular",
                }}
                className="tracking-wide ml-3"
              >
                My Cart
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* other setting */}
      <View className="mt-5">
        <View className="px-3">
          <Text
            className="font-medium  tracking-widest text-sm"
            style={{
              fontFamily: "Outfit_500Medium",
            }}
          >
            Others
          </Text>
        </View>
        <View>
          <View className="px-3">
            <View className="flex-row items-center  border-black/30 border-b py-2">
              <Ionicons name="bag-handle-outline" size={24} color="blue" />
              <Text
                style={{
                  fontFamily: "Outfit_400Regular",
                }}
                className="tracking-wide ml-3"
              >
                Become a Seller
              </Text>
            </View>
            <View className="flex-row items-center  border-black/30 border-b py-2">
              <Ionicons name="settings-outline" size={24} color="gray" />
              <Text
                style={{
                  fontFamily: "Outfit_400Regular",
                }}
                className="tracking-wide ml-3"
              >
                Settings
              </Text>
            </View>
            <View className="flex-row items-center  border-black/30 border-b py-2">
              <Ionicons name="exit" size={24} color="pink" />
              <TouchableOpacity onPress={() => dispatch(logout())}>
                <Text
                  style={{
                    fontFamily: "Outfit_400Regular",
                  }}
                  className="tracking-wide ml-3"
                >
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountPage;
