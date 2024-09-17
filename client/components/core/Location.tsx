import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import Entypo from "@expo/vector-icons/Entypo";

const UserLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [areaName, setAreaName] = useState<string | null>(null);
  const [areaPincode, setAreaPinCode] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      await getAreaName(loc.coords.latitude, loc.coords.longitude);
    })();
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
    <View>
      {areaName && (
        <View className="p-3 bg-red-500/10 flex-row items-center">
          <Entypo name="location" size={16} color="#9333ea" />
          <Text
            className="ml-2"
            style={{
              fontFamily: "Outfit_300Light",
            }}
          >
            Deliverying to
            <Text className="font-bold">
              {" "}
              {areaName} - {areaPincode}{" "}
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
};

export default UserLocation;
