import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

const UserLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [areaName, setAreaName] = useState<string | null>(null);
  const [areaPincode, setAreaPinCode] = useState<number | null>(null);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    try {
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      await getAreaName(loc.coords.latitude, loc.coords.longitude);
    } catch (error) {
      console.error("Error getting location:", error);
      setErrorMsg("Unable to retrieve location");
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getLocation(); // Fetch location on component mount
  }, []);

  const getAreaName = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      if (data.address.city) {
        setAreaName(data.address.city);
        setAreaPinCode(data.address.postcode);
      } else {
        setAreaName("Area not found");
      }
    } catch (error) {
      console.error("Error fetching area name:", error);
      setAreaName("Unable to retrieve area name");
    }
  };

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location.coords);
  }

  return (
    <>
      {areaName ? (
        <View className="p-3 bg-red-500/10 flex-row items-center">
          <Entypo name="location" size={16} color="#9333ea" />
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => router.push("/(root)/locationpage")}
          >
            <Text
              className="ml-2"
              style={{
                fontFamily: "Outfit_300Light",
              }}
            >
              Delivering to
              <Text className="font-bold">
                {" "}
                {areaName} - {areaPincode}{" "}
              </Text>
            </Text>
          </TouchableOpacity>
          <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
        </View>
      ) : (
        <View className="p-3 bg-red-500/10 flex-row items-center">
          <Entypo name="location" size={16} color="#9333ea" />
          <TouchableOpacity activeOpacity={1} onPress={getLocation}>
            <Text
              className="ml-2"
              style={{
                fontFamily: "Outfit_300Light",
              }}
            >
              Enable Location
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default UserLocation;
