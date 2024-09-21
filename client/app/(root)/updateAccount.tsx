import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBar from "@/components/shared/Statusbar";
import * as ImagePicker from "expo-image-picker";
import { TextInput } from "react-native-paper";
import CTAButton from "@/ui/Button";

const UpdateAccountPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string>("");
  console.log("selected", selectedImage);

  const pickImage = async () => {
    // Request permission to access media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      return;
    }

    // Launch image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar title="Update account" />
      <View className="justify-center flex-row mt-10">
        <TouchableOpacity onPress={pickImage}>
          {selectedImage ? (
            <Image src={selectedImage} className="h-28 w-28 rounded-full" />
          ) : (
            <View>
              <Image
                source={require("../../assets/images/d_avatar.jpg")}
                className="h-28 w-28 rounded-full"
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View>
        <View className="">
          <TextInput
            placeholder="Full Name*"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
            mode="flat"
            style={{
              backgroundColor: "transparent",
            }}
            underlineStyle={{
              backgroundColor: "#0D7C9C",
              height: 1,
            }}
          />
        </View>
      </View>
      <View className="absolute bottom-0 w-full">
        <CTAButton title="Save" customCSS="rounded-none" />
      </View>
    </SafeAreaView>
  );
};

export default UpdateAccountPage;
