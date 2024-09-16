import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import LoginSignupModal from "@/components/modals/login-signup";

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>HomePage</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
  },
  innerContainer: {
    flex: 1,
    position: "relative",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    marginTop: "50%", // Center text vertically
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});
