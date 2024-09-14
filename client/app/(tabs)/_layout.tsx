import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { HeartIcon, HomeIcon, OfferIcon } from "@/constants/Icon";

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: () => <HeartIcon />,
        }}
      />
      <Tabs.Screen
        name="offer"
        options={{ title: "Offers", tabBarIcon: () => <OfferIcon /> }}
      />
      <Tabs.Screen name="cart" options={{ title: "Cart" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
