import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Main App component
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to your React Native app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// Styles for the App component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
});
